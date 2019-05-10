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
        //loop through the coin types. for each type find how many 
        //of the amount you can get  
        for (var i = 0; i < this.numCoinTypes; i++) {
        
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
               
            }
            else
            {
            typeCount = Math.floor(totalAmount / currentTypeValue);
            //push the coin into result
            finalresult.push(typeCount);
            //update the total amount so on the next iteration we can find the right
            //type count
            totalAmount -= (currentTypeValue * typeCount);
            }
           
        }
        //return the final results
        return finalresult;
    },
    /*
    display the types of coins generated
    */
    
    displayResults: function(amount){
        var results = this.generateCoins(amount);
        
        FinalResult = 'There are : ';
        for(var i = 0; i < results.length; i++) {
        //for(var i = results.length -1; i > -1; i--) {
          
           FinalResult +=  results[i] + ' ' + cointypes[i] + ' Kobo,  ';
           ////////////////////////////////
          // for (var j = results[i]; j <= results[i]; j++) {

          	
            //console.log(cointypes[i] + " ");
             var str = "";
            for (var k = 1; k <= results[i]; k++) {
            str +=  cointypes[i] +"," ;
               }
            if(str != "")
           console.log(str);
            
         //}
          
           ///////////////////////////////
        } 
    }
};


var cointypes = [25, 10, 5, 1],
	coinweight1 = [1, 4, 8, 0], //We would use this to distrup the Greedy Algorithm
    coinweight2 = [1, 4, 9, 0], //We would use this to distrup the Greedy Algorithm
    coinweight3 = [1, 4, 100, 0]; //We would use this to distrup the Greedy Algorithm
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
