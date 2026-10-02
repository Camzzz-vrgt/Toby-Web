label testroom:

    hide choice_vignette with vignette
    scene red

    $ quick_menu = True

    "this is a room for tests"

    "first, do you want to go to games, or to normal tests?"

    menu:
        "games":
            jump gamepicker

        "normal tests":
            jump normaltests

    label gamepicker:

        "which game do you want to pick? {a=jump:testroom}click here to return to the main test room{/a}"

        menu:
            "noses":
                jump nose_organization
            "dance":
                jump simon_says
            "therapy":
                jump therapy

    label normaltests:

        "view: {a=jump:pixelshowcase}pixels{/a}, {a=jump:spritepicker}spritepicker{/a},{a=jump:dialogue}dialogue tests{/a} or{a=jump:somethingelse} something else.{/a} {a=jump:menureturn}or you could return to the main game{/a}"

    label somethingelse:

        "view: {a=jump:happymeter}happy meter{/a}, {a=jump:bgs}bgs{/a}, {a=jump:tennadance_test}tenna dance test,{/a} , {a=jump:ending_test}ending screen test,{/a} {a=jump:menureturn}or you could return to the main game{/a}"


    label tennadance_test:


        show tenna_alert_masked

        "masked without full"
        show screen tenna_alert_full
        hide tenna_alert_masked
        "tenna_alert"

        hide screen tenna_alert_full

        show screen repeat_after_me
        
        "repeat_after_me"


        jump normaltests

    label splat_test:

        show bacon onlayer sprite behind splat_red:
            subpixel True
            anchor (0.5,0.5) pos (0.5,0.8)
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
            pause 0.1
            easein_quint 0.05 zoom 1.0
        pause 0.1
        show toast onlayer sprite behind splat_yellow, splat_red:
            subpixel True
            anchor (0.5,0.5) pos (0.7,0.1)
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
            pause 0.1
            easein_quint 0.05 zoom 1.0
        pause 0.1
        show orangeslice onlayer sprite behind splat_yellow, splat_red, splat_orange:
            subpixel True
            anchor (0.5,0.5) pos (0.2,0.3)
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
            pause 0.1
            easein_quint 0.05 zoom 1.0
        pause 0.1

        show orangeslice onlayer sprite

        pause

        "splat!"

        jump normaltests

    label ending_test:
        show screen ending_title("t") with dissolve

        pause 12

        hide screen ending_title with dissolve

        pause 3

        jump normaltests


    
    label gameover_test:

        call screen gameover(minigame=False, minigame_label="therapy")



        jump normaltests


    label bgs:
        "bg showcase"

        show greenroom:
            zoom 0.5

        "greenroom"

        show stage:
            zoom 0.5

        "stage"

        show bedroom:
            zoom 0.5

        "bedroom"

        show mikeroom:
            zoom 0.5

        "mikeroom"

        show backroom:
            zoom 0.5

        "backroom"

        show coldplace:
            zoom 0.5

        "coldplace"

        hide coldplace
        hide stage
        hide greenroom
        hide backroom
        hide mikeroom
        hide bedroom

        scene black
        show star_tile

        "startile"

        hide star_tile
        show weather_tile

        "weathertile"

        hide weather_tile
        show dice_tile

        "dicetile"

        hide dice_tile
        show tv_tile

        "tvtile"

        "now to test the transforms for backgrounds"

        show bedroom at bgshow

        "show bg"

        show bedroom at bghide

        "hide bg"

        window hide

        hide bedroom
        hide tv_tile
        show dice_tile
        with scene_change

        pause 1

        show mikeroom at bgshow

        pause 0.5

        window show
        "scene change!"

        hide tv_tile

        scene red


        jump normaltests


    label happymeter:

        "it's time for the happy happy meter test!"
        $ happy = 80
        show screen happy_meter("right") with easeinright
        "let's start"

        $ happy = 140

        "t rank!"

        $ happy = 120

        "s rank"

        $ happy = 100

        "a rank"

        $ happy = 80

        "b rank"

        $ happy = 60

        "c rank"

        $ happy = 25

        "z rank - GAME OVER"

        "and now we're going to call the results 'screen' for minigames"
        hide screen happy_meter
        $ therapy_score = 4
        $ therapy_rank = "t"

        show black onlayer pattern with easeintop

        show star_tile onlayer pattern with dissolve

        show screen happy_meter("left") with easeinleft

        show screen results("simon_says")

        pause

        show screen result1("simon_says")

        pause

        show screen result2('simon_says')

        pause

        pause 1.5

        show screen minigame_rank(therapy_rank)

        pause

        # text "[totalplacednoses]" style "results_subscore" xpos 0.7



        # show screen results("therapy") with easeinright


        # hide screen happy_meter with easeoutright

        # "the happy meter should hide now"

        # hide screen results with easeoutleft

        # "and now the results screen is gone too"

    label dialogue:

        t "dialogue time!"

        t "game over text begins now"
        $ renpy.clear_retain();
        show screen fired_text()

        pause 3
        hide screen fired_text

        t "According to all known laws of aviation, a bee should not be able to fly. It's tiny wings can barely lift off its fat body from the ground."

        t "According to all known laws of aviation, a bee should not be able to fly."

        t "Oh god.... bee's, probably"

        t "it's so great that i get to talk all of the time. yay <3"

        t " Ah, heh!"

        t "{size=+24}MIKE!{/size}\nThe board please."

        m "okay boss"

        g "grr theories"

        l "lol"

        e "lol"

        pa "lol"

        pb "lol"

        z "huh"

        q "lol"


        n "okay tenna has successfully shut up now, so can we get to the ask test??"

        show choice_vignette with vignette

        menu:

            '{size=-8}Alright Mr. Tenna, time to get you to bed!':
                jump dialoguecont
                
            "{size=+12}GLOOBY":
                jump dialoguecont
                
            "Shut the (fun) up":
                jump dialoguecont
         
    label dialoguecont:

        hide choice_vignette with vignette

        n "and here's a test with 2 bubbles"

        show choice_vignette with vignette

        menu:
            "groovy!!!!!":
                jump testroom
            "glooby!!!!!":
                jump testroom



    label pixelshowcase:

        "let's show off the pixel scenes in this game"
        scene black
        window hide
        nvl show
        $ quick_menu = False


        ##### IF TENNA NORMAL

        # show mike_pixel:
        #     xpos -0.3 ypos 0.5 yoffset 104
        #     linear 2 xpos 0.35 ypos 0.5 yoffset 104
        # show tenna_pixel:
        #     xpos -0.2 ypos 0.5
        #     linear 2 xpos 0.45 ypos 0.5

        ### IF TENNA SMALL 
        # show tennasmall_pixel:
        #     xpos -0.15 ypos 0.713
        #     linear 2 xpos 0.5 ypos 0.713


        ### IF MIKE ALONE/TENNA TINY

        show mikesadtenna_pixel:
            xpos -0.15 ypos 0.5 yoffset 104
            linear 2 xpos 0.45 ypos 0.5 yoffset 104


        pause 1.5
        show intermission_results "Intermission Results"
        pause 1.5

        show intermission_score "Intermission Score: 0/3"
        pause 1.5

        show intermission_score_comment "Onto the next task!"

        pause 3

        ### IF TENNA NORMAL

        # show mike_pixel:
        #     xpos 0.35 ypos 0.5 yoffset 104
        #     linear 2 xpos 1.15
        # show tenna_pixel:
        #     xpos 0.45 ypos 0.5
        #     linear 2 xpos 1.25

        ### IF TENNA SMALL

        # show tennasmall_pixel:
        #     xpos 0.5 ypos 0.713
        #     linear 2 xpos 1.3

        ### IF MIKE ALONE/TENNA TINY

        show mikesadtenna_pixel:
            xpos 0.45 ypos 0.5 yoffset 104
            linear 2 xpos 1.15 ypos 0.5 yoffset 104

        pause 3

        hide intermission_results
        hide intermission_score
        hide intermission_score_comment
        hide mike_pixel
        hide tenna_pixel

        with wipedown

        pause 2

        show tvworld_fullrooms at tvworld_loop
        show mike_pixel
        show tenna_pixel
        show intermission_frame
        show intermission_backframe

        t_nvl "oh no"

        m_nvl "they're walking towards us"

        m_nvl "what are we going to do now??"

        t_nvl "mike are they gonna take my cookies again i cant stand it!!!"

        nvl clear

        show screen quiz_time()

        pause 1

        hide screen quiz_time

        nvl clear

        show encounter_frame 

        show pippins_pixel:
            xpos 290 ypos 125
        show pippins_pixel as pippins2:
            xpos 365 ypos 125
        show pippins_pixel as pippins3:
            xpos 440 ypos 125


        with wipedown


        pause 0.3


        n_nvl "You catch a bunch of Pippins exchanging their POINTS for Dark Dollars."


        n_nvl "Tenna HATES currencies he can't control!"

        n_nvl "what do you do?\n\n {a=jump:pixel_continue}{font=gui/mariones.ttf}>Stop them{/a}{/font}\n {a=jump:pixel_continue}{font=gui/mariones.ttf}>Let the $s flow{/a}{/font}"



        label pixel_continue:

            nvl clear

            hide mike_pixel
            hide tenna_pixel

            hide tvworld_fullrooms
            show tvworld_5

            show mike_pixel
            show tenna_pixel

            m_nvl "mike and tenna in tvworld"

            show pippins_pixel

            m_nvl "pippins"

            hide pippins_pixel
            show zapper_pixel

            m_nvl "zapper"

            hide zapper_pixel
            show shuttah_pixel

            m_nvl "shuttah"

            hide shuttah_pixel
            show shadowguy_pixel

            m_nvl "shadowguy_pixel"
            
            hide shadowguy_pixel

            show encounter_frame 
            show ramb_pixel:
                xpos 450 ypos 124
            show pippins_pixel:
                xpos 420 ypos 125
            show watercooler_pixel:
                xpos 358 ypos 100

            m_nvl "all of the guys"

            hide ramb_pixel
            hide tenna_pixel
            hide mike_pixel
            show mikesadtenna_pixel
            show tennasmall_pixel

            m_nvl "mike tenna sad, tenna small"

            hide mikesadtenna_pixel
            hide tennasmall_pixel

            show tenna_big

            m_nvl "tenna big"

            hide tenna_big
            show tenna_huge

            m_nvl "tenna huge"
            hide intermission_frame
            hide intermission_backframe
            hide tenna_huge
            hide tvworld_5
            pause 0.1
            show trank_screen
            show tvpose_tile behind trank_room_closed
            show trank_room_closed
            show mikedark_pixel
            show tennadark_pixel
            show intermission_frame
            show intermission_backframe


            m_nvl "mike and tenna in t rank room"

            show pippinsdark_pixel

            m_nvl "pippins"

            hide pippinsdark_pixel
            show zapperdark_pixel

            m_nvl "zapper"

            hide zapperdark_pixel
            show shuttahdark_pixel

            m_nvl "shuttah"

            hide shuttahdark_pixel
            show shadowguydark_pixel

            m_nvl "shadowguy_pixel"
            
            hide shadowguydark_pixel
            show rambdark_pixel

            m_nvl "ramb"

            hide rambdark_pixel
            hide mikedark_pixel
            hide tennadark_pixel
            hide trank_room_closed
            show trank_room_open

            m_nvl "trank room open"

            show tennadark_big

            m_nvl "tenna big dark"

            hide tennadark_big
            hide trank_room_open
            hide trank_screen
            hide black

            nvl hide

            jump testroom



    label spritepicker:

        "which sprites would you like to see"

        "view: {a=jump:weatherduo}weatherduo{/a}, {a=jump:smallmike}smallmike{/a},{a=jump:pippinses}pippinses{/a}, {a=jump:miketrio}miketrio{/a}, {a=jump:tenna}tenna{/a}, {a=jump:testroom}done{/a}"

        menu:
            "weather duo":
                jump weatherduo
            "small mike":
                jump smallmike
            "pippinses":
                jump pippinses
            "mike trio":
                jump miketrio
            "tenna":
                jump tenna
            "i'm done":
                jump testroom

        label weatherduo:

            show weatherduo

            pause 1

            show weatherduo backrainbow

            "cheerful"

            show weatherduo surprised

            "cheerful 2"

            hide weatherduo cheerful
            show lanino backstand
            show elnina backstand

            "backstand"

            show lanino worried
            show elnina worried

            "backstand 2"

            show elnina faceaway
            show lanino faceaway

            "faceaway"

            show elnina sad
            show lanino sad

            "faceaway 2"

            hide lanino
            hide elnina

            jump spritepicker

        label smallmike:

            show smallmike chesthand

            "chesthand"

            show smallmike angrypoint

            "angrypoint"

            show smallmike angryhips

            "angryhips"

            show smallmike maskgrab

            "maskgrab"

            hide smallmike


            jump spritepicker

        label pippinses:

            show pippinsa norm at left
            show pippinsb norm at right

            "norm"

            show pippinsa sad 
            show pippinsb annoyed 

            "a: sad b: annoyed"

            show pippinsa explain 
            show pippinsb leanin 

            "a: explain b: leanin"

            show pippinsa curious 
            show pippinsb confused 

            "a: curious b: confused"

            show pippinsa hooves 
            show pippinsb sigh 

            "a: hooves b: sigh"

            show pippinsa shushed 
            show pippinsb shush

            "a: shushed b: shush"

            show pippinsa shushed sweat 

            "a: shushed sweat b: shush"

            hide pippinsa
            hide pippinsb

            show pippinsduo tease

            "pippinsduo tease"

            show pippinsduo tease closed

            "pippinsduo tease closed"

            hide pippinsduo
            jump spritepicker

        label miketrio:
            show chair
            show grippins nervous
            show desk
            show pluey normal

            "grippins nervous pluey normal"

            show grippins throw
            show pluey sad

            "grippins throw pluey sad"

            show grippins sideangry
            show pluey happy

            "grippins sideangry pluey happy"

            show grippins frontangry
            show pluey shock

            "grippins frontangry pluey shock"

            show grippins surprised
            show pluey normal

            "grippins surprised pluey shock"

            show grippins shocked

            "grippins shocked"

            show grippins shy

            "grippins shy"

            show grippins resigned

            "grippins resigned"

            show grippins worried

            "grippins worried"

            show grippins underdesk

            "grippins underdesk"

            show grippins sidesmirk

            "grippins sidesmirk"

            show grippins frontsmirk

            "grippins frontsmirk"

            show zapper normal

            "zapper normal"

            show zapper sad

            "zapper sad"      

            show zapper nervous

            "zapper nervous"  


            hide zapper
            hide grippins
            hide pluey
            hide chair
            hide desk       

            jump spritepicker

        label tenna:

            show tenna norm at offscreenright

            "tenna will now move"

            show tenna at center with easeoutright

            "tenna will now do a flip"

            show tenna at flipout

            show tenna oops at flipin

            "test of the tenna face change mechanic"

            show tenna oops at flipout

            show tenna norm at flipin

            $ tenna_face = 0

            "norm"

            $ tenna_face = 1

            "wrinkle"

            $ tenna_face = 0

            show tenna norm bloom

            "bloom"

            $ tenna_face = 2 
            show tenna norm -bloom

            "flower"


            $ tenna_face = 0

            "blooming test for cheekhands"

            show tenna cheekhands

            "normal"

            show tenna cheekhands bloom

            "bloom"

            $ tenna_face = 2

            show tenna cheekhands -bloom

            "flowered"

            $ tenna_face = 0

            show tenna cheekhands bloom2

            "bloom2"

            $ tenna_face = 3

            show tenna cheekhands -bloom2

            "flowered2"

            "blooming test for outstretched"

            $ tenna_face = 0

            show tenna outstretched

            "normal"

            show tenna outstretched bloom

            "bloom"

            $ tenna_face = 2

            show tenna outstretched -bloom

            "flowered"

            $ tenna_face = 0

            show tenna outstretched bloom2

            "bloom2"

            $ tenna_face = 3

            show tenna outstretched -bloom2

            "flowered2"

            $ tenna_face = 5

            show tenna outstretched bloom3 antenna3L antenna3R

            "bloom3"

            $ tenna_face = 4

            show tenna outstretched -bloom3 -antenna3L -antenna3R

            "flowered3"


            $ tenna_face = 0   

            show tenna milkhold

            "milkhold"

            show tenna milkhold bloom

            "bloom"

            $ tenna_face = 2

            show tenna milkhold -bloom


            "which tenna do you want to see from here on out?"

            menu:
                "flower":
                    $ tenna_face = 2
                "wrinkle":
                    $ tenna_face = 1
                "normal":
                    $ tenna_face = 0

            "got it. now for the sprite showcase."

            show tenna oops at flipin

            "oops"

            show tenna whisper at flipin

            "whisper"

            show tenna think at flipin

            "think"

            show tenna point at flipin

            "point"

            show tenna onchest at flipin

            "onchest"

            show tenna milkhold at flipin

            "milkhold"

            show tenna handwaves at flipin

            "handwaves"

            show tenna cheekhands at flipin

            "cheekhands"

            show tenna relieved at flipin

            "relieved"

            show tenna sad at flipin

            "sad"

            show tenna sad2 at flipin

            "sad2" 

            show tenna frustrated at flipin

            "frustrated"    

            show tenna freakout at flipin

            "freakout"  

            show tenna tiegrip at flipin

            "tiegrip"   

            show tenna angry at flipin

            "angry"

            show tenna doodly at flipin

            "doodly"

            show tenna fired at flipin

            "fired"

            show tenna hug at flipin

            "hug"

            show tenna headpat at flipin

            "headpat"

            show tenna outstretched at flipin

            "outstretched"


            hide tenna

            jump spritepicker
    label menureturn:
        return

    return