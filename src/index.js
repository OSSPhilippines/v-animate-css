import directives from './directives';

const ANIMATE_CSS_CDN_LINK =
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

const VAnimateCss = {
  install (Vue, options = {}) {
    const animateCSSPath = options.animateCSSPath;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = animateCSSPath || ANIMATE_CSS_CDN_LINK;
    document.getElementsByTagName('head')[0].appendChild(link);

    directives(Vue);
  },
};

export default VAnimateCss;
