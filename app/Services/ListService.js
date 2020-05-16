import List from "../Models/List.js";
import _store from "../store.js";

//Public
class ListService {
  addList(rawList) {
    let list = new List(rawList);
    _store.State.lists.push(list);
    _store.saveState();
  }
  deleteList(id) {
    _store.State.lists = _store.State.lists.filter((l) => l.id != id);
    _store.saveState();
  }
  addTask(task, listId) {
    let list = _store.State.lists.find((l) => l.id == listId);
    if (list.tasks.length > 7) {
      throw new Error("Too Many Tasks!");
    }
    list.tasks.push(task);
    _store.saveState();
  }
  deleteTask(listId, index) {
    let list = _store.State.lists.find((l) => l.id == listId);
    list.tasks.splice(index, 1);
    _store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;
