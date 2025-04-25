
import { motion } from 'framer-motion';

const CertificateSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">CERTIFICADO PROFISSIONAL DE CONCLUSÃO INCLUSO</h3>
          
          <div className="mb-8 max-w-md mx-auto">
            <img 
              src="https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f0a40ca64_Certificado.png.webp" 
              alt="Certificado Profissional" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <p className="text-gray-300 mb-6">
            Ao finalizar o treinamento, você poderá emitir um certificado digital válido em todo o território nacional e com amparo legal.
          </p>
          <p className="text-gray-300">
            O certificado poderá ser utilizado como horas complementares na faculdade, pontuação em concursos públicos e provas de residências, mediante aceitação prevista no edital.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;
