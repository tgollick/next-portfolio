import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import WorkExperience from "components/WorkExperience";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ContactMe from "components/ContactMe";
import Link from "next/link";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "typings";
import { fetchSkills } from "utils/fetchSkills";
import { fetchExperiences } from "utils/fetchExperiences";
import { fetchProjects } from "utils/fetchProjects";
import { fetchSocials } from "utils/fetchSocials";
import { fetchPageInfo } from "utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-darkmain/10 scrollbar-thumb-maincolor/80 text-white bg-darkbackground">
      <Head>
        <title>Tom Gollick - Portfolio</title>
      </Head>

      <Header socials={socials} />

      {/* https://www.youtube.com/watch?v=urgi2iz9P6U&t=276s 2:27:39 */}

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="/#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <svg
              className="h-10 w-10 cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#54BC73"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      socials,
      experiences,
      skills,
      projects,
    },
    revalidate: 10,
  };
};
