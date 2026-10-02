# The script of the game goes in this file.
# This is also where the splashscreen and the main variables for the game are toggled, such as character definitions and gamewide variables


default persistent.game_started = False

######### ENDING PERSISTENTS ##########

default persistent.ending_obtained_c = False
default persistent.ending_obtained_b = False
default persistent.ending_obtained_a = False
default persistent.ending_obtained_s = False
default persistent.ending_obtained_t = False


#### SKIP BUTTON PERSISTENT

default persistent.skipbutton = False

######## SHUFFLING ANSWERS #########



default shuffle = False

init python:
    renpy_menu = menu
    renpy_menu_nvl = nvl_menu

    def menu(items):
        items = list(items)

        if shuffle:
            renpy.random.shuffle(items)

        return renpy_menu(items)

    def nvl_menu(items):
        items = list(items)

        if shuffle:
            renpy.random.shuffle(items)

        return renpy_menu_nvl(items)



########TEXT BEEPS######################################################################

init python:
    import random, re

##############################################################################
    # This function makes the continuous text sounds
#    def text_sounds(event, interact=False, **kwargs):
#        if event == "show":  # When textbox is shown
#            what = renpy.store._last_say_what # This grabs the text that was most recently spoken on-screen
#            if what:
#                sound_count = len(what)
#            else:
#                sound_count = 5
#
#            for _ in range(sound_count): # This creates a sound queue based on how many characters are in the dialogue block
#                randosound = renpy.random.randint(1, 11) # This generates a random number between 1 and 11 inclusive. Change this based on how many sound files you have
#                renpy.sound.queue(f"audio/popcat{randosound}.wav", channel="sound", loop=False) # Change "popcat" to the name of your sound file
#
#        elif event == "end" or event == "slow_done":
#            renpy.sound.stop(channel="sound") # This stops the text sounds if there is a pause in the dialogue or the text has finished displaying
#
#            randosound = renpy.random.randint(1, 11) # This generates a random number between 1 and 11 inclusive. Change this based on how many sound files you have
#            renpy.sound.play(f"audio/popcat{randosound}.wav", channel="sound", loop=False) # This plays one final uninterrupted sound at the end of the dialogue block

    renpy.music.register_channel("textsound", "sfx", False) # Add a new sound channel for the text sounds so that they don't overlap with anything else

    # Copied from randomized_text_sound_example.rpy.
    def typography(what):
        replacements = [
            ('. ', '. {w=.2}'),
            ('? ', '? {w=.25}'),
            ('! ', '! {w=.25}'),
            (', ', ', {w=.15}'),
        ]
        for old, new in replacements:
            what = what.replace(old, new)
        return what

    ### this function handles most character's text sounds

    def generic_beeps(event, interact=True, **kwargs):
        if not interact:
            return

        if event == "show_done":
            renpy.sound.play(f"audio/sfx/charactervoices/snd_text.ogg", channel = "textsound", loop = True)
        elif event == "slow_done":
            renpy.sound.stop(channel = "textsound")


    def intermission_text_sounds(event, interact=False, **kwargs):
        if event == "show_done":
            renpy.sound.play(f"audio/sfx/general/snd_board_text_main.ogg", channel = "textsound", loop = True)
        elif event == "slow_done":
            renpy.sound.stop(channel = "textsound")




    ### this function handles Tenna's continuous text sounds



    def tenna_text_sounds(event, interact=False, **kwargs):
        if event == "show":  # When textbox is shown
            what = renpy.store._last_say_what
            sound_count = len(what)

            for _ in range(sound_count): # This creates a sound queue based on how many characters are in the dialogue block
                randosound = renpy.random.randint(1, 27) # This generates a random number between 1 and 11 inclusive. Change this based on how many sound files you have
                renpy.sound.queue(f"audio/sfx/charactervoices/tenna/snd_tv_voice_short_{randosound}.ogg", channel="textsound", loop=False) # Change "popcat" to the name of your sound file

        elif event == "end" or event == "slow_done":
            if Pause:
                renpy.sound.queue(f"<silence>", channel="textsound")
            else:
                renpy.sound.stop(channel="textsound") # This stops the text sounds if there is a pause in the dialogue or the text has finished displaying

                randosound = renpy.random.randint(1, 27) # This generates a random number between 1 and 11 inclusive. Change this based on how many sound files you have
                renpy.sound.play(f"audio/sfx/charactervoices/tenna/snd_tv_voice_short_{randosound}.ogg", channel="sound", loop=False) # This plays one final uninterrupted sound at the end of the dialogue block
##############################################################################


# Declare characters used by this game. The color argument colorizes the
# name of the character.

define t = Character("Tenna", callback=tenna_text_sounds, cb_name = "tenna", image = "tenna", kind=bubble, retain = True)
define q = Character("???", callback = generic_beeps, cb_name = None, image = "???", kind = bubble, retain = True)
define g = Character("Green Pippins", callback = generic_beeps, cb_name = "grippins", image = "grippins", kind = bubble, retain = True)
define z = Character("Zapper", callback = generic_beeps, cb_name = "zapper", kind = bubble,image = "zapper", retain = True)
define pa = Character("Pippins A", callback = generic_beeps, cb_name = "pippinsa", kind = bubble, image = "pippinsa",retain = True)
define pb = Character("Pippins B", callback = generic_beeps, cb_name = "pippinsb", kind = bubble,image = "pippinsb", retain = True)
define l = Character("Lanino", callback = generic_beeps, cb_name = "lanino", kind = bubble,image = "lanino", retain = True)
define e = Character("Elnina", callback = generic_beeps, cb_name = "elnina", kind = bubble,image = "elnina", retain = True)
define m = Character("Mike", callback = generic_beeps, cb_name = "mike", kind = bubble,image = "mike", retain = True)

### definition for the player character/narrator
define n = Character(None, callback = generic_beeps)
define n_end = Character(None, screen = "subtitle", callback = generic_beeps)


#### for intermission scenes
define t_nvl = Character("Tenna", callback = intermission_text_sounds, kind = nvl, window_background=Frame("gui/frame_intermission.png", 0, 0, 0, 0), window_xoffset = -10, window_xsize=350, window_ysize = 90, window_padding=(10 ,10), nvl_height = 90)
define m_nvl = Character(None, callback = intermission_text_sounds, kind = nvl,  what_prefix = "{color=0C8563}mado: {/color}", window_background=Frame("gui/frame_intermission.png", 0, 0, 0, 0), window_xoffset = -10, window_xsize=350, window_ysize = 90, window_padding=(10 ,10), nvl_height = 90)
define n_nvl = Character(None, callback = intermission_text_sounds, kind = nvl)
define mn_nvl = Character(None, callback = intermission_text_sounds, what_prefix = "{color=0C8563}mado: {/color}", kind = nvl)

screen quiz_time():
    text "   {size=50}quiz\n time!{/size}" xpos 235 ypos 374 font "gui/mariones.ttf" color "ffffff"


##### code for intermission scenes

default nvl_showing = False

screen noclick(): #for removing the click for the initial splashscreen
    zorder 1000
    $ preferences.afm_enable = True


label splashscreen:
    if persistent.game_started:
        scene black
        with Pause(1.5)

        play sound ["audio/sfx/general/snd_smallswing.wav","audio/sfx/general/snd_tenna_room_enter.wav","audio/sfx/general/snd_tenna_room_exit.wav"]
        show tvtimezine_logo:
            align (0.5,0.5)
            subpixel True
            xzoom 0.0 yzoom 0.0 rotate -45 alpha 0
            parallel:
                easein_elastic 1 xzoom 1.0
            parallel:
                easein_elastic 0.8 yzoom 1.0
            parallel:
                easein_elastic 1 rotate 0
            parallel:
                easein 1 alpha 1.0


        show splashtext_below "{size=+12}presents...":
            alpha 0.0
            pause 1.05
            easein 1 alpha 1
        with Pause(7)

        hide tvtimezine_logo
        hide splashtext_below
        with dissolve
        with Pause(3)
        play sound "audio/sfx/general/snd_sparkle_glock.wav"
        show text "{size=+12}A project by {color=F26282}Madocactus" at fade_in_text
        with dissolve

        with Pause(7)
        play sound "audio/sfx/general/snd_titan_wingshut.wav"
        hide text with dissolve
        with Pause(3)
        #hide screen noc
        $ config.main_menu_music = "audio/music/sponsers_loop.ogg"
        play music "audio/music/sponsers_loop.ogg"
        return
    else:
        show screen noclick()
        $ config.main_menu_music = "audio/sfx/general/ocean.ogg"
        play music "audio/sfx/general/ocean.ogg"
        scene black
        with Pause(1.5)

        play sound ["audio/sfx/general/snd_smallswing.wav","audio/sfx/general/snd_tenna_room_enter.wav","audio/sfx/general/snd_tenna_room_exit.wav"]
        show tvtimezine_logo:
            align (0.5,0.5)
            subpixel True
            xzoom 0.0 yzoom 0.0 rotate -45 alpha 0
            parallel:
                easein_elastic 1 xzoom 1.0
            parallel:
                easein_elastic 0.8 yzoom 1.0
            parallel:
                easein_elastic 1 rotate 0
            parallel:
                easein 1 alpha 1.0


        show splashtext_below "{size=+12}presents...":
            alpha 0.0
            pause 1.05
            easein 1 alpha 1
        with Pause(7)

        hide tvtimezine_logo
        hide splashtext_below
        with dissolve
        with Pause(3)
        play sound "audio/sfx/general/snd_sparkle_glock.wav"
        show text "{size=+12}A project by {color=F26282}Madocactus" at fade_in_text
        with dissolve

        with Pause(7)
        play sound "audio/sfx/general/snd_titan_wingshut.wav"
        hide text with dissolve
        with Pause(3)
        #hide screen noclick
        hide screen noclick



        return

# The game starts here.

label start:

    stop music fadeout 1.0


    if not persistent.game_started:
        play sound ["<silence 1>", "audio/sfx/general/snd_bump.wav"]
        play audio ["<silence 3.6>", "audio/sfx/general/snd_heavyswing.wav"]
        show first_rdoor:
            pause 3.6
            easeout 0.45 xpos 1.0
        show first_ldoor:
            pause 3.6
            easeout 0.45 xpos -0.5
        show first_lock:
            xanchor 0.5 yanchor 0.0
            xpos 0.5 ypos 0.1 
            pause 1
            yoffset -48
            ease 0.05 rotate 5 
            ease 0.05 rotate 0
            ease 0.05 rotate -5
            ease 0.05 rotate 0
        pause 2.0
        play sound ["audio/sfx/general/snd_noise.wav","<silence 0.765>", "audio/sfx/general/snd_fall.wav"]
        show first_unlock:
            xanchor 0.5 yanchor 0.0
            xpos 0.5 ypos 0.1 
            yoffset 0
            ease 0.1 yoffset 6
            ease 0.1 yoffset 0
            pause 0.8
            yoffset -48
            easeout_quad 0.5 rotate 90 xpos 1.0 ypos 1.0 knot 0.0
        hide first_lock

        $ renpy.pause(5, hard=True) 
        hide first_rdoor
        hide first_ldoor
        hide first_lock


    $ persistent.game_started = True
    $ config.main_menu_music = "audio/music/sponsers_loop.ogg"


    # menu:
    #     "test room":
    #         jump testroom
    #     "just start the game":
    #         jump gameintro

    pause 2

    jump gameintro




    # This ends the game.

    return
