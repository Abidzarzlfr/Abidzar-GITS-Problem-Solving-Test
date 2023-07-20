# Abidzar-GITS-Problem-Solving-Test
Problem Solving Test - PT GITS Indonesia

Name  : Abidzar Zulfa Arifa Kusyono

* Deskripsi Soal Nomor 3 (Bracket Test)

1. Deskripsi Function

   Fungsi ini digunakan untuk memeriksa apakah tanda kurung dalam sebuah string seimbang atau tidak. Tanda kurung yang diperbolehkan adalah (, ), {, }, [, dan ]. Fungsi akan mengembalikan nilai 'YES' jika tanda kurung dalam string seimbang, dan 'NO' jika tidak seimbang. 

Kode pada file 3.js mendefinisikan fungsi bracketTest yang digunakan untuk memeriksa keseimbangan tanda kurung dalam sebuah string. Di tahap pertama, fungsi ini mendeklarasikan array x yang berfungsi sebagai tumpukan untuk menyimpan tanda kurung buka sementara. Kemudian, terdapat dua array, yaitu openBracket dan closeBracket, yang berisi tanda kurung buka dan tutup yang diperbolehkan.

Fungsi bracketTest yang saya buat menggunakan perulangan for untuk mengiterasi setiap karakter dalam string input. Selama perulangan dijalankan, fungsi akan memeriksa apakah karakter tersebut adalah tanda kurung buka, atau kurung tutup. Jika karakter adalah tanda kurung buka, fungsi akan memasukkannya ke dalam array x. Jika karakter adalah tanda kurung tutup, fungsi akan mencari tanda kurung buka yang cocok dengan tanda kurung tutup tersebut melalui array openBracket dan closeBracket. Jika tanda kurung buka yang cocok tidak ada atau tidak sesuai dengan tanda kurung buka terakhir dalam tumpukan x, maka fungsi akan mengembalikan 'NO', menandakan bahwa tanda kurung tidak seimbang.

Setelah selesai iterasi, fungsi akan memeriksa apakah tumpukan x kosong atau tidak. Jika tumpukan kosong, maka tanda kurung telah dipasangkan dengan benar dan keseimbangan dari setiap bracket sesuai. Fungsi akan mengembalikan 'YES' dalam kasus ini. Namun, jika tumpukan x masih memiliki elemen, maka ada beberapa tanda kurung buka yang tidak memiliki tanda kurung tutup yang sesuai, dan fungsi akan mengembalikan 'NO'.

Contoh penggunaan dari fungsi ini juga diberikan di bagian akhir kode, di mana fungsi bracketTest dipanggil dengan beberapa inputan string yang berisi kombinasi tanda kurung buka dan tutup, dan output hasilnya akan dicetak menggunakan console.log.

2. Analisa Kompleksitas

   Kesimpulannya pada fungsi bracketTest file 3.js menggunakan O(n), di mana n merupakan panjang dari string inputnya. Hal tersebut dilakukan karena perulangan for yang akan mengiterasi setiap karakter dalam string input. Dalam perulangan tersebut, saya melakukan operasi push dan pop ke array x, yang memiliki kompleksitas O(1) pada setiap operasi. Oleh karena itu, kompleksitas total perulangan for adalah O(n).

Karena tidak ada perulangan atau fungsi lain yang memiliki kompleksitas lebih dari O(n) di dalam for loop, kompleksitas keseluruhan fungsi bracketTest adalah O(n). Ini membuat fungsi ini efisien dan dapat diandalkan untuk mengecek keseimbangan tanda kurung pada string dengan panjang apa pun.

3. Cara Test
    1. Salin kode 3.js ke dalam file JavaScript yang sudah disiapkan, dengan format .js
    2. Pastikan node.js sudah di install
    3. Buka terminal atau command prompt, lalu arahkan ke direktori tempat Anda menyimpan file example.js.
    4. jalankan perintah "node example.js "{ [ ( ) ] }", untuk check bracket.
    5. Tekan Enter, dan output "YES" atau "NO" akan ditampilkan di terminal sesuai dengan kecocokan tanda kurung yang diuji.

