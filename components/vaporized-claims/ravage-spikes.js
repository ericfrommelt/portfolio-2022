import Image from 'next/image'
import style from './ravage-spikes.module.css'

export default function RavageSpikes () {
  return (
    <>
    <section className={ style.collageWrap }>
      <div className={ style.plant }>
        <Image 
          src="/images/vaporized-claims/plant-01.jpg"
          alt="anxious about things"
          width={3024}
          height={3024}
        />
      </div>
      <div className={ style.scribble }>
        <Image 
          src="/images/vaporized-claims/10-sec-drawing-002.png"
          alt="10 second drawing"
          width={2048}
          height={2048}
        />
      </div>
      <div className={ style.echopark }>
        <Image 
          src="/images/vaporized-claims/_DSF0455.jpg"
          alt="echo park 2012" 
          width={4794}
          height={3196}
        />
      </div>
      <h1 className={ style.ravage }>Ravage</h1>
      <p className={ style.vaporized }>vaporized</p>
      <p className={ style.claims }>claims</p>
      <div className={ style.circle }></div>
      <div className={ style.barGreen }></div>
      <div className={ style.rectangle__copper }></div>
      <h2 className={ style.a }>A</h2>
    </section>
    <section className={ style.collageInfo }>
      <p className={ style.meta }>
        Ravage spikes
      </p>
    </section>
    </>
  )
}