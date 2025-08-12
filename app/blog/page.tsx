import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import BlogSection from "../../components/sections/BlogSection"

export default function BlogPage() {
  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />
      <div className="pt-28 md:pt-36">
        <BlogSection />
      </div>
      <Footer />
    </main>
  )
}
