(function () {
    // Set the date we're counting down to (Eid-ul-Fitr estimation ~ March 20, 2026)
    const countDownDate = new Date("March 20, 2026 00:00:00").getTime();

    // Update the count down every 1 second
    const timerInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const dayEl = document.getElementById("days");
        const hourEl = document.getElementById("hours");
        const minEl = document.getElementById("minutes");
        const secEl = document.getElementById("seconds");

        if (dayEl) dayEl.innerText = days < 10 ? "0" + days : days;
        if (hourEl) hourEl.innerText = hours < 10 ? "0" + hours : hours;
        if (minEl) minEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        if (secEl) secEl.innerText = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(timerInterval);
            if (dayEl) dayEl.innerText = "00";
            if (hourEl) hourEl.innerText = "00";
            if (minEl) minEl.innerText = "00";
            if (secEl) secEl.innerText = "00";
        }
    }, 1000);

    // Simple scroll reveal effect
    function reveal() {
        var reveals = document.querySelectorAll('.glass-card');
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('visible');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    // Trigger once on load
    reveal();
})();