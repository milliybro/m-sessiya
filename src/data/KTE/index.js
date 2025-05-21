const input = `
? O‘rnatilgan tizim (Embedded System) nima?
- O‘yin kompyuterlari
+ Maxsus vazifalarni bajaruvchi mikroprotsessor asosidagi tizim
- Ish stoli kompyuterlari
- Umumiy maqsadli dasturlash tizimi

? O‘rnatilgan tizimlarning asosiy xususiyati nima?
- Yuqori grafik imkoniyatlarga ega bo‘lishi
+ Maxsus vazifalarni bajarishga mo‘ljallanganligi
- Doimiy Internetga ulanib ishlashi
- Faqat dasturchilar tomonidan boshqarilishi

? O‘rnatilgan tizimlar qaysi sohalarda keng qo‘llaniladi?
- Faqat kompyuter o‘yinlarida
+ Telekommunikatsiya, avtomobil sanoati, tibbiyot, sanoat avtomatlashtirish
- Faqat Internet xizmatlarida
- Faqat matn muharrirlarida

? O‘rnatilgan tizimlar qanday platformalarda ishlaydi?
- Faqat Windows operatsion tizimida
+ Maxsus real vaqt tizimlarida (RTOS) yoki apparat platformasida
- Faqat Linux asosida
- Faqat mobil operatsion tizimlarda

? Qaysi qurilma o‘rnatilgan tizimga misol bo‘la oladi?
- Ish stoli kompyuteri
+ Mikrokontroller asosidagi robot
- Ofis printer
- O‘yin konsoli

? O‘rnatilgan tizimlarning muhim parametrlari qaysilar?
- Katta o‘lchamli operativ xotira va tezkor protsessor
+ Kam quvvat sarfi, ishonchlilik, real vaqt rejimida ishlash
- Faqat kuchli grafik ishlov berish
- Internetga ulanib ishlash

? O‘rnatilgan tizimlar asosan qanday operatsion tizimlardan foydalanadi?
- Windows va MacOS
+ Real vaqt operatsion tizimlari (RTOS) va maxsus tizimlar
- Faqat Android
- MS-DOS

? Real vaqt tizimlari qanday xususiyatga ega?
- Vazifalarni istalgan vaqtda bajarishi mumkin
+ Muayyan vaqt oralig‘ida muhim jarayonlarni bajarishi shart
- Faqat sun’iy intellekt tizimlarida ishlaydi
- Faqat katta xotira talab qiladi

? Qaysi qurilma real vaqt tizimi bo‘lishi mumkin?
- Ish stoli kompyuteri
+ Tibbiyot uchun yurak monitori
- O‘yin noutbuki
- Veb-brauzer

? O‘rnatilgan tizimlarning asosiy komponentlari qaysilar?
- Faqat dasturiy ta’minot
- Faqat apparat qurilmalari
+ Protsessor, xotira, kirish-chiqish interfeyslari, dasturiy ta’minot
- Printer va skaner

? Real vaqt operatsion tizimlari qanday ishlaydi?
+ Muayyan vaqt chegarasida muhim jarayonlarni bajaradi
- Faqat ofis dasturlarini ishga tushiradi
- Tasodifiy vaqtlarda vazifalarni bajaradi
- Faqat Linux asosida ishlaydi

?O‘rnatilgan tizimlarning quvvat sarfi qanday bo‘lishi kerak?
+Minimal quvvat sarfi talab qilinadi
-Juda ko‘p energiya talab qilad
-Faqat quyosh energiyasidan foydalanadi
-Quvvat sarfi muhim emas

?O‘rnatilgan tizimlar qanday xotira turlaridan foydalanadi?
+Faqat qattiq diskdan
-ROM, RAM, Flash xotira
-Faqat USB fleshka
-Faqat operativ xotira

?O‘rnatilgan tizimlar uchun eng muhim omil nima?
-Ko‘plab dasturlarni bir vaqtning o‘zida ishga tushirish
+Xavfsizlik, ishonchlilik va kam quvvat sarfi
-Internetga doimiy ulanib turish
-O‘yinga moslashganligi

?O‘rnatilgan tizimlarda ishlatiladigan protsessorlar qanday bo‘ladi?
-Asosan yuqori tezlikda ishlovchi protsessorlar
+Maxsus vazifalarga mo‘ljallangan, energiya tejamkor protsessorlar
-Faqat Intel protsessorlari
-Faqat 64-bitli protsessorlar

?O‘rnatilgan tizimlar uchun qaysi dasturlash tili keng qo‘llaniladi?
-HTML
+C/C++
-PHP
-JavaScript

?O‘rnatilgan tizimlarning ishlash tezligi qanday belgilanadi?
-Faqat protsessor chastotasi bilan
+Yozilgan kod sifati va apparat resurslariga bog‘liq
-Internet tezligi bilan
-Faqat operativ xotira hajmi bilan

?O‘rnatilgan tizimlar uchun qanday operatsion tizim keng tarqalgan?
-Windows XP
+FreeRTOS, VxWorks, QNX
-MacOS
-Ubuntu

?O‘rnatilgan tizimlar qayerda qo‘llaniladi?
-Smartfon va planshetlarda
+Tibbiyot uskunalarida, avtomobillarda, sanoat robotlarida
-Faqat mobil ilovalarda
-Faqat superkompyuterlarda

?O‘rnatilgan tizimlarning asosiy maqsadi nima?
-Ko‘p vazifali umumiy hisoblash tizimi yaratish
+Maxsus vazifalarni samarali bajarish
-Faqat grafik interfeys yaratish
-Faqat ma’lumotlarni saqlash

?O‘rnatilgan tizimlarga qo‘yiladigan asosiy talablar qaysilar?
-Yuqori grafik imkoniyatlarga ega bo‘lishi
+Kam quvvat sarfi, ishonchlilik, real vaqt rejimida ishlash
-Faqat katta xotira hajmiga ega bo‘lishi
-Doimiy Internetga ulanib ishlashi

?Boshqariluvchi obyekt datchiklari qanday vazifani bajaradi?
-Elektr signallarni kuchaytiradi
+Tashqi fizikaviy kattaliklarni o‘lchab, elektr signaliga aylantiradi
-Faqat dasturiy ta’minot bilan ishlaydi
-Faqat analog signallarni uzatadi

?Qaysi qurilma analog-raqam (ADC) o‘zgartirgich vazifasini bajaradi?
-Sensor ekran
+Mikrokontroller ichidagi ADC moduli
-USB fleshka
-Printer

?Raqam-analog (DAC) o‘zgartirgichning vazifasi nima?
-Analog signalni raqamli signalga aylantirish
+Raqamli signalni analog signalga aylantirish
-Faqat kodni bajarish
-Elektr energiyasini uzatish

?O‘rnatilgan tizimlarda signallarni uzatuvchi interfeys qanday ishlaydi?
+Signalni raqamli formatga o‘zgartiradi va uzatadi
-Signalni faqat kuchaytiradi
-Faqat raqamli signallarni qabul qiladi
-Signalni faqat xotirada saqlaydi

?Analog signallar qanday ma’lumot turi hisoblanadi?
+Davomli (uzluksiz)
-Diskret (raqamli)
-Matn shaklida


?Raqamli signallar qanday xususiyatga ega?
+Diskret (uzlukli) qiymatlarga ega bo‘ladi
-Davomli o‘zgaruvchan qiymatlarga ega bo‘ladi
-Faqat kuchaytiruvchi qurilmalar orqali uzatiladi
-O‘z-o‘zidan qayta ishlanadi

?O‘rnatilgan tizimlarda ishlatiladigan eng keng tarqalgan interfeys turi qaysi?
+RS-232, I2C, SPI, UART
-Bluetooth, Wi-Fi
-Faqat HDMI
-Faqat USB

?Boshqariluvchi obyekt datchiklaridan qaysi biri haroratni o‘lchaydi?
-LDR (yorug‘lik datchigi)
+DHT11 (harorat va namlik datchigi)
-MQ-2 (gaz datchigi)
-HC-SR04 (ultratovushli datchik)

?I2C interfeysi qanday ishlaydi?
-Parallel ravishda ma’lumot uzatadi
+Seriyali ikki simli protokol asosida ishlaydi
-Faqat analog signal uzatadi
-Faqat elektr quvvati uzatadi

?Analog signalni raqamli signalga aylantirishda qanday parametr muhim?
+Konvertatsiya tezligi
-Ekran rangi
-Dastur versiyasi
-Xotira hajmi

?SPI interfeysining asosiy xususiyati nima?
+Yuqori tezlikda seriyali ma’lumot uzatish
-Faqat simsiz ulanish orqali ishlash
-Parallel ma’lumot uzatish
-Faqat audio signal uzatish

?O‘rnatilgan tizimlarda qaysi interfeys real vaqt rejimida ishlash uchun samarali?
-USB
+SPI
-HDMI
-Ethernet

?UART interfeysi qanday ishlaydi?
+Asinxron seriyali aloqa orqali
-Faqat simsiz aloqa uchun ishlatiladi
-Faqat raqamli signallarni qabul qiladi
-Elektr energiyasini uzatadi

?Boshqariluvchi obyekt datchiklari qanday signallarni ishlab chiqarishi mumkin?
-Faqat analog
+Analog va raqamli
-Faqat raqamli
-Faqat chastotaviy

?O‘rnatilgan tizimlarda qaysi datchik harakatni aniqlash uchun ishlatiladi?
+MPU6050 (gyroskop va akselerometr)
-LM35 (harorat datchigi)
-MQ-7 (gaz datchigi)
-DS18B20 (harorat datchigi)

?ADC qurilmalari qanday ishlaydi?
+Analog signalni raqamli ko‘rinishga o‘tkazadi
-Raqamli signalni kuchaytiradi
-Analog signalni saqlaydi
-Signalni filtrlash uchun ishlatiladi

?Raqam-analog o‘zgartirgich (DAC) qanday signallarni hosil qiladi?
-Faqat raqamli
+Analog
-Matnli
-Faqat impulsli

?Boshqariluvchi obyekt datchiklarining asosiy vazifasi nima?
+Tashqi fizik jarayonlarni o‘lchash va ularga javob qaytarish
-Signalni shifrlash
-Signalni faqat mustaqil saqlash
-Faqat tasvir hosil qilish

?O‘rnatilgan tizimlarda signallarni uzatuvchi interfeyslarning ahamiyati nimada?
+Ma’lumotlarni ishonchli uzatish va qabul qilish
-Faqat elektr quvvati uzatish
-Faqat audio signallar bilan ishlash
-Operatsion tizimlarni yangilash

?O‘rnatilgan tizim qurilmalarini boshqarish obyekt bilan qanday vositalar orqali ulanadi?
+Datchiklar va aktuatorlar orqali
-Faqat Wi-Fi orqali
-Faqat Bluetooth orqali
-Faqat kabel orqali

САРДОР ХОЛИКОВ, [20.05.2025 0:05]
?O‘rnatilgan tizimlarda datchiklar qanday rol o‘ynaydi?
+Fizikaviy kattaliklarni o‘lchab, signal shaklida uzatadi
-Faqat ma’lumot saqlaydi
-Dastur yozish uchun ishlatiladi
-Faqat kuchlanishni oshirish uchun ishlatiladi

?Mikrokontrollerning asosiy tarkibiy qismlaridan biri qaysi?
-Ish stoli kompyuteri
+Markaziy protsessor (CPU), xotira, kirish-chiqish portlari
-Faqat operativ xotira
-O‘yinga moslashtirilgan grafik protsessor

?O‘rnatilgan tizim protsessorlarining asosiy turlari qaysilar?
+RISC va CISC protsessorlari
-Faqat x86 protsessorlari
-Faqat grafik protsessorlar
-Faqat ARM protsessorlar

?Mikrokontroller qanday qurilma?
+Protsessor, xotira va kirish-chiqish interfeyslarini o‘z ichiga olgan mustaqil tizim
-Faqat ma’lumot saqlash uchun ishlatiladi
-Faqat grafik ishlov berish uchun ishlatiladi
-Internetga ulanish uchun ishlatiladi

?Mikrokontrollerning xotira turlari qanday?
+ROM, RAM va EEPROM 
-Faqat qattiq disk
-Faqat flesh xotira
-Faqat operativ xotira

?O‘rnatilgan tizim protsessorlari ko‘pincha qanday arxitekturaga ega bo‘ladi?
+RISC (Reduced Instruction Set Computing)
-CISC (Complex Instruction Set Computing)
-Faqat x86 arxitekturasiga ega bo‘ladi
-Faqat FPGA asosida qurilgan bo‘ladi

?Mikrokontrollerlarning eng mashhur oilalaridan biri qaysi?
+AVR, PIC, ARM
-Intel Core i7
-AMD Ryzen
-Nvidia Tegra

?Mikrokontroller qanday dasturlanadi?
+Assembly, C, C++ yordamida
-Faqat HTML va CSS orqali
-Faqat JavaScript orqali
-Faqat Windows muhitida

?Mikrokontrollerning asosiy xususiyati nima?
+Kam quvvat sarflaydi va maxsus vazifalarni bajaradi
-Ko‘p dasturlarni bir vaqtning o‘zida ishga tushiradi
-Faqat katta o‘lchamli operativ xotiraga ega
-Faqat grafik ishlov berish uchun ishlatiladi

?Mikrokontroller ichidagi ALU (Arithmetic Logic Unit) qanday vazifa bajaradi?
+Arifmetik va mantiqiy amallarni bajaradi
-Ma’lumotlarni doimiy saqlaydi
-Grafiklarni qayta ishlaydi
-Faqat signal uzatadi

?O‘rnatilgan tizim protsessorlari qanday interfeyslar bilan bog‘lanadi?
+UART, I2C, SPI, USB
-Faqat HDMI
-Faqat Ethernet
-Faqat Wi-Fi

?Mikrokontrollerning soat chastotasi nimani belgilaydi?
+Protsessor qancha tez ishlashini
-Qurilmaning fizik o‘lchamini
-Qancha elektr quvvati talab qilinishini
-Operativ xotira hajmini

?Mikrokontrollerlar qanday turdagi operatsion tizimlardan foydalanadi?
+RTOS (Real-Time Operating System) yoki yalang‘och apparat tizimi
-Faqat Windows OS
-Faqat Linux OS
-Faqat Android OS

?Qaysi protsessor turi o‘rnatilgan tizimlarda eng ko‘p qo‘llaniladi?
+ARM
-Intel Xeon
-AMD Threadripper
-Nvidia RTX

?Mikrokontrollerlarning asosiy xususiyati nima?
+Dasturiy ta’minot va apparat vositalarini birgalikda boshqarish
-Faqat grafik interfeys ishlatish
-Faqat yuqori quvvat sarflash
-Faqat ma’lumot saqlash

?Mikrokontrollerda kirish-chiqish pinlari nima uchun kerak?
+Tashqi qurilmalar bilan aloqa o‘rnatish uchun
-Operativ xotira hajmini oshirish uchun
-Protsessor tezligini o‘zgartirish uchun
-Faqat displey boshqarish uchun

?Mikrokontrollerdagi taymer va sanagichlarning vazifasi nima?
+Vaqtni hisoblash va jarayonlarni sinxronlashtirish
-Operativ xotirani to‘ldirish
-Faqat grafikni qayta ishlash
-Faqat dastur yozish uchun

?Mikrokontrollerning asosiy energiya talabi qanday?
+Kam quvvat sarfi talab qilinadi
-Juda ko‘p energiya talab qiladi
-Faqat quyosh energiyasidan foydalanadi
-Faqat elektr tarmog‘iga ulangan holda ishlaydi

?Mikrokontroller qaysi sohalarda keng qo‘llaniladi?
+Sanoat avtomatlashtirish, avtomobil sanoati, tibbiyot, smart qurilmalar
-Faqat video o‘yinlar yaratishda
-Faqat Internet xizmatlarida
-Faqat superkompyuterlarda

?Uzulish (interruption) nima?
+Mikrokontroller ish jarayonini vaqtincha to‘xtatib, muhimroq vazifani bajarish mexanizmi
-Xotirani tozalash jarayoni
-Qurilmalarni doimiy ravishda qayta yuklash usuli
-Elektr energiyasini boshqarish tizimi

?Uzulishning asosiy turlari qanday?
+Tashqi va ichki uzilishlar
-Faqat tashqi uzilishlar
-Faqat ichki uzilishlar
-Parallel va ketma-ket uzilishlar

?Uzulishlarga ishlov beruvchi maxsus dastur nima deb ataladi?
+ISR (Interrupt Service Routine)
-BIOS
-RAM boshqaruvchi
-Multitasking protsessor

?ISR nima vazifani bajaradi?
+Uzulish sodir bo‘lganda, tegishli kodni bajaradi
-Uzulishlarni butunlay o‘chirib qo‘yadi
-Qurilmalarni uzluksiz ishlashini ta’minlaydi
-Faqat protsessor tezligini oshiradi

?Tashqi qurilmalar qanday qilib uzilish hosil qiladi?
+Maxsus signal yuborish orqali
-Dasturiy ta’minotni o‘zgartirish orqali
-Elektr quvvatini pasaytirish orqali
-Internet orqali ma’lumot olish orqali

?Ichki uzilishlar qanday hosil bo‘ladi?
+Taymer, xatolik yoki maxsus dasturiy signal orqali
-Tashqi qurilmalar signallari orqali
-Internet orqali uzatish orqali
-USB orqali ulanadigan qurilmalar orqali

?O‘rnatilgan tizimlarda uzilishlarning asosiy afzalligi nima?
+Protsessor vaqtini samarali ishlatish
-Faqatgina operativ xotira ishlashini yaxshilash
-Qurilmalarning faqat tez ishlashini ta’minlash
-Xotira sarfini ko‘paytirish

?Qaysi qurilmalar tashqi uzilish hosil qilishi mumkin?
+Klaviatura, sensorlar, tarmoq adapterlari
-Faqat protsessor
-Faqat xotira
-Faqat ichki dasturiy ta’minot

?Uzulishlar qanday usullar bilan ustuvorlikka ega bo‘ladi?
+Uzulish darajasi yoki apparat ustuvorligi orqali
-Faqat dasturiy ta’minot bilan
-Tarmoq tezligini o‘zgartirish orqali
-Operatsion tizimni qayta yuklash orqali

?Uzulishlar paytida protsessor qanday ma’lumotlarni saqlaydi?
+Joriy bajarilayotgan instruktsiya va registr qiymatlarini
-Faqat kod segmentini
-Faqat vaqt belgilarini
-Operativ xotira tarkibini butunlay o‘chiradi

?Ishlov berishning vaqt ko‘rsatkichlari nimani ta’minlaydi?
+Real vaqt rejimida uzilishlarga javob berish imkoniyatini
-Faqat xotira miqdorini oshirishni
-Internet tezligini oshirishni
-Qurilmaning haroratini pasaytirishni

?ISR dasturlarini yozishda eng muhim jihat nima?
+Tez bajarilishi va minimal kod ishlatilishi
-Katta va murakkab kod yozish
-Juda ko‘p funksiya chaqirish
-Doimiy ravishda global o‘zgaruvchilarni o‘zgartirish

?Mikrokontrollerlarda uzilishlarni boshqarish uchun nima ishlatiladi?
+Interrupt vektor jadvali
-BIOS
-Faqat dastur kodlari
-Operativ xotira

?Uzulish vektori nima?
+Uzulishlarga ishlov berish uchun mo‘ljallangan manzillar jadvali
-Qurilmalarning grafik interfeysi
-Faqat dasturiy ta’minotni ishga tushirish uchun
-Signal kuchaytiruvchi qurilma

?Qaysi komponent protsessorga uzilish signallarini yuboradi?
+IRQ (Interrupt Request) liniyalari
-RAM
-Qattiq disk
-LCD display

?Uzulishlarni qayta ishlash qanday bosqichlardan iborat?
+Uzulishni aniqlash, uni qayta ishlash va bajarilayotgan vazifaga qaytish
-Faqat yangi dastur yuklash
-Operatsion tizimni o‘zgartirish
-Xotira formatlash

?Real vaqt rejimida ishlov berish uchun qaysi mexanizm muhim?
+Uzilishlarni to‘g‘ri boshqarish va ustuvorlik belgilash
-Ko‘p operativ xotira ishlatish
-Faqat internetga ulanish
-Elektr quvvatini oshirish

? ISR bajarilishida qaysi amallar bajarilishi kerak emas?
+ Katta hajmli kod ishlatish va uzoq sikllarni bajarish
- Minimal kod yozish va tez bajarilish
- Registrlarni saqlash va tiklash
- Uzulish vektoridan to‘g‘ri foydalanish

? O‘rnatilgan tizimlarda eng ko‘p qaysi uzilish mexanizmlari ishlatiladi?
+ Vaqtli (timer) va tashqi qurilma uzilishlari
- Faqat grafik interfeys uzilishlari
- Faqat Internet orqali keladigan uzilishlar
- Faqat tasodifiy signallar

? Uzulishlarni to‘g‘ri boshqarish nima uchun muhim?
+ Tizimning barqaror va samarali ishlashini ta’minlash uchun
- Faqat elektr energiyasini tejash uchun
- Faqat xotira hajmini oshirish uchun
- Faqat foydalanuvchi interfeysini yaxshilash uchun

? Kiritish-chiqarish interfeysi nima?
+ Tashqi qurilmalar bilan o‘rnatilgan tizim o‘rtasida ma’lumot almashish vositasi
- Faqat o‘rnatilgan tizimning operativ xotirasi
- Dasturlarni saqlash uchun ichki xotira
- Faqat ekran tasvirini boshqarish tizimi

? Kiritish-chiqarish interfeysining turlari qaysilar?
+ Paralel va ketma-ket interfeyslar
- Faqat Wi-Fi interfeysi
- Faqat USB interfeysi
- Faqat qattiq disk bilan ishlovchi interfeys

? O‘rnatilgan tizimlarda ishlatiladigan eng keng tarqalgan ketma-ket interfeys qaysi?
+ UART (Universal Asynchronous Receiver-Transmitter)
- VGA
- HDMI
- PS/2

? Kiritish/chiqarish qurilmasining kontrolleri nima vazifani bajaradi?
+ Qurilma bilan protsessor o‘rtasidagi ma’lumot almashinuvini boshqaradi
- Faqat xotirani boshqaradi
- Elektr ta’minotini nazorat qiladi
- Operatsion tizimni yuklash bilan shug‘ullanadi

? O‘rnatilgan tizimlarda ishlatiladigan asosiy ketma-ket interfeyslar qaysilar?
+ UART, SPI, I2C
- Faqat HDMI
- Faqat PCIe
- Faqat DisplayPort

? Paralel interfeys qanday ishlaydi?
+ 0 uzatadi
- Faqat bitta bitni uzatadi
- Faqat simsiz aloqa uchun ishlatiladi
- Faqat audio signal uzatadi

? USB interfeysi qaysi turga kiradi?
+ Ketma-ket interfeys
- Paralel interfeys
- Analog interfeys
- Faqat simsiz interfeys

? SPI interfeysi qaysi ma’lumot almashish usuliga asoslangan?
+ Sinxron ketma-ket aloqa
- Asinxron ketma-ket aloqa
- Faqat simsiz aloqa
- Faqat tasvir uzatish

? Kiritish-chiqarish apparat interfeysi nima uchun kerak?
+ O‘rnatilgan tizim va tashqi qurilmalar o‘rtasidagi ma’lumot almashuvini ta’minlash uchun
- Faqat tizimni elektr ta’minoti bilan ta’minlash uchun
- Operativ xotirani oshirish uchun
- Faqat grafik tasvirlarni qayta ishlash uchun

? I2C interfeysi qanday xususiyatga ega?
+ Ikkita sim orqali ko‘p qurilmalar bilan aloqa o‘rnata oladi
- Faqat bitta qurilma bilan ishlaydi
- Faqat tezkor ma’lumot uzatish uchun mo‘ljallangan
- Faqat audio uzatish uchun ishlatiladi

? Tarmoq interfeysining asosiy vazifasi nima?
+ O‘rnatilgan tizimlarni lokal yoki global tarmoqlarga ulash
- Faqat qurilmani zaryadlash
- Faqat ichki xotira bilan ishlash
- Operatsion tizimni yangilash

? Ethernet interfeysi qanday ma’lumot uzatish usuliga asoslangan?
+ Simli aloqa
- Simsiz aloqa
- Faqat infraqizil aloqa
- Faqat ultratovush signallari

? O‘rnatilgan tizimlarda ishlatiladigan simsiz interfeyslar qaysilar?
+ Wi-Fi, Bluetooth, Zigbee
- Faqat HDMI
- Faqat USB
- Faqat DisplayPort

? Qaysi interfeys mobil aloqa vositalarida keng qo‘llaniladi?
+ Bluetooth
- VGA
- RS-232
- LPT

? CAN interfeysi qayerda keng qo‘llaniladi?
+ Avtomobil elektronikasi va sanoat avtomatlashtirishida
- Faqat ofis kompyuterlarida
- Faqat televizorlarda
- Faqat mobil telefonlarda

? GPIO nima uchun ishlatiladi?
+ Umumiy maqsadli kiritish/chiqarish signallarini boshqarish uchun
- Faqat ma’lumot saqlash uchun
- Faqat elektr ta’minoti uchun
- Faqat video signal uzatish uchun

? RS-232 interfeysi qaysi turga kiradi?
+ Ketma-ket interfeys
- Paralel interfeys
- Faqat simsiz interfeys
- Faqat audio interfeys

? Kiritish-chiqarish interfeyslarining muhim xususiyatlari qaysilar?
+ Ma’lumot uzatish tezligi, ulanish turi va ishonchliligi
- Faqat interfeys uzunligi
- Faqat elektr quvvat sarfi
- Faqat dasturiy ta’minot bilan mosligi

САРДОР ХОЛИКОВ, [20.05.2025 0:12]
? USB interfeysining asosiy afzalliklari qaysilar?
+ Yuqori tezlikda ma’lumot uzatish va universal ulanish
- Faqat quvvat manbai sifatida ishlatilishi
- Faqat grafik interfeys
- Faqat audio signal uzatish

? O‘rnatilgan tizimlar qaysi interfeyslar orqali internetga ulanadi?
+ Ethernet, Wi-Fi, LTE
- Faqat HDMI
- Faqat USB
- Faqat RS-232

? O‘rnatilgan tizimlar uchun operatsion tizimlarning asosiy vazifasi nima?
+ Dasturlarni boshqarish va tizim resurslarini samarali taqsimlash
- Faqat grafik interfeys taqdim etish
- Faqat internetga ulanishni ta’minlash
- Faqat apparat qurilmalarni boshqarish

? O‘rnatilgan tizimlar uchun operatsion tizimlarning muhim talablari qaysilar?
+ Resurslarni samarali boshqarish, real vaqt rejimida ishlash va ishonchlilik
- Faqat grafik interfeysning mavjudligi
- Faqat katta hajmdagi xotira talab qilish
- Faqat foydalanuvchilar uchun qulaylik yaratish

? O‘rnatilgan tizimlarda ishlatiladigan eng mashhur real vaqt operatsion tizimlari (RTOS) qaysilar?
+ FreeRTOS, VxWorks, QNX
- Windows XP, MacOS, Ubuntu
- Faqat Linux
- Faqat Android

САРДОР ХОЛИКОВ, [20.05.2025 0:19]
? Monolit operatsion tizim arxitekturasi qanday ishlaydi?
+ Barcha tizim xizmatlari yadro ichida bajariladi
- Har bir dastur alohida yadroni ishlatadi
- Har bir xizmat mustaqil modullar sifatida ishlaydi
- Faqat apparat bilan bog‘langan tizim

? Monolit yadrolarning asosiy afzalligi nima?
+ Yuqori ishlash tezligi va kam kechikish
- Juda kichik hajmda bo‘lishi
- Barcha xizmatlarning alohida ishlashi
- Faqat ma’lumot saqlashni ta’minlashi

? Monolit yadro operatsion tizimiga misol keltiring.
+ Linux
- Windows NT
- FreeRTOS
- MacOS

? Modulli arxitektura qanday ishlaydi?
+ Operatsion tizim komponentlari mustaqil modullar shaklida bo‘ladi
- Barcha kodlar yadroga joylashgan bo‘ladi
- Faqat mijoz-server modelidan foydalanadi
- Faqat grafik interfeysni ta’minlaydi

? Modulli arxitekturaning afzalligi nimada?
+ Tizimni oson sozlash va kengaytirish mumkin
- Har doim tez ishlaydi
- Faqat real vaqt tizimlari uchun ishlatiladi
- Faqat Linux yadrosi uchun mo‘ljallangan

? Modulli arxitekturaga misol keltiring.
+ Linux yadrosi
- DOS
- Windows 3.1
- FreeDOS

? Mikroyadro nima?
+ Minimal xizmatlarni ta’minlovchi yadro arxitekturasi
- Operatsion tizim yadrosining eng katta versiyasi
- Faqat grafik interfeysni ta’minlaydi
- Faqat Windows operatsion tizimlari uchun ishlatiladi

? Mikroyadro arxitekturasining asosiy afzalligi nima?
+ Tizimning ishonchliligi va xavfsizligini oshiradi
- Operatsion tizimni sekinlashtiradi
- Faqat katta hajmdagi xotira talab qiladi
- Faqat mijoz-server modelini qo‘llab-quvvatlaydi

? Mikroyadro operatsion tizimlariga misollar qaysilar?
+ QNX, Minix, L4
- MS-DOS, FreeDOS
- Windows 98, MacOS
- FreeBSD, Solaris

? Mijoz-server modeli qanday ishlaydi?
+ Xizmatlar alohida jarayonlar sifatida bajariladi va yadroga minimal yuk tushadi
- Barcha xizmatlar yadro ichida bajariladi
- Faqat bitta mijoz ishlashi mumkin
- Faqat foydalanuvchilar uchun mo‘ljallangan

? Qaysi operatsion tizim mijoz-server modeli asosida ishlaydi?
+ QNX
- MS-DOS
- Windows 95
- FreeDOS

? Monolit va mikroyadro tizimlari o‘rtasidagi asosiy farq nima?
+ Monolit tizimda barcha xizmatlar yadro ichida bajariladi, mikroyadroda esa xizmatlar alohida jarayonlar sifatida ishlaydi
- Monolit tizimda xizmatlar alohida ishlaydi, mikroyadroda esa barchasi bir joyda bajariladi
- Mikroyadroda faqat real vaqt rejimida ishlash mumkin
- Monolit tizim faqat Windows uchun ishlatiladi

? Qaysi operatsion tizim mikroyadro arxitekturasidan foydalanadi?
+ QNX
- DOS
- Windows XP
- Linux

? Mikroyadro tizimida xizmatlarning ishlashi qanday tashkil etiladi?
+ Har bir xizmat alohida jarayon sifatida ishlaydi
- Barcha xizmatlar yagona yadro ichida joylashadi
- Faqat bitta jarayon ishlashi mumkin
- Operatsion tizim grafik interfeyssiz ishlaydi

? Monolit yadroda xatoliklar qanday ta’sir qiladi?
+ Barcha tizimga ta’sir qiladi va tizim ishdan chiqishi mumkin
- Xatolik faqat bitta jarayonga ta’sir qiladi
- Hech qanday ta’sir qilmaydi
- Faqat tarmoq xizmatlariga ta’sir qiladi

? Mikroyadro tizimida xatoliklar qanday ta’sir qiladi?
+ Xatolik faqat muayyan xizmatga ta’sir qiladi
- Butun tizim ishdan chiqadi
- Barcha jarayonlar to‘xtaydi
- Faqat grafik interfeys o‘chadi

? Operatsion tizimlar uchun eng muhim omillar qaysilar?
+ Ishonchlilik, tezlik, xavfsizlik va samaradorlik
- Faqat grafik interfeys
- Faqat tarmoq xizmatlari
- Faqat xotira hajmi

? Arduino nima?
+ Ochiq kodli apparat va dasturiy ta’minot platformasi
- Faqat grafik interfeysga ega bo‘lgan dastur
- Ish stoli kompyuterlari uchun mo‘ljallangan operatsion tizim
- Faqat robototexnikada ishlatiladigan dastur

? Arduino loyihalarida ishlatiladigan asosiy dasturlash tili qaysi?
+ C/C++
- Python
- Java
- HTML

? Arduino platalarida ishlatiladigan asosiy mikrokontroller qaysi?
+ Atmel (Microchip) AVR va ARM Cortex-M
- Intel Core i7
- AMD Ryzen
- NVIDIA Tegra

? Arduino tizimi qanday dasturiy ta’minot yordamida dasturlanadi?
+ Arduino IDE
- Microsoft Word
- Adobe Photoshop
- Windows Explorer

? Arduino platalari qanday interfeys orqali kompyuterga ulanadi?
+ USB
- HDMI
- VGA
- Ethernet

САРДОР ХОЛИКОВ, [20.05.2025 0:19]
? Arduino Uno platasida qaysi mikrokontroller ishlatiladi?
+ ATmega328P
- STM32F103
- ESP8266
- PIC16F877A

? Arduino Mega 2560 platasining asosiy xususiyati nima?
+ Ko‘proq kirish-chiqarish pinlariga ega
- O‘ta kichik o‘lchamga ega
- Faqat Wi-Fi bilan ishlaydi
- Faqat quvvatni boshqarish uchun ishlatiladi

? Qaysi Arduino modeli Wi-Fi bilan integratsiyalashgan?
+ Arduino Uno WiFi
- Arduino Mega
- Arduino Nano
- Arduino Due

? Arduino Due platasining asosiy afzalligi nima?
+ ARM Cortex-M3 yadrosiga ega bo‘lishi
- Faqat LEDlarni boshqarish imkoniyati
- Juda kichik o‘lchamga ega bo‘lishi
- Faqat ma’lumot uzatish uchun ishlatilishi

? Arduino Nano qanday ishlaydi?
+ Arduino Uno'ning ixcham versiyasi bo‘lib, USB orqali dasturlanadi
- Faqat Wi-Fi moduli sifatida ishlaydi
- Faqat grafik interfeys uchun ishlatiladi
- Ko‘p yadroli protsessorni o‘z ichiga oladi

? Arduino LilyPad qayerda ishlatiladi?
+ Kiyim-kechakka tikiladigan elektron tizimlarda
- Sun’iy yo‘ldosh boshqaruvida
- Smartfon protsessorlarida
- Faqat televizor pultlarida

? Arduino platalari qanday asosiy apparat interfeyslariga ega?
+ A) Digital va analog pinlar, UART, SPI, I2C
- B) Faqat USB
- C) Faqat HDMI
- D) Faqat Bluetooth

САРДОР ХОЛИКОВ, [20.05.2025 0:30]
?O‘rnatilgan tizimlar uchun ARM arxitekturasining asosiy afzalligi nima?
+Kam quvvat sarfi va yuqori unumdorlik
-Juda qimmat bo‘lishi
-Faqat katta hajmdagi xotira talab qilishi
-Faqat katta hajmdagi grafik interfeyslarni qo‘llab-quvvatlashi

?ARM arxitekturasiga asoslangan qaysi mikrokontrollerlar Arduino platalarida ishlatiladi?
+STM32, SAM3X8E
-Intel Pentium
-AMD Ryzen
-NVIDIA GPU

?Arduino platalarida qanday dastur yozish mumkin?
+Mikrokontrollerga mos keladigan har qanday C/C++ kodi
-Faqat grafik interfeys dasturlari
-Faqat Linux operatsion tizimlarini boshqarish dasturlari
-Faqat JavaScript bilan ishlaydigan dasturlar

?Arduino IDE qanday tilda yozilgan?
+Java
-Python
-HTML
-Bash Script

?Arduino platalarida qaysi dasturlash modeli ishlatiladi?
+Loop va Setup funksiyalaridan iborat
-Faqat obyektga yo‘naltirilgan dasturlash
-Faqat server-klient modeli
-Faqat voqealarga asoslangan dasturlash

?Arduino orqali qanday sensorlarni ulash mumkin?
+Temperaturali, bosimli, namlik, harakat datchiklari
-Faqat video kameralar
-Faqat ovoz chiqaruvchi qurilmalar
-Faqat Wi-Fi modular

?O‘rnatilgan tizimlarda ARM protsessorlarining muhim xususiyati nima?
+Kam quvvat iste’mol qilishi va yuqori unumdorlik
-Faqat ma’lumotlarni saqlash uchun ishlatilishi
-Juda katta hajmda bo‘lishi
-Faqat grafik ishlov berish uchun ishlatilishi

?Arduino bilan ishlovchi ARM protsessorli mikrokontrollerlar qaysilar?
+STM32F103, SAM3X8E
-Intel Core i5, Core i7
-AMD Ryzen 9, Ryzen 7
-NVIDIA Tegra X1

?O‘rnatilgan tizimlarda tashxislash (diagnostika) nima?
+Tizimning ishlashini tekshirish va muammolarni aniqlash jarayoni
-Faqat tizimga dastur yozish jarayoni
-Faqat apparat vositalarni ishlab chiqarish jarayoni
-Qurilmalarning elektr quvvati iste’molini hisoblash jarayoni

?O‘rnatilgan tizimlarni tashxislashda qaysi vositalar ishlatiladi?
+Oscilloscope, Logic Analyzer, JTAG debuggers
-Faqat multimetr
-Faqat LED indikatorlar
-Faqat operatsion tizim

?O‘rnatilgan tizimlarda eng keng tarqalgan dasturiy tashxislash vositasi qaysi?
+GDB (GNU Debugger)
-Microsoft Word
-Photoshop
-VLC Media Player

?Logic Analyzer qaysi maqsadda ishlatiladi?
+Raqamli signallarni tahlil qilish uchun
-Elektr toki kuchini o‘lchash uchun
-Analog signallarni tahlil qilish uchun
-Faoliyat vaqtini o‘lchash uchun

?JTAG debuggers qanday ishlaydi?
+Mikrokontroller ichki registrlari va dasturlarini tahlil qilish uchun
-Faqat elektr toki o‘lchash uchun
-Faqat USB orqali ulanish uchun
-Faqat tarmoq signallarini tekshirish uchun

?O‘rnatilgan tizimlarda real vaqt tashxislash qanday amalga oshiriladi?
+Real vaqt operatsion tizimlari va maxsus diagnostika vositalari orqali
-Faqat LED indikatorlar yordamida
-Faqat elektr kuchlanishini o‘lchash orqali
-Barcha tizimni o‘chirib, qayta yoqish orqali

?Debugging nima?
+Dasturdagi xatolarni topish va ularni tuzatish jarayoni
-Faqat kod yozish jarayoni
-Qurilmalarni elektr tarmog‘iga ulash jarayoni
-Qurilmalarning fizik o‘lchamlarini hisoblash jarayoni

?Mikrokontrollerlarni tashxislashda Breakpoint nima uchun ishlatiladi?
+Dastur bajarilishini muayyan joyda to‘xtatish uchun
-Dastur kodining hajmini oshirish uchun
-Qurilmaning ishlash vaqtini pasaytirish uchun
-Signalni kuchaytirish uchun

?O‘rnatilgan tizimlarni tashxislashning eng muhim bosqichi qaysi?
+Muammoni aniqlash va analiz qilish
-Faqat kod yozish
-Faqat quvvatni o‘lchash
-Tizimni qayta o‘rnatish

?Tashxislash jarayonida real vaqt operatsion tizimlari qanday ahamiyatga ega?
+Ular tizimning ishlash vaqtini aniq o‘lchash imkonini beradi
-Faqat ma’lumotlarni saqlash uchun ishlatiladi
-Hech qanday ahamiyatga ega emas
-Faqat apparat sozlamalarini saqlash uchun ishlatiladi

?Mikrokontrollerlar uchun eng keng tarqalgan tashxislash interfeysi qaysi?
+JTAG va SWD
-HDMI
-VGA
-Ethernet

?Debugger nima?
+Dastur bajarilishini nazorat qiluvchi va xatolarni topishga yordam beruvchi vosita
-Qurilmalarni quvvat bilan ta’minlovchi qurilma
-Qurilmalarni faqat ishlab chiqarish jarayoni
-Tizimlarni qayta yoqish jarayoni

САРДОР ХОЛИКОВ, [20.05.2025 0:30]
?O‘rnatilgan tizimlarning tashxislash jarayonida “Watchdog Timer” qanday ishlaydi?
+Tizim ishdan chiqsa, uni avtomatik qayta yuklash orqali muammoni bartaraf etadi
-Elektr quvvatini nazorat qiladi
-Internet ulanishini tekshiradi
-Faqat dasturiy ta’minotni yuklaydi

?Mikrokontrollerlarni tashxislashda oscilloscope nima uchun ishlatiladi?
+Analog va raqamli signallarni ko‘rish va tahlil qilish uchun
-USB interfeysini tekshirish uchun
-Faqat tarmoq tezligini o‘lchash uchun
-Faqat dasturlarni yozish uchun

?Qaysi debugging usuli eng kam invaziv hisoblanadi?
+JTAG va SWD interfeyslari orqali debugging
-Print statement debugging
-LED blinking debugging
-Dasturiy emulyatsiya orqali debugging

?Mikrokontroller tizimlarida "Watchpoint" nima?
+Muayyan xotira maydoni o‘zgarishini kuzatish imkonini beruvchi debugging texnikasi
-Elektr quvvati nazorati tizimi
-Qurilma haroratini o‘lchovchi datchik
-Internet signalini kuchaytiruvchi moslama

?Tashxislash jarayonida “Stepping” nima?
+Dastur bajarilishini bosqichma-bosqich tekshirish jarayoni
-Signal kuchaytirish usuli
-Elektr manbaini nazorat qilish texnikasi
-Faqat kodni kompilyatsiya qilish

?Dasturiy debugging vositalari qaysilar?
+GDB, OpenOCD, Keil uVision
-Excel va Word
-Photoshop va AutoCAD
-Windows Media Player

?Logic Analyzer yordamida qanday signallar tahlil qilinadi?
+Raqamli signallar
-Faqat audio signallar
-Faqat video signallar
-Faqat elektr kuchlanishi

?Debugging jarayonida qaysi usul eng samarali hisoblanadi?
+JTAG debugging va real vaqt monitoring
-Faqat LED yordamida tekshirish
-Faqat qayta yuklash
-Qurilmani almashtirish

?O‘rnatilgan tizimlarning dasturiy ta’minoti qanday qismlardan iborat?
+Tizimli, amaliy va instrumental dasturiy ta’minot
-Faqat tizimli dasturiy ta’minot
-Faqat amaliy dasturiy ta’minot
-Faqat instrumental dasturiy ta’minot

?Tizimli dasturiy ta’minotning asosiy vazifasi nima?
+Tizimning apparat vositalari bilan ishlashini ta’minlash
-Faqat foydalanuvchi dasturlarini yaratish
-Faqat internetga ulanadigan ilovalarni boshqarish
-Faqat grafik interfeysni yaratish

?O‘rnatilgan tizimlar uchun eng mashhur tizimli dasturiy ta’minot turlaridan biri qaysi?
+Real vaqt operatsion tizimlari (RTOS)
-Photoshop
-Microsoft Office
-VLC Media Player

?Amaliy dasturiy ta’minotning asosiy vazifasi nima?
+Foydalanuvchi va tizim ehtiyojlariga mos xizmatlarni ta’minlash
-Faqat operatsion tizimni boshqarish
-Faqat apparat vositalarni boshqarish
-Faqat internetga ulanishni ta’minlash

?Instrumental dasturiy ta’minot nima uchun ishlatiladi?
+Dasturlarni ishlab chiqish va sinovdan o‘tkazish uchun
-Faqat ma’lumotlarni tahlil qilish uchun
-Faqat internetdan foydalanish uchun
-Faqat audio va video fayllarni qayta ishlash uchun

САРДОР ХОЛИКОВ, [20.05.2025 0:33]
? Qaysi dasturiy ta’minot turi operatsion tizim tarkibiga kiradi?
+ Drayverlar, yadro va tizimli kutubxonalar
- Faqat grafik dasturlar
- Faqat ofis dasturlari
- Faqat antivirus dasturlari

? Real vaqt operatsion tizimlari (RTOS) qanday tizimlar uchun zarur?
+ Vaqt kritik bo‘lgan o‘rnatilgan tizimlar uchun
- Oddiy ofis kompyuterlarida ishlash uchun
- Faqat multimedia tizimlari uchun
- Faqat mobil qurilmalar uchun

? Tizimli dasturiy ta’minotning tarkibiy qismlaridan biri bo‘lgan bootloaderning vazifasi nima?
+ Operatsion tizimni yuklash
- Faqat internetga ulanish
- Faqat xotirani boshqarish
- Faqat grafik interfeysni yaratish

? O‘rnatilgan tizimlarning dasturiy ta’minoti qanday til yordamida yoziladi?
+ C/C++, Python, Assembly
- Faqat HTML
- Faqat Microsoft Excel
- Faqat JavaScript

? Dasturiy ta’minotni yaratish bosqichlari qanday?
+ Talablarni aniqlash, loyihalash, dasturlash, sinov va integratsiya, foydalanish
- Faqat kod yozish
- Faqat ma’lumotlarni saqlash
- Faqat grafik interfeys yaratish

? O‘rnatilgan tizimlar uchun dasturiy ta’minot loyihalashda qaysi jihatlar muhim?
+ Xotira samaradorligi, tezkorlik va energiya iste’moli
- Faqat grafik dizayn
- Faqat foydalanuvchi interfeysi
- Faqat internetga ulanish tezligi

? Amaliy dasturiy ta’minotga misol bo‘ladigan dasturlar qaysilar?
+ Signalni qayta ishlash, avtomatlashtirish va monitoring dasturlari
- Faqat antivirus dasturlari
- Faqat matn muharrirlari
- Faqat video pleerlar

? Tizimli dasturiy ta’minotning yadro (kernel) qismi qanday vazifani bajaradi?
+ Resurslarni boshqarish va jarayonlarni taqsimlash
- Faqat rasm va videolarni qayta ishlash
- Faqat internet tarmog‘ini boshqarish
- Faqat matn tahrirlash

? Dasturiy ta’minotni yaratishda testlashning asosiy maqsadi nima?
+ Xatolarni aniqlash va tuzatish
- Faqat kod yozish tezligini oshirish
- Faqat grafik interfeys yaratish
- Faqat internetga ulanishni ta’minlash

? Dasturiy ta’minotning texnik xizmat ko‘rsatish bosqichi nimani anglatadi?
+ Dasturiy ta’minotni yangilash va xatolarni bartaraf etish
- Faqat dastur kodini o‘chirish
- Faqat dastur grafik interfeysini o‘zgartirish
- Faqat kompyuterning quvvat sarfini kamaytirish

? Embedded Linux nima?
+ O‘rnatilgan tizimlar uchun moslashtirilgan Linux distributivi
- Faqat mobil telefonlar uchun tizim
- Faqat Windows muhitida ishlaydi
- Faqat shaxsiy kompyuterlar uchun operatsion tizim

? FreeRTOS nima?
+ Ochiq kodli real vaqt operatsion tizimi
- Matn muharriri
- Internet tarmog‘ini boshqaruvchi dastur
- Grafik dastur

? Dasturiy ta’minotning interfeys qismi qanday maqsadda ishlatiladi?
+ Foydalanuvchilar va tizim o‘rtasida aloqa o‘rnatish uchun
- Faqat xotira boshqarish uchun
- Faqat protsessor yuklanishini tekshirish uchun
- Faqat internetga ulanish uchun

? Tizimli dasturiy ta’minotning muhim komponentlaridan biri bu...
+ Drayverlar
- Faqat video pleer
- Faqat ofis dasturlari
- Faqat audio dasturlar

? Kompilyator qanday vazifani bajaradi?
+ Dastur kodini mashina kodiga aylantirish
- Faqat internet tarmog‘ini nazorat qilish
- Faqat matn tahrirlash
- Faqat video yaratish
`;

const parseQuestions = (data) => {
  const questions = data.trim().split("\n\n");
  return questions.map((block) => {
    const lines = block.split("\n").filter(Boolean);
    const question = lines[0].replace("?", "").trim();
    const answers = lines
      .slice(1)
      .map((line) => line.replace(/[+-]/, "").trim());
    return {
      question,
      answer1: answers[0],
      answer2: answers[1],
      answer3: answers[2],
      answer4: answers[3],
    };
  });
};

const KTEData = parseQuestions(input);
export default KTEData;
