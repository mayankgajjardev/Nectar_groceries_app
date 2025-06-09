import AppColors from "../constants/AppColors";

const AppData = {
	person:
		"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
	exclusiveProducts: [
		{
			id: 1,
			title: "Organic Bananas",
			color: AppColors.cardColor1,
			image:
				"https://images.unsplash.com/photo-1744659753302-9f4fc320f085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE9yZ2FuaWMlMjBCYW5hbmFzfGVufDB8fDB8fHww", // bananas
		},
		{
			id: 2,
			title: "Red Apple",
			color: AppColors.cardColor2,
			image:
				"https://plus.unsplash.com/premium_photo-1724249989963-9286e126af81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVkJTIwQXBwbGV8ZW58MHx8MHx8fDA%3D", // red apple
		},
		{
			id: 3,
			title: "Natural Red Apple",
			color: AppColors.cardColor3,
			image:
				"https://plus.unsplash.com/premium_photo-1724249993404-77946fd600e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE5hdHVyYWwlMjBSZWQlMjBBcHBsZXxlbnwwfHwwfHx8MA%3D%3D", // another red apple
		},
		{
			id: 4,
			title: "Ginger",
			color: AppColors.cardColor4,
			image:
				"https://images.unsplash.com/photo-1615484478243-c94e896edbae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R2luZ2VyfGVufDB8fDB8fHww", // ginger
		},
		{
			id: 5,
			title: "Strawberries",
			color: AppColors.cardColor5,
			image:
				"https://images.unsplash.com/photo-1622921491193-345ffb510f6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN0cmF3YmVycmllc3xlbnwwfHwwfHx8MA%3D%3D", // strawberries
		},
		{
			id: 6,
			title: "Broccoli",
			color: AppColors.cardColor6,
			image:
				"https://images.unsplash.com/photo-1685504445355-0e7bdf90d415?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJvY2NvbGl8ZW58MHx8MHx8fDA%3D", // broccoli
		},
		{
			id: 7,
			title: "Carrots",
			color: AppColors.cardColor1,
			image:
				"https://images.unsplash.com/photo-1522184216316-3c25379f9760?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D", // carrots (reused apple fallback if image unavailable)
		},
		{
			id: 8,
			title: "Green Grapes",
			color: AppColors.cardColor2,
			image:
				"https://plus.unsplash.com/premium_photo-1724250449759-f9bbb5fd4f63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JlZW4lMjBHcmFwZXN8ZW58MHx8MHx8fDA%3D", // green grapes
		},
	],
	groceries: [
		{
			id: 1,
			title: "Pulses",
			color: AppColors.cardColor1,
			image:
				"https://images.unsplash.com/photo-1647714013867-f62bc1cc2039?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFB1bHNlc3xlbnwwfHwwfHx8MA%3D%3D", // pulses
		},
		{
			id: 2,
			title: "Rice",
			color: AppColors.cardColor2,
			image:
				"https://plus.unsplash.com/premium_photo-1723726831918-9a8542e705cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJpY2V8ZW58MHx8MHx8fDA%3D", // rice
		},
		{
			id: 3,
			title: "Wheat Flour",
			color: AppColors.cardColor3,
			image:
				"https://images.unsplash.com/photo-1702061895070-15d7972d3eef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2hlYXQlMjBGbG91cnxlbnwwfHwwfHx8MA%3D%3D", // flour
		},
		{
			id: 4,
			title: "Cooking Oil",
			color: AppColors.cardColor4,
			image:
				"https://images.unsplash.com/photo-1596522869169-95231d2b6864?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29va2luZyUyME9pbHxlbnwwfHwwfHx8MA%3D%3D", // oil
		},
		{
			id: 5,
			title: "Sugar",
			color: AppColors.cardColor5,
			image:
				"https://images.unsplash.com/photo-1634612831148-03a8550e1d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U3VnYXJ8ZW58MHx8MHx8fDA%3D", // sugar
		},
	],
	products: [
		{
			id: 1,
			title: "Fresh Fruits & Vegetables",
			color: AppColors.cardColor1,
			image:
				"https://media.istockphoto.com/id/1247073860/photo/healthy-fresh-organic-vegetables-in-a-crate-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=wnA5gMn5BPRQuKxC_qRoL4rVO7Y-8HNQeJqPsnm05c4=",
		},
		{
			id: 2,
			title: "Cooking Oil & Ghee",
			color: AppColors.cardColor2,
			image:
				"https://media.istockphoto.com/id/857450176/photo/ghee-or-clarified-butter-close-up-in-wooden-bowl-and-silver-spoon-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=n60RJg4OCMTlp8WtjSNFecj0grJswbBYZYLRRFoQgn4=",
		},
		{
			id: 3,
			title: "Meat & Fish",
			color: AppColors.cardColor3,
			image:
				"https://plus.unsplash.com/premium_photo-1693262738354-b025d4005eb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWVhdCUyMCUyNiUyMEZpc2h8ZW58MHx8MHx8fDA%3D",
		},
		{
			id: 4,
			title: "Bakery & Snacks",
			color: AppColors.cardColor4,
			image:
				"https://media.istockphoto.com/id/1001971972/photo/breakfast-with-croissants-coffee-orange-juice-and-berries.webp?a=1&b=1&s=612x612&w=0&k=20&c=9Ku_dmNZsK99arWibcEV8JUiHD-VAsFmOdOrUsYm2l4=",
		},
		{
			id: 5,
			title: "Dairy & Eggs",
			color: AppColors.cardColor5,
			image:
				"https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGFpcnklMjAlMjYlMjBFZ2dzfGVufDB8fDB8fHww",
		},
		{
			id: 6,
			title: "Beverages",
			color: AppColors.cardColor6,
			image:
				"https://images.unsplash.com/photo-1625865019845-7b2c89b8a8a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmV2ZXJhZ2VzfGVufDB8fDB8fHww",
		},
	],
};

export default AppData;
