$(document).ready( function() {
    $("#c1").click( function() {
        generateQuestion("TEST3", "100", "Which one of these is an animal that starts with the letter 'a'?",
            "apple", "bananas", "cheese", "donkey", "1", this);
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
        '<span class="catTitle">' + category + ':</span>' +
        '<span class="catTitle catPoints">$' + points + '</span>' +
        '<p class="tab20">' + question + '</p>' +
        '<div class="awesome" id="sel1">' + ans1 + '</div><div class="awesome" id="sel2">' + ans2 + '</div>' +
        '<div class="awesome" id="sel3">' + ans3 + '</div><div class="awesome" id="sel4">' + ans4 + '</div></div>');

    var correct = "#sel" + correctNum;

    $(document).on("click", correct, function() {
       
        var newScore = parseInt(($(".scoreKeeper").text())) + parseInt(points);
        console.log(newScore);
        $(".scoreKeeper").html('<span class="textual2 textualBY">' + newScore + '</span>');
        clearQuestion();
        $block.html('');
        $bl.off('click');
    });

    
}
