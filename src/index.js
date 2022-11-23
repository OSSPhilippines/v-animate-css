import directives from './directives';

const VAnimateCss = {
  install (Vue, options = {}) {
    const animateCSSPath = options.animateCSSPath;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = animateCSSPath || 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' ;
    document.getElementsByTagName('head')[0].appendChild(link);
    
    directives(Vue);
  },
};

export default VAnimateCss;
