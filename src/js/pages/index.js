import { RollerSlide } from 'mido-h5-cp';

import {
  navTpl,
  mainTpl
} from '../tpl';

import '../../css/index.less';



const render = ($wrap) => {
  $wrap.innerHTML = mainRender($wrap);
  document.querySelector('.J-mlw-nav-wrap').innerHTML = navRender($wrap);
}

const navRender = () => {
  const {
    nav: {
      logo = {},
      content = []
    }
  } = mlwData;
  return navTpl({
    logo: {
      logoName: logo.title,
      icon: logo.image
    },
    list: content
  });
};

const mainRender = () => {
  const {
    main: {
      download = {}
    },
    list = []
  } = mlwData;
  const {
    url = ''
  } = download;
  return mainTpl({
    url,
    list,
  });
}

const init = () => {
  const $wrap = document.querySelector('.mlw-wrap');

  render($wrap);

  const rollerSlide = new RollerSlide({
    wrap: $wrap
  });

  rollerSlide.init();
};

init();
