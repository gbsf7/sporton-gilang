"use client";
import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { push } = useRouter();

  const handleSignIn = () => {
    push("/admin/products");
  };
  return (
    <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center">
      <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary py-12 px-18 ">
        <Image
          src="/images/logo-admin.svg"
          width={304}
          height={51}
          alt="SportOn Admin logo"
          className="mx-auto mb-4"
        />
        <p className="text-sm text-center opacity-50 mb-8">
          Enter your credentials to access dashboard
        </p>
        <div>
          <div className="input-group-admin mb-5">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="admin@sporton.com"
              className="rounded-lg!"
            />
          </div>
          <div className="input-group-admin mb-12">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="****************"
              className="rounded-lg!"
            />
          </div>
          <Button className="w-full rounded-lg! mb-8" onClick={handleSignIn}>
            Sign In
          </Button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
