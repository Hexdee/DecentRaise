import { Button } from "../components/ui/button";
import AuthLayout from "../layout";
import FileInput from "../ui/file-input";
import TextInput from "../ui/text-input";
import TextAreaInput from "../ui/textarea-input";

const CreateProjectPage = () => (
    <AuthLayout>
        <div className="mt-8 px-[400px]">
            <h1 className="underline underline-offset-8 text-center">Start by creating a project</h1>

            <div className="mt-14">
                <h1 className="font-bold text-[22px]">Project Details</h1>
                <p className="text-[12px] mt-2 pr-12">Enter your project&apos;s details. You can edit your project&apos;s details at any time after you deploy your project, but the transaction will cost gas.</p>

                <form className="mt-8">
                    <TextInput name="project_name" label="Project name *" placeholder="Enter your project name" />
                    <TextInput name="tagline" label="Project tagline" placeholder="Enter your tagline (min. 50 characters)" />
                    <TextAreaInput name="description" label="Project description *" placeholder="Write a full description about the project" />
                    <FileInput />
                    <div className="flex justify-between">
                        <div>
                            <TextInput name="project_name" label="Website *" placeholder="Enter your website link" />
                        </div>
                        <div>
                            <TextInput name="project_name" label="Twitter *" placeholder="Enter your project name" />
                        </div>
                    </div>
                    <TextInput name="project_owner_address" label="Project owner address (optional)" placeholder="00xxxxxxxx" />
                    <FileInput />

                    <div className="justify-end w-full flex my-10">
                        <Button className="bg-fuchsia-500 px-12">Next</Button>
                    </div>
                </form>
            </div>
        </div>
    </AuthLayout>
);

export default CreateProjectPage;