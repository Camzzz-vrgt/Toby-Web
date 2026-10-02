label pre_simonsays:

  pause 3

  play sound "audio/sfx/general/snd_ftext_woodblock.wav"
  queue sound ["<silence 1.1>", "audio/sfx/general/snd_tick_tock.wav"]
  show screen clock(350,350,360,360) 

  pause 5.5
  play sound "audio/sfx/general/snd_whip_throw_only.wav"
  hide screen clock

#"{b}[The time changes. It is now 12pm]{/b}"

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

  show weather_tile onlayer pattern 
  $ renpy.run(Skip())
  $ quick_menu = True
  with dissolve

  with dissolve

  pause 1
  show stage onlayer bg at bgshow
  play sound ["<silence .1>","audio/sfx/general/snd_ftext_woodblock.wav"]
  pause 1.5
  play sound "audio/sfx/general/footstep1.ogg"
  queue sound ["audio/sfx/general/footstep2.ogg"]
  show lanino backstand onlayer sprite:
      parallel:
        xpos -1.0 ypos -0.2
        ease 2 xpos 0.1
      parallel:
        ease 0.2 yoffset 0
        ease 0.2 yoffset 10
        repeat 5
  show elnina backstand onlayer sprite:
      parallel:
        xpos 1.2 ypos -0.2
        ease 2 xpos 0.1 
      parallel:
        ease 0.2 yoffset 0
        ease 0.2 yoffset 10
        repeat 5

  pause 2.5
  play music "audio/music/paradiseparadise.ogg" fadein 1.0 
  show elnina onlayer sprite:
    xpos 0.1 yoffset 10
  show lanino backstand onlayer sprite:
    xpos 0.1 yoffset 10
  e "Ah, THERE you are!"
  play sound "audio/sfx/general/snd_bump.wav"
  show lanino backstand worried onlayer sprite at small_bounce
  l "Dewdrop and I were waiting here for HOURS."
  play sound "audio/sfx/general/snd_bump.wav"
  show elnina backstand worried onlayer sprite at small_bounce
  $ renpy.clear_retain();
  pause 1
  e "Darling."
  $ renpy.clear_retain();
  camera bg:
      perspective True
      xpos 50 ypos -100 zpos -200
  camera pattern:
      perspective True
      xpos 50 ypos -100 zpos -200
  camera sprite:
      perspective True
      xpos 50 ypos -100 zpos -200
  pause 0.5
  e "Dearest."
  $ renpy.clear_retain();
  camera bg:
      perspective True
      xpos 100 ypos -100 zpos -300
  camera pattern:
      perspective True
      xpos 100 ypos -100 zpos -300
  camera sprite:
      perspective True
      xpos 100 ypos -100 zpos -300
  pause 0.5
  e "YOU were the one who said we had to come early."
  $ renpy.clear_retain();
  camera bg:
      perspective True
      xpos 100 ypos -100 zpos -300
      ease 0.5 xpos -100 ypos -125 zpos -350
  camera pattern:
      perspective True
      xpos 100 ypos -100 zpos -300
      ease 0.5 xpos -100 ypos -125 zpos -350
  camera sprite:
      perspective True
      xpos 100 ypos -100 zpos -300
      ease 0.5 xpos -100 ypos -125 zpos -350
  pause 0.5
  camera bg:
      perspective True
      xpos -100 ypos -125 zpos -350
  camera pattern:
      perspective True
      xpos -100 ypos -125 zpos -350
  camera sprite:
      perspective True
      xpos -100 ypos -125 zpos -350
  pause 0.1
  play sound "audio/sfx/general/snd_noise.wav"
  show lanino faceaway onlayer sprite at small_bounce
  l "Not THREE HOURS early!"
  t "{size=+12}AHEM."
  $ renpy.clear_retain();
  play sound "audio/sfx/general/snd_bump.wav"
  show lanino backstand worried onlayer sprite at small_bounce
  pause 0.75
  camera bg:
      perspective True
      xpos 100 ypos -100 zpos -300
  camera pattern:
      perspective True
      xpos 100 ypos -100 zpos -300
  camera sprite:
      perspective True
      xpos 100 ypos -100 zpos -300
  play sound "audio/sfx/general/snd_bump.wav"
  show elnina backstand worried onlayer sprite at small_bounce:
    xzoom -1.0 xoffset 150
  pause 1
  camera bg:
      perspective True
      xpos 0 ypos 0 zpos 0
  camera pattern:
      perspective True
      xpos 0 ypos 0 zpos 0
  camera sprite:
      perspective True
      xpos 0 ypos 0 zpos 0
  pause 0.25
  play sound "audio/sfx/general/footstep1.ogg"
  queue sound ["audio/sfx/general/footstep2.ogg"]
  show lanino backstand worried onlayer sprite:
    parallel:
      xpos 0.1
      ease 2 xpos -0.2
    parallel:
      ease 0.5 yoffset 0
      ease 0.5 yoffset 10
      repeat 2
  show elnina backstand worried onlayer sprite:
    parallel:
      xpos 0.1
      ease 2 xpos -0.2
    parallel:
      ease 0.5 yoffset 10
      ease 0.5 yoffset 0
      repeat 2

  pause 2
  play sound "audio/sfx/general/snd_slidewhistle.wav"
  show tenna norm onlayer sprite:
    xpos 1.3 ypos -1.75
    ease 2 xpos 0.65
  pause 2
  show stage onlayer bg:
    xoffset 0
    easein_quad 1 xoffset 100
  camera bg:
      perspective True
      xpos 0 ypos 0 zpos 0
      easein_quad 1 xpos 100 ypos -400 zpos 0
  camera pattern:
      perspective True
      xpos 0 ypos 0 zpos 0
      easein_quad 1 xpos 100 ypos -400 zpos 0
  camera sprite:
      perspective True
      xpos 0 ypos 0 zpos 0
      easein_quad 1 xpos 100 ypos -400 zpos 0

  pause 0.75

  show stage onlayer bg:
    yoffset 0 xoffset 100
    easein_quad 1 xoffset 100 yoffset -400

  pause 1

  show stage onlayer bg:
    xoffset 100 yoffset -400

  t "I’d LOVE to chat more, but time’s a-ticking!"
  play sound "audio/sfx/general/snd_wing.wav"
  show tenna point onlayer sprite at flipin behind elnina:
    xanchor 0.5 xoffset 230
  pause 0.5
  t "We have to rehearse your dance number for tonight’s episode, remember?"
  $ renpy.clear_retain();
  camera bg:
      perspective True
      xpos 100 ypos -400 zpos 0
      easein_quad 1 xpos 0 ypos 0 zpos 0
  camera pattern:
      perspective True
      xpos 100 ypos -400 zpos 0
      easein_quad 1 xpos 0 ypos 0 zpos 0
  camera sprite:
      perspective True
      xpos 100 ypos -400 zpos 0
      easein_quad 1 xpos 0 ypos 0 zpos 0
  show stage onlayer bg:
    easein_quad 1 xoffset 0 yoffset 0
  pause 1
  play sound "audio/sfx/general/footstep1.ogg"
  show elnina backstand happy onlayer sprite:
    parallel:
      xoffset 150
      ease 1 xoffset 250
    parallel:
      ease 0.25 yoffset 0
      ease 0.25 yoffset 10
      repeat 2
  pause 1
  e "Yes, the dance, the dance!"
  $ renpy.clear_retain();
  play sound "audio/sfx/general/snd_noise.wav"
  queue sound ["<silence 0.7>", "audio/sfx/general/snd_wing.wav"]
  show elnina backstand happy onlayer sprite at flipin:
    xanchor 0.5 xzoom 1.0 xoffset 400
  pause 0.5
  show lanino backstand happy onlayer sprite at small_bounce
  pause 1
  l "We’ll get into position right away."
  l "Anything for those sky-high ratings!"
  $ renpy.clear_retain();
  camera bg:
      perspective True
      xpos 0 ypos 0 zpos 0
      easein_quad 1 xpos 100 ypos -400 zpos 0
  camera pattern:
      perspective True
      xpos 0 ypos 0 zpos 0
      easein_quad 1 xpos 100 ypos -400 zpos 0
  camera sprite:
      perspective True
      xpos 0 ypos 0 zpos 0
      easein_quad 1 xpos 100 ypos -400 zpos 0
  show stage onlayer bg:
    easein_quad 1 xoffset 100 yoffset -400
  play sound "audio/sfx/general/snd_wing.wav"

  show tenna norm onlayer sprite at flipin:
    xoffset 0 xpos 0.65
  pause 1
  play sound "audio/sfx/general/snd_ftext_vibraphones.wav"
  t "{image=funnytxt_marvelous}{alt}Marvelous{/alt}, you two!"
  t "No wonder you’re both my second-in-command."
  $ renpy.clear_retain();
  play sound "audio/sfx/general/snd_noise.wav"
  show lanino backstand happy onlayer sprite at small_bounce:
    xanchor 0.5 xoffset 200 xzoom -1.0
  pause 0.5
  play sound "audio/sfx/general/footstep1.ogg"
  queue sound ["audio/sfx/general/footstep2.ogg"]
  show lanino backstand happy onlayer sprite:
    parallel:
      xoffset 200
      ease 2 xoffset -100
    parallel:
      ease 0.25 yoffset 0
      ease 0.25 yoffset 10
      repeat 4
  show elnina backstand happy onlayer sprite:
    parallel:
      xoffset 400
      ease 2 xoffset -100
    parallel:
      ease 0.25 yoffset 0
      ease 0.25 yoffset 10
      repeat 4
  pause 2
  camera bg:
      perspective True
      xpos 100 ypos -400 zpos 0
      easein_quad 1 xpos 150 ypos -500 zpos -100
  camera pattern:
      perspective True
      xpos 100 ypos -400 zpos 0
      easein_quad 1 xpos 150 ypos -500 zpos -100
  camera sprite:
      perspective True
      xpos 100 ypos -400 zpos 0
      easein_quad 1 xpos 150 ypos -500 zpos -100
  pause 1
  hide lanino onlayer sprite
  hide elnina onlayer sprite
  #"{b} [Tenna moves up to you to talk one on one while Lanino and Elnina take their places on stage.]{/b}"
  t "Now, Mike."
  t "I forgot to bring this up earlier, but…"
  $ renpy.clear_retain();
  play audio "audio/sfx/general/snd_squeaky.wav"
  show tenna oops onlayer sprite:
    anchor (0.5,1.0) xoffset 300 ypos 0.3
    block:
      ease 0.2 xzoom 1.02 yzoom 0.98
      ease 0.2 xzoom 1.0 yzoom 1.0
  pause 1
  t "I have a meeting in five."
  $ renpy.clear_retain();
  show tenna oops onlayer sprite:
    transform_anchor True
    subpixel True
    anchor (0.5,1.0) ypos 0.3
    block:
      ease_quad 1 rotate -4
      ease_quad 1 rotate 0
      repeat
  pause 0.5
  if nosegame_rank == trank:
    t "The censors called me back in the T-Rank Room, and, uhm…"
  else:
    t "The censors called me while we were making our rounds, and, uhm…"
  t "…I can’t exactly opt out?"
  $ renpy.clear_retain();
  #"{b} [Whispering sprite]{/b}"
  play sound "audio/sfx/general/snd_noise.wav"
  show tenna whisper onlayer sprite:
    transform_anchor True
    xanchor 0.5 yanchor 1.0 ypos 0.3 xoffset 175
    block:
      ease 0.2 xzoom 1.02 yzoom 0.98
      ease 0.2 xzoom 1.0 yzoom 1.0
  pause 0.5
  t "{i}(Guess I’m all outta sick days.){/i}"
  $ renpy.clear_retain();
  pause 0.5
  play sound "audio/sfx/general/snd_wing.wav"
  show tenna point onlayer sprite at flipin:
    xoffset 250 ypos 0.35
    ease 0.5 ypos 0.3
  pause 1
  t "So, what YOU’RE gonna do is direct the dance FOR me!"
  t "While I’m in the meeting, I’ll send you the moves."
  t "And YOU’LL repeat them to Lanino and Elnina."
  $ renpy.clear_retain();
  play sound "audio/sfx/general/snd_noise.wav"
  show tenna think onlayer sprite:
    transform_anchor True
    xanchor 0.5 yanchor 1.0 ypos 0.3 xoffset 260
    block:
      ease 0.2 xzoom 1.02 yzoom 0.98
      ease 0.2 xzoom 1.0 yzoom 1.0
  pause 0.5
  play sound ["<silence 0.3>", "audio/sfx/general/snd_musicbox_trill.ogg"]
  t "Think of it like… a good ol’ game of {image=funnytxt_simonsays}{alt}Simon Says{/alt}."
  $ renpy.clear_retain();
  pause 0.5
  play sound "audio/sfx/general/snd_wing.wav"
  show tenna norm onlayer sprite:
    transform_anchor True
    xanchor 0.5 yanchor 1.0 ypos 0.3 xoffset 260
    block:
      ease 0.2 xzoom 1.01 yzoom 0.99
      ease 0.2 xzoom 1.0 yzoom 1.0
  pause 0.5
  t "Simple, right?"
  $ renpy.clear_retain();
  pause 0.5
  play sound ["<silence 0.2>", "audio/sfx/general/snd_sonar.wav"]
  play audio "audio/sfx/general/snd_noise.wav"
  show tenna call spark onlayer sprite:
    block:
      ease 0.2 xzoom 1.02 yzoom 0.98
      ease 0.2 xzoom 1.0 yzoom 1.0
  pause 1.5
  #"{b} [Tenna’s beeper goes off.]{/b}"
  t "Oh, now I’ve REALLY gotta go!"
  t "Toodles!"
  play sound "audio/sfx/general/whoosh.ogg"
  $ renpy.clear_retain();
  show tenna call -spark onlayer sprite:
    parallel:
      xoffset 260 
      ease 1 xoffset -500
    parallel:
      easein 0.1 yoffset 10
      easein 0.1 yoffset 0
      repeat
  pause 2
  play sound ["<silence 0.4>","audio/sfx/general/scene_close.ogg"]
  show stage onlayer bg at bghide

  pause 2
  camera bg:
      perspective True
      xpos 0 ypos 0 zpos 0
  camera pattern:
      perspective True
      xpos 0 ypos 0 zpos 0
  camera sprite:
      perspective True
      xpos 0 ypos 0 zpos 0
  hide weather_tile onlayer pattern
  hide tenna onlayer sprite
  hide stage onlayer bg
  stop music fadeout 1.0
  hide screen quick_menu
  $ quick_menu = False  
  with fade
  pause 2
  #"{b} [This is where the Simon Says minigame starts.]{/b}"
  jump simon_says