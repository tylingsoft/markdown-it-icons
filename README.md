# markdown-it-icons

Plugin for markdown-it, supports emoji icons and font-awesome icons.


## Installation

```
yarn add markdown-it-icons
```


## Usage

```javascript
import markdownIt from 'markdown-it'
import markdownItIcons from 'markdown-it-icons'
const mdi = markdownIt()
mdi.use(markdownItIcons, 'emoji')
mdi.use(markdownItIcons, 'font-awesome')
mdi.render('I :heart: you') // <p>I <i class="e1a-heart"></i> you</p>
mdi.render('A :fa-car: runs') // <p>A <i class="fa fa-car"></i> runs</p>
```