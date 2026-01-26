import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative text-center border-t border-border space-y-4 mt=12 pt-8 flex flex-col items-center justify-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} ADDO
        <span className="text-primary">-Dev</span>. All rights reserved.
      </p>
      {/* Back to Top Button */}
      <a
        href="#hero"
        className="cosmic-button rounded-full bg-primary/10 flex items-center gap-2 hover:bg-primary/20 text-primary transition-colors animate-bounce"
      >
        <ArrowUp size={20}/> Back to Top 
      </a>
    </footer>
  );
};

export default Footer;
