"use client";

import { useForm } from "react-hook-form";

export default function SummaryForm() {
  const form = useForm();

  return (
    <textarea
      {...form.register("summary")}
      placeholder="Professional Summary"
    />
  );
}