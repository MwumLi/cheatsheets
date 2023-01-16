export default function (context) {
  if (process.server) {
    const { markedPost: marked } = require('~~/marked')
    context.marked = marked
  }
}
