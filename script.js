$(document).ready( function() {
    $("#c1").click( function() {
        generateQuestion("TEST3", "100", bnk0a01[0], bnk0a01[1], bnk0a01[2], bnk0a01[3], bnk0a01[4], bnk0a01[5], this);
    });

    $("#c2").click( function() {
        generateQuestion("TEST3", "200", bnk0a02[0], bnk0a02[1], bnk0a02[2], bnk0a02[3], bnk0a02[4], bnk0a02[5], this);
    });

    $("#c3").click( function() {
        generateQuestion("TEST3", "300", bnk0a03[0], bnk0a03[1], bnk0a03[2], bnk0a03[3], bnk0a03[4], bnk0a03[5], this);
    });

    $("#c4").click( function() {
        generateQuestion("TEST3", "400", bnk0a04[0], bnk0a04[1], bnk0a04[2], bnk0a04[3], bnk0a04[4], bnk0a04[5], this);
    });

    $("#c5").click( function() {
        generateQuestion("TEST3", "500", bnk0a05[0], bnk0a05[1], bnk0a05[2], bnk0a05[3], bnk0a05[4], bnk0a05[5], this);
    });

    $("#d1").click( function() {
        generateQuestion("Microsoft_70_686", "100", bnk0a06[0], bnk0a06[1], bnk0a06[2], bnk0a06[3], bnk0a06[4], bnk0a06[5], this);
    });

    $("#d2").click( function() {
        generateQuestion("Microsoft_70_686", "200", bnk0a07[0], bnk0a07[1], bnk0a07[2], bnk0a07[3], bnk0a07[4], bnk0a07[5], this);
    });

    $("#d3").click( function() {
        generateQuestion("Microsoft_70_686", "300", bnk0a08[0], bnk0a08[1], bnk0a08[2], bnk0a08[3], bnk0a08[4], bnk0a08[5], this);
    });

    $("#d4").click( function() {
        generateQuestion("Microsoft_70_686", "400", bnk0a09[0], bnk0a09[1], bnk0a09[2], bnk0a09[3], bnk0a09[4], bnk0a09[5], this);
    });

    $("#d5").click( function() {
        generateQuestion("Microsoft_70_686", "500", bnk0a10[0], bnk0a10[1], bnk0a10[2], bnk0a10[3], bnk0a10[4], bnk0a10[5], this);
    });

    $("#b1").click( function() {
        generateQuestion("ExamCompass Sec+", "100", bnk0a11[0], bnk0a11[1], bnk0a11[2], bnk0a11[3], bnk0a11[4], bnk0a11[5], this);
    });

    $("#b2").click( function() {
        generateQuestion("ExamCompass Sec+", "200", bnk0a12[0], bnk0a12[1], bnk0a12[2], bnk0a12[3], bnk0a12[4], bnk0a12[5], this);
    });

    $("#b3").click( function() {
        generateQuestion("ExamCompass Sec+", "300", bnk0a13[0], bnk0a13[1], bnk0a13[2], bnk0a13[3], bnk0a13[4], bnk0a13[5], this);
    });

    $("#b4").click( function() {
        generateQuestion("ExamCompass Sec+", "400", bnk0a14[0], bnk0a14[1], bnk0a14[2], bnk0a14[3], bnk0a14[4], bnk0a14[5], this);
    });

    $("#b5").click( function() {
        generateQuestion("ExamCompass Sec+", "500", bnk0a15[0], bnk0a15[1], bnk0a15[2], bnk0a15[3], bnk0a15[4], bnk0a15[5], this);
    });

    $("#e1").click( function() {
        generateQuestion("ExamCompass Sec+", "100", bnk0a11[0], bnk0a11[1], bnk0a11[2], bnk0a11[3], bnk0a11[4], bnk0a11[5], this);
    });

    $("#e2").click( function() {
        generateQuestion("ExamCompass Sec+", "200", bnk0a12[0], bnk0a12[1], bnk0a12[2], bnk0a12[3], bnk0a12[4], bnk0a12[5], this);
    });

    $("#e3").click( function() {
        generateQuestion("ExamCompass Sec+", "300", bnk0a13[0], bnk0a13[1], bnk0a13[2], bnk0a13[3], bnk0a13[4], bnk0a13[5], this);
    });

    $("#e4").click( function() {
        generateQuestion("ExamCompass Sec+", "400", bnk0a14[0], bnk0a14[1], bnk0a14[2], bnk0a14[3], bnk0a14[4], bnk0a14[5], this);
    });

    $("#e5").click( function() {
        generateQuestion("ExamCompass Sec+", "500", bnk0a15[0], bnk0a15[1], bnk0a15[2], bnk0a15[3], bnk0a15[4], bnk0a15[5], this);
    });


    $(document).on("click", ".covQBack", function() {
        $(".covQBack").hide();
        $(".front").hide();
        $(".awesome").hide();
        console.log("confused");
    });        
});


function clearQuestion() {
        $(".covQBack").hide();
        $(".front").hide();
        $(".awesome").hide();
        console.log("confused");
}


function generateQuestion() {
    $(".cover").append('<div class="covQBack">l</div>');
    $(".cover").append('<div class="front" id="askQuest">' +
        '<span class="catTitle">Category:</span>' +
        '<span class="catTitle catPoints">100pts</span>' +
        '<p class="tab20">VEA vjeioa ioveahviek vodiao eao vekaee it oakovea nvieoahetyioakd ve</p>' +
        '<div class="awesome">ddddd</div><div class="awesome">dd</div>' +
        '<div class="awesome">dd</div><div class="awesome">dd</div></div>');
}

function generateQuestion(category, points, question, ans1, ans2, ans3, ans4, correctNum, qThis) {

    $block = $(qThis).find('span');
    $bl = $(qThis);
    
    $(".cover").append('<div class="covQBack">l</div>');
    $(".cover").append('<div class="front" id="askQuest">' +
        '<div class="ansFoot">' +
        '<span class="catTitle">' + category + ':</span>' +
        '<span class="catTitle catPoints">$' + points + '</span>' +
        '<p class="tab20">' + question + '</p>' +
        '<div class="awesome" id="sel1">' + ans1 + '</div><div class="awesome" id="sel2">' + ans2 + '</div>' +
        '<div class="awesome" id="sel3">' + ans3 + '</div><div class="awesome" id="sel4">' + ans4 + '</div></div>' +
        '</div>');

    var correct = "#sel" + correctNum;

    if (correctNum == 1) {
        var incorrect1 = "#sel2";
        var incorrect2 = "#sel3";
        var incorrect3 = "#sel4";
    } else if (correctNum == 2) {
        var incorrect1 = "#sel1";
        var incorrect2 = "#sel3";
        var incorrect3 = "#sel4";
    } else if (correctNum == 3) {
        var incorrect1 = "#sel1";
        var incorrect2 = "#sel2";
        var incorrect3 = "#sel4";
    } else if (correctNum == 4) {
        var incorrect1 = "#sel1";
        var incorrect2 = "#sel2";
        var incorrect3 = "#sel3";
    }

    $(document).on("click", correct, function() {       
        var newScore = parseInt(($(".scoreKeeper").text())) + parseInt(points);
        console.log(newScore);
        $(".scoreKeeper").html('<span class="textual2 textualBY">' + newScore + '</span>');
        clearQuestion();
        $block.html('');
        $bl.off('click');
        $bl.addClass('noPointer');
	docOff();
    });

    function incorrectAnswer() {
        var newScore = parseInt(($(".scoreKeeper").text())) - parseInt(points);
        console.log(newScore);
        $(".scoreKeeper").html('<span class="textual2 textualBY">' + newScore + '</span>');
        clearQuestion();
        $block.html('');
        $bl.off('click');
        $bl.addClass('noPointer'); 
	docOff();       
    }

    $(document).on("click", incorrect1, function() {
        incorrectAnswer();
    });
    $(document).on("click", incorrect2, function() {
        incorrectAnswer();
    });
    $(document).on("click", incorrect3, function() {
        incorrectAnswer();
    });

    function docOff() {
        $(document).off("click", correct);
        $(document).off("click", incorrect1);
        $(document).off("click", incorrect2);
        $(document).off("click", incorrect3);
    }    
}
