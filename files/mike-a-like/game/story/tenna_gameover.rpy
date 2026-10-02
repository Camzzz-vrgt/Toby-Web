

define longfade = Fade(1.0, 2.0, 1.0)


label tenna_gameover:
        camera bg:
            perspective True
            ypos 0
        camera sprite:
            perspective True
            ypos 0
        show tenna doodly onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0) xoffset 0
            xpos 0.5 ypos 1.1
        with flashon
        #"{b}   [In true Scooby-Doo fashion, the Mike head goes flying off of the screen — revealing your true form as a Pippins to Tenna and Mippins!Mike.]{/b}"
        t "…"
        show tenna angry onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            ypos 1.0 xoffset -30 rotate 0.1
            yoffset 50 xzoom 1.0 yzoom 1.0
            easein_quint 0.5 yoffset 80 xzoom 1.01 yzoom 0.99
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_glassbreak.wav"
        pause 0.5
        play music "audio/music/doomboard.ogg"
        $ renpy.music.queue("<silence 1>", clear_queue=False)
        play background "audio/sfx/general/snd_tv_alarm.wav" loop volume 0.4
        play background2 "audio/sfx/general/snd_tv_static.wav" loop volume 0.7
        show fire onlayer bg:
            parallel:
                xpos -600 ypos -600 xzoom 1.5 yzoom 1.5
            parallel:
                function WaveShader(period=6.046, amp=2.296, speed=1.288, direction='y')
            parallel:
                alpha 0
                easein 1 alpha 1
            parallel:
                yoffset 400
                ease 1 yoffset 0

        show fire as fire2 onlayer bg:
            parallel:
                xpos -1200 ypos -600 xzoom -1.5 yzoom 1.5
            parallel:
                function WaveShader(period=6.046, amp=2.296, speed=1.288, direction='y')
            parallel:
                alpha 0
                easein 1 alpha 0.25
            parallel:
                yoffset 400
                ease 1 yoffset 0

        show red onlayer bg:

                alpha 0 zoom 3 xpos -600 ypos -600
                easein 1 alpha 0.5
        show tenna angry onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                matrixcolor TintMatrix("#ffffff") * BrightnessMatrix(0.0) * ContrastMatrix(1.0)
                easein_quint 0.5 matrixcolor TintMatrix(Color(rgb=(.8,.5,.5)))*BrightnessMatrix(-0.02) * ContrastMatrix(1.1)

        pause 1.5


        t "{size=+8}You."
        show tenna angry onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                linear 0.12 xoffset -35
                linear 0.12 xoffset -30
                repeat
            parallel:
                ease 0.12 rotate -0.2
                ease 0.12 rotate 0.2
                repeat
        t "Looks like those paycuts weren't enough, huh?"
        $ renpy.clear_retain();
        camera bg:
            ypos 200 zpos 700
        camera sprite:
            ypos 200 zpos 700

        show tenna angry onlayer sprite:
            transform_anchor True
            subpixel True
            anchor (0.5, 1.0)
            parallel:
                linear 0.05 xoffset -40
                linear 0.05 xoffset -30
                repeat
            parallel:
                linear 0.05 rotate 0.8
                linear 0.05 rotate -0.8
                repeat
        t "{size=+8}That's it!"
        t "{size=+12}That's! It!!"
        $ renpy.clear_retain();
        stop music
        play sound "audio/sfx/general/snd_closet_impact.ogg"
        play audio ["<silence 0.25>", "audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact_short.ogg","audio/sfx/general/snd_impact.wav" ]
        camera bg:
            ypos 200 zpos 700
            ease 0.05 xpos -50 ypos 50 zpos -100
        camera sprite:
            ypos 200 zpos 700
            ease 0.05 xpos -50 ypos 50 zpos -100
            # zpos 100
            # ease 0.05 zpos -100
        show tenna fired onlayer sprite:
            parallel:
                ease 0.05 xzoom 1.02 yzoom 0.98
                ease 0.05 xzoom 1.0 yzoom 1.0
            parallel:
                ease 0.05 xoffset 50
                ease 0.05 xoffset -50
                ease 0.05 xoffset 30
                ease 0.05 xoffset -30
                ease 0.05 xoffset 10
                ease 0.05 xoffset -10
                ease 0.05 xoffset 5
                ease 0.05 xoffset -5
                ease 0.05 xoffset 0
        $ renpy.pause(0.2, hard=True)
        show screen fired_text()
        $ renpy.pause(5.1, hard=True)
        $ tenna_face = 0
        show black onlayer overlay
        hide screen fired_text
        hide tenna onlayer sprite
        hide black onlayer bg
        hide fire2 onlayer bg
        hide fire onlayer bg
        hide red onlayer bg
        stop music fadeout 1.0
        stop background fadeout 1.0
        stop background2 fadeout 1.0
        call screen gameover(minigame=True, minigame_label= gameover_minigame_label) with longfade

        #"    {b}[The Door Slams and the screen turns black]{/b}"
        #"    {b}[Game Over here.]{/b}"