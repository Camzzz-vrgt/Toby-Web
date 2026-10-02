label t_rank_end:
    hide screen quick_menu
    $ quick_menu = False
    $ renpy.stop_skipping()

    scene black
    play sound ["<silence 0.5>", "audio/sfx/general/snd_ftext_woodblock.wav"]
    show trank_cg onlayer bg
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
            ypos 50 zpos -350 xpos -50
            ease 45 ypos 0 zpos 0 xpos 0

    pause 1.5
    play music "audio/music/pushing_buddies.ogg" 
    $ renpy.music.queue("<silence 1>", clear_queue=False)
    n_end "Tenna likes you SO much that he asks for you again."
    n_end "And again. And again."
    n_end "Soon, he's asking for you every day."
    n_end "Though Tenna isn't yet aware of it, you've become his favorite Mike."
    n_end "You KNOW this is true because a certain trio never gets in costume anymore."
    n_end "And the green weirdo's PISSED."
    n_end "You can't visit the new casino, either."
    n_end "If you took your boss to your coworkers’ hidden haunt, he’d have a heart attack."
    n_end "Not like you could, anyways. You're practically superglued to his side."
    n_end "Still. When he’s not running the show, the big guy’s a sweetheart."
    n_end "Domestic, too."
    n_end "Every night, he cooks you a warm, filling meal."
    n_end "After that, he puts on a new film or show to help you both wind down."
    n_end "Hell, you’ve even started sharing a bed with him… as his plush toy."
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
    n_end "The more you spend time with him, the more you find yourself thinking:"
    n_end "'Maybe being by Tenna’s side… isn’t so bad.'"

    pause 1

    if _in_replay == True:
        hide trank_cg onlayer bg
        hide bg_black
        hide bg_black2
        with fade

        pause 1
        $ renpy.end_replay() 
    else:
        show trank_cg onlayer bg:
            alpha 1.0
            easein 1 alpha 0.5
        hide bg_black
        hide bg_black2

        pause 1


        show screen ending_title("t") with dissolve

        $ persistent.ending_obtained_t = True

        play sound ["<silence 0.8>", "audio/sfx/general/snd_won.wav"]
        play audio ["<silence 0.5>", "audio/sfx/general/snd_grab.wav"]
        play audio ["<silence 0.1>","audio/sfx/general/snd_squeaky.wav"]
        play audio  ["<silence 4.5>", "audio/sfx/general/snd_sparkle_glock.wav"] 
        $ renpy.pause(12, hard=True)

        hide screen ending_title 
        hide trank_cg onlayer bg

        with dissolve

        stop music fadeout 3

        pause 5

        jump credits_list