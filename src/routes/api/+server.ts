import { createServeRuntime } from '@graphql-mesh/serve-runtime'

const serve = createServeRuntime({
  supergraph: 'schema.graphql', // working directory is root of the project
  graphqlEndpoint: '/api', // matches the server route in vite
  fetchAPI: { Response } // use the native `Response`
});

export { serve as GET, serve as POST }
