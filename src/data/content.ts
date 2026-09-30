import source from './source.json';
import type {Lang} from './site';
export const text=(slide:number,index:number):string=>source[slide-1].texts[index];
export const slice=(slide:number,start:number,end:number)=>source[slide-1].texts.slice(start,end);
export const about=(l:Lang)=>text(2,l==='ar'?1:3);
export const vision=(l:Lang)=>text(3,l==='ar'?1:2);
export const whyDetails = [
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
export const why=(l:Lang)=>l==='ar'?[...slice(5,0,6),...slice(5,8,12)]:slice(5,12,22);
export const stats=(l:Lang)=>[4,7,10,13].map(i=>({value:text(2,i),label:text(2,i+(l==='ar'?1:2))}));
export const systems=(l:Lang)=>{const a=slice(9,l==='ar'?1:9,l==='ar'?8:16);return [a[1],a[0],...a.slice(2)];};
export const contracts={title:text(8,1),description:text(8,2),items:[text(8,0),...slice(8,3,6)]};
export const services=(l:Lang)=>[
 {slug:'installation',image:'installation',title:text(7,l==='ar'?24:47),description:text(7,l==='ar'?16:40),items:l==='ar'?slice(7,17,24):[...slice(7,17,24),...slice(7,41,47)]},
 {slug:'maintenance',image:'maintenance',title:text(7,l==='ar'?13:39),description:text(7,l==='ar'?6:32),items:slice(7,l==='ar'?7:33,l==='ar'?13:39)},
 {slug:'cleaning',image:'cleaning',title:text(7,l==='ar'?25:48),description:text(7,l==='ar'?0:26),items:slice(7,l==='ar'?1:27,l==='ar'?6:32)}
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
export const clients=[
 [12,'Global'],[13,'شعار عميل من الشريحة 6 رقم 13'],[14,'شعار عميل من الشريحة 6 رقم 14'],[15,'شعار عميل من الشريحة 6 رقم 15'],[16,'شعار عميل من الشريحة 6 رقم 16'],[17,'Oman Development Bank'],[18,'National Bank of Oman'],[19,'ASYAD'],[20,'Oman Post'],[21,'Royal Oman Police'],[22,'مطاحن وتمور الشرع'],[23,'وزارة الداخلية'],[24,'Sandan'],[25,'دكان فريم'],[26,'Titanium'],[27,'Al Injaz International School'],[28,'Al Falaj Refreshments Company'],[29,'Tibiaan'],[30,'Tayra Real Estate'],[31,'Ministry of Defence'],[32,'Redan'],[33,'BYOND'],[34,'University of Nizwa'],[35,'وزارة التنمية الاجتماعية'],
 // Added 2026-09-30 from New pages/قائمة العملاء.docx (logos converted to white mono)
 [36,'بان هوم'],[37,'شركة عمق'],[38,'العنقاء للفضاء والتكنولوجيا'],[39,'محسن حيدر درويش'],[40,'بنك صحار الدولي'],[41,'بيت الأصول للمفروشات'],[42,'فندق المطار'],[43,'مواصلات'],[44,'الوطنية الخليجية للمنتجات الورقية'],[45,'جهاز الرقابة المالية والإدارية للدولة'],[46,'مغسلة الريان']
] as const;
export const photoAlt=(name:string,l:Lang)=>({team:['فريق TNT أمام مقر الشركة وسياراتها','TNT team outside the company premises with its vehicles'],headquarters:['مقر TNT وسيارات الشركة','TNT company premises and vehicles'],installation:['فني TNT يعمل على وحدة سبليت','TNT technician working on a split AC unit'],maintenance:['فحص التكييف باستخدام عدادات الضغط','Air conditioning inspection using pressure gauges'],cleaning:['تنظيف وحدة سبليت مع غطاء حماية','Cleaning a split AC unit with a protective cover'],tools:['أدوات وتجهيزات صيانة التكييف','Air conditioning maintenance tools'],workshop:['فريق TNT يعمل على وحدة تكييف','TNT team working on an air conditioning unit'],'product-1':['أطقم خراطيم وعدادات ضغط وأدوات توسيع نحاس معروضة على اللوحة','AC pressure-gauge and hose kits with copper flaring tools on a display panel'],'product-2':['لوحة عرض لمنتجات التكييف: أطقم غاز وأجهزة قياس وموازين حرارة','Display panel of AC products: gas kits, gauges and thermometers'],'product-3':['أجهزة تحكم عن بُعد لمكيفات الهواء معروضة على اللوحة','Air-conditioner remote controls displayed on the panel'],'product-4':['رف يعرض مجمّعات فحص الضغط وعبوات منظّف ملفات التكييف','Shelf with testing manifolds and AC coil-cleaner containers'],'product-5':['رف يعرض أسطوانات غاز وعلب قطع غيار التكييف','Shelf with gas cylinders and boxes of AC spare parts'],'product-6':['صندوق يحوي مكثّفات كهربائية لمكيفات الهواء','Bin of electrical capacitors for air conditioners'],'product-7':['درج يعرض وصلات ولحامات نحاسية لأنابيب التكييف','Drawer of copper fittings and lugs for AC piping'],'product-8':['فني TNT يجهّز أنبوب نحاس باستخدام أداة التوسيع','TNT technician preparing a copper pipe with a flaring tool']}[name]?.[l==='ar'?0:1]||'TNT');
