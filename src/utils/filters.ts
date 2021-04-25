import { FILTERS as cond } from "../constants";

export const filterItems = (items: any[], filter: string) => {
  switch (filter) {
    case cond.abv.asc:
      return abvAscending(items, "abv");
    case cond.abv.desc:
      return abvDescending(items, "abv");
    case cond.name.asc:
      return nameAscending(items, "name");
    case cond.name.desc:
      return nameDescending(items, "name");
    default:
      return items;
  }
};

const abvAscending = (items: any[], value: string) =>
  items.sort((a, b) => a[value] - b[value]);

const abvDescending = (items: any[], value: string) =>
  items.sort((a, b) => b[value] - a[value]);

const nameAscending = (items: any[], value: string) =>
  items.sort((a, b) => a[value].localeCompare(b[value]));

const nameDescending = (items: any[], value: string) =>
  items.sort((a, b) => b[value].localeCompare(a[value]));
