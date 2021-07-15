import { FC, useEffect, useState, useRef } from 'react'
import QRCode from 'qrcode.react'

import { Network } from '../../models/Network'

import { useAppSelector } from '../../store/hooks/basicHooks'
import { themeSelector } from '../../store/reducers/theme'

const QRCard: FC = () => {
  const firstLoad = useRef(true)
  const [qrvalue, setQrvalue] = useState<string>('')
  const [network, setNetwork] = useState<Network>({
    ssid: '',
    password: '',
  })

  const escape = (v: string) => {
    const needsEscape = ['"', ';', ',', ':', '\\']
    let escaped = ''
    for (let i = 0; i < v.length; i++) {
      let c = v[i]
      if (needsEscape.includes(c)) {
        c = '\\' + c
      }
      escaped += c
    }
    return escaped
  }

  useEffect(() => {
    if (firstLoad.current && window.innerWidth < 500) {
      firstLoad.current = false
    }

    const ssid = escape(network.ssid)
    const password = escape(network.password)
    setQrvalue(`WIFI:T:WPA;S:${ssid};P:${password};;`)
  }, [network])

  const theme = useAppSelector(themeSelector)
  const bgColor = theme === 'dark' ? '#282c34' : '#fafafa'
  const fgColor = theme === 'dark' ? '#fafafa' : '#282c34'

  return (
    <>
      <article className="card">
        <h1>{process.env.APP_TITLE}</h1>
        <div className="features">
          <QRCode
            value={qrvalue}
            size={175}
            bgColor={bgColor}
            fgColor={fgColor}
          />
          <div className="inputs">
            <input
              id="ssid"
              type="text"
              maxLength={32}
              placeholder="WiFi Network name"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck="false"
              value={network.ssid}
              onChange={(e) => setNetwork({ ...network, ssid: e.target.value })}
            />
            <input
              id="password"
              type="password"
              maxLength={63}
              placeholder="Password"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck="false"
              value={network.password}
              onChange={(e) =>
                setNetwork({ ...network, password: e.target.value })
              }
            />
          </div>
        </div>
      </article>
    </>
  )
}

export default QRCard
