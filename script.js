document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('loaderPlayed')) {
        document.getElementById('loader').style.display = 'none';
        document.querySelector('.wrap').style.display = 'block';
        return;
    }

    const text = "ELBAZ Sofiane";
    const typewriter = document.getElementById('typewriter');
    let i = 0;

    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, 120);
        } else {
            typewriter.style.borderRight = "none";
            typewriter.style.transition = "transform 0.1s";
            typewriter.style.transform = "scale(1.1)";
            setTimeout(function() {
                typewriter.style.transform = "scale(1)";
                setTimeout(function() {
                    document.getElementById('loader').style.display = 'none';
                    document.querySelector('.wrap').style.display = 'block';
                    sessionStorage.setItem('loaderPlayed', 'true');
                }, 400);
            }, 120);
        }
    }

    type();
});
