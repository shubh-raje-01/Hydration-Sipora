import { ArrowRight, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0F282F] text-[#F3F6F6] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/">
              <span className="font-display font-bold text-4xl tracking-tighter uppercase mb-6 block text-[#FFA8C5] cursor-pointer">
                SIPORA
              </span>
            </Link>
            <p className="font-medium text-[#F3F6F6]/70 max-w-xs">
              The future of hydration, designed in India. Zero sugar, full flavor, pure science.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl uppercase mb-6">Shop</h4>
            <ul className="space-y-3 font-medium text-[#F3F6F6]/80">
              <li><a href="#" className="hover:text-[#FFA8C5] transition-colors">Starter Kits</a></li>
              <li><a href="#" className="hover:text-[#FFA8C5] transition-colors">Flavor Pods</a></li>
              <li><a href="#" className="hover:text-[#FFA8C5] transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-[#FFA8C5] transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl uppercase mb-6">Company</h4>
            <ul className="space-y-3 font-medium text-[#F3F6F6]/80">
              <li>
                <Link href="/about" className="hover:text-[#FFA8C5] transition-colors">About Us</Link>
              </li>
              <li><a href="#science" className="hover:text-[#FFA8C5] transition-colors">The Science</a></li>
              <li><a href="#" className="hover:text-[#FFA8C5] transition-colors">Sustainability</a></li>
              <li>
                <Link href="/support" className="hover:text-[#FFA8C5] transition-colors">Support</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl uppercase mb-6">Stay Hydrated</h4>
            <p className="font-medium text-[#F3F6F6]/70 mb-4">Join our newsletter for new flavors and drops.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                data-testid="newsletter-email"
                className="bg-[#F3F6F6]/10 border-[#F3F6F6]/20 text-[#F3F6F6] placeholder:text-[#F3F6F6]/50 h-12 rounded-xl focus-visible:ring-[#FFA8C5]"
              />
              <Button className="h-12 px-6 rounded-xl bg-[#FFA8C5] text-[#0F282F] hover:bg-[#FFBCD9] border-2 border-[#F3F6F6]/20">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F3F6F6]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-medium text-[#F3F6F6]/50 text-sm">
            © {new Date().getFullYear()} Sipora India Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" data-testid="social-instagram" className="w-10 h-10 rounded-full bg-[#F3F6F6]/10 flex items-center justify-center hover:bg-[#FFA8C5] hover:text-[#0F282F] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" data-testid="social-twitter" className="w-10 h-10 rounded-full bg-[#F3F6F6]/10 flex items-center justify-center hover:bg-[#FFA8C5] hover:text-[#0F282F] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" data-testid="social-youtube" className="w-10 h-10 rounded-full bg-[#F3F6F6]/10 flex items-center justify-center hover:bg-[#FFA8C5] hover:text-[#0F282F] transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
