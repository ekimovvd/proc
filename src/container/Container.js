import { buildObjectFromStr } from "../functions/functions";

export function Container() {
  this.arr = [];
}

export function containerClear(container) {
  container.arr = [];
}

export function containerMultimethod(array, file, writeStrFromFile) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      switch (array[i].className) {
        case "Trees":
          switch (array[j].className) {
            case "Trees":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Trees - Trees");
              break;
            case "Shrubs":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Trees - Shrubs");
              break;
          }
          break;
        case "Shrubs":
          switch (array[j].className) {
            case "Trees":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Shrubs - Trees");
              break;
            case "Shrubs":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Shrubs - Shrubs");
              break;
          }
          break;
      }
    }
  }
}
