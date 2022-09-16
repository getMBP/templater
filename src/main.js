// import { cL, Tooltip, Dropdown } from './js/lib.js';


// cL();

// const tooltip = new Tooltip(document.querySelector('.tooltip'));
// tooltip.init();

// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach(dropdown => {
//   const instance  = new Dropdown(dropdown);
//   instance.init();
//   })

import App from './App.js';

const app = async () => {

  document.getElementById('app').appendChild(await App())
};
app()