import JustValidate from 'just-validate'

const footerFeedbackFormValidate = new JustValidate('[data-footer-feedback-form]', {})

footerFeedbackFormValidate
  .addField('[name="phone"]', [
    {
      rule: 'required',
      errorMessage: 'Укажите телефон'
    }
  ])
  .addField('[name="email"]', [
    {
      rule: 'required',
      errorMessage: 'Укажите e-mail'
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный e-mail'
    }
  ])
  .addField('[name="rules"]', [
    {
      rule: 'required',
      errorMessage: 'Согласитесь с правилами'
    }
  ])

const buyInClickFormFormValidate = new JustValidate('[data-buy-in-click-form]', {})

buyInClickFormFormValidate
  .addField('[name="phone"]', [
    {
      rule: 'required',
      errorMessage: 'Укажите телефон'
    }
  ])
  .addField('[name="rules"]', [
    {
      rule: 'required',
      errorMessage: 'Согласитесь с правилами'
    }
  ])
