default finalscore = 0
default t_rank_end_get = False
default s_rank_end_get = False
default a_rank_end_get = False
default b_rank_end_get = False
default c_rank_end_get = False

label tvtimecutscene:
  hide screen quick_menu
  $ quick_menu = False
  $ renpy.run(Skip())


  $ finalscore = (trank_tracker*5) + (srank_tracker*4) + (arank_tracker*3) + (brank_tracker*2) + crank_tracker


    ### final score is calculated here for the pre-ending cutscene, but the actual score will be displayed before you meet with the fake mikes again

    ##### T rank = 5 points
    ##### S rank = 4 points
    ##### A rank = 3 points
    ##### B rank = 2 points
    ##### C rank = 5 points

  if finalscore >= 14:
      $ t_rank_end_get = True
  elif finalscore >= 11:
      $ s_rank_end_get = True
  elif finalscore >= 8:
      $ a_rank_end_get = True
  elif finalscore >= 5:
      $ b_rank_end_get = True
  elif finalscore < 5:
      $ c_rank_end_get = True
  else:
      "you should not get this end"

  stop music fadeout 1.0
  ##"{b}[The clock shifts again to 7PM — or as Tenna likes to call it — TV TIME!!]{/b}"
  ##"{u}{b}[General Dialogue — If T or C Rank not obtained]{/b}{/u}"

  pause 3

  play sound "audio/sfx/general/snd_ftext_woodblock.wav"
  queue sound ["<silence 1.1>", "audio/sfx/general/snd_tick_tock.wav"]
  show screen clock(200,350,210,360) onlayer bg 

  pause 5.5

  if c_rank_end_get == True:

    jump c_rank_tvtime

    label c_rank_tvtime:

      transform killed_color:
        matrixcolor SaturationMatrix(1.0)
        ease 1 matrixcolor SaturationMatrix(0.0)

      transform unkilled_color:
        matrixcolor SaturationMatrix(1.0)

      screen killed_text:
        text "{color=960811}{size=148}{font=gui/zero_and_zero_is.ttf}KILLED" at died_text



      transform died_text:
        parallel:
          pos (0.23,0.35)
        parallel:
          alpha 0.0
          ease 2 alpha 1.0
      play music "audio/sfx/general/w.ogg" volume 0.2 fadein 1.0
      show layer bg at killed_color

      pause 3
      play sound "audio/sfx/general/snd_closet_impact.ogg"
      show screen killed_text onlayer screens

      pause 7

      show black onlayer overlay:
        alpha 0.0
        ease 2 alpha 1.0

      pause 3


      show black onlayer sprite
      hide screen killed_text onlayer screens
      hide screen clock onlayer bg

      pause 3

      stop music fadeout 1.0

      hide black onlayer sprite
      hide black onlayer overlay


      pause 3

      scene black
      show screen nvl_quickmenu()
      play music "audio/music/rolypoly.ogg" fadein 1.0
      hide screen quick_menu
      $ quick_menu = False
      if persistent.skipbutton == True:
        show screen skip_intermission("crank_tvtime_end")

      show trank_screen
      show trank_room_closed
      show tvpose_tile behind trank_room_closed
      #show mikedark_pixel
      show intermission_frame
      show intermission_backframe
      with wipedown

      $ renpy.pause(2, hard=True)

      show trank_screen:
          xpos 0.5
          linear 2 xpos 0.6
          pause 2
          linear 2 xpos 0.4
      show trank_room_closed:
          xpos 0.5
          linear 2 xpos 0.6
          pause 2
          linear 2 xpos 0.4
      $ renpy.pause(7, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      show mikedark_pixel behind intermission_frame:
          xpos 720 ypos 170 xzoom -1.0
          linear 2 xpos 400


      $ renpy.pause(4, hard=True)

      play sound "audio/sfx/general/snd_lancerwhistle.wav" 

      show mikedark_pixel behind intermission_frame:
        xzoom 1.0 xpos 400 ypos 170
        yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0

      $ renpy.pause(1, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 

      show pippinsdark_pixel behind intermission_frame:
          xpos 720 ypos 170 xzoom -1.0
          linear 1 xpos 500

      $ renpy.pause(0.5, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 

      show shuttahdark_pixel behind intermission_frame, pippinsdark_pixel:
          xpos 720 ypos 160 xzoom -1.0
          linear 1 xpos 550

      $ renpy.pause(0.5, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      show shadowguydark_pixel behind intermission_frame, shuttahdark_pixel:
          xpos 720 ypos 140 
          linear 1 xpos 600

      $ renpy.pause(0.5, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      show watercoolerdark_pixel behind intermission_frame, shuttahdark_pixel, shadowguydark_pixel:
          xpos 720 ypos 92
          linear 1 xpos 620

      $ renpy.pause(0.75, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      show zapperdark_pixel behind intermission_frame, shuttahdark_pixel, pippinsdark_pixel, shadowguydark_pixel:
          xpos 720 ypos 100 
          linear 1 xpos 550

      $ renpy.pause(0.5, hard=True)
      play sound "audio/sfx/general/snd_board_escaped.wav" 
      show rambdark_pixel behind intermission_frame, shadowguydark_pixel, watercoolerdark_pixel:

          xpos 720 ypos 170
          linear 1 xpos 680
      $ renpy.pause(4, hard=True)
      play sound "audio/sfx/general/snd_lancerwhistle.wav" 
      show mikedark_pixel behind intermission_frame:
        xzoom 1.0 xpos 400 ypos 170
        yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0

      $ renpy.pause(2, hard=True)
      play sound "audio/sfx/general/snd_lancerwhistle.wav" 
      show pippinsdark_pixel:
        xpos 500 ypos 170 xzoom -1.0
        yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0


      $ renpy.pause(0.2, hard=True)
      play sound "audio/sfx/general/snd_lancerwhistle.wav" 
      show shuttahdark_pixel:
        xpos 550 ypos 160 xzoom -1.0
        yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0

      $ renpy.pause(0.2, hard=True)
      play sound "audio/sfx/general/snd_lancerwhistle.wav" 
      show shadowguydark_pixel:
        xpos 600 ypos 140
        yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0

      $ renpy.pause(0.2, hard=True)
      play sound "audio/sfx/general/snd_lancerwhistle.wav" 
      show watercoolerdark_pixel:
        xpos 620 ypos 92
        yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0

      $ renpy.pause(0.2, hard=True)
      play sound "audio/sfx/general/snd_lancerwhistle.wav" 
      show zapperdark_pixel:
        xpos 550 ypos 100 
        yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0
        linear 0.1 yoffset -10
        linear 0.1 yoffset 0

      $ renpy.pause(1, hard=True)

      show mikedark_pixel behind intermission_frame:
        xzoom -1.0 xpos 400 ypos 170

      $ renpy.pause(1, hard=True)

      show mikedark_pixel behind intermission_frame:
        xzoom -1.0 xpos 400 ypos 170
        linear 1 xpos -25
      play sound ["audio/sfx/general/snd_board_escaped.wav", "<silence 2>", "audio/sfx/general/snd_board_escaped.wav"]
      play audio ["<silence 3.5>", "audio/sfx/general/snd_board_escaped.wav"]
      play audio [ "<silence 4>", "audio/sfx/general/snd_board_escaped.wav"]
      play audio ["<silence 4.5>", "audio/sfx/general/snd_board_escaped.wav"]
      $ renpy.pause(2, hard=True)

      show pippinsdark_pixel behind intermission_frame:
        xpos 500 ypos 170 xzoom -1.0
        linear 1.25 xpos -20


      $ renpy.pause(0.2, hard=True)

      show shuttahdark_pixel behind intermission_frame:
        xpos 550 ypos 160 xzoom -1.0
        linear 1.25 xpos -20

      $ renpy.pause(0.2, hard=True)

      show shadowguydark_pixel behind intermission_frame:
        xpos 600 ypos 140 
        linear 1.25 xpos -50

      $ renpy.pause(0.2, hard=True)

      show watercoolerdark_pixel behind intermission_frame:
        xpos 620 ypos 92
        linear 1.25 xpos -20

      $ renpy.pause(0.2, hard=True)

      show zapperdark_pixel behind intermission_frame:
        xpos 550 ypos 100 
        linear 1.25 xpos -20

      $ renpy.pause(2, hard=True)

      show rambdark_pixel behind intermission_frame:
        xpos 680 ypos 170 
        linear 5 xpos -20


      $ renpy.pause(3, hard=True)


      label crank_tvtime_end:
        if persistent.skipbutton == True:
          hide screen skip_intermission

        stop music fadeout 3.0
        hide trank_screen
        hide trank_room_closed
        hide mikedark_pixel
        hide tvpose_tile
        hide shadowguydark_pixel
        hide watercoolerdark_pixel
        hide shuttahdark_pixel
        hide rambdark_pixel
        hide zapperdark_pixel
        hide pippinsdark_pixel
        hide intermission_frame
        hide intermission_backframe
        hide screen nvl_quickmenu

        with wipedown

        $ renpy.pause(5, hard=True)




      
      #"{u}{b}[If C Rank as a whole obtained]{/b}{/u}"
      #"{b}[TV Time clock is shown, but the show is KILLED for tonight because Tenna is too sad to perform. Instead, he goes back to his room in the T-Rank Room and shuts himself inside.{/b}"
      #"{b}While he’s locked inside, you (now {/b}{u}{b}NOT{/b}{/u}{b} disguised as Mike) and a parade of TV Time employees walk into the T-Rank Room. {/b}"
      #"{b}A scene shows of you pulling out a paintbrush, and you’re planning to use Tenna’s gloobiness as an opportunity to ruin the stupid T rank room.]{/b}"
        #"{b}[At this point, the game fades to black, and your shift as Mike comes to an end. Then, it changes to “THE NEXT DAY…{/b}"
      #"{b}After that, it’ll transition to a repeat of the intro Battat scene]{/b}"

      
      #"{u}{b}[If T Rank as a whole obtained]{/b}{/u}"
      jump endingbranch
  elif t_rank_end_get == True:

    jump t_rank_tvtime

    label t_rank_tvtime:

      if tenna_face >= 4:
       $ tenna_face = 3

      show black onlayer bg:
        alpha 0.0
        ease 1 alpha 0.5

      $ quick_menu = True
      with dissolve
      play sound "audio/sfx/general/snd_pirouette.wav" 
      show tenna twirl onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0)

          parallel:
              linear 0.2 xzoom -1.0
              linear 0.2 xzoom 1.0
              repeat 3
          parallel:
              xpos 1.4 ypos 1.1
              easein 1.5 xpos 0.45
      pause 1.5
      play sound "audio/sfx/general/snd_wing.wav"
      show tenna point onlayer sprite:
          transform_anchor True
          subpixel True
          anchor (0.5, 1.0)
          yzoom 1.0 xzoom 1.0 xpos 0.5
          parallel:
            xpos 0.5 yoffset 0 rotate 2
            ease 0.1 yoffset 10 rotate 2 
            ease 0.1 yoffset 0 rotate 2 
          parallel:
            ease 0.2  yzoom 0.95 xzoom 1.05
            ease 0.2  yzoom 1.0 xzoom 1.0

      pause 1

      play music "audio/music/sponsers_loop.ogg" fadein 1.0

      t "And would you LOOK at THAT!"

      camera bg:
        perspective True
        xpos 0 ypos 0 zpos 0
        ease 1 ypos -100 zpos -100
      camera sprite:
        perspective True
        xpos 0 ypos 0 zpos 0
        ease 1 ypos -100 zpos -100
      show tenna point onlayer sprite:
          transform_anchor True
          subpixel True
          anchor (0.5, 1.0)
          yzoom 1.0 xzoom 1.0 xpos 0.5
          block:
            ease 0.1 rotate 1.8
            ease 0.1 rotate 2 
            repeat
      t "It’s-"
      play sound ["<silence 0.1>", "audio/sfx/general/snd_tenna_room_enter.wav"]
      camera bg:
        perspective True
        xpos 0 ypos -100 zpos -100
        ease 1 ypos -150 zpos -200
      camera sprite:
        perspective True
        xpos 0 ypos -100 zpos -100
        ease 1 ypos -150 zpos -200
      show tenna point onlayer sprite:
          transform_anchor True
          subpixel True
          anchor (0.5, 1.0)
          yzoom 1.0 xzoom 1.0 xpos 0.5
          block:
            ease 0.1 rotate 1.5
            ease 0.1 rotate 2 
            repeat
      t "It’s nearly {image=funnytxt_tvtime}{alt}TV Time!{/alt}"
      $ renpy.clear_retain();
      pause 1
      camera bg:
        perspective True
        ypos -150 zpos -200 xpos 0 
        ease 1 ypos 0 zpos 0 xpos 0
      camera sprite:
        perspective True
        ypos -150 zpos -200 xpos 0
        ease 1 ypos 0 zpos 0 xpos 0
      play sound "audio/sfx/general/snd_squeaky.wav"
      show tenna cheekhands onlayer sprite:
          transform_anchor True
          subpixel True
          block:
            anchor (0.5, 1.0)
            xpos 0.4
            yzoom 1.0 xzoom 1.0
            parallel:
                ease_quad 1.5 rotate -2
                ease_quad 1.5 rotate 2
                repeat
            parallel:
                ease_quad 0.75 yzoom 0.95 xzoom 1.05
                ease_quad 0.75 yzoom 1.0 xzoom 1.0
                repeat
      pause 1
      t "Oh, this episode is gonna be a SHOW-STOPPER!"
      t "I can feel it, Mike!"
      play sound ["audio/sfx/general/snd_squeaky.wav", "<silence 0.25>"] loop
      show tenna cheekhands onlayer sprite:
          transform_anchor True
          subpixel True
          block:
            anchor (0.5, 1.0)
            xpos 0.4
            yzoom 1.0 xzoom 1.0
            parallel:
                ease_quad 0.75 rotate -2
                ease_quad 0.75 rotate 2
                repeat
            parallel:
                ease_quad 0.325 yzoom 0.95 xzoom 1.05
                ease_quad 0.325 yzoom 1.0 xzoom 1.0
                repeat

      t "Everyone’s love for TV is flowing into me!"
      $ renpy.clear_retain();
      pause 1
      play sound ["<silence 0.2>", "audio/sfx/general/snd_sonar.wav"]
      show tenna call spark onlayer sprite:
          transform_anchor True
          subpixel True
          anchor (0.5, 1.0)
          xpos 0.55 ypos 1.0
          yzoom 1.0 xzoom 1.0
          xalign 0.45 yoffset 50
          ease 1 yoffset 100
      pause 1
      t "Now, let’s give the family a check, shall w—"
      show tenna call -spark onlayer sprite
      $ renpy.clear_retain();
      pause 1
      play sound "audio/sfx/general/snd_hurt1.wav"
      stop music

      $ tenna_face = 1
      show tenna call -spark onlayer sprite:
          transform_anchor True
          subpixel True
          anchor (0.5,1.0) 
          xalign 0.45 ypos 1.0
          xzoom 1.02 yzoom 0.98
          ease 0.2 xzoom 1.00 yzoom 1.00
      pause 2.5
      $ tenna_face = 0
      play sound "audio/sfx/general/snd_noise.wav"
      show tenna doodly onlayer sprite
      pause 2.5
      play sound "audio/sfx/general/snd_wing.wav"
      show tenna onchest onlayer sprite:
          transform_anchor True
          subpixel True
          anchor (0.5,1.0) 
          xalign 0.45 ypos 1.0
          xzoom 1.02 yzoom 0.98
          ease 0.2 xzoom 1.00 yzoom 1.00
      pause 2
      play sound "audio/sfx/general/snd_squeaky.wav"
      show tenna oops onlayer sprite:
          transform_anchor True
          subpixel True
          anchor (0.5,1.0) zoom 1.0 yoffset 100 xoffset 0 xpos 0.55 ypos 1.0
          xzoom 1.02 yzoom 0.98
          ease 0.2 xzoom 1.00 yzoom 1.00
      pause 1.2
      #"{b}[Tenna turns on a switch on the side of his head,and electricity shoots from his antenna. He looks happy at first, but then his expression changes]{/b}"
      t "{size=-4}Whoopsie."
      #"{b}[Tenna slaps his forehead. He forgot something VERY important]{/b}"
      t "{size=-4}Forgot the family was doing a movie night with the Holidays."
      $ renpy.clear_retain();
      pause 1
      play sound "audio/sfx/general/snd_wing.wav"
      #"{b}[Tenna turns around. He’s a little less happy than before, but his day has been going so well that it doesn’t break his mood.]{/b}"
      show tenna norm onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.5,1.0) xpos 0.5 ypos 1.1 yoffset 0
        xzoom 0.98 yzoom 1.02
        ease 0.2 xzoom 1.00 yzoom 1.00
      pause 0.5
      t "Well, ha ha…"
      t "There’s always next time!"
      $ renpy.clear_retain();
      pause 0.5
      play sound "audio/sfx/general/snd_noise.wav"
      show tenna whisper onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.5,1.0) xpos 0.5 ypos 1.1 yoffset 0
        xzoom 0.98 yzoom 1.02
        ease 0.2 xzoom 1.00 yzoom 1.00
      pause 0.5
      t "{size=-8}(Mike, if you could tell everyone that there’s been a {i}teensy{/i} scheduling mistake…)"
      $ renpy.clear_retain();
      camera bg:
        perspective True
        yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0
      camera sprite:
        perspective True
        yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0
      pause 2
      t "Thank you!"
      $ renpy.clear_retain();
      play sound "audio/sfx/general/snd_wing.wav"
      show tenna norm onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.5,1.0) xpos 0.5 ypos 1.1 yoffset 0
        xzoom 0.98 yzoom 1.02
        ease 0.2 xzoom 1.00 yzoom 1.00
      pause 0.5
      t "I’ll meet ya back in my room."
      $ renpy.clear_retain();
      show tenna norm onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.5,1.0) xpos 0.5 ypos 1.1 yoffset 0
        xzoom 1.0 yzoom 1.0
        ease 0.2 xzoom 1.02 yzoom 0.98
      pause 0.2
      play sound "audio/sfx/general/snd_pirouette.wav"
      show tenna twirl onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0)

          parallel:
              linear 0.2 xzoom -1.0 yzoom 1.0
              linear 0.2 xzoom 1.0
              repeat 4
          parallel:
              xpos 0.45 ypos 1.1
              easeout 1 xpos -0.5

      pause 5
      show black onlayer sprite:
        zoom 2 yoffset -100
      hide screen quick_menu
      $ quick_menu = False

      with dissolve

      $ renpy.pause(3, hard=True)
      hide screen clock onlayer bg
      hide tenna onlayer sprite

      $ renpy.pause(2, hard=True)

      hide black onlayer sprite with dissolve
      camera sprite:
        perspective True
        xpos 0 ypos 0 zpos 0 xoffset 0
      camera bg:
        perspective True
        xpos 0 ypos 0 zpos 0 xoffset 0

      scene black

      pause 4
      hide black onlayer bg
      show star_tile onlayer pattern 
      $ quick_menu = True


      with dissolve

      pause 1
      play sound "audio/sfx/general/snd_ftext_woodblock.wav"
      show bedroom onlayer bg at bgshow

      pause 2
      play sound ["<silence 0.15>", "audio/sfx/general/quickfootsteps.ogg"]
      show tenna norm jammies onlayer sprite:
          anchor (0.5,1.0) zoom 1.0 
          parallel:
            xpos 1.5 ypos 1.2
            ease 2 xpos 0.5
          parallel:
            ease 0.15 yoffset -10
            ease 0.15 yoffset 0
            repeat 6



      pause 1

      play music "audio/music/greenroom.ogg" fadein 1.0

      t "Mike!"
      t "C’mere, you WONDERFUL man, you!!"
      $ renpy.clear_retain();
      play sound "audio/sfx/general/snd_grab.wav"
      show tenna norm jammies onlayer sprite:
          anchor (0.5,1.0) zoom 1.0 
          zoom 1.0 xpos 0.5 ypos 1.2 yoffset 0
          ease 0.3 zoom 1.7 yoffset 700 xoffset 50
      pause 0.3
      play sound "audio/sfx/general/snd_squeaky.wav"
      show tenna hug onlayer sprite:
        transform_anchor True
        anchor (0.5,1.0) zoom 1.0 yoffset 0 xoffset 0
        xpos 0.5 ypos 1.0 xzoom 0.98 yzoom 1.02
        ease 0.2 xzoom 1.00 yzoom 1.00
      pause 1
      #"{b}[He runs over and squeezes you in a bear hug]{/b}"
      t "…I’m sorry the show got cancelled."
      t "You worked SO hard today."
      t "I could tell you wanted it to be perfect."
      $ renpy.clear_retain();
      #"{b}[Tenna pulls back]{/b}"
      pause 1
      play sound "audio/sfx/general/snd_wing.wav"
      show tenna milkhold onlayer sprite:
        xpos 0.5 ypos 1.15 zoom 1.0 
        yoffset 0
        ease 0.3  xzoom 1.02 yzoom 0.98
        ease 0.3 xzoom 1.00 yzoom 1.00
      pause 1
      t "So, um."
      t "I know this isn’t much of a thanks, but…"
      $ renpy.clear_retain();
      pause 0.1
      play sound "audio/sfx/general/snd_sparkle_glock.wav"
      play audio "audio/sfx/general/snd_squeaky.wav"
      show tenna milkhold bloom onlayer sprite
      pause 2
      $ tenna_face = 2
      show tenna milkhold -bloom onlayer sprite:
        xpos 0.5 ypos 1.15 zoom 1.0 
      t "{size=-4}…Would ya like to stay over for dinner?"
      #"{b}[pause]{/b}"
      $ renpy.clear_retain();
      pause 1
      $ tenna_face = 0
      play sound "audio/sfx/general/snd_wing.wav"
      play audio ["<silence 0.05>", "audio/sfx/general/snd_lancerwhistle.wav"]
      show tenna handwaves sweat onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.5,1.0) zoom 1.0  xpos 0.5
        parallel:
          block:
            ease 0.15 rotate 1
            ease 0.15 rotate -1
            repeat 2
        parallel:
          ease 0.075  xzoom 1.02 yzoom 0.98
          ease 0.075 xzoom 1.00 yzoom 1.00
      pause 1
      t "Oh, don’t worry about ME!"
      t "I’ve been at your heels ALL DAY."
      $ renpy.clear_retain();
      play sound "audio/sfx/general/snd_noise.wav"
      show tenna onchest jammies onlayer sprite at small_bounce
      pause 0.5
      t "You deserve something for that alone!"
      $ renpy.clear_retain();
      pause 1
      play sound "audio/sfx/general/snd_grab.wav"
      show tenna onchest jammies onlayer sprite:
          anchor (0.5,1.0) zoom 1.0 
          zoom 1.0 xpos 0.5 ypos 1.2 yoffset -50
          easein 0.3 zoom 1.7 yoffset 700 xoffset 50
      pause 0.3
      play sound "audio/sfx/general/snd_squeaky.wav"
      show tenna headpat onlayer sprite:
        transform_anchor True
        anchor (0.5,1.0) zoom 1.0 yoffset 50 xoffset 0
        xpos 0.5 ypos 1.0 xzoom 1.02 yzoom 0.98
        ease 0.2 xzoom 1.00 yzoom 1.00
      pause 0.5
      t "Here."
      t "Lemme grab my apron and make ya some spaghetti and meatballs."
      $ renpy.clear_retain();
      t "I know how much ya love a warm meal!"
      $ renpy.clear_retain();
      pause 2
      hide tenna headpat onlayer sprite
      hide bedroom onlayer bg
      hide star_tile onlayer pattern
      hide screen quick_menu
      $ quick_menu = False
      stop music fadeout 3.0
      with dissolve

      pause 5
      #"{b}[At this point, the game fades to black, and your shift as Mike comes to an end. Then, it changes to “THE NEXT DAY…{/b}"
      #"{b}After that, it’ll transition to a repeat of the intro Battat scene]{/b}"

      jump endingbranch

  elif t_rank_end_get or c_rank_end_get != True:

    jump tv_time_other

    label tv_time_other:


      show black onlayer bg:
        alpha 0.0
        ease 1 alpha 0.5

      $ quick_menu = True
      with dissolve

      play sound "audio/sfx/general/quickfootsteps.ogg"
      show tenna onchest onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0)
          parallel:
            xpos 1.4 ypos 1.1
            ease 1.5 xpos 0.3
          parallel:
            ease 0.15 yoffset -10
            ease 0.15 yoffset 0
            repeat 5

      pause 1.5


      play music "audio/music/miketheboard.ogg" fadein 1.0

      t "Oh, it’s almost time!"

      play sound ["audio/sfx/general/snd_wing.wav","<silence 0.1>"] loop
      show tenna onchest onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0)
          xalign 0.45 xoffset -158
          parallel:
            pause 0.5
            xzoom -1.0
            pause 0.5
            xzoom 1.0
            repeat
          parallel:
            yoffset 0
            ease 0.2 yoffset -10
            pause 0.3
            repeat
      pause 0.5
      t "Our new episode’s gonna start in 5 MINUTES, and I’ve gotta spruce myself up!"
      t "Mike, head over to the control room, won’t ya?"
      $ renpy.clear_retain();
      camera bg:
        perspective True
        xoffset 0
        ease 2 xoffset -100

      camera sprite:
        perspective True
        xoffset 0
        ease 2 xoffset -100

      play sound "audio/sfx/general/snd_noise.wav"
      show tenna call onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0) xzoom 1.0
          xalign 0.45 yoffset 0
          ease 1 yoffset 50
      pause 1
      play sound ["<silence 0.2>", "audio/sfx/general/snd_sonar.wav"]
      show tenna call spark onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0) xzoom 1.0
          xalign 0.45 yoffset 50
      pause 1
      t "In the meantime, I’m gonna check on the Lightners."
      t "Don’t worry — I’ll catch up with you!"
      $ renpy.clear_retain();
      camera sprite:
        perspective True
        zpos 0 xoffset -100
        ease 2 zpos -100 xoffset -150
      camera bg:
        perspective True
        zpos 0 xoffset -100
        ease 2 zpos -100 xoffset -150
      play sound ["<silence 0.2>", "audio/sfx/general/snd_sonar.wav"]
      show tenna call spark onlayer sprite
      pause 1
      play sound ["<silence 0.2>", "audio/sfx/general/snd_sonar.wav"]
      show tenna call spark onlayer sprite 
      pause 1
      play sound ["<silence 0.2>", "audio/sfx/general/snd_sonar.wav"]
      show tenna call spark onlayer sprite 
      pause 2
      play sound "audio/sfx/general/snd_hurt1.wav"
      stop music
      $ tenna_face = 1
      show tenna call -spark onlayer sprite:
        yoffset 50
        ease 0.15 yoffset 60 xzoom 1.01 yzoom 0.99
        ease 0.15 yoffset 50 xzoom 1.0 yzoom 1.0

      pause 2
      #"{b}[Tenna turns on a switch on the side of his head,and electricity shoots from his antenna. He looks happy at first, but then his expression changes]{/b}"
      t "The living room's empty."
      $ renpy.clear_retain();
      pause 1
      play sound "audio/sfx/general/snd_wing.wav"
      show tenna frustrated onlayer sprite:
          anchor (0.5, 1.0) yoffset 0
          subpixel True
          xzoom 1.05 yzoom 0.95
          parallel:
            easein_elastic 1 xzoom 1.0 yzoom 1.0
          parallel:
            block:
              ease 0.05 xoffset -150
              ease 0.05 xoffset -148
              repeat
      pause 1.5
      #"{b}[Tenna slaps his forehead. He forgot something VERY important]{/b}"
      t "Darnit, I forgot!"
      $ renpy.clear_retain();
      camera sprite:
        perspective True
        zpos -100
        ease 2 zpos 0
      camera bg:
        perspective True
        zpos -100
        ease 2 zpos 0
      pause 2
      t "The family’s…"
      $ renpy.clear_retain();
      show tenna frustrated onlayer sprite:
          anchor (0.5, 1.0) yoffset 0
          subpixel True
          xzoom 1.00 yzoom 1.0
      pause 1
      play sound ["<silence 1>", "audio/sfx/general/snd_firework_send.wav"]
      show tenna sad onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0) xzoom 1.0 xoffset -200
          xalign 0.45
          parallel:
            easein_quad 1 xzoom 0.95 yzoom 1.05
            easein_quad 2 xzoom 1.1 yzoom 0.9
          parallel:
            pause 1
            block:
              ease_quad 2 rotate 1
              ease_quad 2 rotate -1
              repeat
      pause 3
      show tenna sad onlayer sprite:
        xalign 0.45 xoffset -200 xzoom 1.1 yzoom 0.9 
      t "{size=-4}…having a movie night with the Holidays…"
      $ renpy.clear_retain();
      pause 2
      #"{b}[Tenna turns around and looks a little shaky. He shrinks every sentence.]{/b}"
      t "{size=-4}Mike?"
      $ renpy.clear_retain();
      play sound ["<silence 1.5>","audio/sfx/general/snd_hurt1.wav"]
      show tenna sad onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0) xpos 0.503 zoom 1.0
          parallel:
            ease 2 zoom 0.95
          parallel:
            ease_quad 2 rotate 1
            ease_quad 2 rotate -1
            repeat
      pause 2.5
      t "{size=-4}Could you, uh…"
      t "{size=-4}…tell everyone that tonight’s show is cancelled?"
      t "{size=-4}I…"
      $ renpy.clear_retain();
      play sound ["<silence 1.5>","audio/sfx/general/snd_hurt1.wav"]
      show tenna sad onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0) xpos 0.503 zoom 0.95
          parallel:
            ease 2 zoom 0.9
          parallel:
            ease_quad 2 rotate 1
            ease_quad 2 rotate -1
            repeat
      pause 2.5
      t "{size=-4}I need to go back to my room."
      $ renpy.clear_retain();
      pause 0.5
      play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
      show tenna sad onlayer sprite:
          transform_anchor True
          anchor (0.5, 1.0) xpos 0.503 zoom 0.9
          parallel:
            ease 3 zoom 0.2
          parallel:
            ease_quad 2 rotate 1
            ease_quad 2 rotate -1
            repeat

      pause 5
      show black onlayer sprite :
        zoom 2 xoffset -600
      hide screen quick_menu
      $ quick_menu = False


      with dissolve

      $ renpy.pause(3, hard=True)
      hide screen clock onlayer bg with dissolve
      hide tenna onlayer sprite

      $ renpy.pause(2, hard=True)

      hide black onlayer sprite with dissolve
      camera sprite:
        perspective True
        xpos 0 ypos 0 zpos 0 xoffset 0
      camera bg:
        perspective True
        xpos 0 ypos 0 zpos 0 xoffset 0

      scene black

      pause 2
      hide black onlayer bg
      show star_tile onlayer pattern 
      $ quick_menu = True

      with dissolve



      pause 1
      play sound "audio/sfx/general/snd_ftext_woodblock.wav"
      show bedroom onlayer bg at bgshow



      pause 2
      play sound ["audio/sfx/general/footstep1.ogg", "audio/sfx/general/footstep2.ogg","audio/sfx/general/footstep2.ogg"]

      show tenna milkhold onlayer sprite:
          anchor (0.5,1.0) zoom 1.0 ypos 1.1
          parallel:
            xpos 1.4
            ease 3 xpos 0.55
          parallel:
            ease 0.3 yoffset -10
            ease 0.3 yoffset 0
            repeat 5



      pause 4

      show tenna milkhold onlayer sprite:
        anchor (0.5,1.0) zoom 1.0 ypos 1.1 xpos 0.55


      #"{b}[The clock is shown again, and now its somewhere around 9PM. You, as Mike, report to the T-Rank room and go inside. There, Tenna’s standing in his flannel pyjamas, holding a cup of warm milk.]{/b}"
      t "Mike?"
      t "You done?"
      $ renpy.clear_retain();

      camera sprite:
        perspective True
        yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0
      camera bg:
        perspective True
        yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0
      camera pattern:
        perspective True
        yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0
        ease 0.4 yoffset -10
        ease 0.4 yoffset 0

      pause 1.7

      #"{b}[You nod]{/b}"
      ##"{u}{b} [If you get S Rank overall]{/b}{/u}"
      if s_rank_end_get == True:
        t "I’m sorry the show got cancelled."
        $ tenna_face = 0
        play sound "audio/sfx/general/snd_squeaky.wav"
        show tenna milkhold at squish onlayer sprite:
          anchor (0.5,1.0) xpos 0.55 ypos 1.1
        pause 0.5
        t "But ya did a marvelous job today!"
        t "As, heh, ya always do."
        t "So, for that…"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_grab.wav"
        show tenna milkhold onlayer sprite:
          anchor (0.5,1.0)
          zoom 1.0 xpos 0.55 ypos 1.1 yoffset 0
          ease 0.3 zoom 1.7 yoffset 700 xoffset 50
        pause 0.4
        play sound "audio/sfx/general/snd_squeaky.wav"
        show tenna hug onlayer sprite:
          transform_anchor True
          anchor (0.5,1.0) zoom 1.0 yoffset 0 xoffset 0
          xpos 0.5 ypos 1.0 xzoom 0.98 yzoom 1.02
          ease 0.2 xzoom 1.00 yzoom 1.00
        pause 1
        #"    {b}[Tenna moves forward, and wraps you in a hug. He then moves back.]{/b}"
        t "Thanks."
        t "You’re wonderful."
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna milkhold onlayer sprite:
          transform_anchor True
          anchor (0.5,1.0)
          zoom 1.0 xpos 0.55 ypos 1.1 yoffset 0 xzoom 1.0 yzoom 1.0
          ease 0.2 yoffset 5 xzoom 1.01 yzoom 0.99
          ease 0.2 yoffset 0 xzoom 1.0 yzoom 1.0
        pause 1
        t "I’ll put myself to bed tonight."
        t "Rest easy, okay?"
        $ renpy.clear_retain();
        pause 2
        hide tenna headpat onlayer sprite
        hide bedroom onlayer bg
        hide star_tile onlayer pattern
        hide screen quick_menu
        $ quick_menu = False
        with dissolve

        pause 2
        jump endingbranch
      elif a_rank_end_get == True:
        ##"{b}    {/b}{u}{b}[If you get A Rank overall]{/b}{/u}"
        t "I’m sorry the show got cancelled."
        $ renpy.clear_retain();
        $ tenna_face = 0
        play sound "audio/sfx/general/snd_squeaky.wav"
        show tenna milkhold at squish onlayer sprite:
          anchor (0.5,1.0) xpos 0.55 ypos 1.1
        pause 0.5
        t "But ya did a good job today."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna think jammies onlayer sprite:
          anchor (0.5,1.0) xpos 0.55 ypos 1.1 yoffset 0
          ease 0.25 yoffset 10
          ease 0.25 yoffset 0
        pause 0.5
        t "Sure, there were a few blunders here and there…"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_bump.wav"
        $ tenna_face = 1
        show tenna norm jammies onlayer sprite:
          anchor (0.5,1.0) xpos 0.55 ypos 1.1 yoffset 0
        pause 0.5

        t "…but that's normal."
        t "Even I make bad takes from time to time!"
        $ renpy.clear_retain();
        pause 0.5
        $ tenna_face = 0
        t "So, as thanks…"
        $ renpy.clear_retain();
        #"        {b}[Tenna moves forward, and headpats you.]{/b}"
        play sound "audio/sfx/general/snd_grab.wav"
        show tenna norm jammies onlayer sprite:
          anchor (0.5,1.0)
          zoom 1.0 xpos 0.55 ypos 1.1 yoffset 0
          ease 0.3 zoom 1.7 yoffset 700 
        pause 0.4
        play sound "audio/sfx/general/snd_squeaky.wav"
        $ renpy.clear_retain();
        show tenna headpat onlayer sprite:
          transform_anchor True
          anchor (0.5,1.0) zoom 1.0 yoffset 50
          xpos 0.5 ypos 1.0 xzoom 0.95 yzoom 1.05
          ease 0.2 xzoom 1.00 yzoom 1.00
        pause 1
        t "Pat pat!"
        $ renpy.clear_retain();
        pause 1.5
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna milkhold onlayer sprite:
          transform_anchor True
          anchor (0.5,1.0)
          zoom 1.0 xpos 0.55 ypos 1.1 yoffset 0 xzoom 1.0 yzoom 1.0
          ease 0.2 yoffset 5 xzoom 1.01 yzoom 0.99
          ease 0.2 yoffset 0 xzoom 1.0 yzoom 1.0
        pause 0.5
        #"{b}     [He moves back]{/b}"
        t "Anyhoo, uh…"
        t "I’ll just go and put myself to bed."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna onchest jammies onlayer sprite:
          transform_anchor True
          anchor (0.5,1.0)
          zoom 1.0 xpos 0.55 ypos 1.1 yoffset 0 xzoom 1.0 yzoom 1.0
          ease 0.2 yoffset 5 xzoom 1.01 yzoom 0.99
          ease 0.2 yoffset 0 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "See ya tomorrow morning!"
        $ renpy.clear_retain();
        pause 2
        hide tenna headpat onlayer sprite
        hide bedroom onlayer bg
        hide star_tile onlayer pattern
        hide screen quick_menu
        $ quick_menu = False
        with dissolve

        pause 2
        jump endingbranch
      elif b_rank_end_get == True:
        ##"{u}{b} [If you get B Rank overall]{/b}{/u}"
        pause 1
        t "Maybe it’s not such a bad thing."
        t "The show getting cancelled, I mean."
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_bump.wav"
        show tenna norm jammies onlayer sprite:
          transform_anchor True
          anchor (0.5,1.0)
          zoom 1.0 xpos 0.53 ypos 1.1 yoffset 0 xzoom 1.0 yzoom 1.0
          ease 0.2 yoffset 5 xzoom 1.01 yzoom 0.99
          ease 0.2 yoffset 0 xzoom 1.0 yzoom 1.0
        pause 1
        t "Ha ha, yeah!"
        t "Today… might’ve been a weird day for all of us!"
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_hurt1.wav"
        show tenna milkhold onlayer sprite:
          transform_anchor True
          anchor (0.5,1.0)
          xpos 0.55 yoffset 0
          ease 1 yoffset 20
        pause 1
        #"{b}     [Tenna nods affirmatively, but he’s still unsure]{/b}"
        t "An off day."
        $ renpy.clear_retain();
        pause 1
        show tenna nervous onlayer sprite
        # pause awkwardly
        t "I'm heading to bed now."
        t "See ya tomorrow."
        $ renpy.clear_retain();
        pause 2
        hide screen quick_menu
        $ quick_menu = False
        hide tenna headpat onlayer sprite
        hide bedroom onlayer bg
        hide star_tile onlayer pattern
        with dissolve

        pause 5
        jump endingbranch
      else:
        "no ending cutscene for this rank"

      #"{b}[The scene ends, and you’re back outside the T rank room. You’re so tired from a busy day that instead of returning to your quarters, you collapse on the floor, asleep. (Maybe your Mike costume head rolls off?]{/b}"
      #"{b}[At this point, the game fades to black, and your shift as Mike comes to an end. Then, it changes to “THE NEXT DAY…{/b}"
      #"{b}After that, it’ll transition to a repeat of the intro Battat scene]{/b}"

