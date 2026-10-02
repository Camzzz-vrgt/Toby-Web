label s_rank_end:
    hide screen quick_menu
    $ quick_menu = False
    $ renpy.stop_skipping()

    scene black
    play sound ["<silence 0.5>", "audio/sfx/general/snd_ftext_woodblock.wav"]
    show bg_black as bg_black2 onlayer sprite:
        ypos -0.5
        pause 0.5
        easein_elastic 1.5 ypos -0.79
    show bg_black onlayer sprite :
        ypos 0.5
        pause 0.5
        easein_elastic 1.5 ypos 0.79
    show srank_cg onlayer bg:
        alpha 1.0
    camera bg:
            perspective True
            subpixel True
            ypos 100 zpos -250 xpos 180
            ease 45 ypos 0 zpos 0 xpos 0

    pause 1.5
    play music "audio/music/dump.ogg" 
    $ renpy.music.queue("<silence 1>", clear_queue=False)
    n_end "You get your wish."
    n_end "The green guy doesn’t make a peep about you or the new casino to Tenna."
    n_end "You can drink, party, and gamble every night."
    n_end "You’re free from the strictures of censors and family-friendly programming."
    n_end "You’re still asked to step in as Mike every now and then, though."
    n_end "The green guy has more evidence to find, more places to visit."
    n_end "You get bonus points from your shifts.\nIt’s a solid deal."
    n_end "But you also notice the whispers and side-eyes you get from the studio staff members you once called friends."
    n_end "One time, someone even calls you a ‘screenlicker’ over a heated game of poker."
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
    n_end "Somehow… you can’t help but feel\nlonelier than before."

    pause 1


    if _in_replay == True:
        hide srank_cg onlayer bg
        hide bg_black
        hide bg_black2
        with fade

        pause 1
        $ renpy.end_replay() 
    else:
        show srank_cg onlayer bg:
            alpha 1.0
            easein 1 alpha 0.5
        hide bg_black
        hide bg_black2

        pause 1


        show screen ending_title("s") with dissolve

        $ persistent.ending_obtained_s = True

        play sound "audio/sfx/general/snd_wing.wav"
        queue sound ["audio/sfx/general/snd_wing.wav","<silence 0.6>", "audio/sfx/general/snd_wing.wav","<silence 0.5>", "audio/sfx/general/snd_wing.wav", "<silence 1.2>", "audio/sfx/general/resultsscreen_impact.ogg"]
        play audio  ["<silence 4.5>", "audio/sfx/general/snd_sparkle_glock.wav"] 
        $ renpy.pause(12, hard=True)

        hide screen ending_title 
        hide srank_cg onlayer bg

        with dissolve

        stop music fadeout 3

        pause 5

        jump credits_list
