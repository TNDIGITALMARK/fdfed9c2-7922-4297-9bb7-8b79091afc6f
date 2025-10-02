import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Building2, Home, Wrench, Hammer, Zap, Droplets,
  CheckCircle, ArrowRight, Phone, Users, Clock, Award,
  HardHat, Ruler, Paintbrush, Settings
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    category: 'Commercial Construction',
    icon: Building2,
    description: 'Professional commercial construction services for businesses across NYC.',
    services: [
      'Office Building Construction',
      'Retail Space Build-outs',
      'Restaurant Construction',
      'Warehouse & Industrial',
      'Mixed-Use Developments',
      'Commercial Renovations'
    ],
    features: [
      'Licensed Commercial Contractor',
      'Project Management',
      'Permits & Inspections',
      'Code Compliance'
    ]
  },
  {
    category: 'Residential Construction',
    icon: Home,
    description: 'Complete residential construction and renovation services for NYC homes.',
    services: [
      'Kitchen Renovations',
      'Bathroom Remodeling',
      'Home Additions',
      'Basement Finishing',
      'Whole Home Renovations',
      'Apartment Renovations'
    ],
    features: [
      'Licensed Residential Contractor',
      'Interior Design Consultation',
      'Quality Materials',
      '1-Year Warranty'
    ]
  },
  {
    category: 'Emergency Services',
    icon: Wrench,
    description: '24/7 emergency construction and repair services when you need us most.',
    services: [
      'Emergency Repairs',
      'Water Damage Restoration',
      'Structural Repairs',
      'Storm Damage Repair',
      'Fire Damage Restoration',
      'Emergency Board-Up'
    ],
    features: [
      '24/7 Availability',
      'Rapid Response',
      'Insurance Claims Assistance',
      'Temporary Solutions'
    ]
  },
  {
    category: 'Specialized Services',
    icon: Settings,
    description: 'Specialized construction services requiring expert knowledge and skills.',
    services: [
      'HVAC Installation',
      'Electrical Work',
      'Plumbing Services',
      'Flooring Installation',
      'Roofing Services',
      'Windows & Doors'
    ],
    features: [
      'Licensed Tradesmen',
      'Quality Guarantees',
      'Up-to-Code Work',
      'Competitive Pricing'
    ]
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We meet to discuss your project needs, timeline, and budget.',
    icon: Users
  },
  {
    step: 2,
    title: 'Design & Planning',
    description: 'Our team creates detailed plans and obtains necessary permits.',
    icon: Ruler
  },
  {
    step: 3,
    title: 'Construction Phase',
    description: 'Skilled craftsmen execute the project with regular progress updates.',
    icon: HardHat
  },
  {
    step: 4,
    title: 'Final Walkthrough',
    description: 'We ensure everything meets your expectations and provide warranties.',
    icon: CheckCircle
  }
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed general contractor with comprehensive insurance coverage for your protection.'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Over 15 years of construction experience with skilled craftsmen and project managers.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We pride ourselves on completing projects on schedule and within budget.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Guarantee',
    description: 'All our work comes with warranties and our commitment to excellence.'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-accent text-white mb-6 px-4 py-2 text-sm font-semibold">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Construction <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              From small repairs to large-scale construction projects, we provide comprehensive
              construction services throughout New York City. Licensed, bonded, and insured.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-gray-300">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary">
              What We Do
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of construction services to meet all your building needs,
              from residential renovations to commercial construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon className="h-8 w-8 text-accent group-hover:text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {service.category}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mt-1">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                        <ul className="space-y-2">
                          {service.services.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-600">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-600">
                              <ArrowRight className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t">
                      <Link href="/contact">
                        <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                          Get Free Estimate
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined construction process ensures your project is completed efficiently,
              on time, and to your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="mx-auto bg-accent/10 p-6 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon className="h-10 w-10 text-accent group-hover:text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The NYC Construction Pros <span className="text-accent">Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you choose us for your construction project, you're partnering with
              NYC's most trusted construction professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg bg-white group hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 mb-4">
                      <Icon className="h-8 w-8 text-accent group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
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
            Contact us today for a free consultation and estimate. Let's discuss how we can
            bring your construction vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call (212) 555-0123
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                Get Free Estimate
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              Licensed & Insured
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              Free Estimates
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              24/7 Emergency Service
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              1-Year Warranty
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}