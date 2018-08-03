let dataset = require('./dataset.json');
let bankBalances = dataset.bankBalances;
let searchArray = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];

const getAmount = (element) => element.amount > 100000;
const hundredThousandairs = bankBalances.filter(getAmount);


const roundedDollar = (element, index, array) => {
  return {    // object literal
    amount : element.amount,
    state : element.state,
    rounded : Math.round(parseFloat(element.amount))
  };
}

const datasetWithRoundedDollar = bankBalances.map(roundedDollar);

const roundedDime = (element) => {
  return {
    amount : element.amount,
    state : element.state,
    roundedDime : Math.round(element.amount*10)/10
  };
}

const datasetWithRoundedDime = bankBalances.map(roundedDime);

const sumOfBalances = (previous, current, index, array) => {
  return previous + parseFloat(current.amount);
}

const sumOfBankBalances = parseFloat(bankBalances.reduce(sumOfBalances, 0).toFixed(2));

const bumpDatInterest = (previous, current, index, array) => {
  let amount = 0;

  if (searchArray.includes(current.state)) {
    amount = parseFloat(((current.amount) * 0.189).toFixed(2));
  }

  return previous + amount;
}

const sumOfInterests = parseFloat(bankBalances.reduce(bumpDatInterest, 0).toFixed(2));

const collectStateSums = (previous, current) => {
  if (current.state in previous) {    // can also use (previous[current.state])
    previous[current.state] += parseFloat(current.amount);
    previous[current.state] = Math.round(previous[current.state] * 100)/ 100;
  } else {
    previous[current.state] = parseFloat(current.amount);
  }
  return previous;
}

const stateSums = bankBalances.reduce(collectStateSums, {});



const bumpDatHighInterest = (previous, current, index, array) => {
  let amount = 0;

  if (searchArray.includes(current.state)) {
    amount = parseFloat(((current.amount) * 0.189).toFixed(2));
  }

  if (amount > 50000) {
    // amount += parseFloat(current.amount);
    return previous+amount;
  }

  return previous;
}

const sumOfHighInterests = parseFloat(bankBalances.reduce(bumpDatHighInterest, 0).toFixed(2));

const allSums = (previous, current) => {
  let amount = 0;

  if (current.state in previous) {
    previous[current.state] += parseFloat(current.amount);
    previous[current.state] = Math.round(previous[current.state]*100)/100;
  } else {
    previous[current.state] = parseFloat(current.amount);
  }
  return previous;
}

const allStateSums = bankBalances.reduce(allSums, {});


let stateSumsArray = Object.keys(stateSums)
  .map((state) => {
    return {
      state : state,
      stateSum : stateSums[state]
    };
  });

let lowerSumStates = stateSumsArray
  .filter( (state) => {
    return state.stateSum < 1000000;
  })
  .map( (state) => {
    return state.state;
  });


let higherStateSums = stateSumsArray
  .filter( (state) => {
    return state.stateSum > 1000000;
  })
  .reduce((sum, state) => {
    return sum += state.stateSum;
  }, 0);

let areStatesInHigherStateSum = stateSumsArray
  .filter( (state) => {
    return searchArray.includes(state.state);
  })
  .every( (state) => {
    return state.stateSum > 2550000;
  });

let anyStatesInHigherStateSum = stateSumsArray
  .filter( (state) => {
    return searchArray.includes(state.state);
  })
  .some( (state) => {
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
