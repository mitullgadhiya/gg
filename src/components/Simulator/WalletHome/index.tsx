import { type Dispatch, type SetStateAction } from "react"

import { Flex } from "@/components/ui/flex"

import type { SimulatorNav } from "../interfaces"

import { CategoryTabs } from "./CategoryTabs"
import { NFT } from "./interfaces"
import { SendReceiveButtons } from "./SendReceiveButtons"
import type { SendReceiveEnabled } from "./types"
import { WalletBalance } from "./WalletBalance"

type WalletHomeProps = {
  nav?: SimulatorNav
  isEnabled?: SendReceiveEnabled
  activeTabIndex?: number
  setActiveTabIndex?: (i: number) => void
  categoryTabState?: [number, Dispatch<SetStateAction<number>>]
  nfts?: Array<NFT>
}
export const WalletHome = ({
  nav,
  isEnabled,
  activeTabIndex = 0,
  setActiveTabIndex,
}: WalletHomeProps) => {

  return (
    <Flex className="absolute inset-0 flex-col items-center bg-background">
      <Flex className="w-full flex-1 flex-col justify-between px-6 pb-4 pt-8">
        <WalletBalance />
        <SendReceiveButtons nav={nav} isEnabled={isEnabled} />
      </Flex>
      <Flex className="w-full flex-1 flex-col justify-between gap-6 bg-background-highlight p-6">
        <CategoryTabs
          categories={["Crypto", "NFTs"]}
          activeIndex={activeTabIndex}
          setActiveIndex={setActiveTabIndex}
        />
      </Flex>
    </Flex>
  )
}
