//Question 1 

var stringToNumber = function(stringToBeConverted){
 let currIndex = 0,strLength = stringToBeConverted.length;
  let num = 0;
  let multiplier = 1,floatEncountered = false,floatValue = 10;

  for(let i =0 ; i < strLength; i++){
    if (stringToBeConverted[i] === "-") {
        multiplier = -1;
    //check float
    } else if (stringToBeConverted[i] === ".") {
        floatEncountered = true;
    } else if (stringToBeConverted[i] >= "0" && stringToBeConverted[i] <= "9") {
        if (floatEncountered) {
            num = num + (stringToBeConverted[i] - "0") / floatValue;
            floatValue *= 10;
        } else {
            num = num * 10 + (stringToBeConverted[i] - "0");
        }
    // if no condition satisfied break the loop to optimise on additional traversal
    } else {
        break;
    }
  }

  return num * multiplier;
}
//check test cases
console.assert(stringToNumber("123") === 123, "Normal int case failed");
console.assert(stringToNumber("-123") === -123, "Negative int case failed");
console.assert(stringToNumber("1.23") === 1.23, "Float case failed");
console.assert(stringToNumber("-012a3") === -12, "Negative with string failed");
console.assert(stringToNumber("-12.01a3") === -12.01,"Negative float with string failed");
console.assert(stringToNumber("-12a3") === -12, "Negative with string failed");
console.assert(stringToNumber("abs") === 0, "Inavlid num failed");


//Question 2 
/*<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>
<script type="text/javascript">
const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
// For each of our buttons, when the user clicks it...
document.getElementById(`btn-${btnNum}`).onclick = () => {
// Tell her what she's won!
alert(prizes[btnNum]);
};
}
</script>

//Answer for this question :- 

As onclick is eventhandler so it is a function that is in browser apis and when clicked will move into call 
stack but javascript is a single thread application so it will start executing as soon as it finds the code so the for loop will be executed
in global execution layer and after completing it will be removed form the global execution layer so when the click handler is called it will 
always receive btnNum as 2 value and whenever button is clicked 'Fresh Laundry' will be clicked.*/