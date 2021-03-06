import { Trees } from "../trees/Trees";
import { Shrubs } from "../shrubs/Shrubs";
import { Flowers } from "../flowers/Flowers";

export function switchedObject(array, container) {
  let trees = null;
  let shrubs = null;
  let flowers = null;

  array.forEach((element) => {
    let params = {
      id: element[0],
      value: element[1],
      name: element[2],
      location: element[3],
    };

    switch (params.id) {
      case "1":
        let treesParams = {
          id: params.id,
          age: params.value,
          name: params.name,
          location: params.location,
        };
        trees = new Trees(treesParams);
        container.arr.push(trees);
        break;
      case "2":
        let shrubsParams = {
          id: params.id,
          month: params.value,
          name: params.name,
          location: params.location,
        };
        shrubs = new Shrubs(shrubsParams);
        container.arr.push(shrubs);
        break;
      case "3":
        let flowersParams = {
          id: params.id,
          type: params.value,
          name: params.name,
          location: params.location,
        };
        flowers = new Flowers(flowersParams);
        container.arr.push(flowers);
        break;
      default:
        break;
    }
  });
}

export function correctFile(data) {
  return data.map((element) => {
    return element.replace("\r", "");
  });
}

export function buildObjectFromStr(obj) {
  let str = "";
  Object.keys(obj).forEach((key) => {
    str += `${key}: ${obj[key]} `;
  });

  return str;
}

export function numberLetters(str) {
  const alphabet = "бвгджзйклмнпрстфхцчшщ".split("");

  let count = 0;
  str = str.toLowerCase().split("");
  str.forEach((element) => {
    alphabet.find((symbol) => {
      if (element === symbol) {
        count += 1;
      }
    });
  });

  return count;
}

export function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

export function checkCorrectData(array) {
  array.forEach((item) => {
    if (!Number.isInteger(Number(item[0]))) {
      throw "Ошибка в id!";
    }
  });
}
