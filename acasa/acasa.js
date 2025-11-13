document.addEventListener('DOMContentLoaded', (event) => {
    const animatieButton = document.querySelector('.animatie');
    
    document.querySelector('.clase button').addEventListener('click', function() {
    document.querySelectorAll('.slectieclase').forEach(function(element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
            element.style.animation = 'slideInFromBelow 0.5s forwards';
        } else {
            element.style.animation = 'slideOutToBelow 0.5s forwards';
            setTimeout(() => {
                element.style.display = 'none';
            }, 340);
        }
        });
    });
    animatieButton.addEventListener('click', function() {
        animatieButton.style.opacity = '0%';
        animatieButton.style.cursor = 'default';
        const parentElement = document.getElementById('imag').parentElement;
        document.getElementById('imag').remove();
        document.querySelector('.buton').style.display = 'block';
        if (window.innerWidth <= 850) {
            window.scrollTo(0, document.body.scrollHeight);
        }
    })
});
