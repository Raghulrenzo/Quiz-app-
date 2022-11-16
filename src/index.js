import "./sass/main.scss";

var btn = document.getElementById('button').addEventListener('click',btn_click);

function btn_click(){
    document.getElementById('login-page').style.display='block';
    document.getElementById('hero').style.display='none';
};
    

/*
*{
    box-sizing:border-box;
  }
  .styled-checkbox {
    position: absolute;
   opacity:0;
    height:10px;
    width:10px;
  }
  
  .styled-checkbox:checked + label:after{
    content:'';
    position:absolute;
    width:20px;
    height:20px;
    background-color:red;
    z-index:-1;
   
  }
  .styled-checkbox:checked + label{
    background-color:blue;
  }
  .cross-mark{
    display:inline-block;
    width:6px;
    height:10px;
    position:relative;
    display:none;
  }
  .cross-mark:before,.cross-mark:after{
    content:'';
    position:absolute;
    left:4px;
    bottom:-6px;
    width:2px;
    height:12px;
    background-color:black;
    z-index:1;
  }
  .cross-mark:before {
    transform: rotate(45deg);
  }
  .cross-mark:after {
    transform: rotate(-45deg);
  }
  .styled-checkbox:checked ~ .cross-mark{
    z-index:1;
    display:inline-block;
  }
  
    
  /*.topic-checkbox{
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    background-color:#D1D1D1;
    padding:6px 8px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
  }
  .topic-checkbox__input:{
    content:'rrr';
    
  }*/
/*
  *************************
  <li>
    <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1">
    <label for="styled-checkbox-1">Checkbox</label> <span class="cross-mark">&nbsp;</span>
      
 </li>
 */