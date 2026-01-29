	import { createClient } from '@supabase/supabase-js'

	// Create a single supabase client for interacting with your database
	const supabase = createClient('https://xyzcompany.supabase.co', 'ukzfywacqipletifjtkn')

  import supabase from '~/lib/supabase'
  import type { Database } from '~/lib/database.types'

  async function getMovies() {
    return await supabase.from('Pra&SE').select('Bolsa de trabajo')
  }

  type bd = Database['public']['tables']['Bolsa de trabajo']['row']
  type empleo = Awaited<ReturnType<typeof getBolsa de trabajo>>
  type empleoSuccess = empleoResponse['data'] & {
  actors: bd[]
  }

let { data: Bolsa de empleo, error } = await supabase
  .from('Bolsa de empleo')
  .select('puesto')
  
  
let { data: Bolsa de empleo, error } = await supabase
  .from('Bolsa de empleo')
  .select('tipo de empleo')

