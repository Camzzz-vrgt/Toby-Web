label post_therapy:
    $ renpy.stop_skipping()
    hide screen quick_menu
    $ quick_menu = False

  ##"{b}[How well you do in the minigame will determine Tenna’s feelings overall post-therapy]{/b}"
  ##"{u}{b}T Rank{/b}{/u}" ""
    if therapy_rank == trank:
        $ happy = happy +20
        play sound "audio/sfx/general/snd_slidewhistle.wav"

        pause 2
        show black onlayer bg with dissolve:
            alpha 0.75

        pause 1
        play sound "audio/sfx/general/snd_pirouette.wav"
        show tenna twirl onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)

            parallel:
                linear 0.2 xzoom -1.0
                linear 0.2 xzoom 1.0
                repeat 3
            parallel:
                xpos 1.2 ypos 1.1
                easein 1.5 xpos 0.45
        pause 1.5
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna cheekhands onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            block:
                yzoom 1.0 xzoom 1.0
                xpos 0.4
                parallel:
                    ease_quad 3 rotate 2
                    ease_quad 3 rotate -2
                    repeat
                parallel:
                    ease_quad 1.5 yzoom 0.95 xzoom 1.05
                    ease_quad 1.5 yzoom 1.0 xzoom 1.0
                    repeat
        pause 0.5
        t "Wowzers!"
        t "I KNEW going through with this session was the right call."

        t "My heart’s never felt so light and free!"
        t "I could…"
        show tenna cheekhands onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            block:
                xpos 0.4 yoffset 0
                parallel:
                    ease_quad 2.0 rotate 2
                    ease_quad 2.0 rotate -2
                    repeat
                parallel:
                    ease_quad 1.0 yzoom 0.95 xzoom 1.05
                    ease_quad 1.0 yzoom 1.0 xzoom 1.0
                    repeat
        t "I could just…!"
        play sound ["audio/sfx/general/snd_squeaky.wav","<silence .2>"] loop
        show tenna cheekhands onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            block:
                xpos 0.4 yoffset 0
                parallel:
                    ease_quad 1 rotate 2
                    ease_quad 1 rotate -2
                    repeat
                parallel:
                    ease_quad 0.5 yzoom 0.95 xzoom 1.05
                    ease_quad 0.5 yzoom 1.0 xzoom 1.0
                    repeat
        t "I could just DANCE!!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna cheekhands onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            xpos 0.4 yoffset 0
            ease 0.15 yzoom 0.9 xzoom 1.1
            ease 0.15 yzoom 1.0 xzoom 1.0 
        pause 0.3
        play sound ["audio/sfx/general/snd_pirouette.wav","<silence 0.2>", "audio/sfx/general/snd_pirouette.wav","<silence 0.2>", "audio/sfx/general/snd_pirouette.wav"]
        show tenna twirl onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.4 yoffset 0
            parallel:
                block:
                    linear 0.15 xzoom -1.0
                    linear 0.15 xzoom 1.0
                    repeat 4
                block:
                    linear 0.2 xzoom -1.0
                    linear 0.2 xzoom 1.0
                    repeat 
            parallel:
                xpos 0.45 ypos 1.1
                ease_cubic 0.75 xpos 0.9
                pause 0.5
                ease_cubic 0.75 xpos 0.1
                pause 0.5
                ease_cubic 1 xpos 0.45

        pause 4

        if tenna_face ==3 and trank_tracker == 3:
            play sound "audio/sfx/general/snd_board_shine_get.wav"
            play audio "audio/sfx/general/snd_sparkle_glock.wav"
            play audio "audio/sfx/general/snd_squeaky.wav"
            $ tenna_face = 5
            show tenna outstretched bloom3 antenna3L antenna3R onlayer sprite:
                xpos 0.5 yzoom 0.9 xzoom 1.1
                easein_quad 0.3 yzoom 1.2 xzoom 0.8
                easein_elastic 1 yzoom 1.0 xzoom 1.0 
        elif tenna_face == 2 and trank_tracker == 2 and simonsays_rank == trank:
            play sound "audio/sfx/general/snd_sparkle_glock.wav"
            play audio "audio/sfx/general/snd_squeaky.wav"
            $ tenna_face = 0
            show tenna outstretched bloom2 onlayer sprite:
                xpos 0.5 yzoom 0.9 xzoom 1.1
                easein_quad 0.3 yzoom 1.2 xzoom 0.8
                easein_elastic 1 yzoom 1.0 xzoom 1.0 
        elif (trank_tracker == 2 and simonsays_rank != trank) or trank_tracker == 1:
            play sound "audio/sfx/general/snd_mercyadd.wav"
            play audio "audio/sfx/general/snd_squeaky.wav"

            show tenna outstretched bloom onlayer sprite:
                xpos 0.5 yzoom 0.9 xzoom 1.1
                easein_quad 0.3 yzoom 1.2 xzoom 0.8
                easein_elastic 1 yzoom 1.0 xzoom 1.0 
        else:
            "animation error"
        pause 2

        if trank_tracker == 3 and tenna_face == 5:
            $ tenna_face = 4
            show tenna outstretched -bloom3 -antenna3L -antenna3R onlayer sprite:
                xpos 0.5 yzoom 1.0 xzoom 1.0
        elif trank_tracker == 2 and simonsays_rank == trank:
            $ tenna_face = 3
            show tenna outstretched -bloom2 onlayer sprite:
                xpos 0.5 yzoom 1.0 xzoom 1.0
        elif (trank_tracker == 2 and simonsays_rank != trank) or trank_tracker == 1:
            $ tenna_face = 2
            show tenna outstretched -bloom onlayer sprite:
                xpos 0.5 yzoom 1.0 xzoom 1.0
        else:
            "animation error 2"

        #"{b}[Tenna dances enthusiastically! When he finishes, a flower appears on his nose]{/b}"
        #"{b}[If Tenna already has a flower, a small bouquet suddenly appears on his nose. If Tenna previously had the bouquet, his antenna ALSO turn into flowers.]{/b}"
        t "Take it, Mike!"
        t "It’s for you!"
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        scene black
        hide tenna onlayer sprite
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide tv_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve

    elif therapy_rank == srank:
        play sound "audio/sfx/general/snd_slidewhistle.wav"
        $ happy = happy +10

        pause 2
        show black onlayer bg with dissolve:
            alpha 0.75

        pause 1
        $ tenna_face = 0
        #"{u}{b}S Rank{/b}{/u}" ""
        play sound "audio/sfx/general/snd_pirouette.wav"
        show tenna twirl onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)

            parallel:
                linear 0.2 xzoom -1.0
                linear 0.2 xzoom 1.0
                repeat 3
            parallel:
                xpos 1.2 ypos 1.1
                easein 1.5 xpos 0.45
        pause 1.5

        play sound "audio/sfx/general/snd_noise.wav"
        show tenna norm onlayer sprite:
            xpos 0.45 
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02 
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 
        pause 0.5
        #"{b}[If you obtained T rank/C rank in the previous minigame, and you get this rank or lower, Tenna’s flower/wrinkly nose will not appear.]{/b}"
        t "Aaaah."
        t "I’ve never felt better."
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna point onlayer sprite:
            xpos 0.45
            ease 1 xpos 0.3
        pause 0.5
        t "Thanks for letting me get that off my chest."
        t "Now I can seize the rest of the day!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_squeaky.wav"
        show tenna cheekhands onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            xpos 0.3 xoffset -40 yoffset 0 rotate 2
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02 
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 
            block:
                ease_quad 1.5 rotate -2
                ease_quad 1.5 rotate 2
                repeat

        pause 0.5
        t "Oooooh, Mike — I can feel it now."
        t "Tonight’s episode is gonna be a GREAT one!"
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        scene black
        hide tenna onlayer sprite
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide tv_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve

    elif therapy_rank == arank:
        show black onlayer bg with dissolve:
            alpha 0.75

        pause 1
        #"{u}{b}A Rank{/b}{/u}" å""
        play sound "audio/sfx/general/footstep1.ogg"
        show tenna norm onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)

            parallel:
                linear 0.2 yoffset 0
                linear 0.2 yoffset -10
                repeat 4
            parallel:
                xpos 1.2 ypos 1.1
                easein 1.5 xpos 0.5
        pause 2
        show tenna norm onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.1
        t "Thanks, Mike."
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna think onlayer sprite at flipin:
            xzoom -1.0
        pause 0.5
        t "You might not have one of those therapizing licenses…"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna norm onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02 
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 
        pause 0.5
        t "…but when it comes to listening to me, you’re no slouch!"
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna think onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02 
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 
        pause 0.5
        t "Though I oughta ask…"
        t "…have you considered getting one?"
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna onchest onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.55
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02 
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 
        pause 0.5
        t "No big reason!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna onchest onlayer sprite at flipin:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.55 xoffset -150
            yzoom 1.0 xzoom -1.0 
            ease_quad 0.15 yzoom 0.98 xzoom -1.02 
            ease_quad 0.15 yzoom 1.0 xzoom -1.0 
            ease_quad 1 xoffset -250
        pause 1
        t "Just thought the training might make your life a li’l easier!"
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_bump.wav"
        show tenna doodly onlayer sprite:
            xzoom 1.0 xoffset -100
        pause 1
        t "You know, haha, if I ask you…"
        t "…another weird question or something."
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        scene black
        hide tenna onlayer sprite
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide tv_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve

    elif therapy_rank == brank:
        $ happy = happy -10
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"

        pause 2
        show black onlayer bg with dissolve:
            alpha 0.75
        pause 1
        play sound "audio/sfx/general/footstep1.ogg"
        #"{u}{b}B Rank{/b}{/u}" ""
        show tenna think onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xzoom -1.0

            parallel:
                linear 0.2 yoffset 0
                linear 0.2 yoffset -10
                repeat 4
            parallel:
                xpos 1.2 ypos 1.1
                easein 1.5 xpos 0.4
        pause 2
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna think onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xzoom -1.0 xpos 0.4
            ease 0.1 xzoom 1.0 xpos 0.45

        pause 1

        t "Hm."
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_firework_send.wav"
        $ tenna_face = 1
        show tenna think onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                easein 3 yoffset 20
            parallel:
                ease 0.5 xoffset -10
                ease 0.5 xoffset 10
                ease 0.5 xoffset -5
                ease 0.5 xoffset 5
                ease 0.5 xoffset 0
                


        pause 2.5
        t "Hmmm."
        t "I don't know why, but these weird feelings won’t go away…"
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna norm onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.4
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02 
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 
        pause 0.5
        t "Not that YOU’RE to blame or anything, haha!"
        t "I just…"
        $ renpy.clear_retain();
        pause 1
        play sound ["<silence 1>", "audio/sfx/general/snd_firework_send.wav"]
        show tenna sad onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.4
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.75 yzoom 1.02 xzoom 0.98
            ease_quad 2 yzoom 0.95 xzoom 1.05 
        pause 3
        t "I just wonder if this session was enough."
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        show tenna sad onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.4
            yzoom 0.95 xzoom 1.05 zoom 1.0
            ease 2 zoom 0.93
        pause 3
        #"{b}[pause]{/b}"
        t "Mike?"
        t "{size=-4}Could you schedule a shock therapy session for tomorrow morning?"
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        scene black
        hide tenna onlayer sprite
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide tv_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve
    elif therapy_rank == crank:
        $ happy = happy -20

        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"

        pause 2
        play sound "audio/sfx/general/footstep1.ogg"
        queue sound ["audio/sfx/general/footstep2.ogg", "audio/sfx/general/footstep1.ogg"]
        show black onlayer bg with dissolve:
            alpha 0.75

        pause 1
        #"{u}{b}C Rank{/b}{/u}" ""
        if simonsays_rank == crank:
            show tenna sad2 onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.5, 1.0)
                xzoom -1.0

                parallel:
                    linear 0.2 yoffset 0
                    linear 0.2 yoffset -10
                    repeat 6
                parallel:
                    xpos 1.4 ypos 1.1
                    easein 2.5 xpos 0.4
        else:
            show tenna sad onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.5, 1.0)

                parallel:
                    linear 0.2 yoffset 0
                    linear 0.2 yoffset -10
                    repeat 6
                parallel:
                    xpos 1.4 ypos 1.1
                    easein 2.5 xpos 0.5
        pause 3
        play sound ["<silence 1>","audio/sfx/general/snd_firework_send.wav"]
        show tenna onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.1
            xzoom 1.0 yzoom 1.0
            ease 2 xzoom 1.05 yzoom 0.95
        pause 3
        #"{b}[Tenna becomes glooby here. This is shown by him getting droopy everywhere. If you have C ranks before, his tailcoat will be crumpled (minigame 2) and/or his nose will be crumpled.]{/b}"
        t "…Why do I feel WORSE?"
        $ renpy.clear_retain();
        pause 1
        show tenna onlayer sprite:
            subpixel True
            block:
                ease 2 rotate 1
                ease 2 rotate 0
                repeat
        #"{b}[pause]{/b}"
        t "M-Mike?"
        t "Could you give me a minute?"
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        show tenna onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.1
            parallel:
                xzoom 1.05 yzoom 0.95 zoom 1.0
                ease 2 xzoom 1.1 yzoom 0.9 zoom 0.93
            parallel:
                block:
                    ease 2 rotate 1
                    ease 2 rotate 0
                    repeat
        pause 3
        if crank_tracker >= 2:
            t "I need a little… me time."
        else:
            t "I need a little… time to cool off."
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        scene black
        hide tenna onlayer sprite
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide tv_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve

    elif therapy_rank == zrank:
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        $ happy = 20
        pause 2.5
        show black onlayer bg with dissolve:
            alpha 0.75

        pause 1
        play sound "audio/sfx/general/snd_hurt1.wav"
        #"{u}{b}Z Rank (Game Over){/b}{/u}" ""
        camera pattern:
            perspective True
            block:
                linear 0.05 yoffset 10
                linear 0.05 yoffset -10
                linear 0.05 yoffset 5
                linear 0.05 yoffset -5
                linear 0.05 yoffset 0
        camera bg:
            perspective True
            block:
                linear 0.05 yoffset 10
                linear 0.05 yoffset -10
                linear 0.05 yoffset 5
                linear 0.05 yoffset -5
                linear 0.05 yoffset 0
        camera sprite:
            perspective True
            block:
                linear 0.05 yoffset 10
                linear 0.05 yoffset -10
                linear 0.05 yoffset 5
                linear 0.05 yoffset -5
                linear 0.05 yoffset 0
        show tenna tiegrip onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.55 ypos 1.1
            block:
                ease_quad 0.75 yzoom 1.02 xzoom 0.98
                ease_quad 1 yzoom 0.95 xzoom 1.05 
                repeat
        pause 0.5

        t "Mike…"
        t "What is WITH you this evening?!"
        $ renpy.clear_retain();
        camera sprite:
            ypos 0 zpos 0
            ease 1 ypos -50 zpos -100
        camera pattern:
            ypos 0 zpos 0
            ease 1 ypos -50 zpos -100
        camera bg:
            ypos 0 zpos 0
            ease 1 ypos -50 zpos -100
        pause 1
        t "You're usually SO good at listening to me…"
        t "…but now you’re treading all over my toes!"
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_glassbreak.wav"
        camera bg:
            xpos -15 ypos -70 zpos -200
            perspective True
            block:
                linear 0.05 yoffset 5
                linear 0.05 yoffset -5
                linear 0.05 yoffset 3
                linear 0.05 yoffset -3
                linear 0.05 yoffset 0
        camera pattern:
            xpos -15 ypos -70 zpos -200
            perspective True
            block:
                linear 0.05 yoffset 5
                linear 0.05 yoffset -5
                linear 0.05 yoffset 3
                linear 0.05 yoffset -3
                linear 0.05 yoffset 0
        camera sprite:
            xpos -15 ypos -70 zpos -200
            perspective True
            block:
                linear 0.05 yoffset 5
                linear 0.05 yoffset -5
                linear 0.05 yoffset 3
                linear 0.05 yoffset -3
                linear 0.05 yoffset 0
        pause 0.5
        t "{size=+8}Why?!"

        scene black
        hide black onlayer pattern
        hide black onlayer bg
        hide tenna freakout onlayer sprite
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide tv_tile onlayer pattern
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_orchhit.wav"
        pause 1
        q "{size=+8}Oh, I’LL tell ya why!"
        $ renpy.clear_retain();
        camera sprite:
            xpos 0 zpos 0 ypos -100
        show tenna tiegrip onlayer sprite:
            anchor (0.5, 1.0)
            xpos 0.55 ypos 0.9
            pause 0.5
            ease 1 xpos 0.35
        pause 0.5
        play sound "audio/sfx/general/snd_ftext_woodblock.wav"
        camera sprite:
            xpos 0 zpos 0 ypos -100
            ease 1 ypos 450
        pause 1
        play sound ["<silence 0.2>", "audio/sfx/general/snd_wing.wav"]
        show smallmike angryhips onlayer sprite:
            xpos 1.0 ypos 0.7
            ease 1.3 xpos 0.45
        pause 1.5
        play sound "audio/sfx/general/snd_noise.wav"
        show smallmike angrypoint onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0) ypos 1.6 xpos 0.8
            xzoom 1.05 yzoom 0.95
            ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        q "'Cause that Mike over there is a BONA-FIDE FAKE!"
        q "He’s givin’ ya lousy life advice!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        camera sprite:
            xpos 0 zpos 0 ypos 450
            ease 1 ypos -100
        pause 1
        play sound "audio/sfx/general/snd_hurt1.wav"
        show tenna freakout onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0) xoffset -100
            xzoom 1.05 yzoom 0.95
            ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "{size=+8}MIKE?!"
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_bump.wav"
        show tenna doodly onlayer sprite
        pause 0.5
        t "But if you’re the REAL Mike…"
        t "…who’s THAT guy?"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_smallswing.wav"
        camera sprite:
            xpos 0 zpos 0 
            ease 0.5 zpos 0 ypos 450
        pause 0.6
        play sound "audio/sfx/general/snd_bump.wav"
        show smallmike angryhips onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0) ypos 2.0 xpos 0.6
            parallel:
                xzoom 1.05 yzoom 0.95
                ease 0.2 xzoom 1.0 yzoom 1.0
            parallel:
                zoom 1.5
        pause 0.75
        play sound "audio/sfx/general/snd_impact.wav"
        show smallmike maskgrab onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1050
            xzoom 1.0 yzoom 1.0 zoom 1.0
            ease 0.1 xzoom 1.1 yzoom 0.9
            ease 0.1 xzoom 1.0 yzoom 1.0
        pause 0.5
        m "Let’s see who this ‘Mike’ REALLY is!"
        $ gameover_minigame_label = "therapy"
        hide smallmike maskgrab onlayer sprite
        play sound "audio/sfx/general/snd_wideslash_low.wav"
        $ renpy.clear_retain();
        jump tenna_gameover
        return
    else:
        "you cannot get this rank"

    jump tvtimecutscene