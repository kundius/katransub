import { disableScroll, enableScroll } from '../utils'

export function applyCopyText(el) {
  el.addEventListener('click', async () => {
    const text = el.textContent;

    try {
      await navigator.clipboard.writeText(text);
      el.style.backgroundColor = '#f4f4f4';
      setTimeout(() => {
        el.style.backgroundColor = '';
      }, 200);
    } catch (err) {
      console.error('Не удалось скопировать текст: ', err);
    }
  });
}

export function initCopyText() {
  const elements = document.querySelectorAll('[data-copy-text]')

  if (elements) {
    elements.forEach(applyCopyText)
  }
}
