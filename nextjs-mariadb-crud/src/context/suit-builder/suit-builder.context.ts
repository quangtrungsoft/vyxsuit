import { Buttontype, Fabric, LiningType, SuitStyle, SuitType, TrouserType } from '@/models/product.model';
import { createContext } from 'react';

// Define the type for the context value
export interface SuitBuilderContextType {
  suitType: SuitType;
  selectSuitType: (option: SuitType) => void;
  trouser: TrouserType;
  selectTrouser: (option: TrouserType) => void;
  suitStyle: SuitStyle;
  selectSuitStyle: (option: SuitStyle) => void;
  fabric: Fabric;
  selectFabric: (option: Fabric) => void;
  lining: LiningType,
  selectLining: (option: LiningType) => void;
  button: Buttontype,
  selectButton: (option: Buttontype) => void;
  clear: () => void;
}

export const suitBuilderContextDefaultValue: SuitBuilderContextType = {
  suitType: '',
  selectSuitType: () => {},
  trouser: '',
  selectTrouser: () => {},
  suitStyle: '',
  selectSuitStyle: () => {},
  fabric: '',
  selectFabric: () => {},
  lining: '',
  selectLining: () => {},
  button: '',
  selectButton: () => {},
  clear: () => {},
};

// Create a context with a default value (null)
export const SuitBuilderContext = createContext<SuitBuilderContextType>(suitBuilderContextDefaultValue);
