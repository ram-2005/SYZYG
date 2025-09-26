import React, { useEffect, useRef, useState } from 'react';
import { Zap, TrendingUp, Building2 } from 'lucide-react';
import { ParallaxContainer } from '../../../../components/ParallaxContainer';

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      tag: 'INTEGRATE',
      title: 'Streamline Your Processes and Maximize your Investments',
      description: 'We bring your data and software into perfect alignment, transforming disparate assets into a unified powerhouse. Discover untapped capabilities, maximize existing investments, and ensure every opportunity is seized.',
      gradient: 'from-amber-400 to-orange-500',
      delay: 0
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
      tag: 'ACCELERATE',
      title: 'Accelerate Your Business Solutions Now',
      description: 'Expert guidance and cutting-edge automation capabilities, boosting your productivity. Focus entirely on scaling your business with our dedicated support and forward-thinking optimization strategies.',
      gradient: 'from-emerald-400 to-teal-500',
      delay: 200
    },
    {
      icon: <Building2 className="w-8 h-8 text-violet-500" />,
      tag: 'ELEVATE',
      title: 'Build Strong Bases To Scale Your Solutions',
      description: 'Custom solutions that streamline operations and boost productivity. Our team eliminates confusion, ensuring you gain precise tools and clear insights needed to make smarter decisions.',
      gradient: 'from-violet-400 to-purple-500',
      delay: 400
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen "
    >
      {/* Multiple Parallax Background Layers */}
            <ParallaxContainer speed={0.2} className="absolute inset-0">
              <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-blue-400/20 rounded-full blur-xl" />
              <div className="absolute top-32 sm:top-40 right-10 sm:right-20 w-24 sm:w-48 h-24 sm:h-48 bg-purple-400/20 rounded-full blur-xl" />
              <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-12 sm:w-24 h-12 sm:h-24 bg-indigo-400/20 rounded-full blur-xl" />
            </ParallaxContainer>
      
            <ParallaxContainer speed={0.4} className="absolute inset-0">
              <div className="absolute top-1/3 left-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-cyan-400/15 rounded-full blur-lg" />
              <div className="absolute bottom-1/3 right-1/3 w-12 sm:w-20 h-12 sm:h-20 bg-pink-400/15 rounded-full blur-lg" />
              <div className="absolute top-2/3 left-1/5 w-6 sm:w-12 h-6 sm:h-12 bg-yellow-400/15 rounded-full blur-lg" />
            </ParallaxContainer>
      
            <ParallaxContainer speed={0.6} className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-4 sm:w-8 h-4 sm:h-8 bg-green-400/20 rounded-full blur-md" />
              <div className="absolute bottom-1/4 left-1/6 w-6 sm:w-10 h-6 sm:h-10 bg-orange-400/20 rounded-full blur-md" />
            </ParallaxContainer>
            <ParallaxContainer speed={0.8} className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 w-10 sm:w-20 h-10 sm:h-20 bg-red-400/25 rounded-full blur-sm" />
                  <div className="absolute bottom-1/2 right-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-teal-400/25 rounded-full blur-sm" />
            </ParallaxContainer>


      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
          }} />
        </div>

        {/* Floating Orbs */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.01) * 30}px) translateX(${Math.cos(scrollY * 0.008) * 20}px)`
          }}
        />
        
        <div 
          className="absolute top-1/2 right-32 w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl"
          style={{
            transform: `translateY(${Math.cos(scrollY * 0.012) * 40}px) translateX(${Math.sin(scrollY * 0.01) * 25}px)`
          }}
        />
        
        <div 
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-xl"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.008) * 35}px) translateX(${Math.cos(scrollY * 0.012) * 30}px)`
          }}
        />

        {/* Abstract Shapes */}
        <svg className="absolute top-32 right-20 w-64 h-64 text-white/5" viewBox="0 0 200 200">
          <path d="M100,20 Q180,100 100,180 Q20,100 100,20 Z" fill="currentColor" 
                style={{ transform: `rotate(${scrollY * 0.1}deg)` }} />
        </svg>
        
        <svg className="absolute bottom-20 left-10 w-48 h-48 text-white/5" viewBox="0 0 200 200">
          <polygon points="100,10 190,50 160,150 40,150 10,50" fill="currentColor"
                   style={{ transform: `rotate(${-scrollY * 0.05}deg)` }} />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title */}
          <div 
            className={`sticky top-20 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="relative">
              <h1 className="text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight mb-4">
                The
              </h1>
              <h1 className="text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
                Benefits
              </h1>
              
              {/* Decorative Line */}
              <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
          </div>

          {/* Right Side - Benefits Cards */}
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{
                  transitionDelay: `${benefit.delay}ms`
                }}
              >
                <BenefitCard {...benefit} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div 
          className={`mt-10 text-center  transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mb-">
            and
          </h2>
          <h2 className="text-5xl lg:text-7xl mb-5 font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            MANY MORE...
          </h2>
        </div>
      </div>
    </section>
  );
};

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  gradient: string;
  index: number;
}> = ({ icon, tag, title, description, gradient, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background with Gradient Border */}
      <div className={`
        relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 
        border border-slate-700/50 hover:border-slate-600/50
        transform transition-all duration-500 hover:scale-[1.02]
        ${isHovered ? 'shadow-2xl shadow-slate-900/50' : 'shadow-xl shadow-slate-900/30'}
      `}>
        {/* Gradient Glow Effect */}
        <div className={`
          absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 bg-gradient-to-r ${gradient} blur-xl -z-10
        `} style={{ transform: 'scale(1.1)' }} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`
              p-3 rounded-2xl bg-gradient-to-r ${gradient} 
              transform transition-transform duration-300 group-hover:scale-110
            `}>
              {icon}
            </div>
            <span className="text-sm font-bold text-gray-400 tracking-widest">
              {tag}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Animated Corner Accent */}
        <div className={`
          absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} 
          rounded-bl-3xl rounded-tr-3xl opacity-10 group-hover:opacity-20
          transition-opacity duration-300
        `} />
        
        {/* Number Badge */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center">
          <span className="text-sm font-bold text-gray-400">{index + 1}</span>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;