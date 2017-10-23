import animations from './animations.json';
import animate from './animate';
import {
  animationEnd
} from './events';

export default (Vue) => {
  Vue.directive('animate-css', {
    inserted: (el) => {},
    bind: (el, binding, vnode) => {
      const {
        name, value, oldValue, expression, arg, modifiers
      } = binding;
      
      animate(el, value, modifiers);
    }
  })
};