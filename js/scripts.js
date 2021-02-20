function inputArray(input) {
  let array = [];
  for (let i = 0; i <= input; i++) {
    array.push(i);
  } 
  return array.map(String);
} 
  
$(document).ready(function() {
  $("form#faveNumber").submit(function(event) {  
    event.preventDefault();

    $("ul").empty();

    const userInput = $("input#faveNumber").val();

    let finalArray = inputArray(userInput);

    let beepBoop = finalArray.forEach(function(i) {
      if (finalArray[i] === 0) {
        $("ul").append([0]);
      } else if (finalArray[i].includes("3")) {
        $("ul").append("<li>'Won't you be my neighbor?'</li>");
      } else if (finalArray[i].includes("2")) {
        $("ul").append("<li>'Boop!'</li>"); 
      } else if (finalArray[i].includes("1")) {
        $("ul").append("<li>'Beep!'</li>");
      } else {  
        $("ul").append(`<li>${i}</li>`);
      } 
    });
  });
});
