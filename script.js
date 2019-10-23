window.addEventListener("load", function() {
  const gameStatus = document.getElementById('status');
  const gameResult = document.getElementById('result');
  const layer = document.getElementById('layer');
  const btn = document.getElementById('btn');
  const symbol1 = document.getElementById('player1');
  const symbol2 = document.getElementById('player2');
//  layer.style.visibility = "visible";
  let newGame = false;
  let point = 0;
  let cell = [];
  let idx = 0;
  for (let i=1; i<=9; i++) {
    cell.push(document.getElementById('img'+i));
  }
  let cellArr = ['A','B','C','D','E','F','G','H','I'];
  let timer;
  let symbols = ['o','x'];

const disp = document.getElementById('disp');
const dispx = document.getElementById('dispx');
const disp3 = document.getElementById('disp3');

const disp4 = document.getElementById('disp4');
const disp5 = document.getElementById('disp5');


  let rnd = Math.floor(Math.random() * 2);

  let notRnd = (symbols[rnd] === 'x') ? 'o' : 'x';

  let playerSymbol = {
    player1: symbols[rnd],
    player2: notRnd
  }
  symbol1.src = playerSymbol.player1 + ".png";
  symbol2.src = notRnd + ".png";
  //let pickTurn = players[rnd];

  let turn = 'player';
  let botTimer;
  let index = Math.floor(Math.random() * 9);
  let isClicked = [false,false,false,false,false,false,false,false,false];

/*
  for (let e=0; e<9; e++) {
    cell[e].addEventListener("mousedown", function() {
      //alert('mousedown');
      if (gameStatus.innerHTML === "GAME OVER") {
        clearTimeout(botTimer);
      }
    });
  }
*/

  function botPlay(index) {
    let z = -1;
    if (gameStatus.innerHTML !== "GAME OVER") {
      if (abEq(cellArr[0],cellArr[1],playerSymbol.player1,2,1)[0] || abEq(cellArr[1],cellArr[2],playerSymbol.player1,0,2)[0] || abEq(cellArr[0],cellArr[2],playerSymbol.player1,1,3)[0]
      || abEq(cellArr[3],cellArr[4],playerSymbol.player1,5,4)[0] || abEq(cellArr[4],cellArr[5],playerSymbol.player1,3,5)[0] || abEq(cellArr[3],cellArr[5],playerSymbol.player1,4,6)[0]
      || abEq(cellArr[6],cellArr[7],playerSymbol.player1,8,7)[0] || abEq(cellArr[7],cellArr[8],playerSymbol.player1,6,8)[0] || abEq(cellArr[6],cellArr[8],playerSymbol.player1,7,9)[0]
        || abEq(cellArr[0],cellArr[3],playerSymbol.player1,6,10)[0] || abEq(cellArr[3],cellArr[6],playerSymbol.player1,0,11)[0] || abEq(cellArr[0],cellArr[6],playerSymbol.player1,3,12)[0]
        || abEq(cellArr[1],cellArr[4],playerSymbol.player1,7,13)[0] || abEq(cellArr[4],cellArr[7],playerSymbol.player1,1,14)[0] || abEq(cellArr[1],cellArr[7],playerSymbol.player1,4,15)[0]
         || abEq(cellArr[2],cellArr[5],playerSymbol.player1,8,16)[0] || abEq(cellArr[5],cellArr[8],playerSymbol.player1,2,17)[0] || abEq(cellArr[2],cellArr[8],playerSymbol.player1,5,18)[0]
         || abEq(cellArr[0],cellArr[4],playerSymbol.player1,8,19)[0] || abEq(cellArr[4],cellArr[8],playerSymbol.player1,0,20)[0] || abEq(cellArr[0],cellArr[8],playerSymbol.player1,4,21)[0]
          || abEq(cellArr[2],cellArr[4],playerSymbol.player1,6,22)[0] || abEq(cellArr[4],cellArr[6],playerSymbol.player1,2,23)[0]|| abEq(cellArr[2],cellArr[6],playerSymbol.player1,4,24)[0]) {
            z = arr2[2];
            //disp4.innerHTML = z;
          //  let key = arr2[3];
          //  alert(keyArr);
          //  disp4.innerHTML = key;
          // disp5.innerHTML = keyArr;
          //  alert(arr2);
          //  if (isClicked[z] === false && !(keyArr.includes(key))) {
          if (isClicked[z] === false) {
          //    alert(z);
              index = z.toString();
            //  keyArr.push(key);
                //alert(index);
            //  arr[1] = 'Mr. Bot';
            }

          //  botTimer = setTimeout(botPlay, 10, index);
        }
        if (abEq(cellArr[0],cellArr[1],playerSymbol.player2,2)[0] || abEq(cellArr[1],cellArr[2],playerSymbol.player2,0)[0] || abEq(cellArr[0],cellArr[2],playerSymbol.player2,1)[0]
        || abEq(cellArr[3],cellArr[4],playerSymbol.player2,5)[0] || abEq(cellArr[4],cellArr[5],playerSymbol.player2,3)[0] || abEq(cellArr[3],cellArr[5],playerSymbol.player2,4)[0]
        || abEq(cellArr[6],cellArr[7],playerSymbol.player2,8)[0] || abEq(cellArr[7],cellArr[8],playerSymbol.player2,6)[0] || abEq(cellArr[6],cellArr[8],playerSymbol.player2,7)[0]
          || abEq(cellArr[0],cellArr[3],playerSymbol.player2,6)[0] || abEq(cellArr[3],cellArr[6],playerSymbol.player2,0)[0] || abEq(cellArr[0],cellArr[6],playerSymbol.player2,3)[0]
          || abEq(cellArr[1],cellArr[4],playerSymbol.player2,7)[0] || abEq(cellArr[4],cellArr[7],playerSymbol.player2,1)[0] || abEq(cellArr[1],cellArr[7],playerSymbol.player2,4)[0]
           || abEq(cellArr[2],cellArr[5],playerSymbol.player2,8)[0] || abEq(cellArr[5],cellArr[8],playerSymbol.player2,2)[0] || abEq(cellArr[2],cellArr[8],playerSymbol.player2,5)[0]
           || abEq(cellArr[0],cellArr[4],playerSymbol.player2,8)[0] || abEq(cellArr[4],cellArr[8],playerSymbol.player2,0)[0] || abEq(cellArr[0],cellArr[8],playerSymbol.player2,4)[0]
            || abEq(cellArr[2],cellArr[4],playerSymbol.player2,6)[0] || abEq(cellArr[4],cellArr[6],playerSymbol.player2,2)[0]|| abEq(cellArr[2],cellArr[6],playerSymbol.player2,4)[0]) {
               z = arr2[2];

               //disp5.innerHTML = z;
          //  alert(z);
              if (isClicked[z] === false) {
                index = z.toString();
                  //alert(index);
              //  arr[1] = 'Mr. Bot';
              }
            }

    if (turn === 'Mr. Bot') {
      cell[Number(index)].src = playerSymbol.player2 + ".png";
    //  gameStatus.innerHTML = playerSymbol[turn];

      isClicked[Number(index)] = true;
      cellArr[Number(index)] = playerSymbol.player2;
      //dispx.innerHTML = cellArr + isClicked;
      cnt++;
      //disp.innerHTML = cnt;
      idx = Number(index);
      turn = 'player';
    //  alert(idx);
    //  clearInterval(botTimer);
    }
   }

  }

  let cnt = 0;

  for (let i=0; i<9; i++) {
    cell[i].addEventListener("click", function() {
      //alert(isClicked);
      if (isClicked[i] === false && newGame === true) {
        //alert(turn);
        if (turn === 'player') {
          cell[i].src = playerSymbol.player1 + ".png";
          cellArr[i] = playerSymbol.player1;
      //   dispx.innerHTML = cellArr + isClicked;
          cnt++;
          idx = i;
          //alert(idx);
          isClicked[i] = true;

        //  disp3.innerHTML = '!';

      //    disp.innerHTML = cnt;
          //let k = 0;
          //for (let i=0; i<9; i++) {
          while (cellArr[index] === 'x'  || cellArr[index] === 'o' && cnt < 9) {
          //  k++;
            index = Math.floor(Math.random() * 9);
          //  alert(index);
          }
        //}
        //alert(index);
      //  if (gameStatus.innerHTML !== "GAME OVER !!!") {
    if (gameStatus.innerHTML !== "GAME OVER") {
        botTimer = setTimeout(botPlay, 1000, (index).toString());
        turn = 'Mr. Bot';

      //  disp4.innerHTML = botTimer;

     }

}
      //  }
    } else {
          //isClicked[i] === true;

          if (cnt === 0 || gameStatus.innerHTML === "GAME OVER") {
            //newGame = false;
          //  for (let j=0; j<9; j++) {
              //  isClicked[i] = true;
            //}
                      alert("Click on New Game!");
          }


        }

      //  cellArr[i] = playerSymbol[turn];


      //}
    });
  }
  let arr = [];
  function abcEq(a,b,c,d) {
    arr = [];
    if (a === b && b === c) {
      arr.push(true,a,d);
    //  alert(arr);
      return arr;
    } else {
      return [false,a];
    }
  }

  let arr2 = [];
  let keyArr = [];
  function abEq(a,b,v,d,k) {
    arr2 = [];

    if (a === b && b === v && !(keyArr.includes(k))) {
      keyArr.push(k);
    //  alert(keyArr);
      arr2.push(true,a,d,k);

    //  alert(arr);
      return arr2;
    } else {
      return [false,a];
    }
  }

    let repeat = false;
  function scoreBot() {
    if (gameStatus.innerHTML !== "GAME OVER") {
    if (abcEq(cellArr[0],cellArr[1],cellArr[2])[0] || abcEq(cellArr[3],cellArr[4],cellArr[5])[0] || abcEq(cellArr[6],cellArr[7],cellArr[8])[0] || abcEq(cellArr[0],cellArr[3],cellArr[6])[0]
    || abcEq(cellArr[1],cellArr[4],cellArr[7])[0] || abcEq(cellArr[2],cellArr[5],cellArr[8])[0] || abcEq(cellArr[0],cellArr[4],cellArr[8])[0] || abcEq(cellArr[2],cellArr[4],cellArr[6])[0]) {
      //clearInterval(botTimer);
      //
      layer.style.visibility = "visible";
    //  newGame = false;
      gameStatus.innerHTML = "GAME OVER";
      //alert('&' + gameStatus.innerHTML + '&')
      //gameResult.innerHTML = "<<<<< " + arr[1].toUpperCase() + " WON >>>>>";
      let winner = (playerSymbol.player1 === arr[1]) ? 'Player' : 'Mr. Bot';
      gameResult.innerHTML = "<<<<< " + winner + " won >>>>>";
    //  alert("<<<<< " + winner + " won >>>>>");
    winner = winner.replace('. ', '');
  //  alert(winner);

  if (repeat === false) {
    let pScore = document.getElementById(winner.toLowerCase());
    point = Number(pScore.innerHTML);
    point++;
    //alert(point);
    pScore.innerHTML = point;
    repeat = true;
  }
    clearInterval(timer);

    } else if (cnt === 9 && !(cellArr.includes('A')) && !(cellArr.includes('B')) && !(cellArr.includes('C')) && !(cellArr.includes('D')) && !(cellArr.includes('E')) &&
    !(cellArr.includes('F'))  && !(cellArr.includes('G'))  && !(cellArr.includes('H'))  && !(cellArr.includes('I')) ) {
    //  clearInterval(botTimer);
    //  clearInterval(timer);
       layer.style.visibility = "visible";
        //newGame = false;
        gameStatus.innerHTML = "GAME OVER";
        gameResult.innerHTML = "<<<<< It's a tie >>>>>";
        clearInterval(timer);
    //  alert("<<<<< It's a draw >>>>>");
        //clearInterval(botTimer);
        //clearInterval(timer);
  //  } else {
    //  disp3.innerHTML = 'index = ' + index + ', newGame = ' + newGame;
  }
  }
  }
  function gameReset() {
    newGame = true;
    repeat = false;
    cnt = 0;
    keyArr = [];
    //timer = undefined;
  //  botTimer = undefined;

  turn = 'player';
    // disp4.innerHTML = botTimer;

    cellArr = ['A','B','C','D','E','F','G','H','I'];
    arr = [];
    arr2 = [];
    gameStatus.innerHTML = "&nbsp;";
    gameResult.innerHTML = "&nbsp;";
    for (let i=0; i<9; i++) {
      cell[i].src = "black.png";
      isClicked[i] = false;
    }
  }
  btn.addEventListener("click", function() {
    gameReset();
    layer.style.visibility = "hidden";
    timer = setInterval(scoreBot, 1000);
  });

  layer.addEventListener("click", function() {
    alert("Click on New Game!");
  });

});
