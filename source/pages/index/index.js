// import bootstrap 4
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import fontawesome 
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
// import wow.js
import 'animate.css'
import WOW from 'wow.js/dist/wow.js';
// import normalize.css
import 'normalize.css';

// import style
import './index.styl';
import '../../components/header-top/header-top.styl'
import '../../components/header-menu/header-menu.styl'
import '../../components/slider/slider.styl'
import '../../components/about-us/about-us.styl'
import '../../components/small-features/small-features.styl'
import '../../components/alert-cta/alert-cta.styl'

new WOW().init();