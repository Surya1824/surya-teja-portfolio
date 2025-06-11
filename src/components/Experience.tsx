
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      period: "2023 – Present",
      role: "Java Backend Developer",
      company: "Tata Consultancy Services",
      domain: "Insurance",
      location: "Hyderabad, India",
      achievements: [
        "Built and maintained RESTful APIs using Spring Boot and RESTEasy",
        "Created secure API proxies using CA API Gateway",
        "Collaborated with architects and business analysts for feature delivery",
        "Handled production issues with quick resolution and clear ETAs",
        "Wrote comprehensive JUnit tests ensuring code quality"
      ]
    },
    {
      period: "2022 – 2023",
      role: "Software Developer",
      company: "Tata Consultancy Services",
      domain: "Banking & Financial Services",
      location: "Hyderabad, India",
      achievements: [
        "Successfully migrated services from PCF to OpenShift cloud platform",
        "Designed and implemented microservices using Spring Boot and Docker",
        "Conducted performance and load testing using VPE testing tools",
        "Implemented CI/CD pipelines using Jenkins and RLM",
        "Managed version control and release processes with Git and Bitbucket"
      ]
    }
  ];

  const awards = [
    {
      title: "Star of the Sprint",
      description: "Recognized for consistent delivery and high-quality code",
      icon: "⭐"
    },
    {
      title: "Best Team",
      description: "Awarded for exceptional collaboration and innovation",
      icon: "🏆"
    },
    {
      title: "AWS Certified Developer",
      description: "Associate level certification in AWS cloud services",
      icon: "☁️"
    },
    {
      title: "Spring Boot Certified",
      description: "Microservices & Docker certification from Udemy",
      icon: "🎓"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            3.3 years of enterprise software development experience across 
            insurance and banking domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="mb-4">
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.domain} • {exp.location}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Awards & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="p-6 bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl mb-3">{award.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {award.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
