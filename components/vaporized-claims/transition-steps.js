import Image from 'next/image'
import style from './transition-steps.module.css'

// Number 1
export default function TransitionSteps () {
  return (
    <>
    <section className={style.collageWrap}>
      <h1 className={ style.runawayTwo }>Runaway</h1>
      <div className={ style.draw } >
        <Image
          src="/images/vaporized-claims/10-sec-drawing-003.png" 
          alt="10 second drawing"
          width={2048}
          height={2048}
        />
      </div>
      <div className={ style.sketch }>
        <Image
          src="/images/vaporized-claims/sketch.png" 
          alt="a processing sketch"
          width={2224}
          height={2268} 
        />
      </div>
      <div className={ style.dorm }>
        <Image
          src="/images/vaporized-claims/runaway-dorm-exterior-01.jpg"
          alt="hellfire"
          width={6240}
          height={4160}
        />
      </div>
      <div className={ style.boxOne }></div>
      <ul>
        <li className={ style.runaway }>Runaway</li>
      </ul>
    </section>
    <section className={ style.collageInfo }>
      <p className={ style.meta }>
        Transition steps
      </p>
    </section>
    </>
  )
}
  