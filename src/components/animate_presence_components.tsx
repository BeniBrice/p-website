import { motion } from "framer-motion";

export default function AnimatePresenceComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // once:true -> n'anime qu'une fois ; amount contrôle quel % visible déclenche l'animation
      className="py-20 px-5"
    >
      {children}
    </motion.section>
  );
}
