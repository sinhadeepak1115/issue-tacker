"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const route = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  console.log(register("title"));
  return (
    <form
      className="pt-10 px-9 space-y-4"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/issues", data);
          route.push("/issues");
        } catch (error) {
          console.error("Error submitting issue:", error);
        }
      })}
    >
      <div>
        <Label htmlFor="issue-title">Issue Title</Label>
        <Input
          id="issue-title"
          type="text"
          placeholder="Enter issue title"
          className="p-5 text-lime-300"
          {...register("title")}
        />
      </div>
      <div>
        <Label htmlFor="issue-description">Issue Description</Label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              id="issue-description"
              placeholder="Write your issue description"
              className="p-4 min-h-[150px]"
              {...field}
            />
          )}
        ></Controller>
      </div>
      <Button type="submit">Submit Issue</Button>
    </form>
  );
};

export default NewIssuePage;
