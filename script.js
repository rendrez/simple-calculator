let semuaTombol = document.querySelectorAll("button");
let display = document.getElementById("calculatorScreen");

semuaTombol.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    if (tombol.value == "C") {
      // Tombol Clear
      display.value = 0;
    } else {
      if (display.value == 0) {
        // Jika 0 di kalkulator maka saat menambahkan angka baru misal 1, tidak menjadi 01 tapi menjadi 1
        display.value = tombol.value;
      } else {
        if (tombol.value == "=") {
          // Tombol samadengan
          display.value = eval(display.value);
        } else {
          // Tombol lainnya
          display.value += tombol.value;
        }
      }
    }
  });
});
