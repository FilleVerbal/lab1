import {getQuestion} from './readline.js'

const [question, close] = getQuestion();
const valList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let input = "", again = "Du får välja en till om du vill";


console.log("Välkommen, var vänlig och välj ett alternativ mellan a och j tack!!");
console.log("Eller välj något annat för att avsluta!");
do {
    console.log();
    input = await question('>')
    input = input.toLowerCase()
    if (input == "a") {
        bildA()
        console.log()
        console.log(again)
    }
    else if (input == "b") {
        bildB()
        console.log()
        console.log(again)
    }
    else if (input == "c") {
        bildC()
        console.log()
        console.log(again)
    }
    else if (input == "d") {
        bildD()
        console.log()
        console.log(again)
    }
    else if (input == "e") {
        bildE()
        console.log()
        console.log(again)
    }
    else if (input == "f") {
        bildF()
        console.log()
        console.log(again)
    }
    else if (input == "g") {
        bildG()
        console.log()
        console.log(again)
    }
    else if (input == "h") {
        bildH()
        console.log()
        console.log(again)
    }
    else if (input == "i") {
        bildI()
        console.log()
        console.log(again)
    }
    else if (input == "j") {
        bildJ()
        console.log()
        console.log(again)
    }
    else {
        console.log("Hej då!!!")
    }
} while (valList.includes(input) );



function bildA() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++) {
            if (j === 1) {
                text = String(text) + "#";
            } else {
                text = String(text) + ".";
            }
        }
        console.log(text)
    }
}

function bildB() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++) {
            if (j === i) {
                text = String(text) + "#";
            } else {
                text = String(text) + ".";
            }
        }
        console.log(text)
    }
}

function bildC() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++) {
            if (j === 3 || j === 4 || j === 5) {
                text = String(text) + "#";
            } else {
                text = String(text) + ".";
            }
        }
        console.log(text)
    }
}

function bildD() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++) {
            if (i === 3) {
                text = String(text) + "#";
            } else if (j === 3){
                text = String(text) + "#";
            } else {
                text = String(text) + ".";
            }
        }
        console.log(text)
    }
}

function bildE() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++) {
            let k = i + j;
            if (j === 5) {
                text = String(text) + "#";
            } else if (k === 7){
                text = String(text) + "#";
            } else {
                text = String(text) + ".";
            }
        }
        console.log(text)
    }
}

function bildF() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++) {
            let k = i + j;
            if (i === j) {
                text = String(text) + "#";
            } else if (k === 7){
                text = String(text) + "#";
            } else {
                text = String(text) + ".";
            }
        }
        console.log(text)
    }
}

function bildG() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++){
            if (j % 2 == 0){
                text = String(text) + ".";
            }
            else {
                text = String(text) + "#";
            }
        }
        console.log(text);
    }
}

function bildH() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++){
            if (i === 1  || i === 6 || j === 1 || j === 8){
                text = String(text) + ".";
            }
            else if( (i === 2 || i ===5) && (j > 1 || j < 8)) {
                text = String(text) + "#";
            }
            else if (j === 2 || j === 7){
                text = String(text) + "#";
            }
            else {
                text = String(text) + ".";
            }
        }
        console.log(text);
    }
}

function bildI() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++) {
            let k = i + j;
            if (i === 1 || i === 4){
                if (k % 3 == 0) {
                    text = String(text) + "#";
                } else if (k % 3 == 2){
                    text = String(text) + ".";
                } else {
                    text = String(text) + "O";
                }
            } 
            else if ( i === 2 || i === 5){
                if (k % 3 == 0) {
                    text = String(text) + "O";
                } else if (k % 3 == 2){
                    text = String(text) + "#";
                } else {
                    text = String(text) + ".";
                }
            }
            else if ( i === 3 || i === 6){
                if (k % 3 == 0) {
                    text = String(text) + ".";
                } else if (k % 3 == 2){
                    text = String(text) + "O";
                } else {
                    text = String(text) + "#";
                }
            }
        }
        console.log(text)
    }
}

function bildJ() {
    for (let i = 1; i <= 6; i++){
        let text = "";
        for (let j = 1; j <= 8; j++) {
            let k = i + j;
            if (i < 4) {
                if ( j % 3 == 0){
                    text = String(text) + "#";
                }
                else{
                    text = String(text) + ".";
                }
            }
            else if ( i > 4){
                if ( k % 2 == 0){
                    text = String(text) + ".";
                }
                else {
                    text = String(text) + "#";
                }
            }
            else {
                text = String(text) + ".";
            }
            }    
        console.log(text)
    }
}
close()