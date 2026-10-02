################# GENERAL GAME SETUP

#### GLOBAL VARIABLES (FOR THIS GAME)
default maxnoses = 5 #maximum number of tenna noses that need to be arranged during a minigame scene
default noses = 3 # number of tenna noses that need to be arranged during a minigame scene
default placed_noses = 0 #keeps track of placed noses
default nosegame_round = 1 # keeps track of rounds of the nosegame
default totalplacednoses = 0 #keeps track of total placed noses across all rounds
default correctplace_noses = 0 #keeps track of correctly placed noses

# Draggable and Droppable Coordinate Handling
default initial_nose_coord_y = 170
default initial_nose_coord_x_spacing = 125
default initial_nose_coordinates = [((i + 1) * initial_nose_coord_x_spacing, initial_nose_coord_y) for i in range(maxnoses)] #will fill with initial locations of the noses
default nose_droppable_coord_y = 420
default nose_droppable_coord_x_spacing = 125
default noseplacement_coordinates = [((i + 1) * nose_droppable_coord_x_spacing, nose_droppable_coord_y) for i in range(maxnoses)] #for the nose placement spots. will shuffle depending on level

# Tracking for occupied droppables and last known good positions for draggables.
default occupied_spots = {} #Map to check if a nose placement spot is already occupied.
default last_valid_positions = {} #Tracks last valid position of each nose for snap-back

default timex = 60 # for the in-game timer
default time_up = False #Changes to True when timex hits 0 so the timer screen can run the close out animation before jumping.
default timeup_sound_played = False #Tracks if the clocktimeup sound has been played
default dragitem_dropped = False #checks if a dragged item is dropped
default stage_slide_state = "idle" #drives the per-round stage slide animation. "incoming" = slide in from the right, "outgoing" = slide out to the left

# Tutorial and pre-game countdown state.
default persistent.nose_tutorial_seen = False  # Tracking in persistent storage if the tutorial needs to be shown again.
default tutorial_step = 0      # Tutorial step tracking.
default countdown_value = 3    # Current countdown value.

# Precomputed next-round data, set by prep_next_stage() when advancing to the next stage.(Clicking on the clock.) The slide-in preview reads from
# these so the new stage's nose count and shuffled positions are already final by the time the preview enters the screen.
default next_noses = 3
default next_initial_coords = []
default next_droppable_coords = []

# Score Tracking
default nosegame_score = 0 #final score for the minigame
default nosegame_rank = "z"
###### variales that track the ranks you get throughout the minigames
default trank_tracker = 0
default srank_tracker = 0
default arank_tracker = 0
default brank_tracker = 0
default crank_tracker = 0

### variables that sub in for hardcoded letter ranks so they can be reused across the game project
default trank = "t"
default srank = "s"
default arank = "a"
default brank = "b"
default crank = "c"
default zrank = "z"

## custom anim warper

init python:
    def my_warper(t):
        return t**4.4

    TUTORIAL_STEPS = [
        {
            "text": "Drag Tenna's noses onto the matching outlines.",
            "text_pos": (610, 300),
            "text_size": 24,
            "text_width": 350,
            "arrow_pos": (470, 200),
            "arrow_size": (100, 60),
        },
        {
            "text": "When every nose is organized, click the clock to advance to the next round.",
            "text_pos": (400, 300),
            "text_size": 24,
            "text_width": 350,
            "arrow_pos": (580, 210),
            "arrow_size": (100, 60),
        },
        {
            "text": "Match as many noses as you can before the clock hits zero!",
            "text_pos": (400, 300),
            "text_size": 24,
            "text_width": 350,
            "arrow_pos": (1000, 1000),
            "arrow_size": (100, 60),
        },
    ]

####### FUNCTIONS

init python:

    def function_refresh():
        #for updating variables quickly
        renpy.restart_interaction()


    def nose_grabbed(dragged_nose):
        renpy.sound.play("audio/sfx/general/snd_wing.wav", channel="audio")

    def nose_dragged(dragged_nose, dropped_on):
        #Checks if a nose has snapped to a droppable spot
        global dragitem_dropped

        if not dropped_on:
            #Update last valid position for this nose
            last_valid_positions[dragged_nose[0].drag_name] = (dragged_nose[0].x, dragged_nose[0].y)

            #Clear this nose from occupied spots whenever it's dropped off a droppable
            nose_id = dragged_nose[0].drag_name
            for spot_idx, drag_obj in list(occupied_spots.items()):
                if drag_obj.drag_name == nose_id:
                    del occupied_spots[spot_idx]
                    dragitem_dropped = False
                    function_refresh()
                    break

    def shuffle_nose_drop_drag_coordinates():
        global initial_nose_coordinates, initial_nose_coord_x_spacing, initial_nose_coord_y
        global noseplacement_coordinates, nose_droppable_coord_x_spacing, nose_droppable_coord_y

        #Draggables
        #Recreate the array with array with the exact amount of noses to prevent trying to put 3 noses into 5 random spots.
        initial_nose_coordinates = [((i + 1) * initial_nose_coord_x_spacing, initial_nose_coord_y) for i in range(noses)]
        #Then we shuffle.
        random.shuffle(initial_nose_coordinates)

        #Droppables
        #Recreate the array with array with the exact amount of noses to prevent trying to put 3 noses into 5 random spots.
        noseplacement_coordinates = [((i + 1) * nose_droppable_coord_x_spacing, nose_droppable_coord_y) for i in range(noses)]
        #Then we shuffle.
        random.shuffle(noseplacement_coordinates)

    def prep_next_stage():
        # Computes the next round's nose count and shuffled coords into next_* without touching the current round globals.
        # This is called when advancing to the next stage.  These next_* coords are used to create the preview and then
        # populate the existing initial_nose_coordinates and noseplacement_coordinates in stage_increase.
        global next_noses, next_initial_coords, next_droppable_coords

        next_noses = noses + 1 if noses < maxnoses else noses

        next_initial_coords = [((i + 1) * initial_nose_coord_x_spacing, initial_nose_coord_y) for i in range(next_noses)]
        random.shuffle(next_initial_coords)

        next_droppable_coords = [((i + 1) * nose_droppable_coord_x_spacing, nose_droppable_coord_y) for i in range(next_noses)]
        random.shuffle(next_droppable_coords)

    def get_debug_text():
        #Formats debug info for display
        occupied_text = "occupied_spots:\n"
        for spot_idx, drag_obj in occupied_spots.items():
            occupied_text += "  spot %s: nose %s\n" % (spot_idx, drag_obj.drag_name if hasattr(drag_obj, 'drag_name') else 'unknown')

        valid_pos_text = "\nlast_valid_positions:\n"
        for nose_id, pos in last_valid_positions.items():
            valid_pos_text += "  nose %s: (%d, %d)\n" % (nose_id, pos[0], pos[1])

        return occupied_text + valid_pos_text

    def nose_place(dropped_on, dragged_nose):
        #runs when a nose has been dropped.
        # below, program checks if the dragged piece is on a droppable spot.
        global noses
        global dragitem_dropped
        global last_valid_positions

        #snaps piece to dropped location
        if dropped_on != None:
            spot_index = dropped_on.drag_name

            #Check if spot is already occupied by a different nose
            if spot_index in occupied_spots and occupied_spots[spot_index] != dragged_nose[0]:
                #Spot is occupied - don't allow placement, don't update anything
                #The nose will stay where it was (not snapped to the occupied spot)
                nose_id = dragged_nose[0].drag_name
                if nose_id in last_valid_positions:
                    dragged_nose[0].snap(last_valid_positions[nose_id][0], last_valid_positions[nose_id][1], delay=0.2, warper=my_warper)
                return

            #Clear this nose from any previous spot it was occupying
            nose_id = dragged_nose[0].drag_name
            for old_spot_idx, drag_obj in list(occupied_spots.items()):
                if drag_obj.drag_name == nose_id and old_spot_idx != spot_index:
                    del occupied_spots[old_spot_idx]
                    break

            #Track this spot as occupied by this nose
            occupied_spots[spot_index] = dragged_nose[0]

            dragged_nose[0].snap(dropped_on.x, dropped_on.y, delay = 0.1, warper= my_warper)

            renpy.sound.play("audio/sfx/general/snd_noise.wav", channel="audio")

            #Update last valid position for this nose
            last_valid_positions[dragged_nose[0].drag_name] = (dropped_on.x, dropped_on.y)

            ##mark that a drop happened
            dragitem_dropped = True
            function_refresh()

############ MINIGAME SCREENS

## debug overlay screen
screen noses_debug_overlay:
    $ debug_info = get_debug_text()

    frame:
        align (0.0, 0.0)
        padding (10, 10)
        background "#000000cc"

        text "DEBUG INFO\n[debug_info]" size 14 color "#00ff00"

# Stage screen - Background and draggables/droppables.
# Used inside noses_minigame and wrapped in the slide transform so the whole playfield can slide as one unit.
screen noses_stage:
    add "nosegame_bg"
    use noses_placescreen
    #use noses_debug_overlay

# Magic trick area.  Just make a face preview that gracefully snaps out of existence.
# Non-interactive preview of the next stage.  Rendered as the slide-in copy during the outgoing transition so that the new nose count and shuffled positions
# are visible from the moment the new stage enters.  This avoids the positions visibly jumping around after the stage finishes coming in.
# Reads from next_* globals populated by prep_next_stage().


screen noses_stage_preview(nosesc, drag_coords, drop_coords):

    add "nosegame_bg"

    # Static droppable bases at the next stage's shuffled drop positions.
    for i in range(nosesc):
        fixed:
            xpos drop_coords[i][0]
            ypos drop_coords[i][1]
            anchor (0.5, 0.5)
            xsize 160
            ysize 280
            add At("gui/minigames/nosegame/nose_base_%s.png" % (i+1), nose_base_align)

    # Static draggable noses at the next stage's shuffled initial positions.
    for i in range(nosesc):
        fixed:
            xpos drag_coords[i][0]
            ypos drag_coords[i][1]
            anchor (0.5, 0.5)
            xsize 160
            ysize 280
            add At("nose_%s" % (i+1), nose_align)

# Full minigame screen
screen noses_minigame:
    # "outgoing": Primary stage slides off left while an extra copy slides in from
    #             the right at the same time, so the two are visually attached.
    # "incoming": Primary stage slides in from the right (used for the first round).
    # "idle":     Primary stage sits centered (used between rounds after the slide).
    #
    # The slide-in "next stage preview" is rendered first (as an extra) only during
    # outgoing.  The primary stage is rendered at one stable statement position with
    # its transform swapped via primary_transform.  This keeps the Drag objects
    # persistent across in-round state changes so placed noses don't reset to spawn.
    if stage_slide_state == "outgoing":
        # Slide-in shows the *next* round's preview (new nose count, freshly shuffled
        # positions), not a duplicate of the current round — so the reshuffle and any
        # nose-count bump are visible only on the incoming side and not on the
        # primary copy that's sliding off with the player's just-placed configuration.
        fixed at noses_stage_slide_in:
            use noses_stage_preview(next_noses, next_initial_coords, next_droppable_coords)
        # Wait for the slide to finish, then advance to the next round.
        timer 0.5 action Jump("stage_increase")

    $ primary_transform = (noses_stage_slide_out if stage_slide_state == "outgoing"
                            else noses_stage_slide_in if stage_slide_state == "incoming"
                            else noses_stage_idle)
    fixed at primary_transform:
        use noses_stage

    use noses_timer

## minigame timer
screen noses_timer:
    #Play the background ticking sound if not already playing.
    on "show" action If(renpy.music.get_playing(channel="music") != "audio/music/physical_challenge.ogg", Play("music", "audio/music/physical_challenge.ogg", loop=True))
    if time_up:
        # Drop the black "curtain" on top of the still-displayed minigame and then jump once it settles.
        # Add the clock after the curtain to make sure that it renders on top.
        add "black" at black_drop_in 
        add "noseclock" align (0.98, 0.0) at noseclock_hide
        text "{color=1B377F}0" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at noseclock_hide
        timer 2.5 action Jump("nosegame_done")
    else:
        on "show"
        #This code decreases variable time by 0.1 until time hits 0, at which point, time_up is set to true and the time_up branch above is hit.
        timer 0.1 repeat True action If(timex > 0, true=SetVariable('timex', timex - 0.1), false=[Stop("music"), SetVariable('time_up', True)])
        $ timed_display = int(timex)

        #Play the annoying alarm clock sound when there are 3 seconds left.
        if timex <= 4 and timex > 3.9 and not timeup_sound_played:
            timer 0.01 action [SetVariable('timeup_sound_played', True), Play("sound", "audio/sfx/general/countdown.ogg")]

        #Make clock clickable when ready.
        if (noses == len(occupied_spots)):
            if timex <= 3:
                imagebutton:
                    idle At("noseclock", noseclock_wiggle_violently)
                    hover At("noseclock", noseclock_wiggle_violently)
                    action [Play("audio", "audio/sfx/general/snd_bell.wav"), Function(prep_next_stage), SetVariable("stage_slide_state", "outgoing")]
                    align (0.98, 0.0)
                text "{color=1B377F}[timed_display]" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at noseclock_wiggle_violently
            else:
                imagebutton:
                    idle At("noseclock", noseclock_wiggle_next_round)
                    hover At("noseclock", noseclock_wiggle_next_round)
                    action [Play("audio", "audio/sfx/general/snd_bell.wav"), Function(prep_next_stage), SetVariable("stage_slide_state", "outgoing")]
                    align (0.98, 0.0)
                text "{color=1B377F}[timed_display]" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at noseclock_wiggle_next_round
        else:
            if timex <= 4:
                add "noseclock" align (0.98, 0.0) at noseclock_wiggle_violently
                text "{color=1B377F}[timed_display]" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at noseclock_wiggle_violently
            else:
                add "noseclock" align (0.98, 0.0) at noseclock_transforms
                text "{color=1B377F}[timed_display]" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at noseclock_transforms

## screen for draggables
screen noses_placescreen:
    ## DRAG GROUP
    #The noses and the spots they can be dragged to.
    draggroup:
        # draggable pieces and the spots they can be dragged to
        ## noses
                
        # Droppables - snappable spots to drag noses to
        for i in range(noses):
            drag:
                drag_name i
                draggable False
                droppable True
                dropped nose_place
                xpos noseplacement_coordinates[i][0]
                ypos noseplacement_coordinates[i][1]
                anchor (0.5, 0.5)
                focus_mask True
                # Wrap in matching 160x280 Fixed so this droppable's render box matches the draggable's.
                # This is best because the nose_place will snap upper-left to upper-left, so unequal sizes would leave centers misaligned.
                child Fixed(At("gui/minigames/nosegame/nose_base_%s.png" % (i+1), nose_base_align), xsize=160, ysize=280)

        # Draggables
        for i in range(noses):
            drag:
                draggable True
                droppable False
                drag_name i
                xpos initial_nose_coordinates[i][0]
                ypos initial_nose_coordinates[i][1]
                anchor (0.5, 0.5)
                drag_raise True
                focus_mask True
                dropped nose_place
                dragged nose_dragged
                activated nose_grabbed

                # Fixed-size wrappers keep the Drag's render box identical across states.  Otherwise the rotation in nose_selhover_transform
                # expands the bounding box and the sprite jumps when grabbed since this messes with the calculations.
                # 160x280 covers the worst-case rotated bounding box (~157x278).
                child Fixed(At("nose_%s" % (i+1), nose_align), xsize=160, ysize=280)
                hover_child Fixed(At("nose_%s" % (i+1), nose_hover_transform), xsize=160, ysize=280)
                selected_hover_child Fixed(At("nose_%s" % (i+1), nose_selhover_transform), xsize=160, ysize=280)

screen _noses_tutorial_bubble(data):
    frame:
        at countdown_anim
        xpos data["text_pos"][0]
        ypos data["text_pos"][1]
        anchor (0.5, 0.5)
        xsize data["text_width"]
        background Frame('gui/mainmenu_frame.png', gui.confirm_frame_borders, tile=gui.frame_tile)
        padding (0, 0)

        text data["text"]:
            size data["text_size"]
            color "#FFFFFF"
            outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B3780", absolute(0), absolute(0)) ]
            text_align 0.5
            xalign 0.5

# Tutorial overlay.
screen noses_tutorial:
    modal True
    use noses_stage_preview(noses, initial_nose_coordinates, noseplacement_coordinates)

    # Static decorative clock.
    $ tutorial_timer_display = int(timex)
    add "noseclock" align (0.98, 0.0) at noseclock_transforms
    text "{color=1B377F}[tutorial_timer_display]" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at noseclock_transforms

    $ tutorial_data = TUTORIAL_STEPS[tutorial_step]

    # Also brute force the animation display here.
    if tutorial_step == 0:
        use _noses_tutorial_bubble(tutorial_data)
    elif tutorial_step == 1:
        use _noses_tutorial_bubble(tutorial_data)
    elif tutorial_step == 2:
        use _noses_tutorial_bubble(tutorial_data)

    # Pink placeholder for the arrows.
    if tutorial_step == 0:
        add "tutorial_arrow" at arrow_anim:
            xpos tutorial_data["arrow_pos"][0]
            ypos tutorial_data["arrow_pos"][1]
            anchor (0.5, 0.5)
    elif tutorial_step == 1:
        add "tutorial_arrow" at arrow_anim_2:
            xpos tutorial_data["arrow_pos"][0]
            ypos tutorial_data["arrow_pos"][1]
            rotate 135
            anchor (0.5, 0.5)

    textbutton (_("Next") if tutorial_step < 2 else _("Start!")) style "quick_button":
        align (0.92, 0.92)
        action If(tutorial_step < 2, true=SetVariable("tutorial_step", tutorial_step + 1), false=Return())

transform countdown_anim:
    zoom 0.0
    easein_elastic 1 zoom 1.0

# Game start countdown.
screen noses_countdown:
    modal True
    use noses_stage_preview(noses, initial_nose_coordinates, noseplacement_coordinates)

    # Static decorative clock.
    $ tutorial_timer_display = int(timex)
    add "noseclock" align (0.98, 0.0) at noseclock_transforms
    text "{color=1B377F}[tutorial_timer_display]" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at noseclock_transforms

    # The countdown animation won't refire so just brute force it.
    if countdown_value == 3:
        text "3" size 200 color "#FFFFFF" outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#1B3780", absolute(0), absolute(0)) ] align (0.5, 0.5) at countdown_anim
    elif countdown_value == 2:
        text "2" size 200 color "#FFFFFF" outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#1B3780", absolute(0), absolute(0)) ] align (0.5, 0.5) at countdown_anim
    elif countdown_value == 1:
        text "1" size 200 color "#FFFFFF" outlines [(absolute(15), "#000000", absolute(0), absolute(15)),(absolute(15), "#1B3780", absolute(0), absolute(0)) ] align (0.5, 0.5) at countdown_anim
    timer 1.0 repeat True action If(countdown_value > 1, true=SetVariable("countdown_value", countdown_value - 1), false=Return())

# Fake stage layout to show under the door slam.
screen fake_noses_board:
    use noses_stage_preview(noses, initial_nose_coordinates, noseplacement_coordinates)

    $ tutorial_timer_display = int(timex)
    add "noseclock" align (0.98, 0.0) at noseclock_transforms
    text "{color=1B377F}[tutorial_timer_display]" size 48 xpos 0.85 ypos 0.12 xanchor 0.5 at noseclock_transforms

##############
# TRANSFORMS #
##############
transform noseclock_transforms:
    subpixel True
    linear 1 rotate 2
    linear 1 rotate 0
    linear 1 rotate -2
    linear 1 rotate 0
    repeat

#When the round is ready to be finished.
transform noseclock_wiggle_next_round:
    subpixel True
    block:
        parallel:
            linear 0.5 rotate 20
            linear 0.5 rotate -20
            repeat
        parallel:
            ease_quad 0.5 matrixcolor TintMatrix("#F5EB6B")
            ease_quad 0.5 matrixcolor TintMatrix("#ffffff")
            repeat

transform noseclock_hide:
    subpixel True
    parallel:
        block:
            linear 0.1 rotate 20
            linear 0.1 rotate -20
            repeat
    parallel:
        block:
            ease_quad 0.1 yzoom 0.90 xzoom 1.1
            ease_quad 0.1 yzoom 1.0 xzoom 1.0
            repeat
    parallel:
        block:
            ease_quad 0.2 matrixcolor TintMatrix("#E26A12")
            ease_quad 0.2 matrixcolor TintMatrix("#ffffff")
            repeat
    parallel:
        pause 2.0
        easeout 0.5 xoffset 400

#When the time is almost up.
transform noseclock_wiggle_violently:
    subpixel True
    block:
        parallel:
            linear 0.1 rotate 20
            linear 0.1 rotate -20
            repeat
        parallel:
            ease_quad 0.1 yzoom 0.90 xzoom 1.1
            ease_quad 0.1 yzoom 1.0 xzoom 1.0
            repeat
        parallel:
            ease_quad 0.2 matrixcolor TintMatrix("#E26A12")
            ease_quad 0.2 matrixcolor TintMatrix("#ffffff")
            repeat

#Throbbing/pulsing animation for hover.
transform nose_hover:
    subpixel True
    anchor (0.5, 0.5)
    easein 0.3 zoom 1.1
    easeout 0.6 zoom 1.0
    repeat

#Wiggle/wobble animation for dragging.
# transform nose_dragging:
#     subpixel True
#     parallel:
#         linear 1 rotate 4
#         linear 1 rotate -4
#         repeat
#     parallel:
#         easein 1 zoom 1.05
#         easeout 1 zoom 1.0
#         repeat

# Slide the entire stage off the screen to the left when a round finishes.
transform noses_stage_slide_out:
    xoffset 0
    easein_quint 0.5 xoffset -800

# Slide the new stage in from the right at the start of the next round.
transform noses_stage_slide_in:
    xoffset 800
    easein_quint 0.5 xoffset 0

# Identity transform, used as the "idle" position so the primary stage's at clause can swap between transforms without changing the displayable's statement position.
transform noses_stage_idle:
    xoffset 0


######### GAME STARTS HERE

label nose_organization:
    $ renpy.stop_skipping()

    camera sprite:
        perspective True
        xpos 0 ypos 0 zpos 0
    camera bg:
        perspective True
        xpos 0 ypos 0 zpos 0
    camera pattern:
        perspective True
        xpos 0 ypos 0 zpos 0

    # timer gets set up here and the loop is infinite until it runs out

    # First-round setup. Subsequent rounds get their coords from next_* populated by prep_next_stage and apply them in
    # stage_increase so that the new stage's shuffled positions don't jump around suddenly after coming in.
    $ shuffle_nose_drop_drag_coordinates()
    $ last_valid_positions = {i: initial_nose_coordinates[i] for i in range(noses)}

    # SLAM THOSE DOORS!~
    scene black
    show screen fake_noses_board # Show the fake game board.
    play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
    with doorslam_nose

    # Tutorial on first encounter only, then a 3-second countdown before the live timer starts.
    if not persistent.nose_tutorial_seen:
        $ tutorial_step = 0
        call screen noses_tutorial
        $ persistent.nose_tutorial_seen = True

    play sound "audio/sfx/general/snd_bell.wav"
    queue sound ["<silence 0.5>","audio/sfx/general/snd_bell.wav","<silence 0.5>", "audio/sfx/general/snd_bell.wav" ]
    $ countdown_value = 3
    call screen noses_countdown

    while timex > 0:
        call screen noses_minigame

        label stage_increase:
            $ timeup_sound_played = False  #Reset for next round
            $ stage_slide_state = "idle"  #Slide-in already happened during the outgoing transition
            $ nosegame_round += 1

            #Count correctly placed noses in this stage
            $ correctplace_noses += sum(1 for spot_idx, drag_obj in occupied_spots.items() if drag_obj.drag_name == spot_idx)

            $ totalplacednoses += len(occupied_spots)

            #Apply the next-round data computed by prep_next_stage at clock-click.
            #The preview that just finished sliding in showed exactly this state,
            #so applying it here is what makes the swap to the live (interactive)
            #stage seamless.
            $ noses = next_noses
            $ initial_nose_coordinates = list(next_initial_coords)
            $ noseplacement_coordinates = list(next_droppable_coords)
            $ occupied_spots = {}
            $ last_valid_positions = {i: initial_nose_coordinates[i] for i in range(noses)}


    label nosegame_done:
        $ time_up = False
        # Put up a stationary black layer since the original animated black layer will disappear.
        show black onlayer pattern

        ##### called when timer is up.
        hide screen noses_timer
        hide screen fake_noses_board

        pause 2
        play music "audio/music/board_clear.ogg" 
        $ renpy.music.queue("<silence 1>", clear_queue=False)
        show star_tile onlayer pattern with dissolve
        show screen happy_meter("left", animate=True) onlayer pattern

        # Count correct noses in the final incomplete stage
        $ correctplace_noses += sum(1 for spot_idx, drag_obj in occupied_spots.items() if drag_obj.drag_name == spot_idx)

        $ totalplacednoses += len(occupied_spots)
        $ occupied_spots = {}  #Clear occupied spots just in case the user hits the back button.

        # "your number of correct noses: [correctplace_noses] / [totalplacednoses]"

        # "your score is..."

        ### good round threshold is round 12

        if totalplacednoses > 0:
            $ nosegame_score += (correctplace_noses/totalplacednoses)*(100*nosegame_round)
        else:
            $ nosegame_score = 0


        # "[int(nosegame_score)]!"

        ##### calculates the rank for the minigame

        if nosegame_score >= 1200:
            $ nosegame_rank = trank
            $ trank_tracker += 1
        elif nosegame_score >= 1000:
            $ nosegame_rank = srank
            $ srank_tracker += 1
        elif nosegame_score >= 700:
            $ nosegame_rank = arank
            $ arank_tracker += 1
        elif nosegame_score >= 400:
            $ nosegame_rank = brank
            $ brank_tracker += 1
        elif nosegame_score >= 155:
            $ nosegame_rank = crank
            $ crank_tracker += 1
        elif nosegame_score < 155:
            $ nosegame_rank = zrank
        else:
            "you shouldn't get this rank"


        #"obtained [nosegame_rank] rank!"
        play audio ["audio/sfx/general/snd_noise.wav","<silence 0.3>", "audio/sfx/general/snd_noise.wav","audio/sfx/general/snd_noise.wav","<silence 0.8>", "audio/sfx/general/snd_noise.wav",]
        show screen results("nose_org") onlayer bg

        pause 2
        play audio ["<silence 0.5>","audio/sfx/general/snd_bell.wav"]

        show screen result1("nose_org") onlayer bg

        pause 1
        play audio ["<silence 0.5>","audio/sfx/general/snd_bell.wav"]

        show screen result2('nose_org') onlayer bg

        pause 1
        play audio "audio/sfx/general/snd_drumroll.wav"
        pause 2

        if nosegame_rank == zrank:
            stop music
            play audio "audio/sfx/general/snd_glassbreak.wav"
        elif nosegame_rank == trank:
            play audio "audio/sfx/general/snd_won.wav"
        elif nosegame_rank == crank:
            play audio "audio/sfx/general/snd_splat.wav"
        else:
            play audio "audio/sfx/general/snd_cymbal.wav"
        show screen minigame_rank(nosegame_rank) onlayer bg

        pause

    ##### this is when the ranking would be called but idgaf about that right now.

            ####### score thresholds - nose minigame

            ## t rank - (all noses placed correctly/total noses placed) * (100 * the highest round people can get in 60 seconds)
            ############# (47/47) * (100 * 10)
            ## s rank - (~90% noses placed correctly/total noses placed) * (100 * the highest round people can get in 60 seconds)
            ############# (42/47) * (100 * 10)
            ## a rank - (~75% noses placed correctly/total noses placed) * (100 * second-third highest round people can get in 60 seconds)
            ############# (35/47) * (100 * 8)
            ## b rank - (~60% noses placed correctly/total noses placed) * (100 * third highest round people can get in 60 seconds)
            ############# (28/47) * (100 * 6)
            ## c rank - (~50% noses placed correctly/total noses placed) * (100 * lower rounds of nose minigame or something)
            ############# (24/47) * (100 * 5)
            ## z rank - (<50% noses placed correctly/total noses placed) * (100 * not beyond round 3)
            ############# (24/47) * (100 * 5)

        jump postnose_sequence