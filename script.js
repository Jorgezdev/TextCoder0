// Función para encriptar usando el Cifrado César
function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            // Letras mayúsculas
            if ((code >= 65) && (code <= 90))
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);

            // Letras minúsculas
            else if ((code >= 97) && (code <= 122))
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        result += char;
    }
    return result;
}

// Función para desencriptar
function decrypt(text, shift) {
    return encrypt(text, (26 - shift) % 26); // Revertimos el proceso
}

// Mostrar/Ocultar la nube de instrucciones
document.getElementById('instructionsBtn').addEventListener('click', () => {
    const bubble = document.getElementById('instructionsBubble');
    bubble.classList.toggle('hidden');
});

// Actualizar el contador de caracteres
document.getElementById('inputText').addEventListener('input', () => {
    const maxChars = 250;
    const currentLength = document.getElementById('inputText').value.length;
    document.getElementById('charCounter').textContent = `${maxChars - currentLength} caracteres restantes`;
});

document.getElementById('outputText').addEventListener('input', () => {
    const maxChars = 250;
    const currentLength = document.getElementById('outputText').value.length;
    document.getElementById('charCounterOutput').textContent = `${maxChars - currentLength} caracteres restantes`;
});

// Lógica para manejar los botones de encriptar y desencriptar
document.getElementById('encryptBtn').addEventListener('click', () => {
    const input = document.getElementById('inputText').value;
    const encrypted = encrypt(input, 3); // Aquí se define el desplazamiento, en este caso 3
    document.getElementById('outputText').value = encrypted;
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const input = document.getElementById('outputText').value;
    const decrypted = decrypt(input, 3); // Aquí se debe usar el mismo desplazamiento para revertirlo
    document.getElementById('inputText').value = decrypted;
});

// Limpiar campos de texto
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('charCounter').textContent = '250 caracteres restantes';
    document.getElementById('charCounterOutput').textContent = '250 caracteres restantes';
});

// Copiar el texto del área de salida al portapapeles
document.getElementById('copyBtn').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').value;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});

