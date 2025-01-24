const input = `
?KIX (eng: FIR) filtr uchun to'g'ri ta'rif berilgan qatorni toping.
+Chekli impuls xarakteristikali filtr
-Cheksiz impuls xarakteristikali filtr
-Impuls xarakteristikali filtr emas
-Tog'ri javob yo'q

?Low Pass Filtr uchun to'g'ri ta'rif berilgan qatorni toping.
+Bu turdagi filtr chastotasi aniqlangan qiymatdan past bo'lgan signallarni o'tkazadi, boshqa signallarni kesib tashlaydi
-Bu turdagi filtr chastotasi aniqlangan qiymatdan past bo'lgan signallarni o'tkazadi, boshqa signallarni kesib tashlamaydi
-Bu turdagi filtr chastotasi aniqlangan qiymatdan yuqori bo'lgan signallarni o'tkazadi, boshqa signallarni kesib tashlaydi
-Bu turdagi filtr chastotasi aniqlangan qiymatdan yuqori bo'lgan signallarni o'tkazadi, boshqa signallarni kesib tashlamaydi

?High Pass Filtr uchun to'g'ri ta'rif berilgan qatorni toping.
+Chastotasi aniqlangan qiymatdan baland bo'lgan signallarni o'tkazadi, boshqa signallarni kesib tashlaydi.
-Chastotasi aniqlangan qiymatdan past bo'lgan signallarni o'tkazadi, boshqa signallarni kesib tashlaydi.
-Chastotasi aniqlangan qiymatdan baland bo'lgan signallarni o'tkazadi, boshqa signallarni kesib tashlamaydi
-To'g'ri javob yo'q

?Band Pass Filtr uchun to'g'ri ta'rif berilgan qatorni toping.
+Signal chastotasi berilgan o'tkazish chastota kengligi ichida bo'lgan qismini o'tkazadi
-Signal chastotasi berilgan o'tkazish chastota kengligi ichida bo'lgan qismini o'tkazmaydi
-Signal chastotasi berilgan o'tkazish chastota kengligi ichida bo'lmagan qismini o'tkazadi
-To'g'ri javob yo'q

?Quyidagi filtrlash formulasida keltirilgan x[n] qanday signal?
+y[n] = (b0*x[n] + b1*x[n-1] + b2*x[n-2] - a1*y[n-1] - a2*y[n-2])/a0
-Filtrlanishi kerak bo'lgan signal
-Shovqin signali
-Filtrlanishi kerak bo'lmagan signal
-To'g'ri javob yo'q

?Signallarga raqamli ishlov berishda Korrelyatsiya jarayonining necha xil shakli mavjud?
+2
-5
-6
-4

?To'g'ri ta'rifni keltiring: Svertka jarayoni bu?
+Bu funktsional tahlil bo'lib, 2 ta signalning ko'paytmasidan uchinchi o'zaro bog'lovchi signalning hosil bo'lishi jarayonidir
-Bu funktsional tahlil bolib, 2 ta signalning ko'paytmasidan ikkita o'zaro bog'lovchi signalning hosil bo'lishi jarayonidir
-Bu funktsional tahlil bolib, 2 ta signalning ko'paytmasidan uchinchi o'zaro bog'lovchi signalning hosil bo'lmaslik jarayonidir
-Kvantlashdan xosil bo'lgan jarayon

?Qayta ishlanadigan signallar qanday guruhlarga bo'linadi?
+Barcha javoblar to'g'ri
-Diskret
-Raqamli
-Analogli

?Qanday turdagi signal tashqi ta'sirlarda kamroq o'zgaradi?
+Raqamli signal
-Analog signal
-Analog va raqamli signal
-To'g'ri javob A va B javoblar

?Svyortka amalidan ko'p foydalaniladigan jarayon qaysi?
+Filtrlash jarayoni
-Kvantlash jarayoni
-Diskretlash jarayoni
-To'g'ri javob yo'q

?Signalni segmentlash jarayoni qanday?
+signalni ma'lum bo'laklarga ajratish
-signalni tanish
-signalni kvantlash
-signalni kodlash

?Qanday turdagi signal tashqi ta'sirlarda kamroq o'zgaradi?
+Raqamli signal
-Analog signal
-Analog va raqamli signal
-To'g'ri javob A va B javoblar

?Signalga to'g'ri ta'rif berilgan qatorni belgilang
+bu fizik jarayon bo'lib, uning parametrlari uzatilayotgan xabarga muvofiq o'zgaradi
-bu fizik jarayon bo'lib, uning parametrlari uzatilayotgan xabarga muvofiq o'zgarmaydi
-bu fizik jarayon bo'lib, uning parametrlari uzatilmayotgan xabarga muvofiq o'zgaradi
-bu fizik jarayon bo'lib, uning parametrlari bo'lmaydi

?Raqamli signal qanday bo'ladi?
+Raqamli signal uzlukli bo'ladi
-Raqamli signal uzlukliz bo'ladi
-Raqamli signal analog bo'ladi
-To'g'ri javob yo'q

?Analog signal qanday bo'ladi?
+Analog signal uzliksiz bo'ladi
-Analog signal kavntlangan bo'ladi
-Analog signal diskretlangan bo'ladi
-To'g'ri javob yo'q

?Analog signal bilan raqamli signal o'rtasida qanday farq bor?
+Analog signal uzluksiz, raqamli signal uzlukli bo'ladi
-Analog signal uzluksiz, raqamli signal uzlukliz bo'ladi
-Analog signal uzlukli, raqamli signal uzlukli bo'ladi
-Analog signal uzlukli, raqamli signal uzlukliz bo'ladi

?Raqamli signal protsessorlari qanday sinf protsessorlari hisoblanadi?
+keladigan analogli signallarning raqamli qayta ishlanishiga yo'naltirilgan maxsus mikroprotsessorlar sinfi
-keladigan analogli signallarning raqamli qayta ishlanishiga yo'naltirilgan maxsus tranzistorlar sinfi
-keladigan analogli signallarning raqamli qayta ishlanishiga yo'naltirilgan maxsus triggerlar sinfi
-keladigan analogli signallarning raqamli qayta ishlanishiga yo'naltirilmagan maxsus mikroprotsessorlar sinfi

?Qanday signallar davriy signal hisoblanadi?
+Ma'lum vaqt o'tishi bilan takrorlanadigan signal
-Ma'lum vaqt o'tishi bilan takrorlanmaydigan signal
-Ma'lum vaqt o'tmasligi bilan takrorlanadigan signal
-Ma'lum vaqt o'tmaslgi bilan takrorlanmaydigan signal

?Matlabda clc - buyrug'i nima vazifani bajaradi?
+ishchi oynani tozalash
-buyruq
-o'zgartiruvchi sonni kiritish
-barchasi to'g'ri

?Real vaqt tizimlari bu....?
+boshqaruv paytida tashqi ta'sirlarga javob berishga ulguradigan tizimlar
-boshqariladigan har qanday tizimlar
-To'g'ri javob yo'q
-kompleks tizimlarning barchasi

?Signalni kodlash nima?
+signalni ikkilik sanoq sistemasiga o'tkazish
-signalni qabul qilish
-signalni qism-qism qilib bo'laklash
-signalni diskretlangan qismini hisoblash

?Signalni diskretlash nima?
+signalni vaqt o'qi bo'yicha bo'laklash
-signalni vaqt o'qi bo'yicha uzatish
-signalni vaqt o'qi bo'yicha qabul qilish
-signalni vaqt o'qi bo'yicha kodlash

?Kompyuter markaziy boshqaruv vositalariga qaysilar kiradi?
+mikroprotsessor, mikrokontroller
-ARO', mikrokontroller
-yuborgichlar, boshqaruvchilar
-kitirish-chiqarish modullari, ARO'

?Signalni kvantlash nima?
+signalni amplituda o'qi bo'yicha bo'laklash
-signalni amplituda o'qi bo'yicha uzatish
-signalni z o'qi bo'yicha perpendikulyar
-signalni qabul qilish

?Tibbiyotda ishlatiladigan signal turlarini belgilang.
+elektromiografiya signali, elektroensefalografiya signali, elektrokardiografiya signal
-davriy signal, statsionar signal, garmonik signal
-tovush signali, garmonik signal, EKG signallari
-barcha javoblar to'g'ri

?Signallarni korrelyatsiya qilishning nechta shakli mavjud?
+2
-5
-7
-4

?Signallarni svyortka qilishning necha xil turi bor?
+2
-4
-5
-8

?MATLAB tizimining 'command window' qismida ma'lumotlarni kiritish ... belgisidan boshlanadi.
+>>
->
-<<
-<

?MATLAB tizimida massivlarni kiritish qanday tartibda kiritiladi?
+[1,2,3,4]
-(1,2,3,4)
-1,2,3,4
-barcha javoblar to'g'ri

?Signalni dastlabki holati uni qaysi sohasini anglatadi?
+Amplituda -Vaqt soxasi
-Chastota soxasi
-Vaqt-chastota soxasi
-barcha javoblar to'g'ri

?Signalni vaqt soxasidan chastota sohasiga o'zgartiruvchi algoritmlar berilgan qatorni belgilang.
+Fourier, DCT, Wavelet
-KIX, BIX, Fourier
-Low-pass, high-pass
-barcha javoblar to'g'ri

?Signal protsessorlari ishlab chiqaruvchi mashhur firmalarni ko'rsating.
+Analog Device, Motorola, Texas Instruments
-Analog Device, Lenovo
-Analog Device, HP, Acer
-barchasi to'g'ri

?Hisoblash moslamalari necha bitli ma'lumotlarni qayta ishlaydi?
+16-bitli
-23-bitli
-17-bitli
-15-bitli

?16 kHz chastota necha Hz chastota bo'ladi?
+16000
-16384
-16100
-16050

?Raqamli filtrlar nechta katta turga bo'linadi?
+2
-5
-7
-1

?Diskretlash natijasida qanday signal paydo bo'ladi?
+Diskret
-Filtr
-Analog
-Hech qanaqa signal paydo bo'lmaydi

?Qanday jarayon asosida diskret signal paydo bo'ladi?
+Diskretlash
-Kvantlash
-Shifrlash
-To'g'ri javob yo'q

?Tasvir signalining piksellari necha xil rangdan tashkil topgan?
+3
-5
-6
-8

?Tasvir signalining piksellari qanday ranglardan tashkil topgan?
+qizil ko'k yashil
-qora oq qizil
-sariq qora oq
-ko'k qora qizil

?Ma'lumotlarning siqish algoritmlari necha guruhga bo'linadi?
+2
-8
-6
-7

?Quyidagi keltirilgan filtrlash jarayoning ifodasida y[n] qanday signal?
y[n] = (b0*x[n] + b1*x[n-1] + b2*x[n-2] - a1*y[n-1] - a2*y[n-2])/a0
-Filtrlangan signal
-Filtrlanganmagan signal
-Shovqin signali
-to'g'ri javob yo'q

?To'g'ri javobni tanlang: o'zaro korrelyatsiya .....
+ikkita signalning o'xshashligi yoki umumiy xususiyatlarining ko'rsatkichidir
-ikkita signalning o'xshamasligi yoki umumiy xususiyatlarining ko'rsatkichidir
-umumiy xususiyatlari ko'rsatkichimas
-to'g'ri javob yo'q

?Raqamli filtr uchun to'g'ri javobni aniqlang.
+Raqamli ishlov berish usuli, ma'lum chegaraga ajratuvchi jarayon ketma-ketlik
-Analog signallarni raqamli qilish uchun ishlatiladigan ketma-ketlik
-To'g'ri javob yo'q
-Turli rejimda ishlovchi, raqamli signallarni demodulyatsiya qilish ketma-ketligi

?Raqamli filtrning afzalligi nimada?
+barcha javoblar to'g'ri
-aniqligi
-barqarorligi
-sozlashga egiluvchanligi va kompaktligi

?Raqamli filtrning kamchiligi nimada?
+barcha javoblar to'g'ri
-baland chastotali signallar bilan ishlash qiyinligi
-real vaqt davrida ishlash qiyinligi
-signalni qayta ishlashda protsessorning quvvatli bo'lishi

?Diskret holda svyortkaning ikki turi mavjud ularni nomini aniqlang.
+Chiziqli va siklik
-Nochiziq va davr
-Siklik va qiymat
-To'gri javob yo'q

?To'g'ri javobni tanlang: Avtokorrelyatsiya bu ?
+Faqat bitta signalning mavjudligi nazarda tutadi va vaqt o'tishi bilan signalning tuzilishi yoki uning harakati haqida malumot beradi
-Ko'plab signalning mavjudligi nazarda tutadi va vaqt o'tishi bilan signalning tuzilishi yoki uning harakati haqida malumot beradi
-Faqat bitta signalning mavjudligi nazarda tutmaydi va vaqt o'tishi bilan signalning tuzilishi yoki uning harakati haqida malumot beradi
-Faqat bitta signalning mavjudligi nazarda tutadi va vaqt o'tishi bilan signalning tuzilishi yoki uning harakati haqida malumot bermaydi

?Chekli impuls harakteristikali(KIX ing: FIR) filtr uchun to'g'ri ta'rifni belgilang?
+impuls tavsifnomasini vaqt mobaynida cheklangan xususiyatli bo'ladi
-impuls tavsifnomasini vaqt mobaynida cheklanmagan xususiyatli bo'ladi
-barcha javoblar to'g'ri
-bunday filtrlar odatda ishlatilmaydi

?Chekli impuls harakteristikali(KIX ing: FIR) filtrni afzalligi nimada?
+barcha javoblar to'g'ri
-chidamli
-qarama-qarshi aloqani talab qilmaydi
-filtrlar fazasi chiziqli qilinishi mumkin

?Cheksiz impuls harakteristikali(BIX ing: IIR)  filtr uchun to'g'ri ta'rifni belgilang?
+impuls tavsifnomasini vaqt mobaynida cheklanmagan xususiyatli bo'ladi
-impuls tavsifnomasini vaqt mobaynida cheklangan xususiyati hisoblanadi
-barcha javoblar to'g'ri
-bunday filtrlar odatda ishlatilmaydi

?Real vaqt tizimlari uchun to'g'ri bo'lgan javobni ko'rsating.
+boshqaruv paytida tashqi ta'sirlarga javob berishga ulguradigan tizimlar
-boshqariladigan xar qanday tizimlar
-kompleks tizimlarning barchasi
-To'g'ri javob yo'q

?Signal protsessori ishlab chiqaradigan dunyoda yetakchi kompaniya?
+Analog Devices
-Microsoft
-IBM
-Microsystem Sun

?AVR mikrokontrollerlari qaysi firmaga tegishli?
+Atmel
-MicroSystem Sun
-Anolog Dvices
-AVR Company

?QNX operatsion tizimi operatsion tizimi qachon ishlab chiqilgan?
+1982
-1984
-1986
-1970

?Signallarni qayta ishlashning an'anaviy bosqichlarini belgilang?
+signalni olish, dastlabki ishlov berish, belgilarini aniqlash
-tasniflash, filtrlash, dastlabki ishlov berish
-signalni tanish, qayd qilish, filtrlash
-barcha javoblar to'g'ri

?QNX operatsion tizimiga to'g'ri ta'rif berilgan qatorni toping?
+real vaqt tizimida ishlovchi mikroyadroli operatsion tizim
-Operatsion tizim yopiq kodli
-Faqat bir foydalanuvchi uchun ishlab chiqilgan
-barcha javoblar to'g'ri

?Korrelyatsiya ikki shakli mavjud ularni nomini aniqlang.
+Avtokorrelyasiya va o'zaro korrelyasiya
-O'zaro korrelyasiya va siklik
-Radar signalar va chastotalar
-To'gri javob yo'q

?Raqamli signal prosessorlari ishlab chiqaradigan firmalar qatorini ko'rsating.
+Analog Device,Motorola,Texas Insruments
-Motorola, Nokia, Samsung
-LG,Samsung
-To'gri javob yo'q

?Raqamli filtrlar impuls javob reaksiyalariga ko'ra 2ta katta turga bo'linadi ularni nomi keltirilgan qatorni ko'rsating.
+Cheksiz va chekli
-Chekli va uzluksiz
-Davriy va chekli
-To'gri javob yo'q

?Diskretlash chastotasi aniqlash qaysi teorema asosida olingan.
+Kotelnikov
-Nuyton
-Filips
-Nobel

?Raqamli sxemalar bilan taqqoslaganda analog sxemalar quyidagilarga nisbatan sezgirroqdir.
+haroratning o'zgarishi, qarish va elementlarning bardoshlik darajasi
-dasturiy ta'minotdagi xatolar
-dizayndagi kamchiliklar
-chiqish signalidagi o'zgarishlar

?Furye tahlili ......
+Signalni asl domenidan chastota domeniga o'zgartiradi
-Signalni ma'lum darajada pasaytirish uchun ishlatiladi
-Kiruvchi signal fragmentlarga ajratadi
-Qisqa vaqtli energiya qiymati hisoblanadi

?Signal deb ....................................... aytiladi?
+biror bir fizik jarayonning bir yoki nechta parametlarini xabarga mos ravishda o'zgarishiga
-inson haqida ma'lumot beruvchi kundalik
-bu xar xil fizik jarayonlar, jismlar, tarixiy va kundalik xodisalar to'g'risidagi ma'lumotnomaga
-uzatish uchun uni ma'lum bir shaklga keltirish lozim tekst, jadval, grafik, rasm, xarakatdagi tasvir, va boshqalarga.

?Tabiatda signallar asosan qanday holatda bo'ladi ?
+analog
-raqamli
-kvantlashgan
-to'g'ri javob yo'q

?DFT(Discrete Fourier Transform) qiymatlarini qanday olinadi?
+Qiymatlarni ketma-ketlikni turli chastotalarning tarkibiy qismlariga ajratish orqali-
-Qiymatlarni birma-bir murojaatlar asosida
-Qiymatlarni turli yo'nalishlarda berilgan so'rovlar orqali
-To'g'ri javob yo'q

?Elektr signal deb -
+elektr jarayonining bir yoki bir nechta parametrlarini xabarga mos ravishda o'zgarishiga aytiladi
-xabarni fazoniy bir nuqtasidan ikkinchi nuqtasiga uzatish uchun xabarni biror bir fizik jarayonga yuklashimiz ya'ni uni signalga aylantirishimiz
-bu xar xil fizik jarayonlar, jismlar, tarixiy va kundalik xodisalar to'g'risidagi ma'lumotga
-uzatish uchun uni ma'lum bir shaklga keltirish lozim tekst, jadval, grafik, rasm, xarakatdagi tasvir, va boshqalar

?Kvantlash jarayonida . . . .
+signallarning butun diapazoni darajalarga bo'linadi, ularning soni berilgan bit kengligi sonlari bilan ifodalanishi kerak.
-raqamli signallar o'zaro bir-biri bilan qo'shiladi
-diskretlanmagan signallarni jamlash amalga oshiradi
-to'g'ri javob yo'q

?Xabar manbadan xabar iste'molchiga yetkazib berish uchun foydalaniladigan texnik qurilmalar to'plamiga .....................  deb ataladi.
+Aloqa tizimi
-Aloqa liniyasi
-Aloqa qurilmasi
-Aloqa tuguni

?Matematik nuqtai nazardan, uzluksiz signal doimiy....... ifodalanadi.
+funktsiyani
-grafikni
-matematikani
-fizikani

?Aloqa tizimi deb............... aytiladi.
+xabar manbasi va iste'molchi o'rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to'plamiga
-xabarni fazoniy bir nuqtasidan ikkinchi nuqtasiga uzatish uchun xabarni biror bir fizik jarayonga yuklashimiz ya'ni uni signalga aylantirishimiz
-bu xar xil fizik jarayonlar, jismlar, tarixiy va kundalik xodisalar to'g'risidagi ma'lumotga
-uzatish uchun uni ma'lum bir shaklga keltirish lozim tekst, jadval, grafik, rasm, xarakatdagi tasvir, va boshqalar

?Telefon signali (ovoz) spektr kengligi qancha ?
+300 Hz   3400 Hz
-300 Hz   3000 Hz
-300 Hz   3800 Hz
-300 Hz   400 Hz

?Radioeshittirish signali spektr kengligi qancha?
+20  Hz      20000 Hz
-20  Hz      200 Hz
-20  Hz     2400 Hz
-20  Hz      26000 Hz

?Telegraf signali spektr kengligi qancha?
+0  Hz   100 Hz
-0  Hz   1000 Hz
-0  Hz   10000 Hz
-0  Hz    10 Hz

?Televizion signali (video ) spektr kengligi qancha?
+50 Hz  6.5 MHz
-0  Hz   1000Hz
-20  Hz     2400Hz
-300 Hz   3500 Hz

?Tibbiyotda ishlatiladigan signal turlarini belgilang?
+elektromiografiya signali, elektroensefalografiya signali, elektrokardiografiya signali
-davriy signal, statsionar signal, garmonik signal
-tovush signali, garmonik signal, EKG signallari
-barcha javoblar to'g'ri

?Matlab paketida signalni ekranda tasvirlash uchun qaysi buyruqdan foydalaniladi?
+Plot()
-Wavread()
-Clc
-Pwelch()

?Python dasturlash tilida matritsalar bilan ishlash kutubxonasi qaysi?
+Numpy
-Liblary
-Wav_file
-Audioread

?Diskretlash chastotasi 11 kHz signalni vaqt o'qi bo'yicha nechta bo'lakka diskretlanadi
+11050
-11500
-1000
-11800

?Signalni kvatlash qaysi o'q bo'yicha amalga oshiriladi?
+amplituda
-vaqt
-chastota
-quvvat

?Signalni diskretlash qaysi o'q bo'yicha amalga oshiriladi?
+vaqt
-amplituda
-chastota
-quvvat

?Nutq signali sohasidagi boshlang'ich va tugallanish koeffitsiyentlari orasidagi farqni aniqlash nutq signalining qaysi parametrini ifodalaydi?
+Takrorlanuvchi oraliq qiymatlar soni
-Energiya
-Quvvat
-Tovush spektrogramma qiymati

?Signalda diskret kosinus o'zgartirishi amalga oshirilganda uning natijaviy qiymatlari qaysi sohada ifodalanadi?
+Amplituda-chastota
-Amplituda-vaqt
-Kuchlanish-tok kuchi
-Kuchlanish-vaqt

?Signalda tezkor Fure o'zgartirishi amalga oshirilganda uning natijaviy qiymatlari qaysi sohada ifodalanadi?
+Amplituda-chastota
-Amplituda-vaqt
-Kuchlanish-tok kuchi
-Kuchlanish-vaqt

?Signalda Adamar o'zgartirishi amalga oshirilganda uning natijaviy qiymatlari qaysi sohada ifodalanadi?
+Amplituda-chastota
-Amplituda-vaqt
-Kuchlanish-tok kuchi
-Kuchlanish-vaqt

?Signalda Wevylet o'zgartirishi amalga oshirilganda uning natijaviy qiymatlari qaysi sohada ifodalanadi?
+Amplituda-chastota
-Amplituda-vaqt
-Kuchlanish-tok kuchi
-Kuchlanish-vaqt

?Dastlab Analog signallarni qanday filtrlar yordamida filtrlanadi?
+Analog filtrlar
-Raqamli filtrlar
-Gibrid filtrlar
-filtrlanmaydi

?Signallar Analog filtr bilan filtrlanganda qanday signal hosil bo'ladi?
+Analog signal
-Raqamli signal
-Diskret signal
-Kvant signal

?Qanday filtrlarni ishlatish yordamida Raqamli signallarni filtrlash mumkin?
+Raqamli filtrlar
-Analog filtrlar
-Raqamli signal filtrlanmaydi
-To'g'ri javob yo'q

?Signalni bo'laklarga taqsimlash(bo'lish) qanday jarayon?
+Segmentlash
-Svyortkalash
-Korelyatsiyalash
-Filtrlash

?Turli turdagi signallarni turli shovqinlardan, halaqitlardan tozalash qanday jarayon?
+Filtrlash
-Segmentlash
-Korelyatsiyalash
-Aproksimatsiyalash

?Signallarni bir biriga mosligini tekshirish qanday jarayon?
+Korrelyatsiyalash
-Segmentlash
-Filtrlash
-Interpolyatsiyalash

?Matlab paketida ma'lumotlar qanday shaklda ifodalanadi?
+matritsa
-text
-excel
-file

?Matlab paketida "Workspace" qismda nimalar joylashgan?
+Natijalar, o'zgaruvchi qiymatlari
-Buyruqlar
-Fayllar
-To'gri javob yo'q

?Matlab paketida "Command History" qismida nimalar joylashgan?
+Buyruqlar tarixi
-Natijalar, o'zgaruvchi qiymatlari
-Fayllar
-To'gri javob yo'q

?1KHz chastota necha Hz chastota bo'ladi?
+1000
-1024
-1050
-1100

?Matlab paketida Adamard matritsasini hosil qilish buyrug'i qanday?
+Hadamard()
-Matrix()
-Adamard()
-Adamard_matrix()

?Matlab paketida signallarni svyortka qilish buyrug'i qanday?
+Conv()
-Convolution_s()
-Coor()
-To'g'ri javob yo'q

?Matlab paketida "conv()" buyrug'i qanday vazifani bajaradi?
+Signallarni svyortka qiladi
-Signallarni korelyatsiya qiladi
-Signallarni filtrlaydi
-To'g'ri javob yo'q

?Matlab paketida "close all" buyrug'i qanday vazifani bajaradi?
+Barcha ochiq figuralarni yopadi
-"Command Window"ni tozalaydi
-Figuralarni ochadi
-O'zgaruvchilarni ifodalaydi

?Ochiq figuralarni yopuvchi buyruq Matlab paketida qanday yoziladi?
+Close all
-Clear all
-Clc
-To'g'ri javob yo'q

?Mushaklardan olinadigan biosignallar qanday signallar turiga mansub?
+Elektromiografiya signali
-Elektrokardiografiya signali
-Ensofologramma signali
-Nutq signali

?Miyadan olinadigan signallar qanday signallar turiga kiradi?
+Ensofologramma signali
-Elektromiografiya signali
-Elektrokardiografiya signali
-Nutq signali

?Yurak mushagidan olinadigan signal qanday signal turiga kiradi?
+Elektrokardiogramma signali
-Elektromiografiya signali
-Ensofologramma signali
-Nutq signali

?Tabiatda uchraydigan signallar .... turlarga bo'linadi.
+Vaqt bo'yicha o'zgaradigan va o'zgarmaydigan
-Diskret va raqamli
-Spektral ishlov berilgan va berilmagan
-Svyortyka qilingan va qilinmagan

?Signallar Bul algebrasida qanday ifodalanadi?
+0 va 1 orqali
-0-7 orqali
-0-10 orqali
-0-15 orqali

?Signallarga raqamli ishlov berish amallarining qaysi birini asosida "svyortka algoritmi" yotadi?
+Filtrlash
-Furye o'zgartirish
-Segmentlash
-Interpolyatsiyalash

?Raqamli signallar qanday formula asosida  filtrlanadi ?
+y[n] = b0*x[n] + b1*x[n-1]
-y[n] = (b0*x[n] + a1*x[n-1] )
-y[n] = b2*x[n-2] - a1*y[n-1] - a2*y[n-2])/a0
-To'g'ri javob yo'q

?AVR mikrokontrollerlari qanday arxitekturada tuzilgan?
+RISC-arxitektura asosidagi
-CISC arxitektura asosida
-CISC VA RISC
-To'g'ri javob yo'q

?'fft(x)' - buyrug'i Matlab paketida qanday vazifani bajaradi?
+X-signalni tezkor Furye o'zgartirishi yordamida chastota sohasiga olib o'tadi
-X-signalni diskret kosinus o'zgartirishi yordamida chastota sohasiga olib o'tadi
-X-signalni diskret sinus o'zgartirishi yordamida chastota sohasiga olib o'tadi
-X-signalni diskret tangens o'zgartirishi yordamida chastota sohasiga olib o'tadi

?Korrelyatsiya jarayoni nechta shakli mavjud?
+2
-5
-7
-4

?"pwelch" buyrug'i Matlab muhitida nima vazifani bajaradi
+Signalning spektral quvvat zichligini ifodalaydi
-Signalni svyortka qiladi
-Signalni korrelyatsiya qiladi
-Bunday buyruq mavjud emas

?Spektral o'zgartirish algoritmlari mavjud qatorni aniqlang:
+DCT,FFT,Haar,Adamar
-Hamming
-Hanning
-To'g'ri javob yo'q

?Signallarni qayta ishlashda analog signallarni raqamli signalga aylantirishning asosiy amallari qaysilar?
+Diskretlash,  kvantlash va Kodlash
-Diskretlash
-Kvantlash va Kodlash
-Kodlash

?Signallarni qayta ishlashda signal o'lchamining sekundiga qilingan o'lchashlar soni nima deb aytiladi?
+Diskretlash
-kvantlash chastotasi
-freymlash chastotasi
-to'g'ri javob keltirilmagan

?Signallarni uzluksiz yoki diskret miqdor qiymatlarining qatorini chekli oraliqlarga bo'lish jarayoni qanday nomladi?
+Kvantlash
-Freymlash
-Diskretlash
-Taqsimlash

?Nutqiy signal tarkibidagi so'zlashuv, bo'g'in yoki fonemalar orasidagi chegaralarni aniqlash jarayoni nima deb ataladi?
+Nutq signalini segmentlash
-Nutq signalini kvantlash
-Nutq signalini diskretlash
-Nutq signalini yaxlitlash

?Nutq signalining asosiy parametrlari qaysilar?
+qisqa vaqtli energiyasi va noldan o'tuvchi nuqtalar soni
-qisqa vaqtli energiyasi
-noldan o'tuvchi nuqtalar soni
-signalning diskretlash chastotasi

?Signallarni qayta ishlash jarayonlarida analog raqamli o'zgartirish jarayoniga  tarkibiga qaysi amallar kiradi?
+Diskretlash,kvantlash,kodlash
-Diskretlash, segmentlash, filtrlash
-Kvantlash,kodlash, segmentlash
-Kvantlash

?Signallarni matritsalarga asoslangan spektral o'zgartirish algoritmini toping.
+Adamar
-DCT
-Fure
-DFT

?Signallarni sinus va kosinusga asoslangan spektral o'zgartirish algoritmi qaysi?
+Fure
-Adamar
-DCT
-Haara

?Qaysi spektral o'zgartirish algoritmi kosinusga asoslangan?
+DCT
-Fure
-Adamar
-Haara

?Nutq hamda tovush signallarni segmentlashning turlari qaysi?
+Ketma-ket, suriluvchi
-Sektorli, segmentli
-Sigmoid
-Kosmoid

?Nutq hamda tovush signallarni segmentlashning necha xil turi mavjud?
+2
-4
-5
-7

?Elektromiografiya signallari qanday signal?
+Biosignal
-Nutq signali
-Akustik signal
-Sinusoid signal

?Elektrokardiografiya signallari qanday signal?
+Biosignal
-Nutq signali
-Akustik signal
-Sinusoid signal

?Elektroensofologramma signallari qanday signal?
+Biosignal
-Nutq signali
-Akustik signal
-Sinusoid signal

?Quyidagi formatlardan qaysi biri audio signallariga mansub?
+Wav, mp3, ogg
-C3d, txt
-Mp4, max, dll
-To'g'ri javob yo'q

?Matlab paketida tasvirlarni qaysi buyruq orqali o'qib olinadi?
+Imread()
-Imshow()
-Imhist()
-Info()

?Matlab paketida tasvirni qaysi buyruq orqali ekranga chiqariladi?
+Imshow()
-Imread()
-Imhist()
-Info()

?Matlab paketida  tasvirni qaysi buyruq orqali gistogrammasini chiqarish mumkin?
+Imhist()
-Imshow()
-Imread()
-Info()

?Audio signallarining turlari to'g'ri keltirilgan javobni aniqlang
+Mono va stereo
-3d,7d
-Mp3,wav
-Ogg,aac

?Mono turidagi audio signallar qanday o'lchamda bo'ladi ?
+1 kanalli
-2 kanalli
-3 kanalli
-4 kanalli

?Stereo turidagi audio signallar qanday o'lchamda bo'ladi ?
+2 kanalli
-1 kanalli
-3 kanalli
-4 kanalli

?Matlab paketida audio signallarini qaysi buyruq orqali o'qib olinadi?
+Audioread(), wavread()
-Audiomread(), imshow()
-Imread()
-Imhist()

?Matlab paketida tasvir signallarini gistogrammasi orqali normallashtirish qaysi buyruq orqali amalga oshiriladi?
+Histeq()
-Imhist()
-Histogram()
-Pspectrum()

?Matlab paketida natijani chiqarish ekranini taqsimlash buyrug'i qaysi?
+Subplot()
-Plot()
-Spectrogram()
-Pspectrum()

?Inson qulog'i eshita oladigan tovush chastotalari oraliqlarini belgilang?
+20-20000 Hz
-20 kHz-20MHz
-20 Hz dan past
-20 mHz - 20 kHz

?Analog signallar ....
+vaqt o'tishi bilan doimiy ravishda o'zgarib turadi
-"0" va "1" nollarning ketma-ketliklaridan iborat
-qadamlar (qadamlar) o'zgarishi
-faqat chastota domenida mavjud

?Bazis funksiyasi tashkil etuvchilari sinus va kosinusga ega spektral o'zgartirish turini aniqlang?
+Furye
-Haara
-Adamar
-Wavelet

?Raqamli filtrlar nima uchun analog filtrlardan afzalroq ( eng asosiy sabablardan birini keltiring)
+ularni oson dasturlashtirilishi mumkin
-ishlab chiqaruvchilar ko'pincha yangi protsessorlarni ishlab chiqaradilar
-ular barqaror
-to'g'ri javob yo'q

?Oddiy raqamli signal protsessorlari tizimi quyidagilardan iborat.
+DSP, xotira, ADC, DAC va aloqa portlari
-mikroprotsessor va xotira
-mikroprotsessor, ADC va DAC
-mikroprotsessor va yordamchi ombor

?Ko'p protsessorli tizimlarda hisoblash jarayonini tashkil qilish usuli:
+Ko'p protsessorli ishlov berish
-Ko'p vazifali ishlov berish
-Geterogen
-Ko'p yadroli ishlov berish

?Nutq signallari qanday signal?
+Biosignal
-O'zgarmas signal
-tangensial signal
-Sinusoid signal

?Vaqtga nisbatan fizik signallarni tahlil qilish nima deb ataladi
+Vaqt sohasida signallarini qayta ishlash
-Faza sohasida signallarini qayta ishlash
-Chastota sohasida signallarini qayta ishlash
-Amplituda sohasida signallarini qayta ishlash

?Signallarga ishlov berishda qaysi sohalarda jarayonlarni amalga oshirish mumkin?
+Vaqt va chastota sohasida
-Faza va chastota sohasida
-Vaqt va faza sohasida
-Faza va amplituda sohasida

?Deterministik signallar qanday ko'rinishlarda bo'ladi?
+Davriy va davriy bo'lmagan
-Aniq va noaniq
-Chekli va cheksiz
-Tog'ri javob keltirilmagan

?QNX operatsion tizimi qaysi arxitektura asosida qurilgan?
+Mikroyadroli
-SIMD
-MIMD
-MISD

?Signallarga raqamli ishlov berishda ushbu formula nimani ifodalaydi?
+Qisqa vaqtli energiya
-Bo'saqaviy qiymatlari
-Kvantlanganlik darajasi
-Filtr koeffisenti

?Signallarni qayta ishlashda eng ko'p ishlatiladigan amal?
+Svyortka
-Korrelyatsiya
-Tanib olish masalalari
-Identifikatsiya

?Nutq signallarini tanib olishda qaysi modeldan foydalangan maqsadga muvofiq?
+Markov modellari
-So'zlarning turli 3d modellari
-Gap tuzilishi modellari
-To'g'ri javob yo'q

?Uchuvchi apparatlar uchun turbalentlik qanday signallarga misol bo'ladi?
+Tasodifiy
-Determinallashgan
-Raqamli
-To'g'ri javob yo'q

?Tasodifiy signallarning parametrlarini aniqlang
+Barchasi to'g'ri
-Matematik kutilma
-Dispersiya
-O'rtacha kvadratik og'ish

?Raqamli video sifatini baholovchi eng ishonchli va mukammal tizim?
+Inson ko'z tizimi
-Telefon kamerasi tizimi
-Kompyuter tizimi
-Ekran tizimlari

?Python dasturlash tilida ekranga ma'lumotlarni chiqarish buyrug'i?
+Print()
-Show()
-Cout()
-Read()

?Python dasturlash tilida grafik interfeysni hosil qilib berishga yordam beradigan modul?
+Tkinter
-Library
-Math
-Grap

?Python dasturlash tilida matrissalar bilan ishlovchi modullar?
+Numpy,scipy
-Math
-Filtr
-Array

?Filtrlarni loyihalashda signallarni nimalar yordamida filtrlanadi?
+Filtr koeffisentlari
-Kiruvchi signal
-Chiquvchi signal
-Shovqin signal

?Signallarni adaptiv filtrlashda filtr koeffisentlari qanday hosil qilinadi?
+Shovqin hamda kiruvchi signallar
-O'zimiz ishlab chiqamiz
-Tasodifiy holatida
-To'g'ri javob yo'q

?Blokli kodlash nechi turga  bo'linadi?
+2
-4
-5
-1

?Ikki o'lchamli signallarda yani tasvirlarda filtrlash amalarini qanday usulda  bajariladi?
+Matrisa 
-Vektor
-Ketma-ket
-Parallel

?Kotelnikov teoremasiga ta'rif bering
+diskretlash chastota asosiy signal  chastotasidan 2 marta  katta bo'lishi kerak 
-diskretlash chastota asosiy signal  chastotasidan 6 marta  katta bo'lishi kerak
-diskretlash chastota asosiy signal  chastotasidan 4 marta  katta bo'lishi kerak
-Javoblar noto'g'ri

?Signal chastotalarini ifodalash birligini ko'rsating?
+Hz
-kg
-ms
-F

?Lokal bazis o'zgartirish algoritmini ko'rsating?
+Haara
-Furye
-Adamar
-Tezkor-Furye

?Integral bazis o'zgartirish algoritmini ko'rsating?
+Furye
-Haara
-Adamar
-Wavelet

?Bazis funksiyasi tashkil etuvchilari 1 va -1 ga ega spektral o'zgartirish turini aniqlang?
+Adamar
-DCT
-Furye
-Wavelet

?Bazis funksiyasi tashkil etuvchilari sinus va kosinusga ega spektral o'zgartirish turini aniqlang?
+Furye
-Haara
-Adamar
-Wavelet

?Ko'p protsessorli tizimlarda hisoblash jarayonini tashkil qilish usuli:
+Ko'p protsessorli ishlov berish
-Ko'p vazifali ishlov berish
-Geterogen
-Ko'p yadroli ishlov berish

?Oddiy raqamli signal protsessorlari tizimi quyidagilardan iborat:
+DSP, xotira, ADC, DAC va aloqa portlari
-mikroprotsessor va xotira
-mikroprotsessor, ADC va DAC
-mikroprotsessor va yordamchi ombor

?Raqamli filtrlarning asosiy afzalligi shundaki, ular:
+arzonroq
-dizayni osonroq
-dasturlashtiriladigan
-o'tish zonasida keskin pasayishni ta'minlash

?Fourier transform (FT) quyidagilar uchun ishlatiladi:
+vaqt domenidan davriy bo'lmagan signallarni chastota domeniga o'zgartirish
-faqat vaqt domenidan chastota domeniga davriy signallarni va aksincha
-diskret signallarni siqish
-kiruvchi signal chastotalarini filtrlash

?Signallarni qayta ishlashda eng ko'p ishlatiladigan amal
+Svyortka
-Korrelyatisiya
-Tanib olish masalalari
-Identifikatsiya

?Signal chastotasi 230 Hz va qurilmaning disktretlash chastotasi 16 kHz bo'lsa, qurilma 1 sekundda nechta qiymat qabul qiladi.
+16000
-15670
-16230
-8230

?Video fayllardagi tasvirlarning tebranishiga asosan quyidagilar sabab bo'ladi:
+kerakli miqdordagi kadrlarni o'z vaqtida uzata olmaslik
-freymlarning yuqori chastotali tarkibiy qismlari bundan mustasno
-"yo'qotish bilan" siqishni usullari
-noo'rin o'tkazish usullari

?JPEG (Joint Photographic Expert Group) siqishni standartining zamonaviy versiyasi:
+DCT va FFT kombinatsiyasidan foydalanadi va asosan harakatsiz tasvirlar uchun ishlatiladi
-tasvirlarni harakatlantirish uchun ishlatib bo'lmaydi
-DCT va Huffman kodlarining kombinatsiyasidan foydalanadi va asosan harakatsiz tasvirlar uchun ishlatiladi
-siqishni aniqlash uchun kesishni aniqlash smetasidan foydalanadi

?MATLAB-dagi qaysi funktsiya uzatish funktsiyasi nomeratori va maxrajining polinomlari koeffitsientlari to'plamlarini vektorlar va nollarga o'zgartiradi?
+cheblfp (x, y)
-demo
-platx
-tf2zp

?Diskret filtrlar qanday shakllarga ega?
+Kanonik, ko'chirilgan, ketma-ket, elliptik
-Kanonik, muvozanatli, parallel, elliptik
-Transpozitsiya qilingan, ketma-ket, parallel, kaskadli
-Kanonik, ko'chirilgan, ketma-ket, parallel

?Siqish jarayoniga to'g'ri ta'rifni belgilang
+Ma'lumotlar fayllari hajmini kamaytirish jarayoni
-Ma'lumotlarni olib tashlash jarayoni
-Ma'lumotlarni tahlillash asosida olib tashlash
-To'g'ri javob yo'q

?Multipleksiya uchun to'g'ri javobi belgilang.
+Bu bir nechta ma'lumot oqimlarini bitta vosita orqali birlashtirish va yuborish uchun ishlatiladigan usul
-Ma'lumotlarni olib tashlash jarayoni
-Ma'lumotlarni tahlillash asosida olib tashlash
-To'g'ri javob yo'q

?Ma'lumotlarning asosiy turlari berilgan qatorni belgilang.
+Butun,haqiqiy,kompleks,mantiqiy,matnli
-Mantiqiy,matnli,butun,massiv
-Massiv,haqiqiy,kompleks,irratsional
-Butun,haqiqiy,matnli,rastrli,chiziqli

?Ma'lumotlar taqdim etishning asosiy formatlarini sanang
+Bayt,yarimso'z,so'z,ikkitalik so'z,kengaytirilgan so'z
-Bayt,yarimso'z
-Bayt,yarimso'z,kengaytirilgan so'z
-To'g'ri javob yo'q

?ADSP-2100 oilasidagi har bir protsessor nechta mustaqil hisoblash birliklarini o'z ichiga oladi?
+3
-4
-5
-6

?ADSP-2100 necha bitli ma'lumotlarni qayta ishlash uchun mo'ljallangan?
+16
-32
-48
-64

?ADSP-2100 oilasi protsessorlari quyidagilardan qaysilarini o'z ichiga oladi?
+Arifmetik mantiqiy qurilma,multiplikator-akkumlator,ma'lumot almashinuvchisi
-Arifmetik mantiqiy qurilma, boshqaruv yacheykasi, akkumlator
-Akkumlator,boshqaruv paneli, nazorat yacheykasi
-To'g'ri javob yo'q

?Qaysi spektral o'zgartirish algoritmi kosinusga asoslangan?
+DCT
-Fure
-Adamar
-Haara

?Nutq signalining asosiy parametrlari qaysilar?
+qisqa vaqtli energiyasi va noldan o'tuvchi nuqtalar soni
-qisqa vaqtli energiyasi
-noldan o'tuvchi nuqtalar soni
-signalning diskretlash chastotasi

?Band Stop Filtr uchun to'g'ri javobni belgilang?
+Chastotasi filtr hisoblanayotganda berilgan chastota o'tkazuvchanlik kengligidan tashqaridagi barcha signallarni o'tkazadi
-Chastotasi filtr hisoblanmayotganda berilgan o'tkazish chastota kengligi ichida bo'lgan signallarni o'tkazmaydi
-Bu turdagi filtr chastotasi aniqlangan qiymatdan yuqori bo'lgan signallarni o'tkazadi, boshqa signallarni kesib tashlamaydi
-Bu turdagi filtr chastotasi aniqlangan qiymatdan past bo'lgan signallarni o'tkazadi, boshqa signallarni kesib tashlamaydi

?Matlab paketida 'dct(x)' - buyrug'i qanday vazifani bajaradi?
+X - signalni diskret kosinus o'zgartirishi orqali o'zgartiradi
-X - signalni diskret sinus va kosinus o'zgartirishi orqali o'zgartiradi
-X- - signalni diskret tangens o'zgartirishi orqali o'zgartiradi
-X - signalni diskret Furye o'zgartirishi orqali o'zgartiradi

?Signallarga raqamli ishlov berish jarayonlarida teskari jarayonlar nimani ifodalaydi?
+Signalning sinusoidalar bo'yicha sintezi
-Davriy signallarni  turi
-Chastotali signallar
-Karrali chastotalar

?Signallarga raqamli ishlov berishda blokli kodlash 2 turga bo'linadi, ular qaysi qatorda ko'rsatilgan.
+Chiziqli,davriy
-Davriy, analog
-Analog va raqamli
-Filtrli

?Nutq signallari va elektromiografiya signallarining asosiy farqi nimada?
+Kirish chastotasi
-Formatida
-Faylida
-Segmentida

?Shovqinni minimallashtirishda signallarini qayta ishlash texnikasi  asosan qaysi sohada amalga oshiriladi?
+Vaqt sohasida
-Faza sohasida
-Amplituda sohasida
-Chastota sohasida

?Signallarni qayta ishlashda signal nimani ifodalaydi?
+biror bir fizik jarayonning bir yoki bir nechta parametrini xabarga mos ravishda o'zgarishini ifodalaydi.
-nutqni segmentlash jarayonini ifodalaydi
-fizik jarayonning matematik modelini ifodalaydi
-to'g'ri javob yo'q

?Nutq signallarini tanib olishda signalning qaysi asosiy koeffisentlaridan foydalaniladi?
+MFCC
-FFT qiymatlari
-DCT qiymatlari
-Energiya

?Tashqi muhit aloqasiga ko'ra tizimlar qanday bo'ladi?
+Ochiq va yopiq
-Yashiringan va asosiy
-Mavhum va absolut
-Agressiv va aktiv

?Tizimning murakkabligi nimalarga bog'liq?
+Ichki va tashqi bog'liqlik, dinamik o'zgarishlar
-Tashqi ta'sirlar
-Statik va dinamik kuchlanishlar
-Tizimning integratsiyasi,monitoringi

?Signal chastotasi 24 kHz  bo'lsa u necha Hz ga teng bo'ladi?
+24000
-24576
-24050
-24100
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
