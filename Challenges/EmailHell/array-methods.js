var dataset = require('./dataset.json');
//filter
var balances = dataset.bankBalances;


/*
  create an array with accounts from bankBalances that are
  greater than 100000
  assign the resulting new array to `hundredThousandairs`
*/
var hundredThousandairs = dataset.bankBalances.filter(function(previous, current){
  //console.log(previous.amount);
  var hundredThousandairs = previous.amount > 100000;
  return hundredThousandairs;
}, {});

//jesses example with phat arrow:
var hundredThousandairs = balances.filter( accountBal => accountBal.amount > 100000);




//map i think
/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `rounded`

  `rounded` value is `amount` rounded to the nearest dollar

  Example:
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting new array to `datasetWithRoundedDollar`
*/
var datasetWithRoundedDollar = dataset.bankBalances.map(function(key, index, array){
  var clone = {};
  clone.amount = key.amount;
  clone.state = key.state;
  clone.rounded = Math.round(key.amount);
  return clone;
});

//jesse's example:
var datasetWithRoundedDollar = balances.map(function(balance){
  return {
    amount: balance.amount,
    state: balance.state,
    rounded: Math.round(parseFloat(balance.amount))
  };
});



/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `roundedDime`

  `roundedDime` value is `amount` rounded to the nearest 10th of a cent

  Example 1
    {
      "amount": "134758.46",
      "state": "HI"
      "roundedDime": 134758.5
    }
  Example 2
    {
      "amount": "134758.44",
      "state": "HI"
      "roundedDime": 134758.4
    }
  assign the resulting new array to `roundedDime`
*/
var datasetWithRoundedDime = dataset.bankBalances.map(function(key, index, array){
  var clone = {};
  clone.amount = key.amount;
  clone.state = key.state;
  clone.roundedDime = Math.floor(key.amount*10)/10;
  return clone;
});

//jesses exampe:
var datasetWithRoundedDime = balances.map(function (balance) {
 return {
    amount: balance.amount,
    state: balance.state,
    roundedDime: parseFloat(parseFloat(balance.amount).toFixed(1))
  };
});

// set sumOfBankBalances to be the sum of all value held at `amount` for each bank object
//my first attempt - summed all the values to the same
// var sumOfBankBalances = dataset.bankBalances.reduce(function (a, b) {
//   var x = parseInt(a.amount);
//   var y = parseInt(b.amount);
//   return {amount: x + y};
// }{});
var sum = dataset.bankBalances.reduce(function(previous, current){
  return previous+parseFloat(current.amount);
}, 0);
var sumOfBankBalances = parseFloat(sum.toFixed(2));

//jesses example
var sumOfBankBalances = parseFloat(balances.reduce(function (sum,balance) {
  return sum +=parseFloat(balance.amount); 
},0/*initial value is zero, the initial param of 'sum' is zero*/).toFixed(2));

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it rounded to the nearest cent
  and then sum it all up into one value saved to `sumOfInterests`
 */
// function findState(element){
//      if (element.state === 'WI'|| element.state === 'IL' ||element.state === 'WY'||element.state === 'OH'||element.state === 'GA'||element.state === 'DA'){
//        return true;}return false;
// };



var states = ["WI", "IL", "WY", "OH", "GA", "DE"];
var sumOfInterests =dataset.bankBalances.filter(function(account){
  if(states.indexOf(account.state)>-1){
    return true;
  }
});

sumOfInterests = sumOfInterests.map(function(account){
  var test = parseFloat(account.amount)*0.189;
  return parseFloat(test);
},0);

sumOfInterests = sumOfInterests.reduce(function(previous,current){
  return Math.round((previous+current)*100)/100;
});
//jesses example:
var sumOfInterests = balances
  .filter(function(balance){
    return states.includes(balance.state);

  })
  .reduce(function(sum, balance){
    var amt = parseFloat((balance.amount * 0.189).toFixed(2));
    return sum = parseFloat((sum + amt).toFixed(2));
  }, 0);





/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table where

  the key is:
    the two letter state abbreviation
  and the value is:
    the sum of all amounts from that state
    the value must be rounded to the nearest cent

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var stateSums = dataset.bankBalances.reduce(function (prev, curr){
  if(!prev[curr.state]){
    prev[curr.state] = 0;
  }

  prev[curr.state] += Number(Number(curr.amount).toFixed(2));
  prev[curr.state] = Number(prev[curr.state].toFixed(2));

  return prev;

}, {});
//jesses example
var stateSums = balances.reduce(function(prev, balance){
  if(!prev[balance.state]){
    prev[balance.state] = 0;//assigns it to zero, 
  }
  var curAmt = parseFloat(balance.amount);
  prev[balance.state] = parseFloat((prev[balance.state]+ curAmt).toFixed(2));
  //key we are going to assign some value, for example WI = parseFloar((accessing the key, not assinging yet + amount)converts it)
  return prev;


}, {}/*produces the hash table*/);

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it
  only sum values greater than 50,000 and save it to `sumOfInterests`

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var sumOfHighInterests = dataset.bankBalances.filter(function(account){
  var states = ["WI", "IL", "WY", "OH", "GA", "DE"];
  if(states.indexOf(account.state) < 0 && Number(account.amount) > 50000){
    return true;
  }
});

sumOfHighInterests = sumOfHighInterests.reduce(function(prev, account){
  return prev + Number(account.amount)*0.189;
}, 0);

sumOfHighInterests = Number(Number(sumOfHighInterests).toFixed(2));


//jesses example:
function round(amt) {
  return Math.round(amt * 100)/100;
}
function calcInterest(amt) {
  return amt * 0.189;
}
function roundToTheCent(amt) {
  return parseFloat(round(amt).toFixed(2));
}



var sumOfHighInterests = Object.keys(stateSums)
  .filter(function(state){
    return (states.indexOf(state)>-1);
  })
  .filter(function(state){
    return calcInterest(states[state])>50000;
  })
  .reduce(function(sum, state){
    return sum += roundToTheCent(calcInterest(states[state])); 
  }, 0);

/*
  set `lowerSumStates` to be an array of two letter state
  abbreviations of each state where the sum of amounts
  in the state is less than 1,000,000
 */

 //jesses example:
var stateSumsArray = Object.keys(stateSums)
.map(function(state){
  return {
    state: state,
    stateSum: stateSums[state]
  };
});


var lowerSumStates = stateSumsArray
  .filter(function(state){
    return state.stateSum < 1000000;
  })
  .map(function (state){
    return state.state;
  });

/*
  aggregate the sum of each state into one hash table
  `higherStateSums` should be the sum of all states with totals greater than 1,000,000
 */
 //jesse example:
var higherStateSums = stateSumsArray
.filter(function(state){
  //{state: 'WI', stateSum: 12334}
  return state.stateSum > 1000000;
})
.reduce(function(sum,state){
  return sum += state.stateSum;
},0);
/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware

  Check if all of these states have a sum of account values
  greater than 2,550,000

  if true set `areStatesInHigherStateSum` to `true`
  otherwise set it to `false`
 */
var areStatesInHigherStateSum = stateSumsArray
  .filter(function(state){
    return states.includes(state.state);
  })
  .every(function(state){
    return state.stateSum > 2550000;
  });

/*
  Stretch Goal && Final Boss

  set `anyStatesInHigherStateSum` to be `true` if
  any of these states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  have a sum of account values greater than 2,550,000
  otherwise set it to be `false`
 */
var anyStatesInHigherStateSum = stateSumsArray
  .filter(function(state){
    return states.includes(state.state);
  })
  .some(function(state){
    return state.stateSum > 2550000;
  });


module.exports = {
  hundredThousandairs : hundredThousandairs,
  datasetWithRoundedDollar : datasetWithRoundedDollar,
  datasetWithRoundedDime : datasetWithRoundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
