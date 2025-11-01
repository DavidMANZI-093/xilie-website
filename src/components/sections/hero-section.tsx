import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Latest: v0.0.7 - Search & Discovery
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Control Spotify{" "}
                <span className="text-gradient">Without Leaving</span> Your Code
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                A powerful VS Code extension that brings seamless Spotify
                control right into your development environment. Browse
                playlists, search music, and manage playback without ever
                leaving your editor.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="text-sm">
                <Link href="/downloads">
                  <Download className="mr-2 h-5 w-5" />
                  Install Extension
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="text-sm bg-transparent"
              >
                <Link href="/waitlist">Join Beta Waitlist</Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-8 text-xs text-muted-foreground">
              <Link
                href="https://marketplace.visualstudio.com/items?itemName=d3fault.xilie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-foreground transition-colors"
              >
                <ExternalLink className="mr-2 h-3 w-3" />
                VS Code Marketplace
              </Link>
              <Link
                href="https://open-vsx.org/extension/d3fault/xilie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-foreground transition-colors"
              >
                <ExternalLink className="mr-2 h-3 w-3" />
                Open VSX Registry
              </Link>
              <Link
                href="https://github.com/DavidMANZI-093/xilie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-foreground transition-colors"
              >
                <ExternalLink className="mr-2 h-3 w-3" />
                View on GitHub
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
