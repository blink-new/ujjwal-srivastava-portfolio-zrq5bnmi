import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Download, Mail, Github, Linkedin } from 'lucide-react'

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = "Winner SIH'24 | Full-Stack & AI Developer | Data Science & DSA Enthusiast"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    window.open('#', '_blank')
  }

  const handleContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Terminal Window */}
        <div className="bg-card border border-border rounded-lg shadow-2xl mb-8 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-muted px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm text-muted-foreground font-mono">ujjwal@portfolio:~$</span>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 sm:p-8 bg-card">
            <div className="font-mono text-left space-y-2 text-sm sm:text-base">
              <div className="text-primary">$ whoami</div>
              <div className="text-muted-foreground">ujjwal-srivastava</div>
              <div className="text-primary">$ cat profile.txt</div>
              <div className="text-muted-foreground min-h-[1.5rem]">
                {displayedText}
                <span className={`inline-block w-2 h-5 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Ujjwal</span>{' '}
            <span className="text-primary">Srivastava</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Final-year B.Tech CSE (AI & ML) student at NIET, Greater Noida, passionate about building intelligent systems and scalable applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              onClick={handleContact}
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 pt-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              onClick={() => window.open('https://linkedin.com/in/ujjwal-srivastava', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              onClick={() => window.open('https://github.com/ujjwal-srivastava', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection