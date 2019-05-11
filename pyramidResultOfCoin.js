<script>
function MinimumCoinChange(cointypes, coinweight) {
    //save the coin types in coins
    this.coins = cointypes;
    this.coinweight = coinweight;
    this.numCoinTypes = this.coins.length;
   
}
var FinalResult;
MinimumCoinChange.prototype = {
    /*
    pass cent amount to this function
    */
    generateCoins: function(amount) {
        var finalresult = [],
            totalAmount = amount;
        var myPyramidArray = new Map();
       

        //loop through the coin types. for each type find how many 
        //of the amount you can get  
        for (var i = 0; i < this.numCoinTypes; i++) {
        //for (var i = 3; i > 0; i--) {
        
        	//this would be used to disrupt the Greedy Recurssion
            var currentCoinWeigth = Math.floor(this.coinweight[i]);
            
            //first get the value of the coin type
            var currentTypeValue = this.coins[i];
            //count the number of that type of coin. considering the distrup
            //before we distrup the greedy algorithm, 
            //we need to first check if the total coin remaining can accomodate the distrup
              
            if(currentCoinWeigth > 0 && totalAmount > (currentTypeValue*currentCoinWeigth) )
            {
            	 for (var distrup = 0; distrup < currentCoinWeigth; distrup++) {
               totalAmount -= Math.floor(currentTypeValue);
               }
               
               //push the coin into result
               finalresult.push(currentCoinWeigth);
               //myPyramidArray.currentTypeValue = currentCoinWeigth;
               myPyramidArray.set(currentTypeValue, currentCoinWeigth);
              
               
            }
            else
            {
            typeCount = Math.floor(totalAmount / currentTypeValue);
            //push the coin into result
            finalresult.push(typeCount);
             myPyramidArray.set(currentTypeValue, typeCount);
            //update the total amount so on the next iteration we can find the right
            //type count
            totalAmount -= (currentTypeValue * typeCount);
            }
           
        }
        //return the final results
        return myPyramidArray;
    },
    /*
    display the types of coins generated
    */
    
    displayResults: function(amount){
        var results = this.generateCoins(amount);
        
        //Sorted by the Value (NumOfCoinTypes)
        // For values, we do need an equals case
const sortStringValues = (a, b) => a[1] === b[1] ? 0 : a[1] > b[1] ? 1 : -1;
var SortedResult = new Map([...results].sort(sortStringValues));
     
        //console.log(SortedResult);
        //console.log(results);
        //return false;
        FinalResult = 'There are : ';
        //for(var i = 0; i < results.length; i++) {
        //for(var i = results.length -1; i > -1; i--) {
        
        
        /////////////////////////////
        
         
         
        for (let [CoinTypes, NumOfCoin] of SortedResult) {
  		//console.log(CoinTypes + " - " + NumOfCoin);
        
        var str = "";
        FinalResult +=  NumOfCoin + ' ' + CoinTypes + ' Kobo,  ';
        for (var k = 0; k < NumOfCoin; k++) {
            str +=  CoinTypes +"," ;
               }
            if(str != "")
           console.log(str);
           }
        }

        //////////////////////
         
           /*FinalResult +=  results[i] + ' ' + cointypes[i] + ' Kobo,  ';
          
             var str = "";
            for (var k = 1; k <= results[i]; k++) {
            str +=  cointypes[i] +"," ;
               }
            if(str != "")
           console.log(str);
           */
            
        
        //} 
    
};


var cointypes = [25, 10, 5, 1],
	coinweight1 = [0, 0, 0, 0], //We would use this to distrup the Greedy Algorithm
    coinweight2 = [1, 4, 9, 0], //We would use this to distrup the Greedy Algorithm
    coinweight3 = [1, 2, 3, 0]; //We would use this to distrup the Greedy Algorithm
   // coinnames = ["25Kobo", "10Kobo", "5Kobo", "1Kobo"];

////    
var coinChanger1 = new MinimumCoinChange(cointypes, coinweight1);  
coinChanger1.displayResults(121);
console.log(FinalResult);

////
var coinChanger2 = new MinimumCoinChange(cointypes, coinweight2);    
coinChanger2.displayResults(121);
console.log(FinalResult);

////
var coinChanger3 = new MinimumCoinChange(cointypes, coinweight3);    
coinChanger3.displayResults(121);
console.log(FinalResult);

</script>
