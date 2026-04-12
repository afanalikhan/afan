document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 🔥 SELECT ELEMENTS
    // =========================
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navLinks");

    // =========================
    // 🔥 SMOOTH SCROLL
    // =========================
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // =========================
    // 🔥 ACTIVE NAV LINK
    // =========================
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // =========================
    // 🔥 SCROLL ANIMATIONS
    // =========================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".project-card").forEach(el => observer.observe(el));
    document.querySelectorAll(".skill-box").forEach(el => observer.observe(el));
    document.querySelectorAll(".timeline-item").forEach(el => observer.observe(el));

    // =========================
    // 🔥 HAMBURGER MENU (FIXED)
    // =========================
    if (hamburger && nav) {

        // OPEN / CLOSE MENU
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            nav.classList.toggle("active");
        });

        // CLOSE WHEN CLICK LINK
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                hamburger.classList.remove("active");
            });
        });

        // 🔥 CLOSE WHEN CLICK OUTSIDE
        document.addEventListener("click", (e) => {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                nav.classList.remove("active");
                hamburger.classList.remove("active");
            }
        });
    }

});


// =========================
// ✨ CURSOR GLOW EFFECT
// =========================
const glow = document.getElementById("cursor-glow");

if (glow) {
    window.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}


// =========================
// 🔥 BUTTON HOVER EFFECT
// =========================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

