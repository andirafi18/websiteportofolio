// --- LOGIKA UNTUK TOMBOL SCROLL TO TOP ---

// 1. Pilih elemen tombol dari HTML
const scrollTopButton = document.querySelector("#scrollTopButton");

// 2. Buat fungsi untuk menampilkan/menyembunyikan tombol
function handleScroll() {
  // Jika posisi scroll vertikal lebih dari 400px
  if (window.scrollY > 400) {
    // Tampilkan tombol dengan menambahkan class 'show'
    scrollTopButton.classList.add("show");
  } else {
    // Jika tidak, hapus class 'show' untuk menyembunyikannya
    scrollTopButton.classList.remove("show");
  }
}

// 3. Buat fungsi untuk scroll ke atas
function scrollToTop(e) {
  e.preventDefault(); // Mencegah link '#' berfungsi normal
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Animasi scroll yang halus
  });
}

// 4. Pasang "pendengar" event pada window dan tombol
window.addEventListener("scroll", handleScroll); // Jalankan handleScroll setiap kali user scroll
scrollTopButton.addEventListener("click", scrollToTop); // Jalankan scrollToTop saat tombol diklik

// --- LOGIKA UNTUK DARK/LIGHT MODE ---

// 1. Pilih elemen yang dibutuhkan
const themeSwitcherButton = document.querySelector("#theme-switcher");
const body = document.body;

// 2. Cek tema yang tersimpan di localStorage saat halaman dimuat
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    // Ganti ikon jika tema tersimpan adalah gelap
    if (savedTheme === "dark-mode") {
        themeSwitcherButton.innerHTML = "☀️";
    }
}

// 3. Buat fungsi untuk mengubah tema
function toggleTheme() {
    // Jika body sudah punya class 'dark-mode', hapus. Jika belum, tambahkan.
    body.classList.toggle("dark-mode");

    // Logika untuk menyimpan pilihan & mengubah ikon
    if (body.classList.contains("dark-mode")) {
        // Simpan pilihan ke localStorage
        localStorage.setItem("theme", "dark-mode");
        // Ubah ikon menjadi matahari
        themeSwitcherButton.innerHTML = "☀️";
    } else {
        // Hapus pilihan dari localStorage
        localStorage.removeItem("theme");
        // Ubah ikon menjadi bulan
        themeSwitcherButton.innerHTML = "🌙";
    }
}

// 4. Pasang "pendengar" event pada tombol
themeSwitcherButton.addEventListener("click", toggleTheme);
// --- LOGIKA UNTUK ANIMASI SCROLL-REVEAL ---

// 1. Pilih semua elemen yang ingin dianimasikan
const elementsToReveal = document.querySelectorAll(".reveal");

// 2. Buat "mata-mata" (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Jika elemen masuk ke dalam layar (isIntersecting)
    if (entry.isIntersecting) {
      // Tambahkan kelas 'visible' untuk memicu animasi
      entry.target.classList.add("visible");
      // (Opsional) Berhenti mengamati elemen ini setelah terlihat
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Picu animasi saat 10% elemen terlihat
});

// 3. Suruh "mata-mata" untuk mengamati setiap elemen
elementsToReveal.forEach((element) => {
  observer.observe(element);
});