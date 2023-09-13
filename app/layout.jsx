import '@styles/globals.css';

export const metadata = {
    title: "Next App",
    description: "Discover AI"    
}


const RootLayout = () => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;