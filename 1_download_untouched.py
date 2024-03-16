import requests

def download_file(url, destination):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check if the request was successful

        with open(destination, 'wb') as file:
            file.write(response.content)

        print(f"OK: File downloaded successfully as {destination}")

    except requests.exceptions.RequestException as e:
        print(f"Error downloading file: {e}")

def modify_file_with_my_fixes(destination):
    with open(destination, 'r', encoding='utf-8') as file:
        content = file.read()

    # Fixes
    content = content.replace("BloggerPemula('highkeyfinance.com'", "//BloggerPemula('highkeyfinance.com'")
    content = content.replace("BypassedByBloggerPemula(/itscybertech.com", "//BypassedByBloggerPemula(/itscybertech.com")
    content = content.replace("BypassedByBloggerPemula(/linkvertise.com/", "//BypassedByBloggerPemula(/linkvertise.com/")
    content = content.replace("/stfly.cc|stfly.xyz|techtrendmakers.com|(blogbux|blogesque|exploreera).net/", "/stfly.cc|stfly.xyz|(techtrendmakers|gadnest).com|(blogbux|blogesque|exploreera).net/")
    content = content.replace("BloggerPemula('financeyogi.net'", "//BloggerPemula('financeyogi.net'")
    content = content.replace("case 'pixeldrain.com'", "//case 'pixeldrain.com'")

    content = content.replace("BypassedByBloggerPemula(/lootlinks", "//BypassedByBloggerPemula(/lootlinks")
    content = content.replace("let lln = bp('body > script');let lls", "//let lln = bp('body > script');let lls")

    content = content.replace("BypassedByBloggerPemula(/web1s.asia/", "/*BypassedByBloggerPemula(/web1s.asia/")
    #content = content.replace("bp(inp).value = decodeURIComponent(BpParamd.get('code')); ClickIfExists(btn,2); }}});", "bp(inp).value = decodeURIComponent(BpParamd.get('code')); ClickIfExists(btn,2); }}}); */")
    content = content.replace("window.location.assign(`${decodeURIComponent(BpParamd.get('wsa'))}?code=${tCode}`); clearInterval(gCode);}}, 2000);}});", "window.location.assign(`${decodeURIComponent(BpParamd.get('wsa'))}?code=${tCode}`); clearInterval(gCode);}}, 2000);}});*/")

    content = content.replace("(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk).com", "(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista).com")

    code_to_replace = """$('form[id=go-link]').unbind().submit(function(e) {e.preventDefault();
        var form = $(this);var url = form.attr('action');const pesan = form.find('button'); const notforsale = $(".navbar-collapse.collapse");const blogger = $(".main-header");const pemula = $(".col-sm-6.hidden-xs");
        $.ajax({type: "POST", url: url, data: form.serialize(), beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$('a.get-link').text('Bypassed by Bloggerpemula');
            notforsale.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            blogger.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            pemula.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');},
          success: function(result, status, xhr) {if (xhr.responseText.match('(insfly|Insfly|linksly|cosmic-matter).pw|(freecrypto|freeltc|a-s-cracks).top|mdiskshortner.link|(oscut|exashorts).fun|bigbtc.win|gainl.ink|earnify.pro|clockads.in|(promo-visits|rexlink).site')) {location.href = result.url;} else {redirect(result.url);}}});});"""
    code_replacement = """
          const isValidUrl = url => { try { new URL(url); return true; } catch (error) { return false; } };
          const redirectOrClickIfNotDisabled = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector + ':not(.disabled)'); if (button && !button.hasAttribute('disabled') && !button.classList.contains('disabled')) { clearInterval(intervalId); setTimeout(function() { if (button.href && isValidUrl(button.href) && !button.href.includes('/undefined')) { redirect(button.href);} else {button.click();} }, 500) } }, 500); };
          redirectOrClickIfNotDisabled('a.get-link');"""
    content = content.replace(code_to_replace, code_replacement)

    content = content.replace("BypassedByBloggerPemula(/adclicker", "//BypassedByBloggerPemula(/adclicker")
    #content = content.replace("/adclicker\.*/", "/(adclicker.(io|info)|discoveryultrasecure.com)\/url\/\#/")
    content = content.replace("redirect(new URLSearchParams(adc).get('url'));} else {}});", "//redirect(new URLSearchParams(adc).get('url'));} else {}});")

    content = content.replace("BypassedByBloggerPemula(/quesignifi.ca|tiktokcounter.net/", "/*BypassedByBloggerPemula(/quesignifi.ca|tiktokcounter.net/")
    content = content.replace("ClickIfExists('#cbt', 5, 'setInterval');}});", "ClickIfExists('#cbt', 5, 'setInterval');}});*/")

    content = content.replace("BypassedByBloggerPemula(/djxmaza.in/", "//BypassedByBloggerPemula(/djxmaza.in/")
    content = content.replace("ClickIfExists('#downloadbtnf', 2);ClickIfExists", "//ClickIfExists('#downloadbtnf', 2);ClickIfExists")

    content = content.replace("BypassedByBloggerPemula(/newsbawa.com/, function() {ClickIfExists('#Verify-click-btn', 2);ClickIfExists('a#footer-btn.verify-btn', 3);});", "BypassedByBloggerPemula(/newsbawa.com/, function() {ClickIfExists('#Verify-click-btn', 0.3);ClickIfExists('a#footer-btn.verify-btn', 1);});")

    content = content.replace("/anhdep24.com|nguyenvanbao.com|xemsport.com|byboe.com/", "/(anhdep24|nguyenvanbao|xemsport|byboe|asideway).com/")

    content += "\n"

    with open(destination, 'w', encoding='utf-8') as file:
        file.write(content)

if __name__ == "__main__":
    url1 = "https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.user.js"
    url2 = "https://openuserjs.org/install/Bloggerpemula/Bypass_All_Shortlinks_Manual_Captcha.user.js"
    destination = "untouched_Bypass_All_Shortlinks.user.js"

    download_file(url1, destination)
    modify_file_with_my_fixes(destination)
