import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ExternalLink, Github, Zap, Eye, Target } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AgriShield',
      description: 'MERN + ML + Blockchain based contract farming platform with 90% price prediction accuracy. Winner of Smart India Hackathon 2024.',
      longDescription: 'A comprehensive distributed AI farming platform that revolutionizes contract farming through intelligent price prediction, blockchain-based contracts, and real-time market analysis.',
      technologies: ['MERN Stack', 'Machine Learning', 'Blockchain', 'Python', 'TensorFlow', 'Smart Contracts'],
      liveLink: '#',
      githubLink: '#',
      icon: <Target className="h-6 w-6" />,
      color: 'bg-green-500',
      stats: '90% Accuracy',
      featured: true
    },
    {
      title: 'GestureTalk',
      description: 'Real-time ASL detection in video calls using MediaPipe, TensorFlow, and WebRTC for seamless communication.',
      longDescription: 'An innovative communication tool that enables real-time American Sign Language detection during video calls, breaking down communication barriers.',
      technologies: ['MediaPipe', 'TensorFlow', 'WebRTC', 'Python', 'Computer Vision', 'Real-time Processing'],
      liveLink: '#',
      githubLink: 'https://github.com/ujjwal-srivastava/gesturetalk',
      icon: <Eye className="h-6 w-6" />,
      color: 'bg-blue-500',
      stats: 'Real-time',
      featured: true
    },
    {
      title: 'Wastefy',
      description: 'AI waste detection app using YOLOv8, Streamlit, and OpenCV with 92% accuracy for smart waste management.',
      longDescription: 'An intelligent waste detection and classification system that helps in automated waste sorting and environmental monitoring.',
      technologies: ['YOLOv8', 'Streamlit', 'OpenCV', 'Python', 'Computer Vision', 'AI/ML'],
      liveLink: '#',
      githubLink: 'https://github.com/ujjwal-srivastava/wastefy',
      icon: <Zap className="h-6 w-6" />,
      color: 'bg-purple-500',
      stats: '92% Accuracy',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 section-3d">
      <div className="parallax-bg" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-3d floating-3d">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-3d">
            Innovative solutions combining AI, full-stack development, and cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Projects with 3D effects */}
          {projects.filter(project => project.featured).map((project, index) => (
            <Card 
              key={project.title} 
              className="project-card-3d glass-morphism border border-border/50 group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${project.color} text-white group-hover:scale-110 transition-transform duration-300 glass-morphism`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors text-3d">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs achievement-badge-3d glass-morphism">
                        {project.stats}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs skill-card-3d glass-morphism">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs skill-card-3d glass-morphism">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 button-3d"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="button-3d glass-morphism"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects with 3D effects */}
        <div className="grid md:grid-cols-1 gap-6">
          {projects.filter(project => !project.featured).map((project) => (
            <Card 
              key={project.title} 
              className="project-card-3d glass-morphism border border-border/50 group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${project.color} text-white glass-morphism`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-3d">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs achievement-badge-3d glass-morphism">
                          {project.stats}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs skill-card-3d glass-morphism">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 md:ml-6">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="button-3d glass-morphism"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="button-3d glass-morphism"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects with 3D effects */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="button-3d glass-morphism"
            onClick={() => window.open('https://github.com/ujjwal-srivastava', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection