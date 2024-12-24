export function applyShare(wrapper) {
    const button = wrapper.querySelector('[data-share-button]')

    const open = () => {
        wrapper.setAttribute('data-share-active', '')

        window.addEventListener('scroll', close)
    }

    const close = () => {
        wrapper.removeAttribute('data-share-active')

        window.removeEventListener('scroll', close)
    }

    const toggle = () => {
        if (wrapper.hasAttribute('data-share-active')) {
            close()
        } else {
            open()
        }
    }

    button.addEventListener('click', toggle)
}

export function initShare() {
  const elements = document.querySelectorAll('[data-share]')

  if (elements) {
    elements.forEach(applyShare)
  }
}
