$(function() {

   var allquestions = {
    Freja : {
      qa:[
        { q:"Vad heter Selmas mattelärare (för- och efternamn)?", a:"Jan Grzegorz"},
        { q:"Fråga 2?", a:""}
      ],
      ft: "Sådärja! Gå ner med dina systrar i källaren"
    },
    Selma : {
      qa:[
        { q:"Vad heter Frejas sånglärare (för- och efternamn)?", a:"Kinga Szabadvary"},
        { q:"Fråga 2?", a:""}
      ],
      ft: "Sådärja! Gå ner med dina systrar i källaren"
    },

    Ella : {
      qa:[
        { q:"Vad heter Selmas mattelärare (för- och efternamn)?", a:"Jan Grzegorz"},
        { q:"Vad heter Frejas sånglärare (för- och efternamn)?", a:"Kinga Szabadvary"}
      ],
      ft: "Sådärja! Gå ner med dina systrar i källaren"
    },

    Sofia : {
      qa:[
        { q:"Vad heter de olösliga fibrerna i havre?", a:"Betaglukaner"},
        { q:"Vad heter Frejas sånglärare (för- och efternamn)?", a:"Kinga Szabadvary"},
        { q:"Vem döljer sig här: Jovial N Bössnors?", a:"Lovisa Björnsson"},
        { q:"Vilka toner ingår i subdominantackordet i D-dur?", a:"GBD|GHD|G,B,D|G,H,D"},
        { q:"Vad hette Magnus klassföreståndare på högstadiet", a:"Gösta Mjörnman"},
        { q:"Vem döljer sig här: Wilma Lundbo Too?", a:"Malin Boultwood"},
        { q:"Vad heter Selmas mattelärare (för- och efternamn)?", a:"Jan Grzegorz"},
        { q:"Vad kan ersätta fosfat i havredryck?", a:"Omöjligt|Inget|Citrat"},
        { q:"I vilken stad bor man på 'The peacock'?", a:"Bath"},
        { q:"Vad heter 'stå på tå' på dansspråk?", a:"Releve"},
        { q:"Var är bilden tagen?", a:"Skånes djurpark", i:"/gfx/skanes.jpg"},
        { q:"Var ligger Gallup?", a:"New Mexico"},
        { q:"Vem döljer sig här: Osten i Postern?", a:"Toni Petersson"},
        { q:"Hur många byte ingår i en kilobyte?", a:"1024"},
        { q:"Vilka ventiler trycker man ner för att spela låga D på trumpet?", a:"13|1,3|1, 3|1 och 3"},
      ],
      ft: "Grattis! Du klarade det! :-) Skatten finns i TV-soffan!"
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