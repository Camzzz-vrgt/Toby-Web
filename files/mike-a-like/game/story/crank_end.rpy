label c_rank_end:
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
    show crank_cg onlayer bg
    camera bg:
            perspective True
            subpixel True
            ypos -60 zpos -350 xpos 0
            ease 45 ypos 0 zpos 0 xpos 0

    pause 1.5
    play music "audio/music/ruderbuster.ogg" 
    $ renpy.music.queue("<silence 1>", clear_queue=False)
    n_end "It’s a good thing you weren't the only one who vandalized the T-Rank Room."
    n_end "Half the studio gave Tenna a gift that he’d NEVER forget. He hasn't left his room since."
    n_end "Once he pulls himself together, you KNOW he'll try to sniff out the ringleader…"
    n_end "…But your trusty coworkers will make sure you’d never get caught."
    n_end "Your illicit graffiti already earned their respect."
    n_end "But when they got word that you pretended to be Mike for a day, you become a living legend overnight."
    n_end "Suddenly, everybody knows your name."
    n_end "You’re the main event at every employee get-together: including your beloved underground casino."
    n_end "And you make friends all across the studio."
    n_end "People flock to chat with you, drink with you, and give you a shoulder to cry on when the workdays get tough."
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
    n_end "You’re in their corner, and they’re all in yours.{w} For you, that trust is the greatest gift of all."

    pause 1


    if _in_replay == True:
        hide crank_cg onlayer bg
        hide bg_black
        hide bg_black2
        with fade
        pause 1
        $ renpy.end_replay() 
    else:
        show crank_cg onlayer bg:
            alpha 1.0
            easein 1 alpha 0.5
        hide bg_black
        hide bg_black2

        pause 1


        $ renpy.end_replay()

        show screen ending_title("c") with dissolve

        $ persistent.ending_obtained_c = True

        play sound "<silence 0.01>"
        queue sound [ "audio/sfx/general/snd_splat.wav","<silence 2>", "audio/sfx/general/snd_mercyadd.wav","<silence 0.4>", "audio/sfx/general/snd_ftext_woodblock.wav"]
        play audio  ["<silence 4.5>", "audio/sfx/general/snd_sparkle_glock.wav"] 

        $ renpy.pause(12, hard=True)

        hide screen ending_title

        hide crank_cg onlayer bg

        with dissolve

        stop music fadeout 3

        pause 5

        jump credits_list