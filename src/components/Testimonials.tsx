
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dra. Mariana S.",
    role: "Psicóloga Clínica",
    text: "Incrível como o material otimizou minha prática! Economizo horas na preparação das sessões e consigo atender mais pacientes com qualidade superior.",
    stars: 5
  },
  {
    name: "Dr. Carlos M.",
    role: "Psicoterapeuta",
    text: "Os comandos são revolucionários. Minha produtividade aumentou drasticamente e meus pacientes perceberam a diferença na qualidade das intervenções.",
    stars: 5
  },
  {
    name: "Patrícia L.",
    role: "Psicanalista",
    text: "Inicialmente tive receio de integrar a IA na minha prática, mas este material me mostrou como fazer isso de maneira ética e eficaz. Resultado: triplicou minha renda!",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 relative" id="testimonials">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-fuschia-500/5 to-transparent opacity-50 pointer-events-none"
        style={{ 
          backgroundSize: "20px 20px",
          backgroundImage: `radial-gradient(rgba(233, 50, 109, 0.3) 1px, transparent 1px)`
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center mx-auto mb-12"
        >
          O que nossos profissionais estão dizendo
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-fuschia-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
