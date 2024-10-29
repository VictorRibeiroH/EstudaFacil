import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";

const PricingCard = ({
  tier,
  index,
}: {
  tier: {
    name: string;
    price: string;
    features: string[];
  };
  index: number;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{tier.name}</CardTitle>
        <CardDescription className="text-3xl font-bold">
          {tier.price}
          <span className="text-base font-normal">/mês</span>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {tier.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-center">
              <CheckIcon className="h-2 w-5 text-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
