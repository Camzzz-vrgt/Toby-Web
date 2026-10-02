######## VARIABLES


default questions = 5 #### tracks # of questions left for answering within game
default question_number = 5 
default randomizer = 0 ####randomizer label
default therapy_score = 0 ### quiz point score tracker. +2 for correct answers, +1 for semi correct answers, and 0 for incorrect answers
default therapy_overall_score = 0 #### final calculated score for the therapy minigame
default therapy_rank = "" ## letter rank for therapy minigame
default topics = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"]

define dropin_3 = MoveTransition(3.0, enter=top, enter_time_warp=_warper.easein_bounce)


transform therapy_verdict:
    subpixel True
    xoffset -20 alpha 0
    easein_quad 1 xoffset 0 alpha 1 
    pause 1
    easeout_quad 1 xoffset 20 alpha 0

screen blackdropin:
    add "black" at black_drop_in

style therapy_verdict_good:
    properties gui.text_properties("slot_button")
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#B31C35", absolute(0), absolute(0)) ]
style therapy_verdict_ok:
    properties gui.text_properties("slot_button")
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#A66E46", absolute(0), absolute(0)) ]
style therapy_verdict_bad:
    properties gui.text_properties("slot_button")
    outlines [(absolute(5), "#000000", absolute(0), absolute(5)),(absolute(5), "#1B377F", absolute(0), absolute(0)) ]

screen therapyverdict(verdict):
    if verdict == "good":
        text "+ Your words touched Tenna's heart!" style "therapy_verdict_good" size 18 align (0.1,0.02) at therapy_verdict
    elif verdict == "ok":
        text "~ That worked… somewhat." style "therapy_verdict_ok" size 18 align (0.1,0.02) at therapy_verdict
    elif verdict == "bad":
        text "- Shouldn't have said that." style "therapy_verdict_bad" size 18 align (0.1,0.02) at therapy_verdict
    else:
        text "no verdict"

######## SCREENS

image bg pink = Solid("db7093")



init python:
####### function that randomly collects a topic/scenario from the bank of scenarios
    def getRandomLabel():
        global topics # topics list
        
        return renpy.random.choice(topics)

    def removeTopic(therapyquestion):
            topics.discard(therapyquestion)
            return

transform squish:
    ease_quad  0.2 xzoom 0.98 yzoom 1.02
    ease_quad 0.2 xzoom 1.0 yzoom 1.0


########### ACTUAL QUESTION TIME

label therapy:
    $ renpy.stop_skipping()

    if intermission2_score ==3:
        $ questions = 4
        $ question_number = 4
    elif intermission2_score ==0:
        $ questions = 6
        $ question_number = 6
    elif 0< intermission2_score <3:
        pass
    else:
        text "this dialogue should not appear"
    hide screen quick_menu
    $ quick_menu = False
    camera sprite:
      xpos 0 ypos 0 zpos 0
    camera bg:
      xpos 0 ypos 0 zpos 0
    show therapy_bg  onlayer bg 
    if simonsays_rank == trank:
        show therapytenna pleased onlayer sprite:
          anchor (0.75,1.0) pos(0.75, 1.0)
    else:
        show therapytenna contemplative onlayer sprite:
          anchor (0.75,1.0) pos(0.75, 1.0)
    pause 3
    camera bg:
        perspective True
        zpos 0
        ease 1 zpos -100 xpos 50 ypos -50

    camera sprite:
        perspective True
        zpos 0
        ease 1 zpos -100 xpos 50 ypos -50
    if simonsays_rank == crank:
        pass
    else:
        show therapytenna thinking at squish onlayer sprite:
          anchor (0.75,1.0) pos(0.75, 1.0)
    t "Mike, if ya need to twiddle your thumbs or something, go ahead."



    show therapytenna contemplative onlayer sprite
    t "Just answer when I ask you something."

    $ renpy.clear_retain();
    pause 1
    camera bg:
        perspective True
        zpos -100 xpos 50 ypos -50
        ease 1 xpos 0 ypos 0 zpos 0

    camera sprite:
        perspective True
        zpos -100 xpos 50 ypos -50
        ease 1 xpos 0 ypos 0 zpos 0

    if simonsays_rank == crank:
        show therapytenna blank onlayer sprite:
          anchor (0.75,1.0) pos(0.75, 1.0)
    else:
        show therapytenna nervous at squish onlayer sprite:
          anchor (0.75,1.0) pos(0.75, 1.0)

    t "And do it fast."

    t "I don't like to be kept waiting, ya know."
    $ renpy.clear_retain();
    stop music fadeout 2.0
    pause 2
    play music "audio/music/glowingsnow_therapy.ogg" fadein 1.0

    pause 1

    if simonsays_rank == crank:
        pass
    else:
        show therapytenna contemplative onlayer sprite:
          anchor (0.75,1.0) pos(0.75, 1.0)

label quiz:
    $ shuffle = True
    $ renpy.clear_retain();


    while questions > 0:
        pause 3
        jump expression getRandomLabel()
    jump therapygame_end


###### QUIZ END CODE GOES HERE

label therapygame_end:
    $ shuffle = False

    $ therapy_overall_score = therapy_score * 100

    #### calculates the rank for the minigame.
    if intermission2_score == 3:
        if therapy_overall_score >= 800:
            $ therapy_rank = trank
            $ trank_tracker += 1
        elif therapy_overall_score >= 700:
            $ therapy_rank = srank
            $ srank_tracker += 1
        elif therapy_overall_score >= 500:
            $ therapy_rank = arank
            $ arank_tracker += 1
        elif therapy_overall_score >= 200:
            $ therapy_rank = brank
            $ brank_tracker += 1
        elif therapy_overall_score >= 100:
            $ therapy_rank = crank
            $ crank_tracker += 1
        elif therapy_overall_score <= 100:
            $ therapy_rank = zrank
        else:
            "you should not get this rank."
    elif intermission2_score == 0:
        if therapy_overall_score >= 1200:
            $ therapy_rank = trank
            $ trank_tracker += 1
        elif therapy_overall_score >= 1100:
            $ therapy_rank = srank
            $ srank_tracker += 1
        elif therapy_overall_score >= 800:
            $ therapy_rank = arank
            $ arank_tracker += 1
        elif therapy_overall_score >= 600:
            $ therapy_rank = brank
            $ brank_tracker += 1
        elif therapy_overall_score >= 200:
            $ therapy_rank = crank
            $ crank_tracker += 1
        elif therapy_overall_score <= 200:
            $ therapy_rank = zrank
        else:
            "you should not get this rank."
    else:
        if therapy_overall_score >= 1000:
            $ therapy_rank = trank
            $ trank_tracker += 1
        elif therapy_overall_score >= 900:
            $ therapy_rank = srank
            $ srank_tracker += 1
        elif therapy_overall_score >= 500:
            $ therapy_rank = arank
            $ arank_tracker += 1
        elif therapy_overall_score >= 200:
            $ therapy_rank = brank
            $ brank_tracker += 1
        elif therapy_overall_score >= 100:
            $ therapy_rank = crank
            $ crank_tracker += 1
        elif therapy_overall_score <= 100:
            $ therapy_rank = zrank
        else:
            "you should not get this rank."



    play audio ["<silence 0.5>", "audio/sfx/general/resultsscreen_impact.ogg"]
    camera sprite:
     xpos 0 ypos 0 zpos 0
    camera bg:
     xpos 0 ypos 0 zpos 0
    camera pattern:
     xpos 0 ypos 0 zpos 0
    stop music fadeout 1.0
    show screen blackdropin onlayer overlay
    pause 2
    hide therapytenna onlayer sprite
    hide therapy_bg onlayer bg
    hide tv_tile onlayer pattern

    scene black

    pause 2

    hide screen blackdropin onlayer overlay
    play music "audio/music/board_clear.ogg" volume 0.3
    $ renpy.music.queue("<silence 1>", clear_queue=False)
    show tv_tile onlayer pattern with dissolve

    show screen happy_meter("left", animate = True) onlayer pattern

    pause 1

    play audio ["audio/sfx/general/snd_noise.wav","<silence 0.3>", "audio/sfx/general/snd_noise.wav", "<silence 0.8>", "audio/sfx/general/snd_noise.wav",]
    show screen results("nose_org") onlayer bg
    play audio ["<silence 0.5>","audio/sfx/general/snd_bell.wav"]
    show screen results("therapy") onlayer bg
    pause 1

    play audio ["<silence 0.5>","audio/sfx/general/snd_bell.wav"]
    show screen result1("therapy") onlayer bg
    pause 1

    play audio "audio/sfx/general/snd_drumroll.wav"
    pause 2
    if therapy_rank == zrank:
        stop music
        play audio "audio/sfx/general/snd_glassbreak.wav"
    elif therapy_rank == trank:
        play audio "audio/sfx/general/snd_won.wav"
    elif therapy_rank == crank:
        play audio "audio/sfx/general/snd_splat.wav"
    else:
        play audio "audio/sfx/general/snd_cymbal.wav"
    show screen minigame_rank(therapy_rank) onlayer bg

    pause

    ####### score thresholds - therapy minigame

    ## t rank - 1400 (no mistakes)
    ## s rank - 1200 (1 mistake/2 semi-correct answers)
    ## a rank - 1000 (2 mistakes/4 semi-correct answers)
    ## b rank - 700  (3 mistakes + 1 semi-correct answer/7 semi-correct answers)
    ## c rank - 400  (5 mistakes)
    ## z rank - <400 (further mistakes)

    #### return for now but this will call the post-therapy scene later.
    jump post_therapy

######## QUESTION BANK

label q1:
    show therapytenna contemplative onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0

    t "Mike?"
    t "Why do people leave me?"
    $ renpy.clear_retain();
    play sound ["<silence 1>", "audio/sfx/general/snd_bump.wav"]
    show therapytenna contemplative onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.75,1.0) pos(0.75, 1.0)
        xzoom 1.0 yzoom 1.0
        ease 2 xzoom 1.05 yzoom 0.95
    pause 2
    show therapytenna worried onlayer sprite
    t "Is it 'cause of something I did, or…?"
    $ renpy.clear_retain();
    $ importanttext_size = 40
    show screen importanttext("How will you comfort Tenna?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "I'll NEVER leave you.":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            $therapy_score += 2
            play sound "audio/sfx/general/snd_squeaky.wav"
            show therapytenna blush at squish onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
            pause 0.5
            t "Oh~{size=-1}♡!{/size}"
            $ renpy.clear_retain();
            pause 0.5
            play sound ["<silence 1>", "audio/sfx/general/snd_wing.wav"]
            show therapytenna pleased onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                parallel:
                    block:
                        ease 1 rotate 2 
                        ease 1 rotate -2
                        repeat
                parallel:
                        ease_quad  2 xzoom 0.98 yzoom 1.02
                        ease_quad 2 xzoom 1.0 yzoom 1.0
                        repeat
            pause 2
            t "Oh, Mike, you’re a peach."
            t "I don't know what I'd do without you!"
            hide screen therapyverdict
            $ renpy.clear_retain();
        "It's their loss - not yours!":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            $therapy_score += 1
            play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
            show therapytenna sad onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.05 yzoom 0.95 zoom 1
                ease 2 xzoom 1.1 yzoom 0.9 zoom 0.9
            pause 1
            t "But still, I…"
            show therapytenna blank onlayer sprite
            t "I…!"
            $ renpy.clear_retain();
            pause 1 
            t "…No, you're right."
            $ renpy.clear_retain();
            play sound ["<silence 1>", "audio/sfx/general/snd_wing.wav"]
            show therapytenna blank onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.1 yzoom 0.9 zoom 0.9
                ease 2 xzoom 1 yzoom 1 zoom 1
            pause 2
            show therapytenna nervous onlayer sprite
            t "Guess they…"
            t "…don't know what they're missing."
            $ renpy.clear_retain();
            pause 1
            show therapytenna contemplative onlayer sprite
            pause 1
            t "Ha ha."
            hide screen therapyverdict
            $ renpy.clear_retain();
        "{size=-8}All relationships are ephemeral, Mr. Tenna.":
            play sound "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            ## Tenna is visibly uncomfortable with this reaction]{/b}"
            play sound ["<silence 1>", "audio/sfx/general/snd_slidewhistle_down.ogg"]
            show therapytenna blank onlayer sprite
            pause 1
            show therapytenna blank onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.05 yzoom 0.95 zoom 1
                ease 2 xzoom 1.1 yzoom 0.9 zoom 0.9
            pause 1
            t "…Ephemeral?"
            $ renpy.clear_retain();
            pause 0.5
            t "Ha ha."
            t "Ha ha ha."
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_wing.wav"
            show therapytenna angry onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.05 yzoom 0.95 zoom 0.9
                easein_elastic 1 xzoom 1.0 yzoom 1.0 zoom 1
            pause 0.5
            t "NICE one, Mike!"
            show therapytenna annoyed onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                block:
                    easein 0.1 rotate 0.2
                    easein 0.1 rotate -0.2
                    repeat
            t "Save that for tonight's show!!"
            t "The crowds are gonna LOVE it."
            hide screen therapyverdict
            $ renpy.clear_retain();
    pause 3
    $questions -= 1
    $ topics.remove("q1")
    jump quiz

label q2:
    show therapytenna contemplative onlayer sprite:
        subpixel True
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    t "Mike…"
    show therapytenna contemplative onlayer sprite:
        anchor (0.75,1.0) pos(0.75, 1.0)
    t "Be honest with me."
    $ renpy.clear_retain();
    pause 1
    show therapytenna blank onlayer sprite
    t "Do you think Kris still loves TV?"
    $ renpy.clear_retain();
    $ importanttext_size = 40
    show screen importanttext("Do you think Kris still loves TV?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "{size=-4}Of COURSE they do. They NEED you!":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            $therapy_score+= 2
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            t "Yeah…"
            camera bg:
                perspective True
                zpos 0
                ease 1 zpos -100 xpos 50 ypos -50

            camera sprite:
                perspective True
                zpos 0
                ease 1 zpos -100 xpos 50 ypos -50
            play sound "audio/sfx/general/snd_noise.wav"
            show therapytenna thinking at squish onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
            pause 0.5
            t "Yeah!"
            t "They DO need me!"
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_squeaky.wav"
            show therapytenna teasing at squish onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
            pause 0.5
            t "And that's why I'm gonna knock their socks off with tonight's show!"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 0.5 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 0.5 zpos 0 xpos 0 ypos 0
            pause 1
            show therapytenna thinking onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
            t "…They still like 'The Sblurfs', right?"
            show therapytenna contemplative onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
            hide screen therapyverdict
            $ renpy.clear_retain();
        "{size=-8}They're just busy with… school.":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5

            t "School, huh?"
            t "Why do they bother going, anyway?"
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_bump.wav"
            show therapytenna annoyed at squish onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
            pause 0.5
            t "They can learn ANYTHING on TV."
            t "If I were them, I'd just stay home!"
            hide screen therapyverdict
            $ renpy.clear_retain();
            $therapy_score += 1
        "{size=-4}Maybe they have better things to do?":
            ## Tenna is visibly uncomfortable with this reaction]{/b}"
            play audio "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            show therapytenna upset onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)

            camera bg:
                perspective True
                parallel:
                    zpos -200 xpos 100 ypos -100
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0

            camera sprite:
                perspective True
                parallel:
                    zpos -200 xpos 100 ypos -100
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0
            play sound "audio/sfx/general/snd_impact.wav"
            t "{size=+8}NO THEY DON'T!!"
            $ renpy.clear_retain();
            pause 2
            show therapytenna sad onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                parallel:
                    block:
                        ease 2 rotate 1
                        ease 2 rotate -1
                        repeat
                parallel:
                        ease_quad 4 xzoom 0.98 yzoom 1.02
                        ease_quad 4 xzoom 1.0 yzoom 1.0
                        repeat
            t "They just, um…"
            t "…have a big school project?"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 zpos 0 xpos 0 ypos 0
            pause 2.5
            show therapytenna blank onlayer sprite
            t "And they're NOT gonna work on it when tonight's show comes on."
            t "I KNOW they'll be there this time."
            t "I can feel it in my wires."
            hide screen therapyverdict
            $ renpy.clear_retain();
    pause 3
    $questions -= 1
    $ topics.remove("q2")
    jump quiz

label q3:
    show therapytenna contemplative onlayer sprite:
        subpixel True
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    t "Hey, Mike."
    $ renpy.clear_retain();
    camera bg:
        perspective True
        zpos 0 xpos 0 ypos 0
        ease 2 zpos -200 xpos 100 ypos -100

    camera sprite:
        perspective True
        zpos 0 xpos 0 ypos 0
        ease 2 zpos -200 xpos 100 ypos -100
    pause 2.5
    t "On a scale of 1-10, what did you think of our latest episode?"
    $ renpy.clear_retain();
    $ importanttext_size = 25
    show screen importanttext("What did you think of the latest TV Time episode?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "Ten out of Tenna!":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            $therapy_score += 2
            play sound "audio/sfx/general/snd_squeaky.wav"
            show therapytenna teasing at squish onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
            pause 0.5
            t "Now THAT'S what I like to hear!"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 1 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 1 zpos 0 xpos 0 ypos 0
            pause 1
            show therapytenna pleased onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                parallel:
                    block:
                        ease 1 rotate 2 
                        ease 1 rotate -2
                        repeat
                parallel:
                        ease_quad  2 xzoom 0.98 yzoom 1.02
                        ease_quad 2 xzoom 1.0 yzoom 1.0
                        repeat
            t "None of this would've been possible without your hard work."
            $ renpy.clear_retain();
            pause 0.4
            show therapytenna contemplative onlayer sprite:
                anchor (0.75,1.0) pos(0.75, 1.0)
            t "{size=-4}…And the work of my other employees, I guess."
            hide screen therapyverdict
            $ renpy.clear_retain();
        "I'd give it an 8? A 9?":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            $therapy_score += 1
            play sound "audio/sfx/general/snd_impact.wav"
            camera bg:
                perspective True
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0

            camera sprite:
                perspective True
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0
            show therapytenna upset onlayer sprite:
                anchor (0.75,1.0) pos(0.75, 1.0)
            pause 0.5
            t "{size=+8}WHAT?!"
            show therapytenna annoyed onlayer sprite:
                anchor (0.75,1.0) pos(0.75, 1.0)
                subpixel True
                parallel:
                    xzoom 1.0 yzoom 1.0
                    ease_quad 0.2 xzoom 0.98 yzoom 1.02
                parallel:
                    pause 0.2
                    block:
                        ease 0.05 xoffset 2
                        ease 0.05 xoffset 0
                        repeat
            pause 0.5
            t "What's with the missing point??"
            $ renpy.clear_retain();
            pause 1
            show therapytenna thinking onlayer sprite:
                anchor (0.75,1.0) pos(0.75, 1.0)
            t "Oooooooh."
            t "\"'cause nobody's perfect?\""
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 1 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 1 zpos 0 xpos 0 ypos 0
            pause 1.25
            play sound "audio/sfx/general/snd_noise.wav"
            show therapytenna teasing at squish onlayer sprite:
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 0.98 yzoom 1.02
                ease_quad 0.5 xzoom 1.0 yzoom 1.0
            pause 0.5
            t "You SCOUNDREL."
            t "Next time, tell me before you throw an Aesop at me, okay?"
            hide screen therapyverdict
            $ renpy.clear_retain();
            pause 1
            show therapytenna contemplative onlayer sprite
        "I watched it with my eyes.":
            play sound "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound ["<silence .5>", "audio/sfx/general/snd_firework_send.wav"]
            ## Tenna is visibly uncomfortable with this reaction]{/b}"
            show therapytenna sad onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.0 yzoom 1.0
                ease 2 xzoom 1.05 yzoom 0.95
            pause 2
            t "But you don't HAVE eyes."
            t "Did you like it or not?"
            $ renpy.clear_retain()
            pause 1
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 zpos 0 xpos 0 ypos 0
            pause 2.5
            play sound ["<silence .5>", "audio/sfx/general/snd_hurt1.wav"]
            show therapytenna blank onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.05 yzoom 0.95
                ease 2 xzoom 1.1 yzoom 0.9
            t "You know what?"
            t "My head hurts."
            t "I'm moving on."
            hide screen therapyverdict
            $ renpy.clear_retain();
    pause 3
    $questions -= 1
    $ topics.remove("q3")
    jump quiz

label q4:
    show therapytenna contemplative onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    t "Mike?"
    $ renpy.clear_retain();
    pause 1
    play sound ["<silence 1>", "audio/sfx/general/snd_hurt1.wav"]
    show therapytenna contemplative onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.75,1.0) pos(0.75, 1.0)
        xzoom 1.0 yzoom 1.0
        ease 2 xzoom 1.05 yzoom 0.95
    pause 2
    show therapytenna worried onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.75,1.0) pos(0.75, 1.0)
        xzoom 1.05 yzoom 0.95
    t "Our latest ratings aren't looking too good…"
    $ renpy.clear_retain();
    pause 1
    show therapytenna sad onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.75,1.0) pos(0.75, 1.0)
    t "What do I do about everyone's salaries?"
    t "I can't pay what I owe…"
    $ renpy.clear_retain();
    $ importanttext_size = 25
    show screen importanttext("How should Tenna handle everyone's salaries?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "{size=-8}They won't notice if you skip a check or two!":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            $therapy_score += 2
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_wing.wav"
            show therapytenna thinking onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.05 yzoom 0.95
                easein_elastic 0.5 xzoom 1.0 yzoom 1.0
            pause 0.5
            t "You know what, true!"
            $ renpy.clear_retain();
            pause 0.5
            t "I mean, I DID just slash their wages for gambling on-set…"
            show therapytenna nervous onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                block:
                    ease 1 rotate 1
                    ease 1 rotate -1
                    repeat
            $ renpy.clear_retain();
            t "What's, heh…"
            t "What's the harm in another paycut?"
            hide screen therapyverdict
            $ renpy.clear_retain();
        "{size=-8}Might need to be honest with them, boss…":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
# ###  "{b}     [Tenna visibly sighs]{/b}"
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            $therapy_score += 1
            $ renpy.clear_retain();
            camera bg:
                perspective True
                xpos 0 ypos 0 zpos 0
                ease 2 zpos -200 xpos 100 ypos -100

            camera sprite:
                perspective True
                xpos 0 ypos 0 zpos 0
                ease 2 zpos -200 xpos 100 ypos -100
            pause 2
            play sound ["<silence .5>", "audio/sfx/general/snd_firework_send.wav"]
            show therapytenna sad onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.05 yzoom 0.95
                easein 0.5 xzoom 0.95 yzoom 1.05
                easein 2 xzoom 1.1 yzoom 0.9
                block:
                    ease 2 rotate 1
                    ease 2 rotate -1
                    repeat
            pause 3
            t "But Mike, I HAVE been."
            $ renpy.clear_retain();
            pause 1.5
            show therapytenna contemplative onlayer sprite
            t "F-forced overtime doesn't count?" 
            t "Really?"   
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
                easeout 0.5 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
                easeout 0.5 zpos 0 xpos 0 ypos 0
            play sound "audio/sfx/general/snd_wing.wav"
            show therapytenna pleased onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.05 yzoom 0.95
                easein_elastic 1 xzoom 1.0 yzoom 1.0   
            pause 1
            t "Well… maybe I should host a pizza party as well!"  
            show therapytenna nervous onlayer sprite
            t "They like pepperoni, right?"
            show therapytenna contemplative onlayer sprite
            hide screen therapyverdict
            $ renpy.clear_retain();
        "{size=-8}You're loaded! Take POINTS out from your own savings.":
            play sound "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_impact.wav"
            camera bg:
                perspective True
                parallel:
                    zpos -200 xpos 100 ypos -100
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0

            camera sprite:
                perspective True
                parallel:
                    zpos -200 xpos 100 ypos -100
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0
            show therapytenna upset onlayer sprite:
                anchor (0.75,1.0) pos(0.75, 1.0)
            ## Tenna is visibly uncomfortable with this reaction]{/b}"
            t "{size=+8}NO!!"
            t "{size=+8}Anything but THAT!!"
            $ renpy.clear_retain();
            play sound ["<silence 0.5>", "audio/sfx/general/snd_hurt1.wav"]
            show therapytenna sad onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.05 yzoom 0.95
                easein 1 xzoom 1.1 yzoom 0.9
                block:
                    ease 2 rotate 1
                    ease 2 rotate -1
                    repeat
            pause 1
            t "I need that money just as much as they do!"
            t "For, uhm…"
            $ renpy.clear_retain();
            show therapytenna blank onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                block:
                    ease 1 rotate 3
                    ease 1 rotate -3
                    repeat
            pause 1
            t "…cleaning my suits!!"
            t "And…"
            show therapytenna annoyed onlayer sprite
            t "And… maintaining my wood-panelled cars!!"
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_impact.wav"
            camera bg:
                perspective True
                parallel:
                    zpos -250 xpos 125 ypos -125
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0

            camera sprite:
                perspective True
                parallel:
                    zpos -250 xpos 125 ypos -125
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0
            show therapytenna angry onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                block:
                    ease 0.5 rotate 5
                    ease 0.5 rotate -5
                    repeat
            pause 0.5
            t "How would I survive without that cash, huh?"
            t "{size=+8}Huh??"
            hide screen therapyverdict
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -250 xpos 125 ypos -125
                ease 1 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -250 xpos 125 ypos -125
                ease 1 zpos 0 xpos 0 ypos 0
            pause 2
            show therapytenna annoyed onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                block:
                    ease 2 rotate 2
                    ease 2 rotate -2
                    repeat
            $ renpy.clear_retain();
    pause 3
    $questions -= 1
    $ topics.remove("q4")
    jump quiz

label q5:
    show therapytenna contemplative onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    t "So, Mike."
    t "HYPOTHETICALLY speaking…"
    $ renpy.clear_retain();
    camera bg:
        perspective True
        xpos 0 ypos 0 zpos 0
        ease 2 zpos -200 xpos 100 ypos -100

    camera sprite:
        perspective True
        xpos 0 ypos 0 zpos 0
        ease 2 zpos -200 xpos 100 ypos -100
    pause 2.5
    t "Let's say you were in a room that only has a TV."
    t "And to get OUT of the room, you'd need to…"
    pause 0.5
    t "…smooch it."
    $ renpy.clear_retain();
    pause 1
    play sound "audio/sfx/general/snd_squeaky.wav"
    show therapytenna blush onlayer sprite:
      anchor (0.75,1.0) pos(0.75, 1.0)  xzoom 1.0 yzoom 1.0
    pause 0.5

    t "{size=-4}…Would you?"
    $ renpy.clear_retain();
    $ importanttext_size = 40
    show screen importanttext("Would you smooch a TV?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "HELL YEAH":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            $therapy_score += 2
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            # [Tenna blushes furiously]
            play sound "audio/sfx/general/snd_squeaky.wav"
            show therapytenna flush at squish onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)

            pause 1
            show therapytenna blush onlayer sprite
            pause 0.5
            t "R-really?"
            $ renpy.clear_retain();
            pause 1
            show therapytenna blush onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                block:
                    ease 1 rotate 2 
                    ease 1 rotate -2
                    repeat
            t "Ah, heh!"
            t "Heh heh!"
            t "Hee hee hee!{size=-1}♡"
            show therapytenna pleased onlayer sprite:
                subpixel True
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                parallel:
                    block:
                        ease 1 rotate 5
                        ease 1 rotate -5
                        repeat
                parallel:
                        ease_quad  2 xzoom 0.98 yzoom 1.02
                        ease_quad 2 xzoom 1.0 yzoom 1.0
                        repeat
            t "Good to…"
            t "…good to know!"
            hide screen therapyverdict
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 xpos 0 ypos 0 zpos 0

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 xpos 0 ypos 0 zpos 0
            pause 2.5
        "I mean, I guess?":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
            $therapy_score += 1
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            t "…"
            $ renpy.clear_retain();
            play sound ["<silence 0.25>", "audio/sfx/general/snd_firework_send.wav"]
            show therapytenna blank onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.0 yzoom 1.0
                ease 2 xzoom 1.1 yzoom 0.9
            pause 2
            t "I thought you'd be a little more enthusiatic, but…"
            $ renpy.clear_retain();
            pause 1
            play sound "audio/sfx/general/snd_wing.wav"
            show therapytenna contemplative onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                xzoom 1.1 yzoom 0.9
                ease 2 xzoom 1.0 yzoom 1.0
            pause 2
            t "Maybe it's 'cause you're tired."
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 xpos 0 ypos 0 zpos 0

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 xpos 0 ypos 0 zpos 0
            pause 2.5
            t "Yeah."
            t "Tired."
            hide screen therapyverdict
            $ renpy.clear_retain();
        "…What?":
            play sound "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_bump.wav"
            show therapytenna annoyed onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) rotate 1
                block:
                    ease 0.5 rotate -1
                    ease 0.5 rotate 1
                    repeat
            pause 0.5
            t "It's MY therapy session, Mike!"
            t "I can ask WHATEVER I want!!"
            $ renpy.clear_retain();
            pause 1
            camera bg:
                parallel:
                    yoffset 0
                    ease 2 yoffset 150
                parallel:
                    ease 0.5 xoffset 10
                    ease 0.5 xoffset 0
                    repeat 2

            camera sprite:
                parallel:
                    yoffset 0
                    ease 2 yoffset 150
                parallel:
                    ease 0.5 xoffset 10
                    ease 0.5 xoffset 0
                    repeat 2
            pause 2.5
            play sound "audio/sfx/general/snd_bump.wav"
            show therapytenna upset at squish onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
            pause 0.5
            t "Oh, no, don't give me THAT look again!"
            play sound "audio/sfx/general/snd_hurt1.wav"
            show therapytenna sad onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
                ease 2 xzoom 1.05 yzoom 0.95
            t "I hate it when you look like a deflated balloon…"
            $ renpy.clear_retain();
            pause 1
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100 xoffset 0 yoffset 150
                ease 2 xpos 0 ypos 0 zpos 0 xoffset 0 yoffset 0

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100 xoffset 0 yoffset 150
                ease 2 xpos 0 ypos 0 zpos 0 xoffset 0 yoffset 0
            pause 2.5
            play sound ["<silence 0.5>", "audio/sfx/general/snd_firework_send.wav"]
            show therapytenna blank onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.05 yzoom 0.95
                ease 2 xzoom 1.1 yzoom 0.9
            pause 2
            t "Ugh, fine."
            t "Forget I asked in the first place."
            hide screen therapyverdict
            $ renpy.clear_retain();
    pause 3
    $questions -= 1
    $ topics.remove("q5")
    jump quiz


label q6:
    show therapytenna annoyed onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0

    t "Mike, did you hear about what happened on the Western Set?"
    t "My employees were BETTING ON HORSES behind my back!"
    $ renpy.clear_retain();
    play sound "audio/sfx/general/snd_bump.wav"
    show therapytenna angry onlayer sprite:
        transform_anchor True
        subpixel True
        anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0 rotate 1
        block:
            ease 0.1 rotate -0.2
            ease 0.1 rotate 0.2
            repeat
    pause 0.5
    t "They were SUPPOSED to stay in their cubicles until SHOWTIME."
    t "How can I get them back in line?"
    $ renpy.clear_retain();
    $ importanttext_size = 25
    show screen importanttext("How would you deal with these employees?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "{size=-8}Lock them in the office during work hours.":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            $therapy_score += 2
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            camera bg:
                perspective True
                zpos 0
                ease 1 zpos -100 xpos 50 ypos -50

            camera sprite:
                perspective True
                zpos 0
                ease 1 zpos -100 xpos 50 ypos -50
            play sound "audio/sfx/general/snd_noise.wav"
            show therapytenna thinking onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5
            t "You GENIUS."
            t "Why didn't I think of that earlier?"
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_squeaky.wav"
            show therapytenna teasing at squish onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5
            t "They can't misbehave if they're stuck in a cage!"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 1 xpos 0 ypos 0 zpos 0

            camera sprite:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 1 xpos 0 ypos 0 zpos 0
            pause 1
            show therapytenna thinking onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            t "All we need to do now is prevent any breakouts…"
            show therapytenna happy onlayer sprite
            t "But we'll get there when we get there."
            show therapytenna pleased onlayer sprite
            hide screen therapyverdict
            $ renpy.clear_retain();
        "Bigger paycuts?":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
            $therapy_score += 1
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_bump.wav"
            show therapytenna worried onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5
            t "I JUST docked their wages."
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos 0 xpos 0 ypos -0
                ease 2 zpos -100 xpos 50 ypos -50

            camera sprite:
                perspective True
                zpos 0 xpos 0 ypos -0
                ease 2 zpos -100 xpos 50 ypos -50
            pause 2
            show therapytenna thinking onlayer sprite
            t "But you know what?"
            t "Another round wouldn't hurt."
            $ renpy.clear_retain();
            pause 1
            play sound ["<silence .5>", "audio/sfx/general/snd_firework_send.wav"]
            show therapytenna nervous onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
                ease 2 xzoom 1.05 yzoom 0.95
            pause 2
            t "Besides, uhm…"
            t "{size=-4}The studio's budget is a li'l tight again."
            t "{size=-8}Wouldn't hurt to save another POINT or two."
            camera bg:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 2 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 2 zpos 0 xpos 0 ypos 0
            show therapytenna contemplative onlayer sprite
            hide screen therapyverdict
            $ renpy.clear_retain();
        "I dunno. This is a toughie…":
            play sound "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound ["<silence 1>", "audio/sfx/general/snd_hurt1.wav"]
            show therapytenna sad onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
                ease 2 xzoom 1.05 yzoom 0.95
            pause 2
            t "Mama mia."
            t "We're really in a pickle, aren't we?"
            $ renpy.clear_retain();
            play sound ["<silence .5>", "audio/sfx/general/snd_firework_send.wav"]
            show therapytenna blank onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.05 yzoom 0.95
                ease 2 xzoom 1.1 yzoom 0.9
            pause 2
            t "I guess I'll just… think about this later!"
            $ renpy.clear_retain();
            pause 1
            play sound "audio/sfx/general/snd_wing.wav"
            show therapytenna annoyed onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.1 yzoom 0.9
                easein_elastic 1 xzoom 1.0 yzoom 1.0
            pause 0.5
            t "But not TOO late."
            t "{size=-4}Don't want them thinking they can get away with a slap on the wrist."
            hide screen therapyverdict
            $ renpy.clear_retain();
    pause 3
    $questions -= 1
    $ topics.remove("q6")
    jump quiz

label q7:
    show therapytenna contemplative onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    camera bg:
        perspective True
        zpos 0 xpos 0 ypos -0
        ease 2 zpos -100 xpos 50 ypos -50

    camera sprite:
        perspective True
        zpos 0 xpos 0 ypos -0
        ease 2 zpos -100 xpos 50 ypos -50
    pause 2
    t "Heard anything from Cyber City lately?"
    t "Like, what's hip and happening over there?"
    $ renpy.clear_retain();
    pause 0.5
    camera bg:
        perspective True
        zpos -100 xpos 50 ypos -50
        ease 1 zpos -50 xpos 25 ypos -25

    camera sprite:
        perspective True
        zpos -100 xpos 50 ypos -50
        ease 1 zpos -50 xpos 25 ypos -25
    play sound "audio/sfx/general/snd_noise.wav"
    show therapytenna nervous at squish onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    $ renpy.clear_retain();
    pause 0.5
    t "Just…"
    t "Just thought I'd ask!"
    $ renpy.clear_retain();
    $ importanttext_size = 25
    show screen importanttext("Did you hear anything from Cyber City?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "{size=-4}I'm keeping my ears peeled for you.":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            $therapy_score += 2
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_wing.wav"
            show therapytenna pleased at squish onlayer sprite:
                ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5

            t "Aw, Mike…!"
            t "You're a real sweetheart, y'know that?"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos 0 xpos 0 ypos 0
            pause 1
            play sound "audio/sfx/general/snd_noise.wav"
            show therapytenna thinking at squish onlayer sprite:
                ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5
            t "Oh, and tell me how Queenie's doing too!"
            show therapytenna pleased onlayer sprite:
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
                parallel:
                    block:
                        ease 1 rotate 2 
                        ease 1 rotate -2
                        repeat
                parallel:
                        ease_quad 2 xzoom 0.98 yzoom 1.02
                        ease_quad 2 xzoom 1.0 yzoom 1.0
                        repeat

            t "I'd love to have her over again."
            t "She's one groovy gal!"
            hide screen therapyverdict
            $ renpy.clear_retain();
        "Have you asked Ramb?":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
            $therapy_score += 1
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_impact.wav"
            show therapytenna upset onlayer sprite:
                ease_quad 0.15 xzoom 0.95 yzoom 1.05
                ease_quad 0.15 xzoom 1.0 yzoom 1.0
            pause 0.5
            t "{size=+4}ME?"
            t "{size=+8}Ask HIM??"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos 0 xpos 0 ypos 0
            pause 1
            show therapytenna sad onlayer sprite
            t "I mean, yeah, he used to LIVE there, but…"
            t "But…!"
            $ renpy.clear_retain();
            pause 0.5
            play sound ["<silence 1>", "audio/sfx/general/snd_firework_send.wav"]
            show therapytenna blank onlayer sprite:
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
                ease_quad 0.5 xzoom 0.95 yzoom 1.05
                ease_quad 2 xzoom 1.1 yzoom 0.9
            pause 3
            t "…Fine."
            $ renpy.clear_retain();
            pause 1
            show therapytenna sad onlayer sprite:
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.1 yzoom 0.9
                block:
                    ease 2 rotate 2 
                    ease 2 rotate -2
                    repeat

            t "But YOU'RE doing the talking."
            t "That guy gives me the heebie-jeebies…"
            hide screen therapyverdict
            $ renpy.clear_retain();
        "No. Why?":
            play sound "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_bump.wav"
            show therapytenna thinking at squish onlayer sprite:
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5
            t "Oh, no big reason!"
            t "I just…"
            t "…I haven't been in a while, y'know?"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos -100 xpos 50 ypos -50

            camera sprite:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos -100 xpos 50 ypos -50
            pause 2
            show therapytenna contemplative onlayer sprite
            t "Wonderful place, Cyber City."
            $ renpy.clear_retain();
            pause 0.5
            t "The fireworks…"
            t "…the music…"
            show therapytenna blank onlayer sprite
            t "{size=-4}…the Ferris Wheel."
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 2 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 2 zpos 0 xpos 0 ypos 0
            pause 3
            t "{size=-4}How could I forget the Ferris Wheel…?"
            hide screen therapyverdict
            $ renpy.clear_retain();
            pause 2
    pause 3
    $questions -= 1
    $ topics.remove("q7")
    jump quiz

label q8:
    show therapytenna contemplative onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    t "Y'know, Asriel doesn't play with me as much as he used to."
    t "He's always looking at one of those… tiny screens."
    $ renpy.clear_retain();
    pause 1
    play sound ["<silence 1>", "audio/sfx/general/snd_firework_send.wav"]
    show therapytenna sad onlayer sprite:
        transform_anchor True anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
        ease_quad 0.5 xzoom 0.95 yzoom 1.05
        ease_quad 2 xzoom 1.1 yzoom 0.9
    pause 3
    t "How can I make him smile again?"
    $ renpy.clear_retain();
    $ importanttext_size = 25
    show screen importanttext("How can Tenna make Asriel smile again?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "{size=-8}How about a Super Smashing Fighters tournament?":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            $therapy_score += 2
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_noise.wav"
            show therapytenna thinking at squish onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
            pause 0.5
            t "Wha-?"
            $ renpy.clear_retain();
            pause 0.5
            play sound "audio/sfx/general/snd_wing.wav"
            show therapytenna happy onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
                ease_quad  0.2 xzoom 0.98 yzoom 1.02
                ease_quad 0.2 xzoom 1.0 yzoom 1.0
            pause 0.5
            t "That's a GREAT idea!!"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos 0 xpos 0 ypos 0
                ease 1 zpos -50 xpos 25 ypos -25

            camera sprite:
                perspective True
                zpos 0 xpos 0 ypos 0
                ease 1 zpos -50 xpos 25 ypos -25
            pause 1
            play sound "audio/sfx/general/snd_squeaky.wav"
            show therapytenna teasing at squish onlayer sprite
            pause 0.5
            t "I can see it now."
            t "A brutal SMACKDOWN between him, Kris, Noelle AND December…"
            $ renpy.clear_retain();
            show therapytenna pleased onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                parallel:
                    block:
                        ease 1 rotate 2 
                        ease 1 rotate -2
                        repeat
                parallel:
                        ease_quad 2 xzoom 0.98 yzoom 1.02
                        ease_quad 2 xzoom 1.0 yzoom 1.0
                        repeat
            pause 0.5
            t "…And the winner gets the LARGEST slice of butterscotch-cinnamon pie!"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos 0 xpos 0 ypos 0
            pause 1
            show therapytenna pleased onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                parallel:
                    block:
                        ease 0.5 rotate 2 
                        ease 0.5 rotate -2
                        repeat
                parallel:
                        ease_quad 1 xzoom 0.98 yzoom 1.02
                        ease_quad 1 xzoom 1.0 yzoom 1.0
                        repeat
            t "Oh, Mike, we HAVE to make this happen!"
            t "It's picture-perfect!!"
            hide screen therapyverdict
            $ renpy.clear_retain();
        "{size=-8}Why not play his favorite cartoons?":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
            $therapy_score += 1
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_noise.wav"
            show therapytenna thinking at squish onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0)
            pause 0.5
            t "You think that'd work?"
            $ renpy.clear_retain();
            pause 0.5
            show therapytenna contemplative onlayer sprite
            t "I mean, he doesn't watch m-"
            show therapytenna worried onlayer sprite
            t "{i}TV,{/i} when Kris puts them on…"
            $ renpy.clear_retain();
            pause 1
            show therapytenna contemplative onlayer sprite
            t "Maybe I'm picking the wrong shows."
            $ renpy.clear_retain();
            pause 1
            play sound "audio/sfx/general/snd_wing.wav"
            show therapytenna thinking onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                ease_quad  0.2 xzoom 0.98 yzoom 1.02
                ease_quad 0.2 xzoom 1.0 yzoom 1.0

            pause 0.5
            t "Y'know what?"
            t "Lemme warm up the ol' circuits and get back to you on that, okay?"
            show therapytenna contemplative onlayer sprite
            hide screen therapyverdict
            $ renpy.clear_retain();
        "{size=-8}Kids these days… Always on their phones.":
            play sound "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound ["<silence 1.5>", "audio/sfx/general/snd_hurt1.wav"]
            show therapytenna sad onlayer sprite:
                transform_anchor True anchor (0.75,1.0) pos(0.75, 1.0)
                ease_quad 0.5 xzoom 1.1 yzoom 0.9
                ease_quad 2 xzoom 1.2 yzoom 0.8
                parallel:
                    block:
                        ease 2 rotate 2 
                        ease 2 rotate -2
                        repeat
                parallel:
                    block:
                        ease 4 xzoom 1.15 yzoom 0.85
                        ease 4 xzoom 1.2 yzoom 0.8
                        repeat
            pause 3
            t "Oh, Asriel…"
            t "Your poor, poor eyes."
            t "If you keep squinting at that awful little slab, you're gonna need glasses!"
            hide screen therapyverdict
            $ renpy.clear_retain();
    pause 3
    $questions -= 1
    $ topics.remove("q8")
    jump quiz

label q9:
    show therapytenna contemplative onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    t "Mike…?"
    t "I'm thinking about that room again."
    $ renpy.clear_retain();
    camera bg:
        perspective True
        zpos 0 xpos 0 ypos 0
        ease 1 zpos -50 xpos 25 ypos -25

    camera sprite:
        perspective True
        zpos 0 xpos 0 ypos 0
        ease 1 zpos -50 xpos 25 ypos -25
    pause 1
    play sound "audio/sfx/general/snd_bump.wav"
    show therapytenna nervous at squish onlayer sprite
    pause 0.5
    t "Y-y'know!"
    t "THAT one?"
    t "In the Green Room?"
    $ renpy.clear_retain();
    pause 1
    show therapytenna nervous onlayer sprite:
        transform_anchor True subpixel True anchor (0.75,1.0) pos(0.75, 1.0)
        block:
            ease 2 rotate 2 
            ease 2 rotate -2
            repeat
    t "A little peek wouldn't hurt NOW, right?"
    show therapytenna contemplative onlayer sprite
    t "I mean, it's been a few years since…"
    $ renpy.clear_retain();
    $ importanttext_size = 25
    show screen importanttext("Should Tenna enter the Z-Rank room?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "{size=-8}I'll make your favorite lemonade if you don't visit it.":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            $therapy_score += 2
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_impact.wav"
            play audio "audio/sfx/general/snd_squeaky.wav"
            camera bg:
                perspective True
                parallel:
                    zpos -200 xpos 100 ypos -100
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0

            camera sprite:
                perspective True
                parallel:
                    zpos -200 xpos 100 ypos -100
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0
            show therapytenna happy onlayer sprite:
                transform_anchor True
                ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0

            t "REALLY?"
            $ renpy.clear_retain();
            pause 1
            show therapytenna blush onlayer sprite:
                block:
                    ease 2 rotate 2 
                    ease 2 rotate -2
                    repeat
            t "And you'll make it exactly the way I like it…?"
            t "With malt…?"
            $ renpy.clear_retain();
            pause 1
            camera bg:
                perspective True
                ease 0.5 yoffset 10
                ease 0.5 yoffset 0
                repeat 3
            camera sprite:
                perspective True
                ease 0.5 yoffset 10
                ease 0.5 yoffset 0
                repeat 3
            pause 4
            ## You nod uncertainly. This can't taste good.
            show therapytenna pleased onlayer sprite
            t "Then IGNORE what I just said!"
            t "I'll be on my best behavior, I swear!!"
            hide screen therapyverdict
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100 yoffset 0
                ease 2 zpos 0 xpos 0 ypos 0 yoffset 0
            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100 yoffset 0
                ease 2 zpos 0 xpos 0 ypos 0 yoffset 0
            pause 3
            $ renpy.clear_retain();
        "{size=-4}We're NOT doing this again.":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
            $therapy_score += 1
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_hurt1.wav"
            show therapytenna upset at squish onlayer sprite:
                transform_anchor True
                ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5

            t "{size=+8}Why?!"
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_impact.wav"
            camera bg:
                perspective True
                zpos -100 xpos 50 ypos -50
            camera sprite:
                perspective True
                zpos -100 xpos 50 ypos -50
            pause 0.5
            t "Don't you trust me?"
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_impact.wav"
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
            pause 0.5
            t "Your ol' pal??"
            $ renpy.clear_retain();
            pause 1
            ## You shake your head.
            show therapytenna annoyed onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0 
                rotate 0.5
                block:
                    ease 0.5 rotate -0.5
                    ease 0.5 rotate 0.5
                    repeat


            t "You…!"
            show therapytenna angry onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0 
                rotate 1
                block:
                    ease 0.2 rotate -1
                    ease 0.2 rotate 1
                    repeat

            t "{size=+8}You're…!!"
            $ renpy.clear_retain();
            play sound "audio/sfx/general/snd_bump.wav"
            camera bg:
                perspective True
                zpos 0 xpos 0 ypos 0
            camera sprite:
                perspective True
                zpos 0 xpos 0 ypos 0
            show therapytenna contemplative onlayer sprite:
                transform_anchor True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0 
            pause 1
            t "{size=-4}You're right, that would've been bad."
            t "{size=-4}Thanks for stepping in."
            hide screen therapyverdict
            $ renpy.clear_retain();
        "Eh, what's the harm?":
            play sound "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_won.wav"
            show therapytenna pleased onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                parallel:
                    block:
                        ease 0.5 rotate 2 
                        ease 0.5 rotate -2
                        repeat
                parallel:
                        ease_quad 1 xzoom 0.98 yzoom 1.02
                        ease_quad 1 xzoom 1.0 yzoom 1.0
                        repeat
            pause 1
            t "{size=+8}YIPPEE!"
            t "Can't see THIS going wrong, haha!!"
            hide screen therapyverdict
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -50 xpos 25 ypos -25
                ease 1 zpos 0 xpos 0 ypos 0
            pause 1
    pause 3
    $questions -= 1
    $topics.remove("q9")
    jump quiz

label q10:
    show therapytenna contemplative onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    t "Mike, could you look at my screen for a sec?"
    $ renpy.clear_retain();
    camera bg:
        perspective True
        zpos 0 xpos 0 ypos 0
        ease 1 zpos -100 xpos 50 ypos -50

    camera sprite:
        perspective True
        zpos 0 xpos 0 ypos 0
        ease 1 zpos -100 xpos 50 ypos -50
    pause 1.5
    t "Be honest."
    play sound "audio/sfx/general/snd_bump.wav"
    show therapytenna worried at squish onlayer sprite:
        transform_anchor True
        ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
    pause 0.5
    t "Does ANYTHING look funny to you?"
    hide screen therapyverdict
    $ renpy.clear_retain();
    $ importanttext_size = 40
    show screen importanttext("Does Tenna's screen look funny?", tennaver=True) with dissolve
    pause 1
    show choice_vignette onlayer sprite with vignette
    menu:
        "{size=-4}How about I get a li'l closer?":
            play sound "audio/sfx/general/snd_board_shine_get.wav" volume 0.3
            show screen therapyverdict("good") 
            $therapy_score += 2
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            camera bg:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 2 zpos -200 xpos 100 ypos -100

            camera sprite:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 2 zpos -200 xpos 100 ypos -100
            pause 1.9
            ## You move closer to the camera
            play sound "audio/sfx/general/snd_squeaky.wav"
            show therapytenna flush at squish onlayer sprite:
                transform_anchor True
                ease_quad  0.1 xzoom 0.98 yzoom 1.02
                ease_quad 0.1 xzoom 1.0 yzoom 1.0
            pause 0.5
            t "{size=+4}Oh!"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 0.5 zpos -190 xpos 90 ypos -90

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 0.5 zpos -190 xpos 90 ypos -90
            play sound "audio/sfx/general/snd_wing.wav"
            show therapytenna blush at squish onlayer sprite:
                transform_anchor True
                ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5
            t "You TEASE, you~{size=-1}♡"
            ## The camera moves back
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -190 xpos 90 ypos -90
                ease 2 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -190 xpos 90 ypos -90
                ease 2 zpos 0 xpos 0 ypos 0
            pause 2
            play sound "audio/sfx/general/snd_squeaky.wav"
            show therapytenna happy at squish onlayer sprite:
                transform_anchor True
                ease 1 anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.25
            t "Well, I guess THAT answers THAT!"
            show therapytenna pleased onlayer sprite:
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
                parallel:
                    block:
                        ease 1 rotate 2 
                        ease 1 rotate -2
                        repeat
                parallel:
                        ease_quad 2 xzoom 0.98 yzoom 1.02
                        ease_quad 2 xzoom 1.0 yzoom 1.0
                        repeat
            t "If YOU like what you see…"
            t "…how could I not be A-OK?"
            hide screen therapyverdict
            $ renpy.clear_retain();
        "Nothing seems off.":
            play sound "audio/sfx/general/snd_bell.wav" volume 0.3
            show screen therapyverdict("ok") 
            $therapy_score += 1
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            play sound "audio/sfx/general/snd_bump.wav"
            show therapytenna thinking at squish onlayer sprite:
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5
            t "Really?"
            show therapytenna worried onlayer sprite
            t "I SWEAR I saw a little burn-in in the mirror…"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 2 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -100 xpos 50 ypos -50
                ease 2 zpos 0 xpos 0 ypos 0
            pause 3
            show therapytenna contemplative onlayer sprite
            t "But if YOU don't see anything…"
            play sound "audio/sfx/general/snd_noise.wav"
            show therapytenna nervous at squish onlayer sprite:
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
            pause 0.5
            t "…I guess I'll have to trust ya."
            hide screen therapyverdict
            show therapytenna contemplative onlayer sprite
            $ renpy.clear_retain();
        "(Say nothing.)":
            play sound "audio/sfx/general/snd_buzzerwrong.wav" volume 0.3
            show screen therapyverdict("bad") 
            hide screen importanttext
            hide choice_vignette onlayer sprite
            with dissolve
            pause 0.5
            show therapytenna contemplative onlayer sprite
            t "{size=-4}That bad, huh."
            $ renpy.clear_retain();
            pause 0.5
            play sound "audio/sfx/general/snd_impact.wav"
            show therapytenna upset onlayer sprite
            camera bg:
                perspective True
                parallel:
                    zpos -200 xpos 100 ypos -100
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0

            camera sprite:
                perspective True
                parallel:
                    zpos -200 xpos 100 ypos -100
                parallel:
                    ease 0.05 yoffset 10
                    ease 0.05 yoffset -10
                    ease 0.05 yoffset 5
                    ease 0.05 yoffset -5
                    ease 0.05 yoffset 0
            pause 0.5
            t "{size=+8}Wait, THAT BAD??"
            t "A-and right before a new episode, too?"
            $ renpy.clear_retain();
            play sound ["<silence .5>", "audio/sfx/general/snd_firework_send.wav"]
            show therapytenna blank onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0) xzoom 1.0 yzoom 1.0
                ease 2 xzoom 1.1 yzoom 0.9
            pause 1
            t "Oh, god…"
            $ renpy.clear_retain();
            camera bg:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 zpos 0 xpos 0 ypos 0

            camera sprite:
                perspective True
                zpos -200 xpos 100 ypos -100
                ease 2 zpos 0 xpos 0 ypos 0
            pause 3
            play sound ["<silence 1>", "audio/sfx/general/snd_hurt1.wav"]
            show therapytenna blank onlayer sprite:
                transform_anchor True
                subpixel True
                anchor (0.75,1.0) pos(0.75, 1.0)
                parallel:
                    block:
                        ease 4 rotate 2 
                        ease 4 rotate -2
                        repeat
                parallel:
                        ease_quad 2 xzoom 1.15 yzoom 0.85
                        ease_quad 2 xzoom 1.1 yzoom 0.9
                        repeat
            t "{size=-4}Mike… could ya do me a favor?"
            t "{size=-8}Bring me my make-up kit before we go on-set tonight."
            hide screen therapyverdict
            $ renpy.clear_retain();
    pause 3
    $questions -= 1
    $topics.remove("q10")
    jump quiz



