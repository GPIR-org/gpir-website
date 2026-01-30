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
                "To bring to fore issues affecting children and young people in communities around Zimbabwe and implementing both proactive and reactive solutions."
        },
        mission: {
            title: "Our Mission",
            content:
                "To ensure all children and youth afford equal opportunites to reach their full potential by identifying their talents and nurturing them. To build resilient communities free from social woes of early childhood marriages, domestic violence and drug and substance abuse; we aim to build resilient communities through advocacy awerness,prevention and empowering programs. "
        },
        values: {
            title: "Our Values",
            content:
                "Integrity, empathy, teamwork, transparency, accountability, professionalism, prayer and commitment to community development."
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
