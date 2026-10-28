//=============================================================================
// Toriic_SkipTitleScreen.js
//=============================================================================
// MIT License
//
// Copyright (c) 2025 Toriic
//
// Created by Toriic, with drafting assistance from ChatGPT (OpenAI).
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/*:
 * @target MZ
 * @plugindesc Skips the title screen and starts the game
 * directly on the first map, if enabled.
 * @author Toriic
 *
 * @param skip
 * @text Skip Title Screen
 * @type boolean
 * @default true
 * @desc If true, the game starts on the map without the
 * title screen.
 *
 * @help Toriic_SkipTitleScreen.js
 *
 * This plugin skips the title screen and starts the game
 * directly on the first map. It works without setup.
 *
 * ■ How to Use:
 * - Just enable the plugin.
 *
 * If it doesn't work:
 * - Check that the plugin name was not modified
 * - Check that "Starting Party" and "Starting Position"
 *   are set in the database (F9), under "System 1".
 * - This may not work with plugins that override
 *   Scene_Boot or Scene_Title.
 */

(() => {
  const parameters = PluginManager.parameters("Toriic_SkipTitleScreen");
  const skip = parameters["skip"] === "true";

  if (skip) {
    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
      _Scene_Boot_start.call(this);
      SceneManager.goto(Scene_Map);
    };
  }
})();
