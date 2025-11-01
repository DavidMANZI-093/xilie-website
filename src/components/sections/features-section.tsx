import { features } from "@/data/features";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

type Props = {};

const FeaturesSection = (props: Props) => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xl sm:text-2xl font-bold">
            Everything You Need for{" "}
            <span className="text-gradient">Seamless Music Control</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Built for developers, by developers. Xilie brings powerful Spotify
            integration directly into your IDE with features designed for your
            workflow.
          </p>
        </div>

        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-lg ${
                feature.highlight ? "ring-2 ring-primary/20 bg-primary/5" : ""
              }`}
            >
              <CardContent className="px-6 py-2 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`p-3 rounded-lg ${feature.highlight ? "bg-primary/20" : "bg-muted"}`}
                  >
                    <feature.icon
                      className={`h-4 w-4 ${feature.highlight ? "text-primary" : "text-foreground"}`}
                    />
                  </div>
                  {feature.badge && (
                    <Badge
                      variant={feature.highlight ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {feature.badge}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
