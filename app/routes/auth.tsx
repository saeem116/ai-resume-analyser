import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = ()=> ([
    {title: 'Resumind | Auth'},
    {name: 'description', content:'Log into your account'}
    ])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);

    }, [auth.isAuthenticated]);

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex justify-center items-center">
         <div className="relative bg-white/20 backdrop-blur-lg backdrop-saturate-150 border border-white/80 rounded-3xl shadow-lg shadow-white/30">
          <section className="flex flex-col gap-8 bg-white/20 rounded-2xl p-10 ">
            <div className="flex flex-col items-center gap-2 text-center">
                 <h1>Welcome</h1>
                <h2>Log In to Continue Your Job Journey </h2>
            </div>
              <div>
                  {isLoading ? (
                      <button className="auth-button group animate-pulse">
                          <p className="relative z-10">Singing you in ... </p>

                      </button>
                  ) : (
                      <>
                          {auth.isAuthenticated ? (
                              <button className="auth-button group animate-pulse"  onClick={auth.signOut}>
                                  <p>Log Out</p>
                              </button>
                          ) : (

                              <button className="auth-button group animate-pulse"  onClick={auth.signIn}>
                                  <p>Log In</p>
                              </button>
                          )}
                      </>
                  )}
              </div>
         </section>

         </div>
        </main>
    )
}
export default Auth
