import { animateNow } from './events';

export default (el, value, modifiers) => {
	const {
    click, hover, once
  } = modifiers;

  if(typeof value === 'string') {
    value = {classes:value}
  }

  if(click) {
    el.onclick = () => {
      animateNow(el, value, modifiers);
    }
    return;
  }

  if(hover) {
    el.onmouseover = () => {
      animateNow(el, value, modifiers);
    }
    return;
  }

  animateNow(el, value, modifiers);
}