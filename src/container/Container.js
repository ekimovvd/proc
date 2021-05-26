import { numberLetters, compare } from "../functions/functions";

export function Container() {
  this.arr = [];
}

export function sorting(container) {
  container.arr.sort((a, b) =>
    compare(numberLetters(a.name), numberLetters(b.name))
  );
}

export function containerClear(container) {
  container.arr = [];
}
