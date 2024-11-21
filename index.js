const keyboardContainer = document.querySelector(".keyboard");
const textInput = document.querySelector("#textInput");

const keysLayout = [
    '1',
    '2',
    '3',
    '4',
    '5',    
    '6',
    '7',    
    '8',
    '9',    
    '0',
    'Q',
    'W',
    'E',    
    'R',
    'T',    
    'Y',
    'U',    
    'I',
    'O',    
    'P',
    'A',    
    'S',
    'D',    
    'F',
    'G',    
    'H',
    'J',    
    'K',
    'L',    
    'Z',
    'X',    
    'C',
    'V',    
    'B',
    'N',    
    'M',
    'Backspace',
];

// create the keyboard keys dynammically

keysLayout.forEach((key) => {
    const keyElement = document.createElement("div");
    keyElement.textContent = key;
    keyElement.classList.add("key");

    // Add the listener to each key
    if (key === "Backspace") {
        keyElement.addEventListener("click", () => {
            textInput.value = textInput.value.slice(0, -1);
        });
    } 
    else {
        keyElement.addEventListener("click", () => {
            textInput.value += key;
        });
    }

    // Append the key to the keyboard container
    keyboardContainer.appendChild(keyElement);
});