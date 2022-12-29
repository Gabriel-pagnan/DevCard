import Form from '../components/Form/Form'
import styles from '../styles/Home.module.css'
import 'atropos/css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Form />
      </div>
      <Footer />
    </>
  )
}
