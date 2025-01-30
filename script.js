$(document).ready(function () {
    console.log("Document is ready.");
    function typeWriterEffect(element, text, speed, callback) {
        console.log(`Typing text: ${text}`);
        let index = 0;
        let typedText = '';

        $(element).text(''); // Clear existing text

        let interval = setInterval(() => {
            typedText += text[index];
            $(element).text(typedText); // Update text dynamically
            index++;
            if (index >= text.length) {
                clearInterval(interval); // Stop when text is complete
                if (callback) callback(); // Trigger the callback
            }
        }, speed);
    }
    typeWriterEffect(".typewriter", "Hey, I'm Uvindu", 100, function () {
        $(".mainsubtext.secname").fadeIn(1000, function () {
            typeWriterEffect(".para", $(".para").data("text"), 50);
        });
    });
});

// Disable right-click
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

// Disable specific keyboard shortcuts (e.g., F12, Ctrl+Shift+I, etc.)
document.addEventListener('keydown', (event) => {
    if (
        event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) ||
        (event.ctrlKey && event.key === 'U') // Ctrl+U
    ) {
        event.preventDefault();
    }
});

// Monitor for dev tools open (using a timing discrepancy method)
let devtoolsOpen = false;
const threshold = 160;
setInterval(() => {
    const start = performance.now();
    debugger; // This triggers a pause if dev tools are open
    const timeTaken = performance.now() - start;
    if (timeTaken > threshold) {
        devtoolsOpen = true;
        alert("Developer tools detected! Please close them to continue.");
    }
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.works-section .card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const centerX = cardRect.left + cardRect.width / 2;
            const centerY = cardRect.top + cardRect.height / 2;
            const x = (e.clientX - centerX) / 20;
            const y = (e.clientY - centerY) / 20;

            card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });
});