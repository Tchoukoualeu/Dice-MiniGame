//generate a random integer from min to max, min included and max excluded
function myRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Adjust the level of the game
let minNum = 1;
$("#level").on("click", function() {
  if ($("#level").prop("checked") == true) {
    minNum = 3;
    $("#levelCaption").text("Advanced");
  } else {
    minNum = 1;
    $("#levelCaption").text("Beginner");
  }
});


let dice1, dice2, local;
let btn = $("#toggle");
let reset = $("#reset");
let output = $("#output");
let total = 0;
let lap = 0;

//Button Play
btn.on("click", function() {
  dice1 = myRandomNum(1, 7);
  dice2 = myRandomNum(1, 7);

  rolldice(dice1, dice2)

  local = eval(`${dice1} + ${dice2}`);
  output.text(`${dice1} + ${dice2} = ${local}`);

  //filling the table with the appropriate values
  lap += 1;
  if (lap <= 10) {
    fillTableOne(lap);
    total += local;
  }
  
  //somme up at then end
  if(lap == 10){
    btn.prop("disabled", true);
    reset.prop("disabled", true);
      
    //Display the total in a fancy way
    let tt = setInterval(function(){startCount()},10);
    let counter = 1;
    
    function startCount(){
      if(counter == total) {
        clearInterval(tt);
        
        //Computer' section
        
        //Make in impossible to switch level
        $("#score").text("My turn")
        
        let lap1 = 1;
        total = 0;
        let ff = setInterval(function(){pcTurn()},1000);
        function pcTurn(){
          $("#level").prop("disabled", true);
          
          if(lap1 < 11){
            dice1 = myRandomNum(minNum, 7);
            dice2 = myRandomNum(minNum, 7);
            rolldice(dice1, dice2);
            
            local = eval(dice1 + "+" + dice2);    
            output.text(dice1 + " + " + dice2 + " = " + local);
        
            total += local;
            
            fillTableTwo(lap1);
            lap1 += 1;
            
          }else{  
            clearInterval(ff);
            
            //Enable the Level-switch button
            $("#level").prop("disabled", false);
            
            //computing the results
            if(parseInt($("#yp").text(),10) > parseInt($("#mp").text(),10)){
              $("#score").text("Congratulation! You won");
            }else if(parseInt($("#yp").text(),10) === parseInt($("#mp").text(),10)){
              $("#score").text("Draw Game. Play Again!");
            }else{
              $("#score").text("You lost!");
            }
            
            //Enable the RESET button
            reset.prop("disabled", false);
            
          }
          
          //print the total points of the computer
          $("#mp").text(total);
           
        }
      
      } else {
        counter++;
      }
      $("#yp").text(counter);  
    }
  }
  
});

function rolldice(firstOne, secondOne){
    //first dice
  switch (firstOne) {
    case 1:
      $("#one")
        .removeClass("dot")
        .addClass("nodot");
      $("#two")
        .removeClass("dot")
        .addClass("nodot");
      $("#three")
        .removeClass("dot")
        .addClass("nodot");
      $("#four")
        .removeClass("nodot")
        .addClass("dot");
      $("#five")
        .removeClass("dot")
        .addClass("nodot");
      $("#six")
        .removeClass("dot")
        .addClass("nodot");
      $("#seven")
        .removeClass("dot")
        .addClass("nodot");
      break;
    case 2:
      $("#one")
        .removeClass("dot")
        .addClass("nodot");
      $("#two")
        .removeClass("dot")
        .addClass("nodot");
      $("#three")
        .removeClass("nodot")
        .addClass("dot");
      $("#four")
        .removeClass("dot")
        .addClass("nodot");
      $("#five")
        .removeClass("nodot")
        .addClass("dot");
      $("#six")
        .removeClass("dot")
        .addClass("nodot");
      $("#seven")
        .removeClass("dot")
        .addClass("nodot");
      break;
    case 3:
      $("#one")
        .removeClass("dot")
        .addClass("nodot");
      $("#two")
        .removeClass("dot")
        .addClass("nodot");
      $("#three")
        .removeClass("nodot")
        .addClass("dot");
      $("#four")
        .removeClass("nodot")
        .addClass("dot");
      $("#five")
        .removeClass("nodot")
        .addClass("dot");
      $("#six")
        .removeClass("dot")
        .addClass("nodot");
      $("#seven")
        .removeClass("dot")
        .addClass("nodot");
      break;
    case 4:
      $("#one")
        .removeClass("nodot")
        .addClass("dot");
      $("#two")
        .removeClass("dot")
        .addClass("nodot");
      $("#three")
        .removeClass("nodot")
        .addClass("dot");
      $("#four")
        .removeClass("dot")
        .addClass("nodot");
      $("#five")
        .removeClass("nodot")
        .addClass("dot");
      $("#six")
        .removeClass("dot")
        .addClass("nodot");
      $("#seven")
        .removeClass("nodot")
        .addClass("dot");
      break;
    case 5:
      $("#one")
        .removeClass("nodot")
        .addClass("dot");
      $("#two")
        .removeClass("dot")
        .addClass("nodot");
      $("#three")
        .removeClass("nodot")
        .addClass("dot");
      $("#four")
        .removeClass("nodot")
        .addClass("dot");
      $("#five")
        .removeClass("nodot")
        .addClass("dot");
      $("#six")
        .removeClass("dot")
        .addClass("nodot");
      $("#seven")
        .removeClass("nodot")
        .addClass("dot");
      break;
    default:
      $("#one")
        .removeClass("nodot")
        .addClass("dot");
      $("#two")
        .removeClass("nodot")
        .addClass("dot");
      $("#three")
        .removeClass("nodot")
        .addClass("dot");
      $("#four")
        .removeClass("dot")
        .addClass("nodot");
      $("#five")
        .removeClass("nodot")
        .addClass("dot");
      $("#six")
        .removeClass("nodot")
        .addClass("dot");
      $("#seven")
        .removeClass("nodot")
        .addClass("dot");
      break;
  }

  //second dice
  switch (secondOne) {
    case 1:
      $("#eight")
        .removeClass("dot")
        .addClass("nodot");
      $("#nine")
        .removeClass("dot")
        .addClass("nodot");
      $("#ten")
        .removeClass("dot")
        .addClass("nodot");
      $("#eleven")
        .removeClass("nodot")
        .addClass("dot");
      $("#twelve")
        .removeClass("dot")
        .addClass("nodot");
      $("#thirteen")
        .removeClass("dot")
        .addClass("nodot");
      $("#fourteen")
        .removeClass("dot")
        .addClass("nodot");
      break;
    case 2:
      $("#eight")
        .removeClass("dot")
        .addClass("nodot");
      $("#nine")
        .removeClass("dot")
        .addClass("nodot");
      $("#ten")
        .removeClass("nodot")
        .addClass("dot");
      $("#eleven")
        .removeClass("dot")
        .addClass("nodot");
      $("#twelve")
        .removeClass("nodot")
        .addClass("dot");
      $("#thirteen")
        .removeClass("dot")
        .addClass("nodot");
      $("#fourteen")
        .removeClass("dot")
        .addClass("nodot");
      break;
    case 3:
      $("#eight")
        .removeClass("dot")
        .addClass("nodot");
      $("#nine")
        .removeClass("dot")
        .addClass("nodot");
      $("#ten")
        .removeClass("nodot")
        .addClass("dot");
      $("#eleven")
        .removeClass("nodot")
        .addClass("dot");
      $("#twelve")
        .removeClass("nodot")
        .addClass("dot");
      $("#thirteen")
        .removeClass("dot")
        .addClass("nodot");
      $("#fourteen")
        .removeClass("dot")
        .addClass("nodot");
      break;
    case 4:
      $("#eight")
        .removeClass("nodot")
        .addClass("dot");
      $("#nine")
        .removeClass("dot")
        .addClass("nodot");
      $("#ten")
        .removeClass("nodot")
        .addClass("dot");
      $("#eleven")
        .removeClass("dot")
        .addClass("nodot");
      $("#twelve")
        .removeClass("nodot")
        .addClass("dot");
      $("#thirteen")
        .removeClass("dot")
        .addClass("nodot");
      $("#fourteen")
        .removeClass("nodot")
        .addClass("dot");
      break;
    case 5:
      $("#eight")
        .removeClass("nodot")
        .addClass("dot");
      $("#nine")
        .removeClass("dot")
        .addClass("nodot");
      $("#ten")
        .removeClass("nodot")
        .addClass("dot");
      $("#eleven")
        .removeClass("nodot")
        .addClass("dot");
      $("#twelve")
        .removeClass("nodot")
        .addClass("dot");
      $("#thirteen")
        .removeClass("dot")
        .addClass("nodot");
      $("#fourteen")
        .removeClass("nodot")
        .addClass("dot");
      break;
    default:
      $("#eight")
        .removeClass("nodot")
        .addClass("dot");
      $("#nine")
        .removeClass("nodot")
        .addClass("dot");
      $("#ten")
        .removeClass("nodot")
        .addClass("dot");
      $("#eleven")
        .removeClass("dot")
        .addClass("nodot");
      $("#twelve")
        .removeClass("nodot")
        .addClass("dot");
      $("#thirteen")
        .removeClass("nodot")
        .addClass("dot");
      $("#fourteen")
        .removeClass("nodot")
        .addClass("dot");
      break;
  }
}
function fillTableOne(element){
      switch (element) {
      case 1:
        $("#p1").text(local);
        break;
      case 2:
        $("#p2").text(local);
        break;
      case 3:
        $("#p3").text(local);
        break;
      case 4:
        $("#p4").text(local);
        break;
      case 5:
        $("#p5").text(local);
        break;
      case 6:
        $("#p6").text(local);
        break;
      case 7:
        $("#p7").text(local);
        break;
      case 8:
        $("#p8").text(local);
        break;
      case 9:
        $("#p9").text(local);
        break;
      default:
        $("#p10").text(local);
        break;
    }
}
function fillTableTwo(element){
      switch (element) {
      case 1:
        $("#p11").text(local);
        break;
      case 2:
        $("#p12").text(local);
        break;
      case 3:
        $("#p13").text(local);
        break;
      case 4:
        $("#p14").text(local);
        break;
      case 5:
        $("#p15").text(local);
        break;
      case 6:
        $("#p16").text(local);
        break;
      case 7:
        $("#p17").text(local);
        break;
      case 8:
        $("#p18").text(local);
        break;
      case 9:
        $("#p19").text(local);
        break;
      default:
        $("#p20").text(local);
        break;
    }
}

//button Reset
reset.on("click", function(){
  btn.prop("disabled", false);
  init();
  clearYP();
  clearMP();
  $("#score").text("Your Turn");
  $("#output").text("");
});

//initialize variables
function init(){
  total = 0;
  lap = 0;
  local = 0;
  total = 0;
}

//Clear table Your-Points
 function clearYP(){
   $("#p1").text("");
   $("#p2").text("");
   $("#p3").text("");
   $("#p4").text("");
   $("#p5").text("");
   $("#p6").text("");
   $("#p7").text("");
   $("#p8").text("");
   $("#p9").text("");
   $("#p10").text("");
   $("#mp").text("");
 }

//Clear table My-Points
function clearMP(){
   $("#p11").text("");
   $("#p12").text("");
   $("#p13").text("");
   $("#p14").text("");
   $("#p15").text("");
   $("#p16").text("");
   $("#p17").text("");
   $("#p18").text("");
   $("#p19").text("");
   $("#p20").text("");
   $("#yp").text("");
}
