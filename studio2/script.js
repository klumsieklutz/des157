// JavaScript Document
console.log("reading");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    //capture the submit event
    document.f.onsubmit = processForm;

    //capture the reset event
    document.f.onreset = clearForm;

    //define process function
    function processForm() {

      console.log('processing');

        //store inputs in variable
        var food = document.f.food.value;
        var plant = document.f.plant.value;
        var adj = document.f.adj.value;
        var animal = document.f.animal.value;
        var ingVerb = document.f.ingVerb.value;

        //call a new message to concatenate a message with inputs
        var myMsg = document.getElementById("myMsg");
        console.log(food);

        myMsg.innerHTML = "Somebody once told me the world is a " +  food + ". So I took a bite out of a " +  plant + ". It tasted kind of " + adj + ". So I spitted it on a " + animal + ", and the " + animal + " started " + ingVerb + " on me";
        myMsg.className = "show";

      return false;
      }

      //define clear fucntion
      function clearForm() {
        myMsg.className = "hide";
      }


});
