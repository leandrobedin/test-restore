
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const FeedbackGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const feedbackImages = [
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f57437dbd0a_1.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f57b9b2ffb8_7.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f574b405a9b_2.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f57b7733ed3_8.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f57b3084990_12.png",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f7491a0fd_9.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f57cd1e9b69_14.webp",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f57cf615301_13.webp",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f7561b27c_10.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f67546e6e_1.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f68d05b0c_2.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f6bb6b563_3.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f6d15fb6b_4.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f6f0e3b34_5.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f6fd30785_6.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f71aa76da_7.jpg",
    "https://d1yei2z3i6k35z.cloudfront.net/7684568/67f5f72981f19_8.jpg"
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center mx-auto mb-12"
        >
          Veja os Prints Enviados por Nossos Clientes: Depoimentos Sinceros que Comprovam Resultados Reais!
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {feedbackImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Feedback do cliente ${index + 1}`}
                className="w-full h-auto rounded object-cover aspect-square" 
              />
            </motion.div>
          ))}
        </div>
        
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-[90vh]">
              <button 
                className="absolute -top-10 right-0 text-white p-2 rounded-full bg-fuschia-500/50 hover:bg-fuschia-500/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage} 
                alt="Feedback ampliado" 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbackGallery;
