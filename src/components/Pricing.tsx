import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t('pricing.meditation.name'),
      price: t('pricing.meditation.price'),
      period: t('pricing.meditation.period'),
      icon: Star,
      popular: true,
      description: t('pricing.meditation.desc'),
      features: [
        'Unlimited meditation sessions',
        'Daily yoga practice',
        'Personal guidance',
        'Online class access',
        'Progress tracking',
        'Community support'
      ],
      buttonText: t('pricing.meditation.button'),
      buttonVariant: 'default' as const,
      gradient: 'from-emerald-400 to-teal-600'
    },
    {
      name: t('pricing.dowsing.name'),
      price: t('pricing.dowsing.price'),
      period: t('pricing.dowsing.period'),
      icon: Zap,
      popular: false,
      description: t('pricing.dowsing.desc'),
      features: [
        'Energy field analysis',
        'Chakra balancing',
        'Personal consultation',
        'Detailed report',
        'Follow-up guidance',
        'Remote session available'
      ],
      buttonText: t('pricing.dowsing.button'),
      buttonVariant: 'outline' as const,
      gradient: 'from-purple-400 to-indigo-600'
    },
    {
      name: t('pricing.healing.name'),
      price: t('pricing.healing.price'),
      period: t('pricing.healing.period'),
      icon: Crown,
      popular: false,
      description: t('pricing.healing.desc'),
      features: [
        'Comprehensive energy healing',
        'Chakra alignment',
        'Aura cleansing',
        'Stress relief',
        'Emotional balance',
        'Long-term wellness plan'
      ],
      buttonText: t('pricing.healing.button'),
      buttonVariant: 'default' as const,
      gradient: 'from-orange-400 to-red-600'
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('pricing.description')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-card rounded-3xl p-8 hover-lift transition-all duration-300 animate-fade-up ${
                plan.popular ? 'border-2 border-primary animate-pulse-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-primary text-primary-foreground px-4 py-1">
                    {t('pricing.popular')}
                  </Badge>
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute -top-4 right-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {plan.savings}
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${plan.gradient} mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{t('currency')}{plan.price}</span>
                  <span className="text-foreground/60 ml-2">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.buttonVariant}
                className={`w-full py-3 ${
                  plan.buttonVariant === 'default' 
                    ? 'gradient-primary text-primary-foreground hover:opacity-90' 
                    : 'hover:border-primary hover:text-primary'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Coming Soon Services */}
        <div className="text-center space-y-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto border-2 border-dashed border-primary/30">
            <h4 className="text-2xl font-bold mb-4 text-primary">{t('pricing.coming.soon.title')}</h4>
            <p className="text-foreground/70 mb-6">{t('pricing.coming.soon.description')}</p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center p-4 rounded-lg bg-primary/10">
                <h5 className="font-semibold text-primary mb-2">{t('pricing.coming.soon.regression')}</h5>
                <p className="text-foreground/60">{t('pricing.coming.soon.regression.desc')}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/10">
                <h5 className="font-semibold text-primary mb-2">{t('pricing.coming.soon.swar')}</h5>
                <p className="text-foreground/60">{t('pricing.coming.soon.swar.desc')}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/10">
                <h5 className="font-semibold text-primary mb-2">{t('pricing.coming.soon.akashic')}</h5>
                <p className="text-foreground/60">{t('pricing.coming.soon.akashic.desc')}</p>
              </div>
            </div>
          </div>
          
          <p className="text-foreground/60">
            {t('pricing.coming.soon.contact')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;