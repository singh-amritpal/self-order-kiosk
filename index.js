/* 
  Author: Amritpal Singh
*/

//Declaring and initializing the initial quantity of items and constant value of GST.
let sausageQuantity = 0;
let oliveOilQuantity = 0;
let sauceQuantity = 0;
let cheeseQuantity = 0;
let bunsQuantity = 0;
let totalQuantity = 0;
const gst = 13;

//declaring and initializing the price of each item in the list.
let sausagePrice = 7.40;
let oliveOilPrice = 8.97;
let saucePrice = 2.67;
let cheesePrice = 4.98;
let bunsPrice = 2.47;

//Parsing the initial quantity to integer and adding it to HTML document using element IDs.
document.getElementById("sausageQuantity").innerHTML = `${parseInt(sausageQuantity)}`;
document.getElementById("oliveOilQuantity").innerHTML = `${parseInt(oliveOilQuantity)}`;
document.getElementById("sauceQuantity").innerHTML = `${parseInt(sauceQuantity)}`;
document.getElementById("cheeseQuantity").innerHTML = `${parseInt(cheeseQuantity)}`;
document.getElementById("bunsQuantity").innerHTML = `${parseInt(bunsQuantity)}`;
document.getElementById("totalQuantity").innerHTML = `${parseInt(totalQuantity)}`;

//Parsing the price of each item into a float value rounded upto 2 digits and adding it to HTML document using element IDs.
document.getElementById("sausagePrice").innerHTML = `$${parseFloat(sausagePrice).toFixed(2)}`;
document.getElementById("oliveOilPrice").innerHTML = `$${parseFloat(oliveOilPrice).toFixed(2)}`;
document.getElementById("saucePrice").innerHTML = `$${parseFloat(saucePrice).toFixed(2)}`;
document.getElementById("cheesePrice").innerHTML = `$${parseFloat(cheesePrice).toFixed(2)}`;
document.getElementById("bunsPrice").innerHTML = `$${parseFloat(bunsPrice).toFixed(2)}`;

//Function to add sausages in cart with maximum quantity upto 10.
function addSausage() {
  sausageQuantity = prompt("Enter Sausage Quantity");         //prompting user to enter the quantity for sausages.
  sausageQuantity = sausageQuantity.trim();

  //validating that input should not be a string or a blank and less than or equal to 10 or negative  and if user cancels the prompt, the quantity is set to 0.
  while (isNaN(sausageQuantity) || sausageQuantity === "" || parseInt(sausageQuantity) > 10 || parseInt(sausageQuantity) < 0) {
    if (sausageQuantity === null) {
      sausageQuantity = 0;
    }
    else if (sausageQuantity > 10) {
      sausageQuantity = prompt("Sorry! Maximum quantity allowed is 10");
    }
    else if (sausageQuantity < 0) {
      sausageQuantity = prompt("Invalid Quantity! Please enter Numeric value between 0-10")
    }
    else {
      sausageQuantity = prompt("Please enter a Numeric value for Sausage Quanity");
    }
    sausageQuantity = sausageQuantity.trim();
  }

  //parsing the quantity input to integer value and adding quantity to the HTML using id attribute for sausageQuantity.
  sausageQuantity = parseInt(sausageQuantity);
  document.getElementById("sausageQuantity").innerHTML = `${sausageQuantity}`;

  calculateTotalQuantity();            //calling calculateTotalQuantity function to update total quantity in the cart. 
}

//Function to add oliveOil in cart with maximum quantity upto 10
function addOliveOil() {
  oliveOilQuantity = prompt("Enter Olive Oil Quantity");         //prompting user to enter the quantity for Olive Oils.
  oliveOilQuantity = oliveOilQuantity.trim();

  //validating that input should not be a string or a blank and less than or equal to 10 or negative  and if user cancels the prompt, the quantity is set to 0.
  while (isNaN(oliveOilQuantity) || oliveOilQuantity === "" || parseInt(oliveOilQuantity) > 10 || parseInt(oliveOilQuantity) < 0) {
    if (oliveOilQuantity === null) {
      oliveOilQuantity = 0;
    }
    else if (oliveOilQuantity > 10) {
      oliveOilQuantity = prompt("Sorry! Maximum quantity allowed is 10");
    }
    else if (oliveOilQuantity < 0) {
      oliveOilQuantity = prompt("Invalid Quantity! Please enter Numeric value between 0-10")
    }
    else {
      oliveOilQuantity = prompt("Please enter a Numeric value for Olive Oil Quanity");
    }
    oliveOilQuantity = oliveOilQuantity.trim();
  }

  //parsing the quantity input to integer value and adding quantity to the HTML using id attribute for oliveOilQuantity.
  oliveOilQuantity = parseInt(oliveOilQuantity);
  document.getElementById("oliveOilQuantity").innerHTML = `${oliveOilQuantity}`;

  calculateTotalQuantity();            //calling calculateTotalQuantity function to update total quantity in the cart. 
}

//Function to add sauce in cart with maximum quantity upto 10
function addSauce() {
  sauceQuantity = prompt("Enter Sauce Quantity");         //prompting user to enter the quantity for sauce.
  sauceQuantity = sauceQuantity.trim();

  //validating that input should not be a string or a blank and less than or equal to 10 or negative  and if user cancels the prompt, the quantity is set to 0.
  while (isNaN(sauceQuantity) || sauceQuantity === "" || parseInt(sauceQuantity) > 10 || parseInt(sauceQuantity) < 0) {
    if (sauceQuantity === null) {
      sauceQuantity = 0;
    }
    else if (sauceQuantity > 10) {
      sauceQuantity = prompt("Sorry! Maximum quantity allowed is 10");
    }
    else if (sauceQuantity < 0) {
      sauceQuantity = prompt("Invalid Quantity! Please enter Numeric value between 0-10")
    }
    else {
      sauceQuantity = prompt("Please enter a Numeric value for Sauce Quanity");
    }
    sauceQuantity = sauceQuantity.trim();
  }

  //parsing the quantity input to integer value and adding quantity to the HTML using id attribute for sauceQuantity.
  sauceQuantity = parseInt(sauceQuantity);
  document.getElementById("sauceQuantity").innerHTML = `${sauceQuantity}`;

  calculateTotalQuantity();            //calling calculateTotalQuantity function to update total quantity in the cart. 
}

//Function to add cheese in cart with maximum quantity upto 10.
function addCheese() {
  cheeseQuantity = prompt("Enter Cheese Quantity");         //prompting user to enter the quantity for cheese.
  cheeseQuantity = cheeseQuantity.trim();

  //validating that input should not be a string or a blank and less than or equal to 10 or negative and if user cancels the prompt, the quantity is set to 0.
  while (isNaN(cheeseQuantity) || cheeseQuantity === "" || parseInt(cheeseQuantity) > 10 || parseInt(cheeseQuantity) < 0) {
    if (cheeseQuantity === null) {
      cheeseQuantity = 0;
    }
    else if (cheeseQuantity > 10) {
      cheeseQuantity = prompt("Sorry! Maximum quantity allowed is 10");
    }
    else if (cheeseQuantity < 0) {
      cheeseQuantity = prompt("Invalid Quantity! Please enter Numeric value between 0-10")
    }
    else {
      cheeseQuantity = prompt("Please enter a Numeric value for Cheese Quanity");
    }
    cheeseQuantity = cheeseQuantity.trim();
  }

  //parsing the quantity input to integer value and adding quantity to the HTML using id attribute for cheeseQuantity.
  cheeseQuantity = parseInt(cheeseQuantity);
  document.getElementById("cheeseQuantity").innerHTML = `${cheeseQuantity}`;

  calculateTotalQuantity();         //calling calculateTotalQuantity function to update total quantity in the cart. 
}

//Function to add bunss in cart with maximum quantity upto 10.
function addBuns() {
  bunsQuantity = prompt("Enter Buns Quantity");         //prompting user to enter the quantity for buns.
  bunsQuantity = bunsQuantity.trim();

  //validating that input should not be a string or a blank and less than or equal to 10 or negative and if user cancels the prompt, the quantity is set to 0.
  while (isNaN(bunsQuantity) || bunsQuantity === "" || parseInt(bunsQuantity) > 10 || parseInt(bunsQuantity) < 0) {
    if (bunsQuantity === null) {
      bunsQuantity = 0;
    }
    else if (bunsQuantity > 10) {
      bunsQuantity = prompt("Sorry! Maximum quantity allowed is 10");
    }
    else if (bunsQuantity < 0) {
      bunsQuantity = prompt("Invalid Quantity! Please enter Numeric value between 0-10")
    }
    else {
      bunsQuantity = prompt("Please enter a Numeric value for Buns Quanity");
    }
    bunsQuantity = bunsQuantity.trim();
  }

  //parsing the quantity input to integer value and adding quantity to the HTML using id attribute for bunsQuantity.
  bunsQuantity = parseInt(bunsQuantity);
  document.getElementById("bunsQuantity").innerHTML = `${bunsQuantity}`;

  calculateTotalQuantity();         //calling calculateTotalQuantity function to update total quantity in the cart. 
}

//function to calculate the total quantity in the cart.
function calculateTotalQuantity() {
  //adding quantity of each item and assigning it to totalQuantity variable.
  totalQuantity = sausageQuantity + oliveOilQuantity + sauceQuantity + cheeseQuantity + bunsQuantity;

  document.getElementById("totalQuantity").innerHTML = `${totalQuantity}`;  //adding total quantity to HTML using is attribute for totalQuantity.

  //validating if total quantity is > 0, then show checkout button by updating the HTML using id attribute "checkout" and enable clear cart button.
  if (totalQuantity > 0) {
    document.getElementById("checkout").innerHTML = '<button id="checkoutButton" onclick="checkout()">Checkout</button>';
    document.getElementById("clearCartButton").disabled = false;
  }
  else {  //validating if total quantity is 0, then do not show the checkout button by updating HTML to blank for id "checkout" and disable clear cart button.
    document.getElementById("checkout").innerHTML = "";
    document.getElementById("clearCartButton").disabled = true;
  }
}

//function to display receipt containing Customer Name with total amount including 13% GST.
function checkout() {

  var customerName = prompt("Enter Your Name");   //prompting user to enter Name.

  //Validation to make sure user must enters the name.
  while (customerName === '' || customerName === null) {
    customerName = prompt("Name cannot be blank. Please Enter Your Name!");
  }

  //display the receipt by setting the style property to block for div with id = "receipt" and table with id = "receiptTable"
  document.getElementById("receipt").style.display = "block";
  document.getElementById("receiptTable").style.display = "block";

  //display customer name by adding value of customerName variable to HTML with h4 tag having id = "customerName"
  document.getElementById("customerName").innerHTML = `<b>Customer Name:<b> ${customerName}`;

  //disable "Add to Cart" buttons when checked out.
  document.getElementById("sausageButton").disabled = true;
  document.getElementById("oliveOilButton").disabled = true;
  document.getElementById("sauceButton").disabled = true;
  document.getElementById("cheeseButton").disabled = true;
  document.getElementById("bunsButton").disabled = true;

  //declaring and initializing total cost of each item .
  let sausageTotalPrice = 0;
  let oliveOilTotalPrice = 0;
  let sauceTotalPrice = 0;
  let cheeseTotalPrice = 0
  let bunsTotalPrice = 0;

  if (sausageQuantity > 0) {  //validating if sausageQuantity > 0, only then show the row in receipt by setting display property to "table-row".
    document.getElementById("sausageReceipt").style.display = "table-row";

    //calculate sausageTotalPrice by multiplying quantity with price and adding in receing with upto two decimal digits.
    sausageTotalPrice = sausageQuantity * sausagePrice;
    document.getElementById("sausageQuantityReceipt").innerHTML = `${sausageQuantity}`;
    document.getElementById("sausagePriceReceipt").innerHTML = `$${sausageTotalPrice.toFixed(2)}`;
  }

  if (oliveOilQuantity > 0) { //validating if oliveOilQuantity > 0, only then show the row in receipt by setting display property to "table-row".
    document.getElementById("oliveOilReceipt").style.display = "table-row";

    //calculate oliveOilTotalPrice by multiplying quantity with price and adding in receing with upto two decimal digits.
    oliveOilTotalPrice = oliveOilQuantity * oliveOilPrice;
    document.getElementById("oliveOilQuantityReceipt").innerHTML = `${oliveOilQuantity}`;
    document.getElementById("oliveOilPriceReceipt").innerHTML = `$${oliveOilTotalPrice.toFixed(2)}`;
  }

  if (sauceQuantity > 0) {  //validating if sauceQuantity > 0, only then show the row in receipt by setting display property to "table-row".
    document.getElementById("sauceReceipt").style.display = "table-row";

    //calculate sauceTotalPrice by multiplying quantity with price and adding in receing with upto two decimal digits.
    sauceTotalPrice = sauceQuantity * saucePrice;
    document.getElementById("sauceQuantityReceipt").innerHTML = `${sauceQuantity}`;
    document.getElementById("saucePriceReceipt").innerHTML = `$${sauceTotalPrice.toFixed(2)}`;
  }

  if (cheeseQuantity > 0) { //validating if cheeseQuantity > 0, only then show the row in receipt by setting display property to "table-row".
    document.getElementById("cheeseReceipt").style.display = "table-row";

    //calculate cheeseTotalPrice by multiplying quantity with price and adding in receing with upto two decimal digits.
    cheeseTotalPrice = cheeseQuantity * cheesePrice;
    document.getElementById("cheeseQuantityReceipt").innerHTML = `${cheeseQuantity}`;
    document.getElementById("cheesePriceReceipt").innerHTML = `$${cheeseTotalPrice.toFixed(2)}`;
  }

  if (bunsQuantity > 0) { //validating if bunsQuantity > 0, only then show the row in receipt by setting display property to "table-row".
    document.getElementById("bunsReceipt").style.display = "table-row";

    //calculate bunsTotalPrice by multiplying quantity with price and adding in receing with upto two decimal digits.
    bunsTotalPrice = bunsQuantity * bunsPrice;
    document.getElementById("bunsQuantityReceipt").innerHTML = `${bunsQuantity}`;
    document.getElementById("bunsPriceReceipt").innerHTML = `$${bunsTotalPrice.toFixed(2)}`;
  }

  //calculating total amount for all items in cart excluding GST.
  let totalAmount = sausageTotalPrice + oliveOilTotalPrice + sauceTotalPrice + cheeseTotalPrice + bunsTotalPrice;

  //calculating GST based on totalAmount.
  let gstAmount = (totalAmount * gst) / 100;

  //adding GST in HTML having id = "gstAmount" with upto 2 digits alongside "GST @ 13%" in receipt.
  document.getElementById("gstPercentage").innerHTML = `GST @ ${gst}%`;
  document.getElementById("gstAmount").innerHTML = `$${gstAmount.toFixed(2)}`

  let totalCheckoutAmount = 0; //declaring and initializing total checkout amount that will include the GST.

  //adding up total amount and GST to calculate totalCheckoutAmount and adding it to HTML attribute with id = "totalAmount"
  totalCheckoutAmount = totalAmount + gstAmount;
  document.getElementById("totalAmount").innerHTML = `$${totalCheckoutAmount.toFixed(2)}`;

  document.getElementById("checkoutButton").disabled = true;  //disabling checkout button.
}

//function to add additional functionality to clear the cart by taking the application to the start point.
function clearCart() {
  //setting quantity of each item and total quantity back to 0.
  sausageQuantity = 0;
  oliveOilQuantity = 0;
  sauceQuantity = 0;
  cheeseQuantity = 0;
  bunsQuantity = 0;
  totalQuantity = 0;

  //setting quantity of each item in HTML back to 0.
  document.getElementById("sausageQuantity").innerHTML = 0;
  document.getElementById("oliveOilQuantity").innerHTML = 0;
  document.getElementById("sauceQuantity").innerHTML = 0;
  document.getElementById("cheeseQuantity").innerHTML = 0;
  document.getElementById("bunsQuantity").innerHTML = 0;
  document.getElementById("totalQuantity").innerHTML = 0;

  //updating the Price of items in HTML to blank to hide the content.
  document.getElementById("sausagePriceReceipt").innerHTML = "";
  document.getElementById("oliveOilPriceReceipt").innerHTML = "";
  document.getElementById("saucePriceReceipt").innerHTML = "";
  document.getElementById("cheesePriceReceipt").innerHTML = "";
  document.getElementById("bunsPriceReceipt").innerHTML = "";

  //updating the Quantity of items in HTML to blank to hide the content.
  document.getElementById("sausageQuantityReceipt").innerHTML = "";
  document.getElementById("oliveOilQuantityReceipt").innerHTML = "";
  document.getElementById("sauceQuantityReceipt").innerHTML = "";
  document.getElementById("cheeseQuantityReceipt").innerHTML = "";
  document.getElementById("bunsQuantityReceipt").innerHTML = "";

  //setting display property of each item in receipt to "none" in order to hide the content.
  document.getElementById("sausageReceipt").style.display = "none";
  document.getElementById("oliveOilReceipt").style.display = "none";
  document.getElementById("sauceReceipt").style.display = "none";
  document.getElementById("cheeseReceipt").style.display = "none";
  document.getElementById("bunsReceipt").style.display = "none";

  //setting display property for receipt and receipt table to "none" in order to hide the content.
  document.getElementById("receipt").style.display = "none";
  document.getElementById("receiptTable").style.display = "none";

  //hiding checkout button and disabling clear cart button.
  document.getElementById("checkout").innerHTML = "";
  document.getElementById("clearCartButton").disabled = true;

  //enabling "Add to Cart" buttons for all items.
  document.getElementById("sausageButton").disabled = false;
  document.getElementById("oliveOilButton").disabled = false;
  document.getElementById("sauceButton").disabled = false;
  document.getElementById("cheeseButton").disabled = false;
  document.getElementById("bunsButton").disabled = false;
}