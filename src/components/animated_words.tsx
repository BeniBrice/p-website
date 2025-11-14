import { motion } from "framer-motion";

const words = ["Welcome", "to our", "web site"];

export default function AnimatedTitle() {
  return (
    <div className="flex gap-2 text-3xl text-white">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -40 }} // ← arrive depuis la gauche
          animate={{ opacity: 1, x: 0 }} // → se place au centre
          transition={{
            delay: index * 0.6, // délai entre les mots
            duration: 0.9,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
