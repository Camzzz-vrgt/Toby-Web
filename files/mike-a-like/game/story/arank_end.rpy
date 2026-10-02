label a_rank_end:
    hide screen quick_menu
    $ quick_menu = False
    $ renpy.stop_skipping()

    scene black
    show arank_cg onlayer bg
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
            ypos 0 zpos -350 xpos 50
            ease 45 ypos 0 zpos 0 xpos 0

    pause 1.5
    play music "audio/music/dump.ogg"
    $ renpy.music.queue("<silence 1>", clear_queue=False)
    n_end "…Nothing, really."
    n_end "Tenna’s as much of a control freak as ever: sending you and your coworkers left, right, and center."
    n_end "You talk smack about him behind his back… but it’s all hot air. The complaining never goes anywhere."
    n_end "Every day’s the same old tug of war."
    n_end "A small prank here, a retaliatory paycut there…"
    n_end "…and a sprinkle of yelling on both sides, just for good measure."
    n_end "At least there’s the underground casino."
    n_end "But with no follow-up from the green guy…"
    n_end "…who knows how long it’ll be before Tenna short-circuits over dirty deals in DARK DOLLARS?"
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
    n_end "So yeah.\nYou changed nothing."
    n_end "TV Time is still safe, and cuddly, and boring."
    n_end "In other words…\n{w}it's business as usual."


    if _in_replay == True:
        hide arank_cg onlayer bg
        hide bg_black
        hide bg_black2
        with fade
        pause 1
        $ renpy.end_replay() 
    else:
        show arank_cg onlayer bg:
            alpha 1.0
            easein 1 alpha 0.5
        hide bg_black
        hide bg_black2

        pause 1


        $ renpy.end_replay()

        show screen ending_title("a") with dissolve

        $ persistent.ending_obtained_a = True

        play sound ["<silence 0.5>", "audio/sfx/general/snd_firework_send.wav"]
        play audio  ["<silence 4.5>", "audio/sfx/general/snd_sparkle_glock.wav"] 

        $ renpy.pause(12, hard=True)

        hide screen ending_title

        hide arank_cg onlayer bg

        with dissolve

        stop music fadeout 3

        pause 5

        jump credits_list
