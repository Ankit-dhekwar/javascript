function add(){
    
  var x = Number(document.getElementById('i1').value);
  var y = Number(document.getElementById('i2').value);
  if(x  && y){
    var z = x+y;
  document.getElementById('para').innerText = 'hey the output is ' + z;
  }else{
    alert('all fields are mandt.');
  }
 
}

function sub(){
    var x = Number(document.getElementById('i1').value);
  var y = Number(document.getElementById('i2').value);
  if(x && y)
  {
  var z = x-y;
  //alert(z);
  document.getElementById('para').innerText = 'hey the output is ' + z;
}
else
{
    alert('all fields are mandt.');
}
}

function mul(){
    var x = Number(document.getElementById('i1').value);
    var y = Number(document.getElementById('i2').value);
    if(x && y)
    {
    var z = x*y;
    //alert(z);
    document.getElementById('para').innerText = 'hey the output is ' + z;  
} 
else
{
    alert('all fields are mandt.');
}
}

function div(){
    var x = Number(document.getElementById('i1').value);
  var y = Number(document.getElementById('i2').value);
  if(x && y)
  {
  var z = x/y;
  //alert(z);
  document.getElementById('para').innerText = 'hey the output is ' + z;
}
else
{
    alert('all fields are mandt.');
}
}
