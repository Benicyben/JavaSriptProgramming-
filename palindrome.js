   const prompt = require("prompt-sync")();
    let word = prompt ("Enter a word: ");
        reverseword = ""

    for (character of word){
        reverseword = character + reverseword;
    }
    
    if(reverseword!= word){
        console.log("It's not a palindrome");
        
    }
    
        else if(reverseword === word){
        console.log("It's a palindrome");
        }
