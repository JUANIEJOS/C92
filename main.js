function addUser(){
    user1=document.getElementById("player_1_name").value;
    user2=document.getElementById("player_2_name").value;
    localStorage.setItem("User 1",user1);
    localStorage.setItem("User 2",user2);
    window.location="game_page.html";



}