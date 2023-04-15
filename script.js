let semuaTombol = document.querySelectorAll("button");
let display = document.getElementById("calculatorScreen");
semuaTombol.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    if (tombol.value == "C") {
      // Tombol Clear
      display.value = 0;
    } else if (tombol.value == "D") {
      // mengganti input terakhir jika input yang dimasukkan adalah operator
      let input = display.value;
      let newInput = input.slice(0, -1);
      display.value = newInput;
    } else if (display.value == 0) {
      // Jika 0 di kalkulator maka saat menambahkan angka baru misal 1, tidak menjadi 01 tapi menjadi 1
      display.value = tombol.value;
    } else if (tombol.value == "=") {
      // Tombol samadengan
      display.value = eval(display.value);
    } else if (/\d$/.test(display.value)) {
      // Jika input terakhir angka maka input dibolehkan
      display.value += tombol.value;
    } else if (
      tombol.value == "-" ||
      tombol.value == "+" ||
      tombol.value == "*" ||
      tombol.value == "/"
    ) {
      // mengganti input terakhir jika input yang dimasukkan adalah operator
      let input = display.value;
      let newInput = input.slice(0, -1);
      display.value = newInput;
      display.value += tombol.value;
    } else {
      // Input number
      display.value += tombol.value;
    }
  });
});

// TODO: memperboleh input angka lewat keyboard
