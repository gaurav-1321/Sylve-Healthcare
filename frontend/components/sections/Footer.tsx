export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            Sylve Health
          </h3>
          <p className="text-muted/60 text-sm">
            Premium healthcare services tailored to your lifestyle. Book your consultation today.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-2 text-sm text-muted/60">
            <li>Primary Care</li>
            <li>Cardiology</li>
            <li>Dermatology</li>
            <li>Diagnostics</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm text-muted/60">
            <li>About Us</li>
            <li>Our Doctors</li>
            <li>Careers</li>
            <li>Contact</li>
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
