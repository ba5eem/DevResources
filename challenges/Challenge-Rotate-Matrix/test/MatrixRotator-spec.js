const chai = require('chai');
chai.should();
const MatrixRotator = require("../MatrixRotator");
const Matrix = require("../Matrix");
const { Direction } = require("../Direction");

describe("The Matrix Rotator", function () {
  let matrixRotator = null;

  describe(" TheClockwise Rotation", function () {

    beforeEach(function() {
      matrixRotator = new MatrixRotator(Matrix.getMatrix1());
    });

    it("can rotate Clockwise", function () {
      matrixRotator.rotate(Direction.CW);
      matrixRotator.matrix.should.be.deep.equal([
                                                  [9,0,3,4,8],
                                                  [0,6,3,5,0],
                                                  [3,8,6,2,1],
                                                  [8,8,9,9,9],
                                                  [7,3,0,7,3]
                                                ]);

    });
  });

  describe("The CounterClockwise Rotator", function () {

    beforeEach(function() {
      matrixRotator = new MatrixRotator(Matrix.getMatrix1());
    });

    it("can rotate CounterClockwise", function () {
      matrixRotator.rotate(Direction.CCW);
      matrixRotator.matrix.should.be.deep.equal([
                                                  [3,7,0,3,7],
                                                  [9,9,9,8,8],
                                                  [1,2,6,8,3],
                                                  [0,5,3,6,0],
                                                  [8,4,3,0,9]
                                                ]);
    });

    it("can rotate CounterClockwise twice", function () {
      matrixRotator.rotate(Direction.CCW);
      matrixRotator.rotate(Direction.CCW);
      matrixRotator.matrix.should.be.deep.equal([
                                                  [7,8,3,0,9],
                                                  [3,8,8,6,0],
                                                  [0,9,6,3,3],
                                                  [7,9,2,5,4],
                                                  [3,9,1,0,8],
                                                ]);
    });

    it("can rotate CounterClockwise and Clockwise", function () {
      matrixRotator.rotate(Direction.CCW);
      matrixRotator.rotate(Direction.CCW);
      matrixRotator.rotate(Direction.CW);
      matrixRotator.rotate(Direction.CW);
      matrixRotator.matrix.should.be.deep.equal([
                                                  [8,0,1,9,3],
                                                  [4,5,2,9,7],
                                                  [3,3,6,9,0],
                                                  [0,6,8,8,3],
                                                  [9,0,3,8,7],
                                                ]);
    });
  });
});