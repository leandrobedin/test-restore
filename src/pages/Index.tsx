
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Check, ChevronDown, MessageCircle } from 'lucide-react';
import Benefits from '@/components/Benefits';
import CountdownTimer from '@/components/CountdownTimer';
import Guarantee from '@/components/Guarantee';
import TopicsSection from '@/components/TopicsSection';
import VideoSalesLetter from '@/components/VideoSalesLetter';
import VideoTestimonials from '@/components/VideoTestimonials';
import EnhancedBonus from '@/components/EnhancedBonus';
import PlannerSection from '@/components/PlannerSection';
import CertificateSection from '@/components/CertificateSection';
import EnhancedFAQ from '@/components/EnhancedFAQ';
import WhatsAppSupport from '@/components/WhatsAppSupport';
import InsightsSection from '@/components/InsightsSection';
import FeedbackGallery from '@/components/FeedbackGallery';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const offerCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToOffer = () => {
    offerCardRef.current?.scrollIntoView({
      behavior: 'auto'
    });
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <section ref={heroRef} className="min-h-screen relative flex items-center py-20 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-fuschia-700/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuschia-500/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuschia-500/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="glass-card max-w-md mx-auto mb-4 p-4 text-center">
            <p className="text-lg font-semibold mb-4 text-description">Tempo Restante da Oferta:</p>
            <CountdownTimer />
            <p className="text-sm text-gray-400 mt-2">Atenção: Finalize o pagamento e garanta seu desconto!</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight mt-8">
                Seu Consultório: Uma Máquina de Resultados Além do Tradicional
                <span className="text-cyan-400 block mt-2">
                  IA que Transforma Cansaço em Faturamento em Dias
                </span>
              </h1>
              
              <p className="text-gray-300 mb-8 text-description text-lg font-medium md:text-xl">
                Com um único sistema, não só atingi R$ 100.000 de faturamento mensal, como também simplifiquei minha rotina, cortando 70% das tarefas administrativas chatas.
              </p>
              
              <div className="lg:hidden mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl transform -rotate-2"></div>
                  <img src="https://1000comandos.descomplicandovidas.com.br/wp-content/webp-express/webp-images/uploads/2023/08/mockup-1000-min.png.webp" alt="Mockup do produto" className="relative z-10 rounded-xl shadow-2xl shadow-orange-500/20 max-w-full h-auto" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl"></div>
                </div>
              </div>
              
              <div className="glass-card p-5 mb-8 border-orange-500/30">
                <p className="font-semibold mb-2 text-description">ATENÇÃO:</p>
                <p className="text-gray-300 text-description">
                  Isso não é uma ameaça à sua profissão, é um <span className="text-cyan-400 font-semibold">superpoder</span> para que você faça o que nenhuma IA jamais fará, mudar histórias, salvar vidas e ser lembrado como um profissional da saúde mental que fez a diferença. ❤️
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <button onClick={scrollToOffer} className="glass-button w-full md:w-auto text-lg">
                  SIM, QUERO REVOLUCIONAR MINHA CARREIRA!
                </button>
                <p className="text-sm text-gray-400 mt-2 text-center">Seja você iniciante ou profissional experiente.</p>
                
                <div className="flex justify-center mt-8">
                  <ArrowDown onClick={scrollToOffer} className="text-orange-500 cursor-pointer" size={32} />
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl transform -rotate-2"></div>
                <img src="https://1000comandos.descomplicandovidas.com.br/wp-content/webp-express/webp-images/uploads/2023/08/mockup-1000-min.png.webp" alt="Mockup do produto" className="relative z-10 rounded-xl shadow-2xl shadow-orange-500/20 max-w-full h-auto" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <VideoSalesLetter />
      
      <section className="relative py-[40px]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mx-auto mb-8">
            Apresentamos a solução inovadora
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            A ciência da psicologia unida à eficiência da Inteligência Artificial, permitindo que você:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Amplie sua capacidade de atendimento",
              }, 
              {
                title: "Aprofunde a conexão com seus pacientes",
              }, 
              {
                title: "Destaque-se no mercado com abordagens modernas",
              }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 text-center flex flex-col items-center hover:translate-y-[-5px] transition-all duration-300">
                <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4 bg-orange-300">
                  <Check className="text-fuschia-500" size={24} />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fuschia-500/5 opacity-50 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-heading text-center mx-auto mb-12">
            Você vai receber:
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Repertório Abrangente de Comandos",
                description: "Alinhados com as mais recentes técnicas e metodologias baseadas em evidências, como Terapia Cognitivo-Comportamental, Terapia Focada na Solução, Terapia Sistêmica e muito mais."
              }, 
              {
                title: "Aulas em Vídeos",
                description: "Aprenda passo a passo como utilizar os comandos e extrair os melhores resultados do ChatGPT em sua prática clínica."
              }, 
              {
                title: "Checklist de Planejamento",
                description: "Organize e potencialize suas sessões com um guia estruturado que facilita o planejamento e o acompanhamento do progresso de seus pacientes."
              }, 
              {
                title: "Inteligência Artificial na Saúde Mental",
                description: "Material completo para todos os profissionais da saúde mental que desejam dominar a IA na prática terapêutica."
              }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 flex gap-4">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center bg-orange-300">
                    <Check className="text-fuschia-500" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <TopicsSection />
      
      <VideoTestimonials />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading mx-auto">O que nossos profissionais estão dizendo</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Dra. Mariana S.",
                role: "Psicóloga Clínica",
                text: "Incrível como o material otimizou minha prática! Economizo horas na preparação das sessões e consigo atender mais pacientes com qualidade superior.",
                stars: 5
              }, 
              {
                name: "Dr. Carlos M.",
                role: "Psicoterapeuta",
                text: "Os comandos são revolucionários. Minha produtividade aumentou drasticamente e meus pacientes perceberam a diferença na qualidade das intervenções.",
                stars: 5
              }, 
              {
                name: "Patrícia L.",
                role: "Psicanalista",
                text: "Inicialmente tive receio de integrar a IA na minha prática, mas este material me mostrou como fazer isso de maneira ética e eficaz. Resultado: triplicou minha renda!",
                stars: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => <Check key={i} size={16} className="text-yellow-400" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-fuschia-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <InsightsSection />
      
      <FeedbackGallery />
      
      <Benefits />
      
      <EnhancedBonus />
      
      <PlannerSection />
      
      <CertificateSection />
      
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-50 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={offerCardRef} 
            data-offer-card 
            className="glass-card max-w-4xl mx-auto p-8 text-center border-cyan-500/30 shadow-xl shadow-orange-500/10"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2 subtitle">Tudo isso deveria custar mais de:</h3>
            <p className="text-3xl font-bold line-through mb-1 text-gray-400">R$ 197,00</p>
            <p className="text-sm text-gray-400 mb-6">*Valor promocional somente nessa oferta!</p>
            
            <div className="mb-8 bg-black/20 p-4 rounded-lg">
              <h4 className="text-lg mb-4 subtitle">Tempo Restante da Oferta:</h4>
              <CountdownTimer />
              <p className="text-sm text-gray-400 mt-2">Atenção: Finalize o pagamento e garanta seu desconto!</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 subtitle">Mas somente hoje, você poderá levar tudo por apenas:</h3>
            <div className="mb-6 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 p-6 rounded-lg">
              <p className="text-gray-300 text-xl">De <span className="line-through">R$ 197,00</span> por apenas</p>
              <p className="font-bold text-green-500 mb-2 mx-0 py-0 my-[20px] text-5xl">R$ 35,00</p>
              <p className="text-gray-300 text-lg">Pagamento Único, Acesso Vitalício e Envio Imediato!</p>
            </div>
            
            <a 
              href="https://go.pepper.com.br/5i5bw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-button w-full md:w-auto mb-8 text-lg px-10 inline-block bg-orange-500 hover:bg-orange-600 scale-110 transform transition-all py-[16px]"
            >
              QUERO GARANTIR MEU ACESSO VITALÍCIO!
            </a>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                "Funciona nas Versões Gratuitas e Pagas de Todas as IAs", 
                "Acesso Vitalício e Imediato com Pagamento Único de R$35", 
                "Garantia Total de 30 Dias ou Seu Dinheiro de Volta", 
                "88% de Desconto + 6 Bônus Gratuitos (Só Hoje!)", 
                "Privacidade 100% Garantida com Dados Criptografados", 
                "Certificado Reconhecido Nacionalmente"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="text-cyan-400 shrink-0 mt-1" size={18} />
                  <span className="text-left text-gray-300 text-description text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-400">Atenção: Após encerramento da promoção, o valor retornará para R$ 197,00.</p>
          </div>
        </div>
      </section>
      
      <Guarantee />
      
      <WhatsAppSupport />
      
      <EnhancedFAQ />
      
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              COPYRIGHT 2025 | IA para o Sucesso Profissional: Transforme Sua Carreira – TODOS OS DIREITOS RESERVADOS 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
