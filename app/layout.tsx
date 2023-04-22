import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar/Navbar"
import LoginModal from "./components/modals/LoginModal"
import RegisterModal from "./components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import getCurrentUser from "./actions/getCurrentUser"

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        {/* TSERROR */}
        <Navbar currentUser={currentUser} />
        <LoginModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  )
}