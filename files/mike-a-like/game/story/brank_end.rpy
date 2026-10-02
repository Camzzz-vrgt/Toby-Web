label b_rank_end:
    hide screen quick_menu
    $ quick_menu = False
    $ renpy.stop_skipping()


    scene black
    show brank_cg onlayer bg
    play sound ["<silence 0.5>", "audio/sfx/general/snd_ftext_woodblock.wav"]
    show bg_black as bg_black2 onlayer sprite:
        ypos -0.5
        pause 0.5
        easein_elastic 1.5 ypos -0.79
    show bg_black onlayer sprite :
        ypos 0.5
        pause 0.5
        easein_elastic 1.5 ypos 0.79
    camera bg:
            perspective True
            subpixel True
            ypos -20 zpos -350 xpos 200
            ease 45 ypos 0 zpos 0 xpos 0

    pause 1.5
    play music "audio/music/dump.ogg" 
    $ renpy.music.queue("<silence 1>", clear_queue=False)
    n_end "True to his word, the green guy never asks you for help again."
    n_end "Not like THAT mattered. Your coworkers are pleased, and so are you."
    n_end "That kiss-up got what he deserved."
    n_end "Every night, you sneak to the furthest edges of TV World and sit down for a round of blackjack."
    n_end "You let the thrill of a good roll wash over you as you chat with your friends and take swigs of battery acid…"
    n_end "…and you’ve never been happier."
    n_end "But one day, the doors are thrown wide open."
    n_end "A suspiciously large Darkner invites himself in — and the whole vibe is ruined forever."
    n_end "‘Goddamn it, Tenna!’, you all think. ‘Our underground establishment’s going G-rated!’"
    show bg_black as bg_black2 onlayer sprite:
        ypos -0.79
        pause 0.5
        easeout 1.5 ypos -1.2
    show bg_black onlayer sprite :
        ypos 0.79
        pause 0.5
        easeout 1.5 ypos 1.2
    camera bg:
            perspective True
            subpixel True
            ease 3 ypos 0 zpos 0 xpos 0
    pause 3
    n_end "And that’s exactly where it went."
    n_end "Because Mr. Tenna, as always, hates the REAL kind of fun."

    pause 1

    if _in_replay == True:
        hide brank_cg onlayer bg
        hide bg_black
        hide bg_black2
        with fade

        pause 1
        $ renpy.end_replay() 
    else:
        show brank_cg onlayer bg:
            alpha 1.0
            easein 1 alpha 0.5
        hide bg_black
        hide bg_black2

        pause 1


        show screen ending_title("b") with dissolve

        $ persistent.ending_obtained_b = True

        play sound "audio/sfx/general/snd_sonar.wav"
        play audio  ["<silence 4.5>", "audio/sfx/general/snd_sparkle_glock.wav"] 
        $ renpy.pause(12, hard=True)

        hide screen ending_title 
        hide brank_cg onlayer bg

        with dissolve

        stop music fadeout 3

        pause 5

        jump credits_list