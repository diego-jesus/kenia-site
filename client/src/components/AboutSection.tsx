import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Clientes atendidas" },
    { number: "10+", label: "Anos de experiência" },
    { number: "98%", label: "Satisfação" },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-brand-lilac/30">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  alt="Kênia Ruth - Consultora de Autoestima"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-brand-pink to-brand-purple rounded-full opacity-20"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-elegant font-bold text-text-dark mb-6">
              Quem sou eu
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Olá, eu sou a Kênia! Há mais de 10 anos dedico minha vida a
                ajudar mulheres a redescobrirem sua autoestima e confiança. Como
                mãe e mulher, entendo os desafios únicos que enfrentamos em
                diferentes fases da vida.
              </p>
              <p>
                Minha missão é criar um espaço seguro onde cada cliente se sinta
                acolhida, compreendida e empoderada para sua jornada de
                transformação pessoal. Acredito que toda mulher merece se sentir
                radiante e confiante.
              </p>
              <p>
                Através de uma abordagem sensível e personalizada, trabalho não
                apenas a beleza externa, mas principalmente o fortalecimento da
                autoestima e do amor próprio.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-brand-purple">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
