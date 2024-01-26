import { makeAutoObservable } from "mobx";

export default class UserStore {
  initialize() {
    this.projectList = [];
  }

  constructor(rootStore) {
    this.initialize(); // Initialize upon entry into the web-app, once.
    this.rootStore = rootStore; // All stores inherit root store.
    makeAutoObservable(this); // Make all stores auto observable for automatic data binding.
  }

  async populate() {
    let projectList = await this.rootStore.apiStore.getAllProjects();
    if (!projectList.error) {
      this.projectList = projectList;
    }
  }
}
