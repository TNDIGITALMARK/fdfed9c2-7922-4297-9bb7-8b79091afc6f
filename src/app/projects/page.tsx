'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, DollarSign, Clock, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Manhattan Office Tower Renovation',
    category: 'Commercial',
    location: 'Midtown Manhattan, NY',
    duration: '8 months',
    budget: '$2.5M',
    year: '2024',
    description: 'Complete renovation of a 15-story office building including HVAC, electrical, and interior fit-out.',
    beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    tags: ['Commercial', 'Renovation', 'HVAC', 'Electrical']
  },
  {
    id: 2,
    title: 'Brooklyn Brownstone Restoration',
    category: 'Residential',
    location: 'Park Slope, Brooklyn',
    duration: '6 months',
    budget: '$850K',
    year: '2024',
    description: 'Historic brownstone restoration preserving original character while adding modern amenities.',
    beforeImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    tags: ['Residential', 'Historic', 'Restoration', 'Kitchen']
  },
  {
    id: 3,
    title: 'Queens Commercial Plaza',
    category: 'Commercial',
    location: 'Long Island City, Queens',
    duration: '12 months',
    budget: '$4.2M',
    year: '2023',
    description: 'New construction of mixed-use commercial plaza with retail spaces and office units.',
    beforeImage: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
    tags: ['New Construction', 'Mixed-Use', 'Retail', 'Commercial']
  },
  {
    id: 4,
    title: 'Upper East Side Penthouse',
    category: 'Residential',
    location: 'Upper East Side, Manhattan',
    duration: '4 months',
    budget: '$1.2M',
    year: '2023',
    description: 'Luxury penthouse renovation with custom millwork, marble finishes, and smart home integration.',
    beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop',
    tags: ['Luxury', 'Penthouse', 'Smart Home', 'Custom Millwork']
  },
  {
    id: 5,
    title: 'Bronx Community Center',
    category: 'Commercial',
    location: 'South Bronx, NY',
    duration: '10 months',
    budget: '$3.1M',
    year: '2023',
    description: 'New community center construction with gymnasium, classrooms, and community spaces.',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
    tags: ['Community', 'New Construction', 'Public Space', 'Educational']
  },
  {
    id: 6,
    title: 'Staten Island Family Home',
    category: 'Residential',
    location: 'Tottenville, Staten Island',
    duration: '5 months',
    budget: '$650K',
    year: '2023',
    description: 'Complete home addition with new master suite, expanded kitchen, and outdoor deck.',
    beforeImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
    tags: ['Addition', 'Master Suite', 'Kitchen', 'Deck']
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    project: 'Manhattan Office Tower Renovation',
    rating: 5,
    text: 'NYC Construction Pros transformed our outdated office building into a modern, efficient workspace. Their attention to detail and project management was exceptional.',
    role: 'Property Manager'
  },
  {
    id: 2,
    name: 'Michael Chen',
    project: 'Brooklyn Brownstone Restoration',
    rating: 5,
    text: 'They preserved the historic character of our brownstone while making it perfect for modern living. The craftsmanship is outstanding.',
    role: 'Homeowner'
  },
  {
    id: 3,
    name: 'Lisa Rodriguez',
    project: 'Upper East Side Penthouse',
    rating: 5,
    text: 'From concept to completion, the team was professional, creative, and delivered beyond our expectations. Our penthouse is absolutely stunning.',
    role: 'Homeowner'
  }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const categories = ['All', 'Residential', 'Commercial']
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-accent text-white mb-6 px-4 py-2 text-sm font-semibold">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Proven <span className="text-accent">Project Excellence</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Explore our portfolio of successful construction projects across New York City.
              From residential renovations to large-scale commercial developments.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className={`absolute top-4 left-4 text-white ${
                    project.category === 'Residential' ? 'bg-green-600' : 'bg-blue-600'
                  }`}>
                    {project.category}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span>{project.budget}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary">
              Transformation Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Before & After
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformations we've achieved for our clients across NYC.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.slice(0, 2).map((project) => (
              <div key={`ba-${project.id}`} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                </div>

                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Badge className="bg-red-600 text-white px-4 py-2 font-bold">
                        BEFORE
                      </Badge>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Badge className="bg-accent text-white px-4 py-2 font-bold">
                        AFTER
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied clients across NYC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg bg-gray-50">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-accent mb-4" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-accent font-medium">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-accent">Next Project</span>?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how we can transform your space with our proven construction expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}