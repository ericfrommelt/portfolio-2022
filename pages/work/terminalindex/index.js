import Image from 'next/image'
import styled from 'styled-components'
import PageHeader from '../../../components/header'
import Layout from '../../../components/layout'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #423DB4;
  padding: 4em 0;
  color: white;

  @media (min-width: 800px) {
    padding: 6em 0;
  }
`

const IntroHeadline = styled.h1`
  grid-column: 2 / span 10;
  font-size: 2.6rem;
  font-weight: 200;
  line-height: 3.6rem;
  color: #FFF;

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
    font-size: 3.6rem;
    line-height: 4.6rem;
  }
`

const IntroParagraph = styled.p`
  grid-column: 2 / span 10;
  font-size: 1rem;

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
  }
`

const Button = styled.a`
  grid-column: 2 / span 10;
  max-width: 400px;
  text-align: center;
  text-transform: uppercase;
  display: inline-block;
  background-color: #FFF;
  font-family: ibm-plex-mono, sans-serif;
  font-size: 1.4rem;
  font-weight: 200;
  color: #423DB4;
  padding: 1rem;
  margin: 1em 1em 4em 0;

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
  }
`

const SectionHeader = styled.h2`
  color: #3b3f42;
  font-weight: 400;
  place-self: left;

  @media (min-width: 800px) {
    place-self: center;
  }
`


const ScreenCap = styled.div`
  padding: 4rem 0;
  grid-column: 2 / span 10;
`


export default function TerminalIndex () {
  return (
    <>
      <PageHeader terminalindex />
      <Layout>
        <Intro>
          <IntroHeadline>
            An interaction sketchbook.
          </IntroHeadline>
          <IntroParagraph>
            A personal collection of interaction experiments.
          </IntroParagraph>
          <Button href="https://terminalindex.net" target="_blank">Go to site</Button>
        </Intro>
        <GridWrapper>
          <ScreenCap>
            <Image
              src="/images/terminal-index/TI-Home.png"
              alt="Terminal Index home page"
              width={1276}
              height={764}
              layout="intrinsic"
            />
          </ScreenCap>
          <ScreenCap>
            <Image
              src="/images/terminal-index/TI-HelloWorld.png"
              alt="Terminal Index home page"
              width={1276}
              height={764}
              layout="intrinsic"
            />
          </ScreenCap>
          <ScreenCap>
            <Image
              src="/images/terminal-index/TI-EmptyThreads.png"
              alt="Terminal Index home page"
              width={1276}
              height={764}
              layout="intrinsic"
            />
          </ScreenCap>
        </GridWrapper>
      </Layout>
    </>
  )
}