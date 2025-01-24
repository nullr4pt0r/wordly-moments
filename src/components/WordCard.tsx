import { Word } from "@/data/words";
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface WordCardProps {
  word: Word;
}

export const WordCard = ({ word }: WordCardProps) => {
  const { theme } = useTheme();

  return (
    <Card className={`w-full backdrop-blur-sm bg-opacity-90 shadow-xl rounded-xl transform transition-all duration-500
      ${theme === 'morning' ? 'bg-morning-primary text-morning-text shadow-morning-accent/20' :
        theme === 'evening' ? 'bg-evening-primary text-evening-text shadow-evening-accent/20' :
        'bg-night-primary text-night-text shadow-night-accent/20'}`}>
      <CardHeader className="space-y-2 p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-5xl font-bold tracking-tight">{word.word}</h2>
          <span className="text-sm px-3 py-1 rounded-full bg-opacity-20
            ${theme === 'morning' ? 'bg-morning-accent' :
              theme === 'evening' ? 'bg-evening-accent' :
              'bg-night-accent'}">
            {word.language}
          </span>
        </div>
        <p className="text-xl italic opacity-75">{word.pronunciation}</p>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Meaning</h3>
          <p className="text-lg leading-relaxed">{word.meaning}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Example</h3>
          <p className="text-lg italic leading-relaxed">{word.example}</p>
        </div>
        {word.origin && (
          <div className="space-y-2 pt-4 border-t border-current border-opacity-20">
            <h3 className="text-lg font-semibold">Origin</h3>
            <p className="text-base opacity-75">{word.origin}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};