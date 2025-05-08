"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollToContact = () => {
    if (pathname === "/") {
      // Smooth scroll to #contact if already on the home page
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the home page and scroll to #contact
      router.push("/#contact");
    }
  };

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dlauialhp/image/upload/v1746354167/tech_master_india2_xilhey.png"
              alt="TMC Logo"
              className="h-20 w-auto"
              width={152}
              height={32}
            />
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/"
                className="block transition-colors hover:text-primary text-gray-500"
              >
                Home
              </Link>
              <Link
                href="/events"
                className="block transition-colors hover:text-primary text-gray-500"
              >
                Events
              </Link>
              <Link
                href="/teams"
                className="block transition-colors hover:text-primary text-gray-500"
              >
                Teams
              </Link>
              <button
                onClick={handleScrollToContact}
                className="block text-gray-500 transition-colors hover:text-primary"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="block text-gray-500 transition-colors hover:text-primary text-sm"
            >Phone: +91 7597708888</p>
            <p className="block text-gray-500 transition-colors hover:text-primary text-sm"
            >Email: techmasterscommunity@gmail.com</p>
          </div>

          {/* Social Media Links */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <a
                href="https://x.com/TechMastersOrg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
              <a
                href="https://www.instagram.com/techmasters.india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==https://instagram.com/TechMastersOrg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/company/techmasters-community/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Tech Masters India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };