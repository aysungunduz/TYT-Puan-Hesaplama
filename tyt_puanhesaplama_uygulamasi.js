// 1- Türkçe 40
// 2- Matematik 40
// 3- Sosyal Bilimler 20
// 4- Fen Bilimleri 20

// ------> 100 puan OSYM veriyor.
// ------> Okul puanı maks 60 geliyor.

let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let mesaj = `TYT PUAN HESAPLAMA UYGULAMASINA HOSGELDİNİZ
1-Puan Hesapla
2-Cikis Yap`;

// alert (mesaj);

let secim = Number(prompt(mesaj));

switch (secim) {
    case 1:
        okulPuani = Number(prompt("Okul puaninizi giriniz."));
        turkceDogru = Number(prompt("Turkce dogru sayisi"));
        turkceYanlis = Number(prompt("Turkce yanlis sayisi"));

        matematikDogru = Number(prompt("Matematik dogru sayisi"));
        matematikYanlis = Number(prompt("Matematik yanlis sayisi"));

        sosyalDogru = Number(prompt("Sosyal dogru sayisi"));
        sosyalYanlis = Number(prompt("Sosyal yanlis sayisi"));

        fenDogru = Number(prompt("Fen dogru sayisi"));
        fenYanlis = Number(prompt("Fen yanlis sayisi"));

        let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let yanlisSayisi = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi / 4);
        puan = (kalanDogruSayisi * 4) + 100 + okulPuani;
        
        alert(`TYT Puaniniz : ${puan}`);

        break;

    case 2:
        alert("Uygulamadan cikis yapildi.")
        break;

    default:
        alert("Lütfen gecerli aralikta deger giriniz.")
        break;
}