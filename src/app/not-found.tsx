import Link from 'next/link'

export default function NotFound() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4 py-16 mt-24"
      style={{ backgroundImage: "url('/404.png')" }}
    >
      <h2 className="text-4xl font-bold text-white mb-4">404 - Not Found</h2>
      <p className="text-lg text-white mb-6">Sorry, the page you are looking for could not be found.</p>
      
        <Link href="/" className="text-white bg-blue-500 hover:bg-blue-600 rounded-full px-6 py-2 text-lg font-semibold transition-colors duration-300 ">
          Return Home
      </Link>
    </div>
  )
}
