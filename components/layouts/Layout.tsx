import { ReactNode } from "react";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

interface Props {
  title?: string;
  children: ReactNode;
  allowTopSpace?: boolean;
  withSponsor?: boolean;
}

const Layout = ({
  children,
  allowTopSpace,
  withSponsor,
}: Props) => (
  <>
    <Header />
    {allowTopSpace && <div className="h-16" />}
    <main>{children}</main>
    <Footer withSponsor={withSponsor} />
  </>
);

export default Layout;
