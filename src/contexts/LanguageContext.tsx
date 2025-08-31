import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.classes': 'Classes',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.trial': 'Start Free Trial',

    // Hero
    'hero.title': 'Transform Your Life Through',
    'hero.subtitle': 'Mindful Yoga Practice',
    'hero.description': 'Discover inner peace and physical vitality with our expert-guided yoga classes. Join thousands who have transformed their lives through ancient wisdom and modern wellness.',
    'hero.cta.join': 'Join Now',
    'hero.cta.trial': 'Start Free Trial',
    'hero.badge': 'Explore Your Inner Wisdom',
    'hero.stats.offline': 'Offline & Online',
    'hero.stats.classes': 'Classes Available',
    'hero.stats.meditation': 'Meditation & Yoga',
    'hero.stats.monthly': 'Monthly Classes',
    'hero.stats.price.monthly': '₹5,100',
    'hero.stats.price.session': '₹2,100',
    'hero.stats.per.month': 'Per Month',
    'hero.stats.dowsing': 'Dowsing Session',

    // About
    'about.title': 'Our Philosophy',
    'about.description': 'At Dhyandeep Yog Foundation, we believe yoga is more than physical exercise—it\'s a transformative journey toward self-discovery, balance, and inner peace.',
    'about.mission.title': 'Transforming Lives Through Ancient Wisdom',
    'about.mission.p1': 'For over a decade, we\'ve been dedicated to sharing the profound benefits of yoga with our community. Our approach combines traditional techniques with modern understanding, creating a practice that honors the past while embracing the present.',
    'about.mission.p2': 'Whether you\'re beginning your yoga journey or deepening an existing practice, our experienced instructors provide personalized guidance to help you achieve your wellness goals.',
    'about.mission.cta': 'Learn More About Us',
    'about.values.mindful.title': 'Mindful Practice',
    'about.values.mindful.desc': 'Every pose, every breath is an opportunity to connect with your inner self and find peace.',
    'about.values.community.title': 'Community Focus',
    'about.values.community.desc': 'Build lasting connections with fellow practitioners on a shared journey of growth and wellness.',
    'about.values.expert.title': 'Expert Guidance',
    'about.values.expert.desc': 'Learn from certified instructors with decades of experience in traditional and modern yoga.',
    'about.values.personal.title': 'Personal Journey',
    'about.values.personal.desc': 'Discover your unique path to wellness with personalized guidance and support.',
    'about.services.title': 'Our Holistic Services',
    'about.services.description': 'Comprehensive wellness solutions for mind, body, and spirit',
    'about.services.meditation.name': 'Meditation & Yoga',
    'about.services.meditation.desc': 'Monthly classes combining ancient wisdom with modern practice',
    'about.services.meditation.price': '₹5,100/month',
    'about.services.dowsing.name': 'Pendulum Dowsing',
    'about.services.dowsing.desc': 'Energy assessment and spiritual guidance sessions',
    'about.services.dowsing.price': '₹2,100/session',
    'about.services.healing.name': 'Energy Healing',
    'about.services.healing.desc': 'Deep transformation through advanced healing therapy',
    'about.services.healing.price': '₹5,100/session',
    
    // Founder
    'about.founder.title': 'About the Founder',
    'about.founder.name': 'Rajesh Bishyer',
    'about.founder.description': 'Rajesh Bishyer is the visionary founder of DhyanDeep Foundation, an initiative dedicated to building a holistic ecosystem for meditation, yoga, and energy healing.',
    'about.founder.belief': 'With a deep belief in the power of spiritual growth and community service, he has set out to create a unique meditation centre that integrates:',
    'about.founder.meditation': 'Multiple forms of meditation (active, chakra, naad brahma, mindfulness, and more)',
    'about.founder.service': 'Social service initiatives such as plantation drives, blood donation camps, medical camps, and groundwater recharge projects',
    'about.founder.knowledge': 'Knowledge sharing through self-help and spiritual books (inspired by Osho, Swami Vivekananda, Patanjali, and other great masters)',
    'about.founder.healing': 'Energy healing therapies, pendulum dowsing, and modern spiritual practices',
    'about.founder.vision': 'Under his guidance, DhyanDeep Foundation is not only about inner transformation but also about contributing to society at large. His vision is to blend ancient wisdom with modern needs, offering services both online and offline so that people from every walk of life can benefit.',
    'about.founder.mission': 'Rajesh ji\'s mission is clear — to make meditation, yoga, and energy healing accessible to everyone, while creating a sustainable model of service where every activity carries an energy exchange that supports further growth of the foundation.',
    'about.founder.leadership': 'Through his leadership, DhyanDeep Foundation aims to become a sanctuary for peace, self-discovery, and holistic living.',

    // Classes
    'classes.title': 'Our Classes',
    'classes.description': 'Discover the perfect practice for your journey. From gentle beginnings to dynamic flows, we offer something for every body and every level.',
    'classes.hatha.name': 'Hatha Yoga',
    'classes.hatha.desc': 'Gentle, slow-paced practice focusing on basic postures and breathing techniques.',
    'classes.vinyasa.name': 'Vinyasa Flow',
    'classes.vinyasa.desc': 'Dynamic flowing sequences that connect breath with movement.',
    'classes.power.name': 'Power Yoga',
    'classes.power.desc': 'Intense, athletic practice that builds strength and endurance.',
    'classes.yin.name': 'Yin Yoga',
    'classes.yin.desc': 'Passive practice with long-held poses to improve flexibility and calm the mind.',
    'classes.schedule.title': 'Weekly Schedule',
    'classes.book': 'Book Class',
    'classes.view.schedule': 'View Full Schedule',

    // Pricing
    'pricing.title': 'Our Services & Pricing',
    'pricing.description': 'Choose the perfect service for your spiritual and wellness journey. All services include expert guidance and personalized care.',
    'pricing.meditation.name': 'Meditation & Yoga Classes',
    'pricing.meditation.desc': 'Comprehensive monthly program including offline and online classes',
    'pricing.meditation.price': '₹5,100',
    'pricing.meditation.period': 'month',
    'pricing.meditation.button': 'Start Monthly Plan',
    'pricing.dowsing.name': 'Pendulum Dowsing Session',
    'pricing.dowsing.desc': 'Professional pendulum dowsing for energy assessment and guidance',
    'pricing.dowsing.price': '₹2,100',
    'pricing.dowsing.period': 'session',
    'pricing.dowsing.button': 'Book Session',
    'pricing.healing.name': 'Energy Healing Therapy',
    'pricing.healing.desc': 'Advanced energy healing for deep transformation and wellness',
    'pricing.healing.price': '₹5,100',
    'pricing.healing.period': 'session',
    'pricing.healing.button': 'Book Therapy',
    'pricing.coming.soon.title': 'Coming Soon',
    'pricing.coming.soon.description': 'Exciting new services to enhance your spiritual journey',
    'pricing.coming.soon.regression': 'Past Life Regression',
    'pricing.coming.soon.regression.desc': 'Discover your past lives and unlock hidden wisdom',
    'pricing.coming.soon.swar': 'Swar Vigyan',
    'pricing.coming.soon.swar.desc': 'Ancient sound healing and vibrational therapy',
    'pricing.coming.soon.akashic': 'Akashic Records',
    'pricing.coming.soon.akashic.desc': 'Access universal knowledge and soul information',
    'pricing.coming.soon.contact': 'Contact us for personalized guidance and to stay updated on new services.',

    // Testimonials
    'testimonials.title': 'What Our Community Says',
    'testimonials.description': 'Real stories from real people who have transformed their lives through yoga practice with Yoga Centre.',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.description': 'Ready to begin your wellness journey? We\'d love to hear from you. Reach out with any questions or to schedule your first class.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.phone': 'Call Us',
    'contact.email': 'Email Us',
    'contact.visit': 'Visit Us',

    // Footer
    'footer.description': 'Transform your life through mindful yoga practice. Join our community of wellness seekers on the journey to inner peace and physical vitality.',
    'footer.quick': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.desc': 'Get weekly wellness tips, new class announcements, and exclusive content.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 Yoga Centre. All rights reserved.',

    // Currency
    'currency': '₹'
  },
  hi: {
    // Navbar
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.classes': 'योग कक्षाएं',
    'nav.pricing': 'मूल्य निर्धारण',
    'nav.contact': 'संपर्क',
    'nav.login': 'लॉगिन',
    'nav.trial': 'निःशुल्क ट्रायल शुरू करें',

    // Hero
    'hero.title': 'अपने जीवन को बदलें',
    'hero.subtitle': 'सचेत योग अभ्यास के माध्यम से',
    'hero.description': 'हमारे विशेषज्ञ-निर्देशित योग कक्षाओं के साथ आंतरिक शांति और शारीरिक जीवंतता की खोज करें। हजारों लोगों के साथ जुड़ें जिन्होंने प्राचीन ज्ञान और आधुनिक कल्याण के माध्यम से अपने जीवन को बदला है।',
    'hero.cta.join': 'अभी शामिल हों',
    'hero.cta.trial': 'निःशुल्क ट्रायल शुरू करें',
    'hero.badge': 'अपनी आंतरिक ज्ञान की खोज करें',
    'hero.stats.offline': 'ऑफलाइन और ऑनलाइन',
    'hero.stats.classes': 'कक्षाएं उपलब्ध',
    'hero.stats.meditation': 'ध्यान और योग',
    'hero.stats.monthly': 'मासिक कक्षाएं',
    'hero.stats.price.monthly': '₹5,100',
    'hero.stats.price.session': '₹2,100',
    'hero.stats.per.month': 'प्रति माह',
    'hero.stats.dowsing': 'पेंडुलम डाउजिंग',

    // About
    'about.title': 'हमारा दर्शन',
    'about.description': 'ध्यानदीप योग फाउंडेशन में, हम मानते हैं कि योग केवल शारीरिक व्यायाम से कहीं अधिक है—यह आत्म-खोज, संतुलन और आंतरिक शांति की दिशा में एक परिवर्तनकारी यात्रा है।',
    'about.mission.title': 'प्राचीन ज्ञान के माध्यम से जीवन को बदलना',
    'about.mission.p1': 'एक दशक से अधिक समय से, हम अपने समुदाय के साथ योग के गहन लाभों को साझा करने के लिए समर्पित हैं। हमारा दृष्टिकोण पारंपरिक तकनीकों को आधुनिक समझ के साथ जोड़ता है।',
    'about.mission.p2': 'चाहे आप अपनी योग यात्रा शुरू करने के लिए तैयार हैं? हमें आपसे सुनना अच्छा लगेगा। किसी भी प्रश्न के लिए या अपनी पहली कक्षा निर्धारित करने के लिए संपर्क करें।',
    'about.mission.cta': 'हमारे बारे में और जानें',
    'about.values.mindful.title': 'सचेत अभ्यास',
    'about.values.mindful.desc': 'हर आसन, हर सांस अपने आंतरिक स्व से जुड़ने और शांति पाने का अवसर है।',
    'about.values.community.title': 'समुदायिक फोकस',
    'about.values.community.desc': 'विकास और कल्याण की साझा यात्रा पर साथी अभ्यासकर्ताओं के साथ स्थायी संबंध बनाएं।',
    'about.values.expert.title': 'विशेषज्ञ मार्गदर्शन',
    'about.values.expert.desc': 'पारंपरिक और आधुनिक योग में दशकों के अनुभव वाले प्रमाणित प्रशिक्षकों से सीखें।',
    'about.values.personal.title': 'व्यक्तिगत यात्रा',
    'about.values.personal.desc': 'व्यक्तिगत मार्गदर्शन और सहायता के साथ कल्याण के लिए अपना अनूठा रास्ता खोजें।',
    'about.services.title': 'हमारी समग्र सेवाएं',
    'about.services.description': 'मन, शरीर और आत्मा के लिए व्यापक कल्याण समाधान',
    'about.services.meditation.name': 'ध्यान और योग',
    'about.services.meditation.desc': 'प्राचीन ज्ञान और आधुनिक अभ्यास को जोड़ने वाली मासिक कक्षाएं',
    'about.services.meditation.price': '₹5,100/माह',
    'about.services.dowsing.name': 'पेंडुलम डाउजिंग',
    'about.services.dowsing.desc': 'ऊर्जा मूल्यांकन और आध्यात्मिक मार्गदर्शन सत्र',
    'about.services.dowsing.price': '₹2,100/सत्र',
    'about.services.healing.name': 'ऊर्जा उपचार',
    'about.services.healing.desc': 'गहरे परिवर्तन के लिए उन्नत उपचार चिकित्सा',
    'about.services.healing.price': '₹5,100/सत्र',
    
    // Founder
    'about.founder.title': 'संस्थापक के बारे में',
    'about.founder.name': 'राजेश बिश्येर',
    'about.founder.description': 'राजेश बिश्येर ध्यानदीप फाउंडेशन के दूरदर्शी संस्थापक हैं, जो ध्यान, योग और ऊर्जा उपचार के लिए एक समग्र पारिस्थितिकी तंत्र बनाने के लिए समर्पित एक पहल है।',
    'about.founder.belief': 'आध्यात्मिक विकास और सामुदायिक सेवा की शक्ति में गहरे विश्वास के साथ, उन्होंने एक अनूठा ध्यान केंद्र बनाने का प्रयास किया है जो एकीकृत करता है:',
    'about.founder.meditation': 'ध्यान के कई रूप (सक्रिय, चक्र, नाद ब्रह्म, सचेतनता, और अधिक)',
    'about.founder.service': 'सामाजिक सेवा पहल जैसे पौधरोपण अभियान, रक्तदान शिविर, चिकित्सा शिविर, और भूजल पुनर्भरण परियोजनाएं',
    'about.founder.knowledge': 'आत्म-सहायता और आध्यात्मिक पुस्तकों के माध्यम से ज्ञान साझा करना (ओशो, स्वामी विवेकानंद, पतंजलि, और अन्य महान गुरुओं से प्रेरित)',
    'about.founder.healing': 'ऊर्जा उपचार चिकित्सा, पेंडुलम डाउजिंग, और आधुनिक आध्यात्मिक प्रथाएं',
    'about.founder.vision': 'उनके मार्गदर्शन में, ध्यानदीप फाउंडेशन न केवल आंतरिक परिवर्तन के बारे में है बल्कि समाज में बड़े पैमाने पर योगदान करने के बारे में भी है। उनकी दृष्टि प्राचीन ज्ञान को आधुनिक आवश्यकताओं के साथ मिश्रित करना है, ऑनलाइन और ऑफलाइन दोनों सेवाएं प्रदान करना ताकि जीवन के हर क्षेत्र के लोग लाभान्वित हो सकें।',
    'about.founder.mission': 'राजेश जी का मिशन स्पष्ट है — ध्यान, योग और ऊर्जा उपचार को सभी के लिए सुलभ बनाना, जबकि सेवा का एक स्थायी मॉडल बनाना जहां हर गतिविधि एक ऊर्जा विनिमय ले जाती है जो फाउंडेशन के आगे विकास का समर्थन करती है।',
    'about.founder.leadership': 'उनके नेतृत्व के माध्यम से, ध्यानदीप फाउंडेशन शांति, आत्म-खोज और समग्र जीवन के लिए एक आश्रय बनने का लक्ष्य रखता है।',

    // Classes
    'classes.title': 'हमारी कक्षाएं',
    'classes.description': 'अपनी यात्रा के लिए सही अभ्यास खोजें। कोमल शुरुआत से लेकर गतिशील प्रवाह तक, हम हर शरीर और हर स्तर के लिए कुछ न कुछ प्रदान करते हैं।',
    'classes.hatha.name': 'हठ योग',
    'classes.hatha.desc': 'बुनियादी आसनों और श्वास तकनीकों पर ध्यान देने वाला कोमल, धीमी गति का अभ्यास।',
    'classes.vinyasa.name': 'विन्यास फ्लो',
    'classes.vinyasa.desc': 'गतिशील प्रवाहित अनुक्रम जो श्वास को गति के साथ जोड़ते हैं।',
    'classes.power.name': 'पावर योग',
    'classes.power.desc': 'तीव्र, एथलेटिक अभ्यास जो शक्ति और धीरज का निर्माण करता है।',
    'classes.yin.name': 'यिन योग',
    'classes.yin.desc': 'लचीलेपन में सुधार और मन को शांत करने के लिए लंबे समय तक आसन धारण करने वाला निष्क्रिय अभ्यास।',
    'classes.schedule.title': 'साप्ताहिक अनुसूची',
    'classes.book': 'कक्षा बुक करें',
    'classes.view.schedule': 'पूरा शेड्यूल देखें',

    // Pricing
    'pricing.title': 'हमारी सेवाएं और मूल्य निर्धारण',
    'pricing.description': 'अपनी आध्यात्मिक और कल्याण यात्रा के लिए सही सेवा चुनें। सभी सेवाओं में विशेषज्ञ मार्गदर्शन और व्यक्तिगत देखभाल शामिल है।',
    'pricing.meditation.name': 'ध्यान और योग कक्षाएं',
    'pricing.meditation.desc': 'ऑफलाइन और ऑनलाइन कक्षाओं सहित व्यापक मासिक कार्यक्रम',
    'pricing.meditation.price': '₹5,100',
    'pricing.meditation.period': 'माह',
    'pricing.meditation.button': 'मासिक योजना शुरू करें',
    'pricing.dowsing.name': 'पेंडुलम डाउजिंग सत्र',
    'pricing.dowsing.desc': 'ऊर्जा मूल्यांकन और मार्गदर्शन के लिए पेशेवर पेंडुलम डाउजिंग',
    'pricing.dowsing.price': '₹2,100',
    'pricing.dowsing.period': 'सत्र',
    'pricing.dowsing.button': 'सत्र बुक करें',
    'pricing.healing.name': 'ऊर्जा उपचार चिकित्सा',
    'pricing.healing.desc': 'गहरे परिवर्तन और कल्याण के लिए उन्नत ऊर्जा उपचार',
    'pricing.healing.price': '₹5,100',
    'pricing.healing.period': 'सत्र',
    'pricing.healing.button': 'चिकित्सा बुक करें',
    'pricing.coming.soon.title': 'जल्द आ रहा है',
    'pricing.coming.soon.description': 'आपकी आध्यात्मिक यात्रा को बढ़ाने के लिए रोमांचक नई सेवाएं',
    'pricing.coming.soon.regression': 'पिछले जीवन का पुनर्जन्म',
    'pricing.coming.soon.regression.desc': 'अपने पिछले जीवन की खोज करें और छिपे हुए ज्ञान को अनलॉक करें',
    'pricing.coming.soon.swar': 'स्वर विज्ञान',
    'pricing.coming.soon.swar.desc': 'प्राचीन ध्वनि उपचार और कंपन चिकित्सा',
    'pricing.coming.soon.akashic': 'आकाशिक रिकॉर्ड्स',
    'pricing.coming.soon.akashic.desc': 'सार्वभौमिक ज्ञान और आत्मा की जानकारी तक पहुंच',
    'pricing.coming.soon.contact': 'व्यक्तिगत मार्गदर्शन के लिए और नई सेवाओं के बारे में अपडेट रहने के लिए हमसे संपर्क करें।',

    // Testimonials
    'testimonials.title': 'हमारे समुदाय क्या कहते हैं',
    'testimonials.description': 'योग केंद्र के साथ योग अभ्यास के माध्यम से अपने जीवन को बदलने वाले वास्तविक लोगों की वास्तविक कहानियां।',

    // Contact
    'contact.title': 'संपर्क में रहें',
    'contact.description': 'अपनी कल्याण यात्रा शुरू करने के लिए तैयार हैं? हमें आपसे सुनना अच्छा लगेगा। किसी भी प्रश्न के लिए या अपनी पहली कक्षा निर्धारित करने के लिए संपर्क करें।',
    'contact.form.name': 'पूरा नाम',
    'contact.form.email': 'ईमेल पता',
    'contact.form.phone': 'फोन नंबर',
    'contact.form.message': 'आपका संदेश',
    'contact.form.send': 'संदेश भेजें',
    'contact.phone': 'हमें कॉल करें',
    'contact.email': 'हमें ईमेल करें',
    'contact.visit': 'हमसे मिलें',

    // Footer
    'footer.description': 'सचेत योग अभ्यास के माध्यम से अपने जीवन को बदलें। आंतरिक शांति और शारीरिक जीवंतता की यात्रा पर कल्याण चाहने वालों के हमारे समुदाय में शामिल हों।',
    'footer.quick': 'त्वरित लिंक',
    'footer.resources': 'संसाधन',
    'footer.newsletter.title': 'अपडेट रहें',
    'footer.newsletter.desc': 'साप्ताहिक कल्याण सुझाव, नई कक्षा घोषणाएं और विशेष सामग्री प्राप्त करें।',
    'footer.newsletter.placeholder': 'अपना ईमेल दर्ज करें',
    'footer.newsletter.subscribe': 'सब्सक्राइब करें',
    'footer.copyright': '© 2024 योग केंद्र। सभी अधिकार सुरक्षित।',

    // Currency
    'currency': '₹'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};