import type { AvatarId } from "./avatars";

const AVATAR_KEY = "prepa_avatar";

export function getSelectedAvatar(): AvatarId {
  if (typeof window === "undefined") return "owl";
  return (localStorage.getItem(AVATAR_KEY) as AvatarId) || "owl";
}

export function setSelectedAvatar(id: AvatarId) {
  localStorage.setItem(AVATAR_KEY, id);
}
