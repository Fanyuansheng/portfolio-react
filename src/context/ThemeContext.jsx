import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      // 尝试从 localStorage 读取主题设置
      const savedTheme = localStorage.getItem('theme');
      // 如果存在且是有效的 JSON，则解析它
      return savedTheme ? JSON.parse(savedTheme) : true;
    } catch (error) {
      // 如果出现任何错误，返回默认值
      console.warn('Error reading theme from localStorage:', error);
      return true;
    }
  });

  useEffect(() => {
    try {
      // 保存主题设置到 localStorage
      localStorage.setItem('theme', JSON.stringify(isDark));
      
      // 更新 document.documentElement 的 class
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 