import Meta from '../components/meta'
import PageFooter from '../components/footer'

export default function Layout ({ children }) {
  return (
    <>
      <Meta />
      <main>
        {children}
      </main>
      <PageFooter />
    </>
  )
}