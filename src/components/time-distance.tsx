import { formatDistanceToNow } from "date-fns";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale/pt-BR";

interface TimeDistanceProps {
  dateUp: string;
}
export function TimeDistance({ dateUp }: Readonly<TimeDistanceProps>) {
  const date = formatDistanceToNow(dateUp, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <time
      title={format(dateUp, "PPPP", { locale: ptBR })}
      className="text-sm text-muted-foreground "
    >
      {date}
    </time>
  );
}
