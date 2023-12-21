const NEG_INF = -1000000;
function createPop(list, Objects) {
  let currIndex = NEG_INF;
  let check = false;

  function searchForElements(list, givenObjects) {
    list.forEach((items, index) => {
      if (items == givenObjects) {
        currIndex = index;
        check = true;
      }
    });
  }

  return function () {
    searchForElements(list, Objects);
    let index = currIndex;
    let iPresent = check;
    if (iPresent) {
      return `The item is present and is at index ${index}`;
    } else {
      return `The items is not present and is at index ${index}`;
    }
    };
}

const arrayofnumbers = [1,2,3,4,5,6];
const itemstosearch = 4;
const pop = createPop(arrayofnumbers, itemstosearch);
pop();
