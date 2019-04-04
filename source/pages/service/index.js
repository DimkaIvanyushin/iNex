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

import '../../components/header-menu/header-menu.styl'
import '../../components/breadcrumbs/breadcrumbs.styl'
import '../../components/recall/recall.styl'
import '../../components/per-char/per-char.styl'
import '../../components/footer-main/footer.styl';

import '../../components/breadcrumbs/breadcrumbs.js';
// import '../../components/header-menu/header-menu.js';
new WOW().init();

$(document).ready(function () {

    const $section_tabs = $('section.tabs');

    $('.more-button').click(function () {
        $section_tabs.toggle('show');
    });

});