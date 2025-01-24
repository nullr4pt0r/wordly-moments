import { availableLanguages } from "@/data/words";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const Header = ({ selectedLanguage, onLanguageChange }: HeaderProps) => {
  return (
    <header className="w-full p-6 flex justify-between items-center animate-fade-in bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg mb-8">
      <h1 className="text-3xl font-serif tracking-wide bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Word of the Moment
      </h1>
      <Select value={selectedLanguage} onValueChange={onLanguageChange}>
        <SelectTrigger className="w-[180px] bg-white/50 backdrop-blur-sm border-purple-200 hover:border-purple-300 transition-colors">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent className="bg-white/95 backdrop-blur-sm border-purple-100">
          {availableLanguages.map((language) => (
            <SelectItem 
              key={language} 
              value={language}
              className="hover:bg-purple-50 focus:bg-purple-50 cursor-pointer"
            >
              {language}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </header>
  );
};