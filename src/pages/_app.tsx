import { useEffect } from "react"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { init } from "@socialgouv/matomo-next"

import { AppPropsWithLayout } from "@/lib/types"

import ThemeProvider from "@/components/ThemeProvider"

import "@/styles/global.css"

import { BaseLayout } from "@/layouts/BaseLayout"

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  useEffect(() => {
    if (!process.env.IS_PREVIEW_DEPLOY) {
      init({
        url: process.env.NEXT_PUBLIC_MATOMO_URL!,
        siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID!,
      })
    }
  }, [])

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider>
      <TooltipProvider>
        <BaseLayout
        >
          {getLayout(<Component {...pageProps} />)}
        </BaseLayout>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default (App)
