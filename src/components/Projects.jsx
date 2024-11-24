import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: "PHP-Background-management-system",
      description: "用PHP和layui搭建的学生后台管理系统",
      tech: ["PHP", "Layui", "MySQL"],
      stars: 58,
      url: "https://github.com/Fanyuansheng/PHP-Background-management-system",
      icon: "🎓"
    },
    {
      name: "Vue-demo",
      description: "学习Vue的笔记",
      tech: ["Vue", "JavaScript"],
      stars: 1,
      url: "https://github.com/Fanyuansheng/Vue-demo",
      icon: "📝"
    },
    {
      name: "personal-website",
      description: "基于 React 和 Docusaurus 构建的个人网站",
      tech: ["React", "Docusaurus", "Node.js"],
      url: "https://github.com/Fanyuansheng/personal-website",
      icon: "🌐"
    },
    {
      name: "studyApp",
      description: "学情App - 学习情况追踪与管理应用",
      tech: ["JavaScript", "Mobile"],
      url: "https://github.com/Fanyuansheng/studyApp",
      icon: "📱"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          项目
          <span className="bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
            {" "}展示
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto rounded-full" />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#1a1f35]/50 backdrop-blur-sm rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="h-48 bg-gradient-to-r from-sky-500/10 to-purple-500/10 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-5xl transform transition-transform duration-300 group-hover:scale-110"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.icon}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              
              <div className="p-6 relative z-10">
                <motion.h3 
                  className="text-xl font-semibold mb-2 text-white group-hover:text-sky-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.name}
                </motion.h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 0.3)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.stars && (
                    <motion.span 
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm flex items-center gap-1"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
                    >
                      <motion.svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.85 1.416 8.265L12 18.69l-7.415 3.897 1.416-8.265-6.001-5.85 8.332-1.21L12 .587z" />
                      </motion.svg>
                      {project.stars}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects; 