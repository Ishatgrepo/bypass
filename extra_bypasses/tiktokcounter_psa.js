// ==UserScript==
// @name        tiktokcounter firefox auto-skip
// @include     /^(https?:\/\/)(.+)?(tiktokcounter.net|lifgam.online|(tpayr|waezf|ashrfd|poqzn|rezsx|tryzt|ashrff).xyz|dawenet.com)(\/.*)/
// @run-at      document-start
// ==/UserScript==

//----tiktokcounter auto-skip for firefox only--------
(function() {
    'use strict';
    const tiktokcounterRegex = /^(https?:\/\/)(.+)?(tiktokcounter.net|lifgam.online|(tpayr|waezf|ashrfd|poqzn|rezsx|tryzt|ashrff).xyz|dawenet.com)(\/.*)/
    if (tiktokcounterRegex.test(window.location.href)) {
        //---DEFINE FUNCTIONS---

        function ReadytoClick(selector, sleepTime = 0) {
            const events = ["mouseover", "mousedown", "mouseup", "click"];
            const selectors = selector.split(', ');
            if (selectors.length > 1) {
                return selectors.forEach(ReadytoClick);
            }
            if (sleepTime > 0) {
                return sleep(sleepTime * 1000).then(function() {
                    ReadytoClick(selector, 0);
                });
            }
            elementReady(selector).then(function(element) {
                element.removeAttribute('disabled');
                element.removeAttribute('target');
                events.forEach(eventName => {
                    const eventObject = new MouseEvent(eventName, {
                        bubbles: true
                    });
                    element.dispatchEvent(eventObject);
                });
            });
        }

        function elementReady(selector) {
            return new Promise(function(resolve, reject) {
                let element = document.querySelector(selector);
                if (element) {
                    resolve(element);
                    return;
                }
                new MutationObserver(function(_, observer) {
                    element = document.querySelector(selector);
                    if (element) {
                        resolve(element);
                        observer.disconnect();
                    }
                }).observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
            });
        }

        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        function preventForcedFocusOnWindow() {
            window.mouseleave = true;
            window.onmouseover = true;
            document.hasFocus = function() {
                return true;
            };
            Object.defineProperty(document, 'webkitVisibilityState', {
                get() {
                    return 'visible';
                }
            });
            Object.defineProperty(document, 'visibilityState', {
                get() {
                    return 'visible';
                }
            });
            window.addEventListener('visibilitychange', function(e) {
                e.stopImmediatePropagation();
            }, true, true);
            window.addEventListener('focus', onfocus, true);
            document.addEventListener('visibilitychange', function(e) {
                e.stopImmediatePropagation();
            }, true, true);
            Object.defineProperty(document, 'hidden', {
                get() {
                    return false;
                }
            });
        };

        function captchaIsSolved() {
            if (document.querySelector('.h-captcha')) {
                return window.hcaptcha.getResponse().length !== 0;
            } else if (document.querySelector('.cf-turnstile') || document.querySelector('#captcha-turnstile')) {
                return window.turnstile.getResponse().length !== 0;
            } else if (document.querySelector('.g-recaptcha') || document.querySelector('#captchaShortlink') || document.querySelector('#captcha_container') || document.querySelector('#captchaShortlinker')) {
                return window.grecaptcha.getResponse().length !== 0;
            }
        }

        //---EXECUTE

        if (tiktokcounterRegex.test(window.location.href)) {
            preventForcedFocusOnWindow();
            //setInterval(function(){window.wT9882=0;},1000);
        }

        //document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('load', function() {
            // Check its not ez4short because it won't work on that one - example https://ez4short.com/ar02kkolam
            //if (false){
            if (!(document.querySelectorAll('a[href*="ez4short.com"]').length > 0)) {

                if (tiktokcounterRegex.test(window.location.href)) {

                    // Skip timer
                    //if (document.documentElement.outerHTML.includes("/psa'")) {
                    //    setInterval(function(){window.wT9882=0;},1000);
                    //}

                    // Auto click buttons
                    if (true){
                    //if (navigator.userAgent.indexOf("Firefox") != -1) {
                        if (document.querySelector('.h-captcha')) {
                            let ctrsh = setInterval(() => {
                                if (captchaIsSolved()) {
                                    clearInterval(ctrsh);
                                    ReadytoClick('#cbt', 1);
                                }
                            }, 1 * 1000);
                        } else {
                            let profitsfly = setInterval(() => {
                                if (document.querySelector('#cbt').innerText == 'Continue') {
                                    clearInterval(profitsfly);
                                    ReadytoClick('#cbt', 2);
                                }
                            }, 2 * 1000);
                        }
                    }
                }
            }

        })

    }

})();
//--------------------------------
