import { motion } from "framer-motion";

const fruitImages = [
  { src: "/footer-fruits/palm-tree-footer.png", alt: "Palm Tree" },
  { src: "/footer-fruits/strawberry.png", alt: "Strawberry" },
  { src: "/footer-fruits/coconut.png", alt: "Coconut" },
  { src: "/footer-fruits/pineapple.png", alt: "Pineapple" },
  { src: "/footer-fruits/mango.png", alt: "Mango" },
  { src: "/footer-fruits/banana.png", alt: "Banana" }
];

const Footer = () => {
  return (
    <div className="relative w-full h-40 bg-transparent flex justify-center items-end gap-6 p-6">
      {fruitImages.map((fruit, index) => (
        <motion.img
          key={index}
          src={fruit.src}
          alt={fruit.alt}
          className="w-16 h-auto"
          whileHover={{ y: -10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      ))}
    </div>
  );
};

export default Footer;