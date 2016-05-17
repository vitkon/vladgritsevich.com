const portfolio = [];
const amount = 18;
let i;

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
