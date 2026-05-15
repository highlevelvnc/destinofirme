"use client";
import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scrollReveal";

export default function RevealMount() {
  useEffect(() => {
    initScrollReveal();
  }, []);
  return null;
}
