import { PlusIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import AuthLayout from "../layout";
import TextInput from "../ui/text-input";
import React from "react";
import { Dialog, Label, Pane } from "evergreen-ui";
import FileInput from "../ui/file-input";
import TextAreaInput from "../ui/textarea-input";
import CreateProjectLevel from "../layout/create-project-level";

const AddNFtPage = () => {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <AuthLayout>
      <div className="mt-8 px-[400px] h-[90vh]">
        <h1 className="underline underline-offset-8 text-center">
          Create a project
        </h1>
        <CreateProjectLevel />
        <div className="mt-14">
          <h1 className="font-bold text-[22px]">NFTs</h1>
          <p className="text-[12px] mt-2 pr-12">
            Reward your supporters with custom NFTs.
          </p>

          <div className="mt-8 border border-fuchsia-500 rounded-lg p-4 flex items-center justify-center h-[120px] w-full">
            <Pane>
              <Dialog
                isShown={isShown}
                onCloseComplete={() => setIsShown(false)}
                hasFooter={false}
                title="Add NFT"
              >
                <Label htmlFor="upload" className="text-sm mt-4">
                  Upload NFT Image *
                </Label>
                <div className="-mt-14">
                  <FileInput />
                </div>

                <TextInput
                  name="name"
                  label="Name *"
                  placeholder="Enter your project name"
                  className="bg-fuchsia-white text-black placeholder:text-black"
                  labelClassName="text-black"
                />

                <TextAreaInput
                  name="description"
                  label="NFT description *"
                  placeholder="Write a full description about the NFT"
                  className="bg-fuchsia-white text-black placeholder:text-black"
                  labelClassName="text-black"
                />

                <div className="justify-between w-full flex my-10">
                  <Button className="bg-transparent border border-fuchsia-500 px-12 text-black" onClick={() => setIsShown(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-fuchsia-500 px-12">Add NFT</Button>
                </div>
              </Dialog>

              <button className="flex" onClick={() => setIsShown(true)}>
                <PlusIcon />
                <p className="ml-2">Add NFT</p>
              </button>
            </Pane>
          </div>

          <div className="justify-between w-full flex my-10">
            <Button className="bg-transparent border border-fuchsia-500 px-12">
              Back
            </Button>
            <Button className="bg-fuchsia-500 px-12">Connect wallet to deploy</Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AddNFtPage;
