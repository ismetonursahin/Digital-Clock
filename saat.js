function güncelSaat() {
  let yeni = new Date();
  let tarih = yeni.getDay(),
    ay = yeni.getMonth(),
    gun = yeni.getDate(),
    yil = yeni.getFullYear(),
    saat = yeni.getHours(),
    dakika = yeni.getMinutes(),
    saniye = yeni.getSeconds();

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  let aylar = [
    "OCAK",
    "ŞUBAT",
    "MART",
    "NİSAN",
    "MAYIS",
    "HAZİRAN ",
    "TEMMUZ",
    "AĞUSTOS",
    "EYLÜL",
    "EKİM ",
    "KASIM",
    "ARALIK",
  ];

  let gunler = [
    "PAZAR",
    "PAZARTESİ",
    "SALI",
    "ÇARŞAMBA",
    "PERŞEMBE",
    "CUMA",
    "CUMARTESİ",
  ];
  let ids = ["gunAdi", "ay", "gün", "yil", "saat", "dakika", "saniye"];
  let values = [
    gunler[tarih],
    aylar[ay],
    gun.pad(2),
    yil,
    saat.pad(2),
    dakika.pad(2),
    saniye.pad(2),
  ];

  for (let i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock() {
  güncelSaat();
  window.setInterval("güncelSaat()", 1000);
}
