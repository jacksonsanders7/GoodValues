export default function ReviewCard({ review }) {
  return (
    <div className="border p-4 rounded mb-3">
      <h3 className="font-semibold">{review.title}</h3>
      <p className="text-sm text-gray-700">{review.content}</p>
      <a
        href={review.source_url}
        target="_blank"
        className="text-blue-500 underline"
      >
        Source
      </a>
      <p className="text-xs mt-1">
        Credibility: {review.credibility_score}
      </p>
    </div>
  )
}
