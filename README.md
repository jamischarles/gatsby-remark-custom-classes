# Gatsby Remark Custom Classes

This plugins allows you to add some custom classes to remark generated HTML.

> NOTE: This plugin is experimental and contain bugs and may destroy your
> overall layout. Feel free to contribute to enhance its functionality.

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
            types: {
              image: 'container',
              heading: 'container container--small',
              blockquote: 'container container--small',
              list: 'container container--small',
              table: 'container container--small',
              footnoteDefinition: 'container container--small',
              paragraph: 'container container--small',
            },
            tags: {
              hr: 'container',
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

These are build in definitions inside remark how they name tag group, e.g. `h1`,
`h2` and so on are named `headings`. I haven't found a list that contain all
these but here are JavaScript files which has similar naming and where I have
found the above:

https://github.com/remarkjs/remark/tree/master/packages/remark-parse/lib/tokenize

### Tags

I have written a little helper that contain some HTML tags like `ul` which will
be translated into Remark types. Feel free to try them out to be more specific
with your classes. For example if you want to target only `h1` and not all
headings.

### Remark

Those are highly experimental because they rely on external plugins and how they
build the AST. Currently this plugins supports two. It just searches for a
`html` type and tries to match a expression in its HTML.

- images:
  [gatsby-remark-**images**](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images)
- prismjs:
  [gatsby-remark-**prismjs**](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs)
