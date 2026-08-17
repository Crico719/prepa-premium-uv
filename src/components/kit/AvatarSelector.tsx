import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { avatars, type AvatarId } from "@/lib/avatars";
import { getSelectedAvatar, setSelectedAvatar } from "@/lib/avatar-store";

type AvatarSelectorProps = {
  onSelect?: (id: AvatarId) => void;
};

export function AvatarSelector({ onSelect }: AvatarSelectorProps) {
  const [selected, setSelected] = useState<AvatarId>(getSelectedAvatar);

  const handleSelect = (id: AvatarId) => {
    setSelected(id);
    setSelectedAvatar(id);
    onSelect?.(id);
  };

  return (
    <div className="grid grid-cols-5 gap-3">
      {avatars.map((avatar) => (
        <button
          key={avatar.id}
          type="button"
          onClick={() => handleSelect(avatar.id)}
          className={cn(
            "group relative flex flex-col items-center gap-2 rounded-[16px] border-2 p-3 transition-all hover:scale-105",
            selected === avatar.id
              ? "border-primary bg-primary/10"
              : "border-transparent hover:border-border"
          )}
        >
          <div className="relative size-14">
            {avatar.svg}
            {selected === avatar.id && (
              <div className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-3" />
              </div>
            )}
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">{avatar.name}</span>
        </button>
      ))}
    </div>
  );
}
