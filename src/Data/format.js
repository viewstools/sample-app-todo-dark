// export functions to use in data format
import formatDate from 'date-fns/format';

// in
export function isFilterCompleted(rawValue) {
  return rawValue === 'completed';
}
//out
export function setFilterCompleted() {
  return 'completed';
}

export function isFilterActive(rawValue) {
  return rawValue === 'active';
}

export function setFilterActive() {
  return 'active';
}

export function isFilterAll(rawValue) {
  return rawValue === 'all';
}

export function setFilterAll() {
  return 'all';
}

export function activeCount(rawValue) {
  return rawValue.items.filter((id) => !rawValue.byId[id].isCompleted).length;
}

export function doneCount(rawValue) {
  return rawValue.items.filter((id) => rawValue.byId[id].isCompleted).length;
}

export function dateDayOfWeek(rawValue) {
  return formatDate(rawValue, 'EEEE');
}

export function dateDayTh(rawValue) {
  return formatDate(rawValue, 'do');
}

export function dateMonth(rawValue) {
  return formatDate(rawValue, 'LLLL');
}
