// Abidzar Zulfa Arifa Kusyono
// Soal Nomor 3

// Fungsi untuk check bracket
function bracketTest(input) {
    const x = [];
    const openBracket = ['(', '{', '['];
    const closeBracket = [')', '}', ']'];
  
    for (let i = 0; i < input.length; i++) {
      const bracket = input[i];
  
      if (openBracket.includes(bracket)) {
        x.push(bracket);
      } else if (closeBracket.includes(bracket)) {
        const matchingOpenBracket = openBracket[closeBracket.indexOf(bracket)];
        if (x.length === 0 || x.pop() !== matchingOpenBracket) {
          return 'NO';
        }
      }
    }
  
    return x.length === 0 ? 'YES' : 'NO';
  }
  
  // Contoh penggunaan:
  console.log(bracketTest('{ [ ( ) ] }')); // Output: YES
  console.log(bracketTest('{ [ ( ] ) }')); // Output: NO
  console.log(bracketTest('{ ( ( [ ] ) [ ] ) [ ] }')); // Output: YES
  