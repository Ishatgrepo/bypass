// ==UserScript==
// @name        simple redirects
// @include     /mundopolo.net/
// @include     /comohoy.com/
// @include     /sphinxanime.com\/short/
// @include     /japan-paw.net\/out/
// @include     /link.manudatos.com\/#!/
// @include     /(iconicblogger.com|segurosdevida.site)/
// @include     /link.unlockner.com/
// @include     /cybercityhelp.in/
// @include     /www.akcartoons.in/
// @include     /go.moonlinks.in/
// @include     /shrinkme.us/
// @include     /shareus.io/
// @include     /(verpeliculasonline.org|subtituladas.com)\/enlace/
// @include     /links.cuevana.ac\/short/
// @run-at      document-start
// ==/UserScript==

// ----- Simple redirects -----
(function() {
    'use strict';
    const url = window.location.href
    const redirect = finalUrl => window.location.assign(finalUrl);
    const isValidUrl = url => { try { new URL(url); return true; } catch (error) { return false; } };
    const clickIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button) { clearInterval(intervalId); button.click(); } }, 1000); };
    const clickIfExistsNonStop = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector + ':not(.disabled)'); if (button) { button.click(); } }, 500); };
    const redirectIfNotDisabled = (selector) => { let intervalId = setInterval(() => { let linkButton = document.querySelector(selector + ':not(.disabled)'); if (linkButton) { clearInterval(intervalId); redirect(linkButton.href); } }, 500); };
    const afterDOMLoaded = (callback) => document.addEventListener('DOMContentLoaded', callback);
    const clickIfNotDisabled = (buttonSelector) => { let intervalId = setInterval(() => { let button = document.querySelector(buttonSelector); if (!button.hasAttribute('disabled')) { clearInterval(intervalId); setTimeout(function() {button.click();}, 1000) } }, 500); };

    //peliculasgd.net
    /mundopolo.net/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('#!')[1]))))) : null;

    //leak.sx & pornleaks.in
    /comohoy.com/.test(url) ? redirect(atob(url.split('?url=')[1])) : null;

    //sphinxanime.com
    /sphinxanime.com\/short/.test(url) ? redirect(atob(url.split('?anonym=')[1])) : null;

    //japan-paw.net
    /japan-paw.net\/out/.test(url) ? redirect(atob(url.split('out/?')[1])) : null;

    //pasteprivado.blogspot.com
    /link.manudatos.com\/#!/.test(url) ? redirect(atob(atob(atob(url.split('#!')[1])))) : null;

    //anime-world.in and mandranime.com
    /(iconicblogger.com|segurosdevida.site)/.test(url) ? afterDOMLoaded(function() {redirect(document.getElementById('wpsafe-link').querySelector('a').getAttribute('onclick').match(/window\.open\('([^']*)'/)[1])}) : null;

    //anime-world.in 2nd step
    /link.unlockner.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn.get-link')}) : null;

    //atozcartoonist.com
    /cybercityhelp.in/.test(url) ? afterDOMLoaded(function() {document.querySelector('#username').value = 'filler'}) : null;
    /cybercityhelp.in/.test(url) ? afterDOMLoaded(function() {document.querySelector('#tp982').click()}) : null;
    /cybercityhelp.in/.test(url) ? afterDOMLoaded(function() {document.querySelector('button.tp-btn.tp-blue').click()}) : null;
    /www.akcartoons.in/.test(url) ? afterDOMLoaded(function() {document.querySelector('#btn6 > button').click()}) : null;
    /www.akcartoons.in/.test(url) ? afterDOMLoaded(function() {redirect(document.querySelector('a[href*="go.moonlinks.in"]'))}) : null;
    /go.moonlinks.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.btn')}) : null;

    //shrinkme.us
    /shrinkme.us/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;

    //shareus.io
    /shareus.io/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('#root > div > main > div.main-container-1 > div.main-container-2 > div:nth-child(1) > div.adunit-container > button')}) : null;

    //verpeliculasonline.org && subtituladas.com
    /(verpeliculasonline.org|subtituladas.com)\/enlace/.test(url) ? afterDOMLoaded(function() {redirect(document.getElementById('link').href.split('?s=')[1])}) : null;

    //maxcine.net
    /links.cuevana.ac\/short/.test(url) ? afterDOMLoaded(function() {
        var extractedUrl = document.documentElement.innerHTML.split('\n').find(line => line.includes("document.getElementById('contador').href = 'htt")).split("href")[1].match(/'([^']+)'/)[1];
        extractedUrl.includes('?s=') ? redirect(extractedUrl.split('?s=')[1]) : redirect(extractedUrl);
    }) : null;
})();
// ----- ----- -----

