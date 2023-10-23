import Image from "next/image";
// import styles from "./page.module.css";
import MainSection from "@/components/layout/main-section";
import MainHeader from "@/components/layout/main-header";

const PageSidebar = () => {
  return (
    <>
      <h3>Sidebar</h3>
      <p>
        Commodo non mollit id adipisicing in eiusmod voluptate. Deserunt sunt
        enim qui ut. Labore labore laborum laboris consequat dolor pariatur do
        incididunt ad et nostrud minim quis nulla. Duis officia cillum pariatur
        nisi labore elit dolore esse et.
      </p>
    </>
  );
};
export default function Home() {
  return (
    <>
      <MainHeader
        headerTitle="Page title"
        headerSubtitle="This is were I put my cool elevator pitch"
        data-style="cover"
      />
      <MainSection sidebar={<PageSidebar />}>
        <h2>Page heading</h2>
      </MainSection>
    </>
  );
}
