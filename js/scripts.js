$(document).ready(function() {
  $("form#faveNumber").submit(function(event) {  
    event.preventDefault();

    const userInput = $("input#faveNumber").val();
    let array = [];

    for (let i = 0; i <= userInput; i++) {
      array.push(i);
    } 

    let newArray = array.map(function(element){
      return element.toString()
    });

    let beepBoop = newArray.forEach(function(i) {
      if (newArray[i].includes("3")) {
        $("ul").append("<li>'Won't you be my neighbor?'</li>");
      } else if (newArray[i].includes("2")) {
        $("ul").append("<li>'Boop!'</li>"); 
      } else if (newArray[i].includes("1")) {
        $("ul").append("<li>'Beep!'</li>");
      } else {  
        $("ul").append(`<li>${i}</li>`);
      } 
    });
  });
});
