import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { PiRocketLaunchBold } from "react-icons/pi";
import { VscGithubInverted } from "react-icons/vsc";

export function SignIn() {
  return (
    <>
      <div className="space-y-1 w-1/3 ">
        <h2 className="text-2xl">Boas vindas!</h2>
        <p className="text-sm">Faça seu login ou acesse como visitante.</p>
      </div>
      <div className="flex flex-col gap-4 w-1/3">
        <Button className="h-14 flex gap-4 text-md bg-muted text-accent-foreground dark:hover:bg-slate-700 hover:bg-slate-300">
          {" "}
          <FcGoogle className="h-8 w-8" />
          Entrar com Google
        </Button>
        <Button className="h-14 flex gap-4 text-md bg-muted text-accent-foreground dark:hover:bg-slate-700 hover:bg-slate-300">
          {" "}
          <VscGithubInverted className="h-8 w-8" /> Entrar com GitHub
        </Button>
        <Button className="h-14 flex gap-4 text-md bg-muted text-accent-foreground  dark:hover:bg-slate-700 hover:bg-slate-300">
          {" "}
          <PiRocketLaunchBold className="h-8 w-8" /> Acessar como visitante
        </Button>
      </div>
    </>
  );
}
