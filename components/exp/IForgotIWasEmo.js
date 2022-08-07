import Image from 'next/image'
import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2em;
  gap: 2rem;
  
  @media (min-width: 600px) {
    padding: 6em;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default function IForgotIWasEmo () {
  return (
    <GridWrapper>
      <Image
        src="/images/exp/43-I-Forgot-I-Was-Emo-1.png"
        alt="I forgot I was emo"
        width={2000}
        height={3000}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/43-I-Forgot-I-Was-Emo-2.png"
        alt="I used to listen to the promise ring"
        width={2000}
        height={3000}
        layout="intrinsic"
      />
      <Image
        src="/images/exp/43-I-Forgot-I-Was-Emo-3.png"
        alt="and jimmy eat world"
        width={2000}
        height={3000}
        layout="intrinsic"
      />
    </GridWrapper>
  )
}