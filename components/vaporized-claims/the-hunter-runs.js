import Image from 'next/image'
import style from './the-hunter-runs.module.css'

// Number 3
export default function TheHunterRuns () {
  return (
    <>
    <section className={ style.collageWrap }>
      <div className={ style.plane } >
        <Image 
          src="/images/vaporized-claims/the-cornfield-bomber-usaf-f106a-delta-dart.jpg" 
          alt="lay down"
          width={890}
          height={356}
        />
      </div>
      <div className={ style.moon }>
        <Image 
          src="/images/vaporized-claims/26_s1m-1920.jpg"
          alt="The moon"
          width={1920}
          height={1080}
        />
      </div>
      <div className={ style.orangeCircle }></div>
      <div className={ style.orangeCircleTwo }></div>
      <div className={ style.block }></div>
      <div className={ style.rectangle__copper }></div>
      <div className={ style.box__orange }></div>
      <div className={ style.box__blue }></div>
      <p className={ style.numbers }>number determines outcome</p>
      <h1 className={ style.exp }>exposure</h1>
    </section>
    <section className={ style.collageInfo }>
      <p className={ style.meta }>
        The hunter runs
      </p>
    </section>
    </>
  )
}
