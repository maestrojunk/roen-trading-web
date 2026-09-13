import { createClient } from '@supabase/supabase-js';

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// Clean trailing /rest/v1 or slashes to ensure standard Supabase project URL
export const supabaseUrl = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface InquiryRecord {
  id?: string;
  category: string;
  email: string;
  message: string;
  created_at?: string;
}

export async function submitInquiry(data: {
  category: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    return {
      success: false,
      error: 'Supabase credentials are not configured yet.',
    };
  }

  try {
    const { error } = await supabase.from('inquiries').insert([
      {
        category: data.category,
        email: data.email,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase inquiry submission error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Unexpected inquiry error:', err);
    return { success: false, error: err?.message || 'Unknown error' };
  }
}
