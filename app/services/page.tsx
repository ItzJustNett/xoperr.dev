import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Calculator, Users, FileText } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive AI solutions for optimizing key aspects of business operations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">AI for Marketing</h2>
              <p className="text-gray-500">
                Our AI agents for marketing are designed to create highly effective advertising content that resonates
                with modern audiences. Specifically, AI can generate advertising videos that start with popular viral
                memes or humorous elements that instantly capture viewers' attention. These videos smoothly transition
                to non-intrusive advertising of products or services, adapted to the unique style and brand of the
                company.
              </p>
              <p className="text-gray-500">
                This approach not only captures the target audience's attention but also effectively conveys key
                messages, increasing brand recognition and customer engagement.
              </p>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Marketing AI Features</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Viral video content generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Brand-specific content adaptation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Audience engagement optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Trend analysis and implementation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-primary" />
                  <CardTitle>AI for Accounting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Our AI solutions for accounting are aimed at automating and optimizing financial processes. AI agents
                  carefully analyze financial data, ensuring accurate accounting of income and expenses, and
                  automatically generate detailed reports that meet business needs.
                </CardDescription>
                <CardDescription>
                  Additionally, the system identifies potential errors in financial transactions and offers
                  recommendations for optimizing accounting processes. This allows businesses to save time, reduce the
                  risk of human error, and improve financial management efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>AI for Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  AI agents focused on management help optimize team and workflow management. They analyze employee
                  productivity, evaluate task performance efficiency, and automatically distribute work responsibilities
                  to ensure maximum productivity.
                </CardDescription>
                <CardDescription>
                  Additionally, AI predicts potential problems in work processes, such as delays or inefficient resource
                  use, and offers practical solutions to address them. This approach contributes to creating more
                  coordinated and efficient teamwork.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle>AI for Business Planning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Our AI agents for business planning are designed to create comprehensive company development
                  strategies. They conduct in-depth analysis of market trends, competitor activities, and financial
                  indicators to form detailed business plans that align with company goals.
                </CardDescription>
                <CardDescription>
                  AI also predicts potential risks and growth opportunities, providing businesses with clear
                  recommendations for achieving success. This approach allows businesses to make informed strategic
                  decisions and confidently move toward their goals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Unique Value Proposition</h2>
            <p className="text-gray-700">
              Xoperr stands out in the market thanks to its innovative approach to applying AI technologies in various
              aspects of business. Particularly unique is our AI service for accounting, which has potential for use at
              the state level. Currently, no other service offers similar solutions for automating and optimizing
              accounting processes in government institutions, making our offering pioneering in this field.
            </p>
            <p className="text-gray-700 mt-2">
              Our AI agents not only automate routine tasks but also provide a high level of accuracy and adaptability,
              making them ideal for large-scale and complex applications.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
