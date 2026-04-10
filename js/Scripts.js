document.addEventListener('DOMContentLoaded', () => {

    /* ================= MOBILE MENU ================= */

    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('show-menu');
        }
    });


    // ================= ACCORDION =================
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

            // Đóng tất cả trước
            document.querySelectorAll(".accordion-content").forEach(c => {
                c.style.maxHeight = "0px";
            });
            document.querySelectorAll(".accordion-header").forEach(h => {
                h.classList.remove("active");
                h.querySelector(".icon").textContent = "+";
            });

            // Nếu item đang đóng thì mở nó
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
                header.classList.add("active");
                header.querySelector(".icon").textContent = "−";
            }
        });
    });

});