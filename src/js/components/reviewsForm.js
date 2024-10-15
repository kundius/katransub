export function initReviewsForm() {
  const toggles = document.querySelectorAll('[data-reviews-form-toggle]')
  const form = document.querySelector('[data-reviews-form]')

  toggles?.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      if (form.dataset.reviewsFormStatus === 'active') {
        form.removeAttribute('data-reviews-form-status')
        toggles.forEach((item) => item.removeAttribute('data-reviews-form-status'))
      } else {
        form.setAttribute('data-reviews-form-status', 'active')
        toggles.forEach((item) => item.setAttribute('data-reviews-form-status', 'active'))
      }
    })
  })
}
