"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BrainCircuit } from "lucide-react"
import LanguageSwitch from "@/components/language-switch"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function Navbar() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Xoperr</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            {t.about}
          </Link>
          <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
            {t.services}
          </Link>
          <Link href="/marketing" className="text-sm font-medium hover:underline underline-offset-4">
            {t.marketing}
          </Link>
          <Link href="/financial" className="text-sm font-medium hover:underline underline-offset-4">
            {t.financial}
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <LanguageSwitch />
          <a href="https://t.me/xoperrbot" target="_blank" rel="noopener noreferrer">
            <Button size="sm">{t.contactUs}</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
