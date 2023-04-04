let tabs = document.getElementsByClassName('tab');
let imgs = document.getElementsByClassName('img');

let removeClass = function(){
  for(let i=0;i<tabs.length;i++){
    tabs[i].classList.remove('selected');
    imgs[i].classList.remove('show');
  }
}


for(let i=0;i<tabs.length;i++){
  tabs[i].addEventListener('click',function(){
    removeClass();
    tabs[i].classList.add('selected');
    imgs[i].classList.add('show');
  })
}