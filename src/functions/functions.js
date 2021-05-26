import { Trees } from "../trees/Trees";
import { Shrubs } from "../shrubs/Shrubs";

export function switchedObject(array, container) {
  let trees = null;
  let shrubs = null;

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
