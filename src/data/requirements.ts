import { Code } from "lucide-react";
import { BiHeadphone } from "react-icons/bi";
import { BsSpotify } from "react-icons/bs";

export const requirements = [
  {
    icon: Code,
    title: "Your Code Editor",
    description: "Any VS Code compatible editor",
    status: "required",
    details:
      "Works with VS Code, Windsurf, Kiro, Code-OSS, VSCodium, and other variants",
  },
  {
    icon: BsSpotify,
    title: "Spotify Premium",
    description: "Active Premium subscription",
    status: "required",
    details: "Required for playback control and advanced features",
  },
  {
    icon: BiHeadphone,
    title: "Active Spotify Session",
    description: "At least one device playing",
    status: "required",
    details:
      "Spotify must be open on at least one device for playback controls to work",
  },
];

export const setupSteps = [
  "Click the Xilie icon in the activity bar",
  "Click 'Xilie: Sign In' on status bar to authenticate",
  "Authorize in your browser",
  "For non-VS Code IDEs: Copy the authorization code when prompted",
  "Start controlling your music!",
];
