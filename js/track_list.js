const $trackList = document.getElementById('track-list');

const date = [
    {id: 1, title: 'Styl sportowy', time: '2:52'},
    {id: 2, title: 'Macki meduzy', time: '3:04'},
    {id: 3, title: 'V8', time: '2:49'},
    {id: 4, title: 'Miedzynarodowa #1', time: '0:37'},
    {id: 5, title: 'Lody włoskie', time: '3:06'},
    {id: 6, title: 'Gry losowe', time: '1:32'},
    {id: 7, title: 'Międzynarodowa #2', time: '0:22'},
    {id: 8, title: 'Na audiencji', time: '3:33'},
    {id: 9, title: 'Fair play', time: '3:24'},
    {id: 10, title: 'Rewia', time: '3:37'},
    {id: 11, title: 'Krajowa #1', time: '0:24'},
    {id: 12, title: 'Gramażeria', time: '1:54'},
    {id: 13, title: 'Flary', time: '3:31'},
    {id: 14, title: 'Kluby i restauracje', time: '1:09'},
    {id: 15, title: 'Puerto Rico', time: '1:50'},
    {id: 16, title: 'Międzynarodowa #3', time: '0:23'},
    {id: 17, title: 'Hazard', time: '2:38'},
    {id: 18, title: 'Międzynarodowa #4', time: '0:51'},
    {id: 19, title: 'Magnolie', time: '3:05'},
    {id: 20, title: 'Międzynarodowa #5', time: '0:23'},
    {id: 21, title: 'Golden', time: '3:41'},
    {id: 22, title: 'Iskry', time: '2:24'},
    {id: 23, title: 'Vanitas', time: '3:28'},
    {id: 24, title: 'Krajowa #2', time: '0:41'},
    {id: 25, title: 'Półsny', time: '2:01'},
    {id: 26, title: 'Sick boy', time: '1:38'},
    {id: 27, title: 'Byłem tam', time: ''}
];

const dateLength = date.length;

const $trackTitle = document.querySelector('#track-title');
const $time = '';


function showTrackList(){
    const dateLength = date.length;

    for (let i = 0; i < dateLength; i++){
        
        const el_li = document.createElement("li");
        
        el_li.id = "li"+i;
        el_li.classList.add("list-item");
        el_li.innerText = `[ ${date[i].id} ] ${date[i].title}`;
        el_li.setAttribute("title", `${date[i].id} | ${date[i].title}`);

        const el_span = document.createElement("span");

        el_span.classList.add("track-time");
        el_span.innerText = ` ${date[i].time}`;

        $trackList.appendChild(el_li);
        document.getElementById('li'+i).appendChild(el_span);

    }
  }

showTrackList(date);


///////////////////////////////////////////////////////////////////
/////////////////////                      ///////////////////////
///////////////////      choicing track      ////////////////////
////////////////////                       /////////////////////
///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

const $songTime = document.querySelector('#track-time');

let qq = document.querySelector('#li'+'0').textContent.charAt(2) + document.querySelector('#li'+'0').textContent.charAt(3); // catch info about number of li in list

let currentSong = 'default';

$trackList.addEventListener('click', function(){
  let liTarget = event.target.id; //show us which track was clicked, showing us id of the clicked element

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


export function exportVariables(){
  return currentSong;
}