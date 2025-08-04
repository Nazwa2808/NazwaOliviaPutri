window.onload = function () {
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "/index") {
    alert("Selamat Datang Di Biodata Awa");
  }
};

function pindahHalaman(url) {
  window.location.href = url;
}

window.onload = function () {
  const path = window.location.pathname;
  if (path.includes("index.html") || path === "/" || path === "/index") {
    alert("Selamat Datang Di Biodata Awa");
  }

  const jamDiv = document.getElementById("jam");
  if (jamDiv) {
    setInterval(function () {
      const waktu = new Date();
      const jam = waktu.getHours().toString().padStart(2, '0');
      const menit = waktu.getMinutes().toString().padStart(2, '0');
      const detik = waktu.getSeconds().toString().padStart(2, '0');
      jamDiv.textContent = `${jam}:${menit}:${detik}`;
    }, 1000);
  }
};

function pindahHalaman(url) {
  window.location.href = url;
}
