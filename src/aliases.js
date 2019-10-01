const typesAliasses = {
  heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  paragraph: ['p'],
  image: ['img'],
  link: ['a'],
  blockquote: ['blockquote'],
  break: ['br'],
  code: ['pre'],
  inlineCode: ['code'],
  thematicBreak: ['hr'],
  delete: ['del'],
  emphasis: ['em'],
  list: ['ul', 'ol'],
  strong: ['strong', 'b'],
  table: ['table'],
  tableCell: ['td', 'th'],
  tableRow: ['tr'],
}

const remarkPluginOptions = {
  images: {
    type: 'html',
    value: 'gatsby-resp-image-figure',
  },
  prismjs: {
    type: 'html',
    value: 'gatsby-highlight',
  },
}

module.expors = { typesAliasses, remarkPluginOptions }
