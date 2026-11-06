export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SubTopic {
  title: string;
  content: string;
  example?: string;
}

export interface Chapter {
  id: number;
  title: string;
  icon: string;
  color: string;
  cp: string[];
  tp: string[];
  atp: string[];
  subTopics: SubTopic[];
  quiz: QuizQuestion[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Bilangan Cacah Sampai 999.999",
    icon: "🔢",
    color: "from-blue-500 to-blue-700",
    cp: [
      "Pada Akhir Fase B, Peserta didik menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 10.000",
      "Mereka dapat membaca, menulis, menentukan nilai tempat, membandingkan, mengurutkan, menggunakan nilai tempat, melakukan komposisi dan dekomposisi bilangan tersebut.",
      "Mereka juga dapat menyelesaikan masalah berkaitan dengan uang menggunakan ribuan sebagai satuan.",
      "Mereka dapat melakukan operasi penjumlahan dan pengurangan bilangan cacah sampai 1.000.",
      "Mereka dapat melakukan operasi perkalian dan pembagian bilangan cacah sampai 100 menggunakan benda-benda konkret, gambar, dan simbol matematika.",
      "Mereka juga dapat menyelesaikan masalah berkaitan dengan kelipatan dan faktor.",
      "Peserta didik dapat membandingkan dan mengurutkan antar-pecahan dengan pembilang satu dan antarpecahan dengan penyebut yang sama.",
      "Mereka dapat mengenali pecahan senilai menggunakan gambar dan simbol matematika.",
      "Peserta didik menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan desimal.",
      "Mereka dapat menyatakan pecahan desimal persepuluhan dan perseratusan, serta menghubungkan pecahan desimal perseratusan dengan konsep persen."
    ],
    tp: [
      "Membaca dan menyajikan bilangan cacah dan lambangnya sampai angka 999.999",
      "Membandingkan dan mengurutkan bilangan-bilangan dari bilangan terkecil ke bilangan terbesar atau sebaliknya sampai 999.999",
      "Menentukan posisi bilangan cacah sampai 999.999 pada garis bilangan",
      "Memperkirakan dan menghitung hasil penjumlahan dan pengurangan sampai dengan 999.999 dan hubungan antara penjumlahan dan pengurangan",
      "Menggunakan sifat-sifat operasi dalam menentukan hasil perhitungan",
      "Menghitung kuadrat",
      "Menentukan kelipatan, faktor, kelipatan persekutuan terkecil (KPK), dan faktor persekutuan terbesar (FPB)",
      "Menyajikan, memodelkan penjumlahan, pengurangan, perkalian, dan pembagian dalam konteks uang dan kaitan setiap satuannya serta berbagai representasi visual dan strategi perhitungan",
      "Menentukan pecahan senilai",
      "Mengenal, mengidentifikasi, mengurutkan, dan membandingkan berbagai bentuk pecahan (biasa, campuran, desimal, dan persen) dan hubungan di antaranya",
      "Menentukan posisi pecahan pada garis bilangan, mengurutkan, dan membandingkannya dengan bilangan lainnya",
      "Menentukan hasil Penjumlahan dan pengurangan pecahan dan pecahan campuran dengan penyebut sama"
    ],
    atp: [
      "Bilangan dan simbol bilangan cacah sampai angka 999.999 sampai dengan 1.000.000 dan hubungan antara penjumlahan dan pengurangan",
      "Perkalian dan pembagian bilangan cacah sampai dengan 10.000 menggunakan berbagai representasi visual dan fakta dasar (konteks)",
      "Kuadrat dari suatu bilangan cacah (maksimum tiga angka)",
      "Kelipatan, faktor, kelipatan persekutuan terkecil (KPK), dan faktor persekutuan terbesar (FPB) dari bilangan cacah",
      "Uang dan satuannya",
      "Pecahan Senilai",
      "Pecahan biasa dan pecahan campuran positif dengan penyebut bilangan satu atau dua angka (misalnya: 5/12, 2¼)",
      "Penjumlahan dan pengurangan pecahan dan pecahan campuran dengan penyebut sama"
    ],
    subTopics: [
      {
        title: "Nilai Tempat Bilangan",
        content: "Setiap angka dalam bilangan memiliki nilai tempat. Bilangan 999.999 terdiri dari nilai tempat: ratusan ribu, puluh ribuan, ribuan, ratusan, puluhan, dan satuan.\n\nContoh: Bilangan 345.678\n• 3 = ratusan ribu (300.000)\n• 4 = puluh ribuan (40.000)\n• 5 = ribuan (5.000)\n• 6 = ratusan (600)\n• 7 = puluhan (70)\n• 8 = satuan (8)",
        example: "345.678 = 300.000 + 40.000 + 5.000 + 600 + 70 + 8"
      },
      {
        title: "Membandingkan dan Mengurutkan Bilangan",
        content: "Untuk membandingkan dua bilangan:\n1. Bandingkan jumlah digitnya - bilangan dengan digit lebih banyak lebih besar\n2. Jika jumlah digit sama, bandingkan dari digit paling kiri\n\nSimbol perbandingan:\n• > (lebih besar dari)\n• < (lebih kecil dari)\n• = (sama dengan)",
        example: "456.789 > 456.788 karena angka satuannya 9 > 8"
      },
      {
        title: "Penjumlahan dan Pengurangan",
        content: "Penjumlahan dan pengurangan bilangan cacah dilakukan dengan cara bersusun.\n\nSifat-sifat penjumlahan:\n• Komutatif: a + b = b + a\n• Asosiatif: (a + b) + c = a + (b + c)\n• Identitas: a + 0 = a\n\nHubungan penjumlahan dan pengurangan:\nJika a + b = c, maka c - b = a dan c - a = b",
        example: "234.567 + 123.456 = 358.023\n567.890 - 234.567 = 333.323"
      },
      {
        title: "Perkalian dan Pembagian",
        content: "Perkalian adalah penjumlahan berulang.\nPembagian adalah kebalikan dari perkalian.\n\nSifat-sifat perkalian:\n• Komutatif: a × b = b × a\n• Asosiatif: (a × b) × c = a × (b × c)\n• Distributif: a × (b + c) = (a × b) + (a × c)\n• Identitas: a × 1 = a\n• Nol: a × 0 = 0",
        example: "25 × 4 = 100 (karena 25 + 25 + 25 + 25 = 100)\n100 ÷ 4 = 25"
      },
      {
        title: "Kuadrat Bilangan",
        content: "Kuadrat suatu bilangan adalah hasil perkalian bilangan tersebut dengan dirinya sendiri.\n\nn² = n × n\n\nBeberapa kuadrat bilangan penting:\n1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25\n6² = 36, 7² = 49, 8² = 64, 9² = 81, 10² = 100",
        example: "12² = 12 × 12 = 144\n15² = 15 × 15 = 225"
      },
      {
        title: "Kelipatan, Faktor, KPK, dan FPB",
        content: "• Kelipatan: hasil perkalian suatu bilangan dengan bilangan cacah\n• Faktor: bilangan yang dapat membagi habis suatu bilangan\n• KPK (Kelipatan Persekutuan Terkecil): kelipatan terkecil yang sama dari dua bilangan\n• FPB (Faktor Persekutuan Terbesar): faktor terbesar yang sama dari dua bilangan\n\nCara mencari KPK: daftar kelipatan masing-masing, cari yang terkecil yang sama\nCara mencari FPB: daftar faktor masing-masing, cari yang terbesar yang sama",
        example: "Kelipatan 4: 4, 8, 12, 16, 20, 24...\nKelipatan 6: 6, 12, 18, 24...\nKPK(4,6) = 12\n\nFaktor 12: 1, 2, 3, 4, 6, 12\nFaktor 18: 1, 2, 3, 6, 9, 18\nFPB(12,18) = 6"
      },
      {
        title: "Pecahan",
        content: "Pecahan menyatakan bagian dari keseluruhan.\n\nJenis-jenis pecahan:\n• Pecahan biasa: a/b (contoh: 3/4)\n• Pecahan campuran: a b/c (contoh: 2 1/3)\n• Pecahan desimal: 0,75\n• Persen: 75%\n\nPecahan senilai: pecahan yang nilainya sama\nContoh: 1/2 = 2/4 = 3/6 = 4/8\n\nPenjumlahan pecahan berpenyebut sama:\na/c + b/c = (a+b)/c",
        example: "1/4 + 2/4 = 3/4\n5/6 - 2/6 = 3/6 = 1/2\n\nPecahan senilai: 2/3 = 4/6 = 6/9"
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Nilai tempat angka 5 pada bilangan 253.478 adalah...",
        options: ["5.000", "50.000", "500", "50"],
        correctAnswer: 1,
        explanation: "Angka 5 berada pada posisi puluh ribuan, sehingga nilainya adalah 50.000."
      },
      {
        id: 2,
        question: "Manakah bilangan yang paling besar?",
        options: ["98.765", "99.001", "98.999", "99.010"],
        correctAnswer: 3,
        explanation: "99.010 adalah yang terbesar. Bandingkan dari digit paling kiri: 99.010 > 99.001 > 98.999 > 98.765"
      },
      {
        id: 3,
        question: "Hasil dari 234.567 + 165.433 = ...",
        options: ["399.000", "400.000", "399.900", "400.100"],
        correctAnswer: 1,
        explanation: "234.567 + 165.433 = 400.000"
      },
      {
        id: 4,
        question: "Hasil dari 15² adalah...",
        options: ["200", "215", "225", "250"],
        correctAnswer: 2,
        explanation: "15² = 15 × 15 = 225"
      },
      {
        id: 5,
        question: "KPK dari 6 dan 8 adalah...",
        options: ["12", "24", "48", "36"],
        correctAnswer: 1,
        explanation: "Kelipatan 6: 6, 12, 18, 24, 30...\nKelipatan 8: 8, 16, 24, 32...\nKPK(6,8) = 24"
      },
      {
        id: 6,
        question: "FPB dari 12 dan 18 adalah...",
        options: ["2", "3", "6", "9"],
        correctAnswer: 2,
        explanation: "Faktor 12: 1, 2, 3, 4, 6, 12\nFaktor 18: 1, 2, 3, 6, 9, 18\nFPB(12,18) = 6"
      },
      {
        id: 7,
        question: "Pecahan yang senilai dengan 2/5 adalah...",
        options: ["4/10", "3/10", "4/15", "6/10"],
        correctAnswer: 0,
        explanation: "2/5 = 4/10 (kalikan pembilang dan penyebut dengan 2)"
      },
      {
        id: 8,
        question: "Hasil dari 3/7 + 2/7 = ...",
        options: ["5/14", "5/7", "1/7", "6/7"],
        correctAnswer: 1,
        explanation: "3/7 + 2/7 = (3+2)/7 = 5/7 (penyebut sama, pembilang dijumlahkan)"
      },
      {
        id: 9,
        question: "Sifat perkalian: 5 × (3 + 4) = (5 × 3) + (5 × 4) disebut sifat...",
        options: ["Komutatif", "Asosiatif", "Distributif", "Identitas"],
        correctAnswer: 2,
        explanation: "Sifat distributif: a × (b + c) = (a × b) + (a × c)"
      },
      {
        id: 10,
        question: "Bentuk desimal dari 3/4 adalah...",
        options: ["0,25", "0,50", "0,75", "0,80"],
        correctAnswer: 2,
        explanation: "3/4 = 3 ÷ 4 = 0,75"
      }
    ]
  },
  {
    id: 2,
    title: "Aljabar",
    icon: "🔤",
    color: "from-purple-500 to-purple-700",
    cp: [
      "Pada Akhir fase B, Peserta didik dapat mengisi nilai yang belum diketahui dalam sebuah kalimat matematika yang berkaitan dengan penjumlahan dan pengurangan pada bilangan cacah sampai 100.",
      "Peserta didik dapat mengidentifikasi, meniru, dan mengembangkan pola gambar atau objek sederhana dan pola bilangan membesar dan mengecil yang melibatkan penjumlahan dan pengurangan pada bilangan cacah sampai 100."
    ],
    tp: [
      "Menemukan hubungan antara operasi perkalian dan pembagian (misalnya: 2 × 5 = 10, maka 10 ÷ 2 = 5 dan 10 ÷ 5 = 2)",
      "Menyelesaikan persamaan sederhana menggunakan operasi perkalian atau pembagian, menemukan pola hubungan yang melibatkan operasi perkalian dan pembagian",
      "Mengidentifikasi, menduplikasi, dan mengembangkan pola gambar atau obyek sederhana dan pola bilangan yang melibatkan operasi perkalian dan pembagian"
    ],
    atp: [
      "Persamaan sederhana menggunakan operasi perkalian atau pembagian",
      "Hubungan antara operasi perkalian dan pembagian",
      "Pola gambar atau obyek sederhana dan pola bilangan yang melibatkan operasi penjumlahan, pengurangan, dan perkalian (misalnya: 1, 2, 4, 8, …)"
    ],
    subTopics: [
      {
        title: "Hubungan Perkalian dan Pembagian",
        content: "Perkalian dan pembagian adalah operasi yang saling berkebalikan (invers).\n\nJika a × b = c, maka:\n• c ÷ a = b\n• c ÷ b = a\n\nContoh:\n• 3 × 4 = 12, maka 12 ÷ 3 = 4 dan 12 ÷ 4 = 3\n• 7 × 8 = 56, maka 56 ÷ 7 = 8 dan 56 ÷ 8 = 7",
        example: "6 × 9 = 54\n54 ÷ 6 = 9\n54 ÷ 9 = 6"
      },
      {
        title: "Persamaan Sederhana",
        content: "Persamaan adalah kalimat matematika yang memiliki tanda sama dengan (=).\n\nUntuk menyelesaikan persamaan, kita mencari nilai yang belum diketahui.\n\nContoh:\n• n × 5 = 30, maka n = 30 ÷ 5 = 6\n• 48 ÷ n = 8, maka n = 48 ÷ 8 = 6\n• n × 7 = 49, maka n = 49 ÷ 7 = 7",
        example: "n × 8 = 72\nn = 72 ÷ 8\nn = 9"
      },
      {
        title: "Pola Bilangan",
        content: "Pola bilangan adalah urutan bilangan yang mengikuti aturan tertentu.\n\nJenis pola bilangan:\n• Pola bertambah: 2, 4, 6, 8, 10, ... (bertambah 2)\n• Pola berkurang: 20, 17, 14, 11, 8, ... (berkurang 3)\n• Pola perkalian: 1, 2, 4, 8, 16, ... (dikalikan 2)\n• Pola kuadrat: 1, 4, 9, 16, 25, ... (1², 2², 3², 4², 5²)",
        example: "Pola: 3, 6, 12, 24, 48, ...\nAturan: setiap bilangan dikalikan 2\nBilangan berikutnya: 48 × 2 = 96"
      },
      {
        title: "Pola Gambar",
        content: "Pola gambar adalah urutan gambar yang berulang atau berubah mengikuti aturan tertentu.\n\nContoh pola berulang:\n🔴 🔵 🔴 🔵 🔴 🔵 ... (berulang merah, biru)\n\nContoh pola berkembang:\n⭐\n⭐ ⭐\n⭐ ⭐ ⭐\n⭐ ⭐ ⭐ ⭐\n(setiap langkah bertambah 1 bintang)",
        example: "Pola: △, △△, △△△, △△△△, ...\nAturan: setiap langkah bertambah 1 segitiga\nLangkah ke-5: △△△△△"
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Jika 7 × 8 = 56, maka 56 ÷ 7 = ...",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
        explanation: "56 ÷ 7 = 8, karena 7 × 8 = 56"
      },
      {
        id: 2,
        question: "Jika n × 6 = 42, maka n = ...",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        explanation: "n = 42 ÷ 6 = 7"
      },
      {
        id: 3,
        question: "Bilangan berikutnya dari pola 2, 4, 8, 16, ... adalah",
        options: ["20", "24", "32", "30"],
        correctAnswer: 2,
        explanation: "Pola dikalikan 2: 2, 4, 8, 16, 32"
      },
      {
        id: 4,
        question: "Jika 81 ÷ n = 9, maka n = ...",
        options: ["7", "8", "9", "10"],
        correctAnswer: 2,
        explanation: "n = 81 ÷ 9 = 9"
      },
      {
        id: 5,
        question: "Lanjutkan pola: 5, 10, 15, 20, ..., ...",
        options: ["25, 30", "24, 28", "22, 26", "30, 35"],
        correctAnswer: 0,
        explanation: "Pola bertambah 5: 5, 10, 15, 20, 25, 30"
      },
      {
        id: 6,
        question: "Jika 9 × n = 63, maka n = ...",
        options: ["6", "7", "8", "9"],
        correctAnswer: 1,
        explanation: "n = 63 ÷ 9 = 7"
      },
      {
        id: 7,
        question: "Pola bilangan 100, 90, 80, 70, ... memiliki aturan...",
        options: ["Bertambah 10", "Berkurang 10", "Dikalikan 10", "Dibagi 10"],
        correctAnswer: 1,
        explanation: "Setiap bilangan berkurang 10: 100 - 10 = 90, 90 - 10 = 80, dst."
      },
      {
        id: 8,
        question: "Hubungan yang benar adalah...",
        options: ["4 × 5 = 20, maka 20 ÷ 5 = 4", "4 × 5 = 20, maka 20 ÷ 4 = 6", "4 × 5 = 20, maka 20 ÷ 5 = 5", "4 × 5 = 20, maka 20 ÷ 4 = 4"],
        correctAnswer: 0,
        explanation: "4 × 5 = 20, maka 20 ÷ 5 = 4 (pembagian adalah kebalikan perkalian)"
      }
    ]
  },
  {
    id: 3,
    title: "Pengukuran",
    icon: "📏",
    color: "from-green-500 to-green-700",
    cp: [
      "Pada akhir fase B, Peserta didik dapat mengukur panjang dan berat benda menggunakan satuan baku.",
      "Mereka dapat menentukan hubungan antar-satuan baku panjang (cm, m).",
      "Mereka dapat mengukur dan mengestimasi luas dan volume menggunakan satuan tidak baku dan satuan baku berupa bilangan cacah."
    ],
    tp: [
      "Dapat mengukur panjang objek menggunakan satuan baku dengan lebih presisi (mm, cm) dan menentukan hubungan antar satuan baku panjang (mm, cm, m)",
      "Menentukan hubungan antar satuan baku",
      "Menyelesaikan masalah yang berkaitan dengan keliling, luas dan volume"
    ],
    atp: [
      "Pengukuran panjang menggunakan satuan baku (mm, cm)",
      "Hubungan antar satuan baku",
      "Keliling, luas dan volume"
    ],
    subTopics: [
      {
        title: "Pengukuran Panjang",
        content: "Satuan baku panjang:\n• 1 meter (m) = 100 centimeter (cm)\n• 1 centimeter (cm) = 10 milimeter (mm)\n• 1 meter (m) = 1.000 milimeter (mm)\n\nAlat ukur panjang:\n• Penggaris (untuk mengukur cm dan mm)\n• Meteran (untuk mengukur m)\n• Pita ukur",
        example: "Panjang pensil = 15 cm = 150 mm\nPanjang meja = 1,2 m = 120 cm = 1.200 mm"
      },
      {
        title: "Hubungan Antar Satuan",
        content: "Satuan Panjang:\n• 1 km = 1.000 m\n• 1 m = 100 cm\n• 1 cm = 10 mm\n\nSatuan Berat:\n• 1 kg = 1.000 gram\n• 1 ons = 100 gram\n\nKonversi satuan:\n• Dari satuan besar ke kecil: kalikan\n• Dari satuan kecil ke besar: bagi",
        example: "3 m = 3 × 100 = 300 cm\n500 cm = 500 ÷ 100 = 5 m\n2,5 kg = 2.500 gram"
      },
      {
        title: "Keliling Bangun Datar",
        content: "Keliling adalah jumlah seluruh sisi bangun datar.\n\n• Persegi: K = 4 × sisi\n• Persegi panjang: K = 2 × (panjang + lebar)\n• Segitiga: K = sisi a + sisi b + sisi c",
        example: "Persegi dengan sisi 5 cm:\nK = 4 × 5 = 20 cm\n\nPersegi panjang p=8 cm, l=5 cm:\nK = 2 × (8 + 5) = 2 × 13 = 26 cm"
      },
      {
        title: "Luas Bangun Datar",
        content: "Luas adalah ukuran daerah yang ditempati oleh bangun datar.\n\n• Persegi: L = sisi × sisi = s²\n• Persegi panjang: L = panjang × lebar\n\nSatuan luas: cm², m²",
        example: "Persegi dengan sisi 6 cm:\nL = 6 × 6 = 36 cm²\n\nPersegi panjang p=10 cm, l=4 cm:\nL = 10 × 4 = 40 cm²"
      },
      {
        title: "Volume Bangun Ruang",
        content: "Volume adalah ukuran ruang yang ditempati oleh bangun ruang.\n\n• Balok: V = panjang × lebar × tinggi\n• Kubus: V = sisi × sisi × sisi = s³\n\nSatuan volume: cm³, m³",
        example: "Balok p=5 cm, l=3 cm, t=4 cm:\nV = 5 × 3 × 4 = 60 cm³\n\nKubus dengan sisi 3 cm:\nV = 3 × 3 × 3 = 27 cm³"
      }
    ],
    quiz: [
      {
        id: 1,
        question: "3 meter sama dengan ... centimeter",
        options: ["30 cm", "300 cm", "3.000 cm", "0,3 cm"],
        correctAnswer: 1,
        explanation: "1 m = 100 cm, maka 3 m = 3 × 100 = 300 cm"
      },
      {
        id: 2,
        question: "500 mm sama dengan ... cm",
        options: ["5 cm", "50 cm", "5.000 cm", "0,5 cm"],
        correctAnswer: 1,
        explanation: "1 cm = 10 mm, maka 500 mm = 500 ÷ 10 = 50 cm"
      },
      {
        id: 3,
        question: "Keliling persegi dengan sisi 7 cm adalah...",
        options: ["14 cm", "21 cm", "28 cm", "49 cm"],
        correctAnswer: 2,
        explanation: "K = 4 × sisi = 4 × 7 = 28 cm"
      },
      {
        id: 4,
        question: "Luas persegi panjang dengan panjang 12 cm dan lebar 5 cm adalah...",
        options: ["17 cm²", "34 cm²", "60 cm²", "120 cm²"],
        correctAnswer: 2,
        explanation: "L = panjang × lebar = 12 × 5 = 60 cm²"
      },
      {
        id: 5,
        question: "Volume kubus dengan sisi 4 cm adalah...",
        options: ["12 cm³", "16 cm³", "48 cm³", "64 cm³"],
        correctAnswer: 3,
        explanation: "V = s × s × s = 4 × 4 × 4 = 64 cm³"
      },
      {
        id: 6,
        question: "Keliling persegi panjang dengan panjang 10 cm dan lebar 6 cm adalah...",
        options: ["16 cm", "26 cm", "32 cm", "60 cm"],
        correctAnswer: 2,
        explanation: "K = 2 × (p + l) = 2 × (10 + 6) = 2 × 16 = 32 cm"
      },
      {
        id: 7,
        question: "2,5 kg sama dengan ... gram",
        options: ["25 gram", "250 gram", "2.500 gram", "25.000 gram"],
        correctAnswer: 2,
        explanation: "1 kg = 1.000 gram, maka 2,5 kg = 2,5 × 1.000 = 2.500 gram"
      },
      {
        id: 8,
        question: "Volume balok dengan p=6 cm, l=4 cm, t=3 cm adalah...",
        options: ["13 cm³", "36 cm³", "60 cm³", "72 cm³"],
        correctAnswer: 3,
        explanation: "V = p × l × t = 6 × 4 × 3 = 72 cm³"
      }
    ]
  },
  {
    id: 4,
    title: "Geometri",
    icon: "📐",
    color: "from-orange-500 to-orange-700",
    cp: [
      "Pada akhir Fase B, Peserta didik dapat mendeskripsikan ciri berbagai bentuk bangun datar (segiempat, segitiga, segi banyak).",
      "Mereka dapat menyusun (komposisi) dan mengurai (dekomposisi) berbagai bangun datar dengan lebih dari satu cara jika memungkinkan."
    ],
    tp: [
      "Mengidentifikasi ciri-ciri berbagai bentuk bangun datar (sisi dan sudut) dari segi banyak dan lingkaran serta gabungannya",
      "Mengukur sudut",
      "Menentukan keliling dan luas bangun datar",
      "Mengidentifikasi ciri-ciri bangun ruang (sisi, rusuk, dan sudut) dari prisma dan tabung"
    ],
    atp: [
      "Ciri-ciri segi banyak dan lingkaran",
      "Mengukur sudut",
      "Keliling bentuk bangun datar (segiempat, segitiga, segi banyak, dan lingkaran) serta mengukur sudut",
      "Luas (konsep luas dan luas persegi panjang dan persegi). Ciri-ciri berbagai bentuk bangun ruang (sisi, rusuk, dan sudut) dari prisma dan tabung"
    ],
    subTopics: [
      {
        title: "Bangun Datar - Segi Banyak",
        content: "Segi banyak (poligon) adalah bangun datar tertutup yang dibatasi oleh garis lurus.\n\nJenis-jenis segi banyak:\n• Segitiga: 3 sisi, 3 sudut\n• Segi empat: 4 sisi, 4 sudut (persegi, persegi panjang, jajargenjang, belah ketupat, layang-layang, trapesium)\n• Segi lima: 5 sisi, 5 sudut\n• Segi enam: 6 sisi, 6 sudut\n• Segi delapan: 8 sisi, 8 sudut",
        example: "Persegi: 4 sisi sama panjang, 4 sudut siku-siku (90°)\nPersegi panjang: 2 pasang sisi sama panjang, 4 sudut siku-suku"
      },
      {
        title: "Lingkaran",
        content: "Lingkaran adalah bangun datar yang dibatasi oleh satu garis lengkung.\n\nIstilah dalam lingkaran:\n• Jari-jari (r): jarak dari pusat ke tepi\n• Diameter (d): 2 × jari-jari\n• Keliling (K): π × d = 2 × π × r\n• Luas (L): π × r²\n\nNilai π (phi) ≈ 3,14 atau 22/7",
        example: "Lingkaran dengan r = 7 cm:\nK = 2 × 22/7 × 7 = 44 cm\nL = 22/7 × 7 × 7 = 154 cm²"
      },
      {
        title: "Mengukur Sudut",
        content: "Sudut adalah daerah yang dibentuk oleh dua garis yang bertemu di satu titik.\n\nJenis-jenis sudut:\n• Sudut lancip: 0° < sudut < 90°\n• Sudut siku-siku: sudut = 90°\n• Sudut tumpul: 90° < sudut < 180°\n• Sudut lurus: sudut = 180°\n\nAlat untuk mengukur sudut: busur derajat",
        example: "Sudut pada persegi = 90° (siku-siku)\nSudut pada segitiga sama sisi = 60° (lancip)\nJumlah sudut segitiga = 180°"
      },
      {
        title: "Bangun Ruang - Prisma dan Tabung",
        content: "Bangun ruang adalah bangun yang memiliki volume.\n\nPrisma:\n• Memiliki 2 sisi alas dan tutup yang sama bentuk dan ukurannya\n• Sisi tegak berbentuk persegi panjang\n• Contoh: prisma segitiga, prisma segiempat (balok)\n\nTabung:\n• Memiliki 2 sisi alas dan tutup berbentuk lingkaran\n• Memiliki 1 sisi lengkung (selimut tabung)\n• Tidak memiliki titik sudut",
        example: "Balok: 6 sisi, 12 rusuk, 8 titik sudut\nTabung: 3 sisi (2 lingkaran + 1 selimut), 2 rusuk lengkung, 0 titik sudut"
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Berapa jumlah sisi pada segienam?",
        options: ["4", "5", "6", "8"],
        correctAnswer: 2,
        explanation: "Segienam memiliki 6 sisi dan 6 sudut."
      },
      {
        id: 2,
        question: "Sudut yang besarnya 90° disebut sudut...",
        options: ["Lancip", "Siku-siku", "Tumpul", "Lurus"],
        correctAnswer: 1,
        explanation: "Sudut siku-siku = 90°, sudut lancip < 90°, sudut tumpul > 90° dan < 180°"
      },
      {
        id: 3,
        question: "Keliling lingkaran dengan diameter 14 cm adalah... (π = 22/7)",
        options: ["22 cm", "44 cm", "88 cm", "154 cm"],
        correctAnswer: 1,
        explanation: "K = π × d = 22/7 × 14 = 44 cm"
      },
      {
        id: 4,
        question: "Luas persegi dengan sisi 9 cm adalah...",
        options: ["18 cm²", "36 cm²", "81 cm²", "72 cm²"],
        correctAnswer: 2,
        explanation: "L = s × s = 9 × 9 = 81 cm²"
      },
      {
        id: 5,
        question: "Berapa banyak sisi pada balok?",
        options: ["4", "6", "8", "12"],
        correctAnswer: 1,
        explanation: "Balok memiliki 6 sisi, 12 rusuk, dan 8 titik sudut."
      },
      {
        id: 6,
        question: "Luas lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)",
        options: ["44 cm²", "88 cm²", "154 cm²", "308 cm²"],
        correctAnswer: 2,
        explanation: "L = π × r² = 22/7 × 7 × 7 = 22/7 × 49 = 154 cm²"
      },
      {
        id: 7,
        question: "Tabung memiliki ... titik sudut",
        options: ["0", "2", "4", "8"],
        correctAnswer: 0,
        explanation: "Tabung tidak memiliki titik sudut karena tidak memiliki sudut yang dibentuk oleh rusuk-rusuk yang bertemu."
      },
      {
        id: 8,
        question: "Jumlah sudut dalam segitiga adalah...",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
        explanation: "Jumlah ketiga sudut dalam segitiga selalu 180°."
      }
    ]
  },
  {
    id: 5,
    title: "Analisa Data dan Peluang",
    icon: "📊",
    color: "from-red-500 to-red-700",
    cp: [
      "Pada akhir kelas fase B, Peserta didik dapat mengurutkan, membandingkan, menyajikan, menganalisis dan menginterpretasi data dalam bentuk tabel, diagram gambar, piktogram, dan diagram batang (skala satu satuan)."
    ],
    tp: [
      "Mengurutkan, membandingkan, menyajikan, dan menganalisis data banyaknya benda menggunakan turus dan data hasil pengukuran benda dalam bentuk tabel, diagram gambar, piktogram, diagram batang, dan diagram garis",
      "Menganalisis data banyaknya benda menggunakan turus dan data hasil pengukuran benda dalam bentuk tabel, diagram gambar, piktogram, diagram batang, dan diagram garis yang melibatkan operasi penjumlahan, pengurangan, perkalian, dan pembagian bilangan",
      "Menentukan kejadian yang mungkin terjadi di antara beberapa kejadian"
    ],
    atp: [
      "Penyajian dan analisis data banyaknya benda menggunakan turus dan hasil pengukuran benda dalam bentuk gambar, piktogram, diagram batang, tabel frekuensi, dan diagram garis yang melibatkan operasi penjumlahan, pengurangan, perkalian, dan pembagian bilangan",
      "Kejadian yang lebih mungkin di antara beberapa kejadian"
    ],
    subTopics: [
      {
        title: "Penyajian Data - Turus (Tally)",
        content: "Turus (tally) adalah cara mencatat data dengan menggunakan garis tegak.\n\nSetiap 5 data, garis kelima dibuat miring menyilangi 4 garis tegak.\n\nContoh data nilai ulangan:\n• Nilai 70: |||| (4 anak)\n• Nilai 80: |||| ||| (8 anak)\n• Nilai 90: |||| (4 anak)\n• Nilai 100: ||| (3 anak)",
        example: "|||| = 4\n|||| = 5 (4 tegak + 1 miring)\n|||| || = 7"
      },
      {
        title: "Tabel Frekuensi",
        content: "Tabel frekuensi adalah tabel yang menyajikan data beserta banyaknya (frekuensi) masing-masing data.\n\nContoh tabel frekuensi buah kesukaan:\n| Buah     | Frekuensi |\n|----------|----------|\n| Apel     | 8        |\n| Jeruk    | 12       |\n| Mangga   | 6        |\n| Pisang   | 10       |\n| Total    | 36       |",
        example: "Dari tabel di atas:\n• Buah paling disukai: Jeruk (12 anak)\n• Buah paling tidak disukai: Mangga (6 anak)\n• Selisih: 12 - 6 = 6 anak"
      },
      {
        title: "Diagram Batang",
        content: "Diagram batang adalah penyajian data menggunakan batang/balok tegak atau mendatar.\n\nTinggi batang menunjukkan frekuensi/banyaknya data.\n\nCara membaca diagram batang:\n1. Perhatikan judul diagram\n2. Lihat label sumbu horizontal (kategori)\n3. Lihat label sumbu vertikal (nilai/frekuensi)\n4. Bandingkan tinggi setiap batang",
        example: "Diagram batang nilai siswa:\nNilai 60: ████ (4 siswa)\nNilai 70: ██████ (6 siswa)\nNilai 80: ████████ (8 siswa)\nNilai 90: █████ (5 siswa)\n\nSiswa yang mendapat nilai 80 paling banyak."
      },
      {
        title: "Piktogram dan Diagram Gambar",
        content: "Piktogram menggunakan gambar/simbol untuk mewakili data.\n\nSetiap gambar mewakili sejumlah tertentu data.\n\nContoh: 🍎 = 5 apel\n• Kelas A: 🍎🍎🍎 = 15 apel\n• Kelas B: 🍎🍎🍎🍎 = 20 apel\n• Kelas C: 🍎🍎 = 10 apel",
        example: "Jika 1 gambar orang = 10 siswa:\n• Kelas 1: 👤👤👤 = 30 siswa\n• Kelas 2: 👤👤👤👤 = 40 siswa\n• Total: 30 + 40 = 70 siswa"
      },
      {
        title: "Peluang dan Kejadian",
        content: "Peluang adalah kemungkinan terjadinya suatu kejadian.\n\nIstilah peluang:\n• Pasti terjadi: peluang = 1 (100%)\n• Mungkin terjadi: peluang antara 0 dan 1\n• Tidak mungkin terjadi: peluang = 0 (0%)\n• Lebih mungkin: kejadian yang memiliki peluang lebih besar\n\nContoh:\n• Matahari terbit dari timur: PASTI\n• Kucing bisa terbang: TIDAK MUNGKIN\n• Hari ini hujan: MUNGKIN",
        example: "Dalam kantong berisi 3 kelereng merah dan 7 kelereng biru:\n• Mengambil kelereng biru LEBIH MUNGKIN (karena jumlahnya lebih banyak)\n• Peluang mengambil merah = 3/10\n• Peluang mengambil biru = 7/10"
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Dalam turus, simbol ||||  mewakili berapa data?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        explanation: "|||| (4 garis tegak) mewakili 4 data. Jika ada garis miring menyilang (||||), itu mewakili 5 data."
      },
      {
        id: 2,
        question: "Jika diagram batang menunjukkan: Senin=5, Selasa=8, Rabu=3, Kamis=7, Jumat=10. Hari apa yang memiliki nilai tertinggi?",
        options: ["Senin", "Selasa", "Kamis", "Jumat"],
        correctAnswer: 3,
        explanation: "Jumat memiliki nilai tertinggi yaitu 10."
      },
      {
        id: 3,
        question: "Dalam piktogram, jika 1 🍊 = 6 jeruk, maka 🍊🍊🍊🍊 = ... jeruk",
        options: ["12", "18", "24", "30"],
        correctAnswer: 2,
        explanation: "4 gambar × 6 = 24 jeruk"
      },
      {
        id: 4,
        question: "Dari data: apel=15, jeruk=20, mangga=10, anggur=5. Total semua data adalah...",
        options: ["40", "45", "50", "55"],
        correctAnswer: 2,
        explanation: "Total = 15 + 20 + 10 + 5 = 50"
      },
      {
        id: 5,
        question: "Dalam kantong ada 2 bola merah dan 8 bola hijau. Lebih mungkin terambil bola berwarna...",
        options: ["Merah", "Hijau", "Sama mungkin", "Tidak mungkin"],
        correctAnswer: 1,
        explanation: "Bola hijau lebih banyak (8) dari bola merah (2), sehingga lebih mungkin terambil bola hijau."
      },
      {
        id: 6,
        question: "Selisih data tertinggi dan terendah dari: 12, 8, 15, 6, 10 adalah...",
        options: ["6", "8", "9", "10"],
        correctAnswer: 2,
        explanation: "Data tertinggi = 15, terendah = 6. Selisih = 15 - 6 = 9"
      },
      {
        id: 7,
        question: "Kejadian yang PASTI terjadi adalah...",
        options: ["Besok hujan", "Matahari terbit dari barat", "Air mendidih pada suhu 100°C", "Kucing bisa berbicara"],
        correctAnswer: 2,
        explanation: "Air mendidih pada suhu 100°C adalah kejadian yang pasti terjadi (dalam kondisi normal)."
      },
      {
        id: 8,
        question: "Rata-rata dari data 4, 6, 8, 10, 12 adalah...",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
        explanation: "Rata-rata = (4+6+8+10+12) ÷ 5 = 40 ÷ 5 = 8"
      }
    ]
  }
];
