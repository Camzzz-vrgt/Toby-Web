######## FUNCTIONS

default current_button_pattern = [] ### array for current button pattern 
default button_1_lit = False ###bool that checks if button 1 is lit.
default button_2_lit = False ###bool that checks if button 2 is lit.
default button_3_lit = False ###bool that checks if button 3 is lit.
default button_4_lit = False ###bool that checks if button 4 is lit.
default buttons = ("1","2","3","4") ###tuple with list of buttons. for button pattern.
default game_round = 1 #### tracks the game's rounds.
default round_text_display = 1 # Round number the round_text screen shows.
default current_button_index = 0 ### tracks where in the pattern the button light up is.
default input_ready = False ###bool that checks if the user is ready to input their pattern.
default correct_picks = 0 ###checks for # of correct picks in the pattern
default user_picks = 0 ###checks for # of user button presses in the pattern
default selected_button_index = 0 ###current index of pattern the user is on
default sus_meter = 0 ### meter to track suspicion points
default game_max_round = 8 ### value that tracks max rounds in game
default pattern = []
default simonsays_score = 0 #final score for the minigame
default simonsays_rank = "" # rank for simonsays game

# Live game weatherduo feedback(post-tutorial).  Set briefly by check_user_input, the screen swaps the weatherduo body to the matching correct/fail image until a screen-side timer clears the flag.
default simon_feedback_correct = 0  # 0 = none, 1-4 = Which weatherduo_correct_N to display.
default simon_feedback_wrong = 0    # 0 = none, 1-4 = Which weatherduo_fail_N to display.
# True for a few frames right after each correct input.
default simon_feedback_gap = False

# True while the "Repeat after me!" cue plays at the start of a round.
default simon_round_alert = False
# True for the brief beat after a round is cleared, holding on the dance-success image before the "Repeat after me!" cue pops.
default simon_round_pending = False
# True for the brief "Your Turn!" cue that pops once the pattern finishes showing and then allows player input.
default simon_your_turn_alert = False
# Which "take" the player is on.  Reset to 1 when a round is cleared.
default simon_round_take = 1

# Handler to kick the black curtain and end the game.
default simon_game_over = False

# Tutorial state machine.
# "intro" plays the Tenna alert ("Repeat after me!") animation.
# "demo" lights each star in SIMON_TUTORIAL_ORDER with its trumpet so the player can memorize the sequence before being asked to repeat it.
# "interactive" walks the player through clicking each star in order.
# "rehearsal" pops "Rehearsal Over!" and waits for a player click before returning out of the tutorial.
default persistent.simon_tutorial_seen = False
default simon_tutorial_phase = "intro"      # "intro" | "demo" | "interactive" | "rehearsal"
default simon_tutorial_step_index = 0       # index into SIMON_TUTORIAL_ORDER
default simon_tutorial_demo_substate = "lit"  # "lit" = button currently shown in hover state, "gap" = brief off period between buttons.
default simon_tutorial_wrong = 0            # 0 = no error, 1-4 = which weatherduo_fail_N to display.
default simon_tutorial_correct = 0          # 0 = nothing, 1-4 = which weatherduo_correct_N to display briefly after a correct click.
default simon_tutorial_gap = False
default simon_tutorial_handoff_active = False  # True for the brief "Your Turn!" when transitioning to the interactive phase.
default simon_tutorial_rehearsal_dismissed = False  # Click flag: False = "Rehearsal Over!" popped + waiting, True = shrinking, will Return out of the tutorial.

init python:
    import math

    # Sequence the player must click in: red, green, yellow, blue.
    SIMON_TUTORIAL_ORDER = [1, 2, 3, 4]

    def simon_enter_demo():
        # Called when the intro alert completes.
        global simon_tutorial_phase, simon_tutorial_step_index, simon_tutorial_demo_substate
        simon_tutorial_phase = "demo"
        simon_tutorial_step_index = 0
        simon_tutorial_demo_substate = "lit"
        renpy.sound.play("audio/sfx/minigames/simonsays/snd_musicbox_" + str(SIMON_TUTORIAL_ORDER[0]) + ".ogg")
        renpy.restart_interaction()

    def simon_demo_advance():
        # Drives the demo cycle: "lit" -> "gap" -> next "lit".
        global simon_tutorial_phase, simon_tutorial_step_index, simon_tutorial_demo_substate
        if simon_tutorial_demo_substate == "lit":
            simon_tutorial_demo_substate = "gap"
        else:
            if simon_tutorial_step_index < len(SIMON_TUTORIAL_ORDER) - 1:
                simon_tutorial_step_index += 1
                simon_tutorial_demo_substate = "lit"
                renpy.sound.play("audio/sfx/minigames/simonsays/snd_musicbox_" + str(SIMON_TUTORIAL_ORDER[simon_tutorial_step_index]) + ".ogg")
            else:
                # Demo finished, switch to interactive.
                global simon_tutorial_handoff_active
                simon_tutorial_step_index = 0
                simon_tutorial_demo_substate = "lit"
                simon_tutorial_phase = "interactive"
                simon_tutorial_handoff_active = True
        renpy.restart_interaction()


transform susmeter_norm:
    anchor (0.5,0.5)

transform susmeter_trigger:
    anchor (0.5,0.5)
    zoom 0.0
    easein_elastic 1 zoom 1.0


# Alert overlay transforms that are used by the tutorial introduction.
transform tennaalert_anim:
    zoom 0.0
    easein 0.2 zoom 0.6
    pause 2.0
    easeout 0.5 zoom 0.0

transform yourturn_anim:
    zoom 0.0
    easein 0.2 zoom 0.6
    pause 2.0
    easeout 0.2 zoom 0.0

# Pop up text for Your Turn and Take Two/Three.
style simon_cue_text:
    xalign 0.5
    yalign 0.5
    size 80
    color "#FFFFFF"
    outlines [(absolute(10), "#000000", absolute(0), absolute(10)), (absolute(10), "#1B3780", absolute(0), absolute(0))]

transform tennaalert_pop:
    zoom 0.0
    easein 0.2 zoom 0.6

transform tennaalert_shrink:
    zoom 0.6
    easeout 0.5 zoom 0.0

transform dim_fadeout:
    alpha 1.0
    pause 0.3
    linear 1.5 alpha 0.0

transform dim_fadein:
    alpha 0.0
    pause 0.3
    linear 1.5 alpha 1.0

transform dim_fadein_fast:
    alpha 0.0
    pause 0.3
    linear 0.5 alpha 1.0

screen susmeter():
    zorder 98
    add "gui/minigames/dancegame/susmeter_back.png" align(0.9,0.05) zoom 0.5 
    if sus_meter >=1:
        add "gui/minigames/dancegame/susmeter_x1_on.png" align(0.73,0.11) zoom 0.5 at susmeter_trigger
    else:
        add "gui/minigames/dancegame/susmeter_x1_off.png" align(0.73,0.11) zoom 0.5 at susmeter_norm
    if sus_meter >=2:
        add "gui/minigames/dancegame/susmeter_x2_on.png" align(0.805,0.11) zoom 0.5 at susmeter_trigger
    else:
        add "gui/minigames/dancegame/susmeter_x2_off.png" align(0.805,0.11) zoom 0.5 at susmeter_norm
    if sus_meter >=3:
        add "gui/minigames/dancegame/susmeter_x3_on.png" align(0.895,0.11) zoom 0.5 at susmeter_trigger
    else:
        add "gui/minigames/dancegame/susmeter_x3_off.png" align(0.895,0.11) zoom 0.5 at susmeter_norm

init python:

    #### for difficulty (will excise later and change this to time-dependent.)
    def create_button_pattern():
        global pattern
        pattern = []
        num_flashes = game_round
    
        for i in range(num_flashes):
        # Randomly select a button (button 1, 2, 3, or 4)
            button = renpy.random.randint(0, 3)
            pattern.append(button)
    
        return pattern

    def light_buttons():
        global input_ready
        global correct_picks
        global current_button_index
        global button_1_lit
        global button_2_lit
        global button_3_lit
        global button_4_lit
        global simon_your_turn_alert

        # If there's still more in the pattern to show
        if current_button_index < len(current_button_pattern):
            button_lit = buttons[current_button_pattern[current_button_index]]

            # Light up the corresponding button
            button_1_lit = (button_lit == "1")
            button_2_lit = (button_lit == "2")
            button_3_lit = (button_lit == "3")
            button_4_lit = (button_lit == "4")

            # Play the per-button trumpet so the player hears the tone for the memorization phase.
            renpy.sound.play("audio/sfx/minigames/simonsays/snd_musicbox_" + button_lit + ".ogg")

            # Once the button has been lit, move to the next one
            current_button_index += 1
            renpy.restart_interaction()  # Restart the interaction to show the next button light up

        else:
            # If we've gone through the entire pattern, allow the user to input their choices.
            input_ready = True
            # Pop the "Your Turn!" cue now that the pattern is shown and input is open.
            simon_your_turn_alert = True
            renpy.restart_interaction()  # Allow player input


    # How long to show the normal pose when there are successive same inputs.
    SIMON_FEEDBACK_GAP = 0.08

    # Playback pacing.  Rounds 1 and 2 play at the relaxed base speed; past round 2 the
    # pattern speeds up by 0.1s per round and clamps at a fast-but-readable floor,
    # mimicking how a real Simon Says game ramps up the tempo.
    SIMON_BASE_INTERVAL = 1.0   # Seconds between each button lighting up at base speed.
    SIMON_MIN_INTERVAL = 0.4    # Fastest the pattern is ever allowed to play.
    SIMON_RAMP_PER_ROUND = 0.1  # Seconds shaved off the interval for each round past 2.
    SIMON_RAMP_START_ROUND = 2  # Pattern stays at base speed up to and including this round.

    def simon_pattern_interval():
        # Time between successive button lights while the pattern plays back.
        interval = SIMON_BASE_INTERVAL
        if game_round > SIMON_RAMP_START_ROUND:
            interval -= (game_round - SIMON_RAMP_START_ROUND) * SIMON_RAMP_PER_ROUND
        return max(SIMON_MIN_INTERVAL, interval)

    def simon_pattern_lit_duration():
        # How long each button stays lit.  Half the interval keeps the lit/gap
        # rhythm steady as the overall tempo speeds up.
        return simon_pattern_interval() / 2.0

    def off_buttons():
            #### turns the buttons off
        global button_1_lit
        global button_2_lit
        global button_3_lit
        global button_4_lit

        button_1_lit = False
        button_2_lit = False
        button_3_lit = False
        button_4_lit = False

    def check_user_input(button):
        global current_button_index
        global input_ready
        global correct_picks
        global user_picks
        global selected_button_index
        global sus_meter
        global game_round
        global current_button_pattern
        global simon_feedback_correct, simon_feedback_wrong, simon_feedback_gap
        global simon_round_alert
        global simon_round_pending
        global simon_your_turn_alert
        global simon_round_take
        global simon_game_over

        # Activate the feedback gap.
        simon_feedback_gap = True

        # If the button pressed matches the current pattern
        if buttons.index(button) == current_button_pattern[selected_button_index]:
            renpy.sound.play("audio/sfx/minigames/simonsays/snd_musicbox_" + button + ".ogg")
            simon_feedback_wrong = 0
            simon_feedback_correct = int(button)

            correct_picks += 1
            user_picks += 1

            if user_picks == len(current_button_pattern):
                # User has successfully completed the round, move to next round
                game_round += 1
                selected_button_index = 0
                current_button_index = 0
                user_picks = 0
                correct_picks = 0
                input_ready = False

                # Clear the "Your Turn!" cue and pop the "Repeat after me!" cue before the next round's pattern plays.
                simon_your_turn_alert = False
                simon_round_pending = True

                # Reset round take.
                simon_round_take = 1

                # Increase the pattern length for the next round
                current_button_pattern = create_button_pattern()

            else:
                # Continue checking the next button in the pattern
                selected_button_index += 1

            renpy.restart_interaction()  # Restart interaction to check for the next input

        else:
            renpy.sound.play("audio/sfx/minigames/simonsays/snd_hurt_" + button + ".ogg")
            simon_feedback_correct = 0
            simon_feedback_wrong = int(button)

            # Mistake was made, increase sus_meter
            sus_meter += 1

            if sus_meter >= 3:
                simon_game_over = True
                renpy.restart_interaction()
            else:
                # Mistake was made, repeat the pattern with the same length
                selected_button_index = 0
                current_button_index = 0
                user_picks = 0
                correct_picks = 0
                input_ready = False

                # Clear the "Your Turn!" cue.  It re-pops as "Take Two!"/"Take Three!" once the replayed pattern finishes showing.
                simon_your_turn_alert = False
                simon_round_take = sus_meter + 1

                renpy.restart_interaction()  # Restart the interaction to show the pattern again

            
        if game_round > game_max_round:
            ### if all button inputs correctly repeat the pattern, then the minigame ends
            simon_game_over = True
            renpy.restart_interaction()


    def reset_simon_says():
        global current_button_index
        global selected_button_index
        global input_ready
        global correct_picks
        global user_picks
        global current_button_pattern
        global button_1_lit
        global button_2_lit
        global button_3_lit
        global button_4_lit
        global sus_meter
        global game_round
        global round_text_display

        # Reseed from the system clock so the pattern can't be save-scummed or memorized across reloads.
        # This is okay since renpy.random is normally rollback-deterministic by default, but rollback is disabled in mini games.
        renpy.random.seed()

        # Reset all relevant game variables
        current_button_index = 0
        selected_button_index = 0
        correct_picks = 0
        user_picks = 0
        input_ready = False
        sus_meter = 0
        game_round = 1  # Start from the first round
        round_text_display = 1

        button_1_lit = False
        button_2_lit = False
        button_3_lit = False
        button_4_lit = False

        # Clear any leftover feedback so the round starts with weatherduo_norm.
        global simon_feedback_correct, simon_feedback_wrong, simon_feedback_gap
        simon_feedback_correct = 0
        simon_feedback_wrong = 0
        simon_feedback_gap = False

        global simon_game_over
        simon_game_over = False

        # Pop the "Repeat after me!" cue before the first round's pattern plays and clear any stale "Your Turn!" cue.
        global simon_round_alert, simon_round_pending, simon_your_turn_alert, simon_round_take
        simon_round_alert = True
        simon_round_pending = False
        simon_your_turn_alert = False
        simon_round_take = 1

        # Generate the first pattern
        current_button_pattern = create_button_pattern()
        renpy.restart_interaction()


####### TRANSFORMS

transform dance_norm:
    zoom 0.5 anchor (0.5,1.0) pos (0.5,0.65)
    subpixel True xzoom 1.0 yzoom 1.0

    block:
            linear 1 xzoom 1.0 yzoom 1.0
            linear 1 xzoom 1.02 yzoom 0.98
            linear 1 xzoom 1.0 yzoom 1.0
            linear 1 xzoom 1.02 yzoom 0.98
            repeat
transform dance_do:
    zoom 0.5 anchor (0.5,1.0) pos (0.5,0.65)
    subpixel True xzoom 1.0 yzoom 1.0
    block:
        linear 0.1 xzoom 1.02 yzoom 0.98
        linear 0.1 xzoom 1.0 yzoom 1.0
transform half_size:
    ### makes the large image assets 1/2 size smalelr
    zoom 0.5

transform round_text_transform:
    alpha 0.0 xoffset -20
    on show, appear:
        alpha 0.0 xoffset -20
        ease 1 alpha 1.0 xoffset 0
    on hide:
        ease 0.5 alpha 0.0 xoffset 20

####### MINIGAME SCREENS

screen round_text:
    text "Round [round_text_display]" style "results_text" align(0.5, 0) text_align 0.5 size 40 at round_text_transform

screen simon_says:
    on "show" action If(renpy.music.get_playing(channel="music") != "audio/music/ruderbuster.ogg", Play("music", "audio/music/ruderbuster.ogg", loop=True))

    #### your performance in the first intermission will make this minigame harder/easier by changing the number of rounds you need to complete the game

    ### the simon says screen. displays a background and buttons currently. will replace with a proper stage, commands, and dance moves
    on "show" action Function(reset_simon_says)

    if simon_game_over:
        image "gui/minigames/dancegame/dancegame_bg.png" at half_size

        # Freeze on the fail pose if the game ended on a wrong input, otherwise the normal pose.
        if simon_feedback_wrong > 0:
            add ("gui/minigames/dancegame/dancegame_weatherduo_fail_" + str(simon_feedback_wrong) + ".png") align (0.5,0.38) at dance_do
        else:
            add "gui/minigames/dancegame/dancegame_weatherduo_norm.png" align (0.5,0.38) at dance_norm

        # Fake stand ins for the final buttons.
        if button_1_lit:
            add "gui/minigames/dancegame/dancegame_button_1_hover.png" align (0.05, 0.35) at half_size
        else:
            add "gui/minigames/dancegame/dancegame_button_1_idle.png" align (0.05, 0.35) at half_size
        if button_2_lit:
            add "gui/minigames/dancegame/dancegame_button_2_hover.png" align (0.25, 0.85) at half_size
        else:
            add "gui/minigames/dancegame/dancegame_button_2_idle.png" align (0.25, 0.85) at half_size
        if button_3_lit:
            add "gui/minigames/dancegame/dancegame_button_3_hover.png" align (0.75, 0.85) at half_size
        else:
            add "gui/minigames/dancegame/dancegame_button_3_idle.png" align (0.75, 0.85) at half_size
        if button_4_lit:
            add "gui/minigames/dancegame/dancegame_button_4_hover.png" align (0.95, 0.35) at half_size
        else:
            add "gui/minigames/dancegame/dancegame_button_4_idle.png" align (0.95, 0.35) at half_size
    else:
        image "gui/minigames/dancegame/dancegame_bg.png" at half_size

        if simon_feedback_gap:
            # Brief normal pose beat after each input.
            add "gui/minigames/dancegame/dancegame_weatherduo_norm.png" align (0.5,0.38) at dance_norm
            timer SIMON_FEEDBACK_GAP action SetVariable("simon_feedback_gap", False)
        elif simon_feedback_wrong > 0:
            add ("gui/minigames/dancegame/dancegame_weatherduo_fail_" + str(simon_feedback_wrong) + ".png") align (0.5,0.38) at dance_do
            timer 0.8 action SetVariable("simon_feedback_wrong", 0)
        elif simon_feedback_correct > 0:
            add ("gui/minigames/dancegame/dancegame_weatherduo_correct_" + str(simon_feedback_correct) + ".png") align (0.5,0.38) at dance_do
            timer 0.8 action SetVariable("simon_feedback_correct", 0)
        else:
            add "gui/minigames/dancegame/dancegame_weatherduo_norm.png" align (0.5,0.38) at dance_norm

        if not input_ready and not simon_round_pending:
            add Solid("#000000B0") at dim_fadein_fast
        elif simon_your_turn_alert:
            add Solid("#000000B0") at dim_fadeout

        if button_1_lit:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_1_hover.png" align(0.05, 0.35) at half_size
        elif not button_1_lit:
            imagebutton auto "gui/minigames/dancegame/dancegame_button_1_%s.png" align(0.05, 0.35) action [SetVariable("button_1_lit", True), Function(check_user_input, button = "1")] sensitive input_ready at half_size
        if button_2_lit:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_2_hover.png" align(0.25, 0.85) at half_size
        elif not button_2_lit:
            imagebutton auto "gui/minigames/dancegame/dancegame_button_2_%s.png" align(0.25, 0.85) action [SetVariable("button_2_lit", True), Function(check_user_input, button = "2")] sensitive input_ready at half_size
        if button_3_lit:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_3_hover.png" align(0.75,0.85) at half_size
        elif not button_3_lit:
            imagebutton auto "gui/minigames/dancegame/dancegame_button_3_%s.png" align(0.75,0.85) action [SetVariable("button_3_lit", True), Function(check_user_input, button = "3")] sensitive input_ready at half_size
        if button_4_lit:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_4_hover.png" align(0.95, 0.35) at half_size
        elif not button_4_lit:
            imagebutton auto "gui/minigames/dancegame/dancegame_button_4_%s.png" align(0.95, 0.35) action [SetVariable("button_4_lit", True), Function(check_user_input, button = "4")] sensitive input_ready at half_size

        ### this is when the actual buttons light up and show the pattern before accepting user input.
        if simon_round_pending:
            # Hold for a moment as to not immediately hide the success dance image when completing a round.
            timer 1.5 action [SetVariable("simon_round_pending", False), SetVariable("simon_round_alert", True)]
        elif simon_round_alert:
            # "Repeat after me!" cue pops before each round's pattern.
            frame:
                at your_turn_transform
                pos (0.25,0.1)
                background None
                use tenna_alert_full
            text "Repeat after me!" style "results_text" at repeat_after_me_text_transform xpos 0.5 ypos 0.6
            # Matches the 0.2s pop-in + 2.0s hold + 0.2s pop-out of your_turn_transform.
            timer 0.1 action Play("audio", ["<silence 1>", "audio/sfx/general/snd_lancerwhistle.wav"])
            timer 2.4 action [SetVariable("round_text_display", game_round), SetVariable("simon_round_alert", False)]
        elif not input_ready:
            timer simon_pattern_interval() action Function(light_buttons) repeat True
        if button_1_lit or button_2_lit or button_3_lit or button_4_lit:
                timer simon_pattern_lit_duration() action Function(off_buttons) repeat True

        if simon_your_turn_alert:
            if simon_round_take == 2:
                text "Take Two!" style "simon_cue_text" at yourturn_anim
            elif simon_round_take >= 3:
                text "Take Three!" style "simon_cue_text" at yourturn_anim
            else:
                text "Your Turn!" style "simon_cue_text" at yourturn_anim
            # Matches the 0.2s zoom-in + 2.0s hold + 0.5s zoom-out of tennaalert_anim.
            timer 2.7 action SetVariable("simon_your_turn_alert", False)

    use susmeter

    showif (not simon_round_pending and not simon_round_alert) and (not simon_game_over or simon_feedback_wrong > 0):
        use round_text

    if simon_game_over:
        add "black" at black_drop_in
        timer 0.5 action Play("sound","audio/sfx/general/resultsscreen_impact.ogg")
        timer 2 action Jump("simon_says_done")

# Interactive tutorial.
# Phase "intro": tennaalert + "Repeat after me!" zoom in from center, front wiggles, everything shrinks out.  Auto-advances after 3.7s.
# Phase "interactive": player must click the four stars in SIMON_TUTORIAL_ORDER.  Only the active star advances; others trigger the buzzer + a weatherduo_fail image.  After the last correct click, Return() exits and the live game starts.
screen simonsays_tutorial:
    modal True

    # Board background with the same composition as screen simon_says, but without the live game wiring.
    image "gui/minigames/dancegame/dancegame_bg.png" at half_size

    # Weatherduo swaps to a fail variant briefly when the player clicks a wrong star.
    if simon_tutorial_gap:
        add "gui/minigames/dancegame/dancegame_weatherduo_norm.png" align (0.5, 0.38) at dance_norm
        timer SIMON_FEEDBACK_GAP action SetVariable("simon_tutorial_gap", False)
    elif simon_tutorial_wrong > 0:
        add ("gui/minigames/dancegame/dancegame_weatherduo_fail_" + str(simon_tutorial_wrong) + ".png") align (0.5, 0.38) at dance_do
        # Auto clear the fail image so the player can keep trying.
        timer 1.2 action SetVariable("simon_tutorial_wrong", 0)
    elif simon_tutorial_correct > 0:
        add ("gui/minigames/dancegame/dancegame_weatherduo_correct_" + str(simon_tutorial_correct) + ".png") align (0.5, 0.38) at dance_do
        # Auto clear so the next active button shows against the normal pose.
        timer 1.2 action SetVariable("simon_tutorial_correct", 0)
    else:
        add "gui/minigames/dancegame/dancegame_weatherduo_norm.png" align (0.5, 0.38) at dance_norm

    # Static sus meter that is present in all phases so the layout matches the live game.
    add "gui/minigames/dancegame/susmeter_back.png" align(0.9, 0.05) zoom 0.5
    add "gui/minigames/dancegame/susmeter_x1_off.png" align(0.73, 0.11) zoom 0.5 at susmeter_norm
    add "gui/minigames/dancegame/susmeter_x2_off.png" align(0.805, 0.11) zoom 0.5 at susmeter_norm
    add "gui/minigames/dancegame/susmeter_x3_off.png" align(0.895, 0.11) zoom 0.5 at susmeter_norm

    # Demostration phase dimming, drops below the buttons so the stars pop while the background, weatherduo, and susmeter recede.  During the handoff (start of interactive) the dim lingers briefly and then fades away via dim_fadeout.
    if simon_tutorial_phase == "demo":
        add Solid("#000000B0")
    elif simon_tutorial_handoff_active:
        add Solid("#000000B0") at dim_fadeout

    # During introduction the buttons are passive idle images, but during interactive they become real imagebuttons whose behavior depends on whether they're the currently active star.
    if simon_tutorial_phase == "interactive":
        $ simon_active_button = SIMON_TUTORIAL_ORDER[simon_tutorial_step_index]

        # Button 1 - red, top left.
        if simon_active_button == 1:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_1_hover.png":
                align (0.05, 0.35)
                at half_size
                action [Play("sound", "audio/sfx/minigames/simonsays/snd_musicbox_1.ogg"), SetVariable("simon_tutorial_gap", True), SetVariable("simon_tutorial_wrong", 0), SetVariable("simon_tutorial_correct", 1), If(simon_tutorial_step_index < len(SIMON_TUTORIAL_ORDER) - 1, true=SetVariable("simon_tutorial_step_index", simon_tutorial_step_index + 1), false=SetVariable("simon_tutorial_phase", "rehearsal"))]
        else:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_1_idle.png":
                align (0.05, 0.35)
                at half_size
                action [Play("sound", "audio/sfx/minigames/simonsays/snd_hurt_1.ogg"), SetVariable("simon_tutorial_gap", True), SetVariable("simon_tutorial_correct", 0), SetVariable("simon_tutorial_wrong", 1)]

        # Button 2 - green, bottom left.
        if simon_active_button == 2:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_2_hover.png":
                align (0.25, 0.85)
                at half_size
                action [Play("sound", "audio/sfx/minigames/simonsays/snd_musicbox_2.ogg"), SetVariable("simon_tutorial_gap", True), SetVariable("simon_tutorial_wrong", 0), SetVariable("simon_tutorial_correct", 2), If(simon_tutorial_step_index < len(SIMON_TUTORIAL_ORDER) - 1, true=SetVariable("simon_tutorial_step_index", simon_tutorial_step_index + 1), false=SetVariable("simon_tutorial_phase", "rehearsal"))]
        else:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_2_idle.png":
                align (0.25, 0.85)
                at half_size
                action [Play("sound", "audio/sfx/minigames/simonsays/snd_hurt_2.ogg"), SetVariable("simon_tutorial_gap", True), SetVariable("simon_tutorial_correct", 0), SetVariable("simon_tutorial_wrong", 2)]

        # Button 3 - yellow, bottom right.
        if simon_active_button == 3:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_3_hover.png":
                align (0.75, 0.85)
                at half_size
                action [Play("sound", "audio/sfx/minigames/simonsays/snd_musicbox_3.ogg"), SetVariable("simon_tutorial_gap", True), SetVariable("simon_tutorial_wrong", 0), SetVariable("simon_tutorial_correct", 3), If(simon_tutorial_step_index < len(SIMON_TUTORIAL_ORDER) - 1, true=SetVariable("simon_tutorial_step_index", simon_tutorial_step_index + 1), false=SetVariable("simon_tutorial_phase", "rehearsal"))]
        else:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_3_idle.png":
                align (0.75, 0.85)
                at half_size
                action [Play("sound", "audio/sfx/minigames/simonsays/snd_hurt_3.ogg"), SetVariable("simon_tutorial_gap", True), SetVariable("simon_tutorial_correct", 0), SetVariable("simon_tutorial_wrong", 3)]

        # Button 4 - blue, top right.
        if simon_active_button == 4:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_4_hover.png":
                align (0.95, 0.35)
                at half_size
                action [Play("sound", "audio/sfx/minigames/simonsays/snd_musicbox_4.ogg"), SetVariable("simon_tutorial_gap", True), SetVariable("simon_tutorial_wrong", 0), SetVariable("simon_tutorial_correct", 4), If(simon_tutorial_step_index < len(SIMON_TUTORIAL_ORDER) - 1, true=SetVariable("simon_tutorial_step_index", simon_tutorial_step_index + 1), false=SetVariable("simon_tutorial_phase", "rehearsal"))]
        else:
            imagebutton idle "gui/minigames/dancegame/dancegame_button_4_idle.png":
                align (0.95, 0.35)
                at half_size
                action [Play("sound", "audio/sfx/minigames/simonsays/snd_hurt_4.ogg"), SetVariable("simon_tutorial_gap", True), SetVariable("simon_tutorial_correct", 0), SetVariable("simon_tutorial_wrong", 4)]
    elif simon_tutorial_phase == "demo":
        # Demostration phase that passively lights each button in SIMON_TUTORIAL_ORDER one at a time with user input disabled.  Then simon_demo_advance() cycles the lit/gap substate via the timer below.
        $ simon_demo_button = SIMON_TUTORIAL_ORDER[simon_tutorial_step_index] if simon_tutorial_demo_substate == "lit" else 0

        if simon_demo_button == 1:
            add "gui/minigames/dancegame/dancegame_button_1_hover.png" align (0.05, 0.35) at half_size
        else:
            add "gui/minigames/dancegame/dancegame_button_1_idle.png" align (0.05, 0.35) at half_size

        if simon_demo_button == 2:
            add "gui/minigames/dancegame/dancegame_button_2_hover.png" align (0.25, 0.85) at half_size
        else:
            add "gui/minigames/dancegame/dancegame_button_2_idle.png" align (0.25, 0.85) at half_size

        if simon_demo_button == 3:
            add "gui/minigames/dancegame/dancegame_button_3_hover.png" align (0.75, 0.85) at half_size
        else:
            add "gui/minigames/dancegame/dancegame_button_3_idle.png" align (0.75, 0.85) at half_size

        if simon_demo_button == 4:
            add "gui/minigames/dancegame/dancegame_button_4_hover.png" align (0.95, 0.35) at half_size
        else:
            add "gui/minigames/dancegame/dancegame_button_4_idle.png" align (0.95, 0.35) at half_size

        # Drive the lit/gap cycle.  Trumpet for the next button is played inside simon_demo_advance when it transitions gap to lit.
        if simon_tutorial_demo_substate == "lit":
            timer 1.0 action Function(simon_demo_advance)
        else:
            timer 0.3 action Function(simon_demo_advance)
    else:
        # Introduction phase buttons are visible, but disabled.
        add "gui/minigames/dancegame/dancegame_button_1_idle.png" align (0.05, 0.35) at half_size
        add "gui/minigames/dancegame/dancegame_button_2_idle.png" align (0.25, 0.85) at half_size
        add "gui/minigames/dancegame/dancegame_button_3_idle.png" align (0.75, 0.85) at half_size
        add "gui/minigames/dancegame/dancegame_button_4_idle.png" align (0.95, 0.35) at half_size

    # Introduction phase dimming sits above the buttons so only the tennaalert visually pop pops out.  Rehearsal Over reuses the same slot but with a fade in so the dim grows in as the tutorial wraps up.
    if simon_tutorial_phase == "intro":
        add Solid("#000000B0")
    elif simon_tutorial_phase == "rehearsal":
        add Solid("#000000B0") at dim_fadein

    # Introduction alert overlay
    if simon_tutorial_phase == "intro":
        # Copied from screen repeat_after_me.
        frame:
            at your_turn_transform
            pos (0.25,0.1)
            background None
            use tenna_alert_full

        text "Repeat after me!" style "results_text" at repeat_after_me_text_transform xpos 0.5 ypos 0.6
        # Matches the 0.2s pop-in + 2.0s hold + 0.2s pop-out of your_turn_transform.
        timer 0.1 action Play("audio", ["<silence 1>", "audio/sfx/general/snd_lancerwhistle.wav"])
        timer 2.4 action Function(simon_enter_demo)

    # Rehearsal Over overlay pops "Rehearsal Over!", holds for 2 seconds, and then shrinks out to start the regular game.
    elif simon_tutorial_phase == "rehearsal":
        if not simon_tutorial_rehearsal_dismissed:
            timer 2.0 action SetVariable("simon_tutorial_rehearsal_dismissed", True)
            text "Rehearsal\nOver!":
                align (0.5, 0.5)
                text_align 0.5
                size 80
                color "#FFFFFF"
                outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0))]
                at tennaalert_pop
        else:
            text "Rehearsal\nOver!":
                align (0.5, 0.5)
                text_align 0.5
                size 80
                color "#FFFFFF"
                outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0))]
                at tennaalert_shrink
            timer 0.5 action Return()

    # Handoff overlay briefly displays "Your Turn!" pop when the player takes over from the demostration.
    if simon_tutorial_handoff_active:
        text "Your Turn!":
            align (0.5, 0.5)
            size 80
            color "#FFFFFF"
            outlines [(absolute(10), "#000000", absolute(0), absolute(10)),(absolute(10), "#1B3780", absolute(0), absolute(0))]
            at tennaalert_anim
        # Matches the 0.2s zoom-in + 2.0s hold + 0.5s zoom-out of tennaalert_anim.
        timer 1.0 action SetVariable("simon_tutorial_handoff_active", False)

    # Arrow indicator pointing at the active star.  Uses arrow_point(rot) so the bounce travels in the arrow's pointing direction.
    if simon_tutorial_phase == "interactive":
        if simon_active_button == 1:
            add "tutorial_arrow" at arrow_point(rot=0):
                align (0.25, 0.40)
        elif simon_active_button == 2:
            add "tutorial_arrow" at arrow_point(rot=-40):
                align (0.37, 0.65)
        elif simon_active_button == 3:
            add "tutorial_arrow" at arrow_point(rot=-130):
                align (0.63, 0.65)
        elif simon_active_button == 4:
            add "tutorial_arrow" at arrow_point(rot=180):
                align (0.75, 0.40)

# Fake stage layout to show under the door slam.
image fake_simonsays_board = Fixed(
    At("gui/minigames/dancegame/dancegame_bg.png", half_size),
    At("gui/minigames/dancegame/dancegame_weatherduo_norm.png", dance_norm),
    At("gui/minigames/dancegame/susmeter_back.png", Transform(align=(0.9, 0.05), zoom=0.5)),
    At("gui/minigames/dancegame/susmeter_x1_off.png", Transform(pos=(0.73, 0.11), anchor=(0.5, 0.5), zoom=0.5)),
    At("gui/minigames/dancegame/susmeter_x2_off.png", Transform(pos=(0.805, 0.11), anchor=(0.5, 0.5), zoom=0.5)),
    At("gui/minigames/dancegame/susmeter_x3_off.png", Transform(pos=(0.895, 0.11), anchor=(0.5, 0.5), zoom=0.5)),
    At("gui/minigames/dancegame/dancegame_button_1_idle.png", Transform(align=(0.05, 0.35), zoom=0.5)),
    At("gui/minigames/dancegame/dancegame_button_2_idle.png", Transform(align=(0.25, 0.85), zoom=0.5)),
    At("gui/minigames/dancegame/dancegame_button_3_idle.png", Transform(align=(0.75, 0.85), zoom=0.5)),
    At("gui/minigames/dancegame/dancegame_button_4_idle.png", Transform(align=(0.95, 0.35), zoom=0.5)),
)

######### GAME STARTS HERE

label simon_says:
    $ renpy.stop_skipping()
    hide screen quick_menu
    $ quick_menu = False

###### VARIABLES
    if intermission1_score == 3:
        $ game_max_round = 6
    elif intermission1_score ==0:
        $ game_max_round = 10
    elif 0 < intermission1_score < 3:
        pass
    else:
        text "this dialogue should not appear"

    # SLAM THOSE DOORS!~
    scene black
    show fake_simonsays_board # Show the fake game board.
    play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
    with doorslam_simonsays

    #JUST REMOVE "NOT" TO SEE THE TUTORIAL IF YOU ALREADY SAW IT.
    if not persistent.simon_tutorial_seen:
        $ simon_tutorial_phase = "intro"
        $ simon_tutorial_step_index = 0
        $ simon_tutorial_demo_substate = "lit"
        $ simon_tutorial_wrong = 0
        $ simon_tutorial_correct = 0
        $ simon_tutorial_gap = False
        $ simon_tutorial_handoff_active = False
        $ simon_tutorial_rehearsal_dismissed = False
        call screen simonsays_tutorial
        $ persistent.simon_tutorial_seen = True

    call screen simon_says

    play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
    with doorslam_simonsays

    label simon_says_done:

        stop music fadeout 1.0

        # Hide all of our crimes.
        show black onlayer pattern

        pause 2
        show weather_tile onlayer pattern with dissolve
        play music "audio/music/board_clear.ogg" 
        $ renpy.music.queue("<silence 1>", clear_queue=False)

        hide screen simon_says
        hide fake_simonsays_board

        $ simonsays_score += (100*(game_round-1)) / (sus_meter + 1)

        # if sus_meter == 3 and game_round <= 2:

        #     $ simonsays_rank = zrank


        pause 1

        show screen happy_meter("left", animate=True) onlayer pattern

        ##### called when timer is up.
            

        ##### calculates the rank for the minigame

        if intermission1_score == 3:
            if sus_meter == 3 and game_round <= 2:
                $ simonsays_rank = zrank
            elif simonsays_score >= 500:
                $ simonsays_rank = trank
                $ trank_tracker += 1
            elif simonsays_score >= 400:
                $ simonsays_rank = srank
                $ srank_tracker += 1
            elif simonsays_score >= 250:
                $ simonsays_rank = arank
                $ arank_tracker += 1
            elif simonsays_score >= 100:
                $ simonsays_rank = brank
                $ brank_tracker += 1
            elif simonsays_score <= 100:
                $ simonsays_rank = crank
                $ crank_tracker += 1
            else:
                "you should not get this rank."
        elif intermission1_score == 0:
            if sus_meter == 3 and game_round <= 2:
                $ simonsays_rank = zrank
            elif simonsays_score >= 1000:
                $ simonsays_rank = trank
                $ trank_tracker += 1
            elif simonsays_score >= 900:
                $ simonsays_rank = srank
                $ srank_tracker += 1
            elif simonsays_score >= 600:
                $ simonsays_rank = arank
                $ arank_tracker += 1
            elif simonsays_score >= 200:
                $ simonsays_rank = brank
                $ brank_tracker += 1
            elif simonsays_score <= 200:
                $ simonsays_rank = crank
                $ crank_tracker += 1
            else:
                "you should not get this rank."

        else:
            if sus_meter == 3 and game_round <= 2:
                $ simonsays_rank = zrank
            elif simonsays_score >= 700:
                $ simonsays_rank = trank
                $ trank_tracker += 1
            elif simonsays_score >= 500:
                $ simonsays_rank = srank
                $ srank_tracker += 1
            elif simonsays_score >= 300:
                $ simonsays_rank = arank
                $ arank_tracker += 1
            elif simonsays_score >= 100:
                $ simonsays_rank = brank
                $ brank_tracker += 1
            elif simonsays_score <= 100:
                $ simonsays_rank = crank
                $ crank_tracker += 1
            else:
                "you should not get this rank."

        play audio ["audio/sfx/general/snd_noise.wav","<silence 0.3>", "audio/sfx/general/snd_noise.wav","audio/sfx/general/snd_noise.wav","<silence 0.8>", "audio/sfx/general/snd_noise.wav",]
        show screen results("simon_says") onlayer bg

        pause 2
        play audio ["<silence 0.5>","audio/sfx/general/snd_bell.wav"]

        show screen result1("simon_says") onlayer bg

        pause 1
        play audio ["<silence 0.5>","audio/sfx/general/snd_bell.wav"]

        show screen result2('simon_says') onlayer bg

        pause 1
        play audio "audio/sfx/general/snd_drumroll.wav"
        pause 2

        if simonsays_rank == zrank:
            stop music
            play audio "audio/sfx/general/snd_glassbreak.wav"
        elif simonsays_rank == trank:
            play audio "audio/sfx/general/snd_won.wav"
        elif simonsays_rank == crank:
            play audio "audio/sfx/general/snd_splat.wav"
        else:
            play audio "audio/sfx/general/snd_cymbal.wav"
        show screen minigame_rank(simonsays_rank) onlayer bg

        pause

        ##### this is when the ranking would be called 

        ####### score thresholds - simon says minigame.... idk if i like this calculation though it seems pretty skewed towards s rank (which isnt what i want)

        ## t rank - (100*6)/ 1 = 600
        ## s rank - 300
        ## a rank - 200
        ## b rank - 125
        ## c rank - 50
        ## z rank - [SEE game over conditions for simon says]


        jump post_simonsays 

        ##### this is when the ranking would be called but idgaf about that right now.