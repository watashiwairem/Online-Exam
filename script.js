var sure_id=document.getElementById("sure");
var point_id=document.getElementById("point");
var verilenSure= 2400;
t_int = setInterval(timer,1000);
var inputCount;
var indexSoruNumarasi = document.getElementById("soru-num-int").innerHTML;
var cevapList = ["a", "b", "c", "d", "e"];
var puan = 0;
var dogruCevapSayisi = 0;
var cevaplar = [];

/*---------------------------------SÜRE KISMI---------------------------------------*/
function timer() {
  var sure_id = document.getElementById("sure_id");
  var dakika_id = document.getElementById("dakika_id");
  var saniye_id = document.getElementById("saniye_id");

  if (verilenSure <= 0) {
    sure_id.innerHTML = "Süreniz doldu!";
  } else {
    var dakika = Math.floor(verilenSure / 60);
    var saniye = verilenSure % 60;
    if (dakika < 10) {
      dakika = "0" + dakika;
    }
    if (saniye < 10) {
      saniye = "0" + saniye;
    }
    dakika_id.innerHTML = dakika;
    saniye_id.innerHTML = saniye;
    verilenSure--;
  }
}
/*---------------------------------SÜRE BİTİŞ------------------------------------------ */

/*------------------------------SORU İÇERİĞİ HAZIRLAMA------------------------------- */
window.onload = function () {
  if (indexSoruNumarasi == 1) {
    
    console.log(inputCount);

    document.getElementById("soru-num-int").innerHTML = 1;
    document.getElementById("soru").innerHTML = sorular[0].aciklama;

    document.getElementById("secenek1").innerHTML = sorular[0].cevap1;

    document.getElementById("secenek2").innerHTML = sorular[0].cevap2;

    document.getElementById("secenek3").innerHTML = sorular[0].cevap3;

    document.getElementById("secenek4").innerHTML = sorular[0].cevap4;

    document.getElementById("secenek5").innerHTML = sorular[0].cevap5;
    myFunction(countQuestions);
  }
};
/*-------------------------------SORU İÇERİĞİ HAZIRLAMA BİTİŞ---------------------------- */

/*------------------------------SORULAR--------------------------------------------*/
let sorular = [
  {
    numara: 1,
    aciklama: "İnsan vücudunda hangi organ solunum işlevini gerçekleştirir?",
    cevap1: "Kalp",
    cevap2: "Karaciğer",
    cevap3: "Akciğer",
    cevap4: "Mide",
    cevap5: "Böbrek",
    cevap: "c",
  },
  {
    numara: 2,
    aciklama: "Aşağıdakilerden hangisi sürdürülebilir enerji kaynaklarından biridir?",
    cevap1: "petrol",
    cevap2: "kömür",
    cevap3: "rüzgar",
    cevap4: "doğal gaz",
    cevap5: "hiçbiri",
    cevap: "c",
  },
  {
    numara: 3,
    aciklama: "Işığın hangi ortamda hızı en yavaş olur?",
    cevap1: "vakum",
    cevap2: "su",
    cevap3: "cam",
    cevap4: "hava",
    cevap5: "toprak",
    cevap: "c",
  },
  {
    numara: 4,
    aciklama: "Bir köpek yavrusu ile ilgili hangi ifade yanlıştır?",
    cevap1: "Yavrularını süt ile besler.",
    cevap2: "Yavrularını süt ile besler.",
    cevap3: "Süt dişleri kalıcıdır.",
    cevap4: "Yavruları anneleri tarafından eğitilir.",
    cevap5: "Hepsi",
    cevap: "c",
  },
  {
    numara: 5,
    aciklama:
      "Hangi gezegen Güneş Sistemi'ndeki en büyük gezegendir?",
    cevap1: "Mars",
    cevap2: "Jüpiter",
    cevap3: "Venüs",
    cevap4: "Uranüs",
    cevap5: "Satürn",
    cevap: "b",
  },
  {
    numara: 6,
    aciklama: "Hangi ifade bir JavaScript döngüsüdür?",
    cevap1: "if...else",
    cevap2: "try...catch",
    cevap3: "for",
    cevap4: "switch...case",
    cevap5: "class",
    cevap: "c",
  },
  {
    numara: 7,
    aciklama:
      "Hangi ülkenin başkenti Oslo'dur?",
    cevap1: "İsveç",
    cevap2: "Finlandiya",
    cevap3: "Norveç",
    cevap4: "Danimarka",
    cevap5: "Kore",
    cevap: "c",
  },
  {
    numara: 8,
    aciklama: "Hangisi JavaScript için geçerli bir veri tipi değildir?",
    cevap1: "Undefined",
    cevap2: "Symbol",
    cevap3: "String",
    cevap4: "NaN",
    cevap5: "Object",
    cevap: "c",
  },
  {
    numara: 9,
    aciklama: "Bir yıl kaç gün sürer?",
    cevap1: "365 gün",
    cevap2: "366 gün.",
    cevap3: "360 gün",
    cevap4: "362 gün",
    cevap5: "363 gün",
    cevap: "a",
  },
  {
    numara: 10,
    aciklama:
      "Bir futbol maçında kaç yedek oyuncu bulunabilir?",
    cevap1: "5",
    cevap2: "6",
    cevap3: "7",
    cevap4: "4",
    cevap5: "2",
    cevap: "a",
  },
]; 
var countQuestions = sorular.length;
/*----------------------------SORULAR BİTİŞ-------------------------------- */
function screenUpdate(soruNumber) {
  saveAnswer(); //o cevap işaretlenmemiş olarak gelsin diye 

  document.getElementById("soru-num-int").innerHTML = soruNumber;
  document.getElementById("soru").innerHTML = sorular[soruNumber - 1].aciklama;

  document.getElementById("secenek1").innerHTML =
    sorular[soruNumber - 1].cevap1;

  document.getElementById("secenek2").innerHTML =
    sorular[soruNumber - 1].cevap2;

  document.getElementById("secenek3").innerHTML =
    sorular[soruNumber - 1].cevap3;

  document.getElementById("secenek4").innerHTML =
    sorular[soruNumber - 1].cevap4;

  document.getElementById("secenek5").innerHTML =
    sorular[soruNumber - 1].cevap5;
}
/*------------------------------İLERİ-GERİ BUTONLAR----------------------------- */
function nextQuestion() {
  soruKontrol();
  
  indexSoruNumarasi++;
  if (indexSoruNumarasi > countQuestions) {
    indexSoruNumarasi = 1; // başa dönüldü
  }

  screenUpdate(indexSoruNumarasi);
  saveAnswer();
}

function backQuestion() {
  soruKontrol();
  
  indexSoruNumarasi--;
  if (indexSoruNumarasi < 1) {
    indexSoruNumarasi = sorular.length; // başa dönüldü
  }

  screenUpdate(indexSoruNumarasi);
  saveAnswer();
}
/*------------------------------İLERİ-GERİ BUTONLAR BİTİŞ----------------------- */
function soruKontrol() {
  var flagSpaceAns = false; //cevap girip girmediğini kontrol ediyor.  Boş geçince değeri 0 atıyor. Soru kaymaması için

  {
    var ele = document.getElementsByName("secenekismi"); //a,b,c,d,e

    var dictDogruCevap = sorular[indexSoruNumarasi - 1].cevap;

    for (i = 0; i < ele.length; i++) {
      
      if (ele[i].checked) {
        flagSpaceAns = true;

        if (dictDogruCevap == cevapList[i]) {
          
          if (cevaplar.length < indexSoruNumarasi) {   // cevap doğru ilk defa girdi
          
            cevaplar.push(cevapList[i]);
            document.getElementsByClassName("sorular-button")[indexSoruNumarasi - 1].style.backgroundColor = "green";
            puan += Math.floor(100 / sorular.length);
            document.getElementById("point").innerHTML = puan.toFixed(2);
          } 
          else {
            //cevap doğru ama önceden girilmiş
            
            if (cevaplar[indexSoruNumarasi - 1] == cevapList[i]) {
              //cevap önceden de doğruydu şimdide doğru
            } 
            else {
              //cevap önceden yanlıştı şimdi doğru

              puan += Math.floor(100 / sorular.length);
              document.getElementById("point").innerHTML = puan.toFixed(2);
              document.getElementsByClassName("sorular-button")[indexSoruNumarasi - 1].style.backgroundColor = "green";
              cevaplar[indexSoruNumarasi - 1] = cevapList[i];
            }
          }
          
          ele[i].checked = false;
        } else {
          //Yanlış cevap için
          
          if (cevaplar.length < indexSoruNumarasi) {
            //cevap yanlış ve ilk defa giriyor

            cevaplar.push(cevapList[i]);
            document.getElementsByClassName("sorular-button")[indexSoruNumarasi - 1].style.backgroundColor = "blue";
            document.getElementById("point").innerHTML = puan.toFixed(2);
          } else {
            //cevap yanlış ve onceden girilmiş
          
            if (cevaplar[indexSoruNumarasi - 1] == dictDogruCevap) {
              //önceden doğruydu şimdi yanlış

              puan -= Math.floor(100 / sorular.length);
              document.getElementById("point").innerHTML = puan.toFixed(2);
              document.getElementsByClassName("sorular-button")[indexSoruNumarasi - 1].style.backgroundColor = "blue";
              cevaplar[indexSoruNumarasi - 1] = cevapList[i];
            } else if (cevaplar[indexSoruNumarasi - 1] == "0") { //önceden boştu şimdi yanlış
              document.getElementsByClassName("sorular-button")[indexSoruNumarasi - 1].style.backgroundColor = "blue";
              cevaplar[indexSoruNumarasi - 1] = cevapList[i];
            } else {
              ///Önceden yanlış olup yine yanlış olunca değişiklik olmayacak             
            }
          }
        }
      }
    }
  
    if (flagSpaceAns == false) {
      cevaplar.push("0");
    }
  }
}
function myFunction(e) {
  // e burada soru sayısına eşit
  for (let i = 1; i < e + 1; i++) {
    let newBtn = document.createElement("button"); // buton ekledik 
    newBtn.innerText = i; // butona sayı eklendi
    newBtn.classList.add("sorular-button"); // Burada sorular-button sınıfı ekleniyor.Her bir soru için buton classı

    // bir butona tıklandığında neler olacak bunu anlatıyor
    newBtn.onclick = function () {
      indexSoruNumarasi = i;

      for (   // 1'den 10!a atladığımızda diğer sorulara 0 değeri atasın
        var indexBoslukKoyma = cevaplar.length + 1;      
        indexBoslukKoyma < indexSoruNumarasi;
        indexBoslukKoyma++
      ) {
        cevaplar.push("0");
      }

      screenUpdate(i);
    };

    document.querySelector("#button-container").appendChild(newBtn);
  }
}


/*-------------------------------------SORU EKLEME--------------------------------------- */
function soruEkleme() {
  var girdiSoru = document.getElementById("inputQuestion").value;
  var girdiA = document.getElementById("inputA").value;
  var girdiB = document.getElementById("inputB").value;
  var girdiC = document.getElementById("inputC").value;
  var girdiD = document.getElementById("inputD").value;
  var girdiE = document.getElementById("inputE").value;
  var girdiDogruCevap = document.getElementById("dogruCevap").value.toLowerCase();

  const newObjAdd = {
    numara: countQuestions + 1,
    aciklama: girdiSoru,
    cevap1: girdiA,
    cevap2: girdiB,
    cevap3: girdiC,
    cevap4: girdiD,
    cevap5: girdiE,
    cevap: girdiDogruCevap,
  };

  if (
    girdiSoru != "" &&
    girdiA != "" &&
    girdiB != "" &&
    girdiC != "" &&
    girdiD != "" &&
    girdiE != "" &&
    girdiDogruCevap != ""
  ) {
    sorular.push(newObjAdd);
    countQuestions++;
    let newBtn = document.createElement("button");
    newBtn.innerText = countQuestions;
    newBtn.classList.add("sorular-button"); // Burada sorular-button sınıfı ekleniyor.

    newBtn.onclick = function () {   //butona tıklarsak o soru gelsin karşımıza
      screenUpdate(countQuestions);
    };

    document.querySelector("#button-container").appendChild(newBtn);
  
    for (var d = 0; d < sorular.length; d++) {
      document.getElementsByClassName("sorular-button")[d].style.backgroundColor = rgb(241, 234, 250);
    }
    document.getElementById("point").innerHTML = "";
  } else {
    alert("Boş Giriş Yaptınız, Lütfen Sorunuzu Giriniz");
  }
}

/*----------------------------------------------SORU EKLEME BİTİŞ---------------------------------------------- */

/*--------------------------------------------------SORU ÇIKARMA------------------------------------------------ */
function soruCikarma() {
  var soruCikarmaNo = document.getElementById("SoruCikarma").value;
  if (soruCikarmaNo > countQuestions || soruCikarmaNo < 1) {
    alert(
      "Girdiğiniz Sayıda Bir Soru Bulunmamaktadır !!"
    );
  } else {
    for (var e = 0; e < sorular.length; e++) {
      document.getElementsByClassName("sorular-button")[e].style.backgroundColor = "rgb(241, 234, 250)";
    }
    
    sorular.splice(soruCikarmaNo - 1, 1); // çıkarttı
    countQuestions--;

    for ( // kaydırma işlemi
      var indexFor = soruCikarmaNo - 1;
      indexFor < countQuestions - soruCikarmaNo;
      indexFor++
    ) {
      sorular[indexFor].soruid--;
    }

    const buttonContainer = document.querySelector("#button-container");
    while (buttonContainer.firstChild) {
      buttonContainer.removeChild(buttonContainer.firstChild);
    }
    if (soruCikarmaNo == indexSoruNumarasi) {
      nextQuestion();
    }
    myFunction(countQuestions);
  }
}
/*----------------------------------------------------------SORU ÇIKARMA BİTİŞ---------------------------------------------------- */
function saveAnswer() {
  if (cevaplar.length < indexSoruNumarasi) { //geçtiğimiz soruyu kontrol ediyoruz. İşaretlenmemiş
    for (var a = 0; a < cevapList.length; a++) { 
      document.getElementsByName("secenekismi")[a].checked = false;
    }
  } else {
    var prevAns = cevaplar[indexSoruNumarasi - 1]; // bu soruya önceden verilmiş cevaptır
    for (var i = 0; i < cevapList.length; i++) {
      if (cevapList[i] == prevAns) { 
        document.getElementsByName("secenekismi")[i].checked = true;   //o seçeneği doğru olarak işaretledik
      } else if (prevAns == "0") {
        for (var a = 0; a < cevapList.length; a++) {
          document.getElementsByName("secenekismi")[a].checked = false;
        }
      }
    }
  }
}
function uygulamayiBitir(){
  alert(
    "Sınavınız Sonlandırılmış ve Gönderilmiştir."
  );
  window.location.reload(false);
}


