import { supabase } from '../supabase'

// Get all companies
export async function getCompanies() {
  return await supabase.from('companies').select('*')
}

// Get one company by slug
export async function getCompanyBySlug(slug) {
  return await supabase
    .from('companies')
    .select('*')
    .eq('slug', slug)
    .single()
}

// Get reviews for a company
export async function getReviews(company_id) {
  return await supabase
    .from('reviews')
    .select('*')
    .eq('company_id', company_id)
}

// Calculate weighted score
export function calculateScore(c) {
  return Math.round(
    (c.ethics_score * 0.3 +
      c.sustainability_score * 0.25 +
      c.labor_score * 0.25 +
      c.political_score * 0.2)
  )
}
