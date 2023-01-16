const { marked } = require('marked')

const trailingBlockHeading = (hArr, level, html) => {
  html = html || ''
  while (hArr.length > 0) {
    const _h = hArr.pop()
    if (level !== undefined && _h < level) {
      hArr.push(_h)
      break
    }
    html += '</div>'
  }
  return html
}

const blockHeadingGenerator = (opts, heading) => {
  const hArr = opts._markedBlockHeadingArr
  return (text, level, raw, slugger) => {
    let html = ''
    if (level > 1) {
      html += trailingBlockHeading(hArr, level, html)

      if (hArr.length === 0) {
        html += '<div class="card-container">'
        hArr.push(1)
      }

      html += '<div class="h' + level + '-block">'
      hArr.push(level)
      html += heading(text, level, raw, slugger)
    } else {
      html += heading(text, level, raw, slugger)
    }
    return html
  }
}

const paragraphGenerator = (opts, paragraph) => {
  return (text) => {
    return paragraph(text)
  }
}

const generator = {
  heading: blockHeadingGenerator,
  paragraph: paragraphGenerator,
}

module.exports = (markdown) => {
  const renderer = new marked.Renderer()
  const opts = {
    _markedBlockHeadingArr: [],
  }

  for (const key in generator) {
    let func = renderer[key]
    func = func.bind(renderer) // 必须绑定, 因为可能使用了 renderer 实例自身的属性
    renderer[key] = generator[key](opts, func)
  }

  opts.renderer = renderer

  let html = marked.parse(markdown, opts)
  html += trailingBlockHeading(opts._markedBlockHeadingArr)

  return html
}
