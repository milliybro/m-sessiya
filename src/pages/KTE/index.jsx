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
                ? Olti sathli kompyuterlarning nolinchi sathi qanday nomlanadi?
+raqamli mantiqiy sath
-mikroarxitektura sathi
-buyruqlar to‘plami arxitekturasi sathi
-operatsion tizim sathi

? Olti sathli kompyuterlarning birinchi sathi qanday nomlanadi?
+mikroarxitektura sathi
-raqamli mantiqiy sath
-buyruqlar to‘plami arxitekturasi sathi
-operatsion tizim sathi

? Olti sathli kompyuterlarning ikkinchi sathi qanday nomlanadi?
+buyruqlar to‘plami arxitekturasi sathi
-mikroarxitektura sathi
-assembler sathi
-amaliy tillar dasturchilari sathi

? Olti sathli kompyuterlarning uchinchi sathi qanday nomlanadi?
+operatsion tizim sathi
-amaliy tillar dasturchilari sathi
-buyruqlar to‘plami arxitekturasi sathi
-mikroarxitektura sathi

? Olti sathli kompyuterlarning to‘rtinchi sathi qanday nomlanadi?
+assembler sathi
-mikroarxitektura sathi
-buyruqlar to‘plami arxitekturasi sathi
-operatsion tizim sathi

? Olti sathli kompyuterlarning beshinchi sathi qanday nomlanadi?
+amaliy tillar dasturchilari sathi
-mikroarxitektura sathi
-buyruqlar to‘plami arxitekturasi sathi
-assembler sathi

? Bir bitli xotira elementi deganda nima tushuniladi?
+trigger
-registr
-AND-elementi
-NOT-elementi

? Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning eng yuqori qismida joylashgan xotirani ko‘rsating.
+ichki registrlar
-kesh xotira
-asosiy xotira
-magnitli disk

? Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning ikkinchi qatorida joylashgan xotirani ko‘rsating.
+kesh xotira 
-ichki registrlar
-asosiy xotira
-magnitli disk

? Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning uchinchi qatorida joylashgan xotirani ko‘rsating.
+asosiy xotira 
-ichki registrlar
-kesh xotira
-magnitli disk

? Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning to‘rtinchi qatorida joylashgan xotirani ko‘rsating.
+magnitli disk 
-ichki registrlar
-asosiy xotira
-kesh xotira

? Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning beshinchi qatorida joylashgan xotirani ko‘rsating.
+optik disk 
-ichki registrlar
-asosiy xotira
-magnitli disk

? Ma’lumotlarni ketma-ket uzatuvchi universal shinani ko‘rsating.
+USB 
-ISA
-EISA
-PCI

? Protsessorning IP yoki EIP registri deganda qanday registr tushuniladi?
+buyruqlarni ko‘rsatuvchi registr
-bayroqlar registri
-segment registri
-birinchi operandaning registri

? SF yoki EFLAGS registri deganda qaysi registr tushuniladi?
+bayroqlar registri
-buyruqlar sanagichi registri
-buyruqlar ko‘rsatgichi 
-akkumulyator

? CS registri deganda qaysi registr tushuniladi?
+kodlar yoziladigan segment registri
-ma’lumotlar yoziladigan segment registri
-stek registri
-qo‘shimcha segment registri

? Umumiy maqsadlar uchun mo‘ljallangan registrlarni ko‘rsating.
+AX, EAX
-SI, ESI
-DI, EDI
-SP, ESP

? Pentium 4 protsessori tarkibida nechta tranzistor bor?
+42 000 000
-29 000 000
-9 500
-550 000

? Pentium 4 protsessori mikroarxitekturasi qanday nomlanadi?
+NetBurst
-P6
-P9
-Version 9 SPARC

? Pentium 4 protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?
+478
-1368
-578
-600

? UltraSPARC III protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?
+1368
-478
-578
-600

? To‘liq buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?
+CISC
-RISC
-P6
-MIPS

?Qisqartirilgan buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?
+RISC
-CISC
-P6
-MIPS

? Protsessor siklining birinchi bosqichida nima amalga oshiriladi?
+RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi 
-RS-ning qiymati orttiriladi
-buyruq dekodlanadi
-buyruqni bajarish uchun kerak bo‘ladigan ma’lumotlar xotiradan yoki registrlardan tanlab olinadi

? Protsessor siklining ikkinchi bosqichida nima amalga oshiriladi?
+RS-ning qiymati orttiriladi
-RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi
-buyruq dekodlanadi
-buyruq bajariladi

? Protsessor siklining uchinchi bosqichida nima amalga oshiriladi?
+buyruq dekodlanadi
-RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi
-buyruq bajariladi
-RS-ning qiymati orttiriladi

? Protsessor siklining to‘rtinchi bosqichida nima amalga oshiriladi?
+buyruqni bajarish uchun kerak bo‘ladigan ma’lumotlar xotiradan yoki registrlardan tanlab olinadi
-RS-ning qiymati orttiriladi
-RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi
-natijalarni xotiraga yoki registrlarga yozish

? Protsessor siklining beshinchi bosqichida nima amalga oshiriladi?
+buyruq bajariladi
-natijalarni xotiraga yoki registrlarga yozish
-RS-ning qiymati ortiriladi
-RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi

? Protsessor siklining oltinchi bosqichida nima amalga oshiriladi?
+natijalarni xotiraga yoki registrlarga yozish
-RS-ning qiymati orttiriladi
-keyingi buyruqni bajarish tsikliga o‘tish
-buyruq bajariladi

? Protsessor siklining yettinchi bosqichida nima amalga oshiriladi?
+keyingi buyruqni bajarish tsikliga o‘tish
-RS-ning qiymati orttiriladi
-buyruq bajariladi
-natijalarni xotiraga yoki registrlarga yozish

? Protsessor sikli nechta bosqichidan iborat?
+7
-6
-5
-4

? Protsessor siklining qaysi bosqichida buyruqni bajarish amalga oshiriladi?
+5
-6
-7
-4

? Protsessor siklining qaysi bosqichida buyruqni tanlab olish amalga oshiriladi?
+1
-2
-3
-4

? Protsessor siklining qaysi bosqichida buyruqni dekodlash amalga oshiriladi?
+3
-2
-5
-4

? Protsessor siklining qaysi bosqichida natijalarini xotiraga yoki registrlarga yozish amalga oshiriladi?
+6
-7
-3
-4

? Core i7 protsessorida necha sathli kesh qo‘llaniladi?
+3 sathli kesh
-1 sathli kesh
-4 sathli kesh
-2 sathli kesh

? Core i7 protsessorlaridagi yadrolar sonini ko‘rsating
+ko‘p
-3
-2
-1

? Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?
+ikkilik sanoq sistemasini qo‘llash
-sakkizlik sanoq sistemasini 
-o‘nlik sanoq sistemasini
-o‘n oltilik sanoq sistemasini

? Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?
+dastur yordamida boshqarish
-avtomatik ravishda boshqarish
-avtomatlashtirilgan boshqarish
-qo‘lda boshqarish

? Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?
+hotirani ham ma’lumotlarni, ham dasturlarni saqlashda qo‘llash 
-hotirani  ma’lumotlarni saqlashda qo‘llash
-hotirani dasturlarni saqlashda qo‘llash
-hotirani algoritmlarni saqlashda qo‘llash

? Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?
+hotira yacheykalari ketma-ket keluvchi adreslarga ega”
-hotira yacheykalari ketma-ket bo‘lmagan adreslarga ega”
-hotira yacheykalari hisoblanadigan adreslarga ega”
-hotira yacheykalari ixtiyoriy tarzda keladigan  adreslarga ega

? Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?
+dasturni bajarishda shartli o‘tish imkoniyati
-dasturni bajarishda to‘g‘ri tartibda o‘tish imkoniyati
-dasturni bajarishda teskari tartibda o‘tish imkoniyati
-dasturni bajarishda ixtiyoriy tartibda o‘tish imkoniyati

? RISC qisqartmasi nimani anglatadi?
+Qisqartirilgan buyruqlar to‘plamiga ega kompyuter
-Magnitli disklar asosida qurilgan, ma’lumotlarni tezkor kiritish-chiqarish qurilmasi
-Ulanish nuqtalari ikki tomonda joylashgan xotira moduli
-Tarmoq interfeysining qurilmasi

? CISC qisqartmasi nimani anglatadi?
+To‘lik buyruqlar to‘plamiga ega kompyuter
-Magnitli disklar asosida qurilgan, ma’lumotlarni tezkor kiritish-chiqarish qurilmasi
-Ulanish nuqtalari ikki tomonda joylashgan xotira moduli
-Tarmoq interfeysining qurilmasi

? Kompyuterning minimal tarkibiga nimalar kiradi?
+monitor, tizimli blok, klaviatura 
-vinchester, «sichqoncha», protsessor
-printer, klaviatura, disketa
-tizimli blok, skaner, monitor

? Boshqarish shinasi nima uchun mo‘ljallangan?
+boshqarish signallarini uzatish uchun
-protsessor murojaat qilayotgan tashqi qurilmalarga, xotira adresini uzatish uchun
-ishlanayotgan axborotni uzatish uchun
-protsessordan kelayotgan axborotlarni, qurilmalar ishini boshqaruvchi mos signallariga o‘zgartirish uchun

? Ma’lumotlar shinasi nima uchun mo‘ljallangan?
 +ishlanayotgan axborotni uzatish uchun
 -protsessor murojaat qilayotgan tashqi qurilmalarga, xotira adresini uzatish uchun
 -boshqarish signallarini uzatish uchun
 -protsessordan kelayotgan axborotlarni, qurilmalar ishini boshqaruvchi mos signallariga o‘zgartirish uchun

? Videoadapterning ko‘rsata olish imkoniyati deganda nima tushiniladi?
 +gorizantal va vertikal bo‘ylab chiqarib bera olishi mumkin bo‘lgan nuqtalarining soni
 -ekranning diagonal bo‘yicha o‘lchami 
 -ekranning diagonal bo‘yicha o‘lchami 
 -ekrandagi tasvirning xajmini proportsional ravishda kichraytirishi/kengaytirishi

? Vinchester nima uchun mo‘ljallangan?
 +Ma’lumotlarni doimiy saqlash uchun
 -Tashqi qurilmalarni ulash uchun
 -Berilgan dastur asosida kompyuterni boshqarish uchun
 -Operativ hotirada ma’lumotni saqlash uchun

? Modem qanday vazifani bajaradi?
 +Analogli signalni raqamli signalga va raqamli signalni analogli signalga  aylantirish uchunuzgartiradi.
 -Ikkilik kodini analog signalga o‘zgartiradi
 -Analogli signalni ikkilik kodga o‘zgartiradi
 -Analogli signalni kuchaytirish uchun

? Kompyuterning ish samaradorligi nimaga bog‘liq? 
 +Protsessor chastotasiga
 -Manbanig kuchlanishiga
 -Klavishalarning tez ishlashiga
 -Kommunikatsiya tezligiga bog‘liq

? Takt chastotasining o‘lchov birligi nima? 
 +MGts
 -Mbayt
 -Kbayt
 -Bit

? XX asrning 40 yillarida hisoblash mashinalarining ishlash printsiplari kim tomonidan tavsiflangan?
 +Jon Fon Neyman tomonidan
 -MicroSoft kompaniyasi hodimlari tomonidan
 -Bill Geyts tomonidan
 -Klod SHen tomonidan

? CISC qanday arxitektura turi hisoblanadi?
+To'liq buyruqlar to'plami bilan
-Qisqartirilgan ko'rsatmalar to'plami
-Parallel ishlov berish uchun ko'rsatmalar to'plami
-Ma'lumot va buyruqlar to'plami

? RISC arxitekturasining qanday turi?
+Qisqartirilgan ko'rsatmalar to'plami
-To'liq buyruqlar to'plami
-Parallel ko'rsatmalar to'plami
-Ma'lumot va buyruqlar to'plami

? Ko'p protsessorli tizimlarda xotira qanday tashkil etilgan?
+Taqsimlangan va umumiy xotira
-Taqsimlanmagan va umumiy xotira
-Umumiy va kesh xotirasi
-Doimiy va tez xotira

? Umumiy xotiraga ega UMA multiprotsessorli tizimlarining turlarini belgilang
+SMP, PVP
-Klasterlar, MPPlar
-NCC-NUMA, CC-NUMA, COMA
-SMP, MPP

? SMP xotira va PVP bilan ko'p protsessorli tizim qanday?
+umumiy xotira bilan
-Tarqalgan xotira bilan
-kesh xotirasi bilan
-Doimiy xotira bilan
? Taqsimlangan xotira NUMA multiprotsessorli tizim turlarini belgilang
+NCC-NUMA, CC-NUMA, COMA
-Klasterlar, MPPlar
-SMP, PVP
-SMP, MPP

? Ko'p kompyuterli tizimlarning turlarini ko'rsating
+Klasterlar, MPPlar
-NCC-NUMA, CC-NUMA, COMA
-SMP, PVP
-SMP, MPP

? Klasterlar va MPPlar qanday turdagi tizimlardir?
+Ko'p kompyuter
-Ko'p protsessor
-Multimedia tizimlari
-Ko'p oqimli tizimlar

? Buyruqlar darajasidagi parallelizm nima?
+Bir nechta buyruqlarning bir qismini bir vaqtning o'zida bajarishning potentsial imkoniyati
-Buyruqlarni ketma-ket bajarish imkoniyati
-Buyruqlarni yuqori tezlikda bajaring
-Skriptlarni bajarish

? Buyruqlar bajarilishining potentsial o'zaro kelishishi nima deb ataladi?
+buyruq darajasidagi parallellik
-qurilma darajasidagi parallellik
-kesh darajasida parallelizm
-ROM darajasida parallellik

? Buyruqlar darajasidagi parallelizmning g'oyasi nima?
+konveyer g'oyasi bo'yicha
-parallellik g'oyasi haqida
-oqimlarni grafik qayta ishlash g'oyalari bo'yicha
-keyinchalik qayta ishlash g'oyalari haqida

? Superskalar protsessor nechta funktsiya blokiga ega
+5
-6
-8
-4

? Qaysi protsessorlar NetBurst mikroarxitekturasidan foydalanadi?
+Pentium 4
-Pentium 3
-Pentium 2
-Pentium 1

? Dekompozitsiya nima?
+Bu vazifani segmentlarga bo'lish uchun ishlov berishni anglatadi
-Bu parallel ishlov berish masalasi
-Ushbu ishlov berish vazifasi 2 ga bo'linadi
-Parallel ishlov berishdan foydalangan holda bu misol algoritmi

? Core i7 protsessorida nechta kesh darajasi mavjud?
+3
-2
-1
-5

? Qanday turdagi xotira operativ xotira deb ataladi?
+tasodifiy kirish xotira qurilmasi (RAM)
-doimiy xotira qurilmasi
-qo'shimcha saqlash qurilmasi
-flesh xotira qurilmasi

? Intel Core Duo protsessorining vazifasi nima?
+Bitta chipga joylashtirilgan ikkita yadroli protsessor
-64 bitli 4 yadroli protsessor
-integratsiyalangan grafik protsessor
-juda katta ko'rsatmalar to'plamiga ega protsessor

? Pentium II, Pentium Pro va Pentium III protsessorlari qanday mikroarxitekturaga asoslangan?
+Mikroarxitektura P6
-NetBurst mikroarxitekturasi
-giperplaziya texnologiyasi
-Mikroarxitektura P8

? Nahalem mikroarxitekturasi qaysi protsessorga tegishli?
+Intel Core i7
-Intel Pentium 4
-Intel Pentium 3
-Intel Core Duo

? 2011-yilda Intel Core i7 protsessorida qanday arxitektura ishlatilgan?
+Sandy-Bridge   
-Nahalem
-P6
-NetBurst

? Intel Core i7 protsessorida nechta bit bor?
+64
-32
-16
-8

? UltraSPARC III protsessorini qaysi kompaniya ishlab chiqaradi?
+SUN
-Intel
-AMD
-IBM

? UltraSPARC III protsessorida nechta quvur liniyasi mavjud?
+6
-4
-2
-12

? Shinalar kengligi deganda nima tushuniladi?
+Bir soatda o'tadigan bitlar soni
-Bir soniyada o'tadigan bitlar soni
-xotira hajmi
-Umumiy xotira hajmi

? Pentium asosidagi kompyuterlarning asosiy xotirasidagi baytlar qanday tartibda joylashgan?
+teskari tartibda
-teskari tartibda
-chapdan o'ngga
-Yuqoriga

? SPARC protsessorlari oilasiga asoslangan kompyuterlarning asosiy xotirasida baytlar qanday tartiblangan?
+to'g'ri tartibda
-teskari tartibda
-o'ngdan chapga
-yuqoriga

? Asosiy xotirada to'g'ri tartibda baytlarga ega bo'lgan kompyuter protsessorini ko'rsating.
+UltraSPARC III
-Pentium 4
-8051
-SIMM

? Asosiy xotirada teskari tartibda baytlarga ega bo'lgan kompyuter protsessoriga ishora qiling.
+Pentium 4
-UltraSPARC III
-8051
-SIMM

? Xuddi shu xotira panelida joylashgan xotira modullarining nomlari qanday?
+SIMM
-DIMM
-SISD
-RISC

? Xotira panelining ikkala tomonida joylashgan xotira modullari qanday nomlanadi?
+DIMM
-SIMM
-CISC
-RISC

? D-flip-floplar asosida RAM qurilmasini belgilang.
+Statik xotira (SRAM)
-dinamik tasodifiy kirish xotirasi (DRAM)
-FPM dinamik xotira qurilmasi
-EDO dinamik xotira qurilmasi

? Ma'lumotni o'chirish va qayta yozish mumkin bo'lgan dasturlashtiriladigan faqat o'qish uchun xotira qurilmasini belgilang.
+EPROM
-SIMS
-ROM
-DRAM

? Kompyuter tashqi komponentlar bilan bog'lanishi mumkin bo'lgan shinani belgilang.
+PCI
-ISA
-EISA
-AGP

? Ma'lumotlarni ketma-ket uzatuvchi universal shinani belgilang.
+USB
-ISA
-EISA
-PCI

? Monitorda rang yaratish uchun qanday ranglar ishlatiladi?
+qizil, ko'k, yashil
-qora, oq, ko'k
-sariq, qizil, oq
-yashil, qora, sariq

? USB qisqartmasi nimani anglatadi?
+universal seriyal bus
-Sanoat standarti me'moriy bus
-Tez grafik port busi
-Tarmoq interfeysi qurilmasi

? Dasturning har bir satrini tahlil qiladigan va darhol ishga tushadigan tizim dasturi nima?
+Tarjimon
-Nosozliklarni tuzatuvchi
+Tarjimon
-Kompilyator

? Butun dasturni tahlil qilib, keyin uni bajarish uchun kompyuter xotirasiga yozuvchi tizimli dastur qanday nomlanadi?
+Kompilyator
-Nosozliklarni tuzatuvchi
-Tarjimon
-Sozlagich

? Qaysi qurilma tashqi qurilma va shina o'rtasidagi aloqani o'rnatadi?
+boshqaruvchi
-Vinchester
-avtomobil yo'llari
-ALU

? Vinchester nima uchun?
+Ma'lumotlar va dasturlarni doimiy saqlash uchun
-Tashqi qurilmalarni ulash uchun
-Kompyuter dasturini boshqarish uchun
-Ma'lumotlar va dasturlarni onlayn saqlash uchun

? Modem nima qiladi?
+Signalni qabul qilish va uzatish uchun aylantiring.
-Ikkilik kodni analog signalga aylantiradi
-Analog signalni ikkilik kodga aylantiradi
-Analog signalni kuchaytirish uchun

? Shaxsiy kompyuterlar uchun shinalarning maqsadi nima?
+Kompyuter komponentlari va qurilmalarini ulash
-Kompyuterning radiatsiya signallarini yo'q qiling
-Kompyuterning termal nurlanishidan chiqarib tashlangan
-Kompyuter uchun umumiy quvvat manbasini ta'minlaydi

? Kompyuter yoqilganda dastlabki sinov dasturi qayerda?
+BIOS chipida
-RAMda
-tashqi xotirada
-protsessor registrlarida

? Kompyuterda ma'lumotlar qanday ko'rinadi?
+ikkilik shaklda
-Belgilar va raqamlar ko'rinishida
-Matn shaklida
-o'nlik sanoq tizim

? OpenMP texnologiyasi bilan qanday tizimlar dasturlashtirilgan?
+Umumiy xotiraga ega tizimlar uchun
-Tarqalgan tizimlar uchun
-Haqiqiy vaqt tizimlari uchun
-Ma'lumotlar bazasini boshqarish tizimlari uchun

? Umumiy xotira tizimlari uchun mo'ljallangan parallelizatsiya kutubxonasini belgilang.
+OpenMp
-TBB
-CUDA
-MPI

? Protsessor yadrosiga eng yaqin keshga ishora qiling
+L1
-L2
-L3
-L4

? L1 keshining nechta turi mavjud?
+2
-3
-4
-1

? L1 keshining 2 turini tanlang
+Ma'lumotlar va buyruqlar
-Ma'lumotlar va manzillar
-Buyruqlar va manzillar
-Manzillar va teglar

? Virtual yadroli protsessorlarda ishlatiladigan texnologiyani belgilang.
+Hyper Threading
-PPL
-CUDA
-MPI

? Hisoblash tezligiga ijobiy ta'sir ko'rsatadigan arxitekturani ko'rsating.
+Konveyer
-PPL
-UMA
-SISD

? Amdal qonunining talqini qayerda?
+Tezlik (samaradorlik) yadrolar soniga bog'liq
-avlod protsessor samaradorligi
-Parallel ishlov berishning arxitekturaga bog'liqligi
-Hisoblash samaradorligining kesh xotirasiga bog'liqligi

? Tezlik (samaradorlik) yadrolar soniga bog'liq degan qonunni aniqlagan olimning ismini toping.
+Amdal
-fon Neumann
-Flinn
-Gustafson

? Ish samaradorligini oshirish uchun ultra tez xotirani belgilang
+Kesh xotirasi
 -SDD xotirasi
 -ROM
 -Ram

? Parallel ishlov berish arxitekturasini tanlang
+MIMD
-SIMD
-SISD
-MISD

? Seriyali ma'lumotlarni qayta ishlash uchun to'g'ri arxitekturani tanlang
+SISD
-SIMD
-MIMD
-MISD

? Buyruqlarni parallel qayta ishlash uchun mos arxitekturani tanlang.
+MIMD
-SIMD
-SISD
-MISD

? AMD protsessorlarining kamchiliklarini to'g'ri ko'rsatadigan javobni tanlang
Juda yuqori qizib ketish
Yuqori narx
Juda sekin grafik hisoblar
Oyoqlar juda katta

? OpenMP kutubxonasi bilan bog'liq buyruqlarni qanday ishlatish kerak?
 +#pragma
-#omp
-#parallel
-#ip

? Hisoblash oqimida necha bosqich amalga oshiriladi?
+5
-3
-4
-2

? Simmetrik multiprosessing nima?
+bir xil turdagi protsessorlarning integratsiyalashgan tizimi
-Bir xil xotira elementlarining integratsiyalashgan tizimi
-Bir xil kesh elementlarining integratsiyalashgan tizimi.
-Shu kabi tezkor xotira elementlarining integratsiyalashgan tizimi

? Bir turdagi protsessorlarning birlashtirilgan tizimi qanday nomlanadi?
+Simmetrik ko'p ishlov berish
-Hyper Threading
-VLIW arxitekturasi
-CUDA

? Hyper Threading texnologiyasidan maqsad nima?
+bir nechta iplarni yaratish uchun
-bir nechta xotira manzillarini yaratish uchun
-Bir xil kesh elementlarining integratsiyalashgan tizimi.
-Shu kabi tezkor xotira elementlarining integratsiyalashgan tizimi

? Intel protsessorlarida qanday hisoblash texnologiyalari keng qo'llaniladi?
+Hyper Threading
-NUMA
-CUDA
-MPI

? VLIW arxitekturasining asosiy vazifasi nimadan iborat?
+Uzoq buyruq so'zi uzunligi
-Qisqa jamoa hajmi
-Qisqa o'lchamdagi ma'lumotlar
-Uzoq ma'lumotlar hajmi

? VLIW arxitekturasida vazifa qaysi bosqichda shakllanadi?
+Kompilyatsiya vaqtida
-U apparat darajasiga yetganda
-Operatsion uchinchi daraja
-Dasturlash paytida

? OpenMP kutubxonasida sikllarni parallel taqsimlash qaysi buyruq asosida amalga oshiriladi?
+#pragma omp parallel uchun
-#pragma omp parallel qil
-#pragma omp parallel esa
-#pragma _ om

? Superkompyuterlarning hisoblash tezligi uchun o'lchov birligi?
+FLOPS
-MIPS
-Mbit/s
-bit

? TOP - 500 tizimi nima?
+Kompyuter tizimining tezligini baholaydi
-Kompyuterlar narxini hisoblab chiqadi
-Kompyuterlardan ishlab chiqarishni taxmin qiladi
-baholash kompyuterlar

? Vektorli quvurli kompyuter qaysi arxitekturaga tegishli?
+SIMD
-MIMD
-SISD
-MISD

? Ko'p protsessorli tizimlar qanday arxitekturaga tegishli?
+MIMD
-SIMD
-SISD
-MISD

? L1 keshi qayerda joylashgan?
+protsessor ichida
-tasodifiy kirish RAMda
-ROMda
-I/U tizimida

? Protsessor ichida joylashgan kesh xotirasini belgilang
+L1, L2, L3
-L1, L2
-L1
-L2, L3

? L 2 kesh xotirasi qayerda ?
+protsessor ichida
-tasodifiy kirish RAMda
-doimiy xotirada
-I/U tizimida

? L 3 keshi qayerda ?
+protsessor ichida
-tasodifiy kirish RAMda
-doimiy xotirada
-I/U tizimida

? Protsessorlardagi vazifalarni parallellashtirish texnologiyasini ko'rsating?
+Ko'p vazifalarni bajarish
-turbo kuchaytirgich
-Giper Theading
-openmp

? Protsessorlarning “tezlashtirish qobiliyati” deganda qanday texnologiya tushuniladi?
+turbo kuchaytirgich
-Ko'p vazifalarni bajarish
-Giper Theading
-CUDA

? Nvidia -ning parallel texnologiyasini tanlang
+CUDA
-TBB
-MPI
-PPL

? CUDA - bu qaysi kompaniya tomonidan ishlab chiqilgan texnologiya?
+Nvidia
-AMD
-Intel
-Samsung

? Qaysi arxitektura matritsalarni ko'paytirish jarayonlaridan keng foydalanadi?
+MIMD
-SIMD
-SISD
-MISD

? GPU ishlab chiqishda qaysi kompaniyalar yetakchi?
+AMD, Nvidia
-Intel, AMD
-Samsung, Intel
-Nvidia, Intel, Samsung

? Taqsimlangan tizimlarda keng ko'lamli muammoni hal qilish uchun nima qilinmoqda?
+vazifa kompyuterlar o'rtasida taqsimlanadi.
-vazifa mashina manzil xotirasi o'rtasida taqsimlanadi
-Vazifaning materiali shinalar o'rtasida taqsimlanadi.
-vazifa dasturchilar o'rtasida taqsimlanadi

? Qaysi turdagi kompyuter Core i7 protsessoridan foydalanadi?
+shaxsiy kompyuterlar
-ko'p kompyuterlar
-o'rnatilgan kompyuterlar
-barcha turdagi kompyuterlar

? Anakartdagi shimoliy ko'prik quyidagilarni qo'llab-quvvatlaydi:
+Tizim avtobusi, xotira, video adapter
-Qattiq disklar va optik disklar
-Ovoz kartasi va modem
-Klaviaturalar, sichqonchalar, printerlar, skanerlar

? Qaysi kesh darajasi eng tez?
+Birinchi
-Ikkinchi
-Uchinchisi
-To'rtinchi

? Protsessor boshqaruv blokining vazifasi nimadan iborat?
+xotiradan buyruqni yuklaydi va uning shifrini ochadi
-arifmetik-mantiqiy amalni bajaradi
-saqlash ma'lumotlarini yig'ish va ma'lumotlarni qayta ishlash
-tashqi qurilmalarni boshqaradi

? Protsessorning arifmetik mantiq birligi qanday vazifani bajaradi?
+arifmetik-mantiqiy amallarni bajaradi
-xotiradan buyruqni yuklaydi va uning shifrini ochadi
-saqlash ma'lumotlarini yig'ish va ma'lumotlarni qayta ishlash
-tashqi qurilmalarni boshqaradi

? Umumiy maqsadli registrlar qanday vazifani bajaradi?
+operandlarning o'zini yoki natijani yoki ushbu operandlar yoki natijalarga ko'rsatgichlarni saqlang
-buyruqlarni saqlash
-arifmetik-mantiqiy amallarni bajaradi
-tashqi qurilmalarni boshqaradi

? OMAP4430 protsessori qanday kompyuter turi uchun ishlatiladi ?
+mobil kompyuterlar
-shaxsiy kompyuterlar
-qurilgan kompyuterlar
-barcha turdagi kompyuterlar

? Pentium protsessorini yaratish uchun qanday turdagi kompyuterlardan foydalaniladi?
+shaxsiy kompyuterlar
-barcha turdagi kompyuterlar
-ko'p kompyuterlar
-o'rnatilgan kompyuterlar

? Quyidagilardan qaysi biri fon Neyman tamoyillariga mos keladi?
+Ikkilik sanoq tizimining qo'llanilishi
-sakkizlik sanoq sistemasi
-o'nlik sanoq tizimi
-o'n oltilik sanoq tizimi

? Quyidagilardan qaysi biri fon Neyman tamoyillariga mos keladi?
+dasturiy ta'minotni boshqarish
-avtomatik boshqaruv
-avtomatlashtirilgan boshqaruv
-qo'lda boshqarish

? "Uskuna" nima?
+kompyuter texnikasi
-IBM shaxsiy kompyuterlari uchun mo'ljallangan eng mashhur tizim
-yangi dasturlar yaratish imkonini beruvchi tizim
-kompyuterlarning texnik va dasturiy ta’minotini modernizatsiya qilish

? "Dasturiy ta'minot " Nima ?
+kompyuter dasturi
-Plug va Play tizimi
-qulaylik
-Yangi qurilmalarni kompyuterga ulash uchun mo'ljallangan dastur

? Quyidagilardan qaysi biri dasturiy vosita emas?
+Markaziy protsessor
-Jadval muharriri
-tizim dasturiy ta'minoti
-matn va tasvir muharrirlari

? Qaysi qurilma tashqi qurilma va shina o'rtasidagi aloqani o'rnatadi?
+boshqaruvchi
-Vinchester
-avtomobil yo'llari
-Markaziy protsessor

? Dastlabki kompyuter test dasturi qayerda yozilgan?
+BIOS chipida
-RAMda
-tashqi xotirada
-protsessor registrlarida

? Shaxsiy kompyuterda ma'lumotlarni qayta ishlash uchun qanday qurilma ishlatiladi?
+protsessorda
-Adapterda
-Avtobusda
-Klaviaturada

? 1940-yillarda kompyuterlar qanday ishlashini kim tasvirlab bergan?
+Jon fon Neyman
-MicroSoft xodimlari
-Bill Geyts
-Klod Shen

? Kompyuter o'chirilganda kompyuterdagi ma'lumotlar qaysi xotiradan yo'q qilinadi?
+RAMda
-yumshoq diskda
-CDda
-qattiq diskda

? Dastur...?
+Ma'lumotlarni qayta ishlash jarayonida kompyuter bajaradigan buyruqlar ketma-ketligi.
-Ushbu ma'lumot kompyuter kodiga o'tkaziladi
-Raqamli va matnli ma'lumotlar
-Audio va grafik ma'lumotlar

? Bu ushbu dastur uchun ma'lumotlarni qayta ishlash qurilmasimi?
+Markaziy protsessor
-Kirish qurilmasi
-tez xotira
-Qidiruv qurilmasi

? Qayta ishlash jarayonida dasturiy ta'minot va ma'lumotlar qayerda joylashgan?
+RAM
-ROM
-Qattiq disk uchun
-Kesh

? Bir soniyadagi tebranishlar soni qanday nomlanadi?
+Soat chastotasi
-CPU drenaji
-Kesh
-Kompyuter samaradorligi

? Vektorli va matritsali ishlov berish tuzilmalariga ega hisoblash tizimlari sinfini aniqlang.
+SIMD
-SISD
-MISD
-MIMD

? Ko'p protsessorli tizimlar qaysi sinfga tegishli ekanligini aniqlang
+MIMD
-SISD
-MISD
-SIMD

? Bir nechta buyruqlar va bitta ma'lumotlar oqimiga ega sinfni belgilang
+MISD
-SISD
-MIMD
-SIMD

? Bir nechta buyruqlar va bir nechta ma'lumotlar oqimi bilan sinfni aniqlang
+MIMD
-SISD
-MISD
-SIMD

? Bitta buyruq va bitta ma'lumot oqimiga ega sinfni belgilang
+SISD
-MISD
-MIMD
-SIMD

? Bitta buyruq va bir nechta ma'lumotlar oqimiga ega sinfni belgilang
+SIMD
-MISD
-MIMD
-SISD

? Ko'p kompyuter tizimlari qaysi sinfga tegishli ekanligini aniqlang
+MIMD
-SISD
-MISD
-SIMD

? Ko'p protsessorli hisoblash tizimlarini aniqlang
+UMA, COMA, NUMA
-MPP, COW
-Vektor, matritsa
-CC-NUMA, COMA, MPP, COW

? Kompyuter nima?
+Ma'lumotlarni qayta ishlash va kerakli natijani olish imkonini beruvchi texnik vositalar to'plami
-Ko'rsatmalar to'plami qurilmasi
-Ma'lumotlarni qayta ishlashni amalga oshiradigan bir yoki bir nechta kompyuterlar, tashqi qurilmalar va dasturlar to'plami
-Foydalanuvchi ehtiyojlarini qondirish uchun mo'ljallangan xususiyatlar va xizmatlarni taqdim etadigan qurilma.

? EHMlarning birinchi avlodi (1-avlod) qaysi davrga tegishli?
+1950-1960 yillar
-1960-1970 yillar
-1970-1980 yillar
-1980–1990 yillar

? EHMlarning ikkinchi avlodi qanday davrga to‘g‘ri keladi?
+1960-1970 yillar
-1950-1960 yillar
-1970-1980 yillar
-1980–1990 yillar

? Kompyuterlarning uchinchi avlodi qaysi davrga tegishli?
+1970-1980 yillar
-1950-1960 yillar
-1960-1970 yillar
-1980–1990 yillar

? EHMlarning to‘rtinchi avlodi qaysi davrga tegishli?
+1980–1990 yillar
-1950-1960 yillar
-1960-1970 yillar
-1970-1980 yillar

? Birinchi kompyuter arxitekturasini yaratgan olimning ismini ayting
+fon Neumann
-Amdal
-Flinn
-Gustafson

? Fon Neyman kompyuter arxitekturasining asosiy qismlari nimalardan iborat?
+5 bu
-6 ta
-4ta
-3 ta

? Parallel hisoblash tizimlarining to'g'ri ta'rifini ko'rsating?
+Parallel ravishda ma'lumotlarni qayta ishlaydigan hisoblash asboblari to'plami
-Ma'lumotlarni ketma-ket qayta ishlovchi hisoblash vositalari to'plami
-Hisoblash qurilmalari SISD arxitekturasi asosida ma'lumotlarni qayta ishlash
-Hisoblash qurilmalari MISD arxitekturasi asosida ma'lumotlarni qayta ishlash

? Sinfdagi ko'rsatmalarga va parallel ishlov berish ma'lumotlariga mos keladigan Flynn tasnifi?
+MIMD
-SISD
-MISD
-SIMD

? Tarqalgan ruxsatga ega xotira arxitekturasini ko'rsating?
+NUMA
-SISD
-UMA
-SIMD

? Parallel dasturlash uchun maxsus texnologiyalarni belgilang.
+CUDA
-turbo kuchaytirgich
-Jango
-MIMD

? Tarqalgan xotira hisoblash tizimlari uchun mo'ljallangan parallel dasturlash kutubxonasini tanlang.
+MPI
-CUDA
-openmp
-C++

? MPI texnologiyasi qaysi tizimlar uchun mo'ljallangan?
+Tarqalgan xotira tizimlari
-Umumiy xotira tizimlari
-Haqiqiy vaqt tizimlari uchun
-O'rnatilgan tizimlar uchun

? Grafik axborotni parallel qayta ishlash texnologiyasi ...
+CUDA
-TBB
-openmp
-MPI

? Kesh xotira nima?
+ma'lumotlar va dasturlarni vaqtincha saqlash uchun protsessor ichidagi o'ta tezkor xotira
-vaqtinchalik ma'lumotlarni saqlash uchun protsessor ichidagi o'ta tezkor xotira
-dasturlarni vaqtincha saqlash uchun protsessor ichidagi o'ta tezkor xotira
-Operatsion tizim ma'lumotlarini saqlaydigan faqat o'qish uchun mo'ljallangan xotira

? SISD ga mos keltirilgan ta’rifni ko’rsating?
+SISDan’anaviymonoprotsessorga(FonNeymanarxitekturasi)moskeladi. Bitta ma’lumot oqimi bitta buyruq oqimi bilan qayta ishlanadi yoki bir protsessorli kompyuter , qaysiki dasturdan bitta buyruq oqimi tashkil qilinadigan.
-Har bir buyruq turli xil protsessorlar tomonidan turli xil ma'lumotlarda amalga oshiriladi, ya'ni bir xil ma'lumotlarga ega bo'lgan bir xil turdagi protsessual oqimlarning bir nechta ishlov berish birliklarida bajariladi. Ushbu guruh qatorlarni (massivlar) qayta ishlash mashinalariga bag'ishlangan. Ba'zan vektor protsessorlari ham ushbu guruhning bir qismi sifatida ko'rib chiqilishi mumkin.
-Har bir protsessor turli xil ko'rsatmalar ketma-ketligini bajaradi. ____ kompyuterlarida bitta ma'lumotlar oqimida bir nechta protsessor birliklari ishlaydi.
-Har bir protsessorda alohida dastur mavjud. Har bir dasturdan buyruq oqimi yaratiladi. Har bir buyruq turli xil ma'lumotlar asosida ishlaydi. Ushbu so'nggi mashina turi an'anaviy ko'p protsessorlar guruhini yaratadi. Bir nechta ma'lumot uzatish oqimlarida birnechta protsessor birliklari ishlaydi.

? SIMD ga mos keltirilgan ta’rifni ko’rsating?
+Har bir buyruq turli xil protsessorlar tomonidan turli xil ma'lumotlarda amalga oshiriladi, ya'ni bir xil ma'lumotlarga ega bo'lgan bir xil turdagi protsessual oqimlarning bir nechta ishlov berish birliklarida bajariladi. Ushbu guruh qatorlarni (massivlar) qayta ishlash mashinalariga bag'ishlangan. Ba'zan vektor protsessorlari ham ushbu guruhning bir qismi sifatida ko'rib chiqilishi mumkin.
-Har bir protsessor turli xil ko'rsatmalar ketma-ketligini bajaradi. ____ kompyuterlarida bitta ma'lumotlar oqimida bir nechta protsessor birliklari ishlaydi.
-Har bir protsessorda alohida dastur mavjud. Har bir dasturdan buyruq oqimi yaratiladi. Har bir buyruq turli xil ma'lumotlar asosida ishlaydi. Ushbu so'nggi mashina turi an'anaviy ko'p protsessorlar guruhini yaratadi. Bir nechta ma'lumot uzatish oqimlarida birnechta protsessor birliklari ishlaydi.
-SISDan’anaviymonoprotsessorga(FonNeymanarxitekturasi)moskeladi. Bitta ma’lumot oqimi bitta buyruq oqimi bilan qayta ishlanadi yoki bir protsessorli kompyuter , qaysiki dasturdan bitta buyruq oqimi tashkil qilinadigan.

? MISD ga mos keltirilgan ta’rifni ko’rsating?
+Har bir protsessor turli xil ko'rsatmalar ketma-ketligini bajaradi. ____ kompyuterlarida bitta ma'lumotlar oqimida bir nechta protsessor birliklari ishlaydi.
-Har bir protsessorda alohida dastur mavjud. Har bir dasturdan buyruq oqimi yaratiladi. Har bir buyruq turli xil ma'lumotlar asosida ishlaydi. Ushbu so'nggi mashina turi an'anaviy ko'p protsessorlar guruhini yaratadi. Bir nechta ma'lumot uzatish oqimlarida birnechta protsessor birliklari ishlaydi.
-SISDan’anaviymonoprotsessorga(FonNeymanarxitekturasi)moskeladi. Bitta ma’lumot oqimi bitta buyruq oqimi bilan qayta ishlanadi yoki bir protsessorli kompyuter , qaysiki dasturdan bitta buyruq oqimi tashkil qilinadigan.
-Har bir buyruq turli xil protsessorlar tomonidan turli xil ma'lumotlarda amalga oshiriladi, ya'ni bir xil ma'lumotlarga ega bo'lgan bir xil turdagi protsessual oqimlarning bir nechta ishlov berish birliklarida bajariladi. Ushbu guruh qatorlarni (massivlar) qayta ishlash mashinalariga bag'ishlangan. Ba'zan vektor protsessorlari ham ushbu guruhning bir qismi sifatida ko'rib chiqilishi mumkin.

? MIMD ga mos keltirilgan ta’rifni ko’rsating?
+Har bir protsessorda alohida dastur mavjud. Har bir dasturdan buyruq oqimi yaratiladi. Har bir buyruq turli xil ma'lumotlar asosida ishlaydi. Ushbu so'nggi mashina turi an'anaviy ko'p protsessorlar guruhini yaratadi. Bir nechta ma'lumot uzatish oqimlarida birnechta protsessor birliklari ishlaydi.
-SISDan’anaviymonoprotsessorga(FonNeymanarxitekturasi)moskeladi. Bitta ma’lumot oqimi bitta buyruq oqimi bilan qayta ishlanadi yoki bir protsessorli kompyuter , qaysiki dasturdan bitta buyruq oqimi tashkil qilinadigan.
-Har bir buyruq turli xil protsessorlar tomonidan turli xil ma'lumotlarda amalga oshiriladi, ya'ni bir xil ma'lumotlarga ega bo'lgan bir xil turdagi protsessual oqimlarning bir nechta ishlov berish birliklarida bajariladi. Ushbu guruh qatorlarni (massivlar) qayta ishlash mashinalariga bag'ishlangan. Ba'zan vektor protsessorlari ham ushbu guruhning bir qismi sifatida ko'rib chiqilishi mumkin.
-Har bir protsessor turli xil ko'rsatmalar ketma-ketligini bajaradi.kompyuterlarida bitta ma'lumotlar oqimida bir nechta protsessor birliklari ishlaydi.

? Parallel ishlov berishga berilgan qaysi ta'rif to'g'ri?
+Umumiy vazifani alohida qismlarini bajarish uchun ikki yoki undan ko’p protsessor bilan ishlashni usuli. Bunda ko’p protsessorlar orasida bitta vazifani turli qismlarga bo’lish orqali dasturni ishga tushirish vaqtini kamaytiradi.
-Ham parallel hisoblash modeli ham dasturlash modeli bo’lib, xotira adresiga qaraganda ma'lumotlar uchun parallel dasturlashdan foydalanishni va xotirada ma'lumotlarni tarkibini qidirish qobiliyatini o'z ichiga oladi.
-Real vaqt rejimida ko’plab manbalardan keladigan birnechta ma’lumotlar oqimini tahlil qilish uchun yuqori ko’rsatgichli kompyuter tizimlarda foydalaniladi.
-To’g’ri javob berilmagan

? Assotsiativ ishlov berishga berilgan qaysi ta'rif to'g'ri?
+Ham parallel hisoblash modeli ham dasturlash modeli bo’lib, xotira adresiga qaraganda ma'lumotlar uchun parallel dasturlashdan foydalanishni va xotirada ma'lumotlarni tarkibini qidirish qobiliyatini o'z ichiga oladi.
-Umumiy vazifani alohida qismlarini bajarish uchun ikki yoki undan ko’p protsessor bilan ishlashni usuli. Bunda ko’p protsessorlar orasida bitta vazifani turli qismlarga bo’lish orqali dasturni ishga tushirish vaqtini kamaytiradi.
-Real vaqt rejimida ko’plab manbalardan keladigan birnechta ma’lumotlar oqimini tahlil qilish uchun yuqori ko’rsatgichli kompyuter tizimlarda foydalaniladi.
-To’g’ri javob berilmagan

? Oqimli ishlov berish/hisoblashga berilgan qaysi ta'rif to'g'ri?
+Real vaqt rejimida ko’plab manbalardan keladigan birnechta ma’lumotlar oqimini tahlil qilish uchun yuqori ko’rsatgichli kompyuter tizimlarda foydalaniladi.
-Ham parallel hisoblash modeli ham dasturlash modeli bo’lib, xotira adresiga qaraganda ma'lumotlar uchun parallel dasturlashdan foydalanishni va xotirada ma'lumotlarni tarkibini qidirish qobiliyatini o'z ichiga oladi.
-Umumiy vazifani alohida qismlarini bajarish uchun ikki yoki undan ko’p protsessor bilan ishlashni usuli. Bunda ko’p protsessorlar orasida bitta vazifani turli qismlarga bo’lish orqali dasturni ishga tushirish vaqtini kamaytiradi.
-To’g’ri javob berilmagan

? Kompyutera arxitekturasi deb nimaga aytiladi?
+axborotni qayta ishlashga mo‘ljallangan, ma’lumotlarga ishlov berish usullarini o‘z ichiga olgan, apparat va dasturiy ta’minotning o‘rtasidagi o‘zaro bog‘liqlikni taminlovchi konseptual tuzilishiga aytiladi.
-protsessorning buyruqlar to‘plami arxitekturasini yaratish usuliga aytiladi (SPARC, x86, ... va hokazo).
-komputer arxitekturasining dasturlashga javob beruvchi mikroprotsessor yadrosi qismiga aytiladi.
-hisoblash mashinasining asosiy tarkibiy qismi bo‘lib uning keyingi arxitekturasini aniqlaydi va IT- mutaxassislar uchun amaliy qo‘llanish yo‘lanishini aniqlaydi.

?Mikroarxitektura deb nimaga aytiladi?
+protsessorning buyruqlar to‘plami arxitekturasini yaratish usuliga aytiladi (SPARC, x86, ... va hokazo).
-axborotni qayta ishlashga mo‘ljallangan, ma’lumotlarga ishlov berish usullarini o‘z ichiga olgan, apparat va dasturiy ta’minotning o‘rtasidagi o‘zaro bog‘liqlikni taminlovchi konseptual tuzilishiga aytiladi.
-komputer arxitekturasining dasturlashga javob beruvchi mikroprotsessor yadrosi qismiga aytiladi.
-hisoblash mashinasining asosiy tarkibiy qismi bo‘lib uning keyingi arxitekturasini aniqlaydi va IT- mutaxassislar uchun amaliy qo‘llanish yo‘lanishini aniqlaydi.

? Buyruqlar to‘plami arxitekturasi deb nimaga aytiladi?
+komputer arxitekturasining dasturlashga javob beruvchi mikroprotsessor yadrosi qismiga aytiladi.
-hisoblash mashinasining asosiy tarkibiy qismi bo‘lib uning keyingi arxitekturasini aniqlaydi va IT- mutaxassislar uchun amaliy qo‘llanish yo‘lanishini aniqlaydi.
-protsessorning buyruqlar to‘plami arxitekturasini yaratish usuliga aytiladi (SPARC, x86, ... va hokazo).
-axborotni qayta ishlashga mo‘ljallangan, ma’lumotlarga ishlov berish usullarini o‘z ichiga olgan, apparat va dasturiy ta’minotning o‘rtasidagi o‘zaro bog‘liqlikni taminlovchi konseptual tuzilishiga aytiladi.

? Protsessor arxitekturasi nimaga aytiladi?
+hisoblash mashinasining asosiy tarkibiy qismi bo‘lib uning keyingi arxitekturasini aniqlaydi va IT- mutaxassislar uchun amaliy qo‘llanish yo‘lanishini aniqlaydi.
-komputer arxitekturasining dasturlashga javob beruvchi mikroprotsessor yadrosi qismiga aytiladi.
-protsessorning buyruqlar to‘plami arxitekturasini yaratish usuliga aytiladi (SPARC, x86, ... va hokazo).
-axborotni qayta ishlashga mo‘ljallangan, ma’lumotlarga ishlov berish usullarini o‘z ichiga olgan, apparat va dasturiy ta’minotning o‘rtasidagi o‘zaro bog‘liqlikni taminlovchi konseptual tuzilishiga aytiladi.

? Napier suyiklari hisoblash moslamasini qachon ixtiro qilingan?
+Shotlandiyalik olim 1617 yilda 
-1642-yilda fransuz olimi
-1671 yilda nemis matematigi
-1833 yilda Angliyalik olim

? Paskal kalkulyatori hisoblash moslamasini qachon ixtiro qilingan?
+1642-yilda fransuz olimi 
-1671 yilda nemis matematigi
-1833 yilda Angliyalik olim
-Shotlandiyalik olim 1617 yilda

? Leibnz kalkulyatori hisoblash moslamasini qachon ixtiro qilingan?
+1671 yilda nemis matematigi
-1833 yilda Angliyalik olim
-Shotlandiyalik olim 1617 yilda
-1642-yilda fransuz olimi

? Analitik dvigatel hisoblash moslamasini qachon ixtiro qilingan?
+1833 yilda Angliyalik olim 
-Shotlandiyalik olim 1617 yilda
-1642-yilda fransuz olimi
-1671 yilda nemis matematigi

? Kompyuterlarning birinchi avlodi nechanchi yillarga to’g’ri keladi va u nimalardan tashkil topgan?
+1940-1950 yillar: (Vakuumli quvurlar va plaginlar)
-1950-1960 yillar: (Tranzistorlar va partiyalarni topshirish)
-1960-1970 yillar (Integratsiyalashgan sxemalar va ko‘p dasturlash)
-1970-yillardan hozirgi kungacha (Mikroprotsessor, operatsion tizim va grafik interfeys)

? Kompyuterlarning ikkinchi avlodi nechanchi yillarga to’g’ri keladi va u nimalardan tashkil topgan?
+1950-1960 yillar: (Tranzistorlar va partiyalarni topshirish)
-1960-1970 yillar (Integratsiyalashgan sxemalar va ko‘p dasturlash)
-1970-yillardan hozirgi kungacha (Mikroprotsessor, operatsion tizim va grafik interfeys)
-1940-1950 yillar: (Vakuumli quvurlar va plaginlar)


-----
                  ?2VA-EMAS mantiqiy elementi kirish signallari kombinatsiyasi
                  orqali boshqariladi: x10; x21. Tranzistorlar holatini aniqlang.
                  +VT0- ochiq ; VT1- yopiq ; VT2- ochiq -VT0- yopiq; VT1- yopiq ;
                  VT2- yopiq -VT0- ochiq ; VT1- ochiq ; VT2- ochiq -VT0- yopiq;
                  VT1- ochiq ; VT2- yopiq ?2YOKI-EMAS mantiqiy element ikkala
                  kirishga mantiqiy 0 darajasi berilsa, VT1 va VT2 berk bo‘ladi.
                  Chiqishda esa yuqori sath kuchlanishi – mantiqiy .......
                  o‘rnatiladi. +1 -0 -2 -3 ?KMDYa-tranzistorlarda 2YOKI-EMAS
                  mantiqiy elementida p-kanalli MDYa tranzistori qanday ulanadi.
                  +ketma-ket -Parallel -ketma-ket va parallel -parallel va
                  ketma-ket ?2YOKI –EMAS elementda biror kirishga yuqori sath
                  kuchlanishi (U1KIR( U0) berilsa, mos ravishda VT1 yoki VT2
                  tranzistor ........ va chiqishda mantiqiy 0 (U0CHIQ ( U0)
                  o‘rnatiladi. +ochiladi -berk -ochiladi yoki berk -berk yoki
                  ochiladi ?2VA-EMAS MEda VT1 va VT2 tranzistorlar ............
                  ulanadi. +ketma – ket -parallel -ketma – ket va parallel
                  -parallel va ketma – ket ?2YOKI-EMAS MEda VT1 va VT2
                  tranzistorlar ............ ulanadi. +Parallel -ketma-ket -ketma
                  – ket va parallel -parallel va ketma – ket ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/94/NWpuK4NTpsuvq7mzIc4hYBIHQB5GHlIc.jpg"
                    alt=""
                    width="149"
                    height="127"
                  />
                  Qaysi mantiqiy element sxemasi keltirilgan? +2VA – EMAS
                  -YOKI-EMAS -2YOKI -Invertor ?2VA-EMAS mantiqiy element ikkala
                  kirishga mantiqiy 0 darajasi berilsa, VT1 va VT2 berk bo‘ladi.
                  Chiqishda esa yuqori sath kuchlanishi – mantiqiy .......
                  o‘rnatiladi. +1 -0 -2 -3 ?2YOKI-EMAS mantiqiy element ikkala
                  kirishga mantiqiy 1 darajasi berilsa, VT1 va VT2 ochiq bo‘ladi.
                  Chiqishda esa yuqori sath kuchlanishi – mantiqiy .......
                  o‘rnatiladi. +0 -1 -2 -3 ?2VA-EMAS mantiqiy element ikkala
                  kirishga mantiqiy 1 darajasi berilsa, VT1 va VT2 ochiq bo‘ladi.
                  Chiqishda esa yuqori sath kuchlanishi – mantiqiy .......
                  o‘rnatiladi. +0 -1 -2 -3 ?Agar 1x4 demultipleksorni boshqaruviga
                  S00, S10 berilgan bo‘lsa, chiqishda kirish liniyasini Q da
                  namoyon qiladi. +Q0 -Q1 -Q2 -Q3 ?Agar 1x4 demultipleksorni
                  boshqaruviga S01, S10 berilgan bo‘lsa, chiqishda kirish
                  liniyasini Q da namoyon qiladi. +Q1 -Q2 -Q0 -Q3 ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/OsOnaONo796qX52LlfyNPWr3kCX6mmgz.jpg"
                    alt=""
                    width="163"
                    height="87"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +ISTISNO-YOKI- mantiqiy
                  elementi -ISTISNO-YOKI- EMAS mantiqiy elementi -2VA-EMAS
                  mantiqiy elementi -2YOKI mantiqiy elementi ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/2uvoctg01a3a_I1fiuQHGvD06_fNPNBt.jpg"
                    alt=""
                    width="200"
                    height="86"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +ISTISNO-YOKI- mantiqiy
                  elementi -ISTISNO-YOKI- EMAS mantiqiy elementi -2VA-EMAS
                  mantiqiy elementi -2YOKI mantiqiy elementi ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/v4ZKTbTFLc6y87AjAHR4RNnNGPyxDEMf.jpg"
                    alt=""
                    width="134"
                    height="86"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +ISTISNO-YOKI mantiqiy
                  elementi -ISTISNO-YOKI-EMAS mantiqiy elementi -2VA-EMAS mantiqiy
                  elementi -2YOKI mantiqiy elementi ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/yVdcUIXGBfxpTEuuHLcWjbo9YbRZsNkT.jpg"
                    alt=""
                    width="159"
                    height="97"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +2YOKI-EMAS mantiqiy
                  elementi -2YOKI mantiqiy elementi -2VA-EMAS mantiqiy elementi
                  -2VA mantiqiy elementi ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/mX4CFJ1vUl33BwY7szbyltTWTYMjgzq6.jpg"
                    alt=""
                    width="123"
                    height="66"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +2VA mantiqiy elementi
                  -2YOKI mantiqiy elementi -2VA-EMAS mantiqiy elementi -YOKI-EMAS
                  mantiqiy elementi ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/WrlEaS3oClEWG3uoVzrS7Pl_-pkV2sxv.jpg"
                    alt=""
                    width="99"
                    height="78"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +2YOKI mantiqiy elementi
                  -2VA mantiqiy elementi -2VA-EMAS mantiqiy elementi -YOKI-EMAS
                  mantiqiy elementi ?Shifratorni shartli belgilashda …….. harfidan
                  foydalaniladi. +CD -DC -RS -MUX ?O‘nlik, sakkizlik yoki
                  o‘noltitalik sanoq tizimidagi raqamlarni ikkilik yoki
                  ikkilik-o‘nlik kodga o‘zgartiruvchi kombinatsion mantiqiy
                  qurilma – ........ deb ataladi. +Shifrator -deshifrator
                  -Multipleksor -Demultipleksor ?.................. qurilmalar
                  deb, chiqish signallari kirish o‘zgaruvchilari kombinatsiyasi
                  bilan belgilanadigan, ikkita vaqt momentiga ega bo‘lgan,
                  xotirasiz mantiqiy quril-malarga aytiladi. +Kombinatsion
                  -Xotirali -Kuchaytiruvchi -O‘zgartiruvchi ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/1NKupFqAFJd7NnOyznEq3SxutPDPIUcA.jpg"
                    alt=""
                    width="184"
                    height="128"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan? +To’liqjamlagich
                  -Yarimjamlagich -JK-trigger -Hisoblagich ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/9Gv7rA7tDpl86ZUGtZaAyCong0Vb3fxS.jpg"
                    alt=""
                    width="149"
                    height="108"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Yarimjamlagich
                  -To’liqjamlagich -JK-trigger -Hisoblagich ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/KrhMKKLLtxYUSwuodlggMokig1khqYBl.jpg"
                    alt=""
                    width="159"
                    height="81"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Yarimjamlagich
                  -To’liqjamlagich -JK-trigger -Hisoblagich ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/KFZQMOurtKKuIQKl787WCwmGHqGngfqJ.jpg"
                    alt=""
                    width="166"
                    height="88"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? . +Yarimjamlagich
                  -To’liqjamlagich -JK-trigger -Hisoblagich ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/aN37L45e5i2yw0zk2Zqw1KBT5ZBLLnJF.jpg"
                    alt=""
                    width="180"
                    height="111"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +ISTISNO-YOKI- EMAS
                  mantiqiy elementi -ISTISNO-YOKI- mantiqiy elementi -2VA-EMAS
                  mantiqiy elementi -2YOKI mantiqiy elementi ?4x2 shifratorni
                  kirish yullariga X00, X10, X21, X30 berilganda chiqish yo’li
                  signali qanday bo’ladi. +Y0 1, Y10 -Y0 0, Y10 -Y0 0, Y11 -Y0 1,
                  Y11 ?4x2 shifratorni kirish yullariga X00, X10, X20, X31
                  berilganda chiqish yo’li signali qanday bo’ladi. +Y0 1, Y11 -Y0
                  0, Y10 -Y0 1, Y10 -Y0 1, Y10 ?Ikkilik sanoq tizimidagi
                  raqamlarni o‘nlik sanoq tizimidagi kodga o‘zgartiruvchi
                  kombinatsion mantiqiy qurilma – ........... deb ataladi.
                  +Deshifrator -Shifrator -Multipleksor -Demultipleksor
                  ?Deshifratorni shartli belgilashda …….. harfidan foydalaniladi.
                  +DC -CD -RS -MUX ?2x4 deshifratorni kirish yullariga X00, X10
                  berilganda chiqish yo’li signali qanday bo’ladi. +Y0 0, Y1 0, Y2
                  0, Y3 0 -Y0 0, Y1 1, Y2 0, Y3 0 -Y0 1, Y1 0, Y2 0, Y3 0 -Y0 0,
                  Y1 0, Y2 1, Y3 0 ?...................... bir manbadan
                  berilayotgan ma’lumotlarni bir nechta chiqish kanaliga uzatishni
                  boshqarish uchun mo‘ljallangan. +Demultipleksor -Shifrator
                  -Deshifrator -Multipleksor ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/CLUv42V97S3Alk9u_qGlyI3dHT1Y8aY1.jpg"
                    alt=""
                    width="122"
                    height="163"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan? +Deshifrator -yarim
                  jamlagich -to’liqjamlagich -Trigger ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/24pX9nQXe8h6uLWQJuYg8sGuuiKThTS9.jpg"
                    alt=""
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Deshifrator -yarim
                  jamlagich -to’liqjamlagich -Trigger ?4x2 shifratorni kirish
                  yo`llariga X00, X11, X20, X30 berilganda chiqish yo‘li signali
                  qanday bo‘ladi. +Y0 0, Y11 -Y0 0, Y10 -Y0 1, Y10 -Y0 1, Y11 ?2x4
                  deshifratorni kirish yo‘llariga X01, X10 berilganda chiqish
                  yo’li signali qanday bo’ladi. +Y0 0, Y1 0, Y2 0, Y3 0 -Y0 0, Y1
                  1, Y2 0, Y3 0 -Y0 1, Y1 0, Y2 0, Y3 0 -Y0 0, Y1 0, Y2 1, Y3 0
                  ?2x4 deshifratorni kirish yo‘llariga X00, X11 berilganda chiqish
                  yo’li signali qanday bo’ladi. +Y0 0, Y1 1, Y2 0, Y3 0 -Y0 1, Y1
                  1, Y2 0, Y3 0 -Y0 1, Y1 0, Y2 0, Y3 0 -Y0 0, Y1 0, Y2 1, Y3 0
                  ?Qaysi qurilmaning sxemasi keltirilgan? +Demultipleksor
                  -Multipleksor -Deshifrator -Shifrator ?2x4 deshifratorni kirish
                  yo‘llariga X01, X11 berilganda chiqish yo’li signali qanday
                  bo’ladi. +Y0 0, Y1 0, Y2 0, Y3 1 -Y0 0, Y1 1, Y2 0, Y3 0 -Y0 1,
                  Y1 0, Y2 0, Y3 0 -Y0 0, Y1 0, Y2 1, Y3 0 ?Agar 4x1
                  multipleksorni boshqaruviga S01, S11 berilgan bo’lsa, chiqishda
                  kirish liniyasini Q da namoyan qiladi. +A3 -A1 -A2 -A0 ?Agar 4x1
                  multipleksorni boshqaruviga S00, S10 berilgan bo’lsa chiqishda
                  kirish liniyasini Q da namoyan qiladi. +A0 -A1 -A2 -A3 ?Agar 4x1
                  multipleksorni boshqaruviga S01, S10 berilgan bo’lsa, chiqishda
                  kirish liniyasini Q da namoyan qiladi. +A1 -A0 -A2 -A3 ?Agar 4x1
                  multipleksorni boshqaruviga S00, S11 berilgan bo’lsa, chiqishda
                  kirish liniyasini Q da namoyan qiladi. +A2 -A3 -A1 -A0 ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/MV25JuONRRCN6b6xdvw_BSUonmfqJIsQ.jpg"
                    alt=""
                    width="146"
                    height="138"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Multipleksor -yarim
                  jamlagich -to’liqjamlagich -Trigger ?…………… deb ikkili so’zlarni
                  taqqoslashga mo’ljallangan kombinatsion qurilmaga aytiladi.
                  +Komparator -Shifrator -Jamlagich -Deshifrator
                  ?................deb ikkilik koddagi sonlarni qo‘shish (jamlash)
                  asosiy arifmetik amalini bajaruvchi kombinatsion mantiqiy
                  qurilmaga aytiladi. +Jamlagich -Shifrator -Multipleksor
                  -Deshifrator ?Bir xonali sonlarni jamlash sxemasidagi kirish
                  yo’llari soni bo’yicha: ikki kirish yo’lli bir xonali ………………….
                  +kombinatsion jamlagich -yarim jamlagich va uch kirish yo’lli
                  bir xonali to’liqjamlagich -uch kirish yo’lli bir xonali
                  to’liqjamlagich -yarim jamlagich ?Bir xonali sonlarni jamlash
                  usuli bo’yicha …………. jamlagichlarga bo’linadi. +kombinatsion va
                  to’plovchi -to’plovchi -kombinatsion -yarim ?Ko’p xonali
                  sonlarni jamlash usuli bo’yicha jamlagichlar …………..
                  jamlagichlarga bo’linadi. +ketma-ket va parallel -parallel
                  -ketma-ket -kombinatsion va to’plovchi ?Ko’p xonali sonlarni
                  jamlash usuli bo’yicha …………. jamlagichlar qo’llanilganda bitta
                  xonaga ortiradi. +inkrement -dekrement -kombinatsion va
                  to’plovchi -ketma-ket va parallel ?Ko’p xonali sonlarni jamlash
                  usuli bo’yicha …………. jamlagichlar qo’llanilganda bitta xonaga
                  kamaytiradi. +dekrement -inkrement -kombinatsion va to’plovchi
                  -ketma-ket va parallel ?........................qurilmalar deb,
                  chiqish signallari kirish o‘zgaruvchilari kombinatsiyasi bilan
                  belgilanadigan, xotirali mantiqiy qurilmalarga aytiladi. +Ketma
                  – ketli -Jamlagich -Arifmetik-mantiqiy qurilma -Multipleksor
                  ?Agar 1x4 demultipleksorni boshqaruviga S00, S11 berilgan
                  bo‘lsa, chiqishda kirish liniyasini Q da namoyon qiladi. +Q2 -Q0
                  -Q1 -Q3 ?Axborotni kiritish (yozish) usuli bo’yicha triggerlar
                  …………… triggerlarga bo’linadi. +asinxron va sinxron -Sinxron
                  -Asinxron -ikki taktli ?Asinxron …..-trigger deb ikkita kirish
                  yo’li S va R ga ega bo’lgan, ikki turg’un muvozanat holatli
                  sxemaga aytiladi. +RS -D -TT -J K ?Asinxron RS-trigger kirishiga
                  ……………….. berilganda trigger birlik holatiga o’tadi. +S1 va R0
                  -S0 va R0 -S0 va R1 -S1 va R1 ?…………. triggerlar qo’shimcha
                  kirish yo’liga ega bo’lib, bu yo’ldan ……….lovchi signallar
                  beriladi. +Sinxron -Asinxron -Pog’anali -Taktli ?Ketma – ketli
                  qurilmalarga ............................misol bo‘la oladi.
                  +triggerlar, registrlar, schetchiklar -arifmetik-mantiqiy
                  -Multipleksor -Shifrator ?.....................– ikkita turg‘un
                  holatli chiqishga ega bo‘lgan qurilma bo‘lib, u elementar xotira
                  yacheykasi (bistabil yacheyka) va boshqaruv sxemasiga ega.
                  +Triggerlar -Shifrator -Multipleksor -Hisoblagichlar
                  ?Triggerlarga .... bit ma’lumotni yozish va saqlash mumkin. +1
                  -2 -10 -4 ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/vP-CHDV3zHuRuEduy4P4JIPL5ZppgbZR.jpg"
                    alt=""
                    width="162"
                    height="124"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Asinxron RS trigger
                  -Multipleksor -Deshifrator -Shifrator ?Asinxron RS-trigger
                  kirishiga ……………….. berilganda trigger nollik holatiga o‘tadi.
                  +S0 va R1 -S1 va R0 -S0 va R0 -S1 va R1 ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/Ix9wPebvi2siysTMu600R5iRFQT6xuwO.jpg"
                    alt=""
                    width="179"
                    height="98"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +bistabil yacheyka
                  -multipleksor -deshifrator -Shifrator ?…..-kirishga berilayotgan
                  ma`lumot trigger chiqishida faqat sinxro signal berilgandagina
                  paydo bo`ladi. +RS -D -JK -RSK ?Axborotni ikki pog’onali
                  xotirlovchi triggerlar ikkita trigger tuzilmasidan iborat. Biri
                  ……… deb, ikkinchisi ………… deb ataladi. +yetakchi, yetaklanuvchi
                  -yetaklanuvchi -Yetakchi -Taktli ?Ikki pog’onali triggerni
                  shartli belgilashda …….. harfidan foydalaniladi. +TT -JK -D -RS
                  ?Triggerlarning quyidagi turlari mavjud: ......................
                  +RS, D, T, JK -R D , D, T, JS -R D , D, T, JK -R A, D, TS, JS
                  ?…… -triggerlar - ikki pog’onali universal sinxron trigger +JK
                  -RS -D -TT ?RS-triggerda ma’lumot yozish boshqaruv signali
                  berilishi bilan ixtiyoriy vaqt momentlarida amalga oshiriladi.
                  Bunday triggerlar .......... deb ataladi. +taktli -sinxron
                  -asinxron -chastotali ?………. deb ko’p xonali ikkili kod
                  ko’rinishida ifodalangan axborotni yozish, saqlash va (yoki)
                  siljitishga mo’ljallangan o’zelga aytiladi. +Registr -Jamlagich
                  -Multipleksor -Arifmetik-mantiqiy ?Ketma-ket registrlar -
                  axborot faqat …………… ko’rinishda yoziladi va o’qiladi. +ketma-ket
                  -Parallel -ketma-ket son kodini parallel kodga o’zgartirish
                  -ketma-ket- parallel ?Ketma-ket - parallel registrlar ……………
                  registrlar hisoblanadi va ular parallel kodni ketma-ket kodga
                  o’zgartira oladi va aksincha. +universal -parallel -ketma-ket
                  -ketma-ket- parallel ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/6F4QMasYg35l_J_YCBX9OiL25KY1JrgW.jpg"
                    alt=""
                    width="120"
                    height="87"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Asinxron RS trigger
                  -Multipleksor -Deshifrator -Shifrator ?…………registrlarda ikkili
                  so’zlarni qabul qilish va o’zgartirish barcha xonalari bo’yicha
                  bir vaqtning o’zida amalga oshiriladi. +Parallel -Ketma-ket
                  -Universal -Ketma-ket- parallel ?Parallel registr ma’lumotlar
                  ustidan quyidagi mikroamallarni bajarishga mo’ljallangan: ………
                  shaklda kirishdagi ma’lumotlarni yozish, saqlash va uzatish.
                  +parallel -ketma-ket -Universal -ketma-ket- parallel
                  ?Siljituvchi registrlarda faqat ……… triggerlar ishlatiladi. +TT
                  -JK -D -RS ?Ma`lumotlarni ikkala yo`nalishda siljitish imkoniga
                  ega bo`lgan ketma-ketli registrlar …………… deb ataladi. +reversiv
                  registrlar -ketma-ket -siljituvchi -parallel ?………….deb kirish
                  yo’li signallarini sanashga va ular sonini qaydlashga
                  mo’ljallangan o’zelga aytiladi. +Hisoblagich -Trigger -Registr
                  -Reversiv registr ?Axborotni qabul qilish usuli bo‘yicha
                  quyidagi registrlar farqlanadi. +ketma-ket- parallel -ketma-ket
                  -Siljituvchi -Parallel ?……………… registrlarda triggerlar ketma-ket
                  ulangan, ya’ni oldingi triggerning chiqish yo‘li axborotni
                  keyingi triggerning kirish yo‘liga uzatadi. +Ketma-ket -Parallel
                  -Universal -Ketma-ket- parallel ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/tYMpc0xwI81pV_YggR-w6ukODZtPNCpi.jpg"
                    alt=""
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +D trigger -asinxron RS
                  trigger -sinxron RS trigger -Shifrator ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/ledWtrdJcIdj7CVsQX9v6QxYmIJvH6rw.jpg"
                    alt=""
                    width="142"
                    height="82"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +D trigger -asinxron RS
                  trigger -sinxron RS trigger -Shifrator ?To’g’ri va teskari
                  sanashning turli variantlaridan foydalanib ………. hisoblagichni
                  qurish mumkin. +reversiv -Parallel -ketma-ket -ketma-ket,
                  parallel, guruxli kuchirishli ?Qurilma .......si deb dasturlar,
                  kiritilayotgan ma’lumotlar, oraliq natijalar va olinayotgan
                  ma’lumotlarni saqlash uchun mo‘ljallangan qurilmalar majmuiga
                  aytiladi. +xotira -multipleksor -deshifrator -jamlagich
                  ?.................... mikroprotsessor tomonidan qayta
                  ishlanayotgan unchalik katta bo‘lmagan hajmdagi ma’lumotlarni
                  saqlashga mo‘ljallangan. +Ichki xotira -Tashqi xotira -Optik
                  xotira -Magnit xotira ?Sanash amalini tashkil etish bo‘yicha
                  ………………. hisoblagichlar farqlanadi. +asinxron, sinxron -Sinxron
                  -Reversiv -Asinxron ?Sanash yo‘nalishi bo‘yicha quyidagi
                  hisoblagichlar farqlanadi. +jamlovchi, ayiruvchi, reversiv
                  -Ayiruvchi -Reversiv -Jamlovchi ?Hisoblagichlarning asosiy
                  parametri ………. moduli M hisoblanadi. +Sanash -Saqlash
                  -Ko`chirish -nolga o’tkazish ?Hisoblagichlarda quyidagi mantiqiy
                  amallar bajariladi. +kirish yo’liga berilgan signallarni sanash,
                  chastotani bo’lish -kirish yo’liga berilgan signallarni sanash
                  -yozilgan axborotni saqlash -chastotani bo’lish
                  ?Hisoblagichlarning asosiy vazifalari quyidagilar. +kirish
                  yo’liga berilgan signallarni sanash, chastotani bo’lish -kirish
                  yo’liga berilgan signallarni sanash -kiritilayotgan ma’lumotni
                  saqlash -chastotani bo’lish ?...................... qurilma
                  o‘chirilgan yoki yoqilganidan qattiy nazar katta hajmdagi
                  ma’lumotlarni uzoq muddatga saqlash uchun mo’ljallangan. +Tashqi
                  xotira -Ichki xotira -Optik xotira -Magnit xotira ?Qurilma
                  tarmoqdan o‘chirilganda yo‘qolib ketadigan xotira,
                  .............. deb ataladi. +energiyaga bog‘liq bo‘lgan xotira
                  -energiyaga bog‘liq bo‘lmagan xotira -doimiy xotira qurilmasi
                  -qayta dastrulanuvchi xotira ?Qurilma tarmoqdan o‘chirilganda
                  ma’lumotlar yo‘qolib ketmasa – ..................... deb
                  ataladi. +energiyaga bog‘liq bo‘lmagan xotira -Videoxotira
                  -energiyaga bog‘liq bo‘lgan xotira -kesh-xotiralar ?Energiyaga
                  bog‘liq bo‘lmagan ichki xotiraga ………… qurilmasi kiradi. +doimiy
                  xotira qurilmasi -Videoxotira -kesh-xotiralar -operativ xotira
                  qurilmasi ?Statik yarimo‘tkazgichli XQlar bipolyar va
                  MDYA-tranzistorlarda bajarilgan xotira elementlari
                  (..................dan) tashkil topadi. +triggerlar
                  -Multipleksor -Videoxotira -Schetchik ?.............. OXQlarda
                  ma’lumot doimiy ravishda unga ajratilgan massivda aylanib
                  yuradi. +Dinamik -Statik -dinamik va statik -Fizik ?Tanlangan
                  ish algoritmi uchun sozlashga (dasturlashga) tayyor mantiqiy
                  ..………….. deb ataladi. +katta integral sxema -Sodda mantiqiy
                  integral sxema -Mantiqiy integral sxema -TTM integral sxema
                  ?SMISlarni …….. xil usul bilan sozlash (dasturlash) mumkin: +Uch
                  -Ikki -Bir -To‘rt ?Dasturlash usuli bo’yicha ………………
                  dasturlanuvchi hamda qayta dasturlanuvchi DMMlar farqlanadi.
                  +maskali va elektr -Elektr -Maskali -Kavsharlash ?……..
                  dasturlanuvchi DMMda axborot kiritish matritsa zanjirlariga
                  diodlar yoki tranzistorlarni ulash yo’li bilan bajariladi.
                  +Elektr -Maskali -Maskali va elektr -Kavsharlash ?………..
                  dasturlanuvchi DMMga axborotni yozish maxsus uskuna yordamida
                  kashaklarni kuydirish yoki matritsaning mos zanjiriga katta
                  amplitudali impuls tokini berib, ulanishni hosil qilish yo’li
                  bilan bajariladi. +Elektr -Maskali -Maskali va elektr
                  -Kavsharlash ?Arifmetik va mantiqiy amallar bajariladigan
                  qurilma ………………. deb ataladi. +arifmetik-mantiqiy qurilma
                  -Jamlagich -Hisoblagich -Multipleksor ?………………. MKning tashki
                  dunyo bilan axborot almashinuv kanali. +Ketma-ket port -Parallel
                  port -Qayta ulanuvchi port -Sig’imli port ?……….. deb berilganlar
                  ustidan arifmetik va mantiqiy amallar bajaradigan
                  dasturiy-boshqariladigan qurilmaga aytiladi. +Mikroprotsessor
                  -Mikrokontroller -Raqam-analog o’zgartgich -Analog-raqam
                  o’zgartgich ?Mkning mikroprotsessordan farqi shundaki, unda
                  markaziy protsessordan tashqari xotira va ko’p sonli ………………………,
                  analog-raqam o’zgartgichlari, axborotni uzatishning ketma-ket va
                  parallel kanallari, real vaqt taymerlari, modulyatorlar va h,.
                  mavjud. +kiritish va chiqarish qurilmalari -analog-raqam
                  o’zgartgichlari -raqam-analogli o’zgartgichlari -real vaqt
                  taymerlari ?Mkning mikroprotsessordan farqi shundaki, unda
                  markaziy protsessordan tashqari xotira va ko‘p sonli kiritish va
                  chiqarish qurilmalari, ……………….., axborotni uzatishning ketma-ket
                  va parallel kanallari, real vaqt taymerlari, modulyatorlar va
                  h,. mavjud. +analog -raqam o’zgartgichlari -raqam-analog
                  o’zgartgichlari -kiritish va chiqarish qurilmalari -real vaqt
                  taymerlari ?Mkning mikroprotsessordan farqi shundaki, unda
                  markaziy protsessordan tashqari xotira va ko’p sonli kiritish va
                  chiqarish qurilmalari, analog-raqam o’zgartgichlari, axborotni
                  uzatishning ketma-ket va parallel kanallari, ………………….,
                  modulyatorlar va h,. mavjud. +real vaqt taymerlari -analog-raqam
                  o’zgartgichlari -kiritish va chiqarish qurilmalari
                  -raqam-analogli o’zgartgichlari ?…………….qurilmaning barcha
                  uzellari ishlashini sinxronlovchi signallarni ishlab chiqarishga
                  mo’ljallangan. +Takt generatori -Analog-raqam o’zgartgichlari
                  -Raqam-analogli o’zgartgichlari -Real vaqt taymerlari
                  ?Mikrokontrollerlar ………. texnologiyasi asosida yaratilgan
                  bo’lib, programmalar va malumotlarni saqlovchi energiyaga
                  bog’lik bo’lmagan xotira qurilmalari FleshROM va EEPROM
                  texnologiyalari asosida yaratilgan. +KMDYa -Emmiterlari
                  bog’langan mantiq -kanalli maydoniy transistor -TTM ?………………………-
                  bu qurilma bevosita ikkilik kodida ifodalangan sonlar va
                  adreslar ustidan arifmetik va mantiqiy amallarni bajaradi.
                  +Boshqaruv qurilmasi -Arifmetik-mantiqiy qurilma -Registrlar
                  bloki -Saqlash registrlari ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/ZjUgvSYMoROXJt73v7wq_k4WAHGmLFuH.jpg"
                    alt=""
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +asinxron hisoblagich
                  -Ikki pog’onali trigger -sinxron RS trigger -asinxron RS trigger
                  ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/GJyxBresRKTxLc9TabeylqlD8ppRksAj.jpg"
                    alt=""
                    width="174"
                    height="207"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Sinxron hisoblagich
                  -Ikki pog’onali trigger -sinxron RS trigger -asinxron RS trigger
                  ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/ruzZDl0rZ8irJnpw647gap_NogBzQOBR.jpg"
                    alt=""
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +asinxron hisoblagich
                  -asinxron RS trigger -sinxron RS trigger -Ikki pog’onali trigger
                  ?Hisoblagichlarda quyidagi mantiqiy amallar bajariladi.
                  +chastotani bo’lish -kirish yo’liga berilgan signallarni sanash
                  -inkrement - saqlanayotgan sonni bittaga orttirish -kirish
                  yo’liga berilgan signallarni sanash, chastotani bo’lish
                  ?Ketma-ket - parallel registrlar …………… registrlar hisoblanadi va
                  ular parallel kodni ketma-ket kodga o’zgartira oladi va
                  aksincha. +ketma-ket -parallel -universal -ketma-ket- parallel
                  ?……….. siljituvchi registrlar mavjud. +Chapga va o‘nga
                  -Axborotni chiqarish -Qabul qilish -Ajratish ?Ketma-ket
                  registrlar - axborot faqat …………… ko’rinishda yoziladi va
                  o’qiladi. +ketma-ket -Parallel -ketma-ket son kodini parallel
                  kodga o’zgartirish -ketma-ket- parallel ?……….. kod tartibida
                  ma`lumot chiqaruvchi registrlar ham mavjud. +To‘g’ri va teskari
                  -Axborotni chiqarish -Axborotni kiritish -Saqlanuvchi
                  ?RS-triggerda ma’lumot yozish boshqaruv signali berilishi bilan
                  ixtiyoriy vaqt momentlarida amalga oshiriladi. Bunday triggerlar
                  .......... deb ataladi. +Sinxron -Asinxron -Taktli -Chastotali
                  ?………….deb kirish yo’li signallarini sanashga va ular sonini
                  qaydlashga mo’ljallangan o’zelga aytiladi. +Hisoblagich -Trigger
                  -Registr -Reversiv registr ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/_R4ew0bugctZEaJgweWmboMD5kUv9aaK.jpg"
                    alt=""
                    width="279"
                    height="121"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +sinxron hisoblagich
                  -Ikki pog’onali trigger -sinxron RS trigger -asinxron RS trigger
                  ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/lKcGOXu4c5PYiw6pgyeYrX6j5V_iFXvM.jpg"
                    alt=""
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +registr -Ikki pog’onali
                  trigger -sinxron RS trigger -asinxron RS trigger
                  ?Hisoblagichlarda kirish yo’liga berilgan signallarni sanash,
                  chastotani bo’lish..…. bajariladi. +mantiqiy amallar -holat
                  -orttirish -kamaytirish ?Hisoblagichlarning asosiy parametri
                  ………. moduli M hisoblanadi. +sanash -saqlash -ko‘chirish -nolga
                  o’tkazish ?Qurilma tarmoqdan o‘chirilganda yo‘qolib ketadigan
                  xotira, .............. deb ataladi. +energiyaga bog‘liq bo‘lgan
                  xotira -energiyaga bog‘liq bo‘lmagan xotira -doimiy xotira
                  qurilmasi -qayta dastrulanuvchi xotira ?Xonalararo bog‘lanishni
                  qurish usuliga binoan ……….…………. hisoblagichlar farqlanadi.
                  +ketma-ket, parallel, guruhli ko`chirishli -Parallel -guruhli
                  ko`chirishli -Ketma-ket ?Qurilma .......si deb dasturlar,
                  kiritilayotgan ma’lumotlar, oraliq natijalar va olinayotgan
                  ma’lumotlarni saqlash uchun mo‘ljallangan qurilmalar majmuiga
                  aytiladi. +xotira -multipleksor -deshifrator -jamlagich ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/3WX1j6BnG5_0wR8S_7lclw1rztixnh2_.jpg"
                    alt=""
                    width="253"
                    height="222"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +MT asosida qurilgan EXE
                  -BT asosida qurilgan EXE -Ikki pog’onali trigger -sinxron RS
                  trigger ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/vJdCLHTpO94Z0s65iLtyMZYo44qe-mHN.jpg"
                    alt=""
                    width="156"
                    height="117"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan? +MT asosida qurilgan EXE
                  -BT asosida qurilgan EXE -Ikki pog’onali trigger -sinxron RS
                  trigger ?...................... qurilma o‘chirilgan yoki
                  yoqilganidan qattiy nazar katta hajmdagi ma’lumotlarni uzoq
                  muddatga saqlash uchun mo’ljallangan. +Tashqi xotira -Ichki
                  xotira -Optik xotira -Magnit xotira ?Qurilma tarmoqdan
                  o‘chirilganda ma’lumotlar yo‘qolib ketmasa –
                  ..................... deb ataladi. +energiyaga bog‘liq bo‘lmagan
                  xotira -Videoxotira -energiyaga bog‘liq bo‘lgan xotira
                  -kesh-xotiralar ?Mkning mikroprotsessordan farqi shundaki, unda
                  markaziy protsessordan tashqari xotira va ko’p sonli kiritish va
                  chiqarish qurilmalari, ……………….., axborotni uzatishning ketma-ket
                  va parallel kanallari, real vaqt taymerlari, modulyatorlar va
                  h,. mavjud. +raqam-analogli o’zgartgichlari -analog-raqam
                  o’zgartgichlari -kiritish va chiqarish qurilmalari -real vaqt
                  taymerlari ?………………..saqlashdan tashqari o’z holatini ma’lum
                  tarzda o’zgartirish xossasiga ega. +Operatsion registrlar
                  -Saqlash registrlari -Yordamchi registrlar -Qo‘shimcha
                  registrlar ?………………………. – boshqaruv signallariga bog’liq ravishda
                  turli amallarni bajaruvchi, cheklangan nomenklaturaga ega
                  bo’lgan KISlar majmuasi. +Mikroprotsessorli vositalar -MP
                  tuzilmasi -Mikrokontroller -Mikroprotsessor ?……………………... -
                  analog shakldagi ma’lumotlarni raqamli shaklga o’zgartirishga
                  xizmat qiladi. +Analog-raqam o’zgartgichlari -Raqam-analogli
                  o’zgartgichlari -Mikrokontroller -Mikroprotsessor
                  ?Axborot-boshqaruv tizimiga kiruvchi axborot nima orqali
                  yetkaziladi? +operativ xotira -Protsessor -xotira -Datchik
                  ?………………………- bu qurilma bevosita ikkilik kodida ifodalangan
                  sonlar va adreslar ustidan arifmetik va mantiqiy amallarni
                  bajaradi. +Boshqaruv qurilmasi -Arifmetik-mantiqiy qurilma
                  -Registrlar bloki -Saqlash registrlari ?Elektron qurilmalarda
                  jumladan, kompyuterlarda qayta ishlanayotgan ma`lumotlar,
                  natijalar va boshqa axborotlar ko‘p hollarda elektr signallar
                  ………………………ko‘rinishida ifodalanadi. +raqamli -Uzluksiz
                  -(uzluksiz) va raqamli (diskret) -Mantiqiy ?Uzluksiz
                  ko‘rinishdagi signallarni qabul qilish, o‘zgartirish va uzatish
                  uchun mo‘ljallangan elektron qurilmalar …….. elektron qurilmalar
                  deb ataladi. +analog -Raqamli -Impulsli -Diskretli ?Qaysi
                  mantiqiy element sxemasi keltirilgan?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/l6gy29ejvoso3hIfPGgjUSbS7lrk7brB.jpg"
                    alt=""
                    width="169"
                    height="133"
                  />
                  +Invertor -2YOKI-EMAS -2HAM -2HAM-EMAS ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/bHqXqwrZBfJk1l5wLjgBFl9RCoXkfGCu.jpg"
                    alt=""
                    width="173"
                    height="187"
                  />
                  Qaysi mantiqiy element sxemasi keltirilgan? +Invertor -YOKI-EMAS
                  -2VA – EMAS -2YOKI ?KMDYa-tranzistorlarda 2VA-EMAS mantiqiy
                  elementida p-kanalli MDYa tranzistori qanday ulanadi? +parallel
                  -ketma-ket -ketma-ket va parallel parallel va ketma-ket
                  -parallel va ketma-ket ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/wiA04J76WGdlV86u5reGsWgXRZTlfudB.jpg"
                    alt=""
                    width="156"
                    height="169"
                  />
                  Qaysi mantiqiy element sxemasi keltirilgan? +2VA-EMAS -YOKI-EMAS
                  -2YOKI -Invertor ?Qaysi mantiqiy element sxemasi keltirilgan?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/sIclkJ-iS78eFAgRJvRaXtNAGCg3lgmS.jpg"
                    alt=""
                    width="188"
                    height="143"
                  />
                  +2YOKI-EMAS -2VA-EMAS -2YOKI -Invertor ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/B4yGV_d1LnyO2SElYEExjXR4VxtuhI7V.jpg"
                    alt=""
                    width="130"
                    height="128"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Multipleksor -yarim
                  jamlagich -to’liqjamlagich -Trigger ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/1F3jL5Tf_uL3H-j132Fox94Abfel4yJ5.jpg"
                    alt=""
                    width="182"
                    height="78"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +To’liqjamlagich
                  -Yarimjamlagich -JK-trigger -Hisoblagich ?Qaysi qurilmaning
                  sxemasi keltirilgan va qanday mantiqiy
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/5_Q3MzJK-HTbsXpAg2Hvca4ZU_cRLJAh.jpg"
                    alt=""
                    width="153"
                    height="104"
                  />{" "}
                  amalni bajaradi? +MDYAdan yig’ilgan , 2YOKI – EMAS -TTM
                  ,YOKI-EMAS -BTdan yig’ilgan , 2BA – EMAS -KMDYa dan yig’ilgan,
                  2YOKI – EMAS ?Qaysi qurilmaning sxemasi keltirilgan va qanday
                  mantiqiy
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/nMNPxVLkFGUYWXTaaiF-wKjeij7PE4jS.jpg"
                    alt=""
                    width="144"
                    height="131"
                  />{" "}
                  amalni bajaradi? +MDYAdan yig’ilgan , 2VA– EMAS -TTM ,YOKI-EMAS
                  -BTdan yig’ilgan , 2BA – EMAS -KMDYa dan yig’ilgan, 2YOKI – EMAS
                  ?Hisoblagichlarning asosiy vazifalari quyidagilar. +kirish
                  yo’liga berilgan signallarni sanash,chastotani bo’lish -kirish
                  yo’liga berilgan signallarni sanash -kiritilayotgan ma’lumotni
                  saqlash -chastotani bo’lish ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/85aPZzZhn3GRG4zZ_Szc6kvltL2jCaVP.jpg"
                    alt=""
                    width="156"
                    height="87"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +2VA-EMAS mantiqiy
                  elementi -2YOKI mantiqiy elementi -EMAS mantiqiy elementi
                  -YOKI-EMAS mantiqiy elementi ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/B30fbuk9o6zkOC2lGl1uWOYglFyi_aaT.jpg"
                    alt=""
                    width="265"
                    height="123"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan? +asinxron hisoblagich
                  -asinxron RS trigger -sinxron RS trigger -Ikki pog’onali trigger
                  ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/33Mbe3NbXKCpnej9P168zWt8n9IZlWhd.jpg"
                    alt=""
                    width="152"
                    height="168"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan? +Deshifrator -yarim
                  jamlagich -to’liqjamlagich -Trigger ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/2pYYtjsuWPqlFECxT_RrPhxox7p-dsk9.jpg"
                    alt=""
                    width="213"
                    height="179"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan? +Analog-raqamli
                  o’zgartgich -Raqam-analogli o’zgartgich -Operatsion
                  kuchaytirgich -Analogli kuchaytirgich ?Qaysi qurilmaning sxemasi
                  keltirilgan?{" "}
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/fQ7djsQ-EFtV4t5asZ23qIhaJdex99rM.jpg"
                    alt=""
                    width="169"
                    height="129"
                  />
                  +JK trigger -asinxron RS trigger -sinxron RS trigger -D trigger
                  ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/4XUh9gKwieUAcCD1-XfzjikNE2jqPmkv.jpg"
                    alt=""
                    width="151"
                    height="50"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +bistabil yacheyka
                  -Multipleksor -Deshifrator -Shifrator ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/l4vyKxL7DBwIourjvBT56goEEGRPymmA.jpg"
                    alt=""
                    width="161"
                    height="126"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan? +Shifrator -yarim
                  jamlagich -to’liqjamlagich -trigger ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/Tie6rPJV9el9cNuED64Ou-RRrSo9xTv4.jpg"
                    alt=""
                    width="188"
                    height="102"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +ISTISNO-YOKI- EMAS
                  mantiqiy elementi -ISTISNO-YOKI- mantiqiy elementi -2VA-EMAS
                  mantiqiy elementi -2YOKI mantiqiy elementi ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/Ge80AD0Ig4FwRGjvsEpgfJJ_J1xzv4B7.jpg"
                    alt=""
                    width="127"
                    height="73"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +ISTISNO-YOKI-EMAS
                  mantiqiy elementi -ISTISNO-YOKI- mantiqiy elementi -2VA-EMAS
                  mantiqiy elementi -2YOKI mantiqiy elementi ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/Ql2IQOKYDjBuKCvFYZCNsVPkoQU5_I_8.jpg"
                    alt=""
                    width="202"
                    height="172"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan va qanday mantiqiy amalni
                  bajaradi? +KMDYAdan yig’ilgan , 2VA– EMAS -TTM ,YOKI-EMAS -BTdan
                  yig’ilgan , 2BA – EMAS -KMDYa dan yig’ilgan, 2YOKI – EMAS ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/s3WJHoYijiZHUqkdT0uxe87lJvMBEXDA.jpg"
                    alt=""
                    width="143"
                    height="107"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan va qanday mantiqiy amalni
                  bajaradi? +TTM ,2VA-EMAS -MDYAdan yig’ilgan , 2YOKI – EMAS
                  -BTdan yig’ilgan , 2BA – EMAS -KMDYa dan yig’ilgan, 2YOKI – EMAS
                  ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/hi2ZICMbBfj_NTOaQ9pkCnXZxOF7Rd2L.jpg"
                    alt=""
                    width="108"
                    height="71"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +EMAS mantiqiy elementi
                  -2VA mantiqiy elementi -2VA-EMAS mantiqiy elementi -YOKI-EMAS
                  mantiqiy elementi ?…………………. ular buferlash, qisqa muddatga
                  saqlash va shu kabi yordamchi amallarni bajarishga
                  mo‘ljallangan. +Yordamchi registrlar -Saqlash registrlari
                  -Operatsion registrlar -Qoshimcha registrlar ?Qaysi qurilmaning
                  sxemasi keltirilgan?{" "}
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/20eZSDjceu-59tjBXUJBiV9NzGfEfvom.jpg"
                    alt=""
                    width="173"
                    height="103"
                  />
                  +Raqam-analogli o’zgartgich. -Analog-raqamli o’zgartgich.
                  -Operatsion kuchaytirgich. -Analogli kuchaytirgich . ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/6Eqk5ENgJrqtQmFb38LGJTb6OS9iVvqK.jpg"
                    alt=""
                    width="159"
                    height="93"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +BT asosida qurilgan EXE
                  -MT asosida qurilgan EXE -Ikki pog’onali trigger -sinxron RS
                  trigger ?...................... bir necha manbadan berilayotgan
                  ma’lumotlarni bitta chiqish kanaliga uzatishni boshqarish uchun
                  mo‘ljallangan. +Multipleksor -Shifrator -Deshifrator
                  -Demultipleksor ?Registrlarda quyidagi amallar bajariladi.
                  +saqlanuvchi axborotni kiritish va chiqarish -saqlanuvchi
                  axborotni chiqarish -saqlanuvchi axborotni kiritish -saqlanuvchi
                  axborotni siljitish ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/1KaiuTlZAkApnjPQW8lyPuYBSvRnuwpy.jpg"
                    alt=""
                    width="224"
                    height="121"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan? +JK trigger -asinxron RS
                  trigger -sinxron RS trigger -D trigger ?Xonalararo bog‘lanishni
                  qurish usuliga binoan ……….…………. hisoblagichlar farqlanadi.
                  +ketma-ket, parallel, guruhli kochirishli -Parallel -guruhli
                  kochirishli -ketma-ket ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/uqbyU13ywHJxZlWOXlC0_phjeoq7AyR_.jpg"
                    alt=""
                    width="170"
                    height="98"
                  />{" "}
                  Qaysi qurilmaning sxemasi keltirilgan? +Sanoq trigger -asinxron
                  RS trigger -sinxron RS trigger -D trigger ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/b-UdYfl_C96gPDpNPel-Wcz4GcGynQC0.jpg"
                    alt=""
                    width="180"
                    height="102"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Ikki pog’onali trigger
                  -asinxron RS trigger -sinxron RS trigger -D trigger ?………………
                  registrlarda triggerlar parallel ulangan, ya’ni oldingi
                  triggerning chiqish yo‘li axborotni keyingi triggerning kirish
                  yo‘liga uzatadi. +Parallel -Ketma-ket -Universal -Ketma-ket-
                  parallel ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/ME9nufw_g9CXmU13YAMKaVtff95EOiXx.jpg"
                    alt=""
                    width="156"
                    height="122"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +sinxron RS trigger
                  -asinxron RS trigger -deshifrator -Shifrator ?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/88/XtTUPKJIaJ-_lGDWqCVYqG6gQ0XvWMtI.jpg"
                    alt=""
                    width="156"
                    height="128"
                  />
                  Qaysi qurilmaning sxemasi keltirilgan? +Asinxron RS trigger
                  -Multipleksor -Deshifrator -Shifrator ?Agar 1x4 demultipleksorni
                  boshqaruviga S01, S11 berilgan bo‘lsa, chiqishda kirish
                  liniyasini Q da namoyon qiladi. +Q3 -Q1 -Q2 -Q0 ?Qaysi mantiqiy
                  element sxemasi keltirilgan?
                  <img
                    src="https://hemis.tuitkf.uz/static/uploads/94/u9FDhuZ-AWaCrfkLkI4__31ivn0NuSZw.jpg"
                    alt=""
                    width="143"
                    height="109"
                  />
                  +2YOKI-EMAS -2VA – EMAS -2YOKI -Invertor
                

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
