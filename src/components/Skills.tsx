"use client";


import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useInView from "@/hooks/useInView";

const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const frontendSkills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "MUI",
    "Framer Motion",
    "GSAP",
    "TanStack Query",
  ];
  const backendSkills = [
    "Node.js",
    "NestJS",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "GraphQL (Apollo)",
    "Socket.IO",
    "Strapi",
  ];
  const mobileSkills = [
    "React Native",
    "Redux Toolkit",
    "Reanimated",
    "Firebase",
    "App Center",
    "App Store Deploy",
    "Play Store Deploy",
  ];
  const apiSkills = [
    "Axios",
    "SWR",
    "Google Maps API",
    "Geolocation APIs",
    "OAuth 2.0",
    "Firebase Auth",
    "Real-time Tracking",
  ];
  const testingSkills = [
    "Playwright",
    "Appium",
    "Detox",
    "E2E Testing",
    "Browser Automation",
  ];
  const devopsSkills = [
    "AWS Amplify",
    "AWS Lambda",
    "Docker",
    "Vercel",
    "GitHub Actions",
    "CI/CD Pipelines",
  ];
  const observabilityAiSkills = [
    "Sentry",
    "Grafana",
    "Microsoft Clarity",
    "OpenAI",
    "Hume AI",
    "ElevenLabs",
    "Pipecat",
    "n8n Automation",
    "Cursor",
    "Claude Code",
    "ChatGPT",
    "MCP Workflows",
  ];
  
  return (
    <section 
      id="skills" 
      className="py-20"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`card-hover card-animate stagger-1 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Frontend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-2 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Backend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-3 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Mobile Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mobileSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-4 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>APIs & Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {apiSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`card-hover card-animate stagger-5 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Testing & Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {testingSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`card-hover card-animate stagger-6 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Cloud, DevOps & Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {devopsSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`card-hover card-animate stagger-7 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Observability & AI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {observabilityAiSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
