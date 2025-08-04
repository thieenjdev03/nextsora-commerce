import { createLazyFileRoute } from '@tanstack/react-router'
import SidebarLayout from '../components/SidebarLayout'
import AuthGuard from '../components/AuthGuard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@nextsora/ui'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/" },
    { label: "About", isCurrentPage: true }
  ];

  return (
    <AuthGuard>
      <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">About NextSora</h2>
          <p className="mt-2 text-gray-600">
            Learn more about our platform and technology stack.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
            <CardDescription>
              Modern technologies powering NextSora
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• NestJS Framework</li>
                  <li>• MongoDB Database</li>
                  <li>• JWT Authentication</li>
                  <li>• Swagger Documentation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Next.js 14 App Router</li>
                  <li>• React 18</li>
                  <li>• TailwindCSS</li>
                  <li>• TypeScript</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dashboard</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vite Build Tool</li>
                  <li>• TanStack Router</li>
                  <li>• ShadCN UI Components</li>
                  <li>• React Hook Form</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">DevOps</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Turborepo Monorepo</li>
                  <li>• pnpm Package Manager</li>
                  <li>• ESLint + Prettier</li>
                  <li>• Docker Support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
    </AuthGuard>
  )
}