import React, { FC, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useAvailableMT5Accounts } from '@deriv/api';
import { WalletText } from '../../../../components/Base/WalletText';
import { useModal } from '../../../../components/ModalProvider';
import { THooks } from '../../../../types';
import { useDynamicLeverageModalState } from '../../components/DynamicLeverageContext';
import { MarketTypeDetails } from '../../constants';
import { JurisdictionCard } from './JurisdictionCard';
import { JurisdictionFootNoteTitle } from './JurisdictionFootNoteTitle';
import './JurisdictionScreen.scss';

type TJurisdictionScreenProps = {
    isCheckBoxChecked: boolean;
    selectedJurisdiction: THooks.AvailableMT5Accounts['shortcode'];
    setIsCheckBoxChecked: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedJurisdiction: React.Dispatch<React.SetStateAction<string>>;
};

const JurisdictionScreen: FC<TJurisdictionScreenProps> = ({
    isCheckBoxChecked,
    selectedJurisdiction,
    setIsCheckBoxChecked,
    setSelectedJurisdiction,
}) => {
    const { getModalState } = useModal();
    const { data, isLoading } = useAvailableMT5Accounts();
    const marketType = getModalState('marketType') as keyof typeof MarketTypeDetails;
    const { isDynamicLeverageVisible } = useDynamicLeverageModalState();
    const jurisdictions = useMemo(
        () => data?.filter(account => account.market_type === marketType).map(account => account.shortcode) || [],
        [data, marketType]
    );

    useEffect(() => {
        setIsCheckBoxChecked(false);
    }, [selectedJurisdiction, setIsCheckBoxChecked]);

    if (isLoading) return <WalletText>Loading...</WalletText>;

    return (
        <div
            className={classNames('wallets-jurisdiction-screen', {
                'wallets-jurisdiction-screen--flip': isDynamicLeverageVisible,
            })}
        >
            <div className='wallets-jurisdiction-screen__cards'>
                {jurisdictions.map(jurisdiction => (
                    <JurisdictionCard
                        isSelected={selectedJurisdiction === jurisdiction}
                        jurisdiction={jurisdiction || 'bvi'}
                        key={jurisdiction}
                        onSelect={clickedJurisdiction => {
                            if (clickedJurisdiction === selectedJurisdiction) {
                                setSelectedJurisdiction('');
                            } else {
                                setSelectedJurisdiction(clickedJurisdiction);
                            }
                        }}
                        tag='Straight-through processing'
                    />
                ))}
            </div>

            <div className='wallets-jurisdiction-screen__tnc'>
                {selectedJurisdiction && (
                    <JurisdictionFootNoteTitle marketType={marketType} selectedJurisdiction={selectedJurisdiction} />
                )}
                {selectedJurisdiction && selectedJurisdiction !== 'svg' && (
                    <div className='wallets-jurisdiction-screen__tnc-checkbox'>
                        <input
                            checked={isCheckBoxChecked}
                            className='wallets-jurisdiction-screen__tnc-checkbox-input'
                            id='tnc-checkbox'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setIsCheckBoxChecked(event.target.checked)
                            }
                            type='checkbox'
                        />
                        <label className='wallets-jurisdiction-screen__tnc-checkbox-label' htmlFor='tnc-checkbox'>
                            <WalletText>I confirm and accept Deriv (V) Ltd&lsquo;s Terms and Conditions</WalletText>
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JurisdictionScreen;
