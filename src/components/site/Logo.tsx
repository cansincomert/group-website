import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 ${className}`} aria-label="Ana Sayfa">
    
    {/* Sadece görsel kullanmak istersen bu img etiketini tut */}
    <img 
      src="/logo.svg" /* veya logo.png */ 
      alt="Site Logo" 
      className="h-8 w-auto object-contain" /* h-8 boyutu belirler, logona göre h-10 veya h-12 yapabilirsin */
    />

    {/* Görselin yanına metin de eklemek istersen alt kısmı kullanabilirsin, istemezsen silebilirsin */}
    <span className="font-display text-lg font-semibold tracking-tight">
      MarkaAdı<span className="text-primary">.</span>
    </span>

  </Link>
);