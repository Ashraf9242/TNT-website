import source from './source.json';
import type {Lang} from './site';
// All-caps English headings from the deck ("WHO WE ARE?", "OUR VISION") read as shouting
// on the web, so they are shown in sentence case.
const tidy=(s:string)=>/^[A-Z][A-Z\s?]+$/.test(s)?s.charAt(0)+s.slice(1).toLowerCase().replace(/\?$/,''):s;
export const text=(slide:number,index:number):string=>tidy(source[slide-1].texts[index]);
export const slice=(slide:number,start:number,end:number)=>source[slide-1].texts.slice(start,end);
export const about=(l:Lang)=>text(2,l==='ar'?1:3);
export const vision=(l:Lang)=>text(3,l==='ar'?1:2);
const whyDetailsAr = [
 'قد لا تجد اننا الارخص ولكن تأكد اننا لا نقبل بفرض اي تكاليف غير حقيقة',
 'يستطيع اي اشخص غسيل فلتر المكيف ولكن ليس كل شخص يستطيع حل الاعطال الصعبة مثل فريقنا',
 'بداية التجربة الحقيقية بعد التجربة',
 'يعمل فريق كامل خلف الشاشة فقط لضمان الرد على العملاء وضمان المتابعة',
 'تاريخ يضمن اننا لسنا هنا لفتره مؤقته',
 'نضمن لك ان تستلم مكيفك بحالة ممتازه',
 'يتم التركيز على اصغر اداه او معدة بحيث تكون مخصصة لهذا المجال لضمان تحقيق افضل استفادة',
 'نحن لا نقبل بتقديم خدمات اقل من المتوقع',
 'الاستمرارية لا تأتي بدون المشاريع الناجحة',
 'نحن لا نكتفي بصيانة مكيفك بل ايضا نسعى لتقديم حلول عملية واستشارات حسب حاجتك'
];
const whyDetailsEn = [
 'We may not be the cheapest, but we never charge for anything that is not real',
 'Anyone can wash an AC filter, but not everyone can solve hard faults like our team',
 'The real experience starts after the service',
 'A whole team works behind the screen just to make sure every client gets a reply and a follow-up',
 'A track record that shows we are not here for a short time',
 'We guarantee you get your AC back in excellent condition',
 'Every tool and piece of equipment is chosen for this field to get the best results',
 'We do not accept delivering less than expected',
 'Continuity does not come without successful projects',
 'We do not just service your AC; we also offer practical solutions and advice for your needs'
];
export const whyDetails=(l:Lang)=>l==='ar'?whyDetailsAr:whyDetailsEn;
// English titles reordered to match the Arabic order (and the details above).
// English titles translate the Arabic titles in the same order (the deck's English
// list was shorter and ordered differently).
const whyEn=[
 'Credibility and honesty',
 'A qualified, trained technical team',
 'After-sales service',
 'Fast, effective response',
 'Hands-on experience since 2018',
 'A guarantee on completed work',
 'Professional equipment and tools',
 'Projects delivered to the highest quality standards',
 'A strong record of successful projects and annual contracts',
 'Trusted by thousands of clients across the Sultanate'
];
export const why=(l:Lang)=>l==='ar'?[...slice(5,0,6),...slice(5,8,12)]:whyEn;
const statLabelsEn=['Established in Muscat','Omani-managed company','Client satisfaction rate','Signed contracts'];
export const stats=(l:Lang)=>[4,7,10,13].map((i,n)=>({value:text(2,i),label:l==='ar'?text(2,i+1):statLabelsEn[n]}));
export const systems=(l:Lang)=>{const a=slice(9,l==='ar'?1:9,l==='ar'?8:16);return [a[1],a[0],...a.slice(2)];};
export const contracts={title:text(8,1),description:text(8,2),items:[text(8,0),...slice(8,3,6)]};
export const contractsDescriptionEn='Complete solutions for organisations, companies and residential buildings.';
// English service copy translates the Arabic lines one-for-one.
const servicesEn={
 installation:{title:'Installation services',description:'Installation of all types of AC systems to approved technical standards.',items:['Split units','Cassette units','Floor-standing units','Ducted split units','VRF systems','Chillers','Package units']},
 maintenance:{title:'Maintenance services',description:'We provide preventive and corrective maintenance services for all types of AC systems.',items:['Cooling fault repairs','Water leak repairs','Gas leak repairs','Electronic board (PCB) repairs','Fan and motor repairs','Repair and replacement of damaged parts']},
 cleaning:{title:'Cleaning services',description:'Professional cleaning that ensures efficient operation and clean air.',items:['Split AC cleaning','Cassette AC cleaning','Floor-standing AC cleaning','Ducted unit cleaning','Commercial and industrial system cleaning']}
};
export const services=(l:Lang)=>l==='en'?(['installation','maintenance','cleaning'] as const).map(slug=>({slug,image:slug,...servicesEn[slug]})):[
 {slug:'installation',image:'installation',title:text(7,24),description:text(7,16),items:slice(7,17,24)},
 {slug:'maintenance',image:'maintenance',title:text(7,13),description:text(7,6),items:slice(7,7,13)},
 {slug:'cleaning',image:'cleaning',title:text(7,25),description:text(7,0),items:slice(7,1,6)}
];
// Service pricing (client-supplied, 2026-09-30). Prices in OMR; `from` marks a
// starting price. Repair items still come from source.json slide 10 (entries 4–9,
// the old cleaning/install/copper rows, are superseded by the lists below).
type Bi=[ar:string,en:string];
export type Tier={tier:'regular'|'pro'|'from';price:string};
export const cleaningPrices:{unit:Bi;tiers:Tier[];note?:Bi}[]=[
 {unit:['مكيف السبليت','Split AC'],tiers:[{tier:'pro',price:'8'}]},
 {unit:['مكيف الكاسيت','Cassette AC'],tiers:[{tier:'pro',price:'15'}]},
 {unit:['مكيف الدكت','Ducted AC'],tiers:[{tier:'regular',price:'8'},{tier:'pro',price:'40'}]},
 {unit:['مكيف الستاند','Floor-standing AC'],tiers:[{tier:'regular',price:'8'},{tier:'pro',price:'25'}]},
 {unit:['مكيف الباكيج','Package unit'],tiers:[{tier:'from',price:'10'}],note:['يعتمد على العدد والنوع','Depends on quantity and type']},
 {unit:['مكيف VRF','VRF system'],tiers:[{tier:'from',price:'8'}],note:['يعتمد على العدد والنوع','Depends on quantity and type']}
];
export const cleaningScope:{regular:Bi[];pro:Bi[]}={
 regular:[['تنظيف الفلاتر','Filters'],['تنظيف جسم المكيف','AC casing'],['تنظيف مجرى التصريف','Drain line'],['غسيل الوحدات الخارجية بالماء','Outdoor units washed with water']],
 pro:[['تنظيف الوحدة الداخلية بالمواد الكيميائية والماء المضغوط','Indoor unit cleaned with chemicals and pressurised water'],['التجفيف والتعقيم','Drying and sanitising'],['جسم المكيف والفلاتر','AC casing and filters'],['المروحة والمبخر','Fan and evaporator'],['حوض المكيف ومجرى التصريف والمجاري الدقيقة','Drain pan, drain line and fine channels'],['غسيل الوحدات الخارجية بالماء','Outdoor units washed with water']]
};
export const repairPrices=(l:Lang)=>Array.from({length:7},(_,i)=>{const [en,ar]=text(10,11+i*2).split(' — ');return {service:l==='ar'?ar:en,price:text(10,10+i*2).replace(/\s*OMR$/,'')};});
// Product/showroom gallery shown on the Services page. Photos are responsive WebP
// (product-N-480/960/1600.webp) sourced from the "products and services" shoot.
export const products=['product-1','product-2','product-3','product-4','product-5','product-6','product-7','product-8'] as const;
// NOTE (a11y/1.1.1): client ids 13–16 still carry PLACEHOLDER alt text
// ("شعار عميل من الشريحة 6 رقم N"). Replace with the real company names before
// publishing — do not invent them. Screen readers currently read the placeholder.
// Third item = English name, used as alt text on English pages.
export const clients:readonly (readonly [number,string,string?])[]=[
 [12,'Global'],[13,'شعار عميل من الشريحة 6 رقم 13','Client logo 13'],[14,'شعار عميل من الشريحة 6 رقم 14','Client logo 14'],[15,'شعار عميل من الشريحة 6 رقم 15','Client logo 15'],[16,'شعار عميل من الشريحة 6 رقم 16','Client logo 16'],[17,'Oman Development Bank'],[18,'National Bank of Oman'],[19,'ASYAD'],[20,'Oman Post'],[21,'Royal Oman Police'],[22,'مطاحن وتمور الشرع','Al Sharaa Mills & Dates'],[23,'وزارة الداخلية','Ministry of Interior'],[24,'Sandan'],[25,'دكان فريم','Dukan Frame'],[26,'Titanium'],[27,'Al Injaz International School'],[28,'Al Falaj Refreshments Company'],[29,'Tibiaan'],[30,'Tayra Real Estate'],[31,'Ministry of Defence'],[32,'Redan'],[33,'BYOND'],[34,'University of Nizwa'],[35,'وزارة التنمية الاجتماعية','Ministry of Social Development'],
 // Added 2026-09-30 from New pages/قائمة العملاء.docx (logos converted to white mono)
 [36,'بان هوم','Pan Home'],[37,'شركة عمق','Omq Company'],[38,'العنقاء للفضاء والتكنولوجيا','Al Anqa Space & Technology'],[39,'محسن حيدر درويش','Mohsin Haider Darwish'],[40,'بنك صحار الدولي','Sohar International Bank'],[41,'بيت الأصول للمفروشات','Al Osool'],[42,'فندق المطار','Airport Hotel'],[43,'مواصلات','Mwasalat'],[44,'الوطنية الخليجية للمنتجات الورقية','National Gulf Paper Products'],[45,'جهاز الرقابة المالية والإدارية للدولة','State Audit Institution'],[46,'مغسلة الريان','Al Rayan Laundry'],
 // id 0 = no logo available, rendered as plain text
 [0,'فندق المطار\nAirport Hotel']
];
export const photoAlt=(name:string,l:Lang)=>({team:['فريق TNT أمام مقر الشركة وسياراتها','TNT team outside the company premises with its vehicles'],headquarters:['مقر TNT وسيارات الشركة','TNT company premises and vehicles'],installation:['فني TNT يعمل على وحدة سبليت','TNT technician working on a split AC unit'],maintenance:['فحص التكييف باستخدام عدادات الضغط','Air conditioning inspection using pressure gauges'],cleaning:['تنظيف وحدة سبليت مع غطاء حماية','Cleaning a split AC unit with a protective cover'],tools:['أدوات وتجهيزات صيانة التكييف','Air conditioning maintenance tools'],workshop:['فريق TNT يعمل على وحدة تكييف','TNT team working on an air conditioning unit'],'product-1':['أطقم خراطيم وعدادات ضغط وأدوات توسيع نحاس معروضة على اللوحة','AC pressure-gauge and hose kits with copper flaring tools on a display panel'],'product-2':['لوحة عرض لمنتجات التكييف: أطقم غاز وأجهزة قياس وموازين حرارة','Display panel of AC products: gas kits, gauges and thermometers'],'product-3':['أجهزة تحكم عن بُعد لمكيفات الهواء معروضة على اللوحة','Air-conditioner remote controls displayed on the panel'],'product-4':['رف يعرض مجمّعات فحص الضغط وعبوات منظّف ملفات التكييف','Shelf with testing manifolds and AC coil-cleaner containers'],'product-5':['رف يعرض أسطوانات غاز وعلب قطع غيار التكييف','Shelf with gas cylinders and boxes of AC spare parts'],'product-6':['صندوق يحوي مكثّفات كهربائية لمكيفات الهواء','Bin of electrical capacitors for air conditioners'],'product-7':['درج يعرض وصلات ولحامات نحاسية لأنابيب التكييف','Drawer of copper fittings and lugs for AC piping'],'product-8':['فني TNT يجهّز أنبوب نحاس باستخدام أداة التوسيع','TNT technician preparing a copper pipe with a flaring tool']}[name]?.[l==='ar'?0:1]||'TNT');
