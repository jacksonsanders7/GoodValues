export default function ScoreBadge({ score }) {
  let color = "bg-red-500"

  if (score >= 80) color = "bg-green-500"
  else if (score >= 60) color = "bg-yellow-500"
  else if (score >= 40) color = "bg-orange-500"

  return (
    <div className={`${color} text-white px-3 py-1 rounded-full inline-block`}>
      {score}/100
    </div>
  )
}
