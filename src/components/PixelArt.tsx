interface PixelArtProps {
  art: string[];
  palette: Record<string, string>;
  px?: number;
  style?: React.CSSProperties;
  title?: string;
}

export function PixelArt({ art, palette, px = 6, style, title }: PixelArtProps) {
  const h = art.length;
  const w = art[0].length;
  const rects: React.ReactElement[] = [];

  for (let y = 0; y < h; y++) {
    const row = art[y];
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      const c = palette[ch];
      if (c) {
        rects.push(
          <rect key={`${x}_${y}`} x={x} y={y} width="1.05" height="1.05" fill={c} />
        );
      }
    }
  }

  return (
    <svg
      width={w * px}
      height={h * px}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      style={{ display: "block", ...style }}
      role="img"
      aria-label={title ?? ""}
    >
      {rects}
    </svg>
  );
}
