import { Providers } from "./providers";

export default function RootLayout({ children}: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>
        { /* ...header... */}
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
} 