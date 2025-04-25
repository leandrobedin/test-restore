
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface BonusItemProps {
  number: string;
  title: string;
  description: string;
  value: string;
  delay: number;
}

const BonusItem = ({ number, title, description, value, delay }: BonusItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 bg-fuschia-500 text-white px-4 py-1 text-sm font-bold">
        BÔNUS {number}
      </div>
      
      <h3 className="text-xl font-bold mt-6 mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-4">
        <div>
          <p className="text-sm text-gray-400">Normalmente Cobraríamos:</p>
          <p className="line-through text-gray-400">{value}</p>
          <p className="text-fuschia-500 font-bold">Mas HOJE é GRÁTIS!</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-fuschia-500/20 flex items-center justify-center">
          <Check className="text-fuschia-500" size={24} />
        </div>
      </div>
    </motion.div>
  );
};

const Bonus = () => {
  const bonusItems = [
    {
      number: "01",
      title: "Otimize seu Tempo e Crie Sessões Incríveis",
      description: "Domine o Planejamento Terapêutico com este Guia Prático. Chega de perder horas planejando. Aprenda a criar sessões eficazes em minutos.",
      value: "R$ 47,00",
      delay: 1
    },
    {
      number: "02",
      title: "Domine a IA com Segurança (Aula Prática)",
      description: "Curso Completo sobre Comandos Éticos para Psicólogos e Terapeutas. Aprenda a usar o ChatGPT de forma ética e responsável.",
      value: "R$ 47,00",
      delay: 2
    },
    {
      number: "03",
      title: "E-book Exclusivo sobre IA para se Manter à Frente",
      description: "Descubra as tendências mais promissoras da Inteligência Artificial na área da saúde mental e prepare-se para o futuro da sua profissão.",
      value: "R$ 67,00",
      delay: 3
    },
    {
      number: "04",
      title: "Crie Relatórios Terapêuticos Impecáveis em Tempo Recorde",
      description: "Pare de perder horas com relatórios complexos e otimize sua rotina com um modelo pronto e eficiente, desenvolvido para psicólogos e terapeutas.",
      value: "R$ 47,00",
      delay: 4
    },
    {
      number: "05",
      title: "Transforme seus Atendimentos com Frases Terapêuticas Poderosas",
      description: "Aprenda a se comunicar de forma mais eficaz e gere resultados ainda melhores para seus pacientes com essa seleção exclusiva de frases impactantes.",
      value: "R$ 47,00",
      delay: 5
    },
    {
      number: "06",
      title: "Lotando a Agenda",
      description: "Masterclass Exclusiva de Marketing para Psicólogos. Descubra as estratégias mais eficazes para atrair mais pacientes e aumentar sua visibilidade online.",
      value: "R$ 67,00",
      delay: 6
    }
  ];

  return (
    <section className="py-16 relative" id="bonus">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center mx-auto mb-4"
        >
          Finalize sua Inscrição Hoje e Receba GRÁTIS:
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-fuschia-500 mb-12"
        >
          06 BÔNUS ESPECIAIS
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusItems.map((item, index) => (
            <BonusItem 
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              value={item.value}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonus;
