import { parseISO, format } from 'date-fns'

export default function PostDate({ dateString, classname }) {
  const date = parseISO(dateString);
  return <time className={classname} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}