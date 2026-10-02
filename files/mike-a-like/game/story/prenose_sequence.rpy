label prenose_sequence:
    
    #"{b}[THE NEXT DAY]{/b}"
    hide screen quick_menu
    $ quick_menu = False
    $ renpy.stop_skipping()
    pause 2
    scene black
    show screen nvl_quickmenu()
    if persistent.skipbutton == True:
        show screen skip_intermission("prenose_intro_2")

    play music "audio/music/rolypoly.ogg" fadein 1.0 
    show trank_screen
    show trank_room_closed
    show tvpose_tile behind trank_room_closed
    show intermission_frame
    show intermission_backframe
    with wipedown
    $ renpy.pause(3, hard=True)

    show trank_screen:
        xpos 0.5
        linear 1 xpos 0.6
    show trank_room_closed:
        xpos 0.5
        linear 1 xpos 0.6
    $ renpy.pause(2, hard=True)

    play sound "audio/sfx/general/snd_board_escaped.wav" 

    show mikedark_pixel behind intermission_frame:
        xpos -50 ypos 170
        linear 2 xpos 200
    $ renpy.pause(3, hard=True)

    show mikedark_pixel behind intermission_frame:
        xpos 200 ypos 170
        linear 1 xpos 300
    pause 1
    play sound "audio/sfx/general/snd_board_playerhurt.wav" 
    queue sound "audio/sfx/general/snd_board_playerhurt.wav" 

    $ renpy.pause(3, hard=True)

    show mikedark_pixel behind intermission_frame:
        xpos 300 ypos 170
        linear 1 xpos 350
    pause 1
    play sound "audio/sfx/general/snd_board_playerhurt.wav" 
    queue sound "audio/sfx/general/snd_board_playerhurt.wav" 

    $ renpy.pause(3, hard=True)
    show mikedark_pixel behind intermission_frame:
        xpos 350 ypos 170
        linear 1 xpos 400   
    pause 1 
    play sound "audio/sfx/general/snd_board_playerhurt.wav" 
    queue sound "audio/sfx/general/snd_board_playerhurt.wav" 


    $ renpy.pause(1, hard=True)
    hide trank_room_closed


    play sound "audio/sfx/general/snd_impact.wav" 
    queue sound "audio/sfx/general/snd_board_secret_normal.wav" 
    show trank_room_open behind intermission_frame, mikedark_pixel:
        parallel:
            xpos 0.1 ypos 68
        parallel:
            linear 0.05 xoffset 0
            linear 0.05 xoffset -10
            linear 0.05 xoffset 0     
            linear 0.05 xoffset -10
            linear 0.05 xoffset 0       

    show mikedark_pixel behind intermission_frame:
        xpos 400 ypos 170
        pause 0.05
        linear 0.05 xpos 375 ypos 140
        linear 0.05 xpos 350 ypos 170 

    $ renpy.pause(4, hard=True)

    show mikedark_pixel behind intermission_frame:
        xpos 350 ypos 170
        linear 1 xpos 420
        pause 1
        xzoom -1.0
        pause 1
        xzoom 1.0
        pause 1.0
        xzoom -1.0
        pause 1.0
        xzoom 1.0
        pause 0.5
        xzoom -1.0
        pause 0.5
        xzoom 1.0
        pause 0.5
        xzoom -1.0
        pause 2

    $ renpy.pause(9, hard=True)


    label prenose_intro_2:

        stop music fadeout 3.0
        play sound "audio/sfx/general/snd_board_escaped.wav" 
        if persistent.skipbutton == True:
            hide screen skip_intermission
        hide screen nvl_quickmenu
        hide trank_screen
        hide trank_room_open
        hide tvpose_tile
        hide trank_room_closed
        hide mikedark_pixel
        hide intermission_frame
        hide intermission_backframe
        with wipedown

        pause 3


        play sound "audio/sfx/general/snd_step1.wav" 
        show mike_tennaroom_1:
            transform_anchor True
            anchor (0.0,0.0)
            xpos 0.05 ypos 0.25 alpha 0.0
            easein 1 xpos 0.05 ypos 0.3 alpha 1.0

        pause 3

        play sound "audio/sfx/general/snd_step2.wav" 
        show mike_tennaroom_1:
            transform_anchor True
            xpos 0.05 ypos 0.3 alpha 1.0

        show mike_tennaroom_2:
            transform_anchor True
            anchor (0.0,0.0)
            xpos 0.33 ypos 0.15 alpha 0.0
            easein 1 xpos 0.33 ypos 0.2 alpha 1.0

        pause 3

        play sound "audio/sfx/general/snd_step1.wav" 

        show mike_tennaroom_2:
            transform_anchor True
            xpos 0.33 ypos 0.2 alpha 1.0

        show mike_tennaroom_3:
            transform_anchor True
            anchor (0.0,0.0)
            xpos 0.67 ypos 0.05 alpha 0.0
            easein 1  xpos 0.67 ypos 0.1 alpha 1.0

        pause 3

        play sound "audio/sfx/general/snd_titan_wingshut.wav" 
        queue sound ["<silence 9>", "audio/sfx/general/snd_sparkle_glock.wav"]

        show mike_tennaroom_3:
            transform_anchor True
            anchor (0.0,0.0)
            xpos 0.67 ypos 0.1 alpha 1.0

        show black as black2:
            alpha 0.0
            easein_quad 2 alpha 0.2

        show tennasleep:
            subpixel True
            align (0.0,0.5)

            crop (0, 800, 0.0, 0.2)
            easein_quad 2 crop (0, 800, 1.0, 0.2)
            pause 1
            ease 5 crop (0,200, 1.0, 0.2)
            pause 1
            ease 3 crop(0,75, 1.0, 0.4)

        pause 14

        show tennasleep:
            subpixel True
            align (0.0,0.5)
            crop(0,75, 1.0, 0.4)

        hide screen quick_menu
        $ quick_menu = True
        $ renpy.run(Skip())
        with dissolve


        show choice_vignette with vignette

        menu:
            "{size=-8}Good MORNING, superstar.":
                jump prenose_cont
            "{size=-4}Wakey, wakey! Eggs and bakey!":
                jump prenose_cont
            "UP AND AT 'EM, BOSS!!":
                jump prenose_cont


    label prenose_cont:
        hide choice_vignette
        pause 0.2

        play audio "audio/sfx/general/snd_whip_throw_only.wav"
        play audio ["<silence 0.2>", "audio/sfx/general/snd_impact.wav"]
        play audio ["<silence 0.25>", "audio/sfx/general/snd_splat_cutoff.ogg","audio/sfx/general/snd_splat_cutoff.ogg","audio/sfx/general/snd_splat.wav"]
        play audio ["<silence 0.2>", "audio/sfx/general/snd_impact.wav"]
        play audio ["<silence 1.2>", "audio/sfx/general/snd_glassbreak.wav","audio/sfx/general/snd_glass_crunch.wav","<silence 0.2>", "audio/sfx/general/snd_glass_crunch.wav"]
        show tenna_arm:
            perspective True
            matrixanchor (1.0,0.5)
            matrixtransform ScaleMatrix (1.5,1.5,1.5) * OffsetMatrix (200,-25,0) *  RotateMatrix (0,-90,0)
            easein_quad 0.25 matrixtransform ScaleMatrix (1.5,1.5,1.5) * OffsetMatrix (200,-25,0) * RotateMatrix (0,90,0)


        show bacon onlayer sprite behind splat_red:
            subpixel True
            anchor (0.5,0.5) pos (0.5,0.8) zoom 0.0
            pause 0.35
            parallel:
                zoom 0.0
                easein_quint 0.1 zoom 1.0
            parallel:
                yoffset 0
                easeout 4 yoffset 300
            parallel:
                rotate 0
                easeout 4 rotate 30
        show splat_red onlayer sprite:
            alpha 0.5 anchor (0.5,0.8) pos (0.5,0.8)
            zoom 0.0
            pause 0.45
            easein_quint 0.05 zoom 1.0
        show toast onlayer sprite behind splat_yellow, splat_red:
            subpixel True
            anchor (0.5,0.5) pos (0.7,0.1) zoom 0.0
            pause 0.45
            parallel:
                zoom 0.0
                easein_quint 0.1 zoom 1.0
            parallel:
                yoffset 0
                pause 0.5
                easeout_quint 1 yoffset 800
            parallel:
                rotate 0
                easeout 2 rotate 30
        show splat_yellow onlayer sprite:
            alpha 0.5 anchor (0.7,0.1) pos (0.7,0.1)
            zoom 0.0
            pause 0.55
            easein_quint 0.05 zoom 1.0
        show orangeslice onlayer sprite behind splat_yellow, splat_red, splat_orange:
            subpixel True
            anchor (0.5,0.5) pos (0.2,0.3) zoom 0.0
            pause 0.55
            parallel:
                zoom 0.0
                easein_quint 0.1 zoom 1.0
            parallel:
                yoffset 0
                easeout 3 yoffset 800
            parallel:
                rotate 90
                easeout 5 rotate -10
        show splat_orange onlayer sprite:
            alpha 0.5 anchor (0.3,0.4) pos (0.3,0.4)
            zoom 0.0
            pause 0.65
            easein_quint 0.05 zoom 1.0



        show tennasleep:
            subpixel True
            parallel:
                pause 0.2
                rotate 0 ypos 0 xpos 0
                ease 0.2 rotate 270 ypos 1000 xpos 400
            parallel:
                yoffset 0
                pause 0.2
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5

        show mike_tennaroom_1:
            parallel:

                transform_anchor True
                anchor (0.0,0.0) pos (0.05, 0.3)
                pause 0.35
                rotate 0 xpos 0.05 ypos 0.3
                easein 0.05 rotate 45
                easeout 0.05 rotate 30
                easein 0.05 rotate 35
                easein 0.05 rotate 32
                pause 0.7
                ease 0.25 rotate 270 xpos 0.1 ypos 1.5
            parallel:
                yoffset 0
                pause 0.35
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5

        show mike_tennaroom_2:
            parallel:
                transform_anchor True
                anchor (0.0,0.0) pos (0.33, 0.2)
                pause 0.35
                rotate 0 xpos 0.33 ypos 0.2
                easein 0.05 rotate 45
                easeout 0.05 rotate 30
                easein 0.05 rotate 35
                easein 0.05 rotate 32
                pause 0.9
                ease 0.25 rotate 90 xpos 0.33 ypos 1.8
            parallel:
                yoffset 0
                pause 0.35
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5

        show mike_tennaroom_3:
            parallel:
                transform_anchor True
                anchor (0.0,0.0) pos (0.67, 0.1)
                pause 0.35
                rotate 0 xpos 0.67 ypos 0.1
                easein 0.05 rotate 45
                easeout 0.05 rotate 30
                easein 0.05 rotate 35
                easein 0.05 rotate 32
                pause 1.5
                ease 0.5 rotate 0 xpos 0.7 ypos 1.5
            parallel:
                yoffset 0
                pause 0.35
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5
                linear 0.05 yoffset 0
                linear 0.05 yoffset 5
            
        pause 4
        hide black2
        hide mike_tennaroom_1
        hide mike_tennaroom_2
        hide mike_tennaroom_3
        hide tennasleep
        #"{b}[No matter what you do, Tenna will wake VERY suddenly. Maybe one of his arms collides with you and you’re sent flying into the nearest wall (spilling breakfast everywhere.)]{/b}"
        play sound ["<silence 0.1>", "audio/sfx/general/snd_mercyadd.wav"]
        t "{size=+12}And a {image=funnytxt_lovely}{alt}LOVELY{/alt} MORNING to you too!!"
        #"{b}[Tenna realizes his breakfast is everywhere. and there's an awkward pause.]{/b}"
        $ renpy.clear_retain();
        pause 1

        t "Oopsie."
        $ renpy.clear_retain();

        play sound "audio/sfx/general/footstep1.ogg"
        queue sound ["audio/sfx/general/footstep2.ogg", "<silence 1.25>", "audio/sfx/general/snd_lancerwhistle.wav", "<silence 0.45>", "audio/sfx/general/snd_slidewhistle.wav"]

        pause 0.5

        show tenna blur_onchest onlayer sprite behind splat_yellow, splat_red, splat_orange, bacon, toast, orangeslice:
            zoom 2.0 
            transform_anchor True
            anchor (0.5,0.5)
            xalign 0.4
            parallel:
                xpos 1.5 ypos -2.0
                easein 2 xpos 0.5
                pause 1
                easein 0.1 xzoom -1.0
                pause 0.2
                easein 0.1 xzoom 1.0
                pause 1
                easein_quad 2 ypos 0.9
            parallel:
                yoffset 0
                easein 0.2 yoffset 10
                easein 0.2 yoffset 0
                repeat 5

        pause 8

        play sound ["<silence 0.25>", "audio/sfx/general/snd_squeaky.wav", "<silence 0.8>","audio/sfx/general/snd_whip_hard.wav"]
        play audio "audio/sfx/general/snd_smallswing.wav"

        show tenna blur_point onlayer sprite behind splat_yellow, splat_red, splat_orange:
            transform_anchor True
            anchor (0.5,1.0)
            xzoom 0.0 yzoom 1.0 xoffset 100 xpos 0.5 ypos 3.0
            easein 0.1 xzoom 1.0
            pause 0.1
            yoffset 0
            ease 0.2 yoffset 25 xzoom 1.02 yzoom 0.98
            ease 0.2 yoffset 0 xzoom 1.0 yzoom 1.0
            pause 0.2

        pause 1.5
        hide screen quick_menu
        $ quick_menu = False
        scene black

        hide tenna blur_point onlayer sprite
        hide splat_red onlayer sprite
        hide splat_yellow onlayer sprite
        hide splat_orange onlayer sprite
        hide bacon onlayer sprite
        hide orangeslice onlayer sprite
        hide toast onlayer sprite

        with scene_change

        pause 2

        show star_tile onlayer pattern 
        $ quick_menu = True

        with dissolve

        pause 1
        show bedroom onlayer bg at bgshow
        play sound ["<silence .1>","audio/sfx/general/snd_ftext_woodblock.wav"]

        pause 2
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna point jammies onlayer sprite with dissolve:
            anchor (0.5,1.0)
            xzoom 1.0 yzoom 1.0 xpos 0.55 ypos 1.1
            ease 0.2 xzoom 1.02 yzoom 0.98 xpos 0.55 ypos 1.1
            ease 0.2 xzoom 1.0 yzoom 1.0

        pause 1

        #"{b}[Tenna tries to make a cheeky joke.]{/b}"
        t "(Guess I…"
        show tenna whisper jammies onlayer sprite at flipin:
            yoffset -50 xoffset -50
            anchor (0.5,1.0)
            xzoom 1.0 yzoom 1.0 xpos 0.55 ypos 1.1
            ease 0.2 xzoom 1.02 yzoom 0.98 xpos 0.55 ypos 1.1
            ease 0.2 xzoom 1.0 yzoom 1.0
        t "{b}…oeuf{/b}-erreacted back there.)"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_cymbal.wav"
        pause 3

        play sound "audio/sfx/general/snd_squeaky.wav"
        show tenna oops onlayer sprite at flipin:
            yoffset -50 xoffset 0
            anchor (0.5,1.0)
            xzoom 1.0 yzoom 1.0 xpos 0.55 ypos 1.2
            ease 0.2 xzoom 1.02 yzoom 0.98 xpos 0.55 ypos 1.2
            ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        #"{b}[There’s an uncomfortable pause. The joke sucks.]{/b}
        t "Get it?"
        $ renpy.clear_retain();

        camera sprite:
            perspective True
            xpos -50 ypos -50 zpos -300
            ease 0.05 yoffset 5
            ease 0.05 yoffset 0
            ease 0.05 yoffset 5
            ease 0.05 yoffset 0
        camera bg:
            perspective True
            xpos -50 ypos -50 zpos -300
            ease 0.05 yoffset 5
            ease 0.05 yoffset 0
            ease 0.05 yoffset 5
            ease 0.05 yoffset 0
        camera pattern:
            perspective True
            xpos -50 ypos -50 zpos -300
            ease 0.05 yoffset 5
            ease 0.05 yoffset 0
            ease 0.05 yoffset 5
            ease 0.05 yoffset 0
        play sound "audio/sfx/general/snd_punch_ish_1.wav"
        pause 0.5
        play sound "audio/sfx/general/snd_egg.wav"
        t "{image=funnytxt_oeuferreacted}{alt}OEUF-ERREACTED{/alt}??"
        play sound "audio/sfx/general/snd_rimshot.wav"
        $ renpy.clear_retain();

        pause 3

        camera sprite:
            perspective True
            xpos 0 ypos 0 zpos 0
        camera bg:
            perspective True
            xpos 0 ypos 0 zpos 0
        camera pattern:
            perspective True
            xpos 0 ypos 0 zpos 0  


        pause 2

        play sound "audio/sfx/general/snd_hurt1.wav"
        $ tenna_face = 1

        pause 2.5
        play sound "audio/sfx/general/snd_noise.wav"

        show tenna think onlayer sprite:
            anchor (0.5,1.0)
            xzoom 1.01 yzoom 0.99 xpos 0.5 ypos 1.2
            ease 0.2 xzoom 1.0 yzoom 1.0


        pause 4


        show tenna norm onlayer sprite



        #"{b}[Another uncomfortable pause. Tenna looks awkward now.]{/b}"
        ### [pause]
        t "Say, Mike…"
        t "{size=-5}Did you change your tux recently?"

        $ renpy.clear_retain();

        pause 1

        camera sprite:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 0.5 ypos -25
            ease 0.5 ypos 0
            ease 0.5 ypos -25
            ease 0.5 ypos 0
        camera bg:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 0.5 ypos -25
            ease 0.5 ypos 0
            ease 0.5 ypos -25
            ease 0.5 ypos 0
        camera pattern:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 0.5 ypos -25
            ease 0.5 ypos 0
            ease 0.5 ypos -25
            ease 0.5 ypos 0

        pause 3

        play audio "audio/sfx/general/snd_bump.wav"

        show tenna think onlayer sprite

        pause 2

        $ tenna_face = 0

        show tenna think onlayer sprite
        pause 1

        play sound "audio/sfx/general/snd_squeaky.wav"

        show tenna point onlayer sprite:
            xzoom 1.01 yzoom 0.99 xpos 0.5 ypos 1.2
            ease 0.2 xzoom 1.0 yzoom 1.0


        pause 0.5
        play music "audio/music/miketheboard.ogg" fadein 1.0 

        # [pause. You nod awkwardly.]
        ### [pause as tenna tries thinking. he fails to put the two and two together]
        t "{size=+8}A-ha!"
        t "So THAT'S why you looked a little different!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_noise.wav"
        show tenna norm onlayer sprite:
            xzoom 1.01 yzoom 0.99 xpos 0.45 ypos 1.2
            ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "The lighter shade of gray suits you."
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_wing.wav"
        show tenna handwaves onlayer sprite:
            parallel:
                ease 0.05 xoffset 10
                ease 0.05 xoffset -10
                ease 0.05 xoffset 5
                ease 0.05 xoffset -5
                ease 0.05 xoffset 0
            parallel:
                xzoom 1.01 yzoom 0.99 xpos 0.5 ypos 1.2
                ease 0.2 xzoom 1.0 yzoom 1.0
        pause 0.5
        t "Oh, it's 6:30 already!"
        t "I've gotta get dressed!!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/whoosh.ogg"
        show tenna onchest jammies onlayer sprite:
            parallel:
                easeout 1 xoffset -1000
            parallel:
                ease 0.1 yoffset -30
                ease 0.1 yoffset 0
                repeat 
        pause 2.5
        hide tenna onchest jammies onlayer sprite
        pause 0.5

        play sound "audio/sfx/general/snd_slidewhistle.wav"
        show tenna onchest jammies onlayer sprite:
            transform_anchor True
            xanchor 0.5 yanchor 0.5
            xpos -100 ypos 0.2 rotate 0
            ease 2 xpos 0 rotate 30

        pause 2.5
        #"{b}[As Tenna moves off, you clear up the breakfast off of your face. Suddenly, Tenna slides back in.]{/b}"
        t "Actually…"
        t "Could ya do me a favor while I'm out?"
        $ renpy.clear_retain();
        camera sprite:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 2 xpos 200 ypos 0 zpos -300
        camera bg:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 2 xpos 200 ypos 0 zpos -300
        camera pattern:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 2 xpos 200 ypos 0 zpos -300

        pause 2
        t "It’s been a bit since I organized my nose drawer."
        t "Could ya give it a li'l spring cleaning?"
        $ renpy.clear_retain();

        pause 0.5

        play sound "audio/sfx/general/snd_leaf_dodge.wav"

        show grippins_note onlayer overlay:
            ypos 1.0
            easein_cubic 1 ypos 0.0

        pause 3

        play sound "audio/sfx/general/paper_hide.ogg"

        show grippins_note onlayer overlay:
            ypos 0.0
            easein_cubic 1 ypos 1.0

        pause 2
        hide grippins_note onlayer sprite
        camera sprite:
            perspective True
            xpos 200 ypos 0 zpos -300
            ease 0.5 ypos -10
            ease 0.5 ypos 0
            ease 0.5 ypos -10
            ease 0.5 ypos 0
        camera bg:
            perspective True
            xpos 200 ypos 0 zpos -300
            ease 0.5 ypos -10
            ease 0.5 ypos 0
            ease 0.5 ypos -10
            ease 0.5 ypos 0
        camera pattern:
            perspective True
            xpos 200 ypos 0 zpos -300
            ease 0.5 ypos -10
            ease 0.5 ypos 0
            ease 0.5 ypos -10
            ease 0.5 ypos 0
        pause 3
        t "That’s the ticket!"
        $ renpy.clear_retain();
        show tenna norm onlayer sprite
        camera sprite:
            perspective True
            xpos 200 ypos 0 zpos -300
            ease 2 xpos 0 ypos 0 zpos 0
        camera bg:
            perspective True
            xpos 200 ypos 0 zpos -300
            ease 2 xpos 0 ypos 0 zpos 0
        camera pattern:
            perspective True
            xpos 200 ypos 0 zpos -300
            ease 2 xpos 0 ypos 0 zpos 0
        pause 2
        t "All you need to do is put those noses in their proper places."
        play sound ["<silence 0.5>","audio/sfx/general/snd_splat.wav"]
        t "Everything’s labelled, so it SHOULD be easy-peasy {image=funnytxt_lemonsqueezy}{alt}lemon squeezy{/alt}!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_lancerwhistle.wav"
        show tenna norm onlayer sprite:
            transform_anchor True
            xanchor 0.5 yanchor 0.5
            xpos 0 ypos 0.2 rotate 30
            yoffset 0
            ease 0.1 yoffset -10
            ease 0.1 yoffset 0 
            ease 0.1 yoffset -10
            ease 0.1 yoffset 0 
        pause 1
        t "And while you’re at it, I’ll whip us up a PROPER breakfast."
        play sound "audio/sfx/general/snd_squeaky.wav"
        show tenna point onlayer sprite:
            transform_anchor True
            xanchor 0.5 yanchor 0.5
            xpos -0.1 ypos 0.15 rotate 30
            xzoom -1.05 yzoom 0.95
            ease 0.2 xzoom -1.0 yzoom 1.0
        pause 0.5
        t "Nothing’s worse than working an empty stomach!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        show tenna point onlayer sprite:
            transform_anchor True
            xanchor 0.5 yanchor 0.5
            xpos -0.1 ypos 0.15 rotate 30
            xzoom -1.0
            easeout 1 xpos -0.5 ypos 0.2 rotate 0

        pause 2

        camera sprite:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 2 xpos 200 ypos 0 zpos -300
        camera bg:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 2 xpos 200 ypos 0 zpos -300
        camera pattern:
            perspective True
            xpos 0 ypos 0 zpos 0
            ease 2 xpos 200 ypos 0 zpos -300
        pause 2.5

        hide tenna point onlayer sprite
        hide bedroom onlayer bg
        hide star_tile onlayer pattern

        play sound "audio/sfx/general/footstep1.ogg"
        queue sound "audio/sfx/general/footstep2.ogg"

        show drawerbg

        show drawercontents:
            xpos 530 ypos 0.6 

        show drawerfront:
            xalign 1.0 

        show mike drawer1:
            anchor (0.5,1.0)

            xpos -0.1 ypos 1.0
            ease 2 xpos 0.465

        pause 2.1

        play sound "audio/sfx/general/snd_noise.wav"

        show mike drawer2:
            anchor (0.5,1.0)
            parallel:
                xpos 0.465 ypos 1.01
                pause 1
                ease 1 xpos 0.45
            parallel:
                xzoom 1.0 yzoom 1.0
                ease 0.2 xzoom 1.02 yzoom 0.98
                ease 0.2 xzoom 1.0 yzoom 1.0



        show drawercontents:
            xpos 530
            pause 1
            ease 1 xpos 520

        pause 1.5
        stop music

        play audio "audio/sfx/general/snd_impact.wav"
        play audio ["<silence 0.05>", "audio/sfx/general/snd_fall.wav"]

        show mike drawer3:
            anchor (0.5,0.5)
            xpos 0.45 ypos 0.38 rotate 0
            easein 0.4 xpos -0.6 ypos -1.0 rotate 720

        show drawercontents:
            xpos 520
            linear 6.5  xpos -19000

        pause 3
        hide mike drawer3
        hide drawercontents
        hide drawerfront
        hide drawerbg
        hide black
        hide screen quick_menu
        $ quick_menu = False

        #"{b}[Tenna moves off, and you open the drawer. Turns out, the nose drawer is its own hammerspace dimension. There seems to be an infinite amount of noses…! {/b}"

        #"{b}This is where the minigame is introduced, with an introduction/tutorial screen.]{/b}"
        jump nose_organization