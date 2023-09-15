import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey,dev here!</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>{`The Pink City's Royal Charm`}</h1>
                    <p className={styles.postDesc}>
                        {`
                        Nestled in the heart of Rajasthan, Jaipur, often referred to as the "Pink City," is a destination that transports you to a bygone era of regal splendor. This city is a living testament to India's rich history and cultural heritage. Its stunning Amber Fort perched atop a hill, with its intricate architecture and breathtaking vistas, never ceases to amaze visitors. The City Palace, a sprawling complex of palaces, courtyards, and museums, provides a glimpse into the opulent lifestyle of the erstwhile Maharajas. Hawa Mahal, with its delicate honeycomb-like windows, is an architectural masterpiece that leaves you spellbound. The Jantar Mantar observatory, a UNESCO World Heritage Site, showcases the profound astronomical knowledge of the Rajput rulers.
                        `}
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;