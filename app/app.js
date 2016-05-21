const portfolio = [];
const amount = 18;
let i;
import NinjaSlider from './js/ninja.slider.js';

if (window.location.pathname === '/') {
    const nsOptions = {
        sliderId: 'slider',
        transitionType: 'kenburns 1.2', // "fade", "slide", "zoom", "kenburns 1.2" or "none"
        autoAdvance: true,
        delay: 'default',
        transitionSpeed: 'default',
        aspectRatio: '9:3.5',
        initSliderByCallingInitFunc: false,
        shuffle: true,
        startSlideIndex: 0, // 0-based
        navigateByTap: true,
        pauseOnHover: false,
        keyboardNav: true,
        before: null,
        license: 'mylicense'
    };

    // eslint-disable-next-line
    const nslider = new NinjaSlider(nsOptions);
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
