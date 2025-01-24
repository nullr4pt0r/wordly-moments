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
    <header className="w-full p-4 flex justify-between items-center animate-fade-in">
      <h1 className="text-2xl font-bold">Word of the Moment</h1>
      <Select value={selectedLanguage} onValueChange={onLanguageChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {availableLanguages.map((language) => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </header>
  );
};