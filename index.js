document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Portfolio Berhasil dimuat sepenuhnya");
    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
        });
    });
});
