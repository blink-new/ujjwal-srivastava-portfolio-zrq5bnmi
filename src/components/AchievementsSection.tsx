import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Trophy, Award, Target, Code } from 'lucide-react'

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Winner – Smart India Hackathon 2024',
      description: 'Led team to victory in the prestigious national-level hackathon with AgriShield platform',
      icon: <Trophy className="h-8 w-8" />,
      color: 'bg-yellow-500',
      category: 'Competition',
      year: '2024',
      impact: 'National Level'
    },
    {
      title: 'Finalist – Vultr Cloud Hackathon',
      description: 'Reached finals in the international cloud computing hackathon with innovative cloud solution',
      icon: <Award className="h-8 w-8" />,
      color: 'bg-blue-500',
      category: 'Competition',
      year: '2024',
      impact: 'International'
    },
    {
      title: 'Runner-up – Codeathon by CodeTantra',
      description: 'Secured second position in competitive programming contest among hundreds of participants',
      icon: <Target className="h-8 w-8" />,
      color: 'bg-green-500',
      category: 'Programming',
      year: '2024',
      impact: 'Regional'
    },
    {
      title: '350+ DSA Problems Solved',
      description: 'Consistently solved algorithmic challenges across LeetCode, GeeksforGeeks, and Codeforces',
      icon: <Code className="h-8 w-8" />,
      color: 'bg-purple-500',
      category: 'Programming',
      year: 'Ongoing',
      impact: 'Personal Growth'
    }
  ]

  const stats = [
    { label: 'Hackathons Won', value: '1', description: 'Smart India Hackathon 2024' },
    { label: 'Competition Finals', value: '2+', description: 'National & International' },
    { label: 'DSA Problems', value: '350+', description: 'Multiple Platforms' },
    { label: 'Recognition Level', value: 'National', description: 'SIH Winner' }
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones that reflect dedication, skill, and continuous learning
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="bg-card border border-border text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title} 
              className="bg-card border border-border hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${achievement.color} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {achievement.title}
                      </h3>
                      <div className="flex flex-col items-end space-y-1 ml-2">
                        <Badge variant="outline" className="text-xs whitespace-nowrap">
                          {achievement.year}
                        </Badge>
                        <Badge variant="secondary" className="text-xs whitespace-nowrap">
                          {achievement.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {achievement.impact}
                      </Badge>
                      
                      {achievement.title.includes('Smart India Hackathon') && (
                        <div className="flex items-center space-x-1 text-yellow-500">
                          <Trophy className="h-4 w-4" />
                          <span className="text-xs font-medium">Winner</span>
                        </div>
                      )}
                      
                      {achievement.title.includes('Finalist') && (
                        <div className="flex items-center space-x-1 text-blue-500">
                          <Award className="h-4 w-4" />
                          <span className="text-xs font-medium">Finalist</span>
                        </div>
                      )}
                      
                      {achievement.title.includes('Runner-up') && (
                        <div className="flex items-center space-x-1 text-green-500">
                          <Target className="h-4 w-4" />
                          <span className="text-xs font-medium">Runner-up</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These achievements represent my commitment to excellence and continuous learning. 
                I'm always excited to take on new challenges and contribute to innovative projects.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">Problem Solver</Badge>
                <Badge variant="secondary">Team Leader</Badge>
                <Badge variant="secondary">Innovation Driven</Badge>
                <Badge variant="secondary">Competition Winner</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection