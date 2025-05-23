import { motion } from "framer-motion";
import { HeartHandshake, CalendarClock, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
  {
    icon: HeartHandshake,
    title: "Mentoria Restaurar 🤝",
    description:
      "Acompanhamento mensal online voltado para mulheres que querem retomar o autocuidado, a autoestima e o equilíbrio emocional.",
    price: "Mentoria mensal – Consulte valores",
  },
  {
    icon: CalendarClock,
    title: "Sessão de Mentoria Pontual ☀️",
    description:
      "Encontro único de orientação para decisões importantes, sobrecarga emocional ou redirecionamento de vida.",
    price: "Sessão avulsa – Consulte valores",
  },
  {
    icon: Gift,
    title: "Brinde Digital 🌸",
    description:
      "Um material exclusivo para você iniciar sua jornada de cuidado e autoconhecimento. Em breve disponível para download aqui no site!",
    price: "Gratuito",
  },
];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-brand-lilac/10 to-brand-pink/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-elegant font-bold text-text-dark mb-4">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada serviço é pensado com carinho para acompanhar mulheres que desejam se reconectar consigo mesmas com leveza, ética e acolhimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-lilac/20 group-hover:border-brand-purple/40">
                <CardContent className="p-8">
                  <div className="text-4xl text-brand-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-brand-purple font-semibold">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
