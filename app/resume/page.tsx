import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    "David Perry's Resume. Airbnb, ResearchHub, The Timken Company, Austin Web & Design, Rang Technologies Inc, SEU BS, ACC alum",
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Experienced Senior Full Stack Engineer with <b>15+ years</b> of expertise designing and <b>building scalable web applications</b>, <b>cloud-native systems</b>, and <b>distributed architectures</b>.
            Skilled in <b>frontend</b> and <b>backend</b> development, <b>microservices</b>, <b>cloud platforms</b>, <b>DevOps</b>, and <b>AI-powered solutions</b>, with a proven track record of <b>delivering reliable, high-quality</b> software across <b>startup</b> and <b>enterprise</b> environments.
            <br />SEU BS, ACC alum, Senior Software Engineer at Airbnb
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
