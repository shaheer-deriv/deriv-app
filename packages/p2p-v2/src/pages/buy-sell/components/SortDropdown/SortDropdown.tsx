import React from 'react';
import { TSortByValues } from '@/utils';
import { LabelPairedChevronDownMdRegularIcon } from '@deriv/quill-icons';
import { Button, Dropdown, useDevice } from '@deriv-com/ui';
import SortIcon from '../../../../public/ic-cashier-sort.svg';

type TSortDropdownProps = {
    list: readonly { text: string; value: string }[];
    onSelect: (value: TSortByValues) => void;
    setIsFilterModalOpen: (value: boolean) => void;
    value: TSortByValues;
};

const SortDropdown = ({ list, onSelect, setIsFilterModalOpen, value }: TSortDropdownProps) => {
    const { isMobile } = useDevice();

    if (isMobile) {
        return (
            <Button
                className='w-[3.2rem]'
                icon={<SortIcon className='absolute' data-testid='dt_p2p_v2_sort_dropdown_button' />}
                onClick={() => setIsFilterModalOpen(true)}
                variant='outlined'
            />
        );
    }

    return (
        <Dropdown
            dropdownIcon={<LabelPairedChevronDownMdRegularIcon />}
            label='Sort by'
            list={list}
            name='Sort by'
            onSelect={(value: string) => onSelect(value as TSortByValues)}
            value={value}
        />
    );
};

export default SortDropdown;
