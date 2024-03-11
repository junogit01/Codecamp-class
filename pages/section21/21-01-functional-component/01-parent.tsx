import ChildPage from "./02-child";

export default function ParentPage(): JSX.Element {
  return (
    <>
      {/* <ChildPage count={30} /> */}
      {ChildPage({ count: 20 })}
    </>
  );
}
