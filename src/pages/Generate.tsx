import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

import Header from "@/components/p2r/Header";
import PromptForm from "@/components/p2r/PromptForm";
import ExamplePrompts from "@/components/p2r/ExamplePrompts";
import ImageResult from "@/components/p2r/ImageResult";
import StoragePrompts from "@/components/p2r/StoragePrompts";
import WhyChooseSection from "@/components/p2r/WhyChooseSection";
import Footer from "@/components/p2r/Footer";

type ProductItem = {
  category?: string;
  url?: string;
  item_name?: string;
};

type PromptRow = {
  id: number;
  prompt?: string;
  image_url?: string;
  created_at?: string;
};

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";

const Generate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [rows, setRows] = useState<PromptRow[]>([]);

  // Mock data for testing - replace with real API calls
  const refreshPrompts = useCallback(async () => {
    try {
      // TODO: Replace with real Supabase/API call
      // const data = await listStoragePrompts();
      // setRows(data);
      setRows([]);
    } catch (e) {
      toast({
        title: "Error",
        description: "ไม่สามารถโหลดรายการได้",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    refreshPrompts();
  }, [refreshPrompts]);

  const handleSubmit = async (prompt: string) => {
    setIsGenerating(true);
    setImage(null);
    setProducts([]);
    setSelectedPrompt(prompt);

    try {
      // TODO: Check authentication
      // const session = await checkAuth();
      // if (!session) return navigate("/login");

      const res = await fetch(`${API_BASE}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          txt: prompt,
          user_id: null, // TODO: Get from auth
        }),
      });

      if (!res.ok) {
        throw new Error("สร้างภาพไม่สำเร็จ");
      }

      const json = await res.json();
      const row = Array.isArray(json.data) ? json.data[0] : null;

      if (!row) {
        throw new Error("ไม่พบข้อมูลจากเซิร์ฟเวอร์");
      }

      if (row.image_url) {
        setImage(row.image_url as string);
      }

      if (Array.isArray(row.categories)) {
        setProducts(row.categories as ProductItem[]);
      }

      await refreshPrompts();

      toast({
        title: "สำเร็จ!",
        description: "สร้างภาพห้องเสร็จแล้ว",
      });
    } catch (e) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: e instanceof Error ? e.message : "เกิดข้อผิดพลาดระหว่างสร้างภาพ",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectPrompt = (p: string) => setSelectedPrompt(p);

  const handleDelete = async (id: number) => {
    try {
      // TODO: Implement delete
      // await deletePrompt(id);
      await refreshPrompts();
      
      toast({
        title: "ลบสำเร็จ",
        description: "ลบภาพออกจากคอลเลกชันแล้ว",
      });
    } catch (e) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถลบได้",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {image ? (
        <div className="pt-24 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="w-full max-w-7xl">
            <ImageResult
              imageUrl={image}
              prompt={selectedPrompt}
              products={products}
            />
          </div>
        </div>
      ) : (
        <div className="min-h-screen pt-24 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="w-full max-w-4xl text-center space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
                ออกแบบห้องในฝันของคุณได้ทันที
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                ด้วย <span className="gradient-text">AI</span> ของเรา
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                พิมพ์สไตล์ของคุณแล้วปล่อยให้ Prompt2Room ทำให้มันมีชีวิตชีวา
              </p>
            </div>

            <PromptForm
              onSubmit={handleSubmit}
              isGenerating={isGenerating}
              selectedPrompt={selectedPrompt}
            />

            {!isGenerating && (
              <ExamplePrompts
                onSelectPrompt={handleSelectPrompt}
                isGenerating={isGenerating}
              />
            )}
          </div>
        </div>
      )}

      <StoragePrompts rows={rows} onDelete={handleDelete} />
      <WhyChooseSection />
      <Footer />
    </main>
  );
};

export default Generate;
