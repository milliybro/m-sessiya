const input = `
?Mashinali o'qitish Sun'iy intellekti bo'lmagan elementni ko'rsating
+Hub
-Kalkulyator 
-Telefon
-Foto Radar 

?Mashinali o'qitish va suniy intellect bu…
+Mashinali o'qitish sun'iy intellekt tizimlarini ishlab chiqishga xizmat qiladi 
-Bir tushunchani ifodalaydi
-Sun'iy intellekt mashinali o'qitish tizimlarini ishlab chiqishga xizmat qiladi 
-Turli tushunchalarni ifodalaydi

?Mashinali o'qitishning o'qituvchili sinflashtirish algoritmini ko'rsating
+KNN,SVM,Logistik regresiya
-Kmaens
-Chiziqli regressiya
-Kmaens,KNN 

?Supervised learning
+bu modelni xususiyatlari aniq bo'lgan ma'lumotlar bilan o'qitish
-bu modelni xususiyatlari aniq bo'lmagan ma'lumotlar bilan o'qitish
-bu modelni ham aniq ham aniq bo'lmagan xususiyatli ma'lumotlar bilan o'qitish
-bu model o'zini-o'zi qayta o'qitish va natijalarni o'qitish
 
?Unsupervised learning
+bu modelni xususiyatlari aniq bo'lmagan ma'lumotlar bilan o'qitish
-bu modelni xususiyatlari aniq bo'lgan ma'lumotlar bilan o'qitish 
-modelni ham aniq ham aniq bo'lmagan xususiyatli ma'lumotlar bilan o'qitish
-bu o'qitishning mukammal usuli bo'lib, bunda model o'zini-o'zi qayta o'qitish 

?Semi- supervised learning……………
+bu modelni ham aniq ham aniq bo'lmagan xususiyatli ma'lumotlar bilan o'qitish
-bu modelni xususiyatlari aniq bo'lmagan ma'lumotlar bilan o'qitish 
-bu modelni xususiyatlari aniq bo'lgan ma'lumotlar bilan o'qitish 
-bu o'qitishning mukammal usuli bo'lib, bunda model o'zini-o'zi qayta o'qitish

?Reinforcement learning
+bu o'qitishning mukammal usuli bo'lib, bunda model o'zini-o'zi qayta o'qitish va natijalarni yaxshilash imkoniyati
-bu modelni xususiyatlari aniq bo'lmagan ma'lumotlar bilan o'qitish
-bu modelni ham aniq ham aniq bo'lmagan xususiyatli ma'lumotlar bilan o'qitishdir.
-bu modelni xususiyatlari aniq bo'lgan ma'lumotlar bilan o'qitish 

?O'qitishning mukammal usuli bo'lib, bunda model o'zini-o'zi qayta o'qitish va natijalarni yaxshilash imkoniyatiga ega bo'ladi
+Reinforcement learning
-Semi-supervised learning 
-Supervised learning 
-Unsupervised learning 

?Modelni ham aniq ham aniq bo'lmagan xususiyatli ma'lumotlar bilan o'qitishdir
+Semi-supervised learning
-Reinforcement learning
-Unsupervised learning 
-Supervised learning

?Modelni xususiyatlari aniq bo'lgan ma'lumotlar bilan o'qitish
+Supervised learning
-Semi-supervised learning 
-Reinforcement learning 
-Unsupervised learning

?Modelni xususiyatlari aniq bo'lmagan ma'lumotlar bilan o'qitish bu……
+Unsupervised learning
-Supervised learning 
-Semi-supervised learning 
-Reinforcement learning 

?Mashinali o'qitishda asosan qaysi instrumental vositalardan foydalaniladi
+Python, Matlab, Octave
-Python,NLP,Keras 
-Numpy,Pandas 
-Python,Keras,Pandas 

?Bir o'zgaruvchili chiziqli regressiya bu - ....
+Bashoratlash uchun obyektni xarakterlovchi bitta xususiyatini olib bashoratlashga xizmat qiladigan model yaratish 
-Bashoratlash uchun obyektni xarakterlovchi ko'p sondagi xususiyatlarini olib bashoratlashga xizmat qiladigan model yaratish 
-Siflashtirish uchun obyektni xarakterlovchi bitta xususiyatini olib siflashtirishga xizmat qiladigan model yaratish 
-Siflashtirish uchun obyektni xarakterlovchi ko'p sondagi xususiyatlarini olib
siflashtirishga xizmat qiladigan model yaratish 

?Ko'p o'zgaruvchili chiziqli regressiya bu -...
 +Bashoratlash uchun obyektni xarakterlovchi ko'p sondagi xususiyatlarini olib bashoratlashga xizmat qiladigan model yaratish
-Bashoratlash uchun obyektni xarakterlovchi bitta xususiyatini olib bashoratlashga xizmat qiladigan model yaratish 
-Siflashtirish uchun obyektni xarakterlovchi bitta xususiyatini olib siflashtirishga xizmat qiladigan model yaratish 
-Siflashtirish uchun obyektni xarakterlovchi ko'p sondagi xususiyatlarini olib siflashtirishga xizmat qiladigan model yaratish 

?Logistik regressiya bu 
+Regression tahlil asosida sinflashtirish masalasini yechish
-Regression tahlil asosida klasterlash masalasini yechish
-Regression tahlil asosida bashoratlash masalasini yechish 
-Regression tahlil asosida chuqur o'qitish masalasini yechish

?Chiziqli va logistic regressiyaning asosiy farqi bu………
+Bu ikkalasi ikki turdagi masalani ishlaydi. chiziqli regressiya basharotlash, logistic regressiya sinflashtirish 
-Bu ikkalasi ikki turdagi masalani ishlaydi. chiziqli sinflashtirish basharotlash, logistic regressiya regressiya 
-Ikkalasi ham bir turdagi masalani ishlash uchun mo'ljallangan 
-chiziqli regressiya basharotlash

?Python dasturlash tilida ma'lumotlarni visuallashtirish uchun ishlatiladigan kutubxona
+Matplotlib
-plotData
-Pillow 
-PyPlot 

?Numpy kutubxonasida ikkita vektorni skalyar ko'paytirish amali qanaqa
+A*B ~A@B
-np.multiply([A,B]) 
-np.dot([a,b]) 
-A*B

?Numpy kutubxonasida ikkita vektorni vektor ko'paytirish amali qanaqa
+A@B
-A*B 
-np.dot([A,B]) 
-np.multiply([A,B]) 

?Pythonda ikkita vektorni birlashtirishda xatolik sodir bo'ladigan javobni tanlang
+a#append(a,b)
-a#np.append(a,b) 
-a#np.append(b,a) 
-a#np.append

?Cost funksiya bu
+Modelni o'qitish davrida model tomonidan topilgan qiymat bilan o'rgatuvchi tanlamada berilgan qiymat oralidagi farqlarni hisoblash funksiyasi
-Cosinius funksiyasini qisqartma ko'rinishi
-Modelni qurish jarayonida ortiqcha paramertlardan ozod qilish
-Modelni o'qitish jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish

?Chiziqli regression model nechta qiymat qaytaradi
+Har doim bitta
-Ixtiyoriy ravishdagi sonda qiymat qaytarishi mumkin 
-Har doim bittadan ko'p 
-Xatolik sodir bo'ladi

?Gradient tushish bu
+Model parametrlarini sozlash uchun ishlatiladigan algoritm
-Xatolik funksiyasi 
-Kiruvchi ma'lumotlarni narmallashtirish uchun qiymatlarni 0,1oraliqqa tushirish 
-Mashinali o'qitish turi 

?O'qitish jarayonida regulyarizatsiyalash bu
+Modelni o'qitish jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish
-Modelni testlash jarayonida qisqartirish
-Modelni testlash jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish 
-Modelni qurish jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish

?Modelni qurishda bo'ladigan Underfitting muammosi bu
+Model train to'pilmada ham, test to'plamda ham yuqori aniqlik bermaydi. Model sodda tuzilgan.
-Model train to'pilmada ham, test to'plamda ham yuqori aniqlik bermaydi. Model murakkab tuzilgan.
-Model train to'pilmada yuqori, test to'plamda esa past aniqlik beradi. Model sodda tuzilgan. 
-Model train to'pilmada yuqori, test to'plamda esa past aniqlik beradi. Model murakkab tuzilgan. 

?Model qurishda bo'ladigan Owerfitting muammosi bu?
+Rasmlarni joylashtirish uchun
-Ma'lumotlarni jadval ko'rinishida chop etish uchun 
-Audioma'lumotlarni joylashtirish uchun 
-Matnli ma'lumotlarni joylashtirish uchun 

?Mobil ilovadagi element ustiga sichqoncha chap tugmasi bilan bosilganda qaysi metod ishga tushadi
+Model train to'plamda yuqori, test to'plamda esa past aniqlik beradi. Model murakkab tuzilgan.
-Model train to'plamda ham, test to'plamda ham yuqori aniqlik bermaydi. Model sodda tuzilgan. 
-Model train to'plamda ham, test to'plamda ham yuqori aniqlik bermaydi. Model murakkab tuzilgan. 
-Model train to'plamda yuqori, test to'plamda esa past aniqlik beradi. Model sodda tuzilgan. 

?Bias tushunchasi
+Modelni train to'plam bilan testlaganda bo'ladigan xatolik
 -Modelni test to'plam bilan testlaganda bo'ladigan xatolik 
- Modelni train  test to'plam bilan testlaganda bo'ladigangadi umumiy xatolik 
 -Modelni validation to'plam bilan testlaganda bo'ladigangadi umumiy xatolik 

?Variance tushunchasi
+Modelni test to'plam bilan testlaganda bo'ladigan xatolik
-Modelni train to'plam bilan testlaganda bo'ladigan xatolik 
-Modelni train + test to'plam bilan testlaganda bo'ladigangadi umumiy xatolik
-Modelni validation to'plam bilan testlaganda bo'ladigangadi umumiy xatolik
	
?Agar bias yuqori bo'lsa qaysi turdagi muammo sodir bo'lmoqda
+Underfitting
-Owerfitting
-Bias ni yuqoriligi mumamo hisoblanmaydi 
-Model juda murakkab 
	
?Model murakkab bo'lsa bias qanday bo'ladi?
+Quyi, model o'rgatuvchi tanlamaga mostlashib qoladi va train to'plamda xatoligi past bo'ladi
-Model juda soda bo’ladi 
-Bias ning quyi yoki yuqori bo'lishi model murakkabligiga bog'liq emas. 
-Yuqori, model o'rgatuvchi tanlamaga mostlashib qoladi va train to'plamda xatoligi yuqori bo'ladi 

?O'rgatuvchi tanlama nima
+bu o'qitish uchun kerakli bo'lgan ma'lumotlar to'plamidir
-bu o'qitish uchun kerakli bo'lgan neyronlar to'plamidir 
-bu o'qitish uchun kerakli bo'lgan og'irliklar to'plamidir 
-bu o'qitish uchun kerakli bo'lgan neyron tarmoq qatlamlar to'plamidir 

?O'rgatuvchi tanlamadagi train to'plam ...
+modelni o'qitish uchun ishlatiladi
-modelni testlash uchun ishlatiladi 
-modelni o'qitish davomida model parametrlarini sozlash uchun ishlatiladi 
-bu turdagi o'rgatuvchi tanlamadan foydalanilmaydi 

?O'rgatuvchi tanlamadagi val (validation) to'plam bu
-Modelni o'qitish davomida model parametrlarini sozlash uchun ishlatiladi
-modelni o'qitish uchun ishlatiladi 
-modelni testlash uchun ishlatiladi 
-Bu turdagi o'rgatuvchi tanlamadan foydalanilmaydi 

?Nima uchun o'rgatuvchi tanlama normallashtiriladi
+Obyektni xarakterlovchi xususiyatlari bir xil shkalaga olib kelish orqali ularning ta'sir kuchini barobarlashtirish
-Obyektni xarakterlovchi xususiyatlari faqat [0,1] shkalaga olib kelish orqali ularning ta'sir kuchini barobarlashtirish 
-Obyektni xarakterlovchi xususiyatlari faqat [-1,1] shkalaga olib kelish orqali ularning ta'sir kuchini barobarlashtirish 
-Obyektni xarakterlovchi xususiyatlari turli xil shkalaga olib kelish orqali ularning ta'sir kuchini barobarlashtirish 

?Validation dataset qayerda ishlatiladi
+Modelni qurish davomida paramertlarni sozlashda
-Model qurib bo'linganidan so'ng aniqlikni baholashda 
-Chiziqli regressiyasini baholashda
-Validation datasetdan foydalanilmaydi 

?Klasterlash bu
+O'qituvchisiz o'qitish algoritmi asosida obyektlarni xarakterlovchi o'xshash xususiyatlari asosida guruhlash
-O'qituvchili o'qitish algoritmi asosida obyektlarni xarakterlovchi o'xshash xususiyatlari asosida guruhlash 
-Mashinali o'qitishda buday tushuncha yo'q
-Logistik regressiya asosida amalga oshiriladigan mashinali o'qitish algoritmi 

?O'qituvchisiz o'qitish algoritmiga qaysi algoritim kiradi
+K-maens Singular Value Decomposition
-KNNSVM 
-SVMKmaens 
-Random Forest 

?KNN algoritmida k qiymat nimani xarakterlaydi
+k ta eng yaqin qo'shnini
-k ta eng uzoq qo'shnini
-O'qitish qadami
-O'qitishlar sonini 

?Uy narxini bashorat qilish uchun mashinali o'qitishning qaysi algoritmidan foydalanadi
+Chiziqli regressiya
-Logistik regressiya 
-Kmeans 
-SVM 

?Uyning xarakterlovchi xususiyatlari asosida ikkita guruhga(klasterga) (biznes, ekanom) ajratish uchun qaysi mashinali o'qitish algoritmidan
foydalaniladi
+Kmeans
-SVM 
-Random Forest 
-Logistik regressiya 

?KNN algoritmida k ni kichik tanlasak nima sodir bo'ladi
+Shovqinga sezgir bo'ladi va sinflashtirishda xatolikka ko'p uchrashi mumkin
-Shovqinga sezgir bo'lmaydi va sinflashtirishda xatolikka ko'p uchrashi mumkin
-KNN algoritmida k parametr yo'q.
-k ni kichik yoki katta tanlash algoritm ishiga ta'sir qilmaydi 

?KNN algoritmida k ta eng yaqin qo'shni qanday aniqlanadi
+To'plamdagi barcha elemetlar orasidagi masofa hisoblanib chiqiladi va eng yaqin k tasi tanlanadi
-Taxminiy random() funksiyasi orqali aniqlanadi
-To'plamdagi k ta elemetlar orasidagi masofa hisoblanib chiqiladi va ular o'sish tartibida saralanadi.
-KNN algoritmida k ta eng yaqin qo'shni tushunchasi yo'q

?SVM algorimi qaysi masalani yechish uchun xizmat qiladi
+Sinflashtirsh
-Chiziqli regressiya 
-Klasterlash 
-Normallashtirish 

?KMeans bu –
+O'qituvchisiz o'qitish algoritmi
-O'qituvchili o'qitish algoritmi 
-O'zini o'zi o'qitadigan algoritmi 
-Sinflashrirish algoritmi

?Kmaens algoritmi qaysi masalani yechish uchun xizmat qiladi
+Klasterlash
-O'qituvchili o'qitish
-Sinflashtirish 
-Regressiya 

?SVM algoritmidagi hisoblaanadigan orqaliq (margin) qanday bo'lsa model ishonchli deb topiladi
+Oraliq eng kattta bo'lsa
-Oraliq eng kichik bo'lsa 
-Oraliq hech narsani anglatmaydi 
-O'qituvchili o'qitish uchun

?SVM orqali ..
+Faqat bir nechta sinfga tegishli bo'lgan obyektlar sinflanadi
-Faqat ikkita sinfga tegishli bo'lgan obyektlar sinflanadi 
-Faqat regressiya masalasini yechish mumkin
-Ham sinflashrish, ham regressiya masalasini ishlash mumkin. 

?Qidiruv tizimlarida sun'iy intellektdan foydalanish mumkinmi
+ha, mumkin va hozirda keng qo'llanilmoqda
-qisman amaliy natijalari bor lekin yetarlicha nazariy jihatdan formallashtirilmagan
-nazariy jihatdan mumkin, lekin hozircha amaliy jihatdan natijalarga erishilmagan
-qidiruv tizimlarida sun'iy intellektdan foydalanish qidiruv vaqtini oshiradi 

?Mashinani o'qitish jarayonida ma'lumotlarga qanday dastlabki ishlov beriladi
+Ma'lumotlar formatlari bir xillashtiriladi
-Ma'lumotlarni tozalash 
-Ma'lumotlardan xususiyatlarni ajratish 
-O'qituvchili o'qitishda ma’lumot berish

?Sun'iy neyron tarmoqlarida perceptron tushunchasi
+bu ikkita qatlamdan iborat ya'ni kiruvchi va chiquvchi qatlamdan iborat bo'lgan neyronni hisoblash tugunidir.
-bu ikkita qatlamdan iborat ya'ni kiruvchi va faollashtish qatlamdan iborat bo'lgan neyronni hisoblash tugunidir. 
-bu bir qatlamdan iborat bo'lgan neyronni hisoblash tugunidir.
-bu uch qatlamdan iborat bo'lgan neyronni hisoblash tugunidir. 

?Sun'iy neyron tarmoqlarida yashirin qatlam tushunchasi
+Kiruvchi va chiquvchi qatlamlar orasida joylashadigan neyron
-Ko'rinmaydigan qatlam 
-Neyron tarmoqda yashirin qatlam tushunchasi yo'q 
-Kiruvchi qatlamdan kiyin keladigan barcha qatlamalar 

?Sun'iy neyron tarmoqlarida aktivlashtirish funksiyasi tushunchasi
+Neyron tugunlaridan chiqqan qiymatni ma'lum bir diapozonga tushirish uchun ishlatiladi
-Neyron tarmoqda aktivlashtirish funksiyasi tushunchasi yo'q 
-Bu faol bo'lmagan tugunlarni faollashtish uchun ishlatiladi. 
-O'qituvchili o'qitish usllaridan foydalaniladi

?Chuqur o'qitilish deyiladi, qachonki ...
+Nayron tarmog'imizda yashirin qatlamlar soni bittadan ko'p bo'lsa. 
-Neyron tarmog'imizda yashirin qatlamlar soni bitta bo'lsa.
-Ikkita neyron orasidagi masofa katta bo'lsa 
-Neyronlar soni ikkitadan ko'p bo'lsa 

?Modelni o'qitish uchun o'quv tanlanma (dataset) qanday turlarga bo'lindi
+training, validation, testing
-testing, value-x, training 
-validation, labels, training
-labels, validation, testing 

?O'qitish uchun ma'lumotlar orasidan ortiqcha yoki ahamiyati past bo'lgan, model turg'unligiga ta'sir qiluvchi ma'lumotlarni olib tashlash 
jarayoni nima deb ataladi
+Ma'lumotlarni tozalash (Data cleaning)
-Xususiyatlarni aniqlash (Feature detection)
-Ma'lumotlarni o'chirish (Data deletion)
-Ma'lumotlar turini aniqlash (Data formatting) 
 
?Neyron tarmoqlarida sinflashtirish masalasini yechishda chiquvchi qatlamda qaysi turdagi aktivlash funksiyasidan foydalaniladi
+Softmax
-Sigmoid 
-ReLu 
-Polyfit

?Logistik regression model nima uchun ishlatiladi
+Sinflashtirsh masalasini yechish uchun
-Klasterlash masalasini ishlash uchun 
-Neyron tarmoqni qurish uchun 
-Qiymatni bashoratlash uchun

?Numpy kutubxonasidagi polyfit() funksiyasi nima uchun ishlatiladi
+Chiziqli regressiya uchun model paramertlarini aniqlash uchun 
-Loginstik regressiya uchun model paramertlarini aniqlash uchun
-Chiziqli va logistik regressiya uchun model paramertlarini aniqlash uchun 
-Polynom funksiya yaratish uchun 

?Numpy kutubxonasidagi poly1d() funksiyasi nima uchun ishlatiladi
+Berilgan parametrlar asosida polinomal funksiya hosil qilish 
-Berilgan parametrlar asosida polinomal Class hosil qilish 
-Berilgan parametrlar asosida logistik regressiya modelini qurish
-Berilgan parametrlar asosida giperbolik regressiya modelini qurish 
 
?Neyron tarmoqlarini qurishga mo'ljallangan python kutubxonalarini ko'rsating
+Numpy, keras, tensorflow 
-Numpy, pandas, keras
-Tensorflow, numpy, pandas
-Python, Matlab, Octave 

?Neyron tarmoq asosida sinflashtirish masalasini yechish mumkinmi
+Sinflashtirish masalasini yechadi
-Yoq, faqat regressiya masalasini yechadi
-Faqat ikkilik sinflashtirganda 
-Yoq, klasterlash masalasini yechadi

?Python muhitida chiziqli regression model qurish uchun ishlatiladigan stats.linregress(x,y) funksiyasi nechta qiymat qaytaradi
+5
-4
-3
-2

?Neyron tarmoqda tugunlar nimalar bilan bog'lanadi
+og'irlik koeffitsentlari
-o'zgarmas koeffitsentlar
-tasodifiy koeffitsentlar
-ozod had koeffitsentlari 

?Hozirgi kunda butun dunyoda rivojlanib borayotgan mashinali o'qitish (machine learning), chuqur o'qitish (deep learning) kabi 
usullar sun'iy intellekt bilan qanday bog'liq
+tasvirlardan ob'ektlarni tanib olish, video nazorat, ovozni tanib olish kabi sohalarda keng foydalaniladi va sun'iy intellekt tizimini yaratishda katta ahamiyat kasb etadi
-faqat ovozni tanib olishda ishlatiladi va sun'iy intellekt tizimini yaratishda deyarli fodalanilmaydi 
-tasvirlarni tanib olishda ishlatiladi va sun'iy intellekt tizimini yaratishda foydalaniladi 
-faqatgina ma'lumotlarning intellektual tahliliga oid 

?Mashinani o'qitish jarayonida ma'lumotlarga qanday dastlabki ishlov beriladi
+Format, Data Cleaning, Feature Extraction
-Data Cleaning, Resizing, , Feature Extraction
-Resizing, Feature Extraction, Format 
-Format, Resizing, Data Cleaning 

?Regression tahlilni qanday usullar asosida amalga oshiriladi
+chiziqli, nochiziqli va logistik regressiya usullari asosida
-sintaktik usullar asosida 
-dinamik usillar asosida
-semantik usullari asosida 

?Muammoni aniqlash, ma'lumotlarni tayyorlash, algoritmni ishlab chiqish va baholash, natijaviy ma'lumotlar aniqligini oshirish va yakuniy 
natijani taqdim qilish - bular qanday jarayonning bosqichlari hisoblanadi
+Mashinali o'qitish
-Chuqur o'qitish
-Regression tahlil
-Statistik tahlil 

?Keras bu - ...
+tensorflow asosiga qurilgan ochiq kodli neyron tarmoq uchun mo'ljallangan kutubxona
-numpy asosiga qurilgan ochiq kodli neyron tarmoq uchun mo'ljallangan kutubxona 
-ochiq kodli neyron tarmoq uchun mo'ljallangan dasturiy vosita 
-matplotlib asosiga qurilgan ochiq kodli neyron tarmoq uchun mo'ljallangan kutubxona 

?Sklearn bu - ...
+Python dasturlash tilidagi maxsus kutubxona bo'lib, mashinali o'qitish algoritmlarini amalga oshirishga mo'ljallangan maxsus paket
-Matlabning maxsus paketi bo'lib, mashinali o'qitish algoritmlarini amalga oshirishga mo'ljallangan hisoblanadi 
-Python dasturlash tilidagi maxsus kutubxona bo'lib, o'zini o'zi o'qitadigan mashinali o'qitish algortimlarini ishlab chiqishga mo'ljallangan  
-Python dasturlash tilidagi maxsus kutubxona bo'lib, mashinali o'qitishning o'qituvchili algoritmlarini amalga oshirishga mo'ljallangan maxsus paket 

?Chuqur o'qitish qanday tarmoqlari asosida amalga oshiriladi
+neyron tarmoqlar asosida
-lokal tarmoqlar asosida 
-global tarmoqlar asosida 
-internet tarmoqlar asosida  

?Chuqur o'qitish bosqichlari to'g'ri tartiblangan javobni belgilang
+1. Muammoni tushunib olish.2. Ma'lumotlarni aniqlash.3. Chuqur o'qitish algoritmini belgilash.4. Modelni o'qitish.5. Modelni testlash.
-1. Ma'lumotlarni aniqlash.2. Muammoni tushunib olish.3. Chuqur o'qitish algoritmini belgilash.4. Modelni o'qitish.5. Modelni testlash. 
-1. Muammoni tushunib olish.2. Ma'lumotlarni aniqlash.3. Chuqur o'qitish algoritmini belgilash.4. Modelni o'qitish. 
-1. Chuqur o'qitish algoritmini belgilash.2. Modelni o'qitish. 3. Modelni testlash. 

?Chuqur o'qitish necha asosiy bosqichlardan tashkil topgan
+5
-4
-3
-6
 
?Chuqur o'qitishning birinchi bosqichi qanday jarayondan iborat
+Muammoni tushunib olish.
-Ma'lumotlarni aniqlash. 
-Chuqur o'qitish algoritmini belgilash. 
-Modelni o'qitish. 

?Chuqur o'qitishning ikkinchi bosqichi qanday jarayondan iborat?
+Chuqur o'qitish algoritmini belgilash. 
-Modelni o'qitish. 
-Modelni testlash.  

?Chuqur o'qitishning uchunchi bosqichi qanday jarayondan iborat
+Chuqur o'qitish algoritmini belgilash.
-Modelni testlash. 
-Muammoni tushunib olish. 
-Modelni o'qitish. 

?Chuqur o'qitishning to’rtinchi bosqichi qanday jarayondan iborat
+Modelni o'qitish.
-Modelni testlash. 
-Chuqur o'qitish algoritmini belgilash. 
-Muammoni tushunib olish. 

?Chuqur o'qitishning oxirgi bosqichi qanday jarayondan iborat
+Modelni testlash.	
-Chuqur o'qitish algoritmini belgilash. 
-Modelni o'qitish. 
-Ma'lumotlarni aniqlash. 

?Chiziqli va logistik regression model qurilayotganda bitta o'rgatuvchi tanlamadan foydalansa bo'ladimi
+Ha, faqat yorliqlari uchun ikkita qiymat saqlangan bo'lsa
-Ha, regression model uchun hamma vaqt dataset bir xilda bo'ladi. 
-Buning imkoni yo'q 
-Ha, Logistik regressiyadan foydalaniladi

?Python ning scipy kutubxonasidan qaysi Classs chiziqli regressiya modelini qurishda ishlatiladi
+stats 
-sklearn  
-numpy
-ployfit 

?Chiziqli regressiyada modelni murakkab tanlansa qaysi turdagi muammo yuzaga keladi
+Owerfitting
-Underfitting 
-Model aniq ishlaydigan bo'lib, shakllanadi. 
-Muammo sodir bo'lmaydi 

?Chiziqli regressiyada modelni sodda tanlansa qaysi turdagi muammo yuzaga keladi
+Underfitting
-Owerfitting 
-Model ishonchli, hech qanaday muammo yo'q 
-Muammo sodir bo'lmaydi 

?Python ning qaysi kutubxona oraqli vector va matritsalar ustida amalar bajarish mumkin
+Numpy
-Math 
-Pandas
-VecMat 

?K-Maens algoritmida qo'llaniladigan ikki nuqta orasidagi masofa ... deb yuritiladi. Nutqlar o'rniga mos variantni qo'ying
+Euclidean masofasi
-Chebyshev masofasi 
-Manhattan masofasi 
-Minkowski masofasi 

?Gradient tushish algoritmidagi 'learning rate' parameter nimani xarakterlaydi
+O'qish qadamini 
-O'qishitda takrorlanishlar sonini 
-O'qishni takrorlash
-Model aniqligini 

?O'qituvchili o'qitish (supervised learning) nima
+modelni o'qitish uchun ma'lumotlar bilan birgalikda ularning belgisini (data+label) ham ishlatish
-modelni o'qitish uchun ma'lumotlarni belgisisiz (data without label) ishlatish 
-modelni o'qitish uchun tasvir ma'lumotlaridan (image) foydalanish 
-modelni o'qitish uchun faqat ma'lumotlar belgisini (label) ishlatish 

?Keras muhitida qurilgan neyron tarmoqda joriy qatlam uchun faollashtirish funksiyasini qo'shishda quyidagilarning qaysi biridan foydalaniladi
+model.add(Activation('relu'))
-model.insert(Activation('relu'))  
-model.function(Activate('relu')) 
-model.add(ActiveFunction('relu')) 

?O'qituvchisiz (unsupervised) o'qitish algortimlari to'g'ri ko'rsatilgan javobni ko'rsating
+k-means clustering, hierarchical clustering, independent component analysis
-linear regression, nearest neighbor, random forest, decision tree 
-k-means clustering, deep learning, logistic regression, random forest 
-k-nn, decision tree, linear regression, k-means clustering 

?O'qituvchisiz o'qitish (unsupervised learning) nima
+modelni o'qitish uchun ma'lumotlarni belgisisiz (data without label)
-modelni o'qitish uchun faqat ma'lumotlar belgisini (label) ishlatish 
-modelni o'qitish uchun ma'lumotlar bilan birgalikda ularning belgisini (data+label) ham ishlatish 
-modelni o'qitish uchun tasvir ma'lumotlari va ularning belgilaridan (image+label) foydalanish 

?Mashinali o'qitish nima
+kompyuter dasturining ma'lumotlarni o'qib olish asosida xususiyatlarni o'rganish qobiliyatidir
-faqat kompyuter o'yinlarini yaratish uchun dastur xususiyatlarni o'rganish qobiliyatidir 
-bu robotni o'rgatishning an'anaviy usuli 
-kompyuter dasturlarini lug'at yordamida o'qitish usuli 

?...... bu ikkita qatlamdan iborat ya'ni kiruvchi va chiquvchi qatlamdan iborat bo'lgan neyronni hisoblash tugunidir. Nuqtalar o'rniga quyidagilardan mos 
keldiganini qo'ying
+perceptron
-sigmoid funksiyasi 
-neyron 
-ReLU funksiyasi

?Regressiya nima
+ma'lumotlarni intellektual tahlil qilish usullaridan biri
-ma'lumotlarni ustida arifmetik usullaridan biri 
-ma'lumotlarni raqamli ishlov berish usullaridan biri 
-ma'lumotlarni jamlash usullaridan biri 

?Supervised o'qitish algoritmlari asosan qanday masalani yechishga qaratilgan
+regressiya va sinflashtirish masalasiga
-statistik usullar yordamida ma'lumotlarni ajratish masalasiga 
-statistik usullar yordamida ma'lumotlarni sinflashtirish masalasiga 
-sinflashtirish va segmentlash masalasiga 

?Neyron tarmoqda qanday turdagi qatlamlar (layers) bo'lishi mumkin
+kiruvchi, chiquvchi, yashirin
-kiruvchi, yashirin, oraliq 
-qabul qiluvchi, hisoblovchi, chiquvchi 
-kiruvchi, qabul qiluvchi, chiquvchi 

?Chiziqli regression model nima uchun ishlatiladi
+bashorat qilish uchun
-mantiqiy model qurish uchun 
-sinflashtirish masalasini yechish uchun 
-segmentlash masalasini yechish uchun 

?Neyron tarmoq nima
+bu inson miyasining ishlash faoliyatini qisman aks ettiruvchi tuzilma
-bu inson miyasining ishlash faoliyatini qisman aks ettiruvchi dataset 
-bu inson miyasining ishlash faoliyatini butunlay aks ettiruvchi dataset 
-bu inson miyasining ishlash faoliyatini butunlay aks ettiruvchi tuzilma

?Sun'iy intellekt deganda nimani tushunasiz
+insonning onggi kabi fikrlovchi dastur
-oddiy kompyuter dasturi 
-qaror qabul qiluvchi ilovalar
-bunday termin fanda mavjud emas 

?Sun'iy intellekt bu ...
+bu kompyuterda insonning aqlli xatti harakatlarini qanday amalga oshirishni o'rganadigan tadqiqot sohasi
-bu kompyuterda insonning jismoniy xatti harakatlarini qanday amalga oshirishni o'rganadigan tadqiqot sohasi 
-bu kompyuterda insonning bialogik xatti harakatlarini qanday amalga oshirishni o'rganadigan tadqiqot sohasi 
-bu kompyuterda insonni bialogik o'rganadigan tadqiqot sohasi

?Chuqur o'qitish - bu
+bu ko'p qatlamli neyron tarmoqlar asosida obyekt xususiyatlarini tushunishga qaratilgan jarayondir
-bu bir qatlamli neyron tarmoqlar asosida obyekt xususiyatlarini tushunishga qaratilgan jarayondir 
- bu bu modelni qurib olish uchun amalga oshiriladigan o'qitish jarayonidir 
-bu modelni tezroq va aniqroq qurib olish uchun amalga oshiriladigan jarayon 

?Python muhitida turli xil matematik funksiya grafiklarini va tasvirlarni vizuallashtirish uchun ishlatiladigan paket qaysi
+Matplotlib
-Keras
-Pandas 
-Numpy  

?Sun'iy neyron tarmoq tashkil etuvchilarini ko'rsating?
+node, input, weights, output
-cell body, dendrites, synapse, axon 
-input, dendrites, synapse, output 
-synapse, axon, weights, node 

?Python muhitida scatter() funksiyasi qanday vazifani bajaradi
+berilgan x,y to'plam bo'yicha 2 o'lchovli grafigini chizish uchun ishlatiladi 
-chiziqli regression model koeffitsentlarini (ko'pi bilan 3 ta) hisoblaydi 
-polinomial regression model koeffitsentlarini hisoblaydi
-qurilgan model koeffitsentlari bo'yicha bashorat qilinadigan qiymatlarni hisoblaydi 

?pip install tensorflow buyrug'i asosida nima sodir bo'ladi
+tensorflow kutubxonasi o'rnatiladi
-keras va tensorflow kutubxonasi o'rnatiladi 
-tensorflow kutubxonasi chaqiriladi 
-keras va tensorflow kutubxonasi chaqiriladi 

?Dataset bu nima?
+bu o'qitish uchun kerakli bo'lgan ma'lumotlar to'plamidir
-bu o'qitish uchun kerakli bo'lgan neyronlar to'plamidir 
-bu o'qitish uchun kerakli bo'lgan og'irliklar to'plamidir 
-bu o'qitish uchun kerakli bo'lgan neyron tarmoq qatlamlar to'plamidir 

?Convolutional neural networks (CNN) - bu
+bu ko'p qatlamli neyron tarmoq asosida qurilgan chuqur o'qitishning maxsus arxitekturasi
-bu bir qatlamli neyron tarmoq asosida qurilgan chuqur o'qitishning maxsus arxitekturasi 
-bu ko'p qatlamli neyron tarmoq asosida qurilgan chuqur o'qitishning maxsus usuli 
-bu bir qatlamli neyron tarmoq asosida qurilgan chuqur o'qitishning maxsus usuli

?Mashinali o'qitish va suniy intellect
+Mashinali o'qitish sun'iy intellekt tizimlarini ishlab chiqishga xizmat qiladi 
-Bir tushunchani ifodalaydi
-Sun'iy intellekt mashinali o'qitish tizimlarini ishlab chiqishga xizmat qiladi 
-Turli tushunchalarni ifodalaydi

?Hozirgi kunda butun dunyoda rivojlanib borayotgan mashinali o'qitish (machine learning), chuqur o'qitish (deep learning) kabi usullar sun'iy intellekt 
bilan qanday bog'liq
+tasvirlardan ob'ektlarni tanib olish, video nazorat, ovozni tanib olish kabi sohalarda keng foydalaniladi va sun'iy intellekt tizimini yaratish
-faqat ovozni tanib olishda ishlatiladi va sun'iy intellekt tizimini yaratishda deyarli fodalanilmaydi 
-tasvirlarni tanib olishda ishlatiladi va sun'iy intellekt tizimini yaratishda
foydalaniladi 
-faqatgina ma'lumotlarning intellektual tahliliga oid 

?Muammoni aniqlash, ma'lumotlarni tayyorlash, algoritmni ishlab chiqish va baholash, natijaviy ma'lumotlar aniqligini oshirish va yakuniy natijani 
taqdim qilish - bular qanday jarayonning bosqichlari hisoblanadi.
+Mashinali o'qitish
-Chuqur o'qitish
-Regression tahlil 
-Statistik tahlil

?Mashinali o'qitish nima
+kompyuter dasturining ma'lumotlarni o'qib olish asosida xususiyatlarni o'rganish qobiliyatidir
-faqat kompyuter o'yinlarini yaratish uchun dastur xususiyatlarni o'rganish qobiliyatidir
-bu robotni o'rgatishning an'anaviy usuli 
-kompyuter dasturlarini lug'at yordamida o'qitish usuli

?Chiziqli regression model nima uchun ishlatiladi
+bashorat qilish uchun
-mantiqiy model qurish uchun 
-sinflashtirish masalasini yechish uchun 
-segmentlash masalasini yechish uchun

?Dataset bu nima
+bu o'qitish uchun kerakli bo'lgan ma'lumotlar to'plamidir
-bu o'qitish uchun kerakli bo'lgan neyronlar to'plamidir 
-bu o'qitish uchun kerakli bo'lgan og'irliklar to'plamidir 
-bu o'qitish uchun kerakli bo'lgan neyron tarmoq qatlamlar to'plamidir

?Chiziqli regressiyaga to'g'ri ta'rifni toping
+Ma'lumotlarga chiziqli tenglamani bog'lash orqali ikkita o'zgaruvchi o'rtasidagi munosabatni modellashtirishga aytiladi 
-Chiziqli regressiya ma'lumotlarni klassifikatsiyalaydi 
-Tanlangan ma'lumotlar ichidan kerakli ma'lumotni qidirish algoritmi. 
-O'qitish uchun kerakli bo'lgan og'irliklar to'plami

?Mashinali o’qitish tizimlarini sinflashtirish nechta turga bo'linadi
+4
-5
-3
-2

?Yanada murakkab va yanada mustaqil bo'lgan o'zi o'qidigan dasturlar yaratadigan mashinali o'qitish turi
+Deep learning
-Machine Learning
-Data set
-Training set

?Odatda ............... o'qitishni neyron tarmoqlarga tadbiq qilishadi.Nuqtalar o'rniga mos so'zni qoying
+chuqur  o'qitish
-o'qituvchili o'qitish
-o'qituvchisiz o'qitish
-o'qituchini o'qitish

?Regressiya bu -....
+Bashoratlash uchun obyektni xarakterlovchi ko'p sondagi xususiyatlarini olib bashoratlashga xizmat qiladigan model yaratish
-Bashoratlash uchun obyektni xarakterlovchi bitta xususiyatini olib bashoratlashga xizmat qiladigan model yaratish 
-Siflashtirish uchun obyektni xarakterlovchi bitta xususiyatini olib siflashtirishga xizmat qiladigan model yaratish 
-Siflashtirish uchun obyektni xarakterlovchi ko'p sondagi xususiyatlarini olib siflashtirishga xizmat qiladigan model yaratish 

?Chiziqli va logistic regressiyaning asosiy farqi
+Chiziqli regressiya basharotlash, logistic regressiya sinflashtirish
-Chiziqli sinflashtirish basharotlash, logistic regressiya regressiya 
-Ikkalasi ham bir turdagi masalani ishlash uchun mo'ljallangan 
-Chiziqli regressiya basharotlash

?Python dasturlash tilida ma'lumotlarni visuallashtirish uchun ishlatiladigan kutubxona bu.............
+Matplotlib
-plotData
-Pillow 
-PyPlot 

?Muammoni aniqlash, ma'lumotlarni tayyorlash, algoritmni ishlab chiqish va baholash, natijaviy ma'lumotlar aniqligini oshirish va yakuniy natijani 
taqdim qilish - bular qanday jarayonning bosqichlari hisoblanadi
+Mashinali o'qitish
-Chuqur o'qitish
-Regression tahlil
-Statistik tahlil 

?Mashinali o’qitish asosan takrorlanuvchi jarayon bo'lib, u yangi ma'lumotlar va fikr-mulohazalar asosida modelni o'qitish,
 baholash va takomillashtirishning takroriy sikllarini o'z ichiga oladi
+Iterativ jarayon
-Modelni joylashtirish
-Kategorik o'zgaruvchan kodlash
-Bashoratlash jarayoni

?Tensorflow bu - ...
+Python kutubxonasi bo'lib, neyron tarmoqlarini hosil qilishga mo'ljallangan.
-Matlab kutubxonasi bo'lib, neyron tarmoqlarini hosil qilishga mo'ljallangan. 
-Ocatev kutubxonasi bo'lib, neyron tarmoqlarini hosil qilishga mo'ljallangan. 
-Python kutubxonasi bo'lib, neyron tarmoqlarini hosil qilishga mo'ljallanmagan.

?Biror tasodifiy miqdor oʻrta qiymatining boshqa bir tasodifiy miqdoriga bogʻlikligi
+Regressiya 
-Sinflashtirish
-Strukturali tizim
-Chuqur o‘qitish

?.....................bu  tizimlar taksonlar deb ham ataladi
+O’qituvchisiz
-O’qituvchili
-Chuqur o'qitish 
-Nazoratli

?....................... -   tizimlarda  tanib olish masalasining yechish usuli sifatida maxsus baholarni hisoblash usullari nazarda tutiladi
+Kombinatsiyalashgan
-Strukturali
-Mantiqiy
-Nazoratsiz

?............ -  ob'ektlarni bir -biriga o'xshash xususiyatlarga ega bo'lgan ob'ektlar birlashishi va bir -biriga o'xshash bo'lmagan ob'ektlar 
bir -biridan  ajralib ketadigan tarzda guruhlash usuli
+Klasterlash
-Sinflashtirish
-O'qituvchili o'qitish
-Guruhlash

?............... - bu klasterlar, masalan, statistik taqsimotlar yordamida modellashtirilgan ko'p o'zgaruvchan normal taqsimotlar tomonidan 
ishlatilgan kutish-maksimallashtirish algoritmi
+Tarqatish modeli
-Centroid modeli
-Ulanish modeli
-Zichlik modeli

?......... - bu ikki qavatli klasterlar,  ikkala klaster a'zolari va tegishli atributlar bilan modellashtirilgan
+Subspace modeli
-Grafik asosidagi modeli
-Guruh modeli
-Neyron modeli

?Bitta daraxtga qarab emas, balki har bir daraxtdan bashorat oladi va bashoratlarning ko'pchilik ovoziga asoslanib, yakuniy natijani bashorat qiladi
+Tasodifiy o'rmon
-Qaror daraxti
-K-algoritmi
-Decision Tree 
 
?Bu algoritm ishlatilganda odatdagi so'zlar asosida belgili bitta elektron pochta xabarining spam bo'lishi yoki yo'qligi ehtimolini hisoblab chiqiladi
+Bayes teoremasi
-Tasodifiy o'rmon
-Qaror daraxti
-K-algoritmi

?..................... -  mashinani o'rganish asboblar qutisidagi muhim vositadir, chunki u modellarni umumlashtirish ko'rsatkichlarini yaxshilashga va 
ortiqcha o'rnatishning oldini olishga yordam beradi
-Regularizatsiya
-Klasterlash
-Bazaviy algoritmlash
-Mashinali o‘qitish

?.............. -  ikki yoki undan ortiq  o‘zgaruvchilar o‘rtasidagi chiziqli munosabatni o‘rganuvchi statistik model bo‘lib, bog‘liq bo‘lgan 
o‘zgaruvchilardir
+Chiziqli regressiya
-Regressiya
-Ikki nuqta orasidagi masofa
-Statistik model

?Ma'lumotlar ob'ekti bir nechta guruh yoki klasterga tegishli bo'lishi mumkin bo'lgan usulning bir turi
+Noaniq klasterlash
-Aniq klasterlash 
-Klaster tahlili yoki klasterlash
-Noravshan

?Natijalarni ikkitadan ortiq klasterlar yoki faqat ijobiy qirralar bilan subgrafalar beradi
+Imzolangan grafik modellar
-Neyron modellar
-Grafik asosidagi modellar
-Guruh modellar

?Ma'lumotlar to'plamini k klasterlarga guruhlash uchun foydalaniladigan nazoratsiz mashinani o'rganish algoritmi
+K-klasterlash
-Klasterlash 
-Pythonda klasterlash 
-Klasterlash algoritimlari

?Bu usulning asosiy jihati shundaki, o‘quv tanlanmalarining hammasi ham o‘qitish jarayonida, ham testlash jarayonida ishtirirok etadi. Bu usul.........?
+K-Fold Cross-Validation
-X-Partitioner-Validation
-X-Aggregator K-Fold
-X-Aggregator Cross-Validation

?Bular yuqoridan pastga va pastdan yuqoriga klashterlash algoritmlari hisoblanadi
+Ierarxik klasterlash algoritm
-Kvadrat xatolik algoritm
-Daraxtni saralash algoritm
-K-means algoritm

?Ierarxik klasterlash algoritmlari odatda .................... turga bo'linadi
+2
-3
-4
-5

?Real xolatdan qay darajada farq qilishini vizualizatsiya qilish uchun qaysi komponentadan foydalaniladi
+Line Chart
-Chart Line 
-Cross-Line
-Chart-Validation

?Masaladagi eng muhim jarayon bo'lib bu modelni o‘qitish jarayoni hisoblanadi
+Sinflarga ajratish
 -Sinflashtirish
-Klasterlash
-Samaradorlik ko‘rsatkichi

?Berilgan ob'ektlar to'plamini bir-biridan iloji boricha uzoqroqda joylashgan ma'lum miqdordagi klasterlarga ajratadi
+K-means algoritm
-Kvadrat xatolik algoritm
-Klasterlash algoritm
-Ierarxik klasterlash algoritm

?Sun’iy aql atamasi qachon paydo bo’lgan
+1956-yillarda
-1958-yilda
-1990-yilda
-1988-yilda

?Sun’iy neyron tarmoqlarda nechta qatlamga bo’linadi
+2ta
-3 ta
-7 ta
-5 ta

?Mashinali o'qitishda qo'llaniladigan qanday tanlanma yo'q
+ajratuvchi tanlanma
-sonli tanlanma
-dataset
-o’rgatuvchi

?Sun’iy intellekt tilining asosiy dasturi qaysi
+Python
-C++
-Java
-C#

?Klasterlash o'qitishning qaysi turiga kiradi
+O’qituvchisiz
-O’qituvchi
-Nazoratsiz
-Nazoratli

?Tasvirlarni tanib olish mashinali o'qitish muammolarining qaysi turiga kiradi
+bashorat qilish
-taxminiy
-tanib olish
-tekshirish

?Lineer regressiyada munosabatlar yordamida modellashtirilgan modellar qanday nomlanadi
+chiziqli modellar
-tizimli model
-algebraic
-loss model

?Sun’iy neyron tarmoqlari xususiyatlariga qaysilar kiradi
+modellarni tanlab olish
-sog’lomlik
-maqsad o’qitish
-masofa o’qitish

?Learning Мachine g'oyasi kimga tegishli
+A.M.Tyuring
-T.Mitchell
-A.M.Samuel
-F.Rosenblat

?Sinflashtirishning maqsadi – nima
+obyektlar to’plamini sinflarga ajratish
-matnni aniqlash
-funksiyalarni tahlili
-Sinflashtirish

?Perseptron nima
+miya tomondan axborotni qabul qilishning matematik yoki kompyuter modeli
-mashinali o’qitishda algoritmlar
-O'qituvchili o'qitish muammolarida
-axborotni qabul qilishdagi muammolar

?Eng yaxshi modelni (algoritmni) tanlash uchun mashinali o'qitishning barcha muammolari qaysi turdagi muammolar yechimiga to'g'ri keladi
+optimallashtirish
-klassterlash
-regressiya
-Algoritm

?Mashinalia o'qitishda xato nima deb hisoblanadi
+model javobi bilan talab qilingan (haqiqiy) qiymat o'rtasidagi raqmli_ravishda ko'rsatilgan farq
-xatolarning o'rtacha kvadratlari yig'indisi
-haqiqiy qiymat o’rtasidagi o'rtacha kvadratlari yig'indisi
-model javobi bilan talab qilingan (haqiqiy) qiymat

?Logistik regressiya mashinali o'qitish modelining qaysi turiga kiradi
+parametrli
-shartsiz
-shartli
-tizimli

?Mashinali o'qitishda chiziqli regressiyaning maqsadi nima?
+berilgan nuqtalar (xi,yi)ga eng mos keladigan chiziqni funksiyani topish.
-algoritmni qayta ko’rib chiqish
-berilgan nuqtalar (xi,yi)ga eng mos algoritmlardan foydalanish
-o'qitish uchun kerakli bo'lgan og'irliklar to'plami

?Algoritmni qayta o'qitishning mohiyati nimada
+o'qitilgan algoritmning o'quv tanlanma ob'ektlarida xatolik ehtimoli sinov tanlanma ob'ektlariga qaraganda ancha kam bo'lib chiqadi
-o'qitilgan algoritmning o'quv tanlanma ob'ektlarida xatolik
-o'qitilgan algoritmning ob'ektlarini tekshirish
-ob'ektlarida xatolik ehtimoli sinov tanlanma ob'ektlariga qaraganda ancha kam  chiqadi

?K-Means usuli bilan klasterlash masalasini yechishda qanday optimallashtirish mezonidan foydalaniladi
+nuqtalardan sentroidlar (markaziy nuqtalar)gacha masofalar kvadratlarning yig’indisi
-nuqtalardan sentroidlar  masofalari kvadratlarning ayirmasi
-nuqtalardan sentroidlar (markaziy nuqtalar)
-nuqtalardan sentroidlar  masofalari kvadratlarning yig’indisi

?Regressiya vazifasi bu-
+bir yoki bir nechta xususiyatlarning ob'ektga ta'sirini tekshirish
-sinflarga bo'lingan ko'plab ob'ektlar
-darajaga ko'ra xususiyatning tartibini aniqlash
-xususiyatlarning ob'ektga ta'sirini tekshirish

?Mashinali o'qitish bosqichlari qay tartibda amalga oshiriladi
+1)Muammoni aniqlash. 2)Ma’lumotlarni tayyorlash. 3)Algoritmni ishlab chiqish va baholash. 4)Natijaviy ma’lumotlar aniqligini oshirish. 5)Yakuniy natijani taqdim qilish
-1) Algoritmni ishlab chiqish va baholash 2) Muammoni aniqlash 3) Ma’lumotlarni tayyorlash. 4) Natijaviy ma’lumotlar aniqligini oshirish. 
-1) Algoritmni ishlab chiqish va baholash. 2) Ma’lumotlarni tayyorlash 3) Natijaviy ma’lumotlar aniqligini oshirish. 4)Yakuniy natijani taqdim qilish.
-1)Muammoni aniqlash. 2)Ma’lumotlarni tayyorlash.3) Yakuniy natijani taqdim qilish.

?Regulyarizatsiyalash qaysi tildan olingan
+ingliz tilidan
-rus tilidan
-grekcha
-lotincha

?O‘qitish natijalarini baholash neyron tarmoqlarni o‘qitishning nechanchi vazifasi hisoblanadi
+1-chi
-3-chi
-2-chi
-4-chi

?Neyron tarmoq o'qitish jarayonida monitoring va baholashning asosiy vazifasi nimadan iborat
+ishlash jarayonini aniqlash va aniq ko'rsatish
-bashorat qilish xavfsizligini
-dasturlash va algoritmlar
-murakkab neyron tarmoqlarini o'qitish

?Neyron tarmoqlarini o‘qitishda murakkablik muammolar bular:
+dasturlash, optimallashtirish va ma’lumotlar tahlili
-monitoring va baholash
-oqituvchili va o'qituvchisiz o'qitish
-boshlang'ich dasturlash va algoritmlar

?Backpropagation - bu..............
+iteratsiyadagi xatolik darajasini tahlil qilish
-iteratsiyadagi takrorlanishlarni tahlil qilish
-iteratsiyadagi qadamlarni tahlil qilish
-iteratsiyadagi o'qitish darajasini tahlil qilish

?Perceptron bu - ..............
+neyronni hisoblash tuguni
-qadamlarni hisoblash tuguni
-chiqishlarni hisoblash tuguni
-mahfiylikni  hisoblash tuguni

?Perceptron neyron tarmoqlarda nima vazifani bajaradi
+sinflash masalasini yechishda
-klasterlash masalasini yechishda
-hisoblash masalasini yechishda
-regretsiya masalasini yechishda

?Neyronlar yoki maqsadli hujayralar aloqasi bu - ................
+sinaptik aloqa
-akson neyron aloqa
-neyron qatlamlar aloqasi
-neyronlarda signal aloqasi

?Neyron tarmoqlarda sinovlar va testlar nima vazifani bajaradi
+optimallashtirilishiga
-klasterlashiga
-sinflashtirishga
-tarrorlanishiga

?Qaysi neyron tarmoq ma’lumotlarini qurilma xotirasida saqlaydi
+Suniy
-Biologik
-Tabiiy
-Oddiy

?Perseptron g'oyasini kim taklif qilgan
+Frenk Rozenblat
-Frebn Rozenblat
-Frenk Rozenlovni
-Frankli Rozenblat

?Sun'iy intellektga asoslangan dasturlarni ishlab chiqishdan maqsad nima
+mustaqil fikrlovchi va qaror qabul qiluvchi dasturlarni hayotga tadbiq qilish
-vaqtni maroqli o'tkazish 
-insonlarning yashash darajasini yaxshilash 
-ortiqcha sarf-xarajatni kamaytirish 

?Mashinani o'qitish turlari to'g'ri ko'rsatilgan javobni tanlang
+supervised, unsupervised, Semi-supervised, reinforcement 
-regressiya, Ehtimollar nazariyasi, Supervised, unsupervised 
-supervised, unsupervised, Regressiya, Sinflashtirish 
-regressiya, Sinflashtirish, Semi-supervised, reinforcement 

?Neyron tarmoqlari bu...
+Neyron tarmoqlari juda ko'p muhim xususiyatlarga ega, ammo asosiysi bu o'rganish qobiliyatidir.
-Neyron tarmoqlari ma'lumotlarni bog'lash uchun xizmat qiladi. 
-Bunday tarmoq mavjud emas 
-Ikkilik kod sifatidagi algoritm 

?CNN bu...
+Svyortkali neyron tarmoq
-Adamar neyron tarmog'i 
-K ta yaqin qo'shnilar 
-Qayta murojaat neyron tarmog'i 

?KNN bu...
+K ta yaqin qo'shnilar agoritmi 
-Svyortkali neyron tarmoq
-Adamar almashtririshli Neyron tarmoq 
-CNN –ni to’ldiruvchi qatlam

?Sun'iy intellektda mashinani o'qitish uchun to'g'ri ta'rif berilgan qatorni tanlang
+Inson ongiga taqlid qila oladigan dasturiy ta'minot va uni mashinali o'qitishda aqlli mashinalarga dasturlashning muqobil usulidir.
-Mashinali o'qitish - bu aqlli mashinalarni dasturlashning muqobil usuli. 
-Mashinali o'qitish va suniy intellektning maqsadlari juda boshqacha aqlli mashinalarga dasturlashning muqobil usulidir.
-Neyron tarmoq almashtirishli aqlli mashinalarga dasturlashning muqobil usulidir.

?Mashinali o'qitish turlari qaysi qatorda to'g'ri berilga
+O'qtuvchili va O'qituvchisiz
-Tanlanma 
-Ma'lumotlar bazasi
-Chiziqli va logistik 

?O'qituvchili o'qitish (Supervised learning) - bu .. 
+Modelni xususiyatlari aniq bo'lgan ma'lumotlar bilan o'qitish
-Modelning aniqligini aniqlash algoritmi bilan o'qitish
-Ma'lumotlarga ishlov berish dasturi bilan o'qitish
-Oddiy algoritm bilan o'qitish

?O'qituvchisiz o'qitish (unsupervised learning) - bu ... 
+Aniq bo'lgan ma'lumotlar bilan emas, obyekt parametrlarini (ma'lumotlarni) topish uchun model ustida ishlash
-Ma'lumot qidirish algoritmlaridan tashkil topgan tizim 
-Bunday o'qitish mavjud emas 
-Chuqur o’qitish model ustida ishlash

?Unsupervised learning usulida asosan qanday masala yechiladi
+klasterlash
-normallashtirish 
-sinflashtirish 
-Signallarga ishlov berish 

?Ma'lumotlarni tozalashga to'liq ta'rif berilgan qatorini toping
+model turg'unligiga ta'sir qiluvchi ma'lumotlar olib tashlanadi
-Dataset ma'lumotlarini testlash 
-Signallarga ishlov berish 
-Qaror daraxtidan ma'lumotlarni olib tashlash 

?Xususiyatlarni ajratib olishga to'liq ta'rif berilgan qatorini toping
+Bashoratlash, tashxislash, sinflashtirish, qaror qabul qilish
-Qaror qabul qilish daraxti qiymatlari 
-Sinflashtirish masalasini yechish algoritmi to'plami 
-Mashinali o'qitish algoritmlari
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
