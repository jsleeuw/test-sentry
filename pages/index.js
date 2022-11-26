function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <button
        type="button"
        onClick={() => {
          throw new Error("A Sentry Frontend Error")
        }}
      >
        Throw error
      </button>
    </div>
  )
}

export default HomePage
