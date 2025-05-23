import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "A Kênia transformou completamente minha relação comigo mesma. Hoje me sinto mais confiante e radiante. O trabalho dela vai muito além da aparência, toca a alma.",
      name: "Ana Paula",
      role: "Empresária, 42 anos",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      text: "Depois dos filhos, eu havia perdido minha identidade. A Kênia me ajudou a me reencontrar e hoje me sinto linda e poderosa novamente. Recomendo de coração!",
      name: "Mariana Silva",
      role: "Mãe de 3, 38 anos",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      text: "O atendimento da Kênia é diferenciado. Ela realmente se importa e entende nossas necessidades. Saí renovada e com uma autoestima lá em cima!",
      name: "Luciana Costa",
      role: "Advogada, 45 anos",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-brand-pink/10 to-brand-lilac/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-elegant font-bold text-text-dark mb-4">
            O que dizem minhas clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada depoimento é um reflexo do cuidado e dedicação que coloco em
            cada atendimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-brand-lilac/20">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-lilac"
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-text-dark">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
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
