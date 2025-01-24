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

?Signallarga ishlov beruvchi sistemalar matematik tavsiflashga ko’ra qanday turlarga  bo’linadi?
+chiziqli, nochiziqli, diskret  
-uzlukli, diskret, chiziqli 
-nochiziqli, vaqt bo’yicha diskretlangan ,chiziqli 
-diskret, uzluksiz ,chiziqli

?Ideal ko’paytiruvchi qurilma sifatida ishlatiladgan modulyator
+ Xalqali modulyator
-Sinxron modulyator
-Kvadratik modulyator
-Unipolyar modulyator

?…..deb xabar manbai va istemolchi o’rtasidagi xoxlagan ikkita nuqta orasidagi texnik qurilmalar to’plamiga aytiladi.
axborot uzatish
-signal 
-Telefoniya
+aloqa kanali

?Aloqa kanallarining ko’rsatgichlari to’g’ri berilgan qatorni belgilang berilgan qatorni belgilang. 
+ kanal orqali xabar uzatilish vaqti,kanal dinamik diapazoni,kanal signal spektrini o’tkazish kengligi.
-kanal orqali xabar uzatilish vaqti, aloqa kanali hajmi
-kanal signal spektrini o’tkazish kengligi, aloqa tizimi.
-aloqa kanali hajmi,kanal dinamik diapazoni 

?Aloqa kanali deb – 
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal dinamik diapazoniga aytiladi.
+xabar manbasi va iste'molchi o‘rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to‘plamiga aytiladi.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun foydalaniladigan texnik qurilmalar to‘plamiga aytiladi.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal signal spektrini o’tkazish kengligiga aytiladi. 

?Davriy signallarning spektri necha xil ko’rinishda  bo’ladi 
-5
+3
-4
-2 

?Amplituda spektri – bu 
-bu xar xil fizik jarayonlar, jismlar, tarixiy va kundalik xodisalar to‘g‘risidagi ma'lumotdir.
-biror bir fizik jarayonning bir yoki nechta parametlarini xabarga mos ravishta o‘zgarishiga aytiladi.
+signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishi.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal dinamik diapazoni 

?Davriy signallarning spektri to’g’ri ko’rsatilgan qatorni belgilang. 
+amplituda spektri, faza spektri, quvvat spektri.
-kanal orqali xabar uzatilish vaqti,kanal dinamik diapazoni.
 -amplituda spektri, faza spektri.
 -amplituda spektri, chastota spektri, quvvat spektri. 

?Fazalar spektri   bu  
-signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishi.
-signalning garmonik tashkil etuvchilarini quvvatlarini chastota bo‘yicha taqsimlanishi 
+signalning garmonik tashkil etuvchilarini boshlang‘ich fazalarini chastota bo‘yicha taqsimlanishi 
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal dinamik diapazoni. 

?Balansli modulyator qurilmasini amalga oshirishda nimalar kerak bo’ladi?
+2ta bir taktli amplituda modulyatori
-1ta bir taktli amplituda modulyatori
-7ta bir taktli amplituda modulyatori
-4ta bir taktli amplituda modulyatori

?Qaysi turdagi modulyatsiyada birlamchi  analog  xabar (signal)  diskretlash  va  kvantlash  natijasida  raqamli  kodlangan  diskret  xabarga aylantiriladi va har bir takt chizig‘i vaqt oralig‘ida ushbu kodlar kombinatsiyasiga mos keluvchi “1” va “0” elementar signallar ketma ketligi shakllantiriladi? 
-Impuls vaqt modulyatsiyasi
+Impuls  kod  modulyatsiyasi
-Chastota modulyatsiyada
-Amplituda modulyatsiyasida 

?Impulslar  fazasi  modulyatsiyasida…….? 
+uzatilayotgan  xabarga mos  ravishda  impulslarning  holati  takt  chizig‘iga  nisbatan  chapga  yoki  o‘ngga siljiydi
-ularning  takrorlanish  chastotasi    xabarga  mos  ravishda  kattalashadi  va kichiklashadi
-bunda  birlamchi  analog  xabar (signal)  diskretlash  va  kvantlash  natijasida  raqamli  kodlangan  diskret  xabarga aylantiriladi
-“1” va “0” elementar signallar ketma ketligi shakllantiriladi.

?Tizim  turlari?
+Chiziqli tizimlar;   Nochiziqli tizimlar
-Aktiv  Passiv
-diskret, uzluksiz ,chiziqli
-chiziqli va diskret 

?Quvvatning  10 marta kuchsizlanishiga  to‘g‘ri keladigan nisbiy  uzatish satxi  (dB da) 
-minus 3dB
+ minus 10dB
-minus 6dB
-minus 20dB 

?Quvvatning  100 marta kuchsizlanishga  to‘g‘ri keladigan nisbiy  uzatish satxi  (dB da). 
-minus 3dB
-minus 10dB
-minus 6dB
+minus 20dB 

?Quvvatning  1000  marta kuchsizlanishga  to‘g‘ri keladigan nisbiy  uzatish satxi  (Db da). 
-minus 3dB
-minus 10dB
-minus 6dB
+minus 30dB 

?Agar uzatilayotgan  signalning  to‘lqin  uzunligi  quyidagi  qiymatdan  oshmasa  10 m  uzinlikdagi  liniya uzun hisoblanadi. 
+4m
-100m
-1000m
-4000m 

?Uzatilayotgan  signalning  to‘lqin  uzunligi  3 m uzun liniyaning  minimal  uzunligi teng. 
-0,3
-1m
+10m
-3m 

?Uzatilayotgan  signal   chastotasi 20 kGs. Shunga  mos  «uzun» liniyaning  minimal  uzunligini ko‘rsating. 
+30 km
-15km
-0,15 km    
-1,5 km         

?Liniyaning  uzunligi 10m ga teng. Ushbu liniya  «uzun»  hisoblanishi uchun
uzatilayotgan signalning  minimal  chastotasini  ko‘rsating. 
-3mGs
-0,3mGs
-30mGs
+100mGs 

?Amplituda spektri – bu 
-bu xar xil fizik jarayonlar, jismlar, tarixiy va kundalik xodisalar to‘g‘risidagi ma'lumotdir.
-biror bir fizik jarayonning bir yoki nechta parametlarini xabarga mos ravishta o‘zgarishiga aytiladi.
+signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishi.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal dinamik diapazoni.

?Davriy signallarning spektri to’g’ri ko’rsatilgan qatorni belgilang. 
+amplituda spektri, faza spektri, quvvat spektri.
-kanal orqali xabar uzatilish vaqti,kanal dinamik diapazoni.
-amplituda spektri, faza spektri.
-amplituda spektri, chastota spektri, quvvat spektri. 

?Fazalar spektri   bu  
-signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishi.
-signalning garmonik tashkil etuvchilarini quvvatlarini chastota bo‘yicha taqsimlanishi.
+signalning garmonik tashkil etuvchilarini boshlang‘ich fazalarini chastota bo‘yicha taqsimlanishi.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal dinamik diapazoni. 

?Quvvat spektri – 
-signalning garmonik tashkil etuvchilarini boshlang‘ich fazalarini chastota bo‘yicha taqsimlanishi.
+bu signalning garmonik tashkil etuvchilarini quvvatlarini chastota bo‘yicha taqsimlanishi. 
-signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishi.
-biror bir fizik jarayonning bir yoki nechta parametlarini xabarga mos ravishta o‘zgarishiga aytiladi. 

?Nochiziqli elementning grafik yoki jadval shaklida berilgan VAXni analitik (matematik) ifoda bilan almashtirish nima deb ataladi.  
+approksimatsiyalash.
-delta impuls
-furye qatori.
-modulyatsiya 

?Modulyasiya deb  
-Nochiziqli elementning grafik yoki jadval shaklida berilgan VAXni analitik (matematik) ifoda bilan almashtirishga aytiladi. 
+yuqori chastotali garmonik tashuvchi tebranishning biror bir parametirini (amplitudasini, chastotasini, yoki fazasini) past chastotali birlamchi signalning o‘zgarirish qonuniga mos ravishda o‘zgarishiga aytiladi.
-signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishiga aytiladi.
-xabar manbasi va iste'molchi o‘rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to‘plamiga aytiladi. 

?Amplituda modulyasiyasi deb  
-yuqori chastotali garmonik tashuvchi tebranishning biror bir parametirini (amplitudasini, chastotasini, yoki fazasini) past chastotali birlamchi signalning o‘zgarirish qonuniga mos ravishda o‘zgarishiga aytiladi.
+ yuqori chastotali garmonik tashuvchi tebranishning, amplitudasini past chastotali birlamchi signalning o‘zgarish qonuniga mos ravishda o‘zgarishiga aytiladi.
-xabar manbasi va iste'molchi o‘rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to‘plamiga aytiladi.
-Nochiziqli elementning grafik yoki jadval shaklida berilgan VAXni analitik (matematik) ifoda bilan almashtirishga aytiladi. 

?_________ modulyatsiyalovchi signal amplitudasining tashuvchi tebranish amplitudasiga nisbatiga aytiladi. 
-Faza modulyasiyasi
-Amplituda modulyasiyasi
+Modulyatsiya koeffitsienti 

?Spektrida tashuvchisi mavjud bo‘lmagan va faqat ikkita yon tomon polosalaridan iborat bo‘lgan garmonik modulyatsiya turi nima deb ataladi. 
+balansli modulyatsiya 
-amplituda modulyasiyasi
-faza modulyasiyasi
-chastota modulyasiyasi 

?Nodavriy signallarni nimalar tashkil qiladi? 
-yolg’iz, yakka impulslar.
-chastotalar.
-spektrlar.
+impulslar ketma ketligi. 

?………deb yuqori chastotali garmonik tashuvchi tebranishning fazasini past chastotali birlamchi signalning  o’zgarish qonuniga mos ravishda  o’zgarishiga aytiladi. 
-faza modulyatsiyasi
+chastota  modulyatsiyasi
-impuls modulyatsiyasi
-gormonik modulyatsiya 

?Fazasi bo’yicha modulyatsiya qilingan signallarni hosil qilish uchun nimadan  foydalinadi? 
-faza modulyatsiyasidan
-Impulsdan
+chastotadan
-rezonansli kuchaytirgichdan 

?Faza modulyatorini faza modulyatsion xarakteristikasi bu 
-modulyator chiqishidagi tashuvchi tebranishning fazasini siljish kuchlanishini  o'zgarishiga bog'liqligi
-bu axborotni o’zida mujassamlashtirgan ma’lum bir fizik kattalik
-Furye to’g’ri almashtirishning spektrial xarakteristikasi
+ xabar manbai va istemolchi o’rtasidagi xoxlagan ikkita nuqta orasidagi texnik qurilmalar to’plamiga.

?_____ qanday rejimda tebranish konturi xar qanday sozlanganda ham undagi tebranishning chastotasi kirish signalning  chastotasiga teng bo'ladi. 
-Passiv
-Statsionar
+muqobil 
-aktiv 

?Chastota modulyatsiyasi nima?
+yuqori chastotali garmonik tashuvchi tebranishning chastotasini past chasotali birlamchi signallning  o'zgarish qonuniga mos ravishda  o'zgarishiga aytiladi
-yuqori chastotali garmonik tashuvchi tebranishning chastotasini yuqori chasotali birlamchi signallning  o'zgarish qonuniga mos ravishda  o'zgarishiga aytiladi
-tashuvchi chastotasini o’zining o’rta qiymatidan "max" chetlanishiga aytiladi
-tashuvchi chastotasini o’zining o’rta qiymatidan "min" chetlanishiga aytiladi

?Avtogenerator yordamida nima qilish mumkin?
+ Chastota modulyatsiyasini yasash mumkin
-FM signallarni detektorlash
-Faza modulyatsiyasini yasash mumkin
-ChM signallarni detektorlash

?Modulyatsiyaga nisbatan teskari jarayon qaysi?
+ AM signallarni detektorlash
-Demodulyatsiya
-FM signallarni detektorlash
-ChM signallarni detektorlash

?Detektorning kirishidagi signalning amplitudasiga qarab ish rejimlarini ko’rsating?
+Kvadratik va chiziqli detektorlash
-Polasasimon va oddiy detektorlash
-Arrasimon
-Bipolyar va unipolyar

?Amplituda detektorining  xarakteristikasi deb?
+detektorining chiqishidagi tokning qiymatini detektorni kirishiga modulyasiya qilinmagan tashuvchining amplitudasiga bog’liq xarakteristikasiga aytiladi
-detektorning kirishidagi signalning amplitudasiga qarab ish rejimi o’zgarihiga
-yuqori chastotali garmonik tashuvchi tebranishning chastotasini past chasotali birlamchi signallning  o'zgarish qonuniga mos ravishda  o'zgarishiga aytiladi
-parametrlari ( qarshiligi,sig’imi, ichki induktivligi )vaqtga bog’liq bo’lgan elementga aytiladi

?Parametrik element deb?
+ parametrlari ( qarshiligi, sig’imi, ichki induktivligi )vaqtga bog’liq bo’lgan elementga aytiladi
-detektorining chiqishidagi tokning qiymatini detektorni kirishiga modulyasiya qilinmagan tashuvchining amplitudasiga bog’liq xarakteristikasiga aytiladi.
-parametrlari ( qarshiligi,sig’imi, ichki induktivligi )chastotaga bog’liq bo’lgan elementga aytiladi
-parametrlari ( qarshiligi,sig’imi, ichki induktivligi )vaqtga bog’liq bo’lmagan elementga aytiladi

?....…..bu grek tilida bir butun yoki bo’laklardan iborat degan ma’noni beradi.
+Sistema
-Xabar
-Signal
-Ma’lumot

?Kesish burchagi deb?
+nochiziqli elementdan oqib  o’tayotgan tokni  "maksimum"dan "minimum" qiymatgacha o’zgarish davrigi aytiladi
-xabar manbai va istemolchi o’rtasidagi xoxlagan ikkita nuqta orasidagi texnik qurilmalar to’plami
-bu axborotni o’zida mujassamlashtirgan ma’lum bir fizik kattalik
-vaqt bo’yicha diskretlangan signallarga aytiladi

?Uch va besh ordinatalar usuli qachon ishlatiladi?
+ Signal garmonik tebranish bo’lganda  nochiziqli elementning V.A.X si esa grafik ko’rinishda berilganda  ishlatiladi
-Vaqt bo’yicha diskretlangan signallarda
-Laplas almashtirishlarda
-Raqamli signallarda

?Nochiziqli element ishlatilgan nochiziqli zanjirlani xisoblashda qanday usuldan foydalaniladi
+Grafik va analitik usuldan
-Sinxron usuldan
-Vaqt bo’yicha diskretlangan signallar usuldan
-Analitik usuldan

?Elektr aloqa nazariyasida va radiotexnikada qaysi turdagi approksimatsiyalovchi funksiyalar eng ko’p ishlatiladi
+ Darajali polinomlar, bulakli to'g'ri chiziqli approksimatsiya.
-Qatorli  polinomlar, to'g'ri burchakli approksimatsiya.
-Qatorli polinomlar, bulakli to'g'ri chiziqli approksimatsiya.
-Darajali polinomlar, bulakli egri chiziqli approksimatsiya

?Grafik usul qachon ishlatiladi?
+Nochizig’li zanjirga elementar garmonik tebranishlar ta'sir qilgandagina
-Vaqt bo’yicha diskretlangan signallarda
-Laplas almashtirishlarda
-Raqamli signallarda

?Davriy bo’lmagan impulslar spektrini aniqlashda qaysi ifodani qollab bo’lmaydi?
+ Fure qatorlarini
-Laplas  almashtirishlarni
-Polinomlarni
-Analitik usulni

?To’g’ri to’rt burchakli yagona impulsning davomiyligi ikki barabar kengaysa qanday hodisa sodir boladi?
+ Spektr kengligi siqiladi
-O’zgarmaydi
-Kengayadi
-Shaklini o’zgartiradi

?To’g’ri to’rt burchakli yagona impulsning davomiyligi ikki barabar toraysa qanday hodisa sodir boladi?
+Spektr ikki barobar kengayadi
-Shaklini o’zgartiradi
-O’zgarmaydi
-Siqiladi

?……...bu har xil fizik jarayonlar tarifiy hodisalar to’g’risidagi ma’lumotdir
+ Informatsiya
-Signal
-Xabar
-Matn

?Bitta mintaqali AM signallarni xosil qilish usullarini ko’rsating
+ Filtrlash va faza kompensatsiya usullari
-xalqali usuli
-sinxron usuli
-kvadratik usuli

?Quvvat spektri – 
-signalning garmonik tashkil etuvchilarini boshlang‘ich fazalarini chastota bo‘yicha taqsimlanishi.
+ bu signalning garmonik tashkil etuvchilarini quvvatlarini chastota bo‘yicha taqsimlanishi. 
-signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishi.
-biror bir fizik jarayonning bir yoki nechta parametlarini xabarga mos ravishta o‘zgarishiga aytiladi. 

?Delta impuls deb – 
+ amplitudasi cheksizlikka intilgan, impul's kengligi “0” –ga intilgan, yuzasi esa “1” ga teng bo‘lgan matematik impul'sga aytiladi.
-biror bir fizik jarayonning bir yoki nechta parametlarini xabarga mos ravishta o‘zgarishiga aytiladi.
-signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishi.
-amplitudasi cheksizlikka intilgan, impul's kengligi “1” –ga intilgan, yuzasi esa “0” ga teng bo‘lgan matematik impulsga aytiladi. 

?Nochiziqli elementning grafik yoki jadval shaklida berilgan VAXni analitik (matematik) ifoda bilan almashtirish nima deb ataladi.  
+approksimatsiyalash.
-delta impuls
-furye qatori.
-modulyatsiya 

?Modulyasiya deb  
-Nochiziqli elementning grafik yoki jadval shaklida berilgan VAXni analitik (matematik) ifoda bilan almashtirishga aytiladi. 
+yuqori chastotali garmonik tashuvchi tebranishning biror bir parametirini (amplitudasini, chastotasini, yoki fazasini) past chastotali birlamchi signalning o‘zgarirish qonuniga mos ravishda o‘zgarishiga aytiladi.
-signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishiga aytiladi.
-xabar manbasi va iste'molchi o‘rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to‘plamiga aytiladi. 

?Modulyatsiyaning nechta asosiy turi mavjud.
-2
-6
-4
+3 

?Tasodifiy miqdor deb…….. 
+ avvaldan noma'lum bo‘lgan sinash natijasida konkret qiymatga ega bo‘lgan miqdorga aytiladi.
-ma'lum shartlar bajarilganda ro‘y berishi xam ro‘y bermasligi xam mumkin bo‘ladigan xodisaga aytiladi.
-signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishiga aytiladi.
-xabar manbasi va iste'molchi o‘rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to‘plamiga aytiladi. 

?Fluktuasiya – bu………. 
-vaqt va spektri bo‘yicha cheklanmagan ergodik stansionar tasodifiy jarayon.
+biror bir fizik qiymatni o‘zining o‘rta qiymatidan tasodifiy ravishda chetlanishidir.
-avvaldan noma'lum bo‘lgan sinash natijasida konkret qiymatga ega bo‘lgan miqdorga aytiladi.
-signalning garmonik tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishiga aytiladi. 

?Impuls amplitudasi modulyatsiyasi signallar necha xil bo’ladi. 
-4
+2
-3
-5 

?Impulslar fazasi modulyatsiyasida …… 
-uzatilayotgan xabarga mos ravishda impulslar (kengligi) davomiyligi  o‘zgaradi
+uzatilayotgan xabarga mos ravishda impulslarning holati takt chizig‘iga nisbatan chapga yoki o‘ngga siljiydi
-impulslar takrorlanish chastotasi modulyatsiyalovchi xabar amplitudasiga mos ravishda  f (i ) ga o‘zgaradi
-birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli kodlangan diskret xabarga aylantiriladi va har bir takt chizig‘i vaqt oralig‘ida ushbu kodlar kombinatsiyasiga mos keluvchi “1” va “0” elementar signallar ketma ketligi shakllantiriladi. 

?Impuls davomiyligi modulyatsiyasida…… 
+uzatilayotgan xabarga mos ravishda impulslar (kengligi) davomiyligi  o‘zgaradi
-uzatilayotgan xabarga mos ravishda impulslarning holati takt chizig‘iga nisbatan chapga yoki o‘ngga siljiydi
-impulslar takrorlanish chastotasi modulyatsiyalovchi xabar amplitudasiga mos ravishda  f (i ) ga o‘zgaradi
-birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli kodlangan diskret xabarga aylantiriladi va har bir takt chizig‘i vaqt oralig‘ida ushbu kodlar kombinatsiyasiga mos keluvchi “1” va “0” elementar signallar ketma ketligi shakllantiriladi. 

?Impulslar chastotasi modulyatsiyasida….. 
-uzatilayotgan xabarga mos ravishda impulslar (kengligi) davomiyligi  o‘zgaradi
-uzatilayotgan xabarga mos ravishda impulslarning holati takt chizig‘iga nisbatan chapga yoki o‘ngga siljiydi
+impulslar takrorlanish chastotasi modulyatsiyalovchi xabar amplitudasiga mos ravishda  f (i ) ga o‘zgaradi
-birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli kodlangan diskret xabarga aylantiriladi va har bir takt chizig‘i vaqt oralig‘ida ushbu kodlar kombinatsiyasiga mos keluvchi “1” va “0” elementar signallar ketma ketligi shakllantiriladi. 
-uzatilayotgan xabarga mos ravishda impulslarning holati spektr chizig‘iga nisbatan chapga yoki o‘ngga siljiydi

?Impuls kod modulyatsiyasida ……
-uzatilayotgan xabarga mos ravishda impulslar (kengligi) davomiyligi  o‘zgaradi
-uzatilayotgan xabarga mos ravishda impulslarning holati takt chizig‘iga nisbatan chapga yoki o‘ngga siljiydi
-impulslar takrorlanish chastotasi modulyatsiyalovchi xabar amplitudasiga mos ravishda  f (i ) ga o‘zgaradi
+birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli kodlangan diskret xabarga aylantiriladi va har bir takt chizig‘i vaqt oralig‘ida ushbu kodlar kombinatsiyasiga mos keluvchi “1” va “0” elementar signallar ketma ketligi shakllantiriladi. 

?Aloqa kanallari nechta ko’rsatgich bilan baxolanadi 
-4
-6
+3
-2 

?Aloqa kanallarining ko’rsatgichlari to’g’ri berilgan qatorni belgilang berilgan qatorni belgilang.
+kanal orqali xabar uzatilish vaqti,kanal dinamik diapazoni,kanal signal spektrini o’tkazish kengligi.
-kanal orqali xabar uzatilish vaqti, aloqa kanali hajmi
-kanal signal spektrini o’tkazish kengligi, aloqa tizimi.
-aloqa kanali hajmi,kanal dinamik diapazoni 

?Xabarni manbadan xabar iste’molchiga yetkazib berish uchun foydalaniladigan texnik qurilmalar to‘plami nima deb ataladi. 
-aloqa kanali hajmi
+aloqa tizimi
-kanal signal spektrini
-signal spektri. 

?aloqa tizimi bu – 
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal dinamik diapazoni
+xabarni manbadan xabar iste’molchiga yetkazib berish uchun foydalaniladigan texnik qurilmalar to‘plami.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal orqali xabar uzatilish vaqti.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal signal spektrini o’tkazish kengligi. 

?Aloqa kanali deb – 
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal dinamik diapazoniga aytiladi.
+xabar manbasi va iste'molchi o‘rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to‘plamiga aytiladi.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun foydalaniladigan texnik qurilmalar to‘plamiga aytiladi.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal signal spektrini o’tkazish kengligiga aytiladi.

?Signal deb – 
+biror bir fizik jarayonning bir yoki nechta parametlarini xabarga mos ravishta o‘zgarishiga aytiladi.
-bu xar xil fizik jarayonlar, jismlar, tarixiy va kundalik xodisalar to‘g‘risidagi ma'lumotdir.
-xabar manbasi va iste'molchi o‘rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to‘plamiga aytiladi.
-xabarni manbadan xabar iste’molchiga yetkazib berish uchun kanal signal spektrini o’tkazish kengligiga aytiladi. 

?Davriy signallarning spektri necha xil ko’rinishda  bo’ladi.
-5
+3
-4
-2 

?Modulyatsiyaning nechta asosiy turi mavjud. 
-2
-6
-4
+3 

?Modulyatsiyaning turlari to’g’ri ko’rsatilgan qatorni belgilang. 
+AM,ChM,FM
-AM,SM,FM
-AM,FM,DM
-AM,ChM, 

?Xalaqitning turlarini ko’rsating?
+Aditiv xalaqitlar.  Multiplikativ xalaqitlar
-Industrial  xalaqitlar. Ta’sir etmagan xalaqitlar
-Ta’sir etgan va ta’sir etmagan xalaqitlar
-Industrial  xalaqitlar. Multiplikativ xalaqitlar

?Signallarni sinflarga ajratish qanday bo‘ladi?
+ shakli bo’yicha – sodda va murakkab; axborotlashtirilganligi bo’yicha – determinal va tasodifiy; xarakteristikasi bo’yicha – uzluksiz, diskret va raqamli.
-eksponenta va sinusoidal; xarakteristikasi bo’yicha – uzluksiz, diskret va raqamli.
-garmonik  tebranishni  faza  bo‘yicha siljitish; axborotlashtirilganligi bo’yicha – determinal va tasodifiy
signallarni  kvadratga  oshirish  yoki  signalni Logarifmlash; 
-xarakteristikasi bo’yicha – uzluksiz, diskret va raqamli.

?IAM signallar qanday bo‘lishi mumkin:
+birinchi tur IAM I,  ikkinchi tur IAM II
-impulsning takt chizig‘iga nisbatan faqat bir tomonga  – orqa tomonga uzatilayotgan xabar signali amplitudasiga mos ravishda kengayishi;  
-impulsning takt chizig‘iga nisbatan har ikki tomonga uzatliyotgan xabar amplitudasiga mos ravishda  kengayishi
-nochiziqli, vaqt bo’yicha diskretlangan,chiziqli 
-diskret, uzluksiz ,chiziqli

?uzliksiz signalni vaqt bo’yicha diskretlangan signalga aylantirib beradigan qurulma?
+ Diskretizator
-Koder
-Demodulyator
-Kvantlovchi qurilma

?Har qanday radiotexnika qurilmaning  uzatish koeffitsiyenti bilan impuls xarakteristikasi bir   birlari bilan nima orqali bog’langan.
+ Fure almashtirishlar
-Kotelnikov teoremasi
-Laplas almashtirishlari
-Signallar orqali

?Agarda detektorning tarkibida parametrik element ishlatilsa bunday detektor ……. deb ataladi
+ Sinxron detector
-FM detector
-AM detector
-ChM detector

?Sinxron detektorning faza sezgirligi nima?
+sinxron detektorning chiqishidagi xosil bo’lgan past chastotali birlamchi signalning qiymati ? ga bog’liq ya'ni tashuvchining chastotasini va parametrik qarshilikning  o’zgarishi tezligini fazalarni farqiga bog’liq ekanligi
-sinxron detektorning chiqishidagi xosil bo’lgan past chastotali birlamchi signalning qiymati ? ga bog’liq ya'ni tashuvchining amplitudasini va parametrik qarshilikning  o’zgarishi tezligini fazalarni farqiga bog’liq ekanligi
-sinxron detektorning chiqishidagi xosil bo’lgan past chastotali birlamchi signalning qiymati ? ga bog’liq ya'ni tashuvchining chastotasini va parametrik qarshilikning  o’zgarishi tezligini spektor farqiga bog’liq ekanligi
-sinxron detektorning kirishidagi xosil bo’lgan past chastotali birlamchi signalning qiymati ? ga bog’liq ya'ni tashuvchining chastotasini va parametrik qarshilikning  o’zgarishi tezligini fazalarni farqiga bog’liq ekanligi

?Har qanday radiotexnik qurilmaning impuls xarakteristikasi deb
+ radiotexnika qurilmaning kirishiga ?(t0) berilganda chiqishida xosil bo’lgan jovob signaliga radiotexnika qurilmaning impuls xarakteristikasi deyiladi
-garmonik  tebranishni  faza  bo‘yicha siljitishga aytiladi
-impulsning takt chizig‘iga nisbatan faqat bir tomonga  – orqa tomonga  uzatilayotgan xabar signali amplitudasiga mos ravishda kengayishi
-impulsning takt chizig‘iga nisbatan har ikki tomonga uzatliyotgan xabar amplitudasiga mos ravishda  ga kengayishi

?Katelnikov teoremasiga asoslanib spektori cheklangan xar qanday uzluksiz signalni  ……….yoyish mumkin
+ Katelnikov qatoriga
-Laplas to”g’ri almashtirishiga
-Laplas teskari almashtirishiga  
-Fure qatoriga

?Faza deviatsiyasi nima
+ Tashuvchini fazasini  o’zining  o’rta qiymatidan "maksimum" chetlanishi
ChM signalning spektor kengligi  o’zgarmaydi
-Detektorining chiqishidagi tokning qiymatini detektorni kirishiga modulyasiya qilinmagan tashuvchining amplitudasiga bog’liq xarakteristikasiga aytiladi.
-Tashuvchi chastotasini  o’zining   o’rta qiymatidan "max" chetlanishiga aytiladi.

?ChM signalning spektor kengligi  o’zgarmaydi, faqat ____________ o’zgaradi.
+spektral chizig’i soni
-yo’nalishi
-ham yo’nalishi ham chiziqlar soni
-amplituda kengligi

?AM signalni FM signalga aylantirib xam xosil qilishni qaysi usul amalga oshiradi?
+ Aristrong
-Fure
-Laplas
-Barer

?Qanday kontur sozlanmagan kontur deyiladi?
+Konturining rezonans chastotasi ChM signalning tashuvchisini chastotasigga teng bo’lmasa
-Konturining rezonans chastotasi FM signalning tashuvchisini chastotasigga teng bo’lmasa
-Konturining rezonans chastotasi AM signalning tashuvchisini chastotasigga teng bo’lmasa
-Konturining rezonans chastotasi ChM signalning tashuvchisini amplitudasiga teng bo’lmasa

?Analitik usul qay xollarda ishlatiladi?
+Nochiziqli zanjirga murrakab signallar ta'sir etganda ishlatiladi
-Polinomlarda
-Sinxron detektorlarda
-Vaqt bo’yicha diskretlangan signallarda

?Xalqali modulyator sxemasi qanday xosil qilinadi?
+Chiqishida rezistorlar  o’rnatilgan balansli modulyatorning sxemasiga qo’shimcha ikkita diod  ulash orqali
-AM, FM, CHM signallar orqali
-Past chastotali signal orqali
-Filtrlash va faza kompensatsiya qilish orqali

?Past chastotali signallar qanday kengliklarga ega?
+ 1) Telefon signal 300 Gs =3400Gs.
2) Musiqa signal 20 Gs = 20000Gs.
3) Telegraf signal 0 Gs = 200Gs.
4) Video  Televizion signal 50 Gs = 6 MGs.
-1) Telefon signal 240 Gs =3400Gs.
 2) Musiqa signal 2 Gs = 10000Gs.
3) Telegraf signal 70 Gs = 700Gs.
4) Video  Televizion signal 150 Gs = 6 MGs.
-1) Telefon signal 30 Gs =400Gs.
 2) Musiqa signal 10 Gs = 10000Gs.
3) Telegraf signal 0 Gs = 20000Gs.
4) Video  Televizion signal 0Gs = 6 MGs
-1) Telefon signal 380 Gs =3800Gs.
 2) Musiqa signal 100 Gs = 2000Gs.
3) Telegraf signal 10 Gs = 200Gs.
4) Video  Televizion signal 5M Gs = 600 MGs

?Elektr aloqa kabellarining parametrlari
+Qarshiligi, induktivligi, sig’im va xalaqitlar
-Tok kuchi, kuchlanish
-Chastota, xalaqitlar
-AM, FM, CHM

?Amplituda modulyatsiyasi deb nimaga aytiladi?
+yuqori chastotali garmonik tashuvchi tebranishning , amplitudasining  o’zgarish qonuniga mos ravishda o’zgarishiga aytiladi.
-signal garmonik tebranish bo’lganda  nochiziqli elementning V.A.X si esa grafik ko’rinishda berilganda  ishlatiladi
-yuqori chastotali garmonik tashuvchi tebranishning chastotasini past chasotali birlamchi signallning  o'zgarish qonuniga mos ravishda  o'zgarishiga aytiladi
-vaqt bo’yicha diskretlangan signallarga aytiladi

?Uzluksiz modulyatsiya turlari?
+  AM,FM,CHM
-Sinxron M
-Ortoganal M
-To’gri burchakli M

?Kesma burchak  usuli qachon ishlatiladi?
+ Nochiziqli elementnig V.A.X si darajali polinom yordamida approksimatsiya qilinganda ishlatiladi
-CHiziqli elementnig V.A.X si darajali polinom yordamida approksimatsiya qilinganda ishlatiladi
-Nochiziqli elementnig V.A.X si sinxron polinom yordamida approksimatsiya qilinganda ishlatiladi
-Nochiziqli elementnig V.A.X si Laplas yordamida approksimatsiya qilinganda ishlatiladi

?……………… uch koordinata tekisligi yordamida aniqlaymiz.
+Nochiziqli elementdan oqib o’tuvchi tokni
-Vaqt bo’yicha diskretlangan signallarni
-AM bo’yicha diskretlangan signallarni
-FM bo’yicha diskretlangan signallarni

?Signal turlari?
+1.Uzluksiz signal. 2.Vaqt bo’yicha diskretlangan signal. 3.Sath bo’yicha diskretlangan signal. 4.Vaqt va sath bo’yicha diskretlangan signal.
-1.Aloqa signali. 2.Vaqt bo’yicha diskretlangan signal. 3.Sath bo’yicha diskretlangan signal.
-1.Ortoganal signallar. 2.Uzluksiz signal. 3.Vaqt bo’yicha diskretlangan signal. 4.Sath bo’yicha diskretlangan signal.
-Vaqt bo’yicha diskretlangan signallar

?…………..deb  biror  bir  fizik  jarayonning  bir  yoki  bir  nechta  parametrini xabarga mos ravishda o‘zgarishiga aytiladi
+ Signal
-Xabar
-Informatsiya
-Xodisa

?Aloqa sistemasi nima?
-Vaqt bo’yicha diskretlangan signallar
+ Ikkita kanalni bir biriga bog’lanishi
-Uzluksiz signallar yig’indisi
-Sath bo’yicha diskretlangan signallar

?Oldingi  misoldagi  rasmlardan  moslangan rejimdagi  isrofsiz liniya orqali  signal  o‘tishini ko‘rsating. 
-2
-3
+1
-4 

?Oldingi  misoldagi  rasmlardan  moslama rejimdagi  isrofsiz liniya orqali  signal  o‘tishini ko‘rsating. 
-2
-1
+3 va 4
-3

?Aloqa kanallari nechta ko’rsatgich bilan baxolanadi
-4
-6
+3
-2 

?Tasodifiy miqdorlar nechta katta sinflarga bo‘linadi. 
-3
-4
+2
-5 

? Tasodifiy miqdorlar nechta kattaniga bo'linadi?
+ 3
- 4
- 2
- 5

? Aloqa kanallarining ko'rsatgichlari to'g'ri berilgan qatorni belgilang.
+ Kanal orqalig'i xabar uzatilish vaqti, kanal dinamik diapazoni, kanal signal spektri o'tkazish kengligi.
- Kanal orqalig'i xabar uzatilish vaqti, aloqa kanali hajmi
- Kanal signal spektri o'tkazish kengligi, aloqa tizimi
- Aloqa kanali hajmi, kanal dinamik diapazoni

? Aloqa kanali deb –
+ Xabar nima bundan xabar iste'molchiga yetkazib berish uchun kanal dinamik diapazoniga aytiladi.
- Xabar nima bundan xabar iste'molchi o'rtasidagi xohlagan ikki nuqta orasidagi texnik qurilmalar to'plamiga aytiladi.
- Xabar nima bundan xabar iste'molchiga yetkazib berish uchun foydalaniladigan texnik qurilmalar to'plamiga aytiladi.
- Xabar nima bundan xabar iste'molchiga yetkazib berish uchun kanal signal spektri o'tkazish kengligiga aytiladi.

? Davriy signalarning spektri nechaxil ko'rinishda bo'ladi?
+ 5
- 3
- 4
- 2

? Amplituda spektri – bu
+ Signalning garmoniktashkiletuvchilarini amplitudalarini chastota bo'yicha taqsimlanishi.
- Bu har xil fizik jarayonlar, jismlar, tarixiy va kundalik hodisalar to'g'risidagi ma'lumotdir.
- Biror bir fizik jarayonning bir yoki nechtaparametlarini xabar gamos ravishtao'zgarishiga aytiladi.
- Xabar nima bundan xabar iste'molchiga yetkazib berish uchun kanal dinamik diapazoniga aytiladi.

? Davriy signalarning spektri to'g'ri ko'rsatilgan qatorni belgilang.
+ Amplituda spektri, faza spektri, quvvat spektri.
- Kanal orqalig'i xabar uzatilish vaqti, kanal dinamik diapazoni.
- Amplituda spektri, faza spektri.
- Amplituda spektri, chastota spektri, quvvat spektri.

? Faza spektri bu
+ Signalning garmoniktashkiletuvchilarini boshlang'ich fazalarini chastota bo'yicha taqsimlanishi.
- Signalning garmoniktashkiletuvchilarini amplitudalarini chastota bo'yicha taqsimlanishi.
- Signalning garmoniktashkiletuvchilarini quvvatlarini chastota bo'yicha taqsimlanishi.
- Xabar nima bundan xabar iste'molchiga yetkazib berish uchun kanal dinamik diapazoniga aytiladi.

? Quvvat spektri –
+ Bu signalning garmoniktashkiletuvchilarini quvvatlarini chastota bo'yicha taqsimlanishi.
- Signalning garmoniktashkiletuvchilarini amplitudalarini chastota bo'yicha taqsimlanishi.
- Biror bir fizik jarayonning bir yoki nechtaparametlarini xabar gamos ravishtao'zgarishiga aytiladi.
- Amplituda sicheksizlikka intilgan, impul's kengligi "1"–ga intilgan, yuzasi esa "0"ga teng bo'lgan matematik impulsga aytiladi.

? Delta impuls deb –
+ Amplituda sicheksizlikka intilgan, impul's kengligi “0”–ga intilgan, yuzasi esa “1”ga teng bo'lgan matematik impulsga aytiladi.
- Biror bir fizik jarayonning bir yoki nechtaparametlarini xabar gamos ravishtao'zgarishiga aytiladi.
- Signalning garmoniktashkiletuvchilarini amplitudalarini chastota bo'yicha taqsimlanishi.
- Amplituda sicheksizlikka intilgan, impul's kengligi “1”–ga intilgan, yuzasi esa “0”ga teng bo'lgan matematik impulsga aytiladi.

? Nochiziqli elementning grafik yoki jadval shaklida berilgan VAX ni analitik (matematik) ifodaga almashtirish nima deb ataladi?
+ Approksimatsiyalash.
- Delta impuls.
- Furye qatori.
- Modulyatsiya.

? Modulyatsiya deb –
+ Yuqori chastotaligarmoniktashuvchitebranishning biror bir parametrini (amplitudasini, chastotasini, yoki fazasini) past chastotalibirlamchi signalning o'zgarish qonuniga mos ravishda o'zgarishiga aytiladi.
- Nochiziqli elementning grafik yoki jadval shaklida berilgan VAX ni analitik (matematik) ifodaga almashtirishga aytiladi.
- Signalning garmoniktashkiletuvchilarini amplitudalarini chastota bo'yicha taqsimlanishiga aytiladi.
- Xabar nima bundan xabar iste'molchiga yetkazib berish uchun kanal dinamik diapazoniga aytiladi.

? Modulyatsiyaning nechta asosiy turi mavjud?
+ 2
- 6
- 4
- 3

? Tasodifiy miqdor deb……
+ Avvaldan noma'lum bo'lgan sinash natijasida konkret qiymatga ega bo'lgan miqdorga aytiladi.
- Ma'lum shartlar bajarilganda ro'y berishi ham ro'y bermasligi ham mumkin bo'ladigan hodisaga aytiladi.
- Signalning garmoniktashkiletuvchilarini amplitudalarini chastota bo'yicha taqsimlanishiga aytiladi.
- Xabar nima bundan xabar iste'molchiga yetkazib berish uchun kanal dinamik diapazoniga aytiladi.

? Fluktuasiya–bu……
+ Vaqt va spektr bo'yicha cheklanmagan ergodik stansionar tasodifiy jarayon.
- Biror bir fizik qiymatni o'zining o'rtacha qiymatidan tasodifiy ravishda chetlanishidir.
- Avvaldan noma'lum bo'lgan sinash natijasida konkret qiymatga ega bo'lgan miqdorga aytiladi.
- Signalning garmoniktashkiletuvchilarini amplitudalarini chastota bo'yicha taqsimlanishiga aytiladi.

? Impuls amplitudasi modulyatsiyasi signalar necha xil bo'ladi?
+ 4
- 2
- 3
- 5

? Impulslar fazasi modulyatsiyasida……
+ Uzatilayotgan xabar gamosravishda impulslar (kengligi) davomiyligi o'zgaradi.
- Uzatilayotgan xabar gamosravishda impulslarning holati takchizig'iga isbatanchapga yoki o'ngga siljiydi.
- Impulslartakrorlanish chastotasi modulyatsiyalovchi xabar amplitudasi gamosravish da'vi o'zgaradi.
- Birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli odlangan diskret xabarga aylantiriladi va har bir takchizig'ivaqtoralig'ida ushbu kodlar kombinatsiyasi orqali "1" va "0" elementar signallar yaratmaketligi shakllantiriladi.

? Impuls davomiyligi modulyatsiyasida……
+ Uzatilayotgan xabar gamosravishda impulslar (kengligi) davomiyligi o'zgaradi.
- Uzatilayotgan xabar gamosravishda impulslarning holati takchizig'iga isbatanchapga yoki o'ngga siljiydi.
- Impulslartakrorlanish chastotasi modulyatsiyalovchi xabar amplitudasi gamosravish da'vi o'zgaradi.
- Birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli odlangan diskret xabarga aylantiriladi va har bir takchizig'ivaqtoralig'ida ushbu kodlar kombinatsiyasi orqali "1" va "0" elementar signallar yaratmaketligi shakllantiriladi.

? Impulslar chastotasi modulyatsiyasida…..
+ Uzatilayotgan xabar gamosravishda impulslar (kengligi) davomiyligi o'zgaradi.
- Uzatilayotgan xabar gamosravishda impulslarning holati takchizig'iga isbatanchapga yoki o'ngga siljiydi.
- Impulslartakrorlanish chastotasi modulyatsiyalovchi xabar amplitudasi gamosravish da'vi o'zgaradi.
- Birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli odlangan diskret xabarga aylantiriladi va har bir takchizig'ivaqtoralig'ida ushbu kodlar kombinatsiyasi orqali "1" va "0" elementar signallar yaratmaketligi shakllantiriladi.

? Impuls kod modulyatsiyasida……
+ Uzatilayotgan xabar gamosravishda impulslar (kengligi) davomiyligi o'zgaradi.
- Uzatilayotgan xabar gamosravishda impulslarning holati takchizig'iga isbatanchapga yoki o'ngga siljiydi.
- Impulslartakrorlanish chastotasi modulyatsiyalovchi xabar amplitudasi gamosravish da'vi o'zgaradi.
- Birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli odlangan diskret xabarga aylantiriladi va har bir takchizig'ivaqtoralig'ida ushbu kodlar kombinatsiyasi orqali "1" va "0" elementar signallar yaratmaketligi shakllantiriladi.

? Aloqa kanallari nechtako'rsatgich bilan baholanadi?
+ 4
- 6
- 3
- 2

? Qaysi turdagi modulyatsiyada birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli odlangan diskret xabarga aylantiriladi va har bir takchizig'ivaqtoralig'ida ushbu kodlar kombinatsiyasi orqali "1" va "0" elementar signallar yaratmaketligi shakllantiriladi?
+ Impuls kod modulyatsiyasi
- Impuls vaqt modulyatsiyasi
- Chastota modulyatsiyada
- Amplituda modulyatsiyasida

? Impulslar fazasi modulyatsiyasida…….
+ Uzatilayotgan xabar gamosravishda impulslarning holati takchizig'iga isbatanchapga yoki o'ngga siljiydi.
- Ularning takrorlanish chastotasi xabar gamosravishda kattalashadi va kichiklashadi.
- Bunda birlamchi analog xabar (signal) diskretlash va kvantlash natijasida raqamli odlangan diskret xabarga aylantiriladi.
- "1" va "0" elementar signallar yaratmaketligi shakllantiriladi.

? Tizim turlari?
+ Chiziqli tizimlar; Nochiziqli tizimlar
- Aktiv Passiv
- Diskret, uzluksiz, chiziqli
- Chiziqli va diskret

? Quvvatning 10 marta kuchsizlanishi ga to'g'ri keladigan nisbiy uzatish satxi (dB da)
+ Minus 10 dB
- Minus 3 dB
- Minus 6 dB
- Minus 20 dB

? Quvvatning 100 martalik kuchsizlanishga to'g'ri keladigan nisbi uzatish sathi (dB da).
+ minus20dB
- minus3dB
- minus10dB
- minus6dB

? Quvvatning 1000 martalik kuchsizlanishga to'g'ri keladigan nisbi uzatish sathi (dB da).
+ minus30dB
- minus3dB
- minus10dB
- minus6dB

? Agar uzatilayotgan signalning to'lqin uzunligi quyidagi qiymatdan oshmasa, 10 m uzunlikdagi liniya "uzun" hisoblanadi.
+ 1000m
- 4m
- 100m
- 4000m

? Uzatilayotgan signalning to'lqin uzunligi 3 m uzunlikni, yaning minimal uzunligi teng.
+ 3m
- 0,3
- 1m
- 10m

? Uzatilayotgan signal chastotasi 20 kGs. Shunga mos "uzun" liniyaning minimal uzunligini ko'rsating.
+ 30km
- 15km
- 0,15km
- 1,5km

? Liniyaning uzunligi 10 m ga teng. Ushbu liniya "uzun" hisoblanishi uchun uzatilayotgan signalning minimal chastotasini ko'rsating.
+ 0,3mGs
- 3mGs
- 30mGs
- 100mGs

? Aloqa kanallarining ko'rsatgichlari to'g'ri berilgan qatorni belgilang.
+ kanal orqalig'i xabar uzatilish vaqti, kanal dinamik diapazoni, kanal signal spektri o'tkazish kengligi.
- kanal orqalig'i xabar uzatilish vaqti, aloqa kanali hajmi
- kanal signal spektri o'tkazish kengligi, aloqa tizimi
- aloqa kanali hajmi, kanal dinamik diapazoni

? Xabarnomaning badan xabar iste'molchiga yetkazib berish uchun foydalaniladigan texnik qurilmalar to'plami nima deb ataladi.
+ aloqa kanali hajmi
- aloqa tizimi
- kanal signal spektri
- signalspektri

? Aloqa tizimi bu –
+ xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal dinamik diapazoniga
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun foydalaniladigan texnik qurilmalar to'plamiga
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal orqalig'i xabar uzatilish vaqti
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal signal spektri o'tkazish kengligiga

? Aloqa kanali deb –
+ xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal dinamik diapazoniga aytiladi.
- xabarman basivaiste'molchi o'rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to'plamiga aytiladi.
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun foydalaniladigan texnik qurilmalar to'plamiga aytiladi.
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal signal spektri o'tkazish kengligiga aytiladi.

? Signal deb –
+ biror bir fizik jarayonning bir yoki nechtal parametlarini xabar gamosravishtao'zgarishiga aytiladi.
- buxarxil fizik jarayonlar, jismlar, tarixiy va kundalik xodisalar to'g'risidagi ma'lumotdir.
- xabarman basivaiste'molchi o'rtasidagi xohlagan ikkita nuqta orasidagi texnik qurilmalar to'plamiga aytiladi.
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal signal spektri o'tkazish kengligiga aytiladi.

? Davriy signallarning spektri necha xil ko'rinishda bo'ladi.
+ 2
- 5
- 3
- 4

? Modulyatsiyaning necha asosiy turi mavjud.
+ 3
- 2
- 4
- 6

? Modulyatsiyaning turlari to'g'ri ko'rsatilgan qatorni belgilang.
+ AM, ChM, FM
- AM, SM, FM
- AM, FM, DM
- AM, ChM

? Amplituda spektri – bu
+ signalning garmonika tashkil etuvchilarini amplitudalarini chastota bo'yicha taqsimlanishi.
- buxarxil fizik jarayonlar, jismlar, tarixiy va kundalik xodisalar to'g'risidagi ma'lumotdir.
- biror bir fizik jarayonning bir yoki nechtal parametlarini xabar gamosravishtao'zgarishiga aytiladi.
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal dinamik diapazoniga.

? Davriy signallarning spektri to'g'ri ko'rsatilgan qatorni belgilang.
+ amplituda spektri, faza spektri, quvvat spektri.
- kanal orqalig'i xabar uzatilish vaqti, kanal dinamik diapazoni.
- amplituda spektri, faza spektri.
- amplituda spektri, chastota spektri, quvvat spektri.

? Faza spektri bu
+ signalning garmonika tashkil etuvchilarini boshlang'ich fazalarini chastota bo'yicha taqsimlanishi.
- signalning garmonika tashkil etuvchilarini amplitudalarini chastota bo'yicha taqsimlanishi.
- signalning garmonika tashkil etuvchilarini quvvatlarini chastota bo'yicha taqsimlanishi.
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal dinamik diapazoniga.

? Quvvat spektri –
+ bu signalning garmonika tashkil etuvchilarini quvvatlarini chastota bo'yicha taqsimlanishi.
- signalning garmonika tashkil etuvchilarini amplitudalarini chastota bo'yicha taqsimlanishi.
- signalning garmonika tashkil etuvchilarini boshlang'ich fazalarini chastota bo'yicha taqsimlanishi.
- biror bir fizik jarayonning bir yoki nechtal parametlarini xabar gamosravishtao'zgarishiga aytiladi.

? Nochiziqli elementning grafik yoki jadval shaklida berilgan VAX ni analitik (matematik) ifodaga almashtirish nima deb ataladi.
+ approksimatsiyalash
- delta impuls
- furye qatori
- modulyatsiya

? Modulyatsiya deb
+ Nochiziqli elementning grafik yoki jadval shaklida berilgan VAX ni analitik (matematik) ifodaga almashtirishga aytiladi.
- yuqori chastotaligarmoniktashuvchitebranishning biror bir parametirini (amplitudasini, chastotasini, yoki fazasini) past chastotalibirlama signalning o‘zgarish qonuniga mos ravishda o‘zgarishiga aytiladi.
- signalning garmonika tashkil etuvchilarini amplitudalarini chastota bo‘yicha taqsimlanishiga aytiladi.
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal orqalig'i xabar uzatilish vaqti.

? Amplituda modulyatsiyasi deb
+ yuqori chastotaligarmoniktashuvchitebranishning, amplitudasini past chastotalibirlama signalning o‘zgarish qonuniga mos ravishda o‘zgarishiga aytiladi.
- yuqori chastotaligarmoniktashuvchitebranishning biror bir parametirini (amplitudasini, chastotasini, yoki fazasini) past chastotalibirlama signalning o‘zgarish qonuniga mos ravishda o‘zgarishiga aytiladi.
- xabarnomaning badan xabar iste'molchiga yetkazib berish uchun kanal orqalig'i xabar uzatilish vaqti.
- Nochiziqli elementning grafik yoki jadval shaklida berilgan VAX ni analitik (matematik) ifodaga almashtirishga aytiladi.

? _________ modulyatsiyalovchi signal amplitudasining tashuvchi tebranish amplitudasiga nisbati aytiladi.
+ Amplituda modulyatsiyasi
- Fazamodulyatsiyasi
- Modulyatsiya koeffitsienti

? Spektrida tashuvchisi mavjud bo‘lmagan va faqat ikkita yon tomon polosalaridan iborat bo‘lgan garmonika modulyatsiya turi nima deb ataladi.
+ balansli modulyatsiya
- amplituda modulyatsiyasi
- faza modulyatsiyasi
- chastota modulyatsiyasi

? Nodavriysignallarning minimal tashkil qiladi?
+ yolg‘iz, yakka impulslar.
- chastotalar.
- spektrlar.
- impulslar, reklama maketi.

? ………… deb yuqori chastotaligarmoniktashuvchitebranishning fazasini past chastotalibirlama signalning o‘zgarish qonuniga mos ravishda o‘zgarishiga aytiladi.
+ faza modulyatsiyasi
- chastota modulyatsiyasi
- impuls modulyatsiyasi
- garmonik modulyatsiya

? Faza bo‘yicha modulyatsiya qilingan signalni hosil qilish uchun nima dan foydalaniladi?
+ faza modulyatsiyasidan
- impulsdan
- chastotadan
- rezonanslik kuchaytirgichdan

? Faza modulyatori ni faza modulyatsion xarakteristikasibu
+ modulyator chiqishidagi tashuvchitebranishning fazasini siljish kuchlanishini o'zgarishiga bog'liqligi, bu axborotni o'zida mujassamlashtirgan ma'lum bir fizik kattalik.
- Furye to‘g‘ri almashtirishning spektrial xarakteristikasi
- xabarnoma va iste'molchi o'rtasidagi xohlagan ikki nuqta orasidagi texnik qurilmalar to‘plami.

? _____ qanday rejimda tebranish konturi xarqanday sozlangan va hamundaqi tebranishning chastotasi kirish signalning chastotasi ga teng bo'ladi.
+ Passiv
- Statsionar
- muqobil
- aktiv

? Signallarga ishlov beruvchi tizimlar matematik tavsiflashga qaysi turlarga bo'linadi?
+ chiziqli, nochiziqli, diskret
- uzluksiz, diskret, chiziqli
- nochiziqli, vaqt bo‘yicha diskretlangan, chiziqli
- diskret, uzluksiz, chiziqli

? ….. deb xabarnoma va iste'molchi o'rtasidagi xohlagan ikki nuqta orasidagi texnik qurilmalar to'plamiga aytiladi.
+ axborot uzatish
- signal
- telefoniya
- aloqa kanali

? Xalaqitning turlarini ko‘rsating?
+ Aditiv xalaqitlar. Multiplikativ xalaqitlar
- Industrial xalaqitlar. Ta’sir etmagan xalaqitlar
- Ta’sir etgan va ta’sir etmagan xalaqitlar
- Industrial xalaqitlar. Multiplikativ xalaqitlar

? Signallarning inflarga ajratish qanday bo‘ladi?
+ shakli bo‘yicha – soddav va murakkab; axborotlashtirilganligi bo‘yicha – determinall va sodifiy; xarakteristikasi bo‘yicha – uzluksiz, diskret va raqamli
- eksponenta va sinusoidal; xarakteristikasi bo‘yicha – uzluksiz, diskret va raqamli
- garmoniktebranishni faza bo‘yicha siljitish; axborotlashtirilganligi bo‘yicha – determinall va sodifiy
- xarakteristikasi bo‘yicha – uzluksiz, diskret va raqamli

? IAM signallar qanday bo‘lishi mumkin:
+ birinchi tur IAM I, ikkinchi tur IAM II
- impulsning takt chizig‘iga nisbatan faqat bir tomoniga – orqa tomoniga uzatilayotgan xabar signalining amplitudasi mos ravishda kengayishi
- impulsning takt chizig‘iga nisbatan har ikki tomoniga uzatilayotgan xabar amplitudasi mos ravishda kengayishi
- nochiziqli, vaqt bo‘yicha diskretlangan, chiziqli
- diskret, uzluksiz, chiziqli

? Uzluksiz signalni vaqt bo‘yicha diskretlangan signalga aylantirib beradigan qurilma?
+ Diskretizator
- Koder
- Demodulyator
- Kvantlovchi qurilma

? Har qanday radio texnika qurilmaning uzatish koeffitsiyenti bilan impuls xarakteristikasini bir-birlari bilan nima orqali bog‘langan?
+ Furye almashtirishlar
- Kotelnikov teoremasi
- Laplas almashtirishlari
- Signallar orqali

? Agar detektorning tarkibida parametrik element ishlatilsa, bunday detektor …… deb ataladi.
+ Sinxron detektor
- FM detektor
- AM detektor
- ChM detektor

? Har qanday radio texnik qurilmaning impuls xarakteristikasi deb
+ radio texnika qurilmaning kirishiga (t0) berilganda chiqishida hosil bo‘lgan jovoob signaliga radio texnika qurilmaning impuls xarakteristikasiga deyiladi
- garmoniktebranishni faza bo‘yicha siljitishga aytiladi
- impulsning takt chizig‘iga nisbatan faqat bir tomoniga – orqa tomoniga uzatilayotgan xabar signalining amplitudasi mos ravishda kengayishi
- impulsning takt chizig‘iga nisbatan har ikki tomoniga uzatilayotgan xabar amplitudasi mos ravishda kengayishi

? Kotelnikov teoremasiga asoslanib spektri cheklangan har qanday uzluksiz signalni ………. yoyish mumkin.
+ Kotelnikov qatoriga
- Laplas to‘g‘ri almashtirishiga
- Laplas eskariy almashtirishiga
- Furye qatoriga

? Faza deviatsiyasi nima?
+ Tashuvchining fazasini o‘zining o‘rta qiymatidan "maksimum" chetlanishi. ChM signalning spektri kengligi o‘zgarmaydi
- Detektorining chiqishidagi tokning qiymatini detektornik kirishiga modulyatsiya qilingan tashuvchining amplitudasi ga bog‘liq xarakteristikaga aytiladi.
- Tashuvchi chastotasini o‘zining o‘rta qiymatidan "max" chetlanishiga aytiladi.

? ChM signalning spektri kengligi o‘zgarmaydi, faqat __________ o‘zgaradi.
+ spektral chizig‘i soni
- yo‘nalishi
- ham yo‘nalishi ham chiziqlar soni
- amplituda kengligi

? AM signalni FM signalga aylantirib ham hosil qilishni qaysi usul amalga oshiradi?
+ Aristrong
- Furye
- Laplas
- Barer

? Qanday kontur sozlanmagan kontur deyiladi?
+ Konturining rezonans chastotasi ChM signalning tashuvchisi ni chastotasiga teng bo‘lmasa
- Konturining rezonans chastotasi FM signalning tashuvchisi ni chastotasiga teng bo‘lmasa
- Konturining rezonans chastotasi AM signalning tashuvchisi ni chastotasiga teng bo‘lmasa
- Konturining rezonans chastotasi ChM signalning tashuvchisi ni amplitudasi ga teng bo‘lmasa

? Analitik usul qaysi hollarda ishlatiladi?
+ Nochiziqli zanjirga murakkab signallar tasir etganda ishlatiladi
- Polinomlarda
- Sinxron detektorlarda
- Vaqt bo‘yicha diskretlangan signallarda

? Chastota modulyatsiyasi nima?
+ yuqori chastotali garmoniktashuvchi tebranishning chastotasini past chastotali birlamchi signalning o‘zgarish qonuni bilan mos ravishda o‘zgarishiga aytiladi
- yuqori chastotali garmoniktashuvchi tebranishning chastotasini yuqori chastotali birlamchi signalning o‘zgarish qonuni bilan mos ravishda o‘zgarishiga aytiladi
- tashuvchichastotasi o‘zining o‘rta qiymatidan "max" chetlanishiga aytiladi
- tashuvchichastotasi o‘zining o‘rta qiymatidan "min" chetlanishiga aytiladi

? Avtogenerator yordamida nima qilish mumkin?
+ Chastota modulyatsiyasini yasash mumkin
- FM signallarni detektorlash
- Faza modulyatsiyasini yasash mumkin
- ChM signallarni detektorlash

? Modulyatsiyaga nisbatan teskarijarayon qaysi?
+ AM signallarni detektorlash
- Demodulyatsiya
- FM signallarni detektorlash
- ChM signallarni detektorlash

? Detektorning kirishidagi signalning amplitudasiga qarab ish rejimlarini ko‘rsating?
+ Kvadratik va chiziqli detektorlash
- Polosasimon va oddiy detektorlash
- Arrasimon
- Bipolyar va unipolyar

? Amplituda detektorining xarakteristikasi deb?
+ detektorining chiqishidagi tokning qiymatini detektornik kirishiga modulyatsiya qilingan tashuvchining amplitudasiga bog‘liq xarakteristikaga aytiladi
- detektorning kirishidagi signalning amplitudasiga qarab ish rejimi o‘zgarishiga
- yuqori chastotali garmoniktashuvchi tebranishning chastotasini past chastotali birlamchi signalning o‘zgarish qonuni bilan mos ravishda o‘zgarishiga aytiladi
- parametrlar (qarshiligi, sig‘imi, ichki induktivligi) vaqtga bog‘liq bo‘lgan elementga aytiladi

? Parametrik element deb?
+ parametrlar (qarshiligi, sig‘imi, ichki induktivligi) vaqtga bog‘liq bo‘lgan elementga aytiladi
- detektorining chiqishidagi tokning qiymatini detektornik kirishiga modulyatsiya qilingan tashuvchining amplitudasiga bog‘liq xarakteristikaga aytiladi.
- parametrlar (qarshiligi, sig‘imi, ichki induktivligi) chastotaga bog‘liq bo‘lgan elementga aytiladi
- parametrlar (qarshiligi, sig‘imi, ichki induktivligi) vaqtga bog‘liq bo‘lmagan elementga aytiladi

? ....….. bug‘rektilida bir butun yoki bo‘laklardan iborat degan ma’no ni beradi.
+ Sistema
- Xabar
- Signal
- Ma’lumot

? Sinxron detektorning faza sezgirligi nima?
+ sinxron detektorning chiqishidagi hosil bo‘lgan past chastotali birlamchi signalning qiymati ga bog‘liq ya'ni tashuvchining chastotasini va parametrik qarshilikning o‘zgarish tezligining fazalarini farqi ga bog‘liq ekanligi
- sinxron detektorning chiqishidagi hosil bo‘lgan past chastotali birlamchi signalning qiymati ga bog‘liq ya'ni tashuvchining amplitudasini va parametrik qarshilikning o‘zgarish tezligining fazalarini farqi ga bog‘liq ekanligi
- sinxron detektorning chiqishidagi hosil bo‘lgan past chastotali birlamchi signalning qiymati ga bog‘liq ya'ni tashuvchining chastotasini va parametrik qarshilikning o‘zgarish tezligining spektral farqi ga bog‘liq ekanligi
- sinxron detektorning kirishidagi hosil bo‘lgan past chastotali birlamchi signalning qiymati ga bog‘liq ya'ni tashuvchining chastotasini va parametrik qarshilikning o‘zgarish tezligining fazalarini farqi ga bog‘liq ekanligi

? Balansli modulyator qurilmasini amalga oshirishdan nima kerak bo‘ladi?
+ 2 tabiiy taktli amplituda modulyatori
- 1 tabiiy taktli amplituda modulyatori
- 7 tabiiy taktli amplituda modulyatori
- 4 tabiiy taktli amplituda modulyatori

? Ideal ko‘paytiruvchi qurilma sifatida ishlatiladigan modulyator
+ Xalqali modulyator
- Sinxron modulyator
- Kvadratik modulyator
- Unipolyar modulyator

? Bitta minutda qali AM signallarni xosil qilish usullarini ko‘rsating
+ Filtrlash va zarar kompensatsiya usullari
- Xalqali usuli
- Sinxron usuli
- Kvadratik usuli

? Xalqali modulyator sxemasi qanday hosil qilinadi?
+ Chiqishida rezistorlar o‘rnatilgan balansli modulyatorning sxemasiga qo‘shimcha ikki ta diodulash orqali
- AM, FM, CHM signallari orqali
- Past chastotali signal orqali
- Filtrlash va zarar kompensatsiya qilish orqali

? Pastchastotalisignallar qanday kengliklarga ega?
+ 1) Telefonsignal 300 Hz = 3400 Hz.
- 1) Telefonsignal 240 Hz = 3400 Hz.
- 1) Telefonsignal 30 Hz = 400 Hz.
- 1) Telefonsignal 380 Hz = 3800 Hz.

? Elektraloqa kabellarining parametrlari
+ Qarshiligi, induktivligi, sig'im va xalaqitlar.
- Tok kuchi, kuchlanish.
- Chastota, xalaqitlar.
- AM, FM, CHM.

? Amplituda modulyatsiyasida nima ga aytiladi?
+ Yuqori chastotaligarmoniktashuvchitebranishning, amplitudasining o'zgarish qonuniga mos ravishda o'zgarishiga aytiladi.
- Signal garmoniktebranish bo'lganda nochiziqli elementning V.A.X si esa grafik ko'rinishda berilganda ishlatiladi.
- Yuqori chastotaligarmoniktashuvchitebranishning chastotasini past chastotalibirlamchi signallning o'zgarish qonuniga mos ravishda o'zgarishiga aytiladi.
- Vaqt bo'yicha diskretlangan signallarga aytiladi.

? Uzluksiz modulyatsiya turlari?
+ AM, FM, CHM.
- Sinxron M.
- Ortogonal M.
- To'g'ri burchakli M.

? Kesmaburchakusuli qachon ishlatiladi?
+ Nochiziqli elementning V.A.X si da raja lapolynomial yordamida approksimatsiya qilinanda ishlatiladi.
- Chiziqli elementning V.A.X si da raja lapolynomial yordamida approksimatsiya qilinanda ishlatiladi.
- Nochiziqli elementning V.A.X si sinxron polynomial yordamida approksimatsiya qilinanda ishlatiladi.
- Nochiziqli elementning V.A.X si Laplas yordamida approksimatsiya qilinanda ishlatiladi.

? ……………… uch koordinata tekisligi yordamida aniqlaymiz.
+ Nochiziqli elementdan oqib o'tuvchi tokni.
- Vaqt bo'yicha diskretlangan signallarni.
- AM bo'yicha diskretlangan signallarni.
- FM bo'yicha diskretlangan signallarni.

? Kesish burchagi deb?
+ Nochiziqli elementdan oqib o'tayotgan tokni "maksimum"dan "minimum" qiymatgacha o'zgarish davriga aytiladi.
- Xabar manbai va iste'molchi o'rtasidagi xoxlagan ikkita nuqta orasidagi texnik qurilmalarning to'plami.
- Bu axborotni o'zida mujassamlashtirgan ma'lum bir fizik kattalik.
- Vaqt bo'yicha diskretlangan signallarga aytiladi.

? Uch va besh koordinatalar usuli qachon ishlatiladi?
+ Signal garmoniktebranish bo'lganda nochiziqli elementning V.A.X si esa grafik ko'rinishda berilganda ishlatiladi.
- Vaqt bo'yicha diskretlangan signallarda.
- Laplas almashtirishlarda.
- Raqamli signallarda.

? Nochiziqli element ishlatilgan nochiziqli zanjirlarni hisoblashda qanday usuldan foydalaniladi?
+ Grafik va analitik usuldan.
- Sinxron usuldan.
- Vaqt bo'yicha diskretlangan signallar usuldan.
- Analitik usuldan.

? Elektraloqa nazariyasida va radio texnikada qaysi turdagi approksimatsiyalovchi funksiyalar eng ko'p ishlatiladi?
+ Daraja polinomlar, bulakli to'g'ri chiziqli approksimatsiya.
- Qatorli polinomlar, to'g'ri burchakli approksimatsiya.
- Qatorli polinomlar, bulakli to'g'ri chiziqli approksimatsiya.
- Daraja polinomlar, bulakli egrichiziqli approksimatsiya.

? Grafik usul qachon ishlatiladi?
+ Nochiziqli zanjirga element argarmoniktebranishlar tasir qilganda.
- Vaqt bo'yicha diskretlangan signallarda.
- Laplas almashtirishlarda.
- Raqamli signallarda.

? Davriy bo'lmagan impulslar spektrini aniqlashda qaysi ifodani qo'llab bo'lmaydi?
+ Furye qatorlarini.
- Laplas almashtirishlarini.
- Polinomlarni.
- Analitik usulni.

? To'g'ri to'rtburchakli yagona impulsning davomiyligi ikki barobar kengaysa qanday hodisa sodir bo'ladi?
+ Spektr kengligi siqiladi.
- O'zgarmaydi.
- Kengayadi.
- Shakli o'zgartiradi.

? To'g'ri to'rtburchakli yagona impulsning davomiyligi ikki barobar ortsa qanday hodisa sodir bo'ladi?
+ Spektr ikki barobar kengayadi.
- Shakli o'zgartiradi.
- O'zgarmaydi.
- Siqiladi.

? ………... bu har xil fizik jarayonlarni tarifiy hodisalar to'g'risidagi ma'lumotdir.
+ Informatsiya.
- Signal.
- Xabar.
- Matn.

? Signal turlari?
+ 1. Uzluksiz signal. 2. Vaqt bo'yicha diskretlangan signal. 3. Sath bo'yicha diskretlangan signal. 4. Vaqt va sath bo'yicha diskretlangan signal.
- 1. Aloqa signali. 2. Vaqt bo'yicha diskretlangan signal. 3. Sath bo'yicha diskretlangan signal.
- 1. Ortogonal signallar. 2. Uzluksiz signal. 3. Vaqt bo'yicha diskretlangan signal. 4. Sath bo'yicha diskretlangan signal.
- Vaqt bo'yicha diskretlangan signallar.

? ………… deb biror bir fizik jarayonning bir yoki bir nechta parametrini xabar gamosravishda o'zgarishiga aytiladi.
+ Signal.
- Xabar.
- Informatsiya.
- Xodisa.

? Aloqa sistemi nima?
+ Vaqt bo'yicha diskretlangan signallar.
- Ikkita kanalni bir-biriga bog'lanishi.
- Uzluksiz signallarning yig'indisi.
- Sath bo'yicha diskretlangan signallar.

? Oldingi misollardan moslangan rejimdagi isrofsiz liniya orqali signal o'tishini ko'rsating.
+ 2.
- 3.
- 1.
- 4.


? Oldingi misollardan moslama rejimdagi isrofsiz liniya orqali signal o'tishini ko'rsating.
+ 2.
- 1.
- 3 va 4.
- 3.

? Aloqa kanallari nechtako'rsatgich bilan baholanadi?
+ 4.
- 6.
- 3.
- 2.
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
