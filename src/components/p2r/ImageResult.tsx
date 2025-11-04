import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2, Heart } from "lucide-react";

interface ProductItem {
  category?: string;
  url?: string;
  item_name?: string;
}

interface ImageResultProps {
  imageUrl: string;
  prompt: string;
  products: ProductItem[];
}

const ImageResult = ({ imageUrl, prompt, products }: ImageResultProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'p2r-generated-room.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 py-12">
      <Card className="overflow-hidden border-2 border-primary/20 hover-lift">
        <CardContent className="p-0">
          <img
            src={imageUrl}
            alt={prompt}
            className="w-full h-auto object-cover"
          />
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          onClick={handleDownload}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Download className="w-4 h-4 mr-2" />
          ดาวน์โหลด
        </Button>
        <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
          <Share2 className="w-4 h-4 mr-2" />
          แชร์
        </Button>
        <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
          <Heart className="w-4 h-4 mr-2" />
          บันทึก
        </Button>
      </div>

      {prompt && (
        <Card className="bg-secondary/50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-2">คำสั่งที่ใช้:</h3>
            <p className="text-muted-foreground">{prompt}</p>
          </CardContent>
        </Card>
      )}

      {products && products.length > 0 && (
        <Card className="bg-secondary/50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-4">สินค้าแนะนำ:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product, idx) => (
                <a
                  key={idx}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="hover-lift overflow-hidden">
                    <CardContent className="p-3 text-center">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {product.item_name || product.category}
                      </p>
                      {product.category && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {product.category}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ImageResult;
