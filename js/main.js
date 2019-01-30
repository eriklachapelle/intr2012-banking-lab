let balance = 0;
let withdraw = 0;
let name = `Brown George`;


// Greet the user by name
      // Search the document for the 'username' element
      let _username = document.getElementById('username');
      // Change the content of the element
      _username.innerHTML = name;

      // The above can be simplified:
      //    document.getElementById('username').innerHTML = name;



// 1. Let them know their starting balance
      // Search the document for the 'balance' element
      // Change the content of the element


var completeTransaction = function() {

  // Store the value from the 'amount' input in a variable (let)
        // Make sure it's a number, not a string!!!  parseInt()
  let _amount = parseInt(document.getElementById('amount').value);

  // 1. Update the balance using the transaction value
  balance += 50;

  // 2. Add a record to the history showing the amount deposited
  document.getElementById('history').innerHTML += `<li>You deposited $50.</li>`;

  // Update the balance in the document
  document.getElementById('balance').innerHTML = balance;

  // 3. IF the balance is less than 0, make the balance red, else make it black
        // A) change the style.color of the balance
        // B) create a css class and .add() a class to the balance


    // If the C is greater than 0: tomato
    // If the C is 0: tomato

    if (balance >= 0) {
document.getElementById("balance").style.color = "black";
}

};

document.getElementById('process').addEventListener('click', completeTransaction)


var completeTransaction = function() {

  let _amount = parseInt(document.getElementById('amount').value);

  balance -= 50;

  document.getElementById('history').innerHTML += `<li>You withdrew $50.</li>`;


  document.getElementById('balance').innerHTML = balance;




        if (balance <= 0) {
    document.getElementById("balance").style.color = "tomato";
    }
};

document.getElementById('withdraw').addEventListener('click', completeTransaction)


// Recources
//https://www.w3schools.com/js/js_htmldom_css.asp
// & some of my previous projects
