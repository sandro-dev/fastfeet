import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function (date, formatString = 'dd/MM/yyyy') {
  return date
    ? format(parseISO(date), formatString, { locale: pt })
    : '--/--/--';
}
