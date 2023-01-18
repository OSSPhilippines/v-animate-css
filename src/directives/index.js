import animate from './animate';

export default (Vue) => {
  Vue.directive('animate-css', {
    mounted: () => {},
    beforeMount: (el, binding) => {
      const { value, modifiers } = binding;
      animate(el, value, modifiers);
    },
  });
};
