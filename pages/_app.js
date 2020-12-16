import App from 'next/app'
import AppLayout from '../layout'
import '../styles/antd.less'
import '../styles/app.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    )
  }
}

export default MyApp
