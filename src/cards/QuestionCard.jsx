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
          1.Pulning asosiy funksiyalaridan biri nima? ==== A. Muomala vositasi
          ==== B.Aholi sonini oshirish ==== S.Ishsizlikni kamaytirish ====
          D.Tovarlarni ishlab chiqarish 2.Pulning tarixiy rivojlanish
          bosqichlaridan biri qanday ataladi? ==== A.Tovar-pul munosabatlari
          ==== B.Kompyuter davri ==== S.Ilm-fan inqilobi ==== D. Sanoat inqilobi
          3.Elektron pulning afzalliklaridan biri nima? ==== A. Oson va tezkor
          tranzaktsiyalar ==== B.To'g'ridan-to'g'ri ko'rish imkoniyati ====
          S.Tabiiy resurslarni tejash ==== D.Iqlim o'zgarishini kamaytirish
          4.Pulning muomala vositasi sifatidagi vazifasi nimani anglatadi? ====
          A. Xarid qilish va sotish jarayonida vositachilik qilish ====
          B.Jamg'arma sifatida ishlatish ==== S.Soliq to'lovini amalga oshirish
          ==== D.Ishlab chiqarishni boshqarish 5.Inflatsiya nimani anglatadi?
          ==== A. Pul qiymatining pasayishi ==== B.Pul qiymatining oshishi ====
          S.Pul muomalasidan chiqishi ==== D.Pulning chet el valyutalariga
          almashtirilishi 6.Milliy valyutaning almashinuv kursi qanday
          aniqlanadi? ==== A. Xalqaro bozordagi talab va taklif asosida ====
          B.Markaziy bank tomonidan belgilangan qat'iy kurs asosida ====
          S.Davlat tomonidan belgilangan narxlar asosida ==== D.Mahalliy korxona
          va tashkilotlar tomonidan +++++ 8.Jamg'arma vositasi sifatida pulning
          roli nima? ==== A. Kelajakda ishlatilish uchun qiymatni saqlash ====
          B.Tovarlarni ishlab chiqarish ==== S.Daromadlarni oshirish ====
          D.Xarajatlarni kamaytirish 9.Kriptovalyutalar qanday afzalliklarga
          ega? ==== A. Markaziy boshqaruv organi yo'q ==== B.Soliq to'lovini
          kamaytirish ==== S.Tovarlarni ishlab chiqarish ==== D.Ishsizlikni
          kamaytirish +++++ 10.Pulning to'lov vositasi sifatidagi vazifasi
          nimani anglatadi? ==== A. Kreditlar va qarzlarni to'lashda ishlatilish
          ==== B.Tovarlarni ishlab chiqarish ==== S.Xarid qilish va sotish
          jarayonida vositachilik qilish ==== D.Soliq to'lovini amalga oshirish
          11.Deflatsiya nimani anglatadi? ==== A. Pul qiymatining oshishi ====
          B.Pul qiymatining pasayishi ==== S.Pul muomalasidan chiqishi ====
          D.Pulning chet el valyutalariga almashtirilishi 12.Qaysi davrda qog‘oz
          pul birinchi marta paydo bo‘ldi? ==== A. O‘rta asrlar ==== B.Qadimgi
          Rim davri ==== S.Uyg‘onish davri ==== D.XIX asr 13.Pulning qanday
          turlari mavjud? ==== A.Tangalar va qog‘oz pul ==== B.Tangalar va
          toshlar ==== S. Qog‘oz va elektron pul ==== D.Qog‘oz va yog‘och pul
          14.Pul-kredit siyosatini kim boshqaradi? ==== A. Markaziy bank ====
          B.Tashqi ishlar vazirligi ==== S.Oliy Majlis ==== D.Savdo vazirligi
          15.Pulning qiymat o‘lchovi sifatida qanday funktsiyasi bor? ==== A.
          Mahsulotlar va xizmatlarning qiymatini aniqlaydi ==== B.O‘lchov
          vositasi sifatida ishlatilmaydi ==== S.Xarid qilishda ishlatiladi ====
          D.Faqat savdo uchun mos 16.Inson kapitali nima? ==== A. Shaxsning
          bilim, ko'nikma va sog'liq yig'indisi ==== B.Moliyaviy aktivlar
          yig'indisi ==== S.Ko'chmas mulk qiymati ==== D.Qimmatli qog'ozlar
          qiymati 17.Inson kapitalini oshirishning asosiy usuli nima? ==== A.
          Ta'lim olish va malaka oshirish ==== B.Bank hisob raqamlarini
          ko'paytirish ==== S.Qimmatbaho buyumlar sotib olish ==== D.Kredit
          olish 18.Inson kapitalining moliyaviy barqarorlikka ta'siri qanday?
          ==== A. Ish tajribasi va ko'nikmalarni oshirish orqali ====
          B.Xizmatlar xarajatini kamaytirish orqali ==== S.Yangi
          texnologiyalarni qo'llash orqali ==== D.Xizmatlar xarajatini
          kamaytirish orqali +++++ 19.Sog'liqni saqlash inson kapitalining qaysi
          jihatiga ta'sir qiladi? ==== A. Jismoniy va ruhiy salomatlikka ====
          B.Moliyaviy resurslarga ==== S.Ishlash qobiliyatiga ==== D.Moliyaviy
          qarorlar qabul qilishga 20.Qanday qilib shaxsiy moliyani
          rejalashtirish orqali inson kapitalini samarali boshqarish mumkin?
          ==== A. Tejash va investitsiya qilish orqali ==== B.Ko'proq qarz olish
          orqali ==== S.Faqat ko'proq pul ishlash orqali ==== D.Moliyaviy
          maslahatchilardan voz kechish orqali 21.Ta'lim va malaka oshirish
          inson kapitaliga qanday ta'sir ko'rsatadi? ==== A. Daromad
          imkoniyatlarini oshiradi ==== B.Ish tajribasini kamaytiradi ====
          S.Xarajatlarni oshiradi ==== D.Moliyaviy xavflarni oshiradi 22.Inson
          kapitalining baholanishi qanday amalga oshiriladi? ==== A. Bilim,
          ko'nikma, sog'liq va ish tajribasi asosida ==== B.Faqat moliyaviy
          ko'rsatkichlar asosida ==== S.Faqat daromad asosida ==== D.Faqat
          xarajatlar asosida 23.Ish tajribasi inson kapitalining qaysi jihatiga
          ta'sir qiladi? ==== A. Bilim va ko'nikmalarga ==== B.Moliyaviy
          resurslarga ==== S.Sog'liq va farovonlikka ==== D.Ko'chmas mulk
          qiymatiga 24.Professional aloqalar inson kapitaliga qanday ta'sir
          ko'rsatadi? ==== A. Tarmoq va imkoniyatlarni oshiradi ==== B.Shaxsiy
          moliyaviy qarorlarni yomonlashtiradi ==== S.Xarajatlarni oshiradi ====
          D.Moliyaviy xavflarni oshiradi 25.Inson kapitalini rivojlantirish
          uchun qanday investitsiyalar qilish mumkin? ==== A. Ta'lim va malaka
          oshirish ==== B.Qimmatli buyumlar sotib olish ==== S.Kredit olish ====
          D.Qimmatbaho qog'ozlar sotish 26.Quyidagilardan qaysi biri inson
          kapitalining asosiy komponenti emas? ==== A. Avtomobil ==== B.Ta’lim
          ==== S.Sog‘liq ==== D.Kasbiy malaka 27.Inson kapitalining moliyaviy
          qarorlar qabul qilishdagi roli nimadan iborat? ==== A. Moliyaviy
          qarorlarni samarali qabul qilish imkoniyatlarini oshirish ==== B.Faqat
          daromad miqdorini oshirish ==== S.Faqat xarajatlarni kamaytirish ====
          D.Moliyaviy qarorlar qabul qilishda ahamiyatsiz 28.Inson kapitalining
          shaxsiy moliyani rejalashtirishdagi asosiy vazifasi nima? ==== A.
          Moliyaviy farovonlikka erishishni qo‘llab-quvvatlash ==== B.Moliyaviy
          tavakkalchiliklarni oshirish ==== S.Moliyaviy xarajatlarni
          ko‘paytirish ==== D.Moliyaviy qarorlar qabul qilishni
          murakkablashtirish 29.Moliyaviy savodxonlikning inson kapitaliga
          ta'siri qanday? ==== A. Moliyaviy qarorlarni aniq va samarali qabul
          qilishni ta'minlaydi ==== B.Faqat daromadni oshiradi ==== S.Hech
          qanday ta'sir qilmaydi ==== D.Xarajatlarni oshiradi 30.Quyidagi
          strategiyalardan qaysi biri inson kapitalini oshirishga qaratilgan?
          ==== A. Ta'lim olish va sog‘lom turmush tarzini saqlash ==== B.Uy-joy
          xarid qilish ==== S.Keraksiz xaridlar qilish ==== D.Moliyaviy qarz
          olish 31.Shaxsiy moliyaviy rejalashtirishda asosiy maqsadlarni
          aniqlashda birinchi qadam nima bo'lishi kerak? ==== A. Moliyaviy
          maqsadlarni aniqlash ==== B.Harajatlarni kamaytirish ==== S.Kredit
          olish ==== D.Jamg'arma hisobini ochish 32.Byudjet tuzishda qanday
          bosqichlar mavjud? ==== A. Daromadlarni tahlil qilish, xarajatlarni
          nazorat qilish, maqsadlarni aniqlash ==== B.Faqat daromadlarni tahlil
          qilish ==== S.Xarajatlarni kamaytirish ==== D.Kredit olish 33.Qanday
          qilib daromad va xarajatlarni balansda ushlab turish mumkin? ==== A.
          Daromadlarni ko'paytirish va xarajatlarni kamaytirish orqali ====
          B.Faqat xarajatlarni oshirish orqali ==== S.Faqat qarz olish orqali
          ==== D.Moliyaviy maqsadlarni belgilash orqali 34.Investitsiya
          qarorlarini qabul qilishda nimalarga e'tibor berish kerak? ==== A.
          Investitsiya risklariga, diversifikatsiyaga va kutilayotgan
          daromadlarga ==== B.Faqat kutilayotgan daromadlarga ==== S.Faqat
          investitsiya miqdoriga ==== D.Faqat risklarga 35.Qarz olish qarorini
          qabul qilishda qanday omillarni hisobga olish lozim? ==== A. Kredit
          foiz stavkasi, qaytarish muddatlari va qarzning umumiy miqdori ====
          B.Faqat kredit foiz stavkasi ==== S.Faqat qarzning umumiy miqdori ====
          D.Faqat qaytarish muddatlari 36.Moliyaviy xavflarni boshqarish uchun
          qanday choralar ko'rish mumkin? ==== A. Diversifikatsiya qilish va
          sug'urta polislarini olish ==== B.Faqat daromadlarni oshirish ====
          S.Faqat sug'urta polislarini olish ==== D.Faqat xarajatlarni
          kamaytirish 37.Favqulodda holatlar uchun jamg'arma tuzishda qanday
          qoidalar mavjud? ==== A. 3-6 oylik yashash xarajatlariga teng
          mablag'ni jamg'arish ==== B.Faqat 1 oylik yashash xarajatlariga teng
          mablag'ni jamg'arish ==== S.Faqat daromadni jamg'arish ==== D.Kredit
          olish orqali jamg'arish 38.Soliq rejalashtirish shaxsiy moliyaviy
          qarorlar qabul qilishda qanday rol o'ynaydi? ==== A. Soliqlarni
          kamaytirish va investitsiya rejalashtirishda yordam beradi ====
          B.Faqat soliqlarni oshiradi ==== S.Faqat daromadlarni oshiradi ====
          D.Faqat xarajatlarni oshiradi 39.Qisqa muddatli moliyaviy maqsadlarga
          erishish uchun qanday choralar ko'rish kerak? ==== A. Aniq va
          o'lchamli maqsadlar belgilash, byudjet tuzish va xarajatlarni nazorat
          qilish ==== B.Faqat byudjet tuzish ==== S.Faqat xarajatlarni nazorat
          qilish ==== D.Faqat daromadlarni oshirish 40.Uzoq muddatli moliyaviy
          maqsadlarga erishish uchun qanday rejalar tuzish mumkin? ==== A.
          Investitsiya strategiyasi, pensiya rejalashtirish va mulk sotib olish
          ==== B.Faqat investitsiya strategiyasi ==== S.Faqat pensiya
          rejalashtirish ==== D.Faqat mulk sotib olish 41.Moliyaviy maqsadlarni
          belgilashda qanday tamoyil qo‘llaniladi? ==== A. SMART tamoyili ====
          B.Qo‘shni bilan maslahatlashish ==== S.Televizordagi moliyaviy
          yangiliklarni kuzatish ==== D.Oila a'zolarining fikrlarini hisobga
          olish 42.Qarzlarni boshqarish rejasini tuzishda eng muhim qadam nima
          hisoblanadi? ==== A. Barcha qarzlarni to‘liq sanab chiqish va ularni
          to‘lash uchun reja tuzish ==== B.Foiz stavkalari bo‘yicha savdo-sotiq
          qilish ==== S.Kengash olish uchun do‘stlardan maslahat so‘rash ====
          D.Barcha qarzlarni bir bankda birlashtirish 43.Favqulodda holatlar
          uchun zaxira jamg‘armasi qanday maqsadni ko‘zlaydi? ==== A. Kutilmagan
          vaziyatlarda moliyaviy barqarorlikni saqlash ==== B.Moliyaviy
          maqsadlarga erishishni tezlashtirish ==== S.Ko‘proq investitsiya
          imkoniyatlarini yaratish ==== D.Noqonuniy faoliyatlarni
          moliyalashtirish 44.Investitsiya portfelini diversifikatsiya qilish
          nimani anglatadi? ==== A. Investitsiyalarning turli-tumanligini
          oshirish orqali xavflarni kamaytirish ==== B.Barcha mablag‘ni bitta
          aktivga joylashtirish ==== S.Faqat bir soha yoki kompaniyaga
          investitsiya qilish ==== D.Barcha mablag‘ni naqd pulda saqlash
          45.Moliyaviy rejalashtirish jarayonida qanday qilib daromad va
          xarajatlarni boshqarish mumkin? ==== A. Har bir xarajatni yozib borish
          va daromadni oshirish imkoniyatlarini izlash ==== B.Xarajatlarni
          e'tiborsiz qoldirish va faqat daromadni oshirishga e'tibor qaratish
          ==== S.Kredit kartalaridan ko‘proq foydalanish ==== D.Do‘stlarning
          moliyaviy odatlarini nusxalash 46.Moliyaviy rejalashtirish nima? ====
          A. Moliyangizni qanday boshqarishingiz va yuzaga kelishi mumkin
          bo'lgan barcha xarajatlar ==== B.Samarali moliyaviy maslahatchi ====
          S.Mijozlarga muayyan soliq masalalarini hal qilishda yordam berish
          ==== D.Soliqlarni tayyorlash va yillik soliqlarni topshirish
          47.Quyidagilar orasida to’g’ri berilgan ta’rifni toping ==== A.
          Moliyaviy rejalashtirish, aktivlarni boshqarish bilan bir xil emas
          ==== B.Aktivlarni boshqarish xizmatlarini taklif qiladigan
          mutaxassislar moliyaviy rejalashtirishni pul evzaiga taqdim etadilar
          ==== S.Qimmatbaho buyumlar sotib olish uchun moliyaviy mutaxassis jalb
          etish zarur ==== D.Kredit olishda moliyaviy rejalashtirishning
          aktivlarini yo’naltirish kerak 48.Soliq rejalashtirishga nima kiradi?
          ==== A. Soliq to'lovlarini maksimal darajada oshirish va soliq
          majburiyatlarini minimallashtirishni aniqlash ==== B.O'limdan keyin
          yaqinlar uchun narsalarni biroz osonlashtirish ==== S.Sizning
          farzandlaringiz yoki boshqa qaramog'ingizda kollej darajasini olishni
          xohlovchilar bo'lsa, ularga pul to'lashda yordam berish ====
          D.Investitsiya portfelingizga qancha investitsiya kiritishingiz
          kerakligini va qaysi turdagi investitsiyalarni xaritalash orqali
          49.Moliyaviy rejalashtiruvchi tomonidan taklif qilinadigan aniq
          xizmatlar qanday o’zgaradi? ==== A. Shaxsga qarab ==== B.Moliyaviy
          resurslarga qarab ==== S.Ishlash qobiliyatiga qarab ==== D.Moliyaviy
          qarorlar qabul qilishga qarab 50.Sof qiymatingizni o'lchashga nima
          kiradi? ==== A. O'zingizga tegishli bo'lgan hamma narsani jamlash va
          qarzingiz bo'lgan hamma narsani hisoblash ==== B.Daromad
          imkoniyatlarini tahlil qilish ==== S.Shaxsiy moliyaviy qarorlarni
          natijaviyligini aniqlash ==== D.Moliyaviy rejalarning asosliligini
          aniqlash 51.Moliyaviy rejalashtirishdajarayonning birinchi bosqichi
          aniq maqsadlarni qo'yish nimani anglatadi? ==== A. Moliyaviy
          maqsadlarni belgilashni ==== B.Moliyaviy rejalashtirish strategiyasini
          ==== S.Moliyaviy rejalashtirish vazifalarini ==== D.Moliyaviy
          rejalashtirish qarz majburiyatlarini 52.Moliyaviy rejani tuzish uchun
          qanday ma'lumotlar kerak? ==== A. Aktiv, qarz, daromad va xarajat ====
          B.Aktiv, passiv, debet va kredit ==== S.Daromad va xarajat, soliq ====
          D.Faqat xarajatlar 53.Moliyaviy rejalashtirishning
          muvaffaqiyatsizligi? ==== A. Xarajatlarning o’rniga faqar daromad
          olinishi ==== B.Qarzlarni yopishni inobatga olish xolos ====
          S.Jamg’arma uchun moliyani to’plashni inobatga olish xolos ====
          D.Ko'chmas mulk uchun mablag’ni sarflash xolos 54.Moliyaviy
          rejalashtirishda resurslar tanlovi nimani anglatadi? ==== A. Moliyani
          muvozanatlash ==== B.Mablag’ tejamkorligi ==== S.Investitsiya ====
          D.Xarajatlar cheklash 55.Moliyaviy rejani amalga oshrish uchun zaruriy
          shartlar? ==== A. Daromad va xarajat ==== B.Daromad va sarmoya ====
          S.Sarmoya va g’oya tadbig’i ==== D.Jamg’arma va qarz 56.Moliyaviy
          rejaning asosiy maqsadi nimadan iborat? ==== A. Moliya egasining
          mablag’ini oqilona boshqarish ==== B.Moliya egasining farovonligini
          ta’minlash ==== S.Moliya egasining o’z mabla’gini oshirish ====
          D.Moliya egasining moliyasini daromadga yo’naltirish 57.Moliyaviy
          rejalashtirish quyidagilarning qaysi biri noo’rin qo’llanilgan? ====
          A. Risklarni rejalshtirish ==== B.Soliqni rejalashtirish ====
          S.Pensiyani rejalashtirish ==== D.Kreditni rejalashtirish 58.Moliyaviy
          rejalashtirshni uzoq muddatga mo’ljallash nimani talab etadi? ==== A.
          Moliyaviy tavakkalchiliklarni inobatga olishni ==== B.Strategiyani
          qo’llashni ==== S.Moliyaviy xarajatlarni tahlil qilishni ====
          D.Sarmoyaviy tejamkorlikni 59.Shaxsiy daromadni rejalashtirish nimani
          beldilab beradi? ==== A. Kelajakdagi moliyaviy ahvolimizni ====
          B.Kelajakdagi moliyaviy jamg’armani ==== S.Kelajakdagi hayotiy
          farovonlikni ==== D.Kelajakdagi qarz mablag’larini boshqarishni
          60.Moliyaviy rejalashtirishda nimaga e’tibor berish lozim? ==== A.
          Reja vaqtiga, maqsadga hamda nechta odamgaligi ==== B.Rejadagi
          daromadga ==== S.Rejadagi mabla’gni to’plash uchun qarz hajmiga ====
          D.Moliyaviy mutaxassislar maslahatiga 61.Nima xarid qobiliyatining
          pasayishi va tovarlar va xizmatlar narxining oshishi sanaladi? ==== A.
          inflyatsiya ==== B.inqiroz ==== S.investitsiya ==== D.Jamg’arma
          62.Naqd pulni saqlash uchun eng xavfsiz joyni toping ==== A. Muddatli
          depozitlar ==== B.Aktiv depozitlar ==== S.Qimmatbaho depozitlar ====
          D.Muddatsiz depozitlar 63.Inflyatsiya qanday o’lchanadi? ==== A.
          Narxlar indeksining yondashuvi orqali ==== B.Sifat indeksiga ko’ra
          yondashuv ==== S.Inflyatsion dinamikaga qarab ==== D.Foiz stavkalaiga
          qarab 64.Murakkab foiz nima? ==== A. haqiqiy foiz stavkasi narxlarning
          ko'tarilishi oqibatlarini hisobga olgan holda investitsiya natijasida
          olingan yoki yo'qotilgan haqiqiy xarid qobiliyati ==== B.inflyatsiyaga
          ijobiy va salbiy ta'sir ko'rsatishi mumkin bo'lgan iqtisodiy element
          ==== S.inflyatsiya darajasidan ko'proq yoki kamroq bo'lishiga bog'liq
          element ==== D.investitsiya qilingan pulning sotib olish qobiliyati
          65.Haqiqiy foiz stavkalari qiymatni saqlab qolishga qanday yordam
          beradi? ==== A. tovarlar va xizmatlar narxini hisobga olgan holda
          investitsiyadan olinadigan daromadni aniqroq tushunish orqali ====
          B.narxlarning ko'tarilishi oqibatlarini hisobga olgan holda
          investitsiya natijasida ==== S.investitsiya qilingan pulingizning
          sotib olish qobiliyati orqali ==== D.Murakkab foizlardan foydalanish
          orqali 66.Uzoq muddatli obligatsiyalar past foiz stavkalari ostida
          uzoq vaqt davomida muammoga duch kelasa bu nimani anglatadi? ==== A.
          investitsiyalarga nisbatan kamroq foiz orttirishini ====
          B.investitsiyalarga nisbatan ko’proq foiz orttirishini ====
          S.investitsiyalarga nisbatan murakkab foiz yo’qotilishini ====
          D.investitsiyalarga nisbatan barcha imtiyozlarning yo’qotilishini
          67.Depozit sertifikatlari sarmoya uchun belgilangan muddatga egaligi
          nimani anglatadi? ==== A. inflyatsiya ko'tarilayotganda shunchaki
          sertifikat hisobvarag'idan pulni olib tashlay olmaslik ====
          B.inflyatsiya ko'tarilayotganda shunchaki sertifikat hisobvarag'iga
          pulni qo’sha olmaslik ==== S.inflyatsiya pasayotganda shunchaki
          sertifikat hisobvarag'idan pulni olib tashlay olmaslik ====
          D.inflyatsiya pasayotganda shunchaki sertifikat hisobvarag'iga pulni
          qo’sha olmaslik +++++ 68.Inflyatsiyani oldindan aytib bo'lmaydi va bu
          ko'pincha eng xavfsiz hisoblangan jamg'arma turlariga, masalan,
          obligatsiyalar va depozit sertifikatlariga ta'sir qiladi. Nega? ====
          A. chunki ular xavfsiz deb hisoblanadi ==== B.chunki ular preferensial
          deb hisoblanadi nvestitsiya ==== S.chunki ular xavli deb hisoblanadi
          ==== D.chunki ular alternativ deb hisoblanadi 69.Nega yuqori va past
          inflyatsiya zararli bo'lishi mumkin? ==== A. chunki ikkalasi ham
          mamlakatning iqtisodiy faoliyati va biznes sharoitlariga to'sqinlik
          qilishi mumkin ==== B.naqd pul stavkasini oshirish inflyatsiya
          darajasini pasaytiradi ==== mehnat bozoriga ijobiy ta’sir etadi S.====
          D.inflyatsiyaning yuqori darajasi investitsiyalar bo'yicha
          daromadlarni jiddiy ravishda kamaytirishi mumkin 70.Faoliyatni davom
          ettirish uchun eng muhim qisqa muddatli jamg'arma maqsadlaridan biri
          nima sanaladi? ==== A. Favqulodda vaziyatlar jamg'armasi ====
          B.Favqulodda vaziyatlar qarzi ==== S.Favqulodda vaziyatlar sug’urtasi
          ==== D.Favqulodda vaziyatlar sarmoyasi 71.Yuqori inflyatsiya asosi
          xossasi nimadan iborat? ==== A. Qisqa muddatli ==== B.Vaqtinchalik
          ==== S.Uzoq muddatli ==== D.O’rta muddatli 72.Inflyatsiyani o'z
          maqsadlari doirasida ushlab turishga yordam berish uchun kim tomonidan
          nazorat qilinadi? ==== A. Markaziy bank ==== B.Moliyachilar ====
          S.Bankirlar ==== D.Sarmoyadorlar 73.Inflyatsiya investitsion
          qarorlarga ham ta'sir qiladi, chunki… ==== A. inflyatsiyaning yuqori
          darajasi investitsiyalar bo'yicha daromadlarni jiddiy ravishda
          kamaytirishi mumkin ==== B.inflyatsiyaning yuqori darajasi
          investitsiyalar bo'yicha xarajatlarni jiddiy ravishda kamaytirishi
          mumkin ==== S.inflyatsiyaning yuqori darajasi investitsiyalar bo'yicha
          daromadlarni jiddiy ravishda oshirishi mumkin ==== D.inflyatsiyaning
          yuqori darajasi investitsiyalarni kamaytirishi mumkin 74.Muddatli
          omonat bilan sizga foizlar muddati tugashi bilan (muddatingiz tugashi)
          yoki depozitingiz qancha davom etganiga qarab qanday to’lanadi? ====
          A. har xil bo'lib to'lanadi ==== B.omonat hisobvaraqlari har oy
          foizlarni to'laydi ==== S.omonat hisobvaraqlarini qo'shishga imkon
          beradi ==== D.bozor indeksi hisob varag'iga investitsiya qilishga
          yordam beradi 75.Bank bo'yicha o'tkaziladigan pul foizlar va bank
          omonati shartnomasida belgilangan qaytarish shartlari nima deb
          ataladi? ==== A. Bank depoziti ==== B.depozit ==== S.Foiz stavkasi
          ==== D.transmissiya 76.Bank depozitini saqlash, jamg'arish va
          ko'paytirish uchun nima ishlatiladi? ==== A. Naqd pul ==== B.veksellar
          ==== S.Qimmatbaho qog’ozlar ==== D.Dividentlar 77.Kutilganidan farqli
          natijaga erishish imkoniyati deb nimaga aytiladi? ==== A. Risk ====
          B.depozit ==== S.Foiz stavkasi ==== D.Jamg’arma 78.Bank depozitiga
          xavf solishi mumkin bo’lgan misolni tanlang ==== A. Valyuta kursining
          o'zgarishi tufayli kamroq daromad olish ==== B.shaxs tomonidan
          kreditga o'tkazilgan pul summasi ==== S.pul munosabatlarining
          boshlanishi ==== D.foydadan mahrum bo'lish 79.Moliyaviy risklarning
          qaysi turi ortiqchaligini ko’rsating ==== A. bankning ishdan chiqishi
          xavfi ==== B.Rentabellik xafvi ==== S.depozit stavkalarining
          o'zgarishi xavfi ==== D.qayta investitsiya qilish xavfi 80.Bankning
          inqirozga ichrashi nima deb ataladi? ==== A. defolt ==== B.nolikvidlik
          ==== S.inqiroz ==== D.inflyatsiya 81.Omonatlarni sug‘urtalash tizimi
          nimani ta’minlashdi? ==== A. omonatchilarga o‘z pullarining
          xavfsizligini ==== B.omonatchilarga o‘z pullarining jamg’arilishini
          ==== S.omonatchilarga o‘z pullarining dahlsizligini ====
          D.omonatchilarga o‘z pullarining mavjudligini 82.Nima bank
          depozitlari, bank hisobvaraqlari va jamg'arma sertifikatlaridagi
          mablag'larni qamrab oladi? ==== A. Depozitlarni sug'urtalash tizimi
          ==== B.Sug’urtalash ==== S.Omonat ==== D.Elktron pullar 83.Qoidaga
          ko'ra, muddat qanchalik qisqa bo'lsa, Stavka… ==== A. Shunchalik past
          bo’ladi ==== B.Shunchalik yuqori bo’ladi ==== S.Shunchalik teng
          taqsimlangan bo’ladi ==== D.Shuncha xavfi yuqori bo’ladi 84.Depozit
          stavkalarining o'zgarishi xavfini boshqarish uchun nima qilish lozim?
          ==== A. omonatlarni sug'urtalash tizimiga kiritilganligiga ishonch
          hosil qilish ==== B.murakkab foizlar va hisobvaraqdan pulni qisman
          muddatidan oldin yechib olish ==== S.omonatlaringizni uzoqroq muddatga
          cho’zish ==== D.Yo'qotilgan foyda xavfini sug’urtalash 85.Qanday
          depozit ikki baravar foyda keltiradi? ==== A. Uzoq ==== B.Qisqa ====
          S.Muddatsiz ==== D.Qayta investitsiya qilinadigan 86.Valyutaning eng
          yirik riski nimadan iborat? ==== A. O’zgarib turishi ====
          B.Nolikvidligi ==== S.Doimiy muomalada ekanligi ====
          D.Sug’urtalanmaganligi 87.Pul qadrsizlansa nima yuzaga keladi? ==== A.
          Narxlar oshadi ==== B.Valyuta oqimi kirib keladi ==== S.Qarzlar oshadi
          ==== D.Omonat yemiriladi 88.Davlat nimani sug‘urta qiladi? ==== A.
          Omonatni ==== B.elektron pullarni ==== S.bankka ishonchli boshqaruvga
          o‘tkazilgan mablag‘larni ==== D.banklarning xorijiy filiallarida
          ochilgan omonatlarni 89.Depozit shartnomasining asosiy shartlaridan
          biri sifatida quyidagilardan qaysilarini kiritish mumkin? ==== A. Foiz
          stavkasi ==== B.Omonat ==== S.Sug’urta ==== D.Veksellar qiymati
          90.Kredit nima? ==== A. Pulni vaqtincha olish ==== B.Mulk sotib olish
          ==== S.Moliya rejalashtirish ==== D.Investitsiya qilish 91.Kredit
          balli nima? ==== A. Shaxsning kredit qobiliyatini ifodalovchi raqam
          ==== B.Kredit miqdori ==== S.Kreditning foiz stavkasi ==== D.Kredit
          tarixining davomiyligi +++++ 92.Kredit tarixining ahamiyati nima? A.
          Kredit olish imkoniyatini oshiradi ==== B.Mulkni sotib olishda yordam
          beradi ==== S.Pulni tejashga yordam beradi ==== D.Investitsiya qilish
          imkoniyatini oshiradi 93.Kafolatlangan kredit karta nima? ==== A.
          Depozit asosida beriladigan kredit karta ==== B.Bank tomonidan
          beriladigan bepul karta ==== S.Faqat yuqori kredit balliga ega
          bo'lganlarga beriladigan karta ==== D.Mulk sotib olish uchun
          beriladigan kredit 94.Kreditdan foydalanish foizi qanday hisoblanadi?
          ==== A. Kredit limitining foizi ==== B.Mavjud kreditning umumiy
          miqdori ==== S.Kredit kartasidagi balans ==== D.Kredit tarixining
          davomiyligi 95.Kredit so'rovlarining ko'pligi kredit balliga qanday
          ta'sir qiladi? ==== A. Ballni pasaytiradi ==== B.Ballni oshiradi ====
          S.Ta'sir qilmaydi ==== D.Faqat vaqtincha pasaytiradi 96.Kreditning
          foiz stavkasi nima? ==== A. Kreditni olish uchun to'lanadigan
          qo'shimcha pul ==== B.Kredit miqdorining o'zgarishi ==== S.Kredit
          tarixining davomiyligi ==== D.Kredit kartasining yillik to'lovi
          97.Kreditni qanday qilib to'g'ri boshqarish mumkin? ==== A. Vaqtida
          to'lovlarni amalga oshirish ==== B.Har doim minimal to'lovni amalga
          oshirish ==== S.Kreditni o'z vaqtida to'lashdan qochish ==== D.Faqat
          yangi kreditlar olish 98.Kredit kartasining yillik to'lovi nima? ====
          A. Kredit kartasini saqlash uchun to'lanadigan pul ==== B.Kredit
          miqdorining foizi ==== S.Kredit tarixining davomiyligi ==== D.Kreditni
          olish uchun to'lanadigan qo'shimcha pul 99.Kreditni qaytarish muddati
          nima? ==== A. Kreditni to'lash uchun belgilangan vaqt ==== B.Kreditni
          olish muddati ==== S.Kredit tarixining davomiyligi ==== D.Kredit
          kartasining amal qilish muddati 100.Kreditni olishda eng muhim omil
          nima? ==== 101. Kredit kartasidan foydalanishning asosiy afzalliklari
          nimalardan iborat? ==== A. Tez xarid qilish va to'lovlarni amalga
          oshirish ==== B.Faqat naqd pul bilan ishlash ==== S.Mulk sotib olish
          ==== D.Kredit tarixini yo'qotish ==== +++++ 102. Kredit kartasining
          limitini oshirish uchun nima qilish kerak? ==== A. Kredit ballini
          oshirish ==== B.Har doim minimal to'lovni amalga oshirish ==== S.Faqat
          yangi kreditlar olish ==== D.Bank bilan bog'lanish ==== +++++ 103.
          Kredit kartasining foiz stavkasi qanday aniqlanadi? ==== A. Kredit
          balli ==== B.Bankning ichki siyosati ==== S.Kredit tarixining
          davomiyligi ==== D.Mijozning daromadi ==== +++++ 104. Kreditni
          to'lashda qanday xatolarni qilmaslik kerak? ==== A. To'lovlarni
          kechiktirish ==== B.Vaqtida to'lovlarni amalga oshirish ====
          S.Kreditni o'z vaqtida to'lash ==== D.Har doim minimal to'lovni amalga
          oshirish ==== +++++ 105. Kichik biznes uchun yaxshi kredit
          yaratishning asosiy maqsadi nima? ==== A. Moliyaviy manbalardan
          foydalanish va ishonchlilikni oshirish ==== B.Foydani oshirish uchun
          ==== S.Moliyaviy savodxonlikni oshirish ==== D.Xarajatlarni
          kamaytirish uchun ==== +++++ 106. Quyidagilardan qaysi biri kichik
          biznes uchun yaxshi kredit baliga ega bo'lishning afzalligi
          hisoblanadi? ==== A. Kreditlar bo‘yicha foiz stavkalarining pasayishi
          ==== B.Yuqori sug‘urta mukofotlari ==== S.Kreditga nisbatan qat’iy
          talablar ==== D.Kapitalga kirishning cheklanganligi ==== +++++ 107.
          Quyidagilardan qaysi biri kichik biznesni sotish uchun kredit
          strategiyasi hisoblanadi? ==== A. Kuchli kredit profilini yaratish
          ==== B.Mijozlarga chegirmalar taklif qilish ==== S.Ijtimoiy
          tarmoqlarda mavjudligini yaratish ==== D.Yangi mahsulot qatorini ishga
          tushirish ==== +++++ 108. Biznes kredit balining maqsadi nima? ==== A.
          Kredit olish imkoniyatini aniqlash uchun ==== B.Xodimlarning ish
          faoliyatini baholash uchun ==== S.Mijozlarning qoniqishini baholash
          uchun ==== D.Marketing harakatlarini o'lchash uchun ==== +++++ 109.
          Quyidagilardan qaysi biri biznesning kredit reytingiga ta'sir qiluvchi
          omil hisoblanadi? ==== A. Yuqoridagilarning barchasi ==== B.Sanoat
          turi ==== S.Foydalanish yillari ==== D.Daromadlarning o'sishi ====
          +++++ 110. Shaxsiy va biznes kreditini ajratishning foydasi nimada?
          ==== A. Shaxsiy aktivlarni himoya qilish va biznes kreditini yaratish
          ==== B.Biznes xarajatlarini kamaytirish uchun ==== S.Shaxsiy kredit
          limitlarini oshirish uchun ==== D.Mijozlar bilan munosabatlarni
          yaxshilash ==== +++++ 111. Nima uchun kichik biznes egalari uchun
          biznes kredit profilini yaratish juda muhim? ==== A. Kuchli moliyaviy
          poydevor qurish ==== B.Shaxsiy kredit olish uchun ==== S.Daromadni
          oshirish uchun ==== D.Raqobatni kamaytirish uchun ==== +++++ 112.
          Biznes kredit skoringida kreditdan foydalanish koeffitsientining
          maqsadi nima? ==== A. Kreditdan foydalanishga qarab kredit olish
          imkoniyatini aniqlash ==== B.Daromadlar o'sishini baholash uchun ====
          S.Xodimlar faoliyatini baholash uchun ==== D.Marketing harakatlarini
          o'lchash uchun ==== +++++ 113. Nima uchun kichik biznes egalari kredit
          va moliyaviy savodxonlikka ustuvor ahamiyat berishlari kerak? ==== A.
          Kuchli moliyaviy poydevor qurish va biznes qarorlarini asosli qabul
          qilish ==== B.Foydani oshirish uchun ==== S.Mijozlarga xizmat
          ko'rsatishni yaxshilash ==== D.Xarajatlarni kamaytirish uchun ====
          +++++ 114. Kichik biznesingiz marketingida kredit moliyaviy
          savodxonligining asosiy maqsadi nima? ==== A. asoslangan moliyaviy
          qarorlar qabul qilish ==== B.pul oqimlarini boshqarishni
          takomillashtirish ==== S.kredit ballarini oshirish uchun ==== D.qarzni
          kamaytirish uchun ==== +++++ 115. Nima uchun biznes kredit
          hisobotlarini muntazam ravishda kuzatib borish muhim? ==== A. xatolar
          yoki noaniqliklarni aniqlash uchun ==== B.Kredit ballarini tezda
          yaxshilash ==== S.kredit so'rovlarini kamaytirish uchun ==== D.Kredit
          monitoringi zaruriyatini bartaraf etish ==== +++++ 116. Tavsiya
          etilgan kreditdan foydalanish koeffitsienti qanday? ==== A. 30% ====
          B.50% ==== S.20% ==== D.10% ==== +++++ 117. Kredit hisobotini
          monitoring qilishdan maqsad nima? ==== A. aniqlikni ta'minlash va
          xatolarni aniqlash ==== B.yangi kredit imkoniyatlarini aniqlash ====
          S.Kredit balingizni yaxshilash uchun ==== D.Raqobatchilar bilan
          solishtirish ==== +++++ 118. Turli xil kredit turlarini aralashtirib
          yuborishdan qanday foyda bor? ==== A. kreditni diversifikatsiya
          qilishga yordam beradi ==== B.kreditdan foydalanishni kamaytiradi ====
          S.kredit tarixini yaxshilaydi ==== D.kredit balini oshiradi ==== +++++
          119. Kredit balingizga nima zarar etkazishi mumkin? ==== A.
          Kechiktirilgan to‘lovlar va undirmalar ==== B.o'z vaqtida to'lash ====
          S.Kreditdan past foydalanish ==== D.kredit so'rovlari ==== +++++ 120.
          Pulni tejashning asosiy maqsadi nima? ==== A. Uzoq muddatli
          maqsadlarga erishish ==== B.hashamatli narsalarga sarflash ====
          S.boshqalarni hayratda qoldirish uchun ==== D.pul yig'ish ==== +++++
          121. Quyidagilardan qaysi biri favqulodda vaziyatlar fondiga ega
          bo‘lishning foydasi hisoblanadi? ==== A. moliyaviy xavfsizlikni
          ta'minlaydi ==== B.impulsli xaridlarni amalga oshirish imkonini beradi
          ==== S.Yuqori foiz stavkalarini oladi ==== D.Bu faqat qisqa muddatli
          maqsadlar uchun ==== +++++ 122. Jamg'arma va investitsiya o'rtasidagi
          farq nima? ==== A. tejash qisqa muddatli maqsadlar uchun,
          investitsiyalar uzoq muddatli maqsadlar uchun ==== B.Tejamkorlik uzoq
          muddatli maqsadlar uchun, investitsiyalar qisqa muddatli maqsadlar
          uchun ==== S.Tejamkorlik faqat favqulodda vaziyatlar uchun, sarmoya
          qilish esa hashamat uchun ==== D.Tejamkorlik faqat hashamat uchun,
          investitsiya favqulodda vaziyatlar uchun ==== +++++ 123. Pulni
          samarali tejash uchun byudjetni qanday yaratish mumkin? ==== A.
          Xarajatlarni kuzatish orqali ==== B.Xarajatlarni hisobga olmaslik
          orqali ==== S.ko'proq pul sarflash orqali ==== D.kamroq daromad olish
          orqali ==== +++++ 124. Pulni tejashda odamlar qanday xatolarga yo'l
          qo'yishadi? ==== A. Barcha javoblar to’gri ==== B.byudjetga ega emas
          ==== S.Maqsadlarni birinchi o'ringa qo'ymaslik ==== D.tejashni
          avtomatlashtirmaslik ==== +++++ 125. Investitsiya ishlari nima uchun
          kerak? ==== A. Uzoq maqsadlarga erishish uchun ==== B.Ko'proq pul
          uchun ==== S.Arzonroq pul o'tkazmalari uchun ==== D.Hech qanday foyda
          yo'q ==== +++++ 126. Xalqaro pul o'tkazmalarini qanday soddalashtirish
          mumkin? ==== A. Onlayn platformalardan jo'natish orqali ==== B.Faqat
          banklarda ==== S.Faqat valyuta ayirboshlash uylarida ==== D.Banklarda
          va valyuta ayirboshlash uylarida ==== +++++ 127. Pul o'tkazmalari
          qimmat bo'lishi mumkin nima uchun? ==== A. Xalqaro pul
          o'tkazmalarining qimmatligi ==== B.Kutilmagan zararni oldini olish
          uchun ==== S.Intizomning kuchayishi ==== D.Banklarda va valyuta
          ayirboshlash uchun ==== +++++ 128. Valyutani solishtiring nima uchun
          kerak? ==== A. Valyuta kurslari farqlarini belgilash ==== B.Kutilmagan
          zararni boshdan kechirmaslik uchun ==== S.Intizomning kuchayishi ====
          D.Xalqaro pul o'tkazmalarining qimmatligi ==== +++++ 129. Kirish
          takliflari va muntazam chegirmalarni qidiring nima uchun? ==== A.
          Arzonroq pul o'tkazmalari uchun ==== B.Ko'proq pul uchun ====
          S.Ko'proq foydalanishlikka erishingiz uchun ==== D.Hech qanday foyda
          yo'q ==== +++++ 130. O'tkazma nima uchun muhim? ==== A. Tez o'tkazish
          uchun ==== B.Ko'proq pul uchun ==== S.Ko'proq foydalanishlikka
          erishingiz uchun ==== D.Hech qanday foyda yo'q ==== +++++ 131. Pulni
          foydalanish nima uchun muhim? ==== A. Tejamkorlikka erishish uchun
          ==== B.Ko'proq pul uchun ==== S.Ko'proq foydalanishlikka erishingiz
          uchun ==== D.Hech qanday foyda yo'q ==== +++++ 132. To'lovni yaratish
          nimalarga bog’liq? ==== A. To’lov tarixiga ==== B.Intizom uchun ====
          S.Uzoq muddatli maqsad uchun ==== D.To’g’ri javob yo’q ==== +++++ 133.
          Onlayn platformalardan nima uchun foydali? ==== A. Arzonroq pul
          o'tkazmalari uchun ==== B.Ko'proq pul uchun ==== S.Ko'proq
          foydalanishlikka erishingiz uchun ==== D.Hech qanday foyda yo'q ====
          +++++ 134. Pulni va foydalanish o'ziga xos farqlik nima? ==== A.
          Puldan jismoniy foydalanish ==== B.Intizom uchun ==== S.Uzoq muddatli
          maqsad uchun ==== D.To’g’ri javob yo’q ==== +++++ 135. Masofaviy bank
          nima? ==== A. raqamli banking turi ==== B.Onlayn banking turi ====
          S.mobil banking turi ==== D.An'anaviy bank faoliyatining bir turi ====
          +++++ 136. Internet-banking nima? ==== A. Mijozlarga o'z hisoblarini
          onlayn boshqarish imkonini beruvchi onlayn-banking turi ==== B.mobil
          banking turi ==== S.An'anaviy bank faoliyatining bir turi ====
          D.raqamli banking turi ==== +++++ 137. Onlayn banking bilan mijozlar
          nima qilishlari mumkin? ==== A. o'z hisoblarini boshqarish,
          to'lovlarni amalga oshirish va hisob balansini tekshirish ==== B.Faqat
          pulni omonatga qo'ying ==== S.Faqat pulni yechib olish ==== D.Faqat
          ularning hisob balansini tekshirinig ==== +++++ 138. SMS-banking nima?
          ==== A. Mijozlarga SMS orqali o'z hisobvaraqlari haqida ma'lumot olish
          imkonini beruvchi mobil banking turi ==== B.mobil banking turi ====
          S.An'anaviy bank faoliyatining bir turi ==== D.raqamli banking turi
          ==== +++++ 139. Onlayn bankingning afzalligi nimada? ==== A. Bu qulay,
          tezkor va mijozlarga o'z hisoblarini onlayn boshqarish imkonini beradi
          ==== B.U faqat 24/7 ishlaydi ==== S.U faqat ma'lum joylarda mavjud
          ==== D.Bu faqat ma'lum mijozlar uchun mavjud ==== +++++ 140. Onlayn
          bankingning kamchiliklari nimada? ==== A. Texnik muammolar va
          xavfsizlik xavflari bo'lishi mumkin ==== B.U faqat 24/7 ishlaydi ====
          S.U faqat ma'lum joylarda mavjud ==== D.Bu faqat ma'lum mijozlar uchun
          mavjud ==== +++++ 141. Onlayn banking xizmatidan foydalanish uchun
          nima kerak? ==== A. Internetga ulangan kompyuter yoki mobil telefon
          ==== B.kompyuter ==== S.mobil telefon ==== D.jismoniy bank filiali
          ==== +++++ 142. Onlayn bankingning banklar uchun qanday foydasi bor?
          ==== A. Operatsion xarajatlarni kamaytiradi va tezroq tranzaksiyalarni
          amalga oshirish imkonini beradi ==== B.qimmatroq ==== S.xavfsizroq
          ==== D.Bu faqat ma'lum mijozlar uchun mavjud ==== +++++ 143. Raqamli
          bankning kelajagi qanday? ==== A. U o'sishda va rivojlanishda davom
          etadi ==== B.mashhurligi pasayadi ==== S.Xuddi shunday bo'lib qoladi
          ==== D.Bu faqat ma'lum mijozlar uchun mavjud ==== +++++ 144. Onlayn
          banking va mobil banking o'rtasidagi asosiy farq nima? ==== A. Mobil
          banking ko'proq imkoniyatlarga ega ==== B.Mobil banking qulayroq ====
          S.Internet-banking tezroq ==== D.Onlayn banking xavfsizroq ==== +++++
          145. Atrof-muhit uchun onlayn-bankingning asosiy afzalligi nimada?
          ==== A. Uglerod izlarining kamayishi ==== B.Qog'ozdan foydalanishning
          ortishi ==== S.Tezkor tranzaktsiyalar ==== D.Mijozlar uchun ko'proq
          qulaylik ==== +++++ 146. Onlayn bankingning banklar uchun asosiy
          foydasi nimada? ==== A. iqtisodiy samaradorlik ==== B.daromadning
          oshishi ==== S.Tezkor tranzaktsiyalar ==== D.Mijozlar uchun ko'proq
          qulaylik ==== +++++ 147. Onlayn banking va an'anaviy banking
          o'rtasidagi asosiy farq nima? ==== A. Qulay va 24/7 ==== B.xavfsizroq
          ==== S.tezkor ==== D.imtiyozli ==== +++++ 148. Onlayn bank
          hisobingizni himoya qilish yo’llaridan quyida berilgan javoblar
          orasida noto’g’risini tanlang? ==== A. Tez-tez mobil ilovani
          almashtirish orqali ==== B.Kuchli parol yordamida ==== S.Ikki faktorli
          autentifikatsiya yordamida ==== D.Umumiy Wi-Fi tarmog'idan qochish
          orqali ==== +++++ 149. Onlayn bankingning asosiy riski nimada? ==== A.
          xavfsizlik ==== B.Texnik jihatlar ==== S.cheklanganlik ==== D.Yuqori
          qiymatli to’lovlar ==== +++++ 150. Firibgarlar sizning shaxsiy
          ma'lumotlaringizni olishning eng keng tarqalgan usuli qanday? ==== A.
          elektron pochta orqali ==== B.Onlayn operatsiyalar orqali ====
          S.telefon qo'ng'iroqlari orqali ==== D.Umumiy Wi-Fi tarmoqlari orqali
          ==== +++++ 151. Agar shubhali elektron pochta yoki xabar olsangiz nima
          qilish kerak? ==== A. E'tibor bermslikg va uni o'chirish ==== B.darhol
          javob bering ==== S.bu haqda hokimiyatga xabar berish ==== D.darhol
          bankka qo'ng'iroq qilish ==== +++++ 152. Onlayn hisoblaringizni himoya
          qilishning eng yaxshi usuli qanday? ==== A. Har bir hisob uchun kuchli
          va noyob paroldan foydalanish ==== B.Barcha hisoblar uchun bir xil
          paroldan foydalanish ==== S.Parollaringizni yozib oling va ularni
          xavfsiz joyda saqlash ==== D.Parollaringizni do'stlaringiz va oilangiz
          bilan bo'lishish ==== +++++ 153. Virtual Private Network (VPN) ning
          maqsadi nima? ==== A. Onlayn ma'lumotlarni shifrlash uchun ====
          B.Internetga ulanishni tezlashtirish uchun ==== S.Cheklangan
          veb-saytlarga kirish uchun ==== D.Qurilmangizni viruslardan himoya
          qilish uchun ==== +++++ 154. Bank ko'chirmalarini qanchalik tez-tez
          tekshirish kerak? ==== A. oylik ==== B.kunlik ==== S.Har hafta ====
          D.Har chorakda ==== +++++ 155. Agar bank ko'chirmangizda shubhali
          tranzaktsiyalarni sezsangiz nima qilish kerak? ==== A. Darhol bankka
          qo'ng'iroq qiling ==== B.E'tibor bermslikg va uni o'chirish ====
          S.darhol javob bering ==== D.bu haqda hokimiyatga xabar berish ====
          +++++ 156. Kredit karta ma'lumotlarini himoya qilishning eng yaxshi
          usuli qanday? ==== A. chipli kredit kartadan foydalanish ==== B.Uni
          yozib olish va xavfsiz joyda saqlash ==== S.Do'stlar va oila a'zolari
          bilan baham ko'rish ==== D.Kredit kartalaridan umuman foydalanmaslik
          ==== +++++ 157. Fishing nima? ==== A. Onlayn firibgarlikning bir turi
          ==== B.virus turi ==== S.Buzg'unchilikning bir turi ====
          D.firibgarlikning bir turi ==== +++++ 158. Firibgarlikdan qanday
          qochish mumkin? ==== A. Shubhali xatlarni e'tiborsiz qoldirish ====
          B.Shubhali xatlarga javob berish orqali ==== S.darhol bankka
          qo'ng'iroq qilish orqali ==== D.hokimiyatga xabar berish orqali ====
          +++++ 159. Shaxsiy ma'lumotlaringizni himoya qilishning eng yaxshi
          usuli qanday? ==== A. Kuchli va noyob parollardan foydalanish orqali
          ==== B.Do'stlar va oila a'zolari bilan baham ko'rish orqali ==== S.Uni
          yozib, xavfsiz joyda saqlash orqali ==== D.VPN dan foydalanish orqali
          ==== +++++ 160. Ikki faktorli autentifikatsiyadan maqsad nima? ==== A.
          Hisoblaringizga qo'shimcha xavfsizlik qatlamini qo'shish uchun ====
          B.Hisob qaydnomangizga kirishni osonlashtirish uchun ==== S.Hisob
          qaydnomangizga kirishni qiyinlashtirish uchun ==== D.firibgarlik
          xavfini kamaytirish ==== +++++ 161. Oila budjeti va Davlat budjeti
          daromad hamda xarajatlarini rejalashtirishda qanday xususiyat mavjud?
          ==== A.to‘g‘ri proporsionallik mavjud ==== B. teskari proporsionallik
          mavjud ==== S.hech qanday bog‘iqlik yo‘q ==== D.ikkalasi ham bir xil
          budjet bo‘lgani uchun uyg‘unlik mavjud ==== +++++ 162. Uy xo‘jaliklari
          yoki oila budjetining jami daromadlarini shartli holatda necha guruhga
          ajratish mumkin? ==== A.beshta guruhga ==== B.yettita guruhga ==== S.
          ikkita guruhga ==== D.o‘nta guruhga ==== +++++ 163. Oila budjetidan
          qanday xarajat turlarini cheklash mumkin emas? ==== A.kommunal xizmat
          va elektroenergiya to‘lovlari bo‘yicha xarajatlari ==== B.transport
          yoki transport uchun yoqilgi xarajatlari ==== S.majburiy (soliqlar va
          ijtimoiy sug‘urta to‘lovlari) to‘lovlar ==== D. yuqoridagi barchasini
          cheklash mumkin emas ==== +++++ 164. Har qanday aktivning pulga oson
          aylanishi bu: ==== A. likvidlik ==== B.ishonchlilik ====
          S.daromadlilik ==== D.ishonchsizlik ==== +++++ 165. Xonadon xo‘jaligi
          egalik qiladigan bank depozitlari, qimmatbaho buyumlar, kvartira,
          avtomashina, dala hovli, mualliflik huquqi va boshqalar nima deb
          nomlanadi? ==== A. aktivlar ==== B.passivlar ==== S.xatarlar ====
          D.jamg‘armalar ==== +++++ 166. Aktivning xavf-xatarlarga qarshi tura
          olishi bu: ==== A.likvidlik ==== B. ishonchlilik ==== S.daromadlilik
          ==== D.ishonchsizlik ==== +++++ 167. Aktivning o‘z qiymatini ma’lum
          vaqt mobaynida o‘zgartira olish xususiyati bu: ==== A.likvidlik ====
          B.ishonchlilik ==== S. daromadlilik ==== D.ishonchsizlik ==== +++++
          168. Aholi daromadlari nima? ==== A.ish haqi ==== B.moddiy daromadlar
          ==== S.ish haqi va ijtimoiy nafaqalar ==== D. ma’lum davr davomida
          aholining olgan barcha pul va natural daromadlari yig‘indisi ====
          +++++ 169. Pul savodxonligi bu: ==== A.insonni ortiqcha narx belgilash
          mexanizmi va inflyatsiyani tushuna olish qobiliyatidan iborat ====
          B.kishining ortiqcha naqd va naqd bo‘lmagan pullarni va pul
          o‘tkazmalarini, dastaklarni boshqarish qobiliyatiga ega bo‘lish ====
          S. kishining oila budjetini daromadlari va xarajatlarini boshqara
          olish, moliya bozorida to‘g‘ri qaror qabul qila olishdan iborat ====
          D.to‘g‘ri javob yo‘q ==== +++++ 170. Moliyaviy savodxonlik o‘z ichiga
          oladi: ==== A.daromad va xarajatlarning hisobini olib borish
          qobiliyati ==== B.pul resurslaridan oqilona foydalanish, jamg‘arma
          shakllantirish va o‘z kelajagini rejalashtirish ==== S.o‘z harakati
          oqibatlarini anglagan holda shaxsiy kapitalni investitsiyalash va
          qabul qilingan qaror mas’uliyatini o‘z zimmiga olishga tayyorlik ====
          D. hamma javob to‘g‘ri ==== +++++ 171. Xonadon xo‘jaligi
          daromadlarining moliyaviy to‘lovlar va iste’mol xarajatlaridan ortib
          qolgan qismi nima deb ataladi? ==== A. jamg‘arma ==== B.investitsiya
          ==== S.daromad ==== D.qarz ==== +++++ 172. Xonadon xo‘jaligining bank
          kreditlari, qarzlari, alimentlar, kvartira haqi va boshqalar bo‘yicha
          majburiyatlari nima deb nomlanadi? ==== A.aktivlar ==== B. passivlar
          ==== S.xatarlar ==== D.jamg‘armalar ==== +++++ 173. Tarixiy manbalarga
          ko‘ra, dastlabki banklar qayerda tashkil topgan? ==== A.Angliyada ====
          B.Rimda ==== S. Gretsiyada ==== D.Stokgolmda ==== +++++ 174. Mam
          lakatda pul tizimining asosini nima tashkil etadi? ==== A.Markaziy
          bank ==== B.Tijorat banklari ==== S. Milliy valuta ==== D.Kredit
          muassasalari ==== +++++ 175. Muomaladan ortiqcha pullarni qaytarib
          olishni qanday bank amalga oshiradi? ==== A.Tijorat banki ====
          B.Moliya Vazirligi ==== S.Xalq banki ==== D. Markaziy bank ==== +++++
          176. Markaziy bankning asosiy maqsadi qanday javobda to‘g‘ri
          keltirilgan? ==== A.Tijorat banklariga kredit berish va ularning
          faoliyatini nazorat qilishdan iborat ==== B.Muomalaga pul birliklarini
          emissiya qilish va ularni muomaladan qaytarib olishdan iborat ==== S.
          Milliy valutaning barqarorligini ta’minlashdan iborat ====
          D.Hukumatning oltin-valuta zaxiralarini saqlaydi ==== +++++ 177.
          Pulning funsiyasini aniqlang? ==== A.nazorat funksiyasi ====
          B.taqsimlash va qayta taqsimlash funksiyasi ==== S. muomala vositasi
          funksiyasi ==== D.boshqaruv funksiyasi ==== +++++ 178. Pul vujudga
          kelishiga sabab bo‘lgan jihatlardan birini ko‘rsating? ====
          A.marketing va menejmentning paydo bo‘lishi ==== B.soliqlarning paydo
          bo‘lishi ==== S. natural xo‘jalikdan tovar ishlab chiqarishga
          o‘tilishi ==== D.to‘g‘ri javob yo‘q ==== +++++ 179. Dastlab pullar
          qanday metallardan zarb etilgan? ==== A.temir va po‘latdan ====
          B.oltin va platinadan ==== S. mis va kumushdan ==== D.alyumin va
          qo‘rg‘oshindan ==== +++++ 180. Internet-banking xizmati orqali mijoz
          o‘z ish joyida yoki boshqa o‘ziga qulay sharoitda qanday
          imkoniyatlarga ega? ==== A.to‘lovlarni o‘tkazishi ==== B.to‘lov
          o‘tishi bosqichlarini kuzatishi ==== S.barcha hisobotlarni olish kabi
          barcha amaliyotlardan istalgan vaqtda foydalanishi ==== D. barcha
          javob to‘g‘ri ==== +++++ 181. Qaysi depozitda belgilangan sanadan
          avval olinishi foizlarning yo‘qotilishiga sabab bo‘lmaydi? ====
          A.Talab qilib olinguncha ==== B.Jamg‘arma ==== S. Muddatli ====
          D.Yutuqli ==== +++++ 182. Qanday depozitlar bo‘yicha odatda foiz
          stavkalari eng yuqori bo‘ladi? ==== A.Talab qilib olinguncha ====
          B.Jamg‘arma ==== S. Muddatli ==== D.Yutuqli ==== +++++ 183. Bankning
          jalb etilgan mablag‘larini nimalar tashkil etadi? ==== A.Boshqa
          banklarga qo‘yilgan om onatlar ==== B. Aholidan qabul qilingan om
          onatlar ==== S.Garovga qo‘yilgan obyektni sotilishidan olingan pullar
          ==== D.Bank ochilganida ta’sischilarning pullari ==== +++++ 184.
          Kreditda garovning zarurati nimada aks etadi? ==== A.Uchinchi shaxs
          kafolatini talab qilinganida taqdim etiladi ==== B.Kredit oluvchining
          to‘lovga layoqatini oshirib beradi ==== S. Kredit qaytarilmaganida
          garovga qo‘yilgan buyum sotilishi hisobiga yopiladi ==== D.Kredit
          bo‘yicha belgilangan foiz stavkasi qayta ko‘rilganida yetmagan summa
          garov hisobiga qoplanadi ==== +++++ 185. Kredit olishda qarz
          oluvchining to‘lovga layoqatliligi past bo‘lsa, qanday ish tutadi?
          ==== A. Uchinchi shaxs kafilligini aks etadi ==== B.Bank ishonchiga
          kiradi ==== S.Qo‘shimcha kredit oladi ==== D.Kredit olishdan voz
          kechadi ==== +++++ 186. Kreditni qaytarishning qanday shaklida teng
          miqdordagi to‘lovlar o‘tkaziladi? ==== A. Anuitet ==== B.Foizlarni
          qoldiq summaga nisbatan hisoblash ==== S.Yakuniy bir martalik to‘lov
          ==== D.Qat’iy belgilangan foiz stavkali ==== +++++ 187. Qat’iy
          belgilangan foiz stavkasi qanday muddat davomida o‘zgarmaydi? ====
          A.Har olti oyda ==== B.Imtiyozli davr mobaynida ==== S. Kredit davri
          mobaynida ==== D.Har bir yilda ==== +++++ 188. Ma’lum vaqtda kutilgan
          narxda aktivlarni sotish yoki sotib olishda vujudga kelishi mumkin
          bo‘lgan qiyinchiliklar: ==== A.bozor riski ==== B.investitsion risk
          ==== S.narx riski ==== D. likvidlik riski ==== +++++ 189. Pul massasi
          bu: ==== A.muomaladagi naqd pullar yig‘indisi ==== B.muomaladagi
          naqdsiz pullar yig‘indisi ==== S. muomaladagi naqd va naqdsiz
          oborotidagi pullarning yig‘indisi ==== D.muomaladagi tanga pullarning
          yig‘indisi ==== +++++ 190. Vaqtincha foydalanilmayotgan pullar qanday
          vazifani bajardi? ==== A.To‘lov vositasi funksiyasini ==== B.Muomala
          vositasi funksiyasini ==== S. Jamg‘arma vositasi funksiyasini ====
          D.Qiymat o‘lchov funksiyasini ==== +++++ 191. Kredit qanday
          munosabatlar asosida tashkil topdi? ==== A.Tovar-kredit munosabatida
          ==== B.Pul-kreditlar munosabatida ==== S. Tovar-pul munosabatlarida
          ==== D.Davlat krediti munosabatlarida ==== +++++ 192. Kreditor va
          kredit oluvchi o‘rtasida asosiy omil nima hisoblanadi? ====
          A.Mablag‘lardan samarali foydalanish ==== B. Iqtisodiy manfaatdorlik
          ==== S.O‘zaro yaqinlik ==== D.Iqtisodiy hamkorlik ==== +++++ 193.
          Kreditning zarurligi qanday javobda noto‘g‘ri keltirilgan? ====
          A.Kredit munosabatlarida ishtirok etuvchi tomonlarning iqtisodiy
          manfaatdorligini ta’minlanishi ==== B.Iqtisodiyotda vaqtinchalik bo‘sh
          pul mablag‘lar ssuda kapitali sifatida jamg‘arilib, tegishli
          maqsadlarga yo‘naltiriladi ==== S. Banklarni moliyaviy muassasa
          ekanligi ==== D.Iqtisodiyotda ishlab chiqarish siklining davriyligi
          ==== +++++ 194. Bank krediti muddatiga ko‘ra qanday kreditlarga
          bo‘linadi? ==== A. Qisqa, o‘rta va uzoq muddatli ==== B.O‘rta va uzoq
          muddatli ==== S.Qisqa va uzoq muddatli ==== D.Yaqin va uzoq muddatli
          ==== +++++ 195. Iste’mol krediti qanday maqsadlarga beriladi? ====
          A.Yuridik va jismoniy shaxslarga kundalik ehtiyojga zarur bo‘lgan
          tovar va buyumlarni sotib olishga ==== B. Asosan jismoniy shaxslarga
          kundalik ehtiyojga zarur bo‘lgan tovar va buyumlarni sotib olishga
          ==== S.Asosan jismoniy shaxslarga ishlab chiqarishni rivojlantirishga
          ==== D.Asosan yuridik shaxslarga ishlab chiqarishni rivojlantirishga
          ==== +++++ 196. Banklar va ularning mijozlari o‘rtasidagi munosabatlar
          qanday hujjat asosida amalga oshiriladi? ==== A. Banklar va ularning
          mijozlari o‘rtasidagi munosabatlar shartnomalar asosida amalga
          oshiriladi ==== B.Banklar va ularning mijozlari o‘rtasidagi
          munosabatlar o‘zaro kelishuvlar asosida amalga oshiriladi ====
          S.Banklar va ularning mijozlari o‘rtasidagi munosabatlar hujjatsiz
          amalga oshiriladi ==== D.Banklar va ularning mijozlari o‘rtasidagi
          munosabatlar tanish-bilishchilik asosida amalga oshiriladi ==== +++++
          197. Kredit shartnomalari asosan qanday qismlardan iborat bo‘ladi?
          ==== A.Shartnoma mazmuni ==== B.Shartnoma bahosi ==== S.Tomonlar
          majburiyatlari ==== D. barcha javob to‘g‘ri ==== +++++ 198. Sug‘urta
          qanday shakllarda amalga oshiriladi? ==== A.faqat majburiy ravishda
          ==== B. majburiy va ixtiyoriy ravishda ==== S.faqat ixtiyoriy ravishda
          ==== D.to‘g‘ri javob yo‘q ==== +++++ 199. Ixtiyoriy sug‘urta turlari
          bo‘yicha tarif stavkasi sug‘urta kompaniyasi tomonidan nimalarni
          e’tiborga olgan holda belgilaydi? ==== A.sug‘urtalanuvchining
          moliyaviy ahvoliga qarab belgilaydi ==== B. risk darajasi, bozordagi
          talab va taklifdan kelib chiqqan holda belgilaydi ==== S.sug‘urta
          obyektining qiymatiga qarab belgilaydi ==== D.to‘g‘ri javob yo‘q ====
          +++++ 200. Shaxsiy sug‘urtaga oid eng ommaviy sug‘urta turlarini
          ko‘rsating? ==== A.fuqarolarni baxtsiz hodisalardan sug‘urta qilish
          ==== B.tibbiy sug‘urta ==== S.nikoh uchun hayotni uzoq muddatga
          sug‘urta qilish ==== D. barcha javob to‘g‘ri ==== +++++ 201. Moliyaviy
          savodxonlik bu: ==== A. fuqaroni moliyaviy mahsulotlar va xizmatlar
          bozorida aktiv pozitsiyani egallash, jamiyatda o‘zini va oila
          a’zolarini moliyaviy farovonligini oshirish uchun zarur bo‘lgan
          bilimlar va ko‘nikmalar yig‘indisidir ==== B.fuqaroni moliyaviy
          mahsulotlar va xizmatlar bozorida passiv pozitsiyani egallash,
          jamiyatda o‘zini va oila a’zolarini moliyaviy farovonligini oshirish
          uchun zarur bo‘lgan bilimlar va ko‘nikmalar yig‘indisidir ====
          S.fuqaroni moliyaviy mahsulotlar va xizmatlar bozorida passiv
          pozitsiyani egallash, jamiyatda o‘zini va oila a’zolarini moliyaviy
          beqarorligini oshirish uchun zarur bo‘lgan bilimlar va ko‘nikmalar
          yig‘indisidir ==== D.fuqaroni moliyaviy mahsulotlar va xizmatlar
          bozorida aktiv pozitsiyani egallash, jamiyatda o‘zini va oila
          a’zolarini moliyaviy beqarorligini oshirish uchun zarur bo‘lgan
          bilimlar va ko‘nikmalar yig‘indisidir ==== +++++ 202. Budjet
          savodxonligi bu: ==== A. kishining oila budjetini daromadlari va
          xarajatlarini boshqara olish, moliya bozorida to‘g‘ri qaror qabul qila
          olishdan iborat ==== B.kishining oila budjetini daromadlarini boshqara
          olish, moliya bozorida to‘g‘ri qaror qabul qila olishdan iborat ====
          S.kishining oila budjetini xarajatlarini boshqara olish, moliya
          bozorida to‘g‘ri qaror qabul qila olishdan iborat ==== D.kishining
          oila budjetini daromadlari va xarajatlarini boshqara olish, moliya
          bozorida investitsiyalarni joylashtirishdan iborat ==== +++++
        </p>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
