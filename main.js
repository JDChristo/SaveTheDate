document.getElementById("clickable").addEventListener("click", function(event) {
    var divHeight = this.offsetHeight;
    console.log(divHeight);
    var clickY = event.offsetY;
    
    if (clickY < divHeight / 2) {
      window.location.href = "https://google.com";
    } else {
      window.location.href = "https://link2.com";
    }
  });
  