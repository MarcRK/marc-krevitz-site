export interface Testimonial {
	quote: string;
	source: string;
}

// TODO(Marc): replace with real Facebook Marketplace review quotes.
// Keep it to a handful — this is a sampling, not a full dump.
export const furnitureTestimonials: Testimonial[] = [
	{
		quote: "[Paste a short review quote from a Marketplace buyer here.]",
		source: "Marketplace buyer",
	},
];

// TODO(Marc): replace with real client testimonials from chess students.
export const chessTestimonials: Testimonial[] = [
	{
		quote: "[Paste a short testimonial from a chess student here.]",
		source: "Chess student",
	},
];
