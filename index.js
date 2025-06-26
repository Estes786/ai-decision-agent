// index.js

// Pastikan seluruh dokumen HTML sudah dimuat sebelum menjalankan script JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website portofolio berhasil dimuat sepenuhnya!');

    // --- Contoh Fungsionalitas Sederhana ---

    // 1. Contoh: Menambahkan efek scroll halus ke bagian tertentu
    //    Jika Anda memiliki link navigasi seperti <a href="#about">About</a>
    //    Anda bisa menambahkan ini untuk scroll halus daripada lompat langsung.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default (lompat langsung)

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Membuat scroll menjadi halus
            });
        });
    });

    // 2. Contoh: Menampilkan pesan saat tombol kontak diklik (jika ada tombol dengan ID 'contact-button')
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            alert('Terima kasih telah menghubungi! Pesan Anda akan segera diproses.');
            // Anda bisa mengganti alert ini dengan logika form submission yang sebenarnya
        });
    }

    // 3. Contoh: Mengubah teks di header setelah beberapa detik
    //    Ini hanya contoh, Anda bisa menghapusnya jika tidak diperlukan.
    const heroTitle = document.querySelector('.hero-section h1'); // Sesuaikan selector jika berbeda
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.textContent = 'Siap Membangun Solusi Web Inovatif!';
        }, 3000); // Mengubah teks setelah 3 detik
    }

    // --- Tambahkan JavaScript Anda yang lain di sini ---
    // Misalnya, untuk efek animasi, validasi form, interaksi galeri, dll.

});

