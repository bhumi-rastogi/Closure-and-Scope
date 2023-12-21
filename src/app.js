 function createPop(array ,item){
    for(let i = 0; i < array.length; i++){
      if(array[i] == item){
        return `The item is present and is at index ${i}`
      }
      if(i+1 == array.length){
        return "The item is not present and is at index -1000000"
      }
    }
  }

const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;
