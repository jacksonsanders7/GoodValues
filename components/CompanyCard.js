export default function CompanyCard({ company, score }) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg cursor-pointer">
      <img src={company.logo_url} className="h-16 mb-3" />
      <h2 className="text-xl font-semibold">{company.name}</h2>
      <p className="text-gray-600">Score: {score}</p>
    </div>
  )
}
import ScoreBadge from "./ScoreBadge"

export default function CompanyCard({ company, score }) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg cursor-pointer">
      <img src={company.logo_url} className="h-16 mb-3" />
      <h2 className="text-xl font-semibold">{company.name}</h2>

      <ScoreBadge score={score} />
    </div>
  )
}
