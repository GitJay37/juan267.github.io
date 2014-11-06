var chessBoard = function(size) {
  for (var i = 1; i < size; i ++) {
    var dark = '';
    for (var j = 1; j < (size*2)+1 ; j++) {
      if (j % 2 === 0)  dark = dark + "#";
       if (j % 2 != 0)  dark = dark + "  ";
    }
    if (i % 2 === 0)  dark = " " + dark
    console.log(dark)
  }
}

chessBoard(10)