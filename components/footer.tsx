"use client"

import Link from "next/link"
import { BrainCircuit } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-primary" />
          <p className="text-sm text-gray-500">{t.copyright}</p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/about" className="text-xs hover:underline underline-offset-4">
            {t.about}
          </Link>
          <Link href="/services" className="text-xs hover:underline underline-offset-4">
            {t.services}
          </Link>
          <Link href="/marketing" className="text-xs hover:underline underline-offset-4">
            {t.marketing}
          </Link>
          <Link href="/financial" className="text-xs hover:underline underline-offset-4">
            {t.financial}
          </Link>
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
            {t.privacy}
          </Link>
          <a
            href="https://t.me/xoperrbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4"
          >
            {t.contactUs}
          </a>
        </nav>
      </div>
    </footer>
  )
}
