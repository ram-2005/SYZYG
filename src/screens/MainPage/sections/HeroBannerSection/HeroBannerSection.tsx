// Removed border-white/30 from relevant elements

import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxContainer } from '../../../../components/ParallaxContainer';
import { ScrollReveal } from '../../../../components/ScrollReveal';

export const HeroBannerSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen ">
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

      {/* Animated Floating Elements with Different Parallax Speeds */}
      <ParallaxContainer speed={0.3}>
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 sm:w-4 h-2 sm:h-4 bg-white/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ParallaxContainer>
      
      <ParallaxContainer speed={0.5}>
        <motion.div
          className="absolute top-1/3 left-1/5 w-1 sm:w-2 h-1 sm:h-2 bg-blue-300/50 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </ParallaxContainer>

      <ParallaxContainer speed={0.7}>
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-1.5 sm:w-3 h-1.5 sm:h-3 bg-purple-300/40 rounded-full"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </ParallaxContainer>

      {/* Geometric Shapes with Parallax */}
      <ParallaxContainer speed={0.35}>
        <motion.div
          className="absolute top-1/5 left-1/6 w-3 sm:w-6 h-3 sm:h-6 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ParallaxContainer>

      <ParallaxContainer speed={0.45}>
        <motion.div
          className="absolute bottom-1/5 right-1/6 w-4 sm:w-8 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400/30 to-transparent"
          animate={{
            rotate: [0, 360],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </ParallaxContainer>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col   min-h-screen ">
        {/* Logo Animation with Parallax */}
        <ParallaxContainer speed={0.1}>
          <ScrollReveal>
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
            >
              <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto  rounded-full flex items-center justify-center shadow-2xl">
                <img 
                 src="/logo1.png" 
                 alt="Logo"
                 
                />
              </div>
            </motion.div>
          </ScrollReveal>
        </ParallaxContainer>

        {/* Main Heading with Enhanced Parallax */}
        <ParallaxContainer speed={0.15}>
          <ScrollReveal delay={0.3}>
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Revolutionize <br />
              how you build.
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-2 text-left text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl">
                We empower your team to create <br/>custom solutions for unique challenges.
              </span>
            </motion.h1>
          </ScrollReveal>
        </ParallaxContainer>

        {/* Subtitle with Parallax */}
        <ParallaxContainer speed={0.25}>
          <ScrollReveal delay={0.5}>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-3xl leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Experience cutting-edge technology with beautiful design and seamless functionality
            </motion.p>
          </ScrollReveal>
        </ParallaxContainer>

        {/* CTA Buttons with Parallax */}
        <ParallaxContainer speed={0.2}>
          <ScrollReveal delay={0.7}>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm sm:text-base" // removed border-white/30
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </ScrollReveal>
        </ParallaxContainer>

        {/* Enhanced Scroll Indicator with Parallax */}
        <ParallaxContainer speed={0.1}>
          <motion.div
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 rounded-full flex justify-center"> {/* removed border-white/30 */}
              <motion.div
                className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </ParallaxContainer>
      </div>

      {/* Additional Decorative Elements with Complex Parallax */}
      <ParallaxContainer speed={0.8} direction="right">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute top-1/6 left-1/12 w-px h-8 sm:h-16 bg-gradient-to-b from-white/20 to-transparent"
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-1/6 right-1/12 w-px h-6 sm:h-12 bg-gradient-to-t from-white/20 to-transparent"
            animate={{
              scaleY: [1, 2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>
      </ParallaxContainer>

      {/* Particle-like Elements */}
      <ParallaxContainer speed={0.9}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-0.5 h-0.5 bg-white/40 rounded-full`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </ParallaxContainer>
    </section>
  );
};