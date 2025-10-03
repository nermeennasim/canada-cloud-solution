declare global {
	interface Window {
		gtag: (
			command: "config" | "consent" | "event" | "js",
			targetId: string | Date,
			config?: {
				page_title?: string;
				page_location?: string;
				analytics_storage?: "granted" | "denied";
				ad_storage?: "granted" | "denied";
				wait_for_update?: number;
				[key: string]: any;
			}
		) => void;
		dataLayer: any[];
	}
}

export {};