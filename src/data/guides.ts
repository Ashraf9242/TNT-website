// AC care guides (/[lang]/guides/<slug>). Written for search intent ("المكيف لا يبرد",
// "AC not cooling Muscat"...). TNT-specific facts (prices, times, fees, service area) are
// taken from faq.ts / content.ts only; the rest is general AC know-how.
// NEW COPY, PENDING CLIENT APPROVAL. No em dashes (client rule).
import type {Lang, Slug} from './site';

export type GuideSection = {h: string; p?: string[]; list?: string[]};
export type GuideCopy = {title: string; seoTitle: string; description: string; intro: string; sections: GuideSection[]; cta: string};
export type Guide = {slug: string; image: string; related: Slug[]; date: string; ar: GuideCopy; en: GuideCopy};

export const guides: Guide[] = [
 {
  slug: 'ac-not-cooling', image: 'maintenance', related: ['maintenance', 'pricing'], date: '2026-10-13',
  ar: {
   title: 'المكيف لا يبرد: أشهر الأسباب وماذا تفعل',
   seoTitle: 'المكيف لا يبرد؟ الأسباب والحلول | TNT مسقط',
   description: 'لماذا لا يبرد المكيف في حر عُمان؟ أشهر الأسباب من الفلتر المتسخ إلى نقص الغاز، وما يمكنك فحصه بنفسك، ومتى تحتاج فنيًا في مسقط.',
   intro: 'في صيف عُمان يصبح المكيف الذي لا يبرد مشكلة عاجلة. الخبر الجيد أن كثيرًا من الأسباب بسيطة ويمكن اكتشافها بسرعة. إليك أشهرها بالترتيب من الأسهل إلى الأصعب.',
   sections: [
    {h: 'تحقّق أولًا من هذه الأمور البسيطة', list: ['أن الريموت على وضع التبريد وليس المروحة أو التجفيف، وأن الحرارة المضبوطة أقل من حرارة الغرفة.', 'أن النوافذ والأبواب مغلقة، وأن أشعة الشمس المباشرة لا تدخل الغرفة بقوة.', 'أن الوحدة الخارجية تعمل (المروحة تدور) وليست مغطاة أو محاطة بأغراض تمنع خروج الهواء.', 'أن القاطع الكهربائي لم يفصل، خاصة بعد انقطاع الكهرباء.']},
    {h: '1. فلتر متسخ', p: ['أشهر سبب على الإطلاق، خاصة مع الغبار في عُمان. الفلتر المسدود يقلل كمية الهواء، فيضعف التبريد ويزيد استهلاك الكهرباء.', 'الحل: نظّف الفلتر بنفسك مرة كل شهر بالماء واتركه يجف قبل إعادته.']},
    {h: '2. اتساخ المبخر والوحدة الخارجية', p: ['حتى مع فلتر نظيف، تتراكم الأوساخ مع الوقت على المبخر (داخل الوحدة الداخلية) وعلى ملفات الوحدة الخارجية، فلا يستطيع المكيف التخلص من الحرارة جيدًا.', 'الحل: تنظيف عميق مرة واحدة في السنة على الأقل بالمواد المخصصة والماء المضغوط.']},
    {h: '3. نقص الغاز بسبب تسريب', p: ['المكيف لا "يستهلك" الغاز؛ إذا نقص الغاز فهناك تسريب في مكان ما. علامات ذلك: تبريد ضعيف مستمر، أو تجمّد على الأنابيب.', 'الحل: يجب تحديد مكان التسريب وإصلاحه قبل التعبئة، وإلا سيعود النقص من جديد.']},
    {h: '4. أعطال كهربائية أو في المروحة', p: ['مثل تلف المكثّف (الكباستر) أو محرك المروحة أو اللوحة الإلكترونية. قد تسمع صوت تشغيل دون تبريد، أو تتوقف الوحدة الخارجية عن العمل.', 'الحل: يحتاج فحصًا من فني متخصص بأجهزة القياس.']},
    {h: '5. مكيف بقدرة غير مناسبة للمكان', p: ['إذا كانت سعة المكيف (BTU) أقل من حاجة الغرفة فلن يبرد جيدًا في أشد أيام الصيف مهما كان سليمًا. اختر دائمًا مكيفًا مناسبًا لمناخ T3 للمناطق شديدة الحرارة.']},
    {h: 'كيف نتعامل مع مشكلة التبريد في TNT', p: ['نزور الموقع، نفحص المكيف، نحدد السبب والتكلفة ونبلغك بها قبل أي عمل. عند موافقتك نبدأ مباشرة. وفي حال رفض الإصلاح فقط، تُحتسب رسوم فحص 5 ريال عُماني لكل مكيف.', 'نخدم كامل محافظة مسقط وبركاء.']}
   ],
   cta: 'المكيف لا يبرد؟ راسلنا الآن'
  },
  en: {
   title: 'AC not cooling: the common causes and what to do',
   seoTitle: 'AC Not Cooling? Causes and Fixes | TNT Muscat',
   description: 'Why is your AC not cooling in the Omani heat? The common causes, from a dirty filter to a gas leak, what to check yourself, and when to call a technician.',
   intro: 'In an Omani summer, an AC that stops cooling is urgent. The good news is that many causes are simple and quick to find. Here are the most common ones, from easiest to hardest.',
   sections: [
    {h: 'Check these simple things first', list: ['The remote is on Cool (not Fan or Dry) and the set temperature is below the room temperature.', 'Windows and doors are closed and strong direct sun is not pouring into the room.', 'The outdoor unit is running (its fan turns) and is not covered or boxed in.', 'The circuit breaker has not tripped, especially after a power cut.']},
    {h: '1. A dirty filter', p: ['By far the most common cause, especially with the dust in Oman. A clogged filter cuts airflow, so cooling drops and power use goes up.', 'Fix: wash the filter yourself once a month and let it dry before refitting it.']},
    {h: '2. Dirty evaporator and outdoor unit', p: ['Even with a clean filter, dirt builds up over time on the evaporator inside the indoor unit and on the outdoor coils, so the AC cannot get rid of heat properly.', 'Fix: a deep clean with proper chemicals and pressurised water at least once a year.']},
    {h: '3. Low gas from a leak', p: ['An AC does not "use up" gas. If the gas is low, there is a leak somewhere. Signs: weak cooling that does not improve, or ice on the pipes.', 'Fix: the leak must be found and repaired before refilling, or the gas will run low again.']},
    {h: '4. Electrical or fan faults', p: ['Such as a failed capacitor, fan motor or electronic board. You may hear the unit running without cooling, or the outdoor unit may stop.', 'Fix: this needs a technician with proper testing equipment.']},
    {h: '5. The wrong size AC for the room', p: ['If the AC capacity (BTU) is too small for the room, it will struggle on the hottest days even when nothing is broken. Always choose a unit rated for the T3 climate (very hot regions).']},
    {h: 'How TNT handles cooling problems', p: ['We visit, inspect the AC, find the cause and the cost, and tell you before any work starts. Once you approve, we begin straight away. If you decline the repair, an inspection fee of 5 Omani rials per AC applies.', 'We cover all of Muscat Governorate and Barka.']}
   ],
   cta: 'AC not cooling? Message us now'
  }
 },
 {
  slug: 'how-often-clean-ac', image: 'cleaning', related: ['cleaning', 'pricing'], date: '2026-10-13',
  ar: {
   title: 'كم مرة يجب تنظيف المكيف في عُمان؟',
   seoTitle: 'كم مرة يجب تنظيف المكيف؟ دليل عملي | TNT مسقط',
   description: 'كم مرة تنظف المكيف في جو عُمان الحار والمغبر؟ الفرق بين تنظيف الفلتر والتنظيف العميق، وفوائد التنظيف الدوري، وكم يستغرق تنظيف المكيف.',
   intro: 'المكيف في عُمان يعمل معظم أيام السنة، والغبار لا يرحم. لذلك التنظيف المنتظم ليس رفاهية، بل هو ما يحافظ على التبريد ويخفض فاتورة الكهرباء.',
   sections: [
    {h: 'الجواب المختصر', list: ['تنظيف الفلتر بنفسك: مرة كل شهر.', 'تنظيف عميق احترافي: مرة واحدة في السنة على الأقل.']},
    {h: 'لماذا التنظيف الدوري مهم؟', p: ['المكيف قد لا يتعطل إذا أهملت تنظيفه، لكن التنظيف الدوري:'], list: ['يقلل احتمالية الأعطال.', 'يطيل عمر المكيف.', 'يجنبك مشاكل تقطير الماء.', 'يقلل استهلاك الكهرباء.', 'يحافظ على قوة التبريد الكاملة.', 'يحافظ على نقاء الهواء في المنزل.']},
    {h: 'ما الفرق بين التنظيف العادي والاحترافي؟', p: ['التنظيف العادي يشمل الفلاتر وجسم المكيف ومجرى التصريف وغسيل الوحدة الخارجية بالماء.', 'أما التنظيف الاحترافي فيصل إلى عمق الوحدة الداخلية: المروحة والمبخر وحوض المكيف والمجاري الدقيقة، بالمواد الكيميائية والماء المضغوط، ثم التجفيف والتعقيم.']},
    {h: 'كم يستغرق التنظيف؟', p: ['تقريبًا 20 دقيقة لكل مكيف. معظم فرقنا من 3 أشخاص، وكل شخص يعمل على جزء معيّن من المكيف لننجز بسرعة وبجودة عالية.']},
    {h: 'هل يجب تعبئة الغاز بعد التنظيف؟', p: ['لا. هذا اعتقاد شائع وغير صحيح؛ التنظيف لا يُنقص الغاز، وفي الغالب لا نجد أي نقص. يمكنك أن تطلب من الفني فحص مستوى الغاز، وإذا وُجد نقص تُضاف رسوم حسب الكمية.']},
    {h: 'تكلفة تنظيف المكيفات في مسقط', p: ['تبدأ أسعار تنظيف مكيف السبليت من 8 ريال عُماني، وتنخفض كلما زاد عدد المكيفات. اطلع على قائمة الأسعار الكاملة لكل نوع.']}
   ],
   cta: 'احجز تنظيف مكيفاتك'
  },
  en: {
   title: 'How often should you clean your AC in Oman?',
   seoTitle: 'How Often Should You Clean Your AC? | TNT Muscat',
   description: 'How often to clean an AC in Oman\'s hot, dusty climate: filter cleaning vs deep cleaning, the benefits of regular cleaning, and how long a clean takes.',
   intro: 'In Oman your AC runs most of the year, and the dust is relentless. Regular cleaning is not a luxury; it is what keeps the cooling strong and the power bill down.',
   sections: [
    {h: 'The short answer', list: ['Wash the filter yourself: once a month.', 'Professional deep clean: at least once a year.']},
    {h: 'Why regular cleaning matters', p: ['An AC will not always break down if you skip cleaning, but regular cleaning:'], list: ['Reduces the chance of faults.', 'Extends the life of the AC.', 'Prevents water dripping problems.', 'Lowers electricity use.', 'Keeps cooling at full strength.', 'Keeps the air in your home clean.']},
    {h: 'Regular vs professional cleaning', p: ['A regular clean covers the filters, the casing, the drain line, and a water wash of the outdoor unit.', 'A professional clean goes deep into the indoor unit: fan, evaporator, drain pan and fine channels, using chemicals and pressurised water, then drying and sanitising.']},
    {h: 'How long does it take?', p: ['About 20 minutes per AC. Most of our teams have 3 people, each working on a specific part of the AC, so the job is fast and thorough.']},
    {h: 'Does the gas need refilling after cleaning?', p: ['No. This is a common belief, but cleaning does not reduce the gas, and in most cases we find no shortage at all. You can ask the technician to check the gas level; if it is low, a fee is added based on the amount.']},
    {h: 'AC cleaning prices in Muscat', p: ['Split AC cleaning starts from 8 Omani rials, and the price drops as the number of units goes up. See the full price list for every AC type.']}
   ],
   cta: 'Book your AC cleaning'
  }
 },
 {
  slug: 'ac-water-leak', image: 'workshop', related: ['cleaning', 'maintenance'], date: '2026-10-13',
  ar: {
   title: 'تقطير ماء المكيف: الأسباب والحل',
   seoTitle: 'تقطير المكيف: لماذا يسرّب الماء وما الحل | TNT',
   description: 'المكيف يقطّر ماء داخل الغرفة؟ متى يكون التقطير طبيعيًا، وأشهر أسبابه من الاتساخ إلى خلل التركيب ومجرى التصريف، وكيف يُحل نهائيًا.',
   intro: 'تقطير الماء من الوحدة الداخلية من أكثر المشاكل التي تصلنا. أحيانًا يكون علامة بسيطة على أن المكيف يحتاج تنظيفًا، وأحيانًا يدل على مشكلة في التركيب.',
   sections: [
    {h: 'متى يكون التقطير طبيعيًا؟', p: ['إذا حدث التقطير مرة في السنة تقريبًا فهذا متوقع، لأن المكيف يحتاج تنظيفًا مرة كل عام، والأوساخ المتراكمة تسد مجرى الماء.']},
    {h: 'إذا عاد التقطير خلال أسابيع', p: ['عودة المشكلة بسرعة بعد التنظيف تعني أن السبب أعمق. أبرز الاحتمالات:'], list: ['لم يتم التنظيف بشكل صحيح، فبقيت أوساخ في الحوض أو المجاري الدقيقة.', 'خلل في تركيب المكيف، مثل ميلان الوحدة الداخلية في الاتجاه الخاطئ.', 'خلل في تأسيس مجرى التصريف (الدرين).', 'أوساخ أو تراكمات عند البالوعة، وقد تحتاج أحيانًا إلى سبّاك.']},
    {h: 'ماذا تفعل الآن؟', list: ['أطفئ المكيف إذا كان الماء يسقط على أثاث أو أجهزة كهربائية.', 'نظّف الفلتر وتأكد أنه في مكانه الصحيح.', 'إذا استمر التقطير، اطلب تنظيفًا احترافيًا يشمل الحوض ومجرى التصريف.']},
    {h: 'كيف نحل المشكلة', p: ['التنظيف الاحترافي في TNT يشمل حوض المكيف ومجرى التصريف والمجاري الدقيقة. وإذا كان السبب في التركيب أو التأسيس، نحدده لك ونبلغك بالحل قبل البدء.']}
   ],
   cta: 'المكيف يقطّر؟ راسلنا'
  },
  en: {
   title: 'AC dripping water: causes and fixes',
   seoTitle: 'AC Leaking Water? Causes and Fixes | TNT Muscat',
   description: 'Is your AC dripping water indoors? When dripping is normal, the common causes from dirt to installation and drain problems, and how to fix it for good.',
   intro: 'Water dripping from the indoor unit is one of the problems we hear about most. Sometimes it simply means the AC needs cleaning; sometimes it points to an installation problem.',
   sections: [
    {h: 'When is dripping normal?', p: ['If it drips about once a year, that is expected: the AC needs cleaning once a year, and built-up dirt blocks the water path.']},
    {h: 'If dripping returns within weeks', p: ['If the problem comes back soon after cleaning, the cause is deeper. The most likely reasons:'], list: ['The cleaning was not done properly, leaving dirt in the drain pan or fine channels.', 'A fault in the AC installation, such as the indoor unit tilting the wrong way.', 'A fault in how the drain line was set up.', 'Dirt or build-up at the floor drain; sometimes a plumber is needed.']},
    {h: 'What to do right now', list: ['Switch the AC off if water is falling on furniture or electrical devices.', 'Clean the filter and make sure it sits correctly.', 'If the dripping continues, book a professional clean that covers the drain pan and drain line.']},
    {h: 'How we fix it', p: ['A TNT professional clean covers the drain pan, drain line and fine channels. If the cause is the installation or drain setup, we find it and explain the fix before starting.']}
   ],
   cta: 'AC dripping? Message us'
  }
 },
 {
  slug: 'split-vs-ducted-ac', image: 'installation', related: ['installation', 'systems'], date: '2026-10-13',
  ar: {
   title: 'سبليت أم دكت؟ كيف تختار المكيف المناسب',
   seoTitle: 'سبليت أم دكت؟ كيف تختار المكيف المناسب | TNT',
   description: 'مقارنة بين مكيف السبليت والدكت والكاسيت والستاند: أيها يناسب منزلك أو مكتبك في عُمان، وما يجب معرفته قبل الشراء مثل سعة BTU ومناخ T3.',
   intro: 'لا يوجد مكيف هو الأفضل للجميع. الاختيار الصحيح يعتمد على طبيعة المكان وطريقة استعمالك. هذه مقارنة سريعة تساعدك على تضييق الخيارات.',
   sections: [
    {h: 'مكيف السبليت', p: ['الأكثر انتشارًا في المنازل. وحدة داخلية على الجدار ووحدة خارجية. مناسب للغرف المنفصلة، وتركيبه وصيانته أبسط وتكلفته أقل.']},
    {h: 'مكيف الدكت', p: ['وحدة مخفية في السقف توزّع الهواء عبر مجاري وفتحات. مظهر أنظف وتوزيع هواء متساوٍ، ومناسب للمساحات الكبيرة أو عدة غرف. يحتاج تخطيطًا عند البناء أو وجود سقف مستعار.']},
    {h: 'الكاسيت والستاند', p: ['الكاسيت يُركّب في السقف ويوزّع الهواء في أربعة اتجاهات، شائع في المكاتب والمحلات. الستاند وحدة أرضية بقوة دفع عالية، مناسبة للقاعات والمجالس.']},
    {h: 'ما يجب معرفته قبل الشراء', list: ['السعة المناسبة للمكان، وتُقاس بدقة بوحدة BTU.', 'أن يكون المكيف مناسبًا لمناخ T3 للمناطق شديدة الحرارة مثل عُمان.', 'نوع الضاغط: الضاغط «انفيرتر» هو ما يوفر الكهرباء، وليس نوع الغاز.', 'جودة التركيب: أنابيب النحاس والعوازل والأسلاك تؤثر على الأداء وعمر المكيف.']},
    {h: 'نصيحتنا', p: ['قارن على حسب ما يهمك أكثر: العمر الافتراضي، قلة الأعطال، قوة التبريد، مستوى الضوضاء، توفير الكهرباء، والسعر. ونقدّم الاستشارة مجانًا ما دامت لا تتطلب زيارة للموقع.']}
   ],
   cta: 'استشرنا مجانًا عبر واتساب'
  },
  en: {
   title: 'Split or ducted? How to choose the right AC',
   seoTitle: 'Split vs Ducted AC: Which Is Right for You? | TNT',
   description: 'Split vs ducted vs cassette vs floor-standing ACs: which suits your home or office in Oman, and what to know before buying: BTU capacity and T3 rating.',
   intro: 'There is no single best AC for everyone. The right choice depends on the space and how you use it. Here is a quick comparison to narrow down your options.',
   sections: [
    {h: 'Split AC', p: ['The most common choice for homes: an indoor wall unit and an outdoor unit. Good for separate rooms, simpler to install and maintain, and lower cost.']},
    {h: 'Ducted AC', p: ['A unit hidden in the ceiling that delivers air through ducts and grilles. A cleaner look and even airflow, good for large spaces or several rooms. It needs planning during construction or a false ceiling.']},
    {h: 'Cassette and floor-standing', p: ['A cassette sits in the ceiling and blows air in four directions, common in offices and shops. A floor-standing unit has strong airflow and suits halls and majlis rooms.']},
    {h: 'What to know before buying', list: ['The right capacity for the space, measured precisely in BTU.', 'A unit rated for the T3 climate (very hot regions like Oman).', 'The compressor type: an inverter compressor is what saves electricity, not the type of gas.', 'Installation quality: copper pipes, insulation and wiring all affect performance and lifespan.']},
    {h: 'Our advice', p: ['Compare on what matters most to you: lifespan, fewer faults, cooling power, noise, energy saving and price. Consultations are free as long as they do not need a site visit.']}
   ],
   cta: 'Ask us for free on WhatsApp'
  }
 },
 {
  slug: 'ac-myths', image: 'tools', related: ['maintenance', 'faq'], date: '2026-10-13',
  ar: {
   title: '4 معلومات خاطئة شائعة عن المكيفات',
   seoTitle: 'معلومات خاطئة عن المكيفات: الغاز والانفيرتر | TNT',
   description: 'هل يجب تعبئة غاز المكيف بعد التنظيف؟ هل غاز R410A موفر للطاقة؟ نصحح أشهر المعلومات الخاطئة عن المكيفات لتوفر المال وتحافظ على مكيفك.',
   intro: 'تنتشر معلومات كثيرة عن المكيفات تكلّف أصحابها مالًا دون فائدة. هذه أشهرها، مع الحقيقة من واقع عملنا اليومي في الصيانة.',
   sections: [
    {h: '1. «يجب تعبئة الغاز بعد كل تنظيف»', p: ['غير صحيح. التنظيف لا يُنقص الغاز، وفي الغالب لا نجد أي نقص. إذا أردت الاطمئنان اطلب من الفني فحص مستوى الغاز، وتُضاف رسوم فقط إذا وُجد نقص فعلي.']},
    {h: '2. «غاز R410A هو الموفر للكهرباء»', p: ['الغاز ليس هو ما يوفر الطاقة. السبب الرئيسي هو نوع الضاغط (الكمبريسر)، والضاغط من نوع «انفيرتر» هو الموفر للكهرباء.']},
    {h: '3. «المكيف يستهلك الغاز مع الوقت»', p: ['المكيف يعمل بدورة مغلقة ولا يستهلك الغاز. إذا نقص الغاز فهناك تسريب يجب إصلاحه، وإلا ستتكرر التعبئة دون فائدة.']},
    {h: '4. «ما دام المكيف يبرد فلا يحتاج تنظيفًا»', p: ['المكيف قد يستمر بالعمل مع الأوساخ، لكنه يستهلك كهرباء أكثر، ويبرد أقل، ويصبح أكثر عرضة للأعطال والتقطير. التنظيف العميق مرة في السنة يحميك من كل ذلك.']}
   ],
   cta: 'عندك سؤال؟ اسألنا مجانًا'
  },
  en: {
   title: '4 common myths about air conditioners',
   seoTitle: 'AC Myths: Gas Refills, R410A and Inverters | TNT',
   description: 'Does AC gas need refilling after cleaning? Is R410A gas energy saving? We correct the most common AC myths so you save money and protect your AC.',
   intro: 'A lot of what people believe about ACs costs them money for nothing. Here are the most common myths, with the facts from our day-to-day maintenance work.',
   sections: [
    {h: '1. "The gas must be refilled after every clean"', p: ['Not true. Cleaning does not reduce the gas, and in most cases we find no shortage at all. If you want peace of mind, ask the technician to check the gas level; a fee is added only if it is actually low.']},
    {h: '2. "R410A gas is what saves electricity"', p: ['The gas is not what saves energy. The main factor is the compressor type: an inverter compressor is what saves electricity.']},
    {h: '3. "An AC uses up gas over time"', p: ['An AC runs a sealed loop and does not consume gas. If the gas is low, there is a leak that must be repaired, or refills will keep repeating for nothing.']},
    {h: '4. "If it still cools, it does not need cleaning"', p: ['An AC can keep running while dirty, but it uses more power, cools less, and becomes more prone to faults and dripping. A deep clean once a year protects you from all of that.']}
   ],
   cta: 'Have a question? Ask us for free'
  }
 }
];

export const guideBySlug = (slug: string) => guides.find(g => g.slug === slug);
export const guideHref = (lang: Lang, slug: string) => `/${lang}/guides/${slug}`;
