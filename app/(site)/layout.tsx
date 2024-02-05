import Link from "next/link"
import { menu } from "@/actions/menu"

// import { menu } from "@/actions/menu"

import { Footer } from "@/components/footer"
import { Logout } from "@/components/log-out"

type Props = {
  children: React.ReactNode
}
const SiteLayout: React.FC<Props> = async ({ children }) => {
  const menuQuery = await menu({ depth: 3 })
  return (
    <>
      <header className="fixed left-4 top-4 z-50 flex items-center overflow-hidden rounded-full bg-muted/60 p-1 backdrop-blur md:w-fit">
        <Link
          scroll={false}
          href="/"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground"
        >
          <span className="font-mono italic text-white">AB</span>
        </Link>
        <nav className="flex items-center gap-3 pl-4 pr-7 text-xs text-muted-foreground/70">
          {menuQuery?.nav &&
            menuQuery?.nav?.length &&
            menuQuery?.nav
              ?.filter((x) => x.link.label !== "Home")
              .map((route) => (
                <Link
                  className="capitalize"
                  scroll={false}
                  // @ts-ignore
                  href={route.link.reference?.value?.slug}
                  key={route.link?.label}
                >
                  {route.link.label}
                </Link>
              ))}
          <Logout />
        </nav>
      </header>
      {children}
      <Footer />
    </>
  )
}
export default SiteLayout
