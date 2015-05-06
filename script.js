# jeopardy$(document).ready( function() {

    $( "#dialog" ).dialog({ autoOpen: false });

    $("#a1").click( function() {
        $( "#dialog" ).dialog( "open" );
    });
        
});
