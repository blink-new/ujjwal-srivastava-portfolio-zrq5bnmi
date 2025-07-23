import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { MapPin, Calendar, Briefcase } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border">
              <div className="text-6xl font-bold text-primary/50">US</div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Hello! I'm Ujjwal Srivastava
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a final-year B.Tech student specializing in Computer Science Engineering with a focus on 
                Artificial Intelligence & Machine Learning at NIET, Greater Noida. My journey in tech has been 
                driven by a passion for creating intelligent systems that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With experience in full-stack development, AI applications, and competitive programming, 
                I enjoy tackling complex challenges and building scalable solutions. My interests span across 
                AI systems, distributed platforms, data structures & algorithms, and ML model deployment.
              </p>
            </div>

            {/* Current Role */}
            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Current Role</h4>
                    <p className="text-primary font-medium">Technical Consulting Writer @ Atlan</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      Dec 2024 – Mar 2025
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Improving developer experience by documenting and testing AI workflows and APIs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Education */}
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="flex items-center space-x-2 px-3 py-2">
                <MapPin className="h-4 w-4" />
                <span>Greater Noida, India</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 px-3 py-2">
                <Calendar className="h-4 w-4" />
                <span>Final Year Student</span>
              </Badge>
            </div>

            {/* Key Interests */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Key Interests</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI Systems',
                  'Distributed Platforms', 
                  'Data Structures & Algorithms',
                  'ML Model Deployment',
                  'Full-Stack Development',
                  'Competitive Programming'
                ].map((interest) => (
                  <Badge key={interest} variant="outline" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection