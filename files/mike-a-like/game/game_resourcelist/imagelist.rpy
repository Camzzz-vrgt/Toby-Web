############# list of sprite definitions for the game #################


#### TENNA

## CONDITION SWITCH FOR EXPRESSIONS

# tenna_face = 0 - normal expression
# tenna_face = 1 - wrinkled/glooby expression
# tenna_face = 2 - flower expression
# tenna_face = 3 - flower2 expression
# tenna_face = 4 - flower3 expression

define tenna_face = 0
init offset = 10


## TRANSFORM FOR POSITIONING.

## THE ACTUAL EXPRESSIONS

transform bloom_anim:
    anchor (0.5,0.5)
    zoom 0.0
    easein_elastic 1 zoom 1.0

layeredimage tenna norm:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.45
    attribute base default
    group clothes:
        attribute suit default
        attribute jammies

    if tenna_face == 3:
        "images/portraits/tenna/norm/tenna_norm_faceflower2.png"
    elif tenna_face == 2:
        "images/portraits/tenna/norm/tenna_norm_faceflower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/norm/tenna_norm_facewrinkle.png"
    else:
        "images/portraits/tenna/norm/tenna_norm_facenormal.png"

    attribute bloom at bloom_anim:
        offset (569,449)




layeredimage tenna oops:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.4
    attribute base default
    group clothes:
        attribute suit default
        attribute jammies

    if tenna_face == 3:
        "images/portraits/tenna/oops/tenna_oops_face_flower2.png"
    elif tenna_face == 2:
        "images/portraits/tenna/oops/tenna_oops_face_flower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/oops/tenna_oops_face_wrinkle.png"
    else:
        "images/portraits/tenna/oops/tenna_oops_face_normal.png"

layeredimage tenna whisper:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.5
    attribute base default
    group clothes:
        attribute suit default
        attribute jammies

    if tenna_face == 3:
        "images/portraits/tenna/whisper/tenna_whisper_face_flower2.png"
    elif tenna_face == 2:
        "images/portraits/tenna/whisper/tenna_whisper_face_flower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/whisper/tenna_whisper_face_wrinkle.png"
    else:
        "images/portraits/tenna/whisper/tenna_whisper_face_normal.png"

layeredimage tenna think:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.45
    attribute base default
    group clothes:
        attribute suit default
        attribute jammies

    if tenna_face == 2:
        "images/portraits/tenna/think/tenna_think_face_flower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/think/tenna_think_face_wrinkle.png"
    else:
        "images/portraits/tenna/think/tenna_think_face_normal.png"

    attribute question

layeredimage tenna point:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.45
    attribute base default
    group clothes:
        attribute suit default
        attribute jammies

    if tenna_face == 3:
        "images/portraits/tenna/point/tenna_point_face_flower2.png"
    elif tenna_face == 2:
        "images/portraits/tenna/point/tenna_point_face_flower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/point/tenna_point_face_wrinkle.png"
    else:
        "images/portraits/tenna/point/tenna_point_face_normal.png"

image tenna blur_point = At(im.Blur("images/portraits/tenna/point/tenna_blurpoint.png", 5),Transform(zoom=0.5, xalign  =0.45, offset=(25,525)))


layeredimage tenna onchest:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.40
    attribute base default
    group clothes:
        attribute suit default
        attribute jammies

    if tenna_face == 3:
        "images/portraits/tenna/onchest/tenna_onchest_face_flower2.png"
    elif tenna_face == 2:
        "images/portraits/tenna/onchest/tenna_onchest_face_flower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/onchest/tenna_onchest_face_wrinkle.png"
    else:
        "images/portraits/tenna/onchest/tenna_onchest_face_normal.png"

image tenna blur_onchest = At(im.Blur("images/portraits/tenna/onchest/tenna_bluronchest.png", 5),Transform(zoom=0.5, xalign  =0.4, offset=(25,525)))

layeredimage tenna milkhold:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.45
    attribute base default

    if tenna_face == 2:
        "images/portraits/tenna/milkhold/tenna_milkhold_face_flower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/milkhold/tenna_milkhold_face_wrinkle.png"
    else:
        "images/portraits/tenna/milkhold/tenna_milkhold_face_normal.png"

    attribute bloom at bloom_anim:
        offset (504,621)

layeredimage tenna handwaves:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.45
    attribute base default

    if tenna_face == 2:
        "images/portraits/tenna/handwaves/tenna_handwaves_face_flower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/handwaves/tenna_handwaves_face_wrinkle.png"
    else:
        "images/portraits/tenna/handwaves/tenna_handwaves_face_normal.png"
    attribute sweat


layeredimage tenna cheekhands:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.55
    attribute base default

    if tenna_face == 3:
        "images/portraits/tenna/cheekhands/tenna_cheekhands_face_flower2.png"
    elif tenna_face == 2:
        "images/portraits/tenna/cheekhands/tenna_cheekhands_face_flower.png"
    else:
        "images/portraits/tenna/cheekhands/tenna_cheekhands_face_normal.png"

    attribute bloom at bloom_anim:
        offset (832,631)
    attribute bloom2 at bloom_anim:
        offset (835,626)

layeredimage tenna twirl:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.55
    attribute base default
    if tenna_face == 3:
        "images/portraits/tenna/twirl/tenna_twirl_face_flower2.png"
    elif tenna_face == 2:
        "images/portraits/tenna/twirl/tenna_twirl_face_flower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/twirl/tenna_twirl_face_wrinkle.png"
    else:
        "images/portraits/tenna/twirl/tenna_twirl_face_normal.png"


transform spark_anim:
    anchor (0.5,0.5)
    parallel:
        alpha 0.0
        pause 0.3
        linear 0.07 alpha 1.0
        pause 0.4
        linear 0.3 alpha 0.0
    parallel:
        xzoom 0.6 yzoom 1.4
        pause 0.3
        linear 0.1 xzoom 1.0 yzoom 1.0
        linear 0.5 xzoom 1.2 yzoom 0.8

layeredimage tenna call:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.55
    attribute base default

    if tenna_face == 3:
        "images/portraits/tenna/call/tenna_call_face_flower2.png"
    elif tenna_face == 2:
        "images/portraits/tenna/call/tenna_call_face_flower.png"
    elif tenna_face == 1:
        "images/portraits/tenna/call/tenna_call_face_wrinkle.png"
    else:
        "images/portraits/tenna/call/tenna_call_face_normal.png"

    attribute spark at spark_anim:
        pos (0.65,0.7)

transform steam_anim:
        pos (1.15,1.0) alpha 1.0
        ease 1 pos (1.18,0.97) alpha 0.0

layeredimage tenna relieved:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (25,525)
    xalign 0.5
    attribute base default
    attribute steam at steam_anim
image tennadoodly_frames:
        "images/portraits/tenna/tenna_doodly_1.png"
        pause 0.2
        "images/portraits/tenna/tenna_doodly_2.png"
        pause 0.2
        repeat

image tenna sad = At("images/portraits/tenna/sad/tenna_sad_norm.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,525), xalign=0.45))
image tenna sad2 =  At("images/portraits/tenna/sad/tenna_sad_beatup.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,525), xalign=0.45))
image tenna nervous = At("images/portraits/tenna/tenna_nervous.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,525), xalign=0.5))
image tenna frustrated = At("images/portraits/tenna/tenna_frustrated.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,525), xalign=0.45))
image tenna freakout = At("images/portraits/tenna/tenna_freakout.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,425), xalign=0.5))
image tenna tiegrip = At("images/portraits/tenna/tenna_tiegrip.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,525), xalign=0.48))
image tenna angry = At("images/portraits/tenna/tenna_angry.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,525), xalign=0.55))
image tenna doodly = At("tennadoodly_frames", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,525), xalign=0.5))

## THE BIG EXPRESSIONS
image tenna fired = At("images/portraits/tenna/big/tenna_fired.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,300), xalign=0.55))
image tenna hug = At("images/portraits/tenna/big/tenna_hug.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,175), xalign=0.5))
image tenna headpat = At("images/portraits/tenna/big/tenna_headpat.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(25,175), xalign=0.45))

transform antenna3L_anim:
    subpixel True
    anchor (1.0,1.0)
    transform_anchor True 
    rotate 30 xzoom 0.5 yzoom 1.5
    easein_elastic 2 rotate 0 xzoom 1.0 yzoom 1.0
transform antenna3R_anim:
    subpixel True
    anchor (0.0,1.0)
    transform_anchor True
    rotate -30  xzoom 0.5 yzoom 1.5
    easein_elastic 2 rotate 0 xzoom 1.0 yzoom 1.0

transform bloom2_anim:
    anchor (0.5,0.5)
    zoom 0.0
    easein_elastic 2 zoom 1.0



layeredimage tenna outstretched:
    at [outline_transform(4, "#000000", 4.0)]
    zoom 0.5
    offset (0,475)
    xalign 0.5


    attribute antenna3L at antenna3L_anim:
        "images/portraits/tenna/outstretched/tenna_outstretched_antenna3L.png"
        offset (970,487)

    attribute antenna3R at antenna3R_anim:
        "images/portraits/tenna/outstretched/tenna_outstretched_antenna3R.png"
        offset (770,487)
    attribute base default

    if tenna_face == 4:
        "images/portraits/tenna/outstretched/tenna_outstretched_face_flower3.png"
    elif tenna_face == 5:
        "images/portraits/tenna/outstretched/tenna_outstretched_face_flower3bloom.png"
    elif tenna_face == 3:
        "images/portraits/tenna/outstretched/tenna_outstretched_face_flower2.png"
    elif tenna_face == 2:
        "images/portraits/tenna/outstretched/tenna_outstretched_face_flower.png"
    else:
        "images/portraits/tenna/outstretched/tenna_outstretched_face_normal.png"

    attribute bloom at bloom2_anim:
        offset (929,718)
    attribute bloom2 at bloom2_anim:
        offset (923,703)
    attribute bloom3 at bloom2_anim:
        offset (918,702)





#### SMALL MIKE

image smallmike chesthand = At("images/portraits/smallmike/smallmike_chesthand.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(0,100)))
image smallmike angrypoint = At("images/portraits/smallmike/smallmike_angrypoint.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(0,100)))
image smallmike angryhips = At("images/portraits/smallmike/smallmike_angryhips.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(0,100)))
image smallmike maskgrab = At("images/portraits/smallmike/smallmike_maskgrab.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.55, offset=(0,100)))

#### LANINO & ELNINA

## TOGETHER

transform backrainbow_anim:
    anchor (0.5,0.5) pos (0.9,0.7)
    parallel:
        alpha 0.0
        ease_quad 0.3 alpha 1.0
    parallel:
        xzoom 0.4 yzoom 1.6
        ease_quad 0.2 xzoom 1.0 yzoom 1.0
    

layeredimage weatherduo:
    zoom 0.5
    yoffset 100
    attribute backrainbow at backrainbow_anim
    attribute base default
    group face:
        attribute happy default
        attribute surprised

## FACEAWAY

layeredimage lanino faceaway:
    zoom 0.5
    offset (-25,100)
    attribute base default
    group face:
        attribute annoyed default
        attribute sad

layeredimage elnina faceaway:
    zoom 0.5
    offset (25,100)
    attribute base default
    group face:
        attribute annoyed default
        attribute sad

## BACKSTAND (DEFAULT)

layeredimage lanino backstand:
    zoom 0.5
    yoffset 100
    attribute base default
    group face:
        attribute happy default
        attribute worried

layeredimage elnina backstand:
    zoom 0.5
    yoffset 100
    attribute base default
    group face:
        attribute happy default
        attribute worried

#### PIPPINSES

## TOGETHER, UPCLOSE

layeredimage pippinsduo tease:
    zoom 0.5
    yoffset 50
    attribute base default
    group face:
        attribute closed

## PIPPINS A (THIN)

image pippinsa norm:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsa_norm.png"

image pippinsa sad:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsa_sad.png"

image pippinsa explain:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsa_explain.png"

image pippinsa hooves:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsa_hooves_base.png"

image outline:
    zoom 0.5 yoffset 100
    "images/portraits/pippinses/pippinsa_hoovesoutline.png"
    alpha 0
    pause 0.1
    alpha 1.0
    pause 0.1
    repeat 3

image pippinsa sad:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsa_sad.png"

image pippinsa annoyed:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsa_annoyed.png"

image pippinsa curious:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsa_curious.png"

layeredimage pippinsa shushed:
    zoom 0.5
    yoffset 100
    attribute base default
    group face:
        attribute norm default
        attribute sweat

## PIPPINS B (FAT)

image pippinsb norm:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsb_norm.png"

image pippinsb shush:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsb_shush.png"

image pippinsb shush2:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsb_shush2.png"

image pippinsb annoyed:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsb_annoyed.png"

image pippinsb leanin:
    zoom 0.5
    yoffset 100
    "images/portraits/pippinses/pippinsb_leanin.png"

layeredimage pippinsb confused:
    zoom 0.5
    yoffset 100
    attribute base default
    attribute question

layeredimage pippinsb sigh:
    zoom 0.5
    yoffset 100
    attribute base default
    attribute puff

#### FAKE MIKE TRIO

## FURNITURE


image chair = At("images/portraits/miketrio/chair.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(-10,150)))
image desk = At("images/portraits/miketrio/desk.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.5, offset=(-10,150)))


## GRIPPINS

image grippins throw:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_throw.png"

image grippins sideangry:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_sideangry.png"

image grippins frontangry:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_frontangry.png"

image grippins surprised:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_surprised.png"

image grippins shocked:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_shocked.png"

image grippins shy:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_shy.png"

image grippins resigned:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_resigned.png"

image grippins worried:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_worried.png"

image grippins nervous:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_nervous.png"

image grippins underdesk:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_underdesk.png"

image grippins sidesmirk:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_sidesmirk.png"

image grippins frontsmirk:
    zoom 0.5
    offset (-10,150)
    "images/portraits/miketrio/grippins_frontsmirk.png"

layeredimage grippins explain:
    zoom 0.5
    offset (-10,150)
    attribute base default
    group face:
        attribute normal default
        attribute annoyed


## PLUEY

image pluey normal:
    zoom 0.5
    offset (20,140)
    outline_transform (5, "#ffffff", 4.0)
    "images/portraits/miketrio/pluey_normal.png"

image pluey sad:
    zoom 0.5
    offset (-29,140)
    outline_transform (5, "#ffffff", 4.0)
    "images/portraits/miketrio/pluey_sad.png"

image pluey happy:
    zoom 0.5
    offset (20,140)
    outline_transform (5, "#ffffff", 4.0)
    "images/portraits/miketrio/pluey_happy.png"

image pluey shock:
    zoom 0.5
    offset (20,140)
    outline_transform (5, "#ffffff", 4.0)
    "images/portraits/miketrio/pluey_shock.png"

image pluey annoyed:
    zoom 0.5
    offset (-29,140)
    outline_transform (5, "#ffffff", 4.0)
    "images/portraits/miketrio/pluey_annoyed.png"

image pluey resigned:
    zoom 0.5
    offset (-29,140)
    outline_transform (5, "#ffffff", 4.0)
    "images/portraits/miketrio/pluey_resigned.png"

image pluey concerned:
    zoom 0.5
    offset (-29,140)
    outline_transform (5, "#ffffff", 4.0)
    "images/portraits/miketrio/pluey_concerned.png"




## ZAPPER

image zapper normal = At("images/portraits/miketrio/zapper_normal.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.25, offset=(0,-200)))
image zapper sad = At("images/portraits/miketrio/zapper_sad.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.25, offset=(0,-200)))
image zapper nervous = At("images/portraits/miketrio/zapper_nervous.png", outline_transform(5, "#000000", 4.0),Transform(zoom=0.25, offset=(0,-200)))

#### PROTAG HANDS + OTHER LIMBS

image tenna_arm = At("images/cgs/tenna_arm.png", Transform(zoom=0.5))


## OTHER
image graffiti_room = At("images/other/graffiti_show.png", Transform(zoom=0.5))

############ CGS

#### FULL

image tennasleep = At("images/cgs/tennasleep.png", Transform(zoom=0.5))

## drawer scene


image mike drawer1 = At("images/cgs/draweropen/mike_1.png", Transform(zoom=0.5))
image mike drawer2 = At("images/cgs/draweropen/mike_2.png", Transform(zoom=0.5))
image mike drawer3 = At("images/cgs/draweropen/mike_3.png", Transform(zoom=0.5))

image drawerbg = At("images/cgs/draweropen/bg.png", Transform(zoom=0.5))
image drawerfront = At("images/cgs/draweropen/drawer_front.png", Transform(zoom=0.5))
image drawerhandle = At("images/cgs/draweropen/drawer_handle.png", Transform(zoom=0.5))
image drawerbucket = Tile("images/cgs/draweropen/drawer_interior.png",xysize=(20000,155), yoffset = 8)
image drawercontents = HBox("drawerhandle", "drawerbucket")
#### MINI

image mike_tennaroom_1 = At("images/cgs/mike_tennaroom_1.png", Transform(zoom=0.5))
image mike_tennaroom_2 = At("images/cgs/mike_tennaroom_2.png", Transform(zoom=0.5))
image mike_tennaroom_3 = At("images/cgs/mike_tennaroom_3.png", Transform(zoom=0.5))






####### THERAPY MINIGAME SCENE

image therapy_bg:
    zoom 0.5
    block:
        "images/cgs/therapy/therapy_bg_1.png"
        pause 0.2
        "images/cgs/therapy/therapy_bg_2.png"
        pause 0.2
        "images/cgs/therapy/therapy_bg_3.png"
        pause 0.2
        repeat

layeredimage therapytenna:
    zoom 0.5
    attribute base default
    group face auto:
        attribute contemplative default


####### ENDINGS

image trank_cg = At("images/cgs/trank_end.png", Transform(zoom=0.5))
image srank_cg = At("images/cgs/srank_end.png", Transform(zoom=0.5))

image arank_cg = At("images/cgs/arank_end.png", Transform(zoom=0.5))
image brank_cg = At("images/cgs/brank_end.png", Transform(zoom=0.5))
image crank_cg = At("images/cgs/crank_end.png", Transform(zoom=0.5))

image gameover_cg = At("images/cgs/gameover_1.png")
image gameover2_cg = At("images/cgs/gameover_2.png")




#### YOU'RE FIRED text sequence

default fired_bottomtext = 355

transform fired_text_shake:
    subpixel True
    anchor (0.5,0.5)
    on show:
        parallel:
            zoom 0
            easein_elastic 0.5 zoom 1
        parallel:
            block:
                ease 0.05 xoffset 2 yoffset 0
                ease 0.05 xoffset 2 yoffset 2
                ease 0.05 xoffset 0 yoffset 2
                ease 0.05 xoffset 0 yoffset 0
                repeat
    on idle:
        block:
            ease 0.05 xoffset 2 yoffset 0
            ease 0.05 xoffset 2 yoffset 2
            ease 0.05 xoffset 0 yoffset 2
            ease 0.05 xoffset 0 yoffset 0
            repeat

    on hide:
        alpha 0.0

screen fired_text:
    zorder 96
    timer 0.2 action Show("fired_text_y") 
    timer 0.3 action Show("fired_text_o")
    timer 0.4 action Show("fired_text_u")
    timer 0.5 action Show("fired_text_apostrophe")
    timer 0.6 action Show("fired_text_r")
    timer 0.7 action Show("fired_text_e")


    timer 1.0 action Show("fired_text_f")
    timer 1.1 action Show("fired_text_i")
    timer 1.3 action Show("fired_text_e2")
    timer 1.2 action Show("fired_text_r2")
    timer 1.4 action Show("fired_text_d")
    timer 1.5 action Show("fired_text_exclamation")


    timer 5.2 action Hide('fired_text_y')
    timer 5.2 action Hide("fired_text_o")
    timer 5.2 action Hide("fired_text_u")
    timer 5.2 action Hide("fired_text_apostrophe")
    timer 5.2 action Hide("fired_text_r")
    timer 5.2 action Hide("fired_text_e")
    timer 5.2 action Hide("fired_text_f")
    timer 5.2 action Hide("fired_text_i")
    timer 5.2 action Hide("fired_text_e2")
    timer 5.2 action Hide("fired_text_r2")
    timer 5.2 action Hide("fired_text_d")
    timer 5.2 action Hide("fired_text_exclamation")




image fired_text_top = ParameterizedText(size=150, color="ffffff", outline_transform=(5, "#000000", 4.0))

### subscreens for each text

screen fired_text_y:
    text "Y" size 160 pos (144,0.15) style "game_menu_label_text" at fired_text_shake
screen fired_text_o:
    text "O" size 160 pos (275,0.15) style "game_menu_label_text" at fired_text_shake
screen fired_text_u:
    text "U" size 160 pos (400,0.15) style "game_menu_label_text" at fired_text_shake
screen fired_text_apostrophe:
    zorder 97
    text "'" size 160 pos (490,0.15) style "game_menu_label_text" at fired_text_shake 
screen fired_text_r:
    text "R" size 160 pos (550,0.15) style "game_menu_label_text" at fired_text_shake
screen fired_text_e:
    text "E" size 160 pos (670,0.15) style "game_menu_label_text" at fired_text_shake

screen fired_text_f:
    text "F" size 160 pos (160,500) style "game_menu_label_text" at fired_text_shake
screen fired_text_i:
    text "I" size 160 pos (260,500) style "game_menu_label_text" at fired_text_shake
screen fired_text_r2:
    text "R" size 160 pos (370,500) style "game_menu_label_text" at fired_text_shake
screen fired_text_e2:
    text "E" size 160 pos (490,500) style "game_menu_label_text" at fired_text_shake
screen fired_text_d:
    text "D" size 160 pos (630,500) style "game_menu_label_text" at fired_text_shake
screen fired_text_exclamation:
    text "!" size 160 pos (700,500) style "game_menu_label_text" at fired_text_shake

############ BGS

#### bg images

image fire:
    "images/bgs/fire.png"

image red = Solid("#960811")


    

image greenroom:
    align (0.0, 0.5)
    "images/bgs/greenroom.png"

image stage:
    align (0.0, 0.5)
    "images/bgs/stage.png"

image bedroom:
    align (0.0, 0.5)
    "images/bgs/tenna_bedroom.png"

image mikeroom:
    align (0.0, 0.5)
    "images/bgs/mikeroom.png"

image backroom:
    align (0.0, 0.5)
    "images/bgs/backroom.png"

image coldplace:
    align (0.0, 0.5)
    block:
        "images/bgs/coldplace_1.png"
        pause 0.2
        "images/bgs/coldplace_2.png"
        pause 0.2
        "images/bgs/coldplace_3.png"
        pause 0.2
        repeat

#### bg patterns

image star_tile:
    Tile(At("images/bgs/tiles/startile.png", Transform(zoom = 0.5, rotate = 45)), xysize=(1600,1200))
    pos (480,1200)
    linear 10 pos(820,860)
    repeat

image weather_tile:
    Tile(At("images/bgs/tiles/weathertile.png", Transform(zoom = 0.5, rotate = 45)), xysize=(3200,2400))
    pos (480,1200)
    linear 10 pos(818,860)
    repeat

image dice_tile:
    Tile(At("images/bgs/tiles/dicetile.png", Transform(zoom = 0.5, rotate = 45)), xysize=(1600,1200))
    pos (480,1200)
    linear 10 pos(820,860)
    repeat

image tv_tile:
    Tile(At("images/bgs/tiles/tvtile.png", Transform(zoom = 0.5, rotate = 45)), xysize=(1600,1200))
    pos (480,1200)
    linear 10 pos(820,860)
    repeat


#### BG TRANSFORMS AND TRANSITIONS

transform bgshow():
    subpixel True
    zoom 0.5
    crop (0, 0.5, 1.0, 0.0)
    easein_bounce 1 crop (0, 0.0, 1.0, 1.0)

transform bghide():
    subpixel True
    zoom 0.5
    crop (0, 0.0, 1.0, 1.0)
    easein_bounce 1 crop (0, 0.5, 1.0, 0.0)

define scene_change = Swing(delay=0.3, vertical=False, reverse=False, background='#000', flatten=True)
define scene_change_fast = Swing(delay=0.25, vertical=False, reverse=False, background='#000', flatten=True)




############ PIXELS

define pixelypos = 278
define tennapixel_x = 250
define mikepixel_x = 150
define tvstaffpixel_x = 400


####### CHARACTERS

#### TV WORLD STAFF

image mado_pixelzoom = At("mado_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image mado_pixelfar= At("images/pixels/characters/mado_tiny.png",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image mado_balloon= At("images/pixels/characters/mado_balloon.png",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image mado_cactus= At("images/pixels/characters/mado_cactus.png",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image pippins_pixel = At("pippins_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image pippinsdark_pixel = At("pippinsdark_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image zapper_pixel = At("zapper_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image watercooler_pixel = At("watercooler_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image watercoolerdark_pixel = At("watercoolerdark_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image zapperdark_pixel = At("zapperdark_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image shuttah_pixel = At("shuttah_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image shuttahdark_pixel = At("shuttahdark_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image shadowguy_pixel = At("shadowguy_pixelframes", Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image shadowguydark_pixel = At("shadowguydark_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image ramb_pixel = At("ramb_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))
image rambdark_pixel = At("rambdark_pixelframes",Transform(zoom=2, pos=(tvstaffpixel_x,pixelypos)))




image mado_pixelframes:
        animation
        "images/pixels/characters/mado_zoom_1.png"
        pause 0.4
        "images/pixels/characters/mado_zoom_2.png"
        pause 0.4
        repeat

image pippins_pixelframes:
        animation
        "images/pixels/characters/pippins1.png"
        pause 0.4
        "images/pixels/characters/pippins2.png"
        pause 0.4
        repeat

image pippinsdark_pixelframes:
        animation
        "images/pixels/characters/pippins_dark1.png"
        pause 0.4
        "images/pixels/characters/pippins_dark2.png"
        pause 0.4
        repeat

image zapper_pixelframes:
        animation
        "images/pixels/characters/zapper1.png"
        pause 0.4
        "images/pixels/characters/zapper2.png"
        pause 0.4
        repeat

image zapperdark_pixelframes:
        animation
        "images/pixels/characters/zapper_dark1.png"
        pause 0.4
        "images/pixels/characters/zapper_dark2.png"
        pause 0.4
        repeat

image shuttah_pixelframes:
        animation
        "images/pixels/characters/shuttah1.png"
        pause 0.4
        "images/pixels/characters/shuttah2.png"
        pause 0.4
        repeat

image shuttahdark_pixelframes:
        animation
        "images/pixels/characters/shuttah_dark1.png"
        pause 0.4
        "images/pixels/characters/shuttah_dark2.png"
        pause 0.4
        repeat

image shadowguy_pixelframes:
        animation
        "images/pixels/characters/shadowguy1.png"
        pause 0.4
        "images/pixels/characters/shadowguy2.png"
        pause 0.4
        repeat

image shadowguydark_pixelframes:
        animation
        "images/pixels/characters/shadowguy_dark1.png"
        pause 0.4
        "images/pixels/characters/shadowguy_dark2.png"
        pause 0.4
        repeat

image watercooler_pixelframes:
        ypos pixelypos
        "images/pixels/characters/watercooler.png"
image watercoolerdark_pixelframes:
        ypos pixelypos
        "images/pixels/characters/watercooler_dark.png"

image ramb_pixelframes:
        ypos pixelypos
        "images/pixels/characters/ramb1.png"

image rambdark_pixelframes:
        ypos pixelypos
        "images/pixels/characters/ramb_dark.png"


#### MIKE?

image mike_pixel = At("mike_pixel_frames",Transform(zoom=2, pos=(mikepixel_x,pixelypos)))
image mikedark_pixel = At("mikedark_pixel_frames",Transform(zoom=2, pos=(mikepixel_x,pixelypos)))
image mikesadtenna_pixel = At("mikesadtenna_pixel_frames",Transform(zoom=2, pos=(mikepixel_x,pixelypos)))

image mike_pixel_frames:
        animation
        "images/pixels/characters/mike1.png"
        pause 0.2
        "images/pixels/characters/mike2.png"
        pause 0.2
        "images/pixels/characters/mike3.png"
        pause 0.2
        "images/pixels/characters/mike4.png"
        pause 0.2
        repeat

image mikedark_pixel_frames:
        animation
        "images/pixels/characters/mike_dark1.png"
        pause 0.2
        "images/pixels/characters/mike_dark2.png"
        pause 0.2
        "images/pixels/characters/mike_dark3.png"
        pause 0.2
        "images/pixels/characters/mike_dark4.png"
        pause 0.2
        repeat

image mikesadtenna_pixel_frames:
        animation
        "images/pixels/characters/mike_sadtenna1.png"
        pause 0.2
        "images/pixels/characters/mike_sadtenna2.png"
        pause 0.2
        "images/pixels/characters/mike_sadtenna3.png"
        pause 0.2
        "images/pixels/characters/mike_sadtenna4.png"
        pause 0.2
        repeat


#### TENNA

image tenna_pixel = At("tenna_pixel_frames",Transform(zoom=2, pos=(tennapixel_x,pixelypos)))
image tennadark_pixel = At("tennadark_pixel_frames",Transform(zoom=2, pos=(tennapixel_x,pixelypos)))
image tennasmall_pixel = At("tennasmall_pixel_frames",Transform(zoom=2, pos=(tennapixel_x,pixelypos)))
image tennasmalldark_pixel = At("tennasmalldark_pixel_frames",Transform(zoom=2, pos=(tennapixel_x,pixelypos)))

image tenna_pixel_frames:

        animation
        "images/pixels/characters/tenna1.png"
        pause 0.2
        "images/pixels/characters/tenna2.png"
        pause 0.2
        "images/pixels/characters/tenna3.png"
        pause 0.2
        "images/pixels/characters/tenna4.png"
        pause 0.2
        repeat

image tennadark_pixel_frames:
        animation
        "images/pixels/characters/tenna_dark1.png"
        pause 0.2
        "images/pixels/characters/tenna_dark2.png"
        pause 0.2
        "images/pixels/characters/tenna_dark3.png"
        pause 0.2
        "images/pixels/characters/tenna_dark4.png"
        pause 0.2
        repeat

image tennasmall_pixel_frames:
        animation
        "images/pixels/characters/tennasmall1.png"
        pause 0.2
        "images/pixels/characters/tennasmall2.png"
        pause 0.2
        "images/pixels/characters/tennasmall3.png"
        pause 0.2
        "images/pixels/characters/tennasmall4.png"
        pause 0.2
        repeat

image tennasmalldark_pixel_frames:
        animation
        "images/pixels/characters/tennasmall_dark1.png"
        pause 0.2
        "images/pixels/characters/tennasmall_dark2.png"
        pause 0.2
        "images/pixels/characters/tennasmall_dark3.png"
        pause 0.2
        "images/pixels/characters/tennasmall_dark4.png"
        pause 0.2
        repeat

####### BGS + BG ASSETS

transform tvworld_loop:
    xpos 0 ypos 68
    linear 60 xpos -3200
    repeat

image intermission_backframe: 
    "gui/intermission_backframe.png"
    zoom 0.5

image intermission_frame = "gui/intermission_mainframe.png"

#### BGS

image tvworld_fullrooms = HBox("tvworld_1", "tvworld_2", "tvworld_3", "tvworld_4", "tvworld_1")



image tvpose_tile:  
    animation
    Tile(At("tv_pose"), xysize=(1600,1200))
    matrixcolor BrightnessMatrix(-0.4)
    pos (480,480)
    linear 10 pos(600,600)
    repeat

image tv_pose:
        animation
        "images/pixels/tvpose/tvpose1.png"
        pause 0.2
        "images/pixels/tvpose/tvpose2.png"
        pause 0.2
        "images/pixels/tvpose/tvpose3.png"
        pause 0.2
        "images/pixels/tvpose/tvpose4.png"
        pause 0.2
        "images/pixels/tvpose/tvpose5.png"
        pause 0.2
        "images/pixels/tvpose/tvpose6.png"
        pause 0.2
        "images/pixels/tvpose/tvpose7.png"
        pause 0.2
        "images/pixels/tvpose/tvpose8.png"
        pause 0.2
        "images/pixels/tvpose/tvpose9.png"
        pause 0.2
        "images/pixels/tvpose/tvpose10.png"
        pause 0.2
        "images/pixels/tvpose/tvpose11.png"
        pause 0.2
        "images/pixels/tvpose/tvpose12.png"
        pause 0.2
        "images/pixels/tvpose/tvpose13.png"
        pause 0.2
        "images/pixels/tvpose/tvpose14.png"
        pause 0.2
        "images/pixels/tvpose/tvpose15.png"
        pause 0.2
        "images/pixels/tvpose/tvpose16.png"
        pause 0.2
        "images/pixels/tvpose/tvpose17.png"
        pause 0.2
        "images/pixels/tvpose/tvpose18.png"
        pause 0.2
        "images/pixels/tvpose/tvpose19.png"
        pause 0.2
        "images/pixels/tvpose/tvpose20.png"
        pause 0.2
        "images/pixels/tvpose/tvpose21.png"
        pause 0.2
        "images/pixels/tvpose/tvpose22.png"
        pause 0.2
        "images/pixels/tvpose/tvpose23.png"
        pause 0.2
        repeat










image trank_screen:
        zoom 2 ypos pixelypos
        block:
            "images/pixels/bgs/t_rank_screen.png"
            ease 5 matrixcolor TintMatrix("1B377F")
            ease 5 matrixcolor TintMatrix("147ABF")
            ease 5 matrixcolor TintMatrix("ffffff")
            repeat

image trank_room_open:
        zoom 2
        ypos pixelypos
        "images/pixels/bgs/t_rank_1.png"

image trank_room_closed:
        zoom 2
        ypos pixelypos
        "images/pixels/bgs/t_rank_2.png"

image trank_room_closed:
        zoom 2
        ypos pixelypos
        "images/pixels/bgs/t_rank_2.png"


image tvworld_1:
        zoom 2
        "images/pixels/bgs/tvworld_1.png"

image tvworld_2:
        zoom 2
        "images/pixels/bgs/tvworld_2.png"

image tvworld_3:
    parallel:
        zoom 2
    parallel:
        "images/pixels/bgs/tvworld_3_1.png"
        pause 0.4
        "images/pixels/bgs/tvworld_3_2.png"
        pause 0.4
        repeat

image tvworld_4:
        zoom 2
        "images/pixels/bgs/tvworld_4.png"

image tvworld_5:
        ypos pixelypos
        zoom 2
        "images/pixels/bgs/tvworld_5.png"


########### OTHER IMAGE ASSETS


image tenna_big = At("images/pixels/bgs/tenna_big.png", Transform(pos=(145,222), zoom=2))
image tenna_huge = At("images/pixels/bgs/tenna_huge.png", Transform(pos=(109,222), zoom=2))
image tenna_huge_alt = At("images/pixels/bgs/tenna_huge_alt.png", Transform(zoom=2))
image tennadark_big = At("images/pixels/bgs/tenna_big_dark.png", Transform(pos=(389,222), zoom=2))
image encounter_frame = At("images/pixels/encounter_frame.png", Transform(pos=(400,250)))
image choice_vignette = "gui/choice_vignette.png"

image pixelblank = At(Solid("fff"), Transform(alpha=0))


image uglytenna_1 = At("images/pixels/characters/uglytenna_1.png", Transform(zoom=2))
image uglytenna_2 = At("images/pixels/characters/uglytenna_2.png", Transform(zoom=2))

##### OBJECTS AND STUFF

image tenna_note = At("images/other/tenna_therapynote.png", Transform(zoom=0.5))
image grippins_note = At("images/other/grippins_instructions.png", Transform(zoom=0.5))

image bacon = At("images/other/bacon.png", Transform(zoom=0.5))
image toast = At("images/other/toast.png", Transform(zoom=0.5))
image orangeslice = At("images/other/orangeslice.png", Transform(zoom=0.5))
image splat_red = At("images/other/splat_red.png", Transform(zoom=0.5))
image splat_orange = At("images/other/splat_orange.png", Transform(zoom=0.5))
image splat_yellow = At("images/other/splat_yellow.png", Transform(zoom=0.5))

###################################### IMAGE TRANSFORMS AND EFFECTS

##### OUTLINE DEFINES

image small_outline = Window(Transform(Placeholder(), crop=(0.0, 0.08, 1.0, 0.4)), style='empty', padding=(25, 25))


##### FULL TRANSITIONS

## for showing/hiding the vignette when a choice appears in game

define vignette = Dissolve(0.2)


##### TRANSFORMS

## for movement

transform flipout:
    xzoom 1.0
    easein 0.1 xzoom 0.0
transform flipin:
    xzoom 0.0
    easein 0.1 xzoom 1.0