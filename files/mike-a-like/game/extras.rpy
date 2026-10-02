init offset = -1


## Extras Screen ################################################################
##### A screen dedicated to the extras of this game. 
#There are four menus: 
# An endings gallery (You can replay them)
# A music room (for the ost)
# A credits list (Modified About Screen)
# A bonus room (only unlockable after you get all 5 endings in the game.)

image endings_button = At("gui/extras_ending_button.png", Transform(zoom = 0.5))
image bonus_button = At("gui/extras_bonus_button.png", Transform(zoom = 0.5))
image credits_button = At("gui/extras_credits_button.png", Transform(zoom = 0.5))
image musicroom_button = At("gui/extras_musicroom_button.png", Transform(zoom = 0.5))


default persistent.extras_unlocked = False
screen extras():
    tag menu

    use game_menu(_("Extras")):
        style_prefix "extras"
        if persistent.extras_unlocked == True:
            vbox:

                pos (0.00,0.35)
                hbox:
                    imagebutton idle "endings_button" at imagebutton_hover_extras:
                        hover_sound mainbutton_hoversound
                        activate_sound mainbutton_activatesound
                        action ShowMenu('endings')
                    spacing 25
                    imagebutton idle "musicroom_button" at imagebutton_hover_extras:
                        hover_sound mainbutton_hoversound
                        activate_sound mainbutton_activatesound
                        action ShowMenu('musicroom')
                spacing 10
                hbox:
                    imagebutton idle "credits_button" at imagebutton_hover_extras:
                        hover_sound mainbutton_hoversound
                        activate_sound mainbutton_activatesound
                        action ShowMenu('credits')
                    spacing 25
                    imagebutton idle "bonus_button" at imagebutton_hover_extras:
                        hover_sound mainbutton_hoversound
                        activate_sound mainbutton_activatesound
                        action Start("bonusroom")
        else:
            text "This looks a bit TOO empty...\nCome back after you've reached an ending!" style "endings_label_text" size 24 textalign 0.5 anchor(0.5,0.5) pos(0.6,1.9)


style extras_label is gui_label
style extras_label_text is gui_label_text
style extras_text is gui_text

style extras_label_text:
    size gui.label_text_size


transform imagebutton_hover_extras():
    on hover:
        easein 0.1 yoffset -5
    on idle:
        easeout 0.1 yoffset 0


## Endings screen ################################################################
##
## This screen show the endings for the game, and provides hints on how to get them.



image t_rank_button_locked = At("gui/ending_t_locked.png", Transform(zoom = 0.5))
image s_rank_button_locked = At("gui/ending_s_locked.png", Transform(zoom = 0.5))
image a_rank_button_locked = At("gui/ending_a_locked.png", Transform(zoom = 0.5))
image b_rank_button_locked = At("gui/ending_b_locked.png", Transform(zoom = 0.5))
image c_rank_button_locked = At("gui/ending_c_locked.png", Transform(zoom = 0.5))

image t_rank_button = At("gui/ending_t_unlocked.png", Transform(zoom = 0.5))
image s_rank_button = At("gui/ending_s_unlocked.png", Transform(zoom = 0.5))
image a_rank_button = At("gui/ending_a_unlocked.png", Transform(zoom = 0.5))
image b_rank_button = At("gui/ending_b_unlocked.png", Transform(zoom = 0.5))
image c_rank_button = At("gui/ending_c_unlocked.png", Transform(zoom = 0.5))

image endings_tooltip = At("gui/tooltip_bar.png", Transform(zoom = 0.5))


screen endings():
    tag menu

    use game_menu(_("Endings")):
        style_prefix "extras"

        hbox:

            pos (-0.02,0.15)
            spacing 10
            if persistent.ending_obtained_t == True:
                imagebutton idle "t_rank_button" at imagebutton_hover_extras:
                    action Replay('t_rank_end')
                    tooltip "T-Rank Ending: Tenna's Favorite"
                    hover_sound "audio/sfx/general/snd_musicbox.wav"
                    activate_sound mainbutton_activatesound
            else:
                imagebutton idle "t_rank_button_locked" at imagebutton_hover_extras:
                    action NullAction()
                    tooltip "Get 2 or more T ranks, and don't get anything below an S!"
                    hover_sound mainbutton_hoversound
                    activate_sound  "audio/sfx/general/snd_bump.wav"
            if persistent.ending_obtained_s == True:
                imagebutton idle "s_rank_button" at imagebutton_hover_extras:
                    action Replay('s_rank_end')
                    tooltip "S-Rank Ending: S is for Sellout"
                    hover_sound "audio/sfx/general/snd_musicbox_d.ogg"
                    activate_sound mainbutton_activatesound
            else:
                imagebutton idle "s_rank_button_locked" at imagebutton_hover_extras:
                    action NullAction()
                    tooltip "Get 2 or more S ranks, and don't get anything below an A!"
                    hover_sound mainbutton_hoversound
                    activate_sound  "audio/sfx/general/snd_bump.wav"
            if persistent.ending_obtained_a == True:
                imagebutton idle "a_rank_button" at imagebutton_hover_extras:
                    action Replay('a_rank_end')
                    tooltip "A-Rank Ending: C'est la Teevie"
                    hover_sound "audio/sfx/general/snd_musicbox_e.ogg"
                    activate_sound mainbutton_activatesound
            else:
                imagebutton idle "a_rank_button_locked" at imagebutton_hover_extras:
                    action NullAction()
                    tooltip "Get 2 or more A ranks, and don't get anything below an B!"
                    hover_sound mainbutton_hoversound
                    activate_sound  "audio/sfx/general/snd_bump.wav"
            if persistent.ending_obtained_b == True:
                imagebutton idle "b_rank_button" at imagebutton_hover_extras:
                    action Replay('b_rank_end')
                    tooltip "B-Rank Ending: NO FUN ALLOWED"
                    hover_sound "audio/sfx/general/snd_musicbox_f.ogg"
                    activate_sound mainbutton_activatesound
            else:
                imagebutton idle "b_rank_button_locked" at imagebutton_hover_extras:
                    action NullAction()
                    tooltip "Get 2 or more B ranks, and don't get anything above an A!"
                    hover_sound mainbutton_hoversound
                    activate_sound  "audio/sfx/general/snd_bump.wav"
            if persistent.ending_obtained_c == True:
                imagebutton idle "c_rank_button" at imagebutton_hover_extras:
                    action Replay('c_rank_end')
                    tooltip "C-Rank Ending: TV Time's True Hero"
                    hover_sound "audio/sfx/general/snd_musicbox_g.ogg"
                    activate_sound mainbutton_activatesound
            else:
                imagebutton idle "c_rank_button_locked" at imagebutton_hover_extras:
                    action NullAction()
                    tooltip "Get 3 C ranks!"
                    hover_sound mainbutton_hoversound
                    activate_sound  "audio/sfx/general/snd_bump.wav"

    $ tooltip = GetTooltip()

    add "endings_tooltip" align(0.5,0.75)
    if tooltip:
        text "[tooltip]" align(0.5,0.75) size 15 outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]




style endings_label is gui_label
style endings_label_text is gui_label_text
style endings_text is gui_text

style endings_label_text:
    size gui.label_text_size
    color "ffffff"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]

style endings_text:
    color "ffffff"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]


## Music Room screen ################################################################
##
## This screen show the endings for the game, and provides hints on how to get them.


init python:
    # Pre-built Transforms so we're not constructing displayables every tick.
    _PIPPINS_DANCE_FRAMES = [
        Transform("images/other/pippinsmusic/pippins_dance_01.png", zoom=0.5),
        Transform("images/other/pippinsmusic/pippins_dance_02.png", zoom=0.5),
        Transform("images/other/pippinsmusic/pippins_dance_03.png", zoom=0.5),
        Transform("images/other/pippinsmusic/pippins_dance_04.png", zoom=0.5),
        Transform("images/other/pippinsmusic/pippins_dance_05.png", zoom=0.5),
        Transform("images/other/pippinsmusic/pippins_dance_06.png", zoom=0.5),
        Transform("images/other/pippinsmusic/pippins_dance_07.png", zoom=0.5),
    ]

    _PIPPINS_DANCE_SEQUENCE = [0, 1, 2, 3, 4, 5, 6, 3]
    _PIPPINS_STILL = Transform("images/other/pippinsmusic/pippinsdance_still.png", zoom=0.5)
    _PIPPINS_FRAME_INTERVAL = 0.2

    def pippins_sequential_displayable(st, at):
        # Music stopped or paused, calm pose.
        if (not renpy.music.is_playing(channel='music')) or renpy.music.get_pause(channel='music'):
            return _PIPPINS_STILL, _PIPPINS_FRAME_INTERVAL

        step = int(st / _PIPPINS_FRAME_INTERVAL) % len(_PIPPINS_DANCE_SEQUENCE)
        return _PIPPINS_DANCE_FRAMES[_PIPPINS_DANCE_SEQUENCE[step]], _PIPPINS_FRAME_INTERVAL

image pippinsdance = DynamicDisplayable(pippins_sequential_displayable)

image play_button = At("gui/button/button_play.png", Transform(zoom = 0.5))
image pause_button = At("gui/button/button_pause.png", Transform(zoom = 0.5))
image stop_button = At("gui/button/button_stop.png", Transform(zoom = 0.5))
image ff_button = At("gui/button/button_ff.png", Transform(zoom = 0.5))
image rw_button = At("gui/button/button_rw.png", Transform(zoom = 0.5))


init python:

    MUSICROOM_TRACKS = [
        ("audio/music/sponsers_loop.ogg",        "1. And Now, A Word From Our Cathode Crew!", "{size=-4}magic&melodies"),
        ("audio/music/vol_adj.ogg",              "2. Speakin' Easy",                          "{size=-4}magic&melodies"),
        ("audio/music/greenroom.ogg",            "3. Relax and Enjoy",                        "{size=-4}NarcolepsyDriver"),
        ("audio/music/rolypoly.ogg",             "4. KING OF ROLYPOLY (CLASSIC MIX)",         "{size=-4}rootvegetableboy"),
        ("audio/music/miketheboard.ogg",         "5. Mike! The Schedule, Please!",            "{size=-4}RainyWishes"),
        ("audio/music/physical_challenge.ogg",   "6. Nose Transposing",                       "{size=-4}magic&melodies"),
        ("audio/music/board_clear.ogg",          "7. TASK CLEAR!",                            "{size=-4}magic&melodies"),
        ("audio/music/tvworld.ogg",              "8. TV WORLD (CLASSIC MIX)",                 "{size=-4}rootvegetableboy"),
        ("audio/music/paradiseparadise.ogg",     "9. Temperate Paradise",                     "{size=-4}RainyWishes"),
        ("audio/music/ruderbuster.ogg",          "10. Cruder Bustin'",                        "{size=-4}RainyWishes"),
        ("audio/music/glowingsnow_therapy.ogg",  "11. Uwah! So Niveous",                      "{size=-4}RainyWishes"),
        ("audio/music/pushing_buddies.ogg",      "12. Boobtube Ballad (Est. '97)",            "{size=-4}magic&melodies"),
        ("audio/music/dump.ogg",                 "13. Down in the Dumps",                     "{size=-4}RainyWishes"),
        ("audio/music/doomboard.ogg",            "14. YOU'RE!! FIRED!!!",                     "{size=-4}NarcolepsyDriver"),
        ("audio/music/glowingsnow_gameover.ogg", "15. It's Snow Over...",                     "{size=-4}RainyWishes"),
        ("audio/music/tvtime.ogg",               "16. IT'S TV TIME! (CLASSIC MIX)",           "{size=-4}rootvegetableboy"),
        ("audio/music/mancountry.ogg",           "17. MADOCOUNTRY",                           "{size=-4}rootvegetableboy"),
    ]

    def musicroom_current_tooltip():
        # Returns the composer line for whichever track the music channel is currently playing or None if nothing matches.
        fn = renpy.music.get_playing(channel='music')
        if fn is None:
            return None
        fn = remove_play_prefix(fn)
        for path, _title, composer in MUSICROOM_TRACKS:
            if path == fn:
                return "Composer: " + composer
        return None

    # Step 1. Create a MusicRoom instance.
    mr = MusicRoom2(fadeout=0.0)

    # Step 2. Register every track from MUSICROOM_TRACKS with the MusicRoom so Previous/Next traverse them in list order.
    for _path, _title, _composer in MUSICROOM_TRACKS:
        mr.add(_path, always_unlocked=True)

screen musicroom():
    tag menu

    use game_menu(_("Music Room")):

        style_prefix "musicroom"

        frame:
                pos (-0.1, 0.13)
                xfill True
                yfill True
                xsize 470
                ysize 275
                xpadding 15
                ypadding 20
                vpgrid:
                    scrollbars "vertical"
                    vscrollbar_unscrollable "hide"
                    mousewheel True
                    cols 1
                    rows len(MUSICROOM_TRACKS)
                # The buttons that play each track are generated from MUSICROOM_TRACKS so that the titles, file paths, and composer tooltips stay synchronized.
                    for track_path, track_title, track_composer in MUSICROOM_TRACKS:
                        textbutton track_title action mr.Play(track_path) tooltip ("Composer: " + track_composer):
                            hover_sound mainbutton_hoversound
                            activate_sound mainbutton_activatesound
        label "Tracklist" pos(0.13, 0.06)

        bar adjustment mr.music_adj:
            xpos 0.8
            yalign 0.51
            xsize 200
            ysize 25


        if mr.Play():
            add mr.music_pos(size=12, outlines =[(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]) pos (0.91,0.478) 
        timer 1.0 repeat True action mr.timer

        # Prefer the hovered track's tooltip(so that the player can browse composers without changing the song), but fall back to the currently-playing track when nothing's hovered.
        $ tooltip = GetTooltip() or musicroom_current_tooltip()

        if tooltip:
            text "[tooltip]" pos(0.805,0.62) size 15 outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]


        # Start the music playing on entry to the music room.
        on "replace" action mr.Play()

        # Restore the main menu music upon leaving.
        on "replaced" action Play("music", "track1.ogg")

        add "pippinsdance" pos(0.78,0.05) zoom 0.9

        # Buttons that let us advance tracks.
        hbox:
            pos (0.83,0.56)
            imagebutton idle "rw_button" at imagebutton_hover_extras:
                hover_sound mainbutton_hoversound
                activate_sound mainbutton_activatesound
                action mr.Previous()
            spacing 10
            # Combined play/pause toggle.
            if renpy.music.is_playing(channel='music') and not renpy.music.get_pause(channel='music'):
                imagebutton idle "pause_button" at imagebutton_hover_extras:
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound
                    action Function(renpy.music.set_pause, True, channel='music')
            else:
                imagebutton idle "play_button" at imagebutton_hover_extras:
                    hover_sound mainbutton_hoversound
                    activate_sound mainbutton_activatesound
                    # If the channel is paused then unpause, but if it is stopped then run mr.Play().
                    action If(renpy.music.get_pause(channel='music'),
                        true=Function(renpy.music.set_pause, False, channel='music'),
                        false=mr.Play())
            imagebutton idle "stop_button" at imagebutton_hover_extras:
                hover_sound mainbutton_hoversound
                activate_sound mainbutton_activatesound
                action mr.Stop()
                yalign 0.6
            imagebutton idle "ff_button" at imagebutton_hover_extras:
                hover_sound mainbutton_hoversound
                activate_sound mainbutton_activatesound
                action mr.Next()

        




style musicroom_label is gui_label
style musicroom_label_text is gui_label_text
style musicroom_text is gui_text


style musicroom_frame:
    background Frame("gui/mainmenu_frame.png")

style musicroom_label_text:
    size 32
    color "ffffff"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]

style musicroom_text:
    size 16
    color "ffffff"
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]

style musicroom_button:
    properties gui.button_properties("quick_button")
    spacing 15

style musicroom_button_text:
    color "ffffff"
    selected_color "#a2bb1e"
    selected_hover_color "#a2bb1e"
    selected_insensitive_color "#a2bb1e"

    size 16
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]
    hover_outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#000000", absolute(0), absolute(0)) ]




## About screen ################################################################
##
## This screen gives credit and copyright information about the game and Ren'Py.
##
## There's nothing special about this screen, and hence it also serves as an
## example of how to make a custom screen.


image aboutgame_bg:
    Solid("fff")
    alpha 0.5


screen credits():

    tag menu

    ## This use statement includes the game_menu screen inside this one. The
    ## vbox child is then included inside the viewport inside the game_menu
    ## screen.
    use game_menu(_("Credits")):

        style_prefix "credits"
        frame:
            xfill True
            yfill True
            pos (-0.05,0.1)
            xsize 425
            ysize 300
            xpadding 20
            ypadding 10
            vpgrid:
                scrollbars "vertical"
                vscrollbar_unscrollable "hide"
                mousewheel True
                cols 1
                rows 1
                vbox:
                    label " Art, UI, Story, Coding, Directing" xalign 0.5
                    spacing -15
                    text "Mado\n{size=-8}(Coding: Scenes, Intermission, Therapy Minigame)\n" xalign 0.5 textalign 0.5

                    label "Coding" xalign 0.5
                    text "Azxiana\n{size=-8}Noses Minigame, Simon Says Minigame\n" xalign 0.5 textalign 0.5

                    text "Kigyo\n{size=-8}Quick Menu Base Code\n" xalign 0.5 textalign 0.5

                    text "CuteShadow\n{size=-8}Subtitle Effect\n" xalign 0.5 textalign 0.5

                    text "RenpyRemix\n{size=-8}Animated Bars\n" xalign 0.5 textalign 0.5

                    text "Stella\n@ Make Visual Novels\n{size=-8}Speechbubble Tools\n" xalign 0.5 textalign 0.5

                    text "Wattson\n{size=-8}Wave Shader\n" xalign 0.5 textalign 0.5

                    text "Bamboocalc\n{size=-8}Continuous Text Sounds\n" xalign 0.5 textalign 0.5

                    text "Kyoryuukunn\n{size=-8}Music Room Changeable Seek Bar Code\n" xalign 0.5 textalign 0.5                    

                    text "Feniks\n{size=-8}Outline Shader, Alpha Mask LayeredImage,\nController Support Expansion Code \n" xalign 0.5 textalign 0.5

                    text "Yuri\n{size=-8}Additional Assistance\n" xalign 0.5 textalign 0.5

                    label "Music" xalign 0.5

                    text "NarcolepsyDriver\n{size=-8}Relax and Enjoy\nYOU'RE!! FIRED!!!\n" xalign 0.5 textalign 0.5

                    text "rootveggieboy\n{size=-8}IT'S TV TIME! (Classic Mix)\nTV WORLD (Classic Mix)\nKING OF ROLYPOLY (Classic Mix)\nMADOCOUNTRY\n" xalign 0.5 textalign 0.5

                    text "RainyWishes\n{size=-8}Cruder Bustin'\nUwah! So Niveous\nIt's Snow Over\nTemperate Paradise\nMike! The Schedule, Please!\nDown in the Dumps\n" xalign 0.5 textalign 0.5

                    text "magic&melodies\n{size=-8}TASK CLEAR!\nNose Transposing\nBoobtube Ballad (Est. '97)\nAnd Now, A Word From The Cathode Crew!\nSpeakin' Easy\n" xalign 0.5 textalign 0.5


                    label "Writing Assistance" xalign 0.5
                    text "Cluniies\n{size=-8}Beta Reading\n" xalign 0.5 textalign 0.5
                    text "Pubbee\n{size=-8}Therapy Minigame Questions\n" xalign 0.5 textalign 0.5
                    text "Saffycell\n{size=-8}Therapy Minigame Questions\n" xalign 0.5 textalign 0.5


                    label "Beta Testing" xalign 0.5
                    text "Dookins\nmxsoda\nInkedEntropy\nAlleycatforthelulz\nBasically_Kiyotaka\nPubbee\nrunicmagitek\nrianofski\ncluniies" xalign 0.5 textalign 0.5

                    label "Special Thanks" xalign 0.5
                    text "Uprank\n{size=-8}For the 3D Tenna model\n" xalign 0.5 textalign 0.5
                    text "The TV Time! Zine Team\n{size=-8}For organizing this fanbook\nand supporting this project\n" xalign 0.5 textalign 0.5
                    text "My Friends\n{size=-8}For your kind words and encouragement\n" xalign 0.5 textalign 0.5
                    text "Toby Fox\nTemmie Chang\nThe Deltarune Team\n{size=-8}For making Deltarune" xalign 0.5 textalign 0.5
                # hbox: 
                #     vbox:
                #         label "Art"
                #         spacing -15
                #         text "Mado" xalign 0.5

                #     spacing 15

                #     vbox:
                #         label "{size=-6}Credit Title"
                #         spacing -15
                #         text "name" xalign 0.5

                # hbox: 
                #     vbox:
                #         label "{size=-6}Credit Title"
                #         spacing -15
                #         text "name" xalign 0.5

                #     spacing 15

                #     vbox:
                #         label "{size=-6}Credit Title"
                #         spacing -15
                #         text "name" xalign 0.5
                # hbox: 
                #     vbox:
                #         label "{size=-6}Credit Title"
                #         spacing -15
                #         text "name" xalign 0.5

                #     spacing 15

                #     vbox:
                #         label "{size=-6}Credit Title"
                #         spacing -15
                #         text "name" xalign 0.5
                # hbox: 
                #     vbox:
                #         label "{size=-6}Credit Title"
                #         spacing -15
                #         text "name" xalign 0.5

                #     spacing 15

                #     vbox:
                #         label "{size=-6}Credit Title"
                #         spacing -15
                #         text "name" xalign 0.5




        frame:
            pos (0.72,0.1)
            xsize 300
            ysize 200
            xfill True
            yfill True
            xpadding 10
            ypadding 10
            background None

            text _p("""{size=-2}      Made with {a=https://www.renpy.org/}Ren'Py{/a} 8.5.2{/size}.

                {size=-6}This program contains free software under a number of licenses,
                including the MIT License and GNU Lesser General Public License.

                A complete list of software (with links to source code) can be
                found {a=https://www.renpy.org/doc/html/license.html}here.{/a}""")

        text "{outlinecolor=#960811}Thank you for your help with\n      making this game real!{/outlinecolor}" pos (0.95,0.61) at text_rotate



style credits_label is gui_label
style credits_label_text is gui_label_text
style credits_text is gui_text

style credits_frame:
    background Frame("gui/mainmenu_frame.png")

transform text_rotate:
    subpixel True
    anchor (0.5,0.5)
    rotate 2


style credits_label_text:
    size 26
    color "ffffff"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]
    textalign 0.5
style credits_text:
    size 18
    antialias True
    color "ffffff"
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]
