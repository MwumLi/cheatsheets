var marked = require('marked');

var trailingBlockHeading = (hArr, level, html) => {
  html = html || '';
  while (hArr.length > 0) {
    var _h = hArr.pop();
    if (level != undefined && _h < level) {
      hArr.push(_h);
      break;
    }
    html += '</div>';
  }
  return html;
};

var blockHeadingGenerator = (opts, heading) => {
  var hArr = opts._markedBlockHeadingArr;
  return (text, level, raw) => {
    var html = '';
    if (level > 1) {
      html += trailingBlockHeading(hArr, level, html);

      if (hArr.length == 0) {
        html += '<div class="card-container">';
        hArr.push(1);
      }

      html += '<div class="h' + level + '-block">';
      hArr.push(level);
      html += heading(text, level, raw);
    } else {
      html += heading(text, level, raw);
    }
    return html;
  }
};

var paragraphGenerator = (opts, paragraph) => {
  var hArr = opts._markedBlockHeadingArr;
  return (text) => {
    return paragraph(text);
  }
}

var generator = {
  heading: blockHeadingGenerator,
  paragraph: paragraphGenerator
}


module.exports = (markdown) => {
  var renderer = new marked.Renderer();
	var opts = {
    _markedBlockHeadingArr : []
	}


  for (var key in generator) {
    var func = renderer[key];
    func = func.bind(renderer); //必须绑定, 因为可能使用了 renderer 实例自身的属性
    renderer[key] = generator[key](opts, func);
  }

  opts.renderer = renderer;

	let html = marked(markdown, opts);
  html += trailingBlockHeading(opts._markedBlockHeadingArr);

	return html
}
