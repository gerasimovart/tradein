
// Drop-menu

let btn = document.querySelector('#btn'),
    li = document.querySelectorAll('.li');

btn.addEventListener('click', function(){
    if(li[0].classList.contains('hide')){
        btn.classList.add('btn-press');
        for(let i = 0; i < li.length; i++){
            li[i].classList.remove('hide');
            li[i].classList.add('show');
        }
    }else if(li[0].classList.contains('show')){
        btn.classList.remove('btn-press');
        for(let i = 0; i < li.length; i++){
            li[i].classList.remove('show');
            li[i].classList.add('hide');
        }
    }
}); 

// Modal window offer

let closeBtn = document.querySelector('.cancel'),
    elem = document.querySelector('.dark-screen'),
    offerArrow = document.querySelectorAll('.right-arrow'),
    offerBtn = document.querySelectorAll('.offer button'),
    siteArrow = document.querySelectorAll('.arrow'),
    siteBtn = document.querySelectorAll('.site button');



function openWin(){
    if(elem.classList.contains('hide')){
        elem.classList.remove('hide');
        elem.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeWin(){
    if(elem.classList.contains('show')){
        elem.classList.remove('show');
        elem.classList.add('hide');
        document.body.style.overflow = '';
    }
}

// Open modal window

for(let i = 0; i < offerArrow.length; i++){

    offerArrow[i].addEventListener('click', openWin);
    offerBtn[i].addEventListener('click', openWin);
}


for(let i = 0; i < siteArrow.length; i++){

    siteArrow[i].addEventListener('click', openWin);
    siteBtn[i].addEventListener('click', openWin);
}

// Close modal window

closeBtn.addEventListener('click', closeWin);