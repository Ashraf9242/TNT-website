import {siteUrl,indexingEnabled} from '../lib/env';
export const GET=()=>new Response(indexingEnabled?`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${siteUrl}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain; charset=utf-8'}});
