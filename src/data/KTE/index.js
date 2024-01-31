const KTEData = [
  {
    question: "Olti sathli kompyuterlarning nolinchi sathi qanday nomlanadi?",
    answer1: "raqamli mantiqiy sath",
    answer2: "mikroarxitektura sathi",
    answer3: "buyruqlar to‘plami arxitekturasi sathi",
    answer4: "operatsion tizim sathi",
  },
  {
    question: "Olti sathli kompyuterlarning birinchi sathi qanday nomlanadi?",
    answer1: "mikroarxitektura sathi",
    answer2: "raqamli mantiqiy sath",
    answer3: "buyruqlar to‘plami arxitekturasi sathi",
    answer4: "operatsion tizim sathi",
  },
  {
    question: "Olti sathli kompyuterlarning uchinchi sathi qanday nomlanadi?",
    answer1: "operatsion tizim sathi",
    answer2: "amaliy tillar dasturchilari sathi",
    answer3: "buyruqlar to‘plami arxitekturasi sathi",
    answer4: "mikroarxitektura sathi",
  },
  {
    question: "Olti sathli kompyuterlarning to‘rtinchi sathi qanday nomlanadi?",
    answer1: "assembler sathi",
    answer2: "mikroarxitektura sathi",
    answer3: "buyruqlar to‘plami arxitekturasi sathi",
    answer4: "operatsion tizim sathi",
  },
  {
    question: "Olti sathli kompyuterlarning beshinchi sathi qanday nomlanadi?",
    answer1: "amaliy tillar dasturchilari sathi",
    answer2: "mikroarxitektura sathi",
    answer3: "buyruqlar to‘plami arxitekturasi sathi",
    answer4: "assembler sathi",
  },
  {
    question: "Raqamli mantiqiy sathning obyektlari qanday nomlanadi?",
    answer1: "ventillar",
    answer2: "triggerlar",
    answer3: "registrlar",
    answer4: "komparatorlar",
  },
  {
    question: "Bir bitli xotira elementi deganda nima tushuniladi?",
    answer1: "trigger",
    answer2: "registr",
    answer3: "AND-elementi",
    answer4: "NOT-elementi",
  },
  {
    question:
      "Guruhga birlashtirilgan triggerlar yordamida nima hosil qilinadi?",
    answer1: "registr",
    answer2: "AND-elementi",
    answer3: "komparator",
    answer4: "invertor",
  },
  {
    question: "Inkorlash elementining kirishi nechta bo‘lishi mumkin?",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "ko‘p",
  },
  {
    question:
      "NOT, NOT-AND, NOT-OR kabi elementlarning kirish signallari, ulardagi tranzistorlarning qaysi oyoqchasiga ulangan?",
    answer1: "baza",
    answer2: "kollektor",
    answer3: "emmiter",
    answer4: "ventil",
  },
  {
    question:
      "NOT, NOT-AND, NOT-OR kabi elementlarning chiqish signallari, ulardagi tranzistorlarning qaysi oyoqchasidan olinadi?",
    answer1: "kollektor",
    answer2: "baza",
    answer3: "emmiter",
    answer4: "ventil",
  },
  {
    question:
      "Mantiqiy funktsiya o‘zgaruvchilarining soni n-ga teng bo‘lsa, ushbu funktsiyaning xaqiqat jadvali necha qatordan iborat bo‘lishi",
    answer1: "2^n",
    answer2: "2^n+1",
    answer3: "2^n-1",
    answer4: "2^n",
  },
  {
    question:
      "Uchta o‘zgaruvchili mantiqiy funksiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?",
    answer1: "8",
    answer2: "4",
    answer3: "3",
    answer4: "16",
  },
  {
    question:
      "To‘rtta o‘zgaruvchili mantiqiy funksiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?",
    answer1: "16",
    answer2: "4",
    answer3: "8",
    answer4: "12",
  },
  {
    question:
      "Beshta o‘zgaruvchili mantiqiy funtsiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?",
    answer1: "32",
    answer2: "5",
    answer3: "16",
    answer4: "10",
  },
  {
    question:
      "64 Kbaytli asosiy xotira adresining maksimal qiymati nechaga teng?",
    answer1: "FFFF",
    answer2: "FFFFF",
    answer3: "FFFFFF",
    answer4: "FFFF FFFF",
  },
  {
    question:
      "1 Mbaytli asosiy xotira adresining maksimal qiymati nechaga teng?",
    answer1: "FFFFF",
    answer2: "FFFF",
    answer3: "FFFFFF",
    answer4: "FFFF FFFF",
  },
  {
    question:
      "4 Gbaytli asosiy xotira adresining maksimal qiymati nechaga teng?",
    answer1: "FFFF FFFF",
    answer2: "FFFFF",
    answer3: "FFFFFF",
    answer4: "FFFF",
  },
  {
    question:
      "Pentium oilasiga mansub protsessorlar asosida qurilgan kompyuterlarning asosiy xotirasida baytlar qanday tartibda joylashtiriladi? ",
    answer1: "teskari tartibda",
    answer2: "to‘g‘ri tartibda",
    answer3: "chapdan-o‘nga",
    answer4: "pastdan-yuqoriga",
  },
  {
    question:
      "SPARC oilasiga mansub protsessorlar asosida qurilgan kompyuterlarning asosiy xotirasida baytlar qanday tartibda joylashtiriladi?",
    answer1: "to‘g‘ri tartibda",
    answer2: "teskari tartibda",
    answer3: "o‘ngdan-chapga",
    answer4: "pastdan-yuqoriga",
  },
  {
    question:
      "Asosiy xotirasida, baytlar to‘g‘ri tartibda joylashtirilgan kompyuter protsessori ko‘rsating?",
    answer1: "UltraSPARC III ",
    answer2: "Pentium 4",
    answer3: "8051",
    answer4: "SIMM",
  },
  {
    question:
      "Asosiy xotirasida, baytlar teskari tartibda joylashtirilgan kompyuter protsessori ko‘rsating?",
    answer1: "Pentium 4",
    answer2: "UltraSPARC III",
    answer3: "8051",
    answer4: "SIMM",
  },
  {
    question:
      "Xozirgi shaxsiy kompyuterlarda xotiraga murojaat qilishning necha xil rejimi mavjud?",
    answer1: "2",
    answer2: "3",
    answer3: "1",
    answer4: "4",
  },
  {
    question:
      "Asosiy xotiraga murojaat qilishning real rejimida bitta segmentning xajmi nechaga teng?",
    answer1: "64 Kbayt",
    answer2: "4 Kbayt",
    answer3: "1 Mbayt",
    answer4: "32 Kbayt",
  },
  {
    question:
      "Asosiy otiraga murojaat qilishning himoyalangan rejimida bitta sahifaning xajmi nechaga teng?",
    answer1: "4 Kbayt",
    answer2: "64 Kbayt",
    answer3: "1 Mbayt",
    answer4: "32 Kbayt",
  },
  {
    question:
      "Intel protsessorlari oilasining, Core duo protsessoridan avvalgi protsessorlari ishlatilgan kompyuterlarda birinchi sath kesh xotirasining maksimal xajmi nechaga teng bo‘lishi mumkin?",
    answer1: "64 Kbayt",
    answer2: "16 Kbayt",
    answer3: "32 Kbayt",
    answer4: "1 Mbayt",
  },
  {
    question:
      "Intel protsessorlari oilasining, Core duo protsessoridan avvalgi protsessorlari ishlatilgan kompyuterlarda ikkinchi sath kesh xotirasining maksimal xajmi nechaga teng bo‘lishi mumkin?",
    answer1: "1 Mbayt",
    answer2: "64 Kbayt",
    answer3: "128 Kbayt",
    answer4: "2 Mbayt",
  },
  {
    question:
      "Intel protsessorlari oilasining, Core duo protsessoridan avvalgi protsessorlari ishlatilgan kompyuterlarda uchinchi sath kesh xotirasining maksimal xajmi nechaga teng bo‘lishi mumkin?",
    answer1: "bir necha megabaytga",
    answer2: "64 Kbayt",
    answer3: "512 Kbayt",
    answer4: "1 Mbayt",
  },
  {
    question:
      "Ulanish nuqtalari bir tomonda joylashgan xotira modullari qanday nomlanadi?",
    answer1: "SIMM",
    answer2: "DIMM",
    answer3: "SISD",
    answer4: "RISC",
  },
  {
    question:
      "Ulanish nuqtalari ikki tomonda joylashgan xotira modullari qanday nomlanadi?",
    answer1: "DIMM",
    answer2: "SIMM",
    answer3: "CISC",
    answer4: "RISC",
  },
  {
    question:
      "D-triggerlar asosida qurilgan tezkor xotira qurilmasini ko‘rsating?",
    answer1: "statik tezkor xotira qurilmasi (SRAM)",
    answer2: "dinamik tezkor xotira qurilmasi (DRAM)",
    answer3: "FPM dinamik xotira qurilmasi",
    answer4: "EDO dinamik xotira qurilmasi",
  },
  {
    question:
      "Axborotni o‘chirish va qayta yozish mumkin bo‘lgan programmalanadigan doimiy xotira qurilmasini ko‘rsating?",
    answer1: "EPROM",
    answer2: "PROM",
    answer3: "ROM",
    answer4: "DRAM",
  },
  {
    question: "Ko‘chirib yozish buyruqlarini ko‘rsating?",
    answer1: "MOV, PUSH",
    answer2: "ADD, SUB",
    answer3: "INC, DEC",
    answer4: "CMP, RST",
  },
  {
    question: "Arifmetik buyruqlarni ko‘rsating?",
    answer1: "ADD, SUB ",
    answer2: "MOV, PUSH",
    answer3: "INC, DEC",
    answer4: "CMP, RST",
  },
  {
    question:
      "Ikkita operandalar ustida amallar bajarish buyruqlarini ko‘rsating?",
    answer1: "ADD, SUB",
    answer2: "MOVE, LOAD",
    answer3: "INC, DEC",
    answer4: "IN, OUT",
  },
  {
    question: "Bitta operanda ustida amallar bajarish buyruqlarini ko‘rsating?",
    answer1: "INC, DEC",
    answer2: "MUL, ADC",
    answer3: "ADD, SUB",
    answer4: "AND, OR",
  },
  {
    question: "Boshqarishni uzatish buyruqlarini ko‘rsating?",
    answer1: "JMP, CALL",
    answer2: "ADD, SUB",
    answer3: "MOV, PUSH",
    answer4: "INC, DEC",
  },
  {
    question: "Ma’lumotlarni kiritish-chiqarish buyruqlarini ko‘rsating?",
    answer1: "IN, OUT ",
    answer2: "MOVE, LOAD",
    answer3: "INC, DEC",
    answer4: "ADD, SUB",
  },
  {
    question:
      "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning eng yuqori qismida joylashgan xotirani ko‘rsating?",
    answer1: "ichki registrlar",
    answer2: "kesh xotira",
    answer3: "asosiy xotira",
    answer4: "magnitli disk",
  },
  {
    question:
      "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning ikkinchi qatorida joylashgan xotirani ko‘rsating?",
    answer1: "kesh xotira ",
    answer2: "ichki registrlar",
    answer3: "asosiy xotira",
    answer4: "magnitli disk",
  },
  {
    question:
      "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning uchinchi qatorida joylashgan xotirani ko‘rsating?",
    answer1: "asosiy xotira",
    answer2: "ichki registrlar",
    answer3: "kesh xotira",
    answer4: "magnitli disk",
  },
  {
    question:
      "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning to‘rtinchi qatorida joylashgan xotirani ko‘rsating?",
    answer1: "magnitli disk ",
    answer2: "ichki registrlar",
    answer3: "asosiy xotira",
    answer4: "kesh xotira",
  },
  {
    question:
      "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning beshinchi qatorida joylashgan xotirani ko‘rsating?",
    answer1: "optik disk",
    answer2: "ichki registrlar",
    answer3: "asosiy xotira",
    answer4: "magnitli disk",
  },
  {
    question:
      "Magnitli disk yo‘lkasini tashkil yetuvchi sektorlari qanday uzunlikka ega?",
    answer1: "512 bayt",
    answer2: "256 bayt",
    answer3: "1 Kbayt",
    answer4: "2 Kbayt",
  },
  {
    question:
      "Kichik hisoblash tizimlarining interfeyslariga ega disklar deganda qanday disklar tushuniladi?",
    answer1: "SCSI disklar",
    answer2: "IDE disklar",
    answer3: "EIDE disklar",
    answer4: "RAID disklar",
  },
  {
    question:
      "Magnitli disklar asosida qurilgan, ma’lumotlarni tezkor kiritish-chiqarish qurilmasi qanday nomlanadi?",
    answer1: "RAID disklar",
    answer2: "IDE disklar",
    answer3: "EIDE disklar",
    answer4: "SCSI disklar",
  },
  {
    question:
      "4 Gbaytli asosiy xotiraga ega bo‘lgan kompyuterlarda, adres shinasi necha razryadga teng bo‘ladi?",
    answer1: "32",
    answer2: "20",
    answer3: "16",
    answer4: "36",
  },
  {
    question:
      "8 Gbaytli asosiy xotiraga ega bo‘lgan kompyuterlarda, adres shinasi necha razryadga teng bo‘ladi?",
    answer1: "33",
    answer2: "16",
    answer3: "36",
    answer4: "20",
  },
  {
    question: "Sanoatdagi standart arxitekturali shinani ko‘rsating?",
    answer1: "ISA",
    answer2: "EISA",
    answer3: "PCI",
    answer4: "AGP",
  },
  {
    question:
      "Kompyuterning tashqi tashkil etuvchi qurilmalarni o‘zaro birgalikda ishlashini ta’minlovchi shinani ko‘rsating?",
    answer1: "PCI",
    answer2: "ISA",
    answer3: "EISA",
    answer4: "AGP",
  },
  {
    question: "Tez ishlaydigan grafik port shinasini ko‘rsating?",
    answer1: "AGP ",
    answer2: "ISA",
    answer3: "EISA",
    answer4: "PCI",
  },
  {
    question: "Ma’lumotlarni ketma-ket uzatuvchi universal shinani ko‘rsating?",
    answer1: "USB",
    answer2: "ISA",
    answer3: "EISA",
    answer4: "PCI",
  },
  {
    question: "Tarmoq interfeysi qurilmasini ko‘rsating?",
    answer1: "NID",
    answer2: "DSLAM",
    answer3: "ADSL",
    answer4: "USB",
  },
  {
    question: "ASCII kodi qanday uzunliklarga ega bo‘lishi mumkin?",
    answer1: "7 yoki 8 bit",
    answer2: "11 yoki 12 bit",
    answer3: "4 yoki 5 bit",
    answer4: "16 bit",
  },
  {
    question:
      "IS 10646 xalqaro standarti deb e’lon qilingan UNICODE-kodining uzunligi nechaga teng?",
    answer1: "16 bit",
    answer2: "12 bit",
    answer3: "8 bit",
    answer4: "10 bit",
  },
  {
    question: "IS 10646 xalqaro standarti deb e’lon qilingan kodni ko‘rsating?",
    answer1: "UNICODE",
    answer2: "ASCII",
    answer3: "DCOI",
    answer4: "COI",
  },
  {
    question:
      "Protsessor asosiy xotiradan ma’lumotlarni o‘qish uchun, shina orqali qaysi boshqarish signallari bilan xotiraga murojaat qiladi?",
    answer1: "MREQ, RD",
    answer2: "MREQ, WD",
    answer3: "CLK, RD",
    answer4: "MSDN, RD",
  },
  {
    question:
      "Protsessor asosiy xotiradan ma’lumotlarni o‘qish uchun, shina orqali xotiraga murojaat qilish signalini ko‘rsating? ",
    answer1: "MREQ",
    answer2: "SSDN",
    answer3: "WAIT",
    answer4: "MSDN",
  },
  {
    question: "Monitorda rang hosil qilishda qanday ranglardan foydalaniladi?",
    answer1: "qizil, ko‘k, yashil",
    answer2: "qora, oq, ko‘k",
    answer3: "sariq, qizil, oq",
    answer4: "yashil, qora, sariq",
  },
  {
    question:
      "PCI Express shinasi, kompyuter tarkibiga kirgan qurilmalarni bog‘lashda, qanday rolni bajaradi? ",
    answer1: "universal kommutator",
    answer2: "shinalararo ko‘prik",
    answer3: "ma’lumotlarni parallel uzatish",
    answer4: "ma’lumotlarni ketma-ket uzatish",
  },
  {
    question:
      "Protsessor tarkibidagi muhim registrlardan biri bo‘lgan buyruqlar sanagichi registrini ko‘rsating.",
    answer1: "PC",
    answer2: "AX",
    answer3: "SP",
    answer4: "BP",
  },
  {
    question:
      "Protsessorning IP yoki EIP registri deganda qanday registr tushuniladi?",
    answer1: "buyruqlarni ko‘rsatuvchi registr",
    answer2: "bayroqlar registri",
    answer3: "segment registri",
    answer4: "birinchi operandaning registri",
  },
  {
    question:
      "Asosiy xotiraning dasturning buyruqlari yoziladigan qismi nima deb ataladi?",
    answer1: "kodlar yoziladigan segment",
    answer2: "ma’lumotlar yoziladigan segment",
    answer3: "ma’lumotlar segmenti",
    answer4: "xotiraning umumiy maqsadlar uchun foydalaniladigan qismi",
  },
  {
    question: "AX yoki EAX registri deganda nima tushuniladi?",
    answer1: "akkumulyator",
    answer2: "buyruqlar sanagichi registri",
    answer3: "buyruqlar ko‘rsatgichi ",
    answer4: "bayroqlar registri",
  },
  {
    question: "SF yoki EFLAGS registri deganda qaysi registr tushuniladi?",
    answer1: "bayroqlar registri",
    answer2: "buyruqlar sanagichi registri",
    answer3: "buyruqlar ko‘rsatgichi  ",
    answer4: "akkumulyator",
  },
  {
    question: "CS registri deganda qaysi registr tushuniladi?",
    answer1: "kodlar yoziladigan segment registri",
    answer2: "ma’lumotlar yoziladigan segment registri",
    answer3: "stek registri",
    answer4: "qo‘shimcha segment registri",
  },
  {
    question: "Umumiy maqsadlar uchun mo‘ljallangan registrlarni ko‘rsating.",
    answer1: "AX, EAX",
    answer2: "SI, ESI",
    answer3: "DI, EDI",
    answer4: "SP, ESP",
  },
  {
    question: "Pentium 4 protsessori tarkibida nechta tranzistor bor?",
    answer1: "42 000 000",
    answer2: "29 000 000",
    answer3: "9 500",
    answer4: "550 000",
  },
  {
    question:
      "Pentium 4 protsessorida «qatorining kengligi» qanday qiymatga ega? ",
    answer1: "0,18 mkm",
    answer2: "0,13 mkm",
    answer3: "0,20 mkm",
    answer4: "0,22 mkm",
  },
  {
    question: "UltraSPARC III protsessori tarkibida nechta tranzistor bor?",
    answer1: "29 000 000",
    answer2: "42 000 000",
    answer3: "9 500",
    answer4: "550 000",
  },
  {
    question: "Pentium 4 protsessori mikroarxitekturasi qanday nomlanadi?",
    answer1: "NetBurst",
    answer2: "P6",
    answer3: "P9",
    answer4: "Version 9 SPARC",
  },
  {
    question:
      "Pentium 4 protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?",
    answer1: "478",
    answer2: "1368",
    answer3: "578",
    answer4: "600",
  },
  {
    question:
      "UltraSPARC III protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?",
    answer1: "1368",
    answer2: "478",
    answer3: "578",
    answer4: "600",
  },
  {
    question:
      "Pentium 4 protsessori mikrosxemasida axborot signallari uchun nechta ulanish nuqtalari ajratilgan?",
    answer1: "198",
    answer2: "180",
    answer3: "85",
    answer4: "300",
  },
  {
    question:
      "Besh sathli konveyerning birinchi bosqichida (C1) nima amalga oshiriladi?",
    answer1: "bajarilishi kerak bo‘lgan buyruqni tanlash",
    answer2: "buyruqni dekodlash",
    answer3: "operandalarni tanlash",
    answer4: "buyruqni bajarish",
  },
  {
    question:
      "Besh sathli konveyerning ikkinchi bosqichida (C2) nima amalga oshiriladi?",
    answer1: "buyruqni dekodlash",
    answer2: "buyruqni tanlash",
    answer3: "operandalarni tanlash",
    answer4: "buyruqni bajarish",
  },
  {
    question:
      "Besh sathli konveyerning uchinchi bosqichida (C3) nima amalga oshiriladi?",
    answer1: "operandalarni tanlash",
    answer2: "buyruqni dekodlash",
    answer3: "natijalarni xotiraga yoki registrlarga yozish",
    answer4: "buyruqni bajarish",
  },
  {
    question:
      "Besh sathli konveyerning to‘rtinchi bosqichida (C4) nima amalga oshiriladi?",
    answer1: "buyruqni bajarish",
    answer2: "buyruqni dekodlash",
    answer3: "operandalarni tanlash",
    answer4: "natijalarni xotiraga yoki registrlarga yozish",
  },
  {
    question:
      "Besh sathli konveyerning beshinchi bosqichida (C5) nima amalga oshiriladi?",
    answer1: "natijalarni xotiraga yoki registrlarga yozish",
    answer2: "buyruqni dekodlash",
    answer3: "operandalarni tanlash",
    answer4: "buyruqni bajarish",
  },
  {
    question:
      "Bajariladigan buyruqni tanlash besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
    answer1: "S1",
    answer2: "S2",
    answer3: "S3",
    answer4: "S4",
  },
  {
    question:
      "Bajariladigan buyruqni dekodlash besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
    answer1: "S2",
    answer2: "S1",
    answer3: "S3",
    answer4: "S4",
  },
  {
    question:
      "Operandalarni tanlash besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
    answer1: "S3",
    answer2: "S2",
    answer3: "S1",
    answer4: "S4",
  },
  {
    question:
      "Buyruqni bajarish besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
    answer1: "S4",
    answer2: "S2",
    answer3: "S3",
    answer4: "S5",
  },
  {
    question:
      "Natijani xotiraga yoki registrlarga yozish besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
    answer1: "S5",
    answer2: "S2",
    answer3: "S3",
    answer4: "S4",
  },
  {
    question: "To‘liq buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?",
    answer1: "CISC",
    answer2: "RISC",
    answer3: "P6",
    answer4: "MIPS",
  },
  {
    question:
      "Qisqartirilgan buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?",
    answer1: "RISC",
    answer2: "CISC",
    answer3: "P6",
    answer4: "MIPS",
  },
  {
    question:
      "Protsessor siklining birinchi bosqichida nima amalga oshiriladi?",
    answer1: "RS yordamida bajarilishi kerak bolgan buyruq tanlab olinadi ",
    answer2: "RS-ning qiymati orttiriladi",
    answer3: "buyruq dekodlanadi",
    answer4:
      "buyruqni bajarish uchun kerak boladigan malumotlar xotiradan yoki registrlardan tanlab olinadi",
  },
  {
    question:
      "Protsessor siklining ikkinchi bosqichida nima amalga oshiriladi?",
    answer1: "RS-ning qiymati orttiriladi",
    answer2: "RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi",
    answer3: "buyruq dekodlanadi",
    answer4: "buyruq bajariladi",
  },
  {
    question:
      "Protsessor siklining uchinchi bosqichida nima amalga oshiriladi?",
    answer1: "buyruq dekodlanadi",
    answer2: "RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi",
    answer3: "buyruq bajariladi",
    answer4: "RS-ning qiymati orttiriladi",
  },
  {
    question:
      "Protsessor siklining tortinchi bosqichida nima amalga oshiriladi?",
    answer1:
      "buyruqni bajarish uchun kerak boladigan malumotlar xotiradan yoki registrlardan tanlab olinadi",
    answer2: "RS-ning qiymati orttiriladi",
    answer3: "RS yordamida bajarilishi kerak bolgan buyruq tanlab olinadi",
    answer4: "natijalarni xotiraga yoki registrlarga yozish",
  },
  {
    question:
      "Protsessor siklining beshinchi bosqichida nima amalga oshiriladi?",
    answer1: "buyruq bajariladi",
    answer2: "natijalarni xotiraga yoki registrlarga yozish",
    answer3: "RS-ning qiymati ortiriladi",
    answer4: "RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi",
  },
  {
    question:
      "Protsessor siklining oltinchi bosqichida nima amalga oshiriladi?",
    answer1: "natijalarni xotiraga yoki registrlarga yozish",
    answer2: "RS-ning qiymati orttiriladi",
    answer3: "keyingi buyruqni bajarish tsikliga o‘tis",
    answer4: "buyruq bajariladi",
  },
  {
    question:
      "Protsessor siklining yettinchi bosqichida nima amalga oshiriladi?",
    answer1: "keyingi buyruqni bajarish tsikliga o‘tish",
    answer2: "RS-ning qiymati orttiriladi",
    answer3: "buyruq bajariladi",
    answer4: "natijalarni xotiraga yoki registrlarga yozish",
  },
  {
    question: "Protsessor sikli nechta bosqichidan iborat?",
    answer1: "7",
    answer2: "6",
    answer3: "5",
    answer4: "4",
  },
  {
    question:
      "Protsessor siklining qaysi bosqichida buyruqni bajarish amalga oshiriladi?",
    answer1: "5",
    answer2: "6",
    answer3: "7",
    answer4: "4",
  },
  {
    question:
      "Protsessor siklining qaysi bosqichida buyruqni tanlab olish amalga oshiriladi?",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
  },
  {
    question:
      "Protsessor siklining qaysi bosqichida buyruqni dekodlash amalga oshiriladi?",
    answer1: "3",
    answer2: "2",
    answer3: "5",
    answer4: "4",
  },
  {
    question:
      "Protsessor siklining qaysi bosqichida natijalarini xotiraga yoki registrlarga yozish amalga oshiriladi?",
    answer1: "6",
    answer2: "7",
    answer3: "3",
    answer4: "4",
  },
  {
    question: "Core i7 protsessori tarkibida nechtagacha tranzistor bor? ",
    answer1: "1,16 mld. gacha",
    answer2: "12 mln. gacha",
    answer3: "1024 gacha",
    answer4: "100 mln. gacha",
  },
  {
   question: "Antiviruslar dasturlarning qaysi turiga kiradi?",
   answer1: "Tizimli dasturlar",
   answer2: "Dasturlar tizimiga",
   answer3: "Amaliy dasturlar",
   answer4: "Virtual dasturlar",
 },
];

export default KTEData;
