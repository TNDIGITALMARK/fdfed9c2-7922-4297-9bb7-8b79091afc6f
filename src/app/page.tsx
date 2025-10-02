import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Phone, Mail, MapPin, Hammer, Building2, Home, Wrench, Star, Users, Award, Clock } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl">
            <Badge className="bg-accent text-white mb-6 px-4 py-2 text-sm font-semibold">
              #1 Construction Company in NYC
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              BUILDING NYC'S <span className="text-accent">FUTURE</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
              Professional construction services for residential and commercial projects.
              Licensed, bonded, and insured with over 15 years of experience in New York City.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold">
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                View Our Work
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-gray-300">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-gray-300">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary">
              Our Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Urban Landscapes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From small home repairs to large-scale commercial developments,
              we deliver exceptional construction services across all of New York City.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Building2 className="h-8 w-8 text-accent group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mt-4">
                  Commercial Construction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Office buildings, retail spaces, and commercial developments throughout NYC.
                </CardDescription>
                <Link href="/services" className="text-accent hover:text-accent-dark font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Home className="h-8 w-8 text-accent group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mt-4">
                  Residential Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Kitchen renovations, bathroom remodels, and full home additions.
                </CardDescription>
                <Link href="/services" className="text-accent hover:text-accent-dark font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Wrench className="h-8 w-8 text-accent group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mt-4">
                  Emergency Repairs
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  24/7 emergency services for urgent construction and repair needs.
                </CardDescription>
                <Link href="/services" className="text-accent hover:text-accent-dark font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary">
                Why Choose NYC Construction Pros
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trusted by New Yorkers for <span className="text-accent">15+ Years</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We understand the unique challenges of construction in New York City.
                Our experienced team delivers quality results on time and within budget.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed general contractor with comprehensive insurance coverage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                    <p className="text-gray-600">Skilled craftsmen and project managers with decades of NYC experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Materials</h3>
                    <p className="text-gray-600">We use only the finest materials and latest construction techniques.</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4">
                Schedule Consultation
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-accent/5 p-6 rounded-2xl text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">A+ Rating</h3>
                <p className="text-gray-600">Better Business Bureau</p>
              </div>
              <div className="bg-accent/5 p-6 rounded-2xl text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="bg-accent/5 p-6 rounded-2xl text-center">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9★</h3>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="bg-accent/5 p-6 rounded-2xl text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
                <p className="text-gray-600">Emergency Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-accent">Construction Project</span>?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for your project.
            Our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call (212) 555-0123
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
              <Mail className="mr-2 h-5 w-5" />
              Request Estimate
            </Button>
          </div>

          <p className="text-gray-300">
            <MapPin className="inline h-4 w-4 mr-1" />
            Serving all five boroughs of New York City
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}