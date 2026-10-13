// Service-area page (/[lang]/areas). Coverage facts come from faq.ts ("ما هو نطاق عملكم؟"):
// all of Muscat Governorate + Barka; Nizwa (10+ ACs) and Sohar (20+ ACs) for bulk jobs.
// Wilayats are the six of Muscat Governorate; neighbourhoods are well-known areas within it.
// NEW COPY, PENDING CLIENT APPROVAL. No em dashes (client rule).
import type {Lang} from './site';

type Bi = [ar: string, en: string];
export const wilayats: Bi[] = [
 ['مسقط', 'Muscat'], ['مطرح', 'Muttrah'], ['بوشر', 'Bawshar'], ['السيب', 'Seeb'], ['العامرات', 'Al Amerat'], ['قريات', 'Qurayyat']
];
export const neighbourhoods: Bi[] = [
 ['روي', 'Ruwi'], ['القرم', 'Qurum'], ['الخوير', 'Al Khuwair'], ['الغبرة', 'Ghubrah'], ['العذيبة', 'Azaiba'], ['مدينة السلطان قابوس', 'Madinat Sultan Qaboos'],
 ['الأنصب', 'Al Ansab'], ['غلا', 'Ghala'], ['الوادي الكبير', 'Wadi Kabir'], ['الموالح', 'Al Mawaleh'], ['الخوض', 'Al Khoud'], ['الحيل', 'Al Hail'],
 ['المعبيلة', 'Al Maabilah'], ['الموج', 'Al Mouj'], ['سداب', 'Sidab'], ['البستان', 'Al Bustan']
];
export const areasCopy = (l: Lang) => l === 'ar' ? {
 title: 'مناطق خدمتنا في مسقط وبركاء',
 lead: 'فرقنا الفنية متنقلة وتصل إليك أينما كنت في محافظة مسقط وبركاء، لتنفيذ تركيب المكيفات وصيانتها وتنظيفها في موقعك مباشرة.',
 wilayatsH: 'ولايات محافظة مسقط',
 wilayatsP: 'نغطي جميع ولايات محافظة مسقط الست:',
 barkaH: 'بركاء',
 barkaP: 'نخدم ولاية بركاء بالكامل، للمنازل والمباني والمؤسسات، بنفس الأسعار ومستوى الخدمة.',
 hoodsH: 'من الأحياء التي نخدمها',
 hoodsP: 'وغيرها من أحياء محافظة مسقط:',
 farH: 'خارج مسقط وبركاء',
 farP: 'يمكننا الوصول لمناطق أبعد بشرط وجود كميات كافية من المكيفات، مثل:',
 far: ['نزوى: 10 مكيفات على الأقل', 'صحار: 20 مكيفًا على الأقل'],
 howH: 'كيف نعمل',
 how: ['فرق صيانة متنقلة تنفّذ جميع الأعمال في موقعك.', 'احجز عبر واتساب بتحديد نوع الخدمة والموقع وعدد المكيفات.', 'يُفضَّل الحجز قبل أكثر من 24 ساعة، ويمكن الحجز في نفس اليوم إذا توفر وقت في الجدول.', 'مقرنا الإداري في مدينة سندان الصناعية، محل 44، مبنى 10.'],
 servicesH: 'خدماتنا في منطقتك',
 cta: 'اطلب خدمة في منطقتك',
 whatsapp: 'السلام عليكم، أرغب بطلب خدمة تكييف في منطقتي: '
} : {
 title: 'Our service areas in Muscat and Barka',
 lead: 'Our technical teams are mobile and come to you anywhere in Muscat Governorate and Barka, to install, maintain and clean ACs on site.',
 wilayatsH: 'Wilayats of Muscat Governorate',
 wilayatsP: 'We cover all six wilayats of Muscat Governorate:',
 barkaH: 'Barka',
 barkaP: 'We serve all of Barka, for homes, buildings and organisations, at the same prices and service level.',
 hoodsH: 'Some of the areas we serve',
 hoodsP: 'And other neighbourhoods across Muscat Governorate:',
 farH: 'Outside Muscat and Barka',
 farP: 'We can reach further areas when there are enough ACs, for example:',
 far: ['Nizwa: at least 10 ACs', 'Sohar: at least 20 ACs'],
 howH: 'How we work',
 how: ['Mobile maintenance teams do all the work at your location.', 'Book on WhatsApp with the service type, location and number of ACs.', 'Booking more than 24 hours ahead is best; same-day booking is possible when the schedule allows.', 'Our admin office is in Sandan Industrial City, Shop 44, Building 10.'],
 servicesH: 'Our services in your area',
 cta: 'Request a service in your area',
 whatsapp: 'Hello, I would like to request an AC service in my area: '
};
