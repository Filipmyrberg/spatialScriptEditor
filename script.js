"use strict";

// SLIDER CONFIG
// function updateSlider(slideAmount) {
//   let sliderDiv = document.getElementById("sliderAmount");
//   sliderDiv.innerHTML = slideAmount;
//   //   console.log(slideAmount);
// }

const canvas = document.getElementById("tutorial");

//-------------------------------------------------------//
// FETCHING DATA FROM THE JSON FILE AND DISPLAYING IT
//-------------------------------------------------------//

let temp;

fetch("input.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    temp = data;
    var mainContainer = document.getElementById("myData");

    for (var i = 0; i < data.scenes[0].length; i++) {
      var div = document.createElement("div");
      div.innerHTML = data.scenes[0][i].character1;
      mainContainer.appendChild(div);
    }
  })
  .catch(function (err) {
    console.log(err);
  });

//-------------------------------------------------------//
// BUTTON PRESSING TO ADD TEXT TO JSON
//-------------------------------------------------------//
function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("myInput").value;
  [temp.scenes[0][0].sceneNumber] = inputVal;
  console.log(temp);

  // Displaying the value
}

//-------------------------------------------------------//
// GETTING MOUSE X AND Y
//-------------------------------------------------------//

// (function () {
//   document.onmousemove = handleMouseMove;
//   function handleMouseMove(event) {
//     var eventDoc, doc, body;

//     event = event || window.event; // IE-ism

//     // If pageX/Y aren't available and clientX/Y are,
//     // calculate pageX/Y - logic taken from jQuery.
//     // (This is to support old IE)
//     if (event.pageX == null && event.clientX != null) {
//       eventDoc = (event.target && event.target.ownerDocument) || document;
//       doc = eventDoc.documentElement;
//       body = eventDoc.body;

//       event.pageX =
//         event.clientX +
//         ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
//         ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
//       event.pageY =
//         event.clientY +
//         ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
//         ((doc && doc.clientTop) || (body && body.clientTop) || 0);
//     }
//     // Use event.pageX / event.pageY here
//     console.log(event.pageX, event.pageY);
//   }
// })();

//-------------------------------------------------------//
// OTHER STUFF
//-------------------------------------------------------//

let clicking = false;
let boxY = 0;
let boxX = 0;

(function () {
  document.onmousedown = handleMouseMove;
  document.onmouseup = exitCode;

  function handleMouseMove(event) {
    clicking = true;
    // console.log(clicking);
    if (clicking) {
      boxX = event.pageX;
      boxY = event.pageY;
      // document.onmousemove = drawInViewport;
      // function drawInViewport(event) {
      //   console.log("you are holding down the mouse");
      // }

      // console.log(event.pageX, event.pageY);
    }
  }

  function exitCode(event) {
    clicking = false;
    // console.log(clicking);

    let boxSizeX = boxX - event.pageX;
    boxSizeX = Math.abs(boxSizeX);
    let boxSizeY = boxY - event.pageY;
    boxSizeY = Math.abs(boxSizeY);
    console.log(boxSizeX, boxSizeY);

    //"you are holding down ur mouse"

    //-------------------------------------------------------//
    // SETTING UP CANVAS LOGIC
    //-------------------------------------------------------//

    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      // drawing code here

      ctx.fillRect(10, 10, boxSizeX, boxSizeY);

      // console.log("drawing");
    } else {
      // canvas-unsupported code here
    }
  }
})();
