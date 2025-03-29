"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Calendar,
  ChevronRight,
  Code,
  Shield,
  Network,
  Terminal,
  ExternalLink,
  Download,
} from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="order-2 md:order-1">
              <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-none px-3 py-1">
                Cybersecurity & Full Stack Development
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Ashwin Karthik</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 max-w-lg">
                A passionate cybersecurity enthusiast and full stack developer with expertise in CTF challenges, networking, and building efficient web applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-none">
                    View Projects
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <Link href="https://github.com/ashwinkarthik" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </Link>
                <Link href="https://linkedin.com/in/ashwinkarthik" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </Link>
                <Link href="mailto:ashwinkarthikm.official@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur-md"></div>
                <div className="absolute inset-1 rounded-full bg-gray-900"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gray-800">
                  <Image src="/your-image.jpg" alt="Ashwin Karthik" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
            <Badge className="mb-2 bg-purple-600/20 text-purple-400 border-none px-3 py-1">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Personal Info</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Get to know more about my background, skills, and interests</p>
          </motion.div>
          <div className="flex justify-center">
            <a href="./new_resume.pdf" download className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-2 px-4 rounded-md flex items-center gap-2">
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>

      {/* Education & Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-2 bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 border-none px-3 py-1">
                Education
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Academic Background</h2>

              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l border-gray-700">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                  <h3 className="text-xl font-semibold text-white">B.Tech Information Technology</h3>
                  <p className="text-purple-400">Bannari Amman Institute of Technology</p>
                  <p className="text-gray-400 text-sm mt-1">2022 – present</p>
                  <p className="text-gray-300 mt-2">CGPA: 8.35</p>
                </div>

                <div className="relative pl-8 pb-6 border-l border-gray-700">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                  <h3 className="text-xl font-semibold text-white">Higher Secondary</h3>
                  <p className="text-purple-400">Swamy Vivekananda PU College</p>
                  <p className="text-gray-400 text-sm mt-1">2020 – 2022</p>
                  <p className="text-gray-300 mt-2">Marks Scored: 552/600 (92%)</p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                  <h3 className="text-xl font-semibold text-white">SSLC</h3>
                  <p className="text-purple-400">Akshaya Academy</p>
                  <p className="text-gray-400 text-sm mt-1">2015 – 2020</p>
                  <p className="text-gray-300 mt-2">Marks Scored: 462/500 (92.5%)</p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="mb-2 bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 border-none px-3 py-1">
                Skills
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Technical Expertise</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="group bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      C
                    </span>
                  </div>
                  <p className="text-center text-gray-300">C</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      Py
                    </span>
                  </div>
                  <p className="text-center text-gray-300">Python</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      C++
                    </span>
                  </div>
                  <p className="text-center text-gray-300">C++</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      Sh
                    </span>
                  </div>
                  <p className="text-center text-gray-300">Shell Script</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      SQL
                    </span>
                  </div>
                  <p className="text-center text-gray-300">SQL</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      JS
                    </span>
                  </div>
                  <p className="text-center text-gray-300">JavaScript</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      FE
                    </span>
                  </div>
                  <p className="text-center text-gray-300">Front-End</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      UI
                    </span>
                  </div>
                  <p className="text-center text-gray-300">UI/UX</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      Flask
                    </span>
                  </div>
                  <p className="text-center text-gray-300">Flask</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-300 mb-2">Django</p>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-cyan-600 w-[85%]"></div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-300 mb-2">Fast API</p>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-cyan-600 w-[80%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <Badge className="mb-2 bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 border-none px-3 py-1">
              Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Recent Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore some of my latest projects and technical implementations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden h-full group-hover:border-purple-500/50 transition-all duration-300">
                <div className="relative h-48 w-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Terminal className="text-gray-300 w-12 h-12" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Inventory Management</h3>
                  <p className="text-gray-400 mb-4">
                    Developed an inventory management and invoicing system using Flask framework and HTML, CSS,
                    JavaScript.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Flask</Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">JavaScript</Badge>
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">HTML/CSS</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-300"
                  >
                    View Project <ChevronRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden h-full group-hover:border-cyan-500/50 transition-all duration-300">
                <div className="relative h-48 w-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Shield className="text-gray-300 w-12 h-12" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Keylogger Enable in Network Domain</h3>
                  <p className="text-gray-400 mb-4">
                    Developed a monitoring system to detect unauthorized activities by capturing keystrokes and
                    identifying the use of predefined blocked words.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Python</Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">Networking</Badge>
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Security</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300"
                  >
                    View Project <ChevronRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden h-full group-hover:border-purple-500/50 transition-all duration-300">
                <div className="relative h-48 w-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Terminal className="text-gray-300 w-12 h-12" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Better-cap Automation</h3>
                  <p className="text-gray-400 mb-4">
                    Automated the use of better-cap tool using bash shell script for more efficient network analysis and
                    security testing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Bash</Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">Shell Script</Badge>
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Networking</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-300"
                  >
                    View Project <ChevronRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden h-full group-hover:border-cyan-500/50 transition-all duration-300">
                <div className="relative h-48 w-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Code className="text-gray-300 w-12 h-12" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Caesar Cipher Decoder</h3>
                  <p className="text-gray-400 mb-4">
                    Created a web tool that can decode caesar cipher using JavaScript, providing an interactive
                    interface for cryptography enthusiasts.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">JavaScript</Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">HTML/CSS</Badge>
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Cryptography</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300"
                  >
                    View Project <ChevronRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden h-full group-hover:border-purple-500/50 transition-all duration-300">
                <div className="relative h-48 w-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Code className="text-gray-300 w-12 h-12" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Resume Builder</h3>
                  <p className="text-gray-400 mb-4">
                    Created a website to make customized resumes, using HTML, CSS and JavaScript with a user-friendly
                    interface and multiple template options.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">HTML</Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">CSS</Badge>
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">JavaScript</Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-300"
                  >
                    View Project <ChevronRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements & Certificates Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-2 bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 border-none px-3 py-1">
                Achievements
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Recognition & Awards</h2>

              <div className="space-y-4">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">3rd Place in Cybermania CTF</h3>
                        <p className="text-gray-400">
                          Demonstrated advanced cybersecurity skills in a competitive environment
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">5th Place in NOVA CTF in yugam-2024</h3>
                        <p className="text-gray-400">
                          Showcased problem-solving abilities in a high-pressure competition
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <ExternalLink size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Participated in World Skills up to round 2</h3>
                        <p className="text-gray-400">
                          Competed in the CyberSecurity category at a prestigious international competition
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                        8
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">8th place in Let's Exploit CTF</h3>
                        <p className="text-gray-400">
                          Demonstrated technical expertise in exploitation techniques and security challenges
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="mb-2 bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 border-none px-3 py-1">
                Certificates
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Professional Certifications</h2>

              <div className="space-y-6">
                <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Shield className="text-cyan-400" size={24} />
                    </div>
                    <Badge className="bg-cyan-500/20 text-cyan-400">Security</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Fortinet Certified Associate in Cyber Security
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Advanced certification validating expertise in network security principles and Fortinet security
                    solutions.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300"
                  >
                    View Certificate
                  </Button>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Shield className="text-cyan-400" size={24} />
                    </div>
                    <Badge className="bg-cyan-500/20 text-cyan-400">Security</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Fortinet Certified Fundamentals in Cyber Security
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Foundation-level certification covering essential cybersecurity concepts and best practices.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300"
                  >
                    View Certificate
                  </Button>
                </div>

                <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Code className="text-purple-400" size={24} />
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-400">Programming</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Fundamentals of Python Programming</h3>
                  <p className="text-gray-400 mb-4">
                    Comprehensive certification from Infosys Springboard covering Python programming concepts and
                    applications.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-300"
                  >
                    View Certificate
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Badge className="mb-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-400 hover:from-purple-600/30 hover:to-cyan-600/30 border-none px-3 py-1">
              Contact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-gray-400">Interested in working together or have a question? Feel free to reach out!</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <Mail className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400 break-all">ashwinkarthikm.official@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400">+91 9344155337</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <Linkedin className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                  <p className="text-gray-400">Connect with me on LinkedIn</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
                <span className="font-bold text-sm">AK</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Ashwin Karthik
              </span>
            </div>

            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Ashwin Karthik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

