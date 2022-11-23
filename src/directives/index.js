import animate from './animate';

export default (Vue) => {
  Vue.directive('animate-css', {
    inserted: () => {},
    bind: (el, binding) => {
      const {
        value, modifiers,
      } = binding;
      animate(el, value, modifiers);
    },
  });
};