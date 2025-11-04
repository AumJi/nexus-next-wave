import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Lightbulb, Workflow, Heart, FileText, User, RefreshCw, Layout, Brain, MessageSquare, Box, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto max-w-5xl text-center space-y-8">
          <div className="inline-block animate-fade-in-up">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              ✨ Powered by Advanced AI Technology
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            พลิกโฉมห้องของคุณ<br />ด้วยนวัตกรรม <span className="gradient-text">AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            พวกเราทำสิ่งมหัศจรรย์ด้วยการออกแบบดุลแห่งงายในตัวบริการ ทำให้การสร้างภาพซ้าลองบ้องอย่างมืออาชีพ เป็นสิ่งที่ทุกคนเข้าถึงได้ ผ่านฟังก์ชันของโปรแกรมระดับสูง
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8 text-yellow-500" />}
              iconBg="bg-yellow-50"
              title="นวัตกรรม"
              description="เทคโนโลยี AI ที่ล้ำสมัย ทำให้วิธีออกแบบห้องของคุณ"
            />
            <FeatureCard
              icon={<Workflow className="w-8 h-8 text-blue-500" />}
              iconBg="bg-blue-50"
              title="การเข้าถึง"
              description="เครื่องมือออกแบบแบบระดับมืออาชีพเพิ่งพร้อมใช้งาน สุดท้าย"
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8 text-red-500" />}
              iconBg="bg-red-50"
              title="ความอบอุ่น"
              description="มุ่งมั่นในการตอบสนองทั้งทํางและความต้องการอั้นเดียวใจคุณ"
            />
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">เป้าหมายของพวกเรา</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                เพื่อช่วยให้ผู้ใช้สามารถสร้างภาพออกแบบห้องจากบุคดวามได้อย่าง่วายในตัวเชื่อง และใช้บริการในใจบนของเช่านยังต้าแน่บบเราต้องทำคอออกแบบ
              </p>
              <p className="text-foreground leading-relaxed">
                เพื่อเชื่อมโยงพาทเพื่องาที่สร้างบันบิบต่ำก่ำทิชรอง ช่วยผู้ใช้ใช้บริการค่าบส่านและปันติองาสิเค้าสมัดผู้กผังประ้อบินยังฝับลนลงใส้ศปฝิทผิองทองต์ดสถ่าวดวา
              </p>
              <p className="text-foreground leading-relaxed">
                เพื่อพัฒนาแพลตฟอร์มที่ยับต้นแบบทำในงานรถย่อดออตสูตว์ปะใช้งาน เชื่อพาทายช่วยใครูงทอดเงิ่แถ่างทยใและะร้าบคำฟอร์มเบิอร่อนรอบแวก
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-lg transition-all">
                <CardContent className="p-0 flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-foreground">ห้องนอน</span>
                </CardContent>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <CardContent className="p-0 flex items-center space-x-3">
                  <User className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-foreground">ห้องน้อมน้</span>
                </CardContent>
              </Card>
              <Card className="p-4 bg-blue-50 hover:shadow-lg transition-all">
                <CardContent className="p-0 flex items-center space-x-3">
                  <RefreshCw className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-foreground">ห้องต้า</span>
                </CardContent>
              </Card>
              <Card className="p-4 bg-blue-100 hover:shadow-lg transition-all">
                <CardContent className="p-0 flex items-center space-x-3">
                  <Layout className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-foreground">ห้องนั่้อ</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">พบกับทีมของเรา</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            กลุ่มนักศึกษาที่มีความหลงใหลในการพาสานเทคโนโลยีปัญญาประดิษฐ์มาระวอกแบบ
            เพื่อสร้างประสมทการถ่ารทางเต่าทยใใบรูงแบบแบนดี
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TeamMemberCard name="อันจิ" id="tt68070014" />
            <TeamMemberCard name="พีพอ" id="tt68070111" />
            <TeamMemberCard name="นิวเซียร์" id="tt68070152" />
            <TeamMemberCard name="ไฟว์" id="tt68070166" />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
            แรงบันดาลใจของ Prompt2Room
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            ขั้นเคล่ือนด้วยยเทคโนโลยีเป็นนี้ยบทุงนระดับสูง (AI) ที่ล้ำสมัย แพลตฟอร์มของเราชายารายและ "ข้อความคำสัง" ให้กลายเป็น "ภาพห้องเสมือนจริง" ได้อย่างปฏิบัติในเบ้ทันใหแค่ทันนี่ และสามารถย่าง้บงทำงของเปนระดเองม
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all">
                <CardContent className="p-0 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Advanced Neural Networks</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      เทคโนโลยี่ Deep Learning ที่มีวิจักข้ามายื ส้ธยลอบประ็ระบบของยพบ็คใช้พาทผื่อบึ้าทยทตง์ยต่่มงะนะลองยบุผึกชบันบอระงกว้าง
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <CardContent className="p-0 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Natural Language Processing (NLP)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      ระบบประธ่ามทามกี่เถาใจือได้มองและกำหนองแนวทรงของผู้ใช้และเนองให้กเดคับดท่องใน้บบที่บ้างนาจึงชาง
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <CardContent className="p-0 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Box className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3D Rendering Engine</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      เอนยบบนอพาพอบเปลีออบเมือนริดดตงตี่มไทพกิเอ้าะองตี้องตงเอาะ เอา และเก็บเสมีพผัดมืยนจริง
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="p-8 relative overflow-hidden border-2 border-primary/30 hover-lift bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <CardContent className="p-0 relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Palette className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">AI Design Process</h3>
                </div>
                <ol className="space-y-4 text-foreground">
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-primary flex-shrink-0">1.</span>
                    <span>บรระยาสิ่กำลังวางทข้อความ</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-primary flex-shrink-0">2.</span>
                    <span>สำง็สดีมและประทร่องช่วงทา</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-primary flex-shrink-0">3.</span>
                    <span>แสะงภาพสามมิใดิดับจริง</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-primary flex-shrink-0">4.</span>
                    <span>ปรับเคร่วใดันแบบเรียดไทม</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 IT23, KMITL</p>
          <p className="text-sm text-muted-foreground flex items-center space-x-2">
            <span>Made by</span>
            <span className="font-medium">Aum.ji | PeePong | Newchang | Fovy</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
