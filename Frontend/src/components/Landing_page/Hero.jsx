import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <motion.div 
          className="content mt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text mt-10">
            <motion.h2 
              className="text-2xl font-semibold mb-2 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to
            </motion.h2>
            <motion.h1 
              className="text-5xl font-semibold text-red-500 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              NEUROMAIL
            </motion.h1>
            <motion.h2 
              className="text-3xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              A Smart Email App!
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-10 max-w-lg mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Pharetra blandit augue volutpat libero augue semper. Non diam neque
              praesent sem senectus mauris lectus a urna. Tortor pellentesque ipsum
              tincidunt enim.
            </motion.p>

            <motion.button 
              className="get-started-btn mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="/Images/Hero_Image.png" 
            alt="Person working with email" 
            className="image-1"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.img 
            src="/Images/Blurred_BG.png" 
            alt="Background decoration" 
            className="image-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.div>
      </div>
    </>
  );
}
