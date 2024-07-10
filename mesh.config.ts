import { defineConfig, loadGraphQLHTTPSubgraph } from '@graphql-mesh/compose-cli'

export const composeConfig = defineConfig({
  output: 'schema.graphql',
  subgraphs: [
    {
      sourceHandler: loadGraphQLHTTPSubgraph('testSchemaHeaders', {
        endpoint: 'https://webhook.cool',
        schemaHeaders: {
          'Content-Type': 'application/json',
          'example-header': 'test',
        },
      })
    }
  ]
})
