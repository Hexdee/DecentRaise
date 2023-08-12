import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import AuthLayout from "../layout";
import FileInput from "../ui/file-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateProjectSchema } from "../validations";
import CreateProjectLevel from "../layout/create-project-level";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ErrorText } from "../ui/error-text";
import { Textarea } from "../components/ui/textarea";
import React, { useState } from "react";
import { handleUploadImage } from "../functions";

const CreateProjectPage = () => {
    const [logo, setLogo] = React.useState([]);
    const [coverImage, setCoverImage] = React.useState([]);
    const [progress, setProgress] = React.useState();
    const [coverImageProgress, setCoverImageProgress] = React.useState();
    const [logoResponse, setLogoResponse] = useState(null);
    const [coverImageResponse, setCoverImageResponse] = useState(null);
    
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(CreateProjectSchema),
    delayError: 1000,
  });

  const handleChangeLogo = (file) => {
    handleUploadImage(file[0], setProgress)
    .then((res) => setLogoResponse(res));
  };

  const handleChangeCoverImage = (file) => {
    handleUploadImage(file[0], setCoverImageProgress)
    .then((res) => setCoverImageResponse(res));
  };

  const prevData = JSON.parse(localStorage.getItem('user_project'))

  const submitForm = (data) => {
    const payload = { ...data, logo: logoResponse?.secure_url, cover_image: coverImageResponse?.secure_url };
    prevData ? JSON.stringify(localStorage.setItem('user_project', { ...payload, payload })) : JSON.stringify(localStorage.setItem('user_project', payload, payload));
  }

  return (
    <AuthLayout>
      <div className="mt-8 px-[400px]">
        <h1 className="underline underline-offset-8 text-center">
          Create a project
        </h1>     

        <CreateProjectLevel />

        <div className="mt-14">
          <h1 className="font-bold text-[22px]">Project Details</h1>
          <p className="text-[12px] mt-2 pr-12">
            Enter your project&apos;s details. You can edit your project&apos;s
            details at any time after you deploy your project, but the
            transaction will cost gas.
          </p>

          <form className="mt-8" onSubmit={handleSubmit(submitForm)}>
            <Label htmlFor='project_name' className='text-sm'>Project Name *</Label>
            <Input {...register("project_name")} id="project_name" placeholder="Enter your project name" name="project_name" className="rounded-lg mt-2 placeholder:text-xs mb-8" error={errors && errors.project_name?.message} />
            <ErrorText message={errors && errors.project_name?.message} />

            <Label htmlFor='tagline' className='text-sm'>Project tagline *</Label>
            <Input {...register("tagline")} id="tagline" placeholder="Enter your project tagline" name="tagline" className="rounded-lg mt-2 placeholder:text-xs mb-8" error={errors && errors.tagline?.message} />
            <ErrorText message={errors && errors.tagline?.message} />


            <Label htmlFor='project_description' className='text-sm'>Project description *</Label>
            <Textarea {...register("project_description")} id="project_description" placeholder="Enter your project description" name="project_description" className="rounded-lg mt-2 placeholder:text-xs" error={errors && errors.project_description?.message} />
            <ErrorText message={errors && errors.project_description?.message} />

            <FileInput handleChangeFile={handleChangeLogo} setFiles={setLogo} files={logo} progress={progress} fileName={logoResponse && logoResponse.original_filename || ''} />

            <div className="flex justify-between mb-8">
              <div>
                <Label htmlFor='website_link' className='text-sm'>Website link</Label>
                <Input {...register("website_link")} id="website_link" placeholder="Enter your website link" name="website_link" className="rounded-lg mt-2 placeholder:text-xs" error={errors && errors.website_link?.message} />
                <ErrorText message={errors && errors.website_link?.message} />
              </div>
              <div>
                <Label htmlFor='project_owner_address' className='text-sm'>Twitter handle</Label>
                <Input {...register("twitter_handle")} id="twitter_handle" placeholder="Enter your twitter handle" name="twitter_handle" className="rounded-lg mt-2 placeholder:text-xs" error={errors && errors.twitter_handle?.message} />
                <ErrorText message={errors && errors.twitter_handle?.message} />
              </div>
            </div>

                <Label htmlFor='project_owner_address' className='text-sm'>Project owner address</Label>
                <Input {...register("project_owner_address", { required: true })} id="project_owner_address" placeholder="00xxxxxxxx" name="project_owner_address" className="rounded-lg mt-2 placeholder:text-xs" error={errors && errors.project_owner_address?.message} />
                <ErrorText message={errors && errors.project_owner_address?.message} />

            <FileInput handleChangeFile={handleChangeCoverImage} setFiles={setCoverImage} files={coverImage} progress={coverImageProgress} fileName={coverImageResponse && coverImageResponse.original_filename || ''} label="Cover Image" />

            <div className="justify-end w-full flex my-10">
              <Button
                className="bg-fuchsia-500 px-12"
                disabled={!isDirty || !isValid || !logoResponse}
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
