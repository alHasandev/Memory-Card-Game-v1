// grab initial elements
const section = document.querySelector("section");
const playerLifes = document.querySelector("#player-lifes");
const pregame = document.querySelector("#pregame");
const gameover = document.querySelector("#gameover");
const lifes = 6;
let lifesCount;
let openedCards;

/**
 * Get data for cards element
 * @returns Array of card data (src, name)
 */
const getData = () => [
  {
    src: "images/ape.jpg",
    name: "ape",
  },
  {
    src: "images/cat.jpg",
    name: "cat",
  },
  {
    src: "images/birds.jpg",
    name: "birds",
  },
  {
    src: "images/ducks.jpg",
    name: "ducks",
  },
  {
    src: "images/lion.jpg",
    name: "lion",
  },
  {
    src: "images/fox.jpg",
    name: "fox",
  },
  {
    src: "images/tiger.jpg",
    name: "tiger",
  },
  {
    src: "images/sheeps.jpg",
    name: "sheeps",
  },
  {
    src: "images/ape.jpg",
    name: "ape",
  },
  {
    src: "images/cat.jpg",
    name: "cat",
  },
  {
    src: "images/birds.jpg",
    name: "birds",
  },
  {
    src: "images/ducks.jpg",
    name: "ducks",
  },
  {
    src: "images/lion.jpg",
    name: "lion",
  },
  {
    src: "images/fox.jpg",
    name: "fox",
  },
  {
    src: "images/tiger.jpg",
    name: "tiger",
  },
  {
    src: "images/sheeps.jpg",
    name: "sheeps",
  },
];

/**
 * Randomize array of data
 * @param {Array} data
 * @returns Random sorted array of data
 */
const randomizeData = (data) => {
  return data.sort(() => Math.random() - 0.5);
};

/**
 * Generate card from data
 * @param {Array} data of card
 */
const generateCards = (data) => {
  data.forEach((d) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

    card.classList.add("card");
    card.dataset.name = d.name;
    section.appendChild(card);

    face.classList.add("face");
    face.src = d.src;
    card.appendChild(face);

    back.classList.add("back");
    card.appendChild(back);

    // add card event listener on click
    card.addEventListener("click", (e) => {
      // console.log(card);
      card.classList.toggle("toggle");
      card.classList.add("active");
      const activeCards = document.querySelectorAll(".active");
      if (activeCards.length > 1) {
        console.log(activeCards);
        if (activeCards[0].dataset.name === activeCards[1].dataset.name) {
          openedCards += 2;
          activeCards.forEach((card) => card.classList.remove("active"));
        } else {
          console.log("not match");
          setTimeout(() => {
            activeCards.forEach((card) => card.classList.remove("toggle"));
            lifesCount--;
            playerLifes.querySelector("span").innerText = lifesCount;
            activeCards.forEach((card) => card.classList.remove("active"));
            // Game over if lifes is zero
            if (lifesCount === 0) {
              gameOver();
            }
          }, 1000);
        }
      } else {
        // activeCards.push(card.dataset.name);
      }

      // Game over if win game
      if (openedCards === 16) {
        gameOver();
      }

      console.log(openedCards);
    });
  });
};

/**
 * Initialize Game Element
 */
function initializeGame() {
  // reset game
  lifesCount = lifes;
  openedCards = 0;
  section.innerHTML = "";

  const data = randomizeData(getData());
  playerLifes.querySelector("span").innerText = lifesCount;
  generateCards(data);
}

/**
 * Start game
 */
function startGame() {
  pregame.classList.add("none");
}

/**
 * ReTry Game
 */
function retryGame() {
  location.href = "";
}

/**
 * Game Over
 */
function gameOver() {
  gameover.classList.remove("none");
}

initializeGame();
