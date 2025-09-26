import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { ParallaxContainer } from '../components/ParallaxContainer';
import { ScrollReveal } from '../components/ScrollReveal';

export const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-500 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-200/20 rounded-full blur-xl" />
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
                Under <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Construction</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                This page is currently under construction. Please check back soon for our innovative product lineup.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.2}>
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Product {item}</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive product details will be featured here, including 
                      specifications, features, and pricing information.
                    </p>
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};