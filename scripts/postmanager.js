$.getJSON("../posts/test.json", function(data){
  console.log(data.header); // Prints: Harry
  console.log(data.text); // Prints: 14
}).fail(function(){
  alert("An error has occurred.");
});