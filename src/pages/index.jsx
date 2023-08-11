import { Button } from "../components/ui/button";
import AuthLayout from "../layout";

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
  </AuthLayout>
);

export default Home;
