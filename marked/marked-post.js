const marked = require('marked');
const hljs = require('highlight.js');

var renderer = new marked.Renderer(),
    rImage = renderer.image,
    rLink = renderer.link,
    displaymath = renderer.displaymath,
    inlineMath = renderer.math;

//do solve for the position sign
renderer.heading = function(text, level, raw) {
    var result = '';
    return result
        + '<h'
        + level
        + ' id="'
        + this.options.headerPrefix
        + raw.toLowerCase().replace(/[\s]+/g, '-')
        + '">'
        + text
        + '</h'
        + level
        + '>\n';
};

renderer.html = function(html) {
    var i, len, line;
    html = html.split('\n');
    return html.join('\n');
};

renderer.listitem = function(text) {
    var checked = '<input type="checkbox" class="task-list-item" checked disabled>',
        unChecked = '<input type="checkbox" class="task-list-item" disabled>',
        reg = /^\[\s*[xX]\s*\]/,
        unReg = /^\[\s*\]/;

    text = text.replace(/<p>(.*?)<\/p>/, '$1');

    var aPointText = '';

    if(reg.test(text)) {
        text = text.replace(reg, '');
        return '<li class="task-list-item" checked>' + aPointText + checked + text + '</li>\n';
    } else if(unReg.test(text)) {
        text = text.replace(unReg, '');
        return '<li class="task-list-item">' + aPointText + unChecked + text + '</li>\n';
    } else {
        return '<li>' + aPointText + text + '</li>\n';
    }
};

renderer.paragraph = function(text) {
    return '<p>' + text + '</p>\n';
};

renderer.tablerow = function(content) {
    return '<tr>\n' + content + '</tr>\n';
};

renderer.codespan = function(text) {
    var result = '';
    return result + '<code>' + text + '</code>\n'
};

renderer.image = function(href, title, text) {
    var result = '';
    return result + rImage.call(renderer, href, title, text);
};

renderer.link = function(href, title, text) {
    var result = `<a href="${href}"`;
    if (title) {
      result += ` title="${title}"`;
    }

    if (/^http[s]?:\/\//.test(href)) {
      result += ' target="_blank"'
    }

    if (text) {
      result += ` >${text}</a>`
    } else {
      result += ` ></a>`;
    }
    return result;
};


const options = {
  highlight: function (code) {
      var i, len, line;
      code = code.split('\n');
      code = code.join('\n');
      code =  hljs.highlightAuto(code).value;
      return code
  },
  renderer: renderer,
  breaks: true
}

module.exports = (markdown) => {
  return marked(markdown, options)
}
