"use client";

import { useForm } from "react-hook-form";

export default function PersonalInfoForm() {
  const form = useForm();

  return (
    <form className="space-y-4">
      <input
        placeholder="Full Name"
        {...form.register("fullName")}
      />

      <input
        placeholder="Email"
        {...form.register("email")}
      />
    </form>
  );
}