import Logo from "./src/components/Logo";
import ButtonNavigation from "./src/components/ButtonNavigation";

import { registerPlugin, registerComponent } from "actions/plugin";

export default function initialize({ dispatch }) {
  dispatch(registerPlugin("customComponents"));

  dispatch(
    registerComponent(
      "customComponents",
      "Global.Components.Footer.PressLogo",
      Logo
    )
  );
  dispatch(
    registerComponent(
      "customComponents",
      "Frontend.Components.Home.ButtonNavigation",
      ButtonNavigation
    )
  );
}
