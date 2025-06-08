
function followRW() {
  window.alert("CAUTION: Flashing lights ahead!")
  console.log(`CONGRATS! You found the sleeping bunny! 
      (\\(\\  z   z
     ( -.-)z  
     o_(")(")
-------------------------
        Careful! Flashing lights ahead!
  `);
  startDisco();
}

function startDisco() {
    if (!confirm("Warning: The disco mode will cause flashing colors that may affect sensitive viewers. Do you want to continue?")) {
      return;
    }
    console.log("Trying to activate disco")
    let discoActive = true;
    function randomColor() {
      // Gentle, pastel-ish random color
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 80%, 60%)`;
    }
    function discoStep() {
      if (!discoActive) return;
      document.body.style.backgroundColor = randomColor();
      setTimeout(discoStep, 400 + Math.random() * 400); // 400–800ms between flashes
    }
    discoStep();
    // Stop disco after 20 seconds (optional)
    setTimeout(() => { discoActive = false; document.body.style.backgroundColor = "black"; }, 20000);
  }
