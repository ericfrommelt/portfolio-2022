import Image from 'next/image'
import style from './anxious-times.module.css'

// Number 1
export default function AnxiousTimes () {
  return (
    <>
    <section className={style.collageWrap}>
      <div className={ style.bellevue }>
        <Image
          src="/images/vaporized-claims/bellevue-beer.jpg"
          alt="troubled monument"
          width={3024}
          height={4032}
        />
      </div>
      <div className={ style.drawingOne }>
        <Image
          src="/images/vaporized-claims/10-sec-drawing-001.png"
          alt="drawing" 
          width={2048}
          height={2048}
        />
      </div>
      <div className={ style.flower }>
        <Image
          src="/images/vaporized-claims/flower_001.jpg"
          alt="flower"
          width={2503}
          height={3754} 
        />
      </div>
      <div className={ style.typeWrapper }>
        <h1 className={ style.top }>Anxious Times</h1>
        <h1 className={ style.bottom }>Anxious Times</h1>
      </div>
      <div className={ style.rectangle__copper }></div>
      <div className={ style.box__orange }></div>
      <div className={ style.box__blue }></div>
    </section>
    <section className={ style.collageInfo }>
      <p className={ style.meta }>
        Anxious times
      </p>
    </section>
    </>
  )
}
