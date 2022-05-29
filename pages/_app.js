import Head from 'next/head';
import Image from 'next/image';

import '../styles/global.scss'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Exco-ウェブサイトリニューアルのことならお任せください</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <header>
      <section>
      <Image src='/excoLogo.png' alt='logo' width='131px' height='60px' style='width:131px!important height:60px!important;'/>
      </section>
      <nav className='navbar'>
        <ul>
          <li><a>サポート</a></li>
          <li><a>実績</a></li>
          <li><a>導入までの流れ</a></li>
        </ul>
      </nav>
      <div className='button'>お問い合わせ</div>
    </header>
    
      </main>

      <footer>
       
      </footer>

      
    </div>
  )
}
