import { disableScroll, enableScroll } from '../utils'

export function applyCopyText(el) {
  el.addEventListener('click', async () => {
    const text = el.textContent;

    try {
      await navigator.clipboard.writeText(text);
      // Можно добавить визуальную обратную связь
      // el.style.backgroundColor = '#d4edda';
      // setTimeout(() => {
      //   el.style.backgroundColor = '';
      // }, 1000);
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
