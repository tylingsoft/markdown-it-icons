import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItIcons from '../src/index'

const mdi = markdownIt()
mdi.use(markdownItIcons, 'emoji')
mdi.use(markdownItIcons, 'font-awesome')

assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>', '# Hello world')
assert(mdi.render('Hello world').trim() === '<p>Hello world</p>', 'Hello world')

assert(mdi.render(':heart:').trim() === '<p><i class="e1a-heart"></i></p>', ':heart:')
assert(mdi.render('I :heart: you').trim() === '<p>I <i class="e1a-heart"></i> you</p>', 'I :heart: you')
assert(mdi.render('I :heart: :heart: :heart: you').trim() === '<p>I <i class="e1a-heart"></i> <i class="e1a-heart"></i> <i class="e1a-heart"></i> you</p>', 'I :heart: :heart: :heart: you')

assert(mdi.render('A :fa-car: runs').trim() === '<p>A <i class="fa fa-car"></i> runs</p>', 'A :fa-car: runs')

assert(mdi.render(':does_not_exist:').trim() === '<p>:does_not_exist:</p>', ':does_not_exist:')

console.log(mdi.render('I :heart: you'))
console.log(mdi.render('A :fa-car: runs'))
console.log(mdi.render(':does_not_exist:'))
