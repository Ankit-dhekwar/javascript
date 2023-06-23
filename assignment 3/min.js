function run() {
    
    const mininput = document.getElementById("min");
    const maxinput = document.getElementById("max");
    const mulinput = document.getElementById("mul");
    
  
    const min = parseFloat(mininput.value);
    const max = parseFloat(maxinput.value);
    const mul = parseFloat(mulinput.value);
    

    
if(!isNaN(min) && !isNaN(max) && !isNaN(mul))
{
    if (min % mul !== 0 && max % mul !== 0) {
      alert("Mul should be a factor of Min and Max.");
      var t1 = document.getElementById('mul');
      t1.style.backgroundColor = 'red';
      t1.style.color = 'black';
      return;
    }
    else if(max % mul!==0)
    {
        alert("max is not divisible mul.");
      var t1 = document.getElementById('max');
      t1.style.backgroundColor = 'red';
      t1.style.color = 'black';
      return;   
    }
    else if(min % mul!==0)
    {
        alert("Min is not divisible by mul");
        var t1 = document.getElementById('min');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
        return;
    }

    else if (min > max || mul > max || mul>min) {
      if (min > max) {
       
        alert("Min should be less than Max.");
        var t1 = document.getElementById('min');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
      }
      if (mul > max) {
        
        alert("Mul should be less than Max.");
        var t1 = document.getElementById('mul');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
      }
      if (mul > min) {

        alert("mul is not less than min.");
        var t1 = document.getElementById('mul');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
      }
      return;
    }
    else
    {
    alert("All condition are true");

    var t1 = document.getElementById('min');
    t1.style.backgroundColor = 'green';
    t1.style.color = 'black';

    var t1 = document.getElementById('max');
    t1.style.backgroundColor = 'green';
    t1.style.color = 'black';

    var t1 = document.getElementById('mul');
    t1.style.backgroundColor = 'green';
    t1.style.color = 'black';
    }
}
else
{
    alert('Incorrect input');
    var t1 = document.getElementById('min');
    t1.style.backgroundColor = 'red';
    t1.style.color = 'black';

    var t1 = document.getElementById('max');
    t1.style.backgroundColor = 'red';
    t1.style.color = 'black';

    var t1 = document.getElementById('mul');
    t1.style.backgroundColor = 'red';
    t1.style.color = 'black';
}
  }
