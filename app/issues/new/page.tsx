"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const NewIssuePage = () => {
  return (
    <form className="pt-10 px-9 space-y-4">
      <div>
        <Label htmlFor="issue-title">Issue Title</Label>
        <Input
          id="issue-title"
          type="text"
          placeholder="Enter issue title"
          className="p-5 text-lime-300"
        />
      </div>
      <div>
        <Label htmlFor="issue-description">Issue Description</Label>
        <Textarea
          id="issue-description"
          placeholder="Write your issue description"
          className="p-4 min-h-[150px]"
        />
      </div>
      <Button type="submit">Submit Issue</Button>
    </form>
  );
};

export default NewIssuePage;
