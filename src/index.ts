import markdownIt from 'markdown-it'
import mdBr from 'markdown-it-br'
import hljs from 'highlight.js'
const md = markdownIt({
  breaks: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      }
      catch (__) {}
    }

    return '' // use external default escaping
  },
})

// protect <br>
md.use(mdBr)

const markdownToHtml = (text: string): string => {
  if (!(text && text.length))
    return ''
  return md.render(text)
}

export { markdownToHtml }
