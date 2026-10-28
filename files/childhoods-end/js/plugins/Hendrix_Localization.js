/*:
 * @target MZ MV
 * @plugindesc A localization system that replaces game text based on CSV data.
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io/
 * 
 * @help
 *
 * Verion 1.0.6
 * ----------------------------------------------------------------------------
 * This is a plugin for RPG Maker MV/MZ that allows you to translate everything you
 * see from your game using a auto generated CSV file, and you don't need to
 * touch your in-editor text. Totally un-destructive method and automatic.
 * All you need to do is to translate, the plugin handles the rest.
 * ----------------------------------------------------------------------------
 * CHANGELOG
 * [ver 1.0.6] 
 * - Extracting Database now also extract messages from Troops.
 * - MV: More compatible with Yanfly_MessageCore and Galv_MessageSystem.
 * - A fix to [Garbage and Custom Lines] to always appear above custom lines.
 * - More optimization. No need to worries about long and huge CSV file now.
 * - Remove System Text column so it looks less complicated.
 * - Added an option to turn off Partial Matching translation.
 * - Advance use: Added Excluded column for receiving special keywords
 * - Advance use: Special keywords from parameter will be pushed to Excluded.
 * - Advance use: Added a secondary layer of translation. To trigger this, write words you
 * want to translation in both column Excluded and Original.
 * ----------------------------------------------------------------------------
 * FEATURES
 * - Add languages, custom font and size for each language.
 * - Auto generate a translation file with all languages you added.
 * - Auto extract all game messages, choices, common events, variables and database.
 * - Everything is categorized and organized.
 * - Any adjustments made in the editor will be updated to the translation file.
 * - Auto update and backup your translation file.
 * - Translation file is saved as game_messages.csv, very easy to use.
 * - Manually add anything you want to translate to the same csv file.
 * - NON-DESTRUCTIVE. Say no to replacing your in-editor text with keywords.
 * - Cache your translation. Help improving performance (not necessary).
 * - An awesome dev to support you 24/7.
 * ----------------------------------------------------------------------------
 * HOW TO USE
 * - How do I use this?
 * Turn on Extract Text parameter > Start the game > Follow instruction
 * to generate the translation file > Open the translation file (game_messages.csv)
 * and begin translate.
 * 
 * - I made an adjustment in the editor, how do I update the translation file?
 * Just boot the game, read the dialogues, it'll ask you if you want to
 * update the file, then it'll ask you if you want to create a backup first.
 * 
 * - I don't see the text I want to translate inside the CSV file.
 * Then type it in to Original column or System Text column <3.
 * 
 * - What's with the columns?
 * Change column: To tell you which line is Newly added.
 * Original: Whatever is written in here will be translated.
 * System Text: Optional. It's the same as Original column but on the right side.
 * 
 * - How do the auto extraction works?
 * Almost everything in game will be extracted to the Original column, including:
 * Game messages, Choices, the whole Database and Common Events. 
 * 
 * - I'm still confused.
 * Open the example game_messages.csv file from the demo and figure it out
 * or contact me via social media.
 * ----------------------------------------------------------------------------
 * For feedback or feature request, please dm me on X (Twitter) or Facebook:
 * https://x.com/sanghendrix96
 * https://www.facebook.com/hendrixguy/
 * 
 * @param Exact Text
 * @text Extract Text
 * @type boolean
 * @desc If true, extracts messages. If false, uses translations.
 * @default false
 * 
 * @param decor1
 * @text ==========================
 * @type text
 * @default ===============================
 * 
 * @param Adding Maps name
 * @type boolean
 * @desc If true, adds map names before dialogues when extracting messages.
 * @default true
 * 
 * @param Extract Database Entries
 * @type boolean
 * @desc If true, extracts database entries when Exact Text is also true.
 * @default false
 * 
 * @param Exclude Name Text
 * @type boolean
 * @desc If true, excludes name text from extraction (e.g., "David: " in "David: hahaha").
 * @default false
 * 
 * @param Extract Variable Text
 * @type boolean
 * @desc If true, extracts the script text of all variables when Exact Text is also true.
 * @default false
 * 
 * @param decor2
 * @text ==========================
 * @type text
 * @default ===============================
 * 
 * @param Partial Matching
 * @type boolean
 * @desc If true, enables partial matching for translations. If false, only exact matches are used.
 * @default false
 * 
 * @param Use Translation Cache
 * @type boolean
 * @desc If true, caches translated results for frequently used text. Heavily improve performance.
 * @default false
 * 
 * @param decor3
 * @text ==========================
 * @type text
 * @default ===============================
 *
 * @param Languages
 * @type struct<Language>[]
 * @desc List of available languages
 *
 * @param Default Language
 * @type string
 * @desc The symbol of the default language to use for translations
 * @default en
 * 
 * @param decor4
 * @text ==========================
 * @type text
 * @default ===============================
 * 
 * @param Excluded Symbols
 * @type struct<PushSymbol>[]
 * @desc Symbols to push to Excluded column. Example: \n<*>, \pop[*]. Only for advanced usage.
 * @default []
 * 
 * @param decor5
 * @text ==========================
 * @type text
 * @default ===============================
 * 
 * @param Add Gibberish Lines
 * @type boolean
 * @desc If true, adds 10000 gibberish lines to the CSV file when extracting messages (for performance testing).
 * @default false
 */

/*~struct~PushSymbol:
 * @param Symbol
 * @type string
 * @desc The symbol used to identify text to push to Excluded column (e.g., \n<*>)
 * @default \n<*>
 */

/*~struct~Language:
 * @param Name
 * @type string
 * @desc The display name of the language
 *
 * @param Symbol
 * @type string
 * @desc The symbol used to identify this language (e.g., en, vi)
 *
 * @param Font
 * @type string
 * @desc The name of the font file in the fonts folder (e.g., myfont.ttf)
 *
 * @param FontSize
 * @type number
 * @min 1
 * @desc The font size to use for this language
 * @default 28
 */

'use strict';

var Imported = Imported || {};
Imported['Hendrix_Localization'] = '1.0.6';

(function () {
    const fs = require('fs');
    const path = require('path');

    const parameters = PluginManager.parameters('Hendrix_Localization');
    const exactText = parameters['Exact Text'] === 'true';
    const extractDatabaseEntries = parameters['Extract Database Entries'] === 'true';
    const addingMapsName = parameters['Adding Maps name'] === 'true';
    const excludeNameText = parameters['Exclude Name Text'] === 'true';
    const addGibberishLines = parameters['Add Gibberish Lines'] === 'true';
    const extractVariableText = parameters['Extract Variable Text'] === 'true';
    const defaultLanguage = parameters['Default Language'];
    const partialMatching = parameters['Partial Matching'] === 'true';
    const useTranslationCache = parameters['Use Translation Cache'] === 'true';
    const languagesParam = JSON.parse(parameters['Languages'] || '[]');
    const pushSymbols = JSON.parse(parameters['Excluded Symbols'] || '[]').map(symbol => JSON.parse(symbol).Symbol);

    const languages = languagesParam.map(lang => JSON.parse(lang));
    const languageSymbols = languages.map(lang => lang.Symbol);

    let currentLanguage = defaultLanguage;
    let messages = [];
    let translations = {};
    let translationCache = {};
    const wordBoundaryRegex = /\b/g;
    let uniqueMessages = new Set();
    const originalTexts = [];
    const wordTranslationRegexes = new Map();

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function extractYepName(text) {
        let yepName = '';
        let remainingText = text;

        for (const symbol of pushSymbols) {
            const escapedSymbol = escapeRegExp(symbol);
            const regex = new RegExp(escapedSymbol.replace('\\*', '(.+?)'), 'g');
            let match;
            while ((match = regex.exec(remainingText)) !== null) {
                yepName += match[0];
                remainingText = remainingText.replace(match[0], '');
            }
        }

        return { yepName, remainingText };
    }

    function generateGibberish(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Hook into the game loading process
    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        _Scene_Boot_start.call(this);
        if (Imported['YEP_MessageCore']) {
            this.updateMessageCoreEscapeCharacters();
        }
        if (exactText) {
            // Delay the extraction process to ensure the game is fully loaded
            setTimeout(extractAllMessages, 1000);
        } else {
            loadTranslations(currentLanguage);
        }
        applyLanguageSettings();
    };


    Scene_Boot.prototype.updateMessageCoreEscapeCharacters = function () {
        // Override escapeIconItem
        Window_Base.prototype.escapeIconItem = function (n, database) {
            return '\x1bI[' + database[n].iconIndex + ']' + Hendrix_Localization(database[n].name);
        };
        Window_Base.prototype.convertExtraEscapeCharacters = function (text) {
            // Font Codes
            text = text.replace(/\x1bFR/gi, '\x1bMSGCORE[0]');
            text = text.replace(/\x1bFB/gi, '\x1bMSGCORE[1]');
            text = text.replace(/\x1bFI/gi, '\x1bMSGCORE[2]');
            // \AC[n]
            text = text.replace(/\x1bAC\[(\d+)\]/gi, function () {
                return Hendrix_Localization(this.actorClassName(parseInt(arguments[1])));
            }.bind(this));
            // \AN[n]
            text = text.replace(/\x1bAN\[(\d+)\]/gi, function () {
                return Hendrix_Localization(this.actorNickname(parseInt(arguments[1])));
            }.bind(this));
            // \PC[n]
            text = text.replace(/\x1bPC\[(\d+)\]/gi, function () {
                return Hendrix_Localization(this.partyClassName(parseInt(arguments[1])));
            }.bind(this));
            // \PN[n]
            text = text.replace(/\x1bPN\[(\d+)\]/gi, function () {
                return Hendrix_Localization(this.partyNickname(parseInt(arguments[1])));
            }.bind(this));
            // \NC[n]
            text = text.replace(/\x1bNC\[(\d+)\]/gi, function () {
                return Hendrix_Localization($dataClasses[parseInt(arguments[1])].name);
            }.bind(this));
            // \NI[n]
            text = text.replace(/\x1bNI\[(\d+)\]/gi, function () {
                return Hendrix_Localization($dataItems[parseInt(arguments[1])].name);
            }.bind(this));
            // \NW[n]
            text = text.replace(/\x1bNW\[(\d+)\]/gi, function () {
                return Hendrix_Localization($dataWeapons[parseInt(arguments[1])].name);
            }.bind(this));
            // \NA[n]
            text = text.replace(/\x1bNA\[(\d+)\]/gi, function () {
                return Hendrix_Localization($dataArmors[parseInt(arguments[1])].name);
            }.bind(this));
            // \NE[n]
            text = text.replace(/\x1bNE\[(\d+)\]/gi, function () {
                return Hendrix_Localization($dataEnemies[parseInt(arguments[1])].name);
            }.bind(this));
            // \NS[n]
            text = text.replace(/\x1bNS\[(\d+)\]/gi, function () {
                return Hendrix_Localization($dataSkills[parseInt(arguments[1])].name);
            }.bind(this));
            // \NT[n]
            text = text.replace(/\x1bNT\[(\d+)\]/gi, function () {
                return Hendrix_Localization($dataStates[parseInt(arguments[1])].name);
            }.bind(this));
            // \II[n]
            text = text.replace(/\x1bII\[(\d+)\]/gi, function () {
                return this.escapeIconItem(arguments[1], $dataItems);
            }.bind(this));
            // \IW[n]
            text = text.replace(/\x1bIW\[(\d+)\]/gi, function () {
                return this.escapeIconItem(arguments[1], $dataWeapons);
            }.bind(this));
            // \IA[n]
            text = text.replace(/\x1bIA\[(\d+)\]/gi, function () {
                return this.escapeIconItem(arguments[1], $dataArmors);
            }.bind(this));
            // \IS[n]
            text = text.replace(/\x1bIS\[(\d+)\]/gi, function () {
                return this.escapeIconItem(arguments[1], $dataSkills);
            }.bind(this));
            // \IT[n]
            text = text.replace(/\x1bIT\[(\d+)\]/gi, function () {
                return this.escapeIconItem(arguments[1], $dataStates);
            }.bind(this));
            // Finish
            return text;
        };
    };

    function applyLanguageSettings() {
        const currentLangSettings = languages.find(lang => lang.Symbol === currentLanguage);
        if (currentLangSettings) {
            if (currentLangSettings.Font) {
                loadCustomFont(currentLangSettings.Font);
            }

            if (currentLangSettings.FontSize) {
                const fontSize = Number(currentLangSettings.FontSize);
                applyFontSize(fontSize);
            }

            if (Imported['YEP_MessageCore']) {
                overrideYanflyMessageFontSettings(currentLangSettings);
            }

            if (Imported['Galv_MessageStyles']) {
                alterGalvFontSize(currentLangSettings);
            }
        }
    }

    function overrideYanflyMessageFontSettings(langSettings) {
        if (langSettings.Font) {
            Game_System.prototype.getMessageFontName = function () {
                return langSettings.Font.split('.')[0]; // Remove file extension
            };
        }
        if (langSettings.FontSize) {
            Game_System.prototype.getMessageFontSize = function () {
                return Number(langSettings.FontSize);
            };
        }
    }

    function alterGalvFontSize(langSettings) {
        if (langSettings.FontSize) {
            Galv.Mstyle.fontSize = Number(langSettings.FontSize);

            // Override Galv_Message font size settings
            Window_Message.prototype.standardFontSize = function () {
                return Galv.Mstyle.fontSize;
            };

            Window_ChoiceList.prototype.standardFontSize = function () {
                return Galv.Mstyle.fontSize;
            };

            // Refresh windows to apply new font size
            if (SceneManager._scene && SceneManager._scene.refreshAllWindows) {
                SceneManager._scene.refreshAllWindows();
            }
        }
    }

    function loadCustomFont(fontFileName) {
        const fontName = fontFileName.split('.')[0];
        const fileExtension = fontFileName.split('.').pop().toLowerCase();
        let format;

        if (fileExtension === 'ttf') {
            format = 'truetype';
        } else if (fileExtension === 'otf') {
            format = 'opentype';
        } else {
            return;
        }

        const fontPath = `url('fonts/${fontFileName}')`;
        const font = new FontFace(fontName, fontPath);

        font.load().then((loadedFont) => {
            document.fonts.add(loadedFont);
            applyFontFace(fontName);
            if (Imported['YEP_MessageCore']) {
                Game_System.prototype.getMessageFontName = function () {
                    return fontName;
                };
            }
            if (SceneManager._scene && SceneManager._scene.refreshAllWindows) {
                SceneManager._scene.refreshAllWindows();
            }
        }).catch((error) => {
            applyFontFace($gameSystem.mainFontFace());
        });

        // Add CSS rule as a fallback
        const style = document.createElement('style');
        const css = `@font-face {
            font-family: "${fontName}";
            src: ${fontPath} format("${format}");
        }`;
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    function applyFontFace(fontFace) {
        Window_Base.prototype.standardFontFace = function () {
            return fontFace;
        };
        if (SceneManager._scene && SceneManager._scene.refreshAllWindows) {
            SceneManager._scene.refreshAllWindows();
        }
    }

    function applyFontSize(fontSize) {
        Window_Base.prototype.standardFontSize = function () {
            return fontSize;
        };
        if (SceneManager._scene && SceneManager._scene.refreshAllWindows) {
            SceneManager._scene.refreshAllWindows();
        }
    }

    const _Window_Base_resetFontSettings = Window_Base.prototype.resetFontSettings;
    Window_Base.prototype.resetFontSettings = function () {
        _Window_Base_resetFontSettings.call(this);
        if (typeof this.standardFontFace === 'function') {
            this.contents.fontFace = this.standardFontFace();
        }
        if (typeof this.standardFontSize === 'function') {
            this.contents.fontSize = this.standardFontSize();
        }
    };

    function extractAllMessages() {
        messages = [];

        // Show confirmation dialog
        if (confirm("Do you want to generate/update the csv file?")) {
            const filePath = path.join(process.cwd(), 'game_messages.csv');

            if (fs.existsSync(filePath)) {
                // Ask about creating a backup
                if (confirm("Do you want to create a backup of your current localization file before proceeding?\n\nSelect 'OK' to make a backup, or 'Cancel' to proceed without a backup.")) {
                    // Create backup
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                    const backupPath = path.join(process.cwd(), `game_messages_backup_${timestamp}.csv`);
                    fs.copyFileSync(filePath, backupPath);
                    alert(`Backup created: ${backupPath}`);
                } else {

                }
            }

            // Proceed with extraction
            for (let mapId = 1; mapId < $dataMapInfos.length; mapId++) {
                if ($dataMapInfos[mapId]) {
                    const mapData = JSON.parse(fs.readFileSync(path.join('data', `Map${String(mapId).padStart(3, '0')}.json`), 'utf8'));
                    extractMessagesFromMap(mapData, mapId);
                }
            }
            // Extract messages from common events
            extractCommonEventMessages();

            if (extractDatabaseEntries) {
                extractDatabaseMessages();
                extractTroopMessages();
            }

            if (extractVariableText) {
                extractVariableMessages();
            }

            updateMessagesCSV();
            alert("CSV file has been generated/updated successfully.");
        } else {

        }
    }

    function extractCommonEventMessages() {
        messages.push('\n[Common Events]\n');
        $dataCommonEvents.forEach((commonEvent, index) => {
            if (commonEvent && commonEvent.list) {
                let currentMessage = [];
                commonEvent.list.forEach(command => {
                    if (command.code === 401) { // Show Text
                        let text = command.parameters[0];
                        if (excludeNameText) {
                            const colonIndex = text.indexOf(':');
                            if (colonIndex !== -1) {
                                text = text.substring(colonIndex + 1).trim();
                            }
                        }
                        currentMessage.push(text);
                    } else if (command.code === 102) { // Show Choices
                        if (currentMessage.length > 0) {
                            messages.push(currentMessage.join('\n'));
                            currentMessage = [];
                        }
                        command.parameters[0].forEach(choice => {
                            messages.push(choice);
                        });
                    } else if (currentMessage.length > 0) {
                        messages.push(currentMessage.join('\n'));
                        currentMessage = [];
                    }
                });
                if (currentMessage.length > 0) {
                    messages.push(currentMessage.join('\n'));
                }
            }
        });
    }

    function extractVariableMessages() {
        messages.push('\n[VARIABLES]\n');

        function extractFromEventCommands(eventCommands) {
            eventCommands.forEach(command => {
                if (command.code === 122 && command.parameters[3] === 4) {
                    const script = command.parameters[4];
                    if (typeof script === 'string' && /[a-zA-Z]/.test(script)) {
                        const cleanScript = script.replace(/^["']|["']$/g, '');
                        messages.push(cleanScript);
                    }
                }
            });
        }

        // Extract from all map events
        for (let mapId = 1; mapId < $dataMapInfos.length; mapId++) {
            if ($dataMapInfos[mapId]) {
                const mapData = JSON.parse(fs.readFileSync(path.join('data', `Map${String(mapId).padStart(3, '0')}.json`), 'utf8'));
                if (mapData.events) {
                    mapData.events.forEach(event => {
                        if (event && event.pages) {
                            event.pages.forEach(page => {
                                if (page.list) {
                                    extractFromEventCommands(page.list);
                                }
                            });
                        }
                    });
                }
            }
        }

        // Extract from common events
        $dataCommonEvents.forEach(commonEvent => {
            if (commonEvent && commonEvent.list) {
                extractFromEventCommands(commonEvent.list);
            }
        });
    }

    function extractDatabaseMessages() {
        messages.push('\n[DATABASE ENTRIES]\n');

        function removePrefix(text) {
            return text && typeof text === 'string' ? text.replace(/^\[.*?\]\s*/, '') : '';
        }

        // Actors
        messages.push('\n[Actors]\n');
        $dataActors.forEach((actor, index) => {
            if (actor && actor.name) {
                messages.push(removePrefix(actor.name));
                if (actor.nickname) messages.push(removePrefix(actor.nickname));
            }
        });

        // Classes
        messages.push('\n[Classes]\n');
        $dataClasses.forEach((klass, index) => {
            if (klass && klass.name) {
                messages.push(removePrefix(klass.name));
            }
        });

        // Skills
        messages.push('\n[Skills]\n');
        $dataSkills.forEach((skill, index) => {
            if (skill && skill.name) {
                messages.push(removePrefix(skill.name));
                if (skill.description) messages.push(removePrefix(skill.description));
                if (skill.message1) messages.push(removePrefix(skill.message1));
                if (skill.message2) messages.push(removePrefix(skill.message2));
            }
        });

        // Items
        messages.push('\n[Items]\n');
        $dataItems.forEach((item, index) => {
            if (item && item.name) {
                messages.push(removePrefix(item.name));
                if (item.description) messages.push(removePrefix(item.description));
            }
        });

        // Weapons
        messages.push('\n[Weapons]\n');
        $dataWeapons.forEach((weapon, index) => {
            if (weapon && weapon.name) {
                messages.push(removePrefix(weapon.name));
                if (weapon.description) messages.push(removePrefix(weapon.description));
            }
        });

        // Armors
        messages.push('\n[Armors]\n');
        $dataArmors.forEach((armor, index) => {
            if (armor && armor.name) {
                messages.push(removePrefix(armor.name));
                if (armor.description) messages.push(removePrefix(armor.description));
            }
        });

        // Enemies
        messages.push('\n[Enemies]\n');
        $dataEnemies.forEach((enemy, index) => {
            if (enemy && enemy.name) {
                messages.push(removePrefix(enemy.name));
            }
        });

        // States
        messages.push('\n[States]\n');
        $dataStates.forEach((state, index) => {
            if (state && state.name) {
                messages.push(removePrefix(state.name));
                if (state.message1) messages.push(removePrefix(state.message1));
                if (state.message2) messages.push(removePrefix(state.message2));
                if (state.message3) messages.push(removePrefix(state.message3));
                if (state.message4) messages.push(removePrefix(state.message4));
            }
        });

        // Types
        messages.push('\n[Types]\n');
        ['weaponTypes', 'armorTypes', 'equipTypes', 'skillTypes'].forEach(typeCategory => {
            if (Array.isArray($dataSystem[typeCategory])) {
                $dataSystem[typeCategory].forEach((type, index) => {
                    if (type) {
                        messages.push(removePrefix(type));
                    }
                });
            }
        });

        // Terms
        messages.push('\n[Terms]\n');
        const terms = $dataSystem.terms;
        Object.keys(terms).forEach(termCategory => {
            if (typeof terms[termCategory] === 'string') {
                messages.push(removePrefix(terms[termCategory]));
            } else if (Array.isArray(terms[termCategory])) {
                terms[termCategory].forEach((term, index) => {
                    messages.push(removePrefix(term));
                });
            }
        });
    }

    function extractMessagesFromMap(mapData, mapId) {
        if (addingMapsName) {
            const mapName = $dataMapInfos[mapId].name;
            messages.push(`\n[${mapName}]\n`);
        }
        if (mapData.events) {
            mapData.events.forEach(event => {
                if (event && event.pages) {
                    event.pages.forEach(page => {
                        if (page.list) {
                            let currentMessage = [];
                            page.list.forEach(command => {
                                if (command.code === 401) { // Show Text
                                    let text = command.parameters[0];
                                    if (excludeNameText) {
                                        const colonIndex = text.indexOf(':');
                                        if (colonIndex !== -1) {
                                            text = text.substring(colonIndex + 1).trim();
                                        }
                                    }
                                    currentMessage.push(text);
                                } else if (command.code === 102) { // Show Choices
                                    if (currentMessage.length > 0) {
                                        messages.push(currentMessage.join('\n'));
                                        currentMessage = [];
                                    }
                                    command.parameters[0].forEach(choice => {
                                        messages.push(choice);
                                    });
                                } else if (currentMessage.length > 0) {
                                    messages.push(currentMessage.join('\n'));
                                    currentMessage = [];
                                }
                            });
                            if (currentMessage.length > 0) {
                                messages.push(currentMessage.join('\n'));
                            }
                        }
                    });
                }
            });
        }
    }

    function extractTroopMessages() {
        messages.push('\n[TROOPS]\n');
        $dataTroops.forEach((troop, index) => {
            if (troop && troop.pages) {
                troop.pages.forEach((page, pageIndex) => {
                    if (page.list) {
                        let currentMessage = [];
                        page.list.forEach(command => {
                            if (command.code === 401) { // Show Text
                                let text = command.parameters[0];
                                if (excludeNameText) {
                                    const colonIndex = text.indexOf(':');
                                    if (colonIndex !== -1) {
                                        text = text.substring(colonIndex + 1).trim();
                                    }
                                }
                                currentMessage.push(text);
                            } else if (command.code === 102) { // Show Choices
                                if (currentMessage.length > 0) {
                                    messages.push(currentMessage.join('\n'));
                                    currentMessage = [];
                                }
                                command.parameters[0].forEach(choice => {
                                    messages.push(choice);
                                });
                            } else if (currentMessage.length > 0) {
                                messages.push(currentMessage.join('\n'));
                                currentMessage = [];
                            }
                        });
                        if (currentMessage.length > 0) {
                            messages.push(currentMessage.join('\n'));
                        }
                    }
                });
            }
        });
    }

    function updateMessagesCSV() {
        const filePath = path.join(process.cwd(), 'game_messages.csv');
        let existingContent = [];
        let updatedMessages = new Set();
        let uniqueMessages = new Set();
    
        // Read existing CSV file if it exists
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            existingContent = parseCSV(content);
        }
    
        // Prepare CSV content
        const BOM = '\uFEFF';
        const headers = ['Change', 'Excluded', 'Original'].concat(languageSymbols);
        let csvContent = BOM + headers.join(',') + '\n';
    
        // Create a map of existing translations
        const existingTranslations = new Map();
        const existingYepNames = new Map();
        if (existingContent.length > 0) {
            const headers = existingContent[0];
            const changeIndex = headers.indexOf('Change');
            const yepNameIndex = headers.indexOf('Excluded');
            const originalIndex = headers.indexOf('Original');
            if (originalIndex !== -1) {
                for (let i = 1; i < existingContent.length; i++) {
                    const row = existingContent[i];
                    if (row.length > originalIndex) {
                        const originalText = row[originalIndex];
                        const translations = headers.slice(originalIndex + 1).map((lang, index) => row[originalIndex + 1 + index] || '');
                        existingTranslations.set(originalText, translations);
                        if (yepNameIndex !== -1 && row.length > yepNameIndex) {
                            existingYepNames.set(originalText, row[yepNameIndex]);
                        }
                    }
                }
            }
        }
    
        function processMessage(msg) {
            if (!msg || uniqueMessages.has(msg)) return;
            uniqueMessages.add(msg);
    
            const { yepName, remainingText } = extractYepName(msg);
            const escapedMsg = escapeCSV(remainingText);
            const escapedYepName = escapeCSV(yepName);
    
            let line = ['', escapedYepName, escapedMsg]; // Change, Excluded, Original
    
            if (existingTranslations.has(remainingText)) {
                // Existing message, copy translations
                line[0] = '';
                line = line.concat(existingTranslations.get(remainingText).map(t => escapeCSV(t)));
            } else {
                // New message
                line[0] = 'NEW';
                line = line.concat(Array(languageSymbols.length).fill(''));
            }
    
            csvContent += line.join(',') + '\n';
            updatedMessages.add(remainingText);
        }
    
        // Process all messages
        messages.forEach(processMessage);
    
        // Process map names
        if (addingMapsName) {
            const mapNames = messages.filter(msg => msg && msg.startsWith('[') && msg !== '[DATABASE ENTRIES]' && !msg.startsWith('[Choice]'));
            mapNames.forEach(processMessage);
        }
    
        // Process common event messages
        if (messages.includes('[Common Events]')) {
            csvContent += `,,[Common Events]${','.repeat(languageSymbols.length + 1)}\n`;
            const commonEventMessages = messages.slice(messages.indexOf('[Common Events]') + 1);
            commonEventMessages.forEach(processMessage);
        }
    
        // Process variable messages
        if (extractVariableText && messages.includes('[VARIABLES]')) {
            csvContent += `,,[VARIABLES]${','.repeat(languageSymbols.length + 1)}\n`;
            const variableMessages = messages.slice(messages.indexOf('[VARIABLES]') + 1);
            variableMessages.forEach(processMessage);
        }
    
        // Process database entries
        if (extractDatabaseEntries) {
            csvContent += `,,[DATABASE ENTRIES]${','.repeat(languageSymbols.length + 1)}\n`;
            const databaseContentIndex = messages.findIndex(msg => msg === '[DATABASE ENTRIES]');
            const databaseContent = databaseContentIndex !== -1 ? messages.slice(databaseContentIndex + 1) : [];
    
            let currentCategory = '';
            databaseContent.forEach((item) => {
                if (!item) return; // Skip null or undefined items
                if (/^\[.+\]$/.test(item)) {
                    currentCategory = item;
                    csvContent += `,,${escapeCSV(item)}${','.repeat(languageSymbols.length + 1)}\n`;
                } else if (item.trim() !== '' && item !== '[DATABASE ENTRIES]') {
                    processMessage(item);
                }
            });
        }
    
        csvContent += `,,${escapeCSV('[GARBAGE AND \nCUSTOM LINES]')}${','.repeat(languageSymbols.length + 1)}\n`;
    
        // Collect custom lines and preserve existing translations
        let customLines = '';
        existingContent.slice(1).forEach(row => {
            if (!row || row.length < 3) return; // Skip invalid rows
            const originalText = row[2]; // Original is now at index 2
            if (!updatedMessages.has(originalText) &&
                originalText !== '[GARBAGE AND \nCUSTOM LINES]' &&
                originalText !== '[DATABASE ENTRIES]') {
                // If the line was previously existing, don't mark it as NEW
                if (row[0] === 'NEW' && existingTranslations.has(originalText)) {
                    row[0] = '';
                }
                customLines += row.map(escapeCSV).join(',') + '\n';
            }
        });
    
        // Append custom lines after the GARBAGE AND CUSTOM LINES section
        csvContent += customLines;
    
        if (addGibberishLines) {
            csvContent += `,,[GIBBERISH LINES FOR PERFORMANCE TESTING]${','.repeat(languageSymbols.length + 1)}\n`;
            for (let i = 0; i < 80000; i++) {
                const gibberish = generateGibberish(50); // Generate 50-character gibberish
                csvContent += `NEW,,${escapeCSV(gibberish)}${','.repeat(languageSymbols.length + 1)}\n`;
            }
        }
    
        // Write the CSV file
        fs.writeFile(filePath, csvContent, { encoding: 'utf8' }, (err) => {
            if (err) {
                console.error('Error writing CSV file:', err);
            } else {
                console.log('Messages updated in:', filePath);
            }
        });
    }

    function escapeCSV(text) {
        if (typeof text !== 'string') {
            return text;
        }
        if (text.includes('"') || text.includes(',') || text.includes('\n') || text.includes('\r')) {
            return '"' + text.replace(/"/g, '""') + '"';
        }
        return text;
    }

    function parseCSV(text) {
        const lines = [];
        let currentLine = [];
        let currentField = '';
        let withinQuotes = false;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === '"') {
                if (withinQuotes && text[i + 1] === '"') {
                    currentField += '"';
                    i++;
                } else {
                    withinQuotes = !withinQuotes;
                }
            } else if (char === ',' && !withinQuotes) {
                currentLine.push(currentField);
                currentField = '';
            } else if ((char === '\n' || char === '\r') && !withinQuotes) {
                if (char === '\r' && text[i + 1] === '\n') {
                    i++; // Skip the next \n for \r\n line endings
                }
                currentLine.push(currentField);
                lines.push(currentLine);
                currentLine = [];
                currentField = '';
            } else {
                currentField += char;
            }
        }

        if (currentField) {
            currentLine.push(currentField);
        }
        if (currentLine.length > 0) {
            lines.push(currentLine);
        }

        return lines;
    }

    let wordTranslations = {};

    function loadTranslations(lang) {
        const filePath = path.join(process.cwd(), 'game_messages.csv');
        translations = {}; // Clear existing translations
        wordTranslations = {}; // Clear existing word translations
        wordTranslationRegexes.clear(); // Clear existing word translation regexes
        translationCache = {}; // Clear the translation cache
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            const lines = parseCSV(content);
            if (lines.length > 0) {
                const headers = lines[0];
                const yepNameIndex = headers.indexOf('Excluded');
                const originalIndex = headers.indexOf('Original');
                const langIndex = headers.indexOf(lang);
    
                if (originalIndex !== -1 && langIndex !== -1 && yepNameIndex !== -1) {
                    for (let i = 1; i < lines.length; i++) {
                        const columns = lines[i];
                        if (columns.length > Math.max(originalIndex, langIndex, yepNameIndex)) {
                            const originalText = columns[originalIndex];
                            const translatedText = columns[langIndex].replace(/\n/g, '{{LINEBREAK}}');
                            const yepName = columns[yepNameIndex];
    
                            if (originalText && translatedText) {
                                translations[originalText] = translatedText;
    
                                // Add translation for Excluded if it exists
                                if (yepName) {
                                    translations[yepName + originalText] = translatedText;
                                    // Store word-level translations only for Excluded words
                                    wordTranslations[yepName] = translatedText;
                                }
    
                                // Add translation for the whole text without line breaks
                                translations[originalText.replace(/\n/g, ' ')] = translatedText;
    
                                // Add individual line translations
                                const originalLines = originalText.split('\n');
                                const translatedLines = translatedText.split('\n');
                                const maxLines = Math.max(originalLines.length, translatedLines.length);
    
                                for (let j = 0; j < maxLines; j++) {
                                    const origLine = j < originalLines.length ? originalLines[j].trim() : '';
                                    const transLine = j < translatedLines.length ? translatedLines[j].trim() : '';
    
                                    if (origLine && !translations[origLine]) {
                                        translations[origLine] = transLine;
                                    }
    
                                    // Add a special key for extra translated lines
                                    if (j >= originalLines.length && transLine) {
                                        translations[`__EXTRA_LINE_${j - originalLines.length}__${originalText}`] = transLine;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // Update originalTexts after loading new translations
        Object.keys(translations).sort((a, b) => b.length - a.length).forEach(key => originalTexts.push(key));
    }

    // Override the Game_Message.add method to replace text with translations and handle multiple lines
    const _Game_Message_add = Game_Message.prototype.add;
    Game_Message.prototype.add = function (text) {
        const translatedText = translateText(text);

        // If the original text is empty, keep it empty
        if (text.trim() === '') {
            _Game_Message_add.call(this, '');
            return;
        }

        // Split the translated text into lines based on \n
        const lines = translatedText.split('\n');

        // Add each line to the message, excluding empty lines at the end
        let lastNonEmptyLineIndex = lines.length - 1;
        while (lastNonEmptyLineIndex >= 0 && lines[lastNonEmptyLineIndex].trim() === '') {
            lastNonEmptyLineIndex--;
        }

        for (let i = 0; i <= lastNonEmptyLineIndex; i++) {
            _Game_Message_add.call(this, lines[i]);
        }

        // Log the total number of lines currently in the message
        //console.log(`Total number of lines in the message: ${this._texts.length}`);
    };

    const _Game_Variables_setValue = Game_Variables.prototype.setValue;
    Game_Variables.prototype.setValue = function (variableId, value) {
        if (typeof value === 'string') {
            const translationKey = `__VARIABLE__${variableId}__`;
            if (translations.hasOwnProperty(translationKey)) {
                value = translations[translationKey];
            } else {
                value = translateText(value);
            }
        }
        _Game_Variables_setValue.call(this, variableId, value);
    };

    // Overdrive drawText but drawn on Bitmap sprites rather than Window
    const _Bitmap_drawText = Bitmap.prototype.drawText;
    Bitmap.prototype.drawText = function (text, x, y, maxWidth, lineHeight, align) {
        const translatedText = translateText(String(text));
        _Bitmap_drawText.call(this, translatedText, x, y, maxWidth, lineHeight, align);
    };

    const _Game_Message_setChoices = Game_Message.prototype.setChoices;
    Game_Message.prototype.setChoices = function (choices, defaultType, cancelType) {
        const translatedChoices = choices.map(choice => {
            return translations[choice] || choice;
        });
        _Game_Message_setChoices.call(this, translatedChoices, defaultType, cancelType);
    };

    ConfigManager.language = defaultLanguage;

    const _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function () {
        const config = _ConfigManager_makeData.call(this);
        config.language = this.language;
        return config;
    };

    const _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function (config) {
        _ConfigManager_applyData.call(this, config);
        this.language = config.language || defaultLanguage;
        currentLanguage = this.language;
        loadTranslations(currentLanguage);
        applyLanguageSettings();
    };

    // Add Language command to options window
    const _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function () {
        _Window_Options_addGeneralOptions.call(this);
        this.addCommand('Language', 'language');
    };

    // Handle language option in the options window
    const _Window_Options_statusText = Window_Options.prototype.statusText;
    Window_Options.prototype.statusText = function (index) {
        const symbol = this.commandSymbol(index);
        if (symbol === 'language') {
            const langObj = languages.find(lang => lang.Symbol === ConfigManager.language);
            return langObj ? langObj.Name : '';
        } else {
            return _Window_Options_statusText.call(this, index);
        }
    };

    const _Window_Options_processOk = Window_Options.prototype.processOk;
    Window_Options.prototype.processOk = function () {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (symbol === 'language') {
            this.changeLanguage(1);
        } else {
            _Window_Options_processOk.call(this);
        }
    };

    const _Window_Options_cursorRight = Window_Options.prototype.cursorRight;
    Window_Options.prototype.cursorRight = function (wrap) {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (symbol === 'language') {
            this.changeLanguage(1);
        } else {
            _Window_Options_cursorRight.call(this, wrap);
        }
    };

    const _Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
    Window_Options.prototype.cursorLeft = function (wrap) {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (symbol === 'language') {
            this.changeLanguage(-1);
        } else {
            _Window_Options_cursorLeft.call(this, wrap);
        }
    };

    Window_Options.prototype.changeLanguage = function (direction) {
        const currentIndex = languageSymbols.indexOf(ConfigManager.language);
        let nextIndex = (currentIndex + direction + languageSymbols.length) % languageSymbols.length;
        ConfigManager.language = languageSymbols[nextIndex];
        currentLanguage = ConfigManager.language;
        this.redrawItem(this.findSymbol('language'));
        loadTranslations(currentLanguage); // Pass the new language to loadTranslations
        applyLanguageSettings();
        if (SceneManager._scene && SceneManager._scene.refreshAllWindows) {
            SceneManager._scene.refreshAllWindows();
        }
        SoundManager.playCursor();
    };

    // Add a method to refresh all windows in the current scene
    Scene_Base.prototype.refreshAllWindows = function () {
        if (this._windowLayer) {
            this._windowLayer.children.forEach(child => {
                if (child instanceof Window_Base) {
                    if (child.contents) {
                        child.contents.clear();
                    }
                    if (typeof child.createContents === 'function') {
                        child.createContents();
                    }
                    if (typeof child.refresh === 'function') {
                        child.refresh();
                    }
                    if (typeof child.updatePadding === 'function') {
                        child.updatePadding();
                    }
                    if (typeof child.resetFontSettings === 'function') {
                        child.resetFontSettings();
                    }
                }
            });
        }
    };

function translateText(text) {
    if (typeof text !== 'string') {
        return text;
    }

    if (useTranslationCache && translationCache.hasOwnProperty(text)) {
        return translationCache[text];
    }

    let translatedText = text;

    // First pass: full sentence and partial matches
    const { yepName, remainingText } = extractYepName(translatedText);

    if (translations.hasOwnProperty(yepName + remainingText)) {
        translatedText = yepName + translations[yepName + remainingText];
    } else if (translations.hasOwnProperty(remainingText)) {
        translatedText = yepName + translations[remainingText];
    } else {
        const lines = remainingText.split('\n');
        const translatedLines = lines.map(line => {
            if (translations.hasOwnProperty(line.trim())) {
                return translations[line.trim()];
            } else if (partialMatching) {
                // Only this part is affected by partialMatching
                for (let i = 0, len = originalTexts.length; i < len; i++) {
                    const originalText = originalTexts[i];
                    if (line.includes(originalText)) {
                        return line.replace(originalText, translations[originalText] || originalText);
                    }
                }
            }
            return line;
        });

        translatedLines[0] = yepName + translatedLines[0];
        translatedText = translatedLines.join('\n');
    }

    // Second pass: word-level translations
    Object.keys(wordTranslations).forEach(word => {
        let regex = wordTranslationRegexes.get(word);
        if (!regex) {
            regex = new RegExp(`${wordBoundaryRegex.source}${escapeRegExp(word)}${wordBoundaryRegex.source}`, 'g');
            wordTranslationRegexes.set(word, regex);
        }
        translatedText = translatedText.replace(regex, wordTranslations[word]);
    });

    // Replace {{LINEBREAK}} with actual line breaks for display
    translatedText = translatedText.replace(/{{LINEBREAK}}/g, '\n');

    if (useTranslationCache) {
        translationCache[text] = translatedText;
    }
    return translatedText;
}

    // Override drawText method
    const _Window_Base_drawText = Window_Base.prototype.drawText;
    Window_Base.prototype.drawText = function (text, x, y, maxWidth, align) {
        const translatedText = translateText(String(text));
        _Window_Base_drawText.call(this, translatedText, x, y, maxWidth, align);
    };

    // Override Window_Help refresh method
    Window_Help.prototype.refresh = function () {
        this.contents.clear();
        if (this._text) {
            const translatedText = translateText(this._text);
            if (this.baseTextRect) {
                // MZ version
                const rect = this.baseTextRect();
                this.drawTextEx(translatedText, rect.x, rect.y, rect.width);
            } else {
                // MV version
                const rect = {
                    x: this.textPadding(),
                    y: 0,
                    width: this.contents.width - this.textPadding() * 2,
                    height: this.contents.height
                };
                this.drawTextEx(translatedText, rect.x, rect.y, rect.width);
            }
        }
    };

    // Add calcTextWidth method for MV if it doesn't exist
    if (!Window_Base.prototype.calcTextWidth) {
        Window_Base.prototype.calcTextWidth = function (text) {
            var tempText = text.split('\n');
            var maxWidth = 0;
            for (var i = 0; i < tempText.length; i++) {
                var textWidth = this.textWidth(tempText[i]);
                if (maxWidth < textWidth) {
                    maxWidth = textWidth;
                }
            }
            return maxWidth;
        };
    }

    // Override processEscapeCharacter method to handle text codes
    const _Window_Base_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
    Window_Base.prototype.processEscapeCharacter = function (code, textState) {
        if (code === 'T') {
            const endIndex = textState.text.indexOf(']', textState.index);
            const textToTranslate = textState.text.substring(textState.index, endIndex);
            const translatedText = translateText(textToTranslate);
            textState.text = textState.text.replace(`T[${textToTranslate}]`, translatedText);
            textState.index = endIndex + 1;
        } else {
            _Window_Base_processEscapeCharacter.call(this, code, textState);
        }
    };

    window.Hendrix_Localization = function (text) {
        if (typeof translateText === 'function') {
            return translateText(text);
        }
        return text;
    };

    if (Imported['Galv_MessageStyles']) {
        Window_Message.prototype.changeWindowDimensions = function () {
            if (this.pTarget != null) {
                // Calc max width and line height to get dimensions
                var w = 10;
                var h = 0;

                if (Imported.Galv_MessageBusts) {
                    if ($gameMessage.bustPos == 1) {
                        var faceoffset = 0;
                    } else {
                        var faceoffset = Galv.MB.w;
                    };
                } else {
                    var faceoffset = Window_Base._faceWidth + 25;
                };

                // Calc X Offset
                var xO = $gameMessage._faceName ? faceoffset : 0;
                xO += Galv.Mstyle.padding[1] + Galv.Mstyle.padding[3]; // Added padding

                // Calc text width
                this.resetFontSettings();
                for (var i = 0; i < $gameMessage._texts.length; i++) {
                    var lineWidth = this.testWidthEx($gameMessage._texts[i]) + this.standardPadding() * 2 + xO;
                    if (w < lineWidth) w = lineWidth;

                };
                this.resetFontSettings();
                this.width = Math.min(Graphics.boxWidth, w);

                // Calc minimum lines
                var minFaceHeight = 0;
                if ($gameMessage._faceName) {
                    w += 15;
                    if (Imported.Galv_MessageBusts) {
                        if ($gameMessage.bustPos == 1) w += Galv.MB.w;
                        minFaceHeight = 0;
                    } else {
                        minFaceHeight = Window_Base._faceHeight + this.standardPadding() * 2;
                    };
                };

                // Calc text height
                var textState = { index: 0 };
                textState.text = this.convertEscapeCharacters($gameMessage.allText());
                var allLineHeight = this.calcTextHeight(textState, true);
                var height = allLineHeight + this.standardPadding() * 2;
                var minHeight = this.fittingHeight(0);
                this.height = Math.max(height, minHeight, minFaceHeight);
                this.yOffset = -Galv.Mstyle.yOffet - this.height;

            } else {
                this.yOffset = 0;
                this.width = this.windowWidth();
                this.height = Galv.Mstyle.Window_Message_windowHeight.call(this);
                this.x = (Graphics.boxWidth - this.width) / 2;
            };
        };
    }

})();