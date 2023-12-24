import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleOff } from "lucide-react";

export const MonthCanceledOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <CircleOff className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-600 dark:text-emerald-400">-4%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
};
