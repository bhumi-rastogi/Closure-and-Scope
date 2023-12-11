// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;
  
// Progression 2: add 3 variables: title, currIndex, check
var check = false;
var currIndex = -1;

function createPop(x,y){
  for(let i=0; i < x.length;i++ ){
    if(x[i]==y){
      check=true;
      currIndex=i;
    }

  }

    // Progression 3: create a function "searchForElement" 
   if(!check){
    return "The item is not present and is at index -1000000";
   }
    // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
    // to return the desired output.
   else{
    return `The item is present and is at index ${currIndex}`;
   }
} 
const xOfys = [1,2,3,4,5,6];
const itemToSearch = 4;

