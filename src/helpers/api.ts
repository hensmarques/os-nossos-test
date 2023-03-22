export interface SymfonyResponse {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:member'?: any[];
  'hydra:totalItems'?: number;
}

export const unwrapper = (response: SymfonyResponse): Object  => {
  return response['hydra:member'] || response 
}

