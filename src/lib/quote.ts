export const serviceValues=['installation','maintenance','cleaning','contracts','other'];
export const systemValues=['unsure','package','vrf','duct','cassette','standing','split','window','chiller'];
export interface Quote {name:string;company:string;phone:string;email:string;location:string;service:string;system:string;message:string;lang:string;website:string}
export const normalizeDigits=(s:string)=>s.replace(/[٠-٩]/g,c=>String(c.charCodeAt(0)-1632)).replace(/[۰-۹]/g,c=>String(c.charCodeAt(0)-1776));
export function validateQuote(input:unknown):{data?:Quote;fields:string[]}{
 if(!input||typeof input!=='object'||Array.isArray(input))return {fields:['name']};
 const raw=input as Record<string,unknown>;const data={} as Quote;const fields:string[]=[];
 const limits:Record<keyof Quote,number>={name:100,company:150,phone:25,email:254,location:250,service:30,system:30,message:3000,lang:2,website:200};
 for(const key of Object.keys(limits) as (keyof Quote)[]){if(raw[key]!==undefined&&typeof raw[key]!=='string'){fields.push(key);continue}data[key]=String(raw[key]??'').trim();if(data[key].length>limits[key]||/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(data[key]))fields.push(key)}
 if(fields.length)return {fields};
 data.phone=normalizeDigits(data.phone);
 if(data.name.length<2||/[\r\n]/.test(data.name))fields.push('name');
 if(!/^[+0-9() .-]{7,25}$/.test(data.phone)||data.phone.replace(/\D/g,'').length<7||data.phone.replace(/\D/g,'').length>15)fields.push('phone');
 if(data.email&&!/^[^\s@<>(),;:]+@[^\s@<>(),;:]+\.[^\s@<>(),;:]+$/.test(data.email))fields.push('email');
 if(data.location.length<2)fields.push('location');
 if(!serviceValues.includes(data.service))fields.push('service');
 if(!systemValues.includes(data.system))fields.push('system');
 if(data.message.length<10)fields.push('message');
 if(!['ar','en'].includes(data.lang))fields.push('lang');
 return fields.length?{fields}:{data,fields:[]};
}
export function createLimiter(limit=5,windowMs=600000){
 const entries=new Map<string,{count:number;until:number}>();
 return (key:string,now=Date.now())=>{for(const [k,v] of entries)if(v.until<=now)entries.delete(k);const item=entries.get(key);if(item){if(item.count>=limit)return false;item.count++;return true}if(entries.size>=10000)return false;entries.set(key,{count:1,until:now+windowMs});return true};
}
export async function limitedJson(request:Request,maxBytes=16384):Promise<unknown>{
 if(Number(request.headers.get('content-length'))>maxBytes)throw new Error('large');
 const reader=request.body?.getReader();if(!reader)throw new Error('empty');let size=0;const chunks:Uint8Array[]=[];
 while(true){const {value,done}=await reader.read();if(done)break;size+=value.byteLength;if(size>maxBytes){await reader.cancel();throw new Error('large')}chunks.push(value)}
 const body=new Uint8Array(size);let offset=0;for(const chunk of chunks){body.set(chunk,offset);offset+=chunk.length}return JSON.parse(new TextDecoder().decode(body));
}
