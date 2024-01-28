export type BaseMovie = {
  title: string;
  genre: string;
  rating: string;
  link: string;
};

export type Movie = {
  _id: string;
} & BaseMovie;

export type MovieQuery = Partial<BaseMovie>;
