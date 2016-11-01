//Back End
function Client(clientName, password, accounts) {
  this.clientName = clientName;
  this.password = password;
  this.accounts = [];
}

function Account(accountName, accountType, balance, interest) {
  this.accountName = accountName;
  this.accountType = accountType;
  this.balance = balance;
  this.interest = interest;
}



//Front End

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

    var account = new Account("First Account", "savings", parseFloat(inputDeposit), "0%");
    var client = new Client(inputClientName, inputPassword, account);
    $("#clientInfo").show();
    $("#nameDisplay").text(inputClientName);
    $("#accounts").append("<li> Balance: " + account.balance + "</li>");
  });

});
