label post_simonsays:
    $ renpy.stop_skipping()
    hide screen quick_menu
    $ quick_menu = False  

    camera sprite:
        perspective True
        xpos 0 ypos 0 zpos 0
    camera bg:
        perspective True
        xpos 0 ypos 0 zpos 0
    camera pattern:
        perspective True
        xpos 0 ypos 0 zpos 0

    # "{b}[How well you do in the minigame will determine how Lanino and Elnina react — and you’ll get a comment from Tenna on their reaction too.]{/b}"
    # "{u}{b}T Rank{/b}{/u}" ""
    if simonsays_rank == trank:
        play sound "audio/sfx/general/snd_slidewhistle.wav"
        $ happy = happy +20

        pause 2
        scene black
        show long_black onlayer bg with dissolve:
            alpha 0.75 zoom 2.0 ypos -400

        camera sprite:
            xpos 0 ypos 0
        play sound "audio/sfx/general/snd_noise.wav"
        show weatherduo onlayer sprite:
            anchor (0.5, 1.0)
            xpos -0.3 ypos 1.0
            easein_quad 1 xpos 0.5
        pause 1
        play sound "audio/sfx/general/snd_mercyadd.wav"
        show weatherduo backrainbow onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5,1.0)
            xpos 0.5 ypos 1.0
            block:
                ease 2 rotate 2
                ease 2 rotate -2
                repeat
        pause 0.5
        e "Oh, darling, I feel like I’ve soared to cloud nine!"
        l "We’ll demolish the dance floor, come rain or shine!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_impact.wav"
        show tenna cheekhands onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5,1.0)
            xpos 1.2 ypos 0.5
            easein_quart 0.2 xpos 0.5
            block:
                ease 0.1 rotate 0.2
                ease 0.1 rotate -0.2
                repeat



        camera sprite:
            pause 0.1
            ease 0.1 yoffset 10
            ease 0.1 yoffset -10
            ease 0.1 yoffset 5
            ease 0.1 yoffset -5
            ease 0.1 yoffset 0    
            ypos 0
            easein_quart 0.5 xpos 150 ypos -400
        camera bg:
            pause 0.1
            ease 0.1 yoffset 10
            ease 0.1 yoffset -10
            ease 0.1 yoffset 5
            ease 0.1 yoffset -5
            ease 0.1 yoffset 0    
            ypos 0
            easein_quart 0.5 xpos 150 ypos -400
        camera pattern:
            pause 0.1
            ease 0.1 yoffset 10
            ease 0.1 yoffset -10
            ease 0.1 yoffset 5
            ease 0.1 yoffset -5
            ease 0.1 yoffset 0    
            ypos 0
            easein_quart 0.5 xpos 150 ypos -400

        pause 0.05


        show weatherduo surprised -backrainbow onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5,1.0)
            xpos 0.5 ypos 1.0
            ease_quart 0.1 xpos 0.2
        pause 0.6
        t "{size=+4}Lanino and Elnina are RHYMING??"
        show weatherduo surprised onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0)
            xpos 0.2 ypos 1.0
            parallel:
                ease 2 xpos -0.3
            parallel:
                ease 0.2 yoffset -10
                ease 0.2 yoffset 0
                repeat
        show tenna cheekhands onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0)
            xpos 0.5 ypos 0.5
            parallel:
                ease 1.0 rotate 3
                ease 1.0 rotate -3
                repeat 
            parallel:
                ease 0.5 xzoom 1.05 yzoom 0.95
                ease 0.5 xzoom 1.0 yzoom 1.0
                repeat
        t "Mike, did ya work on a Broadway show?!"
        t "Their groovy moves knocked the censors’ socks off!"
        $ renpy.clear_retain();
        camera sprite:
            xpos 150
            ease 2 xpos 50
        camera bg:
            xpos 150
            ease 2 xpos 50
        camera pattern:
            xpos 150
            ease 2 xpos 50
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna point onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0)
            xpos 0.5 ypos 0.5 xoffset 75 yoffset 10
            block:
                xzoom 1.02 yzoom 0.98
                ease 0.2 xzoom 1.00 yzoom 1.0

        pause 0.5
        t "I oughta give you a— "
        $ renpy.clear_retain();

        if tenna_face == 2:
            play sound "audio/sfx/general/snd_sparkle_glock.wav"
            play audio "audio/sfx/general/snd_squeaky.wav"
            $ tenna_face = 0
            show tenna cheekhands bloom2 onlayer sprite:
                transform_anchor True
                anchor (0.5,1.0)
                xpos 0.5 ypos 0.5 xoffset 0 yoffset 0
                ease 0.3 xzoom 1.03 yzoom 0.97
                ease 0.3 xzoom 1.0 yzoom 1.0

        else:
            play sound "audio/sfx/general/snd_mercyadd.wav"
            play audio "audio/sfx/general/snd_squeaky.wav"
            $tenna_face = 0
            show tenna cheekhands bloom onlayer sprite:
                transform_anchor True
                anchor (0.5,1.0)
                xpos 0.5 ypos 0.5 xoffset 0 yoffset 0
                ease 0.3 xzoom 1.03 yzoom 0.97
                ease 0.3 xzoom 1.0 yzoom 1.0
            
        pause 1.75
        if trank_tracker == 2:
            $ tenna_face = 3
            show tenna cheekhands -bloom2 onlayer sprite:
                transform_anchor True
                anchor (0.5,1.0)
                xpos 0.5 ypos 0.5 xoffset 0 yoffset 0
        else:
            $ tenna_face = 2
            show tenna cheekhands -bloom onlayer sprite:
                transform_anchor True
                anchor (0.5,1.0)
                xpos 0.5 ypos 0.5 xoffset 0 yoffset 0
        #  "{b}[If Tenna already has a flower, a small bouquet suddenly appears on his nose. If he doesn’t, he gets his normal flower. The bouquet will show on the overworld in the intermission as well.]{/b}"
        t "W-well!"
        show tenna cheekhands onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0)
            xpos 0.5 ypos 0.5
            parallel:
                ease 1.0 rotate 3
                ease 1.0 rotate -3
                repeat 
            parallel:
                ease 0.5 xzoom 1.05 yzoom 0.95
                ease 0.5 xzoom 1.0 yzoom 1.0
                repeat
        t "That, uh…"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_squeaky.wav"
        show tenna oops onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0)
            parallel:
                xpos 0.5 ypos 0.5 xoffset 100
                ease_quad 0.2 xzoom 1.05 yzoom 0.95
                ease_quad 0.2 xzoom 1.0 yzoom 1.0
            parallel:
                ease_quad 0.3 rotate -3
                ease_quad 0.3 rotate 0
        pause 1
        t "…that works too!"
        $ renpy.clear_retain();
        play sound ["audio/sfx/general/snd_squeaky.wav"] loop 
        show tenna oops onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0)
            xpos 0.5 ypos 0.5 xoffset 100
            parallel:
                ease 1.5 xpos -0.3
            parallel:
                ease 0.15 yoffset -30
                ease 0.15 yoffset 0
                repeat
            parallel:
                ease 0.3 rotate 3
                ease 0.3 rotate -3
                repeat 
            
        pause 1.5
        stop sound
        pause 1.5
        $ happy_score_store = happy
        hide tenna onlayer sprite
        hide weatherduo onlayer sprite
        scene black
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide weather_tile onlayer pattern
        hide black onlayer pattern
        hide long_black onlayer bg
        with dissolve
        camera bg:
            xpos 0 ypos 0
        camera pattern:
            xpos 0 ypos 0
        camera sprite:
            xpos 0 ypos 0
        pause 3
    elif simonsays_rank == srank:
        play sound "audio/sfx/general/snd_slidewhistle.wav"
        $ happy = happy +10

        pause 2
        scene black
        show long_black onlayer bg with dissolve:
            alpha 0.75 zoom 2.0 ypos -400
        $ tenna_face = 0
        camera sprite:
            xpos 0 ypos 0
        play sound "audio/sfx/general/footstep1.ogg"
        queue sound ["audio/sfx/general/footstep2.ogg"]
        show lanino backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            parallel:
                xpos -0.3 ypos 1.0
                easein 1.8 xpos 0.5
            parallel:
                ease 0.3 yoffset 10
                ease 0.3 yoffset 0
                repeat 3
        show elnina backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            parallel:
                xpos -0.3 ypos 1.0
                easein 1.8 xpos 0.5
            parallel:
                ease 0.3 yoffset 0
                ease 0.3 yoffset 10
                repeat 3
        pause 3
        play sound "audio/sfx/general/snd_lancerwhistle.wav"
        #  "{u}{b}S Rank{/b}{/u}" ""
        #  "{b}[If you obtained T rank/C rank in the previous minigame, and you get this rank or lower, Tenna’s flower/wrinkly nose will not appear.]{/b}"
        show lanino backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            yoffset 0
            ease 0.1 yoffset -10
            ease 0.1 yoffset 0
            ease 0.1 yoffset -10
            ease 0.1 yoffset 0
        show elnina backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
        pause 0.5
        l "Ha ha, I’m ready to strut my stuff tonight!"
        play sound "audio/sfx/general/snd_lancerwhistle.wav"
        show elnina backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            yoffset 0
            ease 0.1 yoffset -10
            ease 0.1 yoffset 0
            ease 0.1 yoffset -10
            ease 0.1 yoffset 0
        pause 0.5
        e "You’ve kept us on our toes, and now we’re raring to go!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_slidewhistle.wav"
        show tenna norm onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 1.3 ypos 0.5
            ease 1 xpos 0.5

        camera bg:
            xpos 0 ypos 0
            ease 1 ypos -400
        camera pattern:
            xpos 0 ypos 0
            ease 1 ypos -400
        camera sprite:
            xpos 0 ypos 0
            ease 1 ypos -400

        pause 1
        t "WONDERFUL job, Mike!"
        play sound "audio/sfx/general/snd_wing.wav"
        $ renpy.clear_retain();
        show tenna think onlayer sprite:
            xoffset 50 anchor (0.5, 1.0)
            block:
                ease 0.2 xzoom 1.02 yzoom 0.98
                ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "We did need a li’l time to adjust…"
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna norm onlayer sprite :
            xoffset 50 anchor (0.5, 1.0)
            block:
                ease 0.2 xzoom 1.02 yzoom 0.98
                ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "…but this last-minute rehearsal worked out!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna point onlayer sprite:
            xoffset 50 anchor (0.5, 1.0)
            block:
                ease 0.2 xzoom 1.02 yzoom 0.98
                ease 0.2 xzoom 1.0 yzoom 1.0
        pause 1
        t "Oh, and the censors LOVED your work."
        play sound "audio/sfx/general/snd_lancerwhistle.wav"
        show tenna point onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            yoffset 0
            ease 0.12 yoffset -20
            ease 0.12 yoffset 0
            ease 0.12 yoffset -20
            ease 0.12 yoffset 0
        pause 0.5
        t "They gave you two thumbs up!"
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        hide tenna onlayer sprite
        hide lanino onlayer sprite
        hide elnina onlayer sprite
        scene black
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide weather_tile onlayer pattern
        hide black onlayer pattern
        hide long_black onlayer bg
        with dissolve
        $ tenna_face = 0
        camera bg:
            xpos 0 ypos 0
        camera pattern:
            xpos 0 ypos 0
        camera sprite:
            xpos 0 ypos 0

        pause 3
    elif simonsays_rank == arank:
        scene black
        show long_black onlayer bg with dissolve:
            alpha 0.75 zoom 2.0 ypos -400
        $ tenna_face = 0
        camera sprite:
            xpos 0 ypos 0
        play sound "audio/sfx/general/footstep1.ogg"
        queue sound ["audio/sfx/general/footstep2.ogg"]
        show lanino backstand onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                xpos -0.3 ypos 1.0
                easein 1.8 xpos 0.5
            parallel:
                ease 0.3 yoffset 10
                ease 0.3 yoffset 0
                repeat 3
        show elnina backstand onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                xpos -0.3 ypos 1.0
                easein 1.8 xpos 0.5
            parallel:
                ease 0.3 yoffset 0
                ease 0.3 yoffset 10
                repeat 3
        pause 3
        play sound "audio/sfx/general/snd_wing.wav"
        show elnina backstand onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            ease 1 yoffset -10
        show lanino backstand onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
        pause 1
        #  "{u}{b}A Rank{/b}{/u}" ""
        e "We put our best foot forward."
        e "…Right, darling?"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show elnina backstand onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            ease 1 yoffset 0
        show lanino backstand onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            ease 1 yoffset -10
        pause 1
        l "Of course we did, dewdrop."
        l "I mean, it was only a warm-up!"
        play sound "audio/sfx/general/snd_slidewhistle.wav"
        show lanino backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            yoffset -10
            ease 1 yoffset 0
        $ renpy.clear_retain();
        show tenna think onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 1.3 ypos 0.5
            ease 1.5 xpos 0.5

        camera bg:
            xpos 0 ypos 0
            ease 1.5 ypos -400
        camera pattern:
            xpos 0 ypos 0
            ease 1.5 ypos -400
        camera sprite:
            xpos 0 ypos 0
            ease 1.5 ypos -400

        pause 1.7
        t "That could’ve gone a LOT worse."
        t "Gonna be frank: ya made quite a few mistakes…"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna norm onlayer sprite:
            xoffset 50 anchor (0.5, 1.0)
            block:
                ease 0.2 xzoom 1.02 yzoom 0.98
                ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "…but don’t worry!"
        t "I’ll make sure those two get one last rehearsal before the show starts."
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_noise.wav"
        play audio "audio/sfx/general/snd_phew.ogg"
        show tenna relieved steam onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            block:
                ease 0.2 xzoom 1.02 yzoom 0.98
                ease 0.2 xzoom 1.0 yzoom 1.0
        pause 1
        t "More importantly, we got the censors off our backs."
        t "I dunno if they were impressed, but they’ve always been a tough crowd."
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna norm onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            block:
                ease 0.2 xzoom 1.02 yzoom 0.98
                ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "Guess that’s entertainment for ya!"
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        hide tenna onlayer sprite
        hide lanino onlayer sprite
        hide elnina onlayer sprite
        scene black
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide weather_tile onlayer pattern
        hide black onlayer pattern
        hide long_black onlayer bg
        with dissolve
        $ tenna_face = 0
        camera bg:
            xpos 0 ypos 0
        camera pattern:
            xpos 0 ypos 0
        camera sprite:
            xpos 0 ypos 0
        pause 3

    elif simonsays_rank == brank:
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        $ happy = happy -10

        pause 2
        scene black
        show long_black onlayer bg with dissolve:
            alpha 0.75 zoom 2.0 ypos -400
        pause 1
        #  "{u}{b}B Rank{/b}{/u}" ""
        $ tenna_face = 0
        play sound "audio/sfx/general/footstep1.ogg"
        queue sound ["audio/sfx/general/footstep2.ogg"]
        camera sprite:
            xpos 0 ypos 0
        show lanino backstand worried onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                xpos -0.3 ypos 1.0
                easein 1.8 xpos 0.5
            parallel:
                ease 0.3 yoffset 10
                ease 0.3 yoffset 0
                repeat 3
        show elnina backstand worried onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                xpos -0.3 ypos 1.0
                easein 1.8 xpos 0.5
            parallel:
                ease 0.3 yoffset 0
                ease 0.3 yoffset 10
                repeat 3
        pause 3
        play sound "audio/sfx/general/snd_noise.wav"
        show lanino backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            ease 1 yoffset -10
        show elnina backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
        pause 1
        l "Hm…"
        l "Think I got off on the wrong foot today."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_noise.wav"
        show elnina backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            ease 1 yoffset -10
        show lanino backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            ease 1 yoffset 0
        pause 1
        e "You’re not the only one who feels under the weather…"
        show elnina backstand onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
            ease 1 yoffset 0
        $ renpy.clear_retain();

        $ tenna_face = 1
        play sound "audio/sfx/general/footstep1.ogg"
        queue sound ["audio/sfx/general/footstep2.ogg"]
        show tenna onchest onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 1.3 ypos 0.5
            ease 2 xpos 0.5

        pause 2.5
        show tenna onchest onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 0.5
        camera bg:
            xpos 0 ypos 0
            ease 1 ypos -400
        camera pattern:
            xpos 0 ypos 0
            ease 1 ypos -400
        camera sprite:
            xpos 0 ypos 0
            ease 1 ypos -400
        pause 1
        t "At least we got through most of the dance?"
        $ renpy.clear_retain();
        pause 0.5
        play sound ["audio/sfx/general/snd_firework_send.wav"]
        show tenna sad onlayer sprite:
            subpixel True
            yoffset 0 xzoom 1.0 yzoom 1.0
            ease 1 yoffset 10 xzoom 1.05 yzoom 0.95
        pause 1
        t "{size=-8}The censors sure weren’t happy, though…"
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna oops onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            yoffset 10 xoffset 100
            parallel:
                ease 1 yoffset 0 xzoom 1.0 yzoom 1.0
            parallel:
                ease 2 rotate -2
                ease 2 rotate 0
                repeat
        pause 0.75
        t "Maybe that's why I direct, and you produce?"
        t "Ah ha ha…"
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        hide tenna onlayer sprite
        hide lanino onlayer sprite
        hide elnina onlayer sprite
        scene black
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide weather_tile onlayer pattern
        hide black onlayer pattern
        hide long_black onlayer bg
        with dissolve
        $ tenna_face = 0
        camera bg:
            xpos 0 ypos 0
        camera pattern:
            xpos 0 ypos 0
        camera sprite:
            xpos 0 ypos 0
        pause 3

    elif simonsays_rank == crank:
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        $ happy = happy -20

        pause 2
        stop music
        show long_black onlayer bg:
            alpha 0.75 zoom 2.0 ypos -400
        $ tenna_face = 0
        camera bg:
            perspective True
            xpos 100 ypos -100 zpos -300
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0  
        camera pattern:
            perspective True
            xpos 100 ypos -100 zpos -300
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0  
        camera sprite:
            perspective True
            xpos 100 ypos -100 zpos -300
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0    
        play sound "audio/sfx/general/snd_punch_ish_1.wav"
        show lanino faceaway onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
        show elnina faceaway onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
        pause 1
        e "{size=+8}Ow!"
        show elnina faceaway onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
        e "Some ‘twinkle toes’ YOU are."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_grab.wav"
        camera bg:
            perspective True
            xpos 100 ypos -100 zpos -300
            ease 0.5 xpos -100 ypos -125
        camera pattern:
            perspective True
            xpos 100 ypos -100 zpos -300
            ease 0.5 xpos -100 ypos -125
        camera sprite:
            perspective True
            xpos 100 ypos -100 zpos -300
            ease 0.5 xpos -100 ypos -125
        pause 0.75
        show lanino faceaway onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
        l "It’s not my fault YOU’VE got two left feet!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_impact.wav"
        camera sprite:
            perspective True
            xpos 0 ypos 0 zpos 0
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0 
        camera bg:
            perspective True
            xpos 0 ypos 0 zpos 0
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0 
        camera pattern:
            perspective True
            xpos 0 ypos 0 zpos 0
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0 
        pause 0.5
        t "{size=+12}YOU TWO!"   
        scene black
        $ renpy.clear_retain();
        show tenna angry behind lanino onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0) rotate 1
            parallel:
                xpos 0.5 ypos 0.4 alpha 0.0
                ease 1 alpha 1.0
            parallel:
                ease 0.5 rotate -1
                ease 0.5 rotate 1
                repeat
        pause 1
        play sound "audio/sfx/general/snd_bump.wav"
        show lanino backstand worried onlayer sprite at small_bounce:
            xzoom -1.0 xoffset -150
            pause 1
            ease 1 xoffset -300
        play sound "audio/sfx/general/snd_bump.wav"
        show elnina backstand worried onlayer sprite at small_bounce:
            xzoom -1.0 xoffset 150
            pause 1
            ease 1 xoffset 300
        pause 1.5
        camera sprite:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 1 ypos -400
        camera bg:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 1 ypos -400
        camera pattern:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 1 ypos -400
        pause 2
        t "Could you be a LITTLE more professional?"
        t "The censors don’t like it when couples fight, and—"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_hurt1.wav"
        $ tenna_face = 1
        show tenna norm onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0) rotate 0 xoffset 50
            ease 0.1 xzoom 1.01 yzoom 0.99
            ease 0.1 xzoom 1.0 yzoom 1.0
        pause 1.5
        t "Oh god."
        t "They’re leaving."
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_grab.wav"
        show tenna freakout onlayer sprite at small_bounce:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0) rotate 0 xoffset 0
            ease 0.1 xzoom 1.05 yzoom 0.95
            ease 0.1 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "They’re gonna bleed me dry like last time!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/quickfootsteps.ogg"
        show elnina backstand worried onlayer sprite:
            xoffset 300
            parallel:
                ease 1 xoffset 1000
            parallel:
                ease 0.1 yoffset -10
                ease 0.1 yoffset 0
                repeat
        show lanino backstand worried onlayer sprite:
            xoffset -300
            parallel:
                ease 1 xoffset -1000
            parallel:
                ease 0.1 yoffset -10
                ease 0.1 yoffset 0
                repeat
        pause 2
        play sound "audio/sfx/general/snd_hurt1.wav"
        show tenna freakout onlayer sprite:
            ease 0.07 xoffset -5
            ease 0.07 xoffset 0
            repeat
        t "Mike?" 
        play sound "audio/sfx/general/snd_hurt1.wav"
        show tenna freakout onlayer sprite:
            parallel:
                ease_quad 0.56 xzoom 1.05 yzoom 0.95
                ease_quad 0.56 xzoom 1.0 yzoom 1.0
                repeat
            parallel:
                ease_quad 1.6 rotate 1
                block:
                    ease_quad 0.8 rotate -1
                    ease_quad 0.8 rotate 1
                    repeat
        t "{size=+4}MIKE?!"
        $ renpy.clear_retain();
        camera sprite:
            perspective True
            xpos 0 ypos -400 zpos 0
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0 
        camera bg:
            perspective True
            xpos 0 ypos -400 zpos 0
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0 
        camera pattern:
            perspective True
            xpos 0 ypos -400 zpos 0
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0 
        play sound "audio/sfx/general/snd_impact.wav"
        pause 0.5
        show tenna freakout onlayer sprite:
            parallel:
                ease_quad 0.28 xzoom 1.1 yzoom 0.9
                ease_quad 0.28 xzoom 1.0 yzoom 1.0
                repeat
            parallel:
                ease_quad 0.2 rotate 2
                block:
                    ease_quad 0.4 rotate -2
                    ease_quad 0.4 rotate 2
                    repeat
        t "{size=+4}DON’T MAKE ME BARRICADE THE DOOR ON MY OWN!!"
        play sound ["audio/sfx/general/snd_mike_ending.wav"] loop volume 0.3
        show tenna freakout onlayer sprite:
            subpixel True
            parallel:
                ease_quad 0.14 xzoom 1.1 yzoom 0.9
                ease_quad 0.14 xzoom 1.0 yzoom 1.0
                repeat
            parallel:
                ease_quad 0.1 rotate 8
                block:
                    ease_quad 0.2 rotate -8
                    ease_quad 0.2 rotate 8
                    repeat
        t "{size=+8}HELP!!!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_closet_impact.ogg"
        $ happy_score_store = happy
        hide tenna onlayer sprite
        hide lanino onlayer sprite
        hide elnina onlayer sprite
        scene black
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide weather_tile onlayer pattern
        hide black onlayer pattern
        hide long_black onlayer bg
        $ tenna_face = 1
        camera bg:
            xpos 0 ypos 0
        camera pattern:
            xpos 0 ypos 0
        camera sprite:
            xpos 0 ypos 0
        pause 4
    elif simonsays_rank == zrank:
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        $ happy = 20

        pause 2
        show black onlayer bg:
            alpha 0.75
        camera sprite:
            perspective True
            xpos -100 ypos -125 zpos -300
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0    
        camera bg:
            perspective True
            xpos -100 ypos -125 zpos -300
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0  
        camera pattern:
            perspective True
            xpos -100 ypos -125 zpos -300
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0    
        play sound "audio/sfx/general/snd_hurt1.wav"
        show lanino faceaway sad onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
        show elnina faceaway sad onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.5 ypos 1.0
        pause 0.5
        l "Oh! Oh!"
        l "We’re falling out of line!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_grab.wav"
        camera sprite:
            perspective True
            xpos -100 ypos -125 zpos -300
            ease 0.5 xpos 100 ypos -100
        camera bg:
            perspective True
            xpos -100 ypos -125 zpos -300
            ease 0.5 xpos 100 ypos -100
        camera pattern:
            perspective True
            xpos -100 ypos -125 zpos -300
            ease 0.5 xpos 100 ypos -100
        pause 1
        e "But we were PERFECT yesterday!"
        e "Did something get in the air?"
        camera sprite:
            perspective True
            xpos 0 ypos 0 zpos 0
        camera bg:
            perspective True
            xpos 0 ypos 0 zpos 0
        camera pattern:
            perspective True
            xpos 0 ypos 0 zpos 0
        hide lanino faceaway onlayer sprite
        hide elnina faceaway sad onlayer sprite
        scene black
        hide black onlayer pattern
        hide black onlayer bg
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide weather_tile onlayer pattern
        play sound "audio/sfx/general/snd_orchhit.wav"
        pause 1
        q "{size=+8}Yes!"
        q "The stench of an IMPOSTOR, that’s what!"
        $ renpy.clear_retain();
        # show tenna freakout onlayer sprite:
        #     anchor (0.5, 1.0)
        #     xpos 0.55 ypos 1.1
        #     pause 0.3
        #     ease 1 xpos 0.35
        camera sprite:
            ypos 450
        play sound ["<silence .25>", "audio/sfx/general/snd_ftext_woodblock.wav"]
        show smallmike angryhips onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0)
            xpos 1.3 ypos 1.65
            ease 1.3 ypos 1.65 xpos 0.8
        pause 1.2
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna freakout onlayer sprite behind smallmike:
            anchor (0.5, 1.0)
            xpos -0.5 ypos 1.1
            easein_quad 0.5 xpos 0.35
        pause 0.5
        play sound "audio/sfx/general/snd_impact.wav"
        show tenna freakout onlayer sprite behind smallmike:
            anchor (0.5, 1.0)
            xpos 0.35 ypos 1.1 yoffset 0
            parallel:
                ease 0.075 yoffset -50
                ease 0.075 yoffset 0 
            parallel:
                ease 0.15 xzoom 1.1 yzoom 0.9
                ease 0.15 xzoom 1.0 yzoom 1.0
        pause 0.5
        #  "{b}[The real Motormouth Mike runs up on the stage]{/b}"
        t "{size=+8}MIKE?!"
        $ renpy.clear_retain();
        pause 0.25
        play sound "audio/sfx/general/snd_noise.wav"
        show smallmike angrypoint onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0) ypos 1.65 xpos 0.8
            xzoom 1.05 yzoom 0.95
            ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        q "Boss, that Mike’s a PHONY."
        q "He’s tryin’ to sabotage your show and make you look bad in front of the censors!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        camera sprite:
            ypos 450
            ease 1 ypos -100
        pause 1
        $ tenna_face = 1
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna think onlayer sprite at flipin:
            xoffset -150 yoffset -50
        pause 1
        t "But…"
        t "…if you’re the REAL Mike, who’s THAT guy?"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_smallswing.wav"
        camera sprite:
            ypos -100
            ease 0.5 ypos 450
        pause 0.7
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
            xzoom 1.0 yzoom 1.0 zoom 1
            ease 0.1 xzoom 1.1 yzoom 0.9
            ease 0.1 xzoom 1.0 yzoom 1.0
        pause 0.5
        m "Let’s see who this ‘Mike’ REALLY is!"
        hide smallmike maskgrab onlayer sprite
        $ gameover_minigame_label = "simon_says_menu"
        play sound "audio/sfx/general/snd_wideslash_low.wav"
        $ renpy.clear_retain();
        hide tenna think onlayer sprite
        jump tenna_gameover
        return
        #  "{b}[Game over sequence plays]{/b}"
    else:
        "weird rank you got there."


    jump intermission2