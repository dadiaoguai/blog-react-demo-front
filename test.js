var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: code => require('highlight.js').highlightAuto(code).value,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

console.log(marked('I am using __markdown__.'))