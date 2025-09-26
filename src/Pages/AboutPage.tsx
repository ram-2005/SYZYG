import { useEffect, useRef, useState } from 'react';
import { ParallaxContainer } from "../components/ParallaxContainer";
import { Navbar } from '../components/Navbar';
import { Footer } from "../screens/MainPage/sections/Footer/Footer";
import { ChevronDown, Target, Users, Briefcase, Lightbulb, Award, ArrowRight } from 'lucide-react';

export const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: '-50px 0px'
    });

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const setSectionRef = (key: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[key] = el;
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-500 overflow-hidden">
    <Navbar />
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
      {/* Hero Section with Parallax */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
          }}
        />
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl h-40 font-bold mb-5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeInUp">
            About Sygzy
          </h1>
          <p className="text-xl md:text-2xl  mb-8 text-gray-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Transforming ideas into digital excellence
          </p>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-blue-400" />
        </div>
      </div>

      {/* Vision Section */}
      <div 
        ref={setSectionRef('vision')}
        id="vision"
        className="relative py-20"
      >
        <div className="absolute inset-0 " />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.vision ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-blue-500 mr-4" />
                <h2 className="text-5xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-xl text-white mb-8 leading-relaxed">
                To be the catalyst that transforms ambitious ideas into digital realities, 
                empowering businesses to thrive in an ever-evolving technological landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-white">Leading innovation in digital transformation</p>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-white">Creating sustainable technology solutions</p>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-white">Building the future of digital experiences</p>
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.vision ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3 scale-105 opacity-20" />
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
                      <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-500 mb-2">50+</div>
                      <div className="text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-pink-500 mb-2">5</div>
                      <div className="text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-indigo-500 mb-2">99%</div>
                      <div className="text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div 
        ref={setSectionRef('who-we-are')}
        id="who-we-are"
        className="relative py-20 "
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-blue-400 mr-4" />
              <h2 className="text-5xl font-bold text-white">Who We Are</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate team of innovators, creators, and problem-solvers dedicated 
              to pushing the boundaries of what's possible in digital technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovators",
                description: "Always exploring cutting-edge technologies and methodologies to deliver exceptional results.",
                icon: "🚀",
                delay: "0s"
              },
              {
                title: "Collaborators",
                description: "Working closely with our clients as partners to understand and exceed their expectations.",
                icon: "🤝",
                delay: "0.2s"
              },
              {
                title: "Perfectionists",
                description: "Committed to delivering flawless solutions with attention to every detail.",
                icon: "✨",
                delay: "0.4s"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-1000 ${isVisible['who-we-are'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: item.delay }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative p-8 text-center">
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section 
        ref={setSectionRef('what-we-do')}
        id="what-we-do"
        className="relative py-20 "
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-16">
            <Briefcase className="w-12 h-12 text-purple-500 mr-6" />
            <h2 className="text-5xl font-bold text-gray-900">What We Do</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className={`transform transition-all duration-1000 ${isVisible['what-we-do'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="space-y-8">
                {[
                  {
                    title: "Web Development",
                    description: "Creating responsive, high-performance websites and web applications using cutting-edge technologies.",
                    color: "blue"
                  },
                  {
                    title: "Mobile Applications",
                    description: "Developing native and cross-platform mobile apps that engage users and drive business growth.",
                    color: "purple"
                  },
                  {
                    title: "Digital Strategy",
                    description: "Crafting comprehensive digital strategies that align technology with business objectives.",
                    color: "pink"
                  },
                  {
                    title: "UI/UX Design",
                    description: "Designing intuitive and beautiful user interfaces that enhance user experience and engagement.",
                    color: "indigo"
                  }
                ].map((service, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start">
                      <div className={`w-4 h-4 bg-${service.color}-500 rounded-full mt-2 mr-6 group-hover:scale-150 transition-transform duration-300`} />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-500 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-100 text-lg leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-500 ${isVisible['what-we-do'] ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform -rotate-2 scale-105" />
                <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                  <div className="space-y-4">
                    {['Discovery & Planning', 'Design & Prototyping', 'Development & Testing', 'Launch & Support'].map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-bold flex items-center justify-center mr-4">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section 
        ref={setSectionRef('philosophy')}
        id="philosophy"
        className="relative py-20 "
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-12">
            <Lightbulb className="w-12 h-12 text-yellow-400 mr-4" />
            <h2 className="text-5xl font-bold text-white">Our Philosophy</h2>
          </div>

          <div className={`transform transition-all duration-1000 ${isVisible.philosophy ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <blockquote className="text-3xl md:text-4xl font-light text-white mb-8 leading-relaxed">
              "Technology should be a bridge that connects human potential with infinite possibilities, 
              not a barrier that limits imagination."
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { value: "Innovation", description: "Constantly pushing boundaries" },
                { value: "Quality", description: "Excellence in every detail" },
                { value: "Partnership", description: "Growing together with clients" }
              ].map((principle, index) => (
                <div 
                  key={index}
                  className={`transform transition-all duration-1000 delay-${index * 200} ${isVisible.philosophy ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300" />
                    <div className="relative p-8">
                      <h3 className="text-2xl font-bold text-white mb-3">{principle.value}</h3>
                      <p className="text-gray-300">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sygzy Section */}
      <section 
        ref={setSectionRef('why-choose')}
        id="why-choose"
        className="relative py-20"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-orange-500 mr-4" />
              <h2 className="text-5xl font-bold text-gray-900">Why Choose Sygzy?</h2>
            </div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We don't just build software; we craft digital experiences that drive real business value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible['why-choose'] ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="space-y-8">
                {[
                  {
                    title: "Proven Expertise",
                    description: "Years of experience delivering successful projects across various industries and technologies.",
                    icon: "🎯"
                  },
                  {
                    title: "Agile Approach",
                    description: "Flexible methodology that adapts to your needs and ensures rapid, iterative progress.",
                    icon: "⚡"
                  },
                  {
                    title: "Full-Stack Solutions",
                    description: "End-to-end development capabilities from concept to deployment and beyond.",
                    icon: "🔧"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Dedicated support and maintenance to ensure your solution continues to evolve and excel.",
                    icon: "🛡️"
                  }
                ].map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-4xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-gray-100 text-lg leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-500 ${isVisible['why-choose'] ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl transform rotate-2 scale-105 opacity-90" />
                <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ready to Get Started?</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Free Consultation</span>
                      <span className="text-green-500 font-bold">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Project Planning</span>
                      <span className="text-green-500 font-bold">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Transparent Pricing</span>
                      <span className="text-green-500 font-bold">✓</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Let's Build Something Amazing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
x      </section>
       <section className="relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
        <Footer/>
       </section>
    </section>
  );
};
