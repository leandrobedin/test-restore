
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto p-8 border-fuschia-500/30 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-fuschia-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-fuschia-500/10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0">
              <div className="h-24 w-24 rounded-full bg-fuschia-500/20 flex items-center justify-center">
                <Shield className="text-fuschia-500" size={40} />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Garantia de 30 Dias <span className="text-fuschia-500">RISCO ZERO!</span></h3>
              <p className="text-gray-300 mb-4">O código de defesa consumidor (Art. 49) garante 7 dias para solicitar reembolso em caso de insatisfação com o produto.</p>
              <p className="text-white font-semibold mb-4">NÓS CONFIAMOS TANTO NO PODER DESSA REVOLUÇÃO QUE OFERECEMOS UMA GARANTIA TOTAL DE 30 DIAS.</p>
              <p className="text-gray-300">Se, após seguir todos os passos, você não sentir uma mudança significativa na sua prática terapêutica, devolveremos 100% do seu investimento. Sua transformação está garantida!</p>
              
              <div className="mt-6 bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-gray-300">O nível de satisfação com este material é maior que 99%. Então as chances de você ficar insatisfeito são bem pequenas. Afinal esse material já foi testado e aprovado por mais de 54 mil profissionais da saúde mental.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
