const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    const itemTop = item.getBoundingClientRect().top;
    const revealPoint = 100;

    if (itemTop < windowHeight - revealPoint) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


const bubbleContainer = document.getElementById("heroBubbles");

if (bubbleContainer) {

  const bubbleCount = 22;

  for (let i = 0; i < bubbleCount; i++) {

    const bubble = document.createElement("span");

    bubble.classList.add("bubble");

    const size = Math.random() * 55 + 12;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}%`;

    bubble.style.animationDuration =
      `${Math.random() * 10 + 10}s, ${Math.random() * 4 + 3}s`;

    bubble.style.animationDelay =
      `${Math.random() * -15}s`;

    bubble.style.opacity =
      Math.random() * 0.35 + 0.08;

    bubbleContainer.appendChild(bubble);
  }

}





document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll(".counter");
  const statsSection = document.querySelector("#stats");

  if (!counters.length || !statsSection) return;

  function animateCounter(counter) {

    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || "";

    const duration = 2000;
    const start = performance.now();

    function update(currentTime) {

      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      const value =
        Math.floor(target * easedProgress);

      counter.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }


  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting && !hasAnimated) {

          counters.forEach(counter => {
            animateCounter(counter);
          });

          hasAnimated = true;

          observer.disconnect();
        }

      });

    },
    {
      threshold: 0.25
    }
  );

  observer.observe(statsSection);

});


document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const faqItem = button.parentElement;


        // close others
        document.querySelectorAll(".faq-item").forEach(item => {

            if(item !== faqItem){
                item.classList.remove("active");
            }

        });


        // toggle current
        faqItem.classList.toggle("active");


    });

});
