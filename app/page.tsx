"use client"

import type React from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building,
  CreditCard,
  FileText,
  LineChart,
  MessageSquare,
  PieChart,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import FinancialHighlights from "@/components/financial-highlights"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.businessPlanOverview}</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.businessPlanDescription}
              </p>
            </div>
          </div>

          <FinancialHighlights />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <SectionCard
              title={t.aboutXoperr}
              description={t.aboutXoperrDesc}
              icon={<BrainCircuit className="h-10 w-10 text-primary" />}
              href="/about"
              viewDetails={t.viewDetails}
            />
            <SectionCard
              title={t.servicesTitle}
              description={t.servicesDesc}
              icon={<MessageSquare className="h-10 w-10 text-primary" />}
              href="/services"
              viewDetails={t.viewDetails}
            />
            <SectionCard
              title={t.marketingPlan}
              description={t.marketingPlanDesc}
              icon={<BarChart3 className="h-10 w-10 text-primary" />}
              href="/marketing"
              viewDetails={t.viewDetails}
            />
            <SectionCard
              title={t.organizationManagement}
              description={t.organizationManagementDesc}
              icon={<Users className="h-10 w-10 text-primary" />}
              href="/organization"
              viewDetails={t.viewDetails}
            />
            <SectionCard
              title={t.investmentPlan}
              description={t.investmentPlanDesc}
              icon={<CreditCard className="h-10 w-10 text-primary" />}
              href="/investment"
              viewDetails={t.viewDetails}
            />
            <SectionCard
              title={t.productionPlan}
              description={t.productionPlanDesc}
              icon={<Building className="h-10 w-10 text-primary" />}
              href="/production"
              viewDetails={t.viewDetails}
            />
            <SectionCard
              title={t.financialPlan}
              description={t.financialPlanDesc}
              icon={<LineChart className="h-10 w-10 text-primary" />}
              href="/financial"
              viewDetails={t.viewDetails}
            />
            <SectionCard
              title={t.projectEfficiency}
              description={t.projectEfficiencyDesc}
              icon={<PieChart className="h-10 w-10 text-primary" />}
              href="/efficiency"
              viewDetails={t.viewDetails}
            />
            <SectionCard
              title={t.developmentOpportunities}
              description={t.developmentOpportunitiesDesc}
              icon={<FileText className="h-10 w-10 text-primary" />}
              href="/opportunities"
              viewDetails={t.viewDetails}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionCard({
  title,
  description,
  icon,
  href,
  viewDetails,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  viewDetails: string
}) {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        <CardDescription className="flex-1 mb-4">{description}</CardDescription>
        <Link href={href} className="mt-auto">
          <Button variant="outline" className="w-full group">
            {viewDetails}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
