import AuthenticationStore from "./authentication/AuthenticationStore";
import ApiStore from "./api/ApiStore";
import RoutesStore from "./routes/RoutesStore";
import LoginStore from "./pages/Login/LoginStore";
import UserStore from "./pages/User/UserStore";
import ProjectStore from "./pages/Project/ProjectStore";
import ImageStore from "./pages/Image/ImageStore";

export default class RootStore {
  constructor() {
    this.authenticationStore = new AuthenticationStore(this);
    this.apiStore = new ApiStore(this);
    this.routesStore = new RoutesStore(this);
    this.loginStore = new LoginStore(this);
    this.userStore = new UserStore(this);
    this.projectStore = new ProjectStore(this);
    this.imageStore = new ImageStore(this);
  }
}
