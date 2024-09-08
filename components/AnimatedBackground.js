import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[-1]"
      animate={{
        background: [
          'linear-gradient(45deg, #8B4000 0%, #D2691E 100%)',
          'linear-gradient(45deg, #A0522D 0%, #FF8C00 100%)',
          'linear-gradient(45deg, #8B4000 0%, #D2691E 100%)',
        ],
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
  );
};

export default AnimatedBackground;
