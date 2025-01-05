import SocialMediaIcons from "./SocialMediaIcons.jsx";
import crazyFace from "../../assets/social-media/crazy.svg";
export default {
  title: "SocialMediaIcons",
  component: SocialMediaIcons,
};

export const Default = () => (
  <SocialMediaIcons
    id="1"
    name="MySpace"
    url="https://www.google.com/"
    icon={crazyFace}
  />
);
