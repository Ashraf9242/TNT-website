// Search metadata: per-page <title> (≤60 chars) + meta description (≤155 chars) and JSON-LD.
// Keyword targets (Oman-local; the business serves Muscat Governorate + Barka, see faq.ts):
//  ar: صيانة/تنظيف/تركيب مكيفات مسقط، شركة تكييف في مسقط، عقود صيانة مكيفات، أسعار تنظيف المكيفات
//  en: AC repair/maintenance/cleaning/installation Muscat, AC maintenance contract Oman
// "عمان" alone also matches Amman (Jordan), so copy says "مسقط" / "سلطنة عُمان" explicitly.
// Titles/descriptions are new copy written for search, PENDING CLIENT APPROVAL. No em dashes (client rule).
import {contact,href,labels,type Lang,type Slug} from './site';
import {faqGroups} from './faq';
import {guides,guideHref} from './guides';

export const pageSeo: Record<Lang, Record<Slug, {title:string; description:string}>> = {
 ar: {
  '': {title:'صيانة وتنظيف وتركيب المكيفات في مسقط | TNT', description:'تي ان تي للتكييف: صيانة وتنظيف وتركيب جميع أنواع المكيفات في مسقط وبركاء منذ 2018. فرق فنية متنقلة وأسعار واضحة. اطلب عرض سعر عبر واتساب.'},
  about: {title:'من نحن | تي ان تي للتكييف، شركة عُمانية في مسقط', description:'شركة تكييف عُمانية تأسست في مسقط عام 2018، بخبرة في صيانة وتشغيل أنظمة التكييف للمنازل والمؤسسات، مع استجابة سريعة وخدمة ما بعد البيع.'},
  services: {title:'خدمات التكييف في مسقط: تركيب وصيانة وتنظيف | TNT', description:'خدمات تكييف متكاملة في مسقط وبركاء: تركيب المكيفات، الصيانة الوقائية والإصلاح، والتنظيف العميق لجميع الأنواع. تعرّف على خدماتنا واطلب عرض سعر.'},
  installation: {title:'تركيب مكيفات في مسقط: سبليت ودكت وكاسيت | TNT', description:'تركيب جميع أنواع المكيفات في مسقط وبركاء وفق المعايير الفنية: سبليت، دكت، كاسيت، ستاند وVRF، مع تمديد أنابيب النحاس. اطلب عرض سعر الآن.'},
  maintenance: {title:'صيانة مكيفات في مسقط وإصلاح الأعطال | TNT', description:'صيانة وقائية وتصحيحية لجميع أنواع المكيفات في مسقط: ضعف التبريد، تقطير الماء وغيرها. نفحص في الموقع ونبلغك بالتكلفة قبل البدء.'},
  cleaning: {title:'تنظيف مكيفات في مسقط: تنظيف عميق للسبليت | TNT', description:'تنظيف احترافي للمكيفات في مسقط وبركاء يحسّن التبريد ويقلل استهلاك الكهرباء والتقطير. أسعار أقل كلما زاد عدد المكيفات. احجز عبر واتساب.'},
  contracts: {title:'عقود صيانة مكيفات سنوية للمؤسسات في مسقط | TNT', description:'عقود صيانة تكييف سنوية للشركات والمباني في مسقط: صيانة وقائية، متابعة البلاغات، تقارير دورية وقطع استهلاكية. اطلب تقييمًا مجانيًا لمبناك.'},
  systems: {title:'أنواع المكيفات: سبليت، دكت، VRF وتشيلر | TNT مسقط', description:'نعمل على جميع أنظمة التكييف في سلطنة عُمان: سبليت، كاسيت، دكت، ستاند، شباك، باكيج، VRF وتشيلر. تركيب وصيانة وتنظيف وإصلاح في مسقط.'},
  clients: {title:'عملاؤنا: جهات حكومية وبنوك وشركات في عُمان | TNT', description:'جهات حكومية وبنوك وشركات كبرى في سلطنة عُمان تثق بتي ان تي للتكييف في صيانة وتشغيل أنظمة التكييف. تعرّف على بعض عملائنا.'},
  pricing: {title:'أسعار تنظيف وصيانة المكيفات في مسقط | TNT', description:'أسعار واضحة بالريال العُماني لتنظيف المكيفات حسب النوع، وتركيب المكيفات وأنابيب النحاس، وإصلاح الأعطال الشائعة في مسقط. بدون تكاليف خفية.'},
  faq: {title:'أسئلة شائعة عن صيانة وتنظيف المكيفات | TNT مسقط', description:'إجابات عن أكثر الأسئلة حول المكيفات: أفضل مكيف، تقطير المكيف، تعبئة الغاز، الأسعار، الحجز ونطاق الخدمة في مسقط وبركاء.'},
  areas: {title:'صيانة وتنظيف مكيفات في مسقط وبركاء: مناطق خدمتنا | TNT', description:'نخدم جميع ولايات محافظة مسقط: مسقط، مطرح، بوشر، السيب، العامرات، قريات، وولاية بركاء. فرق متنقلة لتركيب وصيانة وتنظيف المكيفات في موقعك.'},
  guides: {title:'دليل العناية بالمكيف: نصائح الصيانة والتنظيف | TNT', description:'مقالات عملية عن المكيفات في عُمان: لماذا لا يبرد المكيف، كم مرة تنظفه، أسباب التقطير، سبليت أم دكت، ومعلومات خاطئة شائعة.'},
  contact: {title:'تواصل معنا: اطلب عرض سعر للتكييف في مسقط | TNT', description:'تواصل مع تي ان تي للتكييف عبر واتساب 97790973 أو أرسل طلبك من هنا. نخدم محافظة مسقط وبركاء، ومقرنا في مدينة سندان الصناعية.'}
 },
 en: {
  '': {title:'AC Repair, Cleaning & Installation in Muscat | TNT', description:'TNT Air Conditioning: AC maintenance, cleaning and installation for all AC types across Muscat and Barka since 2018. Clear prices. Get a quote on WhatsApp.'},
  about: {title:'About TNT Air Conditioning | Omani AC Company, Muscat', description:'An Omani AC company founded in Muscat in 2018, maintaining and running AC systems for homes and businesses with fast response and after-sales care.'},
  services: {title:'AC Services in Muscat: Installation, Repair, Cleaning | TNT', description:'Complete AC services in Muscat and Barka: installation, preventive maintenance and repair, and deep cleaning for every AC type. Get a quote today.'},
  installation: {title:'AC Installation in Muscat: Split, Ducted, Cassette | TNT', description:'Installation of every AC type in Muscat and Barka to approved technical standards: split, ducted, cassette, floor-standing and VRF, with copper piping.'},
  maintenance: {title:'AC Maintenance & Repair in Muscat, Oman | TNT', description:'Preventive and corrective maintenance for every AC type in Muscat: weak cooling, water leaks and more. We inspect on site and confirm the cost first.'},
  cleaning: {title:'AC Cleaning in Muscat: Deep Split AC Cleaning | TNT', description:'Professional AC cleaning in Muscat and Barka for better cooling, lower power bills and no leaks. Lower prices the more units you book. Book on WhatsApp.'},
  contracts: {title:'Annual AC Maintenance Contracts in Muscat | TNT', description:'Annual AC maintenance contracts for companies and buildings in Muscat: preventive care, fault follow-up, reports and consumables. Get a free assessment.'},
  systems: {title:'AC Types We Service: Split, Ducted, VRF, Chiller | TNT', description:'We work on every AC system in Oman: split, cassette, ducted, floor-standing, window, package, VRF and chiller. Full service in Muscat.'},
  clients: {title:'Our Clients: Government, Banks & Companies in Oman | TNT', description:'Government bodies, banks and major companies in Oman trust TNT Air Conditioning to maintain and run their AC systems. Meet some of our clients.'},
  pricing: {title:'AC Cleaning & Repair Prices in Muscat (OMR) | TNT', description:'Clear prices in Omani rials for AC cleaning by unit type, AC installation and copper piping, and common AC repairs in Muscat. No hidden costs.'},
  faq: {title:'AC Maintenance & Cleaning FAQ, Muscat | TNT', description:'Answers to common AC questions: the best AC, water leaks, gas top-ups, prices, booking and our service area in Muscat and Barka.'},
  areas: {title:'AC Service Areas: Muscat, Seeb, Bawshar & Barka | TNT', description:'We cover every wilayat of Muscat Governorate (Muscat, Muttrah, Bawshar, Seeb, Al Amerat, Qurayyat) and Barka, with mobile AC teams that come to you.'},
  guides: {title:'AC Care Guides: Maintenance & Cleaning Tips | TNT', description:'Practical AC guides for Oman: why an AC stops cooling, how often to clean it, why it drips, split vs ducted, and common AC myths.'},
  contact: {title:'Contact TNT: Get an AC Service Quote in Muscat', description:'Reach TNT Air Conditioning on WhatsApp +968 9779 0973 or send your request here. We serve Muscat Governorate and Barka from Sandan Industrial City.'}
 }
};

const brand = {ar:'تي ان تي للتكييف', en:'TNT Air Conditioning'};
const serviceSlugs: Slug[] = ['installation','maintenance','cleaning','contracts'];
const flat = (s:string) => s.replace(/\s+/g,' ').trim();

/** JSON-LD @graph for a page. `base` is the absolute site origin (no trailing slash). */
export type PageMeta = {path:string; title:string; description:string; image?:string; date?:string};
export function jsonLd(lang:Lang, slug:Slug, base:string, page?:PageMeta){
 const ar = lang==='ar';
 const url = base + href(lang,page?.path??slug);
 const biz = base + '/#business';
 const seo = page ?? pageSeo[lang][slug];
 const graph: Record<string,unknown>[] = [
  {
   '@type':'HVACBusiness', '@id':biz,
   name: brand[lang], alternateName:['TNT', ar?brand.en:brand.ar],
   url: base + href(lang), logo: base+'/images/tnt-logo-dark.png', image: base+'/images/headquarters-1600.webp',
   telephone: contact.tel, email: contact.email, foundingDate:'2018',
   address:{'@type':'PostalAddress', streetAddress: ar?'مدينة سندان الصناعية، محل 44، مبنى 10':'Sandan Industrial City, Shop 44, Building 10', addressLocality: ar?'مسقط':'Muscat', addressCountry:'OM'},
   areaServed:[{'@type':'AdministrativeArea', name: ar?'محافظة مسقط':'Muscat Governorate'},{'@type':'City', name: ar?'بركاء':'Barka'}],
   currenciesAccepted:'OMR', knowsLanguage:['ar','en'],
   sameAs:[`https://www.instagram.com/${contact.instagram}/`],
   hasOfferCatalog:{'@type':'OfferCatalog', name: labels[lang].services, itemListElement: serviceSlugs.map(s=>({'@type':'Offer', itemOffered:{'@type':'Service', name: labels[lang][s], url: base+href(lang,s)}}))}
  },
  {'@type':'WebSite', '@id':base+'/#website', url:base, name:brand[lang], inLanguage:lang, publisher:{'@id':biz}},
  {'@type':'WebPage', '@id':url+'#webpage', url, name:seo.title, description:seo.description, inLanguage:lang, isPartOf:{'@id':base+'/#website'}, about:{'@id':biz}}
 ];
 if(slug){
  const crumbs = [{name:labels[lang][''], item:base+href(lang)}, {name:labels[lang][slug], item:base+href(lang,slug)}];
  if(page) crumbs.push({name:page.title.split(' | ')[0], item:url});
  graph.push({'@type':'BreadcrumbList', itemListElement:crumbs.map((c,i)=>({'@type':'ListItem', position:i+1, ...c}))});
 }
 if(serviceSlugs.includes(slug)){
  graph.push({'@type':'Service', name:labels[lang][slug], serviceType: seo.title.split(' | ')[0], description:seo.description, url, provider:{'@id':biz},
   areaServed:[{'@type':'AdministrativeArea', name: ar?'محافظة مسقط':'Muscat Governorate'},{'@type':'City', name: ar?'بركاء':'Barka'}]});
 }
 if(page?.date){
  graph.push({'@type':'BlogPosting', headline:page.title.split(' | ')[0], description:page.description, url, mainEntityOfPage:url, inLanguage:lang,
   datePublished:page.date, dateModified:page.date, image: page.image?base+'/images/'+page.image:undefined, author:{'@id':biz}, publisher:{'@id':biz}});
 }
 if(slug==='guides'&&!page){
  graph.push({'@type':'ItemList', itemListElement: guides.map((g,i)=>({'@type':'ListItem', position:i+1, url:base+guideHref(lang,g.slug), name:g[lang].title}))});
 }
 if(slug==='faq'){
  graph.push({'@type':'FAQPage', mainEntity: faqGroups(lang).flatMap(g=>g.items).map(i=>({
   '@type':'Question', name:i.q,
   acceptedAnswer:{'@type':'Answer', text: flat([...i.a, ...(i.list??[]), ...(i.table??[]).map(([k,v])=>`${k}: ${v} OMR`), ...(i.after??[])].join(' '))}
  }))});
 }
 return {'@context':'https://schema.org', '@graph':graph};
}
