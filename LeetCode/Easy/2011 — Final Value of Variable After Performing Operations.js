



    
var finalValueAfterOperations = function(operations) {
    //--X | X-- == -1   
    //++X | X++ == +1
    //Entrada: ["--X", "X++", "X++"]

    let x = 0

    for (const operation of operations) {
        if (operation === "--X" || operation === "X--") {
            x--
        } else {
            x++
        }
  }

  return x
}

