import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import AuthLayout from "../layout";
import FileInput from "../ui/file-input";
import TextInput from "../ui/text-input";
import { yupResolver } from "@hookform/resolvers/yup";
import TextAreaInput from "../ui/textarea-input";
import { CreateProjectSchema } from "../validations";

const CreateProjectPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitting, isValid },
    ...rest
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(CreateProjectSchema),
    delayError: 1000,
  });

  console.log(errors);

  return (
    <AuthLayout>
      <div className="mt-8 px-[400px]">
        <h1 className="underline underline-offset-8 text-center">
          Start by creating a project
        </h1>

        <div className="mt-14">
          <h1 className="font-bold text-[22px]">Project Details</h1>
          <p className="text-[12px] mt-2 pr-12">
            Enter your project&apos;s details. You can edit your project&apos;s
            details at any time after you deploy your project, but the
            transaction will cost gas.
          </p>

          <form className="mt-8">
            <TextInput
              name="project_name"
              label="Project name *"
              placeholder="Enter your project name"
              {...register("project_name", { required: true })}
              errors={errors}
            />
            <TextInput
              name="tagline"
              label="Project tagline"
              placeholder="Enter your tagline (min. 50 characters)"
              {...register("tagline", { required: true })}
              maxLength="50"
              errors={errors}
            />
            <TextAreaInput
              name="description"
              label="Project description *"
              placeholder="Write a full description about the project"
              {...register("description", { required: true })}
              errors={errors}
            />
            <FileInput />
            <div className="flex justify-between">
              <div>
                <TextInput
                  name="website_link"
                  label="Website *"
                  placeholder="Enter your website link"
                  {...register("website_link", { required: false })}
                    errors={errors}
                />
              </div>
              <div>
                <TextInput
                  name="twitter_handle"
                  label="Twitter *"
                  placeholder="Enter your Twitter handle"
                  {...register("twitter_handle", { required: false })}
                    errors={errors}
                />
              </div>
            </div>
            <TextInput
              name="project_owner_address"
              label="Project owner address (optional)"
              placeholder="00xxxxxxxx"
              {...register("project_owner_address", { required: false })}
              errors={errors}
            />
            <FileInput />

            <div className="justify-end w-full flex my-10">
              <Button
                className="bg-fuchsia-500 px-12"
                // disabled={!isDirty || !isValid}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default CreateProjectPage;
