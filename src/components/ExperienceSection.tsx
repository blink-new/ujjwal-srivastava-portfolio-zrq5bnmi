import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Calendar, MapPin, Trophy, Briefcase } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Technical Consulting Writer',
      company: 'Atlan',
      type: 'Internship',
      duration: 'Dec 2024 – Mar 2025',
      location: 'Remote',
      description: 'Improved developer experience by documenting and testing AI workflows and APIs. Collaborated with engineering teams to create comprehensive technical documentation.',
      skills: ['Technical Writing', 'API Documentation', 'AI Workflows', 'Developer Experience'],
      icon: <Briefcase className="h-5 w-5" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Software Developer',
      company: 'LiveSitter',
      type: 'Internship',
      duration: 'Oct 2024 – Dec 2024',
      location: 'Remote',
      description: 'Built a performant Next.js application deployed on AWS. Implemented scalable architecture and optimized application performance for better user experience.',
      skills: ['Next.js', 'AWS', 'Performance Optimization', 'Full-Stack Development'],
      icon: <Briefcase className="h-5 w-5" />,
      color: 'bg-green-500'
    },
    {
      title: 'Team Leader',
      company: 'Smart India Hackathon 2024',
      type: 'Competition',
      duration: 'Sep 2024',
      location: 'India',
      description: 'Led a team to victory in the prestigious Smart India Hackathon 2024. Built AgriShield – a distributed AI farming platform that revolutionizes contract farming.',
      skills: ['Leadership', 'AI/ML', 'Team Management', 'Problem Solving'],
      icon: <Trophy className="h-5 w-5" />,
      color: 'bg-yellow-500'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 section-3d">
      <div className="parallax-bg" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-3d floating-3d">
            Experience Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-3d">
            My journey through internships, competitions, and professional growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line with 3D effect */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-70"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot with 3D effect */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 glass-morphism floating-3d">
                  <div className={`w-3 h-3 rounded-full ${exp.color} shadow-lg`}></div>
                </div>

                {/* Content Card with 3D effects */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="experience-card-3d glass-morphism border border-border/50 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${exp.color} text-white glass-morphism`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors text-3d">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium text-3d">{exp.company}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs achievement-badge-3d glass-morphism">
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs skill-card-3d glass-morphism">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection