function run() {
    
    const mininput = document.getElementById("min");
    const maxinput = document.getElementById("max");
    const mulinput = document.getElementById("mul");
    
  
    const min = parseFloat(mininput.value);
    const max = parseFloat(maxinput.value);
    const mul = parseFloat(mulinput.value);
    
    mininput.classList.remove("invalid", "valid");
    maxinput.classList.remove("invalid", "valid");
    mulinput.classList.remove("invalid", "valid");


    // Check mandatory condition
    if (min % mul !== 0 || max % mul !== 0) {
      mulinput.classList.add("invalid");
      alert("Mul should be a factor of Min and Max.");
      return;
    }
  
    // Check secondary conditions
    if (min > max || mul > max || mul>min) {
      if (min > max) {
        mininput.classList.add("invalid");

        alert("Min should be less than Max.");
      }
      if (mul > max) {
        mulinput.classList.add("invalid");
        alert("Mul should be less than Max.");
      }
      if (mul>min) {
        mulinput.classList.add("invalid");     
           
        alert("mul is not less than min.");
      }
      return;
    }
  
    // All conditions are satisfied
    mininput.classList.add("valid");
    maxinput.classList.add("valid");
    mulinput.classList.add("valid");
    alert("Validation successful!");
  }