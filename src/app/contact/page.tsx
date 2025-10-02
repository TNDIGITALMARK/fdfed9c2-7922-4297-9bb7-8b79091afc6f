'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Building2, Home, Wrench, Hammer } from 'lucide-react'
import { useState } from 'react'

const serviceAreas = [
  {
    borough: 'Manhattan',
    neighborhoods: [
      'Upper East Side', 'Upper West Side', 'Midtown', 'Lower East Side',
      'SoHo', 'Tribeca', 'Greenwich Village', 'Chelsea', 'Hell\'s Kitchen'
    ]
  },
  {
    borough: 'Brooklyn',
    neighborhoods: [
      'Park Slope', 'Williamsburg', 'DUMBO', 'Brooklyn Heights',
      'Red Hook', 'Prospect Heights', 'Crown Heights', 'Bay Ridge'
    ]
  },
  {
    borough: 'Queens',
    neighborhoods: [
      'Long Island City', 'Astoria', 'Forest Hills', 'Flushing',
      'Jackson Heights', 'Elmhurst', 'Woodside', 'Sunnyside'
    ]
  },
  {
    borough: 'The Bronx',
    neighborhoods: [
      'South Bronx', 'Riverdale', 'Fordham', 'Concourse',
      'Morrisania', 'Hunts Point', 'Tremont', 'Belmont'
    ]
  },
  {
    borough: 'Staten Island',
    neighborhoods: [
      'St. George', 'Stapleton', 'Tottenville', 'New Springville',
      'Grasmere', 'Annadale', 'Great Kills', 'Huguenot'
    ]
  }
]

const services = [
  { name: 'General Construction', icon: Building2 },
  { name: 'Kitchen Renovation', icon: Home },
  { name: 'Bathroom Remodeling', icon: Wrench },
  { name: 'Commercial Build-out', icon: Building2 },
  { name: 'Home Addition', icon: Home },
  { name: 'Emergency Repair', icon: Hammer },
  { name: 'HVAC Installation', icon: Wrench },
  { name: 'Electrical Work', icon: Hammer }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: '',
    address: '',
    emergencyService: false,
    freeEstimate: true
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would handle the form submission
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-accent text-white mb-6 px-4 py-2 text-sm font-semibold">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build <span className="text-accent">Together</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to start your construction project? Contact us today for a free consultation
              and estimate. We're here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">(212) 555-0123</p>
                <p className="text-gray-600 mb-4">24/7 Emergency Line</p>
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-2">info@nycconstructionpros.com</p>
                <p className="text-gray-600 mb-4">We respond within 2 hours</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-primary mb-1">123 Construction Ave</p>
                <p className="text-gray-600 mb-4">New York, NY 10001</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="max-w-3xl">
                <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary">
                  Free Consultation
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Get Your Free Estimate
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Tell us about your project and we'll provide you with a detailed estimate
                  within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(212) 555-0123"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Project Address</Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="123 Main St, New York, NY 10001"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Service Type *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.name} value={service.name}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Project Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="planning">Still planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Project Size</Label>
                      <Select value={formData.projectSize} onValueChange={(value) => handleInputChange('projectSize', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="Select project size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (Under $50K)</SelectItem>
                          <SelectItem value="medium">Medium ($50K - $200K)</SelectItem>
                          <SelectItem value="large">Large ($200K - $500K)</SelectItem>
                          <SelectItem value="enterprise">Enterprise ($500K+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-25k">Under $25K</SelectItem>
                          <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                          <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                          <SelectItem value="over-500k">Over $500K</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Please describe your project in detail, including any specific requirements or challenges..."
                      rows={6}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="emergency"
                        checked={formData.emergencyService}
                        onCheckedChange={(checked) => handleInputChange('emergencyService', checked as boolean)}
                      />
                      <Label htmlFor="emergency" className="text-sm">
                        This is an emergency repair (24/7 service)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="estimate"
                        checked={formData.freeEstimate}
                        onCheckedChange={(checked) => handleInputChange('freeEstimate', checked as boolean)}
                      />
                      <Label htmlFor="estimate" className="text-sm">
                        I would like a free estimate
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-lg font-semibold"
                  >
                    Submit Request
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our terms of service and privacy policy.
                    We'll contact you within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Service Areas & Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Service Areas */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                  <p className="text-gray-600 mb-6">
                    We proudly serve all five boroughs of New York City with our construction services.
                  </p>

                  <div className="space-y-4">
                    {serviceAreas.map((area) => (
                      <Card key={area.borough} className="border-l-4 border-l-accent">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg font-bold text-primary">
                            {area.borough}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {area.neighborhoods.map((neighborhood) => (
                              <Badge
                                key={neighborhood}
                                variant="secondary"
                                className="text-xs"
                              >
                                {neighborhood}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <Card className="bg-gray-50 border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span>Business Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold">Emergency Only</span>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-sm text-accent font-semibold">
                        24/7 Emergency Service Available
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="bg-primary text-white">
                  <CardHeader>
                    <CardTitle>Why Choose Us?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm">15+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm">Free Estimates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm">24/7 Emergency Service</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm">Quality Guarantee</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}