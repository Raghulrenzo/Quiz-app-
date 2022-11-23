import "./sass/main.scss";
var btn = document.getElementById('solving').addEventListener('click',btn_click);
 var dis = document.getElementById('login-page').classList.add('display-none');
 

function btn_click(){
    document.getElementById('login-page').classList.remove('display-none');
    document.getElementById('login-page').classList.add('display-block');
    document.getElementById('hero').classList.add('display-none');
};

var btn1 = document.getElementById('login-page__login-btn').addEventListener('click',display_select_topic);
var btn2 = document.getElementById('login-page__signup-btn').addEventListener('click',validation);
function validation(){
     var login_pass = document.getElementById('pass');
     if( login_pass.value ==  ""){
      alert("Enter valid password");
     }
     else{
      display_select_topic();
     }
}
 
function display_select_topic(){
 
  document.getElementById('select_topic').classList.remove('display-none');
  document.getElementById('select_topic').classList.add('display-block');
  document.getElementById('login-page').classList.add('display-none');
  document.getElementById('hero').classList.add('display-none');

 }
 var start_quiz = document.getElementById('start-quiz').addEventListener('click',display_quiz_page);
 function display_quiz_page() {
   document.getElementById('select_topic').classList.remove('display-block');
   document.getElementById('select_topic').classList.add('display-none');
   document.getElementById('quiz_page').classList.remove('display-none');
   document.getElementById('quiz_page').classList.remove('display-block');
   document.getElementById('hero').classList.add('display-none');

 }
  var question = [{'que':"An interface design application that runs in the browser with team-based collaborative design projects",
                    'a':"FIGMA",'b':"ADOBE XD",'c':"INVISION",'d':"SKETCH",},
                    {'que':"An interface design application that runs in the browser with team-based collaborative design projects",
                    'a':"FIGMA",'b':"ADOBE XD",'c':"INVISION",'d':"SKETCH",},
                    {'que':"An interface design application that runs in the browser with team-based collaborative design projects",
                    'a':"FIGMA",'b':"ADOBE XD",'c':"INVISION",'d':"SKETCH",},
                    {'que':"An interface design application that runs in the browser with team-based collaborative design projects",
                    'a':"FIGMA",'b':"ADOBE XD",'c':"INVISION",'d':"SKETCH",}
                  ]
 
                    //stepper
 const progress = document.getElementById('quiz-progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener("click",() =>{
  currentActive++;
  if (currentActive > circles.length){
    currentActive = circles.length;
  }
  update();
  
});
prev.addEventListener("click",() => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update(){
  circles.forEach((circle, idx) => {
    if ( idx < currentActive) {
      circle.classList.add("active");
    }
    else{
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100  + "%";
  if (currentActive == 1) {
    prev.disabled = true;
  } 
  else if ( currentActive == circles.length){
    next.disabled = true;
  } else{
    prev.disabled = false;
    next.disabled = false;
  }
}


 
 /*

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
 */

    


    
  