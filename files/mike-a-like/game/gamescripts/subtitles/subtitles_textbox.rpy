# Permission is hereby granted, free of charge, to any person
# obtaining a copy of this software and associated documentation files
# (the "Software"), to deal in the Software without restriction,
# including without limitation the rights to use, copy, modify, merge,
# publish, distribute, sublicense, and/or sell copies of the Software,
# and to permit persons to whom the Software is furnished to do so,
# subject to the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


# Anime Subtitles in Ren'Py Version: 1.3.1



## HOW TO USE ##################################################################
##
## Put me in your /game folder.
## I will replace your say screen.



## If you want to change something it's probably one of these. #################
##
## Unless you know what you're doing.

## Where is the default placement of the subtitles?
## You can change this midgame.
## This puts it in the center of the screen (0.5) but a but lower (0.7)
default sub_pos = (0.5, 0.8)

## Should the textbox be draggable?
define gui.subtitle_isdraggable = True

## What is the opacity of the subtitles background.
define gui.subtitle_bg_opacity = 0.0

## These will affect every part of the subtitles.
define gui.subtitle_text_size = 24
define gui.subtitle_vertical_pos = 0.75

## If the text is too long it will move onto the next line.
define gui.subtitle_maxwidth = 1200

## If you feel like having your subtitles left-aligned.
define gui.subtitle_dialogue_alignment = 0.5

## That rectangular frame around the text can be any displayable.
## This could be a file path to an image.
define gui.subtitle_name_bg = Solid("#000000")
define gui.subtitle_dialogue_bg = Solid("#000000")

## Colors!
define gui.subtitle_name_color = "#ffffff"
define gui.subtitle_dialogue_color = "#ffffff"
define gui.subtitle_dialogue_outlinecolor = "#111111"
define gui.subtitle_dialogue_shadowcolor = "#111111a7"



## Centered Character Overrides ################################################
##
## Because the textbox is draggable, modifications
## need to be made to the centered characters.
define centered = Character(None, statement_name="say-centered")
define vcentered = Character(None, what_vertical=True, statement_name="say-centered")



## Say subtitle screen #########################################################
##
## The say subtitle screen is used to display dialogue to the player
## but now it looks like subtitles.
## It takes two parameters, who and what, which are the name of
## the speaking character and the text to be displayed, respectively.
## (The who parameter can be None if no name is given.)
## 
## https://cuteshadow.itch.io/subtitles-textbox-in-renpy

screen subtitle(who, what):

    drag:
        # Clicking on the textbox will show the next line of dialogue.
        # Otherwise it may feel like the game randomly ignores clicking.
        clicked Return()

        # Center the text in the obvious way if a centered character is speaking.
        if renpy.get_statement_name() == "say-centered":
            align (0.5, 0.5)
            draggable False
        # Otherwise, defaults to the subpos position and is draggable again.
        else:
            anchor (0.5, gui.subtitle_text_size)
            pos 0.5,0.78
            draggable gui.subtitle_isdraggable

        # An invisible frame that contains the name and the dialogue.
        frame:
            background None
            ypadding 20
            xpadding 10
            xmaximum gui.subtitle_maxwidth

            # Sometimes the say screen is shown without any dialogue
            # for some reason.
            # This makes the say screen only show up when there is dialogue.
            if not what:
                at transform:
                    alpha 0.0

            # Stack the name and dialogue on top of each other.
            vbox style "subtitles_vbox":

                # The character's name.
                if who is not None:
                    frame style "subtitles_name_frame":

                        text who+":" id "who":
                            size gui.subtitle_text_size
                            color gui.subtitle_name_color
                            outlines [ (absolute(3), gui.subtitle_dialogue_shadowcolor, absolute(2), absolute(2)), (absolute(3), gui.subtitle_dialogue_outlinecolor, absolute(0), absolute(0)) ]
                else:
                    # If there is no name,
                    # add some empty space.
                    null height gui.subtitle_text_size
                
                # The character's dialogue.
                frame style "subtitles_dialogue_frame":

                    text what id "what":
                        pos (0,0)
                        size gui.subtitle_text_size 
                        color gui.subtitle_dialogue_color
                        xsize 750
                        outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]
                        text_align gui.subtitle_dialogue_alignment
                        layout "subtitle"
                        # line_leading 12
                        # line_spacing 7
                        # line_overlap_split -3



style subtitles_name_frame:
    background Transform(gui.subtitle_name_bg, alpha=gui.subtitle_bg_opacity)
    xalign 0.5

style subtitles_dialogue_frame:
    background Transform(gui.subtitle_dialogue_bg, alpha=gui.subtitle_bg_opacity)
    xalign 0.5

style subtitles_vbox:
    spacing -1

style subtitles_text:
    line_spacing 50
