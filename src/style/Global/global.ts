import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
	--color-gray-50: #f8fafc;
	--color-gray-100: #f1f5f9;
	--color-gray-200: #e2e8f0;
	--color-gray-300: #cbd5e1;
	--color-gray-400: #94a3b8;
	--color-gray-500: #64748b;
	--color-gray-600: #475569;
	--color-gray-700: #334155;
	--color-gray-800: #1e293b;
	--color-gray-900: #0f172a;
	--color-green-100: #04d361;
	--color-green-200: #1b873f;
	--color-purple-100: #996dff;
	--color-purple-200: #7c3aed;
	--color-white: #ffffff;
	--color-orange: #fba94c;

	font-size: 62.5%;
	font-family: 'Titillium Web', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
	font-size: 1.6rem;
	background-color: var(--color-gray-50);
}


`