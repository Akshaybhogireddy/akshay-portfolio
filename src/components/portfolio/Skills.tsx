const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "C"],
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "React.js", "Node.js", ],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL (Basics)"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Teamwork", "Time Management", "Adaptability"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical abilities and the technologies I work with.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
