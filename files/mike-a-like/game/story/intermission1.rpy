### VARIABLES

default intermission1_scenarios_count =  3 #tracks # of scenarios left for confronting within game
default intermission1_score = 0 ## intermission 1 score. if 0, then next minigame gets harder. if 1-2, nothing changes. if 3, next minigame gets easier.
default intermission1_scenarios = ["s1", "s2", "s3", "s4", "s5"] 
default intermission1_praises = ["One of the stanchions winks at you…{w=0.5} in its own Tenna way.", "Hey…{w=0.5} Is someone humming the TV Time theme song?", "Somehow,{w=0.2} TV World looks brighter than usual…{w=0.5} Or is it all of the lights?", "Wait…{w=0.5} Is someone skipping through the halls?", "You fight the urge to design a new poster for TV Time."]
default intermission1_scolds = ["Huh…?{w=0.5} Is that a squelching sound?", "For a second,{w=0.2} you swear your vision's filled with static.", "What's that obnoxious whine?{w=0.5} Where's it coming from?", "The smiles in the hallway look more menacing than they usually do.", "You fight the urge to rip one of Tenna's posters apart."]


### a random variable that shows a praise or scold phrase depending on whether the player listens to Tenna's orders or not.
# $ randompraise_intermission1 = renpy.random.choice(intermission1_praises)
# $ randomscold_intermission1 = renpy.random.choice(intermission1_scolds)

init python:
####### function that randomly collects a scenario from the bank of scenarios
    def getRandomScenario():
        global intermission1_scenarios # intermission 1 scenarios list
        
        return renpy.random.choice(intermission1_scenarios)

    def removeScenario(scenario):
            intermission1_scenarios.discard(scenario)
            return


label intermission1:
  $ renpy.stop_skipping()

  stop music fadeout 3.0

  pause 3

  play sound "audio/sfx/general/snd_ftext_woodblock.wav"
  queue sound ["<silence 1.1>", "audio/sfx/general/snd_tick_tock.wav"]
  show screen clock(260,350,270,360) 

  pause 5.5

  play sound "audio/sfx/general/snd_whip_throw_only.wav"

  hide screen clock

  pause 3

  show screen nvl_quickmenu()
  hide screen quick_menu
  $ quick_menu = False

  if persistent.skipbutton == True:
    show screen skip_intermission("intermission1_game")

  show trank_screen
  show trank_room_closed
  show tvpose_tile behind trank_room_closed
  show intermission_frame
  show intermission_backframe

  play music "audio/music/rolypoly.ogg" fadein 1.0 

  show trank_screen:
      xpos 0.6
  show trank_room_open behind intermission_frame:
      xpos 0.0 ypos 68

  if nosegame_rank == trank:
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      show tennadark_big behind intermission_frame
      show mikedark_pixel behind intermission_frame:
          xpos 350 ypos 170
          linear 1 xpos 420
          pause 1
          xzoom -1.0

  with wipedown

  $ renpy.pause(2, hard=True)


  if nosegame_rank != trank:
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    show mikedark_pixel behind intermission_frame:
        xpos 350 ypos 170
        linear 1 xpos 420

    $ renpy.pause(2, hard=True)

  if nosegame_rank == crank:
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    show tennasmalldark_pixel behind mikedark_pixel:
      xpos 375 ypos 190
      linear 1 xpos 390
      pause 1
  elif nosegame_rank == trank:
      pass
  elif nosegame_rank == arank or brank or srank:
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    show tennadark_pixel behind intermission_frame:
        xpos 350 ypos 65
        linear 1 xpos 540
        pause 1
        xzoom -1.0

    $ renpy.pause(2, hard=True)


    
  #"{b}[The time changes. It is now 9AM.{/b}"
  #"{b}You and Tenna go outside of his room — your breakfast finished. This is done in a pixel art style, and you’re walking out of his room.]{/b}"
  ####"{b}[If C-Rank obtained, Tenna is noticeably sadder and smaller.]{/b}" ""
  if nosegame_rank == crank:
    $ renpy.pause(2, hard=True)
    t_nvl "{color=F26282}Tenna:{/color}…"
    t_nvl "{color=F26282}Tenna:{/color} …Let’s go."
    stop textsound
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    $ renpy.pause(1, hard=True)
    show tennasmalldark_pixel behind intermission_frame, mikedark_pixel:
        xpos 390 ypos 190
        linear 3 xpos 525
    $ renpy.pause(4, hard=True)
    nvl clear
    t_nvl "{color=F26282}Tenna:{/color} If you see anything, just…" 
    t_nvl "{color=F26282}Tenna:{/color} …Tell me when I’m done walking."
    stop textsound
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    $ renpy.pause(1, hard=True)
    nvl clear
    show tennasmalldark_pixel behind intermission_frame:
        xpos 525 ypos 190
        linear 5 xpos 725
    $ renpy.pause(5, hard=True)
    play sound "audio/sfx/general/snd_board_escaped.wav"
    $ renpy.pause(2, hard=True)

    show mikedark_pixel behind intermission_frame:
        xpos 420 ypos 170
        linear 3 xpos 750

    $ renpy.pause(3, hard=True)
    play sound "audio/sfx/general/snd_board_escaped.wav"
    $ renpy.pause(1, hard=True)
  ####"{b}[If T-Rank obtained, Tenna is bigger than normal. So big, in fact, that he can’t fit through his living quarters door!]{/b}" ""
  elif nosegame_rank == trank:
    t_nvl "{color=F26282}Tenna:{/color} Mwah! MWAH!"
    t_nvl "{color=F26282}Tenna:{/color} There’s NOTHING like pancakes for breakfast!!"
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    nvl clear
    $ renpy.pause(1, hard=True)
    #"{b} [pause — Tenna can’t get through…]{/b}"
    t_nvl "{color=F26282}Tenna:{/color} Oh! Guess I got a li’l TOO excited, haha."
    t_nvl "{color=F26282}Tenna:{/color} Mike, could ya be a peach and do my studio rounds?"
    nvl clear
    t_nvl "{color=F26282}Tenna:{/color} It’ll take some time for me to get back to normal…"
    t_nvl "{color=F26282}Tenna:{/color} …so I’m gonna need you to watch my employees for me."
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    nvl clear
    $ renpy.pause(1, hard=True)
    t_nvl "{color=F26282}Tenna:{/color} But don’t worry!"
    t_nvl "{color=F26282}Tenna:{/color} I'll use my TV MAGIC to keep an eye on you."
    nvl clear
    t_nvl "{color=F26282}Tenna:{/color} I’m sure you’ll do your best!"
    t_nvl "{color=F26282}Tenna:{/color} Toodles!!"
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    show mikedark_pixel behind intermission_frame:
        xpos 420 ypos 170 xzoom -1.0
        pause 1
        xzoom 1.0
        pause 1
        linear 4 xpos 725 
    nvl clear
    $ renpy.pause(6, hard=True)
    play sound "audio/sfx/general/snd_board_escaped.wav"
    $ renpy.pause(2, hard=True)
    jump intermission1_game
  elif nosegame_rank == arank or brank or srank:
    $ renpy.pause(1, hard=True)
    ####"{b}Else{/b}" ""
    t_nvl "{color=F26282}Tenna:{/color} Boy… WHAT a meal!"
    t_nvl "{color=F26282}Tenna:{/color} Now it's time for my morning trip through the studio."
    stop textsound
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    $ renpy.pause(1, hard=True)
    #"    {b}[pause]{/b}"
    show tennadark_pixel behind intermission_frame:
        xpos 540 ypos 65 xzoom -1.0
        linear 1 xpos 480
    $ renpy.pause(1, hard=True)
    nvl clear
    t_nvl "{color=F26282}Tenna:{/color} Oh, and Mike?"
    t_nvl "{color=F26282}Tenna:{/color} DO tell me if you see something fishy."
    nvl clear
    t_nvl "{color=F26282}Tenna:{/color} I’d love to do it myself, but..."
    t_nvl "{color=F26282}Tenna:{/color} I can’t exactly WATCH my employees up here."
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    nvl clear
    $ renpy.pause(1, hard=True)
    stop textsound
    show tennadark_pixel behind intermission_frame:
        xpos 480 ypos 65 xzoom 1.0
        linear 0.5 xpos 540
    $ renpy.pause(1, hard=True)
    t_nvl "{color=F26282}Tenna:{/color} So what're you waiting for?"
    stop textsound
    play sound "audio/sfx/general/snd_lancerwhistle.wav"
    show tennadark_pixel behind intermission_frame:
      xpos 540 ypos 65 xzoom 1.0
      ease 0.1 ypos 45
      ease 0.1 ypos 65
      ease 0.1 ypos 45
      ease 0.1 ypos 65
    extend " {w=1}Let's skedaddle!"
    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    $ renpy.pause(1, hard=True)

    show tennadark_pixel behind intermission_frame:
        xpos 540 ypos 65
        linear 0.5 xpos 700
    $ renpy.pause(0.5, hard=True)
    nvl clear
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    $ renpy.pause(1.5, hard=True)

    show mikedark_pixel behind intermission_frame:
        xpos 420 ypos 170
        linear 3 xpos 750

    $ renpy.pause(3, hard=True)
    play sound "audio/sfx/general/snd_board_escaped.wav" 
    $ renpy.pause(3, hard=True)



    jump intermission1_game
  else:
    t_nvl "i should not get this score!"
    jump intermission1_game

label intermission1_game:

  stop music fadeout 1.0

  if persistent.skipbutton == True:
    hide screen skip_intermission

  hide trank_screen
  hide tvpose_tile
  hide trank_room_open
  hide trank_room_closed
  if nosegame_rank == crank:
    hide tennasmalldark_pixel
  elif nosegame_rank == trank:
    hide tennadark_big
  elif nosegame_rank == arank or brank or srank:
    hide tennadark_pixel
  hide mikedark_pixel
  nvl clear

  with wipeleft
  $ renpy.pause(2, hard=True)

  play music "audio/music/tvworld.ogg" fadein 1.0

  show tvworld_fullrooms at tvworld_loop behind intermission_frame
  show mike_pixel behind intermission_frame
  if nosegame_rank == crank:
    show tennasmall_pixel behind intermission_frame
  elif nosegame_rank == trank:
    show pixelblank behind intermission_frame
  elif nosegame_rank == arank or brank or srank:
    show tenna_pixel behind intermission_frame

  with wipeleft

  jump intermission1_gameloop

  label intermission1_gameloop:
    $ shuffle = True




    while intermission1_scenarios_count > 0:
       jump expression getRandomScenario()

    pause 3

    scene black
    hide tvworld_fullrooms behind intermission_frame
    hide mike_pixel behind intermission_frame
    hide tenna_pixel behind intermission_frame
    hide tennasmall_pixel behind intermission_frame
    hide pixelblank behind intermission_frame
    hide screen nvl_quickmenu
    hide intermission_frame
    hide intermission_backframe
    with wipedown
    $ shuffle = False

    $ renpy.pause(2, hard=True)


  #### RESULTS SCREEN

    if nosegame_rank == trank:
      show mike_pixel:
          xpos -0.15 ypos 0.5 yoffset 104
          linear 2 xpos 0.45 ypos 0.5 yoffset 104


    else:

      show mike_pixel:
          xpos -0.3 ypos 0.5 yoffset 104
          linear 2 xpos 0.35 ypos 0.5 yoffset 104

      if nosegame_rank == crank:
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
    show intermission_score "Intermission Score: [intermission1_score]/3"
    pause 1.5

    if intermission1_score ==3:
      play sound "audio/sfx/general/snd_link_sfx_itemget.wav" 
      show intermission_score_comment "{color=F26282}This next task's gonna be a cinch!{/color}"
    elif intermission1_score ==0:
      play sound "audio/sfx/general/snd_link_sfx_itemget_bad.wav" 
      show intermission_score_comment "{color=147ABF}This next task's gonna be a pain…{/color}"
    elif 0< intermission1_score <3:
      play sound "audio/sfx/general/snd_board_text_main_end.wav" 
      show intermission_score_comment "Onto the next task!"
    else:
      "this should not show up"

    pause 4


    if nosegame_rank == trank:
      show mike_pixel:
          xpos 0.45 ypos 0.5 yoffset 104
          linear 2 xpos 1.15 ypos 0.5 yoffset 104
    else:
      show mike_pixel:
          xpos 0.35 ypos 0.5 yoffset 104
          linear 2 xpos 1.15

      if nosegame_rank == crank:
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

    with wipedown







    jump pre_simonsays

#### INTERMISSION SCENARIOS

label s1:
  $ renpy.pause(5, hard=True)
  play sound "audio/sfx/general/snd_nes_nocontroller.wav" 
  show screen quiz_time()
  pause 1


  hide screen quiz_time

  nvl clear
  play sound "audio/sfx/general/snd_board_splash.wav" 
  show encounter_frame 

  show pippins_pixel:
      xpos 290 ypos 125
  show pippins_pixel as pippins2:
      xpos 365 ypos 125
  show pippins_pixel as pippins3:
      xpos 440 ypos 125


  with wipedown


  pause 0.3


  n_nvl "You catch a bunch of Pippinses exchanging their POINTS for Dark Dollars."


  n_nvl "Tenna HATES currencies he can't control!"

  n_nvl "What do you do?"

  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"

  $ intermission_choice_ypos = 0.87


  menu (nvl=True):
    extend ""
    ">Stop them":
      jump s1_good
    ">Let the Dark $s Flow":
      jump s1_bad

  label s1_good:
    nvl clear
    $ intermission1_score += 1
    pause 1
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    $ randompraise_intermission1 = renpy.random.choice(intermission1_praises)
    n_nvl "{color=F26282}[randompraise_intermission1]"
    nvl clear
    jump s1_end
  label s1_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission1 = renpy.random.choice(intermission1_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission1]"
    nvl clear
    jump s1_end

  label s1_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 
    hide pippins_pixel
    hide pippins2
    hide pippins3
    hide encounter_frame
    with wipedown

    pause 0.3 

    $ intermission1_scenarios_count -= 1
    $ intermission1_scenarios.remove("s1")
    jump intermission1_gameloop

label s2:

  $ renpy.pause(5, hard=True)
  play sound "audio/sfx/general/snd_nes_nocontroller.wav" 
  show screen quiz_time()
  pause 1
  hide screen quiz_time

  nvl clear
  play sound "audio/sfx/general/snd_board_splash.wav" 
  show encounter_frame 

  show shadowguy_pixel:
      xpos 345 ypos 121


  with wipedown


  pause 0.3


  n_nvl "Out of the corner of your eye, you spot a Shadowguy shredding their TV Time contract…"


  n_nvl "What do you do?"

  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"
  $ intermission_choice_ypos = 0.78

  menu (nvl= True):
    extend ""
    ">Give them a new one":
      jump s2_good
    ">Free them from hell":
      jump s2_bad

  label s2_good:
    nvl clear
    $ intermission1_score += 1
    pause 1
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    $ randompraise_intermission1 = renpy.random.choice(intermission1_praises)
    n_nvl "{color=F26282}[randompraise_intermission1]"
    nvl clear
    jump s2_end
  label s2_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission1 = renpy.random.choice(intermission1_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission1]"
    nvl clear
    jump s2_end

  label s2_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 
    hide shadowguy_pixel
    hide encounter_frame
    with wipedown

    pause 0.3 
    $ intermission1_scenarios_count -= 1
    $ intermission1_scenarios.remove("s2")
    jump intermission1_gameloop

label s3:
  $ renpy.pause(5, hard=True)
  play sound "audio/sfx/general/snd_nes_nocontroller.wav" 
  show screen quiz_time()

  pause 1

  hide screen quiz_time
  play sound "audio/sfx/general/snd_board_splash.wav" 
  nvl clear

  show encounter_frame 

  show shuttah_pixel:
      xpos 345 ypos 118

  show uglytenna_1:
      xpos 310 ypos 125


  with wipedown


  pause 0.3

  if nosegame_rank == trank:
    n_nvl "Somehow, a Shuttah got a photo of Tenna in the T-Rank Room… and it's HIDEOUS!"
  else:
    n_nvl "A Shuttah snaps a photo of Tenna, but the angle’s HIDEOUS!"
  n_nvl "You snatch it away, but the offensive shot is now in your hands."

  n_nvl "What do you do?"

  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"

  if nosegame_rank == trank:
    $ intermission_choice_ypos = 0.9
  else:
    $ intermission_choice_ypos = 0.88

  menu (nvl= True):
    extend ""
    ">Save it for your coworkers":
      jump s3_bad
    ">Burn the photo":
      jump s3_good
  label s3_good:
    nvl clear
    $ intermission1_score += 1
    pause 1
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    $ randompraise_intermission1 = renpy.random.choice(intermission1_praises)
    n_nvl "{color=F26282}[randompraise_intermission1]"
    nvl clear
    jump s3_end
  label s3_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission1 = renpy.random.choice(intermission1_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission1]"
    nvl clear
    jump s3_end


  label s3_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 
    hide shuttah_pixel
    hide uglytenna_1
    hide encounter_frame
    with wipedown
    pause 0.3
    $ intermission1_scenarios_count -= 1
    $ intermission1_scenarios.remove("s3")
    jump intermission1_gameloop

label s4:
  $ renpy.pause(5, hard=True)
  play sound "audio/sfx/general/snd_nes_nocontroller.wav" 
  show screen quiz_time()

  pause 1
  play sound "audio/sfx/general/snd_board_splash.wav" 
  hide screen quiz_time

  nvl clear

  show encounter_frame 

  show watercooler_pixel:
      xpos 358 ypos 100


  with wipedown


  pause 0.3

  if nosegame_rank == trank:
    n_nvl "One of the watercoolers is shuffling towards the T-Rank Room."
  else:
    n_nvl "One of the watercoolers is sneaking behind Tenna."
  n_nvl "If you approach it, it’ll destroy you… but you can’t let it thrash him!"

  n_nvl "What do you do?"

  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"

  $ intermission_choice_ypos = 0.88


  menu (nvl= True):
    extend ""
    ">Blow it a kiss":
      jump s4_good
    ">Ask it to bully Tenna later":
      jump s4_bad
  label s4_good:
    nvl clear
    $ intermission1_score += 1
    pause 1
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    $ randompraise_intermission1 = renpy.random.choice(intermission1_praises)
    n_nvl "{color=F26282}[randompraise_intermission1]"
    nvl clear
    jump s4_end
  label s4_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission1 = renpy.random.choice(intermission1_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission1]"
    nvl clear
    jump s4_end

  label s4_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 
    hide watercooler_pixel
    hide encounter_frame
    with wipedown
    pause 0.3
    $ intermission1_scenarios_count -= 1
    $ intermission1_scenarios.remove("s4")
    jump intermission1_gameloop

label s5:
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

  n_nvl "A Zapper is napping in the hallway."
  if nosegame_rank == trank:
    n_nvl "His snoring is LOUD, and Tenna hates it when his employees shirk work…"
  else:
    n_nvl "His snoring is LOUD, and Tenna’s starting to get annoyed…"
  n_nvl "What do you do?"

  stop textsound

  play sound "audio/sfx/general/snd_board_text_main_end.ogg"

  if nosegame_rank == trank:
    $ intermission_choice_ypos = 0.84
  else:
    $ intermission_choice_ypos = 0.82

  menu (nvl= True):
    extend ""
    ">Tell him to pipe down":
      jump s5_good
    ">Push his buttons to make him louder":
      jump s5_bad

  label s5_good:
    nvl clear
    $ intermission1_score += 1
    pause 1
    play sound "audio/sfx/general/snd_board_shine_get.wav" 
    $ randompraise_intermission1 = renpy.random.choice(intermission1_praises)
    n_nvl "{color=F26282}[randompraise_intermission1]"
    nvl clear
    jump s5_end
  label s5_bad:
    nvl clear
    $ intermission1_score += 0
    pause 1
    play sound "audio/sfx/general/snd_buzzerwrong.wav" 
    $ randomscold_intermission1 = renpy.random.choice(intermission1_scolds)
    n_nvl "{color=147ABF}[randomscold_intermission1]"
    nvl clear
    jump s5_end

  label s5_end:
    play sound "audio/sfx/general/snd_board_splash.wav" 
    hide zapper_pixel
    hide encounter_frame
    with wipedown
    pause 0.3
    $ intermission1_scenarios_count -= 1
    $ intermission1_scenarios.remove("s5")
    jump intermission1_gameloop

  #"{b}[You + optionally Tenna walk off together, and across the halls of TV World. Along the way, a random scenario will pop up in a small window and you’ll need to decide what to do. Doing things for Tenna’s wishes will make the next minigame easier or harder.{/b}"
  #"{b}More specifically, the scoring system goes like{/b}" ""
  #"{b} 3 scenarios correct == Minigame is one step easier{/b}"
  #"{b} 1-2 scenarios correct == 0 points{/b}"
  #"{b} 0 scenarios correct == Minigame is one step harder{/b}"
  #"{b}During the second scenario, Tenna will also take a call — building up to the reveal that he got a last-minute meeting from THE CENSORS.{/b}"

