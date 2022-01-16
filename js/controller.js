/////////////////////////////
//         VARIABLES       //
////////////////////////////

let isGoingLeft = false;
let isGoingRight = false;

let leftTimerId;
let rightTimerId;

/////////////////////////////
//        MOVE LEFT        //
////////////////////////////

//when doodler is going left
function moveLeft() {
  if (isGoingRight) {
    clearInterval(rightTimerId);
    isGoingRight = false;
  }
  isGoingLeft = true;
  //so that doodler won't keep going right and will stop
  leftTimerId = setInterval(() => {
    if (doodlerLeftSpace > 10) {
      doodlerLeftSpace -= 20;
      DOODLER.style.left = doodlerLeftSpace + "px";
      isGoingLeft = false;
    } else if (doodlerLeftSpace <= 10) {
      doodlerLeftSpace += GRIDWIDTH - 25;
    } else {
      moveRight();
    }
  }, velocityLeft);
}

/////////////////////////////
//        MOVE RIGHT       //
////////////////////////////

//when doodler is going right
function moveRight() {
  if (isGoingLeft) {
    clearInterval(leftTimerId);
    isGoingLeft = false;
  }
  isGoingRight = true;
  //so that doodler won't keep going right and will stop 
  rightTimerId = setInterval(function () {
    if (doodlerLeftSpace <= GRIDWIDTH - 60) {
      doodlerLeftSpace += 20;
      DOODLER.style.left = doodlerLeftSpace + "px";
    } else if (doodlerLeftSpace > GRIDWIDTH - 60) {
      doodlerLeftSpace -= GRIDWIDTH - 25;
    } else {
      moveLeft();
    }
  }, velocityRight);
}

/*  /////////////////////////////
//      MOVE STARIGHT      //
////////////////////////////

//move straight
function moveStraight() {
  isGoingLeft = false;
  isGoingRight = false;
  clearInterval(leftTimerId);
  clearInterval(rightTimerId);
}  */

/////////////////////////////
//         CONTROL         //
////////////////////////////

//Start controller
function control(e) {
  //so that when key is pressed continuosly it won't keep calling the event. n
  if (e.repeat) {
    return;
  }
  if (e.key === "ArrowLeft") {
    //move left
    moveLeft();
  } else if (e.key === "ArrowRight") {
    //move right
    moveRight();
  } else if (e.key === " " || e.key === "Spacebar") {
    platformTimerId = setInterval(movePlatforms, velocityPlatform); //every 25/1000
    jump();
    countScore(score);
    startCountTime();
  } /* else if (e.key === "ArrowUp") {
    //move sraight up
    moveStraight();
  } */


/*   switch (e.key) {
    case "ArrowLeft":
      //move left
      moveLeft();
      break;

    case "ArrowRight":
      //move right
      moveRight();
      break;

    default:
      break;
  } */
}

// STOP controller
function stopControl(e) {
  //so that when key is pressed continuosly it won't keep calling the event.
  if (e.repeat) {
    return;
  }
  if (e.key === "ArrowLeft") {
    //move left
    isGoingLeft = false;
    clearInterval(leftTimerId);
  } else if (e.key === "ArrowRight") {
    //move right
    isGoingRight = false;
    clearInterval(rightTimerId);
  } /* else if (e.key === "ArrowUp") {
    //move sraight up
    moveStraight();
  } */ 
}
