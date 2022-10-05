import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import config from "../config";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main/>
                    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalithics.id}`} strategy="afterInteractive"></Script>
                    <Script id="google-analytics" strategy="afterInteractive">
                        {
                            `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', ${config.googleAnalithics.id});                            
                            `
                        }
                    </Script>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}