// Public site settings from env. Tolerates values pasted as `NAME=value` or quoted,
// which the Vercel dashboard stores verbatim and would otherwise silently disable indexing.
const clean=(v?:string)=>v?.trim().replace(/^[A-Z0-9_]+=/,'').replace(/^(["'])(.*)\1$/,'$2').trim()||undefined;
const env=import.meta.env;
export const siteUrl=clean(env.PUBLIC_SITE_URL)?.replace(/\/$/,'');
export const indexingEnabled=Boolean(siteUrl&&clean(env.PUBLIC_ALLOW_INDEXING)==='true'&&clean(env.PUBLIC_CONTENT_APPROVED)==='true');
export const gaId=clean(env.PUBLIC_GA_ID);
export const gscToken=clean(env.PUBLIC_GSC_VERIFICATION);
