import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} bhogireddy sai venkat akshay. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
