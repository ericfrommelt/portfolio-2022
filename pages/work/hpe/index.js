import Image from 'next/image'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import PageHeader from '../../../components/header'
import Layout from '../../../components/layout'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #01a982;
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
    font-size: 1rem;  
  }
`

const IntroImages = styled.div`
  grid-column: 1 / span 12;
  display: flex;
  justify-content: center;
  padding: 2em 1em;

  @media (min-width: 800px) {
    padding: 4em 1em;
  }
`

const ImageWrapper = styled.div`
  align-self: flex-start;
  padding: 1em;
  filter: drop-shadow(6px 6px 0 rgba(1, 152, 117, 0.5));
`

const SectionHeader = styled.h2`
  font-weight: 400;
  grid-column: ${props => props.theme.small};
  padding: 2em 0;
  
  @media (min-width: 800px) {
    grid-column: ${props => props.theme.wide};
    padding: 4em 0 2em 0;
  }
`

SectionHeader.defaultProps = {
  theme: {
    main: '2 / span 10'
  }
}

const theme = {
  small: '2 / span 10',
  wide: '2 / span 10'
}

const IllustratedType = styled.section`
  grid-column: 2 / span 10;
`

const MotionStudy = styled.section`
  grid-column: 2 / span 10;
`

const DesignSystem = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 4em 0;

  @media (min-width: 800px) {
    padding: 6em 0;
  }
`

const DesignSystemCopy = styled.p`
  font-size: 1.6rem;
  grid-column: 2 / span 10;
  grid-row: 1;

  @media (min-width: 800px) {
    font-size: 2.6rem;
  }
`

const ViewPrototypes = styled.a`
  grid-column: 2 / span 10;
  max-width: 400px;
  text-align: center;
  text-transform: uppercase;
  display: inline-block;
  background-color: #01a982;
  font-family: ibm-plex-mono, sans-serif;
  font-size: 1.4rem;
  font-weight: 200;
  color: whitesmoke;
  padding: 1rem;
  margin: 1em 1em 4em 0;
`

const DesignSystemGraphic = styled.div`
  grid-column: 1 / span 6;
  grid-row: 3;
  align-self: center;
`

const CodeBackground = styled.div`
  background-color: #ff8d6d;
  grid-column: 8 / span 5;
  grid-row: 3;
`

const DesignSystemCode = styled.div`
  grid-column: 6 / span 7;
  grid-row: 3;
  justify-self: end;
  padding: 3em 0;
`

const SocialTiles = styled.section`
  grid-column: 1 / span 12;
  margin-bottom: 8rem;
`


export default function Hpe () {
  return (
    <>
      <PageHeader hpe />
      <Layout>
        <Intro>
          <IntroHeadline>
            Editorial experiences, infographics, and social content design for Hewlett Packard Enterprise.
          </IntroHeadline>
          <IntroParagraph>
            My team at Digitas specialized in content transformation. We took white papers, data sets and other long form content and turned it into web based editorial experiences, infographics and social content.
          </IntroParagraph>
          <IntroImages>
            <ImageWrapper>
              <Image
                src="/images/hpe/CloudCliff.png"
                alt="Editorial page for Hewlett Packard Enterprise"
                width={2560}
                height={7654}
                layout="intrinsic"
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src="/images/hpe/CyberCrime.png"
                alt="Infographic for Hewlett Packard Enterprise"
                width={2560}
                height={4934}
                layout="intrinsic"
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src="/images/hpe/GenomicBasics.png"
                alt="Infographic for Hewlett Packard Enterprise"
                width={2560}
                height={6187}
                layout="intrinsic"
              />
            </ImageWrapper>
          </IntroImages>
        </Intro>
        <GridWrapper>
          <ThemeProvider theme={theme}>
            <SectionHeader>Illustrated typography</SectionHeader>
          </ThemeProvider>
          <IllustratedType>
            <Image
              src="/images/hpe/IllustratedType.png"
              alt="Illustrated typography for Hewlett Packard Enterprise"
              width={2160}
              height={950}
              layout="intrinsic"
            />
          </IllustratedType>
          <ThemeProvider theme={theme}>
            <SectionHeader>Motion study</SectionHeader>
          </ThemeProvider>
          <MotionStudy>
            <Image
              src="/images/hpe/cybercrime_motion.gif"
              alt="Cyber Crime motion study for Hewlett Packard Enterprise"
              width={1920}
              height={1080}
              layout="intrinsic"
            />
          </MotionStudy>
        </GridWrapper>
        <DesignSystem>
          <DesignSystemCopy>
            In order to ease the transition from design to delivery I developed a lightweight design system that enabled me to build prototypes quickly in React. 
          </DesignSystemCopy>
          <ViewPrototypes href="https://blissful-lichterman-3559c0.netlify.app/" target="_blank">View prototypes</ViewPrototypes>
          <DesignSystemGraphic>
            <Image
              src="/images/hpe/hpe_css.png"
              alt="Design system graphic for Hewlett Packard Enterprise editorial experiences"
              width={1100}
              height={914}
              layout="intrinsic"
            />
          </DesignSystemGraphic>
          <CodeBackground />
          <DesignSystemCode>
            <Image
              src="/images/hpe/hpe_vscode3_crop.png"
              alt="Code editor showing CSS styles"
              width={921}
              height={880}
              layout="intrinsic"
            />
          </DesignSystemCode>
        </DesignSystem>
        <GridWrapper>
          <ThemeProvider theme={theme}>
            <SectionHeader>Social images</SectionHeader>
          </ThemeProvider>
          <SocialTiles>
            <Image
              src="/images/hpe/HPE_SocialTiles.png"
              alt="A selection of social media images designed for Hewlett Packard Enterprise"
              width={2560}
              height={1440}
              layout="intrinsic"
              quality={100}
            />
          </SocialTiles>
        </GridWrapper>
      </Layout>
    </>
  )
}