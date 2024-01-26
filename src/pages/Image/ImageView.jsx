import React, { useContext, useEffect } from "react";
import { RootStoreContext } from "../../providers/RootStoreContext";
import { observer } from "mobx-react";
import ButtonComponent from "../../components/button/ButtonComponent";

const ImageView = observer(() => {

  // Stores:
  let rootStore = useContext(RootStoreContext);
  let imageStore = rootStore.imageStore;

  return (
    <div className="w-full flex flex-col gap-4">
        
        {/* Buttons */}
        <div className="w-full flex justify-end">
            <div className="flex w-[40%] gap-2">
            <ButtonComponent
                label="Cancel"
                type="secondary"
                onClickCallback={() => imageStore.cancel()}
            />
            <ButtonComponent
                label="Save"
                type="primary"
                loadingLabel="Running"
                onClickCallback={() => imageStore.save()}
            />
            </div>
        </div>
    </div>
  );
});

export default ImageView;