// Abidzar Zulfa Arifa Kusyono
// Soal Nomor 2

// Fungsi untuk mengolah Dense Ranking
function denseRanking(playerScores, gitsScores) {
    const uniqueScores = [...new Set(playerScores)];
    const ranks = {};
    let rank = 1;

    for (const score of uniqueScores) {
      ranks[score] = rank;
      rank++;
    }
  
    const gitsRanking = [];
    for (const score of gitsScores) {
      let gitsRank = rank;
      for (const playerScore of playerScores) {
        if (score >= playerScore) {
          gitsRank = ranks[playerScore];
          break;
        }
      }
      gitsRanking.push(gitsRank);
    }
    return gitsRanking;
  }
  
  // Contoh eksekusi sesuai soal
  const playerScores = [100, 100, 50, 40, 40, 20, 10];
  const gitsScores = [5, 25, 50, 120];
  const gitsRanking = denseRanking(playerScores, gitsScores);
  console.log(gitsRanking);
  