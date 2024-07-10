import { createServeRuntime } from '@graphql-mesh/serve-runtime'
import type { RequestEvent } from './$types';

const serve = createServeRuntime({
  supergraph: 'schema.graphql', // working directory is root of the project
  graphqlEndpoint: '/api', // matches the server route in vite
});

async function handle(req: RequestEvent) {
  const res = await serve(req)
  // convert mesh response to native response
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers: new Headers(res.headers) })
}

export { handle as GET, handle as POST }
