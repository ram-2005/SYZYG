import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { ParallaxContainer } from '../components/ParallaxContainer';
import { ScrollReveal } from '../components/ScrollReveal';

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-500 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-200/20 rounded-full blur-xl" />
        </ParallaxContainer>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Under <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Construction</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                This page is currently under construction. Please check back soon for our comprehensive service offerings.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Service {item}</h3>
                  <p className="text-gray-600">
                    Detailed service information will be added here. Each service will have 
                    its own dedicated section with features and benefits.
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};