"use client";

import { useState } from "react";

export function AvatarTrigger() {
  const toggleAdmin = () => {
    const current = localStorage.getItem('portfolio_admin') === 'true';
    localStorage.setItem('portfolio_admin', (!current).toString());
    // Dispatch event to trick React into reacting cross-component without context
    window.dispatchEvent(new Event('storage'));
  }

  return (
    <div 
      onDoubleClick={toggleAdmin} 
      className="relative size-20 md:size-24 rounded-3xl overflow-hidden border bg-background shadow-sm ring-1 ring-border/50 group flex-shrink-0 cursor-pointer select-none"
    >
      <img src="/pyt2.png" alt="Avatar" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
      <img src="/pyt1.png" alt="Avatar Variant" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
