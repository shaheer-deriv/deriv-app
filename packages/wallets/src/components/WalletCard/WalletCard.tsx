import React from 'react';
import { useBalance } from '@deriv/api';
import { WalletText } from '../Base';
import { WalletCardIcon } from '../WalletCardIcon';
import { WalletGradientBackground } from '../WalletGradientBackground';
import { WalletListCardBadge } from '../WalletListCardBadge';
import './WalletCard.scss';

type TProps = {
    balance: string;
    currency: string;
    isDemo?: boolean;
    landingCompanyName?: string;
    width?: React.CSSProperties['width'];
};

const WalletCard: React.FC<TProps> = ({ balance, currency, isDemo, landingCompanyName, width }) => {
    const { isLoading } = useBalance();

    return (
        <div className='wallets-card'>
            <WalletGradientBackground
                currency={isDemo ? 'Demo' : currency}
                device='mobile'
                hasShine
                isDemo={isDemo}
                type='card'
            >
                <div className='wallets-card__details' style={{ width }}>
                    <div className='wallets-card__details__top'>
                        <WalletCardIcon type={isDemo ? 'Demo' : currency} />
                        <div className='wallets-card__details-landing_company'>
                            {landingCompanyName && <WalletListCardBadge isDemo={isDemo} label={landingCompanyName} />}
                        </div>
                    </div>
                    <div className='wallets-card__details__bottom'>
                        <WalletText color={isDemo ? 'white' : 'black'} size='2xs'>
                            {currency} Wallet
                        </WalletText>
                        {isLoading ? (
                            <div className='wallets-skeleton wallets-card--balance-loader' />
                        ) : (
                            <WalletText color={isDemo ? 'white' : 'black'} size='sm' weight='bold'>
                                {balance}
                            </WalletText>
                        )}
                    </div>
                </div>
            </WalletGradientBackground>
        </div>
    );
};

export default WalletCard;
