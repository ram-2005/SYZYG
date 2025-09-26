import  { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Globe, 
  BarChart3, 
  CreditCard,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export function CoreValuesSection() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const focusAreas = [
    {
      id: 'accelerated-growth',
      icon: TrendingUp,
      title: 'Accelerated Growth',
      description: 'We drive exponential business growth through innovative strategies, cutting-edge technology, and proven methodologies that deliver measurable results in record time.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      shadowColor: 'shadow-emerald-500/20',
      glowColor: 'shadow-emerald-500/40',
      delay: 'delay-100'
    },
    {
      id: 'global-reach',
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your business horizons with our worldwide network and international expertise, connecting you to markets and opportunities across the globe.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      shadowColor: 'shadow-blue-500/20',
      glowColor: 'shadow-blue-500/40',
      delay: 'delay-200'
    },
    {
      id: 'data-driven-growth',
      icon: BarChart3,
      title: 'Data-Driven Growth',
      description: 'Harness the power of advanced analytics and AI-driven insights to make informed decisions that accelerate your growth trajectory and optimize performance.',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      shadowColor: 'shadow-purple-500/20',
      glowColor: 'shadow-purple-500/40',
      delay: 'delay-300'
    },
    {
      id: 'financed-support',
      icon: CreditCard,
      title: 'Financed Support',
      description: 'Access comprehensive financial solutions and funding opportunities designed to fuel your growth ambitions and scale your operations efficiently.',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      shadowColor: 'shadow-amber-500/20',
      glowColor: 'shadow-amber-500/40',
      delay: 'delay-400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"
        />
        <div 
          className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen mt-[-150px] mb-[-250px] flex flex-col items-center justify-center px-6 text-center">
        <div className="transform transition-all duration-1000">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
            <span className="text-yellow-500 font-semibold tracking-wide uppercase text-sm">
              Excellence in Every Domain
            </span>
            <Sparkles className="w-8 h-8 text-yellow-500 ml-3 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-100 via-slate-900 to-slate-800 bg-clip-text text-transparent mb-8 leading-tight">
            OUR FOCUS
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Empowering businesses through strategic innovation, 
            <span className="bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent font-semibold"> global connectivity</span>, and 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold"> data-driven excellence</span>
          </p>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-100 mx-auto" />
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              const isHovered = hoveredCard === area.id;
              
              return (
                <div
                  key={area.id}
                  id={area.id}
                  className={`animate-on-scroll group relative ${area.delay} w-full`}
                  onMouseEnter={() => setHoveredCard(area.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className={`relative p-6 md:p-8 rounded-3xl ${area.bgColor} border border-white/50 backdrop-blur-sm transition-all duration-700 hover:scale-105 transform cursor-pointer ${area.shadowColor} hover:${area.glowColor} hover:shadow-2xl ${
                      isVisible[area.id] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-[50px] opacity-0'
                    } ${isHovered ? 'scale-110 -rotate-1' : ''}`}
                  >
                    {/* Animated Border Glow */}
                    <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-60 transition-all duration-700 blur-lg animate-pulse`} />
                    <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-40 transition-all duration-500`} />
                    
                    {/* Dynamic Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 animate-pulse`} />
                    <div className={`absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500`} />
                    
                    {/* Enhanced Shimmer Effect */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out`} />
                      <div className={`absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1000 ease-in-out delay-200`} />
                    </div>
                    
                    {/* Floating Particles Effect */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                      <div className={`absolute top-4 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${isHovered ? 'animate-ping' : ''}`} />
                      <div className={`absolute top-8 right-8 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-all duration-700 delay-100 ${isHovered ? 'animate-pulse' : ''}`} />
                      <div className={`absolute bottom-6 left-12 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-200 ${isHovered ? 'animate-bounce' : ''}`} />
                      <div className={`absolute bottom-12 right-6 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-90 transition-all duration-800 delay-300 ${isHovered ? 'animate-ping' : ''}`} />
                    </div>
                    
                    {/* Icon Container */}
                    <div className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg ${area.shadowColor} group-hover:${area.glowColor} group-hover:shadow-2xl`}>
                      <Icon className={`w-8 h-8 md:w-10 md:h-10 text-white transition-all duration-700 group-hover:scale-110 ${isHovered ? 'animate-bounce' : ''}`} />
                      
                      {/* Enhanced Icon Glow Effect */}
                      <div className={`absolute -inset-2 bg-gradient-to-br ${area.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-80 transition-all duration-700 animate-pulse`} />
                      <div className={`absolute -inset-1 bg-gradient-to-br ${area.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500`} />
                      
                      {/* Multiple Rotating Rings */}
                      <div className={`absolute -inset-1 rounded-2xl border-2 border-white/30 ${isHovered ? 'animate-spin' : ''} transition-all duration-500`} style={{ animationDuration: '3s' }} />
                      <div className={`absolute -inset-2 rounded-2xl border border-white/20 ${isHovered ? 'animate-spin' : ''} transition-all duration-500`} style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
                      
                      {/* Pulsing Inner Ring */}
                      <div className={`absolute inset-2 rounded-xl border border-white/40 ${isHovered ? 'animate-pulse' : ''} transition-all duration-300`} />
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 group-hover:text-slate-900 transition-all duration-500 ${isHovered ? 'transform translate-x-3 scale-105' : ''}`}>
                      {area.title}
                    </h3>
                    
                    <p className={`text-slate-600 leading-relaxed text-base md:text-lg group-hover:text-slate-700 transition-all duration-500 delay-100 ${isHovered ? 'transform translate-x-2' : ''}`}>
                      {area.description}
                    </p>

                    {/* Enhanced Hover Effect Lines */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                    <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                    
                    {/* Enhanced Corner Accents */}
                    <div className={`absolute top-4 right-4 w-4 h-4 bg-gradient-to-br ${area.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${isHovered ? 'animate-ping' : ''}`} />
                    <div className={`absolute top-6 right-6 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-all duration-600 delay-100 ${isHovered ? 'animate-pulse' : ''}`} />
                    <div className={`absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-br ${area.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 ${isHovered ? 'animate-bounce' : ''}`} />
                    <div className={`absolute bottom-6 left-6 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-90 transition-all duration-800 delay-200 ${isHovered ? 'animate-ping' : ''}`} />
                    
                    {/* Enhanced Progress Bar Effect */}
                    <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 rounded-b-3xl overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${area.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1200 ease-out`} />
                      <div className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r from-white/30 via-transparent to-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out delay-300`} />
                    </div>
                    
                    {/* Ripple Effect */}
                    <div className={`absolute inset-0 rounded-3xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ${isHovered ? 'animate-ping' : ''}`} />
                    <div className={`absolute inset-4 rounded-2xl border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 ${isHovered ? 'animate-pulse' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}