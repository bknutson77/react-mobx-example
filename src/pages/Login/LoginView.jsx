import React, { useContext } from "react";
import { RootStoreContext } from "../../providers/RootStoreContext";
import { observer } from "mobx-react";

const LoginView = observer(() => {

  // Stores:
  let rootStore = useContext(RootStoreContext);
  let loginStore = rootStore.loginStore;

  return (
    <div className="flex items-center justify-center">Hello World</div>
  );
});

export default LoginView;
