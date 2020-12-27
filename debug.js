function zeroArray(m, n) {
    let newArray = [];
    // let row = []; Khai bao o day se k duoc reset lai sau moi vong lap theo hang
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(0)
            // console.log(i)
        }
        newArray.push(row)
    }
    return newArray
   }

   let matrix = zeroArray(5, 5);
   console.log(matrix);