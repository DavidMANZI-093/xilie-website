import { requirements, setupSteps } from '@/data/requirements'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { AlertCircle, CheckCircle } from 'lucide-react'

type Props = {}

const RequirementsSection = (props: Props) => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-xl sm:text-2xl font-bold">
                        <span className="text-gradient">Simple Setup</span>, Powerful Features
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        Get started in minutes with minimal requirements. Everything you need to bring Spotify control to your
                        development workflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Requirements */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Requirements</h3>
                        <div className="space-y-4">
                            {requirements.map((req, index) => (
                                <Card key={index}>
                                    <CardContent className="px-6 py-2">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-2 bg-primary/20 rounded-lg">
                                                <req.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="font-medium">{req.title}</h4>
                                                    <Badge variant="destructive" className='"text-xs'>
                                                        <AlertCircle className='mr-1 h-3 w-3' />
                                                        Required
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{req.description}</p>
                                                <p className="text-xs text-muted-foreground">{req.details}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Setup Process */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Setup Process</h3>
                        <Card>
                            <CardContent className="px-6 py-2">
                                <div className="space-y-4">
                                    {setupSteps.map((step, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                                {index + 1}
                                            </div>
                                            <p className="text-sm text-muted-foreground pt-0.5">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-6">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                <div className="space-y-1">
                                    <h4 className="font-medium text-foreground/80">Quick Start</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Most users are up and running in under 2 minutes. The extension handles all the complex Spotify API
                                        integration for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RequirementsSection