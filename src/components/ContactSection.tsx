import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+91-9580186667',
      href: 'tel:+919580186667',
      color: 'text-green-500'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'ujjwallsrivastavaa@gmail.com',
      href: 'mailto:ujjwallsrivastavaa@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ujjwal-srivastava',
      href: 'https://linkedin.com/in/ujjwal-srivastava',
      color: 'text-blue-600'
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      value: 'github.com/ujjwal-srivastava',
      href: 'https://github.com/ujjwal-srivastava',
      color: 'text-gray-600'
    }
  ]

  const handleContactClick = (href: string) => {
    window.open(href, '_blank')
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a passionate developer, want to collaborate on an exciting project, 
                or just want to connect with a fellow tech enthusiast, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact) => (
                <Card 
                  key={contact.label} 
                  className="bg-card border border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => handleContactClick(contact.href)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300 ${contact.color}`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </div>
                        <div className="text-sm text-muted-foreground truncate">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-muted text-orange-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-sm text-muted-foreground">Greater Noida, Uttar Pradesh, India</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Collaborate?
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm currently seeking opportunities in AI/ML, full-stack development, and innovative tech projects. 
                  Let's build something amazing together!
                </p>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open('mailto:ujjwallsrivastavaa@gmail.com', '_blank')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://linkedin.com/in/ujjwal-srivastava', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-foreground font-medium">Open to Opportunities</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Graduation:</span>
                    <span className="text-foreground font-medium">2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialization:</span>
                    <span className="text-foreground font-medium">AI & ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="text-green-500 font-medium">Within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Ujjwal Srivastava. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection