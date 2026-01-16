import React from "react";
import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="relative py-24 px-4">
        {" "}
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold ">
                Passionate Fullstack Developer
              </h3>
              <p className="text-muted-foreground">
                with over 3 years of experience in crafting dynamic and
                responsive web applications. Proficient in JavaScript, React,
                Node.js, and Python, I specialize in building seamless user
                experiences and robust backend systems.
              </p>
              <p className="text-muted-foreground">
                My journey in web development has equipped me with a deep
                understanding of both frontend and backend technologies,
                allowing me to create comprehensive solutions that meet client
                needs.
              </p>
              <p className="text-muted-foreground">
                I am committed to writing clean, efficient code and continuously
                learning new technologies to stay at the forefront of the
                industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justice-center">
                <a href="#contact" className="cosmic-button">
                  {" "}
                  Get In Touch
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  {" "}
                  Download CV
                </a>
              </div>
            </div>
            {/* Right side */}
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      creating responsive and dynamic websites using modern
                      frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      creating responsive and dynamic websites using modern
                      frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Dev</h4>
                    <p className="text-muted-foreground">
                      creating responsive and dynamic websites using modern
                      frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
