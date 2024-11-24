export const smoothScroll = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navHeight = 64; // 导航栏高度
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}; 