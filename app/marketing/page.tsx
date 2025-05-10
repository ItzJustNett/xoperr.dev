import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, Building2, Target } from "lucide-react"

export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Marketing Plan</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive strategy for effective promotion of Xoperr's AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Promotion Strategy</h2>
              <p className="text-gray-500">
                To ensure maximum reach and customer engagement, we use modern communication channels and strategic
                partnerships that meet the needs of our target audience. Our efforts are focused on the following areas:
              </p>

              <div className="space-y-4 mt-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Social Media
                  </h3>
                  <p className="text-gray-500">
                    We actively use popular platforms such as TikTok, Instagram, and X to attract youth and freelancers.
                    These platforms are ideal for creating viral content, demonstrating the capabilities of our AI
                    agents, and interacting with the audience through interactive posts, short videos, and stories.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Partnerships
                  </h3>
                  <p className="text-gray-500">
                    We plan to establish cooperation with leading platforms that provide server hosting services, such
                    as DeltaHost and Digital Ocean. These partnerships will allow us to offer integrated solutions that
                    combine our AI agents with powerful cloud services.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                    Advertising
                  </h3>
                  <p className="text-gray-500">
                    For promotion in Ukraine, we will use contextual advertising in Google Ads to reach users who are
                    actively looking for business automation solutions. Additionally, we will launch targeted
                    advertising on social networks, which will allow us to precisely target our campaigns to our target
                    audience in Ukraine.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <CardTitle>Pricing Strategy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Our pricing policy is designed to make Xoperr's AI solutions accessible to a wide range of clients,
                    from freelancers to large corporations. We offer flexible and transparent pricing plans that take
                    into account the needs of different market segments:
                  </CardDescription>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-1">Free Access</h4>
                      <p className="text-sm text-gray-500">
                        To attract new users, we provide the ability to generate up to three business plans for free
                        using our AI agents. This option allows clients to familiarize themselves with the platform's
                        capabilities, evaluate its effectiveness, and be convinced of the value of our solutions before
                        purchasing paid packages.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-1">Corporate Packages</h4>
                      <p className="text-sm text-gray-500">
                        For companies that need extended capabilities, we offer corporate packages starting from 4,000
                        UAH for using one group of AI agents. Each group specializes in a specific area, such as
                        marketing, accounting, management, or business planning, allowing clients to choose the
                        solutions that meet their needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Target Audience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Our AI solutions are targeted at three main market segments, each with unique needs and goals. We
                    strive to adapt our products to the specifics of each segment to provide maximum value to clients:
                  </CardDescription>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">Freelancers (25-40 years)</h4>
                      </div>
                      <p className="text-sm text-gray-500">
                        This category includes copywriters, programmers, marketers, and other specialists who work
                        independently. Our AI agents will help them automate routine tasks.
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">Small Business</h4>
                      </div>
                      <p className="text-sm text-gray-500">
                        We focus on companies looking for cost-effective AI solutions to improve efficiency. Our
                        products allow small businesses to automate key processes.
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">Medium & Large Business</h4>
                      </div>
                      <p className="text-sm text-gray-500">
                        These companies seek to simplify and optimize their business processes using advanced AI
                        technologies. Our AI agents offer comprehensive solutions.
                      </p>
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
