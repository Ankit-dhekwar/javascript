function run(){
    var min=  document.getElementById('min').value;
    var max=  document.getElementById('max').value;
    var mul=  document.getElementById('mul').value;


  if(min %mul==0 && max%mul==0)
  {
    var t1 = document.getElementById('min');
    t1.style.backgroundColor = 'green';
    t1.style.color = 'black';

    var t1 = document.getElementById('min');
        t1.style.backgroundColor = 'green';
        t1.style.color = 'black';

        var t1 = document.getElementById('mul');
        t1.style.backgroundColor = 'green';
        t1.style.color = 'black';
  }
    else if(min % mul !== 0 || max%mul !==0){
        // alert('true');
        var t1 = document.getElementById('mul');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
    }
    else if(min % mul !== 0 ){
        // alert('true');
        var t1 = document.getElementById('min');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
    }
    else if( max % mul !== 0)
    {
        var t1 = document.getElementById('max');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
    }
    else if (min < max) {
        var t1 = document.getElementById('min');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
    }

    else if (mul < max) {
        var t1 = document.getElementById('mul');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
    }

    else if (mul <= min) {
        var t1 = document.getElementById('mul');
        t1.style.backgroundColor = 'red';
        t1.style.color = 'black';
    }
}