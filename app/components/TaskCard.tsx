import { harcodedSidebar } from "../hardcodeddata";

export default function TaskCard() {
  return (
    <>
      {harcodedSidebar.map((i: any) => (
        <div key={i.id}>
          <p>{i.duty}</p>
        </div>
      ))}
    </>
  );
}
