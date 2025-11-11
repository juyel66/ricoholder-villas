export interface Tourist {
  _id: string;
  title: string;
  description: string;
  image: string;
}

export interface TouristState {
  tourists: Tourist[];
  loading: boolean;
  error: string | null;
}

export interface RootState {
  tourist: TouristState;
}
