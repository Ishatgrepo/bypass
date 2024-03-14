// ==UserScript==
// @name        mega-enlace bypass
// @include     /mega-enlace.com/
// @grant          GM_xmlhttpRequest
// @run-at      document-start
// ==/UserScript==

// ----- Bypass mega-enlace ( Taken from AdGuard https://github.com/AdguardTeam/AdguardFilters/blob/b1622e8b387148509ca355e8070ffa5cdcf87525/SpanishFilter/sections/general_extensions.txt#L108 ) -----
// used in: pelisenhd.org latinomegahd.net gatonplayseries.com peliculasgd.net tododvdfull.com
(function() {
    if (/mega-enlace.com/.test(window.location.href)) {
        const window = unsafeWindow; //Added so it works in ViolentMonkey instead of AdGuard
        const e = e => { // The e function: It sends a POST request to the link shortener's server and performs some string replacements to modify the form data and action URL. Finally, it sends another POST request with the modified form data to the action URL.
                const o = new XMLHttpRequest;
                o.open("POST", "/check.php", !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send("a");
                const t = atob(window.ext_site).replace(/[a-z]/gi, (e => String.fromCharCode(e.charCodeAt(0) + (e.toLowerCase() <= "m" ? 13 : -13))));
                let n = e.replaceAll('\\"', '"');
                n = n.replace("'+ api_key+ '", window.api_key), n = n.replace("'+ link_out+ \"", window.link_out), n = n.replace(/action="'\+ .*?\+ '"/, `action="${t}"`);
                var a;
                const i = (a = n, (new DOMParser).parseFromString(a, "text/html")).querySelector("form"),
                    r = new FormData(i),
                    c = new XMLHttpRequest;
                c.open("POST", t, !0), c.send(r), window.tab2 = window, postMessage("_clicked_b", location.origin)
            },
            o = { // The o object: This object is a proxy that intercepts function calls. It checks if the function call includes the api_key parameter and performs additional modifications to the function's code. If the necessary conditions are met, it tries to bypass the link shortener by calling the e function.
                apply: (o, t, n) => {
                    if (n[1] && n[1].includes("api_key")) {
                        const o = window.link_out,
                            t = window.api_key,
                            a = n[1].match(/window\.open\(.*?\(atob\(main_site\)\).*?("\/.*\.php\?.*=").*?("&.*?=").*?(api_key),"view"/),
                            i = a[1].replaceAll('"', ""),
                            r = a[2].replaceAll('"', ""),
                            c = n[1].match(/<form target=[\s\S]*?<\/form>/)[0];
                        if (n[1] = n[1].replace("window.location.href", "var nulled"), n[1] = n[1].replace("window.open(f", "location.assign(f"), n[1] = n[1].replace(/(parseInt\(c\.split\("-"\)\[0\]\)<= 0).*?(\)\{)/, "$1$2"), o && t && i && r && c) try {
                            "loading" === document.readyState ? window.addEventListener("load", (() => {
                                e(c)
                            }), {
                                once: !0
                            }) : e(c)
                        } catch (e) {
                            console.debug(e)
                        }
                    }
                    return Reflect.apply(o, t, n)
                }
            };
        window.Function.prototype.constructor = new Proxy(window.Function.prototype.constructor, o)
    }
})();
