import { makeAutoObservable } from "mobx";

export default class RoutesStore {
  initialize() {
    this.errorMessage = "";
    this.showError = false;
  }

  constructor(rootStore) {
    this.initialize(); // Initialize upon entry into the web-app, once.
    this.rootStore = rootStore; // All stores inherit root store.
    makeAutoObservable(this); // Make all stores auto observable for automatic data binding.
  }

  closeError() {
    this.showError = false;
    this.errorMessage = "";
  }
}
