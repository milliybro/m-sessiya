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
              ?Drayverlar dasturlarning qaysi turiga kiradi? + Tizimli dasturlar
              -Dasturlash tizimiga -Amaliy dasturlar -Virtual dasturlar ?Tezkor
              tizim dasturlarning qaysi turiga kiradi? + Tizimli dasturlar
              turiga -Tizimli dasturlash tiliga -Amaliy dasturlarturiga -Virtual
              dasturlar turiga ?Core i7 protsessorida necha sathli kesh
              qo‘llaniladi? + 3 sathli kesh -1 sathli kesh -4 sathli kesh -2
              sathli kesh ?Core i7 protsessorlaridagi yadrolar sonini ko‘rsating
              + ko‘p -3 -2 -1 ?ADM protsessorlaridagi yadrolar sonini
              ko‘rsating. + 2 -3 -1 -4 ?ATmega168 protsessoridagi yadrolar
              sonini ko‘rsating. + 1 -3 -2 -4 ?Keltirilganlarning qaysi biri Fon
              Neyman printsiplariga to‘g‘ri keladi? + ikkilik sanoq sistemasini
              qo‘llash -sakkizlik sanoq sistemasini -o‘nlik sanoq sistemasini
              -o‘n oltilik sanoq sistemasini ?Keltirilganlarning qaysi biri Fon
              Neyman printsiplariga to‘g‘ri keladi? + dastur yordamida
              boshqarish -avtomatik ravishda boshqarish -avtomatlashtirilgan
              boshqarish -qo‘lda boshqarish ?Keltirilganlarning qaysi biri Fon
              Neyman printsiplariga to‘g‘ri keladi? + xotirani ham
              ma’lumotlarni, ham dasturlarni saqlashda qo‘llash -xotirani
              ma’lumotlarni saqlashda qo‘llash -xotirani dasturlarni saqlashda
              qo‘llash -xotirani algoritmlarni saqlashda qo‘llash
              ?Keltirilganlarning qaysi biri Fon Neyman printsiplariga togri
              keladi? + xotira yacheykalari ketma-ket keluvchi adreslarga ega
              -xotira yacheykalari ketma-ket bolmagan adreslarga ega -xotira
              yacheykalari hisoblanadigan adreslarga ega -xotira yacheykalari
              ixtiyoriy tarzda keladigan adreslarga ega ?Keltirilganlarning
              qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi? + dasturni
              bajarishda shartli o‘tish imkoniyati -dasturni bajarishda to‘g‘ri
              tartibda o‘tish imkoniyati -dasturni bajarishda teskari tartibda
              o‘tish imkoniyati -dasturni bajarishda ixtiyoriy tartibda o‘tish
              imkoniyati ?Keltirilganlarning qaysi biri Mur qonunini ifodalaydi?
              + bir mikrosxemadagi tranzistorlar soni har yili 60% ga ortib
              boradi -mikrosxemalarning yangi avlodi har 4 yilda almashadi
              -kompyuterlarning yangi avlodi har 15 yilda almashadi
              -protsessorlarda tranzistorlar soni har yili 60% ga ortib boradi
              ?Protsessorning qaysi registrida, keyingi bajariladigan buyruqning
              adresi yozib turiladi? + PC -MAR -AX -SP ?Raqamli mantiqiy sath,
              olti sathli kompyuterlarning qaysi sathiga tegishli? + 0 sathiga 1
              sathiga 2 sathiga 3 sathiga ?Mikroarxitektura sathi, olti sathli
              kompyuterlarning qaysi sathiga tegishli? + 1 sathiga -4 sathiga -2
              sathiga -3 sathiga ?Buyruqlar to‘plami arxitekturasi sathi, olti
              sathli kompyuterlarning qaysi sathiga tegishli? + 2 sathiga -4
              sathiga -5 sathiga -3 sathiga ?Operatsion tizim sathi, olti sathli
              kompyuterlarning qaysi sathiga tegishli? + 3 sathiga -4 sathiga -5
              sathiga -0 sathiga ?Assembler sathi, olti sathli kompyuterlarning
              qaysi sathiga tegishli? + 4 sathiga -3 sathiga -5 sathiga -1
              sathiga ?Amaliy tillar dasturchilari sath, olti sathli
              kompyuterlarning qaysi sathiga tegishli? + 5 sathiga -3 sathiga -4
              sathiga -1 sathiga ?16 razryadli adres shinasi yordamida qanday
              xajmdagi xotirani adreslash mumkin? + 64 Kbayt -256 Kbayt -1 Mbayt
              -4 Gbayt ?20 razryadli adres shinasi yordamida qanday xajmdagi
              xotirani adreslash mumkin? + 1 Mbayt -256 Kbayt -64 Kbayt -4 Gbayt
              ?32 razryadli adres shinasi yordamida qanday xajmdagi xotirani
              adreslash mumkin? + 4 Gbayt -256 Kbayt -1 Mbayt -64 Kbayt ?33
              razryadli adres shinasi yordamida qanday xajmdagi xotirani
              adreslash mumkin? + 8 Gbayt -256 Kbayt -1 Mbayt -4 Gbayt ?Qaysi
              protsessor tarkibida 42 000 000 tranzistor mavjud? + Pentium 4
              -UltraSPARC III -8051 -SIMM ?Qaysi protsessor tarkibida 29 000 000
              tranzistor mavjud? + UltraSPARC III -Pentium 4 -8051 -SIMM ?Qaysi
              protsessor NetBurst mikroarxitekturasiga ega? + Pentium 4 -
              UltraSPARC III -8051 -SIMM ?Qaysi protsessor Version 9 SPARC
              mikroarxitekturasiga ega? + UltraSPARC III -Pentium 4 -8051 -SIMM
              ?Qaysi protsessor «qatorining kengligi» 0,18 mkm ga teng? +
              Pentium 4 -UltraSPARC III -8051 -SIMM ?Qaysi protsessor
              «qatorining kengligi» 0,13 mkm ga teng? + UltraSPARC III -Pentium
              4 -8051 -SIMM ?SIMM qisqartmasi nimani anglatadi? + Ulanish
              nuqtalari bir tomonda joylashgan xotira moduli -Ulanish nuqtalari
              ikki tomonda joylashgan xotira moduli -Uyali telefonni ulash uchun
              mo‘ljallangan karta -O‘rnatilgan kontrollerga ega qurilma ?DIMM
              qisqartmasi nimani anglatadi? + Ulanish nuqtalari ikki tomonda
              joylashgan xotira moduli -Ulanish nuqtalari bir tomonda joylashgan
              xotira moduli -Uyali telefonni ulash uchun mo‘ljallangan karta -
              O‘rnatilgan kontrollerga ega qurilma ?PCI qisqartmasi nimani
              anglatadi? + Kompyuterning tashqi tashkil etuvchi qurilmalarni
              o‘zaro birgalikda ishlashini ta’minlovchi shina -Ma’lumotlarni
              ketma-ket uzatuvchi universal shina -Sanoatdagi standart
              arxitekturali shina -Kontrollerning porti ?AGP qisqartmasi nimani
              anglatadi? + Tez ishlaydigan grafik port shinasini -Ma’lumotlarni
              ketma-ket uzatuvchi universal shina -Sanoatdagi standart
              arxitekturali shina -Tarmoq interfeysining qurilmasi ?USB
              qisqartmasi nimani anglatadi? + Ma’lumotlarni ketma-ket uzatuvchi
              universal shina -Sanoatdagi standart arxitekturali shina -Tez
              ishlaydigan grafik port shinasini -Tarmoq interfeysining qurilmasi
              ?RAID qisqartmasi nimani anglatadi? + Magnitli disklar asosida
              qurilgan, ma’lumotlarni tezkor kiritish-chiqarish qurilmasi -Bitta
              katta xajmdagi qimmat disk -Kichik hisoblash tizimlarining
              interfeysi -Tarmoq interfeysining qurilmasi ?EISA qisqartmasi
              nimani anglatadi? + Sanoatdagi kengaytirilgan standart
              arxitekturali shina -Sanoatdagi standart arxitekturali shina -Tez
              ishlaydigan grafik port shinasini -Ulanish nuqtalari bir tomonda
              joylashgan xotira moduli ?ISA qisqartmasi nimani anglatadi? +
              Sanoatdagi standart arxitekturali shina -Sanoatdagi kengaytirilgan
              standart arxitekturali shina -Tez ishlaydigan grafik port
              shinasini -Ulanish nuqtalari bir tomonda joylashgan xotira moduli
              ?RISC qisqartmasi nimani anglatadi? + Qisqartirilgan buyruqlar
              to‘plamiga ega kompyuter -Magnitli disklar asosida qurilgan,
              ma’lumotlarni tezkor kiritish-chiqarish qurilmasi -Ulanish
              nuqtalari ikki tomonda joylashgan xotira moduli -Tarmoq
              interfeysining qurilmasi ?CISC qisqartmasi nimani anglatadi? +
              To‘lik buyruqlar to‘plamiga ega kompyuter -Magnitli disklar
              asosida qurilgan, ma’lumotlarni tezkor kiritish-chiqarish
              qurilmasi -Ulanish nuqtalari ikki tomonda joylashgan xotira moduli
              -Tarmoq interfeysining qurilmasi ?Dasturchilarga, dasturlardagi
              xatolarni topish uchun yordam beradigan tizimli dastur nima
              ataladi? + Otladchik -Interpretator -Translyator -Kompilyator
              ?Dasturning xar bir qatorini taxlil qilib, o‘sha zahoti
              bajaradigan tizimli dastur nima deb ataladi? + Interpretator
              -Otladchik -Translyator - Kompilyator ?Dasturni to‘liq taxlil
              qilib, keyin bajarish uchun kompyuter xotirasiga yozadigan tizimli
              dastur nima deb ataladi? + Translyator -Otladchik -Interpretator
              -Naladchik ?Fizik adreslar to‘plamini qanday nomlash mumkin? +
              Adreslar fazosi -Diskdagi fazo -Sahifalar -Mavjud bo‘lish joyi
              ?SHina orqali ma’lumotlarni uzatishga ruxsat beradigan qurilma
              nima deb ataladi? + SHina ustasi -SHina tsikli -SHina so‘rovi
              -Parallel shina ?Registrga yangi ma’lumotni yozish jarayoni qanday
              nomlanishi mumkin? + YUklash -Bajarish -Uchirib-yoqish -Qayta
              yuklash ?Qaysi xotiraga murojaat qilish tezligi eng katta? +
              registrli xotiraga -operativ xotiraga -doimiy xotiraga -optik
              xotiraga ?Hardware deganda nima tushiniladi? + kompyuterning
              apparat qismi -IBM PC kompyuterlari uchun mo‘ljallangan eng
              mashxur tizim -yangi dasturlarni yaratishni ta’minlaydigan tizim
              -kompyuterlarning apparat va dasturiy qismlarini
              zamonaviylashtirish ?«Kompyuter» so‘zini inglizchadan qilingan
              dastlabki tarjimasi nimani anglatgan? + buyruqlarni bajarish uchun
              mo‘ljallangan elektron qurilma -axborotlarni saqlash uchun
              mo‘ljallangan qurilma -hisoblashlarni amalga oshiruvchi odam
              -diskovoddan axborotni o‘kish uchun mo‘ljallangan qurilma
              ?Software deganda nima tushiniladi? + kompyuterning dasturiy
              ta’minoti -«manbani ula va ishlayver» tizimi -yordamchi dastur -
              kompyuterga yangi qurilmalarni ulash uchun mo‘ljallangan dastur
              ?Kompyuterning minimal tarkibiga nimalar kiradi? + monitor,
              tizimli blok, klaviatura -vinchester, «sichqoncha», protsessor
              -printer, klaviatura, disketa -tizimli blok, skaner, monitor
              ?Kompyuterning ma’lumotlar shinasining razryadlar soni nimaga
              bog‘liq? + foydalanilgan protsessorning adreslashi mumkin bo‘lgan
              xotirasiga -xotiraga bir marotaba murojaat qilinganda, o‘qish
              mumkin bo‘lgan ma’lumotning uzunligiga . -adreslar shinasi
              razryadiga -boshqarish shinasi razryadiga ?Printirlarning qanday
              xillarini bilasiz? + matritsali, sepuvchi va lazerli -ichki va
              tashqi -rolikli va planshetli -gorizontal (desktop) va vertikal
              (tower) ?Boshqarish shinasi nima uchun mo‘ljallangan? + boshqarish
              signallarini uzatish uchun -protsessor murojaat qilayotgan tashqi
              qurilmalarga, xotira adresini uzatish uchun -ishlanayotgan
              axborotni uzatish uchun -protsessordan kelayotgan axborotlarni,
              qurilmalar ishini boshqaruvchi mos signallariga o‘zgartirish uchun
              ?Plotter nima uchun mo‘ljallangan? + grafik axborotni qog‘ozga
              chiqarish uchun -kompyuterga qogoz betidagi tasvirni skanerlash
              uchun -kompyuterga axborotni kiritish uchun -istalgan turdagi
              axborotlarni qog‘ozga chiqarish uchun ?SHaxsiy kompyuterlar uchun
              mo‘ljallangan qoplamalarning qanday xillarini bilasiz? +
              gorizontal (desktop) va vertikal (tower) xillari -ichki va tashqi
              -rolikli va planshetli -matritsali, sepuvchi va lazerli
              ?Ma’lumotlar shinasi nima uchun mo‘ljallangan? + ishlanayotgan
              axborotni uzatish uchun -protsessor murojaat qilayotgan tashqi
              qurilmalarga, xotira adresini uzatish uchun -boshqarish
              signallarini uzatish uchun -protsessordan kelayotgan axborotlarni,
              qurilmalar ishini boshqaruvchi mos signallariga o‘zgartirish uchun
              ?Djoystikdan nima uchun foydalaniladi? + kompyuter o‘yinlari
              o‘ynash uchun -injenerlik hisoblashlarni o‘tkazish uchun -grafik
              ma’lumotni kompyuterga uzatish uchun -simvolli ma’lumotni
              kompyuterga uzatish uchun ?Modemlarning qanday xillarini bilasiz?
              + ichki va tashqi -gorizontal (desktop) va vertikal (tower)
              xillari -rolikli va planshetli -faqat vertikal (tower) ?Kontroller
              nima uchun mo‘ljallangan? + protsessordan kelayotgan axborotlarni,
              qurilmalar ishini boshqaruvchi mos signallariga o‘zgartirish uchun
              - protsessor murojaat qilayotgan tashqi qurilmalarga, xotira
              adresini uzatish uchun - boshqarish signallarini uzatish uchun
              -ishlanayotgan axborotni uzatish uchun ?Videoadapterning ko‘rsata
              olish imkoniyati deganda nima tushiniladi? + gorizantal va
              vertikal bo‘ylab chiqarib bera olishi mumkin bo‘lgan nuqtalarining
              soni -ekranning diagonal bo‘yicha o‘lchami -lyuminofor donasining
              o‘lchami -ekrandagi tasvirning xajmini proportsional ravishda
              kichraytirishi/kengaytirishi ?Modem nima uchun mo‘ljallangan? +
              telefon tarmog‘i orqali bir kompyuterdan, boshqa bir kompyuterga
              ma’lumotni uzatish uchun -qog‘oz bo‘lagidagi grafik tasvirlarni
              o‘qish uchun -vizual axborotni akslantirish uchun -katta xajmdagi
              axborotni magnit tasmasiga yozish uchun ?Telefon tarmog‘i orqali
              kompyuterlarni o‘zaro bog‘laydigan qurilma qanday nomlanadi? . +
              modem . -interfeys -CD- ROM -MIDI ?Qaysi qurilma odatdagi telefon
              aloqa chiziqlari orqali ma’lumotlar almashinishni ta’minlab bera
              oladi? + modem -telefaks -faks-modem -interfeys ?Skaner nima uchun
              mo‘ljallangan? + qog‘oz bo‘lagidagi grafik tasvirlarni kompyuterga
              kiritish uchun -vizual axborotni akslantirish uchun -telefon
              tarmog‘i orqali bir kompyuterdan, boshqa bir kompyuterga
              ma’lumotni uzatish uchun -katta xajmdagi axborotni magnit
              tasmasiga yozish uchun ?Quyidagilardan qaysi biri dasturiy
              vositalarga tegishli emas? + protsessor -drayver -tizimli dasturiy
              ta’minot -matn va grafik redaktorlar ?Qaysi qurilma yordamida
              tashqi qurilma bilan shina o‘rtasidagi aloqa amalga oshiriladi? +
              kontroller -vinchester -magistralllar -DXQ ?Strimmer nima uchun
              mo‘ljallangan? + katta xajmdagi axborotni magnit tasmasiga yozish
              uchun -qog‘oz bo‘lagidagi grafik tasvirlarni kompyuterga kiritish
              uchun -telefon tarmog‘i orqali bir kompyuterdan, boshqa bir
              kompyuterga ma’lumotni uzatish uchun -vizual axborotni
              akslantirish uchun ?Vinchester nima uchun mo‘ljallangan? +
              Ma’lumotlarni doimiy saqlash uchun -Tashqi qurilmalarni ulash
              uchun -Berilgan dastur asosida kompyuterni boshqarish uchun
              -Operativ xotirada ma’lumotni saqlash uchun ?Modem qanday vazifani
              bajaradi? + Analogli signalni raqamli signalga va raqamli signalni
              analogli signalga aylantirish uchun uzgartiradi. -Ikkilik kodini
              analog signalga o‘zgartiradi -Analogli signalni ikkilik kodga
              o‘zgartiradi -Analogli signalni kuchaytirish uchun ?Kompyuterning
              ish samaradorligi nimaga bog‘liq? + Protsessor chastotasiga
              -Manbanig kuchlanishiga -Klavishalarning tez ishlashiga
              -Kommunikatsiya tezligiga bog‘liq ?Monitorning harakteristikasini
              tanlang + Ruxsat etish imkoniyati -Takt chastotasi -Diskretlik
              -Ma’lumotga murojat vaqti ?Personal kompyuterning shinalari nimani
              ta’minlab beradi? + Element va qurilmalarning o‘zaro bog‘lanishini
              -Signallardan kelayotgan nurlanishni bartaraf qilish -Issiqlik
              nurlanishini bartaraf qilish -Umumiy energiya manbasini manbayini
              qo‘llash ?Takt chastotasining o‘lchov birligi nima? + MGts ?Mbayt
              ?Kbayt ?Bit ?Ma’lumotni protssessor qanday qayta ishlaydi? +
              ikkilik sanoq tizimida -o‘nlik sanoq tizimida -matn ko‘rinishida
              -Beysik tilida ?Asosiy plataga nima o‘rnatiladi? + Protsessor
              -Qattiq disk -Manba bloki -Tizimli blok ?CD-disklarning hajmi
              qanchagacha bo‘lishi mumkin? + 700 Mbayt -1 Mbayt -1 Gbayt -700
              Kbayt ?Tarmoq kabellarining qaysi biri eng kata uzatish tezligiga
              va sifatga ega? + Optik tolali -Koaksial kabel -“O‘rama juft”
              kabeli -Telefon kabeli ?Diskovod – bu ...? + Tashqi qurilmadagi
              ma’lumotni o‘qish/ yozish qurilmasi -Dasturda bajariladigan
              buyruqlarni saqlash qurilmasi -Ma’lumotlarni uzoq vaqt saqlash
              qurilmasi -Bajariladigan dasturda buyruqlarni qayta ishlash
              qurilmasi ?Kompyuter yoqilishini testlash dasturi qaerda yozilgan?
              + BIOS mikrosxemasida -Operativ xotirada -Tashqi xotirada
              -Protsessor registrlarida ?Doimiy saqlovchi qurilma qanday xotira
              turiga kiradi? + Manbaga bog‘liq bo‘lmagan qurilma -Manbaga
              bog‘liq bo‘lgan qurilma -Dinamik -Operativ ihtiyoriy murojatga ega
              bo‘lgan ?SHisha tolali kabelda signal qanday yo‘nalishda
              uzatiladi? + Bir yo‘nalishda -Dupleks rejimida -Ikki yo‘nalishda
              -YArim dupleks rejimida ?Magnit diskni sektorlarga bo‘lish nimani
              amalga oshiradi? + Ma’lumotlarga murojat qilish vaqtini
              kamaytiradi Disk yuzasining yemirilishini kamaytiradi YOziladigan
              ma’lumot hajmini ko‘paytiradi Energiya sarfini kamaytiradi
              ?SHaxsiy kompyuterda ma’lumotni qayta ishlash qaysi qurilmada
              amalaga oshiriladi? + Protsessorda -Adapterda -SHinada
              -Klaviaturada ?XX asrning 40 yillarida hisoblash mashinalarining
              ishlash printsiplari kim tomonidan tavsiflangan? + Jon Fon Neyman
              tomonidan -MicroSoft kompaniyasi hodimlari tomonidan -Bill Geyts
              tomonidan -Klod SHen tomonidan ?Kompyuter o‘chirilganida
              kompyuterning kayerida ma’lumot ham o‘chib ketadi? + operativ
              xotirada -yumshoq diskda -CD-diskda -qattiq diskda ?Multimedia-
              kompyuterning tarkibida qanday qurilma bo‘lishi shart? + CD-ROM
              diskovod va tovush kartasi -Proektsion panel -Modem -Plotter
              ?«Sichqoncha» manipulyatori – bu ... + ma’lumotni kiritish
              qurilmasidir -ma’lumotni o‘qish qurilmasi -ma’lumotni saqlash
              qurilmasi -moyulyatsiya va demoyulyatsiya qurilmasi ?Tashqi
              qurilmalarni boshqarish dasturi nima deb nomlanadi? + drayver
              -brauzer -tezkor tizim -dasturlash tizimi ?Qaysi qurilma
              o‘chirilganida kompyuter ishlamaydi? + Operativ xotira -Diskovod
              -Sichqoncha -Printer ?Kompyuterda ma’lumot qanday ko‘rinishda
              qayta ishlanadi? + Ikkilik ko‘rinishida -Simvollar va sonlar
              ko‘rinishida -Matn ko‘rinishida -O‘nlik sanoq tizimi ko‘rinishida
              ?Ma’lumotlar –bu ...? + Kompyuter kodiga o‘tkazilgan axborotdir
              -Buyruqlar ketma-ketligidir -Raqamli va matnli axborot -Tovushli
              va grafikli axborot ?Dastur – bu ...? + Kompyuterning ma’lumotni
              qayta ishlash jarayonida bajaradigan buyruqlar ketma-ketligidir
              -Kompyuter kodiga o‘tkazilgan axborotdir -Raqamli va matnli
              axborot -Tovushli va grafikli axborot ?Berilgan dastur bo‘yicha
              ma’lumotlarni qayta ishlash qurilmasi bu? + Protsessor -Kiritish
              qurilmasi -Tezkor xotira -CHiqarish qurilmasi ?Dastur va
              ma’lumotlar qayta ishlash vaqtida qayerga joylashtiriladi? +
              Tezkor xotiraga -Doimiy xotiraga -Qattiq diskga -Kesh-xotiraga
              ?Mikroprotsessor tomonidan qabul qilinadigan bitlarning yaxlit
              soni nima deyiladi? + Protsessor razryadligi -Kompyuterning
              samaradorligi -Takt chastotasi -Kompyuterning ichki xotira hajmi
              ?Bir sekunddagi taktlar soni nima debataladi? + Takt chastotasi
              -Protssessor razryadligi -Kesh-xotira -Kompyuter samaradorligi
              ?Tezkor tizimni dasturi qayerda joylashgan? + Doimiy xotirada
              -Kesh- xotirada -CD- diskda -Protsessorda Uchta o‘zgaruvchili
              mantiqiy funksiyaning xaqiqat jadvali necha qatordan iborat
              bo‘ladi? + 8 -4 -3 -16
            </div>
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
      </main>
    </Fragment>
  );
};

export default Kompyuter;
