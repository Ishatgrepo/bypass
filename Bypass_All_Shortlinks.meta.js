// ==UserScript==
// @name       Bypass All Shortlinks Debloated
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Amm0ni4
// @noframes
// @version        92.8.14
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
// @match *://*.aprovax.com/*
// @match *://*.lootcash.vip/*
// @match *://*.mixrootmods.com/*
// @match *://*.duplichecke.com/*
// @match *://*.dreamistore.com/*
// @match *://*.techyadjectives.com/*
// @match *://*.cyberstockofficial.in/*
// @match *://*.mkvflix.org/*
// @match *://*.link.bicolink.net/*
// @match *://*.infinityskull.com/*
// @match *://*.sakarnewz.com/*
// @match *://*.link.linksfire.co/*
// @match *://*.speedynews.xyz/*
// @match *://*.studyuo.com/*
// @include /^(https?:\/\/)(.+)?(go.link4rev.site|go.urlcash.site)(\/.*)/
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
// @match *://*.buzzheavier.com/*
// @match *://*.filemoon.sx/*
// @match *://*.bestfonts.pro/*
// @match *://*.oyroid.com/*
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
// @include /^(https?:\/\/)(.+)?((uploadrar|fingau|getpczone|wokaz).com|uptomega.me)(\/.*)/
// @match *://*.dailyuploads.net/*
// @match *://*.9xupload.asia/*
// @match *://*.mediafire.com/*
// @match *://*.qiwi.gg/*
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
// @include /^(https?:\/\/)(.+)?((thecubexguide|miuiflash).com|(djxmaza|jytechs).in)(\/.*)/
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
// @match *://*.jameeltips.us/*
// @match *://*.post.copydev.com/*
// @match *://*.linegee.net/*
// @match *://*.pro.sh/*
// @include /^(https?:\/\/)(.+)?(proappapk.com|meclipstudy.in)(\/.*)/
// @match *://*.1bitspace.com/*
// @match *://*.cshort.org/*
// @match *://*.render-state.to/*
// @match *://*.linkpay.cc/*
// @include /^(https?:\/\/)(.+)?(cooklike.info|model-tas-terbaru.com)(\/.*)/
// @match *://*.kisalt.digital/*
// @include /^(https?:\/\/)(.+)?(bildirim.in|bildirim.eu|bildirim.link)(\/.*)/
// @match *://*.enlacito.com/*
// @match *://*.webhostingtips.club/*
// @include /^(https?:\/\/)(.+)?(michaelemad.com|7misr4day.com)(\/.*)/
// @match *://*.shareus.io/*
// @match *://*.adtival.network/*
// @match *://*.dilink.net/*
// @match *://*.ontechhindi.com/*
// @include /^(https?:\/\/)(.+)?(gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online)(\/.*)/
// @match *://*.gameblog.in/*
// @match *://*.sharetext.me/*
// @match *://*.btcsatoshi.net/*
// @include /^(https?:\/\/)(.+)?((cutnet|cutsy|cutlink).net|(cutty|exego|cety).app|gamco.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(sfl.gl|moneyblink.com)(\/.*)/
// @match *://*.comohoy.com/*
// @match *://*.apkw.ru/*
// @include /^(https?:\/\/)(.+)?(cryptomonitor.in|2the.space|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((newsbawa|utkarshonlinetest|techbezzie).com)(\/.*)/
// @match *://*.programasvirtualespc.net/*
// @include /^(https?:\/\/)(.+)?(horoscop.info|infonerd.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitcrypto.info|offerinfo.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitzite.com|cryptoad.org|article24.online|dailytechz.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tinycmd|tinybc).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coingraph.us|eblog.pro|writeprofit.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techanalyzer.eu|(miner-sim|networkhint|askpaccosi).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nullscript.info|freebinance.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?((10short|lollty).pro|mamahawa.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|tutorialsaya|indobo|baristakesehatan).com|deltabtc.xyz|bit4me.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptfaucet.com|izseo.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela|nutrisavors|bgmtelugucreations|soundaudioguru|howtoconcepts).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|paidinsurance.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((netflixrelease|mangareleasedate|freemodapp|cryptoprolife|diethim|zutiza|hitjankari|phixshop|mp4news|trancebazar|taazaalerts|mazheshetkari|uskloans|ssbytes).com|(rontymobile|myfirstname|djrajurjm|ignoupur).in|rrbntpc2024.net|mdsuuniversity.org|odishadjs.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?((crypto2u|bestcoinsites).xyz)(\/.*)/
// @match *://*.fansonlinehub.com/*
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|tech-bixby|webhostsec).com|ss7.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?((viralxns|uploadsoon).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @match *://*.yalifin.xyz/*
// @include /^(https?:\/\/)(.+)?(largestpanel.in|earnme.club|usanewstoday.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(paste1s.com|note1s.com)(\/.*)/
// @match *://*.terabox.fun/*
// @match *://*.ayelads.com/*
// @match *://*.karyawan.co.id/*
// @match *://*.icerik.site/*
// @match *://*.ponselharian.com/*
// @match *://*.tonanmedia.my.id/*
// @match *://*.assettoworld.com/*
// @match *://*.adfoc.us/*
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @match *://*.oii.io/*
// @match *://*.cpu-miner.leaks.work/*
// @include /^(https?:\/\/)(.+)?(mrproblogger.com|themezon.net|travelkuku.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(forex-golds.com|forex-trnd.com)(\/.*)/
// @match *://*.1link.club/*
// @match *://*.slink.bid/*
// @match *://*.1mlink.vip/*
// @match *://*.zegtrends.com/*
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bcvc.xyz|bcvc.ink)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitcoinfaucet.fun|freebitcoin.win)(\/.*)/
// @match *://*.bestadvise4u.com/*
// @match *://*.linkspy.cc/*
// @include /^(https?:\/\/)(.+)?((webhostingpost|tophostingapp|digitalmarktrend).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((chooyomi|blogmado|kredilerim|insuranceleadsinfo).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kiktu|techcyan).com)(\/.*)/
// @match *://*.fexkomin.xyz/*
// @match *://*.100puan.com/*
// @match *://*.sub2get.com/*
// @include /^(https?:\/\/)(.+)?((fc-lc|loaninsurehub).com|fc-lc.xyz)(\/.*)/
// @match *://*.mneyvip.com/*
// @match *://*.jobform.in/*
// @match *://*.go.shareus.in/*
// @match *://*.playpaste.com/*
// @match *://*.suratresmi.id/*
// @include /^(https?:\/\/)(.+)?(examkhata.com|gamelopte.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(rancah.com|menjelajahi.com|shortly.xyz|nyawang.com)(\/.*)/
// @match *://*.cryptotracker.space/*
// @match *://*.stfly.me/*
// @include /^(https?:\/\/)(.+)?(khaddavi.net|contentmenarik.com)(\/.*)/
// @match *://*.leitup.com/*
// @match *://*.offeroc.com/*
// @include /^(https?:\/\/)(.+)?(azmath.info|expertvn.com)(\/.*)/
// @match *://*.newassets.hcaptcha.com/*
// @include /^(https?:\/\/)(.+)?((ez4mods|tensailab|game5s).com|tech5s.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bnbfree|freeth).in)(\/.*)/
// @match *://*.freebitco.in/*
// @match *://*.mazen-ve3.com/*
// @match *://*.soft3arbi.com/*
// @include /^(https?:\/\/)(.+)?((120898|141989|161989|131989|121989|151989).xyz)(\/.*)/
// @match *://*.shortearn.net/*
// @include /^(https?:\/\/)(.+)?((coinsward|blogsward).com|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(1bit.space|mgnet.xyz)(\/.*)/
// @match *://*.bigbtc.win/*
// @match *://*.firefaucet.win/*
// @include /^(https?:\/\/)(.+)?(uptobhai\.*|uplinkto\.*|shortlinkto\.*)/
// @include /^(https?:\/\/)(.+)?(tmail.io|(gamezizo|fitdynamos).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((exeo|exego).app|(mrgec|emxaw|ijvam|falpus).com|evernia.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|gold-24.net|bedrat.xyz|(offeergames|todogame).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((leaveadvice|mensventure).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(jameeltips.us|cryptonworld.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hynews.biz|chamcuuhoc.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li)(\/.*)/
// @match *://*.skiplink.me/*
// @match *://*.apanmusic.in/*
// @match *://*.o-pro.online/*
// @include /^(https?:\/\/)(.+)?((travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com)(\/.*)/
// @match *://*.easyworldbusiness.com/*
// @match *://*.getzen.cash/*
// @include /^(https?:\/\/)(.+)?((kongutoday|proappapk|hipsonyc|teamtechnews).com|finsurances.co|yotrickslog.tech|animalwallpapers.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(deportealdia.live|noweconomy.live|techgeek.digital)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nishankhatri.xyz|(bebkub|importantclass).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(writedroid.eu.org|modmania.eu.org|writedroid.in|mytop5.club)(\/.*)/
// @match *://*.computerpedia.in/*
// @match *://*.linkatla.com/*
// @match *://*.myprivatejobs.com/*
// @match *://*.claimfreetrx.online/*
// @include /^(https?:\/\/)(.+)?(offers4crypto.xyz|ewall.biz)(\/.*)/
// @match *://*.dl.lk21static.xyz/*
// @match *://*.easylink.gamingwithtr.com/*
// @include /^(https?:\/\/)(.+)?(copy-paste-fonts.com|cryptednews.space)(\/.*)/
// @match *://*.solarchaine.com/*
// @include /^(https?:\/\/)(.+)?((remixsounds|helpowi|helpdeep|thinksrace|tipsloanusa).com|(remixone|webseriesreel).in|uprwssp.org|securitywaittimes.us)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shrinke\.*|shrinkme\.*|(linkvhoriz|paid4link|icashfly).com|bicolink.net|wordcounter.icu|pwrpa.cc|paylinks.cloud)(\/.*)/
// @match *://*.revly.click/*
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|(techacode|expertvn).com|azmath.info|expertvn.com|aztravels.net|top10cafe.se|handydecor.com.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(theconomy.me|(askpaccosi|halosenja|sainny|wellness4live).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?((theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner|atglinks).com|happy-living.online|galaxy-link.space|oke.io|forextrader.site|tinygo.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogtechh|host2loan|techbixby|wptohost|hosttbuzz|blog-blend|blogmystt).com|clk.wiki|(oko|aii).sh|clk.kim|blog-myst.com|ins-myst.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techyreviewx.com|desiupload.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((calmgram|adbitfly|blogsward).com|adbitfly.in)(\/.*)/
// @match *://*.shorterall.com/*
// @include /^(https?:\/\/)(.+)?(exactpay.online|neverdims.com|videoclip.info|sproutworkers.co|coinsfaucet.fun)(\/.*)/
// @include /^(https?:\/\/)(.+)?((crypto4yu|manofadan|wiour).com|btcbitco.in|readbitcoin.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((btcpany|zombiebtc|claimfey|thefastpost).com|(battleroyal|panytourism|statepany).online)(\/.*)/
// @match *://*.playnano.online/*
// @include /^(https?:\/\/)(.+)?(donia2tech.com|blog.techeysub.online|minersim.com)(\/.*)/
// @match *://*.rekonise.com/*
// @match *://*.acortalink.me/*
// @include /^(https?:\/\/)(.+)?(tutwuri.id|besargaji.com)(\/.*)/
// @match *://*.autodime.com/*
// @match *://*.amritadrino.com/*
// @include /^(https?:\/\/)(.+)?(hunterkiller.me|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(lyricsbaazaar.com|ezeviral.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|ai.tempatwisata.pro)(\/.*)/
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
// @match *://*.bitcotasks.com/*
// @match *://*.suaurl.com/*
// @match *://*.letsboost.net/*
// @include /^(https?:\/\/)(.+)?((hookeaudio|pennbookcenter|publicananker|fun88bk).com|fun88.info.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmiz|snaplessons).net)(\/.*)/
// @match *://*.coins-town.com/*
// @include /^(https?:\/\/)(.+)?(slinkware.com|aghtas.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(link.goto.com.np|(appkamods|bankvacency|otomi-games).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((lootlinks|onepiecered).co|(loot-links|links-loot|loot-link|mega-guy|utopianleaks|eofmukindwo|realiukzemydre|kmendation|bstlar|daughablelea|tonordersitye|bleleadersto).com|(lootdest|lootlink|best-links).org|lootdest.info|linksloot.net|free-content.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tpayr|viralfeed).xyz|(tiktokrealtime|dawenet|dshytb|starkroboticsfrc|finance240|retrotechreborn).com|(sinonimos|antonimos).de|quesignifi.ca|tiktokcounter.net|blackwoodacademy.org|cryptednews.space|chaosfun.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((awgrow|kenzo-flowertag|homeculina|ineedskin|alightmotionlatest|auntmanny|businessuniqueidea|plumptofit|cookingpumpkin|elishea|audioinspects|celebperson|dreamhomelabs|fishingbreeze).com|(financewrapper|recipes4all).net|(aayurvedshastra|allnewspoint).in|chefslink.org|lawyex.co|mdn.lol)(\/.*)/
// @match *://*.shortit.pw/*
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vikashmewada.com|videoslyrics.com|crazysonglyrics.com|videolyrics.in|newsharsh.com|trxking.xyz|crazyblog.in|getdashcoin.io)(\/.*)/
// @match *://*.ify.ac/*
// @match *://*.lanza.me/*
// @match *://*.lifeezee.com/*
// @match *://*.lolinez.com/*
// @match *://*.file-upload.in/*
// @match *://*.upmienphi.com/*
// @match *://*.linksly.co/*
// @match *://*.cashando.me/*
// @match *://*.appsinsta.com/*
// @match *://*.apkadmin.com/*
// @match *://*.sugarona.com/*
// @match *://*.cekip.site/*
// @match *://*.techleets.xyz/*
// @match *://*.amanguides.com/*
// @match *://*.mirrored.to/*
// @match *://*.flybid.net/*
// @match *://*.8tm.net/*
// @match *://*.cpmlink.net/*
// @match *://*.noodlemagazine.com/*
// @match *://*.mohtawaa.com/*
// @match *://*.sub2unlock.com/*
// @include /^(https?:\/\/)(.+)?(thebloggerspoint.in|ezeviral.com)(\/.*)/
// @match *://*.rockmods.net/*
// @match *://*.doodjob.com/*
// @include /^(https?:\/\/)(.+)?(xonnews.net|toilaquantri.com|share4u.men|camnangvay.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(offrcms.xyz|kooora365.online|tourismtravels4.sbs|5tl.co|mamahawa.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(geniussolutions.co|alightmotionlatest.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cricketgurupro|travelkuku).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bluemedialink.online|bluemediafile\.*)/
// @match *://*.boost.ink/*
// @match *://*.blog.textpage.xyz/*
// @match *://*.foodupe.com/*
// @match *://*.freethailottery.live/*
// @match *://*.udrop.com/*
// @match *://*.sub2unlock.net/*
// @include /^(https?:\/\/)(.+)?((starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides|edukaroo).com|(iisfvirtual|bookszone|learnmany).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods|pastescript|trimorspacks|mealcold).com|updrop.link)(\/.*)/
// @match *://*.mboost.me/*
// @include /^(https?:\/\/)(.+)?((disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo|adcrypto|daycash).net|(sportweb|ecq|mgame|oncoin).info|savego.org|hbz.us|(djqunjab|alpha-links).in|datacheap.io)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mbantul.my.id|videoclip.info|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz)(\/.*)/
// @match *://*.aiimgvlog.fun/*
// @include /^(https?:\/\/)(.+)?(dutchycorp.space|dutchycorp.ovh|gtlink.co|seulink.digital|oii.io|hamody.pro|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|(kiiw|wordcounter).icu|pwrpa.cc|shurt.pw|(flyad|tapnip).vip|antonimos.de|seulink.online|pahe.plus|tfly.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|youshort|illink).net|(s2fly|pglink|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks|wdu).info|(shrink|flyzu).icu|(24payu|vielink).top|(terafly|hatelink|cashando|zumpa|tlin|weezo|adnews|botfly|linkdam|ar-goal).me|(jameeltips|mitly|finish.wlink).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(short1|urlcash|dglinks).site|(shrinkme|tfly).link|(playstore|adsy|clik|shurt).pw|short.express|cryptosh.pro|goo.st|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|(lootcash|tapnip).vip|addurl.biz)(\/.*)/
// @match *://*.autofaucet.dutchycorp.space/*
// @match *://*.gocmod.com/*
// @match *://*.writedroid.in/*
// @match *://*.web1s.com/*
// @match *://*.modmania.eu.org/*
// @match *://*.yalifin.xyz/*
// @match *://*.ruwet.us/*
// @match *://*.hrpunjab.in/*
// @match *://*.autodime.com/*
// @match *://*.zubatecno.com/*
// @match *://*.hiharshit.in/*
// @match *://*.tanytech.com/*
// @match *://*.healthynepal.in/*
// @match *://*.vslinks.online/*
// @match *://*.1apple.xyz/*
// @match *://*.recipejaano.com/*
// @match *://*.dilmibriva.store/*
// @match *://*.caraccidants.xyz/*
// @match *://*.videolyrics.in/*
// @match *://*.trendtrove.vip/*
// @match *://*.blogsward.com/*
// @match *://*.nisnisin.com/*
// @match *://*.candleoflife.fun/*
// @match *://*.suntechu.in/*
// @match *://*.market.finclub.in/*
// @match *://*.bantenexis.com/*
// @match *://*.techkeshri.com/*
// @match *://*.indirasari.com/*
// @match *://*.wikitraveltips.com/*
// @match *://*.smallinfo.in/*
// @match *://*.pglink.online/*
// @match *://*.mvplaylink.in.net/*
// @match *://*.ww1.linktrims.com/*
// @match *://*.healthynepal.in/*
// @match *://*.missionhight.in/*
// @match *://*.tech.techwhom.com/*
// @match *://*.encurtaclik.com/*
// @match *://*.appkamods.com/*
// @match *://*.cybertechng.com/*
// @match *://*.conghuongtu.net/*
// @match *://*.loan.filmypoints.in/*
// @match *://*.cinemapettai.in/*
// @match *://*.market.gorating.in/*
// @match *://*.videoslyrics.com/*
// @match *://*.earn.tensailab.com/*
// @match *://*.postazap.com/*
// @match *://*.mamahawa.com/*
// @match *://*.prakasheditingtamizhan.com/*
// @match *://*.mmdrive.xyz/*
// @match *://*.reminimod.co/*
// @match *://*.tech.filmypoints.in/*
// @match *://*.dpbossreal.com/*
// @match *://*.tbhlabsnews.com/*
// @match *://*.interestingfactsare.com/*
// @match *://*.dealprice.co/*
// @match *://*.djnonstopmusic.in/*
// @match *://*.tech.filohappy.in/*
// @match *://*.vietnamtravelguide.top/*
// @match *://*.earn.hostadviser.net/*
// @match *://*.viralsinfo.com/*
// @match *://*.insuranceinfos.in/*
// @match *://*.www.filmypoints.in/*
// @match *://*.cafe.warrenrahul.in/*
// @match *://*.techurlshort.in/*
// @match *://*.battleroyal.online/*
// @match *://*.rajdhanimaja.com/*
// @include /^(https?:\/\/)(.+)?(apasih.my.id|healthydad.my.id)(\/.*)/
// @match *://*.iphoto.site/*
// @match *://*.copy-paste-fonts.com/*
// @include /^(https?:\/\/)(.+)?(techloadz.com|sportsmediaz.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((manga2day|gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nguyenvanbao.com|nghiencar.com)(\/.*)/
// @match *://*.mohtawaa.com/*
// @include /^(https?:\/\/)(.+)?(btcbitco.in|readbitcoin.org|btcsatoshi.net|wiour.com|manofadan.com|crypto4yu.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mdn.lol|awgrow.com|kenzo-flowertag.com|homeculina.com|ineedskin.com|lawyex.co|chefslink.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vailonxx.com|fun88.bio)(\/.*)/
// @match *://*.multiup.org/*
// @match *://*.modsfire.com/*
// @match *://*.social-unlock.com/*
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
// @match *://*.gamerfang.in/*
// @match *://*.videolyrics.in/*
// @match *://*.blog.mphealth.online/*
// @match *://*.techrayzer.com/*
// @match *://*.economiarelevante.com.br/*
// @match *://*.mphealth.online/*
// @match *://*.shrs.link/*
// @match *://*.shareus.io/*
// @match *://*.www.gifans.com/*
// @match *://*.zonearn.biz/*
// @match *://*.nulledsafe.com/*
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
// @match *://*.videolyrics.in/*
// @match *://*.terafly.me/*
// @match *://*.adnews.me/*
// @match *://*.kyshort.xyz/*
// @match *://*.eazyurl.xyz/*
// @match *://*.linksfly.top/*
// @match *://*.playstore.pw/*
// @grant        GM.xmlHttpRequest
// @grant          GM_getResourceText
// @match        https://acortalink.me/*
// @match        https://paster.so/*
// @include     /(mundopolo.net|myfirstdollar.net|adsense.tupaste.top|acorta2.com|web.admoneyclick.net|acortaphd.live|onlypc.net|link.manudatos.com)/
// @include     /comohoy.com/
// @include     /privatenudes.com\/model/
// @include     /sphinxanime.com\/short/
// @include     /japanpaw.com\/out/
// @include     /(iconicblogger.com|segurosdevida.site)/
// @include     /link.unlockner.com/
// @include     /cybercityhelp.in/
// @include     /www.akcartoons.in/
// @include     /go.moonlinks.in/
// @include     /shrinkme.(us|site|cc|vip|dev|ink)/
// @include     /test.shrinkurl.org/
// @include     /shareus.io/
// @include     /shareus\.io\/go\?sid=/
// @include     /(verpeliculasonline.org|subtituladas.com)\/enlace/
// @include     /links.cuevana.ac\/short/
// @include     /ouo.io/
// @include     /exeo.app|mrgec.com|cety.app/
// @include     /fc-lc.(xyz|com)/
// @include     /tmail.io/
// @include     /1v.to\/t/
// @include     /linkspy.cc\/tr/
// @include     /linkspy.cc\/\/a/
// @include     /www.ovagames.com\/.*\.html$/
// @include     /((infytips|remixodiadj).in|(cybertyrant|profitshort|technorozen|hubdrive.me|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike|caronwhaley|maxxfour|thewizitale).com|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz|nzarticles.pro|blog.offerboom.top)/
// @include     /dropgalaxy.(com|co)\/drive/
// @include     /short-ly.co/
// @include     /(shramikcard|pmkisanlists|techishant|cinedesi).in|cookad.net|tejtime24.com/
// @include     /blogging.techworldx.net|10beasts.biz/
// @include     /starsddl.me\/short/
// @include     /tech.unblockedgames.world/
// @include     /seriezloaded.com.ng\/sl-download\/\?link=/
// @include     /www.itscybertech.com/
// @include     /thegadgetking.in/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(linkvertise.com|(linkvertise|link-to).net)/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(free-content.pro|(ebaticalfel|downbadleaks|megadropsz|megadumpz|stownrusis|iedprivatedqu|megaspremium|premiumstashdrop|teenspremium|utopianleaks|kmendation|eofmukindwo|realiukzemydre|daughablelea|tonordersitye|bleleadersto).com)|best-links.org\/s\?/
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
// @include     /toonhub4u\.net\/([^\/]+)\/$/
// @include     /mdsuuniversity.org|instander.me|jameen.xyz|dhamakamusic.ink|eternalcbse.i|financialstudy.me|(foreverhealth|newzwala.co|nhmgujarat|jobkijankari|jobwaala|learnwithsaif|lyricsx|smartsetkari|theringtonesworld|recruitmentrasta|mediniweb|pmyojanasarkari|netflixvip|mghindinews|gentletrail|w3hindi|ryzenmusic).in|(anumin|awolio|cgbsesupport|gptproguide|iplquotes|kaisekareblog|minijankari|news36tech|newsloti|odiamusicsong|sugargliderfaqs|picassoappk|geniuseducares|ndlifestylego|raidersixgameapk|sarkariexam365|potter-world|jankari4u|trancebazar|taazaalerts).com/
// @include     /aipebel.com/
// @include     /raretoonsindia.rtilinks.com/
// @include     /(do|fast).rtilinks.com/
// @include     /vidhidepro.com\/d/
// @include     /www.mirrored.to\/files\/(?!.*\?hash=)/
// @include     /skyve.io/
// @include     /(itradercoin|nichapk|easyworldbusiness|riveh).com/
// @include     /blog.filepresident.com/
// @include     /gyanigurus.net\/view/
// @include     /mkvmoviespoint.casa\/goto/
// @include     /w.linkspoint.net/
// @include     /kingshortener.com/
// @include     /gdslink.xyz/
// @include     /financeyogi.net/
// @include     /jrlinks.in/
// @include     /go.tnshort.net/
// @include     /www.4fnet.org\/goto/
// @include     /(linkmo.net|adpayl.ink)\/[^?]+\?data=.+$/
// @include     /musicc.xyz/
// @include     /(cravesandflames|codesnse|cloutgist).com/
// @include     /go.(cravesandflames|codesnse|cloutgist).com/
// @include     /empebau.eu\/s\/linker/
// @include     /cpmlink.net\/go/
// @include     /10short.com/
// @include     /zegtrends.com/
// @include     /icutlink.com/
// @include     /motakhokhara.blogspot.com/
// @include     /xpshort.com/
// @include     /jobzspk.xyz/
// @include     /urls.cx/
// @include     /sunci.net/
// @include     /(adclicker.(io|info)|(discoveryultrasecure|yourihollier).com)\/url/
// @include     /antonimos.de|tiktokcounter.net|tiktokrealtime.com|tpayr.xyz|quesignifi.ca|lifgam.online|waezf.xyz|ashrfd.xyz/
// @include     /minimilionario.com\/noticia.php\?token=/
// @include     /usandoapp.com/
// @include     /v2links.(com|me)/
// @include     /(utkarshonlinetest|newsbawa).com/
// @include     /techtnet.com/
// @include     /asideway.com/
// @include     /web1s.asia\/api-mode/
// @include     /(linkvip|blitly).io/
// @include     /^https:\/\/megalink.pro\/[a-zA-Z0-9]+$/
// @include     /lnbz.la/
// @include     /falpus.com|tii.la|oko.sh|tpi.li|shrinke.me|clk.(wiki|kim)|techy.veganab.co|atglinks.com|linx.cc|get.megaurl.in|wordcounter.icu|exeo.app|pwrpa.cc|(go|get).megafly.in|birdurls.com|blog.graphicuv.com|try2link.com|owllink.net|oei.la|exego.app|link.theflash.eu.org|get.instantearn.in|mrproblogger.com/
// @include     /ez4short.com\/[^\/]+\/\?token=[^\/]+$/
// @include     /shon.xyz/
// @include     /veganab.co\/\?link=/
// @include     /veganab.co/
// @include     /camdigest.com/
// @include     /tawda.xyz\/tag/
// @include     /pastebin.com\/raw/
// @include     /spacetica.com/
// @include     /linegee.net|intercelestial.com/
// @include     /(loanoffering|djmp3world).in|moonplusnews.com/
// @include     /4hi.in/
// @include     /lnk.news/
// @include     /imagereviser.com/
// @include     /upshrink.com/
// @include     /bangclinic.life/
// @include     /dow-dow-dow-dow-dow.xyz\/download\/\?id=/
// @include     /ofilmetorrent.com\/download\/\?id=/
// @include     /librospdfgratismundo.net/
// @include     /besargaji.com/
// @include     /moneyblink.com\/ready\/go\?u=/
// @include     /dw-anime.net\/short\/\?anonym=/
// @include     /fiuxy2.co\/threads/
// @include     /megalinks.info\/index.php\?v=/
// @include     /ocultandoo.blogspot.com/
// @include     /rodimalam.com/
// @include     /platinsport.com/
// @include     /(ay.live|aylink.co|gitlink.pro)\/[^\/]+$/
// @include     /(lopteapi.com|1link.vip|blitly.io|web1s.com|megalink.pro)\/[^\/]+$/
// @include     /short-url.link\/[^\/]+$/
// @include     /urlx.one\/[^\/]+$/
// @include     /trimorspacks.com|pastescript.com|updrop.link/
// @include     /earnmoneyyt.com/
// @include     /sheralinks.com/
// @include     /go.bloggingaro.com/
// @include     /land.povathemes.com/
// @include     /pahe.plus/
// @include     /www.(sinsitio.site|dixva.com)\/code\/\?go=/
// @include     /www.yitarx.com/
// @include     /myshrinker.com/
// @include     /thotpacks.xyz/
// @include     /linkshortify.in|lksfy.com/
// @include     /tumangasdd.com/
// @include     /sexyforums.com\/redirect/
// @include     /forum.sexyegirls.to\/redirect\?to=/
// @include     /paste.japan-paw.net\/\?v=/
// @include     /pastesmkv.xyz\/\?v=/
// @include     /ikramlar.online|segurosdevida.site/
// @include     /mh.gourlpro.com/
// @include     /playpastelinks.com/
// @include     /stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmize|snaplessons).net/
// @include     /ielts-isa.edu.vn/
// @include     /flash.getpczone.com/
// @include     /surfsees.com|fitnessholic.net/
// @include     /cgsonglyricz.in|www.techhubcap.com/
// @include     /techyblogs.in|readytechflip.com/
// @include     /wp2host.com/
// @include     /pahe.win/
// @include     /ontechhindi.com/
// @include     /thelatintwistcafe.com/
// @include     /newshuta.in/
// @include     /blog.jytechs.in|mi.miuiflash.com|hypershort.com|djxmaza.in|thecubexguide.com/
// @include     /mayas.travel|eldiario24hrs.com|comomedir.com|aplicacionpara.org/
// @include     /animesgd.net/
// @include     /tucinehd.com\/links/
// @include     /render-state.to\/download\/\?link=/
// @include     /www.lanoticia.cc/
// @include     /altearnativasa.com/
// @include     /importantclass.com/
// @include     /bebkub.com/
// @include     /secure.moderngyan.com/
// @include     /earnbox.sattakingcharts.in/
// @include     /set.seturl.in/
// @include     /wikijankari.com/
// @include     /links.kmhd.net\/file/
// @include     /mastramstories.com\/api.php\?api/
// @include     /onlinetntextbooks.com/
// @include      /filecrypt.(cc|co)/
// @include      /^(https?:\/\/)(?!(bypass.city|adbypass.org))(linkvertise.com|(linkvertise|link-to).net)/
// @include     /(mega-enlace|acortados).com/
// @include /^(https?:\/\/)(.+)?((actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi).com|askerlikforum.com.tr)(\/.*)/
// @include     /(work.ink|workink.click)\/.*$/
// @resource    NOTYF_CSS https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css
// @require     https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js
// @exclude /^(https?:\/\/)(.+)?((advertisingexcel|talkforfitness|rsadnetworkinfo|rsinsuranceinfo|rsfinanceinfo|rssoftwareinfo|rshostinginfo|rseducationinfo|gametechreviewer|vegan4k|phineypet|batmanfactor|techedifier|urlhives|linkhives|github|freeoseocheck|greenenez|aliyun|reddit|bing|yahoo|wiki-topia|edonmanor|vrtier|whatsapp|gearsadviser|edonmanor|tunebug|menrealitycalc|amazon|ebay|payoneer|paypal|skrill|stripe|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|accounts.youtube|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet).google|(login|signup|account|officeapps|api|mail|hotmail).live|basketballsavvy|healthyfollicles|hauntingrealm|pluginmixer|boredboard|boardgamechick|healthyfollicles|atlassian|pinterest|twitter|facebook|tiktok|instagram|linkedin).com|(thumb8|thumb9|crewbase|crewus|shinchu|shinbhu|ultraten|uniqueten|topcryptoz|allcryptoz|coinsvalue|cookinguide|cryptowidgets|webfreetools|carstopia|makeupguide|carsmania|nflximg|doubleclick|luckydice).net|(linksfly|shortsfly|urlsfly|wefly|blog24).me|(greasyfork|openuserjs|adarima|telegram|wikipedia|lichess).org|mcrypto.club|misterio.ro|insurancegold.in|coinscap.info|chefknives.expert|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @downloadURL https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js
// @updateURL https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.meta.js
// ==/UserScript==
