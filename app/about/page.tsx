"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.aboutXoperr}</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {language === "en"
                  ? "A platform offering AI agents as ideal business assistants"
                  : "Платформа, що пропонує ШІ-агентів як ідеальних помічників для бізнесу"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{language === "en" ? "Industry Overview" : "Огляд галузі"}</h2>
              <p className="text-gray-500">
                {language === "en"
                  ? "The AI market is experiencing rapid growth, with new models constantly changing the landscape. Recent releases like ChatGPT-4o, Grok, Gemini 2.5 Pro, Claude 3.7, and DeepSeek have significantly transformed the market. Notably, Llama Maverick has become the first model capable of processing 1 million tokens (approximately 7 million characters), opening new possibilities for large data processing."
                  : "Ринок ШІ демонструє стрімке зростання, яке супроводжується швидким розвитком технологій та появою нових інноваційних рішень. Останніми роками спостерігається значне прискорення у випуску нових моделей ШІ, таких як ChatGPT-4o, Grok, Gemini 2.5 Pro, Claude 3.7, та DeepSeek, що постійно змінюють ландшафт галузі. Особливо варто відзначити модель Llama Maverick, яка стала першою у світі моделлю, здатною обробляти 1 мільйон токенів (приблизно 7 мільйонів символів)."}
              </p>
              <p className="text-gray-500">
                {language === "en"
                  ? "According to Forbes, the global AI market was valued at $305.9 billion in 2023 and is projected to reach $738.8 billion by 2030. This growth is driven by widespread adoption across various industries, with 64% of companies reporting increased productivity from AI implementation and 42% actively integrating AI solutions into their business processes."
                  : "Згідно з даними Forbes, глобальний ринок ШІ оцінювався у 305,9 мільярда доларів США у 2023 році і, за прогнозами, досягне 738,8 мільярда доларів до 2030 року. Це зростання зумовлене широким впровадженням ШІ-технологій у різних галузях, при цьому 64% компаній повідомляють про підвищення продуктивності завдяки впровадженню ШІ, а 42% активно інтегрують ШІ-рішення у свої бізнес-процеси."}
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    {language === "en" ? "Key Market Trends" : "Ключові тенденції ринку"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">
                      {language === "en" ? "Growing Demand for Business AI" : "Зростання попиту на ШІ для бізнесу"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {language === "en"
                        ? "Companies increasingly use AI for process automation, data analysis, and strategic decision-making."
                        : "Компанії все частіше використовують ШІ для автоматизації процесів, аналізу даних та прийняття стратегічних рішень."}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {language === "en"
                        ? "AI-Generated Marketing Content"
                        : "Створення маркетингового контенту за допомогою ШІ"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {language === "en"
                        ? "Generative AI models enable creation of high-quality text, graphic, and video content, reducing marketing costs."
                        : "Генеративні моделі ШІ дозволяють створювати високоякісний текстовий, графічний та відеоконтент, знижуючи витрати на маркетинг."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
