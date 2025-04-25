
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const PlannerSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const script = document.createElement('script');
      script.src = "https://scripts.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f4082572e72f435bd98e04/player.js";
      script.async = true;
      script.id = "scr_67f4082572e72f435bd98e04";
      document.body.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-fuschia-500/10 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card max-w-5xl mx-auto overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Além da IA e Bônus, Você Também Receberá um Planner Exclusivo e Poderoso
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://d1yei2z3i6k35z.cloudfront.net/7684568/67f192ab37e4f_planner.png" 
                  alt="Planner Exclusivo" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <p className="text-gray-300 mb-6">
                  Este planner revolucionário foi projetado para turbinar seus resultados com a IA. Com ele, você planeja estratégias com precisão, organiza conteúdos de forma ágil e domina seu fluxo de trabalho como nunca antes. Normalmente vendido por R$ 197,00, ele já está incluso na sua compra, GRÁTIS!
                </p>
                
                <div ref={videoRef}>
                  <div id="vid_67f4082572e72f435bd98e04" style={{ position: 'relative', width: '100%', padding: '58.44155844155844% 0 0' }}>
                    <img 
                      id="thumb_67f4082572e72f435bd98e04" 
                      src="https://images.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f4082572e72f435bd98e04/thumbnail.jpg" 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                      alt="thumbnail"
                    />
                    <div 
                      id="backdrop_67f4082572e72f435bd98e04" 
                      style={{ backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlannerSection;
