import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* 背景动画 */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 80%, rgba(37,99,235,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(168,85,247,0.05) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            关于
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              {" "}我
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              我是一名充满热情的全栈开发者，专注于创建优雅且高效的数字解决方案。
              <span className="block mt-4 text-white">
                "编码不仅是工作，更是一种创造的艺术。"
              </span>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              拥有多年的开发经验，精通现代Web技术栈，包括React、Node.js和云服务等。
            </p>
            <div className="flex gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-500/10 rounded-lg border border-blue-500/20"
              >
                <h4 className="font-medium text-blue-400 mb-1">项目</h4>
                <p className="text-2xl font-bold text-white">10+</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-purple-500/10 rounded-lg border border-purple-500/20"
              >
                <h4 className="font-medium text-purple-400 mb-1">经验</h4>
                <p className="text-2xl font-bold text-white">3年</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              技术栈
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <SkillCard title="前端" skills={['React', 'Vue', 'TypeScript']} />
              <SkillCard title="后端" skills={['Node.js', 'Python', 'Java']} />
              <SkillCard title="数据库" skills={['MongoDB', 'MySQL', 'Redis']} />
              <SkillCard title="其他" skills={['Docker', 'AWS', 'Git']} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/20"
  >
    <h4 className="font-medium mb-3 text-white">{title}</h4>
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div key={skill} className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            index === 0 ? 'bg-blue-500' :
            index === 1 ? 'bg-green-500' :
            'bg-purple-500'
          }`} />
          <p className="text-gray-400">{skill}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default About; 