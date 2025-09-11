

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

document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("toggle-link");
  const moreText = document.getElementById("more-text");

  const fullText =
    " Après avoir effectué une première année en BTS CIEL, je me suis rendu compte que cette formation ne correspondait pas du tout à mes attentes. C’est pourquoi j’ai décidé de me réorienter. Suite à de nombreuses recherches et grâce aux conseils de certains amis ainsi que de mes professeurs, j’ai choisi de m’orienter vers un BTS SIO. En effet, je pense que ce BTS me conviendrait parfaitement et je suis prêt à m’y investir à 100 %.";

  let typing = false;
  let expanded = false;

  function typeWriter() {
    let i = 0;
    moreText.textContent = "";
    moreText.style.display = "inline";

    function type() {
      if (i < fullText.length) {
        moreText.textContent += fullText.charAt(i);
        i++;
        setTimeout(type, 15); //vit frappe anime
      } else {
        typing = false;
      }
    }
    type();
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (typing) return;

    if (!expanded) {
      typing = true;
      expanded = true;
      link.textContent = "Voir moins";
      typeWriter();
    } else {
      moreText.style.display = "none";
      link.textContent = "En savoir plus";
      expanded = false;
    }
  });
});
