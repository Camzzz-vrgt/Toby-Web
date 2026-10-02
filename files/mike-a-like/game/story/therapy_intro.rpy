
default timeup2_sound_played = False


default timey = 10
transform therapyclock_transform:
  subpixel True
  on show:
    anchor (0.5,0.5)
    pos (1.2,0.15)
    easein 1 pos (0.85,0.15)
    block:
        linear 1 rotate 2
        linear 1 rotate 0
        linear 1 rotate -2
        linear 1 rotate 0
        repeat

transform therapyclock_skip_transform:
  on show:
    xoffset -20 alpha 0
    easein 0.5 xoffset 0 alpha 1
  on hide:
    xoffset 0 alpha 1
    parallel:
      easeout 0.1 xoffset 20 
    parallel:
      easeout 0.1 alpha 0


transform therapyclock_wiggle_violently:
    subpixel True
    anchor (0.5,0.5)
    pos (0.85,0.15)
    block:
        parallel:
            linear 0.1 rotate 20
            linear 0.1 rotate -20
            repeat
        parallel:
            ease_quad 0.1 yzoom 0.90 xzoom 1.1
            ease_quad 0.1 yzoom 1.0 xzoom 1.0
            repeat
        parallel:
            ease_quad 0.2 matrixcolor TintMatrix("#E26A12")
            ease_quad 0.2 matrixcolor TintMatrix("#ffffff")
            repeat


transform therapyclock_hide_skip:
    subpixel True
    anchor (0.5,0.5)
    pos (0.85,0.15) alpha 1.0
    parallel:
      easeout 0.5 pos (1.2,0.15) xzoom 1.0 yzoom 1.0 matrixcolor TintMatrix("#ffffff") rotate 0
    parallel:
      easeout 0.1 alpha 0.0

transform therapyclock_hide:
    subpixel True
    anchor (0.5,0.5)
    pos (0.85,0.15)
    easeout 0.5 pos (1.2,0.15) xzoom 1.0 yzoom 1.0 matrixcolor TintMatrix("#ffffff") rotate 0

screen therapytimer_skip:
    zorder 100
    textbutton _("I know what I'm doing.") action [Stop("background2"), SetVariable('time_up', True)] style "page_label" xalign 1.05 yalign 0.3 at therapyclock_skip_transform

screen therapy_timer:
    #Play the background ticking sound if not already playing.
    on "show" action If(renpy.music.get_playing(channel="background2") != "audio/sfx/minigames/clock/tickingclock.ogg", Play("background2", "audio/sfx/minigames/clock/tickingclock.ogg", loop=True))

    if persistent.skipbutton:
        use therapytimer_skip

    if time_up:
        # Drop the black "curtain" on top of the still-displayed minigame and then jump once it settles.
        # Add the clock after the curtain to make sure that it renders on top.
        if persistent.skipbutton:
          add "noseclock" pos (0.98, 0.0) at therapyclock_hide_skip
          text "{color=1B377F}0" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at therapyclock_hide_skip
          timer 0.1 action Jump("therapy_intro_2")
        else:
          add "noseclock" pos (0.98, 0.0) at therapyclock_hide
          text "{color=1B377F}0" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at therapyclock_hide
          timer 1 action Jump("therapy_intro_2")

    else:
        #This code decreases variable time by 0.1 until time hits 0, at which point, time_up is set to true and the time_up branch above is hit.
        timer 0.1 repeat True action If(timey > 0, true=SetVariable('timey', timey - 0.1), false=[ Stop("music"), Stop("background2"), SetVariable('time_up', True)])
        $ timed_display = int(timey)+1

        #Play the annoying alarm clock sound when there are 3 seconds left.
        if timey <= 3:
            add "noseclock" pos (0.98, 0.02) at therapyclock_wiggle_violently
            text "{color=1B377F}[timed_display]" size 48 xalign 0.5 yalign 0.5 xoffset 0 yoffset 10 at therapyclock_wiggle_violently
            if timey <= 3 and timey > 2.9 and not timeup2_sound_played:
              timer 0.01 action [SetVariable('timeup2_sound_played', True), Play("sound", "audio/sfx/general/alarmclock_countdown.ogg")]
        else:
            add "noseclock" pos (0.98, 0.02) at therapyclock_transform
            text "{color=1B377F}[timed_display]" size 48 xalign 0.5 yalign 0.5 xoffset 0 yoffset 10 at therapyclock_transform









label therapy_intro:


  pause 3

  play sound "audio/sfx/general/snd_ftext_woodblock.wav"
  queue sound ["<silence 1.1>", "audio/sfx/general/snd_tick_tock.wav"]

  show screen clock(170,350,180,360) 

  pause 5.5
  play sound "audio/sfx/general/snd_whip_throw_only.wav"

  hide screen clock

  pause 2
  hide screen quick_menu
  $ quick_menu = False

  scene black

  camera sprite:
    perspective True
  camera pattern:
    perspective True
  camera bg:
    perspective True

  with scene_change

  pause 2
  $ renpy.run(Skip())
  $ quick_menu = True

  show tv_tile onlayer pattern 


  with dissolve

  pause 1
  play sound ["<silence .1>","audio/sfx/general/snd_ftext_woodblock.wav"]
  show coldplace onlayer bg at bgshow

  pause 2

  play music "audio/sfx/general/w.ogg" volume 0.2 fadein 1.0
    
  #"{b}[The time changes. It is now 6PM.]{/b}"
  #"{b}[You arrive at Tenna’s dressing room/office, which is where he holds his therapy sessions.]{/b}"
  #"{b}[If you obtained a T rank for the dancing minigame, Tenna will already be in the waiting room area, lying on his chaise-longue. If you have two, his nose will still be a bouquet.]{/b}"
  if simonsays_rank == trank:
    play sound "audio/sfx/general/snd_pirouette.wav"
    show tenna twirl onlayer sprite:
        transform_anchor True
        anchor (0.5, 1.0)

        parallel:
            linear 0.2 xzoom -1.0
            linear 0.2 xzoom 1.0
            repeat 3
        parallel:
            xpos -0.2 ypos 1.1
            easein 1.5 xpos 0.45
    pause 1.5
    play sound "audio/sfx/general/snd_wing.wav"
    show tenna cheekhands onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.5, 1.0)
        yzoom 1.0 xzoom 1.0
        xpos 0.4
        parallel:
          block:
              ease_quad 1.5 rotate 2
              ease_quad 1.5 rotate -2
              repeat
        parallel:
          ease 0.2 xzoom 1.02 yzoom 0.98
          ease 0.2 xzoom 1.0 yzoom 1.0

    pause 2
    t "Whew! WHAT a day."
    t "Honestly, everything’s going so well that I might just cancel—"
    $ renpy.clear_retain();
    pause 0.5
    play sound "audio/sfx/general/snd_bump.wav"
    show tenna onchest onlayer sprite:
      anchor (0.5, 1.0)
      xpos 0.4 rotate 0
      ease 0.2 xzoom 1.02 yzoom 0.98
      ease 0.2 xzoom 1.0 yzoom 1.0
    pause 1
    #"{b} [pause]{/b}"
    t "…No."
    $ renpy.clear_retain();
    show tenna onchest onlayer sprite:
      anchor (0.5, 1.0)
      xpos 0.4 rotate 0 xzoom -1.0 xoffset -50
      ease 0.5 xpos 0.43
    pause 0.5
    play sound "audio/sfx/general/snd_noise.wav"
    show tenna norm onlayer sprite:
      anchor (0.5, 1.0) xzoom 1.0 xpos 0.55
      ease 0.2 xzoom 1.02 yzoom 0.98
      ease 0.2 xzoom 1.0 yzoom 1.0
    pause 1
    t "Gotta be my absolute best for tonight’s show!"
    $ renpy.clear_retain();
    pause 0.5
    play sound "audio/sfx/general/snd_wing.wav"
    show tenna whisper onlayer sprite:
      anchor (0.5, 1.0) xzoom 1.0 xpos 0.55
      ease 0.2 xzoom 1.02 yzoom 0.98
      ease 0.2 xzoom 1.0 yzoom 1.0
    pause 1
    t "Hey, Mike."
    t "Why don’t you take a li’l breather before we start our session?"
    $ renpy.clear_retain();
    pause 0.5
    play sound "audio/sfx/general/snd_noise.wav"
    show tenna oops onlayer sprite:
      xoffset 50
      anchor (0.5, 1.0) xzoom 1.0 xpos 0.55
      parallel:
        ease 1 xzoom 1.02 yzoom 0.98
        ease 1 xzoom 1.0 yzoom 1.0
        repeat
      parallel:
        ease 2 rotate -2
        ease 2 rotate 2
        repeat
    pause 0.5
    t "Gotta, heh, blow my nose."
    t "Sorry if I set off your pollen allergies!"
  elif simonsays_rank == crank:
    play sound "audio/sfx/general/footstep1.ogg"
    queue sound ["audio/sfx/general/footstep2.ogg",  "audio/sfx/general/footstep1.ogg", "audio/sfx/general/footstep2.ogg"]
    play audio ["<silence 5.2>", "audio/sfx/general/snd_firework_send.wav"]
    #"{b}[If you obtained a C rank for the dancing minigame, Tenna will curl into his chair. His screen is black, and he won’t move much during the minigame.]{/b}"
    show tenna sad2 onlayer sprite:
      anchor (0.5,1.0)
      ypos 0.5 xzoom -1.0 yzoom 1.0 zoom 0.6
      parallel:
        xpos -0.5
        ease_quad 5 xpos 0.45
      parallel:
        ease 0.5 yoffset 10
        ease 0.5 yoffset 0
        repeat 5


    pause 5

    show tenna sad2 onlayer sprite:
      subpixel True
      anchor (0.5,1.0)
      xpos 0.45 ypos 0.5 xzoom -1.0 yzoom 1.0 zoom 0.6
      ease 2 xzoom -1.05 yzoom 0.95
    pause 1

    t "…"
    $ renpy.clear_retain();
    pause 1
    t "Mike."
    $ renpy.clear_retain();
    play sound ["<silence 1>", "audio/sfx/general/snd_hurt1.wav"]
    show tenna sad2 onlayer sprite:
      subpixel True
      anchor (0.5,1.0)
      xpos 0.45 ypos 0.5 xzoom -1.05 yzoom 0.95 zoom 0.6
      ease 2 xzoom -1.1 yzoom 0.9
    pause 2
    t "Go get ready."
    $ renpy.clear_retain();
    play sound ["<silence 1>", "audio/sfx/general/snd_hurt1.wav"]
    show tenna sad2 onlayer sprite:
      subpixel True
      anchor (0.5,1.0)
      xpos 0.45 ypos 0.5 xzoom -1.1 yzoom 0.9 zoom 0.6
      ease 2 xzoom -1.15 yzoom 0.85
    pause 2
    t "I’ve…"
    pause 0.5
    t "{size=-8}I’m gonna blow off a lot of steam tonight."
  elif simonsays_rank == arank or brank or srank:
    play sound "audio/sfx/general/footstep1.ogg"
    queue sound ["audio/sfx/general/footstep2.ogg"]

    show tenna relieved onlayer sprite:
      parallel:
        xpos -0.3 ypos -1.0
        ease 2 xpos 0.5
      parallel:
        ease 0.2 yoffset 10
        ease 0.2 yoffset 0
        repeat 5
    pause 3
    #"{b}[If you don’t obtain either rank, Tenna will politely sit on the chaise-longue.]{/b}"
    t "Ahhh."
    $ renpy.clear_retain();
    pause 0.5
    play sound "audio/sfx/general/snd_noise.wav"
    show tenna norm onlayer sprite at flipin:
      anchor (0.5,1.0) pos (0.5,1.15)
      block:
        ease 0.2 xzoom 1.02 yzoom 0.98
        ease 0.2 xzoom 1.0 yzoom 1.0
    pause 0.75
    t "Time for me to air out the things that CAN’T go on air!"
    $ renpy.clear_retain();
    pause 0.5
    play sound "audio/sfx/general/snd_wing.wav"
    show tenna think onlayer sprite at flipin:
      anchor (0.5,1.0) pos (0.5,1.15)
    pause 0.5
    t "Running a studio sure does give ya a lotta food for thought…"
    play sound ["<silence 0.1>", "audio/sfx/general/snd_chomp.wav"]
    t "A whole {image=funnytxt_banquet}{alt}banquet{/alt}, even."
    $ renpy.clear_retain();
    pause 1
    play sound "audio/sfx/general/snd_noise.wav"
    #"{b} [pause]{/b}"
    show tenna onchest onlayer sprite at flipin:
      anchor (0.5,1.0) pos (0.5,1.15)
      block:
        ease 0.2 xzoom 1.02 yzoom 0.98
        ease 0.2 xzoom 1.0 yzoom 1.0
    pause 1
    t "Hey. Mike."
    $ renpy.clear_retain();
    play sound "audio/sfx/general/footstep1.ogg"
    show tenna onchest onlayer sprite:
      anchor (0.5,1.0) pos (0.5,1.15)
      ease_quad 1 xpos 0.7
    pause 1.5
    t "Why don’t’cha head to the hall for a bit?"
    t "Get yourself a drink from the watercooler."
    $ renpy.clear_retain();
    pause 0.5
    play sound "audio/sfx/general/snd_wing.wav"
    show tenna point onlayer sprite at flipin:
      anchor (0.5,1.0) pos (0.7,1.15)
      block:
        ease 0.2 xzoom 1.02 yzoom 0.98
        ease 0.2 xzoom 1.0 yzoom 1.0
    pause 0.5
    t "Don't worry, THAT one won’t whack ya around."
    t "Pinky-swear!"
  else:
    "what therapy intro is this?"
  $ renpy.clear_retain();
  pause 1
  hide tenna onlayer sprite with dissolve

  pause 1
  stop music fadeout 1.0
  play sound ["<silence 0.4>","audio/sfx/general/scene_close.ogg"]
  show coldplace onlayer bg at bghide

  pause 3
  hide coldplace onlayer bg 
  play sound ["<silence .1>","audio/sfx/general/snd_ftext_woodblock.wav"]
  play music "audio/sfx/general/w.ogg" volume 0.05 fadein 1.0
  play background "audio/sfx/general/snd_tv_static.wav" loop volume 0.02 fadein 1.0
  show backroom onlayer bg at bgshow

  pause 2

  play sound "audio/sfx/general/snd_leaf_dodge.wav"

  show tenna_note onlayer sprite:
    ypos 1.0
    easein_quad 1 ypos 0.0

  pause 4

  ## a sound plays, and then...


  play sound "audio/sfx/general/paper_hide.ogg"

  show grippins shocked onlayer sprite behind tenna_note:
    anchor (0.5,0.5) zoom 1.5
    xpos 0.5 ypos 0.45 alpha 0.5

  show tenna_note onlayer sprite:
    ypos 0.0
    easein_quad 1 ypos 0.2


  pause 2

  play sound "audio/sfx/general/snd_leaf_dodge.wav"

  show tenna_note onlayer sprite:
    ypos 0.2
    easein_quad 1 ypos 0.0

  pause 0.9

  play sound "audio/sfx/general/snd_grab.wav"

  show tenna_note onlayer sprite:
    ypos 0.0
    easein_quart 0.2 ypos 1.2

  camera sprite:
    perspective True
    zpos 0 
    parallel:
      ease_quart 0.1 zpos 100
    parallel:
      ease 0.05 ypos 10
      ease 0.05 ypos 0
      repeat 2
  camera pattern:
    perspective True
    zpos 0 
    parallel:
      ease_quart 0.1 zpos 100
    parallel:
      ease 0.05 ypos 10
      ease 0.05 ypos 0
      repeat 2
  camera bg:
    perspective True
    zpos 0 
    parallel:
      ease_quart 0.1 zpos 100
    parallel:
      ease 0.05 ypos 10
      ease 0.05 ypos 0
      repeat 2

  pause 2

  camera sprite:
    perspective True
    ease 0.05 yoffset -10
    ease 0.05 yoffset 0
    ease 0.05 yoffset -10
    ease 0.05 yoffset 0
  camera bg:
    perspective True
    ease 0.05 yoffset -10
    ease 0.05 yoffset 0
    ease 0.05 yoffset -10
    ease 0.05 yoffset 0
  camera pattern:
    perspective True
    ease 0.05 yoffset -10
    ease 0.05 yoffset 0
    ease 0.05 yoffset -10
    ease 0.05 yoffset 0


  play sound "audio/sfx/general/snd_impact.wav"
  show grippins explain annoyed onlayer sprite:
      mesh True
      anchor (0.5,0.5) zoom 1.5
      xpos 0.5 ypos 0.45 alpha 0.5

  pause 0.5

  g "Don't ask why I'm in your brain right now!!"

  g "I'm just here to tell ya what to do. Capiche?"

  $ renpy.clear_retain();
  pause 1

  camera sprite:
    perspective True
    zpos 100
    ease 1 zpos 0 
  camera pattern:
    perspective True
    zpos 100
    ease 1 zpos 0 
  camera bg:
    perspective True
    zpos 100
    ease 1 zpos 0 





  pause 1.5
  play sound ["<silence 0.5>", "audio/sfx/general/snd_firework_send.wav"]

  show grippins resigned onlayer sprite:
    anchor (0.5,1.0) zoom 1.5 xpos 0.5 ypos 1.6 alpha 0.5 yoffset -20
    block:
      xzoom 1.0 yzoom 1.0
      ease 0.5 xzoom 0.95 yzoom 1.05
      ease 2 xzoom 1.05 yzoom 0.95


  pause 4
  play sound "audio/sfx/general/snd_wing.wav"
  show grippins explain onlayer sprite at small_bounce:
    anchor (0.5,0.5) zoom 1.5 xzoom 1.0 yzoom 1.0 yoffset 0
    xpos 0.5 ypos 0.45 alpha 0.5

  pause 0.5
  g "You're looking at the Tenna notes I gave ya, right?"
  g "They're there for a reason."
  g "You're gonna need to handle his psychology while you’re on the clock."
  $ renpy.clear_retain();
  pause 0.5
  play sound "audio/sfx/general/snd_noise.wav"
  show grippins sidesmirk onlayer sprite:
    anchor (0.5,1.0) zoom 1.5 xpos 0.5 ypos 1.6 alpha 0.5
    block:
      ease 0.2 yzoom 0.98 xzoom 1.02
      ease 0.2 xzoom 1. yzoom 1.0
  pause 0.5
  g "Not to call myself a bona-fide Mr. 'Ant' Tenna expert, but…"
  g "…today’ll probably be his talk therapy."
  $ renpy.clear_retain();
  pause 1
  play sound "audio/sfx/general/snd_bump.wav"
  show grippins surprised onlayer sprite at small_bounce:
    anchor (0.5,1.0) zoom 1.5 xpos 0.5 ypos 1.6 alpha 0.5
  pause 1
  play sound "audio/sfx/general/snd_wing.wav"
  show grippins explain annoyed onlayer sprite:
    anchor (0.5,1.0) zoom 1.5 xpos 0.5 ypos 1.6 alpha 0.5
    mesh True
  pause 0.5

  g "What?"
  g "Being his shrink ain't THAT hard."
  $ renpy.clear_retain();
  play sound "audio/sfx/general/snd_noise.wav"
  show grippins sidesmirk onlayer sprite:
    anchor (0.5,1.0) zoom 1.5 xpos 0.5 ypos 1.6 alpha 0.5
  pause 0.5
  g "Just give my notes a once-over, and you're in business."
  $ renpy.clear_retain();
  pause 1
  play sound "audio/sfx/general/snd_wing.wav"
  show grippins explain onlayer sprite
  pause 0.5
  g "Oh, and one more thing."
  g "When ya therapize the big guy…"
  g "{color=#960811}…tell him what he WANTS to hear."
  $ renpy.clear_retain();
  play sound "audio/sfx/general/snd_noise.wav"
  show grippins worried onlayer sprite:
    anchor (0.5,1.0) zoom 1.5 xpos 0.5 ypos 1.6 alpha 0.5
    block:
      ease 0.2 yzoom 0.98 xzoom 1.02
      ease 0.2 xzoom 1. yzoom 1.0
  pause 1
  g "Otherwise, uh…"
  $ renpy.clear_retain();
  pause 1
  play sound "audio/sfx/general/snd_wing.wav"
  show grippins frontsmirk onlayer sprite:
    xoffset -30
  pause 1
  g "Well, let's put it this way."
  g "Happy Tenna? Sane studio."
  $ renpy.clear_retain();
  pause 1
  hide grippins onlayer sprite 
  hide screen quick_menu
  $ quick_menu = False  

  with dissolve


  pause 2
  play sound "audio/sfx/general/snd_leaf_dodge.wav"
  show tenna_note onlayer sprite:
    ypos 1.2
    easein_quad 1.0 ypos 0.0


  call screen therapy_timer


  label therapy_intro_2:

    play sound "audio/sfx/general/paper_hide.ogg"
    show tenna_note onlayer sprite:
      ypos 0.0
      easeout_quad 0.5 ypos 1.2

    #"{b}If T Rank on prev minigame{/b}" ""
    if simonsays_rank == trank:
      t "{size=+12}Oh, Mike!!"
      t "{size=+8}Ready to rock n’ roll?"
      $ renpy.clear_retain();
    #"{b}If C Rank on prev minigame{/b}" ""
    elif simonsays_rank == crank:
      t "…Mike?"
      t "Are you still there?"
      $ renpy.clear_retain();
    #"{b}If most ranks{/b}" ""
    elif simonsays_rank == arank or brank or srank:
      t "{size=+8}Mike!"
      t "You ready?"
      $ renpy.clear_retain();
    else:
      "no tenna comment"

    pause 2
    hide tenna_note onlayer sprite

    stop music fadeout 1.0
    stop background fadeout 1.0
    play sound ["<silence 0.4>","audio/sfx/general/scene_close.ogg"]
    show backroom onlayer bg at bghide

    pause 1
    hide backroom onlayer bg 
    hide screen quick_menu
    $ quick_menu = False
    play music "audio/sfx/general/w.ogg" volume 0.2 fadein 1.0
    pause 0.5

    #"{b}[You walk back in, and the therapy minigame begins with you plopped on the therapist’s chair, notebook in hand. Tenna is opposite you in the chaise-longue, hands on chest and thinking.]{/b}"
    if simonsays_rank == trank:
      show therapy_bg onlayer bg 
      show therapytenna pleased onlayer sprite:
        anchor (0.75,1.0) pos(0.75, 1.0)
      camera sprite:
        zpos -200 ypos -100 xpos 100
      camera bg:
        zpos -200 ypos -100 xpos 100
      play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
      with doorslam_therapy
      play sound "audio/sfx/general/snd_squeaky.wav"
      show therapytenna pleased onlayer sprite:
        anchor (0.75,1.0) pos(0.75, 1.0)
        ease 0.2 xzoom 1.02 yzoom 0.98
        ease 0.2 xzoom 1.0 yzoom 1.0
      pause 1
      t "Perfect!"
      t "Let’s get chatting."
      $ renpy.clear_retain();
      camera sprite:
        zpos -200 ypos -100 xpos 100
        ease 2 xpos 0 ypos 0 zpos 0
      camera bg:
        ease 2 xpos 0 ypos 0 zpos 0
      pause 3
    elif simonsays_rank == crank:
    #"{b}If C Rank on prev minigame{/b}" ""
      show therapy_bg onlayer bg 
      show therapytenna blank onlayer sprite:
        anchor (0.75,1.0) pos(0.75, 1.0)
      camera sprite:
        zpos -200 ypos -100 xpos 100
      camera bg:
        zpos -200 ypos -100 xpos 100
      play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
      with doorslam_therapy
      pause 1
      t "{size=-4}I'll pull myself together."
      t "{size=-4}Just start the session."
      $ renpy.clear_retain();
      camera sprite:
        zpos -200 ypos -100 xpos 100
        ease 2 xpos 0 ypos 0 zpos 0
      camera bg:
        ease 2 xpos 0 ypos 0 zpos 0
      pause 3
    elif simonsays_rank == arank or brank or srank:
      camera sprite:
        zpos -200 ypos -100 xpos 100
      camera bg:
        zpos -200 ypos -100 xpos 100

      show therapy_bg onlayer bg 
      show therapytenna happy onlayer sprite:
        anchor (0.75,1.0) pos(0.75, 1.0)
      play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
      with doorslam_therapy


      t "Great!"
      $ renpy.clear_retain();
      play sound "audio/sfx/general/snd_bump.wav"
      show therapytenna thinking onlayer sprite:
        anchor (0.75,1.0) pos(0.75, 1.0)
        ease 0.2 xzoom 1.02 yzoom 0.98
        ease 0.2 xzoom 1.0 yzoom 1.0
      pause 0.5
      t "Then… lemme sit back and think."
      $ renpy.clear_retain();
      show therapytenna thinking onlayer sprite:
        anchor (0.75,1.0) pos(0.75, 1.0)
      camera sprite:
        zpos -200 ypos -100 xpos 100
        ease 2 xpos 0 ypos 0 zpos 0
      camera bg:
        ease 2 xpos 0 ypos 0 zpos 0
      pause 3
    else:
      "again no tenna comment"


    jump therapy