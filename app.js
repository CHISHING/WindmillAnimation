let su = document.querySelector(".speedup"),
    sd = document.querySelector(".speeddown"),
    au = document.querySelector(".amountup"),
    ad = document.querySelector(".amountdown"),

    wm = document.querySelector(".windmill"),

    s = 3,
    a = 3,

    lf = document.getElementsByClassName('leaf');

function setup() {
  wm.style.animationDuration = s + "s";
  lf[0].style.display = "block";
  for (let i = 1; i < a; i++) {
    lf[i].style.transform = "rotate(" + (360 / a) * i + "deg)";
    lf[i].style.display = "block";
  }
  for (let i = a; i < 8; i++) {
    lf[i].style.display = "none";
  }
}

sd.onclick = () => {
  s += 0.2;
  setup();
}

su.onclick = () => {
  if (s > 0.1) {
    s -= 0.1;
    setup();
  }
}

ad.onclick = () => {
  if (a > 3) {
    a -= 1;
    setup();
  }
}

au.onclick = () => {
  if (a < 8) {
    a += 1;
    setup();
  }
}

setup();