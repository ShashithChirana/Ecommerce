import React from 'react'
import './Home.css';
import logo1 from "../Assestes/banner-1.png";
import logo2 from "../Assestes/banner-2.png";
import logo3 from "../Assestes/banner-3.png";
import logo4 from "../Assestes/event.png";
import logo5 from "../Assestes/footer-bg.png";
import logo6 from "../Assestes/header-bg.png";
import logo7 from "../Assestes/header.png";
import logo8 from "../Assestes/logo-dark.png";
import logo9 from "../Assestes/logo-white.png";
import logo10 from "../Assestes/order-1.png";
import logo11 from "../Assestes/order-2.png";
import logo12 from "../Assestes/order-3.png";
import logo13 from "../Assestes/reservation-bg-1.png";
import logo14 from "../Assestes/reservation-bg-2.png";
const Home = () => {
  return (
    <div>
    <header class="header">
      <nav>
        <div class="nav__header">
          <div class="nav__logo">
            <a href="#">
              <img
                src={logo8}
                alt="logo"
                class="nav__logo-dark"
              />
              <img
                src={logo9}
                alt="logo"
                class="nav__logo-white"
              />
            </a>
          </div>
          <div class="nav__menu__btn" id="menu-btn">
            <i class="ri-menu-line"></i>
          </div>
        </div>
        <ul class="nav__links" id="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#special">SPECIAL</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#event">EVENTS</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
      <div class="section__container header__container" id="home">
        <div class="header__image">
          <img src={logo7} alt="header" />
        </div>
        <div class="header__content">
          <h2>IT IS GOOD TIME FOR THE GREATE TASTE OF BURGER</h2>
          <h1>BURGER<br /><span>WEEK</span></h1>
        </div>
      </div>
    </header>

    <section class="section__container banner__container" id="special">
      <div class="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>MOST POPULAR BURGER</h4>
      </div>
      <div class="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>MORE FUN<br />MORE TASTE</h4>
      </div>
      <div class="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>FRESH & CHILI</h4>
      </div>
    </section>

    <section class="section__container order__container" id="menu">
      <h3>ALWAYS TASTEY BURGER</h3>
      <h2 class="section__header">CHOOSE & ENJOY</h2>
      <p class="section__description">
        Whether you crave classic flavors or daring combinations, this is where
        your culinary journey begins. Indulge your cravings and savor every bite
        as you create your personalized burger experience with Burger Company.
      </p>
      <div class="order__grid">
        <div class="order__card">
          <img src={logo10} alt="order" />
          <h4>Chicken Burger</h4>
          <p>
            Sink your teeth into the timeless perfection of our Chicken Burger,
            an experience that never goes out of style.
          </p>
          <button class="btn">ORDER NOW</button>
        </div>
        <div class="order__card">
          <img src={logo11} alt="order" />
          <h4>Veggie Delight Burger</h4>
          <p>
            Embrace the vibrant flavors of our Veggie Delight Burger, a
            celebration of freshness and wholesome goodness.
          </p>
          <button class="btn">ORDER NOW</button>
        </div>
        <div class="order__card">
          <img src={logo12} alt="order" />
          <h4>BBQ Bacon Burger</h4>
          <p>
            Indulge in a symphony of smoky, savory flavors with our BBQ Bacon
            Burger, grilled and topped with crispy bacon.
          </p>
          <button class="btn">ORDER NOW</button>
        </div>
      </div>
    </section>

    <section class="section__container event__container" id="event">
      <div class="event__content">
        <div class="event__image">
          <img src={logo4} alt="event" />
        </div>
        <div class="event__details">
          <h3>Discover</h3>
          <h2 class="section__header">UPCOMING EVENTS</h2>
          <p class="section__description">
            From exclusive burger tastings and chef collaborations to community
            outreach initiatives and seasonal celebrations, there's always
            something special on the horizon at Burger Company. Be the first to
            know about our upcoming events, promotions, and gatherings as we
            continue to bring joy and flavor to our cherished customers. Join us
            in creating memorable moments and delicious memories together!
          </p>
        </div>
      </div>
    </section>

    <section class="reservation" id="contact">
      <div class="section__container reservation__container">
        <h3>RESERVATION</h3>
        <h2 class="section__header">BOOK YOUR TABLE</h2>
        <form action="/">
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="date" placeholder="DATE" />
          <input type="time" placeholder="TIME" />
          <input type="number" placeholder="PEOPLE" />
          <button class="btn" type="submit">FIND TABLE</button>
        </form>
      </div>
      <img
        src={logo13}
        alt="reservation"
        class="reservation__bg-1"
      />
      <img
        src={logo14}
        alt="reservation"
        class="reservation__bg-2"
      />
    </section>
    </div>
  )
}

export default Home
