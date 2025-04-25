import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
const topics = ["Gerenciamento de Ansiedade", "Redução de Estresse", "Apoio à Depressão", "Aconselhamento de Perda e Luto", "Relacionamento e Comunicação", "Autoestima e Confiança", "Regulação Emocional", "Suporte à Recuperação de Vícios", "Tratamento de Traumas", "Higiene do Sono e Insônia", "Gerenciamento da Raiva", "Estabelecimento de Metas", "Equilíbrio Vida-Trabalho", "Técnicas Comportamentais Cognitivas", "Parentalidade e Dinâmica Familiar", "Habilidades Sociais e Networking", "LGBTQ+ Saúde Mental", "Prevenção e Recuperação de Burnout", "Planejamento de Negócios", "Marketing e Branding", "Acolhimento e Avaliação de Clientes", "Ética e Confidencialidade", "Consulta Online"];
const TopicsSection = () => {
  return <section className="py-16 relative">
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
      }} className="section-heading text-center mx-auto mb-4">
          Exemplos de Comandos em Ação
        </motion.h2>
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
      }} className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Veja alguns dos temas que serão abordados com nossos comandos especializados:
        </motion.p>
        
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map((topic, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.3,
          delay: index * 0.03
        }} viewport={{
          once: true
        }} className="glass-card p-4 flex items-center">
              <CheckCircle className="text-fuschia-500 mr-2 shrink-0" size={18} />
              <span className="text-xl">{topic}</span>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default TopicsSection;