// ==UserScript==
// @name        profitsfly reload helper
// @include     /^https:\/\/.*\.(tradeshowrating.com|historyofyesterday.com|playonpc.online|quins.us)\/.*/
// @run-at      document-start
// ==/UserScript==

//---profitsfly reload helper----
(function() {
    "use strict";

    const domainRegex = /^https:\/\/.*\.(tradeshowrating.com|historyofyesterday.com|playonpc.online|quins.us)\/.*/;
    if (domainRegex.test(window.location.href)) {
        if (window.location.href.includes("/ref.php")) {
            // Back up the current ref url
            GM_setValue("profitsflyLocation", window.location.href);
        } else if (document.readyState === "complete") {
            onWindowLoad();
        } else {
            window.addEventListener('load', onWindowLoad);
        }

        function onWindowLoad() {
            // Click the continue button if a backed up url was loaded in the last 5 seconds
            if (document.body.textContent.includes("You have 2 active sessions.")) {
                if ((Date.now() - GM_getValue("profitsflyGoBackTime", 0)) < 5000) {
                    for (const button of document.querySelectorAll("button")) {
                        if (button.textContent.trim() === "Continue") {
                            button.click();
                            break;
                        }
                    }
                }
                return;
            }

            // Load the backed up url
            if (GM_getValue("profitsflyLocation")
                && !document.body.textContent.includes("Less than 18 seconds have passed between actions. Robot verification failed, please try again...")
                && !document.body.textContent.includes("Please wait...")) {
                const lastLocation = GM_getValue("profitsflyLocation");
                if (lastLocation) {
                    GM_setValue("profitsflyGoBackTime", Date.now());
                    GM_setValue("profitsflyOverrideLocation", lastLocation);
                    window.location.href = lastLocation;
                }
                return;
            }

            // Function to check for messages like "Click any ad & keep it open for 15 seconds to continue" and reload the page if one exists
            let reloading = false;
            function checkForMessage() {
                const paragraphs = document.getElementsByTagName("p");
                for (let p of paragraphs) {
                    if (/.*click.+ad.*to.+continue.*/is.test(p.textContent) && isElementVisibleAndEnabled(p)) {
                        if (!reloading) location.reload(); // Reload the page
                        reloading = true;
                        return; // Exit the function after reloading
                    }
                }
                if (document.body.textContent.includes("Less than 18 seconds have passed between actions. Robot verification failed, please try again...")) {
                    if (!reloading) location.reload(); // Reload the page
                    reloading = true;
                    return; // Exit the function after reloading
                }
            }

            // Helper function to determine if an element is visible and enabled
            function isElementVisibleAndEnabled(el) {
                // Check if the element and all its parents are visible
                let currentElement = el;
                while (currentElement) {
                    const style = getComputedStyle(currentElement);
                    if (style.display === "none" || style.visibility === "hidden") {
                        return false; // Element or parent is not visible
                    }
                    currentElement = currentElement.parentElement; // Move up the DOM tree
                }
                // Check if the button is enabled
                return !el.disabled;
            }

            setInterval(checkForMessage, 1000);
        }
    }
})();
//-------

