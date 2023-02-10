import animations from './animations';

export const animationEnd = (el, value, modifiers) => {
  if (modifiers.once) return;
  el.addEventListener('animationend', () => {
    const classes = el.classList;
    animations.forEach((item) => {
      if (classes.contains(`animate__${item}`)) {
        el.classList.remove(`animate__${item}`);
        if (value.removeAfterAnimation) {
          el.parentNode.removeChild(el);
        }
      }
    });
  });
};

export const animateNow = (el, value, modifiers) => {
  const { classes, duration, delay, iteration } = value;

  if (duration) {
    el.style['-webkit-animation-duration'] = `${duration}ms`;
    el.style['-moz-animation-duration'] = `${duration}ms`;
    el.style['-o-animation-duration'] = `${duration}ms`;
    el.style['animation-duration'] = `${duration}ms`;
  }

  if (delay) {
    el.style['-webkit-animation-delay'] = `${delay}ms`;
    el.style['-moz-animation-delay'] = `${delay}ms`;
    el.style['-o-animation-delay'] = `${delay}ms`;
    el.style['animation-delay'] = `${delay}ms`;
  }

  if (iteration) {
    el.style['-webkit-animation-iteration-count'] = `${iteration}`;
    el.style['-moz-animation-iteration-count'] = `${iteration}`;
    el.style['-o-animation-iteration-count'] = `${iteration}`;
    el.style['animation-iteration-count'] = `${iteration}`;
  }

  el.classList.add('animate__animated', `animate__${classes}`);

  animationEnd(el, value, modifiers);
};
