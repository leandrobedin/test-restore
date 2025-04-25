
import { motion } from 'framer-motion';

const InsightsSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fuschia-500/5 opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center mx-auto mb-8"
        >
          Insights em Tempo Real para Atendimentos Mais Inteligentes
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Durante e fora das sessões, a Inteligência Artificial auxilia psicólogos e psiquiatras oferecendo insights personalizados à sua abordagem terapêutica
        </motion.p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 max-w-xl glass-card p-4"
          >
            <img 
              src="https://crecimientodorado.com/wp-content/uploads/2025/04/psigpt-conversa-1.gif" 
              alt="IA em Atendimento - Exemplo 1" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 max-w-xl glass-card p-4"
          >
            <img 
              src="https://crecimientodorado.com/wp-content/uploads/2025/04/psigpt-conversa-2.gif" 
              alt="IA em Atendimento - Exemplo 2" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
