############## UI IMAGES (COPY PASTE INTO SCREENS FILE WHEN SORTED)

### ctc image

image ctc:
    'gui/ctc.png'
    subpixel True
    zoom 0.03 anchor (0.5,0.5) pos (0.5,0.5)
    block:
        ease 0.5 rotate 10
        ease 0.5 rotate -10
        repeat

    


### tenna alert images (for simon says minigame)


transform tennamask_transform:
    zoom 0.0 anchor (0.5,1.0) pos (0.22,0.9) rotate 0
    easein_elastic 1 zoom 1.0 pos (0.22,1.01)
    linear 0.1 rotate 5
    linear 0.1 rotate -5
    linear 0.1 rotate 5
    linear 0.1 rotate -5

transform center_screen:
    align(0.5,0.5)



image tenna_alert_back:
    zoom 0.5
    'gui/minigames/dancegame/dancegame_tennaalert_back.png'
image tenna_alert_front:
    zoom 0.5
    'gui/minigames/dancegame/dancegame_tennaalert_front.png'
image tenna_alert_mask:
    zoom 0.5
    'gui/minigames/dancegame/dancegame_tennaalert_mask.png'
image tenna_alert_frame:
    zoom 0.5
    'gui/minigames/dancegame/dancegame_tennaalert_frontframe.png'



image tenna_alert_masked = AlphaMask("tenna_alert_front","tenna_alert_mask")



screen tenna_alert_full:
    add "tenna_alert_back"
    add AlphaMask("tenna_alert_front","tenna_alert_mask") at tennamask_transform yoffset -185
    add "tenna_alert_frame"


transform your_turn_transform:
    anchor (0.5,0.5) offset(200,300) zoom 0.0 rotate 0
    easein 0.2 zoom 1.0 offset(400,300)
    pause 2
    easeout 0.2 zoom 0.0 offset(200,300)

transform repeat_after_me_text_transform:
    anchor (0.5,0.5)
    zoom 0.0
    pause 0.5
    easein_elastic 1 zoom 1.0
    pause 0.7
    easeout 0.2 zoom 0.0

screen repeat_after_me:

    frame:
        at your_turn_transform
        pos (0.25,0.1)
        background None
        use tenna_alert_full

    text "Repeat after me!" style "results_text" at repeat_after_me_text_transform xpos 0.5 ypos 0.6


# image tenna_alert_full = Composite(
#         (350,560),
#         (0,0), "tenna_alert_back",
#         (0,0), At("tenna_alert_masked", Transform(anchor=(0.5,1.0))),
#         (0,0), "tenna_alert_frame")
    


#### TUTORIAL ARROW

image tutorial_arrow:
    zoom 0.5
    "gui/minigames/nosegame/instruction_arrow.png"


#### SPLASH LOGOS

image tvtimezine_logo:
    zoom 0.5
    "gui/tvtime_logo.png"

image splashtext_below = ParameterizedText(xalign=0.5, yalign=0.75)

image epilogue_text = ParameterizedText(xalign=0.5, yalign=0.45)
image epilogue_text2 = ParameterizedText(xalign=0.5, yalign=0.55)

#### TEXTBOX

image adv_textbox:
    zoom 0.5
    "gui/adv_textbox.png"

#### CHOICE TEXTBOX

image choice_1:
    zoom 0.25
    "gui/choice_1.png"

image choice_2:
    zoom 0.25
    "gui/choice_3.png"


#### MAIN MENU ASSETS

image bg_black = Solid("000")
image bg_black2 = Solid("000")

image bg_black_game:
    Solid("000")
    alpha 0.5

image long_black = Solid("000", height = 1600)


image test_block = Solid("777")

image main_gradient:
    zoom 0.5
    "gui/menu_bgs/mainmenu_bggradient.png"

image main_tile_large:
    animation
    Tile(At("gui/menu_bgs/mainmenu_startile.png", Transform(zoom = 0.25)), xysize=(1600,1200))
    pos (0,-238)
    linear 10 pos(-238,0)
    repeat

image logo:
    animation
    subpixel True
    zoom 0.5
    align (0.5,0.5)
    pos (0.5,0.5)
    "gui/menu_bgs/logo.png"
    parallel:
        easein 3 rotate 2
        easeout 3 rotate 0
        easein 3 rotate -2
        easeout 3 rotate 0
        repeat
    parallel:
        ease 3 ypos 0.52
        ease 3 ypos 0.5
        repeat

image logofirst:
    animation
    subpixel True
    zoom 0.5
    align (0.5,0.5)
    pos (0.5,0.5)
    "gui/menu_bgs/logo.png"


## for the doors that close when you boot up the game anytime

# therapy ver

image rdoor_therapy:
    xalign 0.5
    zoom 0.5
    "gui/menu_bgs/therapy_Rdoor.png"

image ldoor_therapy:
    xalign 0.5
    zoom 0.5
    "gui/menu_bgs/therapy_Ldoor.png"

# simon says ver

image rdoor_simonsays:
    xalign 0.5
    zoom 0.5
    "gui/menu_bgs/simonsays_Rdoor.png"

image ldoor_simonsays:
    xalign 0.5
    zoom 0.5
    "gui/menu_bgs/simonsays_Ldoor.png"

# nose minigame ver

image rdoor_nose:
    xalign 0.5
    zoom 0.5
    "gui/menu_bgs/nosegame_Ldoor.png"

image ldoor_nose:
    xalign 0.5
    zoom 0.5
    "gui/menu_bgs/nosegame_Rdoor.png"

# general ver

image rdoor:
    xalign 0.5
    zoom 0.5
    "gui/menu_bgs/mainmenu_Rdoor.png"

image ldoor:
    xalign 0.5
    zoom 0.5
    "gui/menu_bgs/mainmenu_Ldoor.png"

image lock:
    align (0.5, 0.0)
    xpos 0.5
    zoom 0.5
    "gui/menu_bgs/mainmenu_lock.png"

image unlock:
    align (0.5, 0.0)
    xpos 0.5
    zoom 0.5
    "gui/menu_bgs/mainmenu_unlock.png"


## for the ATL transition for the doors.



####### GENERAL DOORS 
transform doorslam(duration=1.5, *, new_widget=None, old_widget=None):
    delay duration
    contains:
        old_widget
        events False
        pause 1.0
        new_widget
        events True

    contains:
        parallel:
            "ldoor"
            xpos -0.5 ypos -0.05
            easeout 0.2 xpos 0.25
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 0.85
            easeout 0.2 xpos -0.5

    contains:
        parallel:
            "rdoor"

            xpos 1.5 ypos -0.05
            easeout 0.2 xpos 0.75
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 0.85
            easeout 0.2 xpos 1.5

transform doorslam_slow(duration=3, *, new_widget=None, old_widget=None):
    delay duration
    contains:
        old_widget
        events False
        pause 2.0
        new_widget
        events True

    contains:
        parallel:
            "ldoor"
            xpos -0.5 ypos -0.05
            easeout 0.2 xpos 0.25
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 1.7
            easeout 0.2 xpos -0.5

    contains:
        parallel:
            "rdoor"

            xpos 1.5 ypos -0.05
            easeout 0.2 xpos 0.75
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 1.7
            easeout 0.2 xpos 1.5


#### NOSE GAME DOORS

transform doorslam_nose(duration=1.5, *, new_widget=None, old_widget=None):
    delay duration
    contains:
        old_widget
        events False
        pause 1.0
        new_widget
        events True

    contains:
        parallel:
            "ldoor_nose"
            xpos -0.5 ypos -0.05
            easeout 0.2 xpos 0.25
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 0.85
            easeout 0.2 xpos -0.5

    contains:
        parallel:
            "rdoor_nose"

            xpos 1.5 ypos -0.05
            easeout 0.2 xpos 0.75
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 0.85
            easeout 0.2 xpos 1.5

#### SIMON SAYS DOORS

transform doorslam_simonsays(duration=1.5, *, new_widget=None, old_widget=None):
    delay duration
    contains:
        old_widget
        events False
        pause 1.0
        new_widget
        events True

    contains:
        parallel:
            "ldoor_simonsays"
            xpos -0.5 ypos -0.05
            easeout 0.2 xpos 0.25
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 0.85
            easeout 0.2 xpos -0.5

    contains:
        parallel:
            "rdoor_simonsays"

            xpos 1.5 ypos -0.05
            easeout 0.2 xpos 0.75
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 0.85
            easeout 0.2 xpos 1.5


#### THERAPY DOORS

transform doorslam_therapy(duration=3.5, *, new_widget=None, old_widget=None):
    delay duration
    contains:
        old_widget
        events False
        pause 3.0
        new_widget
        events True

    contains:
        parallel:
            "ldoor_therapy"
            xpos -0.5 ypos -0.05
            easeout 0.2 xpos 0.25
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 2.85
            easeout 0.2 xpos -0.5

    contains:
        parallel:
            "rdoor_therapy"

            xpos 1.5 ypos -0.05
            easeout 0.2 xpos 0.75
            easeout 0.05 yoffset 10
            easeout 0.05 yoffset -10
            easeout 0.05 yoffset 5
            easeout 0.05 yoffset -5
            easeout 0.05 yoffset 0
            pause 2.85
            easeout 0.2 xpos 1.5


## HAPPY HAPPY METER ASSETS


image happymeter_t:
    "gui/bar/happyhappymeter_marker_trank.png"
    subpixel True
    animation
    zoom 0.5 align (0.5,0.7)
    linear 1 rotate 5
    linear 1 rotate 0
    linear 1 rotate -5
    linear 1 rotate 0
    repeat

image happymeter_s:
    "gui/bar/happyhappymeter_marker_srank.png"
    subpixel True
    animation
    zoom 0.5 align (0.5,0.7)
    linear 1 rotate 5
    linear 1 rotate 0
    linear 1 rotate -5
    linear 1 rotate 0
    repeat

image happymeter_a:
    "gui/bar/happyhappymeter_marker_arank.png"
    subpixel True
    animation
    zoom 0.5 align (0.5,0.7)
    linear 1 rotate 5
    linear 1 rotate 0
    linear 1 rotate -5
    linear 1 rotate 0
    repeat

image happymeter_b:
    "gui/bar/happyhappymeter_marker_brank.png"
    subpixel True
    animation
    zoom 0.5 align (0.5,0.7)
    linear 1 rotate 5
    linear 1 rotate 0
    linear 1 rotate -5
    linear 1 rotate 0
    repeat

image happymeter_c:
    "gui/bar/happyhappymeter_marker_crank.png"
    subpixel True
    animation
    zoom 0.5 align (0.5,0.7)
    linear 1 rotate 5
    linear 1 rotate 0
    linear 1 rotate -5
    linear 1 rotate 0
    repeat

image happymeter_z:
    "gui/bar/happyhappymeter_marker_zrank.png"
    subpixel True
    animation
    zoom 0.5 align (0.5,0.7)
    linear 1 rotate 5
    linear 1 rotate 0
    linear 1 rotate -5
    linear 1 rotate 0
    repeat



image happymeter_logo:
    "gui/bar/happyhappymeter_logo.png"
    zoom 0.5


image happymeter_barshine:
    "gui/bar/happyhappymeter_barshine.png"
    zoom 0.5

image happymeter_shinea:
    "gui/bar/happyhappymeter_shinea.png"
    zoom 0.5 
    subpixel True
    linear 1 rotate 2
    linear 1 rotate 0
    repeat

image happymeter_shineb:
    "gui/bar/happyhappymeter_shineb.png"
    zoom 0.5 
    subpixel True
    linear 1 rotate -2
    linear 1 rotate 0
    repeat

image happymeter_imagever:
    "gui/bar/happymeter_imagever.png"
    zoom 0.5    


### NOSE GAME ASSETS

image nosegame_bg:
    "gui/minigames/nosegame/nosegame_bg.png"
    zoom 0.5

#clock

image noseclock:
    "gui/minigames/nosegame/clock.png"
    zoom 0.5

## normal noses

image nose_1:
    "gui/minigames/nosegame/nose_1.png"
    zoom 0.5

image nose_2:
    "gui/minigames/nosegame/nose_2.png"
    zoom 0.5

image nose_3:
    "gui/minigames/nosegame/nose_3.png"
    zoom 0.5

image nose_4:
    "gui/minigames/nosegame/nose_4.png"
    zoom 0.5

image nose_5:
    "gui/minigames/nosegame/nose_5.png"
    zoom 0.5

image nose_6:
    "gui/minigames/nosegame/nose_6.png"
    zoom 0.5

image nose_7:
    "gui/minigames/nosegame/nose_7.png"
    zoom 0.5

# nose transforms for hover and dragging states.
# Each variant is wrapped in a fixed-size Fixed in nose_organization.rpy to keep the Drag's bounding box stable across states; align (0.5, 0.5) centers the sprite inside that wrapper.
transform nose_align:
    align (0.5, 0.5)
    zoom 1.0

transform nose_hover_transform:
    align (0.5, 0.5)
    zoom 1.05

transform nose_selhover_transform:
    subpixel True
    align (0.5, 0.5)
    zoom 1.05
    # Set the initial rotation to something that is not 0 or just won't work.  I don't know why, just do it.
    block:
        rotate 4
        ease 1.0 rotate 0
        ease 1.0 rotate 4
        ease 1.0 rotate 0
        ease 1.0 rotate -4
        repeat

transform nose_base_align:
    align (0.5, 0.5)
    zoom 0.5

# Tutorial arrows.
transform arrow_anim:
    subpixel True
    block:
        ease 1 xoffset 10
        ease 1 xoffset 0
        repeat

transform arrow_anim_2:
    subpixel True
    block:
        ease 1 xoffset 10 yoffset -10
        ease 1 xoffset 0 yoffset 0
        repeat

transform arrow_point(rot=0, dist=10):
    rotate rot
    subpixel True
    block:
        ease 1 xoffset (dist * math.cos(math.radians(rot))) yoffset (dist * math.sin(math.radians(rot)))
        ease 1 xoffset 0 yoffset 0
        repeat

# individual transforms for each door
## for the menu that shows when you first boot up the game

image first_rdoor:
    xpos 0.5
    zoom 0.5
    "gui/menu_bgs/mainmenu_firstbg_Rdoor.png"

image first_ldoor:
    xpos 0.0
    zoom 0.5
    "gui/menu_bgs/mainmenu_firstbg_Ldoor.png"

image first_lock:
    align (0.5, 0.0)
    xpos 0.5 ypos 0.1
    zoom 0.5
    "gui/menu_bgs/mainmenu_firstbg_lock.png"

image first_unlock:
    align (0.5, 0.0)
    xpos 0.5 ypos 0.1
    zoom 0.5
    "gui/menu_bgs/mainmenu_firstbg_unlock.png"


#### RESULTS SCREEN

### For text styles

style results_text:
    size gui.title_text_size
    color "ffffff"
    outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#1B3780", absolute(0), absolute(0)) ]

style results_subtext:
    size 36
    color "ffffff"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0)) ]

style results_subscore:
    size 36
    color "EAD11E"
    outlines [(absolute(10), "#960811", absolute(0), absolute(10)),(absolute(10), "#C43611", absolute(0), absolute(0)) ]


### For transforms

transform header_anim:
    on show:
        align (0.5,0.5)
        pos (0.38,0.17)
        zoom 0.0
        easein_elastic 1 zoom 1.0


transform score_anim:
    anchor (0.5,0.5)
    zoom 0.0
    pause 0.5
    easein_elastic 1 zoom 1.0

transform subheader1_anim:
    anchor (0.5,0.5)
    zoom 0.0
    pause 0.5
    easein_elastic 1 zoom 1.0

transform subheader2_anim:
    anchor (0.5,0.5)
    zoom 0.0
    pause 0.6
    easein_elastic 1 zoom 1.0

transform subheader3_anim:
    anchor (0.5,0.5)
    zoom 0.0
    pause 1.5
    easein_elastic 1 zoom 1.0


### intermission results screen

define credits_header_ypos = 0.2
define credits_name_xpos = 0.5
define credits_name_ypos = 0.3

image intermission_results = ParameterizedText(xalign=0.5, yalign=0.2, font= "gui/mariones.ttf", color="960811")

image intermission_score = ParameterizedText(xalign=0.5,yalign=0.3,font= "gui/mariones.ttf", size=18)

image intermission_score_comment = ParameterizedText(xalign=0.5,yalign=0.375,font= "gui/mariones.ttf", size=18)


image credits_header = ParameterizedText(xpos=0.5, ypos=credits_header_ypos, anchor = (0.5,0.0), font= "gui/mariones.ttf", color="960811")
image credits_header2 = ParameterizedText(xpos=0.5, ypos=credits_header_ypos, anchor = (0.5,0.0), font= "gui/mariones.ttf", color="960811")
image credits_name = ParameterizedText(xpos=credits_name_xpos, ypos=credits_name_ypos, anchor = (0.5,0.0), font= "gui/mariones.ttf", color="ffffff")

### the next day text

image nextday_text = ParameterizedText(xalign=0.5, yalign=0.5, font= "gui/comicsans.ttf", color="ffffff", size=86)





# Slide the black curtain down from above and bounce before settling.
transform black_drop_in:
    yoffset -700
    easein_bounce 2 yoffset 0

### main results screen

screen results(minigame):
    text "Results" style "results_text" at header_anim xpos 0.2 yalign 0.05
    if minigame == "nose_org":
        text "Noses Placed" style "results_subtext"  xpos 0.45 yalign 0.3 at subheader1_anim
        text "Correct Placements" style "results_subtext"  xpos 0.52 yalign 0.5 at subheader2_anim
    elif minigame == "simon_says":
        text "Rounds Completed" style "results_subtext"  xpos 0.5 yalign 0.3 at subheader1_anim
        text "Suspicion Strikes" style "results_subtext" xpos 0.485 yalign 0.5 at subheader2_anim
    elif minigame == "therapy":
        text "Therapy Score" style "results_subtext" xpos 0.43 ypos 0.4 at subheader1_anim
    else:
        text "This result shouldnt be here"
    text "Your Grade:" style "results_subtext"  xpos 0.5 ypos 0.8 at subheader3_anim


## scoring screen

screen result1(minigame):
    hbox:
        if minigame == "nose_org":
            xpos 0.33 ypos 0.4
            text "[totalplacednoses]" style "results_subscore" at score_anim
        elif minigame == "simon_says":
            xpos 0.33 ypos 0.4
            text "[game_round - 1]" style "results_subscore" at score_anim
        elif minigame == "therapy":
            xpos 0.33 ypos 0.5
            text "[therapy_score]/[question_number*2]" style "results_subscore" at score_anim


screen result2(minigame):
    hbox:
        xpos 0.33 ypos 0.6
        if minigame == "nose_org":
            text "[correctplace_noses]" style "results_subscore"  at score_anim
        elif minigame == "simon_says":
            text "[sus_meter]" style "results_subscore" at score_anim


### For rank letter styles

style rank_z:
    size 108
    color "887E83"
    outlines [(absolute(15), "#514F4C", absolute(0), absolute(0)) ]

style rank_c:
    size 108
    color "929C74"
    outlines [(absolute(15), "#596D62", absolute(0), absolute(0)) ]

style rank_b:
    size 108
    color "40AFDD"
    outlines [(absolute(15), "#3B2C96", absolute(0), absolute(0)) ]

style rank_a:
    size 108
    color "E26A12"
    outlines [(absolute(15), "#B31C35", absolute(0), absolute(0)) ]

style rank_s:
    size 108
    color "8F95EE"
    outlines [(absolute(15), "#514F4C", absolute(0), absolute(0)) ]

style rank_t:
    size 108
    color "C43611"
    outlines [(absolute(15), "#EAD11E", absolute(0), absolute(0)) ]

### For rank letter animations

transform rank_t_anim:
    anchor (0.5,1.0)
    pos (0.73,1.0)
    parallel:
        ease 0.3 rotate 0
        ease 0.3 rotate 10
        ease 0.3 rotate 0
        ease 0.3 rotate -10
        repeat
    parallel:
        ease 0.3 yoffset -10
        ease 0.3 yoffset 0
        repeat
    parallel:
        ease 0.3 xzoom 0.8 yzoom 1.2
        ease 0.3 xzoom 1.0 yzoom 1.0
        repeat

transform rank_s_anim:
    anchor (0.5,0.5)
    pos (0.73,0.8)
    block:
        ease 2 xzoom -1.0
        ease 2 xzoom 1.0
        repeat

transform rank_a_anim:
    subpixel True
    anchor (0.5,0.5)
    pos (0.73,0.8)
    xoffset 15
    parallel:
        block:
            ease 2 yoffset -20
            ease 2 yoffset 0
            repeat
    parallel:
        ease 1 rotate -5
        ease 1 rotate 5
        repeat

transform rank_b_anim:
    subpixel True
    anchor (0.5,0.5)
    pos (0.73,0.8)
    parallel:
        block:
            ease 2 yoffset -10
            ease 2 yoffset 0
            repeat
    parallel:
        ease 1 rotate -2
        ease 1 rotate 0
        ease 1 rotate 2
        ease 1 rotate 0
        repeat

transform rank_c_anim:
    anchor (0.5,1.0)
    pos (0.79,0.88)
    parallel:
        xzoom 1.0 yzoom 1.0
        easein_elastic 2 xzoom 1.8 yzoom 0.5



screen minigame_rank(rank):
    if rank == "z":
            text "{font=gui/comicsans.ttf}Z" style "rank_z" xpos 0.68 ypos 0.64  
    elif rank == "c":
            text "C" style "rank_c" at rank_c_anim
    elif rank == "b":
            text "B" style "rank_b" at rank_b_anim
    elif rank == "a":
            text "A" style "rank_a" at rank_a_anim
    elif rank == "s":
            text "S" style "rank_s" at rank_s_anim
    elif rank == "t":
            text "T" style "rank_t" at rank_t_anim


transform gameover_zoom:
    zoom 0.6


#### GAMEOVER SCREEN

style gameover_button is navigation_button:
    size_group None

style gameover_button_text is navigation_button_text

screen gameover(minigame=True,minigame_label="therapy"):
    on "show" action Play("music", ["<silence 2>", "/audio/music/glowingsnow_gameover.ogg"], loop=True, fadein=1)
    on "hide" action Stop("music", fadeout=1)
    zorder 98

    window:
        pos (0.18,-0.05)
        if minigame == True:
            background "images/cgs/gameover_2.png" at gameover_zoom
        else:
            background "images/cgs/gameover_1.png" at gameover_zoom
    text "{size=+32}Game Over" align (0.1,0.1) style "gameover_button_text"
    vbox:
        align (0.1,0.5)
        if minigame == True:
            if minigame_label == "therapy":
                textbutton _("Restart minigame")  action [SetVariable("therapy_score",0), SetVariable("therapy_overall_score",0), SetVariable("questions",5), Hide("fired_text_apostrophe"), Jump("reset_therapy")] style "gameover_button" at quickbutton_hover
            elif minigame_label == "simon_says_menu":
                textbutton _("Restart minigame")  action [SetVariable("sus_meter",0), SetVariable("game_round",1), SetVariable("simonsays_score",0), Hide("fired_text_apostrophe"), Jump("reset_simon_says")] style "gameover_button" at quickbutton_hover
            elif minigame_label == "nose_organization":
                textbutton _("Restart minigame")  action [SetVariable("correctplace_noses",0), SetVariable("nosegame_round",1), SetVariable("totalplacednoses",0), SetVariable("nosegame_score",0),  SetVariable("timex",60), Hide("fired_text_apostrophe"), Jump("reset_nose_org")] style "gameover_button" at quickbutton_hover
            else:
                text "This should not work."
        else:
            textbutton "Restart choice" action Jump(minigame_label) style "gameover_button"  at quickbutton_hover

        textbutton "Return to title" action MainMenu() style "gameover_button" at quickbutton_hover

#### mini-labels for resetting scores before sending them back to the minigames

label reset_nose_org:
    hide screen fired_text_y
    hide screen fired_text_o
    hide screen fired_text_u
    hide screen fired_text_r
    hide screen fired_text_e
    hide screen fired_text_f
    hide screen fired_text_i
    hide screen fired_text_r2
    hide screen fired_text_e2
    hide screen fired_text_d
    hide screen fired_text_exclamation
    hide screen fired_text_apostrophe
    $ happy = happy_score_store
    jump nose_organization

label reset_simon_says:
    hide screen fired_text_y
    hide screen fired_text_o
    hide screen fired_text_u
    hide screen fired_text_r
    hide screen fired_text_e
    hide screen fired_text_f
    hide screen fired_text_i
    hide screen fired_text_r2
    hide screen fired_text_e2
    hide screen fired_text_d
    hide screen fired_text_exclamation
    hide screen fired_text_apostrophe
    $ happy = happy_score_store
    jump simon_says

label reset_therapy:
    hide screen fired_text_y
    hide screen fired_text_o
    hide screen fired_text_u
    hide screen fired_text_r
    hide screen fired_text_e
    hide screen fired_text_f
    hide screen fired_text_i
    hide screen fired_text_r2
    hide screen fired_text_e2
    hide screen fired_text_d
    hide screen fired_text_exclamation
    hide screen fired_text_apostrophe
    $ happy = happy_score_store
    $ topics = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"]
    jump therapy


#### ENDING SCREEN

screen ending_title(rank):
    hbox:
        pos (0.5,0.55)
        if rank == "c":
                text "C Rank ending" style "rank_c_ending" at rank_c_ending_anim
        elif rank == "b":
                text "B Rank ending" style "rank_b_ending" at rank_b_ending_anim
        elif rank == "a":
                text "A Rank ending" style "rank_a_ending" at rank_a_ending_anim
        elif rank == "s":
                text "S Rank ending" style "rank_s_ending" at rank_s_ending_anim
        elif rank == "t":
                text "T Rank ending" style "rank_t_ending" at rank_t_ending_anim
    hbox:
        pos(0.5,0.65)
        if rank == "c":
                text "{size=+12}TV Time's True Hero" style "page_label_text" at ending_subtitle
        elif rank == "b":
                text "{size=+12}NO FUN ALLOWED" style "page_label_text" at ending_subtitle
        elif rank == "a":
                text "{size=+12}C'est la Teevie" style "page_label_text" at ending_subtitle
        elif rank == "s":
                text "{size=+12}S is for Sellout" style "page_label_text" at ending_subtitle
        elif rank == "t":
                text  "{size=+12}Tenna's Favorite" style "page_label_text" at ending_subtitle

### ending-specific animations



transform rank_c_ending_anim:
    anchor (0.5,1.0)
    parallel:
        xzoom 1.0 yzoom 1.0
        pause 0.1
        easein_elastic 2 xzoom 1.8 yzoom 0.5
        pause 2
        easein_bounce 1 xzoom 1.0 yzoom 1.0
    parallel:
        matrixcolor ColorizeMatrix("#596D62","929C74")
        pause 3
        easein_quad 1 matrixcolor ColorizeMatrix("#B31C35","ffffff")

transform rank_b_ending_anim:
    subpixel True
    anchor (0.5,1.0)
    ypos 0.35
    parallel:
        block:
            ease 2 yoffset -10
            ease 2 yoffset 0
            repeat
    parallel:
        ease 1 rotate -2
        ease 1 rotate 2
        repeat

transform rank_a_ending_anim:
    subpixel True
    anchor (0.5,1.0) 
    block:
        xzoom 1.0 yzoom 1.0
        ease_cubic 1 yzoom 1.3 xzoom 0.7
        pause 0.1
        easein_cubic 3 yzoom 0.5 xzoom 1.5

transform rank_s_ending_anim:
    anchor (0.5,1.0)
    block:
        ease 1 xzoom -1.0 yzoom 1.0
        ease 1 xzoom 1.0
        ease 0.75 xzoom -1.0
        ease 0.75 xzoom 1.0
        pause 0.5
        easein_bounce 2 yzoom 0.3 xzoom 1.7

transform rank_t_ending_anim:
    anchor (0.5,1.0)
    transform_anchor True
    subpixel True
    parallel:
        xzoom 1.0 yzoom 1.0
        ease 1 xzoom 1.5 yzoom 0.5
        ease 0.1 xzoom 0.5 yzoom 1.5
        easein 0.3 xzoom 1.0 yzoom 1.0
    parallel:
        pause 1
        ease 0.5 yoffset -100
        easein_bounce 1 yoffset 0
        pause 0.05
        block:
            block:
                ease 0.25 yoffset -25
                ease 0.25 yoffset 0
                repeat 2
            block:
                ease 0.25 yoffset -25
                ease 0.25 yoffset 0
                repeat 2
            repeat

    parallel:
        rotate 0
        pause 1.5 
        ease 0.175 rotate 5
        ease 0.175 rotate -5
        ease 0.2 rotate 0
        pause 0.5
        block:
            block:
                ease 0.25 rotate 4
                ease 0.25 rotate 0
                repeat 2
            block:
                ease 0.25 rotate -4
                ease 0.25 rotate 0
                repeat 2
            repeat


# transform rank_t_ending_anim:
#     anchor (0.5,1.0)
#     parallel:
#         ease 0.3 rotate 0
#         ease 0.3 rotate 10
#         ease 0.3 rotate 0
#         ease 0.3 rotate -10
#         repeat
#     parallel:
#         ease 0.3 yoffset -10
#         ease 0.3 yoffset 0
#         repeat
#     parallel:
#         ease 0.3 xzoom 0.8 yzoom 1.2
#         ease 0.3 xzoom 1.0 yzoom 1.0
#         repeat

transform ending_subtitle:
    anchor (0.5,1.0)
    parallel:
        alpha 0 xoffset -20
        pause 5
        easein_quad 1 alpha 1 xoffset 0





### ending-specific styles

style rank_c_ending:
    size 48
    color "ffffff"
    outlines [(absolute(15), "#000000", absolute(0), absolute(0)) ]


style rank_b_ending:
    size 48
    color "40AFDD"
    outlines [(absolute(15), "#3B2C96", absolute(0), absolute(0)) ]

style rank_a_ending:
    size 48
    color "E26A12"
    outlines [(absolute(15), "#B31C35", absolute(0), absolute(0)) ]

style rank_s_ending:
    size 48
    color "8F95EE"
    outlines [(absolute(15), "#514F4C", absolute(0), absolute(0)) ]

style rank_t_ending:
    size 48
    color "C43611"
    outlines [(absolute(15), "#EAD11E", absolute(0), absolute(0)) ]

#### FUNNYTEXT

image funnytxt_lovely:
    "gui/funnytext/lovely.png"
    linear 0.05 xoffset 0 yoffset 0 
    linear 0.05 xoffset 0 yoffset 2
    linear 0.05 xoffset 2 yoffset 2
    linear 0.05 xoffset 2 yoffset 0
    repeat


transform funnytxt_marvelous_anim:
    block:
        "gui/funnytext/marvelous/marvelous_0001.png"
        pause 0.1
        "gui/funnytext/marvelous/marvelous_0002.png"
        pause 0.05
        "gui/funnytext/marvelous/marvelous_0003.png"
        pause 0.05
        "gui/funnytext/marvelous/marvelous_0004.png"
        pause 0.05
        "gui/funnytext/marvelous/marvelous_0005.png"
        pause 0.05
        "gui/funnytext/marvelous/marvelous_0006.png"
        pause 0.05
        "gui/funnytext/marvelous/marvelous_0007.png"
        pause 0.05

image funnytxt_marvelous:
    transform_anchor True subpixel True anchor (0.5,0.5) zoom 0.6 offset (70,10)
    contains funnytxt_marvelous_anim

transform funnytxt_lemonsqueezy_anim: 
    block:
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0001.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0002.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0003.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0004.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0005.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0006.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0007.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0008.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0009.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0010.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0011.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0012.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0013.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0014.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0015.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0016.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0017.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0018.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0019.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0020.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0021.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0022.png"
        pause 0.05
        "gui/funnytext/lemonsqueezy/lemonsqueezy_0023.png"
        pause 0.05
        repeat
image funnytxt_lemonsqueezy:
    transform_anchor True anchor (0.5,0.5) pos (90,5) zoom 0.5
    contains funnytxt_lemonsqueezy_anim


image funnytxt_oeuferreacted:
    transform_anchor True
    anchor (0.5,0.5) xpos 85 ypos 0 zoom 0.6 
    "gui/funnytext/oeuf_erreacted.png"
    block:
        linear 0.05 xoffset 0 yoffset 0 
        linear 0.05 xoffset 0 yoffset 2
        linear 0.05 xoffset 2 yoffset 2
        linear 0.05 xoffset 2 yoffset 0
        repeat

image funnytxt_simonsays:
    anchor (0.5,0.5) pos (90,28) zoom 0.6
    "gui/funnytext/simonsays/simonsays_01.png"
    pause 0.3
    "gui/funnytext/simonsays/simonsays_02.png"
    pause 0.3
    "gui/funnytext/simonsays/simonsays_03.png"
    pause 0.3
    "gui/funnytext/simonsays/simonsays_04.png"
    pause 0.3

    repeat

transform funnytxt_banquet_anim: 
    block:
        "gui/funnytext/banquet/banquet_0001.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0002.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0003.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0004.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0005.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0006.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0007.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0008.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0009.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0010.png"
        pause 0.05
        "gui/funnytext/banquet/banquet_0011.png"
        pause 0.05
        repeat


image funnytxt_banquet:
    anchor (0.5,0.5) pos (130,30) zoom 0.8
    contains funnytxt_banquet_anim


image funnytxt_tvtime:
    anchor (0.5,0.5) pos (120,40) zoom 1.0
    parallel:
        "gui/funnytext/tvtime.png"
        pause 0.3
        "gui/funnytext/tvtime_02.png"
        pause 0.3
        repeat
    parallel:
        linear 0.05 xoffset 0 yoffset 0 
        linear 0.05 xoffset 0 yoffset 2
        linear 0.05 xoffset 2 yoffset 2
        linear 0.05 xoffset 2 yoffset 0
        repeat


#### TENNA CLOCK

define init_hour = 0
define init_minute = 0
define final_minute = 0
define final_hour = 0


screen clock(init_hour,init_minute,final_hour,final_minute):
    frame at clock_transform:
        background None
        add "clock_base"
        add "clock_minutehand" at transform:
            rotate init_minute transform_anchor True
            pause 2
            easein_elastic 1 rotate final_minute
        add "clock_hourhand" at transform:
            rotate init_hour transform_anchor True
            pause 3
            easein_elastic 1 rotate final_hour
        add "clock_center"


transform clock_transform:
    on show:
        zoom 0 anchor (0.5,0.5) pos (0.5,0.5) rotate 0
        easein_elastic 2 zoom 1.0 rotate 360
    on hide:
        parallel:
            zoom 1.0
            ease 0.2 zoom 1.1
            ease 0.5 zoom 0.0
        parallel:
            rotate 0
            ease 0.7 rotate 360


transform hour_animate:
    on show:
        rotate init_hour transform_anchor True
        easein_elastic 1 rotate final_hour

transform minute_animate:
    on show:
        rotate init_minute transform_anchor True
        easein_elastic 1 rotate final_minute

image clock_base:
    align (0.5,0.5)
    "gui/clock/clock_base.png"
    zoom 0.5

image clock_minutehand:
    pos (400,300)
    "gui/clock/minutehand.png"
    anchor (0.5,1.0)
    zoom 0.5

image clock_hourhand:
    xpos 400
    ypos 300
    anchor (0.5,1.0)
    "gui/clock/hourhand.png"
    zoom 0.5

image clock_center:
    align (0.5,0.5)
    yoffset -50
    "gui/clock/clockcenter.png"
    zoom 0.5

layeredimage mainmenu_bg:
    attribute main_gradient
    attribute main_tile_large
    attribute bg_black ypos -0.79
    attribute bg_black ypos 0.79
    attribute logo