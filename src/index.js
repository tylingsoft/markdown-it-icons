import { rendererRule, coreRuler } from 'markdown-it-regex'

const iconsPlugin = (md, name) => {
  let options = null
  switch (name) {
    case 'emoji':
      options = {
        name,
        regex: /(:[a-z0-9_]+?:)/,
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
