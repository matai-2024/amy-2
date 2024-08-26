import Intro from './home/Intro'
import CTA from './home/CTA'
import Tags from './home/Tags'

export default function Main() {
  return (
    <>
      <main className="wrapper">
        <div className="wrapper-item">
          <div className="col-80-pc">
            <Intro />
            <CTA />
          </div>
          <div>
            <Tags />
          </div>
        </div>
      </main>
      <div className="animation-object"></div>
    </>
  )
}
