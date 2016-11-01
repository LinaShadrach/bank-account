function checkInputType(deposit) {
  var nonDigits = /[\D]/g
  if (deposit.match(nonDigits)){
    alert("that's not a number.");
  }
}




$(document).ready(function(){



  $("form#userInfo").submit(function(event){
    event.preventDefault();

    var inputClientName = $("#clientName").val();
    var inputPassword = $("#password").val();
    var inputDeposit = $("#deposit").val();
    checkInputType(inputDeposit);
    $("#clientInfo").show();
    $("#nameDisplay").text(inputClientName);
    $("#accounts").append("<li> Balance: " + inputDeposit + "</li>");
  });

});
