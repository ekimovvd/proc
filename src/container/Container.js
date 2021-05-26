import {
  numberLetters,
  compare,
  buildObjectFromStr,
} from "../functions/functions";

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

export function skip(container, file, writeStrFromFile, skipId) {
  container.arr.forEach((obj) => {
    if (obj.id === skipId.toString()) {
      writeStrFromFile(file, buildObjectFromStr(obj));
    }
  });
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
