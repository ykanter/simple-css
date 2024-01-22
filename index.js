const server = Bun.serve(
    {
        port : 3000,
        fetch(req) {
            const url = new URL(req.url)
            if(url.pathname.endsWith("/") || url.pathname.endsWith("/index.html")){
                return new Response(Bun.file("index.html"))
            }
            if(url.pathname.endsWith("/about") || url.pathname.endsWith("/about.html")){
                return new Response(Bun.file("about.html"))
            }
            if(url.pathname.endsWith("/blog") || url.pathname.endsWith("/blog.html")){
                return new Response(Bun.file("blog.html"))
            }
            if (url.pathname.endsWith(".css")) {
                const cssFile = Bun.file("." + url.pathname); // Adjust the path as necessary
                return new Response(cssFile, {
                    headers: { "Content-Type": "text/css" }
                });
            }

            return new Response("Get in line")
        }
    }
)

console.log(`Server started on ${server.hostname}:${server.port}`)