'use client'

import { motion } from 'framer-motion'
import Icon from '@mdi/react'
import {
  mdiLaptop,
  mdiCog,
  mdiRocketLaunch,
  mdiPalette,
  mdiLightbulb,
} from '@mdi/js'
import styles from './TechStack.module.css'

const techCategories = [
  {
    title: '前端技術',
    icon: mdiLaptop,
    items: [
      'HTML5 / CSS3 / JavaScript (ES6+)',
      'Vue.js 3 + Composition API',
      'Nuxt 3 (SPA/SSR)',
      'React / Next.js',
      'UI Framework: Vuetify, Quasar, Swiper, Tailwindcss',
      '前端工具: Vite, Pinia, Vue Router',
    ],
  },
  {
    title: '後端與資料庫',
    icon: mdiCog,
    items: [
      'Node.js + Express',
      'Nuxt server routes',
      'RESTful API 設計',
      'MongoDB (CRUD 操作)',
      '第三方 API 串接 (Google Services)',
    ],
  },
  {
    title: '自動化與部署',
    icon: mdiRocketLaunch,
    items: [
      'Google Apps Script',
      'Google Form API',
      'Firebase Hosting',
      'Netlify / Vercel',
      '表單自動化流程',
    ],
  },
  {
    title: '設計與 UI/UX',
    icon: mdiPalette,
    items: [
      'Figma (Wireframe, Prototype)',
      'RWD 響應式布局',
      'UI Layout 設計',
      '設計稿轉換為頁面',
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className={styles.techStack}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>技術棧</h2>
        
        </motion.div>

        <div className={styles.grid}>
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <Icon path={category.icon} size={2.5} className={styles.icon} />
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              <ul className={styles.list}>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

