type Props = {
  children: React.ReactNode
}
const AuthLayout: React.FC<Props> = async ({ children }) => {
  return (
    <main className="relative flex h-[100dvh] w-screen flex-col items-center justify-center">
      <div className="absolute inset-0 z-10 h-[100dvh] w-screen bg-background/10 object-cover backdrop-blur-lg" />
      <video
        src="/video.mp4"
        loop
        autoPlay={true}
        muted
        className="absolute inset-0 h-[100dvh] w-screen object-cover brightness-50"
      ></video>
      {children}
    </main>
  )
}
export default AuthLayout
