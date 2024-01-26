import { makeAutoObservable } from "mobx";

export default class ImageStore {
  initialize() {
    this.image = {};
  }

  constructor(rootStore) {
    this.initialize(); // Initialize upon entry into the web-app, once.
    this.rootStore = rootStore; // All stores inherit root store.
    makeAutoObservable(this); // Make all stores auto observable for automatic data binding.
  }

  populateImage(image) {
    this.image = image;
  }

  cancel() {
    this.rootStore.projectStore.showImageModal = false;
  }
  
}
