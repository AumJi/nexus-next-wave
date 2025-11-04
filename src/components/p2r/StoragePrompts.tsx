import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Image } from "lucide-react";

export interface PromptRow {
  id: number;
  prompt?: string;
  image_url?: string;
  created_at?: string;
}

interface StoragePromptsProps {
  rows: PromptRow[];
  onDelete: (id: number) => void;
}

const StoragePrompts = ({ rows, onDelete }: StoragePromptsProps) => {
  if (!rows || rows.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          ห้องที่คุณสร้างไว้
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rows.map((row) => (
            <Card key={row.id} className="group overflow-hidden hover-lift">
              <CardContent className="p-0">
                {row.image_url ? (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={row.image_url}
                      alt={row.prompt || "Generated room"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ) : (
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Image className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                
                <div className="p-4 space-y-3">
                  {row.prompt && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {row.prompt}
                    </p>
                  )}
                  
                  {row.created_at && (
                    <p className="text-xs text-muted-foreground">
                      {new Date(row.created_at).toLocaleDateString('th-TH', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  )}
                  
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(row.id)}
                    className="w-full"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    ลบ
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoragePrompts;
