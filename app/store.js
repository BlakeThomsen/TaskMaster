import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: [
    new List({ name: "Sunday" }),
    new List({ name: "Monday" }),
    new List({ name: "Tuesday" }),
    new List({ name: "Wednesday" }),
    new List({ name: "Thursday" }),
    new List({ name: "Friday" }),
    new List({ name: "Saturday" }),
  ],
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map((l) => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  get State() {
    return _state;
  }

  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
