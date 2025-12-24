$(function() {

   var allquestions = {
    Freja : {
      qa:[
        { q:"Vad är tyska för åskväder?", a:"Donnerwetter"},
        { q:"Vad hette din mormorsmor i förnamn?", a:"Brita"},
        { q:"Vad heter den största svarta kråkfågeln?", a:"Korp"},
        { q:"Skriv de fem första primtalen", a:"2 3 5 7 11|2,3,5,7,11"},
        { q:"Vem är sötast i familjen Ehlde?", a:"Pappa|Magnus"},
        { q:"Hur många byte är en kilobyte?", a:"1024"},
        { q:"Vem har skrivit om tant Brun, tant Grön och tant Gredelin?", a:"Elsa Beskow"},
        { q:"Om vem skrev Arthur Conan Doyle?", a:"Sherlock Holmes"},
        { q:"Vilket år föll Berlinmuren?", a:"1989"},
        { q:"Vad kallas hanen av en hjort?", a:"Hjort"},
        { q:"Vad mäter man i volt?", a:"Spänning"},
        { q:"Vad står www för?", a:"World Wide Web"},
        { q:"Hur många dagar har ett skottår?", a:"366"},
        { q:"Vad heter Beatles sparkade trummis?", a:"Pete Best"},
        { q:"Var sätts Kristina från Duvemåla upp nästa gång?", a:"Koblenz "}
      ],
      ft: "Sådärja! Kolla bakom en kudde i en blå soffa."
    },
    Selma : {
      qa:[
        { q:"Vad är tyska för åskväder?", a:"Donnerwetter"},
        { q:"Vad hette din mormorsmor i förnamn?", a:"Brita"},
        { q:"Vad heter den största svarta kråkfågeln?", a:"Korp"},
        { q:"Skriv de fem första primtalen", a:"2 3 5 7 11|2,3,5,7,11"},
        { q:"Vem är sötast i familjen Ehlde?", a:"Pappa|Magnus"},
        { q:"Hur många byte är en kilobyte?", a:"1024"},
        { q:"Vem har skrivit om tant Brun, tant Grön och tant Gredelin?", a:"Elsa Beskow"},
        { q:"Om vem skrev Arthur Conan Doyle?", a:"Sherlock Holmes"},
        { q:"Vilket år föll Berlinmuren?", a:"1989"},
        { q:"Vad kallas hanen av en hjort?", a:"Hjort"},
        { q:"Vad mäter man i volt?", a:"Spänning"},
        { q:"Vad står www för?", a:"World Wide Web"},
        { q:"Hur många dagar har ett skottår?", a:"366"},
        { q:"Vad heter Beatles sparkade trummis?", a:"Pete Best"},
        { q:"Var sätts Kristina från Duvemåla upp nästa gång?", a:"Koblenz "}
      ],
      ft: "Sådärja! Kolla i pallen i hallen."
    },
    Ella : {
      qa:[
        { q:"Vad är tyska för åskväder?", a:"Donnerwetter"},
        { q:"Vad hette din mormorsmor i förnamn?", a:"Brita"},
        { q:"Vad heter den största svarta kråkfågeln?", a:"Korp"},
        { q:"Skriv de fem första primtalen", a:"2 3 5 7 11|2,3,5,7,11"},
        { q:"Vem är sötast i familjen Ehlde?", a:"Pappa|Magnus"},
        { q:"Hur många byte är en kilobyte?", a:"1024"},
        { q:"Vem har skrivit om tant Brun, tant Grön och tant Gredelin?", a:"Elsa Beskow"},
        { q:"Om vem skrev Arthur Conan Doyle?", a:"Sherlock Holmes"},
        { q:"Vilket år föll Berlinmuren?", a:"1989"},
        { q:"Vad kallas hanen av en hjort?", a:"Hjort"},
        { q:"Vad mäter man i volt?", a:"Spänning"},
        { q:"Vad står www för?", a:"World Wide Web"},
        { q:"Hur många dagar har ett skottår?", a:"366"},
        { q:"Vad heter Beatles sparkade trummis?", a:"Pete Best"},
        { q:"Var sätts Kristina från Duvemåla upp nästa gång?", a:"Koblenz "}
      ],
      ft: "Sådärja! Kolla bakom adelgatantavlan."
    },
    Viktor : {
      qa:[
        { q:"Vad är tyska för åskväder?", a:"Donnerwetter"},
        { q:"Vad hette Frejas mormorsmor i förnamn?", a:"Brita"},
        { q:"Vad heter den största svarta kråkfågeln?", a:"Korp"},
        { q:"Skriv de fem första primtalen", a:"2 3 5 7 11|2,3,5,7,11"},
        { q:"Vem är sötast i familjen Ehlde?", a:"Pappa|Magnus"},
        { q:"Hur många byte är en kilobyte?", a:"1024"},
        { q:"Vem har skrivit om tant Brun, tant Grön och tant Gredelin?", a:"Elsa Beskow"},
        { q:"Om vem skrev Arthur Conan Doyle?", a:"Sherlock Holmes"},
        { q:"Vilket år föll Berlinmuren?", a:"1989"},
        { q:"Vad kallas hanen av en hjort?", a:"Hjort"},
        { q:"Vad mäter man i volt?", a:"Spänning"},
        { q:"Vad står www för?", a:"World Wide Web"},
        { q:"Hur många dagar har ett skottår?", a:"366"},
        { q:"Vad heter Beatles sparkade trummis?", a:"Pete Best"},
        { q:"Var sätts Kristina från Duvemåla upp nästa gång?", a:"Koblenz "}
      ],
      ft: "Sådärja! Kolla under harpejjin."
    }
  };

  var currq = 0;
  var questions = allquestions[person];

  function init() {
    $("a.start").on("click", start);    
    $("a.answer").on("click", answer);    
  }

  function start() {
    getQuestion();
    $('.pop.start').fadeOut('slow', function(){$('.pop.question').fadeIn('slow', function(){$(".pop.question .answer").focus();});});
  }

  function getQuestion() {
    $(".pop.question .answer").val("");
    $('.pop.question h2').html("Fråga " + String(currq + 1) + ".");
    $('.pop.question h3').html(questions.qa[currq].q);
    if (questions.qa[currq].i)
      $('.pop.question img.qimg').attr("src", questions.qa[currq].i).show();
    else
      $('.pop.question img.qimg').hide();
  }

  function checkanswer(tryanswer, correctanswer) {
    var ca = correctanswer.split('|');
    var ta = tryanswer.toLowerCase().replace(/ /g, "");
    var ok = false;
    for (var i=0; !ok && i < ca.length; i++) {
      ok = (ca[i].toLowerCase().replace(/ /g, "") == ta);
    }
    return ok;
  }

  function answer() {
    if (checkanswer($(".pop.question .answer").val(), questions.qa[currq].a)) {
      $(".pop.question .clap img").attr('src', '/gfx/clap/clap' + (currq % 10) + '.gif')
      $(".pop.question .clap").css("width", 0).show().animate({width:"90%"}, 1000);
      setTimeout(function(){
        if (currq == questions.qa.length-1) {
          $(".pop.question").fadeOut("slow", function(){
            $(".pop .fintext").html(questions.ft);
            $(".pop.final").fadeIn("slow");
          });
        }
        else {
          $(".pop.question").fadeOut("slow", function(){
            $(".pop.question .clap").hide();
            nextq();
          });
        }
      }, 6000);
    }
    else {
      $(".pop.question").addClass("shake-hard");
      setTimeout(function(){
        $(".pop.question").removeClass("shake-hard");
        $(".pop.question .answer").focus();
      }, 2000);
    }
  }

  function nextq() {
    currq++;
    getQuestion();
    $(".pop.question").fadeIn("slow", function(){$(".pop.question .answer").focus();});
  }

  jQuery(document).ready(function() {
    init();
  });


});