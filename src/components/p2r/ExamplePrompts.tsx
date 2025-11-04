import { Button } from "@/components/ui/button";

interface ExamplePromptsProps {
  onSelectPrompt: (prompt: string) => void;
  isGenerating: boolean;
}

const examplePrompts = [
  "ห้องนอนสไตล์มินิมอล โทนสีขาว-เทา มีเตียงขนาดใหญ่",
  "ห้องนั่งเล่นสไตล์โมเดิร์น มีโซฟาสีน้ำเงิน",
  "ห้องทำงานสไตล์ญี่ปุ่น มีโต๊ะไม้และหน้าต่างใหญ่",
  "ห้องครัวสไตล์สแกนดิเนเวียน โทนสีไม้และขาว"
];

const ExamplePrompts = ({ onSelectPrompt, isGenerating }: ExamplePromptsProps) => {
  return (
    <div className="mt-8 space-y-3">
      <p className="text-sm text-muted-foreground">ลองตัวอย่างเหล่านี้:</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {examplePrompts.map((example, idx) => (
          <Button
            key={idx}
            variant="outline"
            onClick={() => onSelectPrompt(example)}
            disabled={isGenerating}
            className="text-sm hover:bg-primary/10 hover:border-primary transition-all"
          >
            {example}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ExamplePrompts;
