
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 88 },
        { name: "JAX-RS RESTEasy", level: 85 },
        { name: "Microservices", level: 87 },
        { name: "SQL", level: 82 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Jenkins", level: 78 },
        { name: "OpenShift", level: 75 },
        { name: "PCF", level: 73 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 83 },
        { name: "Git", level: 90 },
        { name: "CA API Gateway", level: 80 },
        { name: "JUnit", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern backend technologies and cloud platforms, 
            with AWS certification and hands-on microservices experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-primary/10 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                🏆 AWS Certified Developer – Associate
              </h3>
              <p className="text-muted-foreground">
                Validated expertise in developing and maintaining applications on AWS
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
