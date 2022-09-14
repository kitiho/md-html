import { readFile } from 'fs/promises'
import path from 'node:path'
import { assert, expect, it, test } from 'vitest'
import { markdownToHtml } from '../src/index'

it('basic', async () => {
  const md = await readFile(path.resolve(__dirname, 'test.md'), {
    encoding: 'utf-8',
  })
  const output = markdownToHtml(md)
  expect(output).toMatchInlineSnapshot(`
    "<p>hello <br> world</p>
    <pre><code class=\\"language-ts\\"><span class=\\"hljs-keyword\\">const</span> a = <span class=\\"hljs-number\\">123</span>
    </code></pre>
    "
  `)
})

