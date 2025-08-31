import { ArrowRight, Play, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful yoga practice at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/10 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 shadow-2xl mb-8 animate-fade-down border-2 border-white/20">
          <span className="text-sm font-bold text-white drop-shadow-lg">{t('hero.badge')}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up">
          <span className="text-white drop-shadow-2xl font-extrabold tracking-wide">{t('hero.title')}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 drop-shadow-2xl font-black block mt-2 animate-pulse">{t('hero.subtitle')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 font-semibold mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover-lift group"
          >
            {t('hero.cta.trial')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-card border-primary/20 px-8 py-4 text-lg font-semibold hover-lift group"
          >
            <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            {t('hero.cta.join')}
          </Button>

          <a
            href={`https://wa.me/919991900456?text=${encodeURIComponent("Hi, I'm interested. May I know the pricing plans?")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-[#25D366] text-white px-8 py-4 text-lg font-semibold hover:opacity-90 hover-lift group"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {[
            { number: t('hero.stats.offline'), label: t('hero.stats.classes') },
            { number: t('hero.stats.meditation'), label: t('hero.stats.monthly') },
            { number: t('hero.stats.price.monthly'), label: t('hero.stats.per.month') },
            { number: t('hero.stats.price.session'), label: t('hero.stats.dowsing') }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/80 drop-shadow-md">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;