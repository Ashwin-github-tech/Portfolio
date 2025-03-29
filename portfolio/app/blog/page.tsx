import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Tag } from "lucide-react"

export default function BlogPage() {
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
              <Link href="/blog" className="hover:text-blue-400 transition-colors font-medium text-blue-400">
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
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-slate-300 mb-8">Thoughts, tutorials, and insights on technology</p>

          <div className="space-y-10">
            {/* Blog Post 1 */}
            <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Modern Web Development Practices"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Modern Web Development Practices in 2024</h2>

                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Calendar size={14} />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Clock size={14} />
                    <span>12 min read</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Tag size={14} />
                    <span>Web Development</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">
                  An exploration of the latest trends, tools, and best practices in modern web development. From server
                  components to edge computing, discover how the landscape is evolving and what skills you need to stay
                  relevant as a developer.
                </p>

                <Button className="bg-blue-600 hover:bg-blue-700">Read Article</Button>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Machine Learning for Developers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Getting Started with Machine Learning: A Developer's Guide</h2>

                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Calendar size={14} />
                    <span>February 28, 2024</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Clock size={14} />
                    <span>15 min read</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Tag size={14} />
                    <span>Machine Learning</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">
                  A comprehensive introduction to machine learning concepts for software developers. Learn how to
                  integrate AI capabilities into your applications without needing a PhD in data science, with practical
                  examples and starter code.
                </p>

                <Button className="bg-blue-600 hover:bg-blue-700">Read Article</Button>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Blockchain Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Building Your First Smart Contract on Ethereum</h2>

                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Calendar size={14} />
                    <span>January 10, 2024</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Clock size={14} />
                    <span>18 min read</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Tag size={14} />
                    <span>Blockchain</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">
                  A step-by-step tutorial on creating, testing, and deploying your first Ethereum smart contract. This
                  guide covers the basics of Solidity programming, development environment setup, and best practices for
                  secure blockchain development.
                </p>

                <Button className="bg-blue-600 hover:bg-blue-700">Read Article</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

