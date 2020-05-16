import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;
    this.tasks = data.tasks || [];
  }
  get Template() {
    return /*html*/ `
    <div class="col-3 mb-2">
    <div class="card shadow">
        <div class="card-body d-flex flex-column">
        <div class="card-header bg-info mb-1"></div>
            <i class="fas fa-times text-danger align-self-end action"
                onclick="app.listController.deleteList('${this.id}')"></i>
            <h4 class="card-title">${this.name}</h4>
            <ul class="pl-3">
                ${this.TasksTemplate}
            </ul>
            <form onsubmit="app.listController.addTask(event, '${this.id}')">
                <div class="form-group d-flex">
                    <input type="text" class="form-control" name="task" id="task"
                        aria-describedby="helpId" placeholder="Task..." required>
                    <button type="submit" class="btn btn-outline-success ml-1"><i
                            class="fas fa-plus "></i></button>
                </div>
            </form>
        </div>
    </div>
</div>
    `;
  }
  get TasksTemplate() {
    let template = "";
    this.tasks.forEach((task, index) => {
      template += /*html*/ `
        <li>${task}
            <i class="fas fa-times text-danger action"
                onclick="app.listController.deleteTask('${this.id}', ${index})"></i>
        </li>
        `;
    });
    return template;
  }
}
