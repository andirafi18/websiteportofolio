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