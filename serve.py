#!/usr/bin/env python3
import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.css': 'text/css',
})

print(f"Starting server at http://0.0.0.0:{PORT}")
httpd = socketserver.TCPServer(("", PORT), Handler)
httpd.serve_forever()