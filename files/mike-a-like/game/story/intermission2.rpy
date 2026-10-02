
default intermission2_scenarios_count =  3 #tracks # of scenarios left for confronting within game
default intermission2_score = 0 ## intermission 1 score. if 0, then next minigame gets harder. if 1-2, nothing changes. if 3, next minigame gets easier.
default intermission2_scenarios = ["s6", "s7", "s8", "s9", "s10"] 
default intermission2_praises = ["TV World's never looked sharper!{w=0.5} Guess you don't need glasses.", "Someone gives you a pat on the back…{w=0.5} but who?", "Huh?{w=0.5} Are the screens in the hallway blowing kisses at you?", "You hear tap shoes click-{w=0.2}click-{w=0.2}clicking down the hall…", "Woah!{w=0.5} Those statues are SHINY today."]
default intermission2_scolds = ["TV World's looking fuzzy…{w=0.5} Time for an optometrist visit?", "You feel your sins crawl on your back…{w=0.5} but why?", "The stanchions blow wet raspberries at you.", "You hear the clicking of tap shoes…{w=0.5} and the squelching of old slime.", "Is it just you,{w=0.2} or did those statues get duller?"]



init python:
####### function that randomly collects a scenario from the bank of scenarios
    def getRandomScenario2():
        global intermission2_scenarios # intermission 1 scenarios list
        
        return renpy.random.choice(intermission2_scenarios)

    def removeScenario(scenario2):
            intermission2_scenarios.discard(scenario2)
            return


label intermission2:
  $ renpy.stop_skipping()
  hide screen quick_menu
  $ quick_menu = False

  stop music fadeout 3.0

  pause 2
  play sound "audio/sfx/general/snd_ftext_woodblock.wav"
  queue sound ["<silence 1.1>", "audio/sfx/general/snd_tick_tock.wav"]
  show screen clock(80,350,90,360) 

  pause 5.5

  play sound "audio/sfx/general/snd_whip_throw_only.wav"

  hide screen clock

  pause 3


  show screen nvl_quickmenu()
  nvl clear
  if persistent.skipbutton == True:
    show screen skip_intermission("intermission2_game")



  play music "audio/music/tvworld.ogg" fadein 1.0 

  show tvworld_5:
    xpos 0.0 ypos 68
  if trank_tracker ==2 and simonsays_rank == trank:
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    show tenna_huge behind intermission_frame:
      xpos 30 ypos 86
    show mike_pixel behind intermission_frame:
        xpos 200 ypos 170
        xzoom -1.0
  elif simonsays_rank == trank and trank_tracker == 1:
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    show tenna_big behind intermission_frame:
      xpos 102 ypos 86
    show mike_pixel behind intermission_frame:
        xpos 200 ypos 170
        xzoom -1.0
  show intermission_frame
  show intermission_backframe

  with wipedown

  $ renpy.pause(1, hard=True)

  show tvworld_5:
    xpos 0.0 ypos 68
    linear 3 xpos 0.1
  if trank_tracker ==2 and simonsays_rank == trank:
    show tenna_huge behind intermission_frame:
      xpos 30 ypos 86
      linear 3 xpos 110
    show mike_pixel behind intermission_frame:
        xpos 200 ypos 170 xzoom -1.0
        linear 3 xpos 280
    $ renpy.pause(2, hard=True)
  elif simonsays_rank == trank and trank_tracker == 1:
    show tenna_big behind intermission_frame:
      xpos 102 ypos 86
      linear 3 xpos 182
    show mike_pixel behind intermission_frame:
        xpos 200 ypos 170 xzoom -1.0
        linear 3 xpos 280
    $ renpy.pause(2, hard=True)


  if crank_tracker == 2:

    $ renpy.pause(4, hard=True)
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    show mikesadtenna_pixel behind intermission_frame:
        xpos 175 ypos 170
        linear 1 xpos 300  
  elif simonsays_rank == trank or crank_tracker == 2 or trank_tracker ==2:
      pass
  elif simonsays_rank == arank or brank or srank:
    $ renpy.pause(4, hard=True)
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    show mike_pixel behind intermission_frame:
        xpos 175 ypos 170
        linear 1 xpos 300
    $ renpy.pause(2, hard=True)

  if simonsays_rank == crank and crank_tracker == 1:
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    show tennasmall_pixel:
      xpos 175 ypos 190
      linear 3 xpos 250
    $ renpy.pause(3, hard=True)
  elif simonsays_rank == trank or crank_tracker == 2 or trank_tracker ==2:
      $ renpy.pause(2, hard=True)
      pass
  elif simonsays_rank == arank or brank or srank:
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      show tenna_pixel behind intermission_frame:
          xpos 175 ypos 65
          linear 1 xpos 400
          pause 1
          xzoom -1.0

      $ renpy.pause(3, hard=True)

  #  "{b}[The time changes. It is now 3PM.{/b}"
  #  "{b}Again in the pixel art style You and Tenna go outside of the stage room.]{/b}"
  #  "{b}[If C-Rank obtained, Tenna is noticeably sadder and smaller, with a rumpled tailcoat. If this is the second c rank, he will also have the twisted nose.]{/b}"
  #  "{b}[if second C rank obtained]{/b}" ""
  if crank_tracker == 2 and simonsays_rank == crank:
    #  "{b}  [pause]{/b}"
      t_nvl "{color=F26282}Tenna:{/color} …"
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      nvl clear
      $ renpy.pause(1, hard=True)
    #  "  {b}[pause]{/b}"
      t_nvl "{color=F26282}Tenna:{/color} The censors squished me like a bug, Mike."
    #  "  {b}[pause]{/b}"
      t_nvl "{color=F26282}Tenna:{/color} Like my life was as valuable as a…"
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    #  "{b}  [pause]{/b}"
      $ renpy.pause(1, hard=True)
      nvl clear
      t_nvl "{color=F26282}Tenna:{/color} …"
      t_nvl "{color=F26282}Tenna:{/color} Forget it."
      nvl clear
      t_nvl "{color=F26282}Tenna:{/color} Just… do your afternoon rounds."
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      nvl clear
      $ renpy.pause(1, hard=True)


      show mikesadtenna_pixel behind intermission_frame:
          xpos 300 ypos 170
          linear 3 xpos 725

      $ renpy.pause(4, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      $ renpy.pause(1, hard=True)
      jump intermission2_game
  elif simonsays_rank == crank and crank_tracker == 1:
      $ renpy.pause(1, hard=True)
    #  "{b}[if first C rank obtained]{/b}" ""
      t_nvl "{color=F26282}Tenna:{/color} The censors trampled me."
      t_nvl "{color=F26282}Tenna:{/color} Like… like my life was as valuable as a SUMMER ANT!!"
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      nvl clear
      $ renpy.pause(1, hard=True)

      show tennasmall_pixel:
        xpos 250 ypos 190
        linear 1 xpos 260

      $ renpy.pause(2, hard=True)
      t_nvl "{color=F26282}Tenna:{/color} But Mike… you don’t feel that way about me, do ya?"
      t_nvl "{color=F26282}Tenna:{/color} …Do ya?"
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      nvl clear
      $ renpy.pause(2, hard=True)
      show tennasmall_pixel behind mike_pixel:
        xpos 260 ypos 190
        linear 3 xpos 400
      $ renpy.pause(4, hard=True)
      t_nvl "{color=F26282}Tenna:{/color} You know what? Nevermind."
      t_nvl "{color=F26282}Tenna:{/color} Just… do your afternoon rounds."
      nvl clear
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      $ renpy.pause(1, hard=True)
      show tennasmall_pixel behind intermission_frame:
        xpos 400 ypos 190
        linear 5 xpos 725

      $ renpy.pause(5, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      $ renpy.pause(1, hard=True)

      show mike_pixel behind intermission_frame:
          xpos 300 ypos 170
          linear 3 xpos 725

      $ renpy.pause(4, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      $ renpy.pause(1, hard=True)

      jump intermission2_game


  elif trank_tracker == 2 and simonsays_rank == trank:
    #  "{b}[If T-Rank obtained, — Tenna can’t fit through the stage door]{/b}" ""
    #  "{b}  [If second T rank obtained, Tenna has a bouquet of flowers on his nose versus the single flower.]{/b}"
      t_nvl "{color=F26282}Tenna:{/color} Whoopsie! I got a little TOO excited again~{size=+1}♡{/size}"
      t_nvl "{color=F26282}Tenna:{/color} Lanino! Elnina! Could you, heh, yank me out?"
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      nvl clear
      $ renpy.pause(1, hard=True)
      t_nvl "{color=F26282}Tenna:{/color} Oh, and Mike… Wonderful, WONDERFUL Mike!"
      t_nvl "{color=F26282}Tenna:{/color} If you could, ha ha, handle the afternoon rounds…"
      nvl clear
      t_nvl "{color=F26282}Tenna:{/color} Take a little tour around the studio…"
      t_nvl "{color=F26282}Tenna:{/color} Check my employees…"
      nvl clear
      t_nvl "{color=F26282}Tenna:{/color} …I think ya know the drill."
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      nvl clear
      $ renpy.pause(1, hard=True)
      t_nvl "{color=F26282}Tenna:{/color} You’re gonna do a marvelous job!"
      t_nvl "{color=F26282}Tenna:{/color} See you in a few hours!!"
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      nvl clear
      $ renpy.pause(1, hard=True)

      show mike_pixel behind intermission_frame:
          xpos 280 ypos 170
          pause 1
          xzoom 1.0
          linear 3 xpos 725

      $ renpy.pause(4, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      $ renpy.pause(1, hard=True)

      jump intermission2_game
  elif simonsays_rank == trank and trank_tracker == 1:
    #  "{b}  [If first T rank obtained]{/b}"
      t_nvl "{color=F26282}Tenna:{/color} Oh~{size=+1}♡!{/size}"
      t_nvl "{color=F26282}Tenna:{/color} Well. THIS is embarrassing."
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      nvl clear
      $ renpy.pause(1, hard=True)
      t_nvl "{color=F26282}Tenna:{/color} Elnina! Lanino!"
      t_nvl "{color=F26282}Tenna:{/color} I need a li'l help getting through the door…"
      nvl clear
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      $ renpy.pause(1, hard=True)
      t_nvl "{color=F26282}Tenna:{/color} Oh, and Mike? Go ahead with the afternoon rounds."
      t_nvl "{color=F26282}Tenna:{/color} I'll use my TV MAGIC to keep an eye on you…"
      nvl clear
      t_nvl "{color=F26282}Tenna:{/color} …so I’ll be with you in spirit!"
      t_nvl "{color=F26282}Tenna:{/color} You’re gonna do GREAT! See you in a few hours!"
      play sound "audio/sfx/general/snd_board_text_main_end.ogg"
      nvl clear
      $ renpy.pause(1, hard=True)


      show mike_pixel behind intermission_frame:
          xpos 280 ypos 170
          pause 1
          xzoom 1.0
          linear 3 xpos 725

      $ renpy.pause(4, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      $ renpy.pause(1, hard=True)


      jump intermission2_game


  elif simonsays_rank == arank or brank or srank:
   # "{b}Else{/b}" ""
    t_nvl "{color=F26282}Tenna:{/color} And THAT’S rehearsal done!"
    t_nvl "{color=F26282}Tenna:{/color} We should be all set for tonight’s show."
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    $ renpy.pause(1, hard=True)
    nvl clear
    show tenna_pixel behind intermission_frame:
        xpos 400 ypos 65 xzoom 1.0
        linear 0.5 xpos 480
    $ renpy.pause(1, hard=True)
   # "  {b}[pause]{/b}"
    t_nvl "{color=F26282}Tenna:{/color} Now for some good ol’ afternoon rounds."
    t_nvl "{color=F26282}Tenna:{/color} As always, lemme know if something bugs ya."
    t_nvl "{color=F26282}Tenna:{/color} It takes two to make TV World copacetic!"
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    $ renpy.pause(1, hard=True)

    show tenna_pixel behind intermission_frame:
        xpos 480 ypos 65
        linear 0.75 xpos 725
    $ renpy.pause(1, hard=True)
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    $ renpy.pause(1, hard=True)

    show mike_pixel behind intermission_frame:
        xpos 300 ypos 170
        linear 3 xpos 725

    $ renpy.pause(3, hard=True)
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    $ renpy.pause(1, hard=True)

    jump intermission2_game
  else:
    t "again i should not get this"

label intermission2_game:

  if persistent.skipbutton == True:
    hide screen skip_intermission

  hide tvworld_5
  if crank_tracker == 2 and simonsays_rank == crank:
    hide mikesadtenna_pixel
  elif simonsays_rank == crank and crank_tracker == 1:
    hide tennasmall_pixel
  elif trank_tracker == 2 and simonsays_rank == trank:
    hide tenna_huge
  elif simonsays_rank == trank and trank_tracker == 1:
    hide tenna_big
  elif simonsays_rank == arank or brank or srank:
    hide tenna_pixel
  
  if crank_tracker != 2:
    hide mike_pixel

  with wipeleft
  pause 2

  show tvworld_fullrooms at tvworld_loop behind intermission_frame
  if crank_tracker == 2 and simonsays_rank == crank:
    show mikesadtenna_pixel behind intermission_frame
  elif simonsays_rank == crank and crank_tracker == 1:
    show tennasmall_pixel behind intermission_frame
  elif simonsays_rank == trank or trank_tracker  == 2:
    show pixelblank behind intermission_frame
  elif simonsays_rank == arank or brank or srank:
    show tenna_pixel behind intermission_frame

  if crank_tracker != 2:
    show mike_pixel behind intermission_frame

  with wipeleft

  jump intermission2_gameloop

  label intermission2_gameloop:
    $ shuffle = True

    while intermission2_scenarios_count > 0:
      jump expression getRandomScenario2()

    pause 3

    hide tvworld_fullrooms behind intermission_frame
    hide mike_pixel behind intermission_frame
    hide tenna_pixel behind intermission_frame
    hide tennasmall_pixel behind intermission_frame
    hide pixelblank behind intermission_frame
    hide mikesadtenna_pixel
    hide screen nvl_quickmenu
    hide intermission_frame
    hide intermission_backframe
    $ shuffle = False
    with wipedown

  #### RESULTS SCREEN
    $ renpy.pause(2, hard=True)


    if simonsays_rank == trank or trank_tracker == 2:
      show mike_pixel:
          xpos -0.15 ypos 0.5 yoffset 104
          linear 2 xpos 0.45 ypos 0.5 yoffset 104

    elif crank_tracker == 2 and simonsays_rank == crank:
      show mikesadtenna_pixel:
          xpos -0.15 ypos 0.5 yoffset 104
          linear 2 xpos 0.45 ypos 0.5 yoffset 104


    else:

      show mike_pixel:
          xpos -0.3 ypos 0.5 yoffset 104
          linear 2 xpos 0.35 ypos 0.5 yoffset 104

      if simonsays_rank == crank:
        show tennasmall_pixel:
            xpos -0.15 ypos 0.713
            linear 2 xpos 0.5 ypos 0.713

      else:
        show tenna_pixel:
            xpos -0.2 ypos 0.5
            linear 2 xpos 0.45 ypos 0.5





    pause 1.5
    play sound "audio/sfx/general/snd_board_text_main_end.wav" 
    show intermission_results "Intermission Results"
    pause 1.5
    play sound "audio/sfx/general/snd_board_text_main_end.wav" 
    show intermission_score "Intermission Score: [intermission2_score]/3"
    pause 1.5

    if intermission2_score ==3:
      play sound "audio/sfx/general/snd_link_sfx_itemget.wav" 
      show intermission_score_comment "{color=F26282}This next task's gonna be a cinch!{/color}"
    elif intermission2_score ==0:
      play sound "audio/sfx/general/snd_link_sfx_itemget_bad.wav" 
      show intermission_score_comment "{color=147ABF}This next task's gonna be a pain…{/color}"
    elif 0<intermission2_score <3:
      play sound "audio/sfx/general/snd_board_text_main_end.wav" 
      show intermission_score_comment "Onto the next task!"
    else:
      "this should not show up"

    pause 4


    if simonsays_rank == trank or trank_tracker == 2:
      show mike_pixel:
          xpos 0.45 ypos 0.5 yoffset 104
          linear 2 xpos 1.15 ypos 0.5 yoffset 104
    elif crank_tracker ==2 and simonsays_rank == crank:
      show mikesadtenna_pixel:
          xpos 0.45 ypos 0.5 yoffset 104
          linear 2 xpos 1.15 ypos 0.5 yoffset 104

    else:
      show mike_pixel:
          xpos 0.35 ypos 0.5 yoffset 104
          linear 2 xpos 1.15

      if simonsays_rank == crank:
        show tennasmall_pixel:
          xpos 0.5 ypos 0.713
          linear 2 xpos 1.3

      else:
        show tenna_pixel:
          xpos 0.45 ypos 0.5
          linear 2 xpos 1.25


    pause 3
    stop music fadeout 3.0

    hide intermission_results
    hide intermission_score
    hide intermission_score_comment
    hide mike_pixel
    hide tenna_pixel
    hide tennasmall_pixel
    hide mikesadtenna_pixel

    with wipedown

    jump therapy_intro


#### INTERMISSION SCENARIOS

label s6:
  $ renpy.pause(5, hard=True)
  play sound "audio/sfx/general/snd_nes_nocontroller.wav" 
  show screen quiz_time()

  pause 1
  play sound "audio/sfx/general/snd_board_splash.wav" 

  hide screen quiz_time

  nvl clear

  show encounter_frame 

  show pippins_pixel:
      xpos 290 ypos 125
  show pippins_pixel as pippins2:
      xpos 365 ypos 125
  show pippins_pixel as pippins3:
      xpos 440 ypos 125


  with wipedown


  pause 0.3


  n_nvl "Somehow, a bunch of Pippinses have found Tenna’s BONUS ZONE."

  n_nvl "If you don’t stop them, they’ll gamble his POINTS away!"

  n_nvl "What do you do?"


  $ intermission_choice_ypos = 0.85
  $ intermission_choice_spacing = -75
  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"

  menu (nvl=True):
    extend ""
    ">Block the BONUS ZONE door.":
      jump s6_good
    ">What BONUS ZONE?":
      jump s6_bad


  label s6_good:
    nvl clear
    $ intermission2_score += 1
    pause 1
    $ randompraise_intermission2 = renpy.random.choice(intermission2_praises)
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    n_nvl "{color=F26282}[randompraise_intermission2]"
    nvl clear
    jump s6_end
  label s6_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission2 = renpy.random.choice(intermission2_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission2]"
    nvl clear
    jump s6_end

  label s6_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 

    hide pippins_pixel
    hide pippins2
    hide pippins3
    hide encounter_frame
    with wipedown

    pause 0.3 

    $ intermission2_scenarios_count -= 1
    $ intermission2_scenarios.remove("s6")
    jump intermission2_gameloop

label s7:

  $ renpy.pause(5, hard=True)
  play sound "audio/sfx/general/snd_nes_nocontroller.wav" 
  show screen quiz_time()

  pause 1
  play sound "audio/sfx/general/snd_board_splash.wav" 

  hide screen quiz_time

  nvl clear

  show encounter_frame 


  show shadowguy_pixel as shadowguy2:
      xpos 270 ypos 121  
  show shadowguy_pixel:
      xpos 345 ypos 121
  show shadowguy_pixel as shadowguy3:
      xpos 420 ypos 121  


  with wipedown


  pause 0.3

  n_nvl "A bunch of Shadowguys are making a beeline for the stage…"

  n_nvl "But they can’t perform during office hours!"

  n_nvl "What do you do?"

  
  $ intermission_choice_ypos = 0.85
  $ intermission_choice_spacing = -75

  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"

  menu (nvl=True):
    extend ""
    ">Shove them back in their cubicles":
      jump s7_good
    ">Whatever. Rock n' Roll Time!":
      jump s7_bad

  label s7_good:
    nvl clear
    $ intermission2_score += 1
    pause 1
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    $ randompraise_intermission2 = renpy.random.choice(intermission2_praises)
    n_nvl "{color=F26282}[randompraise_intermission2]"
    nvl clear
    jump s7_end
  label s7_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission2 = renpy.random.choice(intermission2_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission2]"
    nvl clear
    jump s7_end

  label s7_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 

    hide shadowguy_pixel
    hide shadowguy2
    hide shadowguy3
    hide encounter_frame
    with wipedown

    pause 0.3 
    $ intermission2_scenarios_count -= 1
    $ intermission2_scenarios.remove("s7")
    jump intermission2_gameloop

label s8:

  $ renpy.pause(5, hard=True)
  play sound "audio/sfx/general/snd_nes_nocontroller.wav" 
  show screen quiz_time()

  pause 1
  play sound "audio/sfx/general/snd_board_splash.wav" 

  hide screen quiz_time

  nvl clear

  show encounter_frame 

  show shuttah_pixel:
      xpos 345 ypos 118

  show uglytenna_2:
      xpos 310 ypos 125


  with wipedown


  pause 0.3

  if simonsays_rank == trank or trank_tracker == 2:
    n_nvl "Somehow, a Shuttah got a photo of Tenna at the stage entrance… and it's HIDEOUS!"
  else:
    n_nvl "A Shuttah snaps a photo of Tenna, but the angle’s HIDEOUS!"
  n_nvl "You snatch it away, but the offensive shot is now in your hands."

  n_nvl "What do you do?"

  if simonsays_rank == trank or trank_tracker == 2:
    $ intermission_choice_ypos = 0.91
  else:
    $ intermission_choice_ypos = 0.86
  $ intermission_choice_spacing = -75
  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"

  menu (nvl=True):
    extend ""
    ">Shred the photo":
      jump s8_good
    ">Save it for future blackmail":
      jump s8_bad


  label s8_good:
    nvl clear
    $ intermission2_score += 1
    pause 1
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    $ randompraise_intermission2 = renpy.random.choice(intermission2_praises)
    n_nvl "{color=F26282}[randompraise_intermission2]"
    nvl clear
    jump s8_end
  label s8_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission2 = renpy.random.choice(intermission2_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission2]"
    nvl clear
    jump s8_end

  label s8_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 

    hide shuttah_pixel
    hide uglytenna_2
    hide encounter_frame
    with wipedown
    pause 0.3 
    $ intermission2_scenarios_count -= 1
    $ intermission2_scenarios.remove("s8")
    jump intermission2_gameloop

label s9:
  $ renpy.pause(5, hard=True)
  play sound "audio/sfx/general/snd_nes_nocontroller.wav" 
  show screen quiz_time()

  pause 1
  play sound "audio/sfx/general/snd_board_splash.wav" 

  hide screen quiz_time

  nvl clear

  show encounter_frame 

  show ramb_pixel:
      xpos 360 ypos 124


  with wipedown


  pause 0.3

  n_nvl "Ramb got out of the bar again."

  n_nvl "What do you do?"


  $ intermission_choice_ypos = 0.75
  $ intermission_choice_spacing = -100
  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"

  menu (nvl=True):
    extend ""
    ">Put that plug back where he came from (or so help me)":
      jump s9_good
    ">Let him roam around":
      jump s9_bad

  label s9_good:
    nvl clear
    $ intermission2_score += 1
    pause 1
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    $ randompraise_intermission2 = renpy.random.choice(intermission2_praises)
    n_nvl "{color=F26282}[randompraise_intermission2]"
    nvl clear
    jump s9_end
  label s9_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission2 = renpy.random.choice(intermission2_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission2]"
    nvl clear
    jump s9_end

  label s9_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 
    hide ramb_pixel
    hide encounter_frame
    with wipedown
    pause 0.3
    $ intermission2_scenarios_count -= 1
    $ intermission2_scenarios.remove("s9")
    jump intermission2_gameloop

label s10:
  $ renpy.pause(5, hard=True)
  play sound "audio/sfx/general/snd_nes_nocontroller.wav" 
  show screen quiz_time()

  pause 1
  play sound "audio/sfx/general/snd_board_splash.wav" 

  hide screen quiz_time

  nvl clear

  show encounter_frame 

  show zapper_pixel:
      xpos 355 ypos 100


  with wipedown


  pause 0.3

  n_nvl "Oh no… A Zapper’s about to enter an OFF-LIMITS area."
  if trank_tracker == 2 or simonsays_rank == trank:
    n_nvl "If Tenna learns about this, he'll blow a fuse!"
  else:
    n_nvl "If Tenna sees this, he'll blow a fuse!"
  n_nvl "What do you do?"

  $ intermission_choice_ypos = 0.83
  $ intermission_choice_spacing = -75
  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"

  menu (nvl=True):
    extend ""
    ">Send them packing":
      jump s10_good
    ">Ignore them":
      jump s10_bad


  label s10_good:
    nvl clear
    $ intermission2_score += 1
    pause 1
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    $ randompraise_intermission2 = renpy.random.choice(intermission2_praises)
    n_nvl "{color=F26282}[randompraise_intermission2]"
    nvl clear
    jump s10_end
  label s10_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission2 = renpy.random.choice(intermission2_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission2]"
    nvl clear
    jump s10_end

  label s10_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 
    hide zapper_pixel
    hide encounter_frame
    with wipedown
    pause 0.3
    $ intermission2_scenarios_count -= 1
    $ intermission2_scenarios.remove("s10")
    jump intermission2_gameloop

