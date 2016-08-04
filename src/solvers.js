/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  // edge case
  if (n < 1) {
    return 0;
  }

  var solver = function(n, board, row, col) {
    // base case
    if (n === 0) {
      return board.rows();
    }

    // debugger;
    var board = board || new Board({ n: n});

    for (var i = row || 0; i < board.rows().length; i++) {
      for (var j = col || 0; j < board.rows().length; j++) {
        if (!(board.rows()[i][j])) {
          board.togglePiece(i, j);
          if (board.hasAnyRooksConflicts()) {
            board.togglePiece(i, j); //
          } else {
            return solver(n - 1, board, i, j);
          }
        }
      }
    }

  };

  var solution = solver(n);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var results = [];
  var bigN = n;
  // edge case
  if (n < 1) {
    return 0;
  }

  var solver = function(n, board, row, col) {
    var board = board || new Board({ n: n});
    if (board.hasAnyRooksConflicts()) {
      return;
    }
    // base case
    
    if (n === 0) {
      results.push(board.rows());
      return;
    }

    if (bigN !== n) {
      board.togglePiece(row, col);
      col++;
      n++;
    }

    // debugger;
    

    for (var i = row || 0; i < board.rows().length; i++) {
      for (var j = col || 0; j < board.rows().length; j++) {
        if (!(board.rows()[i][j])) {
          board.togglePiece(i, j);
          solver(n - 1, board, i, j);
          // if (board.hasAnyRooksConflicts()) {
          //   board.togglePiece(i, j); //
          // } else {
          //   return solver(n - 1, board, i, j);
          // }
        }
      }
    }

  };
debugger;
  solver(n);
  // var results = [];

  // for (var i = row || 0; i < board.rows().length; i++) {
  //   for (var j = col || 0; j < board.rows().length; j++) {
      
  //     if (!(board.rows()[i][j])) {
  //       board.togglePiece(i, j);
  //       if (board.hasAnyRooksConflicts()) {
  //         board.togglePiece(i, j); //
  //       } else {
  //         return solver(n - 1, board, i, j);
  //       }
  //     }
  //   }
  // }
  solutionCount = results.length;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
