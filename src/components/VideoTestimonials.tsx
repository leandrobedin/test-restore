
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface VideoTestimonial {
  text: string;
  videoId: string;
  videoCode: string;
}

const VideoTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const currentScriptRef = useRef<HTMLScriptElement | null>(null);
  
  const testimonials: VideoTestimonial[] = [
    {
      text: "Amo minha profissão, mas agora também amo meu extrato, a IA me permitiu viver da psicologia SEM virar escrava",
      videoId: "67f5d5a78da11e4709837306",
      videoCode: ""
    },
    {
      text: "Montar uma clínica parecia um quebra-cabeça. Descobri que faltava apenas uma peça, a IA como minha sócia silenciosa",
      videoId: "67f5d5c684b331355d01d338",
      videoCode: ""
    },
    {
      text: "Pedir demissão foi meu ato de coragem e hoje meu consultório rende 15x mais que meu antigo salário e sou dona do meu tempo",
      videoId: "67f5d5b88da11e4709837310",
      videoCode: ""
    },
    {
      text: "Vai levar uma década, disseram. Em 7 dias, meu consultório já pagava minhas contas e meus sonhos",
      videoId: "67f5d5ada611335688094a29",
      videoCode: ""
    },
    {
      text: "Nunca postei um reel na vida. Mesmo assim, minha agenda vive lotada. O segredo está nos pacientes que se tornam minha propaganda",
      videoId: "67f5d5b2b5168d67247533cf",
      videoCode: ""
    },
    {
      text: "Ela decidiu rescindir seu contrato CLT para abraçar o consultório em tempo integral e essa escolha mudou sua vida para sempre.",
      videoId: "67f5e0e0a803bf4d059f9b1e",
      videoCode: ""
    }
  ];

  useEffect(() => {
    if (videoContainerRef.current) {
      // Clear any existing video content
      videoContainerRef.current.innerHTML = '';

      // Create the video container
      const videoId = testimonials[currentIndex].videoId;

      // Create div for the video
      const videoContainer = document.createElement('div');
      videoContainer.id = `vid_${videoId}`;
      videoContainer.style.position = 'relative';
      videoContainer.style.width = '100%';
      videoContainer.style.padding = '56.25% 0 0';

      // Create thumbnail image
      const thumbnail = document.createElement('img');
      thumbnail.id = `thumb_${videoId}`;
      thumbnail.src = `https://images.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/${videoId}/thumbnail.jpg`;
      thumbnail.style.position = 'absolute';
      thumbnail.style.top = '0';
      thumbnail.style.left = '0';
      thumbnail.style.width = '100%';
      thumbnail.style.height = '100%';
      thumbnail.style.objectFit = 'cover';
      thumbnail.style.display = 'block';
      thumbnail.alt = 'thumbnail';

      // Create backdrop div
      const backdrop = document.createElement('div');
      backdrop.id = `backdrop_${videoId}`;
      backdrop.style.backdropFilter = 'blur(5px)';
      backdrop.style.position = 'absolute';
      backdrop.style.top = '0';
      backdrop.style.height = '100%';
      backdrop.style.width = '100%';

      // Append elements
      videoContainer.appendChild(thumbnail);
      videoContainer.appendChild(backdrop);
      videoContainerRef.current.appendChild(videoContainer);

      // Remove any existing script
      if (currentScriptRef.current && currentScriptRef.current.parentNode) {
        currentScriptRef.current.parentNode.removeChild(currentScriptRef.current);
        currentScriptRef.current = null;
      }

      // Create and append script
      const script = document.createElement('script');
      script.src = `https://scripts.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/${videoId}/player.js`;
      script.async = true;
      script.id = `scr_${videoId}`;
      document.body.appendChild(script);
      currentScriptRef.current = script;

      return () => {
        // Clean up script on unmount or index change
        if (currentScriptRef.current && currentScriptRef.current.parentNode) {
          currentScriptRef.current.parentNode.removeChild(currentScriptRef.current);
          currentScriptRef.current = null;
        }
      };
    }
  }, [currentIndex, testimonials]);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Function to scroll to the offer card
  const scrollToOffer = () => {
    const offerCardElement = document.querySelector("[data-offer-card]");
    offerCardElement?.scrollIntoView({
      behavior: 'auto'
    });
  };

  return (
    <section className="py-16 relative" id="video-testimonials">
      <div className="absolute inset-0 bg-gradient-to-b from-fuschia-500/5 to-transparent opacity-50 pointer-events-none" style={{
        backgroundSize: "20px 20px",
        backgroundImage: `radial-gradient(rgba(233, 50, 109, 0.3) 1px, transparent 1px)`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center mx-auto mb-4"
        >
          Depoimentos que Inspiram: Histórias de Superação, Sucesso e Realização Profissional!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-xl font-medium text-gray-300 mb-12 text-description"
        >
          Sem Filtros, Sem Roteiro...
        </motion.p>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 mb-8">
            <p className="text-xl mb-8 text-center text-description text-slate-50 font-medium">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div ref={videoContainerRef} className="video-container"></div>
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={prevTestimonial} 
              className="glass-button p-3 rounded-full" 
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentIndex(index)} 
                  className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? 'bg-orange-500 scale-125' : 'bg-orange-500/30'}`} 
                  aria-label={`Go to testimonial ${index + 1}`} 
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial} 
              className="glass-button p-3 rounded-full" 
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
