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
