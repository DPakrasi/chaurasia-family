import React, {MutableRefObject, PropsWithChildren, useState} from 'react';
import {View} from 'react-native';
import {FlyoutContextProps, FlyoutProvider, IPosition} from './FlyoutContext';

export const Flyout: React.FC<PropsWithChildren> = ({children}) => {
  const [itemPosition, setItemPosition] = useState<IPosition>();

  const handlePress = (view: MutableRefObject<View | null>) => {
    const triggerView = view?.current;
    if (triggerView) {
      triggerView.measure((x: number, y: number) => {
        setItemPosition(
          itemPosition
            ? undefined
            : {
                top: y + 25,
                left: x - 45,
              },
        );
      });
    }
  };

  const contextValue: FlyoutContextProps = {
    itemPosition,
    setItemPosition,
    handlePress,
  };

  return <FlyoutProvider value={contextValue}>{children}</FlyoutProvider>;
};
