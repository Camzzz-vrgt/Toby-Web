
transform fade_in_text2(time=1, distance=20):
    subpixel True
    on show:
        alpha 0 xoffset distance
        pause 3
        easein_cubic time alpha 1 xoffset 0
    on hide:
        alpha 1 xoffset 0
        easeout_cubic time alpha 0 xoffset -distance



screen epilogue_intro_text():
        text "{size=-8}And that’s how your time as Mike\ncame to an end." at fade_in_text align (0.5, 0.45) textalign(0.5) style "results_subtext"
        text "{size=-8}What happened next?" at fade_in_text2 align (0.5, 0.6) textalign(0.5) style "results_subtext"





label endingbranch:

    play sound "audio/sfx/general/snd_clown_song.wav"
    show nextday_text "9 hours later":
        rotate -10

    pause 1.5

    $ quick_menu = True
    with dissolve


    if c_rank_end_get == True:
        hide nextday_text
        z "{size=+4}Up and at ‘em!"
        #"{b}[You get whacked on the side of the head, and you’re back in the Mike room — where Mippins is sitting and stroking Cat Mike on his lap again.{/b}"
        #"{b}You look around, confused — because weren’t you in the T-Rank room last night?]{/b}"
        play sound "audio/sfx/general/snd_wideslash_low.wav"
        $ renpy.clear_retain();
        show layer bg at unkilled_color
        scene black
        camera sprite:
            perspective True
            ypos -100 zpos -300
        camera bg:
            perspective True
            ypos -100 zpos -300
        camera pattern:
            perspective True
            ypos -100 zpos -300
        show dice_tile onlayer pattern
        show mikeroom onlayer bg at unkilled_color:
            zoom 0.5
        show chair onlayer sprite
        show grippins surprised onlayer sprite
        show desk onlayer sprite
        show pluey annoyed onlayer sprite
        with flashon
        pause 1
        g "…"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show grippins explain annoyed at small_bounce onlayer sprite
        pause 0.5
        #"{b}[pause as Mippins breathes in, before they YELL at you]{/b}"
        g "{size=+4}What the HELL did ya do?!"
        $ renpy.clear_retain();
        camera sprite:
            perspective True
            ypos -100 zpos -300
            ease 2 ypos 0 zpos 0
        camera bg:
            perspective True
            ypos -100 zpos -300
            ease 2 ypos 0 zpos 0
        camera pattern:
            perspective True
            ypos -100 zpos -300
            ease 2 ypos 0 zpos 0
        pause 2.5
        camera sprite:
            perspective True
            ypos 0 zpos 0
        camera bg:
            perspective True
            ypos 0 zpos 0
        camera pattern:
            perspective True
            ypos 0 zpos 0
        play music "audio/music/vol_adj_intro.ogg" fadein 1.0 
        $ renpy.music.queue("audio/music/vol_adj_body.ogg", clear_queue=False)
        g "I walk out for a…"
        g "…no, LESS than a day."
        g "And I?"
        g "Come Back??"
        play sound "audio/sfx/general/snd_impact.wav"
        camera sprite:
            perspective True
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0
        camera bg:
            perspective True
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0
        camera pattern:
            perspective True
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0
        show grippins sideangry at small_bounce onlayer sprite 
        show pluey resigned onlayer sprite
        g "{size=+4}TO THIS???"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_grab.wav"
        play audio "audio/sfx/general/snd_whip_crack_only.wav"
        show graffiti_room onlayer sprite behind grippins:
            xalign 0.1 yalign -0.9
            easein_bounce 0.5 yalign 0.0
        show screen happy_meter("left") with easeinleft
        pause 1
        play sound "audio/sfx/general/snd_impact.wav"
        show grippins frontangry at small_bounce onlayer sprite
        pause 0.5
        #"{b}[The HAPPY HAPPY Meter is shown, and it is LOW.]{/b}"
        g "Ya just HAD to make my life SO much easier, huh?!"
        $ renpy.clear_retain();
        pause 0.5
        hide screen happy_meter with easeoutleft
        play sound ["<silence 0.5>", "audio/sfx/general/snd_firework_send.wav"]
        show grippins resigned onlayer sprite:
            subpixel True
            anchor (0.5,1.0)
            block:
              xzoom 1.0 yzoom 1.0
              ease 0.5 xzoom 0.95 yzoom 1.05
              ease 3 xzoom 1.05 yzoom 0.95
        pause 1
        g "Now I have to BABYSIT Tenna so that he doesn’t get GLOOBY!!"
        g "{size=-4}And then there’s managing the staff, prepping for TODAY’S episode, assessing water cooler damages…"
        g "OoooOOOooh, the chores NEVER END in this goddamn studio!"
        $ renpy.clear_retain();
        camera sprite:
            perspective True
            ypos 0 zpos 0
            ease 1 ypos -50 zpos -300
        camera bg:
            perspective True
            ypos 0 zpos 0
            ease 1 ypos -50 zpos -300
        camera pattern:
            perspective True
            ypos 0 zpos 0
            ease 1 ypos -50 zpos -300
        pause 1
        play sound "audio/sfx/general/snd_wing.wav"
        show grippins explain annoyed onlayer sprite at small_bounce:
            anchor (0.5,1.0)
            block:
              xzoom 1.05 yzoom 0.95
              easein_elastic 1 xzoom 1 yzoom 1
        show pluey annoyed onlayer sprite
        pause 0.5
        g "So guess WHAT?"
        g "You can kiss your GODDAMN casino dream goodbye!!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_impact.wav"
        camera sprite:
            perspective True
            ypos -75 zpos -325
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0


        camera bg:
            perspective True
            ypos -75 zpos -325
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0

        camera pattern:
            perspective True
            ypos -75 zpos -325
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0

        show grippins frontangry onlayer sprite at small_bounce
        pause 0.5
        g "{size=+8}NOW GET OUT!!!"
        #"[{b}The door slams shut.] {/b}  "
        $ renpy.clear_retain();
        stop music
        hide grippins onlayer sprite
        hide pluey onlayer sprite
        hide chair onlayer sprite
        hide desk onlayer sprite
        hide dice_tile onlayer pattern
        hide screen happy_meter
        hide mikeroom onlayer bg
        hide graffiti_room onlayer sprite
        play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]

        with doorslam_slow
        jump epilogueintro
        #"{u}{b}[Go to Rank C epilogue]{/b}{/u}"
    elif t_rank_end_get == True:
        hide nextday_text
        z "Wakey wakey."
        z "It’s a beautiful new day."
        #"{b}[You gently wake up, and you’re back in the Mike room — where Mippins is sitting and stroking Cat Mike on his lap again.{/b}"
        #"{b}You look around, confused — because weren’t you in the T-Rank room last night?]{/b}"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wideslash_low.wav"
        scene black
        camera sprite:
            perspective True
            ypos -100 zpos -300
        camera bg:
            perspective True
            ypos -100 zpos -300
        camera pattern:
            perspective True
            ypos -100 zpos -300
        show dice_tile onlayer pattern
        show mikeroom onlayer bg:
            zoom 0.5
        show chair onlayer sprite
        show grippins surprised onlayer sprite
        show desk onlayer sprite
        show pluey normal onlayer sprite
        with flashon
        pause 2
        play music "audio/music/vol_adj_intro.ogg" fadein 1.0 
        $ renpy.music.queue("audio/music/vol_adj_body.ogg", clear_queue=False)
        show grippins nervous onlayer sprite
        g "…So, uh."
        g "…Ya slept well?"
        $ renpy.clear_retain();
        camera sprite:
            perspective True
            ypos -100 zpos -300
            ease 2 ypos 0 zpos 0
        camera bg:
            ypos -100 zpos -300
            ease 2 ypos 0 zpos 0
        camera pattern:
            ypos -100 zpos -300
            ease 2 ypos 0 zpos 0
        pause 3
        show pluey concerned onlayer sprite
        #"{b}[pause]{/b}"
        g "We had to bring ya back here…"
        g "…'cause you were conked out in the T-Rank room."
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_wing.wav"
        show grippins shocked at small_bounce onlayer sprite
        show pluey happy onlayer sprite
        pause 0.5
        g "Though even if Tenna DID find ya…"
        #"{b}[Mippins looks a little uncomfortable]{/b}"
        g "…I think he’d probably let ya sleep on his couch."
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_bump.wav"
        show grippins shy onlayer sprite:
            yoffset 0
            ease 0.2 yoffset 5
            ease 0.2 yoffset 0
        pause 0.5
        show pluey annoyed onlayer sprite
        g "{size=-4}Not that I'd MIND."
        $ renpy.clear_retain();
        pause 1
        play audio ["<silence 0.5>", "audio/sfx/general/snd_firework_send.wav"]
        show grippins resigned onlayer sprite:
            subpixel True
            anchor (0.5,1.0)
            block:
              xzoom 1.0 yzoom 1.0
              ease 0.5 xzoom 0.95 yzoom 1.05
              ease 2 xzoom 1.05 yzoom 0.95
        pause 2
        show pluey normal onlayer sprite
        #"{b}[pause]{/b}"
        g "Anyways."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_whip_crack_only.wav"
        show screen happy_meter("left") with easeinleft
        pause 1
        show pluey happy onlayer sprite
        g "Ya did well."
        #"{b}[The HAPPY HAPPY Meter is shown, and it is HIGH.]{/b}"
        g "Like, REALLY well."
        g "And I'm a die of my word, so…"
        show pluey happy onlayer sprite
        g "{size=-4}You’ll get the casino protections AND an under-the-table bonus from me."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_whip_throw_only.wav"
        hide screen happy_meter with easeoutleft
        pause 0.5
        play sound "audio/sfx/general/snd_wing.wav"
        show grippins nervous onlayer sprite:
            anchor (0.5,1.0)
            block:
              xzoom 1.05 yzoom 0.95
              easein_elastic 1 xzoom 1 yzoom 1
        pause 1
        show pluey annoyed onlayer sprite
        g "Just… lemme handle the Mike thing again?"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_bump.wav"
        show grippins shy onlayer sprite:
            yoffset 0
            ease 0.2 yoffset 5
            ease 0.2 yoffset 0
        pause 0.5
        g "{size=-4}'cause if you keep taking my place, I won't get to massage Tenna any—"
        play sound "audio/sfx/general/snd_noise.wav"
        show pluey normal onlayer sprite
        show grippins shocked onlayer sprite:
            yoffset 0
            ease 0.1 yoffset 10
            ease 0.1 yoffset 0
        #"{b}[They look sheepish]{/b}"
        g "What"
        g "Who said that"
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_bump.wav"
        show grippins sidesmirk onlayer sprite:
            subpixel True
            block:
                ease 0.1 xoffset 0
                ease 0.1 xoffset 2
                repeat
        pause 1
        g "Must’ve… been the cliff winds."
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_wing.wav"
        show zapper normal onlayer sprite:
            xoffset -25 yoffset -200
            easein 0.5 yoffset 200
        pause 0.5
        z "But boss, there ain’t any winds—"
        show grippins sidesmirk onlayer sprite:
            anchor (0.5,1.0)

        show pluey annoyed onlayer sprite
        g "{size=-4}Okaywe'redonenowgetout"
        $ renpy.clear_retain();
        play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
        hide grippins onlayer sprite
        hide pluey onlayer sprite
        hide zapper onlayer sprite
        stop music
        hide chair onlayer sprite
        hide desk onlayer sprite
        hide dice_tile onlayer pattern
        hide screen happy_meter
        hide mikeroom onlayer bg

        with doorslam_slow
        #"[{b}The door slams shut.] {/b}  "
        jump epilogueintro
        #"{u}{b}[Go to Rank T epilogue]{/b}{/u}"
    elif t_rank_end_get or c_rank_end_get != True:
        hide nextday_text
        z "{size=+4}Mornin’, Sleeping Beauty!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wideslash_low.wav"
        scene black
        camera sprite:
            perspective True
            ypos -100 zpos -300
        camera bg:
            perspective True
            ypos -100 zpos -300
        camera pattern:
            perspective True
            ypos -100 zpos -300
        show dice_tile onlayer pattern
        show mikeroom onlayer bg:
            zoom 0.5
        show chair onlayer sprite
        show grippins surprised onlayer sprite
        show desk onlayer sprite
        show pluey resigned onlayer sprite
        with flashon
        pause 2
        play music "audio/music/vol_adj_intro.ogg" fadein 1.0 
        $ renpy.music.queue("audio/music/vol_adj_body.ogg", clear_queue=False)
        play sound "audio/sfx/general/snd_wing.wav"
        show grippins explain annoyed onlayer sprite
        pause 0.5
        g "What’s with the look?"
        $ renpy.clear_retain();
        camera sprite:
            perspective True
            ypos -100 zpos -300
            ease 2 ypos 0 zpos 0
        camera bg:
            ypos -100 zpos -300
            ease 2 ypos 0 zpos 0
        camera pattern:
            ypos -100 zpos -300
            ease 2 ypos 0 zpos 0
        pause 2
        show pluey annoyed onlayer sprite
        g "We had to CARRY ya back to our room!"
        g "If we hadn't, Tenna would’ve busted ya."
        if s_rank_end_get == True:
            #"        {b}[show happy happy meter]{/b}"
            $ renpy.clear_retain();
            play sound ["<silence .25>","audio/sfx/general/snd_whip_crack_only.wav"]
            show screen happy_meter("left") with easeinleft
            pause 0.5
            play sound "audio/sfx/general/snd_bump.wav"
            show grippins nervous onlayer sprite:
                yoffset 0
                ease 0.1 yoffset 5
                ease 0.1 yoffset 0
            show pluey happy onlayer sprite
            pause 1

            g "{size=-4}Though, now that I take a look at the HAPPY HAPPY METER…"
            show pluey happy onlayer sprite
            g "{size=-4}Ya must’ve made yesterday real good for him, huh?"
            #"    {b} [pause]{/b}"
            $ renpy.clear_retain();
            pause 0.5
            play sound "audio/sfx/general/snd_whip_throw_only.wav"
            hide screen happy_meter with easeoutleft
            pause 0.5
            play sound "audio/sfx/general/snd_wing.wav"
            show grippins sidesmirk onlayer sprite
            show pluey happy onlayer sprite
            pause 0.5
            g "Well, a promise’s a promise."
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_noise.wav"
            show grippins frontsmirk onlayer sprite
            pause 0.5
            g "Go blast your POINTS on the roulette or poker or whatever."
            g "Your casino secret's safe with me."
            $ renpy.clear_retain();
            pause 0.5
            play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
            hide grippins onlayer sprite
            hide pluey onlayer sprite
            hide chair onlayer sprite
            hide desk onlayer sprite
            hide dice_tile onlayer pattern
            hide screen happy_meter
            stop music
            hide mikeroom onlayer bg

            with doorslam_slow
            jump epilogueintro
            #"{b}     [Go to Rank S epilogue]{/b}"
        elif a_rank_end_get == True:
        #"{u}{b}  If you got Rank A{/b}{/u}" ""
            show grippins nervous onlayer sprite
            g "And speaking of Tenna…"
            $ renpy.clear_retain();
            play sound ["<silence .25>","audio/sfx/general/snd_whip_crack_only.wav"]
            show screen happy_meter("left") with easeinleft
            #"        {b}[show happy happy meter]{/b}"
            pause 0.5
            play sound "audio/sfx/general/snd_bump.wav"
            show grippins shocked at small_bounce onlayer sprite
            pause 1
            play sound "audio/sfx/general/snd_wing.wav"
            show grippins explain annoyed onlayer sprite
            show pluey annoyed onlayer sprite
            pause 0.5
            g "Hey, is the meter working?"
            g "I swear it was like this BEFORE I gave it to you."
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_whip_throw_only.wav"
            hide screen happy_meter with easeoutleft
            pause 0.5
            show grippins resigned onlayer sprite
            show pluey happy onlayer sprite
            g "…Whatever."
            g "As long as his nose isn’t twisted up."
            $ renpy.clear_retain();
            pause 1
            play sound "audio/sfx/general/snd_noise.wav"
            show grippins explain onlayer sprite at small_bounce
            show pluey normal onlayer sprite
            pause 0.5
            g "Anyway, your job’s done."
            g "I’ll think about the casino thing."
            $ renpy.clear_retain();
            pause 0.5
            play sound ["<silence 0.5>", "audio/sfx/general/snd_firework_send.wav"]
            show grippins resigned onlayer sprite:
                subpixel True
                anchor (0.5,1.0)
                block:
                  xzoom 1.0 yzoom 1.0
                  ease 0.5 xzoom 0.95 yzoom 1.05
                  ease 2 xzoom 1.05 yzoom 0.95
            pause 1
            g "Just…"
            g "…leave and pretend this never happened."
            $ renpy.clear_retain();
            pause 0.5
            play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
            hide grippins onlayer sprite
            hide pluey onlayer sprite
            hide chair onlayer sprite
            hide desk onlayer sprite
            stop music
            hide dice_tile onlayer pattern
            hide screen happy_meter
            hide mikeroom onlayer bg

            with doorslam_slow
            #"{b}     [Go to Rank A epilogue]{/b}"
            jump epilogueintro
        #"{u}{b}  If you got Rank B{/b}{/u}" ""
        elif b_rank_end_get == True:
            show grippins explain onlayer sprite
            show pluey resigned onlayer sprite
            g "Good thing, too, ‘cause ya really phoned it in."
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_impact.wav"
            show grippins sideangry onlayer sprite at small_bounce
            pause 0.5
            g "Look!"
            $ renpy.clear_retain();
            play sound ["<silence .25>","audio/sfx/general/snd_whip_crack_only.wav"]
            play sound "audio/sfx/general/snd_whip_crack_only.wav"
            show screen happy_meter("left") with easeinleft
            pause 0.5
            show pluey annoyed onlayer sprite
            g "The meter’s LOWER than usual!"
            $ renpy.clear_retain();
            pause 0.5
            play sound "audio/sfx/general/snd_wing.wav"
            show grippins explain annoyed onlayer sprite
            show pluey concerned onlayer sprite
            pause 0.5
            #"    {b} [Depending on which minigame you got the lowest rank/score on will determine what Mippins says here]{/b}"
            g "Is kissing Tenna’s ass THAT hard?"
            g "The boss's ego is like glass. Fragile!"
            #"    {b} [pause]{/b}
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_whip_throw_only.wav"
            hide screen happy_meter with easeoutleft
            pause 1
            show grippins resigned onlayer sprite
            show pluey resigned onlayer sprite
            g "Remind me to NEVER work with you again."
            g "And don’t ask about the casino."
            g "The only thing YOU'RE getting is a nothing sandwich."
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_wing.wav"
            show grippins explain annoyed onlayer sprite
            show pluey annoyed onlayer sprite
            pause 0.5
            g "Now GET OUT."
            $ renpy.clear_retain();
            play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
            hide grippins onlayer sprite
            hide pluey onlayer sprite
            hide chair onlayer sprite
            hide desk onlayer sprite
            stop music
            hide dice_tile onlayer pattern
            hide screen happy_meter
            hide mikeroom onlayer bg

            with doorslam_slow
            jump epilogueintro
            #"        {u}{b}[Go to Rank B epilogue]{/b}{/u}"
        else:
            "you shouldn't get this line of dialogue"
    else: 
        "you didn't get any ranking. this shouldn't happen"

    ######[This is for the Mike reunion scene, where they summarize how well you did.]

    label epilogueintro:
        hide screen quick_menu
        $ quick_menu = False
        with dissolve
        camera sprite:
            perspective True
            zpos 0 xpos 0 ypos 0
        camera bg:
            perspective True
            zpos 0 xpos 0 ypos 0
        camera pattern:
            perspective True
            zpos 0 xpos 0 ypos 0
        play sound ["audio/sfx/general/snd_mercyadd.wav", "<silence 2.2>", "audio/sfx/general/snd_mercyadd.wav"]
        show screen epilogue_intro_text()

        pause 8

        hide screen epilogue_intro_text

        pause 3


        if t_rank_end_get == True:
            jump t_rank_end
        elif s_rank_end_get == True:
            jump s_rank_end
        elif a_rank_end_get == True:
            jump a_rank_end
        elif b_rank_end_get == True:
            jump b_rank_end
        elif c_rank_end_get == True:
            jump c_rank_end
        else:
            "what ending is this lol. this is an error."




#####  BELOW is the final script for the ending scene with the green pippins



return