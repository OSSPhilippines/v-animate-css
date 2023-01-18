import { animateNow } from './events';
import scrollMonitor from 'scrollmonitor';

export default (el, value, modifiers) => {
  const {
    click, hover, enter, enterFully, exit, exitPartially,
  } = modifiers;

  const elementWatcher = (
    enter || enterFully || exit || exitPartially
  )
    ? scrollMonitor.create(el)
    : false;

  if (typeof value === 'string') {
    value = { classes: value };
  }

  if (click) {
    el.onclick = () => {
      animateNow(el, value, modifiers);
    };
    return;
  }

  if (hover) {
    el.onmouseover = () => {
      animateNow(el, value, modifiers);
    };
    return;
  }

  if (enter) {
    elementWatcher.enterViewport(() => {
      animateNow(el, value, modifiers);
    });
    return;
  }

  if (enterFully) {
    elementWatcher.fullyEnterViewport(() => {
      animateNow(el, value, modifiers);
    });
    return;
  }

  if (exit) {
    elementWatcher.exitViewport(() => {
      animateNow(el, value, modifiers);
    });
    return;
  }

  if (exitPartially) {
    elementWatcher.partiallyExitViewport(() => {
      animateNow(el, value, modifiers);
    });
    return;
  }

  animateNow(el, value, modifiers);
};
