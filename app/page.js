import Link from 'next/link'
import { getCompanies, calculateScore } from '../lib/db/companies'
import CompanyCard from '../components/CompanyCard'

export default async function Home() {
  const { data: companies } = await getCompanies()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Reputation Ratings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies?.map((c) => (
          <Link key={c.id} href={`/company/${c.slug}`}>
            <CompanyCard
              company={c}
              score={calculateScore(c)}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
