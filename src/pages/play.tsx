import { BaseHTMLAttributes } from "react"

import { ChildOnlyProp } from "@/lib/types"
import { ICard, IGetInvolvedCard } from "@/lib/interfaces"

import ActionCard from "@/components/ActionCard"
import Card from "@/components/Card"
import { HubHero } from "@/components/Hero"
import type { HubHeroProps } from "@/components/Hero/HubHero"
import { Image } from "@/components/Image"
import MainArticle from "@/components/MainArticle"
import PageMetadata from "@/components/PageMetadata"
import { ButtonLink } from "@/components/ui/buttons/Button"
import { Divider } from "@/components/ui/divider"
import { Flex } from "@/components/ui/flex"

import { cn } from "@/lib/utils/cn"

// -- Hero
import communityHeroImg from "../../public/images/heroes/community-hero.png"
// -- Cards
import upgradesCoreImg from "../../public/images/upgrades/core.png"
import whatIsEthereumImg from "../../public/images/what-is-ethereum.png"

const CardContainer = ({ children }: ChildOnlyProp) => {
  return <Flex className="-mx-4 flex-wrap">{children}</Flex>
}

const Content = ({ children }: ChildOnlyProp) => {
  return <div className="w-full px-8 py-4">{children}</div>
}

const Page = ({ children }: ChildOnlyProp) => {
  return (
    <Flex asChild className="mx-auto w-full flex-col items-center">
      <MainArticle>{children}</MainArticle>
    </Flex>
  )
}

const ButtonRow = ({ children }: ChildOnlyProp) => {
  return <Flex className="flex-col items-start md:flex-row">{children}</Flex>
}

const RowReverse = ({ children }: ChildOnlyProp) => {
  return (
    <Flex className="flex-col-reverse items-center lg:flex-row-reverse lg:items-stretch">
      {children}
    </Flex>
  )
}

const ImageContainer = ({ children }: ChildOnlyProp) => {
  return <Flex className="h-full w-3/4 lg:w-full">{children}</Flex>
}

const Subtitle = ({ children }: ChildOnlyProp) => {
  return <p className="mb-8 text-md sm:text-xl">{children}</p>
}

const FeatureContent = ({ children }: ChildOnlyProp) => {
  return (
    <Flex className="h-full w-full flex-col justify-center p-8 lg:p-24">
      {children}
    </Flex>
  )
}

const H2 = ({
  children,
  className,
  ...props
}: BaseHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={cn("mb-8 mt-0 text-2xl md:text-3xl", className)} {...props}>
      {children}
    </h2>
  )
}

const PlayPage = () => {

  const cards: Array<ICard> = [
    {
      image: upgradesCoreImg,
      title: "Place your bets.",
      description: "Yes or No",
      alt: "Illustration of a players discussing their next move.",
      href: "/play/",
    },
  ]

  const whyGetInvolvedCards: Array<IGetInvolvedCard> = [
    {
      emoji: ":mage:",
      title: "Step 1.",
      description: "Connect Wallet",
    },
    {
      emoji: ":dollar:",
      title: "Step 2.",
      description: "Deposit Ramicoin in your wallet.",
    },
    {
      emoji: ":collision:",
      title: "Step 3.",
      description: "Choose the event and bet.",
    },
  ]

  const heroContent: HubHeroProps = {
    title: "Play To Win",
    header: "Prediction Game",
    description: "No Limit",
    heroImg: communityHeroImg,
  }

  return (
    <Page>
      <PageMetadata
        title="Play Now - Ramicoin"
        description="Ramicoin gaming description"
      />
      <HubHero {...heroContent} />
      <Divider />
      <Flex className="-mt-px h-full w-full flex-row-reverse items-center border-b border-b-border-high-contrast bg-[#ccfcff] py-8 ps-0 lg:h-[720px] lg:py-0 lg:ps-8 dark:bg-[#293233]">
        <Content>
          <Flex className="mb-8 flex-col items-center">
            <H2>How To Play ?</H2>
          </Flex>
          <CardContainer>
            {whyGetInvolvedCards.map((card, idx) => (
              <Card
                className="m-4 min-w-[280px] max-w-full flex-[1_0_30%] p-6 md:max-w-[46%] lg:max-w-[31%]"
                key={idx}
                emoji={card.emoji}
                title={card.title}
                description={card.description}
              />
            ))}
          </CardContainer>
        </Content>
      </Flex>
      <div className="w-full bg-background-highlight pb-16 shadow-table-item-box">
        <div className="w-full px-4 py-4 lg:px-8">
          <H2 className="flex justify-center items-center mt-11">Start Playing : Good Luck</H2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-0">
            {cards.map((card, idx) => (
              <ActionCard
                className="m-0 flex-col rounded-sm border lg:m-4"
                key={idx}
                title={card.title}
                description={card.description}
                href={card.href}
                image={card.image}
                imageWidth={320}
                alt={card.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <Flex className="-mt-px h-full w-full flex-col-reverse items-center border-y border-y-border-high-contrast bg-[#ccfcff] py-8 ps-0 lg:h-[720px] lg:flex-row-reverse lg:py-0 lg:ps-8 dark:bg-[#293233]">
        <RowReverse>
          <FeatureContent>
            <H2>Will Bitcoin hit $100k before end of 25th Feb, 2025 ?</H2>
            <Subtitle>Place Your Bets</Subtitle>
            <ButtonRow>
              <div className="flex justify-start items-center space-x-4">
                <ButtonLink href="/play/">
                  Yes
                </ButtonLink>
                <ButtonLink href="/play/">
                  No
                </ButtonLink>
              </div>
            </ButtonRow>
          </FeatureContent>
          <ImageContainer>
            <Image
              className="object-cover"
              src={whatIsEthereumImg}
              alt="Play to win more Ramicoin"
            />
          </ImageContainer>
        </RowReverse>
      </Flex>
      <Divider />
    </Page>
  )
}

export default PlayPage
