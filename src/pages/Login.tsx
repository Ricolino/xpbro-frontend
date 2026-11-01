'use client'
import './../styles/Login.css'
import { useEffect, useState } from 'react'
import { createClient, type AuthChangeEvent, type Session } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://zvfqqeqjcwbtjkamkfxx.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_t7ZQBoQoOEEeFU1xWd9Jag_yc2e6Fm-'

type AuthMode = 'login' | 'signup'

type Article = {
  title: string
  body: string
  published_at?: string | null
}

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

export default function Login() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const [session, setSession] = useState<Session | null>(null)
      const [articles, setArticles] = useState<Article[]>([])
      const [loadingArticles, setLoadingArticles] = useState(false)

      // Restore session on load
      useEffect(() => {
        supabase.auth.getSession().then(({ data: { session: activeSession } }) => {
          setSession(activeSession)
      })

      const { data: listener } = supabase.auth.onAuthStateChange(
        (_event: AuthChangeEvent, newSession: Session | null) => {
          setSession(newSession)
        }
      )

      return () => {
        listener.subscription.unsubscribe()
      }
    }, [])

    // Login / Signup handler
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (authMode === 'login') {
            setStatus('Se autentifică…')
            const { error } = await supabase.auth.signInWithPassword({ email, password })
            setStatus(error ? `Autentificarea nu a reușit: ${error.message}` : 'Autentificare reușită.')
          } else {
            setStatus('Se creează contul…')
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: { emailRedirectTo: window.location.origin }
            })

            if (error) {
                setStatus(`Crearea contului nu a reușit: ${error.message}`)
              } else if (data.session) {
                setStatus('Cont creat și autentificat cu succes.')
              } else {
                setStatus('Cont creat. Verifică emailul și confirmă adresa înainte de autentificare.')
              }
            }
          }

          // Google OAuth
          async function handleGoogleLogin() {
            setStatus('Redirecting to Google…')
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: { redirectTo: window.location.origin }
            })
            if (error) setStatus(`Error connecting to Google: ${error.message}`)
            }

            // Logout
            async function handleLogout() {
              setStatus('Logging out…')
              const { error } = await supabase.auth.signOut()
              setStatus(error ? `Logout failed: ${error.message}` : 'You have been logged out.')
            }

            // Load articles
            async function loadArticles() {
              setLoadingArticles(true)
              setStatus('Loading articles…')

              const { data, error } = await supabase
              .from('posts')
              .select('title, body, published_at')
              .eq('published', true)
              .order('published_at', { ascending: false })

              if (error) {
                  setStatus(`Error: ${error.message}`)
                  setArticles([])
                } else {
                  setStatus('Articles loaded.')
                  setArticles(data || [])
                }

                setLoadingArticles(false)
              }

              const isLoggedIn = Boolean(session)

              return (
                <div>
                  <section className="auth-card">
                    {!isLoggedIn && (
                      <>
                    <h2>{authMode === 'login' ? 'Autentificare' : 'Creare cont nou'}</h2>

                      <div id="oauth-area">
                        <button onClick={handleGoogleLogin} type="button">
                          Continue with Google
                        </button>
                      <div className="separator">or</div>
                      </div>

                      <form onSubmit={handleSubmit}>
                      <label>Email</label>
                        <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nume@exemplu.com"
                        />

                      <label>Password</label>
                        <input
                        type="password"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        />

                        <button type="submit">
                          {authMode === 'login' ? 'Intră în cont' : 'Înregistrare'}
                        </button>
                      </form>

                      <div className="auth-actions">
                        {authMode === 'login' ? (
                          <p>
                            Nu ai un cont?{' '}
                          <a onClick={() => setAuthMode('signup')}>Înregistrează-te</a>
                          </p>
                        ) : (
                          <p>
                            Ai deja cont?{' '}
                          <a onClick={() => setAuthMode('login')}>Autentifică-te</a>
                          </p>
                      )}
                    </div>
                    </>
                )}

                {isLoggedIn && (
                  <>
                <p>Connected as {session?.user?.email}</p>
                <button onClick={handleLogout}>Logout</button>
                  </>
              )}

            <p id="auth-status">{status}</p>
            </section>

          <button onClick={() => window.location.href = '/'}>Back home</button>
          <button onClick={loadArticles}>Load articles</button>

            <section id="articles" className="articles">
            {loadingArticles && <p>Loading…</p>}
            {!loadingArticles && articles.length === 0 && <p>No articles published at the moment.</p>}

              {articles.map((post, i) => (
                <article key={i} className="article-card">
                <h2>{post.title}</h2>
                  {post.published_at && (
                    <time dateTime={post.published_at}>
                      {new Intl.DateTimeFormat('ro-RO', { dateStyle: 'long' }).format(
                        new Date(post.published_at)
                    )}
                  </time>
              )}
            <p>{post.body}</p>
            </article>
      ))}
    </section>
  </div>
)
}
