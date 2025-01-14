import classNames from 'classnames';
import React from 'react';
import { Text } from '@deriv/components';
import IconTradeCategory from 'Assets/Trading/Categories/icon-trade-categories';
import { TContractType } from './types';

type TItem = {
    contract_types: TContractType[];
    handleSelect?: (clicked_item: TContractType, e: React.MouseEvent<HTMLDivElement>) => void;
    value?: string;
};

const Item = ({ contract_types, handleSelect, value }: TItem) => (
    <React.Fragment>
        {contract_types.map(type => (
            <div
                id={`dt_contract_${type.value}_item`}
                data-testid='dt_contract_item'
                key={type.value}
                className={classNames('contract-type-item', {
                    'contract-type-item--selected': value === type.value || value?.includes(type.value),
                })}
                onClick={e => handleSelect?.(type, e)}
            >
                <IconTradeCategory category={type.value} className='contract-type-item__icon-wrapper' />
                <Text size='xs' className='contract-type-item__title'>
                    {type.text}
                </Text>
            </div>
        ))}
    </React.Fragment>
);

export default Item;
