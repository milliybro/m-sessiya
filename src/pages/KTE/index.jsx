  import { Fragment, useEffect, useState } from "react";
  import "./style.scss";
  import { Image } from "react-bootstrap";

  import close from "../../assets/image/close.png";
  import flag from "../../assets/image/flags.png";
  import CountdownTimer from "../../components/CountDownTimer";
  import QuestionCard from "../../cards/QuestionCard";

  const Kompyuter = () => {
    const [animationProgress, setAnimationProgress] = useState(0);

    useEffect(() => {
      const animationDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
      const startTime = Date.now();

      const updateAnimation = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        if (elapsed < animationDuration) {
          const progress = (elapsed / animationDuration) * 100;
          setAnimationProgress(100 - progress);
          requestAnimationFrame(updateAnimation);
        } else {
          setAnimationProgress(0);
        }
      };

      updateAnimation();

      return () => {
        setAnimationProgress(0);
      };
    }, []);
    return (
      <Fragment>
        <div className="head">
          <div className="countdown-animation">
            <div
              className="progress-bar"
              style={{ left: `${animationProgress}%` }}
            />
          </div>
          <header>
            <div className="container">
              <div className="header-icons">
                <div className="date d-flex">
                  <p>00:</p>
                  <CountdownTimer initialSeconds={1800} />
                </div>
                <div className="finish">
                  <Image src={close} />
                  <Image className="flagcha" src={flag} />
                </div>
              </div>
            </div>
          </header>
        </div>

        <main className="mt-5">
          <div className="container">
            <div className="main-info">
              <div className="question-left">
                <QuestionCard />
                ? Quyida keltirilgan kompyuter tarmoqlarining qaysi biri avval paydo bo’lgan?
+ global kompyuter tarmoqlari
- lokal kompyuter tarmoqlari
- kampuslar tarmog’i
- korporativ tarmoqlar

? To’rtta bir-biri bilan bog’langan bog’lamlar strukturasi (kvadrat shaklida) qaysi topologiya turiga mansub?
+ Xalqa
- Yulduz
- To’liq bog’lanishli
- Yacheykali

? Ketma-ket bir-biri bilan bog’langan 3 ta bog’lamlar (oxiri boshi bilan bog’lanmagan) strukturasi qaysi topologiya turiga tegishli?
+ Umumiy shina
- Xalqa
- To’liq bog’lanishli
- Yulduz

? Kompyuter tizimlarida ma’lumotlarni uzatish ishonchliligini oshirish uchun nima qilinadi?
+ kontrol summani xisoblash bilan
- ma’lumotni bir necha marta uzatish bilan axborotni ishonchliligini tekshirishning majoritar usulini maxsus apparat-programma vositalari yordamida
- axborotni ishonchliligini tekshirishning majoritar usulini
- maxsus apparat-programma vositalari yordamida

? Qaysi topologiya birgalikda foydalanilmaydigan muhitni qo’llamasligi mumkin?
+ To’liq bog’lanishli
- Xalqa
- Umumiy shina
- Yulduz

? Topologiyalardan qaysi biri ishonchliligi yuqori hisoblanadi?
+ Yulduz
- Xalqa
- Umumiy shina
- To’liq bog’lanishli

? MAC satxi qanday vazifani bajaradi?
+ uzatish muhitiga murojaat qilishni boshqarish
- stantsiyalar o’rtasida axborotni har-xil ishonchlilik darajasi bilan uzatish
- bitlar sathida axborot uzatishni boshqarish
- bloklar sathida axbo-rot uzatishni boshqarish

? LLC satxi qanday vazifani bajaradi?
+ stantsiyalar o’rtasida axborotni har-xil ishonchlilik darajasi bilan uzatish
- bitlar sathida axborot uzatishni boshqarish
- bloklar sathida axborot uzatishni boshqarish
- uzatish muhitiga murojaat qilishni boshqarish

? 10Base-2 segmentining uzunligi ko’pi bilan qancha bo’lishi mumkin?
+ 185 metr
- 100 metr
- 200 metr
- 500 metr

? O’ralma juftlik kabeli simlarini, uning konnektorlariga ulashning necha xil variantlari mavjud?
+ 2
- 3
- 4
- 1

“Algoritmlarni loyihalash” fanidan test savollari
№1.	
Manba: Adam Drozdek. Data structures and algorithms in C++. Fourth edition. Cengage Learning. 2013 y.
Qiyinlik darajasi – 1
INT turi uchun qaysi amallar o’rinli
qo’shish, ayirish, butun sonli bo’lish, qoldiqli bo’lish
qo’shish, ayirish, bo’lish, mod, konkatenasiya
ko’paytirish, ayirish, konkatenasiya
ko’paytirish, ayirish, div, konkatenasiya

№2.	
Manba:
Adam Drozdek. Data structures and algorithms in C++. Fourth edition. Cengage Learning. 2013 y.
Qiyinlik darajasi – 1
FLOAT  turi uchun qaysi amallar o’rinli
qo’shish, ayrish, ko’paytirish, bo’lish
qo’shish, ayrish, bo’lish, mod
ko’paytirish, ayrish, konkatenasiya
qo’shish, ayrish, div, mod

№3.	
Manba: Adam Drozdek. Data structures and algorithms in C++. Fourth edition. Cengage Learning. 2013 y.
Qiyinlik darajasi – 1
Algoritm nima?
amallar ketma-ketligi 
Fayllarga murojaat
Obyektlar majmuasini ifodalash
To’plam elementlarini ifodalash

№4.	
Manba: Adam Drozdek. Data structures and algorithms in C++. Fourth edition. Cengage Learning. 2013 y.
Qiyinlik darajasi – 1
Massivning oxirgi elemenning tartib raqami nimaga teng bo’ladi, agar massiv o’lchami 19 teng bo’lsa?
18
19
tartib raqami dasturchi aniqlaydi
tartib raqami cheksiz bo’ladi

№5.	
Manba: Adam Drozdek. Data structures and algorithms in C++. Fourth edition. Cengage Learning. 2013 y.
Qiyinlik darajasi – 1
Ma’lumotlarni kompyuter xotirasda akslantirish nechta bosqichdan iborat?
3
4
5
6

№6.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 1
Bir xil tipdagi o’zaro  takrorlanmaydigan elementlardan iborat majmua
To’plam
Massiv
Yozuv
Jadval

№7.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 2
Oddiy sozlangan ma’lumotlar turlari (atomlar)ga quyidagilar kiradi:
mantiqiy, butun, xakikiy, belgili, ko’rsatkichli tur
massiv, yozuv, rekursiv turlar, to’plam
jadval, stek, navbat, ruyxat, dek
daraxtlar, graflar

№8.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 2
  ko’rinishida massiv e’lon qilinganda, uning yettinchi elementiga murojaat qanday amalga oshiriladi?
mas[6];
mas[7];
mas(7);
mas(6);

№9.	
Manba: Adam Drozdek. Data structures and algorithms in C++. Fourth edition. Cengage Learning. 2013 y.
Qiyinlik darajasi – 1
Shartli operator if tanasi qachon bajariladi?
rost (true)
yolg’on (false)
Doimo bajariladi
Hech qachon bajarilmaydi

№10.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 2
Turlarni keltirishda ma’lumotnng qisman yo’qotish bilan oshiriladi
float to int
char to float
char to int
int to float


№11.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 2
char a; o’zgaruvchisi e’lon qilingan. Keltirilgan ifodalarning qaysi biri noto’g’ri?
 
 
 
 

№12.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 2
C++ tilida o’zgaruvchilarni e’lon qilinganlardan qaysi biri massiv tuzilmasini anglatadi?
 
 
 
 

№13.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 2
C++ tilida o’zgaruvchilarni e’lon qilinganlardan qaysi biri yozuv tuzilmasini anglatadi?
 
 
 
 

№14.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 2
C++ tilida o’zgaruvchilarni e’lon qilinganlardan qaysi biri jadval tuzilmasini anglatadi?
 
 
 
 

№15.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Graf tuzilmasini matematik qanday ifodalash mumkin?
 
 
 
 

№16.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Agar grafning munosabatlarini tasvirlashda qirralardan foydalanilsa, u holda graf ... deyiladi. 
Yo’naltirilmagan 
Yo’naltirilgan
Aralash
Vaznga ega

№17.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Agar grafning munosabatlarini tasvirlashda yoylardan foydalanilsa, u holda graf ... deyiladi.
Yo’naltirilgan
Yo’naltirilmagan
Aralash
Vaznga ega

№18.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Agar grafning munosabatlarini tasvirlashda yoy va qirralardan foydalanilsa, u holda graf ... deyiladi.
Aralash
Yo’naltirilmagan
Yo’naltirilgan
Vaznga ega

№19.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi –  1
Agar grafning munosabatlariga og’irlik qiymati belgilansa, u holda graf ... deyiladi.
Vaznga ega
Yo’naltirilmagan
Yo’naltirilgan
Aralash

№20.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 1
Grafning tartibi nimaga teng 
Uchlar soniga
Qirralar soniga
Qirra va uchlar soniga
Ilmoqlar soniga 

№21.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 1
Grafning o’lchami nimaga teng
Qirralar soniga
Uchlar soniga
Qirra va uchlar soniga
Ilmoqlar soniga 

№22.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 1
Grafning tugun darajasi bu 
undan chiquvchi qirralar soni xisoblanadi
undan chiquvchi tugunlar soni xisoblanadi
undan chiquvchi qirralar o’rta arifmetik soni xisoblanadi
undan chiquvchi qirralar o’rta geometrik soni xisoblanadi

№23.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 1
Grafda nechta va qaysilar ko’ruv amallarini ifodalaydi 
Ikkita (eniga va tubiga)
Ikkita (eniga va uzunasiga)
Uchta (to’g’ri, teskari, akslanuvchi)
Uchta (to’g’ri, teskari, simmetrik)

№24.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 1
Qanday konteyner yordamida grafda tubiga qarab ko’rishda qo’llaniladi?
stek
navbat
ro’yxat
dek

№25.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 1
Qanday konteyner yordamida grafda eniga qarab ko’rishda qo’llaniladi?
navbat
stek
ro’yxat
dek

№26.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Kim tomondan va qaysi yilda graf tushunchasini kiritgan
D.Kenig, 1936 
D.Ritchi, 1976
A.Lovli, 1966
Ch.Bebidj, 1946

№27.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi –  2
Agar grafda boshi va oxiri bitta tugunda tutashadigan qirra mavjud bo’lsa, unga ... deyiladi.
Ilmoq
Halqa
Yo’l
Daraja

№28.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Bironta tugundan boshqa bir tugungacha bo’lgan yonma-yon joylashgan tugunlar ketma-ketligidir bu - ... deyiladi.
Yo’l
Halqa
Ilmoq
Daraja

№29.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
... – bu boshi va oxiri tutashuvchi tugundan iborat yo’l.
Halqa
Yo’l
Ilmoq
Daraja

№30.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Agar grafning to’yinganligi D darajasi 0.5dan katta bo’lsa, u holda graf ... hsoblanadi.
To’yingan 
Siyrak
Ikkilamchi
To’liq

№31.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Agar grafning to’yinganligi D darajasi 0.5dan kichik bo’lsa, u holda graf ... hsoblanadi.
Siyrak
To’yingan
Ikkilamchi
To’liq

№32.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Agar grafning to’yinganligi D darajasi 1ga teng bo’lsa, u holda graf ... hsoblanadi.
To’liq
Siyrak
To’yingan
Ikkilamchi

№33.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
G grafni aks etishda n o’lchamli A kvadrat matrisasi qanday nomlanadi
Qo’shma matrisa
Munosabat matrisasi
Qo’shnilik ro’yxati
Qirralar ro’yxati

№34.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
G grafni aks etishda n-ga m o’lchamli B matrisasi qanday nomlanadi
Munosabat matrisasi
Qo’shma matrisa 
Qo’shnilik ro’yxati
Qirralar ro’yxati

№35.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
G grafni aks etishda
A[n] massiv bo’lib, massivning xar bir elementi tugun bilan qo’shni tugunlar ro’yxati qanday nomlanadi
Qo’shnilik ro’yxati
Qo’shma matrisa
Munosabat matrisasi
Qirralar ro’yxati

№36.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
G grafni aks etishda
qo’shni tugunlar qirralaridan iborat chiziqli ro’yxati qanday nomlanadi
Qirralar ro’yxati 
Qo’shnilik ro’yxati
Qo’shma matrisa
Munosabat matrisasi

№37.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Berilgan tugundan boshlab barcha tugunlarni ko’rib chiqish prosedurasi qanday nomlanadi.
Obxodom
Siklom
Putem
Stepenyu

№38.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
Grafning D to’yinganlik darajasi nimaga teng 
 
 
 
 

№39.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
To’liq grafning qirralar soni qanday formula orqali hisoblanadi   
 
 
 
 

№40.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
Yo’naltirilmagan grafning ko’shma matrisasi to’g’ri berilgan javobini tanlang
 
 
 
 

№41.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
  yo’naltirilmagan grafning ko’shma matrisasi berilgan. Grafning tartibi nechiga teng
5
4
7
6

№42.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
  yo’naltirilmagan grafning ko’shma matrisasi berilgan. Grafning o’lchami nechiga teng 
7
4
5
6

№43.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
  yo’naltirilmagan grafning ko’shma matrisasi berilgan. Grafning to’yinganlik D qiymati nechiga teng
0,7
0,3
1
0

№44.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
  yo’naltirilmagan grafning ko’shma matrisasi berilgan. Grafning tartibi nechiga teng
4
5
7
6

№45.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
  yo’naltirilmagan grafning ko’shma matrisasi berilgan. Grafning o’lchami nechiga teng 
4
7
5
6

№46.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
  yo’naltirilmagan grafning ko’shma matrisasi berilgan. Grafning to’yinganlik D qiymati nechiga teng?
0,66
0,33
1
0,5

№47.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 1
Qidiruvni vazifasi nimadan iborat
berilgan argumentga mos keluvchi ma’lumotlarni massiv ichidan topish
massivda ma’lumot yo’qligini aniqlash
ma’lumotlar yordamida argumentni topish
ma’lumot yordamida eng kichik elementni topish

№48.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 1
Berilgan argumentga mos keluvchi ma’lumotlarni massiv ichidan topish
Qidiruv 
Saralash
Algoritmlash
Uslubiyot

№49.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 1
Jadvalning tuzilmasiga qarab nechta qidiruv usullari mavjud
4
5
6
7

№50.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Chiziqli qidiruv g’oyasi nimadan iborat
har bir element ketma-ket ko’rib chiqiladi
elementlar ketma-ket jadval o’rtasidan boshlab ko’rib chiqiladi
elementlarni ko’rib chiqish ketma-ket ravishda boshidan oxirigacha va aksincha, 2 ta element tashlab qaraladi
binar daraxt barcha tugunlari ko’rib chiqiladi

№51.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Transpozisiya usulining ma’nosi nima?
Topilgan element o’zidan oldinda turgan element bilan almashtirila di.
Topilgan element o’zidan keyingi turgan element bilan almashtirila di.
Topilgan element tuzilmaning 1-elementi bilan almashtirila di.
Topilgan element tuzilmaning oxirgi elementi bilan almashtirila di.

№52.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
O’rinlashtirish usulini ma’nosi  nimadan iborat
topilgan element ro’yxat boshiga joylashtiriladi
topilgan element ro’yxat oxiriga joylashtiriladi
topilgan element o’zidan keyingi element bilan o’rin almashtiriladi
qo’shni elementlar o’rni almashtiriladi

№53.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Noyob kalit nima
agar jadvalda kaliti mazkur kalitga teng ma’lumot yagona bo’lsa
agar ikkita ma’lumot qiymatlari yig’indisi kalitga teng bo’lsa
agar jadvalda bunday kalitli element mavjud bo’lmasa
agar ikkita ma’lumot qiymatlari farqi kalitga teng bo’lsa

№54.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Katta O notasiyada belgilangan chiziqli qidiruv samaradorligini ko’rsating 
 
 
 
 

№55.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Katta O notasiyada belgilangan binar qidiruv samaradorligini ko’rsating
 
 
 
 

№56.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Katta O notasiyada belgilangan indeksli-ketma-ket qidiruv samaradorligini ko’rsating
 
 
 
 

№57.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Katta O notasiyada belgilangan xeshlash va rexeshlash qidiruv samaradorligini ko’rsating
 
 
 
 

№58.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Ketma-ket qidiruv algoritm tartibi qanday
Chiziqli
Logarifmik 
Konstantali
Eksponensial
№59.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Binar qidiruv algoritm tartibi qanday
Logarifmik
Chiziqli
Konstantali
Eksponensial

№60.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 2
Xeshlashtirish algoritm tartibi qanday 
Konstantali
Chiziqli
Logarifmik
Eksponensial

№61.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
Chiziqli qidiruv qachon samarali
massiv va ro’yxatda
dekda
daraxtda
navbatda

№62.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
Ketma-ket yoki chiziqli qidiruv – bu …
Ma’lumotlar butun jadval bo’yicha operativ xotirada kichik adresdan boshlab, to katta adresgacha ketma-ket qarab chiqiladi
Indekslar jadvalidan gurux topiladi, va unda ko’rsatilgan mos chegaralarda chiziqli algoritm oshiriladi
Berilgan massiv o’rtasidagi element olinadi, ya’ni  , va u qidiruv argumenti bilan taqqoslanadi. Topilmasa chegaralar mos ravishda o’zgartiriladi
Funksiya yerdamida xesh-jadval to’ldiriladi va undan qidiriladi

№63.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
Indeksli-ketma-ket qidiruv – bu …
Indekslar jadvalidan gurux topiladi, va unda ko’rsatilgan mos chegaralarda chiziqli algoritm oshiriladi
Ma’lumotlar butun jadval bo’yicha operativ xotirada kichik adresdan boshlab, to katta adresgacha ketma-ket qarab chiqiladi
Berilgan massiv o’rtasidagi element olinadi, ya’ni  , va u qidiruv argumenti bilan taqqoslanadi. Topilmasa chegaralar mos ravishda o’zgartiriladi
Funksiya yerdamida xesh-jadval to’ldiriladi va undan qidiriladi

№64.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
Binar qidiruv – bu …
Berilgan massiv o’rtasidagi element olinadi, ya’ni  , va u qidiruv argumenti bilan taqqoslanadi. Topilmasa chegaralar mos ravishda o’zgartiriladi
Ma’lumotlar butun jadval bo’yicha operativ xotirada kichik adresdan boshlab, to katta adresgacha ketma-ket qarab chiqiladi
Indekslar jadvalidan gurux topiladi, va unda ko’rsatilgan mos chegaralarda chiziqli algoritm oshiriladi
Funksiya yerdamida xesh-jadval to’ldiriladi va undan qidiriladi

№65.	
Manba: Ахо А. и др. Структуры данных и алгоритмы. – М.: Вильямc. – 2000.
Qiyinlik darajasi – 3
Xeshlash  – bu …
Funksiya yerdamida xesh-jadval to’ldiriladi va undan qidiriladi
Ma’lumotlar butun jadval bo’yicha operativ xotirada kichik adresdan boshlab, to katta adresgacha ketma-ket qarab chiqiladi
Berilgan massiv o’rtasidagi element olinadi, ya’ni  , va u qidiruv argumenti bilan taqqoslanadi. Topilmasa chegaralar mos ravishda o’zgartiriladi
Indekslar jadvalidan gurux topiladi, va unda ko’rsatilgan mos chegaralarda chiziqli algoritm oshiriladi

№66.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 1
Operativ xotirada bajariladigan saralash qanday ataladi
ichki saralash
to’liq saralash
qo’shish orqali saralash
adreslar jadvalini saralash

№67.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 1
Saralash usullari orasidan noto’g’risini toping.
dinamik
yaxshilangan
logarifmik
qat’iy

№68.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 1
Saralashning qaysi usullari,   kalitlarni taqqoslash tartibiga ega?
qat’iy
Binar
yaxshilangan
logarifmik

№69.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 1
Berilgan to’plam elementlarini biror bir tartibda joylashtirish jarayoni 
Saralash
Qidiruv
Algoritmlash
Uslubiyot

№70.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 2
Saralash usuli … deyiladi, agar saralash jarayonida bir hil kalitli elementlar nisbiy joylashuvi o’zgarmasa
Turg’un (stable)
Murakkab (difficult)
Oddiy (typical)
Turg’un emas (unstable)

№71.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 2
Qo’yish orqali saralash g’oyasi.
Obyektlar hayolan tayyor a(1),...,a(i-1)  va boshlang’ich ketma-ketliklarga bo’linadi. Har bir qadamda (i=2 dan boshlab) boshlang’ich ketma-ketlikdan i-chi element ajratib olinib tayyor ketma-ketlikning kerakli joyiga qo’shiladi.
Berilgan obyektlar ichidan eng kichik kalitga ega element tanlanadi.Ushbu element boshlang’ich ketma-ketlikdagi birinchi element  bilan o’rin almashadi. Undan keyin ushbu jarayon qolgan elementlarda amalga oshiriladi.
n - 1 marta massivda quyidan yuqoriga qarab yurib kalitlar jufti-jufti bilan taqqoslanadi. Agar pastki kalit qiymati yuqoridagi jufti kalitidan kichik bo’lsa, u holda ular o’rni almashtiriladi.
Boshlang’ich ketma-ketlikning har r o’rinda joylashgan elementlari guruhlanib, har bir guruh alohida qo’shish usuli orqali saralanadi.

№72.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi –  2
Tanlash orqali saralash g’oyasi. 
Berilgan obyektlar ichidan eng kichik kalitga ega element tanlanadi.Ushbu element boshlang’ich ketma-ketlikdagi birinchi element  bilan o’rin almashadi. Undan keyin ushbu jarayon qolgan elementlarda amalga oshiriladi.
n - 1 marta massivda quyidan yuqoriga qarab yurib kalitlar jufti-jufti bilan taqqoslanadi. Agar pastki kalit qiymati yuqoridagi jufti kalitidan kichik bo’lsa, u holda ular o’rni almashtiriladi.
Boshlang’ich ketma-ketlikning har r o’rinda joylashgan elementlari guruhlanib, har bir guruh alohida qo’shish usuli orqali saralanadi.
Obyektlar hayolan tayyor a(1),...,a(i-1)  va boshlang’ich ketma-ketliklarga bo’linadi. Har bir qadamda (i=2 dan boshlab) boshlang’ich ketma-ketlikdan i-chi element ajratib olinib tayyor ketma-ketlikning kerakli joyiga qo’shiladi.

№73.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 2
Almashtirish orqali saralash g’oyasi. 
n - 1 marta massivda quyidan yuqoriga qarab yurib kalitlar jufti-jufti bilan taqqoslanadi. Agar pastki kalit qiymati yuqoridagi jufti kalitidan kichik bo’lsa, u holda ular o’rni almashtiriladi.
Obyektlar hayolan tayyor a(1),...,a(i-1)  va boshlang’ich ketma-ketliklarga bo’linadi. Har bir qadamda (i=2 dan boshlab) boshlang’ich ketma-ketlikdan i-chi element ajratib olinib tayyor ketma-ketlikning kerakli joyiga qo’shiladi.
Berilgan obyektlar ichidan eng kichik kalitga ega element tanlanadi.Ushbu element boshlang’ich ketma-ketlikdagi birinchi element  bilan o’rin almashadi. Undan keyin ushbu jarayon qolgan elementlarda amalga oshiriladi.
Boshlang’ich ketma-ketlikning har r o’rinda joylashgan elementlari guruhlanib, har bir guruh alohida qo’shish usuli orqali saralanadi.

№74.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi –  2
QuickSort usulining algoritm tartibini ko’rsating 
Logarifmik
Chiziqli
Kvadratik
Differensial

№75.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 2
Qat’iy usullarning algoritmlar tartibini ko’rsating 
Kvadratik
Kubik
Logarifmik
Differensial

№76.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 3
Saralash samaradorligini qaysi mezonlar yordamida aniqlanadi
taqqoslashlar va  almashtirishlar soni
dastur yozishga ketgan vaqt
ishlatilayotgan identifikatorlar soni va turlari
amallar soni

№77.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 3
Qanday saralash usullari qat’iy usullar deb belgilangan?
to’g’ridan-to’g’ri qo’shish; to’g’ridan-to’g’ri tanlash; to’g’ridan-to’g’ri almashtirish.
Tez saralash;
Shella saralashi;
Birlashtirish saralashi.
Birlashtirish saralashi; to’g’ridan-to’g’ri tanlash; to’g’ridan-to’g’ri almashtirish.
Tez saralash, to’g’ridan-to’g’ri tanlash; to’g’ridan-to’g’ri almashtirish.

№78.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 3
Qanday saralash usullari yaxshilangan usullar deb belgilangan?
 Tez saralash;
Shella saralashi;
Birlashtirish saralashi.
to’g’ridan-to’g’ri qo’shish; to’g’ridan-to’g’ri tanlash; to’g’ridan-to’g’ri almashtirish.
Birlashtirish saralashi; to’g’ridan-to’g’ri tanlash; to’g’ridan-to’g’ri almashtirish.
Tez saralash, to’g’ridan-to’g’ri tanlash; to’g’ridan-to’g’ri almashtirish.

№79.	
Fan bobi – 1; Bo’limi - 2; Qiyinchilik darajasi – 1;
Algoritmni hossalari qaysi javobda to’g’ri keltirilgan ?  
aniqlik, tushunarlilik, ommaviylik, natijaviylik, diskretlik. 
aniqlik, tushunarlilik, ommaviylik, natijaviylik, tarmoqlanuvchanlik. 
aniqlik, tushunarlilik, ommaviylik, natijaviylik, moslanuvchanlik.
aniqlik, tushunarlilik, ommaviylik, natijaviylik, chiziqlilik

№80.	
Fan bobi – 1; Bo’limi - 1; Qiyinchilik darajasi – 1;
Algoritmning turlari qaysi javobda to’g’ri keltirilgan?  
chiziqli, tarmoqlanuvchi, takrorlanuvchi. 
chiziqli, tarmoqlanuvchi, diskretlik. 
chiziqli, tarmoqlanuvchi, takrorlanuvchi, natijaviylik. 
chiziqli, takrorlanuvchi, aniqlik

№81.	Fan bobi – 3; Bo’limi - 1; Qiyinchilik darajasi – 3;
N- 5 xonali (10000 dan 99999 gacha bo’lgan ) butun son bo’lsin. U xolda qaysi satrdagi ifoda uning o’nliklar xonasidagi raqamni aniqlaydi?  
(N%100)/10 
N%10
(N%1000)/100
N/10000
№82.	
Manba: Adam Drozdek. Data structures and algorithms in C++. Fourth edition. Cengage Learning. 2013 y.
Qiyinlik darajasi – 1
Ma’lumotlar tuzilmasi mazmunli (matematik) bosqichda ...  
konkret obyektning qayta ishlash, ularning xussusiyatlari va munosabatlarini tadqiq qilinadi.
kompyuter xotirasida ma’lumotlarni aks ettirilishi tadqiq qilinadi.
berilgan talabalar bo’yicha algoritmni ishlab chiqilishi tadqiq qilinadi.
dasturni yaratish jarayoni tadqiq qilinadi.

№83.	
Manba: Adam Drozdek. Data structures and algorithms in C++. Fourth edition. Cengage Learning. 2013 y.
Qiyinlik darajasi – 1
Ma’lumotlar tuzilmasi mantiqiy bosqichda ... 
berilgan talabalar bo’yicha algoritmni ishlab chiqilishi tadqiq qilinadi.
kompyuter xotirasida ma’lumotlarni aks ettirilishi tadqiq qilinadi.
konkret obyektning qayta ishlash, ularning xussusiyatlari va munosabatlarini tadqiq qilinadi.
dasturni yaratish jarayoni tadqiq qilinadi.

№84.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi –  1
Ma’lumotlar tuzilmasi fizik bosqichda ...  
kompyuter xotirasida ma’lumotlarni aks ettirilishi tadqiq qilinadi.
konkret obyektning qayta ishlash, ularning xussusiyatlari va munosabatlarini tadqiq qilinadi.
berilgan talabalar bo’yicha algoritmni ishlab chiqilishi tadqiq qilinadi.
dasturni yaratish jarayoni tadqiq qilinadi.

№85.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 1
Bir xil tipdagi elementlar majmuasi  
Massiv
Yozuv
Jadval
To’plam

№86.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 1
Turli tipdagi ma’lumotlardan qanday tuzilma xosil qilinadi?
Yozuv
Massiv
To’plam
Jadval

№87.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 1
Turli tipdagi ma’lumot maydonlardan iborat tartibli  tuzilmasi
 Jadval
Massiv
Yozuv
To’plam

№88.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 1
Ma’lumotlar tuzilmasini matematik qanday ifodalash mumkin?
 
 
 
 

№89.	
Fan bobi – 3; Bo’limi - 1; Qiyinchilik darajasi – 2;
QuickSort usulini g‘oyasi nimadan iborat?
kalitlarni tanlanganiga nisbatan bo‘lish 
boshqa elementlar bilan taqqoslash uchun 1,2,…n –chi elementlarni tanlash
qo‘shni elementlar o‘rinlarini almashtirish
Elementni qidirish

№90.	
Fan bobi – 3; Bo’limi - 3; Qiyinchilik darajasi – 1;
Ushbu A>=0 mantiqiy ifoda qanday shartni rostlikka tekshiradi (barcha javoblarda butun sonlar nazarda tutilmoqda)?  
sonning manfiy emasligini
sonning musbat emasligini
sonning manfiyligini
sonning musbatligini

№91.	
Fan bobi –4; Bo’limi - 1; Qiyinchilik darajasi – 3;
Algoritm uchun berilgan tariflardan qaysi biri to’g’ri –
 Biror maqsadga erishishga yoki qandaydir masalani yechishga qaratilgan buyriqlarning aniq,tushinarli,chekli hamda to`liq tizimidir.
Vazifani bajarishga qaratilgan aniq belgilangan qoidalarning tartiblangan chekli to`plami
Kompyuterdagi foydalanuvchi bilan o’rtasidagi muloqotni ta’minlovchi dastur.
Vazifani bajarishga qaratilgan aniq belgilangan qoidalarning tartiblanmagan chekli to`plami

№92.	
Fan bobi –4; Bo’limi - 1; Qiyinchilik darajasi – 3;
Algoritm so`zining inglizcha nomlanishi qanday?
 Algorithm
 Algorifm
 Algorihm
 Algoritm

№93.	
Fan bobi –4; Bo’limi - 1; Qiyinchilik darajasi – 3;
Diskretlilik bu-
Bu xossaning mazmuni-algoritmlarni doimo chekli qadamlardan iborat qilib bo‘laklash imkoniyati mavjudligidadir.
 Ko‘rsatmalar aniq berilishi va faqat algoritmda ko‘rsatilgan tartibda bajarilishi
Xar bir algoritm chekli sondagi qadamlardan keyin albatta natija berishi
Xar bir algoritm cheksiz sondagi qadamlardan keyin albatta natija berishi


№94.	
Fan bobi –4; Bo’limi - 1; Qiyinchilik darajasi – 3;
Algoritmning asosiy xossalari nechta?
5
3
4
6

№95.	
Fan bobi –4; Bo’limi - 1; Qiyinchilik darajasi – 3;
Hech qanday shart tekshirilmaydi va jarayonlar tartib bilan ketma-ket bajariladigan algoritm ..... deyiladi.
 Chiziqli algoritmlar
Tarmoqlanuvchi algoritmlar
Bunday algoritm mavjud emas
Takrorlanuvchi algoritm


№96.	
Fan bobi –4; Bo’limi - 1; Qiyinchilik darajasi – 3;
Algoritmni hossalari qaysi jovobda to`g’ri keltirilgan?
Aniqlik, tushunarlilik, ommaviylik, natijaviylik, diskretlik
Aniqlik, tushunarlilik, ommaviylik, natijaviylik
Natijaviylik, moslanuvchanlik
Aniqlik, tushunarlilik, ommaviylik

№97.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 2
Taqqoslash amalning qaysi biri noto’g’ri berilgan
 
 
 
 


№98.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 2
Cheksiz takrorlash operatoridan qaysi operator yordamida chiqib ketish mumkin?
break;
continue;
return;
switch

№99.	
Fan bobi – 2; Bo’limi - 2; Qiyinchilik darajasi – 2;
Sikl operatori nomi to‘g‘ri ko‘rsatilgan satrni belgilang.  
parametrli sikl operatori
tanlanadigan sikl operatori
tarmoqlanadigan sikl operatori
O’tish operatori

№100.	
Fan bobi – 2; Bo’limi - 2; Qiyinchilik darajasi – 2;
Sikl operatori nomi to‘g‘ri ko‘rsatilgan satrni belgilang.  
sharti oldin tekshiriladigan sikl operatori
tanlanadigan sikl operatori
tarmoqlanadigan sikl operatori
O’tish operatori

№101.	
Manba: Кормен Т., Лейзерсон Ч., Ривест Р. «Алгоритмы. Построение и анализ», 2013 г.
Qiyinlik darajasi – 2
Gorner sxemasi nima hisoblashga mo’ljallangan algoritm? 
Ko’phadni
Tenglamani
Integralni
Tengsizlikni

№102.	
Fan bobi – 1;  Bo‘limi – 1;  Qiyinchilik darajasi – 1;
Muhandislik masalasining EHMda yechish jarayonidagi birinchi bosqich bu…
Matematik model qurish
Algoritm tuzish
Masalani to’g’ri tushunish
Masalani o’qib chiqish

№103.	
Fan bobi – 1;  Bo‘limi – 1;  Qiyinchilik darajasi – 2;
Matematik modellashtirish etablari
Model- algoritm-programma
Algoritm-model-programma
Programma-algoritm-model
Obyekt, algoritm


№104.	
Fan bobi – 2;  Bo‘limi – 1;  Qiyinchilik darajasi – 2;
2x-ex=0 tenglamaning ildizi qaysi oraliqda joylashgan?
tenglama ildizga ega emas
[0;1]
[1;2]
[0;3]

№105.	
Fan bobi – 2;  Bo‘limi – 1;  Qiyinchilik darajasi – 3;
2x4-7x2+9x2-7x+2=0 tenglamaning ildizlarining moduli uchun quyidagi tengsizliklardan qaysi o’rinli? r=1/(1+A1)<|x|<1+A=R
2/11<|x|<5,5
0<|x|<1
6<|x|<7
17<|x|<19

№106.	
Fan bobi – 2;  Bo‘limi – 1;  Qiyinchilik darajasi – 3;
a0xn+a1xn-1+…+an-1x+an=0 algebraik tenglamaning koeffisiyentlari haqiqiy bo’lib, a0¹0, an¹0,   ,   bo’lsa, tenglamaning ildizlari qaysi oraliqda yotadi?
 
 
 
 

№107.	
Fan bobi – 2;  Bo‘limi – 1;  Qiyinchilik darajasi – 3;
x4-5x2+8x-8=0 tenglamaning haqiqiy ildizlari chegarasi berilgan javobni aniqlang.
(-3,82;3,82)
(-1;0)
(-1,1;1,1)
[0;1] 


№108.	
Fan bobi – 2;  Bo‘limi – 2;  Qiyinchilik darajasi – 3;
  tenglamaning barcha ildizlari yotgan sohani ko'rsating.
 
 
 
 

№109.	
Fan bobi – 2;  Bo‘limi – 2;  Qiyinchilik darajasi – 2;
  tenglama ildizlari qaysi kesmada joylashgan? 
 
 
 
 




№110.	
Fan bobi – 2;  Bo‘limi – 2;  Qiyinchilik darajasi – 3;
x2=ex+2 tenglamaning ildizi qaysi oraliqda joylashgan?
[-2;-1]
[0;1]
[-1;0] 
[1;2]

№111.	
Fan bobi – 2;  Bo‘limi – 2;  Qiyinchilik darajasi – 3;
x3-x-1=0 tenglamaning ildizi joylashgan oraliqni aniqlang?
[1;2]
[2;2,5]
[0;1]
[-1;0] 

№112.	
Fan bobi – 2;  Bo‘limi – 2;  Qiyinchilik darajasi – 2;
Pn(x)=a0+a1x+a2x2+…+anxn  ko’phadning qiymatini Gorner sxemasi bilan hisoblashda amallar soni nechaga teng?
2n
n2
n+1
n(n+1)

№113.	
Fan bobi – 2;  Bo‘limi – 2;  Qiyinchilik darajasi – 3;

Makleron qatorini ko’rsating? 
  
  
  
  

№114.	
Fan bobi – 2;  Bo‘limi – 2;  Qiyinchilik darajasi – 3;
  funksiyasining makleron qatoriga yoying?
 
 
 
 

№115.	
Manba:Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
Eng kichik kvadratlar usulida qanday talab qo’yiladi?
 
 
 
 

№116.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
Transport masalasining qanday yechish usullarni bilasiz?
Potentsiallar usuli
Eyler usuli
Nyuton usuli
Lagranj usuli

№117.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
Transport masalasining qanday yechish usullarni bilasiz?
Simpleks usuli
Eyler usuli
Nyuton usuli
Lagranj usuli

№118.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
Chiziqli dasturlashtirish masalasining rejalari _______ to’plamni tashkil etadi.  
qavariq
botiq
To’la
Bo’sh

№119.	
Manba:Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
  
  Tenglamaning bitta  ildizi qaysi oraliqda yotadi
[ -3;1)
(0;1)
[3;5]
[-5;4]

№120.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi –  3
Quyidagilardan qaysi birida umumlashgan chap to’rtburchaklar formulasi to’g’ri ko’rsatilgan ?
 
 
 
 


№121.	
Manba:Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
P va NP muammosi masalaning mavjudligining nechinchi yillarda va kim tomonidan o'zining mashhur "Teoremalarni tayyorlash protseduralarining murakkabligi" nomli maqolasida rasmiy ravishda kiritgan?
1971 yilda Stefan Kuk
1950-yillarda Jon Nesh
1950-yillarda Kurt Godel
1971 yilda Jon Nesh va Kurt Godel

№122.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
Deterministik Turing Machine (DTM) ga to’g’ri ko’rsatilgan qatorni toping?
Oddiy so'z bilan aytganda, bu faqat bitta keyingi bosqichga o'tishni tanlashi mumkin bo'lgan mashina. Dallanmagan mashina.
Oddiy so'z bilan aytganda, bu faqat bitta va undan ortiq  bosqichga o'tishni tanlashi mumkin bo'lgan mashina. Dallanmagan mashina
Oddiy so'z bilan aytganda, bu faqat ikkita bosqichga o'tishni tanlashi mumkin bo'lgan mashina. Dallanmagan mashina
Oddiy so'z bilan aytganda, bu faqat bitta undan oldingi bosqichga o'tishni tanlashi mumkin bo'lgan mashina. Dallanmagan mashina

№123.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
Polinom so’ziga to’g’ri ta’rif keltirilgan qatorni toping?
ba'zi kuchlarga va ularning koeffitsientlariga ko'tarilgan o'zgaruvchilardan tashkil topgan ibora.
ba'zi kuchlarga va ularning koeffitsientlariga ko'tarilgan o'zgarmaslardan tashkil topgan ibora.
ba'zi kuchlarga va ularning nisbatlariga ko'tarilgan o'zgarmaslardan tashkil topgan ibora.
ba'zi kuchlarga va ularning nisbatlaariga ko'tarilgan o'zgaruvchilardan tashkil topgan ibora.

№124.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
Algoritm vaqt murakkabligi ta’rifi to’g’ri keltirilgan qatorni toping?
kirishning uzunligi funktsiyasi sifatida bajarilishi uchun algoritm olgan vaqt.
kirishning uzunligi funktsiyasi sifatida bajarilishi uchun algoritm olgan vaqt davomiyligi.
kirishning uzunligi nisbati sifatida bajarilishi uchun algoritm olgan vaqt.
kirishning uzunligiga teng funktsiyasi sifatida bajarilishi uchun algoritm olgan vaqt.

№125.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
Polinomial vaqt murakkabligi ta’rifi to’g’ri keltirilgan qatorni toping?
algoritmning vaqt murakkabligi n ^ {O (1)}
Funksiyaning vaqt murakkabligi n ^ {O (1)}
algoritmning vaqt davomiyligi  n ^ {O (1)}
algoritmning vaqt murakkabligi va davomiyligi n ^ {O (1)}

№126.	
Manba: Г.Шилтд Самоучитель С++. 5-е издание. “БХВ Петербург” 2010 г.
Qiyinlik darajasi – 3
Nondeterministic Turing Machine (NTM) ta’rifi to’g’ri keltirilgan qatorni toping?
Agar hisoblashning keyingi bosqichi uchun ko'plab imkoniyatlar mavjud bo'lsa, ushbu mashina ularning barchasini bir vaqtning o'zida o'chirib qo'yishi mumkin. NTM-lar O (1) vaqtda ko'p variantlardan to'g'ri variantni taxmin qilishga qodir.
Agar hisoblashning keyingi bosqichi uchun ko'plab imkoniyatlar mavjud bo'lsa, ushbu mashina ularning barchasini bir vaqtning o'zida yoqib qo'yishi mumkin. NTM-lar O (1) vaqtda ko'p variantlardan to'g'ri variantni taxmin qilishga qodir.
Agar hisoblashning keyingi bosqichi uchun ko'plab imkoniyatlar mavjud bo'lsa, ushbu mashina ularning barchasini bir vaqtning o'zida o'chirib qo'yishi mumkin. NTM-lar O (1) vaqtda ko'p variantlardan to'g'ri variantni taxmin qilishga qodir emas.
Agar hisoblashning keyingi bosqichi uchun ko'plab imkoniyatlar mavjud bo'lmasa ushbu mashina ularning barchasini bir vaqtning o'zida o'chirib qo'yishi mumkin. NTM-lar O (1) vaqtda ko'p variantlardan to'g'ri variantni taxmin qilishga qodir emas.

№127.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 3
Reduksiya  ta’rifi to’g’ri keltirilgan qatorni toping?
A muammoni kiritishlarni ko'paytma vaqt algoritmidan foydalanib, B muammosining ekvivalent kirishiga aylantirish jarayoni.
A muammoni kiritishlarni ko'paytma vaqt algoritmidan foydalanmasdan B muammosining ekvivalent kirishiga aylantirish jarayoni
A muammoni kiritishlarni ko'paytma vaqt funksiyasidan foydalanib, B muammosining ekvivalent kirishiga aylantirish jarayoni
A muammoni kiritishlarni ko'paytma vaqt funksiyasidan foydalanmasdan B muammosining ekvivalent kirishiga aylantirish jarayoni

№128.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
Ekvivalent degani … ta’rifni to’ldiring?
A va B muammolari kirish va o'zgartirilgan kirish uchun bir xil javobni (Ha yoki Yo'q) berishi kerak.
A va B muammolari kirish va o'zgartirilmagan kirish uchun bir xil javobni (Ha yoki Yo'q) berishi kerak.
A va B muammolari kirish va o'zgartirilgan kirish uchun bir xil javobni (Ha yoki Yo'q) berishi kerak yoki javob qaytarilmasi kerak.
A va B muammolari chiqish va o'zgartirilmagan chiqish uchun bir xil javobni (Ha yoki Yo'q) berishi kerak.

№129.	
Manba:Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
Muammo NP-tugaganligini  to'liqligini isbotlash nechta bosqichni o'z ichiga oladi?
2
3
6
5

№130.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
NP ta’rifi to’g’ri ko’rsatilgan qatorni toping?
noaniq bo'lmagan polinomik vaqt ichida yechilishi mumkin bo'lgan yechimlar muammolarining to'plami
Deterministik Turing mashinasi tomonidan ko'paytirilgan vaqt ichida echiladigan muammolar to'plami
Nondeterministic Turing Machine tomonidan ko'paytirilgan vaqt ichida echiladigan muammolar to'plami
aniq bo'lmagan polinomik vaqt ichida yechilishi mumkin bo'lgan yechimlar muammolarining to'plami

№131.	
Manba:Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
Hodisa tadqiqoti, masala yechimi uchun hisoblash texnikasi yordamida qabul qilish kerak bo‘lgan amallarning umumiy tartibini quyidagicha qaysi sxema sifatida tasvirlash mumkin?
Hodisa,  jarayon, masala * model*algoritm*dastur*kompyuter*natija.
Hodisa,  jarayon, masala * algoritm*model* dastur*kompyuter*natija.
Hodisa,  jarayon, masala * model* dastur*algoritm* kompyuter*natija.
Hodisa,  jarayon, masala * model*algoritm* kompyuter*dastur* natija.

№132.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
Ushbu cout<<(25-25/(10+25)%10+10); instruktsiya bajarilishi natijasida ekranga chiqariladigan xabar to’g’ri ko’rsatilgan javobni aniqlang  
35
36
15
16

№133.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
Og’irlikka (vaznga) ega bo’lgan graf qanday graf hisoblanadi?
qirralari (yoylari) og’irliklari bilan berilgan graf hisoblandi.
qirralari (yo’ylari) og’irliklari bilan berilmagan graf hisoblandi.
Tugunlari soni bilan aniqlanadigan graf hisoblandi.
qirralari ilmoqli bo’lgan graf hisoblandi.

№134.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
Algebraik va transsendent tenglamalarni taqribiy yechish usulini tanlang?
Urinma
transsendent
To‘g‘ri to‘rtburchak
Kesmani bo‘lish
№135.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 2
Berilgan   ifoda qaysi taqribiy hisoblash usululi formulasi
Urinma
Vatarlar
Simpson
Kesmani teng ikkiga bo‘lish

№136.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 
2
Jadval ko’rinishida berilgan funksiyalarni analitik ko’rinishda ifodalashda qaysi usullar yoki formulalar ishlatiladi?
Kichik kvadratlar usuli, Lagranj interpolyasion formulasi, Nyuton interpolyasion formulalari
Kramer
Boks
Krilov formulasi

№137.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 
2
Ushbu usul  , n=0,1,2…..tenglamani taqribiy  yechish holi jarayoni qanday nomlanadi.
Aniq yechimga intiladigan ketma-ketlik bo`lib, bu jaroyonni oddiy iteratsion jarayon deyiladi.   
Aniq yechimga intiladigan ketma-ketlik bo`lib, bu jarayon yuqori tartibli iteratsion jaroyon deyiladi.
Yechimga intiladigan ketma-ketlik bo`lib, bu jarayon iteratsion jarayon deyiladi.
Aniq yechimga intilmaydigan ketma-ketlik bo`lib,bu jarayon oddiy iteratsion jarayon deyiladi

№138.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 2
   tenglamaga teng kuchli tenglamani ko`rsating.
 
 
 
 

№139.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 2
 tenglamaning bitta haqiqiy ildizi  quyidagi oraliqlarning  qaysi birida yotibdi?
[0;1]
[-1;0]
[ ;1]
[1;1,5]

№140.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 2
f(x)=0 chiziqsiz tenglamani ildizini [a,b] oraliqqa taqribiy yechishda [a,b] oraliqda f(x) funksiyaga qo’shilgan talablardan qaysi biri to’g’ri?
  
oraliqda ishorasini saqlashi
  oraliqda nol tengligi
  
	  
 oraliqda nollari bo’lmasa
  funksiya uzlukli bo’lsa

№141.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 3
To’g’ri to’rtburchaklar formulasi xatoligini baholang?
 
 
 
 

№142.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 3
Simpson formulasi xatoligini baholang?
 
 
 
 

№143.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 3
Trapetsiya formulasi xatoligini baholang?
 
 
 
 

№144.	
Manba:
Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 3
To`g’ri turtburchaklar formulalari yordamida  integralning taqribiy qiymatlari topilsin
0,69
0,45
0,32
0,89

№145.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
To’g’ri to’rtburchaklar formulasining qoldiq hadini (xatoligini) aniqlang?
 
 
 
 

№146.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
Simpson formulasining qoldiq hadini (xatoligini) aniqlang?
 
 
 
 

№147.	
Manba:
Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
Trapetsiya formulasining qoldiq hadini (xatoligini) aniqlang?
 
 
 
 

№148.	
Manba:
Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 2
Aniq integralni hisoblashning Simpson usuli bilan yechish formulasini ko’rsating!
 
 
 
 

№149.	
Manba:
Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 2
Aniq integralni hisoblashning Trapetsiya usuli bilan yechish formulasini ko’rsating
 
 
 
 

№150.	
Manba:
Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 2
f(x) tenglamaning ildizini Nyuton usuli bilan taqribiy hisoblashda [a;b] oraliqning quyidagi shartlardan qaysi birini qanoatlantiruvchi chetki nuqtasi x0 boshlang’ich qiymat sifatida tanlab olinadi?
f(x)f’’(x)>0 shartni qanoatlantiruvchi nuqtasi
f(x)f’(x)>0 shartni qanoatlantiruvchi nuqtasi
f(x)f’(x)<0 shartni qanoatlantiruvchi nuqtasi
f(x)f’’(x)<0 shartni qanoatlantiruvchi nuqtasi

№151.	
Manba:
Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 2
Nochiziqli algebraik tenglamalarni echish uchun N’yuton usulida x0 tanlash shartini ko’rsating!
 
 
 
 

№152.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 1
Nochiziqli algebraik tenglamalar yechishning Nyuton usuli formulasi qaysi javobda to’g’ri ko’rsatilgan
 
 
 
 

№153.	
Manba: Седжвик Р. Фундаментальные алгоритмы на C++.–М.:Вильямc.  – 2001.
Qiyinlik darajasi – 2
Qaysi formula Nyuton metodining modifikatsiyasi?
 
 
 
 

№154.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
Algebraik tenglamalarni echish uchun oddiy iteratsiya usulining formulasi qaysi javobda to’g’ri keltirilgan?
 
 
 
 

№155.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Oddiy iteratsiya usulining yaqinlashish sharti qaysi javobda to’g’ri keltirilgan?
 
 
 
 

№156.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
f(x)=0 tenglama unga teng kuchli bo’lgan x=j(x) kanonik shaklga keltirilgan va ildizlari ajratilgan bo’lsa, uni qaysi metod yordamida yechishning zaruriy sharti?
oddiy iteratsiya metodi
Gorner sxemasi
Nyuton metodi
Vatarlar metodi

№157.	
Manba:
Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
   tenglamaning eng katta musbat ildizini iteratsiya usuli bilan topish uchun tenglamani iteratsiya metodini qo'llash uchun qulay holga keltiring.
 
 
 
 

№158.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
   tenglamaning    oraliqdagi yagona ildizini Nyuton metodi bilan topishda   qanday shartni qanoatlantirishi kerak.
 
 
 
 

№159.	
Manba:
Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi –  2
f(x) tenglamaning ildizini Vatar usuli bilan taqribiy hisoblashda [a;b] oraliqning quyidagi shartlardan qaysi birini qanoatlantiruvchi chetki nuqtasi x0 boshlang’ich qiymat sifatida tanlab olinadi?
f(x)f’’(x)<0 shartni qanoatlantiruvchi nuqtasi
f(x)f’(x)<0 shartni qanoatlantiruvchi nuqtasi
f(x)f’’(x)>0 shartni qanoatlantiruvchi nuqtasi
f(x)f’(x)>0 shartni qanoatlantiruvchi nuqtasi 

№160.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
Nochiziqli algebraik tenglamalarni echish uchun vatarlar usulida x0 tanlash shartini ko’rsating!

 ,  
 
 
 

№161.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
Vatarlar usulining formulasini aniqlang?
 
 
 
 

№162.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
Agar [a,b] oraliqning o‘ng tomonida  f(b)·f’’(b)<0¬ shart bajarilsa …
Vatarlar usulini o‘ng tomondan qo‘llaymiz
Vatarlar usulini chap tomondan qo‘llaymiz
Vatarlar usulini qo’llab bo’lmaydi
Kesmani teng ikkiga bo’lish usuli qo’llaniladi

№163.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
  tenglamaning   dagi yagona ildizini vatar usuli bilan topishda    qanday shartni qanoatlantirish kerak?
 
 
 
 

№164.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
f(x)=0 tenglama uchun [a;b] oraliqda uzluksiz f(x) kamida bitta haqiqiy ildizga ega bo’lishi uchun qanday shart bajarilishi lozim?
f(a)f(b)<0 
f(a)f(b)=0
f(a)f(b)>0
0<f(a)f(b)<1

№165.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
f(x)=0 tenglamaning [a;b] oraliqda ildizi mavjud bo’lmaslik yoki juft bo’lishi sharti qaysi javobda berilgan?
f(a)f(b)>0
f(a)+f(b)>0
f(a)f(b)<0
f(a)+f(b)<0

№166.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Kesmani teng 2 ga bo’lish usulida qaysi shart bajarilishi talab etiladi?
 
 
 
 

№167.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Kesmani teng ikkiga bo‘lish usulida ildizlarni taqribiy aniqlash ketma-ketligini belgilang.
  
  
  
  

№168.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
  da   tenglama ildizi mavjud bolib,   va    bo’lsin. Agar   bo’lsa, ildiz qaysi oraliqda bo’ladi?
 
 
 
 

№169.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Chiziqsiz tenglamalarni qaysi usullar bilan yechish mumkin?
Kesma teng ikkiga bo’lish usuli bilan;
Galerkin usuli bilan
chekli ayirmali usullar bilan
Gauss metodlari bilan.

№170.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Chiziqsiz tenglamalarni qaysi usullar bilan yechish mumkin?
Vatarlar usuli bilan;
chekli ayirmali usullar bilan
Galerkin usuli bilan
Runge-Kutta metodlari bilan

№171.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Chiziqsiz tenglamalarni qaysi usullar bilan yechish mumkin?
Urunma usuli bilan
Galerkin usuli bilan
Runge-Kutta metodlari bilan
chekli ayirmali usullar bilan.

№172.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Chiziqsiz tenglamalarni qaysi usullar bilan yechish mumkin?
iteratsion usullar bilan;
Runge-Kutta metodlari bilan
chekli ayirmali usullar bilan
Galerkin usuli bilan.

№173.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
  oraliqda   tenglama yagona haqiqiy ildizga ega bo‘lish sharti qaysi javobda to’g’ri ko’rsatilgan?

  
  
  
  

№174.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
(2x-1)  
  tenglamaning taqribiy ildizini grafik usulda topishda  quyidagilarning qaysi biridan foydalaniladi .
2x-1= 
2x+1= 
2x= 
2x+ 

№175.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
Chiziqli dasturlashtirish deb nima aytiladi?  
Agar maqsad funksiyasi va cheklanishlar tizimi noma’lumlarga nisbatan chiziqli bo’lgan hol uchun dasturlashtirish
Agar maqsad funksiyasi yoki cheklanishlar tizimi noma’lumlarga nisbatan chiziqli bo’lgan hol uchun dasturlashtirish
Agar maqsad funksiyasi noma’lumlarga nisbatan chiziqli bo’lgan hol uchun dasturlashtirish
Agar cheklanishlar tizimi noma’lumlarga nisbatan chiziqli bo’lgan hol uchun dasturlashtirish

№176.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
f(x)=0 chiziqsiz tenglamani ildizini [a,b] oraliqqa taqribiy yechishda [a,b] oraliqda f(x) funksiyaga qo’shilgan talablardan qaysi biri to’g’ri?
  
oraliqda ishorasini saqlashi
  oraliqda nol tengligi
  
	  
 oraliqda nollari bo’lmasa
  funksiya uzlukli bo’lsa

№177.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
Chiziqsiz iyerarxik bog’langan ma’lumotlar tuzilmasi – bu …
Daraxt
Graf
Lug’at
Ro’yxat







№178.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
Dastur fragmentining natijsini aniqlang:   
6 6 11
6 6 12
6 5 11
5 6 11

№179.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 2
Qaysi biri false kalit so’ziga mos qiymatini aniqlaydi?
0
1
-1
66

№180.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
Fure qatorini hisoblashda funksiya juft bo’lsa qaysi koefitsentlar hisoblanadi.
 ,  
 ,  ,  
 ,  
 ,  

№181.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
Ushbu  toq funksiyaning Furye qatori topilsin.
 
 
 
  

№182.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
Algebraik va transsendent tenglamalarni taqribiy yechish xatoligini tekshirish
     
     
     
     

№183.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
Qanday shart bajarilsa      oraliqda      tenglama yagona xaqiqiy ildizga ega bo‘ladi.
 
 
 
 

№184.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
. . .  shartlarga mos keluvchi resusrlarni bir birlikka oshirilishi optimal yechimning o’zgarishiga olib keladi
Aktiv
Passiv
Optimal
Mutloq chegaraviy

№185.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
 . . . shartlarga mos keluvchi resurslar kamyob bo’lmaydi 
Passiv
Aktiv 
Optimal
Mutloq chegaraviy 

№186.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
GTE ish tsikli nechta bosqichni o'z ichiga oladi
5
4
3
2

№187.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
Bazisga kiruvchi vektorlar. . . . . . . deb ataladi.
Bazis vektorlari
Umimiy vektor
O’zgaruvchan vektorlar
O’zgarmas vektorlar

№188.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3
Bazis vektorlariga mos keluvchi o’zgaruvchilar esa . .  .. . . . . .  bo’ladi.
Bazis o’zgaruvchilari
Bazis o’zgarmaslari
Vektor o’zgaruvchilar
Vektor o’zgarmaslar

№189.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 3

Erkin o’zgaruvchilarga . . . . . . . qiymat berib topiladigan xususiy yechim basis yechim deb ataladi.
0
1
2
3

№190.	
Manba: Вирт Н. Алгоритмы и структуры  программы//М., Оберон, 2010 г.
Qiyinlik darajasi – 1
Egizak masala yechimini . . . . . . . .  usulda asosiy masala bilan birgalikda bir yo’la topish mumkin.
Simpleks
Bazis
Oraliqni ikkiga bo’lish
Geometrik

№191.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 1
Agar asosiy masalada daromadlarni maksimal bo’lishini ta’minlaydigan reja izlangan bo’lsa,. . . . . . . .  masalada harajatlarni minimal bo’lishini ta’minlaydigan qiymatlar izlanar ekan
Egizak
Bazis
Geomrtrik
Optimal

№192.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 1
Egizak masala uchun  ham . . . . . . . . . . qavariq soha bo’ladi.
MBES
MBAS
MBAC
MEBS

№193.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 1
Bazis vektorlar: 
Pn+1, Pn+2, …, Pn+m
P
P(a+b)+P(a1+b1)….
P1, P2, …, Pk

№194.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 2
Agar nuqta ko’pyoqli yechimning uchi bo’lsa, u holda (2) yoyilmadagi har bir xj ( ) larga mos Pj vektorlar o’zaro . . . . . . . . bog’liqsiz bo’ladi.
chiziqli
chiziqsiz
mantiqiy
ikkilik

№195.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 2
Simpleks usuli birinchi bo’lib kim tomonidan nechanchi yilda taklif etilgan?
1939 yilda rus matematigi L. V. Kantorovich.
1956 yilda Dansig tomonidan.
D. Dansig tomonidan 1949 yilda.
Simpson tomonidan 1935 yilda.

№196.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 2
short yoki short int - qanday tipdagi ma’lumotlarni anglatadi  
qisqa butun son
haqiqiy son
uzun butun son
butun son

№197.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 3
long yoki long int - qanday tipdagi ma’lumotlarni anglatadi  
 uzun butun son
butun son
qisqa butun son
haqiqiy son

№198.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 3

double kalit so’zi anglatadigan ma’lumot tipi ko’rsatilgan satrni toping?  
haqiqiy sonlar
simvolli (belgili) qiymatlar
butun sonlar
mantiqiy qiymatlar

№199.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 3

float kalit so’zi anglatadigan ma’lumot tipi ko’rsatilgan satrni toping?  
 haqiqiy sonlar 
mantiqiy qiymatlar;
simvolli (belgili) qiymatlar;
butun sonlar;

№200.	
Manba: Серебряная Л.В. Структуры и алгоритмы обработки данных: учеб.-метод. пособие/ Л.В. Серебряная, И.М. Марина. – Минск: БГУИР, 2013. – 51 с.
Qiyinlik darajasi – 3

Butun tipli o’zgaruvchilar to’g’ri e’lon qilingan javobni ko’rsating  
int p, q;
double p, q;
boolean b;
char nq10;



? Ethernet tarmoqlarida uzatish muhitiga murojaat qilishning qaysi usuli qo’llaniladi?
+ CSMA/CD
- CSTK/CE
- CSQE/NQ
- CSTK/QL

? Ethernetda kommutatsiyalashning qaysi xilidan foydalaniladi?
+ paketlarni deytagrammali kommutatsiyalash
- paketlarni virtual kanal orqali uzatish
- vaqtni taqsimlash aso-sida kanallarni kommu-tatsiyalash
- chastotali multi-plekslash asosida kanallarni kommu-tatsiyalash

? Optik tolali Ethernet tarmog’ining maksimal uzunligi qanday?
+ 2740 m
- 500 m
- 5000 m
- 2500 m

? 100Base-TX spetsifikatsiyasi qaysi texnologiyaga tegishli?
+ Fast Ethernet
- Ethernet
- Gigabit Ethernet
- FDDI

? Fast Ethernet texnologiyasi spetsifikatsiyalari qaysi komitet tarkibida ishlab chiqilgan?
+ 802.3
- 802.1
- 802.2
- 802.5

? Ethernet texnologiyasida koaksial kabelining ma’lumotlarni uzatish tezligi qanday?
+ 10 Mbit/s
- 1 Mbit/s
- 100 Mbit/s
- 1000 Mbit/s

? Fast Ethernet texnologiyasida o’ralma juftlik kabelining ma’lumotlarni uzatish tezligi qanday?
+ 100 Mbit/s
- 1 Mbit/s
- 10 Mbit/s
- 1000 Mbit/s

? Lokal tarmoqlarda keng tarqalgan topologiya turi qaysi?
+ Yulduz
- Xalqa
- Umumiy shina
- To’liq bog’lanishli

? 100Base-TX spetsifikatsiya qaysi texnologiyaga tegishli?
+ Fast Ethernet
- Ethernet
- Gigabit Ethernet
- 10G Ethernet

? 1000Base-SX spetsifikatsiya qaysi texnologiyaga tegishli?
+ Gigabit Ethernet
- Ethernet
- Fast Ethernet
- 10G Ethernet

? Fast Ethernet texnologiyasida qaysi turdagi kabel tizimlaridan foydalanilgan?
+ ko’pmodali optik tolali, 5 kategoriyali o’ralma juftlik, 3 kategoriyali o’ralma juftlik
- bittamodali optik tolali , 5 kategoriyali o’ralma juftlik, 3 kategoriyali o’ralma juftlik
- ingichka koaksial kabel, 5 kategoriyali o’ralma juftlik, 3 kategoriyali o’ralma juftlik
- yo’g’on koaksial kabel, 5 kategoriyali o’ralma juftlik, 3 kategoriyali o’ralma juftlik

? MАC sath osti satxi OSI modelining qaysi sathiga tegishli?
+ kanal sathiga
- tarmoq sathiga
- fizik sathiga
- transport sathiga

? Ethernet texnologiyasi nechta standartga ega?
+ 4
- 3
- 2
- 6

? Fast Ethernet texnologiyasi nechta spetsifikatsiyaga ega?
+ 3
- 4
- 2
- 6

? Umumiy shina topologiyali lokal tarmoqlarda kontsentratorlar qanday funktsiyani bajaradi?
+ Kompyuter tomonidan uzatilayotgan ma’lumotni barcha kompyuterga yo’naltiradi
- Kompyuter tomonidan uzatilgan ma’lumotni boshqa bir kompyuterga yo’naltiradi
- Kompyuter tomonidan uzatilgan ma’lumotni xalqa orqali keyingi kompyuterga yo’naltiradi
- Tarmoqning ikki segmentini o’zaro bog’laydi

? Simsiz tarmoqlar standartlari qaysi komitet tarkibida ishlab chiqilmoqda?
+ 802.11
- 802.7
- 802.6
- 802.12

? Xozirgi paytda ko’p ishlatiladigan, 802.11 standartiga tegishli spetsifikatsiyani ko’rsating
+ a, b, g
- a, b, d
- a, b, c
- a, b, e

? 802.11 spetsifikatsiyasi simsiz lokal tarmog’i diametrining chegaralari qanday?
+ 100 - 300 m
- 50 - 100 m
- 300 – 400 m
- 100 -200 m

? Tarmoqni fizik strukturalashda qaysi qurilma ishlatiladi?
+ takrorlovchi (kontsentrator)
- kommutator
- ko’prik
- shlyuz

? Qaysi qurilma tarmoqning mantiqiy strukturasini o’zgartirishi mumkin?
+ ko’prik, marshrutizator,kommutator va shlyuz
- faqat kommutator
- takrorlovchi
- kontsentrator

? Kompyuter tarmog’ining fizik strukturalash nima maqsadda amalga oshiriladi?
+ Tarmoq diametrini oshirish uchun
- Unumdorlikni oshirish uchun
- Internetga ulanish uchun
- Tarmoqosti tarmoqlarini bog’lashni amalga oshirish uchun

? Kompyuter tarmog’ining mantiqiy strukturalash nima maqsadda amalga oshiriladi?
+ Trafikni lokallashtirish uchun
- Internetga ulanish uchun
- Tarmoq diametrini oshirish uchun
- Tarmoqosti tarmoqlarini bog’lashni amalga oshirish uchun

? Kommutator ko’prikdan nimasi bilan farq qiladi?
+ Kadrlarni parallel qayta ishlashda
- Tarmoqqa ulanish usulida
- Kadrlarni uzatish algoritmida
- Kadrlarni uzatish usulida

? OSI modelida nechta sath mavjud?
+ 7
- 4
- 5
- 6

? OSI modelining to’rtinchi satxi qanday nomlanadi?
+ Transport sathi
- Аmaliy sath
- Seanslar sathi
- Taqdimlash sathi

? OSI modelining beshinchi satxi qanday nomlanadi?
+ Seanslar sathi
- Transport sathi
- Seanslar sathi
- Taqdimlash sathi

? OSI modelining birinchi satxi qanday nomlanadi?
+ Fizik sath
- Transport sathi
- Seanslar sathi
- Taqdimlash sathi

? OSI modelining ikkinchi satxi qanday nomlanadi?
+ Kanal sathi
- Аmaliy sathi
- Seanslar sathi
- Taqdimlash sathi

? OSI modelining uchinchi satxi qanday nomlanadi?
+ Tarmoq sathi
- Аmaliy sathi
- Seanslar sathi
- Taqdimlash sathi

? OSI modelining oltinchi satxi qanday nomlanadi?
+ Taqdimlash sathi
- Аmaliy sathi
- Seanslar sathi
- Kanal sathi

? OSI modelining yettinchi satxi qanday nomlanadi?
+ Аmaliy sath
- Seanslar sathi
- Transport sathi
- Kanal sathi

? OSI modelining qaysi sathlari tarmoqqa bog’liq satxlar hisoblanadi?
+ fizik, kanal va tarmoq sathlari
- seans va amaliy sathlar
- amaliy va taqdimlash sathlari
- transport va seans sathlari

? OSI modelining tarmoq sathi vazifalari keltirilgan qurilmalarning qaysi birida bajariladi?
+ Marshrutizator
- Ko’prik
- Tarmoq adapter
- Kontsentrator

? OSI modelining kanal satxi orqali uzatiladigan ma’lumotlarning birligi qanday nomlanadi?
+ Kadr
- Paket
- Segment
- Oqim

? OSI modelining tarmoq satxi orqali uzatiladigan ma’lumotlarning birligi qanday nomlanadi?
+ Paket
- Kadr
- Xabar
- Oqim

? Еlektr signallarini qabul qilish va uzatish vazifalarini OSI modelining qaysi sathi bajaradi?
+ Fizik sath
- Seanslar sathi
- Transport sathi
- Kanal sathi

? Ma’lumotlarni uzatishning optimal marshrutlarini aniqlash vazifalarini OSI modelining qaysi sathi bajaradi?
+ Tarmoq sathi
- Аmaliy sathi
- Seanslar sathi
- Taqdimlash sathi

? Mijozlar dasturlari bilan o’zaro muloqot vazifalarini OSI modelining qaysi sathi bajaradi?
+ Аmaliy sath
- Seanslar sathi
- Transport sathi
- Kanal sathi

? Keltirilgan protokollarning qaysilari tarmoq sathi protokollariga mansub?
+ IP, IPX
- NFS, FTP
- Ethernet, FDDI
- TCP,UDP

? Keltirilgan protokollarning qaysilari transport sathi protokollariga mansub?
+ TCP,UDP
- NFS, FTP
- Ethernet, FDDI
- IP, IPX

? Keltirilgan protokollarning qaysilari amaliy sathi protokollariga mansub?
+ NFS, FTP
- TCP,UDP
- 10Base-T, 100Base-T
- IP, IPX

? OSI modelining fizik sathi qanday funktsiyalarni bajaradi?
+ Elektr signallarini uzatish va qabul qilish
- Аloqa kanalini va ma’lumotlarni uzatish muxitiga murojat qilishni boshqarish
- Bog’lanish seansini yaratish, kuzatish, oxirigacha ta’minlash
- Klient dasturlari bilan o’zaro muloqotda bo’lish

? OSI modelining kanal sathi qaysi funktsiyalarni bajaradi?
+ Аloqa kanalini va ma’lumotlarni uzatish muxitiga murojat qilishni boshqarish
- Klient dasturlari bilan o’zaro muloqotda bo’lish
- Bog’lanish seansini yaratish, kuzatish, oxirigacha ta’minlash
- Ma’lumotlarni kodlash va shifrlash

? OSI modelining tarmoq sathi qanday funktsiyalarni bajaradi?
+ Ma’lumotlarni uzatish marshrutlarini optimalini aniqlash
- Аloqa kanalini va ma’lumotlarni uzatish muxitiga murojat qilishni boshqarish
- Ma’lumotlarni qabul qilish va uzatish jarayonida, ma’lumotlarni to’liq va to’g’ri uzatilishini nazorat qilish
- Эlektr signallarini uzatish va qabul qilish

? MАС-adres qanday uzunlikka ega?
+ 48 bit
- 32 bit
- 16 bit
- 64 bit

? IPv4 turidagi IP-adres qanday uzunlikka ega?
+ 32 bit
- 48 bit
- 16 bit
- 64 bit

? 192.190.21.254 adresi IP-adreslarningqaysi sinfiga tegishli?
+ C
- V
- A
- D

? B sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?
+ 65536
- 256
- 512
- 1024

? А sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?
+ 16777216
- 256
- 65536
- 1024

? B sinfidagi tarmoq maskasi qanday qiymatga ega?
+ 255.255.0.0
- 255.0.0.0
- 255.255.255.0
- 255.255.254.0

? Internet tarmog’i, kompyuter tarmoqlarining qaysi sinfiga mansub?
+ global tarmoq
- lokal tarmoq
- shahar tarmog’i
- korporativ tarmog’i

? Keltirilgan texnologiyalarning qaysi birlari global tarmoq texnologiyalariga mansub?
+ ATM, TCP/IP
- Frame Relay, Token Ring
- Ethernet, Internet
- X.25, FDDI

? MAN tarmoqlari nima uchun mo’ljallangan?
+ Yirik shaxar axolisiga xizmat ko’rsatish uchun
- Internetga korxonalar tarmoqlarini ulash uchun
- Faqat bir nechta lokal tarmoqlarni bog’lash uchun
- Faqat korporativ tarmoqning filiallarini ulash uchun

? 1980-1985 yillarda dastlabki lokal kompyuter tarmoqlari hisoblangan qanday lokal kompyuter tarmoqlari texnologiyalari ishlab chiqildi?
+ Ethernet, ArcNet, Token Ring, Token Bus va FDDI
- Ethernet texnologiyasining 10Base-5
- Token Ring va FDDI
- Local Area Network, LAN

? OSI modelida necha xil turdagi protokollar bor?
+ 3 xil
- 2 xil
- 4 xil
- Bir nechta xildagi

? Tarmoq ilovalari nima uchun xizmat qiladi?
+ Foydalanuvchilarga, kompyuter tarmog'i tomonidan ko'rsatilishi mumkin bo'lgan turli xil xizmatlarni amalga oshiruvchi dasturlar tushuniladi.
- Global va lokal tarmoq ilovalari
- Xizmatlarni amalga oshiruvchi dasturlar.
- Kompyuter tarmog'ini qurish va ishlatish uchun etarli bo'lgan bir-biriga moslashtirilgan apparat va dasturiy vositalar to'plami, hamda aloqa chiziqlari orqali ma'lumotlarni uzatish imkonini beradigan uskunalar tushuniladi.

? Kompyuter tarmog'i texnologiyalari deganda nimani tushunasiz?
+ Kompyuter tarmog'ini qurish va ishlatish uchun etarli bo'lgan bir-biriga moslashtirilgan apparat va dasturiy vositalar to'plami, hamda aloqa chiziqlari orqali ma'lumotlarni uzatish imkonini beradigan uskunalar tushuniladi
- Foydalanuvchilarga, kompyuter tarmog'i tomonidan ko'rsatilishi mumkin bo'lgan turli xil xizmatlarni amalga oshiruvchi dasturlar tushuniladi.
- Global va lokal tarmoq ilovalari
- Xizmatlarni amalga oshiruvchi dasturlar.

? TCP/IP steki nechta sathga ajratilgan?
+ To’rtta sathga
- Beshta sathga
- Ikkta sathga
- Oltita sathga

? FTP (File Transfer Protokol) qanday protokol?
+ Fayllarni uzatish protokoli
- Terminalni emulasiya qilish protokoli
- Elektron pochtani uzatishning oddiy protokoli
- Gipermatnni uzatish protokoli

? Telnet qanday protokol?
+ Terminalni emulasiya qilish protokoli
- Fayllarni uzatish protokoli
- Elektron pochtani uzatishning oddiy protokoli
- Gipermatnni uzatish protokoli

? ЅMTR (Simple Mail Transfer Protocol) qanday protokol?
+ Elektron pochtani uzatishning oddiy protokoli
- Fayllarni uzatish protokoli
- Terminalni emulasiya qilish protokoli
- Gipermatnni uzatish protokoli

? HTTP (Hyper Text Transfer Protocol) qanday vazifani bajarish uchun mo'ljallangan protokol?
+ Gipermatnni uzatish protokoli
- Fayllarni uzatish protokoli
- Terminalni emulasiya qilish protokoli
- Elektron pochtani uzatishning oddiy protokoli

? IP-protokol qanday vazifani bajaradi?
+ Paketlarni tarmoqlar o'rtasida bir marshrutizatordan boshqasiga, to paket, u yuborilgan tarmoqqa etib borguncha xarakatlantirish vazifasini bajaradi.
- Paketlarni tarmoqlar o'rtasida bir marshrutizatordan boshqasiga yo’naltirish vazifasini bajaradi.
- Yuborilgan ma’lumotlarni qayta ishlash vazifasini bajaradi
- Paketlar bilan o’zaro ma’lumotlarni almashinish vazifasini bajaradi

? IP-paket qanday qismlardan iborat bo'ladi?
+ Sarlavxa va ma'lumotlar yoziladigan qismlardan iborat
- Ma’lumotlar saqlash va qayta ishlash qismlardan iborat
- Yuborish va saralash qismlardan iborat
- Ma’lumotlar yozish va yuborish qismlaridan iborat

? IP-protokolining funktsional jihatdan sodda yoki murakkabligi nimalarga bog’liq?
+ IP-paketning sarlavxasi qay darajada sodda yoki murakkab ekanligiga bog'liq
- IPlrning soddajoylashganligiga bog’liq
- IP-paketning sarlavxasi murakkab ekanligiga bog'liqdir
- IP-paketning sarlavxasi sodda ekanligiga bog'liqdir

? IPv4-paket sarlavhasining uzunligi necha bitdan iborat?
+ 4 bitdan
- 8 bitdan
- 16 bitdan
- 32 baytdan

? Simsiz MAN tarmog’lari qanday texnologiyalarda quriladi?
+ WiMAX, LTE, sputnik
- MAN, LAN
- LTE, MAN, LAN, WiMAX
- WiMax, MAN

? IMS kommutator qanday vazifani baradi?
+ Shahar tarmoqlari turli tarmoqlar bir-biri bilan bog’lanish jarayonini nazorat qiladi.
- An’anaviy kommutatsiya jarayonida OSI modelida ishlaydi.
- Katta o’lchamli tarmoqlar orasida ko’prik vazifasini o’tashda.
- Shahar tashqarisi tarmoqlari turli tarmoqlar bir-biri bilan bog’lanish jarayonini nazorat qiladi

? Qanday tarmoqlar yirik lokal tarmoqlarni birlashtirish uchun foydalanilad?
+ Territorial magistral tarmoq
- Magistral tarmoq
- Global tarmoq
- Territorial tarmoq

? Markaziy lokal tarmoqlarni uzoqdan turib ulaish serveri?
+ RAS
- IP
- TCP
- TCP/IP

? ATM tehnologiyasining uzatish tezligi necha bit/sek larga yetkazilgan
+ 2-10 bit/sek
- 6-20 bit/sek
- 1-30 bit/sek
- 2-20 bit/sek

? RAS server qaysi dasturiy apparat kompleksdan iborat?
+ Mashrutizator, ko’prik, shlyar
- Local, dasturiy vositalar
- Territol, dasturiy vositalar
- Magistral, dasturiy vositalar

? Marshrutlash protakollari nechta sinfga bo’linadi?
+ 2 ta
- 3 ta
- 4 ta
- 6 ta

? Ichki shlyuz protokollari qanday protokollar bilan ishlaydi?
+ RIP, IBRP, OSPF, IS-IS
- BBP, RIP, IS-IS
- OSPF, B6P, TCP/IP
- TCP/IP, IS-IS, RIP

? Qanday protakol yo’llari ko’rsatilgan ma’lumotlarni tashqi tarmoqqa uzatadi?
+ BBP (bateway to bateway Protocol)
- IBP (Interot bateway Protocol)
- FTP (File Transfer Protocol)
- TCP/IP Ptotocol

? OSI modelining amaliy sathi qanday funktsiyalarni bajaradi?
+ Klient dasturlari bilan o’zaro muloqotda bo’lish
- Аloqa kanalini va ma’lumotlarni uzatish muxitiga murojat qilishni boshqarish
- Bog’lanish seansini yaratish, kuzatish, oxirigacha ta’minlash
- Elektr signallarini uzatish va qabul qilish

? Ulanish tarmoqlarini bog’lashni va yuqori tezlikdagi kanallar orqali trafik tranzitini ta’minlashni, qaysi tarmoq amalga oshiradi?
+ Magistral tarmoq
- Аloqa operatorlari tarmog’i
- Korporativ tarmoq
- Bino tarmog’i

? C sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?
+ 256
- 65536
- 512
- 1024

? А sinfidagi tarmoq maskasi qanday qiymatga ega?
+ 255.0.0.0
- 255.255.0.0
- 255.255.255.0
- 255.0.0

? C sinfidagi tarmoq maskasi qanday qiymatga ega?
+ 255.255.255.0
- 255.0.0.0
- 255.255.0.0
- 255.255.240.0

? 512 ta bog’lamli tarmoqosti tarmoq maskasi qanday qiymatga ega?
+ 255.255.254.0
- 255.0.0.0
- 255.255.0.0
- 255.255.240.0

? Internet tarmog’ida kommutatsiyalashning qaysi xili ishlatiladi?
+ paketlarni kommutatsiyalash
- kanallarni kommutatsiyalash
- xabarlarni kommutatsiyalash
- alohida ajratilgan kanallarni kommutatsiyalash

? UTP kabeli deganda qaysi kabel tushuniladi?
+ o’ralma juftlik kabeli
- yo’g’on koaksial kabel
- ingichka koaksial kabel
- optik tolali kabel

? Modem kanday asosiy vazifani bajaradi?
+ signallarni modulyatsiyalash - demodulyatsiyalash
- parallel kodni ketma-ket kodga o’zgartirish
- skrembrlash va deskrembrlashanalog signallarni raqamli kodga o’zgartirish
- analog signallarni raqamli kodga o’zgartirish

? Keltirilgan qurilmalarning qaysi biri DCE bo’ladi?
+ modem
- marshrutizator
- kompyuter
- Klaviatura

? Keltirilgan qurilmalarning qaysi biri DTE bo’ladi?
+ kompyuter va marshrutizator
- modem
- aloqa chiziqlari
- kabellar

? Keltirilgan protokollarning qaysilari fizik sath protokollariga mansub?
+ 10Base-T, 100Base-T
- TCP,UDP
- IP, IPX
- NFS, FTP

? Keltirilgan protokollarning qaysilari taqdimlash sathi protokollariga mansub?
+ SNMP, Telnet
- IP, IPX
- Ethernet, FDDI
- TCP,UDP

? Keltirilgan protokollarning qaysilari saenslar sathi protokollariga mansub?
+ RPC, WSP
- IP, IPX
- Ethernet, FDDI
- TCP,UDP

? OSI modelining transport sathi qanday funktsiyalarni bajaradi?
+ Ma’lumotlarni qabul qilish va uzatish jarayonida, ma’lumotlarni to’liq va to’g’ri uzatilishini nazorat qilish
- Bog’lanish seansini yaratish, kuzatish, oxirigacha ta’minlash
- Ma’lumotlarni uzatish marshrutlarini optimalini aniqlash
- Klient dasturlari bilan o’zaro muloqotda bo’lish

? OSI modelining seanslar sathi qanday funktsiyalarni bajaradi
+ Bog’lanish seansini yaratish, kuzatish, oxirigacha ta’minlash
- Klient dasturlari bilan o’zaro muloqotda bo’lish
- Аloqa kanalini va ma’lumotlarni uzatish muxitiga murojat qilishni boshqarish
- Elektr signallarini uzatish va qabul qilish

? OSI modelining taqdimlash sathi qanday funktsiyalarni bajaradi
+ Ma’lumotlarni kodlash va shifrlash
- Klient dasturlari bilan o’zaro muloqotda bo’lish
- Klient dasturlari bilan o’zaro muloqotda bo’lishni ta’minlash
- Elektr signallarini uzatish va qabul qilish

? Аloqa kanaliga va uzatish muhitiga ulanishni boshqarish vazifalarini OSI modelining qaysi sathi bajaradi?
+ Kanal sathi
- Fizik sath
- Tarmoq sathi
- Transport sathi

? Ma’lumotlarni uzatish jarayonida ularni to’liq va to’g’ri uzatilishini nazorat qilish vazifalarini OSI modelining qaysi sathi bajaradi?
+ Transport sathi
- Fizik sath
- Tarmoq sathi
- Kanal sathi

? Аloqa seansini hosil qilish, kuzatib turish va ohirigacha ta’minlab berish vazifalarini OSI modelining qaysi sathi bajaradi?
+ Seanslar sathi
- Fizik sath
- Tarmoq sathi
- Kanal sathi

? Mobil aloqa tarmoqlari tushunchasi nimani anglatadi?
+ Ko'chib yurish ma'nosini
- Simli aloqa ma'nosini
- Simsiz aloqa ma'nosini
- Aralash tarmoq ma'nosini

? Mobil terminallari qaysi qurilma bilan o'zaro bog'lanib tarmoqqa ulanishni amalga oshiradi?
+ Baza stansiyasi
- Sputnik
- Controller baza stansiyasi
- Switch

? 2G va 3G mobil tarmoqlarining farqi nimada?
+ Chastota diapozoni, taqdim etadigan xizmatlari, mobil terminallari, tarmoq elementlari
- foydalanuvchilar soni va taqdim etadigan xizmat turlari bilan farqlanadi
- Farqi yoq, ular bir xil xizmatlarni taqdim etadi.
- To'g'ri javob keltirilmagan.

? 1G, 2G, 3G, 4G, 5G tarmoqlaridagi "G" harfining ma'nisi nima?
+ "G"-inglizcha Generation so'zining bosh harfidan olingan bo'lib, avlod degani
- "G"-inglizcha Global so'zining bosh harfidan olingan bo'lib, avlod degani
- "G"-inglizcha Green so'zining bosh harfidan olingan bo'lib, yashil degani
- "G"-inglizcha Green so'zining bosh harfidan olingan bo'lib, yashil degani

? 5G tarmoqlarining ma'lumot uzatish tezligi qancha?
+ 1 Gbit/s dan katta
- 100 Mbit/s dan kichik
- Yuqori tezlikda, aniq tezlik belgilanmagan
- 5G tarmog'i hali mavjud emas

? LTE va WiMAX texnologiyalari qaysi avlodga tegishli?
+ 4G
- 3G
- 5G
- 3,5G

? PON so'zining ma'nosini toping.
+ Passiv opkit tarmog'i
- Shisha tolali optik tarmog'i
- Abonent tarmog'i
- Keng polosali tarmoq

? Raqamli abonent liniyasi - tarmoqning qaysi qismiga to'g'ri keladi?
+ Stansiyadan abonentning uyigacha bo'lgan qismi
- Stansiyalararo
- Korporativ
- Abonentning uyi

? 3G texnologiyasi asosida keng polosali abonent tarmog'ini qurish mumkinmi?
+ Ha
- Yoq
- Tajribada qurilmagan
- Kelajakda qurilishi mumkin

? xDSL texnologiyasi asosida lokal kompyuter tarmoqlarini yuqori tezlikli Internetga ulash mumkinmi?
+ Faqat past tezlikli internetga ulash mumkin
- Yoq
- xDSL internetga ulash texnologiyasi emas
- Hozirda xDSLdan foydalanilmaydi

? Keng polosali abonent tarmog'i texnologiyalarini ko'rsating.
+ xDSL, PON, 3G, 4G, Sputnik
- xDSL, Sputnik
- 3G, 4G, Sputnik
- PON

? Qanday qurilmalar orqali foydalanuvchilar tarmoq resurslaridan foydalanishi mumkin?
+ Kompyuter, smartfon va raqamli qurilmalar
- Faqat modem
- Turli kompyuterlar modellari
- Foydalanuvchilar tarmoq resurslaridan foydalana olmaydi

? Transport tarmoqlari orqali uzatiladigan ma'lumot birligi nima?
+ Oqimlar
- Signallar
- Ma'lumotlar
- Paketlar

? Transport tarmog'ida oxirgi yillarda eng ko'p foydalanilayotgan uzatish muhitini ko'rsating.
+ Optik muhitlar
- Simli muhitlar
- Simsiz muhitlar
- Temir muhitlar

? PDH texnologiyasining kengaytirilgan ko'rinishini ko'rsating
+ Plesiochronous digital hierarchy
- Personal digital hierarchy
- Plesiochronous hierarchy
- Plesiochronous definition hierarchy

? SDH uzatish texnologiyasida qanday uzatish tizimlari mavjud?
+ STM
- PCM
- DWDM
- E1

? STM-1 tizimining uzatish tezligi qancha?
+ 155 Mbit/s
- 100 Mbit/s
- 1 Gbit/s
- 625 Mbit/s

? DWDM texnologiyasi asosida kanallar qanday parametrga ko'ra multipleksorlanadi?
+ To'lqin uzunligiga ko'ra
- Vaqt bo'yicha
- Amplitutasi bo'yicha
- Tebranish davri bo'yicha

? SONET tizimi bilan SDH tizimi bir xil imkoniyatli texnologiyalarmi?
+ Deyarli bir xil
- Ikki xil
- Tubdan farq qiladi
- SONET tizimi mavjud emas.

? SDH uzatish tizimlari tarmoqning qaysi qismida foydalaniladi?
+ Shahar tarmoqlarida
- Lokal tamroqlarida
- Global tarmoqlarda
- Istalgan qismida

? Global tarmoqlarni qurishda DWDM texnologiyasi qanday vazifani bajaradi?
+ Mamlakatlar va shaharlarni o'zaro bir biri bilan bog'lashni ta'minlaydi.
- Ma'lumotlarni ko'rsatilgan adres bo'yicha marshrutlaydi
- U global tarmoqlarida ishlatilmaydi
- Lokal tarmoqlarida marshrutlaydi

? Multipleksorlash qanday ma'noni anglatadi.
+ Zichlashtirish
- Adreslash
- Kuchaytirish
- Ko'paytirish

? Klient-server arxitekturasi deganda nimani tushunasiz?
+ Kompyuter va serverni o'zaro bog'lanishi va ma'lumot almashish jarayonini taqdim etuvchi arxitektura
- Kompyuter va serverni o'zaro bog'lanishi va ma'lumot almashish jarayonini taqdim etuvchi qurilmalar to'plami
- Kompyuter va serverni o'zaro bog'lanishi va ma'lumot almashish jarayonini taqdim etuvchi protokollar to'plami
- Kompyuter va serverni o'zaro bog'lanishi va ma'lumot almashish jarayonini taqdim etuvchi muhitlar

? Kompyuter tarmoqlarida server qanday vazifani amalga oshiradi?
+ Serverga ulangan kompyuterlarni o'zaro bog'lanish, resurs almashish va Internet resurslarida foydalanish imkoniyatini ta'minlaydi
- Kompyuterlararo bog'lanish va faqat bir birini resursidan foydalanish imkoniyatini ta'minlaydi
- IP adres berish
- Marshrutlash

? Klient-server arxitekturasi qanday usullarda quriladi?
+ Klient-server va Peer-to-peer arxitekturalariga asosan
- Klient-server arxitekturasiga asosan
- Peer-to-peer arxitekturasiga asosan
- Xech qanday

? Ilova nima?
+ Foydalanuvchilarni tarmoq resurslaridan foydalanish imkoniyatini taqdim etuvchi dasturlar.
- Smartfon dasturlari
- Operatsiyon tizimga ulanish dastur
- Xavfsizlikni ta'minlovchi dasturlar

? Klient-server protokollarini ko'rsating.
+ SMTP,DNS
- RIP, SMTP, OSPF
- UDP, POP
- POP. RIP, OSPF

? Klient va server qurilmalari qanday topologiyalarda bog'lanishi mumkin?
+ Yulduz, nuqta-nuqta, halqa, shina
- Faqat nuqta-nuqta
- Faqat yulduz
- Yulduz, halqa, shina

? Klient va server qanday ko'rinishda bog'lanishni amalga oshiradi?
+ Dastlab klient serverga so'rov jo'natadi va server so'rovga ishlov berib klientga javob qaytaradi.
- Har ikkalasi baravar so'rov-javob shaklida ishlaydi
- Bunda faqat klient so'rov va javoblarni amalga oshiradi.
- Nuqta ko'rinishida

? Smartfon qurilmalari bir vaqtda ham klient ham server bo'la oladimi?
+ Ha, foydalanilayotgan protokol va ilovaga muvofiq
- Yo’q
- Bunaqa bo'lishi mumkin emas
- Hozirda buning imkoniyati mavjud emas

? Server vazifasini bajarish uchun qanday shartlar topilishi kerak?
+ So'rovlarga ishlov berish va javob qaytarish, resurslarga ega bo'lish va doim faol bo'lish
- So'rovlarga ishlov berish va resurslarga ega bo'lish
- Faqat resurslarga ega bo'lish
- So'rovlarga ishlov berish va javob qaytarish, resurslarga ega bo'lish

? Peer-to-Peer arxitekturasiga asoslangan saytini tanlang?
+ Bit-torrent saytlari
- Google
- Yandex
- Barcha qidiruv tizimlariga asoslangan saytlar

? DNS qanday tizim?
+ Domen nomalar tizimi
- Domen ro'yxatlari tizimi
- Resurslarning manzilini ko'rsatuvchi tizim
- Xotira tizimi

? DNS qanday maqsadlar uchun foydalaniladi?
+ Internetga ulangan kompyuterni joylashuvini ko'rsatadi va uni aniqlaydi
- Internetga ulangan kompyuter uchun aloqa qilish imkoniyatini ta'minlaydi
- Saytda joylashgan ob'ektlarni manzilini ko'rsatadi va ularni aniqlaydi.
- Ischi stansiya adresini belgilaydi

? Quyida keltirilgan qaysi domen nomlari to'g'ri ko'rsatilgan?
+ Barcha domenlar to'g'ri ko'rsatilgan
- tuit.uz, uztelecom.uz, csm.tuit.uz
- facebook.com, ok.ru
- Google.com, Yahoo.com, Bombay.vni.com

? DNS tizimi IP adresini nomga va nomni IP adresga o'zgartiradi, masalan: google.com nomini 173.194.73.94 adresiga o'zgartiradi. Shu holat to'g'rimi?
+ Ha
- Yo’q
- Qisman
- Bo'lishi mumkin

? .uz bilan tugagan barcha domenlar faqat O'zbekiston hududida foydalanish mumkinligini anglatadimi?
+ Yo’q
- Ha
- Ba'zi hollarda O'zbekistondan tashqarida foydalanish mumkin.
- Aniq emas

? Har bir domen nomiga bitta IP adres mos keladimi?
+ Bittadan ortiq IP adress bo'lishi mumkin
- Yo’q
- Ha
- Tarmoqni sig'imiga bog'liq

? DNS so'rovlariga qaysi qurilma ishlov beradi?
+ DNS serveri.
- DNS admini
- Marshrutizatorlar
- DNS switch

? ICMP nima maqsadda foydalaniladi?
+ Ikki qurilmadagi IP protokollari o'rtasidagi aloqani ta'minlaydi, boshqaradi
- Ikki qurilmadagi IP protokollari o'rtasidagi ma'lumot almashadi
- Marshrutlash jarayonini boshqaradi
- Monitoring qilish uchun

? Xostlar orasida ICMP boshqaruv xabarlari qanday shakllarda almashadi?
+ So'rov-javob shaklida
- Faqat so'rov shaklida
- Faqat javob shaklida
- Xabar almashmaydi

? ICMP qisqartmasining quyida kengaytirib yozilgan shaklini ko'rsating.
+ Internet control message protocol
- Internet configuration message protocol
- Interface control message protocol
- Internet control message personal

? ICMP yuzaga kelgan xatoliklar haqida xabardor etadimi?
+ Ha
- Yo’q
- Xatolikni aniqlaydi lekin xabar bermaydi
- Foydalanilayotgan operatsion tizimga bog'liq

? ICMP xabarlari IP paketga joylashtiriladimi?
+ Ha
- Yoq
- UDP paketga
- TCP paketga

? ICMP xabari nechi qismdan tashkil topadi?
+ 2 qismdan: Sarlovha va ma'lumot
- 1 qismdan: Sarlovha qismidan
- 1 qismdan: Ma'lumot
- 3 qismdan: Ma'lumot, axborot, sarlovha

? SNMP nima?
+ Tarmoqni boshqarish protokoli
- Tarmoq xavfsizligini ta'minlovchi protokol
- Amaliy pog'ona protokoli
- Kanal pog'ona protokoli

? SNMP protokoli OSI modelining qaysi pog'onasida ishlatiladi?
+ Amaliy pog'ona
- Tarmoq pog'ona
- Kanal pog'ona
- Fizik pog'ona

? SNMP uchun qaysi port belgilangan?
+ UDP 161 va 162 port
- TCP 161 port
- Faqat UDP 161
- Faqat TCP 162

? SNMP so'rov va javob shakli faqat bitta portdan amalga oshiriladimi?
+ Yoq
- Ha
- Ketma-ket bitta portdan
- Parallel bitta portdan

? SNMP protokolining asosiy vazifalari nimadan iborat?
+ Tarmoqni monitoringni uchun tarmoqni boshqarishda ishlatiladi, IP tarmoqlariga ulangan qurilmani boshqarish haqidagi ma'lumotlarni tashkil etish va to'plash uchun standart protokol hisbolanadi
- Faqat monitoring
- Faqat boshqarish haqidagi ma'lumotlarni tashkil etish va to'plash
- Email xabarlarni nazorat qilish

? Simsiz sensor tarmoqlari deganda nimani tushunasiz?
+ Atrof muhitdagi holatlarni monitoring qiluvchi va o'zgarishlarni qayt etuvchi qurilmalar
- Atrof muhitdagi holatlarga munosabad bildiruvchi qurilmalar
- Atrof muhitdagi holatlarni o'rganuvchi qurilmalar
- Atrof muhitda ma'lumot etkazuvchi qurilmalar

? Sensor tarmoqlari elementlariga misol keltiring.
+ Aqlli soat, EKG elektrod, gaz sensori
- Aqlli soat, EKG elektrod, web saytlar
- EKG elektrod, gas sensori, simsim sichqoncha
- Barchasi xato

? Sensor qurilmalarini asosiy vazifasi nimadan iborat?
+ Atrof muhitdagi o'zgarishlarni monitoring qilish va kontroller qurilmasiga o'zgarishlarni jo'natish
- Atrof muhitdagi o'zgarishlarni monitoring qilish va kontroller qurilmaga o'zgarishlarni jo'natish va kerakli buyruqlarni qabul qilish
- Kontroller qurilmasi bilan so'rov-javob shaklida ishlash
- Kontroller qurilmasiga xizmat qiladi

? Hozirda qaysi sohalarda IoT texnologiyasidan foydalaniladi?
+ Barcha javob to'g'ri
- Tibbiyot
- Ob-havo ma'lumotlarini aniqlashda
- Qishloq xo'jaligi

? Sensor qurilmalarida qanday muammolar mavjud?
+ Barcha javob to'g'ri
- Xotira va quvvat ta'minoti
- Ish bajarish samaradorligi cheklangan
- Xavfsizlik masalasi to'liq hal etilmagan

? Sensor tarmoqlari uchun maxsus operatsion tizim talab etiladimi?
+ Ha
- Yo’q
- Ba'zan
- O'zida mavjud bo'ladi

? Sensor tarmog'i necha qismdan iborat?
+ 3
- 2
- 1
- Aniq emas

? Sensor qurilmalarni boshqaruvchi qurilma qanday nomlanadi?
+ Kontroller
- Protsessor
- brouzer
- chip

? Nima sababdan sensor tarmoqlarining resurslari cheklangan bo'ladi?
+ Barcha javob to'g'ri
- Quvvati va sig'imi
- Boshqa imkoniyatlari cheklanganligi sababli
- O'lchami va xotirasi

? Sensor qurilmalarini taqdim etadigan afzalliklari nimadan iborat?
+ Barcha javob to'g'ri
- Raqamli qurilmalar bilan moslashuvchan
- Narxi arzon
- Tashib yurish qulay

? Nima sababdan sensor qurilmalarida ma'lumot almashish tezligi past?
+ O'kazuvchanlik qobiliyati cheklangan
- Quvvat ta'minoti cheklangan
- Markaziy boshqaruv orqali tezlik pasaytiriladi
- Quvvat ta'minoti cheklanganligi uchun

? Sensor tarmoqlarida qanday marshrutlash protokollaridan foydalaniladi?
+ OLSR, MRP
- MRP, RIP
- DSDV, IP
- TCP,UDP

? Sensor tarmoqlarini qurishda qanday tarmoq topologiyalaridan foydalaniladi?
+ Barcha javob to'g'ri
- Nuqta-nuqta
- Chiziqli, gibrid
- Yulduz, daraxt, mesh

? Sensor tarmoqlarida axborot xavfsizligi darajasi qay darajada ta'minlangan?
+ Talab darajasida emas
- Yuqori darajada
- Juda past darajada
- Faqat ma'lumotlar shifrlangan

? Sensor tarmoqlarini talab darajasida takomillashtirish uchun nimalarga ahamiyat berish lozim?
+ Barcha javob to'g'ri
- Operatsiyon tizimi imkoniyatlarini takomillashtirish
- Mos protokollarni ishlab chiqish
- Xotirasi, sig'imi va quvvat manbaini takomillashtirish

? Tarmoq xavfsizligi qanday vositalar orqali ta'minlanadi?
+ Apparat va dasturiy ta'minot vositalari orqali
- Faqat apparat ta'minoti vositalari orqali
- Faqat dasturiy ta'minoti vositalari orqali
- Tarmoq operatorlari orqali

? Tarmoq pog'onasida kimlar axborot xavfsizligini himoyalashga mas'ul?
+ Barcha javob to'g'ri
- Provayderlar
- Tarmoq qurilmasi va dasturlarini ishlab chiqaruvchilar
- Operatorlar

? Internet foydalanuvchilari uchun tarmoq xavfsizligi kafolatlanganmi?
+ Kafolatlanmagan
- Kafolatlangan
- Antiviruslar orqali kafolatlash mumkin
- Internetnet provayderining imkoniyatiga bog'liq

? Autentifikatsiya nima maqsadda ishlatiladi?
+ Foydalanuvchini identifikatsiya qilish uchun
- Qurilmani identifikatsiya qilish uchun
- Dasturni identifikatsiya qilish uchun
- Barcha javoblar xato

? Internet saytlarida mavjud resurslardan foydalanishga kim ruxsat beradi?
+ Administrator
- Xizmat provayderi
- Meneger
- Barcha javob to'g'ri

? Axborotlarni maxfiyligi qanday ta'minlanadi?
+ Shifrlash algoritmlari orqali
- Antiviruslar orqali
- Uzatuvchi muhitlar orqali
- Qurilma orqali

? Foydalanuvchilar axborot xavfsizligini buzilishida aybdor bo'lishlari mumkinmi?
+ Ha
- Yo’q
- Qurilma ishlab chiqaruvchi aybdor
- Dastur ishlab chiqaruvchi aybdor

? Nima uchun axborot xavfsizligi borgan sari dolzarb bo'lib bormoqda?
+ Axborotlar - intellektual mulk darakasiga etib kelmoqda
- Tahdidlar resurslardan foydalanish darajasini cheklayotgani uchun
- Insonlar ish faoliyati axborotlar bilan bog'liq bo'lganligi uchun
- Barcha javob to'g'ri

? Qanday muhitlarda axborot xavfsizligi dajarasi yuqoriroq?
+ Simli va optik
- Simsiz
- Optik va simsiz
- Simsiz va radio

? Ilovalar axborot xavfsizlikni ta'minlashi mumkinmi?
+ Ha
- Ta'minlamaydi
- Mumkin emas
- Kelajakda

? Kompyuter tarmoqlarida xavfsizlikni ta'minlash uchun nima ishlab chiqilishi lozim
+ Xavfsizlik siyosati
- Xavfsizlik xaritasi
- Xavfsizlik qoidalari
- Xavfsizlik talabalari

? Konvergent so'zining ma'nosini ko'rsating.
+ Yaqinlashish
- Birgalashish
- Intilish
- Barcha javob xato

? Qanday holatlarda konvergensiya jarayoni yuzaga keladi?
+ Turli qurilmalar va dasturlarni bitta muhitda ishlash natijasida
- Bir turdagi standart qurilmalarni o'zaro ishlashi natijasida
- Xar xil standartlarda ishlay ololmasligi natijasida
- Har doim faol holat yuzaga kelganida

? Konvergent tarmoqlariga misol keltiring.
+ Bluetooth, WiFi va internetga ulangan qurilmalarni o'zaro ma'lumot almashishi
- Faqat Bluetooth qurilmalarini ma'lumot almashishi
- Lokal tarmoqlar
- Shahar tarmoqlari

? Turli tarmoqlar va ularning formatini moslashtirib beruvchi qurilmani ko'rsating
+ Shlyuz
- Kommutator
- Softswitch
- Modem

? Konvergent tarmoqlarining elementlarini ko'rsating
+ Barcha javob to'g'ri
- Marshrutizator, sputnik, 4G antenna
- Modem, terminallar
- Shlyuz, softswitch, kommutator

? Konvergent tarmoqlariga o'tishning asosiy sababi...
+ Barcha javob to'g'ri
- Turli standartdagi dasturlarning ishlab chiqarilishi
- Ma'lumot formatlarining turini ko'payib ketishi
- Turli standartdagi qurilmalarning ishlab chiqarilishi

? Konvergensiyaning kamchilik tomonlarini ko'rsating
+ Barcha javob to'g'ri
- O'zaro ishlash murakkablashadi
- Xavfsizlik darajasi pasayadi
- Boshqarish murakkablashadi

? Tarmoq operatsion tizimiga ta'rif bering.
+ Barcha javob to'g'ri
- Lokal tarmoqqa ulangan barcha turdagi kompyuterlarni qo'llab quuvatlash uchun ishlab chiqiladi
- Tarmoqni uzluksiz ishlashini ta'minlaydi
- Tarmoq resurslarini boshqaradi

? Windows server tarmoq operatsion tizimi bo'la oladimi?
+ Ha
- Yo’q
- Moslashtirish kerak
- Mumkin emas

? Windows serverni qaysi tashkilot ishlab chiqqan.
+ Microsoft
- Unix
- Google
- Android

? Nima uchun IoT texnologiyasi ishlab chiqildi?
+ Barcha javob to'g'ri
- Turli narsa-buyumlarni internetga ulab boshqarish
- Turli narsa-buyumlarni internetga ulab nazorat qilish
- Turli narsa-buyumlarni internetga ulab monitoring qilish

? IoT qanday ma'noni anglatadi
+ Internet buyumlar
- Internetga ulangan kompyuterlar
- Sensor tarmoqlari
- Aqlli buyumlar

? Tumanli texnologiya qanday imkoniyatlarni taqdim etadi?
+ Barcha javob to'g'ri
- B. Foydalanuvchi qurilmasiga yaqin masofada joylashgan
- C. O'tkazuvchanlikka bog'liq muammolar yuzaga kelmaydi
- D. Kichikishlar darajasi pastroq

? Ko'p foydalaniladagin tarmoq operatsion tizimlarining nechta asosiy turi bor?
+ A. 5
- B. 4
- C. 3
- D. 2

? Bulutli texnologiyada axborot xavfsizligi doimiy kafolatlanganmi?
+ Yo’q
- Ha
- Ta'minlasa bo'ladi
- Qisman ta'minlangan

? Zamonaviy kompyuter tarmoqlari bilan an’anaviy kompyuter tarmoqlarini qanday farqlari bor?
+ Imkoniyatlari va sig'imi kengaytirilgan
- Ishlash tezligi pastligida
- Ko'rinishida va xotira sig'imida
- O'lchamida

? Tumanli va bulutli texnologiyalarning farqini tushuntirib bering.
+ Tumanli kichik va bulutli katta hududdagi tarmoqlarni qamrab oladi
- Mobillilik darajasi bulutlida cheklangan, tumanlida cheklanmagan
- Bulutli markazlashgan va tumanli taqdimlangan
- Barcha javob to'g'ri

? Quyidagilarning qaysi biri niqobni ifodalaydi?
+ 255.255.192.0
- 255.255.100.000
- 192.192.192.192
- 0.0.0.1

? Ushbu maskani o‘lik sanoq tizimida ifodalang: 11111111.11111111.11111111.11100000
+ 255.255.255.224
- 255.111.111.0
- 255.255.255.192
- 255.255.255.128



              <div className="answers-right">
                <h3>Javoblar</h3>
                <div className="numbers">
                  <div className="number">
                    <span>1</span>
                  </div>
                  <div className="number">
                    <span>2</span>
                  </div>
                  <div className="number">
                    <span>3</span>
                  </div>
                  <div className="number">
                    <span>4</span>
                  </div>
                  <div className="number">
                    <span>5</span>
                  </div>
                  <div className="empty">
                    <span>6</span>
                  </div>
                  <div className="number">
                    <span>7</span>
                  </div>
                  <div className="number">
                    <span>8</span>
                  </div>
                  <div className="empty">
                    <span>9</span>
                  </div>
                  <div className="empty">
                    <span>10</span>
                  </div>
                  <div className="empty">
                    <span>11</span>
                  </div>
                  <div className="number">
                    <span>12</span>
                  </div>
                  <div className="number">
                    <span>13</span>
                  </div>
                  <div className="empty">
                    <span>14</span>
                  </div>
                  <div className="number">
                    <span>15</span>
                  </div>
                  <div className="number">
                    <span>16</span>
                  </div>
                  <div className="number">
                    <span>17</span>
                  </div>
                  <div className="empty">
                    <span>18</span>
                  </div>
                  <div className="empty">
                    <span>19</span>
                  </div>
                  <div className="number">
                    <span>20</span>
                  </div>
                  <div className="number">
                    <span>21</span>
                  </div>
                  <div className="empty">
                    <span>22</span>
                  </div>
                  <div className="number">
                    <span>23</span>
                  </div>
                  <div className="number">
                    <span>24</span>
                  </div>
                  <div className="number">
                    <span>25</span>
                  </div>
                </div>
                <span className="line"></span>
                <button className="btn btn-primary btn-flat">Yakunlash</button>
              </div>
            </div>
            </div>
            </div>
        </main>
      </Fragment>
    );
  };

  export default Kompyuter;
