import { Button } from "../components/ui/button";

const Navbar = () => {
  return (
    <nav className="px-24 -mt-2">
      <div className="flex items-center w-full justify-between">
        <div className="w-[60vw] flex items-center">
          <div className="flex items-center w-[22vw]">
            <img src="/decent-logo.svg" alt="logo" width={40} />
            <h1 className="text-[24px] font-medium ml-2">Decentraise</h1>
          </div>

          <div className="flex text-sm w-[16vw] justify-between font-medium">
            <p className="cursor-pointer hover:text-fuchsia-500">Explore</p>
            <p className="cursor-pointer hover:text-fuchsia-500">
              Start a project
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          className="border-l-fuchsia-200 border-[0.5px] bg-transparent"
        >
          Connect wallet
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
