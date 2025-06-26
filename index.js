document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Portfolio berhasil dimuat sepenuhnya!');
    const anchors = document.querySelectorAll('a[href="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});
