import { motion } from "framer-motion";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      image: "/imagens/img1.JPG",
      title: "História do Elefante de Circo",
      description: "Reflexão sobre crenças limitantes e autossabotagem",
      link: "https://www.instagram.com/p/DJ706fVRds4/?img_index=1",
    },
    {
      image: "/imagens/img2.JPG",
      title: "Sabedoria não é passividade, é coragem com propósito",
      description: "A força feminina para transformar relações",
      link: "https://www.instagram.com/p/DJ6c0S_RQAZ/?img_index=1",
    },
    {
      image: "/imagens/img3.JPG",
      title: "Famílias que Superam",
      description: "A importância de enfrentar o processo em conjunto",
      link: "https://www.instagram.com/p/DJ39yZ2xMRK/?img_index=1",
    },
    {
      image: "/imagens/img4.JPG",
      title: "A sua vitória está FORA da sua zona de conforto",
      description: "A zona de conforto é enganosa… Ela nos prende no conhecido, no seguro, no previsível",
      link: "https://www.instagram.com/keniaruthsampaio/p/DKAe7xARtF3/",
          },
    {
      image: "/imagens/img5.JPG",
      title: "Confie no processo, mesmo quando não vê nada",
      description: "Sobre o valor do silêncio no processo interno",
      link: "https://www.instagram.com/p/DJ_4n6pR9ma/?img_index=1",
    },
    {
      image: "/imagens/img6.JPG",
      title: "Com fé, amor e intencionalidade",
      description: "Cada passo de coragem que uma mulher dá, impacta toda a casa",
      link: "https://www.instagram.com/p/DIKSJ3dS-2R/",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-elegant font-bold text-text-dark mb-4">
            Presença Digital
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alguns dos conteúdos que compartilho com mulheres que desejam restaurar sua identidade, fé e força interior.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
