import React from 'react'
import { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about NOVEK ICT Solutions, our services, technology expertise, and how we can help transform your business.',
  keywords: ['FAQ', 'frequently asked questions', 'NOVEK', 'technology solutions', 'web development', 'AI', 'enterprise software'],
}

const faqs = [
  {
    question: 'What is NOVEK ICT Solutions?',
    answer: 'NOVEK ICT Solutions is a leading technology company specializing in enterprise software development, web applications, mobile apps, AI integration, and digital transformation services. We help businesses modernize their operations with cutting-edge technology solutions.'
  },
  {
    question: 'What services does NOVEK offer?',
    answer: 'We offer a comprehensive range of services including custom web development, mobile application development, enterprise software solutions, AI and machine learning integration, cloud computing, UI/UX design, and digital transformation consulting.'
  },
  {
    question: 'How long has NOVEK been in business?',
    answer: 'NOVEK was founded in 2025 and has quickly established itself as a trusted technology partner for businesses across various industries, from startups to large enterprises.'
  },
  {
    question: 'What industries does NOVEK serve?',
    answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, education, and government sectors. Our solutions are tailored to meet the specific needs of each industry.'
  },
  {
    question: 'Does NOVEK provide ongoing support and maintenance?',
    answer: 'Yes, we provide comprehensive post-deployment support, maintenance, and updates for all our solutions. Our team ensures your systems remain secure, up-to-date, and performing optimally.'
  },
  {
    question: 'What technologies does NOVEK specialize in?',
    answer: 'Our expertise includes modern web technologies (React, Next.js, Node.js), mobile development (React Native, Flutter), cloud platforms (AWS, Azure), AI/ML frameworks, and enterprise systems integration.'
  },
  {
    question: 'How does NOVEK ensure project quality?',
    answer: 'We follow industry best practices including agile development methodologies, comprehensive testing, code reviews, and quality assurance processes. Each project undergoes thorough validation before delivery.'
  },
  {
    question: 'Can NOVEK help with digital transformation?',
    answer: 'Absolutely! Digital transformation is one of our core competencies. We help businesses modernize their processes, integrate new technologies, and optimize operations for the digital age.'
  },
  {
    question: 'What is the typical project timeline?',
    answer: 'Project timelines vary based on complexity and scope. Simple web applications might take 4-8 weeks, while complex enterprise systems could take 3-6 months. We provide detailed timelines during project planning.'
  },
  {
    question: 'How much do NOVEK services cost?',
    answer: 'Costs depend on project scope, complexity, and requirements. We provide customized quotes after understanding your specific needs. Contact us for a free consultation and detailed proposal.'
  },
  {
    question: 'Does NOVEK offer custom software development?',
    answer: 'Yes, custom software development is our specialty. We build tailored solutions that perfectly match your business requirements and integrate seamlessly with your existing systems.'
  },
  {
    question: 'What is AI integration and how can it benefit my business?',
    answer: 'AI integration involves incorporating artificial intelligence capabilities into your existing systems. Benefits include automated processes, predictive analytics, improved decision-making, and enhanced customer experiences.'
  },
  {
    question: 'How does NOVEK handle data security?',
    answer: 'We implement industry-standard security practices including encryption, secure coding, regular security audits, and compliance with relevant regulations like GDPR and HIPAA.'
  },
  {
    question: 'Can NOVEK develop mobile applications?',
    answer: 'Yes, we develop native and cross-platform mobile applications for iOS and Android using technologies like React Native and Flutter, ensuring high performance and native-like user experiences.'
  },
  {
    question: 'What is cloud computing and why should I consider it?',
    answer: 'Cloud computing provides on-demand access to computing resources over the internet. Benefits include scalability, cost-efficiency, automatic updates, and improved collaboration for remote teams.'
  },
  {
    question: 'How does NOVEK approach UI/UX design?',
    answer: 'Our design process focuses on user-centered design principles, creating intuitive and engaging interfaces that enhance user satisfaction and drive business results.'
  },
  {
    question: 'What is enterprise software and when do I need it?',
    answer: 'Enterprise software includes large-scale applications that support business operations. You might need it when your current systems can\'t scale with your growth or lack integration capabilities.'
  },
  {
    question: 'How can I get started with NOVEK?',
    answer: 'Simply contact us through our website, email, or phone. We\'ll schedule a free consultation to discuss your requirements and provide a customized solution proposal.'
  },
  {
    question: 'Does NOVEK provide training for new systems?',
    answer: 'Yes, we provide comprehensive training programs for your team, including user manuals, video tutorials, and hands-on training sessions to ensure smooth adoption of new systems.'
  },
  {
    question: 'What makes NOVEK different from other tech companies?',
    answer: 'Our commitment to innovation, personalized approach, extensive industry experience, and focus on long-term partnerships set us apart. We don\'t just deliver solutions; we build lasting relationships.'
  },
  {
    question: 'How does NOVEK stay updated with latest technologies?',
    answer: 'Our team continuously invests in research and development, attending conferences, participating in training programs, and maintaining partnerships with leading technology providers.'
  }
]

export default function FAQPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Find answers to common questions about NOVEK ICT Solutions and our technology services.
              </p>
            </div>

            <div className="glass-card p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-white/10 rounded-lg bg-white/5 px-4">
                    <AccordionTrigger className="text-left text-white hover:text-blue-400 transition-colors py-4 text-base md:text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80 leading-relaxed pb-4 text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}