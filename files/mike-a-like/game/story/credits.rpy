label credits_list:

    if persistent.skipbutton == True:
        show screen skip_intermission("creditsend")

    play music "<from 129.8>audio/music/tvtime.ogg" fadein 0.01 
    ## total time ~ 26 secs
    $ renpy.music.queue("<silence 1>", clear_queue=False)

    $ quick_menu = False


    show credits_header "Programming"
    show credits_name "Azxiana\nKigyoDev\nCuteShadow\nRenpyRemix\nStella @ MVN!\nWattson\nBamboocalc\nFeniks\nKyoryuukunn\nYuri"

    show pippins_pixel:
      xpos 290 ypos 460
    show pippins_pixel as pippins2:
      xpos 365 ypos 460
    show pippins_pixel as pippins3:
      xpos 440 ypos 460

    $ renpy.pause(4, hard=True)

    hide pippins3
    hide pippins2
    hide pippins_pixel
    hide credits_header
    hide credits_name


    show credits_header "Music":
        yoffset 50
    show credits_name "NarcolepsyDriver\nrootvegetableboy\nRainyWishes\nmagic&melodies":
        yoffset 50

    show shadowguy_pixel as shadowguy2:
      xpos 270 ypos 350 
    show shadowguy_pixel:
      xpos 345 ypos 350
    show shadowguy_pixel as shadowguy3:
      xpos 420 ypos 350  

    $ renpy.pause(4, hard=True)

    hide shadowguy3
    hide shadowguy2
    hide shadowguy_pixel

    hide credits_header
    hide credits_name


    show credits_header "Writing Assistance":
        yoffset 50
    show credits_name "Cluniies\nPubbee\nSaffycell":
        yoffset 50

    show zapper_pixel:
      xpos 275 ypos 350 
    show shuttah_pixel:
      xpos 342 ypos 370
    show watercooler_pixel:
      xpos 440 ypos 350  

    $ renpy.pause(4, hard=True)

    hide credits_header
    hide credits_name
    hide zapper_pixel
    hide shuttah_pixel
    hide watercooler_pixel

    show ramb_pixel:
        xpos 367 ypos 475
    show uglytenna_1:
        xpos 325 ypos 475
    show uglytenna_2:
        xpos 445 ypos 475


    show credits_header "Beta Testing"
    show credits_name "Dookins\nmxsoda\nInkedEntropy\nAlleycatforthelulz\nBasically_Kiyotaka\nPubbee\nrunicmagitek\nrianofski\nCluniies"

    $ renpy.pause(4, hard=True)

    hide credits_header
    hide credits_name
    hide ramb_pixel
    hide uglytenna_2
    hide uglytenna_1


    if t_rank_end_get:
      show mike_pixel:
          xpos -0.15 ypos 0.5 yoffset 104
          linear 2 xpos 0.35 ypos 0.5 yoffset 104
    else:
        show mike_pixel:
            xpos -0.3 ypos 0.5 yoffset 104
            linear 2 xpos 0.35 ypos 0.5 yoffset 104

    if c_rank_end_get:

        show tennasmall_pixel:
            xpos -0.15 ypos 0.713
            linear 2 xpos 0.5 ypos 0.713
    elif t_rank_end_get:
        show tenna_huge_alt behind mike_pixel:
            xpos 0.4 ypos 0.55


    else:


        show tenna_pixel:
            xpos -0.2 ypos 0.5
            linear 2 xpos 0.45 ypos 0.5


    show credits_header "Special Thanks":
        yoffset -50
    show credits_name "TV Time Zine Team\nuprank\nMy Friends\nToby Fox\nTemmie Chang\nThe Deltarune Team":
        yoffset -50

    $ renpy.pause(4, hard=True)

    hide credits_header
    hide credits_name


    show credits_header "And…":
        yoffset 50
    show credits_name "you, for playing!":
        yoffset 50

    $ renpy.pause(5.25, hard=True)


    if t_rank_end_get:
      show mike_pixel:
          xpos 0.35 ypos 0.5 yoffset 104
          linear 2 xpos 1.15 ypos 0.5 yoffset 104
    else:
        show mike_pixel:
          xpos 0.35 ypos 0.5 yoffset 104
          linear 2 xpos 1.15

    if c_rank_end_get:
        show tennasmall_pixel:
          xpos 0.5 ypos 0.713
          linear 2 xpos 1.3
    elif t_rank_end_get:
        pass
    else:
        show tenna_pixel:
          xpos 0.45 ypos 0.5
          linear 2 xpos 1.25


    hide credits_header
    hide credits_name

    $ renpy.pause(3, hard=True)
    hide mike_pixel
    hide tenna_pixel
    hide tennasmall_pixel
    hide screen skip_intermission
    hide tenna_huge_alt
    with wipedown

    $ happy_score_store = 80
    $ happy = happy_score_store

    if not persistent.skipbutton:
        $ persistent.skipbutton = True      
        play sound "audio/sfx/general/snd_board_text_main_end.wav" 
        show credits_header "{color=ffffff}Unlocked the skip button…{/color}":
            yoffset 100
        $ renpy.pause(2, hard=True)
    if not persistent.extras_unlocked:
        $ persistent.extras_unlocked = True
        play sound "audio/sfx/general/snd_link_sfx_itemget.wav" 
        show credits_header2 "{color=F26282}…and the extras menu!{/color}":
            yoffset 150

        $ renpy.pause(5, hard=True)

    hide credits_header
    hide credits_header2
    with wipedown

    pause 3


    label creditsend:
        return