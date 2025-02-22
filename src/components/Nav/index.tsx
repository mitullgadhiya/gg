import { useRef } from "react"
import dynamic from "next/dynamic"

import { EthHomeIcon } from "@/components/icons"
import Search from "@/components/Search"

import { Button } from "../ui/buttons/Button"
import { BaseLink } from "../ui/Link"

import DesktopNavMenu from "./Desktop"
import { useNav } from "./useNav"

import { useBreakpointValue } from "@/hooks/useBreakpointValue"
import { useIsClient } from "@/hooks/useIsClient"

const Menu = dynamic(() => import("./Menu"), {
  ssr: false,
  loading: () => <div />,
})
const MobileNavMenu = dynamic(() => import("./Mobile"), { ssr: false })

// TODO display page title on mobile
const Nav = () => {
  const { toggleColorMode, linkSections } = useNav()
  const navWrapperRef = useRef(null)
  const isClient = useIsClient()
  const desktopScreen = useBreakpointValue({ base: false, md: true })

  const dj = () => {
    console.log("clicked wallet")
  }

  return (
    <div className="sticky top-0 z-sticky w-full">
      <nav
        ref={navWrapperRef}
        className="flex h-19 justify-center border-b border-b-disabled bg-background p-4 xl:px-8"
        aria-label="nav-primary"
      >
        <div className="flex w-full max-w-screen-2xl items-center justify-between md:items-stretch md:justify-normal">
          <BaseLink
            href="/"
            aria-label="home-menu"
            className="inline-flex items-center no-underline"
          >
            <EthHomeIcon className="h-[35px] w-[22px] opacity-85 hover:opacity-100" />
          </BaseLink>
          {/* Desktop */}
          <div className="ms-3 flex w-full justify-end md:justify-between xl:ms-8">
            {/* avoid rendering desktop Menu version on mobile */}
            {isClient && desktopScreen ? (
              <Menu className="hidden md:block" sections={linkSections} />
            ) : (
              <div />
            )}

            <Search>
              {() => {
                if (!isClient) return null
                return (
                  <div className="flex items-center">
                    {/* Desktop */}
                    <div className="hidden md:flex">
                    <Button
                        onClick={dj}
                        size="sm"
                      >
                        Connect Wallet
                      </Button>
                      <DesktopNavMenu toggleColorMode={toggleColorMode} />
                    </div>

                    <div className="flex md:hidden">
                      {/* Mobile */}
                      <Button
                        onClick={dj}
                        size="sm"
                      >
                        Connect Wallet
                      </Button>
                      <MobileNavMenu
                        toggleColorMode={toggleColorMode}
                        linkSections={linkSections}
                      />
                    </div>
                  </div>
                )
              }}
            </Search>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav