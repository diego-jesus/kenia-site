import { motion } from "framer-motion";
import { MessageSquare, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function FloatingButtons() {
  const buttons = [
    {
      icon: MessageSquare,
      href: "https://wa.me/553187037264?text=Olá! Gostaria de agendar uma consulta com a Kênia Ruth.",
      bgColor: "bg-green-500 hover:bg-green-600",
      tooltip: "Fale comigo no WhatsApp",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/keniaruthsampaio",
      bgColor:
        "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
      tooltip: "Siga no Instagram",
    },
    {
      icon: Mail,
      href: "mailto:restaurarfilhosdagraca@gmail.com",
      bgColor: "bg-blue-500 hover:bg-blue-600",
      tooltip: "Envie um e-mail",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      {buttons.map((button, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                size="icon"
                className={`${button.bgColor} text-white p-4 rounded-full shadow-lg transition-all duration-300 w-14 h-14`}
              >
                <a href={button.href} target="_blank" rel="noopener noreferrer">
                  <button.icon size={24} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-gray-800 text-white">
              <p>{button.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
}