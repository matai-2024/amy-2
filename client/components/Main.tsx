import Intro from "./home/Intro";
import CTA from "./home/CTA";
import Tags from "./home/Tags";

export default function Main() {
  return (
    <main className="wrapper">
      <section className="wrapper-item">
        <Intro />
        <CTA />
        <Tags />
      </section>
    </main>
  )
}