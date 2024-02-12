import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { PiRocketLaunchBold } from "react-icons/pi";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <>
      <div className="space-y-1 w-1/3 ">
        <h2 className="text-2xl">Boas vindas!</h2>
        <p className="text-sm">Faça seu login ou acesse como visitante.</p>
      </div>
      <div className="flex flex-col gap-4 w-1/3">
        <Button variant={"sign"} size={"sign"}>
          <FcGoogle className="h-8 w-8" />
          <span>Entrar com Google</span>
        </Button>
        <Button variant={"sign"} size={"sign"}>
          <VscGithubInverted className="h-8 w-8" />
          <span>Entrar com GitHub</span>
        </Button>
        <Link to={"/home"}>
          <Button variant={"sign"} size={"sign"}>
            <PiRocketLaunchBold className="h-8 w-8" />
            <span>Acessar como visitante</span>
          </Button>
        </Link>
      </div>
    </>
  );
}
