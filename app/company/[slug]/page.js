import {
  getCompanyBySlug,
  getReviews,
  calculateScore
} from '../../../lib/db/companies'

import ReviewCard from '../../../components/ReviewCard'

export default async function CompanyPage({ params }) {
  const { slug } = params

  const { data: company } = await getCompanyBySlug(slug)
  if (!company) return <div>Not found</div>

  const { data: reviews } = await getReviews(company.id)

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={company.logo_url} className="h-24 mb-4" />

      <h1 className="text-3xl font-bold">
        {company.name}
      </h1>

      <p className="mb-4">{company.description}</p>

      <div className="bg-gray-100 p-4 rounded-xl mb-6">
        <p className="text-lg font-semibold">
          Score: {calculateScore(company)}
        </p>

        <p>Ethics: {company.ethics_score}</p>
        <p>Sustainability: {company.sustainability_score}</p>
        <p>Labor: {company.labor_score}</p>
        <p>Political: {company.political_score}</p>

        <a
          href={company.affiliate_url}
          target="_blank"
          className="text-blue-600 underline"
        >
          Visit Company
        </a>
      </div>

      <h2 className="text-2xl font-bold mb-2">
        Reviews & Sources
      </h2>

      {reviews?.map((r) => (
        <ReviewCard key={r.id} review={r} />
      ))}
    </div>
  )
}
