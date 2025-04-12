export default {
  async fetch(request, env, ctx) {
    // Make the actual request to the API or resource
    const response = await fetch(request);

    // Create a new Response object with the original response body and headers
    const newResponse = new Response(response.body, response);

    // Add the necessary CORS headers
    newResponse.headers.set('Access-Control-Allow-Origin', 'https://gui.lotka24.pl'); // Allow requests from your front-end domain
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow the methods you need
    newResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow necessary headers

    // Return the new response with the CORS headers added
    return newResponse;
  },
};
