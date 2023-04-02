let cards = document.getElementsByClassName('card');
let frontCards = document.getElementsByClassName('front');
let backCards = document.getElementsByClassName('back');
let clickCount = 0;
let selectCardImages = [];
let selectBackCards =[];
let selectFrontCards =[];
let selectCards =[];

// 乱数を生成
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//ランダムにカードを配置
function arrangementCards(){
  let randomNumArray=[];
  let cycleCount = [0,0,0,0,0,0];
  for(let i =0; randomNumArray.length<12;i++){
    let resultNum = getRandomInt(6);
    resultNum++;
    for(let q=0;q<6;q++){
      let e = q + 1;
      if(cycleCount[q]<2 && resultNum == e){
        randomNumArray.push(resultNum);
        cycleCount[q]++;
      }
    }
  }
  for(let i=0;i<randomNumArray.length;i++){
    let q=i+1;
    frontCards[i].classList.add('card-'+randomNumArray[i]);
  }
  return randomNumArray;
}




window.addEventListener('load',function(){
  let randomNumArray = arrangementCards();

  for( let i=0;i < cards.length; i++){
    cards[i].addEventListener('click',()=>{

      if(selectCardImages.length<2){
        selectCardImages.push(randomNumArray[i]);
        selectBackCards.push(backCards[i]);
        selectFrontCards.push(frontCards[i]);
        selectCards.push(cards[i]);
        // console.log(i);
        // カードめくり開始
        backCards[i].classList.add('back-rotate');
        setTimeout(function(){
          frontCards[i].classList.add('front-rotate');
        },300)
        console.log(selectCards);
        // カードめくり終了
        // 2枚のカードを引いた際の処理
        clickCount++;
        if(clickCount == 2){
          this.setTimeout(function(){
            if(selectCardImages[0] == selectCardImages[1]){
              selectBackCards[0].style.display='none';
              selectBackCards[1].style.display='none';
            }else{
              selectBackCards[0].classList.remove('back-rotate');
              selectBackCards[1].classList.remove('back-rotate');
              selectFrontCards[0].classList.remove('front-rotate');
              selectFrontCards[1].classList.remove('front-rotate');

            }
            selectCardImages = [];
            selectBackCards =[];
            selectFrontCards =[];
            selectCards =[];
            clickCount=0
          }, 1500)
        }
      }
    })
  }
})


