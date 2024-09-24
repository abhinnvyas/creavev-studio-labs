import { Roboto } from "@next/font/google";

/*
  In CSS, font weights are defined by numeric values:
  100: Thin
  200: Extra Light (Ultra Light)
  300: Light
  400: Normal (Regular)
  500: Medium
  600: Semi Bold (Demi Bold)
  700: Bold
  800: Extra Bold (Ultra Bold)
  900: Black (Heavy)
*/

// Rooboto is the Default font for the project
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // 300 = Light, 400 = Regular, 700 = Bold
  variable: "--font-roboto",
});
