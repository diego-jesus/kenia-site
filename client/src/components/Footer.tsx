import { motion } from "framer-motion";
import { MessageSquare, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: MessageSquare,
      href: "https://wa.me/5511999999999",
      label: "WhatsApp",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/kenia.ruth",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:contato@keniaruth.com",
      label: "E-mail",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-text-dark to-brand-purple text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-cursive font-bold mb-4 cursor-pointer text-purple-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Kênia Ruth
          </motion.div>

          <p className="text-lg font-elegant italic mb-8 max-w-2xl mx-auto text-purple-300">
            "Inspirando autoestima todos os dias com empatia e propósito."
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300 text-purple-300"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-purple-100/40 pt-8">
            <p className="text-sm text-purple-300 text-center font-medium">
              © 2024 Kênia Ruth Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
