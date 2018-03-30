// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportVariables = exportVariables;
var $trackList = document.getElementById('track-list');

var date = [{ id: 1, title: 'Styl sportowy', time: '2:52' }, { id: 2, title: 'Macki meduzy', time: '3:04' }, { id: 3, title: 'V8', time: '2:49' }, { id: 4, title: 'Miedzynarodowa #1', time: '0:37' }, { id: 5, title: 'Lody włoskie', time: '3:06' }, { id: 6, title: 'Gry losowe', time: '1:32' }, { id: 7, title: 'Międzynarodowa #2', time: '0:22' }, { id: 8, title: 'Na audiencji', time: '3:33' }, { id: 9, title: 'Fair play', time: '3:24' }, { id: 10, title: 'Rewia', time: '3:37' }, { id: 11, title: 'Krajowa #1', time: '0:24' }, { id: 12, title: 'Gramażeria', time: '1:54' }, { id: 13, title: 'Flary', time: '3:31' }, { id: 14, title: 'Kluby i restauracje', time: '1:09' }, { id: 15, title: 'Puerto Rico', time: '1:50' }, { id: 16, title: 'Międzynarodowa #3', time: '0:23' }, { id: 17, title: 'Hazard', time: '2:38' }, { id: 18, title: 'Międzynarodowa #4', time: '0:51' }, { id: 19, title: 'Magnolie', time: '3:05' }, { id: 20, title: 'Międzynarodowa #5', time: '0:23' }, { id: 21, title: 'Golden', time: '3:41' }, { id: 22, title: 'Iskry', time: '2:24' }, { id: 23, title: 'Vanitas', time: '3:28' }, { id: 24, title: 'Krajowa #2', time: '0:41' }, { id: 25, title: 'Półsny', time: '2:01' }, { id: 26, title: 'Sick boy', time: '1:38' }, { id: 27, title: 'Byłem tam', time: '' }];

var dateLength = date.length;

var $trackTitle = document.querySelector('#track-title');
var $time = '';

function showTrackList() {
  var dateLength = date.length;

  for (var i = 0; i < dateLength; i++) {

    var el_li = document.createElement("li");

    el_li.id = "li" + i;
    el_li.classList.add("list-item");
    el_li.innerText = '[ ' + date[i].id + ' ] ' + date[i].title;
    el_li.setAttribute("title", date[i].id + ' | ' + date[i].title);

    var el_span = document.createElement("span");

    el_span.classList.add("track-time");
    el_span.innerText = ' ' + date[i].time;

    $trackList.appendChild(el_li);
    document.getElementById('li' + i).appendChild(el_span);
  }
}

showTrackList(date);

///////////////////////////////////////////////////////////////////
/////////////////////                      ///////////////////////
///////////////////      choicing track      ////////////////////
////////////////////                       /////////////////////
///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

var $songTime = document.querySelector('#track-time');

var qq = document.querySelector('#li' + '0').textContent.charAt(2) + document.querySelector('#li' + '0').textContent.charAt(3); // catch info about number of li in list

var currentSong = 'default';

$trackList.addEventListener('click', function () {
  var liTarget = event.target.id; //show us which track was clicked, showing us id of the clicked element

  //after click must show us the lirycs of the song
  console.log(liTarget);

  //document.querySelector('#' + liTarget).style.color = 'red';

  //switch case, for tracklist menu 
  switch (liTarget) {
    case 'li0':
      console.log('you clicked "styl sportowy"' + liTarget);

      currentSong = 'styl_sportowy'; //set value how song is currently showing
      //values in variable currentSong must be the same as the name tab[] in track_list for example: currentSong = 'miedzynarodowa_1'; and tab with lirycs must have the same name: const miedzynarodowa_1 = [{}];
      $trackTitle.innerText = date[0].title;
      $songTime.innerText = date[0].time;
      break;

    case 'li1':
      console.log('you clicked ' + liTarget);
      currentSong = 'macki_meduzy';
      $trackTitle.innerText = date[1].title;
      $songTime.innerText = date[1].time;
      break;

    case 'li2':
      console.log('you clicked ' + liTarget);
      currentSong = 'v8';
      $trackTitle.innerText = date[2].title;
      $songTime.innerText = date[2].time;
      break;

    case 'li3':
      console.log('you clicked ' + liTarget);
      currentSong = 'miedzynarodowa_1';
      $trackTitle.innerText = date[3].title;
      $songTime.innerText = date[3].time;
      break;

    case 'li4':
      console.log('you clicked ' + liTarget);
      currentSong = 'lody_wloskie';
      $trackTitle.innerText = date[4].title;
      $songTime.innerText = date[4].time;
      break;

    case 'li5':
      console.log('you clicked ' + liTarget);
      currentSong = 'gry_losowe';
      $trackTitle.innerText = date[5].title;
      $songTime.innerText = date[5].time;
      break;

    case 'li6':
      console.log('you clicked ' + liTarget);
      currentSong = 'miedzynarodowa_2';
      $trackTitle.innerText = date[6].title;
      $songTime.innerText = date[6].time;
      break;

    case 'li7':
      console.log('you clicked ' + liTarget);
      currentSong = 'na_audiencji';
      $trackTitle.innerText = date[7].title;
      $songTime.innerText = date[7].time;
      break;

    case 'li8':
      console.log('you clicked ' + liTarget);
      currentSong = 'fair_play';
      $trackTitle.innerText = date[8].title;
      $songTime.innerText = date[8].time;
      break;

    case 'li9':
      console.log('you clicked ' + liTarget);
      currentSong = 'rewia';
      $trackTitle.innerText = date[9].title;
      $songTime.innerText = date[9].time;
      break;

    case 'li10':
      console.log('you clicked ' + liTarget);
      currentSong = 'krajowa_1';
      $trackTitle.innerText = date[10].title;
      $songTime.innerText = date[10].time;
      break;

    case 'li11':
      console.log('you clicked ' + liTarget);
      currentSong = 'gramazeria';
      $trackTitle.innerText = date[11].title;
      $songTime.innerText = date[11].time;
      break;

    case 'li12':
      console.log('you clicked ' + liTarget);
      currentSong = 'flary';
      $trackTitle.innerText = date[12].title;
      $songTime.innerText = date[12].time;
      break;

    case 'li13':
      console.log('you clicked ' + liTarget);
      currentSong = 'kluby_i_restauracje';
      $trackTitle.innerText = date[13].title;
      $songTime.innerText = date[13].time;
      break;

    case 'li14':
      console.log('you clicked ' + liTarget);
      currentSong = 'puerto_rico';
      $trackTitle.innerText = date[14].title;
      $songTime.innerText = date[14].time;
      break;

    case 'li15':
      console.log('you clicked ' + liTarget);
      currentSong = 'miedzynarodowa_3';
      $trackTitle.innerText = date[15].title;
      $songTime.innerText = date[15].time;
      break;

    case 'li16':
      console.log('you clicked ' + liTarget);
      currentSong = 'hazard';
      $trackTitle.innerText = date[16].title;
      $songTime.innerText = date[16].time;
      break;

    case 'li17':
      console.log('you clicked ' + liTarget);
      currentSong = 'miedzynarodowa_4';
      $trackTitle.innerText = date[17].title;
      $songTime.innerText = date[17].time;
      break;

    case 'li18':
      console.log('you clicked ' + liTarget);
      currentSong = 'magnolie';
      $trackTitle.innerText = date[18].title;
      $songTime.innerText = date[18].time;
      break;

    case 'li19':
      console.log('you clicked ' + liTarget);
      currentSong = 'miedzynarodowa_5';
      $trackTitle.innerText = date[19].title;
      $songTime.innerText = date[19].time;
      break;

    case 'li20':
      console.log('you clicked ' + liTarget);
      currentSong = 'golden';
      $trackTitle.innerText = date[20].title;
      $songTime.innerText = date[20].time;
      break;

    case 'li21':
      console.log('you clicked ' + liTarget);
      currentSong = 'iskry';
      $trackTitle.innerText = date[21].title;
      $songTime.innerText = date[21].time;
      break;

    case 'li22':
      console.log('you clicked ' + liTarget);
      currentSong = 'vanitas';
      $trackTitle.innerText = date[22].title;
      $songTime.innerText = date[22].time;
      break;

    case 'li23':
      console.log('you clicked ' + liTarget);
      currentSong = 'krajowa_2';
      $trackTitle.innerText = date[23].title;
      $songTime.innerText = date[23].time;
      break;

    case 'li24':
      console.log('you clicked ' + liTarget);
      currentSong = 'polsny';
      $trackTitle.innerText = date[24].title;
      $songTime.innerText = date[24].time;
      break;

    case 'li25':
      console.log('you clicked ' + liTarget);
      currentSong = 'sick_boy';
      $trackTitle.innerText = date[25].title;
      $songTime.innerText = date[25].time;
      break;

    case 'li26':
      console.log('you clicked ' + liTarget);
      currentSong = 'bylem_tam';
      $trackTitle.innerText = date[26].title;
      $songTime.innerText = date[26].time;
      break;
  }
});

/////////////////////////////
////  funny console clokc ///
////////////////////////////
// let hour = 0;
// let min = 0;
// let sec = 0;

// setInterval(function(){
//   sec ++;
//   if (sec === 60){
//     sec = 0;
//     min ++;
//   } else if (min === 60 ){
//     min = 0;
//     hour ++;
//   }
//   console.log(hour + ' | ' + min + ' | ' + sec );
// }, 10);


function exportVariables() {
  return currentSong;
}
},{}],10:[function(require,module,exports) {
'use strict';

var _track_list = require('./track_list');

//************************************************************************************************************************************************************************************************************ */
//* every tab for the specyfic song lirycs have to have link with this on the youtube 
//************************************************************************************************************************************************************************************************************ */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////                 L                  //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////               Y                ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////             R              //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////           I            ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////         C          //////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////       S       /////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////// S T Y L _ S P O R T O W Y  /////////////////////////////////////////////////

var styl_sportowy = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Mia\u0142em \u017Cycie ale nie mam, mia\u0142em w g\u0142owie spowied\u017A, tak\u017Ce nie mam\n        Mia\u0142em \u017C\u0105dze, par\u0119 spojrze\u0144 mord pchaj\u0105cych mnie do d\u0105\u017Ce\u0144, \u017Cadnej nie mam\n        Mia\u0142em rzeczy do zrobienia, par\u0119 spraw do zarzucenia sobie dalej miewam\n        Mia\u0142em tobie co\u015B powiedzie\u0107, ale nie mam\n        Bo cz\u0142owieka na kt\xF3rym polega\u0107 mog\u0142em nagle nie znam\n        Mia\u0142em skrawek sumienia, my\u015Bla\u0142em, \u017Ce mam ich, a tylko zna\u0142em imienia\n        Mia\u0142em sw\xF3j stres, sw\xF3j gniew, chwa\u0142\u0119, cierpienia\n        Warto\u015Bci si\u0119 jak olej w aucie wymienia'
}, {
    type: 'chours',
    index: 2,
    text: '[Oskar] <br />\n        Widz\u0119 lepiej kiedy s\u0142o\u0144ce zasz\u0142o za horyzont\n        Robi\u0119 rzeczy, kt\xF3re mnie tak bardzo, bardzo brzydz\u0105\n        Daj mi co\u015B, ja przepierdol\u0119 \u0142atwo ka\u017Cd\u0105 ilo\u015B\u0107\n        Dzi\u015B mam tylko j\u0105 i jej cierpliwo\u015B\u0107\n        I wiem p\xF3ki tu stoj\u0119, \u017Ce to nie, jeszcze nie koniec\n        A spi\u0119cie puszcza me d\u0142onie, a na gleb\u0119 lec\u0105 naboje\n        I ledwo muskam jej skronie, my\u015Bli jej goni\u0105 te moje\n        Brudna krew, brudne magnolie\n        G\u0119sty tlen dusi oboje'
}, {
    type: 'verse',
    index: 3,
    text: 'Mia\u0142em sny i nie mam, mia\u0142em pasj\u0119, mia\u0142em, jednak nie mam\n        Mia\u0142em swe marzenia, mia\u0142em rany, mia\u0142em plany\n        Chore stany, dzi\u015B ich nie pami\u0119tam niemal\n        Mia\u0142em cz\u0142owiecze\u0144stwa przejaw, mia\u0142em dar\n        Mia\u0142em fart nic teraz niewart\n        Mia\u0142em si\u0142\u0119, mia\u0142em tajemnic\u0119 i zw\u0105tpienia\n        Dzi\u015B przed gadk\u0105 z samym sob\u0105 stwierdzam - jeba\u0107\n        Mia\u0142em my\u015Bli, czas by je pozbiera\u0107\n        Mia\u0142em pustk\u0119, j\u0105 wype\u0142nia\u0142y wspomnienia\n        Widz\u0119 w lustrze refleks mojej twarzy, to nie ja\n        To co mia\u0142em w\u0142a\u015Bnie si\u0119 sma\u017Cy w p\u0142omieniach'
}, {
    type: 'chours',
    index: 4,
    text: '[Oskar] <br />\n        Widz\u0119 lepiej kiedy s\u0142o\u0144ce zasz\u0142o za horyzont\n        Robi\u0119 rzeczy, kt\xF3re mnie tak bardzo, bardzo brzydz\u0105\n        Daj mi co\u015B, ja przepierdol\u0119 \u0142atwo ka\u017Cd\u0105 ilo\u015B\u0107\n        Dzi\u015B mam tylko j\u0105 i jej cierpliwo\u015B\u0107\n        I wiem p\xF3ki tu stoj\u0119, \u017Ce to nie, jeszcze nie koniec\n        A spi\u0119cie puszcza me d\u0142onie, a na gleb\u0119 lec\u0105 naboje\n        I ledwo muskam jej skronie, my\u015Bli jej goni\u0105 te moje\n        Brudna krew, brudne magnolie\n        G\u0119sty tlen dusi oboje'
}, {
    src: 'https://www.youtube.com/embed/d4GKd5asrBc?rel=0'
}];

///////////////////////////////////////////////// M A C K I _ M E D U Z Y /////////////////////////////////////////////////

var macki_meduzy = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Zamknij oczy i uwierz mi, zapij to w\xF3d\u0105 i le\u0107my\n        Ten miks nie jest bezpieczny, ale pigu\u0142a jest dzi\u015B nieobecny\n        Krwi nie wida\u0107 na powierzchni, wi\u0119c i tak chuj z jego interwencji\n        Z ni\u0105 i z zapa\u0142kami jest jak z dzie\u0107mi\n        Spalmy miasto, pojar\u0119 zamie\u0107my\n        Typy wzywaj\u0105 posi\u0142ki, ona t\u0142ucze butle poni\u017Cej szyjki\n        Ksi\u0119\u017Cyc, wyjemy jak wilki, stoj\u0105 jak pizdy po odbi\xF3r przesy\u0142ki\n        Ich trzymamy za \u0142by jak pacynki, ona trzyma lini\u0119, bo je pastylki\n        G\u0142owy lec\u0105 od linijki, ale jest s\u0142odko, bo jemy muffinki\n        Opory wysch\u0142y, jej chore pomys\u0142y\n        Widz\u0119 j\u0105 w ciszy, w czarnym obcis\u0142ym\n        Straci\u0142bym zmys\u0142y, ale nie czas na namys\u0142y\n        Z\u0142udzenia dawno prys\u0142y, sumienia dawno zawis\u0142y, tam\n        Zabij go, zabij, ta, jak krwawi to krwawi\n        Strach j\u0105 bawi, to bawi, wal, gouda, to i dragi\n        Nam to barwy jaskrawi, patrz s\u0142abi odpadli\n        Raz b\u0119dzie co ma by\u0107 ona mnie jednocze\u015Bnie pali i pali, wabi i wabi'
}, {
    type: 'chours',
    index: 2,
    text: '[Oskar] <br />\n        Ona szepcze mi do ucha, a jej szapcze diabe\u0142\n        Jest jak nad miastem koszmar, kt\xF3ry musi wreszcie nadej\u015B\u0107\n        By\u0142em z\u0142y, z ni\u0105 jestem jeszcze bardziej\n        Chc\u0119 jej nagiej, albo ona, albo nie chc\u0119 \u017Cadnej'
}, {
    type: 'verse',
    index: 3,
    text: '[Oskar] <br />\n        Polubi\u0142em troch\u0119 b\xF3l, najpierw troch\u0119, potem full\n        Do przera\u017Cenia doszed\u0142 b\xF3l, gdy zamieniamy twoj\u0105 flot\u0119 w null\n        Wchodzimy w ten t\u0142um, t\u0142um, t\u0142um, walimy ten rum, rum, rum\n        Ich nerwowy, szum, szum, szum, wychodzimy i bum\n        Ona nie ma przyjaci\xF3\u0142ek, ma fanki, ale ma w trupie czaszki pi\u017Camki\n        Chcia\u0142em jej nala\u0107 do miarki, ale wy\u015Bmia\u0142a i przela\u0142a do szklanki\n        Panna pokaza\u0142a ci majtki, ona mi po co naprawd\u0119 s\u0105 kajdanki\n        Dobrze, \u017Ce mam twarde nadgarski, gorzej znosz\u0105 to jej kole\u017Canki\n        Po prawej diabe\u0142, po lewej szaber, podajesz \u017Ce spa\u0142e\u015B, polej se kaw\u0119\n        Odmawiasz r\xF3\u017Caniec, czy dukasz alfabet?\n        Straci\u0142e\u015B w\u0142adz\u0119, robisz co ona ka\u017Ce\n        Piszesz co\u015B w e-dur, co, to jaki\u015B rebus? No\n        Czerwie\u0144 na \u015Bniegu, to jest wynik gniewu\n        Zamierasz w biegu, blok to macki meduz\n        Stop, dobra dobremu, a z\u0142a jest tu z\u0142emu\n        I w sumie to chuj mnie obchodzi ju\u017C czemu'
}, {
    src: 'https://www.youtube.com/embed/euqTBWHl1N8?rel=0'

}];

///////////////////////////////////////////////// V8 /////////////////////////////////////////////////

var v8 = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Na butli nie ma banderoli, grudy nie ma tam na dnie folii\n        Ona t\u0142ustych bardziej woli, potem kluby, najpierw molly\n        S\u0105 patrole, jest Yanosik, nie przyswajasz tych ilo\u015Bci\n        Na ulicach Eskimosi, rzygasz? To ponad twoje mo\u017Cliwo\u015Bci\n        Wyb\xF3r jak na Ceneo, sporo typ\xF3w, WWA, Mondeo\n        Co jest? Lekko spi\u0119\u0142o? Nie grzej, jaki\u015B testosteron\n        \u017B\xF3\u0142te daj\u0105 jak stroboskopy, u\u015Bmiech kurwa, robi\u0105 foty\n        Nie ma torby, to s\u0105 fochy, m\xF3wi\u0142em ju\u017C, s\u0105 mordo grochy\n        '
}, {
    type: 'chours',
    index: 2,
    text: '[Oskar i Steez] x2 <br />\n        Linia szybka, bo powoli mi odbija palma\n        Ona jak wida\u0107 fajna, z twarzy jak Jessica Alba\n        Kto\u015B poszed\u0142 w cug, do kogo\u015B wraca d\u0142ug, do kogo\u015B karma\n        Skrajny pas, dusz\u0119 gaz, nie s\u0142ucham mordo ballad'
}, {
    type: 'verse',
    index: 3,
    text: '[Oskar] <br />\n        Pitstop, by zala\u0107 na stacji Vervy\n        Typ pyta "p\xF3\u0142 la\u0107, czy pe\u0142ny"?\n        Ej, zjad\u0142 mi nerwy\n        Ty, mo\u017Ce id\u017A se zam\xF3w p\xF3\u0142 szklanki herby\n        Pierwsza w nocy, ja po obiedzie\n        Tak si\u0119 szamie, mordo w mie\u015Bcie\n        Sw\u0119dzi ci\u0119 nos, to w mi\u0119sie\u0144\n        Robi\u0105 ca\u0142y rok na \u015Brodkow\u0105 kiesze\u0144\n        Mijam jedn\u0105 i jest flexy\n        Obok sze\u015Bciu typa gnije w nexii\n        Na banerze wy\u017Cej Messi\n        S\u0142ucham transu, pij\u0119 Pepsi\n        \u0141atwo si\u0119 floty pozby\u0107\n        S\u0105dy, loty, squaty, pozwy\n        Przydymione wloty nozdrzy\n        But i pierdolony rozb\u0142ysk'
}, {
    type: 'chours',
    index: 4,
    text: '[Oskar i Steez] x2 <br />\n        Linia szybka, bo powoli mi odbija palma\n        Ona jak wida\u0107 fajna, z twarzy jak Jessica Alba\n        Kto\u015B poszed\u0142 w cug, do kogo\u015B wraca d\u0142ug, do kogo\u015B karma\n        Skrajny pas, dusz\u0119 gaz, nie s\u0142ucham mordo ballad'
}, {
    src: 'https://www.youtube.com/embed/Y9jZXrckXyY?rel=0'
}];

///////////////////////////////////////////////// M I E D Z Y N A R O D O W A #1 /////////////////////////////////////////////////

var miedzynarodowa_1 = [{
    type: 'verse',
    index: 1,
    text: '[Steez] <br />\n        No siemasz, siemasz, dobrze, \u017Ce oddzwaniasz. Poczekaj, \n        tylko se s\u0142uchawki wrzuc\u0119. No, jest git, co tam, jak tam? O kurwa, \n        tutaj jest z dwadzie\u015Bcia stopni. Dobra, ty, ale nie o tym. \n        Ka\u015Bka do mnie dzwoni\u0142a przed chwil\u0105. Co? No, nie wiem sk\u0105d mia\u0142a, \n        ja jej nie da\u0142em, nie. A sportowego na chacie nie zostawi\u0142e\u015B? A, \n        no to chyba jednak zna\u0142a has\u0142o, albo jakie\u015B lepsze fotostory z Anet\u0105 namierzy\u0142a. \n        Afera na bogato si\u0119 szykuje jak wr\xF3cisz. No, m\xF3wi\u0119 ci, kurwa, dar\u0142a si\u0119 do s\u0142uchawki. \n        No, wiem ziomu\u015B, u mnie noc si\u0119 zaczyna, ale wiesz, chcia\u0142em ci\u0119 uprzedzi\u0107'
}, {
    src: '' //brak
}];

///////////////////////////////////////////////// L O D Y  W Ł O S K I E  /////////////////////////////////////////////////

var lody_wloskie = [{
    type: 'chours',
    index: 1,
    text: '[Oskar] <br />\n        Jest czas, nie ma hajsu, jem ry\u017C po tajsku jest kac\n        Nie ma blant\xF3w, marlboro light\xF3w, jest kwas\n        Po ostatnim zaj\u015Bciu zamiast romansu jest jej p\u0142aszcz\n        '
}, {
    type: 'verse',
    index: 2,
    text: '[Oskar] <br />\n        Trzask i wybieg\u0142a, a by\u0142 to czwartek, \u015Brodek zimy\n        Troch\u0119 chujowo wysz\u0142o, bo mia\u0142a w \u015Brod\u0119 imieniny\n        S\u0142o\u0144ce, raz zdarzy\u0142o si\u0119 ma\u0142y, raz jeden jedyny\n        No, nie r\xF3bmy rutyny, bo jestem niewinny, oo\n        Co ja zrobi\u0142em? Jak\u0105 dziewczyn\u0119?\n        Patrzy\u0142em chwil\u0119, co, nie na ty\u0142ek\n        Gdzie\u015B zadzwoni\u0142em, do jakiej by\u0142ej?\n        B\u0119d\u0105c pod kinem, wzi\u0105\u0142em ci bilet\n        Ja jestem bydle? Col\u0119 wypi\u0142em\n        Rybko, z Emilem, bo wzi\u0105\u0142 zasi\u0142ek\n        Bar odwiedzi\u0142em, tam zjad\u0142em posi\u0142ek\n        Popi\u0142em kefirem i w sumie to tyle, kotku\n        Gra\u0142a Borussia Dortmund, nosi\u0142em paczki w pe\u0142nym s\u0142o\u0144cu\n        Podstaw mnie przed egzekucyjny korpus\n        Nie widzia\u0142em \u017Cadnej ma\u0142olatki w tym miesi\u0105cu\n        Na mie\u015Bcie poch\xF3d zwi\u0105zkowc\xF3w\n        Roz\u0142o\u017Cy\u0142 mi si\u0119 samoch\xF3d przy dworcu\n        Ju\u017C mia\u0142em wraca\u0107, ale w korku, bez transportu?\n        No i na ko\u0144cu musia\u0142em pom\xF3c ojcu\n        \n        To chwila - dzi\u015B jest, jutro ju\u017C by\u0142a\n        To chwila - dzi\u015B nienawidzi mnie, jutro jest mi\u0142a\n        Sama sobie jest winna\n        M\xF3wi\u0119 trudno jest inna\n        Nie w tym rzecz, \u017Ce si\u0119 zmy\u0142a\n        Rzecz w tym, \u017Ce mnie nakry\u0142a'
}, {
    type: 'chours',
    index: 3,
    text: '[Oskar] <br />\n        Jest czas, nie ma hajsu, jem ry\u017C po tajsku jest kac\n        Nie ma blant\xF3w, Marlboro light\xF3w, jest kwas\n        Po ostatnim zaj\u015Bciu zamiast romansu jest jej p\u0142aszcz'
}, {
    type: 'verse',
    index: 4,
    text: '[Oskar] <br />\n        Plask na mojej twarzy jej palc\xF3w \u015Blad, a nie szminki\n        Troch\u0119 chujowo to wysz\u0142o, bo by\u0142y walentynki\n        Mia\u0142em kupi\u0107 prezent jej, skarbie, kupi\u0107 chcia\u0142em stringi\n        St\xF3j kochanie gdzie biegniesz niecodziennie wal\u0119 drinki\n        \u017Babko, kroj\u0105c chleb rano sko\u0144czy\u0142em z ran\u0105\n        Wyszed\u0142em krwawi\u0105c, d\u0142ugo to trwa\u0142o\n        Gada\u0142em z Mari\u0105, \u017Ale to zabrzmia\u0142o\n        Znaczy si\u0119 z Mario, szed\u0142 gdzie\u015B ze star\u0105\n        To w skr\xF3cie ca\u0142o\u015B\u0107, czerwon\u0105 strza\u0142\u0105\n        Podjecha\u0142 Maro, a z tak\u0105 Ani\u0105\n        \u015Acina\u0142em auto, a nie na jej cia\u0142o\n        Czekali\u015Bmy pal\u0105c tam, a\u017C si\u0119 oddal\u0105\n        Myszko, wiesz \u017Ce moj\u0105 tradycj\u0105\n        Wtorki praca nad kondycj\u0105\n        Wyszed\u0142em z misj\u0105 po tw\xF3j prezent na dzi\u015B\n        To akurat szli do monopolu z ekspedycj\u0105\n        I by\u0142o zimno i \u015Blisko\n        Ja ju\u017C by\u0142em w drodze na z bielizn\u0105 stoisko\n        I przypadkiem spotka\u0142em si\u0119 z Patrycj\u0105\n        Ten jeden wyskok, to rybko nie wszystko\n        \n        To chwila - dzi\u015B jest, jutro ju\u017C by\u0142a\n        To chwila - dzi\u015B nienawidzi mnie, jutro jest mi\u0142a\n        Sama sobie jest winna\n        Ta, a potem jest inna\n        Nie w tym rzecz, \u017Ce si\u0119 zmy\u0142a\n        Rzecz w tym, \u017Ce mnie nakry\u0142a'
}, {
    src: 'https://www.youtube.com/embed/935hsUAVNYo?rel=0'
}];

/////////////////////////////////////////////////  G R Y  L O S O W E  /////////////////////////////////////////////////

var gry_losowe = [{
    type: 'cut',
    index: 1,
    text: '[W\u0142odi] <br />\n        Te\u017C b\u0142\u0105dz\u0119 w ciemno\u015Bci, ale koniec ko\u0144c\xF3w\n        Urodzi\u0142em si\u0119 po to, \u017Ceby chodzi\u0107 w s\u0142o\u0144cu\n        '
}, {
    type: 'verse',
    index: 2,
    text: '[Oskar] <br />\n        Dzie\u0144 by\u0142 s\u0142oneczny, odwiedzi\u0142em bar mleczny\n        Zjad\u0142em kotlet jajeczny i przyjeba\u0142em w \u015Bmietnik na wstecznym\n        B\u0142\u0105d niebolesny, bo lakier by\u0142 i tak konieczny\n        Min\u0105\u0142em par\u0119 przecznic my\u015Bl\u0105c kto jest, a kto nie jest wart obietnic\n        To nie op\u0142atek, a to nie taca jak si\u0119 op\u0142aca\n        To jest praca, jak jest sprawa, to jest rasa, \u017Cycie stres skraca Wczoraj nafta, wi\u0119c mia\u0142em dzi\u015B kaca\n        Ta pogi\u0119ta blacha, nie b\u0119d\u0119 p\u0142aka\u0107, bo ten automat wyp\u0142aca\n        Nic? Dry\u0144, dzwoni kto\u015B robi zakupy\n        By\u015B la\u0142 w mord\u0119 goudy, jad\u0142 w\u0142oskie kluchy\n        No i na ciuchy, na skr\xF3ty w bramie dwa buchy\n        Mia\u0142em zje\u015B\u0107 racuchy obrzydzi\u0142 mi je bej zapluty\n        Kt\xF3ry akurat tam s\u0119pi\u0142 na ruchy\n        Ja g\u0142uchy na pro\u015Bby, a on czarny jak Bill Cosby\n        Obok monopolowy, mordy dla hobby brali litr goudy\n        Wszed\u0142em, jeden u\u015Bpiony obaj nie mieli zbyt formy\n        Lecz w sumie \u017Caden z nich nie zd\u0105\u017Cy\u0142 przekroczy\u0107 dzi\u015B normy'
}, {
    type: 'cuts',
    index: 3,
    text: '\n        Te\u017C b\u0142\u0105dz\u0119 w ciemno\u015Bci, ale koniec ko\u0144c\xF3w\n        Je\u015Bli chodzi o hajs, jestem jeban\u0105 maszynk\u0105\n        Te\u017C b\u0142\u0105dz\u0119 w ciemno\u015Bci, ale koniec ko\u0144c\xF3w'
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////  M I E D Z Y N A R O D O W A #2  /////////////////////////////////////////////////

var miedzynarodowa_2 = [{
    type: 'VERSE',
    index: 1,
    text: '[Steez] <br />\n        No, siemasz. No i jak? Nie, no jad\u0119 co\u015B ogarn\u0105\u0107. \n        Aha. Co ty pierdolisz? Nie, no to szach mat. Aa, ta. \n        Co, przychodzi? \u015Awieczki odpalisz, wanna i si\u0119 rebus rozwi\u0105\u017Ce. \n        Dobra, poczekaj, czekaj, psy jad\u0105, zaraz oddzwoni\u0119\n        '
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////  N A  A U D I E N C J I  /////////////////////////////////////////////////

var na_audiencji = [{
    type: 'cut',
    index: 1,
    text: '[W\u0142odi] <br />\n        Te\u017C b\u0142\u0105dz\u0119 w ciemno\u015Bci, ale koniec ko\u0144c\xF3w\n        Urodzi\u0142em si\u0119 po to, \u017Ceby chodzi\u0107 w s\u0142o\u0144cu\n        '
}, {
    type: 'verse',
    index: 2,
    text: '[Oskar] <br />\n        Dzie\u0144 by\u0142 s\u0142oneczny, odwiedzi\u0142em bar mleczny\n        Zjad\u0142em kotlet jajeczny i przyjeba\u0142em w \u015Bmietnik na wstecznym\n        B\u0142\u0105d niebolesny, bo lakier by\u0142 i tak konieczny\n        Min\u0105\u0142em par\u0119 przecznic my\u015Bl\u0105c kto jest, a kto nie jest wart obietnic\n        To nie op\u0142atek, a to nie taca jak si\u0119 op\u0142aca\n        To jest praca, jak jest sprawa, to jest rasa, \u017Cycie stres skraca Wczoraj nafta, wi\u0119c mia\u0142em dzi\u015B kaca\n        Ta pogi\u0119ta blacha, nie b\u0119d\u0119 p\u0142aka\u0107, bo ten automat wyp\u0142aca\n        Nic? Dry\u0144, dzwoni kto\u015B robi zakupy\n        By\u015B la\u0142 w mord\u0119 goudy, jad\u0142 w\u0142oskie kluchy\n        No i na ciuchy, na skr\xF3ty w bramie dwa buchy\n        Mia\u0142em zje\u015B\u0107 racuchy obrzydzi\u0142 mi je bej zapluty\n        Kt\xF3ry akurat tam s\u0119pi\u0142 na ruchy\n        Ja g\u0142uchy na pro\u015Bby, a on czarny jak Bill Cosby\n        Obok monopolowy, mordy dla hobby brali litr goudy\n        Wszed\u0142em, jeden u\u015Bpiony obaj nie mieli zbyt formy\n        Lecz w sumie \u017Caden z nich nie zd\u0105\u017Cy\u0142 przekroczy\u0107 dzi\u015B normy'
}, {
    type: 'cuts',
    index: 3,
    text: '\n        Te\u017C b\u0142\u0105dz\u0119 w ciemno\u015Bci, ale koniec ko\u0144c\xF3w\n        Je\u015Bli chodzi o hajs, jestem jeban\u0105 maszynk\u0105\n        Te\u017C b\u0142\u0105dz\u0119 w ciemno\u015Bci, ale koniec ko\u0144c\xF3w'
}, {
    src: 'https://www.youtube.com/embed/ZFVCiU9w7Mk?rel=0'
}];

/////////////////////////////////////////////////  F A I R  P L A Y   /////////////////////////////////////////////////

var fair_play = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Lubi\u0119 towar trefny, lubi\u0119 browar wczesny\n        Lubi\u0119 Alpin\u0119, Bety, AMG 6.3, lubi\u0119 diamenty\n        Na szyi kobiety i si\u0119 z ni\u0105 pieprzy\u0107\n        A inna sprawa jaki przed tym fetysz\n        Lubi\u0119 zjes\u0107 kwasa, blackjack, hazard\n        Nie lubi\u0119 w niej zasad, lubi\u0119 jej masa\u017C\n        Jestem chuj, zdradzam\n        Lubi\u0119 j\u0105 w d\xF3\u0142, od pasa\n        A inna sprawa, \u017Ce jak jest naga te\u017C mi nie przeszkadza\n        Lubi\u0119 pi\u0107 szampan, lubi\u0119 je\u015B\u0107 w knajpach\n        Lubi\u0119 ten kajdan, zup\u0119 jak jest pikantna\n        W pi\u0105tek falstart, kocha\u0107 si\u0119 w jej kszta\u0142tach\n        Inna sprawa, \u017Ce mam na ni\u0105 wyjebane jajca\n        Lubi\u0119 w dzie\u0144 zaspa\u0107, w nocy sen miasta\n        Ten dres Ralpha, w ciszy d\u017Awi\u0119k blanta\n        Fajer\u0119 auta, szum v6 wa\u0142ka\n        Inna rzecz, \u017Ce w\u0142a\u015Bnie odwiedzam dzi\u015B warsztat\n        '
}, {
    type: 'chours',
    index: 2,
    text: '[Oskar & Steez] x2 <br />\n        To inna historia, \u017Ce gadam z bogiem o piekle\n        Inna, \u017Ce \u015Bmigam ostro, bo nie wiem jak wcisn\u0105\u0107 heble\n        Inna, \u017Ce trzymam fason, a jestem jak ma\u0142olat we mgle\n        Ale to kurwa nie Wembley\n        A \u017Cycie to nie fair play'
}, {
    type: 'verse',
    index: 3,
    text: '[Oskar] <br />\n        Lubi\u0119 De Niro, lubi\u0119 Ground Zero\n        Lubi\u0119 pi\u0119\u0107 kilo, nie lubi\u0119 tych co nie pij\u0105\n        Lubi\u0119 seks z by\u0142\u0105, toast tequill\u0105\n        Inna sprawa, \u017Ce wola\u0142bym \u015Bwi\u0119towa\u0107 ten milion\n        Lubi\u0119 Black Mirror, goud\u0119 zimn\u0105\n        Przerw\u0119 godzinn\u0105, bud\u0119 z kebsem czynn\u0105, buritto z tortill\u0105\n        Gara\u017C pod will\u0105, na razie nie, mo\u017Ce gdybym ostatnio nie pop\u0142yn\u0105\u0142\n        Nie lubi\u0119 zim, polskich tych w kit porcji\n        Z rana win, s\u0142odkich, a na zrzucie torsji\n        Lubi\u0119 sprint sporty, ale bieg\u0142em ostatnio jak mi nie odda\u0142 typ floty\n        Lubi\u0119 gdy jest w\xF3da, lubi\u0119 jej uda\n        Lubi\u0119 gdy jest chuda, lubi\u0119 gdy jest gruba\n        Lubi\u0119 gdy jest druga, lubi\u0119 gdy jest grupa\n        Inna historia jak si\u0119 przypadkowo trafi cudza'
}, {
    type: 'chours',
    index: 2,
    text: '[Oskar & Steez] x2 <br />\n        To inna historia, \u017Ce gadam z bogiem o piekle\n        Inna, \u017Ce \u015Bmigam ostro, bo nie wiem jak wcisn\u0105\u0107 heble\n        Inna, \u017Ce trzymam fason, a jestem jak ma\u0142olat we mgle\n        Ale to kurwa nie Wembley\n        A \u017Cycie to nie fair play'
}, {
    src: 'https://www.youtube.com/embed/5pM0_Q7vMTA?rel=0'

}];

/////////////////////////////////////////////////  R E W I A   /////////////////////////////////////////////////

var rewia = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Te same g\u0119by, rave\'y\n        Zn\xF3w mendy, spierdolimy t\u0119dy\n        Wetrzyj w z\u0119by\n        B\u0119bny, k\u0142\u0119by\n        DJ gra blendy\n        Odpierdalam rewi\u0119, zjad\u0142em dziewi\u0119\u0107\n        Le\u017C\u0119 na glebie, ona te\u017C zje\n        One we dwie, nic nie wiem\n        Gadam do siebie, \u015Blady na niebie x2\n        '
}, {
    type: 'verse',
    index: 2,
    text: '[Oskar] <br />\n        Te same ksywki, listki\n        Brak dykcji, ich wygi\u0119te pyski\n        \u015Alady jej szminki, gwizdki\n        Whisky, id\u017A we\u017A to ze skrytki\n        Trutka, zdr\xF3wka\n        W grudkach, 0,6 z grubsza\n        Z bazy lub kubka\n        Rundka, trzydni\xF3wka\n        Jestem n\xF3wka x2'
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////  K R A J O W A  #1   /////////////////////////////////////////////////

var krajowa_1 = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        No i to jest jedzenie. To rozumiem. Czekaj, akurat kto\u015B mi tu tarabani, \n        akurat teraz. Smarkaj dzidziu\u015B. Co? Jeszcze raz powiedz. Co zrobi\u0142e\u015B? \n        Oj, Bo\u017Ce... No, to przyjd\u017A tam zaraz, odkr\u0119cimy\n        '
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////   G R A M A Ż E R I A   /////////////////////////////////////////////////

var gramazeria = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        To miejsce gdzie si\u0119 wszyscy znamy\n        Wchodz\u0105 ch\u0142opcy, z nimi damy\n        Wychodz\u0105 dziwki i chamy\n        \u015Aciany maj\u0105 uszy wi\u0119c nie jest nikt pijany\n        Chcia\u0142by\u015B sztuk\u0119, zmieniasz plany\n        Szybki odwr\xF3t gdy jeste\u015B bliski bramy\n        To gra o flot\u0119, walka o fotel\n        Gouda co pi\u0105tek, kac w sobot\u0119\n        To pi\u0119\u015B\u0107 i m\u0142otek, dwa do trzech to je\u017Adzi\u0107 szrotem\n        Ona ma ochot\u0119, ty marsz z powrotem\n        Pa, krzyk jest g\u0142uchy, ta krzycz jak musisz\n        Ja milcz\u0119 skuty, fakt stycze\u0144 drugi\n        O, \u015Bwiat nie ko\u0144czy si\u0119 na szlugu, ko\u0144cz\u0105 mi si\u0119 szlugi\n        \u015Awiat nie ko\u0144czy si\u0119 na d\u0142ugu, nie ko\u0144cz\u0105 mi si\u0119 d\u0142ugi\n        Nie ko\u0144czy si\u0119 flota i nie ko\u0144cz\u0105 mi si\u0119 dni gdy\n        Wydaj\u0119 plik do ko\u0144ca, bo si\u0119 nie zacz\u0119\u0142y nigdy\n        Modlitwy, by przesta\u0107 traci\u0107 czas na litry\n        Litry, by przesta\u0107 traci\u0107 czas na modlitwy\n        '
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////  F L A R Y  /////////////////////////////////////////////////

var flary = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        \u015Acinam przez \u017Caluzje na okolic\u0119\n        Ona milczy g\u0142o\u015Bniej ni\u017C krzycz\u0119\n        Chc\u0119 j\u0105 lekko musn\u0105\u0107 w policzek\n        Zostawia mnie, a obok cisz\u0119\n        S\u0142odkie \u017Cycie, s\u0142ysz\u0119 bluzgi jej pod prysznicem\n        Woda p\u0142ynie jak obietnice, chmury wisz\u0105 jak szubienice\n        Siada naprzeciwko mnie, jest w\u015Bciek\u0142a jak krzyk\n        Ona przeciwko mnie, jej wzrok tylko czeka na cynk\n        Gdyby m\xF3g\u0142 zabi\u0107 to bym jak skiepowany blant styg\u0142\n        Jeste\u015Bmy nadzy, dawno si\u0119 wykrwawi\u0142 nasz wstyd\n        (Like the air that I breathe) Nasze zmys\u0142y\n        (That\'s what she is to me) Czuj\u0105 bitwy\n        (Like coming home) Nasze my\u015Bli\n        (When I\'ve been gone too long) Wr\xF3\u017C\u0105 blizny\n        Wojna, wojna, m\xF3wi\u0119 jej: dobra, dobra\n        Patrzy spokojna, ch\u0142odna, bo jest do tornad zdolna\n        Wskazania ponad pomiar, to b\u0119dzie zbrodnia, ognia\n        Jeden tylko drobiazg, to by\u0142o wczoraj, a dzi\u015B\n        '
}, {
    type: 'chours',
    index: 2,
    text: '\n        Nie pami\u0119tam jak grozi\n        Jak pachnie jej pot i\n        Jak szepcz\u0105 jej kroki\n        Jak si\u0119 kr\u0119c\u0105 jej loki czarne jak b\xF3r\n        Jak pragn\u0105 jej oczy\n        Jak pachn\u0105 jej w\u0142osy\n        Dym, papierosy k\u0142ad\u0119 na st\xF3\u0142\n        Nie pami\u0119tam, jak prosi\n        Jak koi jej dotyk\n        I nie pami\u0119tam nago\u015Bci bia\u0142ej jak s\xF3l\n        Nad ulic\u0105 tej nocy, walki gasn\u0105 odg\u0142osy\n        To, co mieli\u015Bmy, rozszarpane na p\xF3\u0142\n        Nie pami\u0119tam jak, nie pami\u0119tam jak\n        Nie pami\u0119tam jak, nie pami\u0119tam jak\n        (Like the air that I breathe)\n        (That\'s what she is to me)'
}, {
    type: 'verse',
    index: 3,
    text: '\n        Nie wiem co za klub to, t\u0142ok, lufa za luf\u0105, nos\n        Krok w ty\u0142 i p\xF3\u0142 w bok, sport, oblewam si\u0119 w\xF3dk\u0105, shot\n        Ona szarpie moj\u0105 kurtk\u0105, blond w\u0142osy spi\u0119te gumk\u0105\n        Z\u0142o\u015B\u0107, na gleb\u0119 leci Tuborg, stop, odpycham j\u0105 m\xF3wi\u0105c do\u015B\u0107\n        Idziesz albo koniec - krzyczy, ja ledwo stoj\u0119\n        Spity \u015Bmiej\u0119 si\u0119 do niej, s\u0142yszysz, rzuca we mnie szkopek \u0142ychy\n        Jak gaszony p\u0142omie\u0144 syczy i znika jak w pi\u0105tek dychy\n        T\u0142uk\u0119 luf\u0119 o ten bar, krew cieknie przez palce ju\u017C'
}, {
    type: 'chours',
    index: 2,
    text: '\n        Nie pami\u0119tam jak grozi\n        Jak pachnie jej pot i\n        Jak szepcz\u0105 jej kroki\n        Jak si\u0119 kr\u0119c\u0105 jej loki czarne jak b\xF3r\n        Jak pragn\u0105 jej oczy\n        Jak pachn\u0105 jej w\u0142osy\n        Dym, papierosy k\u0142ad\u0119 na st\xF3\u0142\n        Nie pami\u0119tam, jak prosi\n        Jak koi jej dotyk\n        I nie pami\u0119tam nago\u015Bci bia\u0142ej jak s\xF3l\n        Nad ulic\u0105 tej nocy, walki gasn\u0105 odg\u0142osy\n        To, co mieli\u015Bmy, rozszarpane na p\xF3\u0142\n        Nie pami\u0119tam jak, nie pami\u0119tam jak\n        Nie pami\u0119tam jak, nie pami\u0119tam jak\n        (Like the air that I breathe)\n        (That\'s what she is to me)'
}, {
    type: 'verse',
    index: 3,
    text: '\n        Ulica i \u015Bwiat\u0142o lamp, zataczam si\u0119 kaszl\u0105c, czkam\n        Mija mnie patrol, fart, rzygam, dr\u0119 gard\u0142o, chlam\n        Rozbita jak szk\u0142o twarz, na r\u0119ce ju\u017C zasch\u0142o\n        P\u0142aszcz na glebie, a ponadto blant, to chyba jej auto tam\n        Podje\u017Cd\u017Ca jak zjawa w becie, bredz\u0119 jaki\u015B bana\u0142\n        Dreszcze, co robisz, wsiadaj - szepcze\n        Cedz\u0119: spierdalaj, nie chc\u0119\n        Ona nie b\u0142aga wi\u0119cej, odje\u017Cd\u017Ca sama\n        Wreszcie t\u0142uk\u0119 butl\u0119 o kraw\u0119\u017Cnik\n        Ksi\u0119\u017Cyc i noc g\u0119sta jak krew'
}, {
    src: 'https://www.youtube.com/embed/ltH9IgyZKbw?rel=0'
}];

/////////////////////////////////////////////////   K L U B Y  I  R E S T A U R A C J E   /////////////////////////////////////////////////

var kluby_i_restauracje = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Kiedy ten bit wje\u017Cd\u017Ca? O\n        We \u0142bie kr\u0119ci si\u0119 jak w wanklu\n        Dochodzi wi\u0119c do spi\u0119\u0107 i awantur\n        Gramy? Ja bankrut\n        Nikt nie ma jednej, ka\u017Cdy ma fanklub\n        O, zdrowie na pi\u0119\u0107 luf\n        Ale czym jest pi\u0119\u0107 luf na pi\u0119\u0107 g\u0142\xF3w\n        Ch\u0142opie, daj pi\u0119\u0107, pi\u0119\u0107 zn\xF3w\n        Mia\u0142 by\u0107 hajs, jest pi\u0119\u0107 st\xF3w\n        Kluby i restauracje, substancje s\u0105 r\xF3\u017Cne, wariacje\n        Czekam na tak, masz racj\u0119\n        Gouda i kwit, podaj\u0105 mi narracj\u0119\n        O, brak tu mojego gniewu\n        Z w\xF3dk\u0105 wyla\u0142em go do tamtego zlewu\n        \u015Awiat\u0142o koloru md\u0142ego z LED\xF3w\n        Leci z dwiewi\u0119\u0107dziesi\u0105tego przeb\xF3j\n        '
}, {
    src: '' // brak
}];

/////////////////////////////////////////////////  P U E R T O  R I C O   /////////////////////////////////////////////////

var puerto_rico = [{
    type: 'chours',
    index: 1,
    text: '[Oskar] <br />\n        Dzieci weso\u0142o pobieg\u0142y do szko\u0142y, posypa\u0142y si\u0119 na blat przetwory\n        Puszcza go, powoli wygl\u0105da jak chory\n        Ona wrzuca to na swoje story\n        '
}, {
    type: 'verse',
    index: 2,
    text: '[Oskar] <br />\n        Koka, psycho, z Puerto Rico\n        On jest szych\u0105, ona z wszywk\u0105\n        Troch\u0119 zryto, troch\u0119 tylko\n        Z\u0142ota rybko, prosz\u0119 tysi\u0105c\n        Zacz\u0119li bez intra, knajpa nie wykwintna\n        Leciutka napinka, ciasno jest na winklach\n        Ona co\u015B zamilk\u0142a, dosta\u0142a do drinka'
}, {
    type: 'chours',
    index: 3,
    text: '[Oskar] <br />\n        Dzieci weso\u0142o pobieg\u0142y do szko\u0142y, posypa\u0142y si\u0119 na blat przetwory\n        Puszcza go, powoli wygl\u0105da jak chory\n        Ona wrzuca to na swoje story'
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////   M I E D Z Y N A R O D O W A #3   /////////////////////////////////////////////////

var miedzynarodowa_3 = [{
    type: 'verse',
    index: 1,
    text: '[Steez] <br />\n        Halo, halo? No, jestem. Ju\u017C jestem. Aa, kurwa, bo ta mi co\u015B pierdoli. \n        No, m\xF3wi\u0142em mu, \u017Ce to ryzykowne, ale ci\u0119\u017Cko si\u0119 nie po\u0142asi\u0107, jak wiesz, \u0142ap\u0119 liza\u0142 przez p\xF3\u0142 roku. \n        No, ja to to bym si\u0119 w to nie wpierdala\u0142. Eh, kurwa, co zrobisz. Napali\u0142 si\u0119 jak szczerbaty na suchary\n        '
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////  H A Z A R D   /////////////////////////////////////////////////

var hazard = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Pogoda nie rozpieszcza, ale jak masz to grzeje\n        Odkleja si\u0119 jak paznokcie jej, a twarz matowieje\n        Ta, nie ma kto pola\u0107, sam polej\u0119\n        2018, nie bior\u0105 aut z\u0142odzieje\n        Nie b\u0119dzie drugich ofert, m\xF3j ko\u0144 to sz\xF3stka\n        Hydrokortyzon, po co\u015B wzi\u0105\u0142 te st\xF3wy d\u017Cokej\n        Przy barze obok pusty hoker\n        Plan na potem - na kuponie pi\u0119\u0107 oczek\n        Ona hotel, szkopek w\xF3dy, poker\n        450, ciut za drogo, id\u017A marudzi\u0107 kurwa obok\n        Nie masz, a przejeba\u0142e\u015B na bluzach logo\n        Cyganki nie powr\xF3\u017C\u0105 z r\u0119ki, w fusach mog\u0105\n        Na pobudk\u0119 nie ma kawy, kop zamyka usta wrogom\n        Ciasno tu jak w awionetce, jest wilgotno\n        Ale r\u0119ce i tak ka\u017Cdy mia\u0142 bardzo lepkie\n        W prawej trzymam to co ka\u017Cdemu jest tak konieczne\n        W lewej trzymam krzy\u017Cak, nitki s\u0105 w marionetce\n        '
}, {
    type: 'verse',
    index: 2,
    text: '[Oskar] <br />\n        Nie jeste\u015B tu bezpieczny, ona nie ma majtek\n        Ale w sumie nie krzycz, na jednej ma dziar\u0119, a na drugiej pieprzyk\n        Je\u015Bli nie ma \u0107wiartek, to pi\u0119\u0107 rudej wi\u0119kszych\n        Kolejny pies w T-czw\xF3rce, wal\u0119 na inwencje tw\xF3rcze\n        Magnez na cz\u0119ste skurcze, blant te\u017C, i jeszcze w rurce\n        Marzn\u0119, trzymam r\u0119ce w kurtce\n        Da\u0142nie, to nie hajs te par\u0119 st\xF3w spi\u0119tych w recepturce\n        Pal\u0119, p\u0142onie, nalej, podnie\u015B\n        Mam je obie, w telefonie\n        Bajek troch\u0119, k\u0142amie dobrze\n        Wstan\u0119 mo\u017Ce, wal\u0119, koniec\n        Nie ma si\u0119 co przejmowa\u0107, my\u015Bli coraz zdrowsze\n        Paranoje produkuje coraz s\u0142odsze g\u0142owa\n        Auta coraz m\u0142odsze, dupy coraz dro\u017Csze\n        Narkotyki coraz nowsze, coraz kr\xF3tsza jest po nocce doba'
}, {
    type: 'Hook',
    index: 3,
    text: '[Oskar & Steez] (x2) <br />\n        Dwie dyscyplinarne\n        I wchodz\u0105 czarne\n        Mordo si\u0119 szarpn\u0119\n        Obstawiam skrajne\n        Braciszku, jest pretekst\n        Bo krzywo na b\u0119bnie\n        Ryjku lornet\u0119\n        Bo gramy sp\xF3\u0142dzielnie'
}, {
    src: 'https://www.youtube.com/embed/vFMaAGU59b4?rel=0'
}];

/////////////////////////////////////////////////   M I E D Z Y N A R O D O W A #4   /////////////////////////////////////////////////

var miedzynarodowa_4 = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        No, siemasz. Siemasz, \u0141u... a. Cz\u0142owieku, bajkowy nastr\xF3j, pij\u0119 kawk\u0119, wiesz, my\u015Bl\u0119 - zadzwoni\u0119. Aha, a o czym? \n        Nie, nie s\u0142ysza\u0142em o tym. Nikt mi nie powiedzia\u0142, jak to m\xF3wi\u0105. Aha, to pogadamy, to mi co\u015B wi\u0119cej opowiesz. No, to cze\u015B\u0107\n        '
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////  M A G N O L I E  /////////////////////////////////////////////////

var magnolie = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Mia\u0142em \u017Cycie ale nie mam, mia\u0142em w g\u0142owie spowied\u017A, tak\u017Ce nie mam\n        Mia\u0142em \u017C\u0105dze, par\u0119 spojrze\u0144 mord pchaj\u0105cych mnie do d\u0105\u017Ce\u0144, \u017Cadnej nie mam\n        Mia\u0142em rzeczy do zrobienia, par\u0119 spraw do zarzucenia sobie dalej miewam\n        Mia\u0142em tobie co\u015B powiedzie\u0107, ale nie mam\n        Bo cz\u0142owieka na kt\xF3rym polega\u0107 mog\u0142em nagle nie znam\n        Mia\u0142em skrawek sumienia, my\u015Bla\u0142em, \u017Ce mam ich, a tylko zna\u0142em imienia\n        Mia\u0142em sw\xF3j stres, sw\xF3j gniew, chwa\u0142\u0119, cierpienia\n        Warto\u015Bci si\u0119 jak olej w aucie wymienia\n        '
}, {
    type: 'chours',
    index: 2,
    text: '[Oskar] <br />\n        Widz\u0119 lepiej kiedy s\u0142o\u0144ce zasz\u0142o za horyzont\n        Robi\u0119 rzeczy, kt\xF3re mnie tak bardzo, bardzo brzydz\u0105\n        Daj mi co\u015B, ja przepierdol\u0119 \u0142atwo ka\u017Cd\u0105 ilo\u015B\u0107\n        Dzi\u015B mam tylko j\u0105 i jej cierpliwo\u015B\u0107\n        I wiem p\xF3ki tu stoj\u0119, \u017Ce to nie, jeszcze nie koniec\n        A spi\u0119cie puszcza me d\u0142onie, a na gleb\u0119 lec\u0105 naboje\n        I ledwo muskam jej skronie, my\u015Bli jej goni\u0105 te moje\n        Brudna krew, brudne magnolie\n        G\u0119sty tlen dusi oboje\n        \n        Mia\u0142em sny i nie mam, mia\u0142em pasj\u0119, mia\u0142em, jednak nie mam\n        Mia\u0142em swe marzenia, mia\u0142em rany, mia\u0142em plany\n        Chore stany, dzi\u015B ich nie pami\u0119tam niemal\n        Mia\u0142em cz\u0142owiecze\u0144stwa przejaw, mia\u0142em dar\n        Mia\u0142em fart nic teraz niewart\n        Mia\u0142em si\u0142\u0119, mia\u0142em tajemnic\u0119 i zw\u0105tpienia\n        Dzi\u015B przed gadk\u0105 z samym sob\u0105 stwierdzam - jeba\u0107\n        Mia\u0142em my\u015Bli, czas by je pozbiera\u0107\n        Mia\u0142em pustk\u0119, j\u0105 wype\u0142nia\u0142y wspomnienia\n        Widz\u0119 w lustrze refleks mojej twarzy, to nie ja\n        To co mia\u0142em w\u0142a\u015Bnie si\u0119 sma\u017Cy w p\u0142omieniach'
}, {
    type: 'verse',
    index: 3,
    text: '[Oskar] <br />\n        Widz\u0119 lepiej kiedy s\u0142o\u0144ce zasz\u0142o za horyzont\n        Robi\u0119 rzeczy, kt\xF3re mnie tak bardzo, bardzo brzydz\u0105\n        Daj mi co\u015B, ja przepierdol\u0119 \u0142atwo ka\u017Cd\u0105 ilo\u015B\u0107\n        Dzi\u015B mam tylko j\u0105 i jej cierpliwo\u015B\u0107\n        I wiem p\xF3ki tu stoj\u0119, \u017Ce to nie, jeszcze nie koniec\n        A spi\u0119cie puszcza me d\u0142onie, a na gleb\u0119 lec\u0105 naboje\n        I ledwo muskam jej skronie, my\u015Bli jej goni\u0105 te moje\n        Brudna krew, brudne magnolie\n        G\u0119sty tlen dusi oboje'
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////   M I E D Z Y N A R O D O W A  #5   /////////////////////////////////////////////////

var miedzynarodowa_5 = [{
    type: 'verse',
    index: 1,
    text: '[Steez] <br />\n        No, elo. I co, masz to? A jak ogarn\u0105\u0142e\u015B? \n        Aa, tu na torze te\u017C wszystko jest. Ta, trzeba tylko wiedzie\u0107 jak szuka\u0107. \n        A\u017C tyle? Ty, \u017Ceby\u015B Ty wr\xF3ci\u0142 z tej wycieczki, materia\u0142 mamy jeszcze do sko\u0144czenia. \n        No, dobra, jak co\u015B to dzwo\u0144. B\u0119d\u0119 pod telefonem\n        '
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////  G O L D E N  /////////////////////////////////////////////////

var golden = [{
    type: 'chours',
    index: 1,
    text: '[Oskar] (x2) <br />\n        Pok\xF3j tonie w brudach, za szyb\u0105 jest l\xF3d, na lustrze fant\n        Nie wiem kto zblad\u0142, bo nie ma tu w sumie lamp\n        Nie ufam nam, nie ufam nawet sobie sam\n        Nabijam i jaram, a jak \u017Car nie dzia\u0142a drugi ogie\u0144 mam\n        '
}, {
    type: 'verse',
    index: 2,
    text: '[Oskar] <br />\n        Okno si\u0119 odsuwa, ja odczuwam\n        \u017Ce \u015Bciany staj\u0105 si\u0119 jak milion okr\u0105g\u0142e\n        Skupiam wzrok ci\u0105gle, a parkiet sk\u0142ada si\u0119 w blond Giocond\u0119\n        Ona gnie si\u0119 jak promile mord\u0119\n        Wyci\u0105ga sztylet, by wbi\u0107 mi w \u017Co\u0142\u0105dek\n        Siadam na fotel, a dopiero potem my\u015Bl\u0119, \u017Ce na chwil\u0119 usi\u0105d\u0119\n        Ooo, sufit jest niebem, sztos, diamenty \u015Bniegiem\n        Co? Pu\u015Bci\u0107 si\u0119 biegiem? Ej, dajcie mi jeden\n        I p\u0142acze, si\u0119 \u015Bmiej\u0119, i bawi\u0119 si\u0119 z cieniem\n        Ucisk mdleje, od w\xF3dy? Nie wiem\n        I nagle ten pok\xF3j, ten brud\n        A na ogniu topnieje ten l\xF3d jakbym powr\xF3ci\u0142 z piekie\u0142'
}, {
    type: 'chours',
    index: 3,
    text: '[Oskar] (x2) <br />\n        Pok\xF3j tonie w brudach, za szyb\u0105 jest l\xF3d, na lustrze fant\n        Nie wiem kto zblad\u0142, bo nie ma tu w sumie lamp\n        Nie kocham nas, nie kocham nawet siebie sam\n        Nabijam i jaram, a jak \u017Car nie dzia\u0142a drugi jeszcze mam'
}, {
    type: 'verse',
    index: 4,
    text: '[Oskar] <br />\n        Pok\xF3j si\u0119 rozje\u017Cd\u017Ca, czuj\u0119 r\u0105k ci\u0119\u017Car\n        Padam jak brzoza, \u015Bciany szamie po\u017Car\n        K\u0142uje alert jak sonar w lustrze jej twarz\n        Cho\u0107 j\u0105 pozna\u0142em wczoraj\n        Kiedy do niej co\u015B wo\u0142am\n        Zwierciad\u0142o wci\u0105ga me d\u0142onie jak smo\u0142a\n        Jej twarz z lustra myj\u0105 fale z morza\n        A moj\u0105 g\u0142ow\u0119 muska aureola\n        Gdzie si\u0119 kr\u0119c\u0105 butle i pe\u0142zn\u0105 pliki\n        A jak kr\u0119c\u0105c lustrem, rozkr\u0119cam pok\xF3j\n        Jak typy strucle na trybiki\n        I kr\u0119ci si\u0119 \u015Bwiat, m\u0119cz\u0105 krzyki\n        Co\u015B j\u0119czy? To ja, przed tym lustrem zbitym\n        I nagle ten pok\xF3j wraca\n        Obskurne \u015Bciany, a na grzybie \u017C\xF3\u0142te graffiti'
}, {
    type: 'chours',
    index: 5,
    text: '[Oskar] (x2) <br />\n        Pok\xF3j tonie w brudach, za szyb\u0105 jest l\xF3d, na lustrze fant\n        Nie wiem kto zblad\u0142, bo nie ma tu w sumie lamp\n        Nie szanuj\u0119 nas, nie szanuj\u0119 nawet siebie sam\n        Nabijam i jaram, a jak \u017Car nie dzia\u0142a drugi przecie\u017C mam'
}, {
    type: 'verse',
    index: 6,
    text: '[Oskar] <br />\n        \u015Aciana odp\u0142ywa ja odkrywam, \u017Ce nie ma \u015Bciany zosta\u0142y plamy\n        Plamy w kszta\u0142cie ludzkich twarzy, przeze mnie oszukanych\n        Na glebie dywany, toccat\u0119 D minor graj\u0105 nam organy\n        Moje oblicze to odbicie w ich ga\u0142kach ze szk\u0142a odlanych\n        Ich \u015Bmiech mroczny, ja w strachu oczy odbijaj\u0105 si\u0119 jak kauczuk\n        To skraj dachu ja jak na kacu\n        Skoczy\u0107? Pokaza\u0107 \u015Bwiatu?\n        I biegn\u0119 w miejscu, koniec, do piachu\n        Groby, kwiaty, p\u0119tla czasu i gdy ju\u017C mam do\u015B\u0107 kazamat\xF3w\n        Wracaj\u0105 brudne \u015Bciany i zerwany brzeg plakatu'
}, {
    src: 'https://www.youtube.com/embed/vOMV9fjrtC8?rel=0'
}];

/////////////////////////////////////////////////   I S K R Y   /////////////////////////////////////////////////

var iskry = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        To jest naprawd\u0119 g\u0142upie, s\u0142owa jak nab\xF3j w spluwie\n        Sentecje mam w lufie i zamiast strza\u0142u m\xF3wi\u0119\n        Ko\u0144cz\u0105c kolejn\u0105 k\u0142\xF3tni\u0119, w otwartej ranie d\u0142ubi\u0119\n        I zabijam zn\xF3w, co bywa w sumie dla mnie jak ja drugie, o\n        Nigdy teraz zawsze p\xF3\u017Aniej, przez to przesta\u0107 jak\u017Ce trudniej\n        Zupe\u0142nie oblepi\u0142 brud mnie i ton\u0119 w udawanej dumie\n        Siebie odnajduje w w\xF3dzie, s\u0142owa p\u0142yn\u0105, a ich nurt rwie\n        P\xF3\u0142noc juz wybi\u0142a u mnie, a \u0142zy lec\u0105 na po\u0142udnie\n        '
}, {
    type: 'chours',
    index: 2,
    text: '[Oskar] <br />\n        Dotknij, zobacz blizny\n        Ja rozrywam to jak listy\n        Niepotrzebne s\u0142owa s\u0105 jak iskry\n        P\xF3\u017Aniejsza cisza to kanistry\n        '
}, {
    type: 'verse',
    index: 3,
    text: '[Oskar] <br />\n        Stoj\u0119 sam przed tob\u0105 nagi\n        Nigdy nie pomy\u015Bla\u0142bym, \u017Ce b\u0119d\u0105 sob\u0105 gardzi\u0107\n        Wym\xF3wi\u0142bym przepraszam, ale mnie to s\u0142owo d\u0142awi\n        Proste sprawy mog\u0105 rani\u0107, proste zdania mog\u0105 zabi\u0107'
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////  V A N I T A S  /////////////////////////////////////////////////

var vanitas = [{
    type: 'chours',
    index: 1,
    text: '[Oskar] <br />\n        Jestem zdyscyplinowany, mam siln\u0105 wol\u0119\n        Wi\u0119c si\u0119 o przysz\u0142o\u015B\u0107 nie martwi\u0119\n        Mam zaci\u0119cie, na\u0142og\xF3w si\u0119 wyrzec potrafi\u0119\n        Bo znam rzeczy hierarchi\u0119\n        Mam gruby plan, samorealizacja da mi gratyfikacj\u0119\n        Ale to jutro, jutro, bo jest tyle rzeczy\n        Kt\xF3re musz\u0119 zrobi\u0107 najpierw        \n        '
}, {
    type: 'verse',
    index: 2,
    text: '[Oskar] <br />\n        S\u0105, panny, kt\xF3re musz\u0105 si\u0119 dowiedzie\u0107 jaki jestem fajny\n        Typy, kt\xF3rzy musz\u0105 si\u0119 dowiedzie\u0107 jaki jestem wa\u017Cny\n        Pieni\u0105dze, kt\xF3re musz\u0105 si\u0119 dowiedzie\u0107 jaki jestem stratny\n        Ludzie, kt\xF3rzy musz\u0105 si\u0119 dowiedzie\u0107 jaki jestem bogaty\n        Rzeczy, kt\xF3re musz\u0119 kupi\u0107, \u017Ceby sprawdzi\u0107 jakie s\u0105 naprawd\u0119\n        Narkotyki, kt\xF3re musz\u0119 wzi\u0105\u0107, \u017Ceby sprawdzi\u0107 czy dam rad\u0119\n        Filmy, kt\xF3re musz\u0105 zosta\u0107 przeze mnie obejrzane\n        W\xF3dki, kt\xF3re musz\u0105 zosta\u0107 wypite o sz\xF3stej nad ranem\n        Pizze, kt\xF3re musz\u0105 zosta\u0107 wszamane z mordami na podw\xF3rku\n        Ustawki, kt\xF3re musz\u0105 doj\u015B\u0107 do skutku, najbardziej te na murku\n        Dyskusje, kt\xF3re musz\u0105 doj\u015B\u0107 do granic absurdu\n        Auta na Allegro, kt\xF3re musz\u0105 mi pozwoli\u0107 na przekroczenie dwudziestu czterech punkt\xF3w\n        Rysunki, kt\xF3re musz\u0119 zrobi\u0107 w zeszycie na marginesie\n        D\u0142onie, kt\xF3re musz\u0119 u\u015Bcisn\u0105\u0107, by sprawdzi\u0107 si\u0119 w biznesie\n        Zakr\u0119ty, kt\xF3re musz\u0119 wybra\u0107, by wiedzie\u0107 co ka\u017Cdy przyniesie\n        Zrobi\u0119 to wszystko i zajm\u0119 si\u0119 sob\u0105, wreszcie, bo przecie\u017C'
}, {
    type: 'chours',
    index: 3,
    text: '[Oskar] <br />\n        Jestem zdyscyplinowany, mam siln\u0105 wol\u0119\n        Wi\u0119c si\u0119 o przysz\u0142o\u015B\u0107 nie martwi\u0119\n        Mam zaci\u0119ci\u0119, na\u0142og\xF3w si\u0119 wyrzec potrafi\u0119\n        Bo znam rzeczy hierarchi\u0119\n        Mam gruby plan, samorealizacja da mi gratyfikacj\u0119\n        Ale to jutro, jutro, bo jest tyle rzeczy\n        Kt\xF3re musz\u0119 zrobi\u0107 najpierw'
}, {
    type: 'verse',
    index: 4,
    text: '[Oskar] <br />\n        S\u0105, problemy, kt\xF3re musz\u0105 sprawdzi\u0107, czy z nich wybrn\u0119\n        Wyroki, kt\xF3re musz\u0105 sprawdzi\u0107 czy je kiwn\u0119\n        Kwoty, kt\xF3re musz\u0105 sprawdzi\u0107 za ile z\u0142ami\u0119 wytyczne\n        \u015Brodki, kt\xF3re musz\u0105 wstrzykn\u0105\u0107, \u017Ceby sprawdzi\u0107 czy poprawiaj\u0105 warunki fizyczne\n        Rolexy, kt\xF3re musz\u0105 pokaza\u0107, \u017Ce czas leci wolniej\n        Perfumy, kt\xF3re musz\u0105 maskowa\u0107 jej zapach, by zapobiec wojnie\n        Garnitury, kt\xF3re musz\u0105 nosi\u0107, by wygl\u0105da\u0107 modnie\n        I lustra, kt\xF3re musz\u0105 odbi\u0107 moj\u0105 twarz, bym umia\u0142 patrze\u0107 na nich z g\xF3ry ch\u0142odniej\n        Lili\u0119, kt\xF3re musz\u0105 zosta\u0107 spuszczone przez ni\u0105 w kibel\n        Blizny, kt\xF3re musz\u0105 zosta\u0107, gdy rozpierdalam szyb\u0119\n        Naboje, kt\xF3rych musz\u0105 u\u017Cy\u0107, niewa\u017Cny kaliber\n        Religie, kt\xF3re musz\u0119 sprawdzi\u0107, by wiedzie\u0107, kt\xF3re piek\u0142o jest najmniej uci\u0105\u017Cliwe\n        Czerwone, kt\xF3re musz\u0105 mnie stopowa\u0107 jak tych obok\n        Buty, kt\xF3re musz\u0119 mie\u0107, by sprawdzi\u0107, kiedy zetrze si\u0119 logo\n        Maski, kt\xF3re musz\u0119 w\u0142o\u017Cy\u0107, \u017Ceby sprawdzi\u0107 jak to jest by\u0107 tob\u0105\n        Zrobi\u0119 to wszystko i na mi\u0142o\u015B\u0107 bogom, wtedy zajm\u0119 si\u0119 sob\u0105'
}, {
    type: 'chours',
    index: 5,
    text: '[Oskar] <br />\n        Jestem zdyscyplinowany, mam siln\u0105 wol\u0119\n        Wi\u0119c si\u0119 o przysz\u0142o\u015B\u0107 nie martwi\u0119\n        Mam zaci\u0119ci\u0119, na\u0142og\xF3w si\u0119 wyrzec potrafi\u0119\n        Bo znam rzeczy hierarchi\u0119\n        Mam gruby plan, samorealizacja da mi gratyfikacj\u0119\n        Ale to jutro, jutro, bo jest tyle rzeczy\n        Kt\xF3re musz\u0119 zrobi\u0107 najpierw'
}, {
    src: 'https://www.youtube.com/embed/Hha6pwTpDSk?rel=0'
}];

/////////////////////////////////////////////////   K R A J O W A #2   /////////////////////////////////////////////////

var krajowa_2 = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Czekaj, Ty, bo jebni\u0119ta dzwoni. Ty, zobacz. \n        Jeszcze od siostry dzwoni, my\u015Bli, \u017Ce ja nie wiem co to za numer jest. Halo? No i co? \n        No, a co ci m\xF3wi\u0142em? \u017Beby\u015B dzwoni\u0142a, ci m\xF3wi\u0142em. Jeszcze od siostry dzwonisz, a widzisz, a ja mam jej numer. \n        Chcia\u0142a\u015B by\u0107 cwana, a zosta\u0142a\u015B wy... I mi nie przerywaj. Dobra, roz\u0142\u0105czam si\u0119, roz\u0142\u0105czam si\u0119\n        '
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////   P O L S N Y   /////////////////////////////////////////////////

var polsny = [{
    type: 'chours',
    index: 1,
    text: '[Oskar] <br />\n        P\u0142yn\u0105 dni, godziny, minuty, sekundy\n        I coraz wi\u0119cej mi\u0119dzy nami jest r\xF3\u017Cnic\n        A ty zamykasz si\u0119 sama w swej pr\xF3\u017Cni\n        \u015Ani\u0105c swoje p\xF3\u0142sny\n        \n        Ten pok\xF3j jest dla nas zbyt duszny\n        Jest noc, a snop \u015Bwiat\u0142a jest dla nas zbyt brudny\n        Na ko\u0144cu tej drogi jest \u015Bciana, zawr\xF3\u0107my\n        Nie pomo\u017Ce ju\u017C nic       \n        '
}, {
    type: 'verse',
    index: 2,
    text: '[Oskar] <br />\n        Chcia\u0142bym przesta\u0107 ucieka\u0107, biec zn\xF3w za czym\u015B\n        Ale nie potrafi\u0119, a ty nigdy nie zrozumiesz ca\u0142kiem\n        Nic wi\u0119cej nie musz\u0119 t\u0142umaczy\u0107\n        Gdybym musia\u0142, to wszystko to musia\u0142oby mniej znaczy\u0107\n        Wtedy wykop dziur\u0119 zapomnienia i mnie w niej zasyp\n        Gdy mnie przestanie budzi\u0107 tw\xF3j wrzask, a ciebie m\xF3j kac\n        I nie b\u0119dzie ju\u017C szans, bo zbyt du\u017Cy b\u0119dzie tw\xF3j strach\n        I zostanie tw\xF3j p\u0142acz, bo to ostatni ju\u017C raz\n        Pami\u0119taj, \u017Ce czas kt\xF3ry prze\u017Cyli\u015Bmy razem jest ju\u017C nasz'
}, {
    type: 'chours',
    index: 3,
    text: '[Oskar] <br />\n        Godziny, minuty, sekundy\n        I coraz wi\u0119cej mi\u0119dzy nami jest r\xF3\u017Cnic\n        A ty zamykasz si\u0119 sama w swej pr\xF3\u017Cni\n        \u015Ani\u0105c swoje p\xF3\u0142sny\n        \n        Ten pok\xF3j jest dla nas zbyt duszny\n        Jest noc, a snop \u015Bwiat\u0142a jest dla nas zbyt brudny\n        Na ko\u0144cu tej drogi jest \u015Bciana, zawr\xF3\u0107my\n        Nie pomo\u017Ce ju\u017C nic'
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////   S I C K  B O Y   /////////////////////////////////////////////////

var sick_boy = [{
    type: 'verse',
    index: 1,
    text: '[Oskar] <br />\n        Wybra\u0142e\u015B, wi\u0119c \u017Cyj\n        Pracuj, si\u0119 spe\u0142niaj, miej cel\n        Marzenia, przyjaci\xF3\u0142, b\u0142\u0119dy pope\u0142niaj, miej rodzin\u0119\n        Cierpienia, nie miej hajsu, sad\u017A drzewa\n        We\u017A kredyt, sp\u0142a\u0107 kredyt, nie miej czasu\n        Biegaj, sko\u0144cz studia, miej dziewczyn\u0119\n        We\u017A \u015Blub, miej c\xF3rk\u0119, miej k\u0142\xF3tni\u0119\n        We\u017A rozw\xF3d, o\u017Ce\u0144 si\u0119 ponownie\n        Miej dw\xF3jk\u0119 i znowu oddaj jej dom\n        Mercedesa, lod\xF3wk\u0119 i rozs\u0105dek i sukces\n        A niech mieszka z tym chujkiem\n        Pij w\xF3dk\u0119, \u0107paj troch\u0119\n        Zabaw si\u0119, proste\n        Weneryczne zapalenie, nabaw si\u0119, jest ostre\n        Miej kace, melan\u017Ce, powroty nocne\n        Tra\u0107 zdrowie, miej k\u0142opoty, tra\u0107 prac\u0119, pieni\u0105dze\n        Zdob\u0105d\u017A szacunek, fortun\u0119, stabilno\u015B\u0107, przysz\u0142o\u015B\u0107\n        B\u0105d\u017A wierny, odwied\u017A \u015Bwiat, odwied\u017A kasyno, aj\n        Blisko, jedz zdrowo, \u017Cyj d\u0142ugo\n        Pij wino, uwa\u017Caj gdy \u015Blisko\n        Niech ci\u0119 reanimuj\u0105, ty umrzyj\n        Pomimo to wszystko     \n        '
}, {
    src: '' //brak
}];

/////////////////////////////////////////////////  B Y L E M  T A M   /////////////////////////////////////////////////

var bylem_tam = [{
    type: 'verse',
    index: 1,
    text: '[Oskar]\n        By\u0142em po\u015Br\xF3d rozbitych szyb i klatek zat\u0119ch\u0142ych\n        Ma\u0142olatek walni\u0119tych, ich matek nami\u0119tnych\n        Atmosfer napi\u0119tych, ruch\xF3w szale\u0144czych\n        Lokali zast\u0119pczych, zrzut\xF3w pami\u0119tnych\n        Klin\xF3w zbawiennych, wyrzut\xF3w wzajemnych\n        Ekip szlachetnych, d\u0142ug\xF3w zaleg\u0142ych\n        \u015Arodk\xF3w nasennych, klub\xF3w tandetnych\n        Mord zapadni\u0119tych, strup\xF3w zakrzep\u0142ych\n        \n        Po\u015Br\xF3d ma\u0142ych piersi, marnych pensji, pi\u0119kna w\xF3zk\xF3w\n        Tanich lekcji, rannych sesji, kebab kuskus\n        Lepszych wersji, cwanych dup, ich ust retuszu\n        Wielkich \u017Arenic, starych szlug\xF3w, w trumnie trup\xF3w\n        Kart srebrnych, aut, benzyn, d\u0142ugich delir\n        Bram, dzielnic, rad cennych, brudnych melin\n        Samar pe\u0142nych chemii, z gard\u0142a wydzielin\n        Kilku popelin, z kt\xF3rych bym si\u0119 chcia\u0142 wybieli\u0107\n        Sn\xF3w na jawie, p\u0142aczu, zmarnowanych szans na kacu\n        Steryd\xF3w w igle, zwid\xF3w, migren, hajsu w materacu\n        Nocnych zwi\u0105zk\xF3w, dowod\xF3w, wniosk\xF3w, s\u0105d\xF3w, strachu, papug\n        Cug\xF3w, goudy, czub\xF3w, strat kontaktu, braku fakt\xF3w\n        Po\u015Br\xF3d mi\u0142o\u015Bci do niej, \u017Ceby j\u0105 przesta\u0107 kocha\u0107\n        Po\u015Br\xF3d tlenu, kt\xF3ry ch\u0142on\u0119, \u017Ceby go przesta\u0107 wci\u0105ga\u0107\n        Po\u015Br\xF3d ludzi, kt\xF3rych krzywdz\u0119, by od nich przesta\u0107 \u017C\u0105da\u0107\n        Posr\xF3d reszty, kt\xF3r\u0105 widz\u0119, by j\u0105 przesta\u0107 ogl\u0105da\u0107\n        '
}, {
    src: '' //brak
}];

var songListTableLength = [styl_sportowy.length, macki_meduzy.length, v8.length, miedzynarodowa_1.length, lody_wloskie.length, gry_losowe.length, miedzynarodowa_2.length, na_audiencji.length, fair_play.length, rewia.length, krajowa_1.length, gramazeria.length, flary.length, kluby_i_restauracje.length, puerto_rico.length, miedzynarodowa_3.length, hazard.length, miedzynarodowa_4.length, magnolie.length, miedzynarodowa_5.length, golden.length, iskry.length, vanitas.length, krajowa_2.length, polsny.length, sick_boy.length, bylem_tam.length];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////            L Y R I C S              //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////                                ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////        ---- E ----         //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////      ---- N ----       ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////    ---- D ----     //////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////               /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////           ///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var verseHeading = document.querySelector('#verse-heading');
var verse = document.querySelector('#verse');
var choursHeading = document.querySelector('#chours-heading');
var chours = document.querySelector('#chours');

console.log('ilosc zwrotek + refren:  ' + styl_sportowy.length);

var $lirycsWrapper = document.querySelector('#lirycs-wrapper');

var lirycsLength = styl_sportowy.length;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\\ for this variable must create a switch -case structure. by clicking in menu i can catch how track is currentply playing
//if i click on magnolie in the menu case set nameVariable to name of song table, and i can use this for displaying appropriate(wlasciwy) content


///////////////////////////////////////////////////////////////////////////
//must create a function which will be holding info about variable how song is currently showing
// function currentSong(){
//something to write
// s}


////////////////////////////////////////////change lirycs content////////////////////////////////////////////////////////////////

var $trackList = document.getElementById('track-list');
var check = 0;
var $background = document.querySelector("#background");

$trackList.addEventListener('click', function () {
    var importVariables = (0, _track_list.exportVariables)(); //import function which have variable with info about current song
    check = 0; //every click restet clicking count
    document.querySelector('#lirycs-wrapper').innerHTML = ''; //before display new lirycs clear the lirycs container
    $lirycsWrapper.style.display = 'block'; //set visible lirycs wrapper
    $background.classList.add('bg-blur');

    var _loop = function _loop(i) {

        //heading for verse
        var VERSE_INFO = document.createElement('h4');
        VERSE_INFO.id = 'verse-heading';
        VERSE_INFO.classList.add('verseInfoClass');

        function appendVerseInfo() {
            $lirycsWrapper.appendChild(VERSE_INFO);
        }

        //verse
        var VERSE = document.createElement('p');
        VERSE.id = 'verse';
        VERSE.setAttribute('title', 'wykonawca oskar');
        VERSE.classList.add('verseClass');
        // VERSE.innerHTML = importVariables[i].text;
        function appendVerse() {
            $lirycsWrapper.appendChild(VERSE);
        }

        //case for read how is current song ----------------------------------------------------------------------------------

        var iframeSongSrc = document.querySelector('#iframe-yt-song');

        switch (importVariables) {
            case 'styl_sportowy':
                check++;
                if (check <= songListTableLength[0] - 1) {
                    VERSE.innerHTML = styl_sportowy[i].text;
                    VERSE_INFO.innerHTML = styl_sportowy[i].type;
                    iframeSongSrc.src = styl_sportowy[songListTableLength[0] - 1].src; //add song yt vid by info of tbale song
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }

                break;

            case 'macki_meduzy':
                check++;
                if (check <= songListTableLength[1] - 1) {
                    VERSE.innerHTML = macki_meduzy[i].text;
                    VERSE_INFO.innerHTML = macki_meduzy[i].type;
                    iframeSongSrc.src = macki_meduzy[songListTableLength[1] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'v8':
                check++;
                if (check <= songListTableLength[2] - 1) {
                    VERSE.innerHTML = v8[i].text;
                    VERSE_INFO.innerHTML = v8[i].type;
                    iframeSongSrc.src = v8[songListTableLength[2] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'miedzynarodowa_1':
                check++;
                if (check <= songListTableLength[3] - 1) {
                    VERSE.innerHTML = miedzynarodowa_1[i].text;
                    VERSE_INFO.innerHTML = miedzynarodowa_1[i].type;
                    iframeSongSrc.src = miedzynarodowa_1[songListTableLength[3] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'lody_wloskie':
                check++;
                if (check <= songListTableLength[4] - 1) {
                    VERSE.innerHTML = lody_wloskie[i].text;
                    VERSE_INFO.innerHTML = lody_wloskie[i].type;
                    iframeSongSrc.src = lody_wloskie[songListTableLength[4] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'gry_losowe':
                check++;
                if (check <= songListTableLength[5] - 1) {
                    VERSE.innerHTML = gry_losowe[i].text;
                    VERSE_INFO.innerHTML = gry_losowe[i].type;
                    iframeSongSrc.src = gry_losowe[songListTableLength[5] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'miedzynarodowa_2':
                check++;
                if (check <= songListTableLength[6] - 1) {
                    VERSE.innerHTML = miedzynarodowa_2[i].text;
                    VERSE_INFO.innerHTML = miedzynarodowa_2[i].type;
                    iframeSongSrc.src = miedzynarodowa_2[songListTableLength[6] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'na_audiencji':
                check++;
                if (check <= songListTableLength[7] - 1) {
                    VERSE.innerHTML = na_audiencji[i].text;
                    VERSE_INFO.innerHTML = na_audiencji[i].type;
                    iframeSongSrc.src = na_audiencji[songListTableLength[7] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'fair_play':
                check++;
                if (check <= songListTableLength[8] - 1) {
                    VERSE.innerHTML = fair_play[i].text;
                    VERSE_INFO.innerHTML = fair_play[i].type;
                    iframeSongSrc.src = fair_play[songListTableLength[8] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'rewia':
                check++;
                if (check <= songListTableLength[9] - 1) {
                    VERSE.innerHTML = rewia[i].text;
                    VERSE_INFO.innerHTML = rewia[i].type;
                    iframeSongSrc.src = rewia[songListTableLength[9] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'krajowa_1':
                check++;
                if (check <= songListTableLength[10] - 1) {
                    VERSE.innerHTML = krajowa_1[i].text;
                    VERSE_INFO.innerHTML = krajowa_1[i].type;
                    iframeSongSrc.src = krajowa_1[songListTableLength[10] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'gramazeria':
                check++;
                if (check <= songListTableLength[11] - 1) {
                    VERSE.innerHTML = gramazeria[i].text;
                    VERSE_INFO.innerHTML = gramazeria[i].type;
                    iframeSongSrc.src = gramazeria[songListTableLength[11] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'flary':
                check++;
                if (check <= songListTableLength[12] - 1) {
                    VERSE.innerHTML = flary[i].text;
                    VERSE_INFO.innerHTML = flary[i].type;
                    iframeSongSrc.src = flary[songListTableLength[12] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'kluby_i_restauracje':
                check++;
                if (check <= songListTableLength[13] - 1) {
                    VERSE.innerHTML = kluby_i_restauracje[i].text;
                    VERSE_INFO.innerHTML = kluby_i_restauracje[i].type;
                    iframeSongSrc.src = kluby_i_restauracje[songListTableLength[13] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'puerto_rico':
                check++;
                if (check <= songListTableLength[14] - 1) {
                    VERSE.innerHTML = puerto_rico[i].text;
                    VERSE_INFO.innerHTML = puerto_rico[i].type;
                    iframeSongSrc.src = puerto_rico[songListTableLength[14] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'miedzynarodowa_3':
                check++;
                if (check <= songListTableLength[15] - 1) {
                    VERSE.innerHTML = miedzynarodowa_3[i].text;
                    VERSE_INFO.innerHTML = miedzynarodowa_3[i].type;
                    iframeSongSrc.src = miedzynarodowa_3[songListTableLength[15] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'hazard':
                check++;
                if (check <= songListTableLength[16] - 1) {
                    VERSE.innerHTML = hazard[i].text;
                    VERSE_INFO.innerHTML = hazard[i].type;
                    iframeSongSrc.src = hazard[songListTableLength[16] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'miedzynarodowa_4':
                check++;
                if (check <= songListTableLength[17] - 1) {
                    VERSE.innerHTML = miedzynarodowa_4[i].text;
                    VERSE_INFO.innerHTML = miedzynarodowa_4[i].type;
                    iframeSongSrc.src = miedzynarodowa_4[songListTableLength[17] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'magnolie':
                check++;
                if (check <= songListTableLength[18] - 1) {
                    VERSE.innerHTML = magnolie[i].text;
                    VERSE_INFO.innerHTML = magnolie[i].type;
                    iframeSongSrc.src = magnolie[songListTableLength[18] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'miedzynarodowa_5':
                check++;
                if (check <= songListTableLength[19] - 1) {
                    VERSE.innerHTML = miedzynarodowa_5[i].text;
                    VERSE_INFO.innerHTML = miedzynarodowa_5[i].type;
                    iframeSongSrc.src = miedzynarodowa_5[songListTableLength[19] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'golden':
                check++;
                if (check <= songListTableLength[20] - 1) {
                    VERSE.innerHTML = golden[i].text;
                    VERSE_INFO.innerHTML = golden[i].type;
                    iframeSongSrc.src = golden[songListTableLength[20] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'iskry':
                check++;
                if (check <= songListTableLength[21] - 1) {
                    VERSE.innerHTML = iskry[i].text;
                    VERSE_INFO.innerHTML = iskry[i].type;
                    iframeSongSrc.src = iskry[songListTableLength[21] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'vanitas':
                check++;
                if (check <= songListTableLength[22] - 1) {
                    VERSE.innerHTML = vanitas[i].text;
                    VERSE_INFO.innerHTML = vanitas[i].type;
                    iframeSongSrc.src = vanitas[songListTableLength[22] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'krajowa_2':
                check++;
                if (check <= songListTableLength[23] - 1) {
                    VERSE.innerHTML = krajowa_2[i].text;
                    VERSE_INFO.innerHTML = krajowa_2[i].type;
                    iframeSongSrc.src = krajowa_2[songListTableLength[23] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'polsny':
                check++;
                if (check <= songListTableLength[24] - 1) {
                    VERSE.innerHTML = polsny[i].text;
                    VERSE_INFO.innerHTML = polsny[i].type;
                    iframeSongSrc.src = polsny[songListTableLength[24] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'sick_boy':
                check++;
                if (check <= songListTableLength[25] - 1) {
                    VERSE.innerHTML = sick_boy[i].text;
                    VERSE_INFO.innerHTML = sick_boy[i].type;
                    iframeSongSrc.src = sick_boy[songListTableLength[25] - 1].src;

                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;

            case 'bylem_tam':
                check++;
                if (check <= songListTableLength[26] - 1) {
                    VERSE.innerHTML = bylem_tam[i].text;
                    VERSE_INFO.innerHTML = bylem_tam[i].type;
                    iframeSongSrc.src = bylem_tam[songListTableLength[26] - 1].src;
                    appendVerseInfo();
                    appendVerse();
                } else {
                    console.log('You cannot display next time the same song BRO! ' + check);
                }
                break;
        }
    };

    for (var i = 0; i < lirycsLength; i++) {
        _loop(i);
    }
});

//construction which let me set other youtube songs
var iframeSongSrc = document.querySelector('#iframe-yt-song');
},{"./track_list":8}],9:[function(require,module,exports) {
var i = 0;

document.querySelector('.mobile-menu').addEventListener('click', function () {
    i++;
    console.log('menu button clikc: ' + i);
    if (i == 1) {
        document.querySelector('.navbar').style.opacity = 1;
        document.querySelector('.navbar').style.left = '0vw';
        document.querySelector('.mobile-menu').classList.toggle('mobile-menu-animation-in');
    } else {
        //document.querySelector('.mobile-menu').classList.remove ('.mobile-menu-animation-in');
        document.querySelector('.mobile-menu').classList.toggle('mobile-menu-animation-out');
        document.querySelector('.navbar').style.opacity = 1;
        document.querySelector('.navbar').style.left = '100%';
        i = 0;
    }
});

document.querySelector('#track-list').addEventListener('click', function () {
    document.querySelector('#track-title').classList.add('animation1');
    document.querySelector('#track-author').classList.add('animation1');
    document.querySelector('#track-time').classList.add('animation1');
    if (window.innerWidth < 1240) {
        document.querySelector('.navbar').style.left = '100%';
    }
});
},{}],13:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],11:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":13}],7:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./..\\img\\front.jpg":[["b42319c5b74b2e152ba284a2b143777c.jpg",12],12],"_css_loader":11}],6:[function(require,module,exports) {
'use strict';

require('./track_list');

require('./lirycs');

require('./menu');

require('../scss/main.scss');
},{"./track_list":8,"./lirycs":10,"./menu":9,"../scss/main.scss":7}],16:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59054' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[16,6])
//# sourceMappingURL=/dist/38f066da5142a9866c24d63fb639149a.map