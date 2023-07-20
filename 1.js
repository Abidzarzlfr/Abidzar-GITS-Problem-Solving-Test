// Abidzar Zulfa Arifa Kusyono
// Soal Nomor 1

// Fungsi untuk mengolah rumus A000124 of Sloane’s OEIS
function rumusSloane(x) {
    let result = "";
    let startNumber = 1;
    // Logika Rumus
    for (let i = 1; i <= x; i++) {
      result += startNumber;
      if (i !== x) {
        result += "-";
      }
      startNumber += i;
    }
    return result;
  }

  // Logika Input
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Masukkan angka: ", (answer) => {
    const length = parseInt(answer);
    const output = rumusSloane(length);
    console.log(output);
    rl.close();
  });
  