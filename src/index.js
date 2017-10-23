import directives from './directives';

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' ;
document.getElementsByTagName('head')[0].appendChild(link);

const VAnimateCss = {
  install(Vue, options) {
    directives(Vue);
  }
}

export default VAnimateCss;
