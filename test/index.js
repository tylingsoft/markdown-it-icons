import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItIcons from '../src/index'

const mdi = markdownIt()
mdi.use(markdownItIcons, 'emoji')
mdi.use(markdownItIcons, 'font-awesome')

assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>')
assert(mdi.render('Hello world').trim() === '<p>Hello world</p>')

assert(mdi.render(':heart:').trim() === '<p><i class="e1a-heart"></i></p>')
assert(mdi.render('I :heart: you').trim() === '<p>I <i class="e1a-heart"></i> you</p>')
assert(mdi.render('I :heart: :heart: :heart: you').trim() === '<p>I <i class="e1a-heart"></i> <i class="e1a-heart"></i> <i class="e1a-heart"></i> you</p>')

assert(mdi.render('A :fa-car: runs').trim() === '<p>A <i class="fa fa-car"></i> runs</p>')

console.log(mdi.render('I :heart: you'))
console.log(mdi.render('A :fa-car: runs'))
