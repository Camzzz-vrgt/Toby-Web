if (!instance_exists(obj_settings)) {
    instance_create_depth(0, 0, 1000000, obj_settings);
    draw_set_halign(fa_left);
    draw_set_valign(fa_top);
    draw_set_font(fnt_fnaf3);
    fadeout_beginings = 1;
    fadeout_choich = 0;
    selected_option = 0;
}

draw_sprite_ext(spr_whos_the_brightest_star_you_see, current_time, 240, 135, 1, 1, 0, UnknownEnum.Value_16711806, 0.2);
draw_self();
if (selected_option == 0 && fadeout_choich == 1)
{
    draw_sprite(spr_soul, 1, 38, 103);
    draw_set_colour(UnknownEnum.Value_12320562);
    var l7E2C20EA_0 = UnknownEnum.Value_255;
    draw_set_alpha(l7E2C20EA_0 / 255);
    if (keyboard_check_pressed(ord("Z")) || mouse_check_button_pressed(mb_left))
    {
        audio_play_sound(snd_openopenopen, 0, 0, 1, undefined, 1);
        audio_sound_gain(snd_darkspawn_music, 0, 750);
        fadeout_choich = 2;
    }
}
else
{
    draw_set_colour(UnknownEnum.Value_16777215);
    var l5CBDC4B7_0 = UnknownEnum.Value_255;
    draw_set_alpha(l5CBDC4B7_0 / 255);
}
draw_text_transformed(48, 96, "start game", 0.3, 0.3, 0);
if (selected_option == 1 && fadeout_choich == 1)
{
    draw_sprite(spr_soul, 1, 38, 128);
    draw_set_colour(UnknownEnum.Value_12320562);
    var l20E1A40C_0 = UnknownEnum.Value_255;
    draw_set_alpha(l20E1A40C_0 / 255);
    if (keyboard_check_pressed(ord("Z")) || mouse_check_button_pressed(mb_left))
    {
        audio_play_sound(snd_openopenopen, 0, 0, 1, undefined, 1);
        fadeout_choich = 2;
    }
}
else
{
    draw_set_colour(UnknownEnum.Value_16777215);
    var l6517C607_0 = UnknownEnum.Value_255;
    draw_set_alpha(l6517C607_0 / 255);
}
draw_text_transformed(48, 121, "accessibility", 0.3, 0.3, 0);
if (selected_option == 2 && fadeout_choich == 1)
{
    draw_sprite(spr_soul, 1, 38, 153);
    draw_set_colour(UnknownEnum.Value_12320562);
    var l0CF5DBCD_0 = UnknownEnum.Value_255;
    draw_set_alpha(l0CF5DBCD_0 / 255);
    if (keyboard_check_pressed(ord("Z")) || mouse_check_button_pressed(mb_left))
    {
        audio_play_sound(snd_openopenopen, 0, 0, 1, undefined, 1);
        fadeout_choich = 2;
    }
}
else
{
    draw_set_colour(UnknownEnum.Value_16777215);
    var l10DFED90_0 = UnknownEnum.Value_255;
    draw_set_alpha(l10DFED90_0 / 255);
}
draw_text_transformed(48, 146, "skip entire intro", 0.3, 0.3, 0);
var l0D13FC4E_0 = fadeout_choich;
switch (l0D13FC4E_0)
{
    case 0:
        if (fadeout_beginings > 0)
        {
            fadeout_beginings += -0.02;
        }
        else
        {
            fadeout_choich = 1;
        }
        break;
    case 1:
        if (keyboard_check_pressed(vk_down) || keyboard_check_pressed(ord("S")))
        {
            audio_play_sound(snd_selec, 0, 0, 1, undefined, 1);
            selected_option += 1;
            if (selected_option == 3)
            {
                selected_option = 0;
            }
        }
        if (keyboard_check_pressed(vk_up) || keyboard_check_pressed(ord("W")))
        {
            audio_play_sound(snd_selec, 0, 0, 1, undefined, 1);
            selected_option += -1;
            if (selected_option == -1)
            {
                selected_option = 2;
            }
        }
        break;
    case 2:
        if (fadeout_beginings < 1.2)
        {
            fadeout_beginings += 0.02;
        }
        else
        {
            audio_stop_all();
            var l7382FC84_0 = selected_option;
            switch (l7382FC84_0)
            {
                case 0:
                    if (obj_settings.loud_jumps == true)
                    {
                        audio_sound_gain(snd_scream, 0, 0);
                        audio_sound_gain(snd_foxy_door, 0.25, 0);
                    }
                    var l7F8C7A5B_0 = false;
                    l7F8C7A5B_0 = instance_exists(obj_storage);
                    if (l7F8C7A5B_0)
                    {
                        room_goto(rm_intro_building);
                    }
                    else
                    {
                        room_goto(rm_intro_talk);
                    }
                    break;
                case 1:
                    room_goto(rm_settings);
                    break;
                case 2:
                    draw_set_halign(fa_left);
                    draw_set_valign(fa_top);
                    var l7F119356_0 = false;
                    l7F119356_0 = instance_exists(obj_storage);
                    if (!l7F119356_0)
                    {
                        instance_create_depth(0, 0, 0, obj_storage);
                    }
                    room_goto(rm_game);
                    break;
            }
        }
        break;
}
if (fadeout_beginings > 0)
{
    draw_set_colour(UnknownEnum.Value_0);
    var l4EEAB627_0 = UnknownEnum.Value_255;
    draw_set_alpha(l4EEAB627_0 / 255);
    draw_set_alpha(fadeout_beginings);
    draw_rectangle(0, 0, 1920, 1080, 0);
    draw_set_alpha(1);
    draw_set_colour(UnknownEnum.Value_16777215);
    var l7112C056_0 = UnknownEnum.Value_255;
    draw_set_alpha(l7112C056_0 / 255);
}

enum UnknownEnum
{
    Value_0,
    Value_255 = 255,
    Value_12320562 = 12320562,
    Value_16711806 = 16711806,
    Value_16777215 = 16777215
}
