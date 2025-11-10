function searchWord() {
	
    const text = document.getElementById('textInput').value;
    const word = document.getElementById('wordInput').value;
    const resultElement = document.getElementById('result');
	
    if (text.length === 0 || word.length === 0) {
        resultElement.innerHTML = "Заповніть обидва поля!";
        return;
    }
    
    const textObj = new String(text);
    const wordObj = new String(word);
   
    const lowerText = textObj.toLowerCase();
    const lowerWord = wordObj.toLowerCase();
    
    if (lowerText.includes(lowerWord)) {
        resultElement.innerHTML = "Слово знайдено у тексті!";
        resultElement.style.color = "#E2C18B";
    } else {
        resultElement.innerHTML = "Слово не знайдено у тексті!";
        resultElement.style.color = "#f0423f";
    }
}