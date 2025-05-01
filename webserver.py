import http.server
import socketserver
import webbrowser
from pathlib import Path

PORT = 8000

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

Handler = MyHttpRequestHandler

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Server started at port {PORT}")
    print(f"Open http://localhost:{PORT} in your browser")
    httpd.serve_forever()