import Image from 'next/image'
import styled from 'styled-components'
import PageHeader from '../../../components/header'
import Layout from '../../../components/layout'
import Art001 from '../../../components/exp/Art001'
import PanicNow from '../../../components/exp/PanicNow'
import Gibson from '../../../components/exp/Gibson'
import Aip from '../../../components/exp/Aip'
import Everyday2016 from '../../../components/exp/Everyday2016'
import JennAir from '../../../components/exp/JennAir'
import Art002 from '../../../components/exp/Art002'
import Scenario74V1 from '../../../components/exp/Scenario74V1'
import Sats from '../../../components/exp/Sats'
import IForgotIWasEmo from '../../../components/exp/IForgotIWasEmo'
import ForTheKids from '../../../components/exp/ForTheKids'
import ArtificialHumanity from '../../../components/exp/ArtificialHumanity'
import BlackCanvas from '../../../components/exp/BlackCanvas'
import AlphaNotation from '../../../components/exp/AlphaNotation'

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #ccc;
  padding: 0 0 6em 0;
  color: white;
`

const ExpWrapper = styled.div`
    display: none;

  @media (min-width: 1248px) {
    display: block;
    grid-column: 1 / -1;
    overflow: hidden;
  }
`

const ExpBackground = styled.div`
  position: absolute;
  font-size: 30rem;
  font-weight: 200;
  margin-top: -15rem;
  padding-top: 9rem;
  letter-spacing: -2rem;
  transform: rotate(-90deg);
`

const IntroHeadline = styled.h1`
  grid-column: 2 / span 10;
  font-size: 3.6rem;
  font-weight: 200;
  line-height: 4.6rem;

  @media (min-width: 800px) {
    grid-column: 7 / span 6;
    font-size: 3.6rem;
    line-height: 4.6rem;
  }
`

const IntroParagraph = styled.p`
  grid-column: 6 / span 6;
  font-size: 1rem;
`

export default function Exp () {
  return (
    <>
      <PageHeader exp />
      <Layout>
        <Intro>
          <ExpWrapper>
            <ExpBackground>Exp</ExpBackground>
          </ExpWrapper>
          <IntroHeadline>
            Explorations<br />Experiments<br />Expressions
          </IntroHeadline>
        </Intro>
          <Scenario74V1 />
          <Art001 />
          <PanicNow />
          <Aip />
          <ForTheKids />
          <Everyday2016 />
          <JennAir />
          <Art002 />
          <ArtificialHumanity />
          <BlackCanvas />
      </Layout>
    </>
  )
}