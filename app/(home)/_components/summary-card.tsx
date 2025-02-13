import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  userCanAddTransaction?: boolean;
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
  userCanAddTransaction,
}: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4 max-lg:gap-2">
        <div className="flex items-center gap-2">
          {icon}
          <p
            className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
          >
            {title}
          </p>
        </div>
        {size === "large" && (
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        )}
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl max-lg:text-lg" : "text-4xl max-lg:text-2xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
