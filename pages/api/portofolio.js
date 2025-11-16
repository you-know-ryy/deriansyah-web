// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = [
	{
		link: "https://alamtani.my.id/",
		thumbnail: "/portofolio/alamtani.png",
		alt: "Alamtani",
		title: "Alamtani",
		excerpt:
			"Platform web untuk pencarian blog dan artikel pertanian. Dibuat dengan Gatsby.js.",
	},
	{
		link: "https://banten-news.vercel.app/",
		thumbnail: "/portofolio/banten-news.png",
		alt: "Banten News",
		title: "Banten News",
		excerpt: "Website berita ringan dan cepat untuk info Banten. Dibuat dengan Vercel.",
	},
	{
		link: "https://cvryy.my.id/",
		thumbnail: "/portofolio/cv-portfolio.png",
		alt: "CV Portfolio",
		title: "CV Portfolio",
		excerpt:
			"Web portfolio pribadi & blog menggunakan Next.js, Tailwind, dan Markdown.",
	},
	{
		link: "https://github.com/armandwipangestu/armandwipangestu.vercel.app",
		thumbnail: "/portofolio/portofolio.png",
		alt: "NextJS - Web Portofolio & Blog",
		title: "NextJS - Web Portofolio & Blog",
		excerpt: "Web Portofolio dibuat menggunakan NextJS dan Tailwind CSS",
		techs: ["NextJS", "ReactJS", "TailwindCSS", "Markdown"],
	},
];

export default function handler(req, res) {
	res.status(200).json({ data });
}
