import { useTheme } from "@/contexts/ThemeContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full p-4 text-center animate-fade-in">
      <p className="text-sm opacity-80">
        © {currentYear} • Crafted with curiosity and wonder
      </p>
    </footer>
  );
};