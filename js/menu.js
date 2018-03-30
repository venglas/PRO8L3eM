let i = 0;

document.querySelector('.mobile-menu').addEventListener('click', function() {
    i++;
    console.log('menu button clikc: ' + i);
    if(i == 1){
        document.querySelector('.navbar').style.opacity = 1;
        document.querySelector('.navbar').style.left = '0vw';
        document.querySelector('.mobile-menu').classList.toggle ('mobile-menu-animation-in');
    } else {
        //document.querySelector('.mobile-menu').classList.remove ('.mobile-menu-animation-in');
        document.querySelector('.mobile-menu').classList.toggle ('mobile-menu-animation-out');
        document.querySelector('.navbar').style.opacity = 1;
        document.querySelector('.navbar').style.left = '100%';
        i = 0;
    }
    
});

document.querySelector('#track-list').addEventListener('click', function(){
    document.querySelector('#track-title').classList.add('animation1');
    document.querySelector('#track-author').classList.add('animation1');
    document.querySelector('#track-time').classList.add('animation1');
    if (window.innerWidth < 1240) { 
        document.querySelector('.navbar').style.left = '100%';
     }
});