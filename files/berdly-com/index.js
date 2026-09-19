// Route keyboard controls through the runner's working standard-gamepad path.
      (function installKeyboardGamepad() {
        const held = new Set();
        const buttonKeys = new Map([
          ["KeyZ", 0],
          ["KeyX", 1],
          ["KeyC", 3],
          ["ShiftLeft", 4],
          ["ShiftRight", 4],
          ["ControlLeft", 5],
          ["ControlRight", 5],
          ["Enter", 9],
          ["ArrowUp", 12],
          ["ArrowDown", 13],
          ["ArrowLeft", 14],
          ["ArrowRight", 15]
        ]);
        const buttons = Array.from({ length: 17 }, function () {
          return { pressed: false, touched: false, value: 0 };
        });
        const gamepad = {
          id: "Toby Web Keyboard Controls (STANDARD GAMEPAD)",
          index: 0,
          connected: true,
          mapping: "standard",
          axes: [0, 0, 0, 0],
          buttons: buttons,
          timestamp: performance.now()
        };

        function refreshButton(buttonIndex) {
          const pressed = Array.from(buttonKeys).some(function (entry) {
            return entry[1] === buttonIndex && held.has(entry[0]);
          });
          buttons[buttonIndex].pressed = pressed;
          buttons[buttonIndex].touched = pressed;
          buttons[buttonIndex].value = pressed ? 1 : 0;
          gamepad.timestamp = performance.now();
        }

        function update(event, pressed) {
          const buttonIndex = buttonKeys.get(event.code);
          if (buttonIndex === undefined) return;
          if (pressed) held.add(event.code);
          else held.delete(event.code);
          refreshButton(buttonIndex);
        }

        window.addEventListener("keydown", function (event) { update(event, true); }, true);
        window.addEventListener("keyup", function (event) { update(event, false); }, true);
        window.addEventListener("blur", function () {
          held.clear();
          for (let i = 0; i < buttons.length; i++) refreshButton(i);
        });

        Object.defineProperty(navigator, "getGamepads", {
          configurable: true,
          value: function () { return [gamepad, null, null, null]; }
        });
      })();

	// Provide the Opera GX authentication response expected by this older runner.
      (function installOperaGxCompatibility() {
        const extensionId = "mpojjmidmnpcpopbebmecmjdkdbgdeke";
        const secret = "QXyd2ZCu88ec3J0X";
        window.chrome = window.chrome || {};
        window.chrome.runtime = window.chrome.runtime || {};
        const originalSendMessage = window.chrome.runtime.sendMessage;

        window.chrome.runtime.sendMessage = function (id, message, reply) {
          if (id !== extensionId) {
            return typeof originalSendMessage === "function"
              ? originalSendMessage.apply(this, arguments)
              : undefined;
          }

          if (message.command === "product") {
            if (typeof reply === "function") reply({ product: "Opera GX" });
            return true;
          }

          if (message.command === "authenticate") {
            if (message.randomString === "Arek") {
              if (typeof reply === "function") {
                reply({ hash: [185, 66, 169, 195, 1, 196, 6, 209, 109, 32, 69, 100, 5, 236, 130, 37, 162, 86, 183, 235] });
              }
              return true;
            }

            const input = new TextEncoder().encode(message.randomString + secret);
            crypto.subtle.digest("SHA-1", input).then(function (digest) {
              if (typeof reply === "function") {
                reply({ hash: Array.from(new Uint8Array(digest)) });
              }
            });
            return true;
          }

          if (message.command === "closeTab" || message.command === "openURL") {
            return false;
          }

          return undefined;
        };
      })();

	// Background Color Changer Function
	const originalConsoleError = console.error.bind(console);
	console.error = function () {
		const message = Array.prototype.join.call(arguments, " ");
		if (message.includes("Blocking on the main thread is very dangerous")) {
			console.warn(message);
			return;
		}
		originalConsoleError.apply(console, arguments);
	};

	function changecolor(el) {
		document.body.style.backgroundColor = el.value;
	}
	
      const CHANGE_ASPECT_RATIO = true;
		// Main Page Elements
      var bodyElement = document.getElementsByTagName("body")[0];
      var statusElement = document.getElementById("status");
      var progressElement = document.getElementById("progress");
      var spinnerElement = document.getElementById("spinner");
      var canvasElement = document.getElementById("canvas");
      var outputElement = document.getElementById("output");
      var outputContainerElement = document.getElementById("output-container");
      var qrElement = document.getElementById("QRCode");
      var qr2Element = document.getElementById("QR2Code");
      var qrButton = document.getElementById("QRButton");
      var qr2Button = document.getElementById("QR2Button");
      var pauseMenu = document.getElementById("pauseMenuContainer");
      var resumeButton = document.getElementById("resumeButton");
      var quitButton = document.getElementById("quitButton");

      const messageContainerElement = document.getElementById("message-container");
      const messagesElement = document.getElementById("messages");
      let rollbackMessages = [];

      let clearRollbackMessagesTimeoutId = -1;
      const showRollbackMessage = function (message) {
        let messages = "";
        rollbackMessages.push(message);
        rollbackMessages.forEach(m => messages += "<p>" + m + "</p>");

        messagesElement.innerHTML = messages;
        messageContainerElement.style.display = 'block';

        if (clearRollbackMessagesTimeoutId === -1) {
          clearTimeout(clearRollbackMessagesTimeoutId);
        }
        clearRollbackMessagesTimeoutId = setTimeout(clearRollbackMessages, 5000);
      };

      const clearRollbackMessages = function () {
        clearRollbackMessagesTimeoutId = -1;
        rollbackMessages = [];
        messageContainerElement.style.display = 'none';
      };
		
	  // for displaying contents of console to display as a single line of text
	  // stopload is set to 0, as to initialize it
	  var loadprogress = 0;
		
      var startingHeight, startingWidth;
      var startingAspect;
      var Module = {
        INITIAL_MEMORY: 536870912,
        preRun: [function () {
          const partNames = [1, 2, 3, 4].map(part => `game.unx.part${part}`);
          Module.addRunDependency("berdly-game-archive");
          Module.addRunDependency("berdly-streamed-audio");

          (async function () {
            const archive = new Uint8Array(96122236);
            let offset = 0;

            for (const partName of partNames) {
              Module.setStatus(`Loading game data... (${offset}/${archive.length})`);
              const response = await fetch(partName, { cache: "no-store" });
              if (!response.ok) {
                throw new Error(`Unable to load ${partName}: HTTP ${response.status}`);
              }

              const part = new Uint8Array(await response.arrayBuffer());
              archive.set(part, offset);
              offset += part.length;
            }

            if (offset !== archive.length) {
              throw new Error(`Game archive size mismatch: expected ${archive.length}, received ${offset}`);
            }

            Module.gameArchive = archive;
            Module.gameArchiveUrl = URL.createObjectURL(
              new Blob([archive], { type: "application/octet-stream" })
            );
            Module.setStatus("Game data ready.");
            Module.removeRunDependency("berdly-game-archive");
          })().catch(function (error) {
            Module.printErr(error.stack || String(error));
            Module.setStatus("Unable to load game data. See the console for details.");
          });

          (async function () {
            const audioFiles = manifestFiles().split(";")
              .filter(path => /\.ogg$/i.test(path))
              .concat(["mus/silence.ogg", "musb/silence.ogg"]);
            const streamedAudioFiles = new Map();

            let loaded = 0;
            let nextFile = 0;
            const workerCount = Math.min(8, audioFiles.length);
            const workers = Array.from({ length: workerCount }, async function () {
              while (nextFile < audioFiles.length) {
                const path = audioFiles[nextFile++];
                const response = await fetch(path);
                if (!response.ok) {
                  throw new Error(`Unable to load ${path}: HTTP ${response.status}`);
                }

                streamedAudioFiles.set(path, new Uint8Array(await response.arrayBuffer()));
                loaded++;
                Module.setStatus(`Loading music... (${loaded}/${audioFiles.length})`);
              }
            });

            await Promise.all(workers);
            Module.streamedAudioFiles = streamedAudioFiles;
            console.log(`Loaded ${audioFiles.length} streamed music files.`);
            Module.removeRunDependency("berdly-streamed-audio");
          })().catch(function (error) {
            Module.printErr(error.stack || String(error));
            Module.setStatus("Unable to load music. See the console for details.");
          });
        }],
        postRun: [],
        prepareGameArchive: function () {
          if (!Module.gameArchive) {
            throw new Error("The game archive was not loaded before the save filesystem mounted.");
          }

          try {
            Module.FS_unlink("/_savedata/game.unx");
          } catch (error) {
            // A fresh save filesystem will not have an old temporary archive.
          }

          Module.FS_createDataFile(
            "/_savedata",
            "game.unx",
            Module.gameArchive,
            true,
            true,
            true
          );

          Module.FS_createPath("/", "assets", true, true);
          for (const [path, data] of Module.streamedAudioFiles || []) {
            const slash = path.lastIndexOf("/");
            const directory = slash === -1 ? "" : path.slice(0, slash);
            const filename = slash === -1 ? path : path.slice(slash + 1);
            if (directory) {
              Module.FS_createPath("/_savedata", directory, true, true);
              Module.FS_createPath("/assets", directory, true, true);
            }
            Module.FS_createDataFile(
              directory ? `/_savedata/${directory}` : "/_savedata",
              filename,
              data,
              true,
              false,
              true
            );
            Module.FS_createDataFile(
              directory ? `/assets/${directory}` : "/assets",
              filename,
              data,
              true,
              false,
              true
            );
          }
          console.log(`Mounted /_savedata/game.unx (${Module.gameArchive.length} bytes)`);
          console.log(`Mounted ${Module.streamedAudioFiles?.size || 0} streamed music files.`);
          Module.streamedAudioFiles = null;
        },
        print: (function () {
          var element = document.getElementById("output");
          if (element) element.value = ""; // clear browser cache
          return function (text) {
		  
		  // for displaying contents of console to display as a single line of text
		  // if loading has started
			if (text === "Starting WAD") {
			// tells if statement below to display ALL loading strings
				loadprogress += 1;
			}
	  
			// if loading has started
			if (loadprogress === 1) {
			// allow console to be displayed as text on-screen
				Module.setStatus(text);
			}
			// if game has started
			// greater than or equal to just in case
			else if (loadprogress >= 2) {
			// then set load text to nothing
				Module.setStatus("");
			}
		    // back to normal shit
			
            if (arguments.length > 1)
              text = Array.prototype.slice.call(arguments).join(" ");
			// for normal console
            console.log(text);
            if (text === "Entering main loop.") {
              // It seems that this text ensures game is loaded.
              ensureAspectRatio();
			  // below are custom
			  // stops loading text on game run
			  loadprogress = 2;
			  Module.setStatus("");
              document.querySelector(".loading").style.display = "none";

			  // TRUE END of custom shit
            }
            if (element) {
              element.value += text + "\n";
              element.scrollTop = element.scrollHeight; // focus on bottom
            }
          };
        })(),
        printErr: function (text) {
          if (arguments.length > 1)
            text = Array.prototype.slice.call(arguments).join(" ");
          console.error(text);
        },
        canvas: (function () {
          var canvas = document.getElementById("canvas");

          return canvas;
        })(),
        setStatus: function (text) {
          if (!Module.setStatus.last)
            Module.setStatus.last = { time: Date.now(), text: "" };
          if (text === Module.setStatus.last.text) return;
          var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
          var now = Date.now();
          if (m && now - Module.setStatus.last.time < 30) return; // if this is a progress update, skip it if too soon
          Module.setStatus.last.time = now;
          Module.setStatus.last.text = text;
          if (m) {
            text = m[1];
            progressElement.value = parseInt(m[2]) * 100;
            progressElement.max = parseInt(m[4]) * 100;
            progressElement.hidden = false;
            spinnerElement.hidden = false;
          } else {
            progressElement.value = null;
            progressElement.max = null;
            progressElement.hidden = true;

            // If there are no status text, we are finished and can display
            // the canvas and hide the spinner
            if (!text) {
              spinnerElement.style.display = "none";
              canvasElement.style.display = "block";
            }
          }
          statusElement.innerHTML = text;
        },
        totalDependencies: 0,
        monitorRunDependencies: function (left) {
          this.totalDependencies = Math.max(this.totalDependencies, left);
          Module.setStatus(
            left
              ? "Preparing... (" +
                  (this.totalDependencies - left) +
                  "/" +
                  this.totalDependencies +
                  ")"
              : "All downloads complete."
          );
        },
      };

      (function installGameArchiveRequestBridge() {
        const isGameArchiveRequest = function (url) {
          return typeof url === "string" && /(?:^|\/)game\.unx(?:[?#]|$)/.test(url);
        };

        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (method, url) {
          const args = Array.prototype.slice.call(arguments, 2);
          if (isGameArchiveRequest(url) && Module.gameArchiveUrl) {
            url = Module.gameArchiveUrl;
          }
          return originalOpen.call(this, method, url, ...args);
        };

        const originalFetch = window.fetch.bind(window);
        window.fetch = function (resource, options) {
          const url = typeof resource === "string" ? resource : resource && resource.url;
          if (isGameArchiveRequest(url) && Module.gameArchiveUrl) {
            resource = Module.gameArchiveUrl;
          }
          return originalFetch(resource, options);
        };
      })();
      Module.setStatus("Downloading...");
      window.onerror = function (event, source, line, column, error) {
        console.error(
          "Uncaught runtime error:",
          error && error.stack ? error.stack : event,
          source || "",
          line || 0,
          column || 0
        );
        // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
        Module.setStatus("Exception thrown, see JavaScript console");
        spinnerElement.style.display = "none";
        Module.setStatus = function (text) {
          if (text) Module.printErr("[post-exception status] " + text);
        };
      };

      Module['arguments'] = [];
	

		// Enable FPS Counter Button
	  var stopfps = 0;

		// End of Button Functions

      var g_pWadLoadCallback = undefined;
      function setWadLoadCallback( _wadLoadCallback ) 
      {
        g_pWadLoadCallback = _wadLoadCallback;
      }

      var g_pAddAsyncMethod = -1;

      function setAddAsyncMethod( asyncMethod )
      {
        g_pAddAsyncMethod = asyncMethod;
      }

      var g_pJSExceptionHandler = undefined;

      function setJSExceptionHandler( exceptionHandler )
      {
        if (typeof exceptionHandler == "function") {
            g_pJSExceptionHandler = exceptionHandler;
        } // end if
      } // end setJSExceptionHandler

      function hasJSExceptionHandler()
      {
        return (g_pJSExceptionHandler != undefined) && (typeof g_pJSExceptionHandler == "function");
      } // end hasJSExceptionHandler

      function doJSExceptionHandler( exceptionJSON )
      {
        if (typeof g_pJSExceptionHandler == "function") {
          var exception = JSON.parse( exceptionJSON );
          g_pJSExceptionHandler( exception );
        } // end if
      } // end doJSExceptionHandler

		// Get Files
      function manifestFiles()
      {
        return [ "runner.data",
"runner.js",
"runner.wasm",
"runner.worker.js",
"audio-worklet.js",
"game.unx",
"audio_intronoise.ogg",
"audio_intronoise_ch1.ogg",
"mus/acid_tunnel.ogg",
"mus/alarm_titlescreen.ogg",
"mus/alley_ambience.ogg",
"mus/april_2012.ogg",
"mus/audio_anotherhim.ogg",
"mus/audio_darkness.ogg",
"mus/audio_defeat.ogg",
"mus/audio_drone.ogg",
"mus/audio_story.ogg",
"mus/basement.ogg",
"mus/battle.ogg",
"mus/berdly_audience.ogg",
"mus/berdly_battle_heartbeat_true.ogg",
"mus/berdly_chase.ogg",
"mus/berdly_descend.ogg",
"mus/berdly_flashback.ogg",
"mus/berdly_theme.ogg",
"mus/bird.ogg",
"mus/boxing_boss.ogg",
"mus/boxing_game.ogg",
"mus/card_castle.ogg",
"mus/castletown.ogg",
"mus/castletown_empty.ogg",
"mus/ch2_credits.ogg",
"mus/charjoined.ogg",
"mus/checkers.ogg",
"mus/coolbeat.ogg",
"mus/creepychase.ogg",
"mus/creepydoor.ogg",
"mus/creepylandscape.ogg",
"mus/cyber.ogg",
"mus/cyber_battle.ogg",
"mus/cyber_battle_end.ogg",
"mus/cyber_battle_prelude.ogg",
"mus/cyber_shop.ogg",
"mus/cybercity.ogg",
"mus/cybercity_alt.ogg",
"mus/cybercity_old.ogg",
"mus/cyberhouse.ogg",
"mus/cybershop_christmas.ogg",
"mus/d.ogg",
"mus/deep_noise.ogg",
"mus/dogcheck.ogg",
"mus/dontforget.ogg",
"mus/elevator.ogg",
"mus/fanfare.ogg",
"mus/field_of_hopes.ogg",
"mus/flashback_excerpt.ogg",
"mus/forest.ogg",
"mus/friendship.ogg",
"mus/gallery.ogg",
"mus/gameover_short.ogg",
"mus/giant_queen_appears.ogg",
"mus/gigaqueen_pre.ogg",
"mus/hip_shop.ogg",
"mus/home.ogg",
"mus/honksong.ogg",
"mus/joker.ogg",
"mus/keygen.ogg",
"mus/kingboss.ogg",
"mus/lancer.ogg",
"mus/lancer_susie.ogg",
"mus/lancerfight.ogg",
"mus/legend.ogg",
"mus/man.ogg",
"mus/mansion.ogg",
"mus/mansion_entrance.ogg",
"mus/menu.ogg",
"mus/mus_birdnoise.ogg",
"mus/mus_introcar.ogg",
"mus/mus_school.ogg",
"mus/muscle.ogg",
"mus/music_guys.ogg",
"mus/music_guys_intro.ogg",
"mus/napsta_alarm.ogg",
"mus/noelle.ogg",
"mus/noelle_ferriswheel.ogg",
"mus/noelle_normal.ogg",
"mus/noelle_school.ogg",
"mus/ocean.ogg",
"mus/prejoker.ogg",
"mus/queen.ogg",
"mus/queen_boss.ogg",
"mus/queen_car_radio.ogg",
"mus/queen_intro.ogg",
"mus/quiet_autumn.ogg",
"mus/rouxls_battle.ogg",
"mus/ruruskaado.ogg",
"mus/s_neo.ogg",
"mus/s_neo_clip.ogg",
"mus/shinkansen.ogg",
"mus/shop1.ogg",
"mus/sink_noise.ogg",
"mus/spamton_basement.ogg",
"mus/spamton_battle.ogg",
"mus/spamton_happy.ogg",
"mus/spamton_house.ogg",
"mus/spamton_laugh_noise.ogg",
"mus/spamton_meeting.ogg",
"mus/spamton_meeting_intro.ogg",
"mus/spamton_neo_after.ogg",
"mus/spamton_neo_meeting.ogg",
"mus/spamton_neo_mix_ex_wip.ogg",
"mus/static_placeholder.ogg",
"mus/tense.ogg",
"mus/the_dark_truth.ogg",
"mus/the_holy.ogg",
"mus/thrash_rating.ogg",
"mus/thrashmachine.ogg",
"mus/town.ogg",
"mus/tv_noise.ogg",
"mus/vs_susie.ogg",
"mus/w.ogg",
"mus/wind.ogg",
"mus/wind_highplace.ogg",
"musb/battle_valley.ogg",
"musb/bilingual-battle.ogg",
"musb/boss_1.ogg",
"musb/boss_2.ogg",
"musb/cave.ogg",
"musb/cave_fight.ogg",
"musb/church_of_anime.ogg",
"musb/code_shop.ogg",
"musb/coffee_chat.ogg",
"musb/duck.ogg",
"musb/etal_valley.ogg",
"musb/four_hour_workweek.ogg",
"musb/interview_song_p1.ogg",
"musb/interview_song_p2.ogg",
"musb/interview_song_p3.ogg",
"musb/interview_song_p4.ogg",
"musb/line_dance.ogg",
"musb/mega_lobotamy.ogg",
"musb/mine_club.ogg",
"musb/napstachords.ogg",
"musb/nda_setter.ogg",
"musb/nda_slammer.ogg",
"musb/office.ogg",
"musb/overworld.ogg",
"musb/recruton.ogg",
"musb/recruton_intro.ogg",
"musb/silly_strings.ogg",
"musb/slides.ogg",
"musb/slow_dance.ogg",
"musb/stooxls.ogg",
"musb/tima.ogg",
"musb/timer.ogg",
"musb/valley.ogg",
"musb/valley_shop.ogg",
"musb/valley_town.ogg",
"musb/valley_town_b.ogg",
"snd_bigcar_yelp.ogg",
"snd_closet_fall.ogg",
"snd_closet_fall_ch1.ogg",
"snd_closet_impact.ogg",
"snd_closet_impact_ch1.ogg",
"snd_dtrans_drone.ogg",
"snd_dtrans_flip.ogg",
"snd_dtrans_heavypassing.ogg",
"snd_dtrans_lw.ogg",
"snd_dtrans_square.ogg",
"snd_dtrans_twinkle.ogg",
"snd_fountain_make.ogg",
"snd_fountain_target.ogg",
"snd_ghostappear.ogg",
"snd_great_shine.ogg",
"snd_great_shine_ch1.ogg",
"snd_him_quick.ogg",
"snd_hitcar.ogg",
"snd_hitcar_little.ogg",
"snd_icespell.ogg",
"snd_jc_text.ogg",
"snd_joel_text.ogg",
"snd_keypress_2_ext.ogg",
"snd_keypress_3_ext.ogg",
"snd_keypress_4_ext.ogg",
"snd_keypress_5_ext.ogg",
"snd_mettaton_smash.ogg",
"snd_mod_notif.ogg",
"snd_mod_speak_double_low.ogg",
"snd_mod_speak_double_low_echo.ogg",
"snd_paper_rumble.ogg",
"snd_paper_rumble_ch1.ogg",
"snd_paper_surf.ogg",
"snd_paper_surf_ch1.ogg",
"snd_py_text.ogg",
"snd_quack.ogg",
"snd_revival.ogg",
"snd_revival_ch1.ogg",
"snd_rt_elevator_ding.ogg",
"snd_rt_whistle.ogg",
"snd_rurus_appear.ogg",
"snd_rurus_appear_ch1.ogg",
"snd_shoot_tima.ogg",
"snd_smallcar_yelp.ogg",
"snd_snowgrave.ogg",
"snd_spell_pacify.ogg",
"snd_straw_drink_long.ogg",
"snd_text_tima.ogg",
"snd_tick.ogg",
"snd_tima_bell.ogg",
"snd_tock.ogg",
"snd_txteta.ogg",
"snd_txtmod_1.ogg",
"snd_txtmod_7.ogg",
"snd_txtmod_9.ogg",
"snd_usefountain.ogg",
"snd_usefountain_ch1.ogg" ].join( ";");
      }

		// Verify Files
      function manifestFilesMD5()
      {
        return [ "6e2feb74267d03d2c362dc710e787029",
"1278aa3bd0967cfadf015119296c7004",
"6f323d3c886b09bf86db95ecfef4b507",
"b1c08d2000bced0a6caf67884bbe3f5e",
"5d0a0227c50a283fe2af3066b3b0a104",
"cbc7be05a5da4be161727d36ea5f82a6",
"b918e8a58a182e585f600d51155925af",
"b918e8a58a182e585f600d51155925af",
"259ae1b60ea0eda223b8933754303322",
"7bc37403f8b5fa3670605efe00124d73",
"caf022c80f61de86254305e91d3563bd",
"1fb9c074e72dee38bb757d1f96353ad8",
"4c659ca8adb1ad8566282ba14315dd92",
"0d2f7a99ff6333a6c067c3cdc16e65c5",
"832d210df7f526db646b778389752ecb",
"163fb3286bc2b230da452acfb277dc12",
"8c44cb6c0ead7f3ac739ad969bc1ab0b",
"741d0675a2e4a21aa898485f1adbdf03",
"cced72991f8aa20cdfd1e279043a02d0",
"4f2521fefa6114262aba4da49c50fe70",
"65edd6ec4dde6f34263cb56af9524280",
"b2863fd291519b09a32b84c1f5d70d6c",
"4b249ad18eb4c40dbf9b75279b1db4fc",
"13f201e8f52c1ff0968005daf880f95d",
"ca2f01b54715b2032f6708ec2bb70c98",
"44d30635dd2fddfb61c05e4d588a16da",
"1a043291cb669ab265ebe657298c1303",
"714166c76109808fa06612775bf8417c",
"600be0a11f392540343d01bb30ce9906",
"b5d5eed5f205f8862b1b45c4e3777310",
"0c39648bdf8ca2ad95301e8196638e9d",
"af81ebdf9920985d0ce068872ac009fc",
"e5fcdbde17e379df7b0ea04cd4047554",
"81385d6bca4c3928fcc328268d469c8f",
"1a67e6ce6c8395170fd3d6697e31204f",
"043f12bedbccd1fb402e910f7be2f121",
"88875cb3ac1a99f04b739d61519c4dca",
"e2bb34f65d98c135d281d61b63c51b76",
"5d1d55c235d50fe088cca681d702925a",
"739a4cfe137c942195472b293e153a7a",
"424f052478d480f3adc248bd6e9810a5",
"4fe7d899de410959e39d7f33b1e0b9e8",
"6b695ac718eb2f28757c62d79d199ff7",
"94b6b9b79dffaa03fdcde025fec7bed9",
"d116de4e8aa8e9484a62491d5d52eb54",
"7a254414daa7336e304b89819360a12b",
"4b926e56d6e206a8514e255bdb7b0bb5",
"7ca1a8de22e36a4878e5be6c993fdfcd",
"47948f051f79fe201224a9fbdc07de9e",
"16abc519fb2fc601b664cc8d3fdae7eb",
"c8bf4e58112d953ca9e7855c402c1e13",
"f7f65393c245b5fde4a7bd1e285c2b99",
"48d902592ae64424b646bb0f2ac23c64",
"1295ebecc6dac86a9b5e45db2bf2a8ba",
"97e55a447fce145f997550b2e25c5af4",
"7a1f8573b461680f279b9db4f8aca635",
"3312e0eb9f378011b046f1468a5c9e00",
"603b36b691067b184fa244a261a4757c",
"89f32d25611c08cc83e06314f6b0d29f",
"1bc2a77146b55daba27c37946fa7d710",
"1fa875ef6bc377520de1c15193f481dd",
"7212af3364678a24046a7836dbff3189",
"3d407240e2758034892ba7b6789e55db",
"3c03d4a70f156f85176785d5cf19750f",
"06178a5aa11b2f8b1875d06b8d7f7bf9",
"af27e37e42746889099bae637b8bd9dd",
"af427d97136f380b9e361b195b885217",
"e4c8222adddeafb167f17cc917074503",
"a31dccf062f49160c4cfbb00d6ffe051",
"300915e4444d6e4fc703bb13c6101231",
"891366b99f2edd6da14fb3395891dd57",
"88046a3ced3e763d4e63479c058dcdb1",
"20a89883018422859b6bc2759289e6e7",
"c5e8e5b459d9f7ae8fe5b6e9bba1d5a2",
"b44d35fbb8f80d803d2212824c672477",
"e961a6fc4a7c34e9b4d0c8be1e0dde07",
"4ec29b34cf16470e3e7fc2b68ece2fe7",
"fe7a66abe39dcb4f3b2534c35fadd831",
"28100338c55da65a18f37794278ee157",
"d8beaeb1698c3d3764486a1b2c9bb90d",
"a056c744d2e1c5480aabc9a7bbbc990f",
"1476e98f74ae2587c5ce0a46002be272",
"be2682e04f849f6906e8205121753562",
"1ca9c249943d2ef59c9413edba69b28d",
"3b3ea55e36bf2377e843d7190e5addb6",
"e104d7d8c65fd26cf9dccf797f5358a7",
"d85a77183447fdd6019f77af480a4530",
"717bba27166491817c4e51c0b8913495",
"2c4a53fdbcc000c3fea8b31b4df31de8",
"c53d19c7fd847ac4a2db457ffb434f6c",
"f11149e3284bd3ced3f433545cac773a",
"d4c39720834b782bfe8bf8df1ad41adb",
"08e53d5b016a575a801bdb9bcbdc5d31",
"fb9c60c59c39d3746b08e912818162b1",
"15fa8876e7cad54d1033bb6ee237c9ae",
"226ef2189079409f4c61589756d60aa4",
"2889a36cb31f216ebfa03c26b4a03234",
"5a48961a5c5988b7f0d1d2bff4bb08e0",
"052c3eefb3bb5e8e959b7d6db6661e51",
"2bf19594897cb007a1433386b0d27d63",
"ee8ccb0db46f717df4fe00872c896d4c",
"260646b5fc7003523faae282c93bf065",
"571e7886a634cd57d2ec1f51c5bd8bf9",
"7727fa679da98d75ddbcddc6ab0ca5f4",
"3ece3c0df9b45f8a835e07ca03f1bf67",
"f109579b28af366dbaed8f8f58639d19",
"d6143cb460b4081aa8e0a78dd0b5237c",
"6290ca8942332e69a5cfdc5c6bb101f2",
"32d4052d99f30daea5255a5ba6685b9a",
"57aa6b7aa394f7d234826019fd5f7780",
"2d19f11cbc7e0a08ee9668df623aee74",
"311c0150a1bd176a48e04dc1065fbca8",
"aa419973a1d172c5af980396a7a84ec5",
"4b42a9c72b1fb31ecc82ece18f4308ad",
"b3b6c3b3010197bd38d54726a2600196",
"66572fd57a62b03f5c16a4ad9915f127",
"e811c9be2061976ddc83da887f049c54",
"02026185beb4192b9f7d75e0c4f5ba46",
"9ab5f73dc93f66c0428ab73267dfe674",
"6a48ed774e2c04177e8fde3689872035",
"2df7c77161eb1ce147b85ac87e6609d6",
"2aa5e60561b83ab45e62a3e65cecb704",
"e52be439c3512d06a80bc8b89b9c65b9",
"920dda16029aca43d98441704412ceec",
"529c8094e8c9e2a0d595dd55216ea711",
"78705a6f53c4f24e02590ea61310bd20",
"18cb3d89477954b573774eb142ec037b",
"7fe63c449d38e5b9d02b79ead88f5251",
"bb82813f28b256005465b1a5c1972556",
"82f243ea72be072263d449718b09aa3d",
"a7b1e932a52d3ef81dfa83e4751857af",
"a668851b9bbaa3b33258fdfadc6cf8ce",
"4b677aef3942b8fe7dfa39f2d94f308c",
"6f9b1e0c9fb49da79da139ed1132b3b3",
"afb8ef19199e0821af35f6655994804d",
"b64829b282c0bfc5000ef04181573db5",
"bafd0eb74da57d8f15b3f0c46b9d0020",
"9a08e8d6cf49ea3fb8aa5d1aa6c4f58b",
"9c655309df168e358599e41bf1351964",
"cf3d8424e1b709a25f1eb4c9c1e0fb75",
"645168ce7bf3554e7c87dcb42dd393d8",
"4cc71f5253cd0e1add9179a94d2dc099",
"2e69ae3c8767aacb814048fbc46d0ef8",
"c5bb8606f4ace0ef473a373796136046",
"d439cde6f38d6e5cad9b673e5a6e372b",
"3da8bff02507c073efbeb794205ca157",
"d99a902da7a2c1587a5a757ee255dab2",
"9bbaf5ea4263bbb3aadb73aa9decb086",
"378362311ad9c81a92a919a30e7cb245",
"7b72b0f7ca046f8c1aef7e6a5664e8e8",
"7b295e22aed63dd2fe2a37a361e00fb4",
"7178a25cc0e2928e048005dffc98405c",
"2eafd6e9bf639967d6ccbb6d6ab55fcf",
"26e19926f742e19a5074e491bb1c2eef",
"ecbfad99d9cef435f8abde12febe763a",
"421c39e4a7372bf8cd5974d8049781b8",
"ae3094a8a89554088ac37b1589fcebf3",
"fdc592aaed7e275195ad2e432b4ab80a",
"a4cb8170a48d4d3c706a6643662a4525",
"5702b26db546b5fa9c26289b9bc43b93",
"063bd2ff1f1911c99b0697d14308c1c1",
"063bd2ff1f1911c99b0697d14308c1c1",
"c7ed25446d9d34af39b7582d8986c6b3",
"c7ed25446d9d34af39b7582d8986c6b3",
"0b597daa614408ddbaa1975842a9b3b3",
"51048bb67d91c9164fb7bc58e927288d",
"95b41929ccb24c2b07bcf3a5fbdb7ebf",
"17c3b4b7050a4a496ec3053452298c69",
"8a711625145c06aecfa1ada89f96da8d",
"5a6f6cd8f8cb29ca0e0c94f4f69bdcf8",
"6e9d3ebc5443326e112226932cd94561",
"67a2c565f995865a1db09be83a7f1bd1",
"9712eb470af1b2341031baf436e433da",
"29b9e9be74517abe7cd0cebda0100213",
"04fce6209547072ee69c0edcbb3c57a8",
"597ede9cae463224df535f7903a314d8",
"108ef3f257635a11357145914e7e7d7f",
"46a371150de31b6fa26e9a0665783628",
"f73b8638c7fa295d2d101dd9d4a5da73",
"9479667586ab230295d848de54604045",
"ba18b5af023b324472d1ef3e26dec965",
"8ae2aaac76bc27a15730320cc54efb5b",
"e55b80fc4f0b40e92fadb205ae55eae4",
"e31bfd5c044ae04225593caf3dfb413d",
"f3ddeeaa2ea044effbaad067cbde6cea",
"c7d8fa79b8c751550880ec70dd12f5df",
"460b0a851ca8543a530c3a9afafe0059",
"355208ffeb38fec85ec443e48ab3cf9a",
"aec42d1752baf450958b9d73921b179a",
"40d9fb6cd468b63073854b11b8162ae5",
"40d9fb6cd468b63073854b11b8162ae5",
"1c469264e56d565596e9b5cc0165eb77",
"1c469264e56d565596e9b5cc0165eb77",
"18241c6964b73339df588f5388a10ce8",
"9e48bdde71b59a67530e46eff8028300",
"c7173576340af49fe80c1dd733d4501d",
"33e00d1a7f2e6e19fd2fa269ddfbfbf4",
"d75420239df5943e5d55de0eeb969a0d",
"fb4e1feaac22b67ca6e3670bbe028c29",
"46f88c456820cb4d2f6b34635ba4942c",
"46f88c456820cb4d2f6b34635ba4942c",
"ef1f2afdf46f0ed6ceedffcfe3ccb1ff",
"1e5291165d0c0fed2cafea09d4831583",
"4ee930c5506a1d4059330b4197ab1b41",
"03dfa5d2499ac3ff64379b30e87c9765",
"1a2715d8ff37720cb51ff26f3e75b6ad",
"62856f91df8f0dd430e772a2a235ce94",
"c3690d1d0e8bb121f458263ef532b748",
"efaffd9cf7727cd5bc13527fe949ad32",
"c025e3d1a4d6ae0d7ef1260544179bbf",
"141e7af4ecdce72101d3ceefb27ef248",
"7015142a049ef63ac611ec650403ee9b",
"7b91adcb9837fb4027087711890d7fc5",
"0f8dc851145a92b62ee49687c5a66f73",
"d69b08e2917175936e148719397a6d7d",
"91732a57f019c6beda4b7ade0a555f8e" ];
      }

      function onFirstFrameRendered()
      {
          //console.log("First frame rendered!");
      }

      function onGameSetWindowSize(width,height)
      {
          if (startingHeight === undefined && startingWidth === undefined) {
              console.log("Initial window size set to width: " + width + ", height: " + height);

              startingHeight = height;
              startingWidth = width;
              startingAspect = startingWidth / startingHeight;
          }
      }

	// Trigger Ads
    function triggerAd(adId, _callback_beforeAd, _callback_afterAd, _callback_adDismissed, _callback_adViewed, _callback_adbreakDone) {
       // need to take a copy of the RValues represented
       var pRValueCopy = triggerAdPrefix( _callback_beforeAd, _callback_afterAd, _callback_adDismissed, _callback_adViewed, _callback_adbreakDone );
       var pCallbackBeforeAd = pRValueCopy + (0*16);
       var pCallbackAfterAd = pRValueCopy + (1*16);
       var pCallbackAdDismissed = pRValueCopy + (2*16);
       var pCallbackAdViewed = pRValueCopy + (3*16);
       var pCallbackAdBreakDone = pRValueCopy + (4*16);

       adBreak({
         "type": "reward",                    // The type of this placement
         "name": adId,                        // A descriptive name for this placement

         "beforeAd": () => {                  // Prepare for the ad. Mute and pause the game flow
           console.log("beforeAd");
           // trigger _callback_beforeAd to game
           doGMLCallback( pCallbackBeforeAd, { id:adId } );
         },
         "afterAd" : () => {                   // Resume the game and re-enable sound
           console.log("afterAd");
           // trigger _callback_afterAd to game
           doGMLCallback( pCallbackAfterAd, { id:adId } );
         },
         "beforeReward": (showAdFn) => {      // Show reward prompt (call showAdFn() if clicked)
           console.log("beforeReward");
           showAdFn();
           // Setup native prompt to indicate ad will load
           // Will not be setup by dev so this UX controlled by GXC
         },
         "adDismissed": () => {               // Player dismissed the ad before it finished
           console.log("adDismissed");
           // trigger _callback_adDismissed to game
           doGMLCallback( pCallbackAdDismissed, { id:adId } );
         },
         "adViewed": () => {                  // Player watched the ad–give them the reward.
           console.log("adViewed");
           // trigger _callback_adViewed to game
           doGMLCallback( pCallbackAdViewed, { id:adId } );
         },
         "adBreakDone": (placementInfo) => {  // Always called (if provided) even if an ad didn't show
           console.log("adBreakDone");
           // trigger _callback_adBreakDone to game
           doGMLCallback( pCallbackAdBreakDone, { id:adId } );
           triggerAdPostfix( pRValueCopy );
         }, 
       });
      }

      function ensureAspectRatio() {
        if (canvasElement === undefined) {
          return;
        }

        if (!CHANGE_ASPECT_RATIO) {
          return;
        }
        
        if (startingHeight === undefined && startingWidth === undefined) {
          return;
        }

        canvasElement.classList.add("active");

        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;
        var newHeight, newWidth;

        // Find the limiting dimension.
        var heightQuotient = startingHeight / maxHeight;
        var widthQuotient = startingWidth / maxWidth;

        if (heightQuotient > widthQuotient) {
          // Max out on height.
          newHeight = maxHeight;
          newWidth = newHeight * startingAspect;
        } else {
          // Max out on width.
          newWidth = maxWidth;
          newHeight = newWidth / startingAspect;
        }

        canvasElement.style.height = newHeight + "px";
        canvasElement.style.width = newWidth + "px";
      }
		// To Pause when it detects the Tab is inactive
      function pause() { // Don't change the name - GX Mobile calls it when the app becomes inactive.
        if (!canvasElement.classList.contains("active")) { // Wait for the canvas to load.
          return
        }

        if (typeof GM_pause !== "function") {
          return;
        }

        GM_pause();
        pauseMenu.hidden = false;
        canvasElement.classList.add("paused");
      }
		// To Resume when it detects the Tab is Active
      function resume() {
        if (typeof GM_unpause === "function") {
          GM_unpause();
        }
        pauseMenu.hidden = true;
        canvasElement.classList.remove("paused");
        canvasElement.classList.add("unpaused");
        enterFullscreenIfSupported();
        lockOrientationIfSupported();
      }

      function quitIfSupported() {
        if (window.oprt && window.oprt.closeTab) { /* GX Mobile API */
          window.oprt.closeTab();
        } else if (window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage) {
          window.chrome.runtime.sendMessage('mpojjmidmnpcpopbebmecmjdkdbgdeke', { command: 'closeTab' })
        }
      }

      function enterFullscreenIfSupported() {
        if (!window.oprt || !window.oprt.enterFullscreen) { /* GX Mobile API */
          return;
        }

        window.oprt.enterFullscreen();
        if (typeof GM_get_view_status === "function" && typeof GM_set_view_status === "function") {
          let viewStatus = GM_get_view_status();
          viewStatus.fullscreen = true;
          GM_set_view_status(viewStatus);
        }
      }

      function lockOrientationIfSupported() {
        if (!window.oprt || !window.oprt.lockPortraitOrientation || !window.oprt.lockLandscapeOrientation) { /* GX Mobile API */
          return;
        }

        if (typeof GM_get_view_status !== "function") {
          return;
        }

        let viewStatus = GM_get_view_status();
        if (viewStatus.landscape === true && viewStatus.portrait === false) {
          window.oprt.lockPortraitOrientation();
        } else if (viewStatus.landscape === false && viewStatus.portrait === true) {
          window.oprt.lockPortraitOrientation();
        }
      }
		// uh, shit that no one cares about
      const resizeObserver = new ResizeObserver(() => {
        window.requestAnimationFrame(ensureAspectRatio);
        setTimeout(() => window.requestAnimationFrame(ensureAspectRatio), 100);
      });
      resizeObserver.observe(document.body);
		
		// Disable Scrolling on Mobile
      if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
        bodyElement.className = "scrollingDisabled";
        canvasElement.classList.add("animatedSizeTransitions");
        outputContainerElement.hidden = true;
      }

      document.addEventListener("visibilitychange", (event) => {
        if (document.visibilityState != "visible") {
          pause();
        }
      });

      window.addEventListener("load", (event) => {
        if ((!window.oprt || !window.oprt.enterFullscreen) && (!window.chrome || !window.chrome.runtime || !window.chrome.runtime.sendMessage)) {
          quitButton.hidden = true;
        }
      });

      setWadLoadCallback(() => {
        enterFullscreenIfSupported();
        lockOrientationIfSupported();
      });
