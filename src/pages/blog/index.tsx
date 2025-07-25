import { Header } from "@/components/layout/header"

export default function BlogPage() {
 return(
    <>
    <Header />
      <main className="pt-16">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
         <h1 className="text-3xl font-bold">Blog</h1>
         {/* Blog content goes here */}
         </div>   
      </main>
    
    </>
 )   
}