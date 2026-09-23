import type {APIRoute} from 'astro';
import nodemailer from 'nodemailer';
import {validateQuote,createLimiter,limitedJson} from '../../lib/quote';
const limit=createLimiter();
const reply=(status:number,data:object)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',...(status===429?{'Retry-After':'600'}:{})}});
export const POST:APIRoute=async({request,clientAddress,url})=>{
 const origin=request.headers.get('origin');
 const configured=process.env.PUBLIC_SITE_URL||import.meta.env.PUBLIC_SITE_URL;
 let expected=url.origin;try{if(configured)expected=new URL(configured).origin}catch{return reply(503,{ok:false})}
 if(!origin||origin!==expected)return reply(403,{ok:false});
 if(!request.headers.get('content-type')?.startsWith('application/json'))return reply(415,{ok:false});
 const key=process.env.TRUST_PROXY==='true'?(request.headers.get('x-forwarded-for')?.split(',')[0].trim()||clientAddress):clientAddress;
 if(!limit(key))return reply(429,{ok:false});
 let body:unknown;try{body=await limitedJson(request)}catch{return reply(400,{ok:false})}
 const validated=validateQuote(body);if(!validated.data)return reply(422,{ok:false,fields:validated.fields});const data=validated.data;
 if(data.website)return reply(422,{ok:false});
 const env=process.env;
 if(!env.SMTP_HOST||!env.SMTP_USER||!env.SMTP_PASS||!env.SMTP_FROM)return reply(503,{ok:false,code:'NOT_CONFIGURED'});
 const transporter=nodemailer.createTransport({host:env.SMTP_HOST,port:Number(env.SMTP_PORT||465),secure:env.SMTP_SECURE!=='false',requireTLS:true,auth:{user:env.SMTP_USER,pass:env.SMTP_PASS},connectionTimeout:7000,greetingTimeout:7000,socketTimeout:12000,disableFileAccess:true,disableUrlAccess:true});
 try{const result=await transporter.sendMail({from:env.SMTP_FROM,to:env.QUOTE_TO||'tntacservices@gmail.com',replyTo:data.email||undefined,subject:`TNT website enquiry: ${data.service}`,text:[`Name: ${data.name}`,`Company: ${data.company}`,`Phone: ${data.phone}`,`Email: ${data.email}`,`Location: ${data.location}`,`Service: ${data.service}`,`System: ${data.system}`,`Language: ${data.lang}`,'',data.message].join('\n')});if(!result.accepted?.length)return reply(502,{ok:false});return reply(200,{ok:true})}catch{return reply(502,{ok:false})}finally{transporter.close()}
};
export const ALL:APIRoute=()=>new Response(JSON.stringify({ok:false}),{status:405,headers:{Allow:'POST','Content-Type':'application/json'}});
