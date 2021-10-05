//initialize the numbers in arrays
const zero=[" _ ","| |","|_|"];
const one =["   ","|  ","|  "];
const two = [" _ "," _|","|_ "];
const three = [" _ "," _|"," _|"];
const four = ["   ","|_|","  |"];
const five = [" _ ","|_ "," _|"];
const six = [" _ ","|_ ","|_|"];
const seven = [" _ ","  |","  |"];
const nine = [" _ ","|_|","  |"];
//initialize the array holding each number
const digits = [zero , one, two, three, four, five, six, seven, eight, nine];

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printSingles = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(zero[y]+" "+digits[x][y])
        }
    }
}

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printTeens = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(one[y]+" "+digits[x][y])
        }
    }
}

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printTwenties = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(two[y]+""+digits[x][y])
        }
    }
}

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printThirties = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(three[y]+""+digits[x][y])
        }
    }
}

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printFourties = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(four[y]+""+digits[x][y])
        }
    }
}

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printFifties = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(five[y]+""+digits[x][y])
        }
    }
}

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printSixties = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(six[y]+""+digits[x][y])
        }
    }
}

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printSeventies = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(seven[y]+""+digits[x][y])
        }
    }
}

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printEighties = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(eight[y]+""+digits[x][y])
        }
    }
}

//prints all the numbers with it's respective digit followed by the numbers contained in the digits array
const printNineties = () =>{
    for (x in digits){
        for (y in digits[x]){
            console.log(nine[y]+""+digits[x][y])
        }
    }
}

printSingles();
printTeens();
printTwenties();
printThirties();
printFourties();
printFifties();
printSixties();
printSeventies();
printEighties();
printNineties();