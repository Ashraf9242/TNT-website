export const contact = { email: 'tntacservices@gmail.com', phone: '+968 9779 0973', tel: '+96897790973', instagram: 'tnt_ac_services' };
export const slugs = ['', 'about', 'services', 'installation', 'maintenance', 'cleaning', 'contracts', 'systems', 'clients', 'pricing', 'contact'] as const;
export type Slug = typeof slugs[number];
export type Lang = 'ar' | 'en';
export const labels: Record<Lang, Record<Slug, string>> = {
 ar: { '':'الرئيسية',about:'من نحن',services:'خدماتنا',installation:'التركيب',maintenance:'الصيانة',cleaning:'التنظيف',contracts:'العقود السنوية',systems:'أنظمة التكييف',clients:'عملاؤنا',pricing:'أسعار الخدمات',contact:'تواصل معنا'},
 en: { '':'Home',about:'About us',services:'Our services',installation:'Installation',maintenance:'Maintenance',cleaning:'Cleaning',contracts:'Annual contracts',systems:'AC systems',clients:'Our clients',pricing:'Service pricing',contact:'Contact us'}
};
export const href = (lang:Lang, slug:string='') => `/${lang}${slug ? '/'+slug : ''}`;
export const ui = {
 ar: {quote:'طلب عرض سعر',call:'اتصل بنا',details:'عرض التفاصيل',allServices:'جميع الخدمات',allSystems:'جميع الأنظمة',menu:'القائمة',theme:'تبديل المظهر',skip:'تجاوز إلى المحتوى',send:'إرسال الطلب',sending:'جارٍ إرسال الطلب…',success:'تم إرسال طلبك بنجاح.',error:'تعذر إرسال الطلب الآن. بياناتك محفوظة في النموذج؛ يمكنك المحاولة مجددًا أو الاتصال بنا.',required:'يرجى إكمال هذا الحقل بصورة صحيحة.',formTitle:'تفاصيل طلبك',optional:'اختياري',choose:'اختر الخدمة',unsure:'غير متأكد',name:'الاسم',company:'اسم الشركة',phone:'رقم الهاتف',email:'البريد الإلكتروني',location:'موقع المشروع',service:'الخدمة المطلوبة',system:'نوع النظام',message:'وصف الاحتياج',video:'فيديو الشركة',sourceArabic:'عرض المحتوى العربي',formHint:'الحقول المعلّمة بـ * مطلوبة.',privacy:'تُستخدم بيانات هذا الطلب للتواصل معك بخصوص احتياجك.',back:'العودة إلى الرئيسية'},
 en: {quote:'Request a quote',call:'Call us',details:'View details',allServices:'All services',allSystems:'All systems',menu:'Menu',theme:'Switch theme',skip:'Skip to content',send:'Send request',sending:'Sending request…',success:'Your request has been sent successfully.',error:'We could not send your request. Your details remain in the form. Please try again or call us.',required:'Please complete this field correctly.',formTitle:'Your request details',optional:'Optional',choose:'Select a service',unsure:'Not sure',name:'Name',company:'Company name',phone:'Phone number',email:'Email address',location:'Project location',service:'Required service',system:'System type',message:'Tell us what you need',video:'Company video',sourceArabic:'View Arabic content',formHint:'Fields marked * are required.',privacy:'Your request details are used to contact you about your enquiry.',back:'Back to home'}
};
export const pendingCollections: {projects: {title:string;description:string;image:string;alt:string;approved:boolean}[]; faqs:{question:string;answer:string;approved:boolean}[]} = {projects:[],faqs:[]};

// NOTE: "How it works" step copy below is PLACEHOLDER microcopy PENDING CLIENT APPROVAL.
// It is not sourced from source.json. Review/replace the wording before publishing.
export const processSteps: Record<Lang, {title:string; text:string}[]> = {
 ar: [
  {title:'اطلب عرض سعر', text:'تواصل معنا عبر النموذج أو الهاتف.'},
  {title:'زيارة ومعاينة', text:'نعاين الموقع ونحدد الاحتياج بدقة.'},
  {title:'عرض سعر واضح', text:'نقدّم عرضًا تفصيليًا وشفافًا دون رسوم خفية.'},
  {title:'التنفيذ والمتابعة', text:'ننفّذ العمل بإتقان ونتابع بعد التسليم.'}
 ],
 en: [
  {title:'Request a quote', text:'Reach us via the form or by phone.'},
  {title:'Site visit', text:'We assess the site and scope your needs.'},
  {title:'Clear quote', text:'A detailed, transparent quote — no hidden fees.'},
  {title:'Execution & follow-up', text:'We deliver the work and follow up after handover.'}
 ]
};

// English content is retained privately; only Arabic is currently enabled.
export const activeLanguages: Lang[] = ['ar'];
