"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "uk" : "en")
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-1">
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "UK" : "EN"}</span>
    </Button>
  )
}
