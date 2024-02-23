Debloated fork of *Bypass All Shortlinks* (originally by *bloggerpemula*), with some additional bypasses and fixes.

Automatically bypass many link shorteners.
([supported shorteners](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/src/branch/main/supported_sites.txt)) ([changelog](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/commits/branch/main/Bypass_All_Shortlinks.user.js))

## Install
**Install with [this link](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js)**

(you need a userscript manager like [ViolentMonkey](https://violentmonkey.github.io/) installed in your web browser)

## Improvements in this fork
- **Added more bypasses and some fixes** through the scripts in the [extra_bypasses](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/src/branch/main/extra_bypasses) directory.
- **No loading the script indiscriminately on every site.** The script will be loaded only for the sites that are supported (the original userscript is loaded in most of the sites you visit, which is not necessary). Not including these by default is to prevent some people from worrying about the script running on sensitive sites. These can be re-enabled manually in your userscript manager, adding [optional matching rules](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/src/branch/main/docs/optional_matching_rules.md) in the script _settings_.
- **No useless added redirects.** The script will not redirect to `rotator.nurul-huda.sch.id` or `free4u.nurul-huda.or.id` which are sites set by the developer for tracking / [collecting analytics](https://i.ibb.co/D1zYG1v/topcountry17-04-2023.jpg) and showing ads. Note: removing this could break "faucet" (crypto rewards) sites, according to Bloggerpemula, since they add a sometimes necessary delay. I don't try to support those sites with this fork.
- **No injecting unnecesary tracking in every site**. 
    - The script will not inject that _iframe_ linking to `menrealitycalc.com`. 
    _Tip: this can be avoided in the original script adding this filter to uBlock Origin: `||menrealitycalc.com^$third-party`_
    - The script will not inject this weird _"adcopy_response"_. (I don't see a clear purpose for this, since it doesn't seem related in the script to any specific link shortener)
- **Removed non-latin non-unicode characters** to avoid potential bug warnings.

Original script by *bloggerpemula*: [greasyfork.org/scripts/431691](https://greasyfork.org/scripts/431691)

## How I modify the original userscript
Executing these python scripts in order:
- 1_download_untouched.py
- 2_generate_includes.py
- 3_patch.py
- 4_add_extra_bypasses.py

## Help make this better
You can help by:
- Reporting issues to the original script in [greasyfork feedback](https://greasyfork.org/scripts/431691/feedback) or [openuserjs issues](https://openuserjs.org/scripts/Bloggerpemula/Bypass_All_Shortlinks_Manual_Captcha/issues) (before doing this, check the issue is present in the original script)
- Reporting issues here on the [issues](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues) tab. Post examples with the source link shortener and link source website. I will only add/fix content-sharing shortlinks, no faucet / crypto rewards.
- Suggesting to merge other scripts into this one.
- Editing/Adding code with pull requests.
- If while using uBlock Origin (recommended adblocker), a link shortener is showing ads or detecting you have adblock, report it [here](https://github.com/uBlockOrigin/uAssets/discussions/17361).

