nav = document.getElementById("nav");

  var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
        nav.className = "nav show"
    } else {
        nav.className = "nav hide"
    }
  };

  window.addEventListener("scroll", myScrollFunc);
