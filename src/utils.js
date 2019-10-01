const { typesAliasses } = require('./aliases')

function getTypeByAlias(alias) {
  return Object.keys(typesAliasses).find(
    type => typesAliasses[type].indexOf(alias) > -1
  )
}

module.exports = { getTypeByAlias }
