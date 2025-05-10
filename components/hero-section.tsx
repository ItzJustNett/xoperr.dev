"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">{t.businessPlan}</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <span className="text-primary">Xoperr</span> - {language === "en" ? "AI" : "ШІ"}{" "}
              {language === "en" ? "Agents for Business" : "агенти для бізнесу"}
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl">{t.heroSubtitle}</p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/about">
                <Button className="group">
                  {t.exploreBusinessPlan}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/financial">
                <Button variant="outline">{t.viewFinancialProjections}</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-10 blur-2xl"></div>
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md">
                  <h3 className="text-xl font-bold mb-2">{t.projectSummary}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">{t.projectCost}</p>
                      <p className="font-medium">150,000 UAH</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t.paybackPeriod}</p>
                      <p className="font-medium">3 {language === "en" ? "months" : "місяці"}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t.roi}</p>
                      <p className="font-medium">500%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t.monthlyRevenue}</p>
                      <p className="font-medium">100,000 UAH</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t.launchDate}</p>
                      <p className="font-medium">{language === "en" ? "July 2025" : "Липень 2025"}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t.legalForm}</p>
                      <p className="font-medium">{language === "en" ? "LLC" : "ТОВ"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
