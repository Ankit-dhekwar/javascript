 document.querySelectorAll('button').forEach(occurence => {
   var id = occurence.getAttribute('id');
   var getText3 = document.getElementById(id).innerText.toLowerCase();
   
   occurence.addEventListener('click', function() {
      var x = document.getElementById('three');
      var y = document.getElementById('two');
      var z = document.getElementById('one');
      x.style.backgroundColor = getText3;
      y.style.backgroundColor = getText3;
      z.style.backgroundColor = getText3;
      
   } );

 });

/*
var id=occurance.getAttribute('id');
var a1=document.getElementById(id).innerText.toLowerCase(); 
occurance.addEventlistner('click',function()
{
   var x=document.getElementById(one);
   x.style.backgroundColor=geta1;

})
*/