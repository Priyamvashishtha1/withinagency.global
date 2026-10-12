import { ImageResponse } from 'next/og';

export const alt = 'Within Global';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff',
        }}
      >
        <div style={{ fontSize: 112, letterSpacing: 4, fontWeight: 300 }}>WITHIN GLOBAL</div>
        <div style={{ marginTop: 28, fontSize: 28, color: '#A1A1A1', letterSpacing: 2 }}>withinagency.global</div>
      </div>
    ),
    size,
  );
}
