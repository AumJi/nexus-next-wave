import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Lightbulb, Workflow, Heart, FileText, User, RefreshCw, Layout, Brain, MessageSquare, Box, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            พลิกโฉมห้องของคุณด้วยนวัตกรรม <span className="text-primary">AI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            พวกเราทำสิ่งมหัศจรรย์ด้วยการออกแบบดุลแห่งงายในตัวบริการทำให้การสร้างภาพซ้าลองบ้องอย่างมืออาชีพเป็นสิ่งที่ทุกคนเข้าถึงได้ ผ่านฟังก์ชันของโปรแกรมระดับสูง
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
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
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
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
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

            <Card className="p-8 bg-gradient-to-br from-background to-card border-2 border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-6">
                  <Palette className="w-8 h-8 text-primary" />
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
