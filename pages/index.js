function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error")
        }}
      >
        Throw error
      </button>
    </div>
  )
}

export default HomePage
