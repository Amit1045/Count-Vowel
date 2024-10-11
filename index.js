const showResult = document.getElementById("result")

const Search = document.getElementById("search")

Search.addEventListener("click", findVowel)

let count = 0

function findVowel() {
    const totalChar = document.getElementById("userInp").value

    const text = totalChar.toLowerCase();// reason make it lowercase because match the vowels with given id 
    
    const myArray = text.split("")// to change the given string into array form
    
    let totalLetter = myArray.length // to find the length of string
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < totalLetter; i++) {
       
        if (vowels.includes(myArray[i])) {
            count++
        }
    }
    showResult.innerHTML = `Total vowels: ${count}`
    
    count = 0
}