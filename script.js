function member(){
    let rang = document.getElementById("mnum");
    let input = document.getElementById("mnum").value;
    let but2 = document.getElementById("but2");
    let but1 = document.getElementById("but1");
    let but3 = document.getElementById("but3");

    if(input < 5){
        rang.style.border = "1px solid red";
        rang.style.color = "red";
        document.getElementById("demo").innerHTML = "Qiymatni Kattaroq Kiriting!";
    }else if(input > 500){
        rang.style.border = "1px solid red";
        rang.style.color = "red";
        document.getElementById("demo").innerHTML = "Qiymatni Katta Kichik Kiriting!";
    }else{
        rang.style.border = "1px solid green";
        rang.style.color = "green";
        document.getElementById("demo").innerHTML = "Qiymat To'g'ri Kiritildi!";
        but1.style.display = "none";
        but2.style.display = "block";
        var a = prompt("Telegram URL manzilni kiriting...");
        if(a == ""){
            alert("Kanal topilmdi Qayta Urunib Ko'ring!"),
            window.location.reload(true);
        }else if(a == "https://t.me/" + ""){
            alert("URL manzil to'g'ri kiritildi!")
        }else{
        alert("Biz ushbu " + a + " Kanalga obunachi yubormoqdamiz");
        }
        setTimeout(function(){
            but2.style.display = "none";
            but3.style.display = "block";
        }, 15500);
        swal({
            title: "Iltimos Kuting",
            text: "Tez Orada Obunachi Yuboriladi!",
            icon: "success",
            timer: 3500,
        });
    };
};
function members(){
    let tekshirr = document.getElementById("tekshir");
    let tekshir = document.getElementById("tekshir").value;
    let burs = document.getElementById("burs");
    let bur = document.getElementById("bur");
    let burss = document.getElementById("burss");

    if(tekshir < 50){
        tekshirr.style.border = "1px solid red";
        tekshirr.style.color = "red";
        document.getElementById("demos").innerHTML = "Qiymatni Kattaroq Kiriting!";
    }else if(tekshir > 1000){
        tekshirr.style.border = "1px solid red";
        tekshirr.style.color = "red";
        document.getElementById("demos").innerHTML = "Qiymatni Katta Kichik Kiriting!";
    }else{
        tekshirr.style.border = "1px solid green";
        tekshirr.style.color = "green";
        document.getElementById("demos").innerHTML = "Qiymat To'g'ri Kiritildi!";
        bur.style.display = "none";
        burs.style.display = "block";
        var a = prompt("Xabar URL manzilni kiriting...");
        if(a == ""){
            alert("Kanal topilmdi Qayta Urunib Ko'ring!"),
            window.location.reload(true);
        }else if(a == "https://t.me/" + ""){
            alert("URL manzil to'g'ri kiritildi!")
        }else{
        alert("Biz ushbu " + a + "postga ko'rishlar sonini yubormoqdamiz!");
        }
        setTimeout(function(){
            burs.style.display = "none";
            burss.style.display = "block";
        }, 15500);
        swal({
            title: "Iltimos Kuting",
            text: "Tez Orada Ko'rishlar Yuboriladi!",
            icon: "success",
            timer: 3500,
        });
    };
};
function memberl(){
    let bul = document.getElementById("buls");
    let buls = document.getElementById("buls").value;
    let bulrr = document.getElementById("bulrr");
    let bulr = document.getElementById("bulr");
    let bulrrr = document.getElementById("bulrrr");

    if(buls < 3){
        bul.style.border = "1px solid red";
        bul.style.color = "red";
        document.getElementById("demor").innerHTML = "Qiymatni Kattaroq Kiriting!";
    }else if(buls > 5){
        bul.style.border = "1px solid red";
        bul.style.color = "red";
        document.getElementById("demor").innerHTML = "Qiymatni Katta Kichik Kiriting!";
    }else{
        bul.style.border = "1px solid green";
        bul.style.color = "green";
        document.getElementById("demor").innerHTML = "Qiymat To'g'ri Kiritildi!";
        bulr.style.display = "none";
        bulrr.style.display = "block";
        var a = prompt("Telegram Raqamingiz yoki Linkingizni yozing..");
        if(a == ""){
            alert("Qiymat bo'sh bo'lishi mumkun emas"),
            window.location.reload(true);
        }else{
        alert("Biz ushbu " + a + "ga tez orada Aloqaga chiqamiz!");
        }
        setTimeout(function(){
            bulrr.style.display = "none";
            bulrrr.style.display = "block";
        }, 1566500);
        swal({
            title: "Iltimos Kuting",
            text: "Tez Orada Aloqaga chiqamiz",
            icon: "success",
            timer: 3500,
        });
    };
};
var slideIndex = 1;
showSlides(slideIndex);
function plusDivs(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("MySlider");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
};
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:40,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});