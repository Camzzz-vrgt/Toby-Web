################################################################################
## Initialization
################################################################################

init offset = -1


################################################################################
## Styles
################################################################################

style default:
    properties gui.text_properties()
    language gui.language

style input:
    properties gui.text_properties("input", accent=True)
    adjust_spacing False

style hyperlink_text:
    properties gui.text_properties("hyperlink", accent=True)
    hover_color "ffffff"
    hover_underline False

style gui_text:
    properties gui.text_properties("interface")


style button:
    properties gui.button_properties("button")

style button_text is gui_text:
    properties gui.text_properties("button")
    yalign 0.5


style label_text is gui_text:
    properties gui.text_properties("label", accent=True)

style prompt_text is gui_text:
    properties gui.text_properties("prompt")


style bar:
    ysize gui.bar_size
    left_bar Frame("gui/bar/left.png", gui.bar_borders, tile=gui.bar_tile)
    right_bar Frame("gui/bar/right.png", gui.bar_borders, tile=gui.bar_tile)

style vbar:
    xsize gui.bar_size
    top_bar Frame("gui/bar/top.png", gui.vbar_borders, tile=gui.bar_tile)
    bottom_bar Frame("gui/bar/bottom.png", gui.vbar_borders, tile=gui.bar_tile)

style scrollbar:
    ysize gui.scrollbar_size
    base_bar Frame("gui/scrollbar/horizontal_[prefix_]bar.png", gui.scrollbar_borders, tile=gui.scrollbar_tile)
    thumb Frame("gui/scrollbar/horizontal_[prefix_]thumb.png", gui.scrollbar_borders, tile=gui.scrollbar_tile)

style vscrollbar:
    xsize gui.scrollbar_size
    base_bar Frame("gui/scrollbar/vertical_[prefix_]bar.png", gui.vscrollbar_borders, tile=gui.scrollbar_tile)
    thumb Frame("gui/scrollbar/vertical_[prefix_]thumb.png", gui.vscrollbar_borders, tile=gui.scrollbar_tile)


style slider:
    ysize gui.slider_size
    right_bar Frame("gui/slider/bar_[prefix_]empty.png", gui.bar_borders, tile=gui.bar_tile) 
    left_bar Frame("gui/slider/bar_[prefix_]full.png", gui.bar_borders, tile=gui.bar_tile)  
    thumb At("gui/slider/bar_[prefix_]thumb.png", Transform(zoom=0.25))
    thumb_align 0.7
    thumb_offset 15
    outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#1B3780", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#000000", absolute(0), absolute(0)) ]


style vslider:
    xsize gui.slider_size
    base_bar Frame("gui/slider/bar_[prefix_]full.png", gui.vslider_borders, tile=gui.slider_tile)
    thumb "bar_thumb"


style frame:
    padding gui.frame_borders.padding
    background Frame("gui/frame.png", gui.frame_borders, tile=gui.frame_tile)



################################################################################
## In-game screens
################################################################################


## Say screen ##################################################################
##
## The say screen is used to display dialogue to the player. It takes two
## parameters, who and what, which are the name of the speaking character and
## the text to be displayed, respectively. (The who parameter can be None if no
## name is given.)
##
## This screen must create a text displayable with id "what", as Ren'Py uses
## this to manage text display. It can also create displayables with id "who"
## and id "window" to apply style properties.
##
## https://www.renpy.org/doc/html/screen_special.html#say


screen say(who, what):

    window:
        id "window"

        if who is not None:

            window:
                id "namebox"
                style "namebox"
                text who id "who"

        text what id "what"


    ## If there's a side image, display it above the text. Do not display on the
    ## phone variant - there's no room.
    if not renpy.variant("small"):
        add SideImage() xalign 0.0 yalign 1.0


## Make the namebox available for styling through the Character object.
init python:
    config.character_id_prefixes.append('namebox')

style window is default
style say_label is default
style say_dialogue is default
style say_thought is say_dialogue

style namebox is default
style namebox_label is say_label

style window:
    xalign 0.5
    xfill True
    yalign gui.textbox_yalign
    ysize gui.textbox_height

    background At("gui/adv_textbox.png",Transform(zoom=0.5, ypos= -160))

style namebox:
    xpos gui.name_xpos
    xanchor gui.name_xalign
    xsize gui.namebox_width
    ypos gui.name_ypos
    ysize gui.namebox_height

    background Frame("gui/namebox.png", gui.namebox_borders, tile=gui.namebox_tile, xalign=gui.name_xalign)
    padding gui.namebox_borders.padding

style say_label:
    properties gui.text_properties("name", accent=True)
    xalign gui.name_xalign
    yalign 0.5

style say_dialogue:
    properties gui.text_properties("dialogue")

    xpos gui.dialogue_xpos
    xsize gui.dialogue_width
    ypos gui.dialogue_ypos
    color "000000"

    adjust_spacing False

## Input screen ################################################################
##
## This screen is used to display renpy.input. The prompt parameter is used to
## pass a text prompt in.
##
## This screen must create an input displayable with id "input" to accept the
## various input parameters.
##
## https://www.renpy.org/doc/html/screen_special.html#input

screen input(prompt):
    style_prefix "input"

    window:

        vbox:
            xanchor gui.dialogue_text_xalign
            xpos gui.dialogue_xpos
            xsize gui.dialogue_width
            ypos -100

            text prompt style "input_prompt"
            input id "input"

style input_prompt is default

style input_prompt:
    xalign gui.dialogue_text_xalign
    properties gui.text_properties("input_prompt")
    color "000000"

style input:
    xalign gui.dialogue_text_xalign
    xmaximum gui.dialogue_width


## Choice screen ###############################################################
##
## This screen is used to display the in-game choices presented by the menu
## statement. The one parameter, items, is a list of objects, each with caption
## and action fields.
##
## https://www.renpy.org/doc/html/screen_special.html#choice


### transforms for menu buttons

transform anim_choicebutton:
    on hover:
        yoffset 0
        easein 0.3 yoffset -10
    on idle:
        yoffset -10
        easeout 0.15 yoffset 0


screen choice(items):

   
    if len(items) !=2: 
        style_prefix "choice"
    else:
        style_prefix "choice2"

    hbox:

        if len(items) !=2:
            at transform:
                on show:
                    ypos 1.0
                    easein 0.3 ypos 0.6
        else:
            at transform:
                on show:
                    ypos 1.0
                    easein 0.2 ypos 0.7  

        for num, i in enumerate(items, 1): #the 1 means it starts counting at 1 instead of the default 0
            textbutton i.caption action i.action at anim_choicebutton:
                hover_sound mainbutton_hoversound
                activate_sound mainbutton_activatesound
                background At(f"gui/choice_{num}.png",Transform(zoom=0.25))
                if len(items) !=2: #if there are 1 or 3 choices (assuming you are strict about it)
                    if num == 2: #if there's only 1 choice, this wont matter
                        yoffset 100
                else: #if there are 2 choices
                    if num == 2: #for the second choice
                        background At(f"gui/choice_{num+1}.png",Transform(zoom=0.25))


default intermission_choice_ypos = 0.9

screen nvl_choice(dialogue, items=None):
    style_prefix "nvl_choice"

    vbox:
        pos (0.3,intermission_choice_ypos)
        spacing intermission_choice_spacing
        for i in items:
            textbutton i.caption action i.action

style choice_hbox is hbox
style choice_button is button
style choice_button_text is button_text
style choice2_hbox is hbox
style choice2_button is button
style choice2_button_text is button_text

default intermission_choice_spacing = -75

style nvl_choice_button:
    ymaximum 40
    xmaximum 375
    focus_mask None
    background Solid("000")
style nvl_choice_vbox:
    box_wrap True


style nvl_choice_button_text:
    size 14
    textalign 0.0
    xalign 0.0
    yalign 0.65
    font "gui/mariones.ttf"
    color "960811"
    hover_color "ffffff"


style choice_hbox:
        xalign 0.05
        ypos 0.7
        yanchor 0.5
        spacing 35

style choice2_hbox:
        xalign 0.25
        ypos 0.6
        yanchor 0.5
        spacing 150


style choice_button is default:
    properties gui.button_properties("choice_button")

style choice_button_text is default:
    properties gui.text_properties("choice_button")

style choice2_button is default:
    properties gui.button_properties("choice_button")

style choice2_button_text is default:
    properties gui.text_properties("choice_button")




## Quick Menu screen ###########################################################
##
## The quick menu is displayed in-game to provide easy access to the out-of-game
## menus.

image quickmenu_button = At("gui/quickmenu_button.png", Transform(zoom = 0.1))
image quickmenu_overlay = At("gui/quickmenu_overlay.png", Transform(zoom = 0.25))

screen quickToggle():
    if quick_menu == True:
        zorder 99
        key "u" action [Preference("auto-forward", "toggle"), Notify("Auto-forward: %s" % ("OFF" if _preferences.afm_enable else "ON"))]
        fixed xsize 100 ysize 100 xalign 1.0 yalign 0.0:
            imagebutton idle "quickmenu_button" at imagebutton_hover:
                hover_sound mainbutton_hoversound
                activate_sound mainbutton_activatesound
                action Show("quick_menu")
                xalign 0.0 yalign 1.0


screen quick_menu():
    ## Ensure this appears on top of other screens.
    zorder 100


    if quick_menu == True:
        hbox at quick_menu_appear:
            imagebutton idle Null(width=600,height=1080) action Hide()
            frame xsize 450 yfill True:
                background "quickmenu_overlay"
                vbox:
                    style_prefix "quick"

                    xalign 0.2
                    yalign 0.5
                    spacing -40
                    # textbutton _("Back") action Rollback() at quickbutton_hover
                    textbutton _("History") action ShowMenu('history') xoffset 10 at quickbutton_hover:
                        hover_sound mainbutton_hoversound
                        activate_sound mainbutton_activatesound
                    textbutton _("Skip") action Skip() alternate Skip(fast=True, confirm=True) xoffset 20 at quickbutton_hover:
                        hover_sound mainbutton_hoversound
                        activate_sound mainbutton_activatesound
                    textbutton _("Auto") action Preference("auto-forward", "toggle") xoffset 30 at quickbutton_hover:
                        hover_sound mainbutton_hoversound
                        activate_sound mainbutton_activatesound
                    textbutton _("Save") action ShowMenu('save') xoffset 40 at quickbutton_hover:
                        hover_sound mainbutton_hoversound
                        activate_sound mainbutton_activatesound
                    textbutton _("Prefs") action ShowMenu('preferences') xoffset 50 at quickbutton_hover:
                        hover_sound mainbutton_hoversound
                        activate_sound mainbutton_activatesound


transform quick_menu_appear():
    on show:
        xoffset 100
        easein_back 0.5 xoffset -50
    on hide:
        easeout_back 0.5 xoffset 370
transform quick_menu_hide():
    on hide:
        easeout 0.5 xoffset 370

transform imagebutton_hover():
    on hover:
        align(0.5,0.5) 
        easein 0.1 zoom 1.1
    on idle:
        align(0.5,0.5) 
        easeout 0.1 zoom 1.0

transform quickbutton_hover():
    on hover:
        easein 0.1 xoffset -5
    on idle:
        easeout 0.1 xoffset 0



## This code ensures that the quick_menu screen is displayed in-game, whenever
## the player has not explicitly hidden the interface.
init python:
        config.overlay_screens.append("quickToggle")

## We'll set this to False by default so we can show and hide the quick_menu during
## choices and such... also hiding it during the NVL intermission sequences, which use this anyways

default quick_menu = False

style quick_button is default

style quick_button:
    properties gui.button_properties("quick_button")

style quick_button_text:
    color "ffffff"
    hover_color "C6DF6B"
    selected_color "C6DF6B"
    size 36
    outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#1B3780", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#000000", absolute(0), absolute(0)) ]


style quick_nvl_button is default
style quick_nvl_button_text:
    font "gui/mariones.ttf"
    color "ffffff"
    hover_color "999999"
    size 14


style quick_nvl_button:
    properties gui.button_properties("quick_button")

style quick_nvl_button_text:
    properties gui.text_properties("quick_nvl_button")
    


################################################################################
## Main and Game Menu Screens
################################################################################

## Navigation screen ###########################################################
##
## This screen is included in the main and game menus, and provides navigation
## to other menus, and to start the game.


default mainbutton_hoversound = "audio/sfx/charactervoices/snd_text.wav"
default mainbutton_activatesound = "audio/sfx/general/snd_noise.wav"
screen navigation():

    if persistent.game_started:


##### for all other times you start up the menu... main menu
        if main_menu:
            hbox at mainbuttons_show(0.75):
                style_prefix "navigation"
                xpos gui.navigation_xpos
                if (renpy.variant("web")) :
                    xoffset 90
                    yalign 1.0
                else:
                    xoffset 30
                    yalign 1.0


                spacing gui.navigation_spacing

                if main_menu:

                        textbutton _("Start") at mainbutton_hover:
                            action [With(doorslam), Play("sound", ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]), Start()]
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound
                        textbutton _("Load") at mainbutton_hover:
                            action ShowMenu("load")
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound

                        textbutton _("Prefs") at mainbutton_hover:
                            action ShowMenu("preferences")
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound
                        textbutton _("Extras") at mainbutton_hover:
                            action ShowMenu("extras")
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound



                # if _in_replay:

                #     textbutton _("End Replay") action EndReplay(confirm=True) at mainbutton_hover

                #textbutton _("About") action ShowMenu("about")

                # if renpy.variant("pc") or (renpy.variant("web") and not renpy.variant("mobile")):

                #     ## Help isn't necessary or relevant to mobile devices.
                #     textbutton _("Help") action ShowMenu("help")

                if renpy.variant("pc"):

                #     ## The quit button is banned on iOS and unnecessary on Android and
                #     ## Web.
                    textbutton _("Quit") action Quit(confirm=not main_menu) at mainbutton_hover xoffset 20

    ##### for all other times you start up the menu... game menu


        else:    
            style_prefix "navigation"
            textbutton _("x") action Return()  xpos 0.9 ypos 0.0
            hbox:
                style_prefix "navigation"
                xpos gui.navigation_xpos
                if (renpy.variant("web")) :
                    xoffset 20
                    yalign 1.0
                else:
                    xoffset -10
                    yalign 1.0


                spacing gui.navigation_spacing

                textbutton _("History") at mainbutton_hover:
                    action ShowMenu("history")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

                textbutton _("Save") at mainbutton_hover xoffset 25:
                    action ShowMenu("save")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

                textbutton _("Load") at mainbutton_hover xoffset 5:
                    action ShowMenu("load")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

                textbutton _("Prefs") at mainbutton_hover:
                    action ShowMenu("preferences")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

                textbutton _("Title") at mainbutton_hover:
                    action [MainMenu()]
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound


                # if _in_replay:

                #     textbutton _("End Replay") action EndReplay(confirm=True) at mainbutton_hover

                #textbutton _("About") action ShowMenu("about")

                # if renpy.variant("pc") or (renpy.variant("web") and not renpy.variant("mobile")):

                #     ## Help isn't necessary or relevant to mobile devices.
                #     textbutton _("Help") action ShowMenu("help")

    else:

##### for first time menu
        hbox at mainbuttons_show(3):
            style_prefix "firstnavigation"
            xpos gui.navigation_xpos
            if (renpy.variant("web")) :
                xoffset 90
                yalign 1.0
            else:
                xoffset 30
                yalign 1.0


            spacing gui.navigation_spacing

            if main_menu:

                        textbutton _("Start") at mainbutton_hover:
                            action Start()
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound
                        textbutton _("Load") at mainbutton_hover:
                            action ShowMenu("load")
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound

                        textbutton _("Prefs") at mainbutton_hover:
                            action ShowMenu("preferences")
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound
                        textbutton _("Extras") at mainbutton_hover:
                            action ShowMenu("extras")
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound



            # if _in_replay:

            #     textbutton _("End Replay") action EndReplay(confirm=True) at mainbutton_hover

            #textbutton _("About") action ShowMenu("about")

            # if renpy.variant("pc") or (renpy.variant("web") and not renpy.variant("mobile")):

            #     ## Help isn't necessary or relevant to mobile devices.
            #     textbutton _("Help") action ShowMenu("help")

            if renpy.variant("pc"):

            #     ## The quit button is banned on iOS and unnecessary on Android and
            #     ## Web.
                textbutton _("Quit") at mainbutton_hover xoffset 20:
                    action Quit(confirm=not main_menu)
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound


screen navigation_alt():


    if persistent.game_started:

        hbox at mainbuttons_show:
            style_prefix "navigation"
            xpos gui.navigation_xpos
            if (renpy.variant("web")) :
                xoffset 90
                yalign 1.0
            else:
                xoffset 30
                yalign 1.0


            spacing gui.navigation_spacing

            if main_menu:

                textbutton _("Title") at mainbutton_hover:
                    action Return()
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound


            textbutton _("Load") at mainbutton_hover:
                    action ShowMenu("load")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

            textbutton _("Prefs") at mainbutton_hover:
                    action ShowMenu("preferences")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

            textbutton _("Extras") at mainbutton_hover:
                    action ShowMenu("extras")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

            #textbutton _("About") action ShowMenu("about")

            # if renpy.variant("pc") or (renpy.variant("web") and not renpy.variant("mobile")):

            #     ## Help isn't necessary or relevant to mobile devices.
            #     textbutton _("Help") action ShowMenu("help")

            if renpy.variant("pc"):

            #     ## The quit button is banned on iOS and unnecessary on Android and
            #     ## Web.
                textbutton _("Quit") at mainbutton_hover xoffset 20:
                    action Quit(confirm=not main_menu)
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

    else:

        hbox at mainbuttons_show:
            style_prefix "firstnavigation"
            xpos gui.navigation_xpos
            if (renpy.variant("web")) :
                xoffset 110
                yalign 1.0
            else:
                xoffset 30
                yalign 1.0


            spacing gui.navigation_spacing

            if main_menu:

                textbutton _("Title") at mainbutton_hover:
                    action Return()
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound


            textbutton _("Load") at mainbutton_hover:
                    action ShowMenu("load")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

            textbutton _("Prefs") at mainbutton_hover:
                    action ShowMenu("preferences")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

            textbutton _("Extras") at mainbutton_hover:
                    action ShowMenu("extras")
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

            #textbutton _("About") action ShowMenu("about")

            # if renpy.variant("pc") or (renpy.variant("web") and not renpy.variant("mobile")):

            #     ## Help isn't necessary or relevant to mobile devices.
            #     textbutton _("Help") action ShowMenu("help")

            if renpy.variant("pc"):

            #     ## The quit button is banned on iOS and unnecessary on Android and
            #     ## Web.
                textbutton _("Quit") at mainbutton_hover xoffset 20:
                    action Quit(confirm=not main_menu)
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound



transform mainbutton_hover():
    on selected_hover:
        easein 0.0 yoffset 0
    on hover:
        easein 0.1 yoffset -5
    on idle:
        easeout 0.1 yoffset 0



transform mainbuttons_show(duration=0.75):
    on show:
        ypos 1.3
        duration
        easein_quad 1.0 ypos 1.0


style navigation_button is gui_button
style navigation_button_text is gui_button_text
style firstnavigation_button is gui_button_text
style firstnavigation_button_text is gui_button_text

style navigation_button:
    size_group "navigation"
    properties gui.button_properties("navigation_button")

style navigation_button_text:
    properties gui.text_properties("navigation_button")
    color "ffffff"
    hover_color "C6DF6B"
    selected_color "C6DF6B"
    size 36
    outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#1B3780", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#000000", absolute(0), absolute(0)) ]

style firstnavigation_button:
    size_group "firstnavigation"
    properties gui.button_properties("navigation_button")


style firstnavigation_button_text:
    properties gui.text_properties("navigation_button")
    color "ffffff"
    hover_color "C8C5A3"
    selected_color "C8C5A3"
    size 36
    outlines [(absolute(15), "#000000", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(15), "#000000", absolute(0), absolute(0)) ]

## Main Menu screen ############################################################
##
## Used to display the main menu when Ren'Py starts.
##
## https://www.renpy.org/doc/html/screen_special.html#main-menu

screen mainmenu_bg():
    add "test_block"
    add gui.main_menu_background
    add "main_tile_large"
    add "bg_black" ypos -0.79 at clamshell_top
    add "bg_black" ypos 0.79 at clamshell_bottom
    add "logo" at logo_anim

screen gamemenu_bg():
    add gui.main_menu_background
    add "main_tile_large"
    add "bg_black" ypos -0.79 
    add "bg_black" ypos 0.79 
screen mainmenu_firstbg():
    add "first_rdoor"
    add "first_ldoor"
    add "first_lock"
    add "logofirst" at dissolve2

    

screen main_menu():

    ## This ensures that any other menu screen is replaced.
    tag menu

    if persistent.game_started:
        use mainmenu_bg
    else:
        use mainmenu_firstbg 

    ## This empty frame darkens the main menu.

    ## The use statement includes another screen inside this one. The actual
    ## contents of the main menu are in the navigation screen.
    use navigation

    if gui.show_name:

        vbox:
            style "main_menu_vbox"

            text "[config.name!t]":
                style "main_menu_title"

            text "[config.version]":
                style "main_menu_version"


style main_menu_frame is empty
style main_menu_vbox is vbox
style main_menu_text is gui_text
style main_menu_title is main_menu_text
style main_menu_version is main_menu_text

style main_menu_frame:
    xsize 175
    yfill True

style main_menu_vbox:
    xalign 1.0
    xoffset -12
    xmaximum 500
    yalign 1.0
    yoffset -12

style main_menu_text:
    properties gui.text_properties("main_menu", accent=True)

style main_menu_title:
    properties gui.text_properties("title")

style main_menu_version:
    properties gui.text_properties("version")

transform clamshell_top:
    on show:
        ypos -0.5
        easein_elastic 2 ypos -0.79

transform clamshell_bottom:
    on show:
        ypos 0.5
        easein_elastic 2 ypos 0.79

transform logo_anim:
    on show:
        parallel:
            zoom 0.0
            pause 0.5
            easein_elastic 2 zoom 1.0
        parallel:
            easein_quad 0.5 rotate -360

transform dissolve2:
    on show:
        animation
        alpha 0.0
        pause 1.5
        ease 1.5 alpha 1.0

transform dissolve3:
    on show:
        animation
        alpha 1.0
        ease 1.5 alpha 0.0
        


## Game Menu screen ############################################################
##
## This lays out the basic common structure of a game menu screen. It's called
## with the screen title, and displays the background, title, and navigation.
##
## The scroll parameter can be None, or one of "viewport" or "vpgrid".
## This screen is intended to be used with one or more children, which are
## transcluded (placed) inside it.

 
default title = "Title"



image gamebg:
    Solid("ffffff", xsize = 800, ysize = 348, ypos= 0.21)
    alpha 0.5


screen game_menu(title="", scroll=None, yinitial=0.0, spacing=0, can_focus=True, show_footer=True):

    if persistent.game_started:
        style_prefix "game_menu"
    else:
        style_prefix "game_firstmenu"


    if persistent.game_started:
        if main_menu:
            use mainmenu_bg
        else:
            use gamemenu_bg
    else:
        use mainmenu_firstbg
        add "bg_black" ypos -0.79 
        add "bg_black" ypos 0.79 



    frame:
        style "game_menu_outer_frame"

        hbox:

            pos (-125,25)

            ## Reserve space for the navigation section.
            frame:
                style "game_menu_navigation_frame"

            frame:
                style "game_menu_content_frame"

                if scroll == "viewport":

                    viewport:
                        yinitial yinitial
                        scrollbars "vertical"
                        mousewheel True
                        draggable True
                        pagekeys True

                        side_yfill True

                        vbox:
                            spacing spacing

                            transclude

                elif scroll == "vpgrid":

                    vpgrid:
                        cols 1
                        yinitial yinitial

                        scrollbars "vertical"
                        mousewheel True
                        draggable True
                        pagekeys True

                        side_yfill True

                        spacing spacing

                        transclude

                else:

                    transclude


    if main_menu:
        use navigation_alt
    else:
        use navigation

    # textbutton _("Return"):
    #     style "return_button"

    #     action Return()
    if persistent.game_started:
        label title at title_anim
    else:
        label title at title_anim2


    if main_menu:
        key "game_menu" action ShowMenu("main_menu")


transform title_anim:
    align (0.5,0.5)
    pos (0.5,0.12)
    zoom 0.0
    easein_elastic 1 zoom 1.0

transform title_anim2:
    align (0.5,0.5)
    pos (0.5,0.12)


style game_menu_outer_frame is empty
style game_menu_navigation_frame is empty
style game_menu_content_frame is empty
style game_menu_viewport is gui_viewport
style game_menu_side is gui_side
style game_menu_scrollbar is gui_vscrollbar

style game_menu_label is gui_label
style game_menu_label_text is gui_label_text

style return_button is navigation_button
style return_button_text is navigation_button_text

style game_menu_outer_frame:
    bottom_padding 19
    top_padding 75

    background "gamebg"

style game_menu_navigation_frame:
    xsize 175
    yfill True

style game_menu_content_frame:
    left_margin 25
    right_margin 13
    top_margin 7

style game_menu_viewport:
    xsize 800
    ysize 348

style game_menu_vscrollbar:
    ysize 348

style game_menu_side:
    spacing 7

style game_menu_label:
    align (0.5,0.06)
    ysize 75

style game_menu_label_text:
    size gui.title_text_size
    yalign 0.5
    color "ffffff"
    outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#1B3780", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#000000", absolute(0), absolute(0)) ]


style game_firstmenu_label_text:
    size gui.title_text_size
    yalign 0.5
    color "ffffff"
    outlines [(absolute(15), "#262726", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(15), "#000000", absolute(0), absolute(0)) ]

style return_button:
    xpos gui.navigation_xpos
    yalign 1.0
    yoffset -18


## Load and Save screens #######################################################
##
## These screens are responsible for letting the player save the game and load
## it again. Since they share nearly everything in common, both are implemented
## in terms of a third screen, file_slots.
##
## https://www.renpy.org/doc/html/screen_special.html#save https://
## www.renpy.org/doc/html/screen_special.html#load

screen save():

    tag menu

    use file_slots(_("Save"))


screen load():

    tag menu

    use file_slots(_("Load"))


screen file_slots(title):

    default page_name_value = FilePageNameInputValue(pattern=_("Page {}"), auto=_("Automatic saves"), quick=_("Quick saves"))

    use game_menu(title):

        fixed:
            offset (125,-32)


            ## This ensures the input will get the enter event before any of the
            ## buttons do.
            order_reverse False

            ## The page name, which can be edited by clicking on a button.
            if persistent.game_started:
                button at label_anim:
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound
                    style "page_label"

                    key_events True
                    action page_name_value.Toggle()

                    input:
                        style "page_label_text"
                        value page_name_value
            else:
                button at label_anim2:
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound
                    style "firstpage_label"

                    key_events True
                    action page_name_value.Toggle()

                    input:
                        style "firstpage_label_text"
                        value page_name_value

            ## The grid of file slots.
            grid gui.file_slot_cols gui.file_slot_rows:
                style_prefix "slot"

                xpos -0.09
                ypos 0.12

                spacing gui.slot_spacing

                for i in range(gui.file_slot_cols * gui.file_slot_rows):

                    $ slot = i + 1

                    button:
                        action FileAction(slot)

                        has vbox

                        add FileScreenshot(slot) pos (-0.05,-0.06)

                        text FileTime(slot, format=_("{#file_time}%A, %B %d %Y, %H:%M"), empty=_("empty slot")):
                            style "slot_time_text"

                        text FileSaveName(slot):
                            style "slot_name_text"

                        key "save_delete" action FileDelete(slot)

            ## Buttons to access other pages.
            vbox:
                style_prefix "page"

                xpos -0.045
                yalign 0.79

                hbox:
                    xalign 0.5

                    spacing gui.page_spacing

                    textbutton _("<") action FilePagePrevious() at mainbutton_hover:
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound
                    key "save_page_prev" action FilePagePrevious()

                    if config.has_autosave:
                        textbutton _("{#auto_page}A") action FilePage("auto") at mainbutton_hover:
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound

                    if config.has_quicksave:
                        textbutton _("{#quick_page}Q") action FilePage("quick") at mainbutton_hover:
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound

                    ## range(1, 10) gives the numbers from 1 to 9.
                    for page in range(1, 10):
                        textbutton "[page]" action FilePage(page) at mainbutton_hover:
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound

                    textbutton _(">") action FilePageNext() at mainbutton_hover:
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound
                    key "save_page_next" action FilePageNext()

                #if config.has_sync:
                #    if CurrentScreenName() == "save":
                #        textbutton _("Upload Sync"):
                #            action UploadSync()
                #            xalign 0.5
                #    else:
                #        textbutton _("Download Sync"):
                #            action DownloadSync()
                #            xalign 0.5


transform label_anim:
    align (0.5,0.5)
    pos (0.34,0.09)
    zoom 0.0
    easein_elastic 1 zoom 1.0

transform label_anim2:
    align (0.5,0.5)
    pos (0.34,0.08)

style page_label is gui_label
style page_label_text is gui_label_text
style page_button is gui_button
style page_button_text is gui_button_text

style slot_button is gui_button
style slot_button_text is gui_button_text
style slot_time_text is slot_button_text
style slot_name_text is slot_button_text

style page_label:
    xpadding 32
    ypadding 2

style firstpage_label:
    xpadding 32
    ypadding 2

style page_label_text:
    textalign 0.5
    layout "subtitle"
    color "ffffff"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]
    hover_color "C6DF6B"
    hover_outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#000000", absolute(0), absolute(0)) ]

style firstpage_label_text:
    textalign 0.5
    layout "subtitle"
    color "ffffff"
    outlines [(absolute(10), "#262726", absolute(0), absolute(0)) ]
    hover_color "C8C5A3"
    hover_outlines [(absolute(10), "#000000", absolute(0), absolute(0)) ]

style page_button:
    properties gui.button_properties("page_button")

style page_button_text:
    properties gui.text_properties("page_button")
    size 32
    color "ffffff"
    hover_color "C6DF6B"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#000000", absolute(0), absolute(0)) ]

style slot_button:
    properties gui.button_properties("slot_button")

style slot_button_text:
    properties gui.text_properties("slot_button")
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#000000", absolute(0), absolute(0)) ]


## Preferences screen ##########################################################
##
## The preferences screen allows the player to configure the game to better suit
## themselves.
##
## https://www.renpy.org/doc/html/screen_special.html#preferences

### setting defaults for volume in game

default preferences.volume.music = 0.6
default preferences.volume.sfx = 0.6
default preferences.volume.audio = 0.6
default preferences.volume.voice = 0.6

screen preferences():

    tag menu

    use game_menu(_("Preferences")):

        vbox:

            hbox:

                if renpy.variant("pc") or renpy.variant("web"):

                    vbox:
                            style_prefix "radio"
                            label _("Display") yoffset 15
                            hbox:
                                textbutton _("Window") action Preference("display", "window"):
                                    hover_sound mainbutton_hoversound
                                    activate_sound mainbutton_activatesound
                                textbutton _("Fullscreen") action Preference("display", "fullscreen") xoffset 15:
                                    hover_sound mainbutton_hoversound
                                    activate_sound mainbutton_activatesound

                    vbox:
                            xoffset 30
                            style_prefix "check"
                            label _("Skip") yoffset 15
                            hbox:
                                textbutton _("Unseen Text") action Preference("skip", "toggle"):
                                    hover_sound mainbutton_hoversound
                                    activate_sound mainbutton_activatesound
                                textbutton _("After Choices") action Preference("after choices", "toggle"):
                                    hover_sound mainbutton_hoversound
                                    activate_sound mainbutton_activatesound
                                textbutton _("Transitions") action InvertSelected(Preference("transitions", "toggle")):
                                    hover_sound mainbutton_hoversound
                                    activate_sound mainbutton_activatesound

                ## Additional vboxes of type "radio_pref" or "check_pref" can be
                ## added here, to add additional creator-defined preferences.

            hbox:
                style_prefix "slider"
                box_wrap False
                yoffset -20

                vbox:

                    # label _("Text Speed")

                    # bar value Preference("text speed") yoffset -20

                    label _("{size=-6}Auto-Forward Time") yoffset 80

                    bar value Preference("auto-forward time") yoffset 70

                vbox:

                    if config.has_music:
                        label _("Music ({:.0%})").format(preferences.get_mixer("music")) yoffset -5

                        hbox:
                            bar value Preference("music volume") yoffset-25

                    if config.has_sound:

                        label _("Sound ({:.0%})").format(preferences.get_mixer("sfx")) yoffset -25
                        vbox:
                            bar value Preference("sound volume") yoffset -45

                    if config.has_voice:

                        label _("Beeps ({:.0%})").format(preferences.get_mixer("voice")) yoffset -65

                        hbox:
                            yoffset -85
                            bar value Preference("voice volume")


                vbox:
                        offset(-25,110)
                        if config.sample_voice:
                            textbutton _("Voice Test") action Play("voice", config.sample_voice)

                        if config.sample_sound:
                            textbutton _("Sound Test") action Play("sound", config.sample_sound)
                        if config.has_music or config.has_sound or config.has_voice:

                            textbutton _("Mute All"):
                                hover_sound mainbutton_hoversound
                                activate_sound mainbutton_activatesound
    
                                action Preference("all mute", "toggle")
                                style "mute_all_button"
                            textbutton _("Reset"):
                                hover_sound mainbutton_hoversound
                                activate_sound mainbutton_activatesound
                                action [Preference("music volume", 0.2), Preference("sound volume", 0.2), Preference("voice volume", 0.2)]
                                style "reset_button"





style pref_label is gui_label
style pref_label_text is gui_label_text
style pref_vbox is vbox

style radio_label is pref_label
style radio_label_text is pref_label_text
style radio_button is gui_button
style radio_button_text is gui_button_text
style radio_vbox is pref_vbox

style check_label is pref_label
style check_label_text is pref_label_text
style check_button is gui_button
style check_button_text is gui_button_text
style check_vbox is pref_vbox

style slider_label is pref_label
style slider_label_text is pref_label_text
style slider_slider is gui_slider
style slider_button is gui_button
style slider_button_text is gui_button_text
style slider_pref_vbox is pref_vbox

style mute_all_button is check_button
style mute_all_button_text is check_button_text

style reset_button is check_button

style pref_label:
    top_margin gui.pref_spacing
    bottom_margin 2

style pref_label_text:
    xalign 0.5
    size 24
    color "ffffff"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]
    hover_color "C6DF6B"
    hover_outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#000000", absolute(0), absolute(0)) ]

style pref_vbox:
    xsize 0



style radio_vbox:
    spacing gui.pref_button_spacing

style radio_button:
    properties gui.button_properties("radio_button")

style radio_button_text:
    properties gui.text_properties("radio_button")
    size 18
    color "ffffff"
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]
    hover_color "C6DF6B"
    hover_outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#000000", absolute(0), absolute(0)) ]
    selected_color "929C74"
    selected_outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#000000", absolute(0), absolute(0)) ]

style check_vbox:
    spacing gui.pref_button_spacing

style check_button:
    properties gui.button_properties("check_button")
    xsize 160

style check_button_text:
    properties gui.text_properties("check_button")
    xalign 0.5
    size 18
    color "ffffff"
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]
    hover_color "C6DF6B"
    hover_outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#000000", absolute(0), absolute(0)) ]
    selected_color "929C74"
    selected_outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#000000", absolute(0), absolute(0)) ]
    selected_hover_color "C6DF6B"
    selected_hover_outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]

style reset_button_text:
    properties gui.text_properties("check_button")
    xalign 0.5
    size 18
    color "ffffff"
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]
    hover_color "C6DF6B"
    hover_outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#000000", absolute(0), absolute(0)) ]

style slider_slider:
    xsize 219

style slider_button:
    properties gui.button_properties("slider_button")
    yalign 0.5
    left_margin 7

style slider_button_text:
    properties gui.text_properties("slider_button")
    color "ffffff"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]
    hover_color "C6DF6B"
    hover_outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#000000", absolute(0), absolute(0)) ]

style slider_vbox:
    xsize 282
    ysize 50


## History screen ##############################################################
##
## This is a screen that displays the dialogue history to the player. While
## there isn't anything special about this screen, it does have to access the
## dialogue history stored in _history_list.
##
## https://www.renpy.org/doc/html/history.html
image historybg:
    Solid("1B377F", xsize = 800, ysize = 348, ypos= 0.21)
    alpha 0.75 



screen history():

    tag menu

    if persistent.game_started:
        style_prefix "game_menu"


    if persistent.game_started:
            use gamemenu_bg
    else:
        use mainmenu_firstbg
        add "bg_black" ypos -0.79 
        add "bg_black" ypos 0.79 

                        ## Avoid predicting this screen, as it can be very large.
    predict False


    frame:
        style "game_menu_outer_frame"
        add "historybg" ypos 51

        hbox:
            pos (-150,51)

            ## Reserve space for the navigation section.

            viewport:
                yinitial 1.0
                scrollbars "vertical"
                mousewheel True
                draggable True
                pagekeys True

                side_yfill True

                vbox:
                    spacing 0.5

                    transclude


                    style_prefix "history"

                    for h in _history_list:

                        window:

                            ## This lays things out properly if history_height is None.
                            has fixed:
                                yfit True

                            if h.who:

                                label h.who:
                                    style "history_name"
                                    substitute False

                                    ## Take the color of the who text from the Character, if
                                    ## set.
                                    if "color" in h.who_args:
                                        text_color h.who_args["color"]

                            $ what = renpy.filter_text_tags(h.what, allow=gui.history_allow_tags)
                            text what:
                                substitute False

                    if not _history_list:
                        label _("The dialogue history is empty.")


    use navigation

    # textbutton _("Return"):
    #     style "return_button"

    #     action Return()

    if persistent.game_started:
        label "History" at title_anim
    else:
        label "History" at title_anim2





# screen history():

#     tag menu


#     ## Avoid predicting this screen, as it can be very large.
#     predict False

#     use game_menu(_("History"), scroll = "vpgrid", yinitial=1.0, spacing=gui.history_spacing):

#         style_prefix "history"

#         for h in _history_list:

#             window:

#                 ## This lays things out properly if history_height is None.
#                 has fixed:
#                     yfit True

#                 if h.who:

#                     label h.who:
#                         style "history_name"
#                         substitute False

#                         ## Take the color of the who text from the Character, if
#                         ## set.
#                         if "color" in h.who_args:
#                             text_color h.who_args["color"]

#                 $ what = renpy.filter_text_tags(h.what, allow=gui.history_allow_tags)
#                 text what:
#                     substitute False

#         if not _history_list:
#             label _("The dialogue history is empty.")


## This determines what tags are allowed to be displayed on the history screen.

define gui.history_allow_tags = { "alt", "noalt", "rt", "rb", "art" }


style history_window is empty

style history_name is gui_label
style history_name_text is gui_label_text
style history_text is gui_text

style history_label is gui_label
style history_label_text is gui_label_text

style history_window:
    xfill True
    ysize gui.history_height
    ypos 0

style history_name:
    xpos gui.history_name_xpos
    xanchor gui.history_name_xalign
    ypos gui.history_name_ypos
    xsize gui.history_name_width

style history_name_text:
    min_width gui.history_name_width
    textalign gui.history_name_xalign
    size 24
    color "C6DF6B"
    outlines [(absolute(12), "#1B3780", absolute(0), absolute(0)), (absolute(7), "#000000", absolute(0), absolute(0)) ]

style history_text:
    xpos gui.history_text_xpos
    ypos gui.history_text_ypos
    xanchor gui.history_text_xalign
    xsize gui.history_text_width
    min_width gui.history_text_width
    textalign gui.history_text_xalign
    layout ("subtitle" if gui.history_text_xalign else "tex")
    size 24
    properties gui.text_properties("page_button")
    color "ffffff"
    outlines [(absolute(5), "#000000", absolute(0), absolute(0)), (absolute(5), "#1B3780", absolute(0), absolute(2)),]

style history_label:
    xfill True

style history_label_text:
    xalign 0.5
    size 16


## Help screen #################################################################
##
## A screen that gives information about key and mouse bindings. It uses other
## screens (keyboard_help, mouse_help, and gamepad_help) to display the actual
## help.

screen help():

    tag menu

    default device = "keyboard"

    use game_menu(_("Help"), scroll="viewport"):

        style_prefix "help"

        vbox:
            spacing 10

            hbox:

                textbutton _("Keyboard") action SetScreenVariable("device", "keyboard")
                textbutton _("Mouse") action SetScreenVariable("device", "mouse")

                if GamepadExists():
                    textbutton _("Gamepad") action SetScreenVariable("device", "gamepad")

            if device == "keyboard":
                use keyboard_help
            elif device == "mouse":
                use mouse_help
            elif device == "gamepad":
                use gamepad_help


screen keyboard_help():

    hbox:
        label _("Enter")
        text _("Advances dialogue and activates the interface.")

    hbox:
        label _("Space")
        text _("Advances dialogue without selecting choices.")

    hbox:
        label _("Arrow Keys")
        text _("Navigate the interface.")

    hbox:
        label _("Escape")
        text _("Accesses the game menu.")

    hbox:
        label _("Ctrl")
        text _("Skips dialogue while held down.")

    hbox:
        label _("Tab")
        text _("Toggles dialogue skipping.")

    hbox:
        label _("Page Up")
        text _("Rolls back to earlier dialogue.")

    hbox:
        label _("Page Down")
        text _("Rolls forward to later dialogue.")

    hbox:
        label "H"
        text _("Hides the user interface.")

    hbox:
        label "S"
        text _("Takes a screenshot.")

    hbox:
        label "V"
        text _("Toggles assistive {a=https://www.renpy.org/l/voicing}self-voicing{/a}.")

    hbox:
        label "Shift+A"
        text _("Opens the accessibility menu.")


screen mouse_help():

    hbox:
        label _("Left Click")
        text _("Advances dialogue and activates the interface.")

    hbox:
        label _("Middle Click")
        text _("Hides the user interface.")

    hbox:
        label _("Right Click")
        text _("Accesses the game menu.")

    hbox:
        label _("Mouse Wheel Up")
        text _("Rolls back to earlier dialogue.")

    hbox:
        label _("Mouse Wheel Down")
        text _("Rolls forward to later dialogue.")


screen gamepad_help():

    hbox:
        label _("Right Trigger\nA/Bottom Button")
        text _("Advances dialogue and activates the interface.")

    hbox:
        label _("Left Trigger\nLeft Shoulder")
        text _("Rolls back to earlier dialogue.")

    hbox:
        label _("Right Shoulder")
        text _("Rolls forward to later dialogue.")

    hbox:
        label _("D-Pad, Sticks")
        text _("Navigate the interface.")

    hbox:
        label _("Start, Guide, B/Right Button")
        text _("Accesses the game menu.")

    hbox:
        label _("Y/Top Button")
        text _("Hides the user interface.")

    textbutton _("Calibrate") action GamepadCalibrate()


style help_button is gui_button
style help_button_text is gui_button_text
style help_label is gui_label
style help_label_text is gui_label_text
style help_text is gui_text

style help_button:
    properties gui.button_properties("help_button")
    xmargin 5

style help_button_text:
    properties gui.text_properties("help_button")

style help_label:
    xsize 157
    right_padding 13

style help_label_text:
    size gui.text_size
    xalign 1.0
    textalign 1.0



################################################################################
## Additional screens
################################################################################


## Confirm screen ##############################################################
##
## The confirm screen is called when Ren'Py wants to ask the player a yes or no
## question.
##
## https://www.renpy.org/doc/html/screen_special.html#confirm

screen confirm(message, yes_action, no_action):

    ## Ensure other screens do not get input while this screen is displayed.
    modal True

    zorder 200

    style_prefix "confirm"

    add "gui/overlay/confirm.png"

    frame at confirm_anim:
        pos (0.5,0.5)

        vbox:
            xalign .5
            yalign .5
            spacing 19

            label _(message):
                style "confirm_prompt"
                xalign 0.5

            hbox:
                xalign 0.5
                spacing 63

                textbutton _("Yes") action yes_action at mainbutton_hover:
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound
                textbutton _("No") action no_action at mainbutton_hover:
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound

    ## Right-click and escape answer "no".
    key "game_menu" action no_action


style confirm_frame is gui_frame
style confirm_prompt is gui_prompt
style confirm_prompt_text is gui_prompt_text
style confirm_button is gui_medium_button
style confirm_button_text is gui_medium_button_text

transform confirm_anim:
    align (0.5,0.5)
    zoom 0.0 
    easein_elastic 1 zoom 1.0

style confirm_frame:
    background Frame('gui/mainmenu_frame.png', gui.confirm_frame_borders, tile=gui.frame_tile)
    padding (20, 20)

style confirm_prompt_text:
    textalign 0.5
    size 24
    color "ffffff"
    hover_color "C6DF6B"
    selected_color "C6DF6B"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#000000", absolute(0), absolute(0)) ]

style confirm_button:
    properties gui.button_properties("confirm_button")

style confirm_button_text:
    properties gui.text_properties("confirm_button")
    size 32
    color "ffffff"
    hover_color "C6DF6B"
    selected_color "C6DF6B"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#000000", absolute(0), absolute(0)) ]


## Skip indicator screen #######################################################
##
## The skip_indicator screen is displayed to indicate that skipping is in
## progress.
##
## https://www.renpy.org/doc/html/screen_special.html#skip-indicator

screen skip_indicator():

    zorder 100
    style_prefix "skip"

    frame:

        hbox:
            spacing 4

            text _("Skipping")

            text "▸" at delayed_blink(0.0, 1.0) style "skip_triangle"
            text "▸" at delayed_blink(0.2, 1.0) style "skip_triangle"
            text "▸" at delayed_blink(0.4, 1.0) style "skip_triangle"


## This transform is used to blink the arrows one after another.
transform delayed_blink(delay, cycle):
    alpha .5

    pause delay

    block:
        linear .2 alpha 1.0
        pause .2
        linear .2 alpha 0.5
        pause (cycle - .4)
        repeat


style skip_frame is empty
style skip_text is gui_text
style skip_triangle is skip_text

style skip_frame:
    ypos gui.skip_ypos
    background None
    padding gui.skip_frame_borders.padding

style skip_text:
    size gui.notify_text_size
    color "ffffff"
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]

style skip_triangle:
    ## We have to use a font that has the BLACK RIGHT-POINTING SMALL TRIANGLE
    ## glyph in it.
    font "DejaVuSans.ttf"


## Important Text Screen ##################################

default importanttext_size = 60

screen importanttext(message, tennaver=False):
    zorder 100
    style_prefix "importanttext"

    if tennaver == False:
        text "[message!tq]" xalign 0.5 yalign 0.2 size importanttext_size at importanttext_transform
    else:
        text "[message!tq]" xalign 0.5 yalign 0.43 size importanttext_size at importanttext_transform

style importanttext_text:
    color "ffffff"
    outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#1B3780", absolute(0), absolute(0)) ]

transform importanttext_transform:
    on show:
        yoffset -25
        easein_quad 1 yoffset 0



##### SKIP BUTTON
# Called after the player plays through the game once. Used to skip otherwise unskippable cutscenes, like the pixel segments of the game.

screen skip_intermission(skiplabel):
    zorder 100
    textbutton _("Skip>>>") action Jump(skiplabel) style "nvl_choice_button" xalign 1.0 yalign 0.03







## Notify screen ###############################################################
##
## The notify screen is used to show the player a message. (For example, when
## the game is quicksaved or a screenshot has been taken.)
##
## https://www.renpy.org/doc/html/screen_special.html#notify-screen

screen notify(message):

    zorder 100
    style_prefix "notify"

    frame at notify_appear:
        text "[message!tq]"

    timer 3.25 action Hide('notify')


transform notify_appear:
    on show:
        alpha 0
        linear .25 alpha 1.0
    on hide:
        linear .5 alpha 0.0


style notify_frame is empty
style notify_text is gui_text

style notify_frame:
    ypos gui.notify_ypos

    background None
    padding gui.notify_frame_borders.padding

style notify_text:
    properties gui.text_properties("notify")
    color "ffffff"
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]


## NVL screen ##################################################################
##
## This screen is used for NVL-mode dialogue and menus.
##
## https://www.renpy.org/doc/html/screen_special.html#nvl

screen nvl_quickmenu():
        frame:
            style "empty"
            xalign 0.075
            yalign 0.825
            image "gui/frame_intermission_quickmenu.png"

        vbox:
            style_prefix "quick_nvl"

            xalign 0.105
            yalign 0.735

            # textbutton _("Back") action Rollback()
            textbutton _("Auto") action Preference("auto-forward", "toggle"):
                hover_sound mainbutton_hoversound
                activate_sound mainbutton_activatesound
            textbutton _("Hist") action ShowMenu('history'):
                hover_sound mainbutton_hoversound
                activate_sound mainbutton_activatesound
            # textbutton _("Skip") action Skip() alternate Skip(fast=True, confirm=True)


        frame:
            style "empty"
            xalign 0.925
            yalign 0.825
            image "gui/frame_intermission_quickmenu.png"
        vbox:
            style_prefix "quick_nvl"
            xalign 0.9
            yalign 0.735
            textbutton _("Save") action ShowMenu('save'):
                hover_sound mainbutton_hoversound
                activate_sound mainbutton_activatesound
            textbutton _("Pref") action ShowMenu('preferences'):
                hover_sound mainbutton_hoversound
                activate_sound mainbutton_activatesound


screen nvl(dialogue, items=None):

    on "show" action SetVariable("nvl_showing", True)
    on "hide" action SetVariable("nvl_showing", False)

    use nvl_quickmenu

    window:
        style "nvl_window"

        has vbox:
            spacing gui.nvl_spacing



        ## Displays dialogue in either a vpgrid or the vbox.
        if gui.nvl_height:

            vpgrid:
                cols 1
                yinitial 1.0

                use nvl_dialogue(dialogue)

        else:

            use nvl_dialogue(dialogue)

        ## Displays the menu, if given. The menu may be displayed incorrectly if
        ## config.narrator_menu is set to True.
        for i in items:

            textbutton i.caption:
                action i.action
                style "nvl_button"

    add SideImage() xalign 0.0 yalign 1.0


screen nvl_dialogue(dialogue):

    for d in dialogue:

        window:
            id d.window_id

            fixed:
                yfit gui.nvl_height is None

                if d.who is not None:

                    text d.who:
                        id d.who_id

                text d.what:
                    id d.what_id




## This controls the maximum number of NVL-mode entries that can be displayed at
## once.
define config.nvl_list_length = gui.nvl_list_length

style nvl_window:
    pos (235,300)
    xpadding 5

style nvl_entry is default

style nvl_label:
        size 0
style nvl_dialogue:
        font "gui/mariones.ttf"
        size 14
        color "ffffff"


style nvl_button is button
style nvl_button_text is button_text

style nvl_window:
    xfill True
    yfill True

    #background "gui/nvl.png"
    padding gui.nvl_borders.padding

style nvl_entry:
    xfill True
    ysize gui.nvl_height

style nvl_label:
    xpos gui.nvl_thought_xpos
    xanchor gui.nvl_thought_xalign
    ypos gui.nvl_thought_ypos
    xsize gui.nvl_thought_width
    min_width gui.nvl_thought_width
    textalign gui.nvl_thought_xalign

style nvl_dialogue:
    xpos gui.nvl_thought_xpos
    xanchor gui.nvl_thought_xalign
    ypos gui.nvl_thought_ypos
    xsize gui.nvl_thought_width
    min_width gui.nvl_thought_width
    textalign gui.nvl_thought_xalign
    layout ("subtitle" if gui.nvl_text_xalign else "tex")

style nvl_thought:
    xpos gui.nvl_thought_xpos
    xanchor gui.nvl_thought_xalign
    ypos gui.nvl_thought_ypos
    xsize gui.nvl_thought_width
    min_width gui.nvl_thought_width
    textalign gui.nvl_thought_xalign
    layout ("subtitle" if gui.nvl_text_xalign else "tex")

style nvl_button:
    properties gui.button_properties("nvl_button")
    xpos gui.nvl_button_xpos
    xanchor gui.nvl_button_xalign

style nvl_button_text:
    properties gui.text_properties("nvl_button")


## Bubble screen ###############################################################
##
## The bubble screen is used to display dialogue to the player when using speech
## bubbles. The bubble screen takes the same parameters as the say screen, must
## create a displayable with the id of "what", and can create displayables with
## the "namebox", "who", and "window" ids.
##
## https://www.renpy.org/doc/html/bubble.html#bubble-screen

screen bubble(who, what):
    style_prefix "bubble"

    window:
        id "window"


        at transform:
            on show:
                zoom 0.0
                easeout 0.1 zoom 1.1
                easeout 0.1 zoom 1.0



        if who is not None:

            window:
                id "namebox"
                style "bubble_namebox"


        text what:
            id "what"

style bubble_window is empty
style bubble_namebox is empty
style bubble_who is default
style bubble_what is default

style bubble_window:
    anchor (0.5,0.5)
    left_padding 27
    right_padding 27
    top_padding 27
    bottom_padding 27

style bubble_namebox:
    xalign 0.5

style bubble_who:
    xalign 0.5
    textalign 0.5
    color "#000"

style bubble_what:
    anchor (0.75,0.5)
    align (0.5, 0.5)
    text_align 0.5
    layout "subtitle"
    size 20
    color "#000"

define bubble.frame = Frame("gui/bubble_speak.png", 0, 0, 0, 0)
define bubble.framecenter = Frame("gui/bubble_speak_center.png", 0, 0, 0, 0)
define bubble.thoughtframe = Frame("gui/thoughtbubble.png", 55, 55, 55, 55)
define bubble.tennaframe = Frame("gui/bubble_tenna_speak.png", 0, 0, 0, 0)
define bubble.tennaframecenter = Frame("gui/bubble_tenna_speak_center.png", 0, 0, 0, 0)
define bubble.grippinsframe = Frame("gui/bubble_grippins_speak.png", 0, 0, 0, 0)
define bubble.grippinsframecenter = Frame("gui/bubble_grippins_speak_center.png", 0, 0, 0, 0)
define bubble.weatherframe = Frame("gui/bubble_weather_speak.png", 0, 0, 0, 0)
define bubble.mikeframe = Frame("gui/bubble_mike_speak.png", 0, 0, 0, 0)
define bubble.mikecenter= Frame("gui/bubble_mike_think.png", 0, 0, 0, 0)



define bubble.properties = {

#### GENERAL
    "bottom_left" : {
        "window_background" : Transform(bubble.frame, xzoom=1, yzoom=1),
        "window_left_padding" : 30,
    },

    "bottom_right" : {
        "window_background" : Transform(bubble.frame, xzoom=-1, yzoom=1),
        "window_right_padding" : 45,
    },
    "top_left" : {
        "window_background" : Transform(bubble.frame, xzoom=1, yzoom=-1),
        "window_left_padding" : 30,
    },

    "top_right" : {
        "window_background" : Transform(bubble.frame, xzoom=-1, yzoom=-1),
        "window_right_padding" : 45,
    },



    "center" : {
        "window_background" : Transform(bubble.framecenter, xzoom=-1, yzoom=1),
        "window_left_padding" : 30,
    },
    # "top_left" : {
    #     "window_background" : Transform(bubble.frame, xzoom=1, yzoom=-1),
    #     "window_left_padding" : 30,
    # },

    # "top_right" : {
    #     "window_background" : Transform(bubble.frame, xzoom=-1, yzoom=-1),
    #     "window_right_padding" : 45,
    

### TENNA

    "tenna_bottom_left" : {
        "window_background" : Transform(bubble.tennaframe, xzoom=1, yzoom=1),
        "window_left_padding" : 73,
        "window_right_padding": 60,
    },

    "tenna_bottom_right" : {
        "window_background" : Transform(bubble.tennaframe, xzoom=-1, yzoom=1),
        "window_left_padding" : 60,
        "window_right_padding": 73,
    },
    "tenna_top_left" : {
        "window_background" : Transform(bubble.tennaframe, xzoom=1, yzoom=-1),
        "window_left_padding" : 73,
        "window_right_padding": 60,
    },

    "tenna_top_right" : {
        "window_background" : Transform(bubble.tennaframe, xzoom=-1, yzoom=-1),
        "window_left_padding" : 60,
        "window_right_padding": 73,
    },

    "tenna_center" : {
        "window_background" : Transform(bubble.tennaframecenter, xzoom=-1, yzoom=1),
    },


### GRIPPINS

    "grippins_bottom_left" : {
        "window_background" : Transform(bubble.grippinsframe, xzoom=1, yzoom=1),
        "window_left_padding" : 73,
        "window_right_padding": 60,

    },

    "grippins_bottom_right" : {
        "window_background" : Transform(bubble.grippinsframe, xzoom=-1, yzoom=1),
        "window_left_padding" : 60,
        "window_right_padding": 73,
    },

    "grippins_top_left" : {
        "window_background" : Transform(bubble.grippinsframe, xzoom=1, yzoom=-1),
        "window_left_padding" : 73,
        "window_right_padding": 60,
    },

    "grippins_top_right" : {
        "window_background" : Transform(bubble.grippinsframe, xzoom=-1, yzoom=-1),
        "window_left_padding" : 60,
        "window_right_padding": 73,
    },

    "grippins_center" : {
        "window_background" : Transform(bubble.grippinsframecenter, xzoom=-1, yzoom=1),
    },

### WEATHER

    "weather_bottom_left" : {
        "window_background" : Transform(bubble.weatherframe, xzoom=1, yzoom=1),
        "window_left_padding" : 73,
        "window_right_padding": 60,
    },

    "weather_bottom_right" : {
        "window_background" : Transform(bubble.weatherframe, xzoom=-1, yzoom=1),
        "window_left_padding" : 60,
        "window_right_padding": 73,
    },

    "weather_top_left" : {
        "window_background" : Transform(bubble.weatherframe, xzoom=1, yzoom=-1),
        "window_left_padding" : 73,
        "window_right_padding": 60,
    },

    "weather_top_right" : {
        "window_background" : Transform(bubble.weatherframe, xzoom=-1, yzoom=-1),
        "window_left_padding" : 60,
        "window_right_padding": 73,
    },

### MIKE

    "mike_bottom_left" : {
        "window_background" : Transform(bubble.mikeframe, xzoom=1, yzoom=1),
        "window_left_padding" : 73,
        "window_right_padding": 60,
    },

    "mike_bottom_right" : {
        "window_background" : Transform(bubble.mikeframe, xzoom=-1, yzoom=1),
        "window_left_padding" : 60,
        "window_right_padding": 73,
    },

    "mike_top_left" : {
        "window_background" : Transform(bubble.mikeframe, xzoom=1, yzoom=-1),
        "window_left_padding" : 73,
        "window_right_padding": 60,
    },

    "mike_top_right" : {
        "window_background" : Transform(bubble.mikeframe, xzoom=-1, yzoom=-1),
        "window_left_padding" : 60,
        "window_right_padding": 73,
    },
    "mike_center" : {
        "window_background" : Transform(bubble.mikecenter, xzoom=-1, yzoom=1),
        "window_left_padding" : 30,
    },
    }


define bubble.expand_area = {
    "bottom_left" : (0, 0, 0, 22),
    "bottom_right" : (0, 0, 0, 22),
    "top_left" : (0, 22, 0, 0),
    "top_right" : (0, 22, 0, 0),
    "thought" : (0, 0, 0, 0),
}



################################################################################
## Mobile Variants
################################################################################

style pref_vbox:
    variant "medium"
    xsize 282

## Since a mouse may not be present, we replace the quick menu with a version
## that uses fewer and bigger buttons that are easier to touch.
screen quick_menu():
    variant "touch"

    zorder 100

    if quick_menu:

        hbox:
            style_prefix "quick"

            xalign 0.5
            yalign 1.0

            textbutton _("Back") action Rollback()
            textbutton _("Skip") action Skip() alternate Skip(fast=True, confirm=True)
            textbutton _("Auto") action Preference("auto-forward", "toggle")
            textbutton _("Menu") action ShowMenu()


style window:
    variant "small"
    background "gui/phone/textbox.png"

style radio_button:
    variant "small"
    foreground "gui/phone/button/radio_[prefix_]foreground.png"

style check_button:
    variant "small"
    foreground "gui/phone/button/check_[prefix_]foreground.png"

style nvl_window:
    variant "small"
    background "gui/phone/nvl.png"

style main_menu_frame:
    variant "small"
    background "gui/phone/overlay/main_menu.png"

style game_menu_outer_frame:
    variant "small"
    background "gui/phone/overlay/game_menu.png"

style game_menu_navigation_frame:
    variant "small"
    xsize 213

style game_menu_content_frame:
    variant "small"
    top_margin 0

style pref_vbox:
    variant "small"
    xsize 250

style bar:
    variant "small"
    ysize gui.bar_size
    left_bar Frame("gui/phone/bar/left.png", gui.bar_borders, tile=gui.bar_tile)
    right_bar Frame("gui/phone/bar/right.png", gui.bar_borders, tile=gui.bar_tile)

style vbar:
    variant "small"
    xsize gui.bar_size
    top_bar Frame("gui/phone/bar/top.png", gui.vbar_borders, tile=gui.bar_tile)
    bottom_bar Frame("gui/phone/bar/bottom.png", gui.vbar_borders, tile=gui.bar_tile)

style scrollbar:
    variant "small"
    ysize gui.scrollbar_size
    base_bar Frame("gui/phone/scrollbar/horizontal_[prefix_]bar.png", gui.scrollbar_borders, tile=gui.scrollbar_tile)
    thumb Frame("gui/phone/scrollbar/horizontal_[prefix_]thumb.png", gui.scrollbar_borders, tile=gui.scrollbar_tile)

style vscrollbar:
    variant "small"
    xsize gui.scrollbar_size
    base_bar Frame("gui/phone/scrollbar/vertical_[prefix_]bar.png", gui.vscrollbar_borders, tile=gui.scrollbar_tile)
    thumb Frame("gui/phone/scrollbar/vertical_[prefix_]thumb.png", gui.vscrollbar_borders, tile=gui.scrollbar_tile)

style slider:
    variant "small"
    ysize gui.slider_size
    base_bar Frame("gui/phone/slider/horizontal_[prefix_]bar.png", gui.slider_borders, tile=gui.slider_tile)
    thumb "gui/phone/slider/horizontal_[prefix_]thumb.png"

style vslider:
    variant "small"
    xsize gui.slider_size
    base_bar Frame("gui/phone/slider/vertical_[prefix_]bar.png", gui.vslider_borders, tile=gui.slider_tile)
    thumb "gui/phone/slider/vertical_[prefix_]thumb.png"

style slider_vbox:
    variant "small"
    xsize None

style slider_slider:
    variant "small"
    xsize 375
