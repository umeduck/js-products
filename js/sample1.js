let tabs = document.getElementsByClassName("tab");
let contents = document.getElementsByClassName("content");

let removeClass = () => {
  for(let i=0;i<tabs.length;i++){
    tabs[i].classList.remove('select');
    contents[i].classList.remove('show');
  }
}

for(let i=0;i<tabs.length;i++){
  tabs[i].addEventListener('click',()=>{
    removeClass();
    tabs[i].classList.add('select');
    contents[i].classList.add('show');
  });
}