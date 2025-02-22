import { useState } from "react"
import { useRouter } from "next/router"

import { useBentoBox } from "@/components/Homepage/useBentoBox"
import BlockHeap from "@/components/icons/block-heap.svg"
import EthTokenIcon from "@/components/icons/eth-token.svg"
import PickWalletIcon from "@/components/icons/eth-wallet.svg"
import ChooseNetworkIcon from "@/components/icons/network-layers.svg"
import TryAppsIcon from "@/components/icons/phone-homescreen.svg"
import Whitepaper from "@/components/icons/whitepaper.svg"

import { cn } from "@/lib/utils/cn"

export const useHome = () => {
  const { locale, asPath } = useRouter()

  const [isModalOpen, setModalOpen] = useState(false)
  const [activeCode, setActiveCode] = useState(0)

  const bentoItems = useBentoBox()

  const eventCategory = `Homepage - ${locale}`

  const toggleCodeExample = (id: number): void => {
    setActiveCode(id)
    setModalOpen(true)
  }

  const subHeroCTAs = [
    {
      label: "1",
      description: "Connect Wallet",
      href: "/",
      Svg: PickWalletIcon,
      className: "text-primary hover:text-primary-hover",
      eventName: "find wallet",
    },
    {
      label: "2",
      description: "Buy Ramicoin",
      href: "/swap/",
      Svg: EthTokenIcon,
      className: "text-accent-a hover:text-accent-a-hover",
      eventName: "get eth",
    },
    {
      label: "3",
      description: "Stake Ramicoin",
      href: "/stake/", // TODO: Update with new networks page when ready
      Svg: ChooseNetworkIcon,
      className: "text-accent-b hover:text-accent-b-hover",
      eventName: "L2",
    },
    {
      label: "4",
      description: "Play To Win",
      href: "/play/",
      Svg: TryAppsIcon,
      className: cn(
        "text-accent-c hover:text-accent-c-hover",
        "[&_svg]:-scale-x-100"
      ),
      eventName: "dapps",
    },
  ]

  const popularTopics = [
    {
      label: "Creator Fee",
      Svg: EthTokenIcon,
      href: "/",
      eventName: "ethereum",
    },
    {
      label: "Presale",
      Svg: PickWalletIcon,
      href: "/swap/",
      eventName: "wallets",
    },
    {
      label: "Liuidity",
      Svg: BlockHeap,
      href: "/",
      eventName: "start guides",
    },
    {
      label: "Marketing",
      Svg: Whitepaper,
      className: cn("[&_div_div:has(svg)]:-scale-x-100"),
      href: "/",
      eventName: "whitepaper",
    },
  ]

  return {
    locale,
    asPath,
    isModalOpen,
    setModalOpen,
    activeCode,
    toggleCodeExample,
    subHeroCTAs,
    popularTopics,
    bentoItems,
    eventCategory,
  }
}