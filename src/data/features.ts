import {
  Search,
  Album,
  Play,
  List,
  Users,
  Smartphone,
  Keyboard,
  RefreshCw,
  Zap,
} from "lucide-react";

export const features = [
  {
    icon: Search,
    title: "Quick Search",
    description:
      "Comprehensive search with smart filtering. Find tracks, artists, playlists, and albums instantly with Ctrl+Alt+S.",
    badge: "New in v0.0.7",
    highlight: true,
  },
  {
    icon: Album,
    title: "Full Album Support",
    description:
      "Browse, search, and play complete albums. Start playing any album directly from search results.",
    badge: "New in v0.0.7",
    highlight: true,
  },
  {
    icon: Play,
    title: "Playback Control",
    description:
      "Play, pause, skip tracks, and control volume directly from VS Code without switching windows.",
    badge: null,
    highlight: false,
  },
  {
    icon: List,
    title: "Playlist Management",
    description:
      "Browse and select from your Spotify playlists. Play any playlist with a single click.",
    badge: null,
    highlight: false,
  },
  {
    icon: Users,
    title: "Artist Integration",
    description:
      "View followed artists and play their top tracks. Discover new music from your favorite artists.",
    badge: null,
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Device Management",
    description:
      "Switch between available Spotify devices seamlessly. Control playback on any connected device.",
    badge: null,
    highlight: false,
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    description:
      "Full Mac and Windows/Linux keyboard shortcuts support. Control your music without touching your mouse.",
    badge: "Enhanced",
    highlight: false,
  },
  {
    icon: RefreshCw,
    title: "Recent Tracks",
    description:
      "Dedicated view for recently played tracks with smart deduplication and refresh capabilities.",
    badge: "v0.0.6",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Live status bar integration showing current track. See what's playing at a glance.",
    badge: null,
    highlight: false,
  },
];
