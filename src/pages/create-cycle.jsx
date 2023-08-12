import { Button } from "../components/ui/button";
import AuthLayout from "../layout";
import CreateProjectLevel from "../layout/create-project-level";
import TextInput from "../ui/text-input";

const CreateCyclePage = () => {

  return (
    <AuthLayout>
      <div className="mt-8 px-[400px] h-[90vh]">
        <h1 className="underline underline-offset-8 text-center">
          Create a project
        </h1>
        <CreateProjectLevel />

        <div className="mt-14">
          <h1 className="font-bold text-[22px]">Cycles</h1>
          <p className="text-[12px] mt-2 pr-12">
            With unlocked cycles, you can edit your project&apos;s rules at any time.
            With locked cycles, you can lock your project&apos;s rules for a period
            of time (like 3 minutes, 2 years, or 14 days), helping you build
            trust with your supporters. This choice isn&apos;t permanent — you can
            switch between locked and unlocked cycles in the future.
          </p>

          <div className="mt-8 border border-fuchsia-500 rounded-lg p-4">
            <h1 className="font-bold">Locked Cycled</h1>
            <p className="text-xs mt-2">Set a duration for locked cycles</p>

            <form>
              <TextInput
                name="duation"
                label="Cycle duration (days)"
                type="number"
                placeholder="0"
              />
              <p className="text-fuchsia-500 text-xs mt-2">Note: Only days allowed</p>

              <TextInput
                name="time"
                label="Set a future date & time to start your project's first cycle."
                type="date"
                placeholder="0"
              />
            </form>
          </div>

          <div className="justify-between w-full flex my-10">
          <Button
                className="bg-transparent border border-fuchsia-500 px-12"
              >
                Back
              </Button>
              <Button
                className="bg-fuchsia-500 px-12"
              >
                Next
              </Button>
            </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default CreateCyclePage;
