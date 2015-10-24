document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
   function buttonPress (event) {
     event.addEventListener ('click', function(){
       document.getElementById('output').value += event.value;

     });
   };
  function clear (event){
    event.addEventListener ('click', function(){
      document.getElementById('output').value = "";
    });
  };
  function calculateThis (event){
    event.addEventListener ('click', function (){
      tingle = document.getElementById('output').value;
      jiggle = tingle.split("");
      a = Number(jiggle[0]);
      b = Number(jiggle[2]);

      if (jiggle[1] === "+") {
        x = a + b;
      } else if (jiggle[1] === "-") {
        x = a - b;
      }
        else if (jiggle[1] === "/") {
          x = a / b;
      } else if (jiggle[1] === "X") {
          x = a * b;
      } else {
        x = "ERROR";
      };
      document.getElementById('output').value = x;

    });

  };
clear(document.getElementById('clear'));
calculateThis(document.getElementById('calculate'));
buttonPress(document.getElementById('zero'));
buttonPress(document.getElementById('one'));
buttonPress(document.getElementById('two'));
buttonPress(document.getElementById('three'));
buttonPress(document.getElementById('four'));
buttonPress(document.getElementById('five'));
buttonPress(document.getElementById('six'));
buttonPress(document.getElementById('seven'));
buttonPress(document.getElementById('eight'));
buttonPress(document.getElementById('nine'));
buttonPress(document.getElementById('add'));
buttonPress(document.getElementById('subtract'));
buttonPress(document.getElementById('divide'));
buttonPress(document.getElementById('multiply'));
buttonPress(document.getElementById('decimal'));






 });
