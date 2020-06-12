let garage = [];

/*
Do not change newCar for base mode!
*/
function newCar(yearInput, makeInput, modelInput) {
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push(newCarObject);
  return true;
} // end newCar

console.log(`----------newCar() Test----------`);
console.log(garage);
console.log(newCar(2000, 'Nissan', 'Altima'));
console.log(garage);



