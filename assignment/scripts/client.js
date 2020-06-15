let garage = [];
$(document).ready(readyNow);
const maxSpots = 4;

function newCar(pictureInput, priceInput, yearInput, makeInput, modelInput) {
  console.log('in newCar:', pictureInput, priceInput, yearInput, makeInput, modelInput);
  const newCarObject = {
    picture: pictureInput,
    price: priceInput,
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push(newCarObject);
  disableForm();
  // disableForm() checks if max spots reached, if so, disables form
  totalPrice();
  // totalPrice() adds up the total pirce of all cars
  return true;
} // end newCar

console.log(`----------newCar() Test----------`);
console.log(garage);
console.log(newCar('https://tinyurl.com/y7vad5hd', 24000, 2019, 'Nissan', 'Altima'));
console.log(newCar('https://tinyurl.com/yamxsc5j', 19850, 2020, 'Honda', 'Civic'));
console.log(newCar('https://tinyurl.com/y7prevuq', 10000, 2017, 'Toyota', 'Corolla'));
console.log(garage);

function addCar() {
  newCar($('#imageUrlInput').val(), $('#priceInput').val(), $('#yearInput').val(), $('#makeInput').val(), $('#modelInput').val());
  //these values are taking the place of the org. values of newCar
  $('#imageUrlInput').val('')
  $('#priceInput').val('')
  $('#yearInput').val('')
  $('#makeInput').val('')
  $('#modelInput').val('')
  displayGarageCars();
  var selectedEffect = $("#effectTypes").val();
  var options = {};
  // some effects have required parameters
  if (selectedEffect === "scale") {
    options = { percent: 50 };
  } else if (selectedEffect === "transfer") {
    options = { to: "#button", className: "ui-effects-transfer" };
  } else if (selectedEffect === "size") {
    options = { to: { width: 200, height: 60 } };
  }
}// end addCar

function displayGarageCars() {
  let el = $('#carsOutput');
  // let parkingSpots = (maxSpots - garage.length);
  //Here I'm targeting id: carsOutput
  el.empty();
  //empty out id: carsOutput
  for (parkedcar of garage) {
    //Can't use 'new' as a variable name so I used 'car' instead
    el.append(`<li>` + `<img src = ` + parkedcar.picture + `></img>` + `<span id=space></span>` + ` ` + parkedcar.year + `<span id=space></span>` + ` ` + parkedcar.make + `<span id=space></span>` + ` ` + parkedcar.model + `<span id=space></span>` + ` ` + ` <span id="money">$` + parkedcar.price + `</span> </li>`);
    // here I'm creating a list item (year, make, model) for each parkedcar
  }// end for 
  $('#parkedCarsNumber').text(garage.length)
  //.text() GIVES ME the value of the text selector
  //whereas .text(text) sets the value of the text to TEXT
  $('#maxCapacityNumber').text(maxSpots)
}//end displayGarageCars

function readyNow() {
  //readyNow should: 1.display parkedcars( year,make,model)
  let el = $('#carsOutput');
  //2. target id: carsOutput
  el.empty();
  el.append();
  //With append I am inserting specified content at
  //the end of statements
  $('#addCarButton').on('click', addCar);
  //when id: addPurchaseButton is clicked we addCar
  //addCar is 
  displayGarageCars();

};//end readyNow

$('input').keyup(function () {
  // .keyup is activated when a key is pressed and released, the function with
  // var empty = false, input.each(function), if this.val
  // debugger;
  //this debugger helps create a breaking point in sources in inspect
  var empty = false;
  $('input').each(function () {
    //for each item the selector will call the anonymous function: function 
    //in it's parameter
    if ($(this).val() == '') {
      empty = true;
    }
  });
  if (empty) {
    $('#addCarButton').attr('disabled', 'disabled');
    $('#formError').text('* Please fill out all sections to park car')
  }
  else if (garage.length < 1) {
    $('#parkingSpotsNumber').number(10);
    $('#garageInventoryNumber').number(0);
  }
  else {
    $('#addCarButton').removeAttr('disabled');
    $('#formError').text('')
    $('#parkingError').text('')
  }
});// end keyup

function disableForm() {
  if (garage.length === maxSpots) {
    // '===' : is equals to
    $('#imageUrlInput').prop('disabled', true);
    $('#priceInput').val('').attr('disabled', 'disabled');
    $('#yearInput').val('').attr('disabled', 'disabled');
    $('#makeInput').val('').attr('disabled', 'disabled');
    $('#modelInput').val('').attr('disabled', 'disabled');
    $('#parkingError').text(`* Garage has reached maximum capacity, please try parking later`)
    // document.getElementById("parkingError").style.color = 'red'
    $('#addCarButton').attr('disabled', 'disabled');
  }
}// end disableForm

function totalPrice() {
  let totalValue = 0;
  for (car of garage) {
    totalValue += car.price;
  }
  $('#totalCarCost').text(`$${totalValue}`);
}//end totalPrice
