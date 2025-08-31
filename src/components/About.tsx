import { Heart, Users, Award, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import instructorImage from '@/assets/instructor-1.jpg';
import studioImage from '@/assets/studio-bg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Heart,
      title: t('about.values.mindful.title'),
      description: t('about.values.mindful.desc')
    },
    {
      icon: Users,
      title: t('about.values.community.title'),
      description: t('about.values.community.desc')
    },
    {
      icon: Award,
      title: t('about.values.expert.title'),
      description: t('about.values.expert.desc')
    },
    {
      icon: Compass,
      title: t('about.values.personal.title'),
      description: t('about.values.personal.desc')
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            {t('about.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('about.description')}
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-3xl font-bold">
              {t('about.mission.title')}
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('about.mission.p1')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('about.mission.p2')}
            </p>
            <Button className="gradient-primary text-primary-foreground hover-lift">
              {t('about.mission.cta')}
            </Button>
          </div>
          
          <div className="relative animate-slide-in-right">
            <img
              src={studioImage}
              alt="Modern yoga studio with natural lighting"
              className="rounded-2xl shadow-lg hover-scale transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                <value.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {value.title}
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Services Overview */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 hover-lift">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t('about.services.title')}</h3>
            <p className="text-lg text-foreground/70">{t('about.services.description')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
              <h4 className="text-xl font-semibold mb-3">{t('about.services.meditation.name')}</h4>
              <p className="text-foreground/70 mb-3">{t('about.services.meditation.desc')}</p>
              <p className="text-primary font-bold">{t('about.services.meditation.price')}</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
              <h4 className="text-xl font-semibold mb-3">{t('about.services.dowsing.name')}</h4>
              <p className="text-foreground/70 mb-3">{t('about.services.dowsing.desc')}</p>
              <p className="text-primary font-bold">{t('about.services.dowsing.price')}</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
              <h4 className="text-xl font-semibold mb-3">{t('about.services.healing.name')}</h4>
              <p className="text-foreground/70 mb-3">{t('about.services.healing.desc')}</p>
              <p className="text-primary font-bold">{t('about.services.healing.price')}</p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 hover-lift">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Founder Image */}
            <div className="lg:col-span-1 text-center animate-scale-in">
              <img
                src="/founder-rajesh.jpg"
                alt="Rajesh Bishyer - Founder of DhyanDeep Foundation"
                className="w-72 h-72 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-primary/20"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="space-y-2">
                <h4 className="text-2xl font-semibold text-primary">{t('about.founder.name')}</h4>
                <p className="text-foreground/70 font-medium">Founder & Visionary</p>
              </div>
            </div>
            
            {/* Founder Content */}
            <div className="lg:col-span-2 space-y-6 animate-fade-up">
              <div>
                <h3 className="text-3xl font-bold mb-4">{t('about.founder.title')}</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  {t('about.founder.description')}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  {t('about.founder.belief')}
                </p>
              </div>
              
              {/* Key Points */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🧘</span>
                  <p className="text-foreground/70">{t('about.founder.meditation')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌱</span>
                  <p className="text-foreground/70">{t('about.founder.service')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📚</span>
                  <p className="text-foreground/70">{t('about.founder.knowledge')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⚡</span>
                  <p className="text-foreground/70">{t('about.founder.healing')}</p>
                </div>
              </div>
              
              {/* Vision & Mission */}
              <div className="space-y-4">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t('about.founder.vision')}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t('about.founder.mission')}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t('about.founder.leadership')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;