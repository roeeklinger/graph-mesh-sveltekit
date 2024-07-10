import { createServeRuntime } from '@graphql-mesh/serve-runtime'
import type { RequestEvent } from './$types';

const serve = createServeRuntime({
  supergraph: 'schema.graphql', // working directory is root of the project
  graphqlEndpoint: '/api', // matches the server route in vite
  fetchAPI: {
    fetch,
    Request,
    Response,
    Headers,
    FormData,
    URL,
    URLSearchParams
  }
});

export { serve as GET, serve as POST }