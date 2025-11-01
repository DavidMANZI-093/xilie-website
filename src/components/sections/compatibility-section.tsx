"use client";

import React from "react";
import { ides } from "@/data/ides.json";
import { platforms } from "@/data/platforms.json";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";
import { IDE, Platform } from "@/types/compatibility";
import { ThemeAwareIcon } from "../ui/theme-aware-icon";

type Props = {};

const CompatibilitySection = (props: Props) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xl sm:text-2xl font-bold">
            Works with{" "}
            <span className="text-gradient">All Your Favorite Editors</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Xilie supports VS Code and all major VS Code variants with unified
            authentication and consistent keyboard shortcuts across platforms.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
        <div className="space-y-12">
          {/* IDE Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Supported IDEs</h3>
            {/*<div className="space-y-4">*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {(ides as IDE[]).map((ide, index) => (
                <Card key={index}>
                  <CardContent className="px-6 py-2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-3">
                            {ide.icon && (
                              <ThemeAwareIcon
                                icon={ide.icon}
                                iconDark={ide.iconDark}
                                alt={ide.name}
                                className="w-4 h-4 rounded"
                              />
                            )}
                            <h4 className="text-sm font-medium">{ide.name}</h4>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            <Check className="mr-1 h-3 w-3"></Check>
                            {ide.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {ide.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {ide.method}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Platform Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Platform Support</h3>
            {/* <div className="space-y-4"> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {(platforms as Platform[]).map((platform, index) => (
                <Card key={index}>
                  <CardContent className="px-6 py-2">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-3">
                          {platform.icon && (
                            <ThemeAwareIcon
                              icon={platform.icon}
                              iconDark={platform.iconDark}
                              alt={platform.name}
                              className="w-4 h-4 rounded"
                            />
                          )}
                          <h4 className="text-sm font-medium">
                            {platform.name}
                          </h4>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          <Check className="mr-1 h-3 w-3"></Check>
                          {platform.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Keyboard shortcuts:{" "}
                        <code className="bg-muted px-1 rounded text-xs">
                          {platform.shortcuts}
                        </code>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative p-2 space-y-3 mt-8">
              <h4 className="font-medium">Authentication Flow</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  • <strong>VS Code:</strong> Automatic redirect after
                  authorization
                </p>
                <p>
                  • <strong>Other IDEs:</strong> Copy authorization code from
                  browser
                </p>
                <p>
                  • <strong>All platforms:</strong> Consistent experience across
                  environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;
