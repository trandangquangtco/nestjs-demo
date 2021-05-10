import * as moment from 'moment';

export function unixYYYYDDMM(date) {
  return moment(date).valueOf() / 1000;
}

export function getTodayUnix() {
  const date = moment().format('YYYY-MM-DD');
  return moment(date).valueOf() / 1000;
}
