// FAQ page content (client-supplied, 2026-09-30). Arabic wording lightly edited for
// spelling/clarity; facts unchanged. English is a translation of the same answers.
import type {Slug, Lang} from './site';

export type FaqItem = {
  q: string;
  a: string[];                    // paragraphs
  list?: string[];                // optional bullet points
  table?: [label: string, price: string][]; // optional price tiers (OMR per unit)
  after?: string[];               // paragraphs shown after the list/table
  link?: {slug: Slug; label: string};
  whatsapp?: boolean;             // show a WhatsApp link under the answer
  featured?: boolean;             // also shown on the contact page, before the WhatsApp CTA
};
export type FaqGroup = {id: string; title: string; icon: 'unit' | 'clean' | 'price' | 'calendar' | 'building'; items: FaqItem[]};

const arFaq: FaqGroup[] = [
  {id: 'ac', title: 'المكيفات والشراء', icon: 'unit', items: [
    {q: 'ما هو أفضل مكيف؟', a: ['لا يوجد مكيف هو الأفضل للجميع، فالاختيار يعتمد على احتياجك وطريقة استعمالك. كل مكيف يتميز بشيء مختلف، مثل:'], list: ['العمر الافتراضي', 'قلة الأعطال', 'قوة التبريد ودفع الهواء', 'مستوى الضوضاء', 'توفير الكهرباء', 'السعر']},
    {q: 'هل الأفضل مكيف السبليت أم الدكت؟', a: ['يعتمد ذلك على طبيعة المكان وما هو الأنسب له. نرحب باستفسارك ونساعدك في الاختيار.'], whatsapp: true},
    {q: 'ماذا يجب أن أعرف قبل شراء المكيف؟', a: ['من أهم الأمور معرفة سعة المكيف التي تحتاجها، وتُقاس بدقة بوحدة BTU، وكذلك التأكد من أن المكيف مناسب لمناخ T3 (المناطق شديدة الحرارة).']},
    {q: 'هل تتوفر لديكم مكيفات جديدة؟ وما هي الشركات؟', a: ['نعم، نوفر مكيفات جديدة من جميع الماركات وجميع الفئات:'], list: ['السبليت', 'الكاسيت', 'الدكت', 'الستاند', 'VRF', 'الباكيج']},
    {q: 'هل غاز R410A موفر للطاقة فعلًا؟', a: ['الغاز ليس هو ما يوفر الطاقة؛ السبب الرئيسي هو نوع الضاغط (الكمبريسر). الضاغط من نوع «انفيرتر» هو الموفر للكهرباء.']},
    {q: 'ما نوع الأنابيب النحاسية التي تستخدمونها؟', a: ['في الغالب نستخدم النحاس الجنوب أفريقي، ولكن توجد منه عدة فئات، وهناك تفاصيل أخرى مثل حجم الأسلاك ونوع العوازل وهل الأنابيب جديدة أو مستعملة.', 'نفضّل تقديم استشارة مجانية لتوضيح ذلك حسب حالتك.'], whatsapp: true},
  ]},
  {id: 'care', title: 'التنظيف والصيانة', icon: 'clean', items: [
    {q: 'متى يجب أن أقوم بصيانة المكيف؟', a: ['يحتاج المكيف في المتوسط إلى:'], list: ['تنظيف عميق مرة واحدة كل سنة', 'تنظيف الفلتر بنفسك مرة كل شهر']},
    {q: 'إذا لم أنظّف المكيف بشكل دوري، هل سيتعطل؟', a: ['ليس دائمًا، ولكن التنظيف الدوري:'], list: ['يقلل احتمالية التعطل', 'يطيل عمر المكيف', 'يجنبك مشاكل التقطير', 'يقلل استهلاك الكهرباء', 'يضمن أداء التبريد الكامل', 'يحافظ على نقاء الهواء']},
    {q: 'كم يستغرق تنظيف المكيف الواحد؟', a: ['تقريبًا 20 دقيقة لكل مكيف.']},
    {q: 'كم شخصًا في الفريق؟ وكيف يُقسَّم العمل؟', a: ['معظم فرق الصيانة لدينا تتكون من 3 أشخاص، وكل شخص يعمل على جزء معيّن من المكيف، حتى نصل لأسرع إنجاز مع أفضل جودة.']},
    {q: 'أعاني من تقطير المكيف بشكل متكرر، ما السبب؟', a: ['إذا كان التقطير يحدث مرة في السنة فهذا أمر طبيعي، لأن المكيف يحتاج للتنظيف مرة كل عام.', 'أما إذا عادت المشكلة خلال أسابيع فقط، فأبرز الاحتمالات:'], list: ['لم يتم التنظيف بشكل صحيح', 'خلل في تركيب المكيف', 'خلل في تأسيس مجرى التصريف', 'أوساخ أو تراكمات عند البالوعة (وقد تحتاج إلى سبّاك أحيانًا)']},
    {q: 'هل يجب تعبئة الغاز بعد التنظيف؟', a: ['هناك اعتقاد شائع أنه يجب تعبئة الغاز بعد التنظيف، وهذا غير صحيح؛ في الغالب لا نجد أي نقص إطلاقًا.', 'يمكنك أن تطلب من الفني فحص مستوى الغاز بعد التنظيف، وفي حال وجود نقص تُضاف رسوم حسب كمية النقص.']},
    {q: 'المكيف لا يبرد، كم تكلفة الإصلاح؟', featured: true, a: ['في مشاكل التبريد نحتاج أولًا لتحديد العطل: نزور الموقع ونفحص المكيف ونحدد السبب والتكلفة ونبلغك بها، وعند الموافقة نباشر العمل فورًا.', 'في حال رفض الإصلاح فقط، تُحتسب رسوم فحص 5 ريال عُماني لكل مكيف.'], link: {slug: 'pricing', label: 'أسعار الصيانة والإصلاح'}},
  ]},
  {id: 'price', title: 'الأسعار والضمان', icon: 'price', items: [
    {q: 'كم أسعار الخدمات لديكم؟', featured: true, a: ['توجد قائمة أسعار موضحة، ولكن يُفضَّل تحديد الخدمة التي تحتاجها حتى نوضح لك أيضًا أسعار الخدمات المصاحبة، فمثلًا تركيب المكيف قد يحتاج إلى أنابيب نحاس إضافية.'], link: {slug: 'pricing', label: 'قائمة الأسعار'}},
    {q: 'لدي عدة مكيفات سبليت للتنظيف، هل يوجد خصم؟', featured: true, a: ['أسعار الخدمة ثابتة للجميع، وتنخفض كلما زاد عدد المكيفات:'], table: [['من 1 إلى 15 مكيف', '8'], ['أكثر من 15 مكيف', '7.5'], ['أكثر من 30 مكيف', '7'], ['أكثر من 100 مكيف', '6'], ['أكثر من 200 مكيف', '5']], after: ['أكثر من ذلك يكون السعر حسب الاتفاق.']},
    {q: 'هل تقدمون ضمانًا؟', a: ['نعم:'], list: ['ضمان على المكيفات الجديدة', 'ضمان على الخدمة في حال لم تستلمها بالشكل المناسب']},
    {q: 'هل تقدمون استشارات؟', a: ['نعم، ونقدّم الاستشارة مجانًا ما دامت لا تتطلب زيارة للموقع.'], whatsapp: true},
  ]},
  {id: 'booking', title: 'الحجز ونطاق العمل', icon: 'calendar', items: [
    {q: 'كيف يتم حجز موعد؟', featured: true, a: ['تواصل معنا على واتساب 97790973 وحدّد:'], list: ['نوع الخدمة', 'الموقع', 'عدد المكيفات'], after: ['ثم يتم الاتفاق على الموعد بين الطرفين. يُفضَّل الحجز قبل أكثر من 24 ساعة لتكون جميع الأوقات متاحة.'], whatsapp: true},
    {q: 'هل يمكنني حجز موعد اليوم؟', featured: true, a: ['نعم، في حال وجود متسع من الوقت في جدول اليوم. يُفضَّل الحجز قبل أكثر من 24 ساعة ليكون الاختيار من جميع الأوقات متاحًا لك.'], whatsapp: true},
    {q: 'ما هو نطاق عملكم؟', featured: true, a: ['نعمل في كامل محافظة مسقط وبركاء. ويمكننا الوصول لمناطق أبعد بشرط وجود كميات كافية، مثل:'], list: ['نزوى: 10 مكيفات على الأقل', 'صحار: 20 مكيفًا على الأقل']},
    {q: 'أين مقركم الرئيسي؟', a: ['مدينة سندان الصناعية، محل 44، مبنى 10.', 'عملنا عبارة عن فرق صيانة متنقلة تنفّذ جميع الأعمال في موقع العميل، والمكتب موقع إداري فقط، ونرحب بزيارتكم في أي وقت.']},
  ]},
  {id: 'business', title: 'الشركات والمباني', icon: 'building', items: [
    {q: 'ماذا تقدمون للشركات والمباني الكبيرة؟', a: ['نظام إداري متكامل يشمل خدمة طوال العام، مع:'], list: ['التقارير الدورية', 'الصيانة الدورية', 'القطع الاستهلاكية', 'استقبال البلاغات والمتابعة', 'التنسيق المباشر']},
    {q: 'هل توفرون عقودًا سنوية للمؤسسات والمباني؟', a: ['نعم، نوفر عقودًا سنوية.'], link: {slug: 'contracts', label: 'خدمات للمؤسسات'}},
    {q: 'هل تعملون في المباني الضخمة؟', a: ['نعم، نحن نركز على المباني الضخمة في الأساس، ولدينا عدة مشاريع مشابهة.'], link: {slug: 'clients', label: 'عملاؤنا'}},
    {q: 'هل أنتم شركة صيانة فقط؟', a: ['لا، نحن نقدم حلول تكييف متكاملة: توفير المكيفات الجديدة والمستعملة وقطع الغيار، والفحص والتركيب والإصلاح والتنظيف لجميع أنواع المكيفات:'], list: ['السبليت', 'الكاسيت', 'الدكت', 'الستاند', 'VRF', 'الباكيج']},
  ]},
];

const enFaq: FaqGroup[] = [
  {id: 'ac', title: 'ACs and buying', icon: 'unit', items: [
    {q: 'What is the best AC?', a: ['There is no single best AC for everyone. The right choice depends on your needs and how you use it. Each AC stands out in something different, such as:'], list: ['Lifespan', 'Fewer faults', 'Cooling power and airflow', 'Noise level', 'Energy saving', 'Price']},
    {q: 'Is a split or a ducted AC better?', a: ['It depends on the space and what suits it best. Send us your question and we will help you choose.'], whatsapp: true},
    {q: 'What should I know before buying an AC?', a: ['The most important thing is the capacity you need, measured precisely in BTU, and making sure the AC is rated for the T3 climate (very hot regions).']},
    {q: 'Do you sell new ACs? Which brands?', a: ['Yes, we supply new ACs from all brands and in every category:'], list: ['Split', 'Cassette', 'Ducted', 'Floor-standing', 'VRF', 'Package']},
    {q: 'Does R410A gas really save energy?', a: ['The gas is not what saves energy. The main factor is the type of compressor: an inverter compressor is what saves electricity.']},
    {q: 'What type of copper pipes do you use?', a: ['We mostly use South African copper, but it comes in several grades, and there are other details such as wire size, insulation type and whether the pipes are new or used.', 'We prefer to give you a free consultation to explain this for your situation.'], whatsapp: true},
  ]},
  {id: 'care', title: 'Cleaning and maintenance', icon: 'clean', items: [
    {q: 'When should I service my AC?', a: ['On average, an AC needs:'], list: ['A deep clean once a year', 'A filter clean by you once a month']},
    {q: 'If I do not clean my AC regularly, will it break down?', a: ['Not always, but regular cleaning:'], list: ['Reduces the chance of faults', 'Extends the life of the AC', 'Prevents dripping problems', 'Lowers electricity use', 'Keeps cooling at full performance', 'Keeps the air clean']},
    {q: 'How long does it take to clean one AC?', a: ['About 20 minutes per AC.']},
    {q: 'How many people are in a team, and how is the work split?', a: ['Most of our maintenance teams have 3 people, and each person works on a specific part of the AC, so we finish as fast as possible with the best quality.']},
    {q: 'My AC keeps dripping. What is the cause?', a: ['If it drips once a year, that is normal, because the AC needs cleaning once a year.', 'If the problem returns within a few weeks, the most likely causes are:'], list: ['The cleaning was not done properly', 'A fault in the AC installation', 'A fault in the drain line setup', 'Dirt or build-up at the floor drain (sometimes a plumber is needed)']},
    {q: 'Does the gas need refilling after cleaning?', a: ['Many people believe the gas must be refilled after cleaning. This is not true; in most cases we find no shortage at all.', 'You can ask the technician to check the gas level after cleaning. If it is low, a fee is added based on the amount missing.']},
    {q: 'My AC is not cooling. How much is the repair?', featured: true, a: ['For cooling problems we first need to find the fault: we visit, inspect the AC, identify the cause and cost, and tell you. Once you approve, we start work straight away.', 'If you decline the repair, an inspection fee of 5 Omani rials per AC applies.'], link: {slug: 'pricing', label: 'Maintenance and repair prices'}},
  ]},
  {id: 'price', title: 'Prices and warranty', icon: 'price', items: [
    {q: 'What are your service prices?', featured: true, a: ['We have a published price list, but it is best to tell us the service you need so we can also explain the prices of related work. For example, installing an AC may need extra copper piping.'], link: {slug: 'pricing', label: 'Price list'}},
    {q: 'I have several split ACs to clean. Is there a discount?', featured: true, a: ['Our prices are the same for everyone and go down as the number of ACs goes up:'], table: [['1 to 15 ACs', '8'], ['More than 15 ACs', '7.5'], ['More than 30 ACs', '7'], ['More than 100 ACs', '6'], ['More than 200 ACs', '5']], after: ['Beyond that, the price is agreed with you.']},
    {q: 'Do you offer a warranty?', a: ['Yes:'], list: ['A warranty on new ACs', 'A service guarantee if the work is not delivered properly']},
    {q: 'Do you offer consultations?', a: ['Yes, and consultations are free as long as they do not need a site visit.'], whatsapp: true},
  ]},
  {id: 'booking', title: 'Booking and service area', icon: 'calendar', items: [
    {q: 'How do I book an appointment?', featured: true, a: ['Contact us on WhatsApp at 97790973 and tell us:'], list: ['The service type', 'The location', 'The number of ACs'], after: ['We then agree on a time together. Booking more than 24 hours ahead gives you the widest choice of times.'], whatsapp: true},
    {q: 'Can I book an appointment for today?', featured: true, a: ['Yes, if there is space in the day\'s schedule. Booking more than 24 hours ahead gives you the full choice of times.'], whatsapp: true},
    {q: 'What is your service area?', featured: true, a: ['We cover all of Muscat Governorate and Barka. We can reach further areas when the quantity is large enough, for example:'], list: ['Nizwa: at least 10 ACs', 'Sohar: at least 20 ACs']},
    {q: 'Where is your head office?', a: ['Sandan Industrial City, Shop 44, Building 10.', 'Our work is done by mobile maintenance teams at the client\'s location. The office is administrative only, and you are welcome to visit at any time.']},
  ]},
  {id: 'business', title: 'Companies and buildings', icon: 'building', items: [
    {q: 'What do you offer companies and large buildings?', a: ['A complete management system with year-round service, including:'], list: ['Regular reports', 'Scheduled maintenance', 'Consumable parts', 'Fault reporting and follow-up', 'Direct coordination']},
    {q: 'Do you offer annual contracts for organisations and buildings?', a: ['Yes, we offer annual contracts.'], link: {slug: 'contracts', label: 'Business services'}},
    {q: 'Do you work in very large buildings?', a: ['Yes, large buildings are our main focus, and we have several similar projects.'], link: {slug: 'clients', label: 'Our clients'}},
    {q: 'Are you only a maintenance company?', a: ['No, we offer complete AC solutions: new and used ACs and spare parts, plus inspection, installation, repair and cleaning for every type of AC:'], list: ['Split', 'Cassette', 'Ducted', 'Floor-standing', 'VRF', 'Package']},
  ]},
];

export const faqGroups = (l: Lang) => (l === 'ar' ? arFaq : enFaq);
export const featuredFaqs = (l: Lang) => faqGroups(l).flatMap(g => g.items.filter(i => i.featured));
export const faqCount = arFaq.reduce((n, g) => n + g.items.length, 0);
