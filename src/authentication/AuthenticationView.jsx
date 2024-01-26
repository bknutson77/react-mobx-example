import React, { useContext } from "react";
import LoginView from "../pages/Login/LoginView";
import RoutesView from "../routes/RoutesView";
import { RootStoreContext } from "../providers/RootStoreContext";
import { observer } from "mobx-react";

const AuthenticationView = observer(() => {
  // Stores:
  let rootStore = useContext(RootStoreContext);
  let authenticationStore = rootStore.authenticationStore;

  // Configure AWS Amplify and Check Auth:
  if (!authenticationStore.configured) {
    authenticationStore.configureAuthentication();
  }
  if (authenticationStore.isAuthenticated === false){
    authenticationStore.checkAuthentication();
  }

  // If authenticated or if locally developing, offer up the browser router. Else force login:
  if (authenticationStore.isAuthenticated) {
    return <RoutesView />;
  } else {
    return <LoginView />;
  }
});

export default AuthenticationView;
