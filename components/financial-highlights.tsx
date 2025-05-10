"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Clock, DollarSign, Percent, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function FinancialHighlights() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <HighlightCard
        title={t.initialInvestment}
        value="150,000 UAH"
        description={t.totalProjectBudget}
        icon={<DollarSign className="h-5 w-5 text-blue-600" />}
      />
      <HighlightCard
        title={t.paybackPeriod}
        value={`3 ${language === "en" ? "months" : "місяці"}`}
        description={t.quickReturn}
        icon={<Clock className="h-5 w-5 text-green-600" />}
      />
      <HighlightCard
        title={t.roi}
        value="500%"
        description={t.annualReturn}
        icon={<Percent className="h-5 w-5 text-purple-600" />}
      />
      <HighlightCard
        title={t.netIncome}
        value="600,000 UAH"
        description={t.firstYearValue}
        icon={<TrendingUp className="h-5 w-5 text-red-600" />}
      />
    </div>
  )
}

function HighlightCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription className="flex items-center mt-1">
          {description}
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </CardDescription>
      </CardContent>
    </Card>
  )
}
