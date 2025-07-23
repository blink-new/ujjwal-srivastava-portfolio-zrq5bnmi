import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Code, Database, Cloud, Terminal } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
      color: 'text-blue-500'
    },
    {
      title: 'Tools & Technologies',
      icon: <Database className="h-6 w-6" />,
      skills: ['React.js', 'Next.js', 'Node.js', 'TensorFlow', 'OpenCV', 'Docker', 'MongoDB'],
      color: 'text-green-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['AWS', 'GCP', 'Git', 'GitHub', 'Postman', 'Unix/Linux'],
      color: 'text-purple-500'
    },
    {
      title: 'Core Subjects',
      icon: <Terminal className="h-6 w-6" />,
      skills: ['DSA', 'OOPS', 'Operating Systems', 'DBMS', 'Computer Networks', 'Compiler Design'],
      color: 'text-orange-500'
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 section-3d">
      <div className="parallax-bg" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-3d floating-3d">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-3d">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="skill-card-3d glass-morphism border border-border/50 group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-muted/50 glass-morphism group-hover:scale-110 transition-transform duration-300 ${category.color}`}>
                    {category.icon}
                  </div>
                  <span className="text-foreground text-3d">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm skill-card-3d glass-morphism hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      style={{
                        animationDelay: `${index * 100 + skillIndex * 50}ms`
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Stats with 3D effects */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          <div className="text-center card-3d glass-morphism rounded-lg p-6">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-3d floating-3d">350+</div>
            <div className="text-muted-foreground text-3d">DSA Problems Solved</div>
            <div className="text-sm text-muted-foreground mt-1">LeetCode, GFG, Codeforces</div>
          </div>
          <div className="text-center card-3d glass-morphism rounded-lg p-6">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-2 text-3d floating-3d">5+</div>
            <div className="text-muted-foreground text-3d">Major Projects</div>
            <div className="text-sm text-muted-foreground mt-1">Full-Stack & AI Applications</div>
          </div>
          <div className="text-center card-3d glass-morphism rounded-lg p-6">
            <div className="text-3xl sm:text-4xl font-bold text-green-500 mb-2 text-3d floating-3d">3+</div>
            <div className="text-muted-foreground text-3d">Hackathon Wins</div>
            <div className="text-sm text-muted-foreground mt-1">Including SIH 2024</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection