player_1_name=localStorage.getItem("User 1");
player_2_name=localStorage.getItem("User 2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= player_1_name+" : ";
document.getElementById("player1_score").innerHTML= " "+player1_score;
document.getElementById("player2_name").innerHTML= player_2_name+ " : ";
document.getElementById("player2_score").innerHTML= " "+player2_score;

document.getElementById("question_turn").innerHTML="Question Turn: "+player_1_name;
document.getElementById("answer_turn").innerHTML="Answer Turn: "+player_2_name;

function askQuestion(){
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;

    actual_answer=parseInt(number1)*parseInt(number2);
    console.log(actual_answer);

    question="<h4 style='color:black;' align='center'> "+number1+" X "+ number2+"</h4>";
    console.log(question);
    answer="<br><input placeholder='Answer' style='color:black;' id='answer' type='text'><br>";
    console.log(answer);
    enter="<br><br><button class='btn btn-info' onclick='check_answer();'>Check</button><br>"
    console.log(enter);
    row= question + answer + enter;
    console.log(row);
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";}

question_turn="player1";
answer_turn="player2";

function check_answer(){
    console.log("enter check function");
    answer=document.getElementById("answer").value;
    console.log(answer);

    if(answer==actual_answer){
player2_score=player2_score+1;
document.getElementById("player2_score").innerHTML=" "+player2_score;
document.getElementById("points").innerHTML="You got that right, "+player_2_name+"!";
}

else{
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=" "+player1_score;
    document.getElementById("points").innerHTML="Opps! You got it wrong, "+player_2_name;
    }
    

                       
        document.getElementById("output").innerHTML="";
}
        
    
   

        
    