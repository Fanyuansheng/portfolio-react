import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const useKeyboardShortcuts = () => {
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Alt + T: 切换主题
      if (event.altKey && event.key === 't') {
        setIsDark(!isDark);
      }
      
      // Alt + 数字键: 快速导航
      if (event.altKey && !isNaN(event.key)) {
        const sections = ['hero', 'about', 'projects', 'contact'];
        const index = parseInt(event.key) - 1;
        if (index >= 0 && index < sections.length) {
          const element = document.getElementById(sections[index]);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }

      // Alt + ↑: 返回顶部
      if (event.altKey && event.key === 'ArrowUp') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isDark, setIsDark]);
};

export default useKeyboardShortcuts; 