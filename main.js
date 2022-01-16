/////////////////////////////
//      WINDOW LOADED      //
////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  Swal.fire({
    allowOutsideClick: false,
    title: "En que consisteix:",
    icon: "info",
    text: "En aquest joc aprendreu quins sortides professionals els quals podeu optar, per aixo haurieu de jugar i agafar-les",
    confirmButtonText: "Perfecte!",
  }).then((result) => {
    if (result.isConfirmed) {
      displayInstruccions();
    }
  });
});

/////////////////////////////
//         VARIABLES       //
////////////////////////////

const GRID = document.querySelector(".grid");
const DOODLER = document.createElement("img");
const GRIDWIDTH = GRID.clientWidth;
const GRIDHEIGHT = GRID.clientHeight;
let velocityPlatform = 25;
let velocityJump = 25;
let velocityFall = 13;
let velocityLeft = 30;
let velocityRight = 30;

let startPoint = 400;
let doodlerLeftSpace = 50;
let platformWidth = 85;
let platformCount = 5;
let doodlerBottomSpace = startPoint;

let isGameOver = false;
let isJumping = true;
let platformTimerId;

let score;

let job_oportunities = [
  {
    cicle: "Grau superior desenvolupament aplicacions web",
    job: "Front-end Developer",
    description:
      "- Dissenyar interfícies d’usuari.\r\n- Generar contingut multimèdia.\r\n- Programar la interacció amb l’usuari.",
  },
  {
    cicle: "Grau superior desenvolupament aplicacions web",
    job: "Back-end Developer",
    description:
      "- Crear base de dades.\r\n- Programar les funcionalitats de la capa de negoci.\r\n- Programar APIs / web services.",
  },
  {
    cicle: "Grau superior desenvolupament aplicacions web",
    job: "Analista",
    description:
      "- Investigar i detectar necessitats.\r\n- Dissenyar bases de dades.\r\n- Dissenyar interfícies de les aplicacions.\r\n- Crear diagrames UML.",
  },
];

let cyclesdesc = [
  {
    cicle: "Grau superior desenvolupament aplicacions web",
    description:
      "Aprèn a dissenyar i programar eines web que permetin oferir una òptima presència d’empreses i altres organitzacions a internet. La utilitat, l’accessibilitat i la usabilitat d’aquestes aplicacions han de proporcionar la millor experiència als usuaris",
  },
];

let ranking = {
  data: [
    {
      id: 5,
      nickname: "test4",
      points: 310,
    },
    {
      id: 4,
      nickname: "test3",
      points: 300,
    },
    {
      id: 3,
      nickname: "test2",
      points: 250,
    },
    {
      id: 2,
      nickname: "test1",
      points: 200,
    },
    {
      id: 6,
      nickname: "test5",
      points: 150,
    },
  ],
  data_user:[]
};

/////////////////////////////
//        GAME OVER        //
////////////////////////////

//game over
function gameOver() {
  isGameOver = true;
  //stops game
  while (GRID.firstChild) {
    GRID.removeChild(GRID.firstChild);
  }
  //stops doodler + platform
  clearInterval(upTimerId);
  clearInterval(downTimerId);
  clearInterval(leftTimerId);
  clearInterval(rightTimerId);
  clearInterval(platformTimerId);

  platforms = [];
  goodThings = [];
  badThings = [];

  displayFinalScreen(); //show final screen with info
  //stop timer
  stopCount();
  //send_score(scoreFinal, id_game, user_id, cycle_id);
}

/////////////////////////////
//        START GAME       //
////////////////////////////

//start game

  function start() {
    while (GRID.firstChild) {
      GRID.removeChild(GRID.firstChild);

      isGameOver = false;
    }
    if (!isGameOver) {
      minute = 2;
      seconds = 0;
      score = 0;
      doodlerBottomSpace = 400;
      createPlatfoms();
      createDoodler();

      document.addEventListener("keydown", control);
      document.addEventListener("keyup", stopControl);

    }
  }
