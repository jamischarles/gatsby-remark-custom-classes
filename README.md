# Gatsby Remark Custom Classes

This plugins allows you to add some custom classes to remark generated HTML.

> NOTE: This plugin is highly experimental and contain bugs and may destroy your
> overall layout. Feel free to contribute to enhance its functionality.

> NOTE: `footnoteDefinition` is not working ATM.

## Usage

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      plugins: [
        {
          resolve: `remark-custom-classes`,
          options: {
            root: {
              image: 'container',
              heading: 'container container--small',
              blockquote: 'container container--small',
              thematicBreak: 'container container--small',
              list: 'container container--small',
              table: 'container container--small',
              footnoteDefinition: 'container container--small',
              paragraph: 'container container--small',
            },
            tag: {
              h2: 'color--red',
            },
            remark: {
              images: 'container',
              prismjs: 'container container--small',
            },
          },
        },
      ],
    },
  ],
}
```

## Options

### Types

> Only root children nodes (wrapping)

These are build in definitions inside remark how they name tag group, e.g. `h1`,
`h2` and so on are named `headings`. I haven't found a list that contain all
these but here are JavaScript files which has similar naming and where I have
found the above:

[remarkjs/../remark-parse/lib/tokenize](https://github.com/remarkjs/remark/tree/master/packages/remark-parse/lib/tokenize)

### Tags

> All notes via
> [unist-util-visit](https://github.com/syntax-tree/unist-util-visit) (directly
> applied)

I have written a little helper that contain some HTML tags like `ul` which will
be translated into Remark types. Feel free to try them out to be more specific
with your classes. For example if you want to target only `h1` and not all
headings.

[./index.js](./index.js#L3-L20)

### Remark

> All notes which meet certain criteria (wrapping)

Those are not stable because they rely on external plugins. and how they add
HTML to the AST. So make sure these still work after updating any of those
plugins.

- images:
  [gatsby-remark-**images**](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images)
- prismjs:
  [gatsby-remark-**prismjs**](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs)
