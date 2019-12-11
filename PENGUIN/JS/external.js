//source :: http://jsfiddle.net/uYyAH/2/ as shuffle reference  with thanks
//source :: https://github.com  as reference  with thanks

$(document).ready(function () {

   
    
    //function shufle(){
        $(".shuffledv").each(function () {
            // Remove all divs within, store in $d
            var $d = $(this).find("div").remove();
            // Sort $d randomnly
            $d.sort(function () { return Math.floor(Math.random() * $d.length); });
            // Append divs within $d to .shuffledv again
            $d.appendTo(this);
        });
        
    //}
   
    
   // shufle();
    
    
    // function to play sound
    function sound(id) {
        
        var s = document.getElementById(id);
        s.currentTime = 0;
        s.play();
        
    }
    
    
    // function for scores
    
    var highest=0;
    var currentscore=0;
    
    
    
    //   on click event for penguins
    
    
    $("#yeti").click(function () {
        
       
        $('#yeti').addClass('yeti-reveal');
        sound('yetisound');
        $('#penguin1').removeClass('penguin1-reveal');
        $('#penguin2').removeClass('penguin2-reveal');
        $('#penguin3').removeClass('penguin3-reveal');
        $('#penguin4').removeClass('penguin4-reveal');
        $('#penguin5').removeClass('penguin5-reveal');
        $('#penguin6').removeClass('penguin6-reveal');
        $('#penguin7').removeClass('penguin7-reveal');
        $('#penguin8').removeClass('penguin8-reveal');
        if(highest<currentscore)
        {
            highest=currentscore;
            
        }
        $("#highscoreCalc").val(highest);
        
         if (window.confirm('OOPS\n\nReset Game?'))
            {
                currentscore=0;
                $("#pointsgained").val(currentscore);
            }
        
    });
    
    $('#penguin1').click(function () {
        
        currentscore++;
        $("#pointsgained").val(currentscore);
        $('#penguin1').addClass('penguin1-reveal');
        sound('jumpsound');
        
    });
    
    $('#penguin2').click(function () {
        currentscore++;
        $("#pointsgained").val(currentscore);
        $('#penguin2').addClass('penguin2-reveal');
        sound('jumpsound');
    });
    
    $('#penguin3').click(function () {
        currentscore++;
        $("#pointsgained").val(currentscore);
        $('#penguin3').addClass('penguin3-reveal');
        sound('jumpsound');
    });
    
    $('#penguin4').click(function () {
        currentscore++;
        $("#pointsgained").val(currentscore);
        $('#penguin4').addClass('penguin4-reveal');
        sound('jumpsound');
    });
    
    $('#penguin5').click(function () {
        currentscore++;
        $("#pointsgained").val(currentscore);
        $('#penguin5').addClass('penguin5-reveal');
        sound('jumpsound');
    });
    
    $('#penguin6').click(function () {
        currentscore++;
        $("#pointsgained").val(currentscore);
        $('#penguin6').addClass('penguin6-reveal');
        sound('jumpsound');
    });
    
    $('#penguin7').click(function () {
        currentscore++;
        $("#pointsgained").val(currentscore);
        $('#penguin7').addClass('penguin7-reveal');
        sound('jumpsound');
    });
    
    $('#penguin8').click(function () {
        currentscore++;
        $("#pointsgained").val(currentscore);
        $('#penguin8').addClass('penguin8-reveal');
        sound('jumpsound');
    });
    

});







