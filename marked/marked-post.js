const { marked } = require('marked')
const hljs = require('highlight.js')

const renderer = new marked.Renderer()
const rImage = renderer.image

// do solve for the position sign
renderer.heading = function (text, level, raw) {
  const result = ''
  return (
    result +
    '<h' +
    level +
    ' id="' +
    this.options.headerPrefix +
    raw.toLowerCase().replace(/[\s]+/g, '-') +
    '">' +
    text +
    '</h' +
    level +
    '>\n'
  )
}

renderer.html = function (html) {
  html = html.split('\n')
  return html.join('\n')
}

renderer.listitem = function (text) {
  const checked =
    '<input type="checkbox" class="task-list-item" checked disabled>'
  const unChecked = '<input type="checkbox" class="task-list-item" disabled>'
  const reg = /^\[\s*[xX]\s*\]/
  const unReg = /^\[\s*\]/

  text = text.replace(/<p>(.*?)<\/p>/, '$1')

  const aPointText = ''

  if (reg.test(text)) {
    text = text.replace(reg, '')
    return (
      '<li class="task-list-item" checked>' +
      aPointText +
      checked +
      text +
      '</li>\n'
    )
  } else if (unReg.test(text)) {
    text = text.replace(unReg, '')
    return (
      '<li class="task-list-item">' + aPointText + unChecked + text + '</li>\n'
    )
  } else {
    return '<li>' + aPointText + text + '</li>\n'
  }
}

renderer.paragraph = function (text) {
  return '<p>' + text + '</p>\n'
}

renderer.tablerow = function (content) {
  return '<tr>\n' + content + '</tr>\n'
}

renderer.codespan = function (text) {
  const result = ''
  return result + '<code>' + text + '</code>\n'
}

renderer.image = function (href, title, text) {
  const result = ''
  return result + rImage.call(renderer, href, title, text)
}

renderer.link = function (href, title, text) {
  let result = `<a href="${href}"`
  if (title) {
    result += ` title="${title}"`
  }

  if (/^http[s]?:\/\//.test(href)) {
    result += ' target="_blank"'
  }

  if (text) {
    result += ` >${text}</a>`
  } else {
    result += ` ></a>`
  }
  return result
}

const options = {
  highlight(code) {
    code = code.split('\n')
    code = code.join('\n')
    code = hljs.highlightAuto(code).value
    return code
  },
  renderer,
  breaks: true,
}

module.exports = (markdown) => {
  return marked.parse(markdown, options)
}
