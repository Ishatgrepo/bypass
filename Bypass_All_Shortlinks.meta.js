// ==UserScript==
// @name       Bypass All Shortlinks Debloated
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Amm0ni4
// @noframes
// @version        93.4.11
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
// @match *://*.mixrootmods.com/*
// @match *://*.go.link4rev.site/*
// @match *://*.infinityskull.com/*
// @match *://*.sakarnewz.com/*
// @match *://*.link.linksfire.co/*
// @match *://*.dutchycorp.space/*
// @include /^(https?:\/\/)(.+)?((teachsansar|technicalatg|foodxor).com)(\/.*)/
// @match *://*.paster.gg/*
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
// @match *://*.birlink.vip/*
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
// @include /^(https?:\/\/)(.+)?(up-load.io|downloadani.me)(\/.*)/
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
// @match *://*.downloader.tips/*
// @match *://*.hitfile.net/*
// @include /^(https?:\/\/)(.+)?((thecubexguide|miuiflash).com|(djxmaza|jytechs).in)(\/.*)/
// @match *://*.filedm.com/*
// @match *://*.gogodl.com/*
// @match *://*.turbobit.net/*
// @match *://*.4shared.com/*
// @match *://*.megaurl.win/*
// @match *://*.keeplinks.org/*
// @match *://*.1short.io/*
// @match *://*.earnlink.io/*
// @match *://*.mkomsel.com/*
// @match *://*.onimports.com.br/*
// @match *://*.1shortlink.com/*
// @include /^(https?:\/\/)(.+)?(1ink.cc|cuturl.cc)(\/.*)/
// @match *://*.jameeltips.us/*
// @match *://*.post.copydev.com/*
// @match *://*.linegee.net/*
// @include /^(https?:\/\/)(.+)?(bedrat.xyz|uhtrdr47.online)(\/.*)/
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
// @include /^(https?:\/\/)(.+)?(gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online)(\/.*)/
// @match *://*.gameblog.in/*
// @match *://*.sharetext.me/*
// @include /^(https?:\/\/)(.+)?((cutnet|cutsy|cutlink).net|(cutty|exego|cety).app|gamco.online|exe-urls.com)(\/.*)/
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
// @include /^(https?:\/\/)(.+)?((aduzz|tutorialsaya|indobo|baristakesehatan|merekrut).com|deltabtc.xyz|bit4me.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptfaucet.com|izseo.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela|nutrisavors|bgmtelugucreations|soundaudioguru|howtoconcepts|agecalculatorexpert).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|(paidinsurance|gujdigital).in)(\/.*)/
// @match *://*.fansonlinehub.com/*
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics)(\/.*)/
// @include /^(https?:\/\/)(.+)?((viralxns|uploadsoon).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @include /^(https?:\/\/)(.+)?(largestpanel.in|earnme.club|usanewstoday.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(paste1s.com|note1s.com)(\/.*)/
// @match *://*.terabox.fun/*
// @match *://*.ayelads.com/*
// @match *://*.karyawan.co.id/*
// @match *://*.icerik.site/*
// @match *://*.ponselharian.com/*
// @match *://*.assettoworld.com/*
// @match *://*.adfoc.us/*
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @match *://*.oii.io/*
// @match *://*.cpu-miner.leaks.work/*
// @include /^(https?:\/\/)(.+)?(mrproblogger.com|themezon.net|travelkuku.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(forex-golds.com|forex-trnd.com)(\/.*)/
// @match *://*.1link.club/*
// @match *://*.slink.bid/*
// @match *://*.blog.yurasu.xyz/*
// @match *://*.zegtrends.com/*
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bcvc.xyz|bcvc.ink)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitcoinfaucet.fun|freebitcoin.win)(\/.*)/
// @match *://*.bestadvise4u.com/*
// @match *://*.linkspy.cc/*
// @include /^(https?:\/\/)(.+)?((webhostingpost|tophostingapp|digitalmarktrend).com)(\/.*)/
// @match *://*.4hi.in/*
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
// @include /^(https?:\/\/)(.+)?((ez4mods|tensailab|game5s|supermodsmenus).com|tech5s.co)(\/.*)/
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
// @include /^(https?:\/\/)(.+)?((tmail|labgame).io|(gamezizo|fitdynamos).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((exeo|exego).app|(falpus|exe-urls).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|gold-24.net|(offeergames|todogame).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((leaveadvice|mensventure).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(jameeltips.us|cryptonworld.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hynews.biz|chamcuuhoc.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la)(\/.*)/
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
// @include /^(https?:\/\/)(.+)?((computerpedia|techconnection).in|(myprivatejobs|advicefunda|moneymatteronline|mahikinews).com|bestloanoffer.net|bhulekhnaksha.org)(\/.*)/
// @match *://*.linkatla.com/*
// @match *://*.claimfreetrx.online/*
// @include /^(https?:\/\/)(.+)?(offers4crypto.xyz|ewall.biz)(\/.*)/
// @match *://*.dl.lk21static.xyz/*
// @match *://*.easylink.gamingwithtr.com/*
// @match *://*.cryptednews.space/*
// @include /^(https?:\/\/)(.+)?((mangareleasedate|freemodapp|zutiza|phixshop|uskloans|sabkiyojana).com|(myfirstname|ignoupur).in|sarkarisahayata.org|kisannews.net|bloxstrap.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?((remixsounds|helpdeep|thinksrace).com|uprwssp.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shrinke\.*|shrinkme\.*|(linkvhoriz|paid4link|icashfly|linkbulks).com|wordcounter.icu|pwrpa.cc|paylinks.cloud)(\/.*)/
// @match *://*.revly.click/*
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|(techacode|expertvn|ziggame).com|azmath.info|expertvn.com|aztravels.net|top10cafe.se|handydecor.com.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(theconomy.me|(askpaccosi|halosenja|sainny|wellness4live|briceka).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?((theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner|atglinks).com|happy-living.online|galaxy-link.space|oke.io|forextrader.site|tinygo.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogtechh|host2loan|techbixby|wptohost|hosttbuzz|blog-blend|blog-myst|ins-myst|blogmystt|healthmyst|wp2hostt|policiesreview).com|clk.wiki|(oko|aii).sh|clk.kim|dekhe.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techyreviewx.com|desiupload.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((calmgram|adbitfly|blogsward|coinjest).com|adbitfly.in)(\/.*)/
// @match *://*.shorterall.com/*
// @include /^(https?:\/\/)(.+)?(exactpay.online|neverdims.com|videoclip.info|sproutworkers.co|coinsfaucet.fun)(\/.*)/
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
// @include /^(https?:\/\/)(.+)?((pernahsukses|alpinecorporate).com|aoutoqw.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(altechen.com|entutes.com)(\/.*)/
// @match *://*.socialwolvez.com/*
// @include /^(https?:\/\/)(.+)?((mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online)(\/.*)/
// @match *://*.bitcotasks.com/*
// @match *://*.suaurl.com/*
// @match *://*.letsboost.net/*
// @include /^(https?:\/\/)(.+)?((hookeaudio|pennbookcenter|publicananker|fun88bk).com|fun88.info.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmiz|snaplessons).net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(slinkware.com|aghtas.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(link.goto.com.np|(appkamods|bankvacency|otomi-games).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((homeculina|ionclub777|ineedskin|auntmanny|businessuniqueidea|plumptofit|cookingpumpkin|elishea|audioinspects|celebperson|dreamhomelabs|fishingbreeze|unhearduniversity).com|(financewrapper|recipes4all|solidcoins).net|(aayurvedshastra|allnewspoint).in|chefslink.org|lawyex.co|mdn.lol)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tradeshowrating|historyofyesterday|insurelean).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(playonpc.online|quins.us|retrotechreborn.com)(\/.*)/
// @match *://*.shortit.pw/*
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vikashmewada.com|videoslyrics.com|crazysonglyrics.com|videolyrics.in|newsharsh.com|trxking.xyz|crazyblog.in|getdashcoin.io)(\/.*)/
// @match *://*.ify.ac/*
// @match *://*.lanza.me/*
// @match *://*.lifeezee.com/*
// @match *://*.lolinez.com/*
// @match *://*.file-upload.in/*
// @match *://*.linksly.co/*
// @match *://*.appsinsta.com/*
// @match *://*.apkadmin.com/*
// @match *://*.sugarona.com/*
// @match *://*.cekip.site/*
// @match *://*.techleets.xyz/*
// @match *://*.amanguides.com/*
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
// @include /^(https?:\/\/)(.+)?(bluemedialink.online|bluemediafile\.*)/
// @match *://*.boost.ink/*
// @match *://*.blog.textpage.xyz/*
// @match *://*.foodupe.com/*
// @include /^(https?:\/\/)(.+)?((cricketgurupro|travelkuku).com)(\/.*)/
// @match *://*.freethailottery.live/*
// @match *://*.udrop.com/*
// @match *://*.mirrored.to/*
// @match *://*.sub2unlock.net/*
// @include /^(https?:\/\/)(.+)?((starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides|edukaroo).com|(iisfvirtual|bookszone|learnmany).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods|pastescript|trimorspacks|mealcold).com|updrop.link)(\/.*)/
// @match *://*.mboost.me/*
// @include /^(https?:\/\/)(.+)?((disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo|adcrypto|daycash).net|(sportweb|ecq|mgame|oncoin).info|savego.org|hbz.us|(djqunjab|alpha-links).in|datacheap.io)(\/.*)/
// @include /^(https?:\/\/)(.+)?(videoclip.info|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz)(\/.*)/
// @match *://*.aiimgvlog.fun/*
// @include /^(https?:\/\/)(.+)?(dutchycorp.space|dutchycorp.ovh|seulink.digital|oii.io|hamody.pro|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|tfly.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|youshort).net|(s2fly|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks|wdu).info|(shrink|flyzu).icu|(24payu|vielink).top|(terafly|hatelink|zumpa|tlin|weezo|adnews|linkdam|ar-goal).me|(jameeltips|mitly|finish.wlink).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(shrinkme|tfly).link|(playstore|adsy|clik).pw|short.express|cryptosh.pro|goo.st|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|addurl.biz)(\/.*)/
// @match *://*.autofaucet.dutchycorp.space/*
// @match *://*.gocmod.com/*
// @match *://*.writedroid.in/*
// @match *://*.web1s.com/*
// @match *://*.modmania.eu.org/*
// @match *://*.diglies.com/*
// @match *://*.ruwet.us/*
// @match *://*.autodime.com/*
// @match *://*.techstudify.com/*
// @match *://*.zubatecno.com/*
// @match *://*.1apple.xyz/*
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
// @match *://*.indirasari.com/*
// @match *://*.wikitraveltips.com/*
// @match *://*.smallinfo.in/*
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
// @match *://*.earn.hostadviser.net/*
// @match *://*.kelasadsense.com/*
// @match *://*.viralsinfo.com/*
// @match *://*.www.filmypoints.in/*
// @match *://*.cafe.warrenrahul.in/*
// @match *://*.techurlshort.in/*
// @match *://*.onlinerecruiters.in/*
// @match *://*.battleroyal.online/*
// @match *://*.rajdhanimaja.com/*
// @include /^(https?:\/\/)(.+)?(apasih.my.id|healthydad.my.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?((gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((webbooki|webwooks|pranarevitalize|economyeye|techhubcap|surfsees).com|castlemodapk.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nguyenvanbao.com|nghiencar.com)(\/.*)/
// @match *://*.mohtawaa.com/*
// @include /^(https?:\/\/)(.+)?(mdn.lol|kenzo-flowertag.com|homeculina.com|ineedskin.com|lawyex.co|chefslink.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vailonxx.com|fun88.bio)(\/.*)/
// @match *://*.multiup.org/*
// @match *://*.modsfire.com/*
// @match *://*.snipn.cc/*
// @match *://*.social-unlock.com/*
// @match *://*.nft.blogyindia.com/*
// @match *://*.my.dropz.xyz/*
// @match *://*.go.blogyindia.com/*
// @match *://*.patak.dropz.xyz/*
// @match *://*.blogyindia.com/*
// @match *://*.sub2unlock.com/*
// @match *://*.crypto.webseriesreel.in/*
// @match *://*.uii.io/*
// @match *://*.shortano.link/*
// @match *://*.shortino.link/*
// @match *://*.clk.st/*
// @match *://*.clks.pro/*
// @match *://*.chainfo.xyz/*
// @match *://*.clicksfly.com/*
// @match *://*.tryshort.in/*
// @match *://*.dailytime.store/*
// @match *://*.ez4short.com/*
// @match *://*.fc.lc/*
// @match *://*.cutp.in/*
// @match *://*.saly.io/*
// @match *://*.earnow.online/*
// @match *://*.exe.io/*
// @match *://*.gplinks.in/*
// @match *://*.linkfly.me/*
// @match *://*.linksfire.co/*
// @match *://*.adlink.click/*
// @match *://*.linkjust.com/*
// @match *://*.linkbulks.com/*
// @match *://*.traffic1s.com/*
// @match *://*.link4rev.site/*
// @match *://*.linkrex.net/*
// @match *://*.opli.xyz/*
// @match *://*.linksly.co/*
// @match *://*.ninjaurl.net/*
// @match *://*.shortyearn.com/*
// @match *://*.upshrink.com/*
// @match *://*.tr.link/*
// @match *://*.megaurl.in/*
// @match *://*.adshort.co/*
// @match *://*.atglinks.com/*
// @match *://*.shrinkforearn.in/*
// @match *://*.shorti.io/*
// @match *://*.try2link.com/*
// @match *://*.terafly.me/*
// @match *://*.www.wts.pw/*
// @match *://*.clk.sh/*
// @match *://*.web1s.com/*
// @match *://*.rocklinks.net/*
// @match *://*.megafly.in/*
// @match *://*.usalink.io/*
// @match *://*.10short.com/*
// @match *://*.urlpay.in/*
// @match *://*.mdiskshortner.link/*
// @match *://*.cbshort.com/*
// @match *://*.droplink.co/*
// @match *://*.adpaylink.com/*
// @match *://*.paid4link.com/*
// @match *://*.cuty.io/*
// @match *://*.doshrink.com/*
// @match *://*.revly.click/*
// @match *://*.shorterall.com/*
// @match *://*.shrinkearn.com/*
// @match *://*.shrinkme.io/*
// @match *://*.shortox.com/*
// @match *://*.linksfly.link/*
// @match *://*.oii.io/*
// @match *://*.ay.live/*
// @match *://*.urlstox.com/*
// @match *://*.gamerfang.in/*
// @match *://*.blog.mphealth.online/*
// @match *://*.mphealth.online/*
// @match *://*.shrs.link/*
// @match *://*.shareus.io/*
// @match *://*.www.gifans.com/*
// @match *://*.www.pythondunyasi.com/*
// @match *://*.free4u.nurul-huda.or.id/*
// @match *://*.rotator.nurul-huda.sch.id/*
// @match *://*.jrlinks.in/*
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
// @match        https://acortalink.me/*
// @match         https://bleleadersto.com/s?*
// @match         https://tonordersitye.com/s?*
// @match         https://daughablelea.com/s?*
// @match         https://linkvertise.com/*
// @match        https://bypass.city/bypass?bypass=*
// @match        https://adbypass.org/bypass?bypass=*
// @match       https://fc-lc.xyz/*
// @match       *://*.ukrupdate.com/*
// @match       *://*.aryx.xyz/*
// @match        https://paster.so/*
// @include       /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
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
// @include     /exeo.app|mrgec.com|cety.app|cuty.me/
// @include     /1v.to\/t/
// @include     /linkspy.cc\/tr/
// @include     /linkspy.cc\/\/a/
// @include     /www.ovagames.com\/.*\.html$/
// @include     /((infytips|remixodiadj).in|(cybertyrant|profitshort|technorozen|hubdrive.me|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike|caronwhaley|maxxfour|thewizitale|inventoryidea|gamerxyt|betsatta).com|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz|nzarticles.pro|blog.offerboom.top|kvkparbhani.org|kk.offerboom.top)/
// @include     /dropgalaxy.(com|co)\/drive/
// @include     /short-ly.co/
// @include     /uqozy.com|posterify.net|drinkspartner.com|manishclasses.in|boiscd.com/
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
// @include     /empebau.eu\/s/
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
// @include     /dekhe.click|indianshortner.com|lnbz.la|oii.la|falpus.com|tii.la|oko.sh|tpi.li|shrinke.me|clk.(wiki|kim)|techy.veganab.co|atglinks.com|linx.cc|get.megaurl.in|wordcounter.icu|exeo.app|pwrpa.cc|(go|get).megafly.in|birdurls.com|blog.graphicuv.com|try2link.com|owllink.net|oei.la|exego.app|link.theflash.eu.org|get.instantearn.in|mrproblogger.com|exe-urls.com/
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
// @include     /tumangasdd.com/
// @include     /sexyforums.com\/redirect/
// @include     /forum.(sexyegirls|sorrymother).to\/redirect\?to=/
// @include     /paste.japan-paw.net\/\?v=/
// @include     /pastesmkv.xyz\/\?v=/
// @include     /ikramlar.online|segurosdevida.site/
// @include     /mh.gourlpro.com/
// @include     /playpastelinks.com/
// @include     /stfly.(cc|xyz|biz|me)|stly.link|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmize|snaplessons|airevue).net/
// @include     /ielts-isa.edu.vn/
// @include     /flash.getpczone.com/
// @include     /surfsees.com|fitnessholic.net/
// @include     /cgsonglyricz.in|www.techhubcap.com/
// @include     /techyblogs.in|readytechflip.com/
// @include     /wp2host.com/
// @include     /pahe.win/
// @include     /ontechhindi.com/
// @include     /thelatintwistcafe.com/
// @include     /newshuta.in|indiamaja.com|thespotifypremium.com/
// @include     /jytechs.in|mi.miuiflash.com|hypershort.com|djxmaza.in|thecubexguide.com/
// @include     /mayas.travel|eldiario24hrs.com|comomedir.com|aplicacionpara.org/
// @include     /animesgd.net/
// @include     /tucinehd.com\/links/
// @include     /render-state.to\/download\/\?link=/
// @include     /www.lanoticia.cc/
// @include     /altearnativasa.com/
// @include     /importantclass.com/
// @include     /bebkub.com/
// @include     /owoanime.com/
// @include     /secure.moderngyan.com/
// @include     /earnbox.sattakingcharts.in/
// @include     /set.seturl.in/
// @include     /links.kmhd.net\/file/
// @include     /mastramstories.com\/api.php\?api/
// @include     /onlinetntextbooks.com/
// @include     /www.saferoms.com\/\?go=/
// @include     /hdpastes.com\/\?v=/
// @include     /shrinkforearn.in/
// @include     /encurtads.net|financacerta.com/
// @include     /shrtbr.com/
// @include     /dramaday.me\/[^\/]+\/$/
// @include     /^https:\/\/(fitdynamos.com|labgame.io)\/.*$/
// @include     /mobilenagari.com|defencewallah.in/
// @include     /(bgmiupdatehub|novelquote|superheromaniac|jkssbalerts|taazaloans|spatsify|sikhehindime).com|(sabarpratham|pubprofit|sarkariyojnaa).in|dear-lottery.org/
// @include     /rocklinks.in/
// @include     /www.udlinks.com/
// @include     /techkhulasha.com|blog.bloggerishyt.in/
// @include     /golink.bloggerishyt.in/
// @include     /skillheadlines.in/
// @include     /psccapk.in|secure.bgmiupdate.com.in|money.hustlershub.in|rg.sattakingcharts.in|payalgaming.co.in/
// @include     /www.spaste.com/
// @include     /click.convertkit-mail.com/
// @include     /hubcloud.club\/tg\/go.php\?re=/
// @include     /stockwallah.com/
// @include     /^https:\/\/relampagomovies\.com\/.+/
// @include     /(shramikcard|pmkisanlists|techishant|cinedesi|thevouz).in|cookad.net|tejtime24.com/
// @include     /tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/
// @include     /^https:\/\/[^\/]+\/safe\.php\?link=https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/
// @include     /^https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/
// @include     /delpez.com/
// @include     /mendationforc.info/
// @include     /paster.gg/
// @include     /go.zovo.ink/
// @include     /^https:\/\/kisalt\.com\/.*/
// @include      /filecrypt.(cc|co)/
// @include     /(mega-enlace|acortados).com/
// @include     /^https:\/\/.*\.((tradeshowrating|historyofyesterday|insurelean).com|playonpc.online|quins.us)\/.*/
// @include /^(https?:\/\/)(.+)?((actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix).com|(makego|sakazi|momge|englishgrammarpro).net|askerlikforum.com.tr|misterio.ro|(forp|bevery).xyz|gamcabd.org|gamerking.shop)(\/.*)/
// @exclude /^(https?:\/\/)(.+)?((advertisingexcel|talkforfitness|rsadnetworkinfo|rsinsuranceinfo|rsfinanceinfo|rssoftwareinfo|rshostinginfo|rseducationinfo|gametechreviewer|vegan4k|phineypet|batmanfactor|techedifier|urlhives|linkhives|gsshort|substitutefor|github|freeoseocheck|greenenez|aliyun|reddit|bing|yahoo|wiki-topia|edonmanor|vrtier|whatsapp|gearsadviser|edonmanor|tunebug|menrealitycalc|amazon|ebay|payoneer|paypal|skrill|stripe|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|accounts.youtube|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet).google|(login|signup|account|officeapps|api|mail|hotmail).live|basketballsavvy|healthyfollicles|hauntingrealm|pluginmixer|boredboard|boardgamechick|healthyfollicles|atlassian|pinterest|twitter|facebook|tiktok|instagram|linkedin|fastbull|tradingview).com|(coinsvalue|cookinguide|cryptowidgets|webfreetools|carstopia|makeupguide|carsmania|doubleclick|luckydice).net|(linksfly|shortsfly|urlsfly|wefly|blog24).me|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|insurancegold.in|coinscap.info|chefknives.expert|(sleeptube|englishwritingsite|documentaryplanet|gsgames).xyz|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @downloadURL https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js
// @updateURL https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.meta.js
// ==/UserScript==
