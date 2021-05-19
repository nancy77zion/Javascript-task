let fahrenbtn = document.getElementById("fahren");
let Celsiusbtn = document.getElementById("Celsius");

fahrenbtn.addEventlistener("click" , function(){
  Let input = document.getElementById("input").value;
  document.getElementById("output").value = input * 1.8 + 32 + "fahren"
  
  })
celsuisbt.addEventListener("click" , function(){
  let input = document.getElememtById("input").value;
  document.getElementById("output").value = input - 32 * 05556 + "celsius"
  
  })
