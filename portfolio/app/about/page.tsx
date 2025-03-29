import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Youtube, Mail, MapPin, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="font-bold text-xl">AK</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Nexus
            </span>
          </div>
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors font-medium text-blue-400">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Profile Section */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-blue-500/30">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Aswin Karthick"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-1">Aswin Karthick</h2>
                <p className="text-blue-400 mb-4">Full Stack Developer</p>

                <div className="w-full space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-400" />
                    <span>aswin@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span>Bangalore, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-400" />
                    <span>Available for freelance</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 mb-6">
                  <Link
                    href="https://github.com/"
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
                  >
                    <Github size={18} />
                  </Link>
                  <Link
                    href="https://twitter.com/"
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
                  >
                    <Twitter size={18} />
                  </Link>
                  <Link
                    href="https://linkedin.com/"
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
                  >
                    <Linkedin size={18} />
                  </Link>
                  <Link
                    href="https://youtube.com/"
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
                  >
                    <Youtube size={18} />
                  </Link>
                </div>

                <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700">
                  <Download size={16} /> Download Resume
                </Button>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <section>
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Hello! I'm Aswin Karthick, a passionate Full Stack Developer with over 5 years of experience
                    building web and mobile applications. I specialize in creating robust, scalable solutions that solve
                    real-world problems.
                  </p>
                  <p>
                    My journey in technology began when I built my first website at the age of 15. Since then, I've been
                    constantly learning and adapting to new technologies and methodologies. I believe in writing clean,
                    maintainable code and creating intuitive user experiences.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or
                    contributing to open-source projects. I'm always open to new opportunities and collaborations.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>JavaScript/TypeScript</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2 bg-slate-700" indicatorClassName="bg-blue-500" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>React & Next.js</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2 bg-slate-700" indicatorClassName="bg-blue-500" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Node.js & Express</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-slate-700" indicatorClassName="bg-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>MongoDB & SQL</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} className="h-2 bg-slate-700" indicatorClassName="bg-blue-500" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>UI/UX Design</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2 bg-slate-700" indicatorClassName="bg-blue-500" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>DevOps & Cloud</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} className="h-2 bg-slate-700" indicatorClassName="bg-blue-500" />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div className="space-y-6">
                  <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold">Senior Developer</h3>
                    <p className="text-blue-400">TechNova Solutions • 2022 - Present</p>
                    <p className="text-slate-300 mt-2">
                      Led development of enterprise-level web applications using React, Node.js, and AWS. Implemented
                      CI/CD pipelines and mentored junior developers.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                    <p className="text-blue-400">Digital Dynamics • 2019 - 2022</p>
                    <p className="text-slate-300 mt-2">
                      Developed and maintained multiple client projects using MERN stack. Collaborated with design and
                      product teams to deliver high-quality applications.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold">Junior Developer</h3>
                    <p className="text-blue-400">WebCraft Studios • 2017 - 2019</p>
                    <p className="text-slate-300 mt-2">
                      Built responsive websites and implemented frontend features. Gained experience with JavaScript
                      frameworks and version control systems.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="bg-slate-800/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
                  <p className="text-blue-400">National Institute of Technology • 2013 - 2017</p>
                  <p className="text-slate-300 mt-2">
                    Graduated with honors. Specialized in web technologies and software engineering.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

