function caesarCipher(str, shift) {
    return str.split('').map(char => {
      const code = char.charCodeAt(0);
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        const limit = code < 97 ? 90 : 122;
        let newCode = code + shift;
        if (newCode > limit) newCode -= 26;
        return String.fromCharCode(newCode);
      }
      return char;
    }).join('');
  }
  
  module.exports = caesarCipher;