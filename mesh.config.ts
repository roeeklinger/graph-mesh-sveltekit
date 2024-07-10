import { defineConfig, loadGraphQLHTTPSubgraph } from '@graphql-mesh/compose-cli'

export const composeConfig = defineConfig({
  output: 'schema.graphql',
  subgraphs: [
    {
      sourceHandler: loadGraphQLHTTPSubgraph('canopyapi', {
        endpoint: 'https://www.universe.com/graphql'
      })
    },
    {
      sourceHandler: loadGraphQLHTTPSubgraph('tcgdex', {
        endpoint: 'https://api.tcgdex.net/v2/graphql'
      })
    }
  ]
})
