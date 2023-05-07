export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0a293d",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 6/Pro",
            model: "raviole",
        },
        {
            name: "Pixel 6A",
            model: "bluejay",
        },
    ],
    RELEASE_VARIANTS: {
	stable: {
		description: "Stable Kernel Releases",
		suffix: "",
	},
    },
    DONATION_LINKS: [
        {
            title: "One-time donation",
            description:
                "You can also make a one-time donation through PayPal. It doesn’t help with sustainable support, but every little bit is appreciated!",
            highlight: false,
            url: "https://paypal.me/panchajanya1999",
            icon: "paypal",
        },
    ],
};
