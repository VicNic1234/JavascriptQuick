<script>
function MinimumCoinChange(cointypes) {
    //save the coin types in coins
    this.coins = cointypes;
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
            //first get the value of the coin type
            var currentTypeValue = this.coins[i],
            //count the number of that type of coin. if there are two 25 cents
            //then the count is two
            typeCount = Math.floor(totalAmount / currentTypeValue);
            //push the coin into result
            finalresult.push(typeCount);
            //update the total amount so on the next iteration we can find the right
            //type count
            totalAmount -= (currentTypeValue * typeCount);
        }
        //return the final results
        return finalresult;
    },
    /*
    display the types of coins generated
    */
    
    displayResults: function(amount){
        var results = this.generateCoins(amount);
        
        FinalResult = 'There is : ';
        for(var i = 0; i < results.length; i++) {
          
           FinalResult +=  results[i] + ' ' + cointypes[i] + ' Kobo,  ';
           ////////////////////////////////
           for (var j = 1; j <= results[i]; j++) {

          
            console.log(cointypes[i] + " ");
         }
           //document.write("\n"+"<br/>");
           ///////////////////////////////
        } 
    }
};


var cointypes = [25, 10, 5, 1];
   // coinnames = ["25Kobo", "10Kobo", "5Kobo", "1Kobo"];
    
var coinChanger = new MinimumCoinChange(cointypes); //.sort()
    
coinChanger.displayResults(121);

console.log(FinalResult);


</script>
