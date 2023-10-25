import { styles } from "../styles"
import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"

// Hoc (Higher order component), for wrapping all element

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: 25, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto realtive z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper