$(function() {

  var allquestions = {
    Freja0 : {
      qa:[
        { q:"Vilket var mammas och pappas gamla telefonnummer?", a:"149735" },
        { q:"Vad heter författaren till artikeln Osiris i NE?", a:"Jan Bergman" },
        { q:"Vilken ugnstemperetur ska man ha då man lagar &quot;Nötstek i gryta&quot;?", a:"175" },
        { q:"Bra jobbat! Kolla i skåpet under kaffebryggaren.<br /><br />Vilken krydda finns i O.P. Anderson förutom kummin och anis?", a:"Fänkål" },
        { q:"Vilket beteckning har våra dammsugarpåsar?", a:"M50"},
        { q:"Min lilla ponnys mule är mjuk som vad?", a:"Sammet" },
        { q:"Hur många invånare hade Tamil Nadu 2001?", a:"62405679" },
        { q:"Vad är kortnumret på Ellas Gerdahallkort?", a:"000310705" },
        { q:"Bra jobbat! Kolla i skåpet med finglas vid köksbordet.<br /><br />Vem har skrivit det svenska förordet till boken om sköldpaddor i Jordens djur?", a:"Staffan Ulfstrand" },
        { q:"Vad heter skalbagge i Wales?", a:"Chwilen" },
        { q:"Hur många hål finns det i varje platta i taket ovanför köksbordet?", a:"600" },
        { q:"Hur många kcal finns det i 100g O´boy?", a:"370" }
      ],
      ft: "Kolla i hallgarderoben!"
    },
    Freja : {
      qa:[
        { q:"Vilket var mammas och pappas gamla telefonnummer?", a:"149735" }
      ],
      ft: "Vi längtar till att du kommer hem!<br />Skatten hittar du på ditt bankkonto."
    },
    Selma : {
      qa:[
        { q:"Vilket telefonnummer har Cecilia Br?", a:"120679" },
        { q:"Vilket är sista uppslagsordet i band 17 i Nationalencyklopedin?", a:"Syremättnad" },
        { q:"Vad heter en rödhake i Wales?", a:"Goch" },
        { q:"Bra jobbat! Kolla under skötbordet.<br /><br />I vilket tonart går &quot;Goddag herr Gås&quot;", a:"F" },
        { q:"Om du adderar 1000 med ett helt tal, blir resultatet mer, än om du skulle multiplicera 1000 med samma tal. Vilket är talet? ", a:"1" },
        { q:"Hur många grader celsius är absoluta nollpunktern?", a:"-273" },
        { q:"I vilken taktart går 'Hej tomtegubbar'?", a:"3/4" },
        { q:"Vad heter författaren till artikeln Tizan i NE?", a:"Sven Sandström" },
        { q:"Bra jobbat! Kolla under kopparbordet vid tv-soffan.<br /><br />Antal hjärtan på köksgardinen?", a:"55" },
        { q:"Vad är huvudingrediensen i Osso Buco? ", a:"Kalvlägg" },
        { q:"Vad är porter som man använder till porterstek?", a:"Öl" },
        { q:"Vad heter den första operan under bokstaven C i Bonniers musiklexikon?", a:"Carmen" },
        { q:"Hur många kcal finns det i 100g Kickup?", a:"4" },
        { q:"Hur många invånare hade Jharkhand 2001?", a:"26945829" }
      ],
      ft: "Kolla i ugnen!"
    },
    Ella : {
      qa:[
        { q:"I vilken taktart går 'Hej tomtegubbar'?", a:"3/4" },
        { q:"Vilket är sista uppslagsordet i band 17 i Nationalencyklopedin?", a:"Syremättnad" },
        { q:"Vilket var mammas och pappas gamla telefonnummer?", a:"149735" },
        { q:"Hur många invånare hade Jharkhand 2001?", a:"26945829" },
        { q:"Vad heter författaren till artikeln Tizan i NE?", a:"Sven Sandström" },
        { q:"Vem är sötast i familjen?", a:"Pappa" },
        { q:"Vad heter den första operan under bokstaven C i Bonniers musiklexikon?", a:"Carmen" },
        { q:"Hur många hål finns det i varje platta i taket ovanför köksbordet?", a:"552" },
        { q:"Vilken frukt liknar Ella?", a:"Banan" },
        { q:"I vilken tonart går &qout;Days of wine and roses&quot;?", a:"F" },
        { q:"Vad heter skalbagge i Wales?", a:"Chwilen" },
        { q:"Hur många kors har E-dur?", a:"4" },
        { q:"Vilken ton blir det om man suger i andra hålet på ett munspel?", a:"F" },
        { q:"Hur många kcal innehåller 100ml vanlig Oatly?", a:"50" }
      ],
      ft: "Kolla i spegelgarderoben!"
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
  }

  function answer() {
    if ($(".pop.question .answer").val().toLowerCase().replace(/ /g, "") == questions.qa[currq].a.toLowerCase().replace(/ /g, "")) {
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