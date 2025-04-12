addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const response = await fetch(request)
    const newResponse = new Response(response.body, response)

    // Set the CORS headers
    newResponse.headers.set('Access-Control-Allow-Origin', 'https://gui.lotka24.pl') // Allow requests from this specific domain
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS') // Adjust as needed
    newResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization') // Adjust as needed

    return newResponse
}
