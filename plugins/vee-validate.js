import { extend } from 'vee-validate'
// eslint-disable-next-line camelcase
import { required, email, regex, ext, size } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Vul je {_field_} in',
})

extend('email', {
  ...email,
  message: 'Vul een geldig emailadres in',
})

extend('regex', {
  ...regex,
  message: 'Vul een geldig {_field_} in',
})

extend('ext', {
  ...ext,
  message: 'Upload één van de volgende formaten: pdf, word, excel',
})

extend('size', {
  ...size,
  message: 'Het bestand mag maximaal 10mb zijn',
})

extend('size-contact', {
  ...size,
  message: '*De bijlage mag maximaal 10mb zijn',
})

extend('requiredfile', {
  ...required,
  message: 'Upload de gevraagde bestanden',
})
