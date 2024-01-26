import { makeAutoObservable } from "mobx";

export default class ProjectStore {
  initialize() {
    this.projectId = "";
    this.project = {};
    this.imageList = [];
    this.newImage = null;
    this.newImageName = "";
    this.showImageModal = false;
  }

  constructor(rootStore) {
    this.initialize(); // Initialize upon entry into the web-app, once.
    this.rootStore = rootStore; // All stores inherit root store.
    makeAutoObservable(this); // Make all stores auto observable for automatic data binding.
  }

  async populateProject() {
    let project = await this.rootStore.apiStore.getProject(this.projectId);
    if (!project.error) {
      this.project = project;
    }
  }

  async populateImages() {
    let imageList = await this.rootStore.apiStore.getAllImages(this.projectId);
    if (!imageList.error) {
      this.imageList = imageList;
    }
  }

  async populate(id) {
    this.projectId = id;
    await this.populateProject();
    await this.populateImages();
  }

  async addImage(event) {

    // If file was selected:
    if (event.target.files[0]) {

      // Grab file:
      this.newImage = event.target.files[0];
      this.newImageName = this.newImage.name;

      // Assemble image input to database:
      let imageInput = {
        "image_key": "",
        "image_name": this.newImageName,
        "image_category": "Training",
        "image_labels": []
      }

      // Create image object in database:
      let image = await this.rootStore.apiStore.createImage(this.projectId, imageInput);
      if (!image.error) {
        
        // Upload image to s3:
        await this.rootStore.apiStore.uploadImage(image["image_put_url"], this.newImage);

        // Update display to show new image:
        await this.populateImages(this.projectId);
      }
    }
  }

  labelImage(image) {
    this.rootStore.imageStore.populateImage(image);
    this.showImageModal = true;
  }
}
