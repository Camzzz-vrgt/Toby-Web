##### MUSIC CHANNEL DEFS

init python:
    renpy.music.register_channel("background", "music")
    renpy.music.register_channel("background2", "music")


##### OUTLINE DEFINES

image small_outline = Window(Transform(Placeholder(), crop=(0.0, 0.08, 1.0, 0.4)), style='empty', pbdding=(25, 25))


##### FULL TRANSITIONS

define flashon = Fade(0.1, 3, 1, color="#fff")


##### TRANSFORMS

## for positions (specifically for tenna bc he's HUGE)
transform tenna_center:
    pos (0.5, -0.15)
transform tenna_offscreenright:
    pos (1.0, -0.15)

transform silhouette:
    matrixcolor BrightnessMatrix(-1.0)
transform nosilhouette:
    matrixcolor BrightnessMatrix(0.0)

### for black and white
## transform to greyscale
transform greyout:
    matrixcolor SaturationMatrix(0.0)
## resaturate
transform fullsat:
    matrixcolor SaturationMatrix(1.0)
## for movement

    

transform flipout:
    xzoom 1.0
    easein 0.1 xzoom 0.0
transform flipin:
    xzoom 0.0
    easein 0.1 xzoom 1.0

transform small_bounce:
    yoffset 0
    ease 0.1 yoffset -10
    ease 0.1 yoffset 0




label gameintro:

    $ quick_menu = True  
    with dissolve
    #show testimage at center with MoveTransition(1.5, enter= offscreenright, enter_time_warp=_warper.easein_bounce)
    #show sprite_animtest with MoveTransition(1.5, enter= top, enter_time_warp=_warper.easein_quart):
    #    zoom 0.5

    #scene green



    #"hey watch this "

    #show tenna:
    #    tenna_offscreenright
    #    easein 1 tenna_center
    #hide tenna at flipout, tenna_center
    #show tenna jammies at flipin, tenna_center
    #t "hey can i speak now"
    #q "no"


    ##### ACTUAL GAME BEGINS HERE 
    #### "{b}[The scene is dark. There’s the sound of rustling and thudding. Someone (you) appears to have been kidnapped!]{/b}"
    play sound "audio/sfx/general/snd_impact_short.ogg"
    queue sound "audio/sfx/general/snd_impact_short.ogg"
    queue sound "audio/sfx/general/snd_impact.wav"
    pause 1
    q "{size=+4}Alright, {size=+8}ALRIGHT!"
    q "Quit makin’ a racket already!!"
    $ renpy.clear_retain();
    pause 0.5
    play sound "audio/sfx/general/snd_punch_ish_1.wav"
    ## more rustling and thudding
    pause 0.5
    q "{size=+8}Hey, RUBBER\n BRAIN!!!"
    q "Hold ‘em while I yank the bag off."
    q "Okie-dokie."
    $ renpy.clear_retain();
    scene black
    play sound "audio/sfx/general/snd_wideslash_low.wav"
    show dice_tile onlayer pattern
    with flashon
    pause 0.75
    show mikeroom at bgshow onlayer bg
    play sound ["<silence .1>","audio/sfx/general/snd_ftext_woodblock.wav"]
    pause 1
    camera sprite at silhouette
    show chair onlayer sprite
    show grippins frontsmirk onlayer sprite

    show desk onlayer sprite
    show pluey normal onlayer sprite
    with dissolve 

    pause 1
    play sound "audio/sfx/general/snd_noise.wav"
    camera sprite at nosilhouette
    show grippins frontsmirk onlayer sprite at nosilhouette
    show desk onlayer sprite at nosilhouette
    show pluey normal onlayer sprite at nosilhouette
    show chair onlayer sprite at nosilhouette

    pause 2

    play music "audio/music/vol_adj_intro.ogg" fadein 1.0 
    $ renpy.music.queue("audio/music/vol_adj_body.ogg", clear_queue=False)
    ### "{b}[The bag is yanked off of your head, and a bright light shines. When the light dies down, you find yourself face-to-face with Mippins, who’s staring at you, Cat Mike on his lap, and Mike costume folded neatly on his desk. Think Dr. Evil or Dr. No. He has his conspiracy board behind him.]{/b}"

    g "Bet you’re wondering why you’re here."
    $ renpy.clear_retain();
    camera sprite:
        perspective True
        xpos 0
        linear 0.2 xpos 10
        linear 0.2 xpos 0
        linear 0.2 xpos -10
        linear 0.2 xpos 0
        linear 0.2 xpos 10
        linear 0.2 xpos 0
    camera bg:
        perspective True
        xpos 0
        linear 0.2 xpos 10
        linear 0.2 xpos 0
        linear 0.2 xpos -10
        linear 0.2 xpos 0
        linear 0.2 xpos 10
        linear 0.2 xpos 0
    camera pattern:
        perspective True
        xpos 0
        linear 0.2 xpos 10
        linear 0.2 xpos 0
        linear 0.2 xpos -10
        linear 0.2 xpos 0
        linear 0.2 xpos 10
        linear 0.2 xpos 0

    pause 1.2
    camera sprite:
        perspective True
        xpos 0
    camera bg:
        perspective True
        xpos 0

    camera pattern:
        perspective True
        xpos 0

    play sound "audio/sfx/general/snd_bump.wav"
    show grippins shocked onlayer sprite at small_bounce

    pause 1

    show grippins explain annoyed onlayer sprite
    show pluey annoyed onlayer sprite
    ### "{b}[The camera shakes. No, you don’t have any idea.]{/b}"

    g "Don’t give me that!"

    g "You SNUCK into Mike’s room, remember?"

    $ renpy.clear_retain();

    camera sprite:
        perspective True
        linear 0.075 xpos 10
        linear 0.075 xpos 0
        linear 0.075 xpos -10
        linear 0.075 xpos 0
        repeat 2
    camera bg:
        perspective True
        linear 0.075 xpos 10
        linear 0.075 xpos 0
        linear 0.075 xpos -10
        linear 0.075 xpos 0
        repeat 2
    camera pattern:
        perspective True
        linear 0.075 xpos 10
        linear 0.075 xpos 0
        linear 0.075 xpos -10
        linear 0.075 xpos 0
        repeat 2

    show grippins shocked onlayer sprite
    pause 1.5
    camera sprite:
        perspective True
        xpos 0
    camera bg:
        perspective True
        xpos 0

    camera pattern:
        perspective True
        xpos 0
    play sound ["silence=0.1>","audio/sfx/general/snd_wing.wav"]
    #"{b}[The camera shakes more vigorously. Grippins looks uncomfortable. They might’ve made a mistake.{/b}"
    #"{b}A saxophone lick plays. Cat Mike (who’s lying on  isn’t happy with this situation either — but only because you’re trapped.]{/b}"
    show zapper normal onlayer sprite:
        yoffset -200
        ease 0.5 yoffset 200
    pause 0.5
    show zapper normal onlayer sprite:
        yoffset 200
    z "Ya think we got the wrong Pippins?"
    show grippins explain onlayer sprite
    g "Lemme ask one last question."
    show grippins explain annoyed onlayer sprite
    g "If they blow it, we’ll toss ‘em and find the REAL culprit."
    $ renpy.clear_retain();
    play sound ["silence=0.2>","audio/sfx/general/snd_smallswing.wav"]
    show zapper normal onlayer sprite:
        yoffset 200
        ease 0.5 yoffset -200

    pause 0.5
    hide zapper onlayer sprite

    pause 0.5

    label mike_q1:
        $ quick_menu = True  
        scene black
        show dice_tile onlayer pattern
        show mikeroom onlayer bg:
            subpixel True
            zoom 0.5
            crop (0, 0.0, 1.0, 1.0)

        show chair onlayer sprite
        show grippins explain annoyed onlayer sprite
        show desk onlayer sprite
        show pluey normal onlayer sprite

        camera sprite:
            zpos 0 ypos 0
            ease 2 zpos -300 ypos -50
        camera bg:
            zpos 0 ypos 0
            ease 2 zpos -300 ypos -50
        camera pattern:
            zpos 0 ypos 0
            ease 2 zpos -300 ypos -50

        pause 2
        camera sprite:
            zpos -300 ypos -50
        camera bg:
            zpos -300 ypos -50
        camera pattern:
            zpos -300 ypos -50
    ##### [The camera zooms in, highlighting Mippin’s intense expression.]{/b}"


        g "The password."
        g "{size=+8}SAY IT."
    ##### password entered here

        show screen say("","") with easeinbottom

        pause 0.1

        window show

        # $ mikepassword = renpy.input("What's the Mike Room password?", default="0000", allow = "0123456789", length = 4).strip()
        $ correct_password = "6453"
        $ mikepassword = universal_input("What's the Mike Room password?", length=4, allow='1234567890', default="0000").strip()


        if mikepassword == correct_password:
            $ window_show_transition = None
            $ window_hide_transition = None      
            jump gameintro_cont
        else:
            jump intro_gameover
            $ window_show_transition = None
            $ window_hide_transition = None  

    label intro_gameover: 
        $ renpy.clear_retain();
        stop music
        play sound "audio/sfx/general/snd_hurt1.wav"
        show layer sprite at greyout
        show layer bg at greyout
        show layer pattern at greyout
        hide screen say
        pause 2
        play sound ["<silence 0.5>", "audio/sfx/general/snd_firework_send.wav"]
        camera sprite:
            zpos -300 ypos -50
            ease 1 zpos 0 ypos 0
        camera bg:
            zpos -300 ypos -50
            ease 1 zpos 0 ypos 0
        camera pattern:
            zpos -300 ypos -50
            ease 1 zpos 0 ypos 0
        show layer sprite at fullsat
        show layer bg at fullsat
        show layer pattern at fullsat
        ## "{u}{b}If password is incorrect{/b}{/u}" ""
        show grippins resigned onlayer sprite:
            subpixel True
            anchor (0.5,1.0)
            block:
              xzoom 1.0 yzoom 1.0
              ease 0.5 xzoom 0.95 yzoom 1.05
              ease 3 xzoom 1.05 yzoom 0.95
        show pluey resigned onlayer sprite
        pause 3.5
        camera sprite:
            zpos 0 ypos 0
        camera bg:
            zpos 0 ypos 0
        camera pattern:
            zpos 0 ypos 0
        show grippins resigned onlayer sprite:
            subpixel True
            anchor (0.5,1.0)
            xzoom 1.05 yzoom 0.95

        g "Oh, FORGET this."
        ## "{b}    [Mippins dismissively asks the Zapper to knock you unconscious.]{/b}"
        g "Kick ‘em out. They’re not our guy."
        $ renpy.clear_retain();
        play sound ["silence=0.25>","audio/sfx/general/snd_wing.wav"]
        show zapper normal onlayer sprite:
            zoom 1.5
            xoffset 125 yoffset -400
            ease 0.5 yoffset 200
        pause 1
        show zapper normal onlayer sprite:
            yoffset 200
        z"Aye-aye, boss."
        play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
        hide zapper onlayer sprite
        hide grippins onlayer sprite
        hide pluey onlayer sprite
        hide chair onlayer sprite
        hide desk onlayer sprite
        hide dice_tile onlayer pattern
        hide mikeroom onlayer bg
        hide screen quick_menu
        $ quick_menu = False  
        scene black
        with doorslam_slow

        call screen gameover(minigame=False, minigame_label="mike_q1") with fade
        #"{b} [You get knocked out, and a non-standard game over screen appears. The game over screen is like the one in Earthbound, where there’s a spotlight over you.]{/b}"
        return
    label gameintro_cont:
        window hide
        #"{u}{b}If pbssword is correct{/b}{/u}" ""
        $ renpy.clear_retain();
        stop music

        play sound "audio/sfx/general/snd_won.wav"

        show grippins shocked onlayer sprite at small_bounce
        show pluey normal onlayer sprite

        pause 1
        hide screen say with easeoutbottom
        pause 1
        #"{b} [The camera zooms out. Mippins looks surprised at first, but then gives you a knowing grin.]{/b}"
        show grippins frontsmirk onlayer sprite
        show pluey happy onlayer sprite
        g "You’re a sly one, ya know that?"
        $ renpy.clear_retain();
        camera sprite:
            zpos -300 ypos -50
            ease 2 zpos 0 ypos 0
        camera bg:
            zpos -300 ypos -50
            ease 2 zpos 0 ypos 0
        camera pattern:
            zpos -300 ypos -50
            ease 2 zpos 0 ypos 0

        pause 2.5
        camera sprite:
            zpos 0 ypos 0
        camera bg:
            zpos 0 ypos 0
        camera pattern:
            zpos 0 ypos 0
        play music "audio/music/vol_adj_intro.ogg" fadein 1.0 
        $ renpy.music.queue("audio/music/vol_adj_body.ogg", clear_queue=False)
        g "But we won’t rat ya out."
        $ renpy.clear_retain();
        pause 0.5
        show grippins nervous onlayer sprite
        pause 0.5
        g "We just had to, y’know…"
        g "…take action, ‘cause…"
        $ renpy.clear_retain();
        play sound ["silence=0.25>","audio/sfx/general/snd_wing.wav"]
        show zapper normal onlayer sprite:
            xoffset -25 yoffset -200
            ease 0.5 yoffset 200
        pause 0.5
        show zapper normal onlayer sprite:
            yoffset 200
        q "‘cause we’s pretendin’ to be Mi—"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_impact.wav"
        play audio "audio/sfx/general/snd_shadowman_sax_3.wav"
        show grippins sideangry onlayer sprite:
            yoffset 0
            easein 0.05 yoffset -50
            easeout 0.05 yoffset 0
        show zapper sad onlayer sprite:
            yoffset 200
        show pluey shock onlayer sprite:
            anchor (0.5,0.5)
            ypos 0.26
            parallel:
                yoffset 0
                ease 0.15 yoffset -100
                ease 0.15 yoffset 0
            parallel:
                xzoom 1.0 yzoom 1.0
                ease 0.05 xzoom 0.8 yzoom 1.2
                ease 0.05 xzoom 1.0 yzoom 1.0
        with vpunch
        show pluey sad onlayer sprite:
            yoffset 0 xzoom 1.0 yzoom 1.0 anchor (0.5,0.5) ypos 0.26
        g "{size=+12}SHUT IT!"
        $ renpy.clear_retain();
        pause 1.5
        play sound "audio/sfx/general/snd_bump.wav"
        show grippins surprised onlayer sprite at small_bounce
        pause 1
        play sound "audio/sfx/general/snd_bump.wav"
        show grippins shocked onlayer sprite
        show zapper nervous onlayer sprite:
            yoffset 200
            ease 0.1 yoffset 180
            ease 0.1 yoffset 200

        pause 1.5
        show grippins nervous onlayer sprite
        play sound ["silence=0.1>","audio/sfx/general/snd_slidewhistle.wav"]
        show zapper nervous onlayer sprite:
            parallel:
                yoffset 200
                easeout 2 yoffset -200
            parallel:
                linear 0.1 xoffset -25
                linear 0.1 xoffset -15
                repeat
        pause 3
        hide zapper onlayer sprite
        show pluey concerned onlayer sprite
        #"{b} [Mippins turns to you, and then realizes you heard everything.]{/b}"
        g "Crap."
        $ renpy.clear_retain();
        pause 1
        show grippins nervous onlayer sprite:
            yoffset 0
            ease 1.5 yoffset 20
        pause 2.5
        play sound ["<silence 0.5>", "audio/sfx/general/snd_firework_send.wav"]
        show grippins resigned onlayer sprite:
            subpixel True
            anchor (0.5,1.0)
            block:
              xzoom 1.0 yzoom 1.0
              ease 0.5 xzoom 0.95 yzoom 1.05 yoffset 20
              ease 3 xzoom 1.05 yzoom 0.95 yoffset 0
        show pluey resigned onlayer sprite
        pause 2
        #"{b} [They take a deep breath, and then the camera zooms in ]{/b}"
        g "Alright, alright."
        g "Guess the jig’s up."
        $ renpy.clear_retain();
        pause 0.5
        g "The Mike ya see at work?"
        g "That’s one of us three."
        g "None of us are the real Mike."
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_wing.wav"
        show grippins worried onlayer sprite:
            subpixel True
            anchor (0.5,1.0)
            block:
              xzoom 1.05 yzoom 0.95 yoffset 0
              easein_elastic 1 xzoom 1.0 yzoom 1.0
        show pluey concerned onlayer sprite
        pause 0.5
        g "We’re tryin’ to keep this info sub-rosa."
        g "But if word got out…"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_bluh.wav"
        show grippins worried onlayer sprite:
            xoffset 0
            linear 0.075 xoffset 5
            linear 0.075 xoffset 0
            linear 0.075 xoffset 5
            linear 0.075 xoffset 0
        pause 1
        show grippins nervous onlayer sprite
        show pluey resigned onlayer sprite
        #"{b} [Mippins shudders.]{/b}"
        g "…Oh boy."
        g "{size=-4}We’d have another Z-Rank incident on our hands."
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_noise.wav"
        show grippins explain at squish onlayer sprite
        show pluey normal onlayer sprite
        pause 0.5
        g "So you get why we had to capture ya, right?"
        $ renpy.clear_retain();
        show choice_vignette onlayer sprite with vignette
        show choice_1 onlayer overlay:
            anchor (0.5,0.5)
            xpos 0.3 ypos 1.2
            easein 0.2 ypos 0.8
        show choice_2 onlayer overlay:
            anchor (0.5,0.5)
            xpos 0.7 ypos 1.2
            easein 0.2 ypos 0.8
        pause
        play audio "audio/sfx/general/snd_whip_crack_only.wav"
        play audio "audio/sfx/general/snd_fall.wav"
        hide choice_vignette onlayer sprite
        show choice_1 onlayer overlay:
            anchor (0.5,0.5)
            xpos 0.3 ypos 0.8
            parallel:
                rotate 0
                ease 0.5 rotate 360
            parallel:
                xpos 0.3 ypos 0.8
                ease 0.25 xpos -0.2 ypos 1.2 knot 0.1
        show choice_2 onlayer overlay:
            anchor (0.5,0.5)
            xpos 0.3 ypos 0.8
            parallel:
                rotate 0
                ease 0.5 rotate 360
            parallel:
                xpos 0.7 ypos 0.8
                ease 0.25 xpos 1.2 ypos 1.2 knot 0.1
        pause 1

        show grippins resigned onlayer sprite:
            yoffset 0
            ease 1 yoffset 15
        show pluey resigned onlayer sprite
        g "Actually, don’t bother."
        g "Let’s just cut to the chase."
        $ renpy.clear_retain();
        camera sprite:
            zpos 0 ypos 0 xpos 0
            ease 2 xpos 50 zpos -300 ypos -50
        camera bg:
            zpos 0 ypos 0
            ease 2 xpos 50 zpos -300 ypos -50
        camera pattern:
            zpos 0 ypos 0
            ease 2 xpos 50 zpos -300 ypos -50
        pause 2.2
        camera sprite:
            xpos 50 zpos -300 ypos -50
        camera bg:
            xpos 50 zpos -300 ypos -50
        camera pattern:
            xpos 50 zpos -300 ypos -50
        show grippins explain annoyed onlayer sprite:
            yoffset 15
            ease 1 yoffset 0
        show pluey concerned onlayer sprite
        g "Right now, we’re tryin’ to find evidence that there's a REAL Mike."
        g "We’ve looked all over TV World — but we’ve found zip."
        g "Zilch."
        g "Nada."
        $ renpy.clear_retain();
        pause 0.5
        show grippins explain normal onlayer sprite
        g "And THAT means we need to take our search a little further."
        g "So tomorrow, we're gonna sneak out to the cliffs and get more clues."
        $ renpy.clear_retain();
        camera sprite:
            xpos 50 zpos -300 ypos -50
            ease 2 xpos -60
        camera bg:
            xpos 50 zpos -300 ypos -50
            ease 2 xpos -60
        camera pattern:
            xpos 50 zpos -300 ypos -50
            ease 2 xpos -60
        pause 2
        camera sprite:
            xpos -60 zpos -300 ypos -50
        camera bg:
            xpos -60 zpos -300 ypos -50
        camera pattern:
            xpos -60 zpos -300 ypos -50
        show grippins resigned onlayer sprite
        g "Thing is, the trip there and back’ll take us a while."
        g "And we can’t do our Mike duties while we’re gone."
        $ renpy.clear_retain();
        show grippins resigned onlayer sprite
        show zapper normal onlayer sprite:
            xoffset 450 yoffset 200

        camera sprite:
            xpos 0 zpos 0 ypos 0
        camera bg:
            xpos 0 zpos 0 ypos 0
        camera pattern:
            xpos 0 zpos 0 ypos 0
        z "So that’s why da boss wants ya to be Mike for a day!"
        play sound "audio/sfx/general/snd_hurt1.wav"
        show layer sprite at greyout
        show layer bg at greyout
        show layer pattern at greyout
        $ renpy.clear_retain();
        show grippins shocked onlayer sprite
        show pluey annoyed onlayer sprite
        pause 2
        show layer sprite at fullsat
        show layer bg at fullsat
        show layer pattern at fullsat
        play sound "audio/sfx/general/snd_impact.wav"
        camera sprite:
            perspective True
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0
        camera bg:
            perspective True
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0
        camera pattern:
            perspective True
            block:
                ease 0.05 yoffset 10
                ease 0.05 yoffset -10
                ease 0.05 yoffset 5
                ease 0.05 yoffset -5
                ease 0.05 yoffset 0
        #"{b}[The room freezes because of the Zapper’s obvious statement. Then you shake your head more vigorously than before. NO, you don’t want to be Mike ever ever ever.]{/b}"
        show grippins sideangry onlayer sprite:
            xzoom -1.0
            yoffset 0
            easein 0.05 yoffset -50
            easeout 0.05 yoffset 0
        show zapper nervous onlayer sprite
        show pluey resigned onlayer sprite
        g "NOW look what you’ve done, ya dimwit!"
        show zapper nervous onlayer sprite:
            yoffset 200
            easein 1 yoffset 180
        z "Sorry, boss."
        z "Didn’t mean t’—"
        play sound "audio/sfx/general/snd_whip_crack_only.wav"
        show grippins sideangry onlayer sprite:
            xzoom -1.0
            yoffset 0
            easein 0.05 yoffset -50
            easeout 0.05 yoffset 0
        g "Let ME do the talking. Capiche?!"
        $ renpy.clear_retain();
        #"{b}[The Green Pippins goes back to you and points at you]{/b}"
        play sound ["silence=0.1>","audio/sfx/general/snd_slidewhistle_down.ogg"]
        show zapper sad onlayer sprite:
            yoffset 160
            easein 2 yoffset -150
        pause 2.5
        play sound "audio/sfx/general/snd_bump.wav"
        hide zapper onlayer sprite
        show grippins frontangry onlayer sprite:
            xzoom 1.0
            yoffset 0
            easein 0.05 yoffset -50
            easeout 0.05 yoffset 0
        g "And {size=+8}YOU!"
        g "Quit it with the cuckoo signs!"
        show grippins explain annoyed onlayer sprite:
            xzoom 1.0
        g "I've got a deal for ya."
        $ renpy.clear_retain();
        #"{b}[You slow down and stop.]{/b}"
        camera sprite:
            xpos 0 zpos 0 ypos 0
            ease 2 xpos 50 zpos -300 ypos -50
        camera bg:
            xpos 0 zpos 0 ypos 0
            ease 2 xpos 50 zpos -300 ypos -50
        camera pattern:
            xpos 0 zpos 0 ypos 0
            ease 2 xpos 50 zpos -300 ypos -50
        pause 2.5
        camera sprite:
            xpos 50 zpos -300 ypos -50
        camera bg:
            xpos 50 zpos -300 ypos -50
        camera pattern:
            xpos 50 zpos -300 ypos -50
        g "Ya like our underground casino, right?"
        g "The one Tenna DOESN'T know about?"
        $ renpy.clear_retain();
        camera sprite:
            xpos 50 zpos -300 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
        camera bg:
            xpos 50 zpos -300 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
        camera pattern:
            xpos 50 zpos -300 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
        pause 2.5
        camera sprite:
            xpos 50 zpos -300 ypos -50
        camera bg:
            xpos 50 zpos -300 ypos -50
        camera pattern:
            xpos 50 zpos -300 ypos -50
        #"{b}[You nod.]{/b}"
        show grippins frontsmirk onlayer sprite
        show pluey normal onlayer sprite
        g "What if I could make him turn the other way?"
        $ renpy.clear_retain();
        camera sprite:
            xpos 50 zpos -300 ypos -50
            ease 1 xpos -50
        camera bg:
            xpos 50 zpos -300 ypos -50
            ease 1 xpos -50
        camera pattern:
            xpos 50 zpos -300 ypos -50
            ease 1 xpos -50
        pause 1
        camera pattern:
            xpos -50 zpos -300 ypos -50
        camera bg:
            xpos -50 zpos -300 ypos -50
        camera sprite:
            xpos -50 zpos -300 ypos -50
        show grippins sidesmirk onlayer sprite
        g "You’ll get all the chips and booze and dark dollars you want, and he’ll be none the wiser."
        g "Sound good?"
        $ renpy.clear_retain();
        camera sprite:
            xpos -50 zpos -300 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
        camera bg:
            xpos -50 zpos -300 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
        camera pattern:
            xpos -50 zpos -300 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
            ease 0.5 ypos -65
            ease 0.5 ypos -50
        pause 2
        camera pattern:
            xpos -50 zpos -300 ypos -50
        camera sprite:
            xpos -50 zpos -300 ypos -50
        camera bg:
            xpos -50 zpos -300 ypos -50
        #"{b}[You nod again.]{/b}"
        show grippins frontsmirk onlayer sprite
        g "Then that’ll be your reward."
        g "A li’l favor from ol’ Motormouth Mike."
        $ renpy.clear_retain();

        pause 1
        show black onlayer sprite:
            alpha 0.0
            ease 3 alpha 0.75

        stop music fadeout 3
        camera sprite:
            parallel:
                xpos -50 zpos -300 ypos -50
                ease_quad 3.2 ypos 75
            parallel:
                block:
                    ease 0.4 xoffset 10
                    ease 0.4 xoffset 0
                    repeat 3
                    ease 0.8 xoffset 5
                    ease 0.8 xoffset 0                   
        camera bg:
            parallel:
                xpos -50 zpos -300 ypos -50
                ease_quad 3.2 ypos 75
            parallel:
                block:
                    ease 0.4 xoffset 10
                    ease 0.4 xoffset 0
                    repeat 3
                    ease 0.8 xoffset 5
                    ease 0.8 xoffset 0  
        camera pattern:
            parallel:
                xpos -50 zpos -300 ypos -50
                ease_quad 3.2 ypos 75
            parallel:
                block:
                    ease 0.4 xoffset 10
                    ease 0.4 xoffset 0
                    repeat 3
                    ease 0.8 xoffset 5
                    ease 0.8 xoffset 0  
        pause 3.5
        show black onlayer sprite:
            alpha 0.75
        camera sprite:
            xpos -50 zpos -300 ypos 75
        camera bg:
            xpos -50 zpos -300 ypos 75
        camera pattern:
            xpos -50 zpos -300 ypos 75
        #"{b}[pause. You look down a little. The reward is nice, but that doesn’t answer your big question{/b}" "{b}you have no idea how to be Mike ]{/b}"
        z "Hey."
        z "Bein’ Mike ain’t so bad."
        $ renpy.clear_retain();
        show black onlayer sprite:
            ease 3 alpha 0
        show zapper normal onlayer sprite:
            yoffset -100
            easein 4 yoffset 160
        camera sprite:
            ease 3 ypos 0 xpos 0 zpos 0 xoffset 0
        camera bg:
            ease 3 ypos 0 xpos 0 zpos 0 xoffset 0
        camera pattern:
            ease 3 ypos 0 xpos 0 zpos 0 xoffset 0
        pause 4
        show black onlayer sprite:
            alpha 0
        show zapper normal onlayer sprite:
            yoffset 160
        camera sprite:
            ypos 0 xpos 0 zpos 0 xoffset 0
        camera bg:
            ypos 0 xpos 0 zpos 0 xoffset 0
        camera pattern:
            ypos 0 xpos 0 zpos 0 xoffset 0
        show pluey happy onlayer sprite
        z "Ya just need t’be nice to Tenna, dats all."
        show grippins sidesmirk onlayer sprite
        g "If these two BOZOS can fool the big guy, so can you."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_hurt1.wav"
        show zapper sad onlayer sprite:
            yoffset 160
        show pluey sad onlayer sprite
        pause 2
        play sound ["silence=0.1>","audio/sfx/general/snd_slidewhistle_down.ogg"]
        show zapper sad onlayer sprite:
            yoffset 160
            easein 2 yoffset -200
        show pluey concerned onlayer sprite
        pause 2.5
        show zapper sad onlayer sprite:
            yoffset -200
        show grippins explain onlayer sprite
        show pluey resigned onlayer sprite
        #"{b}[Zapper and Cat Mike look annoyed/sad at Mippins. Mippins glares back, and continues]{/b}"
        g "Anyway."
        g "Lemme grab something for ya."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_wing.wav"
        show grippins underdesk onlayer sprite:
            yoffset 0
            ease 1 yoffset 100
        pause 1.5
        play sound "audio/sfx/general/snd_grab.wav"
        show grippins throw onlayer sprite:
            yoffset 100
            easein 0.05 yoffset -25
            easeout 0.1 yoffset 0
        show happymeter_imagever onlayer sprite behind desk:
            zoom 0.5 align (0.5,0.5)
            xoffset 100 yoffset 0
            easein 0.3 yoffset -500 rotate 360
        pause 0.5
        hide happymeter_imagever onlayer sprite behind desk
        pause 0.5
        play sound "audio/sfx/general/snd_fall.wav"
        show happymeter_imagever onlayer sprite:
            align (0.5,0.5)
            yoffset -500 xoffset 0
            easein 0.5 rotate 720 yoffset 700 xoffset -100
        pause 1
        $ happy = 80
        hide happymeter_imagever onlayer sprite
        pause 1
        show pluey normal onlayer sprite
        #"{b}[They dive down, and pulls out a spbre HAPPY HAPPY METER]{/b}"
        g "You'll need this while you’re on the job."
        $ renpy.clear_retain();
        play music "audio/music/vol_adj_intro.ogg" fadein 1.0 
        $ renpy.music.queue("audio/music/vol_adj_body.ogg", clear_queue=False)
        play sound ["<silence .25>","audio/sfx/general/snd_whip_crack_only.wav"]
        show screen happy_meter("left") with easeinleft
        pause 0.5
        show grippins explain onlayer sprite:
            yoffset 0
        g "We call it the HAPPY HAPPY METER."
        $ renpy.clear_retain();
        pause 0.5
        show grippins resigned onlayer sprite
        g "Ya know the FUN METER, right?"
        g "It’s like that, but for Tenna’s mood."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_slidewhistle.wav"
        $ happy = 100
        pause 1
        show grippins explain onlayer sprite
        g "{color=960811}Make life easy for him, and it’ll go up!"
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
        $ happy = 60
        pause 1
        show grippins explain annoyed onlayer sprite
        g "{color=960811}Make life harder, and it’ll go down."
        $ renpy.clear_retain();
        play sound "audio/sfx/general/snd_whip_throw_only.wav"
        hide screen happy_meter with easeoutleft
        $ happy = 80
        pause 0.5
        show grippins nervous onlayer sprite
        g "But, uh…"
        g "{color=960811}Try not to go overboard with the good stuff."
        $ renpy.clear_retain();
        show grippins sidesmirk onlayer sprite
        show pluey annoyed onlayer sprite
        g "{color=960811}Don’t want ya REPLACING me or anything."
        $ renpy.clear_retain();
        pause 1
        # when grippins says the last pbrt of the above sentence, they give pluey a LOOK. pluey looks a little sweaty
        #"{b}[Mippins pushes the meter over, and you take it. but you still look down. You have no idea how long this arrangement is gonna last.]{/b}"
        play sound ["<silence 0.2>","audio/sfx/general/snd_wing.wav"]
        show zapper nervous onlayer sprite:
            xoffset -25 yoffset -200
            ease 1 yoffset 200
        pause 1.4

        show zapper nervous onlayer sprite:
            xoffset -25 yoffset 200
        show pluey concerned onlayer sprite
        z "Uh, Boss?"
        z "Dey still look kinda glum."
        play sound "audio/sfx/general/snd_bump.wav"
        show grippins shocked onlayer sprite
        $ renpy.clear_retain();
        pause 1
        play sound "audio/sfx/general/snd_noise.wav"
        show pluey annoyed onlayer sprite
        show grippins explain annoyed at small_bounce onlayer sprite
        g "Was my offer not good enough for ya?!"
        $renpy.clear_retain();
        camera sprite:
            perspective True
            xpos 0
            linear 0.2 xpos 10
            linear 0.2 xpos 0
            linear 0.2 xpos -10
            linear 0.2 xpos 0
            linear 0.2 xpos 10
            linear 0.2 xpos 0
        camera bg:
            perspective True
            xpos 0
            linear 0.2 xpos 10
            linear 0.2 xpos 0
            linear 0.2 xpos -10
            linear 0.2 xpos 0
            linear 0.2 xpos 10
            linear 0.2 xpos 0
        camera pattern:
            perspective True
            xpos 0
            linear 0.2 xpos 10
            linear 0.2 xpos 0
            linear 0.2 xpos -10
            linear 0.2 xpos 0
            linear 0.2 xpos 10
            linear 0.2 xpos 0
            pause 1
        pause 2
        camera sprite:
            perspective True
            xpos 0
        camera bg:
            perspective True
            xpos 0
        camera pattern:
            perspective True
            xpos 0
        #"{b}[Mippins looks, and realizes its probably about the time. They get frustrated.]{/b}"
        show grippins resigned onlayer sprite:
            yoffset 0
            ease 1 yoffset 10
        show pluey happy onlayer sprite
        g "Fine. FINE."
        g "We’ll keep the search within a day."
        $ renpy.clear_retain();
        pause 0.5
        label mike_q2:
            $ quick_menu = True  
            camera sprite:
                perspective True
                zpos 0 xpos 0 ypos 0
            camera bg:
                perspective True
                zpos 0 xpos 0 ypos 0
            camera pattern:
                perspective True
                zpos 0 xpos 0 ypos 0
            scene black
            show dice_tile onlayer pattern
            show mikeroom onlayer bg:
                subpixel True
                zoom 0.5
                crop (0, 0.0, 1.0, 1.0)
            show chair onlayer sprite
            show grippins explain annoyed onlayer sprite
            show desk onlayer sprite
            show pluey normal onlayer sprite
            show zapper normal onlayer sprite:
                xoffset -25 yoffset 200

            g "Will THAT seal the deal?"
            #"{b}[You can choose whether to opt in our out.]{/b}"
            $ renpy.clear_retain();
            pause 0.2
            show screen importanttext("Take the deal?") with dissolve
            pause 1
            show choice_vignette onlayer sprite with vignette
            menu:
                "Nuh-uh.":
                    stop music
                    hide screen importanttext
                    hide choice_vignette onlayer sprite
                    pause 1
                    show grippins explain annoyed onlayer sprite
                    camera sprite:
                        xpos 20 zpos -300 ypos -75 
                    camera bg:
                        xpos 20 zpos -300 ypos -75 
                    camera pattern:
                        xpos 20 zpos -300 ypos -75 
                    g "Then we’ll just get SOMEONE ELSE to do it!"
                    play sound "audio/sfx/general/snd_impact.wav"
                    show grippins frontangry onlayer sprite:
                        yoffset 0
                        easein 0.05 yoffset -25
                        easeout 0.05 yoffset 0
                    camera sprite:
                        xpos 0 zpos -350 ypos -75
                        block:
                            ease 0.05 yoffset 10
                            ease 0.05 yoffset -10
                            ease 0.05 yoffset 5
                            ease 0.05 yoffset -5
                            ease 0.05 yoffset 0
                    camera bg:
                        xpos 0 zpos -350 ypos -75
                        block:
                            ease 0.05 yoffset 10
                            ease 0.05 yoffset -10
                            ease 0.05 yoffset 5
                            ease 0.05 yoffset -5
                            ease 0.05 yoffset 0
                    camera pattern:
                        xpos 0 zpos -350 ypos -75
                        block:
                            ease 0.05 yoffset 10
                            ease 0.05 yoffset -10
                            ease 0.05 yoffset 5
                            ease 0.05 yoffset -5
                            ease 0.05 yoffset 0
                    g "{size=+8}NOW GET OUT!!!"
                    play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
                    hide zapper onlayer sprite
                    hide grippins onlayer sprite
                    hide pluey onlayer sprite
                    hide chair onlayer sprite
                    hide desk onlayer sprite
                    hide dice_tile onlayer pattern
                    hide mikeroom onlayer bg
                    scene black
                    hide screen quick_menu
                    $ quick_menu = False  
                    with doorslam_slow
                    call screen gameover(minigame=False, minigame_label="mike_q2") with fade
                    #"    {b}[The Door Slams and the screen turns black]{/b}"
                    #"    {b}[Game Over here.]{/b}"
                    return
                "If it's for one day...":
                    hide screen importanttext with dissolve
                    hide choice_vignette onlayer sprite with vignette
                    pause 1

                    play sound ["silence=0.2>","audio/sfx/general/snd_slidewhistle_down.ogg"]
                    play audio ["<silence 0.5>", "audio/sfx/general/snd_firework_send.wav"]
                    show grippins resigned onlayer sprite:
                        subpixel True
                        anchor (0.5,1.0)
                        parallel:
                            block:
                                  xzoom 1.0 yzoom 1.0
                                  ease 0.5 xzoom 0.95 yzoom 1.05 
                                  ease 2 xzoom 1.02 yzoom 0.98 
                        parallel:
                            yoffset 10
                            ease 1 yoffset 0
                    show zapper onlayer sprite:
                        yoffset 200
                        ease 2 yoffset -200
                    show pluey happy onlayer sprite
                    pause 1
                    g "FINALLY."
                    $ renpy.clear_retain();
                    camera sprite:
                        xpos 0 zpos 0 ypos 0 
                        ease 2 xpos 0 zpos -250 ypos -50

                    camera bg:
                        xpos 0 zpos 0 ypos 0 
                        ease 2 xpos 0 zpos -250 ypos -50

                    camera pattern:
                        xpos 0 zpos 0 ypos 0 
                        ease 2 xpos 0 zpos -250 ypos -50
                    pause 2.5
                    show grippins explain onlayer sprite:
                        subpixel True
                        anchor (0.5,1.0)
                        xzoom 1.0 yzoom 1.0 
                    show pluey normal onlayer sprite
                    g "Your shift’ll start tomorrow at 6AM."

                    show grippins explain annoyed onlayer sprite
                    g "Don’t. Be. Late."
                    $ renpy.clear_retain();
                    play sound ["<silence .2>", "audio/sfx/general/snd_closet_impact.ogg"]
                    stop music
                    hide zapper onlayer sprite
                    hide grippins onlayer sprite
                    hide pluey onlayer sprite
                    hide chair onlayer sprite
                    hide desk onlayer sprite
                    hide mikeroom onlayer bg
                    camera sprite:
                        xpos 0 zpos 0 ypos 0 xoffset 0

                    camera bg:
                        xpos 0 zpos 0 ypos 0 xoffset 0

                    camera pattern:
                        xpos 0 zpos 0 ypos 0 xoffset 0

                    with doorslam_slow
                    pause 1

                    show greenroom onlayer bg at bgshow
                    play sound ["<silence .1>","audio/sfx/general/snd_ftext_woodblock.wav"]
                    pause 3
                    #"{b}[The door slams, and you’re outside holding the meter and the Motormouth Mike Costume. You slump down against the double doors, exhausted — and then two Pippinses walk by you.]{/b}"
                    pb "Hey, is that…?"
                    pa "No way."
                    pa "Nooooo way."
                    $ renpy.clear_retain();
                    play sound "audio/sfx/general/footstep1.ogg"
                    queue sound ["audio/sfx/general/footstep2.ogg"]
                        
                    #"{b}[They walk up to you, smirking.]{/b}"
                    show pippinsa curious onlayer sprite:
                        parallel:
                            xpos -400
                            ease 2 xpos 50
                        parallel:
                            ease 0.2 yoffset 0
                            ease 0.2 yoffset -10
                            repeat 5
                    show pippinsb leanin onlayer sprite:
                        parallel:
                            xpos 720
                            ease 2 xpos 250
                        parallel:
                            ease 0.2 yoffset 0
                            ease 0.2 yoffset -10
                            repeat 5

                    pause 3
                    play music "audio/music/greenroom.ogg" fadein 1.0 
                    show pippinsa curious onlayer sprite:
                        xpos 50 yoffset -10
                    show pippinsb leanin onlayer sprite:
                        xpos 250 yoffset -10
                    pb "Did {color=0BCB12}that guy{/color} rope you into one of their Mike plots?"
                    $ renpy.clear_retain();
                    #"{b}[You nod]{/b}"
                    camera sprite:
                        xpos 0 zpos 0 ypos 0
                        ease 0.5 ypos -25
                        ease 0.5 ypos 0
                        ease 0.5 ypos -25
                        ease 0.5 ypos 0
                    camera bg:
                        xpos 0 zpos 0 ypos 0
                        ease 0.5 ypos -25
                        ease 0.5 ypos 0
                        ease 0.5 ypos -25
                        ease 0.5 ypos 0
                    camera pattern:
                        xpos 0 zpos 0 ypos 0
                        ease 0.5 ypos -25
                        ease 0.5 ypos 0
                        ease 0.5 ypos -25
                        ease 0.5 ypos 0
                    pause 2
                    pa "Bummer."
                    pa "Sucks to be you, I gue—"
                    pause 0.5
                    $ renpy.clear_retain();
                    play sound "audio/sfx/general/snd_wing.wav"
                    show pippinsa norm onlayer sprite:
                        small_bounce()
                    pause 1
                    #"{b}[Pippins B then notices the meter under your arm.]{/b}"
                    pa "Hey."
                    pa "What’s that on the ground?"
                    $ renpy.clear_retain();
                    play sound "audio/sfx/general/snd_slidewhistle.wav"
                    show happymeter_imagever onlayer screens:
                        align (0.5,0.5)
                        parallel:
                            yoffset 600 rotate 0
                            ease 2 yoffset 200 rotate 20
                        parallel:
                            ease 0.1 xoffset 200
                            ease 0.1 xoffset 205
                            repeat 10
                    pause 2.3
                    show happymeter_imagever onlayer screens:
                        yoffset 200 rotate 20 xoffset 205
                    show pippinsb norm onlayer sprite at small_bounce
                    pause 0.5
                    pb "You don’t know?"
                    pb "That’s a HAPPY HAPPY METER."
                    show pippinsb leanin onlayer sprite
                    pb "‘Motormouth Mike’ looooooves carrying that thing around whenever he’s on shift."
                    pb "Tenna’s practically wrapped around his little finger!"
                    show pippinsa curious onlayer sprite at small_bounce
                    pa "Bet he wants Tenna wrapped around his—"
                    #"{b}[Pippins B is silenced before they can make a crude joke]{/b}"
                    $ renpy.clear_retain();
                    stop music
                    play audio "audio/sfx/general/snd_grab.wav"
                    play audio "audio/sfx/general/snd_whip_crack_only.wav"
                    show pippinsb shush onlayer sprite:
                        parallel:
                            xoffset 0
                            easein_quint 0.01 xoffset -50
                        parallel:
                            yoffset 0
                            easein_quint 0.01 yoffset -10
                            easein_quint 0.01 yoffset 0
                    pause 0.02
                    show pippinsa shushed onlayer sprite:
                            ease_quint 0.01 yoffset -8
                            ease_quint 0.01 yoffset 0  
                            repeat 2             

                    pause 0.5
                    show pippinsb shush onlayer sprite:
                        xoffset -50 yoffset 0
                    show pippinsa shushed onlayer sprite:
                        yoffset 0

                    pb "Don’t get the censors on our heinies!"
                    show pippinsa shushed sweat onlayer sprite
                    pb "We JUST got paycuts!!"
                    $ renpy.clear_retain();
                    play sound "audio/sfx/general/snd_slidewhistle_down.ogg"
                    show happymeter_imagever onlayer overlay:
                        align (0.5,0.5)
                        xoffset 200 yoffset 200 rotate 20
                        ease 1 yoffset 600 rotate 0
                    hide happymeter_imagever onlayer screens
                    pause 1.2
                    show pippinsa shushed onlayer sprite
                    show pippinsb shush2 onlayer sprite
                    pause 1
                    #"{b}[You look up. paycuts? What paycuts?]{/b}"
                    pb "Wait."
                    pb "You weren’t there, were you."
                    $ renpy.clear_retain();
                    pause 1
                    play sound "audio/sfx/general/snd_noise.wav"
                    show pippinsb annoyed onlayer sprite:
                        xoffset -50
                        easein 1 xoffset 100
                    pause 1
                    play sound "audio/sfx/general/snd_bump.wav"
                    show pippinsa sad onlayer sprite:
                        yoffset 0
                        ease 1 yoffset 20
                    pause 1
                    show pippinsb annoyed onlayer sprite:
                        xoffset 100
                    show pippinsa sad onlayer sprite:
                        yoffset 20
                    pause 1
                    play music "audio/music/dump.ogg" fadein 1.0 
                    pa "Yeah, uh…"
                    pa "Tenna crashed the Western Set Derby this morning."
                    $ renpy.clear_retain();
                    pause 0.5
                    play sound "audio/sfx/general/snd_wing.wav"
                    show pippinsa annoyed onlayer sprite:
                        parallel:
                            linear 0.08 xoffset 0
                            linear 0.08 xoffset 5
                            repeat
                        parallel:
                            yoffset 10
                            linear 0.08 yoffset 0



                    pa "And I was THIS close to hitting the jackpot!"
                    pa "You should’ve seen the Shadowguy I bet on!"
                    $ renpy.clear_retain();
                    play sound "audio/sfx/general/snd_xylophone_blink.ogg"
                    queue sound ["audio/sfx/general/snd_xylophone_blink.ogg","audio/sfx/general/snd_xylophone_blink.ogg"]
                    show pippinsa hooves onlayer sprite at small_bounce:
                        yoffset -50 xoffset 0
                    show outline onlayer sprite:
                        xoffset 50 yoffset -50
                    pause 0.5
                    pa "His hooves were literally the size of my HEAD!"
                    $ renpy.clear_retain();
                    pause 0.75
                    play sound "audio/sfx/general/snd_bump.wav"
                    show pippinsb confused question onlayer sprite at small_bounce
                    pause 0.5
                    pb "What does hoof size have to do with speed?"
                    $ renpy.clear_retain();
                    pause 1
                    play sound "audio/sfx/general/snd_hurt1.wav"
                    show pippinsa sad onlayer sprite:
                        xzoom -1.0 xoffset -50 yoffset 30
                    hide outline onlayer sprite
                    pause 0.5
                    pa "I don’t know."
                    $ renpy.clear_retain();
                    pause 1
                    show pippinsb sigh onlayer sprite:
                        xoffset -5
                    pb "Anyways, he blew up at us and slashed everyone’s wages."
                    pb "Not like we had much to begin with, but…"
                    $ renpy.clear_retain();
                    pause 1
                    play sound "audio/sfx/general/snd_wing.wav"
                    show pippinsa curious onlayer sprite at small_bounce:
                        xoffset 0 yoffset 0
                    pause 1.5
                    show pippinsb annoyed onlayer sprite:
                        xoffset 60 yoffset 0

                    #"{b}[There’s a pause as Pippins A grins at Pippins B.]{/b}"
                    pb "Why’re you looking at me like that?"
                    $ renpy.clear_retain();
                    pause 0.5
                    pa "Hey."
                    pa "What if we asked ‘Mike’ for a little… favor?"
                    #"{b}[Pippins B grins back.]{/b}"
                    $ renpy.clear_retain();
                    pause 1
                    play sound "audio/sfx/general/snd_wing.wav"
                    show pippinsb leanin onlayer sprite at small_bounce:
                        xzoom -1.0 xoffset 70
                    pause 0.5
                    pb "Oho?"
                    $ renpy.clear_retain();
                    pause 0.5
                    pa "He could knock Tenna down a peg."
                    pa "Mess up a chore here."
                    pa "Play a prank on him there."
                    pa "Make his life a little harder."
                    $ renpy.clear_retain();
                    pause 0.5
                    play sound "audio/sfx/general/snd_wing.wav"
                    show pippinsa norm onlayer sprite at small_bounce:
                        xzoom 1.0
                    pause 0.5
                    pa "It’s like the ol’ Card Kingdom saying…"
                    pa "…you’ve gotta fight flushes with flushes!"
                    $ renpy.clear_retain();
                    pause 0.5
                    play sound "audio/sfx/general/snd_noise.wav"
                    show pippinsb norm onlayer sprite:
                        xzoom 1.0 xoffset 35 yoffset 0
                    pause 0.5
                    pb "Holy…"
                    $ renpy.clear_retain();
                    pause 0.5
                    play sound "audio/sfx/general/snd_wing.wav"
                    show pippinsb leanin onlayer sprite:
                        xzoom 1.0 xoffset 0 yoffset 0
                        ease 0.2 yoffset 10
                        ease 0.2 yoffset 0
                    pause 0.5
                    pb "You GENIUS."
                    pb "The staff’s gonna eat this up!"
                    #"{b}[Both Pippinses turn back to you. They know who Motormouth Mike IS, but they’re acting coy about it.]{/b}"
                    $ renpy.clear_retain();
                    pause 0.5
                    play sound "audio/sfx/general/snd_bump.wav"
                    show pippinsa curious onlayer sprite at small_bounce:
                        xzoom -1.0
                    pause 0.5
                    pa "Soooooo."
                    pa "You heard all of that, right?"
                    $ renpy.clear_retain();
                    play sound "audio/sfx/general/snd_bump.wav"
                    show pippinsb leanin onlayer sprite at small_bounce:
                        xzoom -1.0 xoffset 70
                    pause 0.5
                    pb "We’d love for ‘Mike’ to do us a solid."
                    pb "Show he’s a REAL TV Time employee, not some boobtube bootlicker."
                    show pippinsa norm onlayer sprite
                    pa "And if he does get into hot water, we’ll have his back."
                    pa "Like that one film with the bugs!"
                    show pippinsb leanin onlayer sprite:
                        xzoom -1.0
                    pb "‘You let one ant stand up to us, then they ALL might stand up!’"
                    show pippinsa curious onlayer sprite at small_bounce:
                        xzoom -1.0
                    pa "Ding ding ding!"
                    $ renpy.clear_retain();
                    pause 1
                    play sound "audio/sfx/general/snd_wing.wav"
                    show pippinsb confused onlayer sprite at small_bounce
                    show pippinsa curious onlayer sprite
                    pause 0.5
                    pb "…Um, that said."
                    pb "{color=960811}If the HAPPY HAPPY METER gets too low, Tenna’ll get glooby."
                    $ renpy.clear_retain();
                    play sound "audio/sfx/general/snd_bump.wav"
                    show pippinsb annoyed onlayer sprite
                    pause 0.5
                    pb "And if THAT happens, well…"
                    $ renpy.clear_retain();
                    play sound "audio/sfx/general/snd_hurt1.wav"
                    show pippinsa sad onlayer sprite:
                        xzoom 1.0
                    pause 0.5
                    pa "{color=960811}‘Mike’ will get fired on the spot."
                    pa "And no 'ifs' or 'buts' are gonna save him."
                    #"{b}[pause for it sinking in.]{/b}"
                    $ renpy.clear_retain();
                    pause 1
                    hide pippinsa onlayer sprite
                    hide pippinsb onlayer sprite
                    play sound "audio/sfx/general/snd_grab.wav"
                    show pippinsduo tease onlayer sprite:
                        anchor (0.5,1.0) pos (0.5,1.0)
                        xzoom 1.0 yzoom 1.0
                        ease 0.1 xzoom 1.05 yzoom 0.95
                        ease 0.1 xzoom 1.0 yzoom 1.0
                    pause 0.5
                    pa "Pfft! Like THAT’LL happen."
                    pa "He's Tenna's FAVORITE."
                    $ renpy.clear_retain();
                    pause 0.2
                    pb "Even when he's furry n' stuff?"
                    pa "ESPECIALLY when he's furry."
                    $ renpy.clear_retain();
                    pause 1
                    play sound "audio/sfx/general/snd_noise.wav"
                    show pippinsduo tease closed onlayer sprite:
                        anchor (0.5,1.0) pos (0.5,1.0)
                        xzoom 1.0 yzoom 1.0
                        ease 0.1 xzoom 1.02 yzoom 0.98
                        ease 0.1 xzoom 1.0 yzoom 1.0
                    pause 0.5
                    pb "…Anyways, if you see ‘Mike’, give him a tip, yeah?"
                    $ renpy.clear_retain();
                    pause 0.2
                    pa "In the meantime, we’re gonna skedaddle to the B-Rank Room."
                    pa "Toodles!"
                    $ renpy.clear_retain();
                    play sound "audio/sfx/general/quickfootsteps.ogg"

                    show pippinsduo tease closed onlayer sprite:
                        parallel:
                            easeout 2 xpos 2000
                        parallel:
                            ease 0.15 yoffset 0
                            ease 0.15 yoffset 10
                            repeat

                    pause 3
                    stop music fadeout 3.0
                    hide pippinsduo onlayer sprite
                    play sound ["<silence 0.4>","audio/sfx/general/scene_close.ogg"]
                    show greenroom onlayer bg at bghide
                    pause 3
                    show black onlayer sprite:
                        alpha 0.0
                        ease 3 alpha 1.0
                    hide dice_tile onlayer pattern
                    hide greenroom onlayer bg
                    with dissolve
                    hide screen quick_menu
                    $ quick_menu = False  
                    $ renpy.stop_skipping()
                    with dissolve
                    pause 6

                    hide black onlayer sprite
                    play sound "audio/sfx/general/snd_ftext_woodblock.wav"
                    queue sound ["<silence 1.1>", "audio/sfx/general/snd_tick_tock.wav"]
                    show screen clock(170,350,180,360) 

                    pause 5.5

                    play sound "audio/sfx/general/snd_whip_throw_only.wav"
                    hide screen clock

                    pause 3


                    #"{b}[Both Pippinses leave, and you look down at the meter and costume you have in hand. The screen fades to black, which’ll transition into the intro of your work as Mike.]{/b}"

                    jump prenose_sequence