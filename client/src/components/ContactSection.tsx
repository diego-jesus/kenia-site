import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Instagram, Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/restaurarfilhosdagraca@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entrarei em contato em breve. Obrigada!",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou use WhatsApp para contato direto.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp 🤝",
      subtitle: "(31) 8703-7264",
      description: "Resposta rápida e acolhedora",
      href: "https://wa.me/553187037264?text=Olá! Gostaria de agendar uma consulta com a Kênia Ruth.",
      bg: "bg-gradient-to-r from-brand-lilac/30 to-brand-pink/30",
      iconColor: "bg-green-500",
      textColor: "text-green-600",
    },
    {
      icon: Instagram,
      title: "Instagram 📸",
      subtitle: "@keniaruthsampaio",
      description: "Dicas diárias de autoestima",
      href: "https://instagram.com/keniaruthsampaio",
      bg: "bg-gradient-to-r from-brand-pink/30 to-brand-purple/30",
      iconColor: "bg-gradient-to-r from-pink-500 to-purple-500",
      textColor: "text-purple-600",
    },
    {
      icon: Mail,
      title: "E-mail 📧",
      subtitle: "restaurarfilhosdagraca@gmail.com",
      description: "Para agendamentos e parcerias",
      href: "mailto:restaurarfilhosdagraca@gmail.com",
      bg: "bg-gradient-to-r from-brand-purple/20 to-brand-lilac/20",
      iconColor: "bg-blue-500",
      textColor: "text-blue-600",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-elegant font-bold text-text-dark mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estou aqui para te acolher e iniciarmos juntas sua jornada de transformação e autoestima.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h3 className="text-2xl font-semibold text-text-dark mb-8">
              Formas de Contato
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center p-6 ${method.bg} rounded-xl hover:shadow-lg transition-all duration-300 group w-full`}
                >
                  <div className={`${method.iconColor} text-white p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <method.icon size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-text-dark">{method.title}</div>
                    <div className="text-gray-600">{method.subtitle}</div>
                    <div className={`text-sm ${method.textColor}`}>{method.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-brand-pink/10 to-brand-lilac/10 rounded-xl w-full"
            >
              <h4 className="font-semibold text-text-dark mb-2 flex items-center">
                <Clock size={20} className="mr-2" />
                Horário de Atendimento
              </h4>
              <div className="text-gray-600 space-y-1">
                <div>Segunda a Sexta: 9h às 18h</div>
                <div>Sábado: 9h às 14h</div>
                <div>Domingo: Apenas emergências</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h3 className="text-2xl font-semibold text-text-dark mb-8">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="Nova mensagem do site - Kênia Ruth" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}/obrigada`} />

              <div>
                <label htmlFor="nome" className="block text-text-dark font-medium mb-2">Nome completo</label>
                <Input type="text" name="nome" id="nome" required className="w-full bg-pink-100 border-brand-lilac/30 focus:ring-brand-purple/50 focus:border-brand-purple shadow-sm" />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-dark font-medium mb-2">E-mail</label>
                <Input type="email" name="email" id="email" required className="w-full bg-pink-100 border-brand-lilac/30 focus:ring-brand-purple/50 focus:border-brand-purple shadow-sm" />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-text-dark font-medium mb-2">Telefone/WhatsApp</label>
                <Input type="tel" name="telefone" id="telefone" className="w-full bg-pink-100 border-brand-lilac/30 focus:ring-brand-purple/50 focus:border-brand-purple shadow-sm" />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-text-dark font-medium mb-2">Mensagem</label>
                <Textarea name="mensagem" id="mensagem" rows={4} placeholder="Conte-me um pouco sobre suas expectativas e como posso te ajudar..." className="w-full bg-pink-100 border-brand-lilac/30 focus:ring-brand-purple/50 focus:border-brand-purple resize-none shadow-sm placeholder:text-gray-500" />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-brand-purple to-brand-pink text-white py-4 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin mr-2">⏳</div> Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
