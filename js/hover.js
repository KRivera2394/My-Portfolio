var btn = document.getElementById("hoverNone");


let buttonStatus = true;





function showButton() {
  if (buttonStatus === true) {
    btn.innerHTML = "Click to hide my projects!";
    buttonStatus = false;
    console.log("hello");
  }
  
    else {
      btn.innerHTML = "Click to see my projects!";
      buttonStatus = true;
      
   
  }
}
btn.addEventListener("click", showButton);



// function showButton() {
//     if (btn.innerHTML === "Click to see my projects!") {
//       btn.innerHTML = "Click to hide my projects!";
//       console.log("hello");
//     } else {
//       btn.innerHTML = "Click to see my projects!";
//     }
//   }