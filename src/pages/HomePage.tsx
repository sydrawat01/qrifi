import { FC } from 'react'

import QRCard from '../components/QRCard/QRCard'

const HomePage: FC = () => {
  return (
    <section className="homepage">
      <QRCard />
      <div className="about">
        <p>
          Your WiFi information is never sent to the server. View the{' '}
          <a href="https://github.com/sydrawat/qrifi">source code</a>.
        </p>
      </div>
    </section>
  )
}

export default HomePage
