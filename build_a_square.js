// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// -------------------- My Solution -----------------------------------


function generateShape(integer){
    let str = ""
      for (let x = 0; x < integer; x++)
        {
            
            for (let i = 0; i < integer; i++ ) {
                str += "+"
            }

            if (x != integer -1) {
                str += "\n"
            }

        }
      return str
    }