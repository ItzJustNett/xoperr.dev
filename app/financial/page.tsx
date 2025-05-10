import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, PieChart, TrendingUp } from "lucide-react"

export default function FinancialPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Financial Plan</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive financial projections and analysis for Xoperr
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Expenses</h2>
              <p className="text-gray-500">
                Below is a detailed list of expenses required to ensure the operation of Xoperr during the first three
                months:
              </p>

              <div className="mt-6 space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Technology Subscriptions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">v0 premium (3 months)</span>
                        <span className="font-medium">6,000 UAH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Claude premium (3 months)</span>
                        <span className="font-medium">6,000 UAH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Replit Core (3 months)</span>
                        <span className="font-medium">3,000 UAH</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Hosting & Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Server hosting (Delta Host, 32 GB, 3 months)</span>
                        <span className="font-medium">7,500 UAH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Website hosting (Vercel, free plan)</span>
                        <span className="font-medium">0 UAH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">API OpenRouter (3 months)</span>
                        <span className="font-medium">30,000 UAH</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Marketing & Legal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Marketing & promotion</span>
                        <span className="font-medium">60,000 UAH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Legal services & registration</span>
                        <span className="font-medium">30,000 UAH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Operational expenses (3 months)</span>
                        <span className="font-medium">15,000 UAH</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between p-4 bg-gray-100 rounded-lg">
                  <span className="font-bold">Total Expenses</span>
                  <span className="font-bold">150,000 UAH</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <LineChart className="h-6 w-6 text-primary" />
                    <CardTitle>Funding Sources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Funding for Xoperr's activities for the first three months is fully provided by own funds in the
                    amount of 150,000 UAH. This allows the company to avoid attracting external investments, ensuring
                    financial independence and full control over strategic decisions.
                  </CardDescription>

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Own funds</span>
                      <span className="font-medium">150,000 UAH</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">100% of the required funding</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <CardTitle>Revenue Forecast</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Based on Xoperr's pricing policy, the following revenue sources are projected:
                  </CardDescription>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-1">Free Access</h4>
                      <p className="text-sm text-gray-500">
                        Clients can generate up to three business plans for free, which will serve as a tool for
                        attracting new users and demonstrating the platform's capabilities.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-1">Corporate Packages</h4>
                      <p className="text-sm text-gray-500">
                        Paid packages starting from 4,000 UAH for using one group of AI agents (marketing, accounting,
                        management, or business planning) will be the main source of revenue. It is expected that
                        corporate clients (small, medium, and large businesses) will be the main consumers of these
                        packages.
                      </p>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Projected monthly revenue</span>
                        <span className="font-medium">100,000 UAH</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Projected monthly net profit</span>
                        <span className="font-medium">60,000 UAH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Projected monthly cash flow</span>
                        <span className="font-medium">60,000 UAH</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <PieChart className="h-6 w-6 text-primary" />
                    <CardTitle>Project Efficiency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Payback Period</p>
                      <p className="font-medium">3 months</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ROI (Monthly)</p>
                      <p className="font-medium">41.7%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ROI (Annual)</p>
                      <p className="font-medium">500%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">NPV (First Year)</p>
                      <p className="font-medium">600,000 UAH</p>
                    </div>
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
