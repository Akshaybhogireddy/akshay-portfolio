import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="text-accent" />
                Education
              </h3>

              <div className="space-y-6">
                {/* B.Tech */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        B.Tech in Data Science
                      </h4>
                      <p className="text-accent text-sm font-medium">
                        [aditya engineering college]
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <Calendar size={14} />
                        <span>2022 - 2025</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">
                        CGPA: 8.02/10 
                      </p>
                      <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                        <li>• Core subjects: DSA, DBMS, OS, Computer Networks</li>
                        <li>• Participated in college technical events</li>
                        
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 12th */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        Higher Secondary (12th)
                      </h4>
                      <p className="text-accent text-sm font-medium">
                        [NRI Junior College]
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <Calendar size={14} />
                        <span>2020 - 2022</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">
                        Percentage: 88.8% | Stream: Science (MPC)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="text-accent" />
                Certifications & Achievements
              </h3>

              <div className="space-y-4">
                {[
                
                  {
                    title: "Database solutions",
                    issuer: "WIPRO TALENTNEXT",
                    date: "2025",
                  },
                  {
                    title: "Front End Web Developer",
                    issuer: "Infosys Springboard",
                    date: "2025",
                  },
                  {
                    title: "Data Analysis Using Python",
                    issuer: "APSSDC",
                    date: "2024",
                  },
                  {
                    title: "Java Programming Fundamentals",
                    issuer: "GalileoX",
                    date: "2024",
                  },
                  {
                    title: "Python for Data Science",
                    issuer: "NPTEL",
                    date: "2023",
                  }
                ].map((cert) => (
                  <div
                    key={cert.title}
                    className="bg-card rounded-xl p-4 shadow-card flex items-center gap-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-sm">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Achievements */}
              <div className="mt-6 bg-card rounded-xl p-6 shadow-card">
                <h4 className="font-semibold text-foreground mb-3">
                  Other Achievements
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Solved 200+ problems on LeetCode/HackerRank
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Participated in college hackathon
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Scored 540 in the CoCubes Assessment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
