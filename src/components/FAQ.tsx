
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'PARA QUEM SÃO ESSAS FERRAMENTAS?',
    answer: 'Estas ferramentas são destinadas a psicólogos, terapeutas, psicanalistas e outros profissionais da saúde mental que desejam otimizar sua prática, economizar tempo e ampliar seus resultados com o auxílio da inteligência artificial.'
  },
  {
    question: 'FAÇO TERAPIA, ESSE PRODUTO PODE ME AJUDAR?',
    answer: 'Este produto é direcionado para profissionais da área, mas pacientes podem se beneficiar ao compartilhar com seus terapeutas. As ferramentas ajudam os profissionais a oferecerem um tratamento mais personalizado e eficaz.'
  },
  {
    question: 'COMO RECEBEREI AO MATERIAL?',
    answer: 'Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à área de membros, onde encontrará todo o material disponível para download imediato.'
  },
  {
    question: 'POR QUANTO TEMPO TEREI ACESSO AS FERRAMENTAS?',
    answer: 'O acesso é vitalício! Você poderá acessar o material quantas vezes quiser, sem limitações de tempo ou restrições de acesso.'
  },
  {
    question: 'COMO FUNCIONA?',
    answer: 'Nosso sistema oferece comandos prontos e otimizados para utilização em diversas plataformas de IA (ChatGPT, Claude, Bard, etc.). Basta copiar e colar os comandos, com todas as instruções detalhadas nos vídeos explicativos inclusos.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-12">PERGUNTAS FREQUENTES</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
