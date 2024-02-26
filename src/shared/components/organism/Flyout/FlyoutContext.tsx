import {createContext, MutableRefObject} from 'react';
import {View} from 'react-native';

export interface IPosition {
  top: number;
  left: number;
}

export interface FlyoutContextProps {
  itemPosition?: IPosition;
  setItemPosition: React.Dispatch<React.SetStateAction<IPosition | undefined>>;
  handlePress: (triggerView: MutableRefObject<View | null>) => void;
}

export const FlyoutContext = createContext<FlyoutContextProps>({
  setItemPosition: () => {},
  handlePress: () => {},
});

export const FlyoutProvider = FlyoutContext.Provider;
