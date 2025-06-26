document.addEventListener('DOMContentLoaded', () => {
    console.log('Website portofolio berhasil dimuat sepenuhnya!');

     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' 
            });
        });
    });

    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            alert('Terima kasih telah menghubungi! Pesan Anda akan segera diproses.');
        });
    }

    const heroTitle = document.querySelector('.hero-section h1'); 
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.textContent = 'Siap Membangun Solusi Web Inovatif!';
        }, 3000); 
    }

});

