'use client'

import { motion } from 'framer-motion'
import Icon from '@mdi/react'
import {
  mdiCellphone,
  mdiLightningBolt,
  mdiPowerPlug,
  mdiDatabase,
  mdiRobot,
  mdiWeb,
} from '@mdi/js'
import styles from './Services.module.css'

const services = [
  {
    title: '響應式網站開發',
    description: '使用 HTML5/CSS3/JavaScript 建立美觀且完全響應式的網站，確保在所有裝置上都有完美的顯示效果',
    icon: mdiCellphone,
  },
  {
    title: 'SPA/SSR 專案開發',
    description: '使用 Vue.js/Nuxt 3 或 React/Next.js 開發單頁應用程式和伺服器端渲染專案，提供流暢的使用者體驗',
    icon: mdiLightningBolt,
  },
  {
    title: 'API 串接與後端開發',
    description: '開發 RESTful API、串接第三方服務（如 Google Services）、處理表單驗證、會員登入註冊流程',
    icon: mdiPowerPlug,
  },
  {
    title: '資料庫整合',
    description: '使用 MongoDB 處理 CRUD 操作、會員資料管理、表單記錄儲存等資料庫相關功能',
    icon: mdiDatabase,
  },
  {
    title: '自動化流程',
    description: '使用 Google Apps Script 建立表單自動化流程，包含自動寄信、資料寫入、觸發器設定等',
    icon: mdiRobot,
  },
  {
    title: '網站部署',
    description: '將專案部署至 Firebase Hosting、Netlify 或 Vercel，提供穩定可靠的正式環境網址',
    icon: mdiWeb,
  },
]

const projectTypes = [
  {
    title: '會員系統',
    description: '完整的會員登入/註冊功能，包含表單驗證、資料庫儲存、安全性處理',
  },
  {
    title: '表單系統',
    description: '表單填寫與驗證、資料存入資料庫、自動化處理流程',
  },
  {
    title: '後台管理',
    description: '簡易後台管理頁面，方便管理網站內容和資料',
  },
  {
    title: '中小型網站',
    description: '從設計到開發，獨立完成中小型網站的完整開發流程',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>服務項目</h2>
          <p className={styles.description}>
            提供完整的前端開發服務，從設計到部署一站式解決方案
          </p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.serviceCard}
            >
              <div className={styles.serviceIcon}>
                <Icon path={service.icon} size={4} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={styles.projectTypes}
        >
          <h3 className={styles.projectTypesTitle}>可獨立完成的專案類型</h3>
          <div className={styles.projectTypesGrid}>
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className={styles.projectCard}
              >
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDescription}>{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

