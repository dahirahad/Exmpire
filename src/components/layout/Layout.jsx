import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-navy-900">
      <Navbar />
      <main className="flex-grow pt-18" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
