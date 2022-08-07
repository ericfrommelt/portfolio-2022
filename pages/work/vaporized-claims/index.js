import Head from 'next/head'
import styled from 'styled-components'
import PageHeader from '../../../components/header'
import Layout from '../../../components/layout.js'
import AnxiousTimes from '../../../components/vaporized-claims/anxious-times.js'
import RavageSpikes from '../../../components/vaporized-claims/ravage-spikes'
import TheHunterRuns from '../../../components/vaporized-claims/the-hunter-runs'
import TransitionSteps from '../../../components/vaporized-claims/transition-steps'

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #131417;
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
  color: whitesmoke;

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
    font-size: 4.6rem;
    line-height: 4.6rem;
  }
`

const IntroParagraph = styled.p`
  grid-column: 2 / span 10;
  font-size: 1rem;

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
    font-size: 1rem;  
  }
`

const ProjectWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const CollageWrapper = styled.div`
  padding: 6rem 2rem;
`

const VaporizedClaims = () => {
  return (
    <>
      <PageHeader />
      <Layout>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7804816/7505032/css/fonts.css" />
        </Head>
        <Intro>
          <IntroHeadline>
            Vaporized Claims
          </IntroHeadline>
          <IntroParagraph>
            I've been enamored with collage since childhood and saw an opportunity to experiment with the process utiliziing CSS grid, clip-path and simple animation. So much fun. 
          </IntroParagraph>
        </Intro>
        <ProjectWrapper>
          <CollageWrapper>
            <AnxiousTimes />
          </CollageWrapper>
          <CollageWrapper>
            <RavageSpikes />
          </CollageWrapper>
          <CollageWrapper>
            <TheHunterRuns />
          </CollageWrapper>
          <CollageWrapper>
            <TransitionSteps />
          </CollageWrapper>
        </ProjectWrapper>
      </Layout>
    </>
  )
}

export default VaporizedClaims