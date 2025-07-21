// Menunggu seluruh konten HTML dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", function() {

    const postsContainer = document.querySelector("#posts-container");

    // Tampilkan pesan loading
    postsContainer.innerHTML = "<p>Memuat postingan...</p>";

    // Buat fungsi async untuk mengambil data
    async function fetchPosts() {
        try {
            // 1. Kirim permintaan ke API
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            
            // Cek jika permintaan gagal
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // 2. Ubah jawaban menjadi format JSON
            const posts = await response.json();

            // 3. Tampilkan data ke halaman
            displayPosts(posts);

        } catch (error) {
            // Tangani jika ada error saat fetch
            postsContainer.innerHTML = "<p>Gagal memuat postingan. Coba lagi nanti.</p>";
            console.error("Gagal mengambil data posts:", error);
        }
    }

    // Buat fungsi untuk menampilkan postingan di HTML
    function displayPosts(posts) {
        // Kosongkan container dari pesan "loading"
        postsContainer.innerHTML = "";

        // Loop melalui setiap data post
        posts.forEach(post => {
            // Buat elemen div baru untuk setiap post
            const postElement = document.createElement("div");
            postElement.classList.add("post-item"); // Tambahkan class untuk styling

            // Isi div dengan judul dan isi post
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            // Tambahkan elemen post baru ini ke dalam container
            postsContainer.append(postElement);
        });
    }

    // Panggil fungsi untuk memulai semuanya
    fetchPosts();

});