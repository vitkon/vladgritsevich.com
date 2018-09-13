const portfolio = [];
const amount = 22;
let i;

if (window.location.pathname === '/') {
    const images = document.getElementsByClassName('slider__image');
    const startImage = 0;

    images[0].className += ' fx';

    const makeImage = function* maker() {
        let currentImage = startImage;
        while (true) {
            currentImage = (currentImage === images.length) ? 0 : currentImage;
            yield currentImage;
            currentImage += 1;
        }
    };

    const imageGenerator = makeImage();

    const slideShow = function kenBurns() {
        const index = imageGenerator.next().value;
        const numberOfImages = images.length;
        images[index].className += ' fx';

        if (index === 0) { images[numberOfImages - 2].className = 'slider__image'; }
        if (index === 1) { images[numberOfImages - 1].className = 'slider__image'; }
        if (index > 1) { images[index - 2].className = 'slider__image'; }
    };

    window.setInterval(slideShow, 6000);
}

if (window.location.pathname === '/portfolio.html') {
    for (i = amount; i > 0; i--) {
        portfolio.push(`
            <div class="ba${i} portfolio">
                <div class="caption"></div>
            </div>
        `);
        portfolio.push(`
            <style>
                .ba${i} { background: url("portfolio-assets/ba-${i}-2.jpg") }
                .ba${i}:hover { background: url("portfolio-assets/ba-${i}-1.jpg") }
            </style>
            <img src="portfolio-assets/ba-${i}-1.jpg" alt="" style="display: none" />
        `);
    }

    document.getElementById('portfolio').innerHTML = portfolio.join(' ');
}
