import { rendererRule, coreRuler } from 'markdown-it-regex'
import emoji from 'emojione/emoji.json'

const iconsPlugin = (md, name) => {
  let options = null
  switch (name) {
    case 'emoji':
      let emojis = []
      Object.keys(emoji).forEach((name) => {
        emojis = emojis.concat(name).concat(emoji[name].aliases.map((item) => item.slice(1, -1)))
      })
      const emojiRegex = new RegExp(`(:(?:${emojis.join('|').replace(/\+/g, '\\+')}):)`)
      options = {
        name,
        regex: emojiRegex,
        replace: (match) => `<i class="e1a-${match.slice(1, -1)}"></i>`
      }
      break
    case 'font-awesome':
      options = {
        name,
        regex: /(:fa-[a-z0-9-]+?:)/,
        replace: (match) => `<i class="fa ${match.slice(1, -1)}"></i>`
      }
      break
    default:
      return
  }
  md.renderer.rules[options.name] = (tokens, idx) => {
    return rendererRule(tokens, idx, options)
  }
  md.core.ruler.push(options.name, (state) => {
    coreRuler(state, options)
  })
}

export default iconsPlugin
