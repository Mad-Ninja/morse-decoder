const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    for (let i = 0; i < expr.length; i = i + 10){
        result.push(expr.substring(i, i + 10));
    }
        
    for (let i = 0; i < result.length; i++){
        if (result[i] === "**********"){
            result[i] = " ";
            continue;
        }
        result[i] = String(Number(result[i]));
    }
        
    for (let i = 0; i < result.length; i++){
        if (result[i] === " "){
            continue;
        }
        let elem = result[i];
        let buffer = [];
        for (let j = 0; j < elem.length; j = j + 2){
            buffer.push(elem.substring(j, j + 2));
        }
        result[i] = buffer;
    }
        
    for (let i = 0; i < result.length; i++){
        if (result[i] === " "){
            continue;
        }
        let elem = result[i];
        for (let j = 0; j < elem.length; j++){
            if (elem[j] === "11"){
              elem[j] = "-";
            } else {
              elem[j] = ".";
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] === " "){
            continue;
        }
        let letter = result[i] = result[i].join("");
        result[i] = MORSE_TABLE[letter];
    }
        
    return result.join("");
}

module.exports = {
    decode
}