import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            Sylve Health
          </h3>
          <p className="text-muted/60 text-sm">
            Premium healthcare services tailored to your lifestyle. <Link href="/book" className="underline hover:text-white transition-colors">Book your consultation today.</Link>
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-2 text-sm text-muted/60">
            <li><Link href="/services/primary-care" className="hover:text-white transition-colors">Primary Care</Link></li>
            <li><Link href="/services/cardiology" className="hover:text-white transition-colors">Cardiology</Link></li>
            <li><Link href="/services/dermatology" className="hover:text-white transition-colors">Dermatology</Link></li>
            <li><Link href="/services/diagnostics" className="hover:text-white transition-colors">Diagnostics</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm text-muted/60">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/doctors" className="hover:text-white transition-colors">Our Doctors</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Legal</h4>
          <ul className="space-y-2 text-sm text-muted/60">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>HIPAA Compliance</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted/40">
        &copy; {new Date().getFullYear()} Sylve Health. All rights reserved.
      </div>
    </footer>
  );
}
