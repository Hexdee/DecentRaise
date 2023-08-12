import { Button } from "../components/ui/button";
import AuthLayout from "../layout";
import ProjectCard from "../ui/card";
import { projects } from "../utils";

const Home = () => (
  <AuthLayout>
    <h1 className="text-[70px] font-bold mt-36 mx-auto text-center">
      Fund your idea
    </h1>
    <h3 className="mt-12 w-[50%] text-center mx-auto text-[14px] text-fuchsia-200">
      Join thousands of projects using Decentrainse to fund, operate, and scale
      their ideas & communities transparently on Ethereum.
    </h3>

    <div className="w-[50%] mt-10 justify-center mx-auto flex">
      <Button
        variant="outline"
        className="border-l-fuchsia-200 border-[0.5px] bg-transparent h-[50px] px-8 font-bold"
      >
        Explore projects
      </Button>
      <Button
        variant="outline"
        className=" bg-fuchsia-500 border-none h-[50px] px-8 text-primary font-bold ml-6"
      >
        Start a project
      </Button>
    </div>

    <div className="px-24 mt-12">
      <h3 className="underline underline-offset-8 cursor-pointer hover:text-fuchsia-500 mb-6">
        Explore Ideas
      </h3>
      <div className="w-full overflow-x-auto block md:flex flex-row flex-wrap">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            desc={project.desc}
            title={project.title}
            volume={project.volume}
            payment={project.amount}
            imgUrl={project.img}
          />
        ))}
      </div>
    </div>
  </AuthLayout>
);

export default Home;
