// "خدمات للمؤسسات" page (slug: contracts). Copy taken verbatim from the client's
// landing page https://tnt-landing-zeta.vercel.app (2026-09-30). English copy below is
// a translation of the same content; use corp(lang) to read either version.
import type {FaqItem} from './faq';
import type {Lang} from './site';

const corpWhatsappText = 'السلام عليكم، أرغب بطلب تقييم مجاني لمبناي';

const corpHero = {
  title: ['من اليوم... إدارة أعطال التكييف', 'في مبناك لم تعد مسؤوليتك.'],
  lead: 'أنت لم تستثمر في مبنى لتقضي يومك بين اتصالات المستأجرين والبحث عن شركات الصيانة.',
  points: [
    'المستأجر يتواصل مع فريق TNT مباشرة، لا معك.',
    'نتولّى متابعة الأعطال المشمولة حتى الانتهاء منها.',
    'يصلك تقرير مختصر يوضح ما تم، لا أكثر.',
    'قد لا تحتاج من وقتك أكثر من 15 ثانية.',
  ],
  cta: 'اطلب تقييمًا مجانيًا لمبناك',
  note: ['رد خلال 24 ساعة', 'بدون التزام'],
};

const corpStats: [value: string, label: string][] = [
  ['+100', 'عقد صيانة سنوي'],
  ['+20,000', 'مكيف تتم خدمته سنويًا'],
  ['2018', 'تأسست الشركة'],
  ['99٪', 'رضا العملاء'],
  ['عُمان', 'قيادة عمانية'],
];

const corpProblem = {
  kicker: 'الواقع اليوم',
  title: 'إذا كنت تدير مبنى فيه عشرات المكيفات... فهذه المشاهد مألوفة لك.',
  lead: ['كل عطل يبدأ بنفس الطريقة: مكالمة تقطع يومك، ثم دوامة بحث ومتابعة وانتظار، لمكيف واحد فقط.', 'وبعد يومين، يتكرر المشهد.'],
  scenes: [
    {icon: 'meeting', text: 'أنت في اجتماع مهم... ويرن هاتفك: «المكيف في الشقة ما يبرد.»'},
    {icon: 'night', text: 'تنهض من سريرك ليلًا لتردّ على مكالمة مستأجر منزعج.'},
    {icon: 'travel', text: 'مسافر مع عائلتك لتأخذ راحتك... ويصلك بلاغ عطل جديد.'},
    {icon: 'search', text: 'تبحث عن شركة، تنتظر عرض سعر، تتابع الفني، تتأكد هل انتهى، لمكيف واحد.'},
  ],
  result: 'ينتهي بك الأمر تقضي ساعات من يومك في إدارة شيء لم يكن من المفترض أن تديره بنفسك أصلًا.',
};

const corpFlow = {
  without: {title: 'مسار العطل الواحد: بدون TNT', steps: ['مستأجر', 'اتصال', 'بحث عن شركة', 'عرض سعر', 'انتظار', 'إصلاح', 'متابعة']},
  with: {title: 'مسار العطل الواحد: مع TNT', steps: ['مستأجر', 'فريق TNT', 'تقرير للمالك', 'انتهى']},
  kicker: 'مع TNT',
  headline: 'تخيل لو أن هذا المشهد اختفى تمامًا.',
  body: ['بدل أن يتصل بك المستأجر... يتواصل مباشرة مع فريق TNT.', 'يتحرك فريقنا خلال 24 ساعة، يعالج الأعطال المشمولة، ويغلق البلاغ، ثم يصلك تقرير واضح يوضح ما تم. وتعود لما كنت تفعله وكأن العطل لم يحدث.'],
  statement: ['هذه ليست مجرد صيانة. هذا نظام لإدارة أعطال التكييف في مبناك...', 'دون أن تكون أنت من يديرها.'],
};

const corpCost = {
  kicker: 'حجة المال',
  title: 'كم تكلفة الاستمرار بالطريقة الحالية؟',
  lead: 'بدون عقد، تدفع تقريبًا 10 ريالات للمكيف سنويًا على إصلاحات متفرقة، وفي كل مرة تبدأ من الصفر. مع TNT، 16 ريالًا فقط للمكيف طوال السنة، تغطية كاملة وبلا عناء.',
  without: {title: 'بدون عقد صيانة', price: '10', unit: 'للمكيف / سنويًا (متوسط تقديري)', items: ['بحث عن فني', 'اتصالات متكررة', 'انتظار موافقة', 'متابعة يدوية', 'تركيز يضيع']},
  with: {title: 'نظام TNT', price: '16', unit: 'للمكيف / سنويًا، تغطية كاملة العام', items: ['صيانة وقائية مرتين سنويًا', 'تغطية الأعطال المشمولة طوال مدة العقد', 'استجابة خلال 24 ساعة', 'تقرير بعد كل زيارة']},
  diff: 'الفرق 6 ريالات فقط في السنة',
  benefits: ['عمر أطول للمكيفات مع انخفاض الأعطال', 'استهلاك كهرباء أقل بكفاءة تشغيل أعلى', 'المستأجر يتواصل مع فريق متخصص مباشرة'],
  conclusion: 'في النهاية... أنت لا تدفع مقابل إصلاح المكيف. أنت تستثمر في التخلص من مهمة كانت تستهلك وقتك وتركيزك طوال السنة.',
  cta: 'استرجع وقتك',
};

const corpScope = {
  kicker: 'الشفافية',
  title: 'كل شيء واضح... من البداية.',
  included: {title: 'مشمول ضمن النظام', items: ['صيانة وقائية مرتين في السنة', 'تنظيف الوحدات', 'فحص شامل', 'تنظيف الفلاتر', 'تعبئة الغاز', 'استبدال الكباستور', 'استبدال أسلاك الضاغط', 'إصلاح تسريب المياه', 'تقرير بعد كل زيارة']},
  special: {title: 'بأسعار خاصة للمتعاقدين', items: ['البورد الإلكتروني (PCB)', 'الكمبروسر', 'معالجة تسريب الغاز', 'إصلاح المراوح والمحركات']},
  note: 'لا توجد مفاجآت. ولا بنود مخفية. كل شيء واضح قبل بدء التعاقد.',
};

const corpCoverage = {kicker: 'تغطية شاملة', title: 'مهما كان نوع التكييف... مبناك بالكامل تحت جهة واحدة.'};

const corpResults = {
  kicker: 'بالصور',
  title: 'الفرق ما يحتاج كلام... يكفي إنك تشوفه.',
  lead: 'قبل أي تنظيف، تتراكم طبقات من الغبار والدهون داخل الوحدة دون أن تراها. صور حقيقية من مكيفات صانها فريق TNT، بدون أي تعديل أو فلاتر.',
  single: {img: 'coil-half', alt: 'نصف كويل مكيف قبل التنظيف ونصفه بعد التنظيف', caption: 'نفس الكويل، بإطار واحد: نصفه لم يُنظّف بعد، والنصف الآخر بعد تنظيف TNT.'},
  pairs: [
    {before: 'unit-before', after: 'unit-after', alt: 'وحدة مكيف', caption: 'نفس الوحدة، نفس الزيارة: قبل الصيانة وبعدها مباشرة.'},
    {before: 'coil-before', after: 'coil-after', alt: 'كويل مكيف', caption: 'نفس المبدأ في كل زيارة، سواء كانت الوحدة بسيطة الاتساخ أو متراكمة منذ مدة.'},
  ],
};

const corpTrust = {
  kicker: 'لماذا TNT',
  title: 'الثقة لا تُبنى بالكلام. بل بما تحقق على أرض الواقع.',
  lead: 'منذ عام 2018... ساعدت TNT ملاك المباني والشركات العقارية على إدارة آلاف وحدات التكييف بطريقة أكثر استقرارًا. اليوم:',
  stats: [['+100', 'عقد صيانة سنوي'], ['+20,000', 'مكيف تتم خدمته سنويًا'], ['99٪', 'رضا العملاء']] as [string, string][],
  line: 'قيادة عمانية، وفريق فني مؤهل، مع خبرة في خدمة جهات حكومية كبيرة.',
  rating: {value: '4.8', count: '204 تقييم على Google', note: 'تقييمات حقيقية من عملاء TNT على خرائط Google'},
};

const corpRisk = {
  kicker: 'بدون مخاطرة',
  title: 'أنت لا تخاطر بأي شيء.',
  lead: 'قبل أي تعاقد... نزور المبنى، نحصر وحدات التكييف، ونقدم عرضًا يناسب عدد الوحدات ونوعها. كل ذلك بدون أي التزام.',
  steps: [['نزور المبنى', 'معاينة ميدانية بدون التزام'], ['نحصر الوحدات', 'عدد ونوع كل مكيف في مبناك'], ['عرض بدون التزام', 'تقرر أنت، وأنت مطمئن']] as [string, string][],
  note: 'ابدأ بالتقييم... ثم اتخذ قرارك وأنت مطمئن.',
};

const corpHow = {
  kicker: 'كيف تبدأ',
  title: 'خطوات بسيطة... تفصلك عن راحة البال.',
  steps: [['راسلنا على واتساب', 'رسالة واحدة تكفي لتبدأ، بدون التزام.'], ['نزور ونحصر وحداتك', 'معاينة ميدانية وحصر لكل مكيف في مبناك.'], ['نصمم العرض المناسب', 'عرض يناسب عدد وحداتك ونوعها بالضبط.'], ['نبدأ التنفيذ', 'يتولّى فريقنا كل شيء، وتستعيد وقتك.']] as [string, string][],
  cta: 'ابدأ الآن مجانًا',
};

const corpFaq: {kicker: string; title: string; items: FaqItem[]} = {
  kicker: 'أسئلة شائعة',
  title: 'قبل ما تقرر... جاوبنا على أكثر الأسئلة تكرارًا.',
  items: [
    {q: 'عندي فني خاص، هل أحتاج النظام؟', a: ['إذا كان لديك فني داخلي، فيمكن للنظام أن يتولى الصيانة الوقائية، وإدارة الأعطال المشمولة، والتقارير، بحيث لا تتحول كل مشكلة إلى مهمة إدارية جديدة بالنسبة لك.']},
    {q: 'كم الحد الأدنى للتعاقد؟', a: ['الحد الأدنى هو 10 وحدات تكييف.']},
    {q: 'ما مناطق التغطية؟', a: ['في جميع أنحاء محافظة مسقط وبركاء. إذا كان مبناك خارج هذه المناطق، تواصل معنا عبر واتساب، وسنخبرك بإمكانية تقديم الخدمة.'], whatsapp: true},
    {q: 'كيف أعرف عدد وحدات التكييف؟', a: ['لا تحتاج إلى حصرها بنفسك. نقوم بذلك أثناء التقييم المجاني للمبنى.']},
    {q: 'لماذا أتعاقد بدل الإصلاح عند الحاجة؟', a: ['لأنك لا تدفع فقط مقابل الإصلاح. أنت تستثمر في تقليل الأعطال، واختصار الوقت، وإلغاء دوامة البحث والمتابعة مع كل عطل جديد.']},
    {q: 'هل كل شيء مشمول؟', a: ['معظم أعمال الصيانة الدورية والأعطال المشمولة داخلة ضمن النظام. أما بعض الأعمال مثل البورد الإلكتروني (PCB)، والكمبروسر، وتسريب الغاز، وإصلاح المراوح والمحركات، فتُنفذ بأسعار خاصة للمتعاقدين.']},
  ],
};

const corpClosing = {
  title: 'آخر مرة تنشغل فيها بعطل مكيف.',
  lead: 'ودّع إدارة أعطال التكييف، ودعها تنتقل إلى الجهة التي يُفترض أن تديرها.',
  cta: 'اطلب تقييمًا مجانيًا لمبناك عبر واتساب',
  coverage: 'نغطي محافظة مسقط وبركاء',
};

const arCorp = {corpWhatsappText, corpHero, corpStats, corpProblem, corpFlow, corpCost, corpScope, corpCoverage, corpResults, corpTrust, corpRisk, corpHow, corpFaq, corpClosing};

const enCorp: typeof arCorp = {
  corpWhatsappText: 'Hello, I would like to request a free assessment for my building',
  corpHero: {
    title: ['From today, managing AC faults', 'in your building is no longer your job.'],
    lead: 'You did not invest in a building to spend your day between tenant calls and searching for maintenance companies.',
    points: [
      'Tenants contact the TNT team directly, not you.',
      'We follow up every covered fault until it is fixed.',
      'You receive a short report of what was done, nothing more.',
      'It may take no more than 15 seconds of your time.',
    ],
    cta: 'Request a free assessment for your building',
    note: ['Reply within 24 hours', 'No commitment'],
  },
  corpStats: [
    ['+100', 'Annual maintenance contracts'],
    ['+20,000', 'ACs serviced every year'],
    ['2018', 'Company founded'],
    ['99%', 'Client satisfaction'],
    ['Oman', 'Omani leadership'],
  ],
  corpProblem: {
    kicker: 'The reality today',
    title: 'If you manage a building with dozens of ACs, these scenes are familiar.',
    lead: ['Every fault starts the same way: a call that interrupts your day, then a cycle of searching, following up and waiting, for a single AC.', 'Two days later, it happens again.'],
    scenes: [
      {icon: 'meeting', text: 'You are in an important meeting, and your phone rings: "The AC in the flat is not cooling."'},
      {icon: 'night', text: 'You get out of bed at night to answer an upset tenant.'},
      {icon: 'travel', text: 'You are travelling with your family to relax, and a new fault report arrives.'},
      {icon: 'search', text: 'You find a company, wait for a quote, chase the technician and check it is done, all for one AC.'},
    ],
    result: 'You end up spending hours of your day managing something you were never meant to manage yourself.',
  },
  corpFlow: {
    without: {title: 'One fault, without TNT', steps: ['Tenant', 'Call', 'Find a company', 'Quote', 'Waiting', 'Repair', 'Follow-up']},
    with: {title: 'One fault, with TNT', steps: ['Tenant', 'TNT team', 'Report to owner', 'Done']},
    kicker: 'With TNT',
    headline: 'Imagine if this scene disappeared completely.',
    body: ['Instead of calling you, the tenant contacts the TNT team directly.', 'Our team responds within 24 hours, fixes covered faults and closes the report, then you receive a clear summary of what was done. You carry on with your day as if the fault never happened.'],
    statement: ['This is not just maintenance. It is a system for managing the AC faults in your building...', 'without you having to manage them.'],
  },
  corpCost: {
    kicker: 'The numbers',
    title: 'What does it cost to keep doing things the current way?',
    lead: 'Without a contract, you pay roughly 10 rials per AC each year on scattered repairs, starting from scratch every time. With TNT, it is only 16 rials per AC for the whole year, with full coverage and no hassle.',
    without: {title: 'No maintenance contract', price: '10', unit: 'per AC / year (estimated average)', items: ['Searching for a technician', 'Repeated calls', 'Waiting for approval', 'Manual follow-up', 'Lost focus']},
    with: {title: 'The TNT system', price: '16', unit: 'per AC / year, full-year coverage', items: ['Preventive maintenance twice a year', 'Covered faults included for the full contract', 'Response within 24 hours', 'A report after every visit']},
    diff: 'Only 6 rials more a year',
    benefits: ['Longer AC life with fewer faults', 'Lower electricity use from better efficiency', 'Tenants deal directly with a specialist team'],
    conclusion: 'In the end, you are not paying to fix an AC. You are investing in getting rid of a task that drained your time and focus all year.',
    cta: 'Get your time back',
  },
  corpScope: {
    kicker: 'Transparency',
    title: 'Everything is clear from the start.',
    included: {title: 'Included in the system', items: ['Preventive maintenance twice a year', 'Unit cleaning', 'Full inspection', 'Filter cleaning', 'Gas refill', 'Capacitor replacement', 'Compressor wire replacement', 'Water leak repair', 'A report after every visit']},
    special: {title: 'Special prices for contract clients', items: ['Electronic board (PCB)', 'Compressor', 'Gas leak repair', 'Fan and motor repair']},
    note: 'No surprises and no hidden items. Everything is agreed before the contract starts.',
  },
  corpCoverage: {kicker: 'Full coverage', title: 'Whatever the AC type, your whole building is handled by one provider.'},
  corpResults: {
    kicker: 'See for yourself',
    title: 'The difference speaks for itself. You just have to see it.',
    lead: 'Before cleaning, layers of dust and grease build up inside the unit where you cannot see them. These are real photos of ACs serviced by the TNT team, with no edits or filters.',
    single: {img: 'coil-half', alt: 'AC coil, half before cleaning and half after', caption: 'The same coil in one frame: one half not yet cleaned, the other after a TNT clean.'},
    pairs: [
      {before: 'unit-before', after: 'unit-after', alt: 'AC unit', caption: 'Same unit, same visit: right before and right after maintenance.'},
      {before: 'coil-before', after: 'coil-after', alt: 'AC coil', caption: 'The same standard on every visit, whether the unit is lightly dirty or has built up over a long time.'},
    ],
  },
  corpTrust: {
    kicker: 'Why TNT',
    title: 'Trust is not built with words. It is built on results.',
    lead: 'Since 2018, TNT has helped building owners and real estate companies run thousands of AC units more reliably. Today:',
    stats: [['+100', 'Annual maintenance contracts'], ['+20,000', 'ACs serviced every year'], ['99%', 'Client satisfaction']],
    line: 'Omani leadership and a qualified technical team, with experience serving major government entities.',
    rating: {value: '4.8', count: '204 reviews on Google', note: 'Real reviews from TNT clients on Google Maps'},
  },
  corpRisk: {
    kicker: 'No risk',
    title: 'You are not risking anything.',
    lead: 'Before any contract, we visit the building, count the AC units and give you an offer that fits their number and type. All with no commitment.',
    steps: [['We visit the building', 'On-site inspection, no commitment'], ['We count the units', 'Number and type of every AC in your building'], ['An offer with no commitment', 'You decide, with confidence']],
    note: 'Start with the assessment, then decide with confidence.',
  },
  corpHow: {
    kicker: 'How to start',
    title: 'A few simple steps away from peace of mind.',
    steps: [['Message us on WhatsApp', 'One message is enough to start, with no commitment.'], ['We visit and count your units', 'An on-site inspection and a count of every AC in your building.'], ['We design the right offer', 'An offer that fits the exact number and type of your units.'], ['We get to work', 'Our team takes care of everything, and you get your time back.']],
    cta: 'Start now for free',
  },
  corpFaq: {
    kicker: 'FAQ',
    title: 'Before you decide, here are answers to the questions we hear most.',
    items: [
      {q: 'I have my own technician. Do I need the system?', a: ['If you have an in-house technician, the system can still handle preventive maintenance, covered faults and reporting, so each problem does not turn into a new admin task for you.']},
      {q: 'What is the minimum contract size?', a: ['The minimum is 10 AC units.']},
      {q: 'Which areas do you cover?', a: ['All of Muscat Governorate and Barka. If your building is outside these areas, contact us on WhatsApp and we will tell you whether we can serve it.'], whatsapp: true},
      {q: 'How do I know how many AC units I have?', a: ['You do not need to count them yourself. We do that during the free building assessment.']},
      {q: 'Why sign a contract instead of repairing when needed?', a: ['Because you are not only paying for repairs. You are investing in fewer faults, less of your time, and an end to the search and follow-up cycle with every new fault.']},
      {q: 'Is everything included?', a: ['Most routine maintenance and covered faults are included in the system. Some work, such as the electronic board (PCB), the compressor, gas leaks and fan or motor repairs, is done at special prices for contract clients.']},
    ],
  },
  corpClosing: {
    title: 'The last time you deal with an AC fault.',
    lead: 'Say goodbye to managing AC faults, and hand them to the people who should be managing them.',
    cta: 'Request a free building assessment on WhatsApp',
    coverage: 'We cover Muscat Governorate and Barka',
  },
};

export const corp = (l: Lang) => (l === 'ar' ? arCorp : enCorp);

// AC types: used on the Systems page and the coverage section here.
const acTypeList: {key: string; name: [string, string]; short: [string, string]}[] = [
  {key: 'split', name: ['مكيفات السبليت', 'Split ACs'], short: ['سبلت', 'Split']},
  {key: 'duct', name: ['مكيفات الدكت', 'Ducted ACs'], short: ['دكت', 'Ducted']},
  {key: 'cassette', name: ['مكيفات الكاسيت', 'Cassette ACs'], short: ['كاسيت', 'Cassette']},
  {key: 'package', name: ['مكيفات الباكيج', 'Package units'], short: ['باكيج', 'Package']},
  {key: 'chiller', name: ['أنظمة التشيلر', 'Chiller systems'], short: ['تشيلر', 'Chiller']},
  {key: 'vrf', name: ['مكيفات VRF', 'VRF systems'], short: ['VRF', 'VRF']},
  {key: 'window', name: ['مكيفات الشباك', 'Window ACs'], short: ['شباك', 'Window']},
  {key: 'stand', name: ['مكيفات الستاند', 'Floor-standing ACs'], short: ['ستاند', 'Floor-standing']},
];
export const acTypes = (l: Lang) => acTypeList.map(t => ({key: t.key, name: t.name[l === 'ar' ? 0 : 1], short: t.short[l === 'ar' ? 0 : 1]}));
