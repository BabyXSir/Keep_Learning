/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let r = new Map();
  let c = new Map()
  let g = new Map()
  let unset = new Set()

  for (var i = 0; i < 9; i++) {
    r.set(i, new Set())
    c.set(i, new Set())
    g.set(i, new Set())
  }

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      let num = board[i][j]
      let gi = parseInt(i / 3) * 3 + parseInt(j / 3)
      if (num == '.') unset.add([i, j, gi])
      else {
        r.get(i).add(num - 0)
        c.get(j).add(num - 0)
        g.get(gi).add(num - 0)
      }
    }
  }

  while (unset.size) {
    unset.forEach(item => {
      console.log(`item`, item)
      let i = item[0]
      let j = item[1]
      let gi = item[2]
      for (var k = 1; k < 10; k++) {
        if (!r.get(i).has(k) && !c.get(j).has(k) && !g.get(gi).has(k)) {
          r.get(i).add(k)
          c.get(j).add(k)
          g.get(gi).add(k);
          board[i][j] = k
          unset.delete(item)
          return
        }
      }
    })
  }
  return board;
};

let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log(solveSudoku(board))