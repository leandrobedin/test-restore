import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
interface BonusItemProps {
  number: string;
  title: string;
  description: string;
  value: string;
  imageUrl: string;
  delay: number;
}
const BonusItem = ({
  number,
  title,
  description,
  value,
  imageUrl,
  delay
}: BonusItemProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: delay * 0.1
  }} viewport={{
    once: true
  }} className="glass-card p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-white px-4 py-1 text-sm font-bold bg-red-500">
        BÔNUS {number}
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
        <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-auto" />
        </div>
        
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-bold mt-2 mb-3 subtitle">{title}</h3>
          <p className="text-gray-300 mb-4 text-description">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-4">
        <div>
          <p className="text-sm text-gray-400">Normalmente Cobraríamos:</p>
          <p className="line-through text-gray-400">{value}</p>
          <p className="font-bold text-amber-300">Mas HOJE é GRÁTIS!</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center">
          <Check className="text-orange-500" size={24} />
        </div>
      </div>
    </motion.div>;
};
const EnhancedBonus = () => {
  // Função para rolar suavemente até o card de oferta
  const scrollToOffer = () => {
    const offerCardElement = document.querySelector("[data-offer-card]");
    offerCardElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const bonusItems = [{
    number: "01",
    title: "O ROTEIRO SECRETO DAS PRIMEIRAS SESSÕES",
    description: "Roteiros Prontos e Personalizáveis criados com apoio da IA para automatizar a abertura do caso, acolhimento, definição de objetivos terapêuticos e construção do vínculo terapêutico",
    value: "R$ 47,00",
    imageUrl: "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f55872099b4_ORoteiroSecretodasPrimeirasSessescomIA.jpg",
    delay: 1
  }, {
    number: "02",
    title: "KIT DE IMPLEMENTAÇÃO IMEDIATA",
    description: "Economize 5h/dia com 50 Técnicas Plug & Play + checklist diário para eliminar tarefas repetitivas",
    value: "R$ 47,00",
    imageUrl: "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5588920308_KitdeImplementaoImediata.jpg",
    delay: 2
  }, {
    number: "03",
    title: "PACOTE DE CRISE",
    description: "Protocolos Clínicos para Emergências 24h: Diretrizes de Ouro para suicídio, violência e pânico + termos de consentimento aprovados por advogados",
    value: "R$ 67,00",
    imageUrl: "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f558a0494d7_PacotedeCrise.jpg",
    delay: 3
  }, {
    number: "04",
    title: "FÁBRICA DE CONTEÚDO",
    description: "Estratégias para Lotar a Agenda em 7 Dias: 100 Modelos terapêuticos prontos para redes sociais + sequências de e-mail para reconquistar pacientes",
    value: "R$ 47,00",
    imageUrl: "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f558b1771c3_FbricadeContedo.jpg",
    delay: 4
  }, {
    number: "05",
    title: "CERTIFICAÇÃO BLACK EDITION",
    description: "Destaque-se como Especialista em IA: Selo Digital + Certificado Internacional + Perfil Destacado em Plataforma com 100k visitas/mês",
    value: "R$ 47,00",
    imageUrl: "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f55a66c2f78_CertificaoBlackEdition.jpg",
    delay: 5
  }, {
    number: "06",
    title: "MÁQUINA DE PACIENTES PREMIUM",
    description: "Cobre 15x Mais por Sessão: Descubra como psicólogos cobram R$850/hora usando IA como 'vantagem exclusiva', mesmo em cidades pequenas",
    value: "R$ 67,00",
    imageUrl: "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f55b2852575_MquinadePacientesPremiumm.jpg",
    delay: 6
  }];
  return <section className="py-16 relative" id="bonus">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="section-heading text-center mx-auto mb-4">6 BÔNUS GRÁTIS E EXCLUSIVOS PARA TURBINAR SEUS RESULTADOS</motion.h2>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="text-center text-2xl font-bold mb-12 text-amber-300">
          06 BÔNUS ESPECIAIS
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {bonusItems.map((item, index) => <BonusItem key={index} number={item.number} title={item.title} description={item.description} value={item.value} imageUrl={item.imageUrl} delay={item.delay} />)}
        </div>
        
        <div className="mt-10 text-center">
          <button onClick={scrollToOffer} className="glass-button animate-pulse-glow text-lg py-4 px-10 inline-block">
            Quero Garantir Todos os Bônus Agora!
          </button>
        </div>
      </div>
    </section>;
};
export default EnhancedBonus;