// use NextAuth for varirant login
// if only email and password can only use backend login for basic authentication
// use React-use-form and zod library for form (avoid useState for secure data! in advanced)

"use client";
// import libraries
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import conponents
import { FormField } from "@/components/FormField";
import { Button } from "@/components/Button";

// create validation object
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// simple form used (zod & useForm)
export default function Login() {
  // create form object
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: "example@gmail.com" },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // use Axios or fetch to send request
      const response = await axios.post("/api/form", data);
      const { errors = {} } = response.data;
      console.error(errors);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="flex flex-col items-center min-h-screen gap-4 p-24">
      <div className="text-4xl">Login page</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          type="email"
          name="email"
          register={register}
          error={errors.email}
        />
        <FormField
          type="password"
          name="password"
          register={register}
          error={errors.password}
        />
        <div className="mt-4">
          <Button type="submit" disabled={isSubmitting}>
            submit
          </Button>
        </div>
      </form>
    </main>
  );
}
