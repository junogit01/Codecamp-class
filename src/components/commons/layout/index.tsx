import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigator from "./navigation";

const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
];
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <div>
      {!isHiddenHeader && <LayoutHeader />}

      <LayoutBanner />
      <LayoutNavigator />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "30%" }}>사이드바</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>

      <LayoutFooter />
    </div>
  );
}
