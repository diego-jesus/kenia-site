import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Levarei você sempre comigo, no coração e na minha caminhada. A vida sempre dá um jeito de aproximar quem deixa marcas bonitas. Obrigada por tudo, de verdade!",
      name: "Depoimento real 01",
      role: "Cliente da Mentoria Restaurar",
    },
    {
      text: "Você não é apenas uma excelente profissional, mas uma pessoa incrível. Seu jeito único de tornar tudo mais leve fez toda a diferença para mim.",
      name: "Depoimento real 02",
      role: "Cliente de acompanhamento individual",
    },
    {
      text: "Obrigada por tanto cuidado, atenção e ajuda comigo, meu esposo e nosso filho! Cada conversa abre meus olhos e fortalece minha alma. Deus te abençoe!",
      name: "Depoimento real 03",
      role: "Família acompanhada por Kênia Ruth",
    },
    {
      text: "Nunca imaginei que uma mentoria pudesse me tocar tão profundamente. Encontrei escuta, acolhimento e uma nova versão de mim mesma.",
      name: "Depoimento real 04",
      role: "Cliente da Jornada Restaurar",
    },
    {
      text: "Você foi luz num momento de escuridão. Obrigada por segurar minha mão com firmeza e me lembrar do meu valor.",
      name: "Depoimento real 05",
      role: "Atendimento online individual",
    },
    {
      text: "Me emocionei em várias sessões. A cada encontro, sentia um pedaço de mim sendo restaurado. Profissional com alma!",
      name: "Depoimento real 06",
      role: "Mulher que se reconectou com sua essência",
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
            Cada depoimento é um reflexo do cuidado e dedicação que coloco em cada atendimento.
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
                    <div className="w-12 h-12 rounded-full bg-brand-lilac flex items-center justify-center text-white">
                      <MessageCircle size={20} />
                    </div>
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
