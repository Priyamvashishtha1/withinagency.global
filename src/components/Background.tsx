/** Fixed ambient layer: drifting grey orbs (so the glass blur is visible) + 3% grain. Pure CSS. */
export default function Background() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="orb orb-d" />
      </div>
      <div aria-hidden="true" className="grain" />
    </>
  );
}
