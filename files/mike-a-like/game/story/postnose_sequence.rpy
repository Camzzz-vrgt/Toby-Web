



label postnose_sequence:
    $ renpy.stop_skipping()

    define gameover_minigame_label = "nose_organization"
    default happy_score_store = 80
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
    #"{b}[How well you do in the minigame will determine how well Tenna’s breakfast turns out for you in the results screen, as well as his reaction.]{/b}"

    if nosegame_rank == trank:
        play sound "audio/sfx/general/snd_slidewhistle.wav"

        $ happy = happy +20

        pause 2


        show black onlayer bg with dissolve:
            alpha 0.75

        pause 1
        #"{u}{b}T Rank{/b}{/u}" ""

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
            yzoom 1.0 xzoom 1.0
            xpos 0.4 yoffset 0 rotate 2
            block:
                parallel:
                    ease_quad 1.5 rotate -2
                    ease_quad 1.5 rotate 2
                    repeat
                parallel:
                    ease_quad 1 yzoom 0.95 xzoom 1.05
                    ease_quad 1 yzoom 1.0 xzoom 1.0
                    repeat
        pause 0.5

        t "Oh, MIKE!"
        t "You wonderful man, you~{size=+1}♡{/size}"
        t "My drawer’s never looked better!"
        t "I KNEW you’d take my feedback to heart."
        $ tenna_face = 0
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_mercyadd.wav"
        play audio "audio/sfx/general/snd_squeaky.wav"
        show tenna norm bloom onlayer sprite:
            xpos 0.45 
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02 
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 

        pause 1.5
        $ tenna_face = 2
        #"  {b}[Tenna’s nose blooms. This will be kept through the rest of the game if you continue scoring T ranks.]{/b}"
        t "Ah ha ha!"
        t "Looks like my nose agrees!"
        $ renpy.clear_retain();
        pause 0.5
        show tenna cheekhands -bloom onlayer sprite:
            block:
                parallel:
                    ease_quad 1.5 rotate -2
                    ease_quad 1.5 rotate 2
                    repeat
                parallel:
                    ease_quad 1 yzoom 0.95 xzoom 1.05
                    ease_quad 1 yzoom 1.0 xzoom 1.0
                    repeat
        t "Anyhoo, breakfast is ready."
        play sound ["audio/sfx/general/snd_squeaky.wav","<silence 0.15>"] loop volume 0.3
        show tenna cheekhands onlayer sprite:
            parallel:
                ease_quad 0.5 rotate 2
                ease_quad 0.5 rotate 0
                repeat
            parallel:
                ease_quad 0.25 yzoom 0.95 xzoom 1.05
                ease_quad 0.25 yzoom 1.0 xzoom 1.0
                repeat
        t "It’s your favorite: syrupy griddle-cakes and scrambled pipi—"
        show tenna doodly onlayer sprite:
            xoffset -75 yoffset -7 rotate 10
        stop sound
        t "Eggs."
        $ renpy.clear_retain();
        pause 1
        play sound ["audio/sfx/general/snd_squeaky.wav","<silence 0.1>"] loop volume 0.3
        show tenna oops onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            xpos 0.5 xoffset 0
            parallel:
                ease_quad 0.3 yzoom 0.95 xzoom 1.05
                ease_quad 0.3 yzoom 1.0 xzoom 1.0
                repeat
            parallel:
                ease_quad 0.5 rotate 2
                ease_quad 0.5 rotate 10
                repeat
            parallel:
                ease 0.3 yoffset 0
                ease 0.3 yoffset -25
                repeat



        t "Ha ha!"
        t "Gotta LOVE a nice side of scrambled eggs!"
        $ renpy.clear_retain();
        show tenna oops onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                xpos 0.5
                ease 3 xpos -0.5
            parallel:
                ease_quad 0.3 yzoom 0.95 xzoom 1.05
                ease_quad 0.3 yzoom 1.0 xzoom 1.0
                repeat
            parallel:
                ease_quad 0.5 rotate 2
                ease_quad 0.5 rotate 10
                repeat
            parallel:
                ease 0.3 yoffset 0
                ease 0.3 yoffset -25
                repeat
        pause 3
        stop sound
        pause 1
        $ happy_score_store = happy

        ##### Mado Note: The correct layer hiding sequence for post-minigame screens
        scene black
        hide tenna onlayer sprite
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide star_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve
    #"{u}{b}S Rank{/b}{/u}" ""
    elif nosegame_rank == srank:
        play sound "audio/sfx/general/snd_slidewhistle.wav"

        $ happy = happy +10

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
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna norm onlayer sprite:
            anchor (0.5, 1.0)
            transform_anchor True
            xpos 0.5 
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 
        pause 0.5
        t "Nifty work, Mike!"
        t "You sure know how to clean up the ol’ nose repose."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna whisper onlayer sprite:
            anchor (0.5, 1.0)
            transform_anchor True
            xpos 0.5 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 
        pause 0.5
        #"{b}   [Tenna NEEDS a whispering sprite for this!]{/b}"
        t "{i}(Well, minus one or two spots.{/i}"
        t "{i}But hey, nobody’s perfect!){/i}"
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna norm onlayer sprite:
            anchor (0.5, 1.0)
            transform_anchor True
            xpos 0.5
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02
            ease_quad 0.15 yzoom 1.0 xzoom 1.0   
        pause 0.5 
        t "Anyhoo, breakfast is ready."
        t "Hope ya like sandwiches…"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna oops onlayer sprite:
            xoffset 150
            anchor (0.5, 1.0)
            transform_anchor True
            ease_quad 0.15 yzoom 0.98 xzoom 1.02
            ease_quad 0.15 yzoom 1.0 xzoom 1.0   
        pause 0.5 
        t "…‘cause I made TENNA them!"
        play sound "audio/sfx/general/snd_rimshot.wav"
        $ renpy.clear_retain();
        pause 3
        play sound "audio/sfx/general/snd_bump.wav"
        show tenna doodly onlayer sprite:
            xoffset 0
        pause 1
        #"  {b}[pause. Tenna’s sprite becomes off model/doodly]{/b}"
        t "{size=-8}Please eat all of them this time"
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
        hide star_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve
    elif nosegame_rank == arank:
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

        play sound "audio/sfx/general/snd_noise.wav"
        show tenna norm onlayer sprite:
            xpos 0.45 
            yzoom 1.0 xzoom 1.0 
            ease_quad 0.15 yzoom 0.98 xzoom 1.02 
            ease_quad 0.15 yzoom 1.0 xzoom 1.0 
        pause 0.5
        #"{u}{b}A Rank{/b}{/u}" ""
        t "Not bad!"
        t "You get an A for effort."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_bump.wav"
        show tenna think onlayer sprite:
            block:
                ease_quad 0.2 xzoom 0.99 yzoom 1.01
                ease_quad 0.2 xzoom 1.0 yzoom 1.0
            xoffset 0
            ease 0.5 xoffset -50
        pause 1
        show tenna think onlayer sprite:
            xoffset -50
        pause 0.25
        t "Could’ve done a li’l more organizing here and there, but…"
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna onchest onlayer sprite:
            block:
                ease_quad 0.2 xzoom 0.99 yzoom 1.01
                ease_quad 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "You know what? It's still early."
        t "I'll fix the rest!"
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna norm onlayer sprite:
            block:
                ease_quad 0.2 xzoom 0.98 yzoom 1.02
                ease_quad 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "Anyhoo, I toasted some bagels for breakfast!"
        t "And I made sure to get your FAVORITE cream cheese."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna onchest onlayer sprite:
            block:
                ease_quad 0.2 xzoom 0.99 yzoom 1.01
                ease_quad 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "You know, the kind with diced green onions?"
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        hide tenna onlayer sprite
        scene black
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide star_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve
    elif nosegame_rank == brank:
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        $ happy = happy -10
        pause 2
        show black onlayer bg with dissolve:
            alpha 0.75

        pause 1
        ##########"{u}{b}B Rank{/b}{/u}" ""
        play sound "audio/sfx/general/footstep1.ogg"
        queue sound ["audio/sfx/general/footstep2.ogg"]
        show tenna onchest onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            parallel:
                xpos 1.4 ypos 1.1
                easein_quad 2 xpos 0.55
                rotate 0
            parallel:
                ease 0.2 yoffset 0
                ease 0.2 yoffset 10
                repeat 5
        pause 2.5
        show tenna onchest onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.55 ypos 1.1 yoffset 10
        pause 0.5

        t "Uhm…?"
        t "Mike, I wanna give ya a pat on the back."
        t "Really, I do."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_bump.wav"
        show tenna frustrated onlayer sprite:
            subpixel True
            parallel:
                ease 1 rotate 2
                ease 1 rotate 0
                repeat
            parallel:
                ease_quad 0.5 xzoom 1.02 yzoom 0.98
                ease_quad 0.5 xzoom 1.0 yzoom 1.0
                repeat
        pause 0.5
        t "But I KNOW what you’re capable of, and this ain't it!"
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_wing.wav"
        $ tenna_face = 1
        show tenna oops onlayer sprite:
            xoffset 0 yoffset 0
            block:
                ease_quad 0.2 xzoom 0.98 yzoom 1.02
                ease_quad 0.2 xzoom 1.0 yzoom 1.0
            pause 0.5
            ease 1 yoffset 20
        pause 2
        t "Sorry, sorry!"
        t "Maybe you’re just hungry."
        $ renpy.clear_retain();
        pause 0.5
        play sound "audio/sfx/general/snd_bump.wav"
        show tenna think onlayer sprite:
            yoffset 0
            block:
                ease_quad 0.2 xzoom 0.99 yzoom 1.01
                ease_quad 0.2 xzoom 1.0 yzoom 1.0
        pause 1
        t "Would…"
        t "Would toast make ya feel better?"
        $ renpy.clear_retain();
        pause 2
        $ happy_score_store = happy
        hide tenna onlayer sprite
        scene black
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide star_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve
        $ tenna_face = 0
    elif nosegame_rank == crank:
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        $ happy = happy -20
        pause 2
        show black onlayer bg with dissolve:
            alpha 0.75

        pause 1
        play sound "audio/sfx/general/footstep1.ogg"
        queue sound ["audio/sfx/general/footstep2.ogg"]
        $ tenna_face = 1
        show tenna onchest onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            parallel:
                xpos 1.4 ypos 1.1
                easein_quad 2 xpos 0.55
                rotate 0
            parallel:
                ease 0.2 yoffset 0
                ease 0.2 yoffset 10
                repeat 5
        pause 2.5
        show tenna onchest onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 0.55 ypos 1.1 yoffset 10
        pause 0.5
        t "Did…"
        t "{size=-4}…Didja wake up on the wrong side of the bed or something?"
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_bump.wav"
        show tenna frustrated onlayer sprite:
            subpixel True
            parallel:
                linear 0.05 xoffset 0
                linear 0.05 xoffset 3
                repeat
            parallel:
                xzoom 1.01 yzoom 0.99 xpos 0.45
                ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "No, no, it’s fine."
        t "It’s FINE."
        show tenna frustrated onlayer sprite:
            xoffset 0
            subpixel True
            parallel:
                block:
                    ease 1.0 xzoom 1.02 yzoom 0.98
                    ease 1.0 xzoom 1.0 yzoom 1.0
                    repeat
            parallel:
                block:
                    ease 2 rotate 2
                    ease 2 rotate -2
                    repeat
        t "I’ll just, ha ha, clean everything FOR you!"
        t "No big deal!"
        $ renpy.clear_retain();
        show tenna frustrated onlayer sprite:
            ease 1 xoffset 0
        pause 1
        play sound "audio/sfx/general/snd_hurt1.wav"
        show tenna sad onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            xoffset 0
            xzoom 1.0 yzoom 1.0
            ease_quad 2 yzoom 0.98 xzoom 1.02
        pause 2
        t "On my own."
        $ renpy.clear_retain();
        pause 1
        play sound ["<silence 2>", "audio/sfx/general/snd_firework_send.wav"]
        show tenna sad onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                ease 2 rotate -3
                ease 2 rotate 3
                repeat
            parallel:
                ease_quad 2 yzoom 0.98 xzoom 1.02
                ease_quad 2 xzoom 1.07 yzoom 0.93
        pause 3.5
        t "…I don’t think I want breakfast anymore."
        $ renpy.clear_retain();
        pause 1
        play sound ["<silence 0.25>","audio/sfx/general/snd_slidewhistle_down.ogg"]
        show tenna sad onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                ease 2 rotate -3
                ease 2 rotate 3
                repeat
            parallel:
                ease_quad 5 xzoom 0.2 yzoom 0.2

        pause 4
        hide tenna onlayer sprite
        $ happy_score_store = happy
        scene black
        hide screen happy_meter onlayer pattern
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide star_tile onlayer pattern
        hide black onlayer pattern
        hide black onlayer bg
        with dissolve
        #"{b}   [This ending casues Tenna’s nose to go wrinkly. It’ll stay this way if you continue to get C ranks in the other games.]{/b}"
    elif nosegame_rank == zrank:
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        $ happy = 20
        pause 2.5
        show black onlayer bg with dissolve:
            alpha 0.75
        pause 1
        play sound "audio/sfx/general/whoosh.ogg"
        $ renpy.clear_retain();

        #"{u}{b}Z Rank (Game Over){/b}{/u}" ""
        show tenna freakout onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            xpos 1.2 ypos 1.1
            easein_quint 0.3 xpos 0.5
            rotate 0
            xzoom 1.0 yzoom 1.0
            block:
                linear 0.05 xoffset 0
                linear 0.05 xoffset 3
                repeat
        pause 0.1
        t "{size=+8}My NOSE DRAWER!!"
        t "Mike, it’s like a BOMB went off in here!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_hurt1.wav"
        show tenna freakout onlayer sprite:
            transform_anchor True
            ease 0.1 anchor (0.5, 1.0)
            parallel:
                ease_quad 0.5 xzoom 1.02 yzoom 0.98
                ease_quad 0.5 xzoom 1.0 yzoom 1.0
                repeat
        pause 0.5
        t "I…"
        play sound ["audio/sfx/general/snd_hurt1.wav","<silence 0.15>"] loop 
        show tenna freakout onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            parallel:
                ease_quad 0.3 xzoom 1.05 yzoom 0.95 
                ease_quad 0.3 xzoom 1.0 yzoom 1.0 
                repeat
            parallel:
                ease_quad 0.6 rotate -1
                ease_quad 0.6 rotate 1
                repeat
        play sound ["audio/sfx/general/snd_hurt1.wav"] loop 
        t "I…!"
        show tenna freakout onlayer sprite:
            transform_anchor True
            anchor (0.5, 1.0)
            parallel:
                ease_quad 0.2 xzoom 1.1 yzoom 0.9 
                ease_quad 0.2 xzoom 1.0 yzoom 1.0 
                repeat
            parallel:
                ease_quad 0.4 rotate -2
                ease_quad 0.4 rotate 2
                repeat
        t "I thought you CARED about this stuff!"
        t "{size=+8}About… ME!!"
        stop sound
        play sound "audio/sfx/general/snd_orchhit.wav"
        scene black
        hide black onlayer pattern
        hide black onlayer bg
        hide tenna freakout onlayer sprite
        hide screen happy_meter onlayer pattern
        hide happymeter_imagever onlayer sprite
        hide screen results onlayer bg
        hide screen result1 onlayer bg
        hide screen result2 onlayer bg
        hide screen minigame_rank onlayer bg
        hide star_tile onlayer pattern
        $ renpy.clear_retain();
        pause 1
        q "Of COURSE I care about ya, big guy!"
        q "{size=+8}THAT's an impostor!"
        #"{b}   [Mippins (in their Mike costume) runs in and points at you.]{/b}"
        $ renpy.clear_retain();
        play sound ["<silence 0.25>", "audio/sfx/general/snd_titan_wingshut.wav"]
        camera:
            perspective True
        show tenna freakout onlayer sprite:
            anchor (0.5, 1.0)
            xpos 0.55 ypos 1.1
            pause 0.3
            ease 1 xpos 0.35
        show smallmike angryhips onlayer sprite:
            xpos 1.0 ypos 0.7
            ease 2.3 xpos 0.45
        pause 2.3
        play sound "audio/sfx/general/snd_ftext_woodblock.wav"
        camera sprite:
            ypos 0
            ease 1 ypos 450
        pause 2
        t "MIKE!?"
        play sound "audio/sfx/general/snd_wing.wav"
        show smallmike chesthand onlayer sprite:
            transform_anchor True
            anchor (0.5,1.0) ypos 1.6 xpos 0.8
            xzoom -1.05 yzoom 0.95
            ease 0.2 xzoom -1.0 yzoom 1.0
        pause 0.5
        m "The ONE and ONLY."
        $ renpy.clear_retain();
        camera sprite:
            ypos 450
            ease 1 ypos 0
        pause 1
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna relieved onlayer sprite:
            anchor (0.5, 1.0)
            xpos 0.35 ypos 1.1
            ease_quad 0.3 xzoom 1.02 yzoom 0.98
            ease_quad 0.3 xzoom 1.0 yzoom 1.0 
        pause 1
        t "Oh, Mike, I’m SO glad you’re here!"
        $ renpy.clear_retain();
        pause 0.5
        $ tenna_face = 1
        play sound "audio/sfx/general/snd_bump.wav"
        show tenna think onlayer sprite at flipin:
            anchor (0.5, 1.0)
            xpos 0.35 ypos 1.1
            ease_quad 0.3 xzoom 1.02 yzoom 0.98
            ease_quad 0.3 xzoom 1.0 yzoom 1.0 
        pause 1
        t "But…"
        t "…if you’re the REAL Mike, who’s THAT down there?"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_smallswing.wav"
        camera sprite:
            ypos 0
            ease 0.5 ypos 450
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
            ease 0.1 xzoom 1.05 yzoom 0.95
            ease 0.1 xzoom 1.0 yzoom 1.0
        pause 1
        m "Let’s see who this ‘Mike’ REALLY is!"
        hide smallmike maskgrab onlayer sprite
        play sound "audio/sfx/general/snd_wideslash_low.wav"
        $ renpy.clear_retain();
        hide tenna think onlayer sprite
        jump tenna_gameover
        #"  {b}[Game over sequence plays]{/b}"
        return
    else:
        "what rank is this anyways?"


    jump intermission1