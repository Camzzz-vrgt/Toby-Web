default persistent.tenna_discussion = False

label bonusroom:

    stop music fadeout 1.0
    pause 2


    show screen nvl_quickmenu()
    nvl clear

    show tvworld_5:
        xpos 0.0 ypos 68
    show intermission_frame
    show intermission_backframe
    show mado_pixelfar:
        xoffset -20 yoffset -60
    show mado_cactus behind mado_pixelfar:
        xoffset -45 yoffset -140

    with wipedown

    pause 1

    play music "audio/music/mancountry.ogg" 


    show mado_pixelzoom:
        xoffset 12 yoffset -140 alpha 0
        linear 1 xoffset 12 yoffset -147 alpha 1
    show mado_balloon behind mado_pixelzoom:
        yoffset -143 alpha 0
        linear 1 yoffset -150 alpha 1


    pause 2

    m_nvl "Oh!"

    m_nvl "So you can see me. Awesome."
    nvl clear
    if persistent.tenna_discussion == False:
        $ intermission_choice_ypos = 0.66
        $ intermission_choice_spacing = 0
    else:
        $ intermission_choice_ypos = 0.67
        $ intermission_choice_spacing = -5

    m_nvl "Well, welcome to {color=0C8563}madocountry!"

    m_nvl "Or, as some people call it… the dev room."

    nvl clear

    m_nvl "I'm sure you've got questions, so ask away!"

    m_nvl "Just be aware that some of these discussions are long."

    nvl clear

    m_nvl "So you might wanna play with the volume settings…"

    m_nvl "But I hope you learn something interesting here!"

    play sound "audio/sfx/general/snd_board_text_main_end.ogg"
    nvl clear



    label bonusroom_questions:

        m_nvl "Now, what would you like to ask?"

        play sound "audio/sfx/general/snd_board_text_main_end.ogg"

        menu(nvl=True):
            n_nvl ""
            ">Who are you?":
                jump whoru
            ">How long did this take?":
                jump game_length
            ">Why did you make this?":
                jump whythough
            ">Okay but why did you make a game about tenna?" if persistent.tenna_discussion:
                    jump whytenna
            ">Nothing else":
                jump finished

    label whoru:
        nvl clear
        m_nvl "I'm Mado, a Darkner born from a cactus seed."
        m_nvl "Invisible to the residents of tv world…"
        m_nvl "…except for you, I guess."
        nvl clear
        m_nvl "And this game is the place I call home!"
        m_nvl "…Don't think about it too hard."
        m_nvl "I'm just the director's mouthpiece."
        play sound "audio/sfx/general/snd_board_text_main_end.ogg"
        nvl clear
        pause 1
        jump bonusroom_questions

    label game_length:
        nvl clear
        m_nvl "6-7 months, give or take."
        m_nvl "Development started in October 2025."
        nvl clear
        m_nvl "For most of it, I treated this game as a side project."
        m_nvl "I chipped away at it after freelance work."
        nvl clear
        m_nvl "I only focused on this project in May."
        m_nvl "A lot of the game was added last month!"
        nvl clear
        m_nvl "I used many new techiques, like these pixel cutscenes…"
        m_nvl "…and I think they turned out well."
        nvl clear
        m_nvl "While I handled most of the game by myself…"
        m_nvl "…the minigames were handled by the talented {color=0C8563}Azxiana."
        nvl clear
        m_nvl "Without her help, this game would not exist."
        nvl clear
        m_nvl "She's a fantastic coder, incredibly kind…"
        m_nvl "…and she should be in a job that gives her and"
        m_nvl "her skills the respect they deserve."
        nvl clear
        m_nvl "On a similar note…"
        nvl clear
        m_nvl "I asked {color=0C8563}rootvegetableboy, narcolepsydriver,"
        m_nvl "{color=0C8563}rainywishes{/color} and {color=0C8563}gardenpet{/color} to handle the soundtrack."
        nvl clear
        m_nvl "And they delivered with flying colors!"
        nvl clear
        m_nvl "Specific credits are in the music room…"
        m_nvl"…but if you're looking for a musician,"
        m_nvl "please reach out to them. they're amazing!"
        nvl clear
        m_nvl "Finally, I'd like to thank…"
        m_nvl "…my friends and the mod team of the TV Time fanbook."
        nvl clear
        m_nvl "This game was a massive undertaking."
        m_nvl "but their support brought me to the finish line."
        play sound "audio/sfx/general/snd_board_text_main_end.ogg"
        nvl clear
        pause 1
        jump bonusroom_questions

    label whythough:
        nvl clear
        m_nvl "In short, because…"
        m_nvl "…I wanted to make a game about the charm of TV World."
        nvl clear
        m_nvl "It takes place before Chapter 3…"
        m_nvl "…but after a certain ill-advised contract."
        nvl clear
        m_nvl "In full…  Let me tell you a story."
        m_nvl "It's a long one, so sit down and get comfortable."
        play sound "audio/sfx/general/snd_board_text_main_end.ogg"
        nvl clear
        pause 1
        mn_nvl "Back in September 2015, Undertale released."
        mn_nvl "At the time, I was active on Tumblr… and a lot of people posted about the game on there and Twitter."
        mn_nvl "So I made a public Twitter account to share my findings and fanart."
        nvl clear
        mn_nvl "Alphys and Undyne became my favorite characters… but they weren't the most popular characters. "
        mn_nvl "So to show people why I liked them, I made a cute visual novel about them, set in one of the Neutral routes."
        nvl clear
        mn_nvl "…But I never released it. I don't remember why, because I remember I was quite proud of it."
        nvl clear
        mn_nvl "Anyways, Undertale (and that fangame) kickstarted my interest in gamedev as a career."
        nvl clear
        mn_nvl "Over the years, I participated in game jams, released several visual novels on Steam, etc. etc."  
        mn_nvl "My coding, art, and writing skills evolved — as did my games and their stories. "
        nvl clear
        mn_nvl "Along the way, I followed new updates on Undertale, and then Deltarune."  
        mn_nvl "God, I still remember where I was when the SURVEY_PROGRAM dropped."
        nvl clear
        mn_nvl "I was in the main hall of my art school on lunch break, rushing through the story before I had to go back to animation class." 
        nvl clear
        mn_nvl "From day one, I knew Deltarune would be good."
        mn_nvl "Chapter 1 had promising foundations."
        mn_nvl "Chapter 2's jokes left me wheezing on the floor."  
        nvl clear
        mn_nvl "But Chapters 3 + 4 made me fall in love with the game."
        mn_nvl "As of writing, Chapter 4 is my favorite."
        mn_nvl "I could talk about why, but we'd be here all day, so I'll be concise."
        nvl clear
        mn_nvl "Whenever I'm worried about my work - both original and fanworks -"
        mn_nvl "I reread Gerson's tea party with Susie, and Susie's letter to Alvin."
        nvl clear
        mn_nvl "Both of these scenes remind me why I continue to make games."
        mn_nvl "I want my work to resonate with people like Undertale and Deltarune did with me."
        nvl clear
        mn_nvl "So if Chapter 4 is my favorite… why did I make a fangame about CHAPTER 3?"
        mn_nvl "Simple!"
        mn_nvl "Tenna is my favorite Deltarune character."
        play sound "audio/sfx/general/snd_board_text_main_end.ogg"
        nvl clear
        pause 1
        $ intermission_choice_ypos = 0.67
        $ intermission_choice_spacing = -5
        $ persistent.tenna_discussion = True
        jump bonusroom_questions

    label whytenna:
        nvl clear
        m_nvl "Look. You've seen the splashscreens."
        m_nvl "You know this game was made for a Tenna fanbook."
        nvl clear
        m_nvl "The game HAD to be about him."
        m_nvl "And it is!"
        nvl clear
        m_nvl "But it's also about the wacky world he lives in,"
        m_nvl "and the people he shares it with."
        nvl clear
        mn_nvl "In my interpretation, TV WORLD and its inhabitants are extensions of Tenna himself."
        mn_nvl "so I wanted to make a game that captured the Mario Party-like fun of Chapter 3, with cartoony animations, sound effects and minigames."
        nvl clear
        mn_nvl "In particular, I was inspired by Mario Party Advance, my favorite Mario Party."
        mn_nvl "(even though critics hated it. And they're wrong.)"
        nvl clear
        mn_nvl "Coming back to Tenna, I fell for him a week after I finished Chapters 3 and 4."
        mn_nvl "He entered my brain like a prion disease, and he hasn't left since."
        nvl clear
        mn_nvl "Two traits made me fall for him."
        mn_nvl "His love for a family that doesn't know he exists, and his theme of lost innocence."
        nvl clear
        mn_nvl "Since this game is comedic (and set before Chapter 3), I didn't delve into his tragedy."
        nvl clear
        mn_nvl "I've explored this side in another Tenna work - an MV set to \"ayano's theory of happiness\" from kagepro."
        mn_nvl "…But you can find hints of his tragedy in this game, if you squint."
        nvl clear
        mn_nvl "I'm weak to stories about familial love."
        mn_nvl "And for me, Tenna is the embodiment of that."
        nvl clear
        mn_nvl "He has traits from every Dreemurr."
        mn_nvl "He's parental, he's childish, he's even the family dog and cat!"
        mn_nvl "He's happy when they're happy, and he's hurt when they're hurt."
        nvl clear
        mn_nvl "He's a Darkner who's carved from their love and their pain."   
        nvl clear
        mn_nvl "As a TV, Tenna can give Kris a temporary escape into a world where everyone's friends, no one fights, and the fun never ends…"
        mn_nvl "but he can't make them smile anymore."
        mn_nvl "He's a failed coping mechanism."
        nvl clear
        mn_nvl "And he's helpless in the Light World."
        mn_nvl "He's a scuffed, heavy CRT, which means he can't move to new places like smaller or immaterial Darkeners."
        nvl clear
        mn_nvl "You need to consciously save him throughout Chapters 3 + 4, or else his body's sent to the garbage dump."
        mn_nvl "So basically he's the most moe character in Deltarune♡"
        nvl clear
        mn_nvl "But I also like how cartoony and expressive he is - and that's what I focused on here."
        mn_nvl "I grew up with the Looney Tunes as a kid, and I watched the Golden Collections with my parents."
        mn_nvl "He feels like he stepped right out of them."
        nvl clear
        mn_nvl "I also see Tenna as a bad boss in the same way that a Looney Tunes villain is a bad person."
        mn_nvl "His employees don't take his penalties seriously because they know they can bully him later."
        nvl clear
        mn_nvl "And Tenna, people-pleaser that he is, will always cave when they threaten him back."
        nvl clear
        mn_nvl "To me, a TV World workday is like living in a classic slapstick cartoon."
        mn_nvl "Think about a Pippins swapping Tenna's fountain pen with a dynamite stick, and the stick blowing up in his face."
        mn_nvl "Let this inspire you."
        nvl clear
        mn_nvl "Anyways, to bring this ramble to a close… I love Tenna in the same way I love the toy characters I grew up with as a child."
        nvl clear
        mn_nvl "The Velveteen Rabbit, Edward Tulane, Jessie, Tinselina…"
        mn_nvl "…I hope he can find the same love they found in future chapters."
        mn_nvl "…"
        nvl clear
        m_nvl "Also I want him to give me a hug."
        m_nvl "I think he'd be really good at hugs."
        play sound "audio/sfx/general/snd_board_text_main_end.ogg"
        nvl clear
        pause 1
        jump bonusroom_questions

    label finished:
        $ intermission_choice_ypos = 0.9
        $ intermission_choice_spacing = -75
        nvl clear
        m_nvl "Thanks for visiting {color=0C8563}MADOCOUNTRY,{/color} and have a nice day!"
        m_nvl "…"
        nvl clear
        m_nvl "Now where did I put my computer…?"
        m_nvl "I've gotta get back to 100\%ng my Gold Stake decks…"
        play sound "audio/sfx/general/snd_board_text_main_end.ogg"
        nvl clear
        pause 1
        hide tvworld_5
        hide intermission_frame
        stop music
        hide mado_pixelfar
        hide mado_pixelzoom
        hide mado_cactus
        hide mado_balloon
        hide intermission_backframe
        hide screen nvl_quickmenu

        with wipedown



        pause 1
        $ config.main_menu_music = "audio/music/sponsers_loop.ogg"
        play music "audio/music/sponsers_loop.ogg"
        return

