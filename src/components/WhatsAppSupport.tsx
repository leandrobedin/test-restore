import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
const WhatsAppSupport = () => {
  // Função para rolar suavemente até o card de oferta
  const scrollToOffer = () => {
    const offerCardElement = document.querySelector("[data-offer-card]");
    offerCardElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="glass-card max-w-3xl mx-auto p-8 text-center">
          <h3 className="text-2xl font-bold mb-6 subtitle">Tire Suas Dúvidas Diretamente pelo WhatsApp</h3>
          
          <p className="text-gray-300 mb-8 text-description">
            Tem alguma dúvida que não encontrou resposta em nosso FAQ? Nossa equipe está pronta para te ajudar, basta clicar no botão abaixo.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://api.whatsapp.com/send?phone=5519989321226&text=Ol%C3%A1,%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20comandos%20do%20ChatGPT%20para%20terapeutas" target="_blank" rel="noopener noreferrer" className="glass-button inline-flex items-center gap-2 px-8 py-4">
              <MessageCircle size={20} />
              <span>Falar com um Especialista</span>
            </a>
            
            <button onClick={scrollToOffer} className="glass-button inline-flex items-center gap-2 px-8 py-4 bg-orange-500/90 hover:bg-orange-600 text-center">
              <span className="text-center">Garantir Agora</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default WhatsAppSupport;