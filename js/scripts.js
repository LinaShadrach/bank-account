//Back End

//Array to hold clients and accounts
var clientList = [];
function Client(clientName, password, accounts) {
  this.clientName = clientName;
  this.password = password;
  this.accounts = [];
}

function Account(accountName, accountType, balance, interest) {
  this.accountName = accountName;
  this.accountType = accountType;
  this.balance = balance;
}

Account.prototype = {
  constructor: Account,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
}

//Front End

function checkInputType(deposit) {
  var nonDigits = /[\D]/g
  if (deposit.match(nonDigits)){
    alert("That's not a number!");
  }
}
function resetFields() {
  $("#accountName").val("");
  $("#initialDeposit").val("");
  $("#accountType").val("");
}



$(document).ready(function(){




//index.html
  $("form#userInfo").submit(function(event){
    event.preventDefault();

    //Hide form on submit
    $(".main-page").hide();

    //Client info
    var inputClientName = $("#clientName").val();
    var inputPassword = $("#password").val();
    //Account info
    var inputAccName = $("#accountName").val();
    var inputDeposit = $("#initialDeposit").val();
    var inputAccType = $("#accountType").val();


    //Create account
    checkInputType(inputDeposit);
    var account = new Account(inputAccName, inputAccType, parseFloat(inputDeposit));
    var client = new Client(inputClientName, inputPassword);
    client.accounts.push(account);
    clientList.push(client);


    $(".manageAcc").show();
    resetFields();

    $("#accountNameDisplay").text(account.accountName);
    $("#accountTypeDisplay").text(account.accountType);
    $("#accountBalanceDisplay").text(account.balance);
  });



  $("button#deposit").click(function() {
    var amount = parseFloat($("input#depDraw").val());
    clientList[0].accounts[0].deposit(amount);
    $("#accountBalanceDisplay").text(clientList[0].accounts[0].balance);
  });

  $("button#withdraw").click(function() {
    var amount = parseFloat($("input#depDraw").val());
    clientList[0].accounts[0].withdraw(amount);
    $("#accountBalanceDisplay").text(clientList[0].accounts[0].balance);
  });



  $("form#newAccount").submit(function(event){
    event.preventDefault();

    //Account info
    inputAccName = $("#accountName2").val();
    inputDeposit = $("#initialDeposit2").val();
    inputAccType = $("#accountType2").val();
    //Create additional account
    var newAccount = new Account(inputAccName, inputAccType, parseFloat(inputDeposit));
    clientList[0].accounts.push(newAccount);

  });

  });
