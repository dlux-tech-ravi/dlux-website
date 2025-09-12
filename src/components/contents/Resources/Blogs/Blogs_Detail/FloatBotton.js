"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Dribbble, Plus } from "lucide-react";

export default function FloatBotton() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-teal-500">
      <div className="relative h-[42px] w-[100px] cursor-pointer perspective">
        {/* Back Side with Social Icons */}
        <motion.div
          className="absolute inset-0 flex items-center gap-2 rounded-full bg-teal-700 px-3 shadow-inner"
          initial={{ rotateX: -90 }}
          whileHover={{ rotateX: 0 }}
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <motion.a
            href="#"
            className="opacity-0 text-white"
            whileHover={{ opacity: 1, y: -5 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            className="opacity-0 text-white"
            whileHover={{ opacity: 1, y: -5 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Facebook className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            className="opacity-0 text-white"
            whileHover={{ opacity: 1, y: -5 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Plus className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            className="opacity-0 text-white"
            whileHover={{ opacity: 1, y: -5 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Dribbble className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Front Side */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-full bg-white"
          whileHover={{ rotateX: 90 }}
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <p className="text-gray-500 font-medium">Share</p>
        </motion.div>
      </div>
    </div>
  );
}
