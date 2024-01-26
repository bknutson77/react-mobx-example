import { makeAutoObservable } from "mobx";

export default class AuthenticationStore {
  initialize() {
    this.isAuthenticated = false;
    this.configured = false;
  }

  constructor(rootStore) {
    this.initialize(); // Initialize upon entry into the web-app, once.
    this.rootStore = rootStore; // All stores inherit root store.
    makeAutoObservable(this); // Make all stores auto observable for automatic data binding.
  }

  configureAuthentication() {
    this.configured = true;
  }

  checkAuthentication() {
    this.isAuthenticated = true;
  }
}
