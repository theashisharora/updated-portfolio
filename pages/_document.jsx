// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Load custom scripts in <Head>
 * 
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				{/* Chatwoot Script */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function(d,t) {
								var BASE_URL="https://app.chatwoot.co";
								var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
								g.src=BASE_URL+"/packs/js/sdk.js";
								g.defer = true;
								g.async = true;
								s.parentNode.insertBefore(g,s);
								g.onload=function(){
									window.chatwootSDK.run({
										websiteToken: 'UZRDGCGXMETgrQEGYB5MwHNq',
										baseUrl: BASE_URL
									})
								}
							})(document,"script");
						`,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}