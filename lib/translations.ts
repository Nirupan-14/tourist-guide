export type Language = "en" | "ta" | "si";

export const languages: Record<Language, string> = {
  en: "English",
  ta: "தமிழ்",
  si: "සිංහල",
};

type PackageItem = {
  name: string;
  price: string;
  perks: string[];
};

type ServiceItem = {
  title: string;
  description: string;
};

type GalleryItem = {
  title: string;
  caption: string;
};

type Translation = {
  nav: {
    home: string;
    about: string;
    services: string;
    fees: string;
    gallery: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    book: string;
    discover: string;
    highlight: string;
  };
  highlights: {
    title: string;
    cards: { title: string; body: string }[];
  };
  about: {
    title: string;
    story: string;
    bullets: string[];
  };
  services: {
    title: string;
    intro: string;
    list: ServiceItem[];
  };
  fees: {
    title: string;
    intro: string;
    packages: PackageItem[];
    note: string;
  };
  gallery: {
    title: string;
    intro: string;
    items: GalleryItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      date: string;
      guests: string;
      message: string;
      submit: string;
    };
    details: {
      address: string;
      phone: string;
      email: string;
      socials: string;
    };
  };
  cta: {
    title: string;
    body: string;
    button: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      fees: "Service Fees",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      badge: "Luxury Eco-Safari",
      title: "Luxury under nature’s canopy",
      subtitle: "Escape the noise and reconnect with nature",
      book: "Book Now",
      discover: "Discover More",
      highlight: "Private reserves, candle-lit decks, and bespoke rangers.",
    },
    highlights: {
      title: "Curated wilderness with five-star comfort",
      cards: [
        {
          title: "Carbon-conscious luxury",
          body: "Solar-powered camps, locally sourced cuisine, and low-impact transport keep your footprint gentle.",
        },
        {
          title: "World-class naturalists",
          body: "Expert rangers tailor every drive with sunrise leopards, stargazing, and birding immersions.",
        },
        {
          title: "Wellness in the wild",
          body: "Forest spas, riverside yoga decks, and slow mornings with artisan coffee and fresh fruits.",
        },
      ],
    },
    about: {
      title: "About the experience",
      story:
        "We design slow travel for guests who want the rare blend of wilderness intimacy and refined service. Every itinerary is handcrafted to honour the land, empower local communities, and cocoon you in comfort.",
      bullets: [
        "Boutique eco-lodges with glassy river views and elevated decks.",
        "Chef-led tasting menus featuring seasonal produce and heritage recipes.",
        "Conservation-first ethos with every stay funding wildlife corridors.",
      ],
    },
    services: {
      title: "Signature experiences",
      intro: "Layer your stay with sensory moments, guided encounters, and warm hospitality.",
      list: [
        {
          title: "Sunrise leopard drives",
          description: "Dawn expeditions with thermal scopes, pro photographers, and gourmet bush breakfasts.",
        },
        {
          title: "Private tented villas",
          description: "Airy suites with plunge pools, canopy beds, writing desks, and curated vinyl selections.",
        },
        {
          title: "Cultural immersions",
          description: "Tea-country walks, spice garden visits, and artisan meetups that celebrate the island’s soul.",
        },
        {
          title: "Wellness rituals",
          description: "Ayurvedic therapies, slow-breath yoga under banyan trees, and forest-scented aromatics.",
        },
      ],
    },
    fees: {
      title: "Service fees",
      intro: "Transparent, inclusive pricing crafted for different styles of travel.",
      packages: [
        {
          name: "Essence",
          price: "$680 / night",
          perks: [
            "Luxury tented villa",
            "Twice-daily game drives",
            "All-day refreshments",
          ],
        },
        {
          name: "Signature",
          price: "$940 / night",
          perks: [
            "Plunge pool suite",
            "Private ranger & vehicle",
            "Stargazing & sundowner rituals",
          ],
        },
        {
          name: "Royal Canopy",
          price: "$1,240 / night",
          perks: [
            "Hilltop residence & butler",
            "Chef’s table tasting menu",
            "Heli or seaplane transfers",
          ],
        },
      ],
      note: "Rates are exclusive of flights; transfers, wellness add-ons, and bespoke celebrations are tailored on request.",
    },
    gallery: {
      title: "Gallery",
      intro: "A glimpse of the textures, wildlife, and golden hours that await.",
      items: [
        {
          title: "Golden grasslands",
          caption: "Leopards moving at dawn through soft amber light.",
        },
        {
          title: "Riverside decks",
          caption: "Candle-lit dinners echoing with river songs.",
        },
        {
          title: "Wild encounters",
          caption: "Elephant corridors and silent, respectful viewing.",
        },
        {
          title: "Skyline nights",
          caption: "Milky Way vistas with guided constellation tours.",
        },
      ],
    },
    contact: {
      title: "Contact & reservations",
      subtitle: "Tell us how you dream of the forest — we’ll craft the stay around you.",
      form: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        date: "Preferred dates",
        guests: "Guests",
        message: "Tell us about your ideal experience",
        submit: "Send inquiry",
      },
      details: {
        address: "Riverside Sanctuary, Southern Province, Sri Lanka",
        phone: "+94 77 000 0000",
        email: "hello@luxcanopy.eco",
        socials: "Follow the journey",
      },
    },
    cta: {
      title: "Ready for golden hours in the wild?",
      body: "Reserve your dates and we’ll arrange everything from private guides to seaplane transfers.",
      button: "Plan my stay",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Luxury safaris crafted with heart and light footsteps.",
    },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      about: "எங்களை பற்றி",
      services: "சேவைகள்",
      fees: "கட்டணங்கள்",
      gallery: "காட்சியகம்",
      contact: "தொடர்பு",
    },
    hero: {
      badge: "ஆடம்பர எகோ-சஃபாரி",
      title: "இயற்கையின் குடையின் கீழ் ஆடம்பரம்",
      subtitle: "சத்தத்திலிருந்து தப்பி, இயற்கையுடன் மீண்டும் இணைவோம்",
      book: "இப்போது முன்பதிவு",
      discover: "மேலும் அறிக",
      highlight: "தனியார் வனங்கள், மெழுகுவர்த்தி வெளிச்சம், நுணுக்கமான ரேஞ்சர்கள்.",
    },
    highlights: {
      title: "ஐந்து நட்சத்திர சுகவசதியுடன் சூழப்பட்ட காட்டுப்பயணம்",
      cards: [
        {
          title: "கார்பன்-जागरூक ஆடம்பரம்",
          body: "சூரிய ஆற்றல் முகாம்கள், உள்ளூர் சமையல், குறைந்த பாதிப்பு போக்குவரத்து.",
        },
        {
          title: "உலகத் தர இயற்கை நிபுணர்கள்",
          body: "ஒவ்வொரு பயணமும் நிபுணர் ரேஞ்சர்களுடன் உங்கள் ரீதிக்கு ஏற்றது.",
        },
        {
          title: "காட்டில் நல வாழ்வு",
          body: "ஸ்பா, நதிக்கரை யோகா, புதிய பழங்களும் கைவினை காபியும்.",
        },
      ],
    },
    about: {
      title: "எமது கதை",
      story:
        "மெதுவாகப் பயணிக்க விரும்பும் விருந்தினர்களுக்காக நாங்கள் அனுபவங்களை வடிவமைக்கிறோம். நிலத்தை மதித்து, சமூகங்களை வலுப்படுத்தி, உங்களை பாதுகாப்பாகவும் சுகமாகவும் இணைக்கிறோம்.",
      bullets: [
        "கண்ணாடி நதிக் காட்சியுடன் கூடிய புடிக் இக்கோ-லாட்ஜ்கள்.",
        "மாவட்டத்தைச் சேர்ந்த உணவுப் பொறியாளர்கள் உருவாக்கும் சுவைமிகு மெனுக்கள்.",
        "ஒவ்வொரு தங்குமிடமும் உயிரியல் பாதைகளை ஆதரிக்கிறது.",
      ],
    },
    services: {
      title: "கையொப்ப அனுபவங்கள்",
      intro: "உங்கள் தங்குதவையில் உணர்ச்சிப் பொழுதுகளையும் அன்பான சேவையையும் அடுக்குங்கள்.",
      list: [
        {
          title: "சூரிய உதய சிறுத்தை சவாரி",
          description: "வெப்பக்கண்ணாடிகள், புகைப்படக் கலைஞர்கள், காட்டுப்பிரியமான காலை உணவு.",
        },
        {
          title: "தனியார் கூடார வில்லாக்கள்",
          description: "பஞ்சு படுக்கைகள், பிளஞ்ச் பூல், எழுதும் மேஜைகள், தேர்ந்தெடுத்த இசைத்தட்டு.",
        },
        {
          title: "கலாச்சார மூழ்குதல்",
          description: "தேயிலை நாட்டுப் பயணங்கள், மசாலா தோட்டங்கள், கைவினைஞர் சந்திப்புகள்.",
        },
        {
          title: "நலச் சடங்குகள்",
          description: "ஆயுர்வேத சிகிச்சைகள், மர நிழலில் யோகா, காடு வாசனைகள்.",
        },
      ],
    },
    fees: {
      title: "சேவை கட்டணங்கள்",
      intro: "பல்வேறு பயண பாணிகளுக்காக வெளிப்படையான கட்டணங்கள்.",
      packages: [
        {
          name: "Essence",
          price: "$680 / இரவு",
          perks: ["ஆடம்பர கூடார வில்லா", "ஒரு நாளில் இரண்டு சஃபாரி", "நாள் முழுதும் பானங்கள்"],
        },
        {
          name: "Signature",
          price: "$940 / இரவு",
          perks: ["பிளஞ்ச் பூல் ஸ்யூட்", "தனியார் வாகனமும் ரேஞ்சரும்", "நட்சத்திரப் பார்வை & சன்டவுன்டர்"],
        },
        {
          name: "Royal Canopy",
          price: "$1,240 / இரவு",
          perks: ["மலைமேல் குடியிருப்பு", "ஷெஃப் டேபிள் டேஸ்டிங்", "ஹெலிகாப்டர்/சீ-ப்ளேன் மாற்றங்கள்"],
        },
      ],
      note: "விமான கட்டணங்கள் சேர்க்கப்படவில்லை. மாற்றங்கள், நலச் சேவைகள், விழாக்கள் கோரிக்கைப்படி.",
    },
    gallery: {
      title: "காட்சியகம்",
      intro: "காட்டின் ஒளி, விலங்கு, அனுபவங்களை ஒரு நொடி பாருங்கள்.",
      items: [
        { title: "தங்கப் புல்வெளி", caption: "மென்மையான ஒளியில் நகரும் சிறுத்தைகள்." },
        { title: "நதிக்கரை மேடைகள்", caption: "நதியின் இசையுடன் மெழுகுவர்த்தி இரவுகள்." },
        { title: "காட்டு சந்திப்புகள்", caption: "யானை பாதைகள், அமைதியான கவனிப்பு." },
        { title: "வான இரவுகள்", caption: "நட்சத்திரங்களை விளக்கும் வழிகாட்டியுடன்." },
      ],
    },
    contact: {
      title: "தொடர்பு & முன்பதிவு",
      subtitle: "நீங்கள் கனவு காணும் காட்டை கூறுங்கள் — அதற்கேற்ற அனுபவம் நாங்கள் உருவாக்குகிறோம்.",
      form: {
        name: "முழு பெயர்",
        email: "மின்னஞ்சல்",
        phone: "தொலைபேசி",
        date: "விரும்பும் தேதிகள்",
        guests: "விருந்தினர்கள்",
        message: "உங்கள் சிறந்த அனுபவத்தை எழுதுங்கள்",
        submit: "விசாரணை அனுப்பவும்",
      },
      details: {
        address: "ரிவர்சைடு ஸங்க்சுவரி, தெற்கு மாகாணம், இலங்கை",
        phone: "+94 77 000 0000",
        email: "hello@luxcanopy.eco",
        socials: "எங்கள் பயணத்தைப் பின்தொடருங்கள்",
      },
    },
    cta: {
      title: "காட்டின் பொற்காலத்திற்கு தயாரா?",
      body: "தனியார் வழிகாட்டிகளிலும் விமான மாற்றங்களிலும் இருந்து அனைத்தையும் நாங்கள் ஏற்பாடு செய்வோம்.",
      button: "என் தங்குதவையை திட்டமிடுங்கள்",
    },
    footer: {
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      tagline: "மனதுடன், மென்மையான பாதங்களுடன் உருவாக்கப்பட்ட ஆடம்பர சஃபாரி.",
    },
  },
  si: {
    nav: {
      home: "මුල් පිටුව",
      about: "අප ගැන",
      services: "සේවා",
      fees: "ගාස්තු",
      gallery: "ගැලරි",
      contact: "සම්බන්ධ වන්න",
    },
    hero: {
      badge: "උසස් පාරිසරික සෆාරි",
      title: "ස්වභාවයේ තලාවේ උසස් බව",
      subtitle: "කාකුළුගොඩෙන් වෙන් වී, කාන්තාරයට නැවත සම්බන්ධ වන්න",
      book: "දැන් වෙන්කරගන්න",
      discover: "තවත් දැනගන්න",
      highlight: "පුද්ගලික රැකවරණ, කෑමච්චු සැන්, පුද්ගලික රේන්ජර් සේවාව.",
    },
    highlights: {
      title: "උසස් සුවය සහිත වනාන්තරය",
      cards: [
        {
          title: "කාර්බන් සැලකිලිමත් උසස් සේවය",
          body: "සූර්ය බලයෙන් ක්‍රියාත්මක කඳවුරු, ස්ථානික් ආහාර, අඩු බලපෑම් ගමනාගමනය.",
        },
        {
          title: "විශ්ව මට්ටමේ ස්වභාව විශේෂඥයින්",
          body: "රෑඋදේ සුරතල් සොයා, පඬුරු නැරඹුම්, පෞරණික තාරකා නිරීක්ෂණ.",
        },
        {
          title: "වනාන්තර සුවපහසුකම්",
          body: "වනාන්තර ස්පා, ගඟ අසල යෝගා, නවීන කෝපි හා පළතුරු.",
        },
      ],
    },
    about: {
      title: "අපේ කථාව",
      story:
        "වනාන්තරයේ නිරාමයත්මක නිකැලී හා සේවය එක් කරගැනීමට කැමති අමුත්තන් සඳහා අපි සුමට ගමන් ගොඩනඟමු. ප්‍රතිසංස්කරණ හා ප්‍රජාවන්ව ශක්තිමත් කිරීම මූලිකයි.",
      bullets: [
        "ගංගා දර්ශන සහිත බුටික් ඉකෝ ලොඩ්.",
        "ප්‍රාදේශීය ශෙෆ් මගින් නිර්මාණය කළ රසවත් අනුභව.",
        "ඔබේ නවාතැන්ගැනීමෙන් අප සුරකින්නේ වනාන්තර මංපෙත්.",
      ],
    },
    services: {
      title: "අත්දැකීම්",
      intro: "ඔබේ නවාතැන් ගමනේ සුවඳ සහ ආදරපූර්වක සේවය එකතු කරන්න.",
      list: [
        {
          title: "උදේ සුරතල් දර්ශන",
          description: "උදෑසන ගමන්, ඡායාරූප ශිල්පීන්, රසවත් කැප්මෙන්.",
        },
        {
          title: "පෞද්ගලික කෙදෙහි විලා",
          description: "කනොපි කාට්, පල්ලම් පොල්, ලිවීමේ මේස, තෝරාගත් සංගීතය.",
        },
        {
          title: "සංස්කෘතික සමුදෙස්",
          description: "තේ රට ඇවිදිම්, සුදුසුම් බණස්, කළමණාකරණ කලාකරුවන් සමඟ.",
        },
        {
          title: "සුවපහසු රීති",
          description: "ආයුර්වේදික සත්කාර, ගස් යට යෝගා, වනාන්තර සුවඳ.",
        },
      ],
    },
    fees: {
      title: "සේවා ගාස්තු",
      intro: "විවිධ ගමන් රටාවන් සඳහා පැහැදිලි මිල ගණන්.",
      packages: [
        {
          name: "Essence",
          price: "$680 / රාත්‍රී",
          perks: ["උසස් කෙදෙහි විලා", "දින දෙකේ සෆාරි", "දිනපතා පානීය"],
        },
        {
          name: "Signature",
          price: "$940 / රාත්‍රී",
          perks: ["පල්ලම් පොල් සුට්", "පුද්ගලික රේන්ජර්", "නක්ෂත්‍ර නිරීක්ෂණ"],
        },
        {
          name: "Royal Canopy",
          price: "$1,240 / රාත්‍රී",
          perks: ["කන්ද මතු වූ නිවස", "ශෙෆ් ටේස්ටින්", "හෙලි/සිප්ලේන් මාරු"],
        },
      ],
      note: "විමන් ගාස්තු ඇතුළත් නොවේ. මාරු, සුවපහසුකම්, උත්සව ක්‍රමාංකන ඉල්ලීම මත.",
    },
    gallery: {
      title: "ගැලරි",
      intro: "ඔබ බලාපොරොත්තු වන අත්දැකීම් වල කෙටි දිගු.",
      items: [
        { title: "තทอง පස්සර", caption: "උදෑසන සුරතල් පියමං." },
        { title: "ගංගා තිරස්", caption: "පහසුවෙන් පිරුණු කෑම මේස්." },
        { title: "ගොඩනැගීම්", caption: "හිස්කම් සහ ගෞරවයෙන් නිරීක්ෂණ." },
        { title: "තරු මැඩි", caption: "මල්කි වෙ නැරඹීම් සහ කතා." },
      ],
    },
    contact: {
      title: "සම්බන්ධ වන්න",
      subtitle: "ඔබට අවශ්‍ය යාත්‍රාව කියන්න — අපි එයට ගැලපෙන සේවාව සැලසුම් කරමු.",
      form: {
        name: "පූර්ණ නම",
        email: "ඊමේල්",
        phone: "දුරකථන",
        date: "වර්ග කළ දිනය",
        guests: "අමුත්තන්",
        message: "ඔබේ සිහිනය විස්තර කරන්න",
        submit: "විමසීම යවන්න",
      },
      details: {
        address: "රීවර්සයිඩ් සංක්ෂේපය, දකුණු පළාත, ශ්‍රී ලංකා",
        phone: "+94 77 000 0000",
        email: "hello@luxcanopy.eco",
        socials: "අපගේ ගමන අනුගමනය කරන්න",
      },
    },
    cta: {
      title: "වනාන්තරයේ ප黄金 වෙලාවට සූදානම්ද?",
      body: "පුද්ගලික මාර්ගදර්ශකවන් සිට ගුවන් මාරු දක්වා සියල්ල අපි සකසමු.",
      button: "මගේ නවාතැන් සැලසුම් කරන්න",
    },
    footer: {
      rights: "සියලු හිමිකම් ඇවිරිණි.",
      tagline: "හදවතින් සකසා ගැනූ, සැහැල්ලු පියමඟින් උසස් සෆාරි.",
    },
  },
};

