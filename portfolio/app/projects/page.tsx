import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
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
              <Link href="/projects" className="hover:text-blue-400 transition-colors font-medium text-blue-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-slate-300 mb-8">A collection of my recent work and personal projects</p>

          <div className="grid gap-8">
            {/* Project 1 */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-white">E-Commerce Platform</CardTitle>
                    <CardDescription className="text-slate-300">Full-stack online shopping solution</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-600">React</Badge>
                    <Badge className="bg-green-600">Node.js</Badge>
                    <Badge className="bg-yellow-600">MongoDB</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  A comprehensive e-commerce platform featuring user authentication, product management, shopping cart
                  functionality, and secure payment processing with Stripe integration. The application includes an
                  admin dashboard for inventory management and sales analytics.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github size={16} /> Source
                  </Button>
                  <Button size="sm" className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink size={16} /> Demo
                  </Button>
                </div>
                <span className="text-sm text-slate-400">Completed: March 2024</span>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-white">AI Task Manager</CardTitle>
                    <CardDescription className="text-slate-300">Smart productivity application</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-600">Next.js</Badge>
                    <Badge className="bg-purple-600">TensorFlow.js</Badge>
                    <Badge className="bg-orange-600">Firebase</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  An intelligent task management system that uses machine learning to analyze user behavior and optimize
                  task scheduling. Features include automated priority assignment, smart reminders, and productivity
                  analytics to help users maximize their efficiency.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github size={16} /> Source
                  </Button>
                  <Button size="sm" className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink size={16} /> Demo
                  </Button>
                </div>
                <span className="text-sm text-slate-400">Completed: February 2024</span>
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-white">Blockchain Voting System</CardTitle>
                    <CardDescription className="text-slate-300">Secure digital voting platform</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-600">Solidity</Badge>
                    <Badge className="bg-gray-600">Ethereum</Badge>
                    <Badge className="bg-pink-600">Web3.js</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  A decentralized voting application built on Ethereum blockchain that ensures transparency and security
                  in the voting process. The system includes voter verification, tamper-proof ballot counting, and
                  real-time results visualization.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github size={16} /> Source
                  </Button>
                  <Button size="sm" className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink size={16} /> Demo
                  </Button>
                </div>
                <span className="text-sm text-slate-400">Completed: January 2024</span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

