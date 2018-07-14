const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    //Clockwise
    // console.log(direction);
    console.time('ClockWise timer');
    console.log(this.matrix);
    var thisMatrix = this.matrix;
    var newMatrix = [];
    var innerArr = [];
    if (direction === "ClockWise") {
      while (thisMatrix[0].length > 0) {
        for (var i=thisMatrix.length-1; i>=0; i--) {
          innerArr.push(thisMatrix[i][0]);
          thisMatrix[i].shift();
        }
        newMatrix.push(innerArr);
        innerArr = [];
      }
      console.log(direction);
      console.log(newMatrix);
      console.log("**********************")
      this.matrix = newMatrix;
      // console.log(thisMatrix);
      console.timeEnd('ClockWise timer');



    } else if (direction === "CounterClockWise") {
      console.time('CounterWise timer');
      while(thisMatrix[0].length > 0) {
        for (var i=0; i<thisMatrix.length; i++) {
          innerArr.push(thisMatrix[i][thisMatrix[i].length-1]);
          thisMatrix[i].pop();
        }
        newMatrix.push(innerArr);
        innerArr = [];
      }
      console.log(direction);
      console.log(newMatrix);
      console.log("**********************");
      this.matrix = newMatrix;
      console.timeEnd('CounterWise timer');

    }
  }
};
