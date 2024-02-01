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
              <h4>
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
                <iframe width="800" id="iframepdf" src="/src/assets/Raqamli qurilmalarni loyihalash yy(180 soat) (2).pdf"></iframe>

              </h4> <iframe width="800" id="iframepdf" src="/src/assets/Raqamli qurilmalarni loyihalash yy(180 soat) (2).pdf"></iframe>
            </div>
              


  <iframe width="800" id="iframepdf" src="https://drive.google.com/file/d/1-_8cWHVagq1MRxnAdVKbvd2DdDjSwwRb/view?usp=drivesdk"></iframe>          
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
      </main>
    </Fragment>
  );
};

export default Kompyuter;
