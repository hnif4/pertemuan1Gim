const mobil = document.getElementById('mobil2');
let canTriggerEvent = true;

mobil.addEventListener('mouseover', () => {
  if (canTriggerEvent) {
    canTriggerEvent = false;

    mobil.style.top = '-100px'; // loncatin si mobilnya sebanyak 150px

    setTimeout(() => {
      mobil.style.top = '0px'; //jatuhin lagi mobilnya ke tempat semula
    }, 1000);
    setTimeout(() => {
      canTriggerEvent = true; // bolehin si eventnya buat ke trigger lagi setelah dijeda 1 detik
    }, 1500);
  }
});
