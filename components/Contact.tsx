'use client'

import { motion } from 'framer-motion'
import Icon from '@mdi/react'
import {
  mdiEmail,
  mdiBriefcase,
  mdiTimer,
  mdiMessage,
} from '@mdi/js'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
           <p className={styles.description}>
            歡迎與我聯繫，討論您的專案需求
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.contactBox}
          >
            <div className={styles.contactItem}>
              <Icon path={mdiEmail} size={2.5} className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactLabel}>聯絡信箱</h3>
                <p className={styles.contactValue}>peggy.lin1712@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Icon path={mdiMessage} size={2.5} className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactLabel}>LINE ID</h3>
                <p className={styles.contactValue}>peggicl8612</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Icon path={mdiBriefcase} size={2.5} className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactLabel}>服務範圍</h3>
                <p className={styles.contactValue}>前端開發、網站建置、API 串接</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Icon path={mdiTimer} size={2.5} className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactLabel}>專案時程</h3>
                <p className={styles.contactValue}>依專案規模討論，確保品質與時效</p>
              </div>
            </div>
          </motion.div>
         
        </motion.div>
      </div>
    </section>
  )
}

