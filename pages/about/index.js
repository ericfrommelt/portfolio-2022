import Image from 'next/image'
import styled from 'styled-components'
import PageHeader from '../../components/header'
import Layout from '../../components/layout'

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #131417;
  padding: 6em 0;
  color: white;
`

const IntroHeadline = styled.h1`
  grid-column: 2 / span 10;
  font-size: 2.6rem;
  font-weight: 200;
  line-height: 3.6rem;
  margin-bottom: 0;

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
    font-size: 2.6rem;
    line-height: 3.6rem;
    margin-bottom: 0;
  }
`

const IntroParagraph = styled.p`
  grid-column: 2 / span 9;
  margin-top: 8rem;
  font-size: 1.2rem;
  line-height: 2em;
  a {
    color: whitesmoke;
    text-decoration: underline;
  }

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
  }
`

const IntroImage = styled.figure`
  grid-column: 1 / span 10;
  grid-row: 1 / span 10;

  @media (min-width: 800px) {
    grid-column: 1 / span 10;
  }
`

const BrandList = styled.ul`
  column-count: 2;
  column-width: 50%;
  column-fill: auto;
  list-style: none;
  padding: 0;
`

export default function About() {
  return (
    <>
      <PageHeader about />
      <Layout>
        <Intro>
          <IntroHeadline>
            
          </IntroHeadline>
          <IntroParagraph>
            <p>Still looking for a major.</p>
          </IntroParagraph>
          <IntroImage>
            <Image 
              src={"/images/about/016.jpg"}
              alt={"Portrait of Eric Frommelt"}
              width={2048}
              height={2048}
              layout={"intrinsic"}
            />
          </IntroImage>
        </Intro>
      </Layout>
    </>
  )
}