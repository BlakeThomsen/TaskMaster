import _listService from "../Services/ListService.js";
import _store from "../store.js";

function _drawLists() {
  let lists = _store.State.lists;
  let template = "";
  lists.forEach((p) => (template += p.Template));
  document.getElementById("lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }
  addList(e) {
    e.preventDefault();
    let rawList = {
      name: e.target.name.value,
    };
    _listService.addList(rawList);
    _drawLists();
  }
  deleteList(id) {
    _listService.deleteList(id);
    window.confirm("Are you sure you want to delete this list?");
    _drawLists();
  }
  addTask(e, listId) {
    e.preventDefault();
    let task = e.target.task.value;
    try {
      _listService.addTask(task, listId);
    } catch (error) {
      alert(error.message);
    }
    _drawLists();
  }
  deleteTask(listId, index) {
    _listService.deleteTask(listId, index);
    window.confirm("Are you sure you want to delete this task?");
    _drawLists();
  }
}
