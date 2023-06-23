document.getElementById("red").style.background='red';  
document.getElementById("green").style.background='green';  
document.getElementById("yellow").style.background='yellow';  

var count =  0;

function rotate(){
     
     count++;
     var array = ['yellow', 'red', 'green'];

     var x = document.querySelectorAll('button');
        
        if(count==1){
            x[0].style.background = array[0];
            x[1].style.background = array[1];
            x[2].style.background = array[2];
        }
        if(count==2){
            x[0].style.background = array[2];
            x[1].style.background = array[0];
            x[2].style.background = array[1];
        }
        if(count==3){
            x[0].style.background = array[1];
            x[1].style.background = array[2];
            x[2].style.background = array[0];
            count=0;
        }
           
    
}