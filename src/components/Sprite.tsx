import { PixelArt } from "./PixelArt";
import { SPRITES } from "./sprites";

interface SpriteProps {
  name: keyof typeof SPRITES;
  px?: number;
  style?: React.CSSProperties;
  title?: string;
}

export function Sprite({ name, px, style, title }: SpriteProps) {
  const s = SPRITES[name];
  if (!s) return null;
  return (
    <PixelArt
      art={s.art}
      palette={s.palette}
      px={px ?? s.px}
      style={style}
      title={title ?? name}
    />
  );
}
