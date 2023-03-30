let close=document.getElementById('close');

let dateBtn = document.getElementById('date');

close.addEventListener('click',()=>{
  let confirm = window.confirm('jsソッド一覧を出しますか');
  if(confirm){
    window.open('https://bituse.info/js/ref/1');
  }else{
    window.alert('キャンセルしました');
  }

  
  
})
dateBtn.addEventListener('click',()=>{
  console.log('こんにちは');
  let date = new Date();
  window.alert(date.getFullYear());
})



