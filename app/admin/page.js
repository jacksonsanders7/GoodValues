'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Admin() {
  const [form, setForm] = useState({})

  const handleSubmit = async () => {
    const { error } = await supabase
      .from('companies')
      .insert([form])

    if (error) {
      alert('Error adding company')
    } else {
      alert('Company added')
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Add Company
      </h1>

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} className="border p-2 w-full mb-2" />
      <input placeholder="Slug" onChange={e => setForm({...form, slug: e.target.value})} className="border p-2 w-full mb-2" />
      <input placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} className="border p-2 w-full mb-2" />
      <input placeholder="Logo URL" onChange={e => setForm({...form, logo_url: e.target.value})} className="border p-2 w-full mb-2" />
      <input placeholder="Affiliate URL" onChange={e => setForm({...form, affiliate_url: e.target.value})} className="border p-2 w-full mb-2" />

      <input type="number" placeholder="Ethics Score" onChange={e => setForm({...form, ethics_score: +e.target.value})} className="border p-2 w-full mb-2" />
      <input type="number" placeholder="Sustainability Score" onChange={e => setForm({...form, sustainability_score: +e.target.value})} className="border p-2 w-full mb-2" />
      <input type="number" placeholder="Labor Score" onChange={e => setForm({...form, labor_score: +e.target.value})} className="border p-2 w-full mb-2" />
      <input type="number" placeholder="Political Score" onChange={e => setForm({...form, political_score: +e.target.value})} className="border p-2 w-full mb-2" />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded mt-2"
      >
        Submit
      </button>
    </div>
  )
}
