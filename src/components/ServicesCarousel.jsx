import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const services = [
  {
    title: 'Desarrollo Web',
    icon: 'src/assets/nave.png ',
    subtitle: 'Diseño moderno y adaptado',
    description: 'Creamos experiencias digitales únicas adaptadas a tu negocio.',
    button: 'Explorar',
  },
  {
    title: 'API Integrations',
    icon: 'src/assets/mundo.png',
    subtitle: 'Conectamos tus sistemas',
    description: 'Optimizamos tu flujo de trabajo con integraciones personalizadas.',
    button: 'Conectar',
  },
  {
    title: 'Consultoría de IT',
    icon: 'src/assets/pc.png',
    subtitle: 'Estrategia y eficiencia',
    description: 'Mejoramos tu infraestructura tecnológica con las mejores prácticas.',
    button: 'Asesoría',
  },
];

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % services.length);
  const prev = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <div className="relative w-full max-w-md mx-auto py-12 ">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className=" text-center rounded-3xl shadow-lg p-8 bg-blue-950"
        >
          <img src={services[index].icon} alt={services[index].title} className="w-auto h-24 mx-auto mb-4 p-4" />
          <h3 className="text-xl font-bold text-gray-100">{services[index].title}</h3>
          <p className="text-gray-300">{services[index].subtitle}</p>
          <p className="text-sm text-gray-400 mt-2 mb-4">{services[index].description}</p>
          <button className="ring-1 ring-white text-white px-6 py-2 rounded-full hover:bg-[#1b2d4f] transition">
            {services[index].button}
          </button>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-4">
        <button onClick={prev} className="text-2xl text-gray-600 hover:text-gray-800">⬅</button>
        <button onClick={next} className="text-2xl text-gray-600 hover:text-gray-800">➡</button>
      </div>
    </div>
  );
}
