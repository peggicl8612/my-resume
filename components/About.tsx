'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight, mdiSchool, mdiBriefcaseVariant } from '@mdi/js'
import styles from './About.module.css'

const aboutPages = [
  {
    id: 1,
    icon: mdiSchool,
    title: '學習歷程',
    content: (
      <>
        <p className={styles.contentText}>
          為了個人職涯規劃，在<strong>泰山職訓局</strong>進修網頁前端開發技術課程，
          完成了為期<strong>半年</strong>的培訓，日前已結訓。
        </p>
        <p className={styles.contentText}>
          具備 <strong>HTML、CSS、JavaScript、Vue、Bootstrap、Node.js、MongoDB、Figma、RWD、Canva</strong> 等技術，
          培養了從前端開發到後端基礎的能力。
        </p>
      </>
    ),
  },
  {
    id: 2,
    icon: mdiBriefcaseVariant,
    title: '實戰經驗',
    content: (
      <>
        <p className={styles.contentText}>
          課程中，我透過 <strong>API 串接、RWD 設計、UI/UX 工具</strong>的應用，
          提升了實戰經驗，能夠<strong>獨立開發具有完整功能的網站</strong>。
        </p>
        <p className={styles.contentText}>
          <strong>2025年5月</strong>開始任職前端工程師，持續在實務中精進技術能力。
        </p>
      </>
    ),
  },
]

export default function About() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % aboutPages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + aboutPages.length) % aboutPages.length)
  }

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>關於我</h2>
        </motion.div>

        <div className={styles.flipCardContainer}>
          <div className={styles.flipCard}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.5 }}
                className={styles.flipCardInner}
              >
                <div className={styles.flipCardFront}>
                  <div className={styles.iconWrapper}>
                    <Icon
                      path={aboutPages[currentPage].icon}
                      size={4}
                      className={styles.icon}
                    />
                  </div>
                  <h3 className={styles.cardTitle}>
                    {aboutPages[currentPage].title}
                  </h3>
                  <div className={styles.cardContent}>
                    {aboutPages[currentPage].content}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.navigation}>
              <button
                onClick={prevPage}
                className={styles.navButton}
                aria-label="上一頁"
              >
                <Icon path={mdiChevronLeft} size={2} />
              </button>
              <div className={styles.pageIndicators}>
                {aboutPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`${styles.indicator} ${
                      index === currentPage ? styles.active : ''
                    }`}
                    aria-label={`第 ${index + 1} 頁`}
                  />
                ))}
              </div>
              <button
                onClick={nextPage}
                className={styles.navButton}
                aria-label="下一頁"
              >
                <Icon path={mdiChevronRight} size={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

