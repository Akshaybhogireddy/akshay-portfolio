import { User, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* About Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">

            {/* Who I Am */}
            <div className="group text-center p-6 rounded-xl bg-card shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <User className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Who I Am
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A B.Tech Data Science fresher with foundational knowledge in computer science and data analytics, seeking opportunities to apply skills, learn continuously, and contribute effectively.
              </p>
            </div>

            {/* My Goal */}
            <div className="group text-center p-6 rounded-xl bg-card shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                My Goal
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To build a strong career in the IT industry by contributing to impactful projects and continuously upgrading my technical skills.
              </p>
            </div>

            {/* My Approach */}
            <div className="group text-center p-6 rounded-xl bg-card shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Lightbulb className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                My Approach
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To build a strong career in the IT industry by learning continuously and contributing effectively to impactful projects.
              </p>
            </div>
          </div>

          {/* Detailed About */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a B.Tech student specializing in Data Science with a strong interest in technology and problem-solving. During my academic journey, I am building a solid foundation in programming, data structures, algorithms, and database management, along with exposure to data analysis and analytical thinking.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a quick learner who enjoys taking on challenges and finding efficient solutions. My academic projects have provided me with hands-on experience using modern tools and fundamental development practices.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                Problem Solving
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                Logical Thinking
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                Communication Skills
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                Detail Oriented
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                Willingness to Learn
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
