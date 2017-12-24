$(function() {

   var allquestions = {
    Freja : {
      qa:[
        { q:"'Indien är ett _____ land'. Vad fattas?", a:"Förunderligt"},
        { q:"Katet 1 = 3, Hypotenusa = 5, Katet 2 = ?", a:"4"},
        { q:"Lös anagrammet (någon du känner): 'TJIBBER GULLREGN'", a:"BERTIL LJUNGBERG"},
        { q:"Vad heter gitarrmodellen?", a:"Fender Stratocaster|Stratocaster", i:"/gfx/strata.jpg"},
        { q:"Vilket år uruppfördes Nötknäpparen?", a:"1892"},
        { q:"Lös anagrammet (librettist): 'BUSA JULRÖVEN'", a:"Björn Ulvaeus"},
        { q:"På vilken LP finns Taxman?", a:"Revolver"},
        { q:"Vem är på bilden?", a:"Emma Jhaveri", i:"/gfx/emma.jpg"},
        { q:"Vem spelade Karl-Oskar i Utvandrarna (filmen)?", a:"Max von Sydow"},
        { q:"Lös anagrammet (någon du känner): 'WIN MAJSKAKA'", a:"KAJSA WIKMAN"}
      ],
      ft: "Vi längtar till att du kommer hem!<br />Skatten hittar du på ditt bankkonto."
    },
    Selma : {
      qa:[
        { q:"Katet 1 = 3, Hypotenusa = 5, Katet 2 = ?", a:"4"},
        { q:"På vilken LP finns Taxman?", a:"Revolver"},
        { q:"Lös anagrammet (namn på någon du känner): 'GLIDIG B NJURGREN'", a:"INGRID LJUNGBERG"},
        { q:"Vem spelade Karl-Oskar i Utvandrarna (filmen)?", a:"Max von Sydow"},
        { q:"Vem är på bilden?", a:"Arvid Hall", i:"/gfx/arvid.jpg"},
        { q:"Lös anagrammet (librettist): 'BUSA JULRÖVEN'", a:"Björn Ulvaeus"},
        { q:"Vad heter gitarrmodellen?", a:"Fender Stratocaster|Stratocaster", i:"/gfx/strata.jpg"},
        { q:"Från vilket land kommer Toots?", a:"Belgien" },
        { q:"Bilens lack den glänste. ____ blixtrade i dess nos. Vad fattas?", a:"Kromen" },
        { q:"Lös anagrammet (namn på någon du känner): 'TRE TOPLESS BONDE'", a:"Petter Bodelsson"}
      ],
      ft: "Kolla i skåpet med fintallrikar!<br >Berätta inte för din syster innan hon har hittat sin skatt!"
    },

    Ella : {
      qa:[
        { q:"I vilken världsdel ligger Liberia?", a:"Afrika"},
        { q:"Vilka toner ingår i ett G7-ackord?", a:"GBDF"},
        { q:"Lös anagrammet (namn på någon du känner): 'HELADE SLEM'", a:"SELMA EHLDE"},
        { q:"Vad hette Beatles producent?", a:"George Martin"},
        { q:"Vem är på bilden?", a:"Klara Kristiansson|Clara Kristiansson|Klara|Clara", i:"/gfx/Klara.jpg"},
        { q:"Lös anagrammet (skrivit bl.a. musikal): 'SNEBEN SNORDYNA'", a:"Benny Andersson"},
        { q:"Vad heter instrumentet?", a:"oboe", i:"/gfx/oboe.jpg"},
        { q:"Vem har skrivit 'Village ghetto land'?", a:"Stevie Wonder"},
        { q:"'Vakna vid underbar ____ av röster'. Vad saknas?", a:"Korus"},
        { q:"Lös anagrammet (namn på någon du känner): 'BERRI LARVMAGE'", a:"Elvira Ramberg"}
      ],
      ft: "Kolla i din trumpetväska!<br />Berätta inte för din syster innan hon har hittat sin skatt!"
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