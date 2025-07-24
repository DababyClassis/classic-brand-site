document.addEventListener('DOMContentLoaded', function() {
    const heroDesc = document.querySelector('.hero-desc');
    if (!heroDesc) return;

    fetch('hero-desc-paragraphs.html')
        .then(res => res.text())
        .then(html => {
            // Create a temp element to parse HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const paragraphs = Array.from(tempDiv.querySelectorAll('p'));
            let index = 0;

            function showParagraph(idx) {
                heroDesc.classList.remove('show');
                heroDesc.classList.add('hide');
                setTimeout(() => {
                    heroDesc.innerHTML = paragraphs[idx].innerHTML;
                    heroDesc.classList.remove('hide');
                    heroDesc.classList.add('show');
                }, 900); // transition duration matches CSS
            }

            if (paragraphs.length) {
                showParagraph(index);
                setInterval(() => {
                    index = (index + 1) % paragraphs.length;
                    showParagraph(index);
                }, 5000); // 5 seconds
            }
        });
});