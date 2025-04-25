
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const EnhancedFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: 'Quem pode se beneficiar deste treinamento?',
      answer: 'Este treinamento foi desenvolvido especialmente para profissionais da saúde mental, como psicólogos, terapeutas, psicanalistas e psicoterapeutas, que desejam integrar a Inteligência Artificial (IA) em sua prática clínica. Se você quer melhorar sua eficiência, atrair mais pacientes ou aumentar seus ganhos, este conteúdo foi feito para você!'
    },
    {
      question: 'Preciso ter conhecimento prévio em tecnologia ou IA para usar este material?',
      answer: 'Não! Este treinamento foi criado para ser acessível até para quem nunca teve contato com IA. Você aprenderá tudo do zero, com explicações claras e práticas, além de receber suporte e materiais complementares para garantir seu sucesso.'
    },
    {
      question: 'Quais ferramentas de IA são abordadas no curso?',
      answer: 'Abordamos o uso de ferramentas populares como ChatGPT, Claude, Bard, Gemini, entre outras. Além disso, fornecemos comandos específicos e personalizados para aplicar diretamente na sua prática clínica. As técnicas ensinadas funcionam tanto nas versões gratuitas quanto nas pagas dessas plataformas.'
    },
    {
      question: 'Receberei certificado após concluir o treinamento?',
      answer: 'Sim! Ao finalizar o treinamento, você poderá emitir um certificado digital válido em todo o território nacional, com amparo legal. Ele pode ser utilizado para horas complementares na faculdade, pontuação em concursos públicos ou provas de residência médica.'
    },
    {
      question: 'Qual é o investimento necessário para adquirir este treinamento?',
      answer: 'O valor original do treinamento é R$ 297,00, mas estamos oferecendo uma condição especial por tempo limitado: você pode adquirir tudo por apenas R$ 35,00! Além disso, você receberá 6 bônus exclusivos que valem mais de R$ 300,00. Esta é uma oportunidade única para transformar sua carreira sem comprometer seu orçamento.'
    },
    {
      question: 'Como receberei o acesso ao conteúdo?',
      answer: 'Assim que o pagamento for confirmado, você receberá um e-mail com instruções para acessar o conteúdo. Tudo será disponibilizado em uma plataforma online exclusiva, onde você poderá estudar no seu ritmo, com acesso vitalício.'
    },
    {
      question: 'Há alguma garantia de satisfação?',
      answer: 'Sim! Oferecemos uma garantia incondicional de 30 dias. Se, dentro desse período, você não estiver completamente satisfeito com o conteúdo, devolveremos 100% do seu investimento, sem questionamentos. Sua transformação está garantida!'
    },
    {
      question: 'É seguro usar IA na prática clínica?',
      answer: 'Absolutamente! Nosso treinamento foi cuidadosamente desenvolvido para garantir que você utilize a IA de forma ética, segura e responsável. Incluímos módulos específicos sobre ética, confidencialidade e boas práticas, além de orientações para proteger os dados dos seus pacientes.'
    },
    {
      question: 'Terei suporte durante o treinamento?',
      answer: 'Sim! Oferecemos suporte 24 horas para tirar todas as suas dúvidas. Basta enviar um e-mail para sac.atendimentoprofissional@gmail.com, e nossa equipe estará à disposição para ajudar. Além disso, você terá acesso a um grupo exclusivo de networking com outros profissionais e especialistas.'
    },
    {
      question: 'Quanto tempo vou levar para ver resultados com este treinamento?',
      answer: 'Você começará a aplicar os conhecimentos desde o primeiro módulo. Alguns profissionais relatam resultados imediatos, como economia de tempo e organização das sessões. Em poucas semanas, é possível observar ganhos financeiros significativos e maior eficiência na prática clínica.'
    },
    {
      question: 'Os bônus realmente são grátis? Eles têm validade?',
      answer: 'Sim, os 6 bônus exclusivos são inteiramente grátis para quem adquirir o treinamento hoje! No entanto, essa oferta é por tempo limitado e válida apenas para as próximas [50] vagas. Após isso, os bônus podem ser retirados ou vendidos separadamente.'
    },
    {
      question: 'O conteúdo será atualizado conforme surgirem novas tecnologias ou tendências?',
      answer: 'Sim! Oferecemos acesso vitalício ao treinamento, incluindo todas as atualizações futuras. Isso garante que você sempre estará à frente no uso da IA aplicada à saúde mental.'
    }
  ];

  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center mx-auto mb-4"
        >
          FAQ - Tire Suas Dúvidas e Ganhe Confiança Para Dar o Próximo Passo!
        </motion.h2>
        
        <div className="max-w-3xl mx-auto space-y-4 mt-12">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full p-5 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <ChevronDown 
                  className={`text-fuschia-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`px-5 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedFAQ;
