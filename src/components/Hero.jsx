import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [particles] = useState(
    Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2
    }))
  );

  const handleLearnMore = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 定义动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.2, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-transparent"
    >
      {/* 动态背景 */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* 渐变光晕 */}
        <motion.div 
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          }}
          variants={glowVariants}
          animate="animate"
        />
        
        {/* 粒子效果 */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: "-5px"
              }}
              animate={{
                y: ["0vh", "100vh"],
                opacity: [0.5, 0],
                scale: [1, 0.5]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* 额外的渐变效果 */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div 
            className="inline-block p-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-4 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
              全栈开发者
            </span>
          </motion.div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 relative"
        >
          <span className="relative">
            创造性的{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              开发者
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          专注于打造令人惊叹的数字体验，将创意转化为现实
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg shadow-purple-500/25"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(168, 85, 247, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLearnMore}
          >
            了解更多
          </motion.button>
          <motion.a
            href="https://github.com/Fanyuansheng"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-700 text-white rounded-full font-medium hover:bg-gray-800/50 transition-colors"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(31, 41, 55, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <motion.svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </motion.svg>
              GitHub
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero; 