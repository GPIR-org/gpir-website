document.addEventListener("DOMContentLoaded", () => {
    const footer = document.createElement("div");

    // Normal element at the bottom (NOT fixed or sticky)
    footer.style.width = "100%";
    footer.style.textAlign = "center";
    footer.style.background = "#f4f6f8";
    footer.style.color = "#333333"; // Change color here
    footer.style.fontFamily = "sans-serif";
    footer.style.padding = "8px 0";
    footer.style.marginTop = "20px"; // space below your existing footer

    // Responsive behavior
    function applyResponsiveStyles() {
        const w = window.innerWidth;

        if (w < 400) {
            footer.style.fontSize = "10px";
            footer.style.padding = "4px 0";
        } else if (w < 800) {
            footer.style.fontSize = "12px";
            footer.style.padding = "6px 0";
        } else {
            footer.style.fontSize = "14px";
            footer.style.padding = "8px 0";
        }
    }

    applyResponsiveStyles();
    window.addEventListener("resize", applyResponsiveStyles);

    // Last updated text
    const lastUpdated = document.lastModified;
    footer.textContent = `Last Updated: ${lastUpdated}`;

    // Append at the very bottom of the page *after your existing footer*
    document.body.appendChild(footer);
});
