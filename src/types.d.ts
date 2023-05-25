declare type Slide = {
	title?: string;
	url: string;
	description?: string;
	score?: string;
	info?: string;
	seasons?: string;
	number?: string;
}

declare type Film = {
  id: number;
  filmLang: FilmLang[];
  filmDate: string;
  genres: Array<Object>;
  countries: Array<Object>;
  actors: Array<Object>;
};

declare type FilmLang = {
	filmName: string;
	filmTime: string;
}