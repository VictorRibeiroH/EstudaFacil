import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import PricingSection from "@/components/common/PricingSection";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/constants";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function Home() {
  return <MaxWidthWrapper>
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <CTASection />
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
        >Planos</Link>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Por que optar pelo nosso organizador de aulas?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {
          features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

function CTASection () {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">
         Quer mudar completamente a forma como planeja suas aulas?
      </h2>
      <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
         Junte-se a centenas de professores que já estão economizando tempo com a criação de planos de aula.
      </p>
      <Link href="/pricing"
        className={buttonVariants()}
      >
        Comece agora mesmo
      </Link>
    </div>
  )
}