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