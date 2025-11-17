'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'
import styles from './page.module.css'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <main className={styles.main}>
      <Hero />
      <div
        ref={(el) => { sectionRefs.current[0] = el }}
        className={styles.section}
      >
        <About />
      </div>
      <div
        ref={(el) => { sectionRefs.current[1] = el }}
        className={styles.section}
      >
        <TechStack />
      </div>
      <div
        ref={(el) => { sectionRefs.current[2] = el }}
        className={styles.section}
      >
        <Services />
      </div>
      <div
        ref={(el) => { sectionRefs.current[3] = el }}
        className={styles.section}
      >
        <Contact />
      </div>
      <ScrollToTop />
    </main>
  )
}

