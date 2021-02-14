



$(document).ready(function() {
  $("form#faveNumber").submit(function(event) {  
    event.preventDefault();

    const userInput = $("input#faveNumber").val();
    console.log(userInput)
    //let number = "23"
    let array = [];

    for (let i = 0; i <= userInput; i++) {
      array.push(i);
    } 
    //console.log(array)
    let newArray = array.map(function(element){return element.toString()});
    //console.log(newArray); 

    for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].includes("3")) {
      console.log("Won't you be my neighbor?");
    } else if (newArray[i].includes("2")) {
      console.log("Boop!") 
    } else if (newArray[i].includes("1")) {
      console.log("Beep!")
    } else {
      console.log(newArray[i]);
} 
}

  });
});





/*$("form#calculator").submit(function() {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    const result = add(number1, number2);
    $("#output").text(result);

    */