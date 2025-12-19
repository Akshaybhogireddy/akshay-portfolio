import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built to showcase my skills and projects. Features smooth animations and a clean, modern design.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    learned:
      "Learned responsive design principles, CSS animations, and React component architecture.",
    github: "https://github.com/Akshaybhogireddy",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A full-stack task management application with user authentication, CRUD operations, and a clean UI for organizing daily tasks.",
    tools: ["React", "Node.js", "Express", "MongoDB"],
    learned:
      "Gained hands-on experience with REST APIs, database operations, and user authentication flow.",
    github: "https://github.com/Akshaybhogireddy",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that fetches real-time weather data using a public API. Displays current conditions and forecasts for any city.",
    tools: ["JavaScript", "API Integration", "CSS", "HTML"],
    learned:
      "Learned how to work with external APIs, handle asynchronous operations, and parse JSON data.",
    github: "https://github.com/Akshaybhogireddy",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic and personal projects that demonstrate my skills and learning journey.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Project Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Folder className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.demo}
                        className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Project Footer */}
                <div className="p-6 pt-0 mt-auto">
                  {/* What I Learned */}
                  <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs font-medium text-accent mb-1">What I Learned:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.learned}
                    </p>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={18} />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
