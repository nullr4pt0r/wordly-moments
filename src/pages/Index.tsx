import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WordCard } from "@/components/WordCard";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { words, availableLanguages } from "@/data/words";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(availableLanguages[0]);
  const { theme } = useTheme();

  const currentWord = words.find(word => word.language === selectedLanguage) || words[0];

  return (
    <ThemeProvider>
      <div className={`min-h-screen flex flex-col transition-colors duration-500
        ${theme === 'morning' ? 'bg-morning-secondary text-morning-text' :
          theme === 'evening' ? 'bg-evening-secondary text-evening-text' :
          'bg-night-secondary text-night-text'}`}>
        <Header
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />
        <main className="flex-1 container py-8 px-4">
          <WordCard word={currentWord} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;