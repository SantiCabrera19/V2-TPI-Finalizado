import { Header } from '@/components/component/header'
import { Footer } from '@/components/component/footer'

export default function CheckoutLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}