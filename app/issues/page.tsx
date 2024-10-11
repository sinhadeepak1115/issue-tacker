"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <Link href="issues/new" passHref>
        <Button className="bg-red-300">New Issues</Button>
      </Link>
    </div>
  );
};

export default IssuesPage;
