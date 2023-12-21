const NEG_INF = -1000000;
function createPop(x,y) {

  let currIndex = NEG_INF;
  let check = false;

  function searchForElement(x,z){
    x.forEach(a,b) => {
    if ((a == z) {
      currIndex = b;
      check = true;
     }
   });   
  }

  return function() {
    searchForElement(x,y)
    let b = currIndex;
    let iPresent = check;
    if (iPresent) {
      return `The item is present here and lies on index $(Index)`;
       } else { 
       return `The item is absent here and lies on index $(Index)`;
      }
  };
}

const arrayOfNumbers = [1,2,3,4,5,6];
const itemsToSearch = 4;
const pop = createPop(arrayOfNumbers, itemsToSearch);
pop();
