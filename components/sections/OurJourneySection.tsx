import Image from 'next/image';
import styles from './OurJourneySection.module.css';

export default function OurJourneySection() {
  return (
    <section className={styles.section}>
      {/* Our Journey Section */}
      <div className={styles.contentContainer}>
        {/* Header: Dot + Title */}
        <div className={styles.header}>
          <div className={styles.dotIcon}>
            <Image
              src="/journey-dot-icon.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <h2 className={styles.heading}>
            Our Journey
          </h2>
        </div>

        {/* Text Content */}
        <div className={styles.textContent}>
          <div className={styles.text}>
            <p className="mb-0">Born from a single conviction in 2018, MKYCOMM began as an answer to a market drowning in noise and starving for clarity. What started as a one-person pursuit quickly became a principle-led house, where strategy guides creativity, and cultural fluency shapes every message.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">By January 1st, 2019, the agency took form: building systems, studying industries, shaping voices, and learning how brands truly grow. Today, MKYCOMM stands at the intersection of global logic and regional nuance, partnering with people and institutions across borders.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Our journey is not built on volume.</p>
            <p>It's built on vision, discipline, and a commitment to creating work that lasts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
