import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WordCard } from "@/components/WordCard";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { words, availableLanguages, getWordByTimeAndLocation } from "@/data/words";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(availableLanguages[0]);
  const { theme } = useTheme();
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    // Get current time of day
    const hour = new Date().getHours();
    let timeOfDay: 'morning' | 'evening' | 'night';
    
    if (hour >= 5 && hour < 12) {
      timeOfDay = 'morning';
    } else if (hour >= 12 && hour < 18) {
      timeOfDay = 'evening';
    } else {
      timeOfDay = 'night';
    }

    // Get word based on time and selected language
    const word = getWordByTimeAndLocation(timeOfDay, selectedLanguage);
    setCurrentWord(word);
  }, [selectedLanguage]);

  return (
    <ThemeProvider>
      <div className={`min-h-screen flex flex-col transition-colors duration-500
        ${theme === 'morning' ? 'bg-gradient-to-br from-morning-primary to-morning-secondary' :
          theme === 'evening' ? 'bg-gradient-to-br from-evening-primary to-evening-secondary' :
          'bg-gradient-to-br from-night-primary to-night-secondary'}`}>
        <Header
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />
        <main className="flex-1 container mx-auto py-12 px-4 flex items-center justify-center">
          <div className="w-full max-w-3xl">
            <WordCard word={currentWord} />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;