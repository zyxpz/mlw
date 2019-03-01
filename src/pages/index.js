import { RollerSlide } from 'mido-h5-cp';

import '../css/index.less';

const init = () => {
  const $wrap = document.querySelector('.mlw-wrap');


  const rollerSlide = new RollerSlide({
    wrap: $wrap
  });

  rollerSlide.init();
  // render($wrap);
};

// const render = ($wrap) => {
//   console.log($wrap);
// }

init();