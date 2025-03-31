import cs from './cs.json'
import en from './en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'cs',
  messages: {
    cs,
    en,
  },
}))
