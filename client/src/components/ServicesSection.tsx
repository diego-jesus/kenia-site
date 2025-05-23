import { motion } from "framer-motion";
import { Bath, Heart, Palette, Users, ShoppingBag, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Bath,
      title: "Consultoria de Imagem",
      description: "Descubra seu estilo único e aprenda a se vestir de forma que reflita sua personalidade e realce sua beleza natural.",
      price: "A partir de R$ 150",
    },
    {
      icon: Heart,
      title: "Coaching de Autoestima",
      description: "Sessões focadas em fortalecer sua confiança interior e desenvolver uma relação saudável com sua autoimagem.",
      price: "A partir de R$ 200",
    },
    {
      icon: Palette,
      title: "Coloração Pessoal",
      description: "Identifique as cores que mais favorecem seu tom de pele e aprenda a criar looks harmoniosos e radiantes.",
      price: "A partir de R$ 180",
    },
    {
      icon: Users,
      title: "Workshops em Grupo",
      description: "Experiências coletivas de empoderamento e troca, criando uma rede de apoio entre mulheres.",
      price: "A partir de R$ 80",
    },
    {
      icon: ShoppingBag,
      title: "Personal Shopper",
      description: "Acompanhamento personalizado para renovar seu guarda-roupa de forma consciente e alinhada ao seu estilo.",
      price: "A partir de R$ 250",
    },
    {
      icon: Video,
      title: "Consultoria Online",
      description: "Atendimento remoto personalizado para clientes que preferem o conforto de casa ou estão distantes.",
      price: "A partir de R$ 120",
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
            Cada serviço é pensado com carinho para atender suas necessidades
            únicas de forma personalizada e acolhedora.
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
