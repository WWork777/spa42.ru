// src/components/Certificates.tsx
import Image from 'next/image'
import styles from '@styles/Certificates.module.css'

export default function Certificates() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.container_panel}>
          <h2 className={styles.text_m1}>Сертификаты</h2>
        </div>
        <p className={styles.subtitle}>
          У нас Вы можете приобрести подарочные сертификаты
        </p>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cert}`}>
            <Image
              src="/images/certificates/сertificates_1_before.jpg"
              alt="Подарочный сертификат Эфирим"
              fill
              sizes="(max-width: 900px) 100vw, 360px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className={`${styles.card} ${styles.qrCard}`}>
            <Image
              src="/images/certificates/сertificates_1_behind.jpg"
              alt="QR-код для получения сертификата"
              fill
              sizes="(max-width: 900px) 100vw, 360px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}