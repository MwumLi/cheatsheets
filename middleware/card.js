const { markedCard: marked } = require('~~/marked')

export default function (context) {
  if (process.server) {
    context.marked = marked
  }
}
