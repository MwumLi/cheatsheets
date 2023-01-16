export default function (context) {
  if (process.server) {
    const { markedCard: marked } = require('~/marked')
    context.marked = marked
  }
}
