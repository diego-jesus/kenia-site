import { motion } from "framer-motion";
import { MessageSquare, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: MessageSquare,
      href: "https://wa.me/553187037264",
      label: "WhatsApp",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/keniaruthsampaio",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:restaurarfilhosdagraca@gmail.com",
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
            className="text-3xl font-cursive font-bold mb-4 cursor-pointer text-purple-400"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Kênia Ruth
          </motion.div>

          <p className="text-lg font-elegant italic mb-8 max-w-2xl mx-auto text-purple-400">
            "A coragem de evoluir constrói uma revolução ao redor" 
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
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300 text-purple-400"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-purple-100/40 pt-8">
            <p className="text-sm text-purple-400 text-center font-medium">
              © 2025 Kênia Ruth Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
