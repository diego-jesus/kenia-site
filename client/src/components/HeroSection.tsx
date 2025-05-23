import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleScheduling = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta com a Kênia Ruth.", "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-brand-pink/20 via-brand-lilac/20 to-brand-purple/20 pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-cursive font-bold text-text-dark mb-6"
        >
          Transformando vidas com{" "}
          <span className="text-brand-purple">autoestima</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Bem-vinda ao meu espaço de cuidado e transformação. Aqui, cada mulher
          encontra sua força interior e redescobre sua beleza única.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={handleScheduling}
            size="lg"
            className="bg-gradient-to-r from-brand-purple to-brand-pink text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agende Agora
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
