import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-2">
      {/* ESQUERDA */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo!</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de <strong>gestão financeira</strong>{" "}
          que utiliza IA para monitorar suas movimentações, e oferecer insights
          personalizados, facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline" className="text-bold text-sm">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      {/* DIREITA */}
      <div className="relative hidden h-full w-full md:block">
        <Image
          src="/login.svg"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
