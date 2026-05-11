const ticTac = document.querySelector(".ticTac");
const boxes = document.querySelectorAll(".box")
const h1 = document.getElementsByTagName("h1")
const rBtn = document.getElementById("rstBtn")

let currentPlayer = "X";
let count = 0

let winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startGame(e){
  if (e.target.className !== "ticTac") {
    if (e.target.innerText === "") {
      e.target.textContent = currentPlayer;
      count++
      winner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    if(count === 9){
      h1[0].innerText = "Match Draw"
    }
  }
}

ticTac.addEventListener("click", startGame);


function winner(){
    winningCondition.forEach((item) => {
        let index0 = item[0]
        let index1 = item[1]
        let index2 = item[2]
        // console.log(item[0], item[1], item[2])
        let val0 = boxes[index0].innerText
        let val1 = boxes[index1].innerText
        let val2 = boxes[index2].innerText
        // console.log(index0, val0, index1, val1, index2, val2)

        if(val0 !== '' && val1 !== '' && val2 !== ''){
          if(val0 === val1 && val1 === val2){
            // boxes[index0].style.backgroundColor = "green"
            boxes[index0].classList.add("winnerClass")
            boxes[index1].classList.add("winnerClass")
            boxes[index2].classList.add("winnerClass")
            count = 0
            h1[0].innerText = `winner is ${val0}` 
              // console.log("winner is ", val0)
              ticTac.removeEventListener('click', startGame)
          }
        }
    })
}

rBtn.addEventListener("click", () => {
  currentPlayer = "X"
  h1[0].innerText = "Tic Tac Toe"
  boxes.forEach(item => {
    item.classList.remove("winnerClass")
    item.innerText = ''
  })
  ticTac.addEventListener("click", startGame);
})