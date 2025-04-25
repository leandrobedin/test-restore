
import { motion } from 'framer-motion';
import { Activity, Brain, CheckCircle, Clock, ClipboardList, UserPlus } from 'lucide-react';

const benefitItems = [
  {
    icon: <ClipboardList className="text-fuschia-500" size={32} />,
    title: "REALIZAÇÃO DE AVALIAÇÕES INICIAIS",
    description: "Elaboração de questionários de avaliação inicial, fornecendo perguntas relevantes e estruturadas para obter informações importantes sobre os pacientes."
  },
  {
    icon: <Brain className="text-fuschia-500" size={32} />,
    title: "ANÁLISE DE HISTÓRICO E DIAGNÓSTICO",
    description: "Análise e diagnóstico preliminares, fornecendo insights baseados em padrões e informações sobre possíveis transtornos ou condições específicas."
  },
  {
    icon: <CheckCircle className="text-fuschia-500" size={32} />,
    title: "DESENVOLVIMENTO DE PLANOS DE TRATAMENTOS",
    description: "Crie planos de tratamento personalizados, sugerindo abordagens terapêuticas eficazes com base nas necessidades individuais de cada paciente."
  },
  {
    icon: <Activity className="text-fuschia-500" size={32} />,
    title: "ACOMPANHAMENTO DO PROGRESSO DO PACIENTE",
    description: "Auxilio na coleta e análise de dados de progresso para insights sobre a evolução do paciente ao longo do tempo, permitindo ajustes no plano de tratamento."
  },
  {
    icon: <UserPlus className="text-fuschia-500" size={32} />,
    title: "EXPLORAÇÃO DE TÉCNICAS TERAPÊUTICAS",
    description: "Explore diversas técnicas terapêuticas, recebendo informações detalhadas sobre sua aplicação, benefícios e limitações, ampliando seu repertório."
  },
  {
    icon: <Clock className="text-fuschia-500" size={32} />,
    title: "OTIMIZAÇÃO DE TEMPO",
    description: "Reduza sua carga administrativa em até 70%, permitindo que você foque mais tempo no que realmente importa: o cuidado com seus pacientes."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Benefits = () => {
  return (
    <section className="py-16 relative" id="benefits">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center mx-auto mb-4"
        >
          Veja como nossa ferramenta irá te ajudar
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Nossa tecnologia oferece suporte completo para transformar sua prática terapêutica e maximizar seus resultados.
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefitItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-6"
              variants={itemVariants}
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
