chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "triggerFunction") {
      giveApplause();
    }
  });


function giveApplause() {
    console.log("Looking for clap button ...")
    let clapDiv = document.querySelector('[class^="pw-multi-vote-icon"]')
    let clapSvg = clapDiv.querySelector('[aria-label="clap"]')
    let clapButton = clapSvg.parentElement
    
    if (clapButton) {
        const events = ['mousedown', 'mouseup', 'click'];

        async function performClap() {
            for (let i = 0; i < 50; i++) {
                events.forEach(eventType => {
                    let event = new MouseEvent(eventType, {
                        'view': window,
                        'bubbles': true,
                        'cancelable': true
                    });
                    clapButton.dispatchEvent(event);
                });
                await new Promise(resolve => setTimeout(resolve, 20));
            }
        }

        performClap();


    } else {
        console.log("Clap button not found!");
        alert("No Clap button found !")
    }
  };
