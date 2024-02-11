function checkVowels(){
    var input = document.getElementById("inputText").value;
    var result = document.getElementById("result");

    var count = 0;
    for(var i =0; i<input.length; i++){

        var char = input.charAt(i);
        if(isVowel(char)){
            count++;
        }
    }
    result.textContent = "Total vowels : " + count;
}

function isVowel(char){
    var vowels = ["a" , "e", "i" , "o" , "u", "A", "E", "I", "O","U"];
    return vowels.includes(char);

}
