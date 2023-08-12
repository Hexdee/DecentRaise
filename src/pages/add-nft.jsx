import { PlusIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import AuthLayout from "../layout";
import TextInput from "../ui/text-input";
import { useState } from "react";
import { Dialog, Label, Pane } from "evergreen-ui";
import FileInput from "../ui/file-input";
import TextAreaInput from "../ui/textarea-input";
import CreateProjectLevel from "../layout/create-project-level";
import { useNavigate } from "react-router-dom";
import { handleUploadImage } from "../functions";

const AddNFtPage = () => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [uploadResponse, setUploadResponse] = useState(null);
  const [nftName, setNftName] = useState('');
  const [nftDesc, setNftDesc] = useState('');
  const [progress, setProgress] = useState();
  const [image, setImage] = useState();


  const handleChangeImage = (file) => {
    handleUploadImage(file[0], setProgress)
    .then((res) => setUploadResponse(res));
  };

  const handleSubmitFile = () => {
    const payload = { nftName, nftDesc, image: uploadResponse?.secure_url }
    console.log(payload)
  }

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
                <FileInput handleChangeFile={handleChangeImage} setFiles={setImage} files={image} progress={progress} fileName={uploadResponse && uploadResponse.original_filename || ''} progressClassName="text-black" />
                </div>

                <TextInput
                  name="name"
                  label="Name *"
                  placeholder="Enter your project name"
                  className="bg-fuchsia-white text-black placeholder:text-black"
                  labelClassName="text-black"
                  value={nftName}
                  onChange={({ target }) => setNftName(target.value)}
                />

                <TextAreaInput
                  name="description"
                  label="NFT description *"
                  placeholder="Write a full description about the NFT"
                  className="bg-fuchsia-white text-black placeholder:text-black"
                  labelClassName="text-black"
                  value={nftDesc}
                  onChange={({ target }) => setNftDesc(target.value)}
                />

                <div className="justify-between w-full flex my-10">
                  <Button className="bg-transparent border border-fuchsia-500 px-12 text-black" onClick={() => setIsShown(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-fuchsia-500 px-12" disabled={!nftDesc || !nftName || !uploadResponse} onClick={handleSubmitFile}>Add NFT</Button>
                </div>
              </Dialog>

              <button className="flex" onClick={() => setIsShown(true)}>
                <PlusIcon />
                <p className="ml-2">Add NFT</p>
              </button>
            </Pane>
          </div>

          <div className="justify-between w-full flex my-10">
            <Button className="bg-transparent border border-fuchsia-500 px-12" onClick={() => navigate(-1)}>
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
