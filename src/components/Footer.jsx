import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 border-t border-gray-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-bold mb-4">YourName</h3>
            <p className="text-gray-400">
              专注于创建令人惊叹的数字体验
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {['首页', '关于', '项目', '联系'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-400">
              <li>邮箱：your.email@example.com</li>
              <li>地址：城市, 国家</li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center text-gray-400 mt-8 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} YourName. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 