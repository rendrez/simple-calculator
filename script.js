let semuaTombol = document.querySelectorAll("button");

semuaTombol.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    if (tombol.value == "C") {
      document.getElementById("calculatorScreen").value = 0;
    } else {
      if (document.getElementById("calculatorScreen").value == 0) {
        document.getElementById("calculatorScreen").value = tombol.value;
      } else {
        if (tombol.value == "=") {
          document.getElementById("calculatorScreen").value = eval(
            document.getElementById("calculatorScreen").value
          );
        } else {
          document.getElementById("calculatorScreen").value += tombol.value;
        }
      }
    }
  });
});
