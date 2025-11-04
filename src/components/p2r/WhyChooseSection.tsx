import { Sparkles, Zap, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "AI ที่ทรงพลัง",
    description: "เทคโนโลยี AI ล้ำสมัยที่สร้างภาพห้องที่สมจริง",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Zap,
    title: "สร้างได้ทันที",
    description: "ได้ผลลัพธ์ภายในไม่กี่วินาที ไม่ต้องรอนาน",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Shield,
    title: "ปลอดภัยและเชื่อถือได้",
    description: "ข้อมูลของคุณปลอดภัย มีระบบรักษาความปลอดภัยสูง",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Heart,
    title: "ใช้งานง่าย",
    description: "ออกแบบมาให้ใช้งานง่าย เหมาะกับทุกคน",
    color: "text-red-500",
    bgColor: "bg-red-50"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ทำไมต้องเลือก <span className="gradient-text">Prompt2Room</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            แพลตฟอร์มที่ทำให้การออกแบบห้องเป็นเรื่องง่ายและสนุก
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="group hover-lift border-2 border-transparent hover:border-primary/20"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
