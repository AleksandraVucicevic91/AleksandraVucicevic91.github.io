otvoreno = false 
$(function citaj(){
  $.ajaxSetup ({
    cache: false,
    complete: function() {
    // Ucitavanje temperature na svaku sekundu
      setTimeout(citaj, 1000);
    }
  });
  if(!otvoreno){

    /*
        pristupamo localhost:8080/distanca servisu i za podatke koje dobijemo sa servisa (data) 
        proveravamo da li je distanca manja od 50.
        struktura podataka koje dobijamo je sledeća:
        {
          distanca:52.2552
        }
        tako ćemo i korišćenjem data.distanca da dođemo do vrednosti distance.

        Koristio jQuery ($) da pristupimo elementu sa id-em alert-notifikacija 
        kako bismo promenili njegovo prikazivanje zavisno od razdaljine 
    
    */
    $.getJSON('http://localhost:8080/temperatura', function(data) {
        $('#poljetext').html(data.temperatura);

        if (data.temperatura>30) {
            $("#polje").css("border-color",	"#DC3232");
        }else if (data.temperatura<21) {
            $("#polje").css("border-color",	"#3271DC");
        } else {
            $("#polje").css("border-color",	"#d7c79e");
        }
        console.log(data);
       
    });
  } 
});
