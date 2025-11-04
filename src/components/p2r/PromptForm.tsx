import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

interface PromptFormProps {
  onSubmit: (prompt: string) => void;
  isGenerating: boolean;
  selectedPrompt: string;
}

const PromptForm = ({ onSubmit, isGenerating, selectedPrompt }: PromptFormProps) => {
  const [prompt, setPrompt] = useState(selectedPrompt || "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isGenerating) {
      onSubmit(prompt.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="บรรยายห้องในฝันของคุณ... เช่น 'ห้องนอนสไตล์มินิมอล โทนสีขาว มีต้นไม้ประดับ'"
        className="min-h-[120px] text-lg resize-none border-2 border-primary/20 focus:border-primary transition-colors"
        disabled={isGenerating}
      />
      
      <Button
        type="submit"
        disabled={isGenerating || !prompt.trim()}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            กำลังสร้างภาพ...
          </>
        ) : (
          "สร้างห้องของคุณ"
        )}
      </Button>
    </form>
  );
};

export default PromptForm;
