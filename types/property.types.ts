export interface PropertyDataType {
  media_images: {
    id: number;
    url: string;
  }[];
  main_image_url: string;
  description_image_url?: string;
  amenities: {
    signature_distinctions: string[];
    interior_amenities: string[];
    outdoor_amenities: string[];
  };
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  property_info: {
    bedrooms: number;
    bathrooms: number;
    square_feet: number;
    property_type: string;
    year_built: number;
  };
  pricing: {
    price: number;
    currency: string;
  };
  booking_rate_start: {
    id: number;
    period: string;
    min_stay: string;
    rate: number;
  }[];
  rules_and_etiquette: string[];
  check_in_out_time: {
    check_in: string;
    check_out: string;
    description?: string;
  };
  staff: {
    name: string;
    details: string;
  }[];
  bedrooms_images: {
    image_url: string;
  }[];
  concierge_service: string[];
  security_deposit: string;
  description: string;
}
