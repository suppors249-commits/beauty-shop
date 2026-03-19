export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  details: string[];
  featured?: boolean;
  newArrival?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Radiant Glow Face Cream",
    price: 89.99,
    category: "Skincare",
    image: "https://dr-roaa-product.com/wp-content/uploads/2025/11/b356fd50-d0ba-4b2f-8b5e-9f39e0419654.jpeg",
    description: "Luxurious face cream that provides intense hydration and a radiant glow.",
    details: [
      "Deeply hydrates and nourishes skin",
      "Contains vitamin C and hyaluronic acid",
      "Suitable for all skin types",
      "Dermatologically tested",
      "50ml / 1.7 fl oz"
    ],
    featured: true,
    newArrival: true
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    price: 34.99,
    category: "Hair Care",
    image: "	https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_6194-1-1229x1536.jpg",
    description: "Long-lasting matte lipstick with a velvety smooth finish.",
    details: [
      "12-hour wear formula",
      "Enriched with vitamin E",
      "Non-drying matte finish",
      "Available in 12 shades",
      "3.5g / 0.12 oz"
    ],
    featured: true
  },
  {
    id: 3,
    name: "سيرم الترطيب العميق",
    price: 300.00,
    category: "Skincare",
    image: "https://dr-roaa-product.com/wp-content/uploads/2026/02/IMG_9991-1229x1536.jpeg",
    description: "سيرم ترطيب طبيعي للجسم 🌿مصنوع من زيوت طبيعية خالصة، يرطب البشرة بعمق ويساعد على حبس الرطوبة داخل الجلد بعد الشاور. قوامه خفيف وسريع الامتصاص، يخلّي البشرة ناعمة، مرنة، ولمعتها صحية بدون إحساس دهني. مناسب لكل أنواع البشرة",
    details: [
      " الفوائد الأساسية",
      "من سيرم الترطيب هو الحل المثالي لكل شخص بعاني من ",
      "حـبس الرطوبة داخل الجلد: أهم وظيفة للسيرم إنو يقفل الرطوبة  ",
      "ترطيب عميق بدون إحساس دهني: قوامه خفيف وسريع",
      "تغذية ولمعة صحية: الزيوت الطبيعية بتغذي الجلد وتديهو",
      
    ],
    featured: true,
    newArrival: true
  },
  {
    id: 4,
    name: " صابونيه التفتيح والتقشير ",
    price: 250.00,
    category: "Hair Care",
    image: "https://dr-roaa-product.com/wp-content/uploads/2025/11/b356fd50-d0ba-4b2f-8b5e-9f39e0419654-1024x1024.jpeg",
    description: "صابونية غنية بزبدة الشيا تنظّف البشرة بلطف وتمنحها ترطيبًا عميقًا، تساعد على تقليل الجفاف وتترك الجلد ناعمًا ومرنًا ومغذّى من أول استخدام. مناسبة للاستخدام اليومي ولجميع أنواع البشرة ",
    details: [
    " استعادة نعومة الجلد ومرونته، كما تقلل من الجفاف والخشونة وتمنح إحساسًا بالراحة من أول استخدام. مناسبة ",
      "زيوت تفتيح وترطيب الجسم",
      "الأعشاب المفيدة للجسم",
      "زيوت طبيعية مختارة بعناية تعمل على ترطيب البشرة بعمق، تحسين لونها، وإكسابها لمعان صحي. تساعد على تغذية الجلد،",
      
    ],
    featured: true
  },
  {
    id: 5,
    name: "مجموعه الحمام المغربى",
    price: 600.99,
    category: "Skincare",
    image: "https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_6209-scaled.jpg",
    description: "بكج الحمام المغربي الكامل 🌿بكج متكامل يضم الليفة المغربية، الصابون المغربي، والدلكة الطبيعية للجسم. ينظف البشرة بعمق، يقشّرها بلطف، يرطبها ويغذيها، ويمنحها نعومة وإشراقة طبيعية. مثالي لتجربة سبا منزلية فاخرة.طريقة الاستخدام: استخدمي الصابون مع الليفة للتنظيف والتقشير، ثم دلّكي الجسم بالدلكة لتغذية وترطيب البشرة",
    details: [
      "الفائدة: تقشير البشرة بعمق، إزالة الجلد الميت، تنشيط الدورة الدموية",
      "طريقة الاستخدام: استخدميها بعد الاستحمام أو تبخير الجسم",
      "الفائدة: تنظيف البشرة بعمق، فتح المسام، إزالة الشوائب والخلايا الميتة،",
      "الفائدة: تغذية البشرة، توحيد اللون، ترطيب عميق، ومنح نعومة ولمعان",
      
    ],
    newArrival: true
  },
  {
    id: 6,
    name: "بكج العروس",
    price: 1700.99,
    category: "Hair Care",
    image: "https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_6213-scaled.jpg",
    description: "بكج العروس 👰‍♀️✨بكج فاخر للعناية بالجسم يضم ٣ دلكة سودانية، صابون مغربي كبير، ليفة مغربية، صابونية التفتيح والتقشير، وزيت الترطيب. يمنح تنظيفًا عميقًا، تفتيحًا، وترطيبًا مكثفًا لبشرة ناعمة ومشرقة مثالية قبل الزفاف.",
    details: [
      "٣ أكياس من الدلكة السودانية: لتقشير البشرة بلطف، تفتيح وتوحيد اللون، ومنح نعومة",
      "صابون مغربي كبير: لتنظيف البشرة بعمق، فتح المسام، وإزالة الشوائب",
      "صابونية التفتيح والتقشير: للاستخدام اليومي، تساعد على تحسين لون البشرة",
      "روتين متكامل من أول خطوة لآخر خطوة",
      
    ]
  },
  {
    id: 7,
    name: "بكج الصابون المغربى +ليفه مغربيه",
    price: 350.00,
    category: "Skincare",
    image: "https://dr-roaa-product.com/wp-content/uploads/2026/02/IMG_3142-scaled.jpeg",
    description: "الصابون المغربي مع الليفة المغربية بيكملوا بعض عشان يدوك أفضل نتيجة.الصابون بيلين الجلد ويفتح المسام، والليفة تشيل الجلد الميت وتنضف من العمق. مع بعض بيدّوا تنظيف عميق + تقشير آمن، وبيخلّوا الجسم أنعم، أنضف، ولمعتو أوضح من أول استخدام.",
    details: [
      "يفتح مسام الجلد",
      "يلين الجلد الميت المتراكم",
      "ينظف بعمق من الأوساخ وبقايا الكريمات والزيوت",
      "يجهز البشرة للتقشير ويخليها جاهزة لليفة",
    ],
    newArrival: true
  },
  {
    id: 8,
    name: "morocco loofah",
    price: 150.99,
    category: "Hair Care",
    image: "https://dr-roaa-product.com/wp-content/uploads/2025/11/a29436b0-5d29-4a0e-b1a8-bcc42d66b47b.jpeg",
    description: "لليفة المغربية الأصلية ✨ليفة تقشير فعّالة بتشيل الجلد الميت وتنضّف المسام بعمق، وتساعد على تنعيم وتوحيد لون البشرة. بتنّشط الدورة الدموية وبتقلل الشعر تحت الجلد، وبتجهّز الجلد لامتصاص الزيوت والكريمات بشكل أفضل. مثالية للاستخدام مع الصابون المغربي لتجربة حمام مغربي حقيقية في البيت ",
    details: [
      "من فوائدها الأساسية أنها تنشّط الدورة الدموية أثناء الاستخدام، مما يعزز",
      "الليفة المغربية تهيّئ البشرة لامتصاص المنتجات بشكل أفضل، فبعد استخدامها تصبح البشرة",
      "ناسبة لكل أنواع البشرة، ويُنصح باستخدامها مرة إلى مرتين أسبوعيًا",
      "تعمل الليفة المغربية على تقشير البشرة بعمق ولكن بلطف، فتساعد",
      
    ]
  },
  {
    id: 9,
    name: "Avail Body Lotion with Sunscreen",
    price: 88.00,
    category: "Skincare",
    image: "https://www.aesop.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-aesop-us-master-catalog/default/dw6790b944/images/products/BM15US/Aesop_Body_Avail_Body_Lotion_with_Sunscreen_SPF50_US_CA_150mL_Web_Front_2000x2000px.png?sw=1340&sfrm=png",
    description: "Moisturising broad-spectrum SPF50 sunscreen with a lightweight skin feel and refreshing aroma. Boosted with Vitamin E to soften and hydrate.",
    details: [
      "Buildable color payoff",
      "Finely milled powder",
      "Long-lasting formula",
      "Available in 6 shades",
      "5g / 0.17 oz"
    ]
  },
  {
    id: 10,
    name: "Nourishing Hair Serum",
    price: 58.00,
    category: "Hair Care",
    image: "https://images.unsplash.com/photo-1699373381541-8508168f82ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2VydW0lMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzczOTAwMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Lightweight serum that smooths frizz and adds incredible shine.",
    details: [
      "Repairs damaged hair",
      "Contains argan oil and vitamin E",
      "Heat protection up to 230°C",
      "Non-greasy formula",
      "100ml / 3.4 fl oz"
    ],
    newArrival: true
  },
  {
    id: 11,
    name: "Rind Concentrate Body Balm",
    price: 149.00,
    category: "Skincare",
    image: "https://www.aesop.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-aesop-us-master-catalog/default/dw0e5cbc5e/images/products/BM07/Aesop_Body_Rind_Concentrate_Body_Balm_100mL_Web_Front_B_2000x2000px.jpg?sw=1400&sh=1400&sm=cut&sfrm=png&q=70&bgcolor=fffef2",
    description: "Massage into freshly cleansed skin from neck to toe, particularly after sun exposure. Store in refrigerator through summer for boosted sensory pleasure",
    details: [
      "Skin feel: Swiftly absorbed, lightly hydrated",
      "Synthetic and natural hair blend",
      "Includes storage case",
      "Aroma: Fresh, citrus",
      "Perfect for all makeup looks"
    ]
  },
  {
    id: 12,
    name: "Biolumin-C Night Restore Serum with Pro-Vitamin D Complex",
    price: 95.00,
    category: "Hair Care",
    image: "https://www.sephora.com/productimages/sku/s2789055-main-zoom.jpg?imwidth=1224",
    description: "Intensive eye cream that reduces dark circles, puffiness, and fine lines.",
    details: [
      "Ultra-Stable Vitamin C: Provides lasting brightness.",
      "Results after 8 hours and 15 minutes, obtained during independent ",
      " 10% Glycerin and Jojoba Ester: Support visibly plump, hydrated skin",
      "What it is: A vitamin C and pro-vitamin D",
     
    ]
  },
  {
    id: 13,
    name: "ثنائي الجسم اليومي",
    price: 236.00,
    category: "Skincare",
    image: "https://glossier-prod.imgix.net/files/glossier-body-sandstone-set-carousel-01.png?auto=compress,format&cs=srgb&w=1374?auto=compress,format&cs=srgb",
    description: "ما هوغسول لطيف للجسم يوفر تنظيفاً مغذياً بعمق، خالٍ من الصابون والكبريتات. غني برائحة زهر البرتقال المنعشة، تتحول تركيبته الزيتية إلى رغوة غنية عند مزجها بالماء الدافئ، تاركةً البشرة ناعمة ورطبة.المكونات الرئيسيةمزيج من الزيوت الطبيعية - مزيج من الزيوت المشتقة طبيعياً ينظف البشرة بلطف وينعمها ويغذيها.الجلسرين - مرطب موثوق به يجذب الرطوبة ويحتفظ بها.",
    details: [
      "5 different formulas",
      "Instant hydration boost",
      "Natural ingredients",
      "Suitable for sensitive skin",
      "5 x 25ml masks"
    ]
  },
  {
    id: 14,
    name: "Glossy Lip Shine",
    price: 24.99,
    category: "Hair Care",
    image: "https://images.unsplash.com/photo-1760860992755-c432351d47e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXAlMjBnbG9zcyUyMHR1YmUlMjBwaW5rfGVufDF8fHx8MTc3MzkwMDE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-shine lip gloss with a non-sticky formula and subtle tint.",
    details: [
      "Plumping effect",
      "Enriched with hyaluronic acid",
      "Available in 8 shades",
      "Comfortable wear",
      "4.5ml / 0.15 fl oz"
    ]
  }
];

export const categories = [
  { id: 1, name: "Skincare", icon: "" },
  { id: 2, name: "Hair Care", icon: "" },
  
];
