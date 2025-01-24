import { Word } from "@/data/words";
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface WordCardProps {
  word: Word;
}

export const WordCard = ({ word }: WordCardProps) => {
  const { theme } = useTheme();

  return (
    <Card className={`w-full max-w-2xl mx-auto animate-scale-in shadow-lg
      ${theme === 'morning' ? 'bg-morning-primary text-morning-text' :
        theme === 'evening' ? 'bg-evening-primary text-evening-text' :
        'bg-night-primary text-night-text'}`}>
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start">
          <h2 className="text-4xl font-bold">{word.word}</h2>
          <span className="text-sm opacity-75">{word.language}</span>
        </div>
        <p className="text-lg italic">{word.pronunciation}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Meaning</h3>
          <p>{word.meaning}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Example</h3>
          <p className="italic">{word.example}</p>
        </div>
        {word.origin && (
          <div>
            <h3 className="font-semibold mb-2">Origin</h3>
            <p className="text-sm">{word.origin}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};