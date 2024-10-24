import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return <MaxWidthWrapper>
    <HeroSection />
  </MaxWidthWrapper>;
}

function HeroSection() {
  return (
    <div className="py-20 md:py-28 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Desenvolva Planos de Aula Envolventes em Minutos
      </h1>

      <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
        Aprimore suas aulas com planos de aula gerados por IA, personalizados
        para suas necessidades. Economize tempo e inspire seus alunos com
        conteúdo criativo e envolvente.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className={buttonVariants()}>
          Comece agora gratuitamente
        </Link>
        <Link href="/pricing"
          className={buttonVariants({
            variant: 'secondary',
          })}
        >Preço</Link>
      </div>
    </div>
  );
}
