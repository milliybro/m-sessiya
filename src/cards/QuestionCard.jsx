import { Fragment } from "react";
import KTEData from "../data/KTE";

import "./QuestionCard.scss";

const QuestionCard = () => {
  return (
    <Fragment>
      <div className="pt-3">
        {KTEData.map((card, index) => (
          <div key={index} className="card mb-4">
            <h4>{card.question}</h4>
            <form className="my-4" action="">
              <div className="d-flex value">
                <input checked type="radio" />
                <p>{card.answer1}</p>
                <span className="checkmark"></span>
              </div>
              <div className="d-flex value">
                <input type="radio" />
                <p>{card.answer2}</p>
                <span className="checkmark"></span>
              </div>
              <div className="d-flex value">
                <input type="radio" />
                <p>{card.answer3}</p>
                <span className="checkmark"></span>
              </div>
              <div className="d-flex value">
                <input type="radio" />
                <p>{card.answer4}</p>
                <span className="checkmark"></span>
              </div>
            </form>
          </div>
        ))}
        <p>
          O‘rnatilgan tizim (Embedded System) nima? =========== O‘yin
          kompyuterlari =========== #Maxsus vazifalarni bajaruvchi
          mikroprotsessor asosidagi tizim =========== Ish stoli kompyuterlari
          =========== Umumiy maqsadli dasturlash tizimi ++++++++ O‘rnatilgan
          tizimlarning asosiy xususiyati nima? =========== Yuqori grafik
          imkoniyatlarga ega bo‘lishi =========== #Maxsus vazifalarni bajarishga
          mo‘ljallanganligi =========== Doimiy Internetga ulanib ishlashi
          =========== Faqat dasturchilar tomonidan boshqarilishi +++++++++++
          O‘rnatilgan tizimlar qaysi sohalarda keng qo‘llaniladi? ===========
          Faqat kompyuter o‘yinlarida =========== #Telekommunikatsiya, avtomobil
          sanoati, tibbiyot, sanoat avtomatlashtirish =========== Faqat Internet
          xizmatlarida =========== Faqat matn muharrirlarida +++++++++++
          O‘rnatilgan tizimlar qanday platformalarda ishlaydi? =========== Faqat
          Windows operatsion tizimida =========== #Maxsus real vaqt tizimlarida
          (RTOS) yoki apparat platformasida =========== Faqat Linux asosida
          =========== Faqat mobil operatsion tizimlarda ++++++++++ Qaysi qurilma
          o‘rnatilgan tizimga misol bo‘la oladi? =========== Ish stoli
          kompyuteri =========== #Mikrokontroller asosidagi robot ===========
          Ofis printer =========== O‘yin konsoli +++++++++++ O‘rnatilgan
          tizimlarning muhim parametrlari qaysilar? ========== Katta o‘lchamli
          operativ xotira va tezkor protsessor ========== #Kam quvvat sarfi,
          ishonchlilik, real vaqt rejimida ishlash =========== Faqat kuchli
          grafik ishlov berish =========== Internetga ulanib ishlash +++++++++++
          O‘rnatilgan tizimlar asosan qanday operatsion tizimlardan foydalanadi?
          =========== Windows va MacOS =========== #Real vaqt operatsion
          tizimlari (RTOS) va maxsus tizimlar =========== Faqat Android
          =========== MS-DOS +++++++++++ Real vaqt tizimlari qanday xususiyatga
          ega? =========== Vazifalarni istalgan vaqtda bajarishi mumkin
          ============ #Muayyan vaqt oralig‘ida muhim jarayonlarni bajarishi
          shart ============ Faqat sun’iy intellekt tizimlarida ishlaydi
          ============ Faqat katta xotira talab qiladi +++++++++++ Qaysi qurilma
          real vaqt tizimi bo‘lishi mumkin? ============ Ish stoli kompyuteri
          ============ #Tibbiyot uchun yurak monitori ============ O‘yin
          noutbuki ============ Veb-brauzer ++++++++++++ O‘rnatilgan
          tizimlarning asosiy komponentlari qaysilar? ============= Faqat
          dasturiy ta’minot ============= Faqat apparat qurilmalari
          ============= #Protsessor, xotira, kirish-chiqish interfeyslari,
          dasturiy ta’minot ============= Printer va skaner ++++++++++++ Real
          vaqt operatsion tizimlari qanday ishlaydi? ============ #Muayyan vaqt
          chegarasida muhim jarayonlarni bajaradi ============ Faqat ofis
          dasturlarini ishga tushiradi ============ Tasodifiy vaqtlarda
          vazifalarni bajaradi ============ Faqat Linux asosida ishlaydi
          ++++++++++++ O‘rnatilgan tizimlarning quvvat sarfi qanday bo‘lishi
          kerak? ============= #Minimal quvvat sarfi talab qilinadi
          ============= Juda ko‘p energiya talab qilad ============= Faqat
          quyosh energiyasidan foydalanadi ============= Quvvat sarfi muhim emas
          +++++++++++++ O‘rnatilgan tizimlar qanday xotira turlaridan
          foydalanadi? ============= #Faqat qattiq diskdan ============= ROM,
          RAM, Flash xotira ============= Faqat USB fleshka ============= Faqat
          operativ xotira +++++++++++++ O‘rnatilgan tizimlar uchun eng muhim
          omil nima? ============= Ko‘plab dasturlarni bir vaqtning o‘zida ishga
          tushirish ============= #Xavfsizlik, ishonchlilik va kam quvvat sarfi
          ============= Internetga doimiy ulanib turish ============= O‘yinga
          moslashganligi ++++++++++++++ O‘rnatilgan tizimlarda ishlatiladigan
          protsessorlar qanday bo‘ladi? ============= Asosan yuqori tezlikda
          ishlovchi protsessorlar ============= #Maxsus vazifalarga
          mo‘ljallangan, energiya tejamkor protsessorlar ============= Faqat
          Intel protsessorlari ============= Faqat 64-bitli protsessorlar
          +++++++++++++ O‘rnatilgan tizimlar uchun qaysi dasturlash tili keng
          qo‘llaniladi? ============= HTML ============= #C/C++ =============
          PHP ============= JavaScript +++++++++++++ O‘rnatilgan tizimlarning
          ishlash tezligi qanday belgilanadi? ============= Faqat protsessor
          chastotasi bilan ============= #Yozilgan kod sifati va apparat
          resurslariga bog‘liq ============= Internet tezligi bilan
          ============= Faqat operativ xotira hajmi bilan +++++++++++++
          O‘rnatilgan tizimlar uchun qanday operatsion tizim keng tarqalgan?
          ============= Windows XP ============= #FreeRTOS, VxWorks, QNX
          ============= MacOS ============= Ubuntu ++++++++++++ O‘rnatilgan
          tizimlar qayerda qo‘llaniladi? ============= Smartfon va planshetlarda
          ============ #Tibbiyot uskunalarida, avtomobillarda, sanoat
          robotlarida ============ Faqat mobil ilovalarda ============ Faqat
          superkompyuterlarda ++++++++++++ O‘rnatilgan tizimlarning asosiy
          maqsadi nima? ============ Ko‘p vazifali umumiy hisoblash tizimi
          yaratish ============ #Maxsus vazifalarni samarali bajarish
          ============ Faqat grafik interfeys yaratish ============ Faqat
          ma’lumotlarni saqlash ++++++++++++ O‘rnatilgan tizimlarga qo‘yiladigan
          asosiy talablar qaysilar? ============ Yuqori grafik imkoniyatlarga
          ega bo‘lishi ============ #Kam quvvat sarfi, ishonchlilik, real vaqt
          rejimida ishlash ============ Faqat katta xotira hajmiga ega bo‘lishi
          ============ Doimiy Internetga ulanib ishlashi ++++++++++++
          Boshqariluvchi obyekt datchiklari qanday vazifani bajaradi?
          ============ Elektr signallarni kuchaytiradi ============ #Tashqi
          fizikaviy kattaliklarni o‘lchab, elektr signaliga aylantiradi
          ============ Faqat dasturiy ta’minot bilan ishlaydi ============ Faqat
          analog signallarni uzatadi ++++++++++++ Qaysi qurilma analog-raqam
          (ADC) o‘zgartirgich vazifasini bajaradi? ============ Sensor ekran
          ============ #Mikrokontroller ichidagi ADC moduli =========== USB
          fleshka =========== Printer +++++++++++ Raqam-analog (DAC)
          o‘zgartirgichning vazifasi nima? =========== Analog signalni raqamli
          signalga aylantirish =========== #Raqamli signalni analog signalga
          aylantirish =========== Faqat kodni bajarish =========== Elektr
          energiyasini uzatish +++++++++++ O‘rnatilgan tizimlarda signallarni
          uzatuvchi interfeys qanday ishlaydi? ============ #Signalni raqamli
          formatga o‘zgartiradi va uzatadi ============ Signalni faqat
          kuchaytiradi ============ Faqat raqamli signallarni qabul qiladi
          ============ Signalni faqat xotirada saqlaydi ++++++++++++ Analog
          signallar qanday ma’lumot turi hisoblanadi? ============ #Davomli
          (uzluksiz) ============ Diskret (raqamli) ============ Matn shaklida
          ============= Faqat impulsli ++++++++++++ Raqamli signallar qanday
          xususiyatga ega? ============ #Diskret (uzlukli) qiymatlarga ega
          bo‘ladi ============ Davomli o‘zgaruvchan qiymatlarga ega bo‘ladi
          ============ Faqat kuchaytiruvchi qurilmalar orqali uzatiladi
          ============ O‘z-o‘zidan qayta ishlanadi ++++++++++++ O‘rnatilgan
          tizimlarda ishlatiladigan eng keng tarqalgan interfeys turi qaysi?
          =========== #RS-232, I2C, SPI, UART =========== Bluetooth, Wi-Fi
          =========== Faqat HDMI =========== Faqat USB +++++++++++
          Boshqariluvchi obyekt datchiklaridan qaysi biri haroratni o‘lchaydi?
          ========== LDR (yorug‘lik datchigi) ========== #DHT11 (harorat va
          namlik datchigi) ========== MQ-2 (gaz datchigi) ========== HC-SR04
          (ultratovushli datchik) ++++++++++ I2C interfeysi qanday ishlaydi?
          =========== Parallel ravishda ma’lumot uzatadi ============ #Seriyali
          ikki simli protokol asosida ishlaydi ============ Faqat analog signal
          uzatadi ============ Faqat elektr quvvati uzatadi +++++++++++ Analog
          signalni raqamli signalga aylantirishda qanday parametr muhim?
          =========== #Konvertatsiya tezligi =========== Ekran rangi ===========
          Dastur versiyasi =========== Xotira hajmi +++++++++++ SPI
          interfeysining asosiy xususiyati nima? =========== #Yuqori tezlikda
          seriyali ma’lumot uzatish =========== Faqat simsiz ulanish orqali
          ishlash =========== Parallel ma’lumot uzatish =========== Faqat audio
          signal uzatish +++++++++++ O‘rnatilgan tizimlarda qaysi interfeys real
          vaqt rejimida ishlash uchun samarali? =========== USB =========== #SPI
          =========== HDMI =========== Ethernet ++++++++++ UART interfeysi
          qanday ishlaydi? ========== #Asinxron seriyali aloqa orqali ==========
          Faqat simsiz aloqa uchun ishlatiladi ========== Faqat raqamli
          signallarni qabul qiladi ========== Elektr energiyasini uzatadi
          ++++++++++ Boshqariluvchi obyekt datchiklari qanday signallarni ishlab
          chiqarishi mumkin? ========= Faqat analog ========= #Analog va raqamli
          ========= Faqat raqamli ========= Faqat chastotaviy ++++++++++
          O‘rnatilgan tizimlarda qaysi datchik harakatni aniqlash uchun
          ishlatiladi? ========= #MPU6050 (gyroskop va akselerometr) =========
          LM35 (harorat datchigi) ========= MQ-7 (gaz datchigi) =========
          DS18B20 (harorat datchigi) +++++++++ ADC qurilmalari qanday ishlaydi?
          ========= #Analog signalni raqamli ko‘rinishga o‘tkazadi =========
          Raqamli signalni kuchaytiradi ========= Analog signalni saqlaydi
          ======== Signalni filtrlash uchun ishlatiladi ++++++++ Raqam-analog
          o‘zgartirgich (DAC) qanday signallarni hosil qiladi? ========= Faqat
          raqamli ========= #Analog ========= Matnli ========= Faqat impulsli
          +++++++++ Boshqariluvchi obyekt datchiklarining asosiy vazifasi nima?
          ========== #Tashqi fizik jarayonlarni o‘lchash va ularga javob
          qaytarish ========== Signalni shifrlash ========== Signalni faqat
          mustaqil saqlash ========== Faqat tasvir hosil qilish +++++++++
          O‘rnatilgan tizimlarda signallarni uzatuvchi interfeyslarning
          ahamiyati nimada? ========== #Ma’lumotlarni ishonchli uzatish va qabul
          qilish ========== Faqat elektr quvvati uzatish ========== Faqat audio
          signallar bilan ishlash ========== Operatsion tizimlarni yangilash
          +++++++++ O‘rnatilgan tizim qurilmalarini boshqarish obyekt bilan
          qanday vositalar orqali ulanadi? ========== #Datchiklar va aktuatorlar
          orqali ============ Faqat Wi-Fi orqali ============ Faqat Bluetooth
          orqali ============ Faqat kabel orqali ++++++++++++ O‘rnatilgan
          tizimlarda datchiklar qanday rol o‘ynaydi? =========== #Fizikaviy
          kattaliklarni o‘lchab, signal shaklida uzatadi =========== Faqat
          ma’lumot saqlaydi =========== Dastur yozish uchun ishlatiladi
          =========== Faqat kuchlanishni oshirish uchun ishlatiladi +++++++++++
          Mikrokontrollerning asosiy tarkibiy qismlaridan biri qaysi?
          =========== Ish stoli kompyuteri =========== #Markaziy protsessor
          (CPU), xotira, kirish-chiqish portlari =========== Faqat operativ
          xotira ============ O‘yinga moslashtirilgan grafik protsessor
          ++++++++++++ O‘rnatilgan tizim protsessorlarining asosiy turlari
          qaysilar? ============ #RISC va CISC protsessorlari ============ Faqat
          x86 protsessorlari ============ Faqat grafik protsessorlar
          ============ Faqat ARM protsessorlar ++++++++++++ Mikrokontroller
          qanday qurilma? ========== #Protsessor, xotira va kirish-chiqish
          interfeyslarini o‘z ichiga olgan mustaqil tizim ========== Faqat
          ma’lumot saqlash uchun ishlatiladi ========== Faqat grafik ishlov
          berish uchun ishlatiladi ========== Internetga ulanish uchun
          ishlatiladi ++++++++++ Mikrokontrollerning xotira turlari qanday?
          ========== #ROM, RAM va EEPROM ========== Faqat qattiq disk ==========
          Faqat flesh xotira ========== Faqat operativ xotira ++++++++++
          O‘rnatilgan tizim protsessorlari ko‘pincha qanday arxitekturaga ega
          bo‘ladi? =========== #RISC (Reduced Instruction Set Computing)
          =========== CISC (Complex Instruction Set Computing) =========== Faqat
          x86 arxitekturasiga ega bo‘ladi =========== Faqat FPGA asosida
          qurilgan bo‘ladi ++++++++++ Mikrokontrollerlarning eng mashhur
          oilalaridan biri qaysi? =========== #AVR, PIC, ARM =========== Intel
          Core i7 =========== AMD Ryzen =========== Nvidia Tegra ++++++++++
          Mikrokontroller qanday dasturlanadi? =========== #Assembly, C, C++
          yordamida =========== Faqat HTML va CSS orqali =========== Faqat
          JavaScript orqali =========== Faqat Windows muhitida +++++++++++
          Mikrokontrollerning asosiy xususiyati nima? =========== #Kam quvvat
          sarflaydi va maxsus vazifalarni bajaradi =========== Ko‘p dasturlarni
          bir vaqtning o‘zida ishga tushiradi =========== Faqat katta o‘lchamli
          operativ xotiraga ega =========== Faqat grafik ishlov berish uchun
          ishlatiladi ++++++++++ Mikrokontroller ichidagi ALU (Arithmetic Logic
          Unit) qanday vazifa bajaradi? ============ #Arifmetik va mantiqiy
          amallarni bajaradi ============ Ma’lumotlarni doimiy saqlaydi
          ============ Grafiklarni qayta ishlaydi ============ Faqat signal
          uzatadi +++++++++++ O‘rnatilgan tizim protsessorlari qanday
          interfeyslar bilan bog‘lanadi? ============ #UART, I2C, SPI, USB
          ============ Faqat HDMI ============ Faqat Ethernet ============ Faqat
          Wi-Fi ++++++++++++ Mikrokontrollerning soat chastotasi nimani
          belgilaydi? ============= #Protsessor qancha tez ishlashini
          ============= Qurilmaning fizik o‘lchamini ============= Qancha elektr
          quvvati talab qilinishini ============= Operativ xotira hajmini
          ++++++++++++ Mikrokontrollerlar qanday turdagi operatsion tizimlardan
          foydalanadi? =========== #RTOS (Real-Time Operating System) yoki
          yalang‘och apparat tizimi =========== Faqat Windows OS ===========
          Faqat Linux OS =========== Faqat Android OS +++++++++++ Qaysi
          protsessor turi o‘rnatilgan tizimlarda eng ko‘p qo‘llaniladi?
          ========== #ARM ========== Intel Xeon ========== AMD Threadripper
          ========== Nvidia RTX ++++++++++ Mikrokontrollerlarning asosiy
          xususiyati nima? ============ #Dasturiy ta’minot va apparat
          vositalarini birgalikda boshqarish ============ Faqat grafik interfeys
          ishlatish ============ Faqat yuqori quvvat sarflash ============ Faqat
          ma’lumot saqlash ++++++++++++ Mikrokontrollerda kirish-chiqish pinlari
          nima uchun kerak? ============ #Tashqi qurilmalar bilan aloqa
          o‘rnatish uchun ============ Operativ xotira hajmini oshirish uchun
          ============ Protsessor tezligini o‘zgartirish uchun ============
          Faqat displey boshqarish uchun ++++++++++++ Mikrokontrollerdagi taymer
          va sanagichlarning vazifasi nima? =========== #Vaqtni hisoblash va
          jarayonlarni sinxronlashtirish =========== Operativ xotirani
          to‘ldirish =========== Faqat grafikni qayta ishlash =========== Faqat
          dastur yozish uchun +++++++++++ Mikrokontrollerning asosiy energiya
          talabi qanday? ========== #Kam quvvat sarfi talab qilinadi ==========
          Juda ko‘p energiya talab qiladi ========== Faqat quyosh energiyasidan
          foydalanadi =========== Faqat elektr tarmog‘iga ulangan holda ishlaydi
          +++++++++++ Mikrokontroller qaysi sohalarda keng qo‘llaniladi?
          =========== #Sanoat avtomatlashtirish, avtomobil sanoati, tibbiyot,
          smart qurilmalar =========== Faqat video o‘yinlar yaratishda
          =========== Faqat Internet xizmatlarida =========== Faqat
          superkompyuterlarda +++++++++++ Uzulish (interruption) nima?
          =========== #Mikrokontroller ish jarayonini vaqtincha to‘xtatib,
          muhimroq vazifani bajarish mexanizmi =========== Xotirani tozalash
          jarayoni =========== Qurilmalarni doimiy ravishda qayta yuklash usuli
          =========== Elektr energiyasini boshqarish tizimi +++++++++++
          Uzulishning asosiy turlari qanday? ============ #Tashqi va ichki
          uzilishlar ============ Faqat tashqi uzilishlar ============ Faqat
          ichki uzilishlar ============ Parallel va ketma-ket uzilishlar
          ++++++++++++ Uzulishlarga ishlov beruvchi maxsus dastur nima deb
          ataladi? ============== #ISR (Interrupt Service Routine) =============
          BIOS ============= RAM boshqaruvchi ============= Multitasking
          protsessor +++++++++++++ ISR nima vazifani bajaradi? =============
          #Uzulish sodir bo‘lganda, tegishli kodni bajaradi =============
          Uzulishlarni butunlay o‘chirib qo‘yadi ============= Qurilmalarni
          uzluksiz ishlashini ta’minlaydi ============= Faqat protsessor
          tezligini oshiradi +++++++++++++ Tashqi qurilmalar qanday qilib
          uzilish hosil qiladi? ============= #Maxsus signal yuborish orqali
          ============= Dasturiy ta’minotni o‘zgartirish orqali =============
          Elektr quvvatini pasaytirish orqali ============= Internet orqali
          ma’lumot olish orqali ++++++++++++ Ichki uzilishlar qanday hosil
          bo‘ladi? ============= #Taymer, xatolik yoki maxsus dasturiy signal
          orqali ============= Tashqi qurilmalar signallari orqali =============
          Internet orqali uzatish orqali ============= USB orqali ulanadigan
          qurilmalar orqali +++++++++++ O‘rnatilgan tizimlarda uzilishlarning
          asosiy afzalligi nima? ============ #Protsessor vaqtini samarali
          ishlatish ============ Faqatgina operativ xotira ishlashini yaxshilash
          ============ Qurilmalarning faqat tez ishlashini ta’minlash
          ============ Xotira sarfini ko‘paytirish ++++++++++++ Qaysi qurilmalar
          tashqi uzilish hosil qilishi mumkin? ============ #Klaviatura,
          sensorlar, tarmoq adapterlari ============ Faqat protsessor
          ============ Faqat xotira ============ Faqat ichki dasturiy ta’minot
          ++++++++++++ Uzulishlar qanday usullar bilan ustuvorlikka ega bo‘ladi?
          ============ #Uzulish darajasi yoki apparat ustuvorligi orqali
          ============ Faqat dasturiy ta’minot bilan ============ Tarmoq
          tezligini o‘zgartirish orqali ============ Operatsion tizimni qayta
          yuklash orqali ++++++++++++ Uzulishlar paytida protsessor qanday
          ma’lumotlarni saqlaydi? ============ #Joriy bajarilayotgan
          instruktsiya va registr qiymatlarini ============ Faqat kod segmentini
          ============ Faqat vaqt belgilarini ============ Operativ xotira
          tarkibini butunlay o‘chiradi ++++++++++++ Ishlov berishning vaqt
          ko‘rsatkichlari nimani ta’minlaydi? =========== #Real vaqt rejimida
          uzilishlarga javob berish imkoniyatini =========== Faqat xotira
          miqdorini oshirishni =========== Internet tezligini oshirishni
          =========== Qurilmaning haroratini pasaytirishni +++++++++++ ISR
          dasturlarini yozishda eng muhim jihat nima? =========== #Tez
          bajarilishi va minimal kod ishlatilishi =========== Katta va murakkab
          kod yozish =========== Juda ko‘p funksiya chaqirish =========== Doimiy
          ravishda global o‘zgaruvchilarni o‘zgartirish ++++++++++
          Mikrokontrollerlarda uzilishlarni boshqarish uchun nima ishlatiladi?
          =========== #Interrupt vektor jadvali =========== BIOS ===========
          Faqat dastur kodlari =========== Operativ xotira +++++++++++ Uzulish
          vektori nima? ============ #Uzulishlarga ishlov berish uchun
          mo‘ljallangan manzillar jadvali =========== Qurilmalarning grafik
          interfeysi =========== Faqat dasturiy ta’minotni ishga tushirish uchun
          =========== Signal kuchaytiruvchi qurilma +++++++++++ Qaysi komponent
          protsessorga uzilish signallarini yuboradi? ============ #IRQ
          (Interrupt Request) liniyalari ============ RAM ============ Qattiq
          disk ============ LCD display ++++++++++++ Uzulishlarni qayta ishlash
          qanday bosqichlardan iborat? ============ #Uzulishni aniqlash, uni
          qayta ishlash va bajarilayotgan vazifaga qaytish ============ Faqat
          yangi dastur yuklash ============ Operatsion tizimni o‘zgartirish
          ============ Xotira formatlash ++++++++++++ Real vaqt rejimida ishlov
          berish uchun qaysi mexanizm muhim? =========== #Uzilishlarni to‘g‘ri
          boshqarish va ustuvorlik belgilash =========== Ko‘p operativ xotira
          ishlatish =========== Faqat internetga ulanish =========== Elektr
          quvvatini oshirish +++++++++++ ISR bajarilishida qaysi amallar
          bajarilishi kerak emas? ============= #Katta hajmli kod ishlatish va
          uzoq sikllarni bajarish ============= Minimal kod yozish va tez
          bajarilish ============= Registrlarni saqlash va tiklash =============
          Uzulish vektoridan to‘g‘ri foydalanish +++++++++++++ O‘rnatilgan
          tizimlarda eng ko‘p qaysi uzilish mexanizmlari ishlatiladi?
          ============ #Vaqtli (timer) va tashqi qurilma uzilishlari ===========
          Faqat grafik interfeys uzilishlari =========== Faqat Internet orqali
          keladigan uzilishlar =========== Faqat tasodifiy signallar ++++++++++
          Uzulishlarni to‘g‘ri boshqarish nima uchun muhim? ============
          #Tizimning barqaror va samarali ishlashini ta’minlash uchun
          ============ Faqat elektr energiyasini tejash uchun ============ Faqat
          xotira hajmini oshirish uchun ============ Faqat foydalanuvchi
          interfeysini yaxshilash uchun ++++++++++++ Kiritish-chiqarish
          interfeysi nima? ============ #Tashqi qurilmalar bilan o‘rnatilgan
          tizim o‘rtasida ma’lumot almashish vositasi ============ Faqat
          o‘rnatilgan tizimning operativ xotirasi ============= Dasturlarni
          saqlash uchun ichki xotira ============= Faqat ekran tasvirini
          boshqarish tizimi ++++++++++++ Kiritish-chiqarish interfeysining
          turlari qaysilar? =========== #Paralel va ketma-ket interfeyslar
          =========== Faqat Wi-Fi interfeysi =========== Faqat USB interfeysi
          =========== Faqat qattiq disk bilan ishlovchi interfeys +++++++++++
          O‘rnatilgan tizimlarda ishlatiladigan eng keng tarqalgan ketma-ket
          interfeys qaysi? ============ #UART (Universal Asynchronous
          Receiver-Transmitter) ============ VGA ============ HDMI ===========
          PS/2 +++++++++++ Kiritish/chiqarish qurilmasining kontrolleri nima
          vazifani bajaradi? ============ Qurilma bilan protsessor o‘rtasidagi
          ma’lumot almashinuvini boshqaradi =========== Faqat xotirani
          boshqaradi =========== Elektr ta’minotini nazorat qiladi ===========
          Operatsion tizimni yuklash bilan shug‘ullanadi +++++++++++ O‘rnatilgan
          tizimlarda ishlatiladigan asosiy ketma-ket interfeyslar qaysilar?
          ============ #UART, SPI, I2C =========== Faqat HDMI =========== Faqat
          PCIe =========== Faqat DisplayPort +++++++++++ Paralel interfeys
          qanday ishlaydi? ============ #0 uzatadi ============ Faqat bitta
          bitni uzatadi ============ Faqat simsiz aloqa uchun ishlatiladi
          ============ Faqat audio signal uzatadi ++++++++++++ USB interfeysi
          qaysi turga kiradi? ============ #Ketma-ket interfeys ============
          Paralel interfeys ============ Analog interfeys ============ Faqat
          simsiz interfeys ++++++++++++ SPI interfeysi qaysi ma’lumot almashish
          usuliga asoslangan? ============ #Sinxron ketma-ket aloqa ============
          Asinxron ketma-ket aloqa ============ Faqat simsiz aloqa ============
          Faqat tasvir uzatish ++++++++++++ Kiritish-chiqarish apparat
          interfeysi nima uchun kerak? =========== #O‘rnatilgan tizim va tashqi
          qurilmalar o‘rtasidagi ma’lumot almashuvini ta’minlash uchun
          =========== Faqat tizimni elektr ta’minoti bilan ta’minlash uchun
          =========== Operativ xotirani oshirish uchun =========== Faqat grafik
          tasvirlarni qayta ishlash uchun +++++++++++ I2C interfeysi qanday
          xususiyatga ega? =========== #Ikkita sim orqali ko‘p qurilmalar bilan
          aloqa o‘rnata oladi =========== Faqat bitta qurilma bilan ishlaydi
          =========== Faqat tezkor ma’lumot uzatish uchun mo‘ljallangan
          =========== Faqat audio uzatish uchun ishlatiladi +++++++++++ Tarmoq
          interfeysining asosiy vazifasi nima? =========== #O‘rnatilgan
          tizimlarni lokal yoki global tarmoqlarga ulash =========== Faqat
          qurilmani zaryadlash =========== Faqat ichki xotira bilan ishlash
          =========== Operatsion tizimni yangilash +++++++++++ Ethernet
          interfeysi qanday ma’lumot uzatish usuliga asoslangan? ===========
          #Simli aloqa =========== Simsiz aloqa =========== Faqat infraqizil
          aloqa =========== Faqat ultratovush signallari +++++++++++ O‘rnatilgan
          tizimlarda ishlatiladigan simsiz interfeyslar qaysilar? ===========
          #Wi-Fi, Bluetooth, Zigbee =========== Faqat HDMI =========== Faqat USB
          =========== Faqat DisplayPort +++++++++++ Qaysi interfeys mobil aloqa
          vositalarida keng qo‘llaniladi? =========== #Bluetooth =========== VGA
          =========== RS-232 =========== LPT +++++++++++ CAN interfeysi qayerda
          keng qo‘llaniladi? ========== #Avtomobil elektronikasi va sanoat
          avtomatlashtirishida ========== Faqat ofis kompyuterlarida ==========
          Faqat televizorlarda ========== Faqat mobil telefonlarda ++++++++++
          GPIO nima uchun ishlatiladi? ========== #Umumiy maqsadli
          kiritish/chiqarish signallarini boshqarish uchun ========== Faqat
          ma’lumot saqlash uchun ========== Faqat elektr ta’minoti uchun
          ========== Faqat video signal uzatish uchun ++++++++++ RS-232
          interfeysi qaysi turga kiradi? =========== #Ketma-ket interfeys
          =========== Paralel interfeys ========== Faqat simsiz interfeys
          =========== Faqat audio interfeys ++++++++++ Kiritish-chiqarish
          interfeyslarining muhim xususiyatlari qaysilar? =========== #Ma’lumot
          uzatish tezligi, ulanish turi va ishonchliligi =========== Faqat
          interfeys uzunligi =========== Faqat elektr quvvat sarfi ===========
          Faqat dasturiy ta’minot bilan mosligi +++++++++++ USB interfeysining
          asosiy afzalliklari qaysilar? =========== #Yuqori tezlikda ma’lumot
          uzatish va universal ulanish =========== Faqat quvvat manbai sifatida
          ishlatilishi =========== Faqat grafik interfeys =========== Faqat
          audio signal uzatish ++++++++++ O‘rnatilgan tizimlar qaysi
          interfeyslar orqali internetga ulanadi? ============= #Ethernet,
          Wi-Fi, LTE ============= Faqat HDMI ============= Faqat USB
          ============= Faqat RS-232 ++++++++++++++ O‘rnatilgan tizimlar uchun
          operatsion tizimlarning asosiy vazifasi nima? ================
          #Dasturlarni boshqarish va tizim resurslarini samarali taqsimlash
          ================= Faqat grafik interfeys taqdim etish
          ================= Faqat internetga ulanishni ta’minlash
          ================= Faqat apparat qurilmalarni boshqarish
          ++++++++++++++++ O‘rnatilgan tizimlar uchun operatsion tizimlarning
          muhim talablari qaysilar? ================= #Resurslarni samarali
          boshqarish, real vaqt rejimida ishlash va ishonchlilik
          ================= Faqat grafik interfeysning mavjudligi
          ================= Faqat katta hajmdagi xotira talab qilish
          ================= Faqat foydalanuvchilar uchun qulaylik yaratish
          +++++++++++++++++ O‘rnatilgan tizimlarda ishlatiladigan eng mashhur
          real vaqt operatsion tizimlari (RTOS) qaysilar? ================
          #FreeRTOS, VxWorks, QNX ================ Windows XP, MacOS, Ubuntu
          =============== Faqat Linux =============== Faqat Android
          +++++++++++++++ Monolit operatsion tizim arxitekturasi qanday
          ishlaydi? ============== #Barcha tizim xizmatlari yadro ichida
          bajariladi ============== Har bir dastur alohida yadroni ishlatadi
          ============== Har bir xizmat mustaqil modullar sifatida ishlaydi
          ============== Faqat apparat bilan bog‘langan tizim +++++++++++++++
          Monolit yadrolarning asosiy afzalligi nima? =============== #Yuqori
          ishlash tezligi va kam kechikish =============== Juda kichik hajmda
          bo‘lishi =============== Barcha xizmatlarning alohida ishlashi
          =============== Faqat ma’lumot saqlashni ta’minlashi +++++++++++++++
          Monolit yadro operatsion tizimiga misol keltiring. ==============
          #Linux ============== Windows NT ============== FreeRTOS
          ============== MacOS +++++++++++++ Modulli arxitektura qanday
          ishlaydi? ============ #Operatsion tizim komponentlari mustaqil
          modullar shaklida bo‘ladi ============== Barcha kodlar yadroga
          joylashgan bo‘ladi ============== Faqat mijoz-server modelidan
          foydalanadi ============== Faqat grafik interfeysni ta’minlaydi
          ++++++++++++++ Modulli arxitekturaning afzalligi nimada?
          =============== #Tizimni oson sozlash va kengaytirish mumkin
          =============== Har doim tez ishlaydi =============== Faqat real vaqt
          tizimlari uchun ishlatiladi =============== Faqat Linux yadrosi uchun
          mo‘ljallangan +++++++++++++++ Modulli arxitekturaga misol keltiring.
          ============== #Linux yadrosi ============== DOS ==============
          Windows 3.1 ============== FreeDOS ++++++++++++++ Mikroyadro nima?
          ============== #Minimal xizmatlarni ta’minlovchi yadro arxitekturasi
          ============== Operatsion tizim yadrosining eng katta versiyasi
          ============== Faqat grafik interfeysni ta’minlaydi ==============
          Faqat Windows operatsion tizimlari uchun ishlatiladi ++++++++++++++
          Mikroyadro arxitekturasining asosiy afzalligi nima? =============
          #Tizimning ishonchliligi va xavfsizligini oshiradi =============
          Operatsion tizimni sekinlashtiradi ============= Faqat katta hajmdagi
          xotira talab qiladi ============= Faqat mijoz-server modelini
          qo‘llab-quvvatlaydi +++++++++++++ Mikroyadro operatsion tizimlariga
          misollar qaysilar? ============== #QNX, Minix, L4 ==============
          MS-DOS, FreeDOS ============== Windows 98, MacOS ==============
          FreeBSD, Solaris +++++++++++++ Mijoz-server modeli qanday ishlaydi?
          ============= #Xizmatlar alohida jarayonlar sifatida bajariladi va
          yadroga minimal yuk tushadi ============= Barcha xizmatlar yadro
          ichida bajariladi ============= Faqat bitta mijoz ishlashi mumkin
          ============= Faqat foydalanuvchilar uchun mo‘ljallangan
          ++++++++++++++ Qaysi operatsion tizim mijoz-server modeli asosida
          ishlaydi? =========== #QNX =========== MS-DOS =========== Windows 95
          =========== FreeDOS +++++++++++ Monolit va mikroyadro tizimlari
          o‘rtasidagi asosiy farq nima? ============= #Monolit tizimda barcha
          xizmatlar yadro ichida bajariladi, mikroyadroda esa xizmatlar alohida
          jarayonlar sifatida ishlaydi ============== Monolit tizimda xizmatlar
          alohida ishlaydi, mikroyadroda esa barchasi bir joyda bajariladi
          ============== Mikroyadroda faqat real vaqt rejimida ishlash mumkin
          ============== Monolit tizim faqat Windows uchun ishlatiladi
          ++++++++++++++ Qaysi operatsion tizim mikroyadro arxitekturasidan
          foydalanadi? ============= #QNX ============= DOS =============
          Windows XP ============== Linux +++++++++++++ Mikroyadro tizimida
          xizmatlarning ishlashi qanday tashkil etiladi? ============ #Har bir
          xizmat alohida jarayon sifatida ishlaydi ============ Barcha xizmatlar
          yagona yadro ichida joylashadi ============ Faqat bitta jarayon
          ishlashi mumkin ============ Operatsion tizim grafik interfeyssiz
          ishlaydi +++++++++++++ Monolit yadroda xatoliklar qanday ta’sir
          qiladi? ============== #Barcha tizimga ta’sir qiladi va tizim ishdan
          chiqishi mumkin ============== Xatolik faqat bitta jarayonga ta’sir
          qiladi ============== Hech qanday ta’sir qilmaydi ============== Faqat
          tarmoq xizmatlariga ta’sir qiladi ++++++++++++++ Mikroyadro tizimida
          xatoliklar qanday ta’sir qiladi? ============== #Xatolik faqat muayyan
          xizmatga ta’sir qiladi ============== Butun tizim ishdan chiqadi
          ============== Barcha jarayonlar to‘xtaydi ============== Faqat grafik
          interfeys o‘chadi +++++++++++++++ Operatsion tizimlar uchun eng muhim
          omillar qaysilar? =============== #Ishonchlilik, tezlik, xavfsizlik va
          samaradorlik =============== Faqat grafik interfeys ===============
          Faqat tarmoq xizmatlari =============== Faqat xotira hajmi
          ++++++++++++++ Arduino nima? ============= #Ochiq kodli apparat va
          dasturiy ta’minot platformasi ============= Faqat grafik interfeysga
          ega bo‘lgan dastur ============= Ish stoli kompyuterlari uchun
          mo‘ljallangan operatsion tizim ============ Faqat robototexnikada
          ishlatiladigan dastur ++++++++++++ Arduino loyihalarida ishlatiladigan
          asosiy dasturlash tili qaysi? ========== #C/C++ ========== Python
          ========== Java ========== HTML ++++++++++ Arduino platalarida
          ishlatiladigan asosiy mikrokontroller qaysi? =========== #Atmel
          (Microchip) AVR va ARM Cortex-M =========== Intel Core i7 ===========
          AMD Ryzen =========== NVIDIA Tegra +++++++++++ Arduino tizimi qanday
          dasturiy ta’minot yordamida dasturlanadi? =========== #Arduino IDE
          =========== Microsoft Word =========== Adobe Photoshop ===========
          Windows Explorer +++++++++++ Arduino platalari qanday interfeys orqali
          kompyuterga ulanadi? ========== #USB ========== HDMI ========== VGA
          ========== Ethernet ++++++++++ Arduino Uno platasida qaysi
          mikrokontroller ishlatiladi? ========== #ATmega328P ==========
          STM32F103 ========== ESP8266 ========== PIC16F877A +++++++++++ Arduino
          Mega 2560 platasining asosiy xususiyati nima? ========== #Ko‘proq
          kirish-chiqarish pinlariga ega ========== O‘ta kichik o‘lchamga ega
          ========== Faqat Wi-Fi bilan ishlaydi ========== Faqat quvvatni
          boshqarish uchun ishlatiladi ++++++++++ Qaysi Arduino modeli Wi-Fi
          bilan integratsiyalashgan? =========== #Arduino Uno WiFi ===========
          Arduino Mega =========== Arduino Nano =========== Arduino Due
          +++++++++++ Arduino Due platasining asosiy afzalligi nima? ==========
          #ARM Cortex-M3 yadrosiga ega bo‘lishi =========== Faqat LEDlarni
          boshqarish imkoniyati =========== Juda kichik o‘lchamga ega bo‘lishi
          =========== Faqat ma’lumot uzatish uchun ishlatilishi +++++++++++
          Arduino Nano qanday ishlaydi? =========== #Arduino Uno'ning ixcham
          versiyasi bo‘lib, USB orqali dasturlanadi =========== Faqat Wi-Fi
          moduli sifatida ishlaydi =========== Faqat grafik interfeys uchun
          ishlatiladi =========== Ko‘p yadroli protsessorni o‘z ichiga oladi
          +++++++++++ Arduino LilyPad qayerda ishlatiladi? ===========
          #Kiyim-kechakka tikiladigan elektron tizimlarda =========== Sun’iy
          yo‘ldosh boshqaruvida =========== Smartfon protsessorlarida
          =========== Faqat televizor pultlarida +++++++++++ Arduino platalari
          qanday asosiy apparat interfeyslariga ega? =========== A) Digital va
          analog pinlar, UART, SPI, I2C =========== B) Faqat USB =========== C)
          Faqat HDMI =========== D) Faqat Bluetooth +++++++++++ O‘rnatilgan
          tizimlar uchun ARM arxitekturasining asosiy afzalligi nima?
          =========== #Kam quvvat sarfi va yuqori unumdorlik =========== Juda
          qimmat bo‘lishi =========== Faqat katta hajmdagi xotira talab qilishi
          =========== Faqat katta hajmdagi grafik interfeyslarni
          qo‘llab-quvvatlashi ++++++++++++ ARM arxitekturasiga asoslangan qaysi
          mikrokontrollerlar Arduino platalarida ishlatiladi? ========== #STM32,
          SAM3X8E ========= Intel Pentium ========= AMD Ryzen ========= NVIDIA
          GPU +++++++++ Arduino platalarida qanday dastur yozish mumkin?
          ========== #Mikrokontrollerga mos keladigan har qanday C/C++ kodi
          ========== Faqat grafik interfeys dasturlari ========== Faqat Linux
          operatsion tizimlarini boshqarish dasturlari ========== Faqat
          JavaScript bilan ishlaydigan dasturlar +++++++++ Arduino IDE qanday
          tilda yozilgan? ========= #Java ========= Python ========= HTML
          ========= Bash Script +++++++++ Arduino platalarida qaysi dasturlash
          modeli ishlatiladi? ========= #Loop va Setup funksiyalaridan iborat
          ========= Faqat obyektga yo‘naltirilgan dasturlash ========= Faqat
          server-klient modeli ========= Faqat voqealarga asoslangan dasturlash
          +++++++++ Arduino orqali qanday sensorlarni ulash mumkin? =========
          #Temperaturali, bosimli, namlik, harakat datchiklari ========= Faqat
          video kameralar ========= Faqat ovoz chiqaruvchi qurilmalar =========
          Faqat Wi-Fi modular +++++++++ O‘rnatilgan tizimlarda ARM
          protsessorlarining muhim xususiyati nima? ========== #Kam quvvat
          iste’mol qilishi va yuqori unumdorlik ========== Faqat ma’lumotlarni
          saqlash uchun ishlatilishi ========== Juda katta hajmda bo‘lishi
          ========== Faqat grafik ishlov berish uchun ishlatilishi ++++++++++
          Arduino bilan ishlovchi ARM protsessorli mikrokontrollerlar qaysilar?
          ========== #STM32F103, SAM3X8E ========== Intel Core i5, Core i7
          ========== AMD Ryzen 9, Ryzen 7 ========== NVIDIA Tegra X1 ++++++++++
          O‘rnatilgan tizimlarda tashxislash (diagnostika) nima? ==========
          #Tizimning ishlashini tekshirish va muammolarni aniqlash jarayoni
          ========== Faqat tizimga dastur yozish jarayoni ========== Faqat
          apparat vositalarni ishlab chiqarish jarayoni ==========
          Qurilmalarning elektr quvvati iste’molini hisoblash jarayoni +++++++++
          O‘rnatilgan tizimlarni tashxislashda qaysi vositalar ishlatiladi?
          ========= #Oscilloscope, Logic Analyzer, JTAG debuggers =========
          Faqat multimetr ========= Faqat LED indikatorlar ========= Faqat
          operatsion tizim +++++++++ O‘rnatilgan tizimlarda eng keng tarqalgan
          dasturiy tashxislash vositasi qaysi? ========= #GDB (GNU Debugger)
          ========= Microsoft Word ========= Photoshop ========= VLC Media
          Player +++++++++ Logic Analyzer qaysi maqsadda ishlatiladi? =========
          #Raqamli signallarni tahlil qilish uchun ========= Elektr toki kuchini
          o‘lchash uchun ========= Analog signallarni tahlil qilish uchun
          ========= Faoliyat vaqtini o‘lchash uchun +++++++++ JTAG debuggers
          qanday ishlaydi? ========= #Mikrokontroller ichki registrlari va
          dasturlarini tahlil qilish uchun ========= Faqat elektr toki o‘lchash
          uchun ========= Faqat USB orqali ulanish uchun ========= Faqat tarmoq
          signallarini tekshirish uchun ++++++++++ O‘rnatilgan tizimlarda real
          vaqt tashxislash qanday amalga oshiriladi? ========= #Real vaqt
          operatsion tizimlari va maxsus diagnostika vositalari orqali =========
          Faqat LED indikatorlar yordamida ========= Faqat elektr kuchlanishini
          o‘lchash orqali ========= Barcha tizimni o‘chirib, qayta yoqish orqali
          +++++++++ Debugging nima? ========== #Dasturdagi xatolarni topish va
          ularni tuzatish jarayoni ========== Faqat kod yozish jarayoni
          ========== Qurilmalarni elektr tarmog‘iga ulash jarayoni ===========
          Qurilmalarning fizik o‘lchamlarini hisoblash jarayoni +++++++++++
          Mikrokontrollerlarni tashxislashda Breakpoint nima uchun ishlatiladi?
          =========== #Dastur bajarilishini muayyan joyda to‘xtatish uchun
          =========== Dastur kodining hajmini oshirish uchun ===========
          Qurilmaning ishlash vaqtini pasaytirish uchun =========== Signalni
          kuchaytirish uchun +++++++++++ O‘rnatilgan tizimlarni tashxislashning
          eng muhim bosqichi qaysi? ========== #Muammoni aniqlash va analiz
          qilish ========== Faqat kod yozish ========== Faqat quvvatni o‘lchash
          ========== Tizimni qayta o‘rnatish ++++++++++ Tashxislash jarayonida
          real vaqt operatsion tizimlari qanday ahamiyatga ega? ========== #Ular
          tizimning ishlash vaqtini aniq o‘lchash imkonini beradi ==========
          Faqat ma’lumotlarni saqlash uchun ishlatiladi ========== Hech qanday
          ahamiyatga ega emas ========== Faqat apparat sozlamalarini saqlash
          uchun ishlatiladi ++++++++++ Mikrokontrollerlar uchun eng keng
          tarqalgan tashxislash interfeysi qaysi? ========== #JTAG va SWD
          =========== HDMI =========== VGA =========== Ethernet +++++++++++
          Debugger nima? =========== #Dastur bajarilishini nazorat qiluvchi va
          xatolarni topishga yordam beruvchi vosita =========== Qurilmalarni
          quvvat bilan ta’minlovchi qurilma =========== Qurilmalarni faqat
          ishlab chiqarish jarayoni =========== Tizimlarni qayta yoqish jarayoni
          ++++++++++ O‘rnatilgan tizimlarning tashxislash jarayonida “Watchdog
          Timer” qanday ishlaydi? =========== #Tizim ishdan chiqsa, uni
          avtomatik qayta yuklash orqali muammoni bartaraf etadi ===========
          Elektr quvvatini nazorat qiladi =========== Internet ulanishini
          tekshiradi =========== Faqat dasturiy ta’minotni yuklaydi +++++++++++
          Mikrokontrollerlarni tashxislashda oscilloscope nima uchun
          ishlatiladi? =========== #Analog va raqamli signallarni ko‘rish va
          tahlil qilish uchun =========== USB interfeysini tekshirish uchun
          =========== Faqat tarmoq tezligini o‘lchash uchun =========== Faqat
          dasturlarni yozish uchun ++++++++++ Qaysi debugging usuli eng kam
          invaziv hisoblanadi? =========== #JTAG va SWD interfeyslari orqali
          debugging =========== Print statement debugging =========== LED
          blinking debugging =========== Dasturiy emulyatsiya orqali debugging
          +++++++++++ Mikrokontroller tizimlarida "Watchpoint" nima? ===========
          #Muayyan xotira maydoni o‘zgarishini kuzatish imkonini beruvchi
          debugging texnikasi =========== Elektr quvvati nazorati tizimi
          =========== Qurilma haroratini o‘lchovchi datchik =========== Internet
          signalini kuchaytiruvchi moslama +++++++++++ Tashxislash jarayonida
          “Stepping” nima? ========== #Dastur bajarilishini bosqichma-bosqich
          tekshirish jarayoni ========== Signal kuchaytirish usuli ==========
          Elektr manbaini nazorat qilish texnikasi ========== Faqat kodni
          kompilyatsiya qilish ++++++++++ Dasturiy debugging vositalari
          qaysilar? ========== #GDB, OpenOCD, Keil uVision ========== Excel va
          Word ========== Photoshop va AutoCAD ========== Windows Media Player
          ++++++++++ Logic Analyzer yordamida qanday signallar tahlil qilinadi?
          ========== #Raqamli signallar ========== Faqat audio signallar
          ========== Faqat video signallar ========== Faqat elektr kuchlanishi
          ++++++++++ Debugging jarayonida qaysi usul eng samarali hisoblanadi?
          ========== #JTAG debugging va real vaqt monitoring ========== Faqat
          LED yordamida tekshirish ========== Faqat qayta yuklash ==========
          Qurilmani almashtirish ++++++++++ O‘rnatilgan tizimlarning dasturiy
          ta’minoti qanday qismlardan iborat? ========== #Tizimli, amaliy va
          instrumental dasturiy ta’minot ========== Faqat tizimli dasturiy
          ta’minot ========== Faqat amaliy dasturiy ta’minot ========== Faqat
          instrumental dasturiy ta’minot ++++++++++ Tizimli dasturiy
          ta’minotning asosiy vazifasi nima? =========== #Tizimning apparat
          vositalari bilan ishlashini ta’minlash =========== Faqat foydalanuvchi
          dasturlarini yaratish =========== Faqat internetga ulanadigan
          ilovalarni boshqarish =========== Faqat grafik interfeysni yaratish
          +++++++++++ O‘rnatilgan tizimlar uchun eng mashhur tizimli dasturiy
          ta’minot turlaridan biri qaysi? =========== #Real vaqt operatsion
          tizimlari (RTOS) =========== Photoshop =========== Microsoft Office
          =========== VLC Media Player +++++++++++ Amaliy dasturiy ta’minotning
          asosiy vazifasi nima? ========== #Foydalanuvchi va tizim ehtiyojlariga
          mos xizmatlarni ta’minlash ========== Faqat operatsion tizimni
          boshqarish ========== Faqat apparat vositalarni boshqarish ==========
          Faqat internetga ulanishni ta’minlash ++++++++++ Instrumental dasturiy
          ta’minot nima uchun ishlatiladi? ========== #Dasturlarni ishlab
          chiqish va sinovdan o‘tkazish uchun ========== Faqat ma’lumotlarni
          tahlil qilish uchun ========== Faqat internetdan foydalanish uchun
          ========== Faqat audio va video fayllarni qayta ishlash uchun
          ++++++++++ Qaysi dasturiy ta’minot turi operatsion tizim tarkibiga
          kiradi? ========== #Drayverlar, yadro va tizimli kutubxonalar
          ========== Faqat grafik dasturlar ========== Faqat ofis dasturlari
          ========== Faqat antivirus dasturlari ++++++++++ Real vaqt operatsion
          tizimlari (RTOS) qanday tizimlar uchun zarur? ========== #Vaqt kritik
          bo‘lgan o‘rnatilgan tizimlar uchun ========== Oddiy ofis
          kompyuterlarida ishlash uchun ========== Faqat multimedia tizimlari
          uchun ========== Faqat mobil qurilmalar uchun ++++++++++ Tizimli
          dasturiy ta’minotning tarkibiy qismlaridan biri bo‘lgan bootloaderning
          vazifasi nima? ========== #Operatsion tizimni yuklash ========== Faqat
          internetga ulanish ========== Faqat xotirani boshqarish ==========
          Faqat grafik interfeysni yaratish ++++++++++ O‘rnatilgan tizimlarning
          dasturiy ta’minoti qanday til yordamida yoziladi? ========== #C/C++,
          Python, Assembly ========== Faqat HTML ========== Faqat Microsoft
          Excel =========== Faqat JavaScript ++++++++++ Dasturiy ta’minotni
          yaratish bosqichlari qanday? =========== #Talablarni aniqlash,
          loyihalash, dasturlash, sinov va integratsiya, foydalanish ===========
          Faqat kod yozish =========== Faqat ma’lumotlarni saqlash ===========
          Faqat grafik interfeys yaratish +++++++++++ O‘rnatilgan tizimlar uchun
          dasturiy ta’minot loyihalashda qaysi jihatlar muhim? ===========
          #Xotira samaradorligi, tezkorlik va energiya iste’moli ===========
          Faqat grafik dizayn =========== Faqat foydalanuvchi interfeysi
          =========== Faqat internetga ulanish tezligi +++++++++++ Amaliy
          dasturiy ta’minotga misol bo‘ladigan dasturlar qaysilar? ===========
          #Signalni qayta ishlash, avtomatlashtirish va monitoring dasturlari
          =========== Faqat antivirus dasturlari =========== Faqat matn
          muharrirlari =========== Faqat video pleerlar ++++++++++ Tizimli
          dasturiy ta’minotning yadro (kernel) qismi qanday vazifani bajaradi?
          =========== #Resurslarni boshqarish va jarayonlarni taqsimlash
          ========== Faqat rasm va videolarni qayta ishlash ========== Faqat
          internet tarmog‘ini boshqarish ========== Faqat matn tahrirlash
          ++++++++++ Dasturiy ta’minotni yaratishda testlashning asosiy maqsadi
          nima? ========== #Xatolarni aniqlash va tuzatish ========== Faqat kod
          yozish tezligini oshirish ========== Faqat grafik interfeys yaratish
          ========== Faqat internetga ulanishni ta’minlash ++++++++++ Dasturiy
          ta’minotning texnik xizmat ko‘rsatish bosqichi nimani anglatadi?
          ========== #Dasturiy ta’minotni yangilash va xatolarni bartaraf etish
          ========== Faqat dastur kodini o‘chirish ========== Faqat dastur
          grafik interfeysini o‘zgartirish ========== Faqat kompyuterning quvvat
          sarfini kamaytirish ++++++++++ Embedded Linux nima? ==========
          #O‘rnatilgan tizimlar uchun moslashtirilgan Linux distributivi
          ========== Faqat mobil telefonlar uchun tizim ========== Faqat Windows
          muhitida ishlaydi ========== Faqat shaxsiy kompyuterlar uchun
          operatsion tizim ++++++++++ FreeRTOS nima? ========== #Ochiq kodli
          real vaqt operatsion tizimi ========== Matn muharriri ==========
          Internet tarmog‘ini boshqaruvchi dastur ========== Grafik dastur
          ++++++++++ Dasturiy ta’minotning interfeys qismi qanday maqsadda
          ishlatiladi? =========== #Foydalanuvchilar va tizim o‘rtasida aloqa
          o‘rnatish uchun =========== Faqat xotira boshqarish uchun ===========
          Faqat protsessor yuklanishini tekshirish uchun =========== Faqat
          internetga ulanish uchun +++++++++++ Tizimli dasturiy ta’minotning
          muhim komponentlaridan biri bu... ========== #Drayverlar ==========
          Faqat video pleer ========== Faqat ofis dasturlari ========== Faqat
          audio dasturlar ++++++++++ Kompilyator qanday vazifani bajaradi?
          ========== #Dastur kodini mashina kodiga aylantirish ========== Faqat
          internet tarmog‘ini nazorat qilish ========== Faqat matn tahrirlash
          ========== Faqat video yaratish ++++++++++ MS Sql Server 2008 qanday
          tizim? ==== #Foydalanuvchi interfeyslari so’rovnomalarga ishlov
          berishni optimizatsiyalovchi va tranzaksiyalovchi boshqarish tizimi.
          ==== Ma'lumotlar boshqarish tizimi. ==== Tranzaksiyalarga on-line
          rejimda ishlov berish tizimi. ==== Ma'lumotlarni qayta ishlash tizimi
          ++++ Ma’lumotlarning yangi, obyektga yo’naltirilgan obyektga
          relyatsion deduktiv modellari qachon vujudga keldi. ==== #1980 yil
          o’rtalarida ==== 1980 yil boshida ==== 1970 yilda ==== 1995 yilda ++++
          (MBBT) qanday tizim? ==== #Predmetga yo’naltirilgan ma’lumotlar
          bazasini boshqarish tizimi. ==== Ma'lumotlarni boshqarish tizimi. ====
          Tranzaksiyalarga on-line rejimda ishlov berish tizimi. ====
          Ma'lumotlarni qayta ishlash tizimi ++++ On-line Analitical Processing
          OLAP qanday vazifani bajaradi? ==== #Ma’lumotlarni tozalash,
          ma’lumotlarni umumlashtirish, va ualarga on-line rejimda analitik
          ishlov berish ==== Ma'lumotlarni turkumlash. ==== Ma’lumotlarga
          on-line rejimda ishlov berish tizimi. ==== Ma'lumotlarni qayta
          ishlash. ++++ Ma’lumotlarni chuqur taxlilashning qo’shimcha usullarini
          ko’rsating? ==== #klassifikatsiya, klasterizatsiya ==== Tranzaksiya,
          klasterizatsiya ==== Optimizatsiya, klassifikatsiya ====
          Klasterizatsiya, tranzaksiya ++++ MIT qaday jarayon? ==== #Katta
          hajimdagi ma’lumotlardan yangi, korrekt bo’lgan va foydali axborotni
          ajratib olish jarayoni ==== Ma'lumotlar boshqarish jarayoni. ====
          Ma’lumotlarni umulashtirish jarayoni. ==== Ma'lumotlarni qayta ishlash
          jarayoni. ++++ Ingiliz adabiyotida “MIT” o’rniga qanday tushuncha
          ishlatiladi? ==== #Data Mining. ==== Data Source. ==== Data Analyze
          ==== Data Mind ++++ Pattern nima? ==== #MIT vositasida ajratib olingan
          bilim. ==== Ma’lumotlarnig asosiy mazmuni. ==== MIT vositasida ajratib
          olingan ma’lumotlar to’plami. ==== Ma’lumot sarlavhasi. ++++ МIТ ning
          vazifasi nima? ==== #Katta hajimdagi ma’lumotlar massivlaridan ma’noga
          ega bo’lgan patternlarni ajratib olish ==== Katta hajimdagi
          ma’lumotlar oqimidan kerakli malumotni topish. ==== Ma’lumotlarni
          tasniflash. ==== Ma'lumotlarni qayta ishlash. ++++ Pattern qanday
          vazifani bajaradi? ==== #Qarorlar qabul qilishda, jarayonlarni nazorat
          qilishda, axborotni bajaruvchi va so’rovnomalarga ishlov berish
          vazifasini bajaradi. ==== Ma'lumotlarni tahlil qilish vazifasini
          bajaradi. ==== Ma’lumotlarni izlash jarayonini amalga oshirish
          vazifasini bajaradi. ==== Ma'lumotlarni qayta ishlash jarayonini
          nazorat qilish vazifasini bajaradi. ++++ MIT amalga oshirish necha
          bosqichda amalga oshiriladi? ==== #6 ==== 5 ==== 4 ==== 7 ++++
          Ma’lumotlar bazalari (MB) turlari nechta? ==== #9 ta ==== 5 ta ==== 4
          ta ==== 7 ta ++++ Bilimlar bazasi ga ta’rif bering? ==== #Predmet soha
          haqidagi natijaviy pattern (bilim) larni qanday izlash va kerakligini
          baholash haqidagi bilimlar, ==== Ma’lumotlar qimmatliligini aniqlovchi
          bilimlar. ==== Ma’lumotlar bazasi. ==== Ma’lumotlarni turkumlash
          haqidagi bilimlar ++++ ... Xarakterlashtirish, assotsiyalarni topish,
          klassifikatsiyalash, klaster tahlili kabi masalalarni yechishga imkon
          beruvchi funksional modullar asosida amalga oshiriladi? ==== #Bilimlar
          toppish xizmati ==== Bilimlar bazasi ==== Patternlarni baholash moduli
          ==== MB yoki ma’lumotlar ombori server ++++ Patternlarni baholash
          moduli bu -? ==== #Patternlarga qiziqish va ularning foydaliligini
          o’lchamani hisoblashga xizmat qiladi. ==== Predmet soha haqidagi
          natijaviy pattern(bilim)larni qanday izlash va kerakligini baholash
          haqidagi bilimlar ==== Qarorlar qabul qilishda, jarayonlarni nazorat
          qilishda, axborotni bajaruvchi va so’rovnomalarga ishlov berish
          vazifasini bajaradi ==== Ma'lumotlarni tahlil qilish vazifasini
          bajaradi ++++ Qaysi qatordagi javobga ta’rif berilgan? (Bu modul MIT
          tizimi va foydalanuvchilar orasidagi aloqani turli formadagi
          namunalarni vizuallashtirishni amalga oshiradi) ==== #Grafik
          foydalanuvchi interfeysi ==== Pattern baholash moduli ==== Bilimlar
          topish xizmati ==== Bilimlar bazasi ++++ Internet tushunchasiga tarif
          keltirilgan qatorni toping? ==== #Eng katta hajimdagi multimediyali
          axborotni saqlovchi ma’lumotlar bazasi ==== Ma’lumotlar ombori ====
          Vizual tarmoq ==== Ma’lumotlar oqimi ++++ Qaysi qatordagi javobga
          ta’rif berilgan? (fikran bog’lanishlar qoidalari X→Y shakliga ega , X
          shartlari yetarli , taxminan Y shartlarini ham qoniqtiruvchi
          ma’lumotlar bazasidagi yozuvlarni tushunadi) ==== #Fikran bog’lanish
          tahlili ==== Sinflash va bashoratlash ==== Klaster tahlil ====
          Evolutsion tahlil ++++ Evolutsion tahlil bu -? ==== #Vaqt davomida
          o’zgaruvchi obyektlar uchun trendlarni modellashtiradi va tavsiflaydi.
          ==== Ixtiyoriy berilgan obyektning aniq atributlari va klas
          belgilaridan foydalanib klasni bashoratlash uchun klaslarni
          tabsiflaydi va ajratadi. ==== MIT tizimi va foydalanuvchilar orasidagi
          aloqani turli formadagi namunalarni vizuallashtirishni amalga oshiradi
          ==== Ma'lumotlarni tahlil qilish vazifasini bajaradi ++++ Axborot
          nazariyasi faniga qachon asos solingan? ==== #1948 yil ==== 1968 yil
          ==== 1995 yil ==== 1997 yil ++++ Entropiya so’ziga to’g’ri ta’rif
          berilgan qatorni ko’rsating? ==== #Tartibsizlik ==== Ketma-ketlik ====
          Uzviylik ==== Aloqadorlik ++++ Beys sinflashtirish usuliga qaysi
          qatorda to’g’ri ta’rif berilgan? ==== #Statik usul bo’lib,
          obyektningberilgan sinfga tegishliligi ehtimolini avvaldan (apriori,
          ya’ni tajriba o’tkazmasdan) topish imkonini beradi. ==== Denamik usul
          bo’lib, obyektningberilgan sinfga tegishliligi ehtimolini avvaldan
          (apriori, ya’ni tajriba o’tkazmasdan) topish imkonini beradi. ====
          Statik usul bo’lib faqatgina tajribalar o’tkazish yo’li bilan aniqlash
          imkonini beradi. ==== Denamik usul bo’lib faqatgina tajribalar
          o’tkazish yo’li bilan aniqlash imkonini beradi. ++++ Bozorning savatli
          tahlilinig ikkinchi nomlanishi qaysi qatorda berilgan? ====
          #Assotsiativ bog’liqlik qoidalari ==== Sinflash va bashoratlash ====
          Sinflashirish usuli ==== Klaster tahlil ++++ Katta hajimdagi
          ma’lumotlar asosida amalga oshiriladi va ma’lumotlar hajmini
          kichraytirish, ma’lumotlar katta massivlarini ixchamlashtirish,
          ma’lumotlarni tahlil qilishga qulay ko’rinishga keltirish va grafik
          asosida ko’rsatish imkonini beradi? ==== #Klasterli tahlili ====
          Evolutsion tahlili ==== Fikran bog’lanish tahlili ==== Sinflash va
          bashoratlash tahlili ++++ Supervised learning? ==== #bu modelni
          xususiyatlari aniq bo'lgan ma'lumotlar bilan o'qitish, ==== bu modelni
          xususiyatlari aniq bo'lmagan ma'lumotlar bilan o'qitish ==== bu
          modelni ham aniq ham aniq bo'lmagan xususiyatli ma'lumotlar bilan
          o'qitishdir ==== bu o'qitishning mukammal usuli bo'lib, bunda model
          o'zini-o'zi qayta o'qitish va natijalarni yaxshilash imkoniyatiga ega
          bo'ladi ++++ Malumotlarni korrelyatsion tahlili necha bosqichda amalga
          oshiriladi? ==== #5 ta ==== 6 ta ==== 4 ta ==== 9 ta ++++ Vaqtli
          qatorlarni o’rganish (tekshirish) uchun nechta asosiy fazifalar
          bajariladi ? ==== #3 ta ==== 2 ta ==== 4 ta ==== 5 ta ++++ O’racha
          o’sish tezligi kamchiliklari sonini ko’rsating? ==== #4 ta ==== 5 ta
          ==== 2 ta ==== 1 ta ++++ Bilimlarni ifodalashning necha xil turi
          mavjud? ==== #2 xil ==== 3 xil ==== 4 xil ==== 5 xil ++++ Mantiqiy
          modellar asosini nimalar tashkil etadi? ==== #Predikatlar hisobi ====
          Mantiqiy amallar ==== Algoritmlar ketma-ketligi ==== Evristik modellar
          ++++ Evristik modelning mantiqiy modeldan asosiy afzallik tomonini
          ko’rsating? ==== #Imkoniyatlarning ko’pligi va muammoli sohaning
          adekvatlik bilan o’z yechimga ega bo’lishi. ==== Modellar turli xil
          vositalardan janlanganligi, ma’lumotlarning o’ziga xosligi. ====
          Muhimlilgi yoki muammoli sohalarning bo’lakcha bo’lganligi. ====
          Modellar asosini predikatlar hisobi tashkil topishidadir. ++++
          “Birinchi predikatga munosabat nomi, termenga esa
          argumentlar-obyektlar moc keladi” yuqorida keltirilgan ishlash
          prensipi qaysi qatorga to’gri keladi? ==== #Mantiqiy model ====
          Semantik model ==== Produksion model ==== Freym ko’rinishidagi model
          ++++ Evristik modellarning mantiqiy modellardan asosiy farqi nima?
          ==== #Modellar turli xil vositalardan janlanganligi, ma’lumotlarning
          o’ziga xosligi Muhimlilgi yoki muammoli sohalarning bo’lakcha
          bo’lgaligi. ==== Modellar asosini predikatlar hisobi tashkil
          topishidadir. ==== Imkoniyatlarning ko’pligi va muammoli sohaning
          adekvatlik bilan o’z yechimga ega bo’lishi. ==== Muhimlilgi yoki
          muammoli sohalarning bo’lakcha bo’lganligi. ++++ Evrestik modellar
          necha xil bo’ladi? ==== #3 xil ==== 4 xil ==== 5 xil ==== 6 xil ++++
          Bu tariff qaysi qatorga tegishli “Argumentlar tartibiqaralayotgan
          predmet soha uchun qabul qilingan predikatlar mazmuniga mos kelishi
          lozim”? ==== Mantiqiy modellar bilan ishlash qoidalari. ==== Evristik
          modellar bilan ishlash qoidalari. ==== Semantik modellar bilan ishlash
          qoidalari. ==== Produksion modellar bilan ishlash qoidalari. ++++
          “Predikatlar hisoblashda qo’llaniladi va shu bilan bir qatorda barcha
          mantiqiy ifodalar rost va yolg’on qiymatga egadir”. Bu ta’rifqaysi
          qatorga tegishli? ==== #Mantiqiy model ==== Semantik model ====
          Produksion model ==== Freym ko’rinishidagi model ++++ Kbantorlar necha
          turga bo’linadi? ==== #2 turga ==== 4 turga ==== 5 turga ==== 3 turga
          ++++ Unsupervised learning? ==== #bu modelni xususiyatlari aniq
          bo'lmagan ma'lumotlar bilan o'qitish ==== bu modelni xususiyatlari
          aniq bo'lgan ma'lumotlar bilan o'qitish ==== bu modelni ham aniq ham
          aniq bo'lmagan xususiyatli ma'lumotlar bilan o'qitishdir. ==== bu
          o'qitishning mukammal usuli bo'lib, bunda model o'zini-o'zi qayta
          o'qitish va natijalarni yaxshilash imkoniyatiga ega bo'ladi. ++++
          Semantika termeniga to’g’ri ta’rif keltirilgan qatorni toping? ====
          #Ilm-fan, simvollar va obyektlar o’rtasida o’zaro aloqani o’rnatish
          tushiniladi. ==== Modellar turli xil vositalardan janlanganligi,
          ma’lumotlarning o’ziga xos bo’lishi. ==== Imkoniyatlarning ko’pligi va
          muammoli sohaning adekvatlik bilan o’z yechimga ega bo’lishi. ====
          Vaqt davomida o’z garuvchi obyektlar uchun trendlarni modellashtirishi
          va tavsiflash. ++++ O'qitishning mukammal usuli bo'lib, bunda model
          o'zini-o'zi qayta o'qitish va natijalarni yaxshilash imkoniyatiga ega
          bo'ladi. ==== #Reinforcement learning ==== Semi-supervised learning
          ==== Supervised learning ==== Unsupervised learning ++++ “Dasturchi
          kompyuterga o’tiradi va dasturni o’zlashtiradi” bu yerda nechta obyekt
          bor? ==== #3 ta ==== 4 ta ==== 5 ta ==== 6 ta ++++ Malumotlar bazasini
          boshqarish tizimlari nechta? ==== #9 ta ==== 7 ta ==== 5 ta ==== 8 ta
          ++++ Agar server sifatida local kompyuter ishlatilmasa ishlatilayotgan
          serverga qaysi sozlamalarni o’rnatishimiz zarur? ==== #SQL Server va
          Firewall ==== SQL Server Management Studioni ==== Paradox for DOS ====
          SQLite ++++ Yangi ma’lumotlar bazasini yaratish uchun bo’g’langan
          serverimizning Databases bo’limida qaysi sarlavha tanlanadi? ==== #New
          Database ==== Restore Database ==== Attach ==== Deploy data tier
          application ++++ Ma’lumotlar bazasida yangi jadval yaratish uchun
          qaysi bo’lim tanlanadi? ==== #Tables ==== Database diagrams ==== Test
          database ==== views ++++ Yangi jadval uchun parametrlar qayerda
          beriladi? ==== #New Table ==== New File Table ==== Start PowerShell
          ==== Reports ++++ Matematik modellar, sonli usullar, dasturiy
          vositalar va axborot texnologiyalarining emperik ma’lumotlardan
          kerakli axborotni toppish va ana shu axborot asosida avvaldan
          noma’lum, amaliyotda foydali bo’lgan va ma’lum maqsadlarga erishishga
          imkon beruvchi bilimlarni sintez qilish (olish) imkonini beruvchi
          to’plam bu-? ==== #MIT ==== MB ==== MBB ==== Bilimlar bazasi ++++
          …-ning maqsadi zavonaviy axborot texnologiyalari va intelektual
          algoriytmlar asosida dastlabki xom ma’lumotlar to’plamidan
          foydalanuvchi uchun kerakli (foydali) ma’lumot (axborot olish) ====
          #MIT ==== MB ==== MBB ==== Semantik model ++++ Xozirda kompaniyalar
          MIT bo’yicha necha turdagi ishlarni bajarish bo’yicha o’z xizmatlarini
          taklif qilmoqda? ==== #5 turda ==== 7 turda ==== 15 turda ==== 10
          turda ++++ MITni necha turkumda dasturiy vositalar asosidaamalga
          oshirish mumkin? ==== #5 turkumda ==== 8 turkumda ==== 3 turkumda ====
          6 turkumda ++++ Bir o'zgaruvchili chiziqli regressiya bu? ====
          #Bashoratlash uchun obyektni xarakterlovchi bitta xususiyatini olib
          bashoratlashga xizmat qiladigan model yaratish ==== Bashoratlash uchun
          obyektni xarakterlovchi ko'p sondagi xususiyatlarini olib
          bashoratlashga xizmat qiladigan model yaratish ==== Sinflashtirish
          uchun obyektni xarakterlovchi bitta xususiyatini olib siflashtirishga
          xizmat qiladigan model yaratish ==== Sinflashtirish uchun obyektni
          xarakterlovchi ko'p sondagi xususiyatlarini olib siflashtirishga
          xizmat qiladigan model yaratish ++++ Logistik regressiya bu? ====
          #Regression tahlil asosida sinflashtirish masalasini yechish ====
          Regression tahlil asosida klasterlash masalasini yechish ====
          Regression tahlil asosida bashoratlash masalasini yechish ====
          Regression tahlil asosida chuqur o’qitish masalasini yechish ++++
          Chiziqli va logistik regressiyaning asosiy farqi bu………? ==== #Bu
          ikkalasi ikki turdagi masalani ishlaydi. chiziqli regressiya
          basharotlash, logistik regressiya sinflashtirish ==== Bu ikkalasi ikki
          turdagi masalani ishlaydi. chiziqli sinflashtirish basharotlash,
          logistik regressiya regressiya ==== Ikkalasi ham bir turdagi masalani
          ishlash uchun mo'ljallangan chiziqli regressiya basharotlash ++++
          Python dasturlash tilida ma'lumotlarni visuallashtirish uchun
          ishlatiladigan Kutubxona? ==== #Matplotlib ==== plotData ==== Pillow
          ==== PyPlot ++++ Numpy kutubxonasida ikkita vektorni skalyar
          ko'paytirish amali qanaqa? ==== #A*B ~A@B ==== np.multiply([A,B]) ====
          np.dot([a,b]) ==== Kmaens,KNN ++++ Numpy kutubxonasida ikkita vektorni
          vektor ko'paytirish amali qanaqa? ==== #A@B ==== A*B ====
          np.dot([A,B]) ==== np.multiply([A,B]) ++++ Pythonda ikkita vektorni
          birlashtirishda xatolik sodir bo'ladigan javobni tanlang? ====
          #a#append(a,b) ==== a#np.append(a,b) ==== a#np.append(b,a) ====
          a#np.append(b,d) ++++ Chiziqli regression model nechta qiymat
          qaytaradi? ==== #Har doim bitta ==== Ixtiyoriy ravishdagi sonda qiymat
          qaytarishi mumkin ==== Har doim bittadan ko'p ==== Xatolik sodir
          bo'ladi. ++++ Bias tushunchasi? ==== #Modelni train to'plam bilan
          testlaganda bo'ladigan xatolik ==== Modelni test to'plam bilan
          testlaganda bo'ladigan xatolik ==== Modelni train test to'plam bilan
          testlaganda bo'ladigangadi umumiy xatolik ==== Modelni validation
          to'plam bilan testlaganda bo'ladigangadi umumiy xatolik ++++ Model
          murakkab bo'lsa bias qanday bo'ladi? ==== #Quyi, model o'rgatuvchi
          tanlamaga mostlashib qoladi va train to'plamda xatoligi past bo'ladi
          ==== Model juda soda bo’ladi ==== Bias ning quyi yoki yuqori bo'lishi
          model murakkabligiga bog'liq emas ==== Yuqori, model o'rgatuvchi
          tanlamaga mostlashib qoladi va train to'plamda xatoligi yuqori bo'ladi
          ++++ Klasterlash bu? ==== #O'qituvchisiz o'qitish algoritmi asosida
          obyektlarni xarakterlovchi o'xshash xususiyatlari asosida guruhlash
          ==== O'qituvchili o'qitish algoritmi asosida obyektlarni
          xarakterlovchi o'xshash xususiyatlari asosida guruhlash ==== Mashinali
          o'qitishda buday tushuncha yo'q. ==== Logistik regressiya asosida
          amalga oshiriladigan mashinali o'qitish algoritmi ++++ O'qituvchisiz
          o'qitish algoritmiga qaysi algoritim kiradi? ==== #KmaensSingular
          Value Decomposition ==== KNNSVM ==== SVMKmaens ==== Random Forest ++++
          KNN algoritmida k qiymat nimani xarakterlaydi? ==== #k ta eng yaqin
          qo'shnini ==== k ta eng uzoq qo'shnini ==== O'qitish qadami ====
          O'qitishlar sonini ++++ KNN algoritmida k ta eng yaqin qo'shni qanday
          aniqlanadi? ==== #To'plamdagi barcha elemetlar orasidagi masofa
          hisoblanib chiqiladi va eng yaqin k tasi tanlanadi. ==== Taxminiy
          random () funksiyasi orqali aniqlanadi ==== To'plamdagi k ta elemetlar
          orasidagi masofa hisoblanib chiqiladi va ular o'sish tartibida
          saralanadi ==== KNN algoritmida k ta eng yaqin qo'shni tushunchasi
          yo'q ++++ KMeans bu –? ==== O'qituvchisiz o'qitish algoritmi ====
          O'qituvchili o'qitish algoritmi ==== O'zini o'zi o'qitadigan algoritmi
          ==== Sinflashrirish algoritmi ++++ Kmaens algoritmi qaysi masalani
          yechish uchun xizmat qiladi? ==== Klasterlash ==== O'qituvchili
          o'qitish ==== Sinflashtirish ==== Regressiya ++++ Qidiruv tizimlarida
          sun'iy intellektdan foydalanish mumkinmi? ==== #ha, mumkin va hozirda
          keng qo'llanilmoqda ==== qisman amaliy natijalari bor lekin yetarlicha
          nazariy jihatdan formallashtirilmagan ==== nazariy jihatdan mumkin,
          lekin hozircha amaliy jihatdan natijalarga erishilmagan ==== qidiruv
          tizimlarida sun'iy intellektdan foydalanish qidiruv vaqtini oshiradi
          ++++ Chuqur o'qitilish deyiladi, qachonki ...? ==== #Nayron
          tarmog'imizda yashirin qatlamlar soni bittadan ko'p bo'lsa ==== Neyron
          tarmog'imizda yashirin qatlamlar soni bitta bo'lsa ==== Ikkita neyron
          orasidagi masofa katta bo'lsa ==== Neyronlar soni ikkitadan ko'p
          bo'lsa ++++ Logistik regression model nima uchun ishlatiladi? ====
          #Sinflashtirsh masalasini yechish uchun ==== Klasterlash masalasini
          ishlash uchun ==== Neyron tarmoqni qurish uchun ==== Qiymatni
          bashoratlash uchun ++++ Numpy kutubxonasidagi polyfit() funksiyasi
          nima uchun ishlatiladi? ==== #Chiziqli regressiya uchun model
          paramertlarini aniqlash uchun ==== Loginstik regressiya uchun model
          paramertlarini aniqlash uchun ==== Chiziqli va logistik regressiya
          uchun model paramertlarini aniqlash uchun ==== Polynom funksiya
          yaratish uchun ++++ Neyron tarmoqlarini qurishga mo'ljallangan python
          kutubxonalarini ko'rsating? ==== #Numpy, keras, tensorflow ==== Numpy,
          pandas, keras ==== Tensorflow, numpy, pandas ==== Python, Matlab,
          Octave ++++ Python muhitida chiziqli regression model qurish uchun
          ishlatiladigan stats.linregress(x,y) funksiyasi nechta qiymat
          qaytaradi? ==== #5 ==== 4 ==== 3 ==== 2 ++++ Chuqur o'qitish qanday
          tarmoqlari asosida amalga oshiriladi? ==== #neyron tarmoqlar asosida
          ==== lokal tarmoqlar asosida ==== global tarmoqlar asosida ====
          internet tarmoqlar asosida ++++ Chuqur o'qitishning birinchi bosqichi
          qanday jarayondan iborat? ==== #Muammoni tushunib olish. ====
          Ma'lumotlarni aniqlash. ==== Chuqur o'qitish algoritmini belgilash.
          ==== Modelni o'qitish. ++++ Chiziqli regressiyada modelni sodda
          tanlansa qaysi turdagi muammo yuzaga keladi? ==== #Underfitting ====
          Owerfitting ==== Model ishonchli, hech qanaday muammo yo'q ==== Muammo
          sodir bo'lmaydi ++++ K-Maens algoritmida qo'llaniladigan ikki nuqta
          orasidagi masofa ... deb yuritiladi. ==== #Nutqlar o'rniga mos
          variantni qo'ying ==== Euclidean masofasi ==== Chebyshev masofasi ====
          Manhattan masofasi ==== Minkowski masofasi ++++ O'qituvchili o'qitish
          (supervised learning) nima? ==== #modelni o'qitish uchun ma'lumotlar
          bilan birgalikda ularning belgisini (data+label) ham ishlatish ====
          modelni o'qitish uchun ma'lumotlarni belgisisiz (data without label)
          ishlatish ==== modelni o'qitish uchun tasvir ma'lumotlaridan (image)
          foydalanish ==== modelni o'qitish uchun faqat ma'lumotlar belgisini
          (label) ishlatish ++++ O'qituvchisiz (unsupervised) o'qitish
          algortimlari to'g'ri ko'rsatilgan javobni ko'rsating? ==== #k-means
          clustering, hierarchical clustering, independent component analysis
          ==== linear regression, nearest neighbor, random forest, decision tree
          ==== k-means clustering, deep learning, logistic regression, random
          forest ==== k-nn, decision tree, linear regression, k-means clustering
          ++++ Regressiya nima? ==== #ma'lumotlarni intellektual tahlil qilish
          usullaridan biri ==== ma'lumotlarni ustida arifmetik usullaridan biri
          ==== ma'lumotlarni raqamli ishlov berish usullaridan biri ====
          ma'lumotlarni jamlash usullaridan biri ++++ Chiziqli regression model
          nima uchun ishlatiladi? ==== #bashorat qilish uchun ==== mantiqiy
          model qurish uchun ==== sinflashtirish masalasini yechish uchun ====
          segmentlash masalasini yechish uchun ++++ Sun'iy intellekt deganda
          nimani tushunasiz? ==== #insonning onggi kabi fikrlovchi dastur ====
          oddiy kompyuter dasturi ==== qaror qabul qiluvchi ilovalar ==== bunday
          termin fanda mavjud emas ++++ Dataset bu nima? ==== #bu o'qitish uchun
          kerakli bo'lgan ma'lumotlar to'plamidir ==== bu o'qitish uchun kerakli
          bo'lgan neyronlar to'plamidir ==== bu o'qitish uchun kerakli bo'lgan
          og'irliklar to'plamidir ==== bu o'qitish uchun kerakli bo'lgan neyron
          tarmoq qatlamlar to'plamidir ++++ Agar A matritsaning elementlari
          bo’lsa, isempty(A) funksiyasi nima natija qaytaradi? ==== #0 ==== -1
          ==== 1 ==== 2 ++++ Berilgan matritsaning o’lchovlarini aniqlab
          beruvchi funksiyani ko’rsating ==== #Size ==== long ==== wenth ====
          length ++++ Berilgan vektorning uzunligini aniqlab beruvchi funksiyani
          ko’rsating ==== Length ==== size ==== long ==== wenth ++++ A=[10:1]
          ifoda qanday ko’rinishdagi vector hosil qiliadi? ==== #Xatolik haqida
          xabar beradi ==== 1 2 3 4 5 6 7 8 9 10 ==== 1 3 5 7 9 ==== 10 9 8 7 6
          5 4 3 2 1 ++++ A=[-10:2:0] ifoda qanday ko’rinishdagi vector hosil
          qiliadi? #-10 -8 -6 -4 -2 0 ==== -9 -7 -5 -3 -1 ==== Xatolik haqida
          xabar beradi ==== = -1 2 -3 -4 -5 -6 -7 -8 -9 -10 ++++
          A=[1,2,3;4,5,6;7,8,9] matritsa berilgan. B= A(2,2:3) ifodaning
          natijasi qanday bo’ladi? ==== #B=[5,6] ==== B=[5,8] ==== B=[5,6; 8,9]
          ==== B=[2,3;5,6] ++++ A=[1,2,3;4,5,6;7,8,9] matritsa berilgan. B=
          A(2:3,2:3) ifodaning natijasi qanday bo’ladi? ==== #B=[5,6; 8,9] ====
          B=[2,3;5,6] ==== B=[5,6] ==== B=[5,8] ++++ A=[1,2,3;4,5,6;7,8,9]
          matritsa berilgan. B= A(2,2) ifodaning natijasi qanday bo’ladi? ====
          #B=[5] ==== B=[8] ==== Ifoda noto’g’ri tuzilgan ==== B=[2] ++++
          A=[1,2,3;4,5,6;7,8,9] matritsa berilgan. B= A(1:2,2) ifodaning
          natijasi qanday bo’ladi? ==== #B=[2;5] ==== Ifoda noto’g’ri tuzilgan
          ==== B=[1,2] ==== B=[1;4] ++++ A=[1,2,3;4,5,6;7,8,9] matritsa
          berilgan. B= A(2:3,1) ifodaning natijasi qanday bo’ladi? ==== #B=[4;7]
          ==== Ifoda noto’g’ri tuzilgan ==== B=[2,3] ==== B=[4,7] ++++
          A=[1,2,3;4,5,6;7,8,9] matritsa berilgan. B= A(3,:) ifodaning natijasi
          qanday bo’ladi? ==== #B=[7,8,9] ==== B=[7;8;9] ==== B=[3;6;9] ====
          Ifoda noto’g’ri tuzilgan ++++ A=[1,2,3;4,5,6;7,8,9] matritsa berilgan.
          B= A(:,3) ifodaning natijasi qanday bo’ladi? ==== #B=[3;6;9] ====
          B=[7;8;9] ==== Ifoda noto’g’ri tuzilgan ==== B=[7,8,9] ++++ Chiziqli
          va logistic regressiyaning asosiy farqi? ==== #Bu ikkalasi ikki
          turdagi masalani ishlaydi. chiziqli regressiya basharotlash, logistic
          regressiya sinflashtirish ==== Bu ikkalasi ikki turdagi masalani
          ishlaydi. chiziqli sinflashtirish basharotlash, logistic regressiya
          regressiya ==== Ikkalasi ham bir turdagi masalani ishlash uchun
          mo'ljallangan chiziqli regressiya basharotlash ++++ Python dasturlash
          tilida ma'lumotlarni visuallashtirish uchun ishlatiladigan kutubxona
          bu............. ==== #Matplotlib ==== plotData ==== Pillow ==== PyPlot
          ++++ Biror tasodifiy miqdor oʻrta qiymatining boshqa bir tasodifiy
          miqdoriga bogʻlikligi? ==== Regressiya ==== Sinflashtirish ====
          Strukturali tizim ==== Chuqur o‘qitish ++++ .....................bu
          tizimlar taksonlar deb ham ataladi. ==== #O’qituvchisiz ====
          O’qituvchili ==== Chuqur o'qitish ==== Nazoratli ++++
          ....................... - tizimlarda tanib olish masalasining yechish
          usuli sifatida maxsus baholarni hisoblash usullari nazarda tutiladi.
          ==== #Kombinatsiyalashgan ==== strukturali ==== mantiqiy ====
          nazoratsiz ++++ ............ -ob'ektlarni bir -biriga o'xshash
          xususiyatlarga ega bo'lgan ob'ektlar birlashishi va bir -biriga
          o'xshash bo'lmagan ob'ektlar bir -biridan ajralib ketadigan tarzda
          guruhlash usuli. ==== #Klasterlash ==== Sinflashtirish ====
          O'qituvchili o'qitish ==== Guruhlash ++++ Ierarxik klasterlash
          algoritmlari odatda …….turga bo'linadi. ==== #2 ==== 3 ==== 4 ==== 5
          ++++ K-Means usuli bilan klasterlash masalasini yechishda qanday
          optimallashtirish mezonidan foydalaniladi? ==== #nuqtalardan
          sentroidlar (markaziy nuqtalar)gacha masofalar kvadratlarning
          yig’indisi ==== nuqtalardan sentroidlar masofalari kvadratlarning
          ayirmasi ==== nuqtalardan sentroidlar (markaziy nuqtalar) ====
          nuqtalardan sentroidlar masofalari kvadratlarning yig’indisi ++++
          Ma'lumotlarning intellektual tahlili (Data Mining) nima? ====
          #Ma'lumotlardan yangi bilimlar olish jarayoni ==== Ma'lumotlarni
          yig'ish jarayoni ==== Ma'lumotlarni zaxiralash jarayoni ====
          Ma'lumotlarni kodlash jarayoni ++++ Ma'lumotlarning intellektual
          tahlili nima? ==== #Ma'lumotlarni chuqur tahlil qilish va bilim olish
          ==== Ma'lumotlarni saqlash ==== Ma'lumotlarni kirish va chiqish ====
          Ma'lumotlarni buzish ++++ Klasterning asosiy vazifasi nimadan iborat?
          ==== #Ma'lumotlarni guruhlash ==== Ma'lumotlarni tasniflash ====
          Ma'lumotlarni o'chirish ==== Ma'lumotlarni filtrlash ++++
          Ma'lumotlarning intellektual tahlilida "assotsiativ qoidalar" nima
          uchun ishlatiladi? ==== #Bir-biri bilan bog'liq bo'lgan elementlarni
          topish uchun ==== Klasterni aniqlash uchun ==== Ma'lumotlarni
          tasniflash uchun ==== Ma'lumotlarni qayta ishlash uchun ++++ "K-means"
          algoritmi qanday ishlaydi? ==== #Ma'lumotlarni klasterlarga ajratadi
          ==== Tasodifiy ravishda sinflar yaratadi ==== Ma'lumotlar ustida
          regressiya bajaradi ==== Assotsiativ qoidalar hosil qiladi ++++
          Ma'lumotlarning intellektual tahlili qanday maqsadda qo‘llaniladi?
          ==== #Ma'lumotlardan foydali bilimlar ajratib olish uchun ==== Faqat
          ma'lumotlarni saqlash uchun ==== Ma'lumotlarni o‘chirib tashlash uchun
          ==== Ma'lumotlarni shifrlash uchun ++++ Quyidagilardan qaysi biri
          ma'lumotlarning intellektual tahlili jarayonidagi asosiy bosqichlardan
          biri hisoblanadi? ==== #Ma'lumotlarni tahlil qilish va foydali
          bilimlarni ajratib olish ==== Ma'lumotlarni yig‘ish ==== Faqat grafik
          yaratish ==== Ma'lumotlarni joylashtirish ++++ Quyidagi usullardan
          qaysi biri ma'lumotlarning intellektual tahlilida qo‘llanilmaydi? ====
          #Suvning kimyoviy tahlili ==== Klassifikatsiya ==== Klasterlash ====
          Assotsiatsiyalarni aniqlash ++++ Klasterlash usuli qanday vazifani
          bajaradi? ==== #Ma'lumotlarni o‘xshash guruhlarga ajratadi ====
          Ma'lumotlarni shifrlaydi ==== Ma'lumotlarni aniqlik bilan o‘chiradi
          ==== Ma'lumotlarni matematik modellashtiradi ++++ Assotsiatsiyalarni
          aniqlash algoritmi qaysi sohada keng qo‘llaniladi? ==== #Mahsulotlarni
          birgalikda xarid qilishni tahlil qilish ==== Telekommunikatsiya
          tarmoqlari ==== Dori vositalarini ishlab chiqarishda ==== Suv
          resurslarini boshqarishda ++++ Quyidagi qaysi algoritm intellektual
          tahlilda klassifikatsiya uchun ishlatiladi? ==== #K-NN (eng yaqin
          qo‘shnilar) ==== Apriori algoritmi ==== Simpsonning qoidasi ====
          Kalitlarni shifrlash algoritmi ++++ Ma'lumotlarning intellektual
          tahlilida asosiy maqsad nima? ==== Ma'lumotlardan yashirin bilimlarni
          aniqlash ==== Ma'lumotlarni saqlashni tezlashtirish ==== Faqat
          ma'lumotlarni uzatish ==== Ma'lumotlarni bosib chiqarish ++++ Quyidagi
          algoritmlardan qaysi biri klasterlashda ishlatiladi? ==== #K-means
          ==== DES algoritmi ==== Shtrix kod algoritmi ==== Raqamli imzo
          algoritmi ++++ Regression tahlilining asosiy vazifasi nima? ====
          #Kelajakdagi qiymatlarni bashorat qilish ==== Ma'lumotlarni
          klasterlash ==== Shifrlarni o‘qish ==== Hisobotlarni tuzish ++++
          "Overfitting" tushunchasi ma'lumotlarning intellektual tahlilida
          nimani anglatadi? ==== #Modelning trening ma'lumotlariga haddan
          tashqari moslashib qolishi ==== Ma'lumotlarning ko‘p saqlanishi ====
          Hisoblash quvvatining oshishi ==== Ma'lumotlarning hajmi kamayishi
          ++++ Ma'lumotlarning intellektual tahlili texnologiyasida asosiy qadam
          nima hisoblanadi? ==== #Ma'lumotlarni tozalash va tayyorlash ====
          Ma'lumotlarni o‘chirish ==== Faqat natijalarni ko‘rsatish ====
          Grafiklar yaratish ++++ "Big Data" tushunchasi nimani anglatadi? ====
          #Ma'lumotlarning katta hajmi bilan ishlash texnologiyasi ==== Kichik
          hajmdagi ma'lumotlarni boshqarish ==== Ma'lumotlarni siqish usuli ====
          Grafikalardan foydalanish ++++ Quyidagi texnologiyalardan qaysi biri
          ma'lumotlarning intellektual tahlilida qo‘llaniladi? ==== #Hadoop ====
          GPS texnologiyasi ==== IoT (Internet of Things) ==== CAD/CAM tizimlari
          ++++ "Data Warehouse" nima uchun ishlatiladi? ==== #Tahlil qilish
          uchun optimallashtirilgan ma'lumotlarni saqlash uchun ====
          Ma'lumotlarni vaqtinchalik saqlash uchun ==== Ma'lumotlarni o‘chirish
          uchun ==== Faqatgina dasturlarni ishga tushirish uchun ++++ OLAP
          texnologiyasi qanday vazifani bajaradi? ==== #Tahliliy ma'lumotlarni
          o‘zgartiradi va turli kesimlarda ko‘rsatadi ==== Ma'lumotlarni
          shifrlaydi ==== Ma'lumotlarni sun'iy intellekt yordamida boshqaradi
          ==== Ma'lumotlarni fizik saqlash joyini boshqaradi ++++ Quyidagi qaysi
          texnologiya real vaqtda katta hajmdagi ma'lumotlarni tahlil qilish
          uchun mo‘ljallangan? ==== #Apache Spark ==== Photoshop ==== Microsoft
          Excel ==== Bluetooth texnologiyasi ++++ Ma'lumotlarni vizualizatsiya
          qilish uchun qaysi dasturiy ta'minotdan foydalaniladi? ==== Tableau
          ==== Oracle Database ==== AutoCAD ==== Notepad ++++ Data Mining
          texnologiyasida algoritmlarni amalga oshirish uchun qaysi dasturlash
          tili keng qo‘llaniladi? ==== #Python ==== HTML ==== CSS ==== Arduino
          ++++ Ma'lumotlarning intellektual tahlilida "machine learning" qanday
          o‘rin tutadi? ==== #Ma'lumotlardan o‘z-o‘zidan o‘rganib, tahliliy
          qarorlar qabul qilishni ta'minlaydi ==== Ma'lumotlarni faqat saqlash
          uchun ishlatiladi ==== Hisoblash quvvatini oshiradi ==== Ma'lumotlarni
          arxivlash uchun ishlatiladi ++++ Intellektual tahlilda "data
          preprocessing" bosqichi nimani anglatadi? ==== #Ma'lumotlarni tahlil
          qilishdan oldingi tayyorlash jarayoni, ==== Faqat natijalarni tahlil
          qilish ==== Ma'lumotlarni saqlashni osonlashtirish ==== Ma'lumotlarni
          aniqlik bilan siqish ++++ Ma'lumotlarning intellektual tahlili
          jarayonining birinchi bosqichi nima? ==== #Ma'lumotlarni yig‘ish ====
          Ma'lumotlarni tozalash ==== Ma'lumotlarni vizualizatsiya qilish ====
          Modelni baholash ++++ "Ma'lumotlarni tozalash" bosqichida asosiy
          vazifa nima? ==== #Shovqinli va keraksiz ma'lumotlarni olib tashlash
          ==== Ma'lumotlar omborini yaratish ==== Ma'lumotlarni shifrlash ====
          Ma'lumotlarni bo‘limlarga ajratish ++++ Quyidagilardan qaysi biri
          ma'lumotlarning intellektual tahlilida "modelni qurish" bosqichining
          asosiy qismidir? ==== #Algoritmni tanlash va ma'lumotlarga
          moslashtirish ==== Grafik chizish ==== Faqat ma'lumotlarni siqish ====
          Faqat ma'lumotlarni saqlash ++++ Ma'lumotlarning intellektual
          tahlilida "modelni baholash" bosqichi nimani o‘z ichiga oladi? ====
          #Modelning aniqligini va sifatini tekshirish, ==== Modelni ma'lumotlar
          omboriga joylashtirish ==== Modelni ishlab chiqish uchun dastur yozish
          ==== Ma'lumotlarni qayta yig‘ish ++++ Ma'lumotlarning intellektual
          tahlil bosqichlarining to‘g‘ri ketma-ketligi qaysi? ====
          #Ma'lumotlarni yig‘ish → tozalash → modelni qurish → baholash →
          foydalanish, ==== Ma'lumotlarni baholash → yig‘ish → tozalash →
          foydalanish → qurish. ==== Tozalash → yig‘ish → baholash → foydalanish
          → qurish. ==== Modelni baholash → tozalash → yig‘ish → qurish →
          foydalanish. ++++ Ma'lumotlarni intellektual tahlil qilishning asosiy
          maqsadi nima? ==== #Ma'lumotlardan yashirin bilimlarni aniqlash ====
          Faqat grafiklarni yaratish ==== Faqat ma'lumotlarni siqish ====
          Internetga ulanishni yaxshilash ++++ Quyidagi bosqichlardan qaysi biri
          intellektual tahlil jarayonida o‘tkazilmaydi? ==== #Ma'lumotlarni
          omborga joylashtirish ==== Foydalanuvchiga natijalarni taqdim etish
          ==== Ma'lumotlarni tahlil qilish ==== Ma'lumotlarni yig‘ish ++++
          "Ma'lumotlarni tahlil qilish" bosqichida qanday asosiy usullar
          qo‘llaniladi? ==== #Regression, klassifikatsiya, klasterlash ====
          Shifrlash, autentifikatsiya, shifr ochish ==== Tahrirlash, kodlash,
          bosib chiqarish ==== Grafik yaratish, loglarni saqlash ++++ Tahlil
          natijalarini taqdim etish bosqichi qanday ahamiyatga ega? ====
          #Natijalarni vizualizatsiya va qaror qabul qilish uchun foydalidir
          ==== Faqat dasturiy ta'minotni yaratish uchun ishlatiladi ====
          Ma'lumotlarni tezkor saqlash uchun kerak ==== Yangi ma'lumotlarni
          yig‘ish uchun ishlatiladi ++++ Ma'lumotlarning intellektual tahlilida
          qanday qilib qaror qabul qilishni qo‘llab-quvvatlash mumkin? ====
          #Tahlil natijalari asosida foydali bilimlarni taqdim etish orqali ====
          Faqat ma'lumotlarni omborga joylashtirish orqali ==== Ma'lumotlarni
          to‘g‘ridan-to‘g‘ri o‘chirib tashlash orqali ==== Dasturiy ta'minotni
          almashtirish orqali ++++ Ma'lumotlarning intellektual tahlilida
          ma'lumot modellarining asosiy vazifasi nima? ==== #Ma'lumotlarni
          strukturalash va ularning o‘zaro bog‘liqligini tavsiflash ====
          Ma'lumotlarni grafikda chizish ==== Ma'lumotlarni vaqtinchalik
          o‘chirib tashlash ==== Ma'lumotlarni shifrlash ++++ Quyidagilardan
          qaysi biri ma'lumot modellari turlariga kiradi? ==== #Klassifikatsiya,
          regressiya, klasterlash ==== Shifrlash, saqlash, chop etish ====
          Hisobot tuzish, siqish, loglarni saqlash ==== Tasvirlarni tahrirlash,
          ma'lumotlarni almashtirish ++++ Regression modeli qanday vazifani
          bajaradi? ==== #Kelajakdagi qiymatlarni bashorat qilish ====
          Ma'lumotlarni shifrlash ==== Ma'lumotlarni guruhlarga ajratish ====
          Ma'lumotlarni xotiraga saqlash ++++ Klassifikatsiya modeli qachon
          ishlatiladi? ==== #Ma'lumotlarni oldindan ma'lum toifalarga ajratish
          uchun ==== Ma'lumotlarni hajmini kamaytirish uchun ==== Faqat katta
          hajmdagi ma'lumotlarni saqlash uchun ==== Tahliliy grafiklar yaratish
          uchun ++++ Klasterlash modelining asosiy xususiyati nima? ====
          #Ma'lumotlarni o‘xshash guruhlarga ajratish ==== Ma'lumotlarni
          tasodifiy ajratish ==== Ma'lumotlarni shifrlash va saqlash ==== Faqat
          ma'lumotlarni omborda boshqarish ++++ Quyidagi algoritmlardan qaysi
          biri regressiya modellari uchun ishlatiladi? ==== #Linear regression
          ==== K-means ==== Apriori algoritmi ==== AES shifrlash algoritmi ++++
          Quyidagi qaysi model assotsiatsiyalarni aniqlash uchun qo‘llaniladi?
          ==== #Apriori modeli ==== Logistic regression ==== Random Forest ====
          Decision Tree ++++ "Decision Tree" modeli qanday ishlaydi? ====
          #Qarorlarni vizual daraxt shaklida tavsiflaydi ==== Ma'lumotlarni
          grafikda aks ettiradi ==== Faqat ma'lumotlarni shifrlaydi ====
          Ma'lumotlarni saqlash joyini boshqaradi ++++ "Random Forest" modeli
          qanday turdagi tahlilga asoslangan? ==== #Bir nechta qaror
          daraxtlarining kombinatsiyasiga asoslangan ==== Ma'lumotlarni
          shifrlashga asoslangan ==== Faqat regressiya tahliliga asoslangan ====
          K-means klasterlashga asoslangan ++++ Obyektga yo‘naltirilgan ma’lumot
          modellari nima uchun ishlatiladi? ==== #Ma'lumotlarni ob'ektlar
          sifatida tavsiflash va ularning o‘zaro aloqalarini aniqlash uchun ====
          Ma'lumotlarni vaqtinchalik saqlash uchun ==== Grafik chizish uchun
          ==== Ma'lumotlarni shifrlash uchun ++++ Obyektga yo‘naltirilgan
          ma’lumot modellari qaysi asosiy elementlardan iborat? ==== #Obyektlar,
          atributlar, sinflar ==== Faqat grafiklar ==== Foydalanuvchi interfeysi
          va matn ==== Faqat sonli ma'lumotlar ++++ Obyektga yo‘naltirilgan
          modellashtirishda "obyekt" nima? ==== #Ma'lumotlarning aniq
          xususiyatlar va funktsiyalarga ega mustaqil birligi ==== Faqat
          ma'lumotlar fayli ==== Tasodifiy ma'lumotlar to‘plami ==== Grafiklarda
          aks ettirilgan ma'lumotlar ++++ "Sinflar" obyektga yo‘naltirilgan
          modellashtirishda nima uchun ishlatiladi? ==== #Obyektlar uchun umumiy
          xususiyat va metodlarni aniqlash uchun ==== Obyektlarni shifrlash
          uchun ==== Ma'lumotlarni vaqtinchalik saqlash uchun ==== Faqat
          ma'lumotlarni eksport qilish uchun ++++ Obyektga yo‘naltirilgan
          ma’lumot modellarining asosiy afzalliklaridan biri nima? ====
          #Ma'lumotlarni modulyar va qayta foydalanish imkoniyatini oshirish
          ==== Ma'lumotlarni o‘chirishni osonlashtirish ==== Ma'lumotlarni
          grafikda chizish ==== Faqat katta hajmdagi ma'lumotlarni boshqarish
          ++++ Obyektga yo‘naltirilgan modellar qaysi dasturlash paradigmasi
          bilan bog‘liq? ==== #Obyektga yo‘naltirilgan dasturlash
          (Object-Oriented Programming - OOP) ==== Funktsional dasturlash ====
          Shartli dasturlash ==== Grafik interfeysni boshqarish ++++ Obyektga
          yo‘naltirilgan modellashtirishda atributlar qanday rol o‘ynaydi? ====
          #Obyektning xususiyatlarini tavsiflaydi ==== Obyektlarni o‘chirishga
          yordam beradi ==== Ma'lumotlarni shifrlaydi ==== Sinflarni
          birlashtiradi ++++ Obyekt relyatsion modelda asosiy ma'lumotlar
          strukturalari qanday ataladi? ==== #Obyektlar ==== Jadval ====
          Atributlar ==== Satrlar ++++ Obyekt relyatsion modelda obyektlar nima
          uchun ishlatiladi? ==== #Ma'lumotlarni saqlash va ular bilan ishlash
          uchun ==== Faqat jadval tuzish uchun ==== Faqat metodlar yaratish
          uchun ==== Faqat bog'lanishlarni aniqlash uchun ++++ Obyekt relyatsion
          modelda atributlar nima qiladi? ==== #Obyektlarning xususiyatlarini
          tasvirlaydi ==== Obyektlarni bog'laydi ==== Faqat metodlarni
          boshqaradi ==== Faqat jadvallarni boshqaradi ++++ Obyekt relyatsion
          modelda obyektlar o'rtasidagi bog'lanishlar qanday tasvirlanadi? ====
          #Atributlar va metodlar orqali ==== Faqat metodlar orqali ==== Faqat
          jadvallar orqali ==== Faqat cheklovlar orqali ++++ Obyekt relyatsion
          modelda "metod" nima? ==== #Obyektning xatti-harakatlarini aniqlovchi
          funksiya ==== Obyektni yaratish funksiyasi ==== Jadvalni yangilash
          funksiyasi ==== Atributni o'zgartirish funksiyasi ++++ Obyekt
          relyatsion modelda "bog'lanish" deganda nimani anglatadi? ====
          #Obyektlar orasidagi aloqalarni ==== Jadvalni yangilashni ==== Faqat
          ma'lumotlarni saqlashni ==== Faqat yangi obyekt yaratishni ++++ Obyekt
          relyatsion modelda qanday ma'lumotlar turidagi obyektlar mavjud? ====
          #Obyektlar va atributlar ==== Faqat jadvallar ==== Faqat metodlar ====
          Faqat cheklovlar ++++ Obyekt relyatsion modelda obyektlar o'rtasidagi
          bog'lanish qanday amalga oshiriladi? ==== #Atributlar va metodlar
          yordamida ==== Faqat jadvallar yordamida ==== Faqat cheklovlar
          yordamida ==== Faqat ustunlar yordamida ++++ Obyekt relyatsion modelda
          "yangi ma'lumotlar tuzilmasi" nima? ==== #Obyektlar va ularning
          atributlarini yaratish ==== Faqat yangi metodlarni qo'llash ==== Faqat
          yangi jadvallarni qo'shish ==== Faqat yangi cheklovlarni belgilash
          ++++ Obyekt relyatsion modelda ma'lumotlar qanday tashkil etiladi?
          ==== #Obyektlar, atributlar va bog'lanishlar orqali ==== Faqat
          metodlar orqali ==== Faqat jadval tuzilmalari orqali ==== Faqat
          atributlar orqali ++++ Mantiqqa asoslangan ma’lumotlar modelining
          asosiy maqsadi nima? ==== #Ma'lumotlarni mantiqiy tarzda tuzish va
          ularga ishlov berish ==== Ma'lumotlarni faqat fizik jihatdan saqlash
          ==== Ma'lumotlarni tahlil qilish ==== Faqat bog'lanishlarni yaratish
          ++++ Mantiqqa asoslangan ma’lumotlar modeli nima? ==== #Ma'lumotlar va
          ular o'rtasidagi munosabatlarni mantiqiy tarzda ifodalovchi model,
          ==== Ma'lumotlarni jadvalda saqlash uchun ishlatiladigan model. ====
          Faqat ma'lumotlarni saqlash uchun ishlatiladigan model. ====
          Ma'lumotlar faqat raqamli shaklda saqlanadigan model. ++++ Mantiqqa
          asoslangan ma’lumotlar modelida qaysi elementlar asosiy rolni
          o'ynaydi? ==== #Faktlar, qoidalar va mantiqiy bog'lanishlar ==== Faqat
          jadvallar ==== Faqat satrlar ==== Faqat atributlar ++++ Mantiqqa
          asoslangan ma’lumotlar modelida qanday qoidalar ishlatiladi? ====
          #Ma'lumotlarni mantiqiy bog'lash va ularga ishlov berish qoidalari
          ==== Faqat ma'lumotlarni saqlash qoidalari ==== Faqat ma'lumotlar
          bazasini boshqarish qoidalari ==== Faqat jadvalni tahrirlash qoidalari
          ++++ Mantiqqa asoslangan ma’lumotlar modelida "mantiqiy bog'lanish"
          nimani anglatadi? ==== #Ma'lumotlar o'rtasidagi mantiqiy aloqalar va
          munosabatlar ==== Faqat ma'lumotlarni saqlash ==== Faqat atributlarni
          aniqlash ==== Faqat jadval tuzilmasini belgilash ++++ Mantiqqa
          asoslangan ma’lumotlar modeli qanday ishlaydi? ==== #Mantiqiy
          operatorlar va qoidalar yordamida ma'lumotlarga ishlov beradi ====
          Faqat raqamli qiymatlarni hisoblaydi ==== Faqat matnli ma'lumotlarni
          saqlaydi ==== Faqat ma'lumotlar bazasini yangilaydi ++++ Mantiqqa
          asoslangan ma’lumotlar modelida qanday ma'lumotlar turlari
          ishlatiladi? ==== #Faktlar, mantiqiy operatorlar, qoidalar ==== Faqat
          jadval turlari ==== Faqat metodlar ==== Faqat jadvallar ++++ Mantiqqa
          asoslangan ma’lumotlar modelida mantiqiy operatorlar nima uchun
          ishlatiladi? ==== #Ma'lumotlarni tahlil qilish va ularning o'rtasidagi
          munosabatlarni aniqlash uchun ==== Faqat ma'lumotlarni saqlash uchun
          ==== Faqat jadvalni yangilash uchun ==== Faqat atributlarni tahrirlash
          uchun ++++ Mantiqqa asoslangan ma’lumotlar modelida qanday ma'lumotlar
          bog'lanadi? ==== #Faktlar va qoidalar orqali ==== Faqat jadvallar
          orqali ==== Faqat metodlar orqali ==== Faqat ma'lumotlarni saqlash
          orqali ++++ Mantiqqa asoslangan ma’lumotlar modeli qaysi sohada eng
          ko'p ishlatiladi? ==== #Sun'iy intellekt va bilimlar bazalarida ====
          Faqat ma'lumotlar bazasini boshqarishda ==== Faqat internet
          tarmoqlarida ==== Faqat ma'lumotlar saqlashda ++++ Ma’lumotlar
          bazasini loyihalashtirishning asosiy maqsadi nima? ==== #Ma'lumotlarni
          samarali saqlash va ularga tezkor kirishni ta'minlash ==== Faqat
          ma'lumotlarni tasvirlash ==== Faqat ma'lumotlarni tahlil qilish ====
          Ma'lumotlarni faqat saqlash ++++ Ma’lumotlar bazasini loyihalashtirish
          jarayonida qaysi birinchi bosqich bajariladi? === #Talablarni tahlil
          qilish ==== Ma'lumotlar bazasini saqlash ==== Ma'lumotlarni tahlil
          qilish ==== Foydalanuvchi interfeysini yaratish ++++ Ma’lumotlar
          bazasini loyihalashtirishda "normalizatsiya" nima? ==== #Ma'lumotlarni
          redundansiya (takrorlanish) dan qochib, ularni optimallashtirish
          jarayoni ==== Faqat ma'lumotlarni saqlash jarayoni ==== Faqat
          cheklovlarni qo'llash jarayoni ==== Ma'lumotlarni faqat yirik jadvalda
          saqlash jarayoni ++++ Ma’lumotlar bazasini loyihalashtirishda qanday
          elementlar asosiy rolni o'ynaydi? ==== #Jadval, atribut, bog'lanishlar
          ==== Faqat satrlar ==== Faqat foydalanuvchilar ==== Faqat metodlar
          ++++ Ma’lumotlar bazasini loyihalashtirishda "cheklovlar" nima? ====
          #Ma'lumotlarga qo'yilgan shartlar yoki cheklovlar ==== Faqat
          atributlarning o'zgarishi ==== Faqat ma'lumotlarni saqlash shartlari
          ==== Faqat foydalanuvchilarni boshqarish ==== Ma’lumotlar bazasini
          loyihalashtirishda qaysi bosqichda ma'lumotlar modelini tanlash kerak?
          ==== #Tahlil qilish va loyihalashtirish bosqichida ==== Ma'lumotlarni
          saqlash bosqichida ==== Faqat interfeysni yaratish bosqichida ====
          Ma'lumotlarni tahlil qilish bosqichida ++++ So‘rovlarni qayta
          ishlashning asosiy maqsadi nima? ==== #Ma'lumotlarni tahlil qilish va
          ulardan foydali ma'lumotlarni olish ==== Faqat ma'lumotlarni saqlash
          ==== Faqat foydalanuvchilarga so‘rovlar yuborish ==== Ma'lumotlarni
          faqat arxivlash ++++ So‘rovlarni qayta ishlashda qaysi jarayonlar
          amalga oshiriladi? ==== #Ma'lumotlarni to'plash, tahlil qilish va
          natijalarni chiqarish ==== Faqat ma'lumotlarni saqlash ==== Faqat
          jadvallarni yangilash ==== Faqat so‘rovlarni saqlash ++++ So‘rovlarni
          qayta ishlashda qanday ma'lumotlar tahlil qilinadi? ==== #Ma'lumotlar
          va ularning o'rtasidagi bog'lanishlar ==== Faqat jadvaldagi satrlar
          ==== Faqat foydalanuvchi nomlari ==== Faqat raqamli ma'lumotlar ++++
          So‘rovlarni qayta ishlashda qanday usullar ishlatiladi? ====
          #Filtrlash, guruhlash va tartiblash ==== Faqat ma'lumotlarni saqlash
          ==== Faqat foydalanuvchi ma'lumotlarini saqlash ==== Faqat
          atributlarni tahlil qilish ++++ Tranzaksiya nima? ==== #Ma'lumotlar
          bazasida amalga oshirilgan ma'lumotlar o'zgarishi yoki operatsiyasi
          ==== Faqat yangi ma'lumotlarni saqlash jarayoni ==== Faqat
          foydalanuvchi so'rovi ==== Ma'lumotlar bazasini yangilash jarayoni
          ++++ Tranzaksiya boshqaruvi qanday maqsadni ko'zlaydi? ====
          #Ma'lumotlar bazasidagi tranzaksiyalarni xavfsiz va ishonchli tarzda
          boshqarish ==== Faqat ma'lumotlarni saqlash ==== Faqat yangi
          foydalanuvchilarni qo'shish ==== Faqat ma'lumotlarni tahlil qilish
          ++++ Tranzaksiya boshqaruvida "ACID" nima? ==== #Tranzaksiyalarni
          boshqarishda qo'llaniladigan to'rtta xususiyat (Atomicity,
          Consistency, Isolation, Durability) ==== Faqat ma'lumotlarni saqlashni
          boshqarish xususiyatlari ==== Faqat tranzaksiyalarni yangilash
          xususiyatlari ==== Faqat foydalanuvchilarga xizmat ko'rsatish
          xususiyatlari ++++ Tranzaksiyalarni boshqarishning asosiy vazifasi
          nima? ==== #Tranzaksiyalarni xavfsiz va ishonchli tarzda amalga
          oshirish va ma'lumotlar bazasini boshqarish ==== Faqat ma'lumotlarni
          saqlashni boshqarish ==== Faqat foydalanuvchilarni boshqarish ====
          Faqat jadvallarni yangilash ++++ Metama'lumotlar nima? ====
          #Ma'lumotlar haqida ma'lumotlar ==== Faqat matnli ma'lumotlar ====
          Faqat statistik ma'lumotlar ==== Ma'lumotlar bazasidagi so'rovlar ++++
          Metama'lumotlar nimani ifodalaydi? ==== #Ma'lumotlar bazasining
          tuzilishi, formatlari, qoidalari va boshqalarni tavsiflaydigan
          ma'lumotlar ==== Faqat ma'lumotlarni saqlash ==== Faqat foydalanuvchi
          hisoblari ==== Faqat ma'lumotlarni tahlil qilish ++++ Metama'lumotlar
          qaysi sohalarda ishlatiladi? ==== #Ma'lumotlarni tartibga solish,
          boshqarish va qayta ishlashda ==== Faqat ma'lumotlarni saqlashda ====
          Faqat foydalanuvchilarni boshqarishda ==== Faqat ma'lumotlarni
          yig'ishda ++++ Metama'lumotlar bazasi nima? ==== #Ma'lumotlar bazasi
          haqida ma'lumotlarni saqlovchi tizim ==== Faqat ma'lumotlarni saqlash
          tizimi ==== Faqat foydalanuvchilarga xizmat ko'rsatish tizimi ====
          Faqat jadval yaratish tizimi ++++ Metama'lumotlar qanday ishlaydi?
          ==== #Ma'lumotlarni tuzish va boshqarish jarayonlarida ma'lumotlarning
          o'ziga xos xususiyatlarini ta'riflaydi ==== Faqat foydalanuvchi
          interfeysini yaratish ==== Faqat ma'lumotlarni saqlash ==== Faqat
          ma'lumotlarni tahlil qilish ++++ Metama'lumotlar qanday turdagi
          ma'lumotlarni o'z ichiga oladi? ==== #Ma'lumotlarning strukturalari,
          formatlari, o'lchovlari, turlari va qoidalari ==== Faqat ma'lumotlar
          bazasidagi satrlar ==== Faqat foydalanuvchilar haqida ma'lumot ====
          Faqat grafik ma'lumotlar ++++ Metama'lumotlar qaysi elementlarni o'z
          ichiga oladi? ==== #Atributlar, formatlar, tuzilmalar va qoidalar ====
          Faqat foydalanuvchi malumotlari ==== Faqat jadval elementlari ====
          Faqat ma'lumotlar saqlash shartlari ++++ Metama'lumotlar qanday
          tizimlarda ishlatiladi? ==== #Ma'lumotlar bazalari va axborot
          tizimlarida ==== Faqat jadval tizimlarida ==== Faqat grafik tizimlarda
          ==== Faqat foydalanuvchi tizimlarida ++++ Ma’lumotlar bazasining
          butunligi nima? ==== #Ma'lumotlar to'liq va aniq saqlanishi
          kerakligini ta'minlash ==== Faqat ma'lumotlarni saqlash ==== Faqat
          foydalanuvchi ma'lumotlarini o'zgartirish ==== Faqat ma'lumotlarni
          arxivlash ++++ Ma’lumotlar bazasining xavfsizligini ta'minlash uchun
          qanday usullar ishlatiladi? ==== #Foydalanuvchi huquqlarini boshqarish
          va ma'lumotlarni shifrlash ==== Faqat jadvallarni saqlash ==== Faqat
          foydalanuvchi ma'lumotlarini o'zgartirish ==== Faqat ma'lumotlarni
          saqlash ++++ Ma’lumotlarning intellektual tahlili qanday usullardan
          foydalanadi? ==== #Klasifikatsiya, klasterlash, regessiya va
          assotsiatsiya ==== Faqat statistik tahlil ==== Faqat ma'lumotlarni
          saqlash ==== Faqat grafiklarni yaratish ++++ Ma’lumotlarning
          intellektual tahlilida "assotsiatsiya" usuli nima? ==== #Ma'lumotlar
          orasidagi o'zaro bog'lanishlarni aniqlash ==== Faqat jadvallarni
          tahlil qilish ==== Faqat raqamli ma'lumotlarni tahlil qilish ====
          Faqat foydalanuvchilarni ajratish ++++ Paralellashtirish amallarini
          ma’lumotlarning intellektual tahlilida qanday afzalliklar bor? ====
          #Tahlil qilish vaqtini kamaytirish va samaradorlikni oshirish ====
          Faqat ma'lumotlarni saqlash imkoniyatlarini kengaytirish ==== Faqat
          foydalanuvchilarni tahlil qilish ==== Faqat ma'lumotlarni o'zgartirish
          ++++ Paralellashtirilgan tizimlarda qaysi resurslar ko'p ishlatiladi?
          ==== #Bir nechta protsessorlar va xotira resurslari ==== Faqat bitta
          protsessor ==== Faqat ma'lumotlar bazasini saqlash ==== Faqat
          foydalanuvchi interfeysini yaratish ++++ Paralellashtirish amallarini
          qanday muammolar yuzaga kelishi mumkin? ==== #Sinxronizatsiya va
          resurslarni boshqarish muammolari ==== Faqat tahlil qilish
          jarayonining sekinlashishi ==== Faqat foydalanuvchilarni boshqarish
          ==== Faqat ma'lumotlarni yig'ish
        </p>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
