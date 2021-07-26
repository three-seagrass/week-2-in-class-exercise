import { Car } from './model/Car';
import { Ute } from './model/Ute';
import { MakeTypes } from './model/MakeTypes';

const ute1: Ute = new Ute(0, '123ABC', MakeTypes.Toyota, 10);
const ute2: Ute = new Ute(0, '123DEF', MakeTypes.Holden, 20);
const uteList: Ute[] = [ute1, ute2];

// console.log(ute1);
// console.log(ute2);

// Grab
const capacityInput: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('capacity-input')
);
const searchBtn: HTMLElement = document.getElementById('search-capacity-btn');
const outputDiv: HTMLElement = document.getElementById('ute-output');

searchBtn.addEventListener('click', handleSearchByCapacity);

function handleSearchByCapacity() {
  const capacityValue: number = Number(capacityInput.value);

  for (let i = 0; i < uteList.length; i++) {
    outputDiv.innerHTML =
      uteList[i].capacity === capacityValue ? uteList[i].rego : '';

    // if (uteList[i].capacity === capacityValue) {
    //   outputDiv.innerHTML += `${
    //     uteList[i].rego
    //   } has the carrying capacity of ${capacityValue}`;
    // }
  }
}
