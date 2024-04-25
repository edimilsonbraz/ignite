import moment from "moment";


export function formattedDate(date: string) {
  return moment(date).fromNow();
}