import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Button variant="contained" color="primary">Hello world</Button>
    </div>
  )
}
