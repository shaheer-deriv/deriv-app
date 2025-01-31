import React from 'react';
import { useDevice } from '@/hooks';
import { LabelPairedXmarkLgBoldIcon } from '@deriv/quill-icons';
import { Text } from '@deriv-com/ui';
import './CloseHeader.scss';

const CloseHeader = () => {
    const { isMobile } = useDevice();

    return (
        <div className='p2p-v2-close-header'>
            <Text size={isMobile ? 'md' : 'xl'} weight='bold'>
                {isMobile ? 'Deriv P2P' : 'Cashier'}
            </Text>
            <LabelPairedXmarkLgBoldIcon className='p2p-v2-close-header--icon' onClick={() => window.history.back()} />
        </div>
    );
};

export default CloseHeader;
