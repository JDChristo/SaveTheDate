document.getElementById("clickable").addEventListener("click", function(event) {
    var divHeight = this.offsetHeight;
    var clickY = event.offsetY;
    if (clickY < divHeight / 2) {
      try {
        window.location.href = "https://maps.app.goo.gl/H2UAAEwJYe54HB117?g_st=ac";
      } catch (e) {
        // Fallback to web-based maps if app fails to open
          window.location.href = "https://maps.google.com/?q=H2UAAEwJYe54HB117";
      }
    } else {
      
      try {
        window.location.href = "https://maps.app.goo.gl/oyWPwkauejZhEYzf6?g_st=ac";
      } catch (e) {
        // Fallback to web-based maps if app fails to open
          window.location.href = "https://maps.google.com/?q=oyWPwkauejZhEYzf6";
      }
    }
  });
  