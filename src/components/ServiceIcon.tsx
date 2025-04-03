"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceIconProps {
  Icon: LucideIcon;
  isHovered: boolean;
}

export function ServiceIcon({ Icon, isHovered }: ServiceIconProps) {
  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: 360,
      scale: 1.2,
      transition: { 
        duration: 0.8,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const circleVariants = {
    initial: { 
      scale: 1,
      backgroundColor: "rgb(254 252 232)" // yellow-50
    },
    hover: { 
      scale: 1.15,
      backgroundColor: "rgb(234 179 8)", // yellow-500
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      variants={circleVariants}
      className="rounded-full p-3"
    >
      <motion.div
        variants={iconVariants}
        className="flex items-center justify-center"
      >
        <Icon className={`h-8 w-8 ${isHovered ? 'text-white' : 'text-yellow-500'}`} />
      </motion.div>
    </motion.div>
  );
}
