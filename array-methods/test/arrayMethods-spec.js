var window = window || undefined;

if ( !window ) {
  GLOBAL = window;

  var fs = require( 'fs' );
  var vm = require( 'vm' );
  var chai = require( 'chai' );
  var importedFile = fs.readFileSync( './arrayMethods.js' );
  // file runs and it's contents has access to GLOBAL
  vm.runInThisContext( importedFile );
}

var expect = chai.expect;

var methodList = ['push',
  'pop',
  'reverse',
  'shift',
  'sort',
  'splice',
  'unshift',
  'concat',
  'join',
  'slice',
  'toString',
  'indexOf',
  'lastIndexOf',
  'toLocaleString'
];

describe( 'push()', function() {
  it( 'Push your First and Last Name into an empty array', function() {
    expect( nameArray ).to.be.defined;
    expect( nameArray ).to.be.an( 'array' );
    expect( nameArray ).to.have.length( 2 );
  });

  it( 'all the missing numbers up to and including 10 to genericNumberArray. ', function() {
    expect( genericNumberArray ).to.be.defined;
    expect( genericNumberArray ).have.length( 10 );
    expect( genericNumberArray ).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe( 'pop()', function() {
  it( 'removes the last element of an array', function() {
    expect( colors ).to.be.defined;
    expect( colors ).to.deep.equal(['Blue', 'Red', 'Yellow']);
  });

  it( '`popResult` is storing the return value', function() {
    expect( popResult ).to.be.defined;
    expect( popResult ).to.equal( 'Charlie' );
  });
});

describe( 'reverse()', function() {
  it( 'the array named `scrambledWords`', function() {
    expect( scrambledWords ).to.be.defined;
    expect( scrambledWords ).to.be.deep.equal(['burritos', 'for', 'the', 'win']);
  });

  it( 'the array named `phoneNumber`', function() {
    expect( phoneNumber ).to.be.defined;
    expect( phoneNumber ).to.be.deep.equal([8, 6, 7, 5, 3, 0, 9]);
  });
});

describe( 'shift()', function() {
  it( 'removes the first element of an array', function() {
    expect( orderQueue ).to.be.defined;
    expect( orderQueue ).to.deep.equal([{ takeOut: 'Medium Salad'}, { takeOut: 'Burger'}]);
  });

  it( '`nextOrder` is storing the return value', function() {
    expect( nextOrder ).to.be.defined;
    expect( nextOrder ).to.deep. equal({ takeOut: 'Ice Cream' });
  });
});

describe( 'sort()', function() {
  it( 'the `mixedNums` array', function() {
    expect( mixedNums ).to.be.defined;
    expect( mixedNums ).to.have.length( 13 );
    expect( mixedNums ).to.deep.equal([1, 10, 2, 21, 3, 4, 40, 5, 7, 7, 76, 805, 81]);
  });

  it( ' the `mixedWords` array', function() {
    expect( mixedWords ).to.be.defined;
    expect( mixedWords ).to.have.length( 5 );
    expect( mixedWords ).to.deep.equal(['About', 'Dont', 'Forget', 'Me', 'You']);
  });
});

describe( 'splice()', function() {
  describe( 'removing elements', function() {
    it( '`fruitCollection` has only fruits inside of it', function() {
      expect( fruitCollection ).to.be.defined;
      expect( fruitCollection ).to.have.length( 3 );
      expect( fruitCollection ).to.deep.equal(['Apple', 'Banana', 'Pear']);
    });

    it( '`notFruit` variable is storing the items removed from `fruitCollection`', function() {
      expect( notFruit ).to.be.defined;
      expect( notFruit ).to.an( 'array' );
      expect( notFruit ).to.have.length( 3 );
      expect( notFruit ).to.deep.equal(['Scissors', 'Pug', 'Lady Bug']);
    });

    it( '`gemBox` has only gems inside of it', function() {
      expect( gemBox ).to.be.defined;
      expect( gemBox ).to.have.length( 6 );
      expect( gemBox ).to.be.deep.equal(['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Sapphire']);
    });
  });

  describe( 'inserting elements', function() {
    it( '`upToTen` should have a length of 10', function() {
      expect( upToTen ).to.be.defined;
      expect( upToTen ).to.be.an( 'array' );
      expect( upToTen ).to.have.length( 10 );
      expect( upToTen ).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe( '"why not both?"', function() {
    it( '`brownOnly` has only the word "brown" in it and a length of 5', function() {
      expect( brownOnly ).to.be.defined;
      expect( brownOnly ).to.an( 'array' );
      expect( brownOnly ).to.have.length( 5 );
      expect( brownOnly ).to.deep.equal(['brown', 'brown', 'brown', 'brown', 'brown']);
    });
  });

});

describe( 'unshift()', function() {
  it( '`orderedValues` array has all numbers between 1 and 10, has a length of 10', function() {
    expect( orderedValues ).to.be.defined;
    expect( orderedValues ).to.have.length( 10 );
    expect( orderedValues ).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it( '`orderedValuesNewLength` is storing the length of `orderedValues`', function() {
    expect( orderedValuesNewLength ).to.be.defined;
    expect( orderedValuesNewLength ).to.a( 'number' );
    expect( orderedValuesNewLength ).to.be.equal( 10 );
  });
});

describe( 'concat()', function() {
  it( '`randomThingsArray` is the result of joining the variables `genericNumberArray` and `colors`', function() {
    expect( randomThingsArray ).to.be.defined;
    expect( randomThingsArray ).to.be.an( 'array' );
    expect( randomThingsArray ).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Blue', 'Red', 'Yellow']);
  });

  it( '`updatedOrders` is the result of joining the array `orderQueue` and two custom orders that you define', function() {
    expect( updatedOrders ).to.be.defined;
    expect( updatedOrders ).to.be.an( 'array' );
    expect( updatedOrders ).to.have.length( 4 );

    updatedOrders.forEach(function( order ) {
      expect( order ).to.have.key( 'takeOut' );
    });
  });
});

describe( 'join()', function() {
  it( '`sentence` stores the result of calling join on the variable `scrambledWords`', function() {
    expect( sentence ).to.deep.equal( 'burritos for the win' );
  });

  it( '`myFruits` stores the result of calling join on the variable `fruitCollection`', function() {
    expect( myFruits ).to.deep.equal( 'Apple + Banana + Pear' );
  });
});

describe( 'slice()', function() {
  it( '`favoriteFriends` stores all my favs from the `friends` array', function() {
    expect( favoriteFriends ).to.be.defined;
    expect( favoriteFriends ).to.an( 'array' );
    expect( favoriteFriends ).to.have.length( 2 );
    expect( favoriteFriends ).to.deep.equal(['Jacoby', 'Miko']);
    expect( friends ).to.deep.equal(['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.']);
  });

  it( '`owesMoney` stores all the names of people who owe me money', function() {
    expect( owesMoney ).to.be.defined;
    expect( owesMoney ).to.be.an( 'array' );
    expect( owesMoney ).to.have.length( 3 );
    expect( owesMoney ).to.deep.equal(['Joseph', 'Kevin', 'Todd C.']);
  });
});

describe( 'toString()', function() {
  it( '`monthNameString` stores the result of called toString on the array stored at `monthNames`', function() {
    expect( monthNameString ).to.be.defined;
    expect( monthNameString ).to.be.a( 'string' );
    expect( monthNameString ).to.be.deep.equal( 'Jan,Feb,Mar,Apr' );
  });
});

describe( 'indexOf()', function() {
  it( '`favoriteColor` stores the index of where the value \'Red\' can be found in the `colors` array', function() {
    expect( favoriteColor ).to.be.defined;
    expect( favoriteColor ).to.be.a( 'number' );
    expect( favoriteColor ).to.be.equal( 1 );
  });

  it( '`favoriteEvenNumber` stores the index of where the value \'76\' can be found in the `mixedNums` array', function() {
    expect( favoriteEvenNumber ).to.be.defined;
    expect( favoriteEvenNumber ).to.be.a( 'number' );
    expect( favoriteEvenNumber ).to.be.equal( 10 );
  });
});

describe( 'lastIndexOf()', function() {
  it( '`lastNine` stores the index of the last 9 that can be found in the `bulkNumbers` array', function() {
    expect( lastNine ).to.be.defined;
    expect( lastNine ).to.be.a( 'number' );
    expect( lastNine ).to.be.equal( 5 );
  });

  it( '`lastFive` stores the index of the last number 5 that can be found in the `bulkNumbers` array', function() {
    expect( lastFive ).to.be.defined;
    expect( lastFive ).to.be.a( 'number' );
    expect( lastFive ).to.be.equal( 9 );
  });
});
