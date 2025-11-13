document.addEventListener('DOMContentLoaded', function() {
    const meniuOn = document.getElementById('meniu-mobil');
    const meniu = document.querySelector('.meniu');

    if (meniuOn) {
        meniuOn.addEventListener('click', function() {
            if (window.innerWidth <= 500) {
                if (meniu.style.display === 'none') {
                    meniu.style.display = 'block';
                } else {
                    meniu.style.display = 'none';
                }
            }
            
        });
        
    }
});