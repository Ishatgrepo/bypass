// ==UserScript==
// @name       Bypass All Shortlinks Debloated
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Amm0ni4
// @version        91.4.2
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_addStyle
// @grant          GM_xmlhttpRequest
// @grant          window.onurlchange
// @grant          GM_registerMenuCommand
// @icon           https://cdn-icons-png.flaticon.com/512/14025/14025295.png
// @require        https://update.greasyfork.org/scripts/439099/1203718/MonkeyConfig%20Modern%20Reloaded.js
// @description    Automatically bypass many link shorteners. Originally by BloggerPemula.
// @homepageURL    https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated
// @supportURL     https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues
// @match *://*.earnify.pro/*
// @match *://*.aprovax.com/*
// @match *://*.lootcash.vip/*
// @match *://*.mixrootmods.com/*
// @match *://*.duplichecke.com/*
// @match *://*.dreamistore.com/*
// @match *://*.mcafee-com.com/*
// @match *://*.uploadsoon.com/*
// @match *://*.techyadjectives.com/*
// @match *://*.cyberstockofficial.in/*
// @match *://*.mkvflix.org/*
// @match *://*.link.bicolink.net/*
// @match *://*.link.vipurl.in/*
// @match *://*.infinityskull.com/*
// @match *://*.sakarnewz.com/*
// @match *://*.link.linksfire.co/*
// @match *://*.short.dash-free.com/*
// @match *://*.speedynews.xyz/*
// @match *://*.viralxns.com/*
// @match *://*.studyuo.com/*
// @include /^(https?:\/\/)(.+)?(go.link4rev.site|go.urlcash.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techyinfo.in|techyblogs.in)(\/.*)/
// @match *://*.olhonagrana.com/*
// @match *://*.dutchycorp.space/*
// @include /^(https?:\/\/)(.+)?(link.birdurls.com|link.owllink.net|link.illink.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((teachsansar|technicalatg|foodxor).com)(\/.*)/
// @match *://*.ouo.io/*
// @match *://*.linkbox.to/*
// @include /^(https?:\/\/)(.+)?((desbloquea|drivelinks).me|(acortame-esto|recorta-enlace|enlace-protegido|super-enlace).com|short-info.link)(\/.*)/
// @match *://*.adbtc.top/*
// @match *://*.upload.ee/*
// @include /^(https?:\/\/)(.+)?(appdrive\.*)/
// @match *://*.dddrive.me/*
// @match *://*.uppit.com/*
// @match *://*.krakenfiles.com/*
// @match *://*.gofile.io/*
// @match *://*.karanpc.com/*
// @match *://*.file-upload.net/*
// @include /^(https?:\/\/)(.+)?(userscloud.com|dosya.co)(\/.*)/
// @match *://*.hexupload.net/*
// @match *://*.rapidgator.net/*
// @match *://*.dbree.me/*
// @match *://*.megaupto.com/*
// @match *://*.dataupload.net/*
// @match *://*.douploads.net/*
// @match *://*.linkerload.com/*
// @match *://*.filemoon.sx/*
// @match *://*.bestfonts.pro/*
// @match *://*.files.fm/*
// @match *://*.megaup.net/*
// @match *://*.4fnet.org/*
// @include /^(https?:\/\/)(.+)?(oxy\.*)/
// @include /^(https?:\/\/)(.+)?(gdtot\.*)/
// @match *://*.mp4upload.com/*
// @match *://*.drop.download/*
// @match *://*.workupload.com/*
// @include /^(https?:\/\/)(.+)?(hxfile.co|ex-load.com|megadb.net)(\/.*)/
// @match *://*.send.cm/*
// @match *://*.racaty.io/*
// @match *://*.racedepartment.com/*
// @match *://*.mega4up.org/*
// @match *://*.uploadhaven.com/*
// @match *://*.novafile.org/*
// @match *://*.k2s.cc/*
// @match *://*.ac.totsugeki.com/*
// @match *://*.mega4upload.com/*
// @match *://*.uploady.io/*
// @match *://*.up-load.io/*
// @match *://*.anonym.ninja/*
// @match *://*.vosan.co/*
// @match *://*.apkmody.io/*
// @match *://*.mdfx9dc8n.net/*
// @include /^(https?:\/\/)(.+)?(uploadrar.com|uptomega.me)(\/.*)/
// @match *://*.takefile.link/*
// @match *://*.chedrives.com/*
// @match *://*.appsblaze.com/*
// @match *://*.modcombo.com/*
// @match *://*.userupload.net/*
// @match *://*.1fichier.com/*
// @include /^(https?:\/\/)(.+)?(upload-4ever.com|up-4ever.net)(\/.*)/
// @match *://*.fileresources.net/*
// @match *://*.3upload.com/*
// @match *://*.freepreset.net/*
// @match *://*.doodrive.com/*
// @match *://*.gocmod.com/*
// @match *://*.dailyuploads.net/*
// @match *://*.9xupload.asia/*
// @match *://*.mediafire.com/*
// @include /^(https?:\/\/)(.+)?(usersdrive.com|ddownload.com)(\/.*)/
// @match *://*.sharemods.com/*
// @match *://*.mexa.sh/*
// @include /^(https?:\/\/)(.+)?((kusonime|oploverz).org|(opinimedia|beritaotaku|caramasak).com|otakudesu.cc|resepkoki.net|neonime\.*)/
// @match *://*.pdfcoffee.com/*
// @match *://*.adoc.pub/*
// @include /^(https?:\/\/)(.+)?(clickndownload.org|clicknupload\.*)/
// @match *://*.leechpub.com/*
// @match *://*.uploadev.org/*
// @match *://*.rawlazy.si/*
// @match *://*.modsbase.com/*
// @match *://*.dropgalaxy.com/*
// @include /^(https?:\/\/)(.+)?(file-upload.com|file-upload.org)(\/.*)/
// @match *://*.hitfile.net/*
// @match *://*.oydisk.com/*
// @match *://*.filedm.com/*
// @match *://*.gogodl.com/*
// @match *://*.turbobit.net/*
// @match *://*.4shared.com/*
// @match *://*.1ink.cc/*
// @match *://*.keeplinks.org/*
// @match *://*.1short.io/*
// @match *://*.earnlink.io/*
// @match *://*.mkomsel.com/*
// @match *://*.onimports.com.br/*
// @match *://*.1shortlink.com/*
// @match *://*.rapidshort.lat/*
// @match *://*.jameeltips.us/*
// @match *://*.post.copydev.com/*
// @match *://*.linegee.net/*
// @match *://*.pro.sh/*
// @include /^(https?:\/\/)(.+)?(exeo.app|exego.app)(\/.*)/
// @include /^(https?:\/\/)(.+)?(proappapk.com|meclipstudy.in)(\/.*)/
// @match *://*.wrbloggers.com/*
// @match *://*.1bitspace.com/*
// @match *://*.lets.5get.net/*
// @match *://*.cshort.org/*
// @include /^(https?:\/\/)(.+)?((blogscare|blogtechh).com|oko.sh)(\/.*)/
// @match *://*.linkpay.cc/*
// @include /^(https?:\/\/)(.+)?(cooklike.info|model-tas-terbaru.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(delishwell.com|artiskini.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bildirim.in|bildirim.eu|bildirim.link)(\/.*)/
// @match *://*.enlacito.com/*
// @match *://*.webhostingtips.club/*
// @match *://*.render-state.to/*
// @include /^(https?:\/\/)(.+)?(michaelemad.com|7misr4day.com)(\/.*)/
// @match *://*.shareus.io/*
// @match *://*.adtival.network/*
// @match *://*.dilink.net/*
// @match *://*.shortener.goldcontent.site/*
// @include /^(https?:\/\/)(.+)?((cutnet|cutsy|cutlink).net|(cutty|exego).app)(\/.*)/
// @match *://*.newsbawa.com/*
// @include /^(https?:\/\/)(.+)?(askpaccosi.com|paylinks.cloud|healthmart.link|kisalt.com)(\/.*)/
// @match *://*.ontechhindi.com/*
// @include /^(https?:\/\/)(.+)?(mhma12.tech|hasri.xyz|soft3arbi.com)(\/.*)/
// @match *://*.sfl.gl/*
// @include /^(https?:\/\/)(.+)?(gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online)(\/.*)/
// @match *://*.gameblog.in/*
// @match *://*.sharetext.me/*
// @match *://*.btcsatoshi.net/*
// @match *://*.comohoy.com/*
// @match *://*.apkw.ru/*
// @match *://*.ctr.sh/*
// @include /^(https?:\/\/)(.+)?((blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net)(\/.*)/
// @match *://*.programasvirtualespc.net/*
// @match *://*.hiharshit.in/*
// @match *://*.easycut.io/*
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|techacode.com|azmath.info|aztravels.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techanalyzer.eu|askpaccosi.com|cryptomonitor.in|2the.space|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bitzite|neverdims).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hostratgeber.de|(miner-sim|networkhint).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coingraph.us|trendzilla.it|horoscop.info|(infonerd|writeprofit).org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nullscript.info|freebinance.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?((10short|lollty).pro|mamahawa.com|10short.vip)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tinycmd|tinybc|aduzz|cryptfaucet).com|(bitcrypto|bit4me).info|offerinfo.net|deltabtc.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|paidinsurance.in)(\/.*)/
// @match *://*.bitcotasks.com/*
// @include /^(https?:\/\/)(.+)?(mynewsmedia.co|(netflixrelease|mangareleasedate|kojnews|freemodapp|cryptoprolife|revadvert|diethim|techsotta|zutiza|lndianews|newsjov|instantloan5|hitjankari|phixshop|mp4news).com|(rontymobile|myfirstname|snapseedmod|djrajurjm|disking|ignoupur).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((crypto2u|bestcoinsites).xyz)(\/.*)/
// @match *://*.fansonlinehub.com/*
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @include /^(https?:\/\/)(.+)?(largestpanel.in|earnme.club|usanewstoday.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(paste1s.com|note1s.com)(\/.*)/
// @match *://*.terabox.fun/*
// @match *://*.ayelads.com/*
// @match *://*.karyawan.co.id/*
// @match *://*.icerik.site/*
// @match *://*.clink1.com/*
// @match *://*.ponselharian.com/*
// @match *://*.tonanmedia.my.id/*
// @match *://*.assettoworld.com/*
// @match *://*.adfoc.us/*
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @match *://*.oii.io/*
// @match *://*.cryptonetos.ru/*
// @match *://*.cpu-miner.leaks.work/*
// @include /^(https?:\/\/)(.+)?(mrproblogger.com|themezon.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(forex-golds.com|forex-trnd.com)(\/.*)/
// @match *://*.1link.club/*
// @match *://*.1mlink.vip/*
// @match *://*.zegtrends.com/*
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bcvc.xyz|bcvc.ink)(\/.*)/
// @include /^(https?:\/\/)(.+)?(forex-articles.com|fx-22.com)(\/.*)/
// @match *://*.proviralhost.com/*
// @include /^(https?:\/\/)(.+)?(bitcoinfaucet.fun|freebitcoin.win)(\/.*)/
// @match *://*.bestadvise4u.com/*
// @match *://*.altblogger.net/*
// @match *://*.linkspy.cc/*
// @include /^(https?:\/\/)(.+)?((webhostingpost|tophostingapp|digitalmarktrend).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techmny.com|unblockedgames.world)(\/.*)/
// @include /^(https?:\/\/)(.+)?((chooyomi|blogmado|kredilerim|insuranceleadsinfo).com)(\/.*)/
// @match *://*.kiktu.com/*
// @match *://*.fexkomin.xyz/*
// @include /^(https?:\/\/)(.+)?(quesignifi.ca|tiktokcounter.net)(\/.*)/
// @match *://*.100puan.com/*
// @match *://*.sub2get.com/*
// @match *://*.forexrw7.com/*
// @match *://*.newassets.hcaptcha.com/*
// @match *://*.challenges.cloudflare.com/*
// @include /^(https?:\/\/)(.+)?((fc-lc|loaninsurehub).com|fc-lc.xyz)(\/.*)/
// @match *://*.mneyvip.com/*
// @match *://*.jobform.in/*
// @match *://*.go.shareus.in/*
// @match *://*.playpaste.com/*
// @match *://*.suratresmi.id/*
// @include /^(https?:\/\/)(.+)?(examkhata.com|gamelopte.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(rancah.com|menjelajahi.com|shortly.xyz|nyawang.com)(\/.*)/
// @match *://*.cryptotracker.space/*
// @match *://*.djxmaza.in/*
// @match *://*.stfly.me/*
// @include /^(https?:\/\/)(.+)?(khaddavi.net|contentmenarik.com)(\/.*)/
// @match *://*.sapnogalpo.online/*
// @match *://*.leitup.com/*
// @match *://*.offeroc.com/*
// @match *://*.azmath.info/*
// @include /^(https?:\/\/)(.+)?((nregajobcard|pradhanmantriupdates).in)(\/.*)/
// @match *://*.shortearn.net/*
// @include /^(https?:\/\/)(.+)?(ez4mods.com|tech5s.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((creditsalah|dissenttimes).com)(\/.*)/
// @match *://*.alivedesktop.com/*
// @include /^(https?:\/\/)(.+)?((bnbfree|freeth|freebitco).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((120898|141989|161989|131989|121989|151989).xyz)(\/.*)/
// @match *://*.shortearn.net/*
// @include /^(https?:\/\/)(.+)?((coinsward|blogsward).com|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(1bit.space|mgnet.xyz)(\/.*)/
// @match *://*.bigbtc.win/*
// @match *://*.firefaucet.win/*
// @include /^(https?:\/\/)(.+)?(uptobhai\.*|uplinkto\.*|shortlinkto\.*)/
// @include /^(https?:\/\/)(.+)?((leaveadvice|mensventure).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(jiotech.net|jameeltips.us|cryptonworld.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hynews.biz|chamcuuhoc.com)(\/.*)/
// @match *://*.tii.la/*
// @match *://*.skiplink.me/*
// @match *://*.apanmusic.in/*
// @match *://*.o-pro.online/*
// @include /^(https?:\/\/)(.+)?((travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com)(\/.*)/
// @match *://*.easyworldbusiness.com/*
// @match *://*.getzen.cash/*
// @include /^(https?:\/\/)(.+)?((kongutoday|proappapk|hipsonyc|teamtechnews).com|finsurances.co|yotrickslog.tech|animalwallpapers.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(deportealdia.live|noweconomy.live|techgeek.digital)(\/.*)/
// @match *://*.nishankhatri.xyz/*
// @include /^(https?:\/\/)(.+)?(writedroid.eu.org|modmania.eu.org|writedroid.in|mytop5.club)(\/.*)/
// @match *://*.computerpedia.in/*
// @match *://*.finance.uploadsoon.com/*
// @include /^(https?:\/\/)(.+)?(adclicker\.*)/
// @include /^(https?:\/\/)(.+)?(offers4crypto.xyz|ewall.biz)(\/.*)/
// @match *://*.dl.lk21static.xyz/*
// @match *://*.easylink.gamingwithtr.com/*
// @include /^(https?:\/\/)(.+)?(copy-paste-fonts.com|cryptednews.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?((theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner).com|happy-living.online|galaxy-link.space|oke.io|bitss.sbs|(forextrader|foxylinks).site)(\/.*)/
// @match *://*.solarchaine.com/*
// @include /^(https?:\/\/)(.+)?((remixsounds|helpowi|helpdeep|thinksrace|tipsloanusa).com|(remixone|webseriesreel).in|uprwssp.org|securitywaittimes.us)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shrinke.me|shrinke.us|shrinkme.info|pwrpa.cc|shrinkme.org|paylinks.cloud|(linkvhoriz|paid4link).com|bicolink.net|wordcounter.icu)(\/.*)/
// @match *://*.revly.click/*
// @include /^(https?:\/\/)(.+)?(theconomy.me|(askpaccosi|halosenja|sainny|wellness4live).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?(enit.in|clk.wiki)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techyreviewx.com|desiupload.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((calmgram|adbitfly|blogsward).com|adbitfly.in)(\/.*)/
// @match *://*.shorterall.com/*
// @include /^(https?:\/\/)(.+)?((exactpay|dinheirocrypto).online|videoclip.info|sproutworkers.co|coinsfaucet.fun)(\/.*)/
// @include /^(https?:\/\/)(.+)?((crypto4yu|manofadan|wiour).com|btcbitco.in|readbitcoin.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((btcpany|zombiebtc|claimfey|thefastpost).com|(battleroyal|panytourism|statepany).online)(\/.*)/
// @match *://*.playnano.online/*
// @include /^(https?:\/\/)(.+)?(donia2tech.com|blog.techeysub.online|minersim.com)(\/.*)/
// @match *://*.rekonise.com/*
// @match *://*.acortalink.me/*
// @include /^(https?:\/\/)(.+)?(teknosimple.com|besargaji.com)(\/.*)/
// @match *://*.bloginkz.com/*
// @match *://*.bastinews.xyz/*
// @match *://*.autodime.com/*
// @match *://*.amritadrino.com/*
// @include /^(https?:\/\/)(.+)?(hunterkiller.me|surflink.tech)(\/.*)/
// @match *://*.coinhub.wiki/*
// @include /^(https?:\/\/)(.+)?(lyricsbaazaar.com|ezeviral.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((sekilastekno|miuiku|vebma|majalahhewan).com)(\/.*)/
// @match *://*.coinsrev.com/*
// @match *://*.zubatecno.com/*
// @include /^(https?:\/\/)(.+)?((wooseotools|woowebtools).com)(\/.*)/
// @match *://*.adwerty.com/*
// @match *://*.modebaca.com/*
// @match *://*.shopforex.online/*
// @include /^(https?:\/\/)(.+)?((pernahsukses|alpinecorporate).com|aoutoqw.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(altechen.com|entutes.com)(\/.*)/
// @match *://*.freetrx.fun/*
// @match *://*.socialwolvez.com/*
// @include /^(https?:\/\/)(.+)?((mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogginglass|arahtekno|mopahealth).com|faucet.work|wildblog.me|jiotech.net|apkupload.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(anhdep24.com|nguyenvanbao.com|xemsport.com|byboe.com)(\/.*)/
// @match *://*.traffic1s.com/*
// @include /^(https?:\/\/)(.+)?(web1s.co|web1s.info|app.covemarkets.com)(\/.*)/
// @match *://*.suaurl.com/*
// @match *://*.letsboost.net/*
// @match *://*.web1s.asia/*
// @include /^(https?:\/\/)(.+)?((hookeaudio|pennbookcenter|publicananker|fun88bk).com|fun88.info.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stfly.cc|stfly.xyz|(techtrendmakers|gadnest).com|(blogbux|blogesque|exploreera).net)(\/.*)/
// @match *://*.coins-town.com/*
// @include /^(https?:\/\/)(.+)?(slinkware.com|aghtas.com|mazen-ve3.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(link.goto.com.np|(appkamods|bankvacency|mealcold|otomi-games).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org)(\/.*)/
// @match *://*.shortit.pw/*
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @match *://*.linkvip.io/*
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vikashmewada.com|videoslyrics.com|crazysonglyrics.com|videolyrics.in|newsharsh.com|trxking.xyz|crazyblog.in|getdashcoin.io)(\/.*)/
// @match *://*.lanza.me/*
// @match *://*.lifeezee.com/*
// @match *://*.lolinez.com/*
// @match *://*.sahityt.com/*
// @match *://*.file-upload.in/*
// @match *://*.upmienphi.com/*
// @match *://*.ify.ac/*
// @match *://*.linksly.co/*
// @match *://*.cashando.me/*
// @match *://*.appsinsta.com/*
// @match *://*.apkadmin.com/*
// @match *://*.sugarona.com/*
// @match *://*.cekip.site/*
// @match *://*.techleets.xyz/*
// @match *://*.newsturbovid.com/*
// @match *://*.amanguides.com/*
// @match *://*.mirrored.to/*
// @match *://*.viralxns.com/*
// @match *://*.flybid.net/*
// @match *://*.8tm.net/*
// @match *://*.cpmlink.net/*
// @match *://*.noodlemagazine.com/*
// @match *://*.huongdanvuotlink123.blogspot.com/*
// @include /^(https?:\/\/)(.+)?(forexrw7.com|3rabsports.com|gold-24.net)(\/.*)/
// @match *://*.maxurlz.com/*
// @include /^(https?:\/\/)(.+)?(sama-pro.com|mikl4forex.com|dr-forex.com)(\/.*)/
// @match *://*.mohtawaa.com/*
// @match *://*.linksae.com/*
// @match *://*.sub2unlock.com/*
// @include /^(https?:\/\/)(.+)?(thebloggerspoint.in|ezeviral.com|fixno.in|technocubes.in)(\/.*)/
// @match *://*.doodjob.com/*
// @include /^(https?:\/\/)(.+)?(xonnews.net|toilaquantri.com|share4u.men|camnangvay.com)(\/.*)/
// @match *://*.yosite.net/*
// @include /^(https?:\/\/)(.+)?(offrcms.xyz|kooora365.online|tourismtravels4.sbs|5tl.co|mamahawa.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(geniussolutions.co|pokemonroms.cc|alightmotionlatest.com)(\/.*)/
// @match *://*.cricketgurupro.com/*
// @include /^(https?:\/\/)(.+)?(bluemedialink.online|bluemediafile\.*)/
// @match *://*.boost.ink/*
// @match *://*.blog.textpage.xyz/*
// @match *://*.foodupe.com/*
// @match *://*.freethailottery.live/*
// @match *://*.udrop.com/*
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nulledlist.info|earnash.com|my-coins.xyz|earn-bitcoin.online|zimabadko.com|vidoza.xyz|every-crypto.info)(\/.*)/
// @match *://*.sub2unlock.net/*
// @include /^(https?:\/\/)(.+)?((starxinvestor|hit-films|sevenjournals).com|(iisfvirtual|bookszone|learnmany).in)(\/.*)/
// @match *://*.ronakfitness.com/*
// @match *://*.mboost.me/*
// @include /^(https?:\/\/)(.+)?((disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo).net|(sportweb|ecq).info|savego.org|hbz.us|djqunjab.in|datacheap.io)(\/.*)/
// @include /^(https?:\/\/)(.+)?((awgrow|fadedfeet|kenzo-flowertag|homeculina|ineedskin|alightmotionlatest).com|worldtanr.xyz|lawyex.co|yexolo.net|mdn.lol)(\/.*)/
// @include /^(https?:\/\/)(.+)?(readi.online|mbantul.my.id|blog.qnix.me|videoclip.info|moddingzone.in|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz)(\/.*)/
// @match *://*.aiimgvlog.fun/*
// @include /^(https?:\/\/)(.+)?(dutchycorp.space|dutchycorp.ovh|gtlink.co|seulink.digital|oii.io|hamody.pro|fileku.net|metasafelink.site|(beingtek|fc-lc|atglinks|10short).com|(zagl|shrinkforearn).in|(kiiw|wordcounter).icu|pwrpa.cc|shurt.pw|(flyad|tapnip).vip|antonimos.de|seulink.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|liinkat|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|atglinks|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|link3s|youshort|illink).net|(s2fly|pglink|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks).info|(shrink|flyzu).icu|(oko|aii).sh|(24payu|vielink).top|(terafly|hatelink|cashando|zumpa|tlin|weezo|adnews|botfly|linkdam|ar-goal).me|(jameeltips|mitly).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(short1|urlcash|dglinks).site|(shrinkme|tfly).link|(playstore|adsy|clik|shurt).pw|short.express|cryptosh.pro|goo.st|tinygo.co|pndx.live|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|(lootcash|tapnip).vip|addurl.biz)(\/.*)/
// @match *://*.autofaucet.dutchycorp.space/*
// @match *://*.gocmod.com/*
// @match *://*.clink1.com/*
// @match *://*.writedroid.in/*
// @match *://*.web1s.com/*
// @match *://*.modmania.eu.org/*
// @match *://*.msmedia.in/*
// @match *://*.yalifin.xyz/*
// @match *://*.sahityt.com/*
// @include /^(https?:\/\/)(.+)?(blitly.io|smartlink.vip)(\/.*)/
// @match *://*.wpking.in/*
// @match *://*.eda-ah.com/*
// @match *://*.m.newhit.me/*
// @match *://*.abhikr.in/*
// @match *://*.go.qora.in/*
// @match *://*.10short.vip/*
// @match *://*.finoxpert.com/*
// @match *://*.rsrlink.in/*
// @match *://*.dailynew.online/*
// @match *://*.strfree.xyz/*
// @match *://*.jazbaat.in/*
// @match *://*.urotan.net/*
// @match *://*.mrdoge.in/*
// @match *://*.autodime.com/*
// @match *://*.quick91.com/*
// @match *://*.airlike.me/*
// @match *://*.techhadi.com/*
// @match *://*.zubatecno.com/*
// @match *://*.veganab.co/*
// @match *://*.yosite.net/*
// @match *://*.battlechamp.in/*
// @match *://*.adiskblog.in/*
// @match *://*.cryptednews.space/*
// @match *://*.indiansarkari.com/*
// @match *://*.tanytech.com/*
// @match *://*.healthynepal.in/*
// @match *://*.gktech.uk/*
// @match *://*.vslinks.online/*
// @match *://*.factsdunya.com/*
// @match *://*.1apple.xyz/*
// @match *://*.missreview.info/*
// @match *://*.10short.pro/*
// @match *://*.videolyrics.in/*
// @match *://*.blog.topfaucet.us/*
// @match *://*.housezquick.com/*
// @match *://*.flashlinks.online/*
// @match *://*.siteblog.in/*
// @match *://*.shortsnob.in/*
// @match *://*.apna-blog.in/*
// @match *://*.ignitesmm.com/*
// @match *://*.fileku.net/*
// @match *://*.nisnisin.com/*
// @match *://*.sapnogalpo.online/*
// @match *://*.coinsward.com/*
// @include /^(https?:\/\/)(.+)?(povathemes.com|escobarvip.cf|golinki.com)(\/.*)/
// @match *://*.upload.veganab.co/*
// @match *://*.anonbar.com/*
// @match *://*.tamilhit.tech/*
// @match *://*.suntechu.in/*
// @match *://*.cryptokaro.co.in/*
// @match *://*.foxbugg.com/*
// @match *://*.tremamnon.com/*
// @match *://*.market.finclub.in/*
// @match *://*.hostadviser.net/*
// @match *://*.bantenexis.com/*
// @match *://*.techkeshri.com/*
// @match *://*.indirasari.com/*
// @match *://*.wikitraveltips.com/*
// @match *://*.smallinfo.in/*
// @match *://*.pglink.online/*
// @match *://*.mvplaylink.in.net/*
// @match *://*.techyinfo.in/*
// @match *://*.gyanitheme.com/*
// @match *://*.ww1.linktrims.com/*
// @match *://*.healthynepal.in/*
// @match *://*.missionhight.in/*
// @match *://*.tech.techwhom.com/*
// @match *://*.encurtaclik.com/*
// @match *://*.appkamods.com/*
// @match *://*.cybertechng.com/*
// @match *://*.conghuongtu.net/*
// @match *://*.loan.filmypoints.in/*
// @match *://*.niinga.com/*
// @match *://*.cinemapettai.in/*
// @match *://*.market.gorating.in/*
// @match *://*.lrncook.xyz/*
// @match *://*.blog.anywho-com.com/*
// @match *://*.videoslyrics.com/*
// @match *://*.earn.tensailab.com/*
// @match *://*.postazap.com/*
// @match *://*.mamahawa.com/*
// @match *://*.prakasheditingtamizhan.com/*
// @match *://*.mmdrive.xyz/*
// @match *://*.reminimod.co/*
// @match *://*.keralalotteryresult.co/*
// @match *://*.tech.filmypoints.in/*
// @match *://*.dpbossreal.com/*
// @match *://*.tbhlabsnews.com/*
// @match *://*.interestingfactsare.com/*
// @match *://*.dealprice.co/*
// @match *://*.djnonstopmusic.in/*
// @match *://*.tech.filohappy.in/*
// @match *://*.vietnamtravelguide.top/*
// @match *://*.viralsinfo.com/*
// @match *://*.insuranceinfos.in/*
// @match *://*.www.filmypoints.in/*
// @match *://*.cafe.warrenrahul.in/*
// @match *://*.blogsward.com/*
// @match *://*.truevpnlover.com/*
// @match *://*.battleroyal.online/*
// @include /^(https?:\/\/)(.+)?(techyblogs.in|techyinfo.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(apasih.my.id|healthydad.my.id)(\/.*)/
// @match *://*.financeyogi.net/*
// @match *://*.iphoto.site/*
// @match *://*.copy-paste-fonts.com/*
// @include /^(https?:\/\/)(.+)?(techloadz.com|sportsmediaz.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((manga2day|gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kienthucrangmieng|chinhnhacoban|tremamnon|coin-free).com|fanclup.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nguyenvanbao.com|nghiencar.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(fc-lc.xyz|(webhostingpost|tophostingapp|digitalmarktrend).com)(\/.*)/
// @match *://*.mohtawaa.com/*
// @include /^(https?:\/\/)(.+)?(btcbitco.in|readbitcoin.org|btcsatoshi.net|wiour.com|manofadan.com|crypto4yu.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mdn.lol|awgrow.com|fadedfeet.com|kenzo-flowertag.com|homeculina.com|ineedskin.com|worldtanr.xyz|lawyex.co|yexolo.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vailonxx.com|fun88.bio)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|admediaflex|cryptfaucet|phimne|cdrab|tinybc|tinycmd).com|(bit4me|ecq|sportweb|mgame).info|(wpcheap|offerinfo).net|quanngon.org|datacheap.io)(\/.*)/
// @match *://*.multiup.org/*
// @match *://*.modsfire.com/*
// @match *://*.pixeldrain.com/*
// @match *://*.social-unlock.com/*
// @match *://*.work.ink/*
// @match *://*.nft.blogyindia.com/*
// @match *://*.my.dropz.xyz/*
// @match *://*.go.blogyindia.com/*
// @match *://*.patak.dropz.xyz/*
// @match *://*.blogyindia.com/*
// @match *://*.sub2unlock.com/*
// @match *://*.crypto.webseriesreel.in/*
// @match *://*.adbull.me/*
// @match *://*.uii.io/*
// @match *://*.shortano.link/*
// @match *://*.shortino.link/*
// @match *://*.clk.st/*
// @match *://*.clks.pro/*
// @match *://*.chainfo.xyz/*
// @match *://*.clicksfly.com/*
// @match *://*.dailytime.store/*
// @match *://*.cryptoflare.cc/*
// @match *://*.ez4short.com/*
// @match *://*.fc.lc/*
// @match *://*.cutp.in/*
// @match *://*.saly.io/*
// @match *://*.earnow.online/*
// @match *://*.exe.io/*
// @match *://*.gplinks.in/*
// @match *://*.linkjust.com/*
// @match *://*.sl.btc25.org/*
// @match *://*.linkfly.me/*
// @match *://*.earnify.pro/*
// @match *://*.linksfire.co/*
// @match *://*.adlink.click/*
// @match *://*.gigafly.me/*
// @match *://*.traffic1s.com/*
// @match *://*.link4rev.site/*
// @match *://*.linkrex.net/*
// @match *://*.opli.xyz/*
// @match *://*.www.clink2.com/*
// @match *://*.linksly.co/*
// @match *://*.shortyearn.com/*
// @match *://*.upshrink.com/*
// @match *://*.tr.link/*
// @match *://*.nanolinks.in/*
// @match *://*.megaurl.in/*
// @match *://*.adshort.co/*
// @match *://*.atglinks.comk/*
// @match *://*.shrinkforearn.in/*
// @match *://*.shorti.io/*
// @match *://*.try2link.com/*
// @match *://*.terafly.me/*
// @match *://*.www.wts.pw/*
// @match *://*.web1s.com/*
// @match *://*.rocklinks.net/*
// @match *://*.megafly.in/*
// @match *://*.smartlink.vip/*
// @match *://*.usalink.io/*
// @match *://*.birdurls.com/*
// @match *://*.adrinolinks.in/*
// @match *://*.10short.com/*
// @match *://*.urlpay.in/*
// @match *://*.mdiskshortner.link/*
// @match *://*.cbshort.com/*
// @match *://*.besturl.link/*
// @match *://*.clk.sh/*
// @match *://*.droplink.co/*
// @match *://*.adpaylink.com/*
// @match *://*.botfly.me/*
// @match *://*.paid4link.com/*
// @match *://*.dash-free.com/*
// @match *://*.owllink.net/*
// @match *://*.cuty.io/*
// @match *://*.octolinkz.com/*
// @match *://*.doshrink.com/*
// @match *://*.cashando.me/*
// @match *://*.revly.click/*
// @match *://*.shorterall.com/*
// @match *://*.shrinkearn.com/*
// @match *://*.shrinkme.io/*
// @match *://*.shortox.com/*
// @match *://*.linksfly.link/*
// @match *://*.oii.io/*
// @match *://*.ay.live/*
// @match *://*.timeforearn.com/*
// @match *://*.urlstox.com/*
// @match *://*.lollty.com/*
// @match *://*.okrzone.com/*
// @match *://*.mytop5.club/*
// @match *://*.technicalatg.com/*
// @match *://*.sahlmarketing.net/*
// @match *://*.ledifha.com/*
// @match *://*.adybrands.in/*
// @match *://*.foodupe.com/*
// @match *://*.blog.coin2pay.xyz/*
// @match *://*.gamerfang.in/*
// @match *://*.videolyrics.in/*
// @match *://*.coin2pay.xyz/*
// @match *://*.blog.mphealth.online/*
// @match *://*.techrayzer.com/*
// @match *://*.economiarelevante.com.br/*
// @match *://*.mphealth.online/*
// @match *://*.shrs.link/*
// @match *://*.shareus.io/*
// @match *://*.www.gifans.com/*
// @match *://*.zonearn.biz/*
// @match *://*.nulledsafe.com/*
// @match *://*.froggyreviews.com/*
// @match *://*.techmody.io/*
// @match *://*.slink.bid/*
// @match *://*.www.pythondunyasi.com/*
// @match *://*.free4u.nurul-huda.or.id/*
// @match *://*.rotator.nurul-huda.sch.id/*
// @match *://*.jrlinks.in/*
// @match *://*.kiiw.icu/*
// @match *://*.solarchaine.com/*
// @match *://*.hr.vikashmewada.com/*
// @match *://*.sclick.crazyblog.in/*
// @match *://*.ser7.crazyblog.in/*
// @match *://*.freeltc.top/*
// @match *://*.freecrypto.top/*
// @match *://*.insfly.pw/*
// @match *://*.Insfly.pw/*
// @match *://*.mdiskshortner.link/*
// @match *://*.clockads.in/*
// @match *://*.exashorts.fun/*
// @match *://*.cosmic-matter.pw/*
// @match *://*.terafly.me/*
// @match *://*.adnews.me/*
// @match *://*.kyshort.xyz/*
// @match *://*.eazyurl.xyz/*
// @match *://*.linksfly.top/*
// @match *://*.bestlink.pro/*
// @match *://*.playstore.pw/*
// @match *://*.sigmalinks.in/*
// @match *://*.r1.foxylinks.site/*
// @grant          GM_deleteValue
// @include      /(free-content.pro|((ebaticalfel|downbadleaks|megadropsz|megadumpz|stownrusis|iedprivatedqu).com))\/s\?/
// @include      /adbypass.eu/
// @include      /(bypass.city|adbypass.org)\/bypass\?bypass=/
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
// @include     /test.shrinkurl.org/
// @include     /shareus.io/
// @include     /shareus\.io\/go\?sid=/
// @include     /(verpeliculasonline.org|subtituladas.com)\/enlace/
// @include     /links.cuevana.ac\/short/
// @include     /ouo.io/
// @include     /fc-lc.(xyz|com)/
// @include     /1v.to\/t/
// @include     /linkspy.cc\/tr/
// @include     /((cybertyrant|profitshort|technorozen|hubdrive.me|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike).com|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz)(?!.*\?r=)/
// @include     /cybertyrant.com\/\?r=/
// @include     /dropgalaxy.(com|co)\/drive/
// @include     /short-ly.co/
// @include     /shramikcard.in/
// @include     /blogging.techworldx.net/
// @include     /starsddl.me\/short/
// @include     /tech.unblockedgames.world/
// @include     /seriezloaded.com.ng\/sl-download\/\?link=/
// @include     /www.itscybertech.com/
// @include     /thegadgetking.in/
// @include     /(linkvertise.com|linkvertise.net|link-to.net).*\?r=/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(linkvertise.com|linkvertise.net|link-to.net)(?!.*\?r=)/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(free-content.pro|(ebaticalfel|downbadleaks|megadropsz|megadumpz|stownrusis|iedprivatedqu).com)\/s\?/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @include     /epicload.com\/files/
// @include     /www.gtaall.com\/get-manual/
// @include     /woowebtools.com|pallabmobile.in/
// @include     /doodrive.com\/f/
// @include     /ipamod.com\/redirect-to/
// @include     /9xflix\.(\w+)\/m\/goto/
// @include     /bookszone.in/
// @include     /yoshare.net/
// @include     /blog.disheye.com/
// @include     /reminimod.co/
// @include     /techrayzer.com/
// @include     /techfizia.com/
// @include     /tech5s.co/
// @include     /ez4mods.com/
// @include     /ez4short.com/
// @include     /learnmany.in/
// @include     /lksfy.in/
// @include     /droplink.co/
// @include     /lnks.primarchweb.in/
// @include     /highkeyfinance.com/
// @include     /toonhub4u.net\/redirect\/main.php\?url=/
// @include     /nhmgujarat.in|minijankari.com/
// @include     /gplinks.co\/[^/#]+\/(?:#|\?pid=)/
// @include     /aipebel.com/
// @include     /raretoonsindia.rtilinks.com/
// @include     /(do|fast).rtilinks.com/
// @include     /vidhidepro.com\/d/
// @include     /www.mirrored.to\/files\/(?!.*\?hash=)/
// @include     /skyve.io/
// @include     /itradercoin.com\/verify\/\?/
// @include     /itradercoin.com/
// @include     /blog.filepresident.com/
// @include     /gyanigurus.net\/view/
// @include     /mkvmoviespoint.casa\/goto/
// @include     /w.linkspoint.net/
// @include     /kingshortener.com/
// @include     /gdslink.xyz/
// @include      /(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @exclude /^(https?:\/\/)(.+)?((advertisingexcel|talkforfitness|rsadnetworkinfo|rsinsuranceinfo|rsfinanceinfo|rssoftwareinfo|rshostinginfo|rseducationinfo|gametechreviewer|vegan4k|phineypet|batmanfactor|techedifier|urlhives|linkhives|github|freeoseocheck|greenenez|aliyun|reddit|bing|live|yahoo|wiki-topia|edonmanor|vrtier|whatsapp|gearsadviser|edonmanor|tunebug|menrealitycalc|amazon|ebay|payoneer|paypal|skrill|stripe|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet).google).com|(thumb8|thumb9|crewbase|crewus|shinchu|shinbhu|ultraten|uniqueten|topcryptoz|allcryptoz|coinsvalue|cookinguide|cryptowidgets|webfreetools|carstopia|makeupguide|carsmania|nflximg|doubleclick).net|(linksfly|shortsfly|urlsfly|wefly|blog24).me|(greasyfork|openuserjs|adarima|telegram|wikipedia).org|mcrypto.club|misterio.ro|insurancegold.in|coinscap.info|(shopee|lazada|rakuten|maybank).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).edu|(.*).gov)(\/.*)/
// @downloadURL https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js
// @updateURL https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.meta.js
// ==/UserScript==
