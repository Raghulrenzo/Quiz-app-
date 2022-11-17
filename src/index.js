import "./sass/main.scss";

var btn = document.getElementById('solving').addEventListener('click',btn_click);

function btn_click(){
    document.getElementById('login-page').style.display='block';
    document.getElementById('hero').style.display='none';
};

var btn1 = document.getElementById('login-page__login-btn','login-page__signup-btn').addEventListener('click',display_select_topic);
var btn2 = document.getElementById('login-page__signup-btn').addEventListener('click',display_select_topic);
 
function display_select_topic(){
 
  document.getElementById('select_topic').style.display='block';
  document.getElementById('login-page').style.display='none';
  document.getElementById('hero').style.display='none';

 }
    


    
  