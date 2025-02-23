import { ComponentPropsWithRef } from "react"

import Card from "@/components/Card"
import MySwapBox from "@/components/DJ/MySwapBox"
import MainArticle from "@/components/MainArticle"
import PageHero from "@/components/PageHero"
import PageMetadata from "@/components/PageMetadata"
import { Simulator } from "@/components/Simulator"
import { Divider } from "@/components/ui/divider"

import { walletOnboardingSimData } from "@/data/WalletSimulatorData"

import HeroImage from "../../public/images/wallets/wallet-hero.png"

export const StyledCard = (props: ComponentPropsWithRef<typeof Card>) => (
  <Card
    className="m-4 min-w-[280px] max-w-full flex-1 bg-background p-6 md:max-w-[46%] lg:max-w-[31%]"
    {...props}
  />
)

const SwapPage = () => {

  const heroContent = {
    title: "Ramicoin Exchange",
    header: "Trade Digital Assets",
    subtitle: "Buy what matters than just buying a trend.",
    image: HeroImage,
    alt: "Illustration of a person swapping digital assets, representing Ramicoin Exchange",
    // TODO: remove conditional after soft launch
    buttons:
      [
        {
          href: "/swap/",
          content: "Presale",
          matomo: {
            eventCategory: "Header buttons",
            eventAction: "click",
            eventName: "Find_wallet",
          },
        },
        {
          href: "/swap/",
          content: "$0.005",
          matomo: {
            eventCategory: "Header buttons",
            eventAction: "click",
            eventName: "How_to_use_wallet",
          },
          variant: "outline" as const,
        },
      ]

  }

  return (
    <MainArticle className="mx-auto flex w-full flex-col items-center">
      <PageMetadata
        title="Ramicoin Exchange: Buy, Sell Anytime, Any Amount"
        description="Learn how to swap or buy Ramicoin."
        image="/images/wallets/wallet-hero.png"
      />

      <PageHero content={heroContent} isReverse />

      <div className="my-20 w-full px-0 py-4">
        <Simulator data={walletOnboardingSimData}>
          <p className="mb-2 text-lg italic leading-base text-body-medium md:text-xl lg:text-2xl">
            Learn
          </p>
          <h2 className="m-0 text-3xl font-bold leading-[115%] lg:text-5xl">
            How To Buy ?
          </h2>
        </Simulator>
      </div>

      <div className="w-full px-8 py-4">
        <Divider />
        <MySwapBox />
        <Divider />
      </div>
    </MainArticle>
  )
}

export default SwapPage
