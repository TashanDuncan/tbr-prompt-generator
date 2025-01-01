export const colours = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Pink",
] as const;

export type Colour = (typeof colours)[number];

export const isColour = (item: string): item is Colour => {
  return colours.includes(item as Colour);
};

export const getTextColorClass = (colour: Colour) => {
  switch (colour) {
    case "Red":
      return "text-red-500";
    case "Blue":
      return "text-blue-500";
    case "Green":
      return "text-green-500";
    case "Orange":
      return "text-orange-500";
    case "Yellow":
      return "text-yellow-500";
    case "Purple":
      return "text-purple-500";
    case "Pink":
      return "text-pink-500";
    default:
      return "text-pink-400";
  }
};

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const genres = [
  "Fantasy",
  "Mystery",
  "Thriller",
  "Romance",
  "Historical Fiction",
  "Contemporary",
  "Adventure",
  "Graphic Novel",
  "Young Adult",
] as const;
