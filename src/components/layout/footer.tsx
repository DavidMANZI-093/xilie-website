import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Mail } from "lucide-react";
import { LuGithub } from "react-icons/lu";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/icon1.png"
                alt="Xilie"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-lg font-bold text-gradient">Xilie</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Seamless Spotify control for VS Code and compatible IDEs.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/downloads"
                  className="hover:text-foreground transition-colors"
                >
                  Downloads
                </Link>
              </li>
              <li>
                <Link
                  href="/releases"
                  className="hover:text-foreground transition-colors"
                >
                  Releases
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-foreground transition-colors"
                >
                  Beta Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/DavidMANZI-093/xilie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://marketplace.visualstudio.com/items?itemName=d3fault.xilie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  VS Code Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="https://open-vsx.org/extension/d3fault/xilie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Open VSX Registry
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/DavidMANZI-093/xilie/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/DavidMANZI-093/xilie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LuGithub className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:manzidavid093@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              For beta access, email{" "}
              <Link href="mailto:manzidavid093@gmail.com" className="text-primary hover:underline">
                manzidavid093@gmail.com
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Xilie. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-2 sm:mt-0">Built with <span className="text-primary italic">love</span> for developers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
