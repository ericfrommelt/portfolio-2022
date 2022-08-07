import styled from 'styled-components'

const StyledPageFooter = styled.footer`
  background-color: #131417;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  color: whitesmoke;

  min-height: 40rem;
  align-items: end;
  padding-bottom: 6rem;
`

const Info = styled.div`
  grid-column: 1 / span 12;
  font-size: 1.3rem;
  padding-left: 2rem;

  @media (min-width: 800px) {
    grid-column: 1 / span 6;
    padding-left: 6rem;
  }
`

const Availability = styled.div`
  grid-column: 1 / span 12;
  justify-self: start;
  padding: 0 0 0 2rem;

  @media (min-width: 800px) {
    grid-column: 9 / span 4;
    justify-self: end;
    padding: 0 6rem 0 0;
  }
`

const AvailableCopy = styled.p`
  font-size: 1rem;
  font-weight: 700;
`

const Location = styled.p`
  font-family: ibm-plex-mono, sans-serif;
  font-weight: 400;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`

const PageFooter = () => {
  return (
    <StyledPageFooter>
      <Info>
        <p>Eric Frommelt</p>
        <p><a href="mailto:ericfrommelt@gmail.com">ericfrommelt@gmail.com</a></p>
      </Info>
    </StyledPageFooter>
  )
}

export default PageFooter