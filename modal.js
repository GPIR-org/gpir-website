document.addEventListener("DOMContentLoaded", () => {

    const modalOverlay = document.getElementById("modalOverlay");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    const closeBtn = document.querySelector(".modal-close");

    if (!modalOverlay || !modalTitle || !modalContent || !closeBtn) {
        console.error("Modal elements not found in HTML");
        return;
    }

    const modalData = {
        vision: {
            title: "Our Vision",
            content:
                "Our vision is to bring to fore issues affecting young children and crafting reactive and proactive solution"
        },
        mission: {
            title: "Our Mission",
            content:
                "We aim to make society a better living for all by alleviating discordant behavior in young people."
        },
        values: {
            title: "Our Values",
            content:
                "Integrity, Empathy, Teamwork, Transparency, Accountability, Professionalism, Prayer."
        }
    };

    document.querySelectorAll(".card[data-modal]").forEach(card => {
        card.addEventListener("click", e => {
            e.preventDefault();

            const key = card.dataset.modal;
            if (!modalData[key]) return;

            modalTitle.textContent = modalData[key].title;
            modalContent.textContent = modalData[key].content;

            modalOverlay.classList.add("active");
        });
    });

    closeBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
    });

    modalOverlay.addEventListener("click", e => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove("active");
        }
    });

});
