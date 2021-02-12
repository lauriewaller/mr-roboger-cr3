let n = 10

for (let i = 0; i <= n; i++) {
  console.log(i);
}


$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    
    
    
    event.preventDefault();

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