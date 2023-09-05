"use client";
import { AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
            {children}
    </AnimatePresence>
  );
}