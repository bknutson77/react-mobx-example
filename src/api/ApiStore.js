import { makeAutoObservable } from "mobx";

export default class ApiStore {
  initialize() {
    this.url = "http://localhost:8080";
    this.spoof = true;
  }

  constructor(rootStore) {
    this.initialize(); // Initialize upon entry into the web-app, once.
    this.rootStore = rootStore; // All stores inherit root store.
    makeAutoObservable(this); // Make all stores auto observable for automatic data binding.
  }

  async getProject(projectId) {
    if (this.spoof) {
      return {
        "sk": "PROJECT_2bI4fAyig1BnpYKBZuwv5nTXJ1R",
        "project_description": "This is a set of labeled images containing birds.",
        "project_name": "Bird Detection",
        "pk": "PROJECT"
      }
    }
    var request = new Request(this.url + "/project/" + projectId, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    });
    return await fetch(request)
      .then(response => 
        response.json()
      )
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return {"error": error};
      });
  }

  async getAllProjects() {
    if (this.spoof) {
      return [
        {
            "sk": "PROJECT_2bI4fAyig1BnpYKBZuwv5nTXJ1R",
            "project_description": "This is a set of labeled images containing birds.",
            "project_name": "Bird Detection",
            "pk": "PROJECT"
        }
      ]
    }
    var request = new Request(this.url + "/project", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    });
    return await fetch(request)
      .then(response => 
        response.json()
      )
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return {"error": error};
      });
  }

  async getAllImages(projectId) {
    if (this.spoof) {
      return [
        {
            "image_category": "Training",
            "image_name": "bird1.jpg",
            "image_labels": [],
            "sk": "PROJECT_2bI4fAyig1BnpYKBZuwv5nTXJ1R#IMAGE_2bI6MnaIisaWAo1DlttC2j1bSXf",
            "pk": "IMAGE",
            "image_key": "PROJECT_2bI4fAyig1BnpYKBZuwv5nTXJ1R/IMAGE_2bI6MnaIisaWAo1DlttC2j1bSXf.jpg",
            "image_get_url": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200"
        },
        {
            "image_category": "Training",
            "image_name": "bird2.jpg",
            "image_labels": [],
            "sk": "PROJECT_2bI4fAyig1BnpYKBZuwv5nTXJ1R#IMAGE_2bI6O0lELq8KmXiWgFYJsAHappR",
            "pk": "IMAGE",
            "image_key": "PROJECT_2bI4fAyig1BnpYKBZuwv5nTXJ1R/IMAGE_2bI6O0lELq8KmXiWgFYJsAHappR.jpg",
            "image_get_url": "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png?w=1200"
        }
      ]
    }
    var request = new Request(this.url + "/image/" + projectId, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    });
    return await fetch(request)
      .then(response => 
        response.json()
      )
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return {"error": error};
      });
  }

  async createImage(projectId, imageInput) {
    if (this.spoof) {
      return {"error": true}
    }
    var request = new Request(this.url + "/image/" + projectId, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(imageInput)
    });
    return await fetch(request)
      .then(response => 
        response.json()
      )
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return {"error": error};
      });
  }

  async uploadImage(presignedUrl, imageFile) {
    if (this.spoof) {
      return {"error": true}
    }
    var request = new Request(presignedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "image/jpeg"
      },
      body: imageFile
    });
    return await fetch(request)
      .then(response => {
        return {"message": "Success"};
      })
  }
}