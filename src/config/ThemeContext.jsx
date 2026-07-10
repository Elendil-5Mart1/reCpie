
import { createContext, useState, useEffect } from 'react';

//* Crée un contexte React pour partager l'état du thème avec tous les composants
export const ThemeContext = createContext();

//* Composant Provider qui encapsule l'application et fournit l'accès au thème
export const ThemeProvider = ({ children }) => {

  //* État pour gérer si le thème sombre est activé
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
