const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges"><rect x="1" y="1" width="14" height="14" fill="#2a3c5c"/><rect x="3" y="3" width="10" height="10" fill="#fffdf7"/><rect x="3" y="3" width="10" height="3" fill="#428675"/><rect x="5" y="8" width="6" height="1" fill="#2a3c5c"/><rect x="5" y="10" width="3" height="1" fill="#9aa6ae"/><rect x="10" y="10" width="2" height="2" fill="#ed5126"/></svg>`;

export function GET() {
  return new Response(favicon, {
    headers: {
      "Cache-Control": "public, max-age=604800, immutable",
      "Content-Type": "image/svg+xml",
    },
  });
}
