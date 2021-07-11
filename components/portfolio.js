class Portfolio extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <section class="portfolio section" id="portfolio">
        <h2 class="section__title">Portfolio</h2>
        <span class="section__subtitle">Most recent Work</span>
    
        <div class="portfolio__container container swiper-container">
          <div class="swiper-wrapper">
            <div class="portfolio__content grid swiper-slide">
              <img src="./img/portfolio1.jpg" alt="" class="portfolio__img">
    
              <div class="portfolio__data">
                <h3 class="portfolio__title">YouTube Channel</h3>
                <p class="portfolio__description">Here, i post some amazing designs and animations.</p>
                <a href="https://www.youtube.com/channel/UCOxbcakysLMm7PSIU096cuA" class="button button--flex button--small portfolio__button">
                  Visit
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
    
            <div class="portfolio__content grid swiper-slide">
              <img src="./img/portfolio2.jpg" alt="" class="portfolio__img">
    
              <div class="portfolio__data">
                <h3 class="portfolio__title">Amber PWA</h3>
                <p class="portfolio__description">A social web app and a PWA built with the Angular Framework.Want a peek?
                https://amberinc.web.app
                  </p>
                <a href="#" class="button button--flex button--small portfolio__button">
                  Demo
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
    
            <div class="portfolio__content grid swiper-slide">
              <img src="./img/portfolio3.jpg" alt="" class="portfolio__img">
    
              <div class="portfolio__data">
                <h3 class="portfolio__title">Amber Mobile App</h3>
                <p class="portfolio__description">A social mobile app on iOS and Android built with flutter.
                  Kindly message me at samudo2019@gmail.com to get a download link
                  </p>
                <a href="#" class="button button--flex button--small portfolio__button">
                  Demo
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
    
          </div>
    
          <div class="swiper-button-next">
            <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-button-prev">
            <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>    
        `;
    }
}

customElements.define('s-portfolio', Portfolio)