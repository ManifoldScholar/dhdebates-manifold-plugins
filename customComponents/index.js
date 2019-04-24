import PreFooter from "./src/components/PreFooter";
import Logo from "./src/components/Logo";
import FooterLogic from "./src/components/FooterLogic"
import { registerPlugin, registerComponent } from "actions/plugin";

export default function initialize({ dispatch }) {
  dispatch(registerPlugin("customComponents"));
  dispatch(
    registerComponent(
      "customComponents",
      "Frontend.Components.Layout.PreFooter",
      PreFooter
    )
  );
  dispatch(
    registerComponent(
      "customComponents",
      "Frontend.Components.Layout.Footer.Logo",
      Logo
    )
  );
  dispatch(
    registerComponent(
      "customComponents",
      "Frontend.Components.Layout.Footer.FooterLogic",
      FooterLogic
    )
  );
}
